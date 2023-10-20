package com.zoomlion.hjsrm.workflows.common;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.eos.workflow.data.WFActivityDefine;
import com.eos.workflow.omservice.WFParticipant;
import com.primeton.workflow.api.WFServiceException;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.frame.workflows.service.BPSServiceManagerImpl;
import com.zoomlion.hjsrm.pub.busi.Business.TBsApplyinfo;
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusibusirec;
import com.zoomlion.hjsrm.pub.busi.Business.TBsReservationiteminfo;
import com.zoomlion.hjsrm.pub.busi.Business.TBsWorklistinfo;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusibusirecImpl;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsReservationiteminfoImpl;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsWorklistinfoImpl;
import com.zoomlion.hjsrm.pub.businessclib.busi.common.BusiBpsCommon;
import com.zoomlion.hjsrm.pub.businessclib.busi.common.MsgEntity;
import com.zoomlion.hjsrm.pub.common.BusiGlobal;
import com.zoomlion.hjsrm.pub.common.Globals;
import commonj.sdo.DataObject;

/**
 * 
 * <pre>
 *                                     Title: 我的工作-公共业务
 *                                     Description:查询业务类别(流程定义)、当前活动定义(流程环节)
 * </pre>
 * 
 * @author 蔡慧文
 * @version 1.0
 * 
 */
/*
 * =======================修改历史==============================
 * 
 * 
 */
public class WorkinCommonBean {

	private BusiBpsCommon busiBpsCommon;

	private WorkinCommonDao workinCommonDao;

	public void setWorkinCommonDao(WorkinCommonDao workinCommonDao) {
		this.workinCommonDao = workinCommonDao;
	}

	/**
	 * 查询所有业务流程定义
	 * 
	 * @return 业务流程定义集合
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public DataObject[] queryAllBizProcess() throws BusinessException {
		DataObject[] data = null;
		try {
			data = this.workinCommonDao.queryAllBizProcess();
		} catch (Exception e) {
			SrmLog.error("查询业务流程实例异常!", e);
			throw new BusinessException("查询业务流程实例异常!", e.getMessage());
		}
		return data;
	}

	/**
	 * 根据业务流程ID,查询流程环节集合
	 * 
	 * @param processDefID
	 *            业务流程ID
	 * @return 流程环节集合
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public List<WFActivityDefine> queryActivitiesOfProcess(long processDefID)
			throws BusinessException {
		List<WFActivityDefine> activityDefList = null;
		if (processDefID != 0) {
			try {
				activityDefList = BPSServiceManagerImpl
						.queryActivitiesOfProcess(processDefID);
				// 过滤开始、结束环节
				activityDefList.remove(0);
				activityDefList.remove(0);
			} catch (Exception e) {
				SrmLog.error("查询流程环节集合异常!", e);
				throw new BusinessException("查询流程环节集合异常!", e.getMessage());
			}
		}
		return activityDefList;
	}

	/**
	 * 签收-待领取的工作项
	 * 
	 * @param workItemID
	 *            工单id
	 * @param personID
	 *            领取人id,如空则为当前用户领取
	 * @return 1-成功, 0-失败 participant-代办人
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	@SuppressWarnings("unchecked")
	public HashMap acceptWorkItem(long[] workItemID, String personID)
			throws BusinessException {
		HashMap data = null;
		String userId = null;

		if (personID == null || "".equals(personID)) {
			try {
				userId = Common.getCurrentUserId();
			} catch (Exception e) {
				SrmLog.error("查询当前用户信息异常!", e);
				throw new BusinessException("查询当前用户信息异常!", e.getMessage());
			}
		} else {
			userId = personID;
		}
		try {
			String finaParticipant = "";
			for (int i = 0; i < workItemID.length; i++) {
				HashMap subData = (HashMap) BPSServiceManagerImpl
						.acceptWorkItem(workItemID[i], userId);
				if (subData.containsKey("result")) {
					String result = subData.get("result").toString();
					if ("0".equals(result)) {
						// 领取失败-已被领取
						if (!"".equals(finaParticipant)) {
							finaParticipant += ",";
						}
						finaParticipant += subData.get("participant");
					}
				}
			}
			// 返回操作结果
			data = new HashMap();
			if ("".equals(finaParticipant)) {
				data.put("result", 1);
			} else {
				data.put("result", 0);
				data.put("participant", finaParticipant);
			}
		} catch (Exception e) {
			SrmLog.error("工作单签收异常!", e);
			throw new BusinessException("工作单签收异常!", e.getMessage());
		}
		return data;
	}

	/**
	 * 撤销签收-已领取的工作项
	 * 
	 * @param workItemID
	 *            工单id
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public void withdrawWorkItem(long[] workItemID) throws BusinessException {
		try {
			for (int i = 0; i < workItemID.length; i++) {
				BPSServiceManagerImpl.withdrawWorkItem(workItemID[i]);
			}
		} catch (Exception e) {
			SrmLog.error("撤销签收工作单异常!", e);
			throw new BusinessException("撤销签收工作单异常!", e.getMessage());
		}
	}

	/**
	 * 转派-工作项改派给多个参与者
	 * 
	 * @param workItemID
	 *            工作项ID
	 * @param participantArr
	 *            参与者（改派到的参与者）
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public void reassignWorkItemEx(long[] workItemID,
			WFParticipant[] participantArr) throws BusinessException {
		try {
			for (int i = 0; i < workItemID.length; i++) {
				BPSServiceManagerImpl.reassignWorkItemEx(workItemID[i],
						participantArr);
			}
		} catch (Exception e) {
			SrmLog.error("转派工作单异常!", e);
			throw new BusinessException("转派工作单异常!", e.getMessage());
		}
	}

	/**
	 * 
	 * 方法描述： 批量注销流程, 校验流程能否终止
	 * 
	 * @param flows
	 *            相关数据(long processInstID,String busitype,String
	 *            worklistinfopkid,String userid)
	 * @return 结果消息
	 * @throws BusinessException
	 *             MsgEntity
	 */
	public MsgEntity stopProcessInstBatchWithCheck(DataObject[] entities)
			throws BusinessException {
		TBsReservationiteminfo reser = null;
		TBsReservationiteminfo[] datas = null;
		MsgEntity retData = new MsgEntity();
		MsgEntity data;
		try {
			// 循环校验是否存在不能终止的流程，如存在则统一不处理
			for (DataObject entity : entities) {
				data = busiBpsCommon.beforeCanceled(entity
						.getString("busitype"), entity
						.getString("worklistinfopkid"), entity
						.getString("userid"));
				if (!data.isPassed()) {
					return data;
				}
			}
			// 批量注销流程工单
			TBsWorklistinfo[] worklists = new TBsWorklistinfoImpl[entities.length];
			for (int i = 0; i < entities.length; i++) {
				
				// 调用API注销流程
				BPSServiceManagerImpl.terminateProcessInstance(entities[i]
						.getLong("processinstid"));
				// 调用流程注销后处理统一入口
				busiBpsCommon.doAfterCanceled(
						entities[i].getString("busitype"), entities[i]
								.getString("worklistinfopkid"), entities[i]
								.getString("userid"));
				// 记录注销原因
				worklists[i]=new TBsWorklistinfoImpl();
				worklists[i].setPkid(entities[i].getString("worklistinfopkid"));
				worklists[i].setCancelcause(entities[i]
						.getString("cancelcause"));
				worklists[i].setCancelremark(entities[i]
						.getString("cancelremark"));
				//取消预约
				reser = new TBsReservationiteminfoImpl();
				reser.setApplyinfopkid(entities[i].getString("applyinfopkid"));
				reser.setState(Globals.FLAG_ACTIVE);
				reser.setDelflag(Globals.DELFLAG_NODELETE);
				datas = this.workinCommonDao
								.queryEntitiesByTemplate(TBsReservationiteminfo.class, reser);
				if(datas.length > 0){
					datas[0].setDelflag(Globals.DELFLAG_DELETE);
					datas[0].setState(Globals.FLAG_INACTIVE);
					this.workinCommonDao.updateEntity(datas[0]);
				}
			}
			this.workinCommonDao.updateEntityBatch(worklists);
			this.doUpdateApplyState(entities);
			retData.setPassed(true);
			return retData;
		} catch (Exception e) {
			SrmLog.error("注销工作单异常!", e);
			throw new BusinessException("注销工作单异常!", e.getMessage());
		}
	}

	/**
	 * 
	 * 方法描述：批量终止流程，不校验流程能否终止
	 * 
	 * @param processInstIds
	 * @throws WFServiceException
	 *             void
	 */
	public void stopProcessBatchWithoutCheck(DataObject[] entities)
			throws WFServiceException, BusinessException {
		TBsWorklistinfo[] worklists = new TBsWorklistinfoImpl[entities.length];
		for (int i = 0; i < entities.length; i++) {
			// 结束流程
			BPSServiceManagerImpl.terminateProcessInstance(entities[i]
					.getLong("processinstid"));
			// 记录注销原因
			worklists[i]=new TBsWorklistinfoImpl();
			worklists[i].setPkid(entities[i].getString("processinstid"));
			worklists[i].setCancelcause(entities[i].getString("cancelcause"));
			worklists[i].setCancelremark(entities[i].getString("cancelremark"));
		}
		this.workinCommonDao.updateEntityBatch(worklists);
		this.doUpdateApplyState(entities);
	}

	/**
	 * 
	 * 方法描述：注销流程 ,校验流程能否终止
	 * 
	 * @param processInstID
	 *            流程实例ID
	 * @param busitype
	 *            业务类型
	 * @param worklistinfopkid
	 *            工单pkid
	 * @param userid
	 *            用户号
	 * @return
	 * @throws WFServiceException
	 * @throws BusinessException
	 *             MsgEntity
	 */
	public MsgEntity stopProcessByIdWithCheck(DataObject entity)
			throws WFServiceException, BusinessException {
		// 注销前校验
		MsgEntity msg = busiBpsCommon.beforeCanceled(entity
				.getString("busitype"), entity.getString("worklistinfopkid"),
				entity.getString("userid"));
		if (msg.isPassed()) {// 校验通过
			// 调用API注销流程
			BPSServiceManagerImpl.terminateProcessInstance(entity
					.getLong("processinstid"));
			// 调用流程注销后处理统一入口
			busiBpsCommon.doAfterCanceled(entity.getString("busitype"), entity
					.getString("worklistinfopkid"), entity.getString("userid"));
			// 记录注销原因
			TBsWorklistinfo workEntity = new TBsWorklistinfoImpl();
			workEntity.setPkid(entity.getString("worklistinfopkid"));
			workEntity.setCancelcause(entity.getString("cancelcause"));
			workEntity.setCancelremark(entity.getString("cancelremark"));
			this.workinCommonDao.updateEntity(workEntity);
			this.doUpdateApplyState(new DataObject[] { entity });
			//取消预约
			TBsReservationiteminfo reser = new TBsReservationiteminfoImpl();
			reser.setApplyinfopkid(entity.getString("applyinfopkid"));
			reser.setState(Globals.FLAG_ACTIVE);
			reser.setDelflag(Globals.DELFLAG_NODELETE);
			TBsReservationiteminfo[] data = this.workinCommonDao
							.queryEntitiesByTemplate(TBsReservationiteminfo.class, reser);
			if(data.length > 0){
				data[0].setDelflag(Globals.DELFLAG_DELETE);
				data[0].setState(Globals.FLAG_INACTIVE);
				this.workinCommonDao.updateEntity(data[0]);
			}
		}
		return msg;
	}

	/**
	 * 
	 * @param entitys
	 */
	private void doUpdateApplyState(DataObject[] entities)
			throws BusinessException {
		TBsApplyinfo[] applyEntitys = new TBsApplyinfoImpl[entities.length];
		for (int i = 0; i < entities.length; i++) {
			applyEntitys[i] = new TBsApplyinfoImpl();
			applyEntitys[i].setPkid(entities[i].getString("applyinfopkid"));
			applyEntitys[i].setState(BusiGlobal.TBSAPPLYINFO_STATE_CLOSED);
		}
		this.workinCommonDao.updateEntityBatch(applyEntitys);
	}

	/**
	 * 撤销注销工作单
	 * 
	 * @param processInstID
	 *            流程实例id
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public void resumeProcessInstance(long[] processInstID)
			throws BusinessException {
		try {
			for (int i = 0; i < processInstID.length; i++) {
				BPSServiceManagerImpl.resumeProcessInstance(processInstID[i]);
			}
		} catch (Exception e) {
			SrmLog.error("撤销注销工作单异常!", e);
			throw new BusinessException("撤销注销工作单异常!", e.getMessage());
		}
	}

	/**
	 * 挂起工作单-挂起工作项
	 * 
	 * @param activityInstID
	 *            活动实例id
	 * @param busiPkID
	 *            业务记录主键
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public void suspendActivityInstance(long[] activityInstID, String[] busiPkID)
			throws BusinessException {
		try {
			for (int i = 0; i < activityInstID.length; i++) {
				BPSServiceManagerImpl
						.suspendActivityInstance(activityInstID[i]);
				TBsBusibusirec busirec = new TBsBusibusirecImpl();
				busirec.setPkid(busiPkID[i]);
				busirec.setState(BusiGlobal.TBSBUSIBUSIREC_STATE_SUSPENDED);
				this.workinCommonDao.updateEntity(busirec);
			}
		} catch (WFServiceException e) {
			SrmLog.error("挂起工作单异常!", e);
			throw new BusinessException("挂起工作单异常!", e.getMessage());
		}
	}

	/**
	 * 解挂工作单-恢复工作项
	 * 
	 * @param activityInstID
	 *            活动实例id
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public void resumeActivityInstance(long[] activityInstID, String[] busiPkID)
			throws BusinessException {
		try {
			for (int i = 0; i < activityInstID.length; i++) {
				BPSServiceManagerImpl.resumeActivityInstance(activityInstID[i]);
				TBsBusibusirec busirec = new TBsBusibusirecImpl();
				busirec.setPkid(busiPkID[i]);
				busirec.setState(BusiGlobal.TBSBUSIBUSIREC_STATE_NOTFINISHED);
				this.workinCommonDao.updateEntity(busirec);
			}
		} catch (WFServiceException e) {
			SrmLog.error("解挂工作单异常!", e);
			throw new BusinessException("解挂工作单异常!", e.getMessage());
		}
	}

	/**
	 * 根据部门id,分页查询操作员
	 * 
	 * @param dataOrgId
	 *            部门id
	 * @return
	 * @author 蔡慧文
	 * @throws Exception
	 */
	public DataObject[] queryOperatorByDataOrgIdWithPage(
			Map<String, String> condition, PageCond pageCond) throws Exception {
		DataObject[] data = null;
		condition.put("dataorgid", Common.getCurrentUserDataOrgId());
		try {
			data = this.workinCommonDao.queryOperatorByDataOrgIdWithPage(
					condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询操作员异常!", e);
			throw new BusinessException("查询操作员异常!", e.getMessage());
		}
		return data;
	}

	/**
	 * 
	 * 方法描述：查询诉求补话信息
	 * 
	 * @param applyinfopkid
	 * @param pageCond
	 * @return DataObject[]
	 * @throws Exception
	 */
	public DataObject[] queryApplyComplement(String applyinfopkid,
			PageCond pageCond) throws Exception {
		Map<String, String> cond = new HashMap<String, String>();
		cond.put("applyinfopkid", applyinfopkid);
		cond.put("dataorgid", Common.getCurrentUserDataOrgId());
		return this.workinCommonDao.queryComplementByApply(cond, pageCond);
	}

	public void setBusiBpsCommon(BusiBpsCommon busiBpsCommon) {
		this.busiBpsCommon = busiBpsCommon;
	}

}
