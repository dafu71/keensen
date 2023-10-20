package com.zoomlion.hjsrm.pub.businessclib.busi.common;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.spring.BeanFactory;
import com.eos.workflow.data.WFWorkItem;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmOrganization;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmOrganizationImpl;
import com.zoomlion.hjsrm.pub.busi.Business.TBsApplyinfo;
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusibusirec;
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusirule;
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusistepdefine;
import com.zoomlion.hjsrm.pub.busi.Business.TBsFireinfo;
import com.zoomlion.hjsrm.pub.busi.Business.TBsParticipantrule;
import com.zoomlion.hjsrm.pub.busi.Business.TBsProcessdefine;
import com.zoomlion.hjsrm.pub.busi.Business.TBsWorklistinfo;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusibusirecImpl;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsWorklistinfoImpl;
import com.zoomlion.hjsrm.pub.common.BusiGlobal;
import com.zoomlion.hjsrm.pub.common.DemandGlobal;
import com.zoomlion.hjsrm.pub.common.Globals;
import com.zoomlion.hjsrm.pub.common.InstallGlobal;
import commonj.sdo.DataObject;

/**
 * <pre>
 *  Title: 业务流程定义Bean
 *  Description: 业务与对应业务流程关联处理的类
 * </pre>
 * 
 * @author 陈今伟
 * @version 1.0
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 * 
 */

public class BusiBpsDefineBean extends BaseBean {

	private BusiBpsDefineDao busiBpsDefineDao;

	/**
	 * 方法描述: 根据业务类型获取对应的流程定义信息
	 * @author 陈今伟
	 * @param BusiType 业务类型
	 * @param dataorgid 数据归属
	 * @return
	 * @throws BusinessException 描述******
	 * @return DataObject 流程定义相关信息
	 */
	@SuppressWarnings("unchecked")
	public TBsProcessdefine getBpsDefineByBusiType(String busitype, String dataorgid) throws BusinessException {
		try {
			/**	//流程触发事件、获取参与者方法调用后无法获取session，故传入数据归属
			Map condition = new HashMap();
			// 读取系统对业务流程的配置等级：1：配置到任何机构(此时机构能使用本机构配置or全局通用的配置)，0：只配置到分公司(此时机构能使用分公司配置or全局通用的配置)
			String configGrade = BusiBpsCommon.getConfigValue("BS_BPSCONFIGGRADE");
			if (configGrade.equals(BusiBpsCommon.DefineConfigGrade)) {
				condition.put("orgcode", BusiBpsCommon.getCurrentUserOrgCode());
			} else {
				condition.put("dataorgid", BusiBpsCommon.getCurrentUserDataOrgId());
			}
			condition.put("busitype", busitype);
			condition.put("state", Globals.FLAG_ACTIVE);
			condition.put("delflag", Globals.DELFLAG_NODELETE);
			// 1.判断该业务类型是否存在单独的流程定义配置
			DataObject[] counts = this.busiBpsDefineDao.getBpsDefineCountByBusiType(condition);
			// 2.如果该业务类型不存在单独的配置，则使用全局配置
			if (counts[0].getInt("count") == 0) {
				if (configGrade.equals(BusiBpsCommon.DefineConfigGrade)) {
					condition.put("orgcode", BusiBpsCommon.DefineOrgCode);
				} else {
					condition.put("dataorgid", BusiBpsCommon.DefineDataOrgid);
				}
			}
			// 3.查询该业务类型、该机构下的流程定义信息
			TBsProcessdefine entitys[] = this.busiBpsDefineDao.getBpsDefineByBusiType(condition);
			if (entitys.length == 0) {
				// throw new BusinessException("没有找到业务类型对应的流程定义信息!", "");
				return null;
			} else {
				return entitys[0];
			}
			*/
			Map condition = new HashMap();
			condition.put("busitype", busitype);
			condition.put("state", Globals.FLAG_ACTIVE);
			condition.put("delflag", Globals.DELFLAG_NODELETE);
			condition.put("dataorgid", dataorgid);
			//1.判断该业务类型是否存在单独的流程定义配置
			DataObject[] counts = this.busiBpsDefineDao.getBpsDefineCountByBusiType(condition);
			//2.如果该业务类型不存在单独的配置，则使用全局配置
			if (counts[0].getInt("count") == 0){
				condition.put("dataorgid", BusiBpsCommon.DefineDataOrgid);
			}
			//3.查询该业务类型、该机构下的流程定义信息
			TBsProcessdefine entitys[] = this.busiBpsDefineDao.getBpsDefineByBusiType(condition);
			if (entitys.length == 0) {
				return null;
			} else {
				return entitys[0];
			}
		} catch (Exception e) {
			SrmLog.error("根据业务类型获取对应的流程定义信息失败!", e);
			throw new BusinessException("根据业务类型获取对应的流程定义信息失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据业务类型、业务环节定义ID获取该环节的定义信息
	 * @author 陈今伟
	 * @param busitype  业务类型
	 * @param activitydefid 业务环节定义ID
	 * @param dataorgid 数据归属
	 * @return
	 * @throws BusinessException 描述******
	 * @return TBsBusistepdefine 业务环节定义信息
	 */
	@SuppressWarnings("unchecked")
	public TBsBusistepdefine getActivityConfigByBusiType(String busitype, String activitydefid, String dataorgid) throws BusinessException {
		try {
			/**	//流程触发事件、获取参与者方法调用后无法获取session，故传入数据归属
			Map condition = new HashMap();
			// 1.得到业务类型对应的流程定义
			TBsProcessdefine bpsDefine = this.getBpsDefineByBusiType(busitype);
			if (bpsDefine != null) {
				condition.put("processdefinepkid", bpsDefine.getPkid());
				// 读取系统对业务流程的配置等级：1：配置到任何机构(此时机构能使用本机构配置or全局通用的配置)，0：只配置到分公司(此时机构能使用分公司配置or全局通用的配置)
				String configGrade = BusiBpsCommon.getConfigValue("BS_BPSCONFIGGRADE");
				if (configGrade.equals(BusiBpsCommon.DefineConfigGrade)) {
					condition.put("orgcode", BusiBpsCommon.getCurrentUserOrgCode());
				} else {
					condition.put("dataorgid", BusiBpsCommon.getCurrentUserDataOrgId());
				}
				condition.put("activitydefid", activitydefid);
				condition.put("state", Globals.FLAG_ACTIVE);
				condition.put("delflag", Globals.DELFLAG_NODELETE);
				// 2.判断该业务流程、该业务环节是否存在单独的环节定义
				DataObject[] counts = this.busiBpsDefineDao.getActivityConfigCountByBusiType(condition);
				// 3.如果该业务流程、该业务环节下不存在单独的定义，则使用全局定义
				if (counts[0].getInt("count") == 0) {
					if (configGrade.equals(BusiBpsCommon.DefineConfigGrade)) {
						condition.put("orgcode", BusiBpsCommon.DefineOrgCode);
					} else {
						condition.put("dataorgid", BusiBpsCommon.DefineDataOrgid);
					}
				}
				// 4.获取该环节的定义信息
				TBsBusistepdefine[] activityConfig = this.busiBpsDefineDao.getActivityConfigByBusiType(condition);
				if (activityConfig.length == 0) {
					// throw new BusinessException("没有找到该业务环节的配置信息!", "");
					return null;
				} else {
					return activityConfig[0];
				}
			} else {
				return null;
			}
			*/
			Map condition = new HashMap();
			// 1.得到业务类型对应的流程定义 
			//（全局流程定义对应全局环节定义，公司级流程定义对应公司级环节定义，不串用）
			TBsProcessdefine bpsDefine = this.getBpsDefineByBusiType(busitype, dataorgid);
			if (bpsDefine != null) {
				condition.put("processdefinepkid", bpsDefine.getPkid());
				condition.put("activitydefid", activitydefid);
				condition.put("state", Globals.FLAG_ACTIVE);
				condition.put("delflag", Globals.DELFLAG_NODELETE);
				condition.put("dataorgid", bpsDefine.getDataorgid());
				// 4.获取该环节的定义信息
				TBsBusistepdefine[] activityConfig = this.busiBpsDefineDao.getActivityConfigByBusiType(condition);
				if (activityConfig.length == 0) {
					return null;
				} else {
					return activityConfig[0];
				}
			} else {
				return null;
			}
		} catch (Exception e) {
			SrmLog.error("获取业务环节的配置信息失败!", e);
			throw new BusinessException("获取业务环节的配置信息失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据业务类型、业务环节定义Id获取环节的业务资源配置信息
	 * @author 陈今伟
	 * @param busitype
	 * @param activitydefid
	 * @param dataorgid 数据归属
	 * @return
	 * @throws BusinessException 描述******
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getActivityTabsBusiType(String busitype, String activitydefid, String dataorgid) throws BusinessException {
		Map condition = new HashMap();
		condition.put("state", Globals.FLAG_ACTIVE);
		condition.put("delflag", Globals.DELFLAG_NODELETE);
		// 1. 得到该环节的环节定义信息
		TBsBusistepdefine activityConfig = this.getActivityConfigByBusiType(busitype, activitydefid, dataorgid);
		DataObject[] tabls = null;
		if (activityConfig != null) {
			// 2. 传入业务环节定义主键
			condition.put("busistepdefinepkid", activityConfig.getPkid());
			condition.put("dataorgid", activityConfig.getDataorgid());
			// 3. 查询环节的页面资源配置信息
			tabls = this.busiBpsDefineDao.getActivityTabsBusiType(condition);
		}
		return tabls;
	}

	/**
	 * 方法描述:	将诉求实体展开	
	 * @author 陈今伟
	 * @param applyInfoPkId	诉求PKID
	 * @return
	 * @throws BusinessException 描述******
	 * @return TBsApplyinfo
	 */
	public TBsApplyinfo expandApplyinfo(String applyInfoPkId) throws BusinessException{
		TBsApplyinfo entity = new TBsApplyinfoImpl();
		entity.setPkid(applyInfoPkId);
		this.busiBpsDefineDao.expandEntity(entity);
		return entity;
	}
	
	/**
	 * 方法描述: 根据业务类型、业务环节定义ID获取该环节的校验规则信息
	 * @author 陈今伟
	 * @param busitype 业务类型
	 * @param activitydefid 业务环节定义Id
	 * @param dealtype 业务处理类型(传递、注销、启动)
	 * @param dataorgid 数据归属
	 * @return
	 * @throws BusinessException 描述******
	 * @return TBsBusirule[]
	 */
	@SuppressWarnings("unchecked")
	public TBsBusirule[] getBusinessRuleByBusiType(String busitype, String activitydefid, String dealtype, String dataorgid) throws BusinessException {
		Map condition = new HashMap();
		condition.put("dealtype", dealtype);
		condition.put("state", Globals.FLAG_ACTIVE);
		condition.put("delflag", Globals.DELFLAG_NODELETE);
		// 1. 得到该环节的环节定义信息
		TBsBusistepdefine activityConfig = this.getActivityConfigByBusiType(busitype, activitydefid, dataorgid);
		// 2. 传入业务环节定义主键
		condition.put("busistepdefinepkid", activityConfig.getPkid());
		condition.put("dataorgid", activityConfig.getDataorgid());
		// 3. 查询业务规则
		TBsBusirule[] busiRule = this.busiBpsDefineDao.getBusinessRuleByBusiType(condition);
		return busiRule;
	}

	/**
	 * 方法描述: 根据业务类型、活动定义Id获取业务环节配置的参与者规则
	 * @author 陈今伟
	 * @param busitype 业务类型
	 * @param activitydefid 活动定义Id
	 * @param dataorgid 数据归属
	 * @return
	 * @throws BusinessException 描述******
	 * @return TBsParticipantrule[] 参与者规则数组
	 */
	@SuppressWarnings("unchecked")
	public TBsParticipantrule[] getParticipantRuleByBusiType(String busitype, String activitydefid, String dataorgid) throws BusinessException {
		Map condition = new HashMap();
		condition.put("delflag", Globals.DELFLAG_NODELETE);
		// 1. 得到该环节的环节定义信息
		TBsBusistepdefine activityConfig = this.getActivityConfigByBusiType(busitype, activitydefid, dataorgid);
		// 2. 传入业务环节定义主键
		condition.put("busistepdefinepkid", activityConfig.getPkid());
		condition.put("dataorgid", activityConfig.getDataorgid());
		// 3. 查询参与者规则
		TBsParticipantrule[] participantRule = this.busiBpsDefineDao.getParticipantRuleByBusiType(condition);
		if (participantRule.length == 0) {
			throw new BusinessException("没有找到该业务环节的参与者规则信息!", "");
		} else {
			return participantRule;
		}
	}

	/**
	 * 方法描述:	回填当前工作项业务处理记录的相关信息
	 * @author 陈今伟
	 * @param currentUserOrgId	处理人机构id
	 * @param currentUserId	处理人id
	 * @param busirecPkid	当前业务记录主键pkid
	 * @throws BusinessException 描述******
	 * @return void
	 */
	public void backfillBusiRec(int currentUserOrgId , String currentUserId, String busirecPkid) throws BusinessException{
		try {
			TOmOrganization org = new TOmOrganizationImpl();
			org.setOrgid(currentUserOrgId);
			this.busiBpsDefineDao.expandEntity(org);
			TBsBusibusirec busirec = new TBsBusibusirecImpl();
			busirec.setPkid(busirecPkid);
			// 1.回填当前工作项的完成时间enddate
			busirec.setEnddate(Common.getCurrentTime());
			//	2.回填当前工作项的处理人部门、处理人
			busirec.setDealorgcode(org.getOrgcode());
			busirec.setDealopt(currentUserId);
			busirec.setState(BusiGlobal.TBSBUSIBUSIREC_STATE_FINISHED);
			this.busiBpsDefineDao.updateEntity(busirec);
		} catch (Exception e) {
			throw new BusinessException("系统回填当前工作项记录相关信息失败!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 通用生产工单方法
	 * @author 陈今伟
	 * @param busirecPkid  当前工单主键
	 * @param currentData  数据归属参数集合， key：currentUserDataOrgId currentUserId
	 * @param networkItems  后续工作项集合
	 * @throws BusinessException 描述******
	 * @return void
	 */
	public void commonCreateWorkOrder(String busirecPkid, Map currentData, List<WFWorkItem> networkItems) throws BusinessException {
		try {
			String currentUserDataOrgIdStr = currentData.get("currentUserDataOrgId").toString();
			int currentUserDataOrgId = Integer.parseInt(currentUserDataOrgIdStr);
			String currentUserId = currentData.get("currentUserId").toString();
			int currentUserOrgId = Integer.parseInt(currentData.get("currentUserOrgId").toString());
			TBsBusibusirec busirec = new TBsBusibusirecImpl();
			busirec.setPkid(busirecPkid);
			// 1.展开当前工单信息
			this.busiBpsDefineDao.expandEntity(busirec);
			// 2.替换流程信息生产后续工单
			if (networkItems.size() > 0) {
				TBsBusibusirec[] entitys = new TBsBusibusirecImpl[networkItems.size()];
				for (int i = 0, j = networkItems.size(); i < j; i++) {
					// 3.获取默认优先级
					// 得到该环节的环节定义信息
					TBsBusistepdefine activityConfig = this.getActivityConfigByBusiType(busirec.getBusitype(), networkItems.get(i).getActivityDefID(),currentUserDataOrgIdStr);
					entitys[i] = new TBsBusibusirecImpl();
					entitys[i].setPkid(Common.getBusinessNo(Globals.APP_NAME_BUSI));
					entitys[i].setApplyinfopkid(busirec.getApplyinfopkid());
					entitys[i].setWorkitemid(networkItems.get(i).getWorkItemID());
					entitys[i].setActivitydefid(networkItems.get(i).getActivityDefID());
					entitys[i].setProcessinstid(networkItems.get(i).getProcessInstID());
					entitys[i].setBusitype(busirec.getBusitype());
					entitys[i].setUserid(busirec.getUserid());
					entitys[i].setUsername(busirec.getUsername());
					entitys[i].setPlaninfopkid(busirec.getPlaninfopkid());
					entitys[i].setBatchid(busirec.getBatchid());
					entitys[i].setProjectid(busirec.getProjectid());
					entitys[i].setStartdate(Common.getCurrentTime());
					entitys[i].setWorklistinfopkid(busirec.getWorklistinfopkid());
					// 默认优先级
					if(currentData.containsKey("urglvl")){
						entitys[i].setUrglvl((String)currentData.get("urglvl"));
					}else{
						entitys[i].setUrglvl(activityConfig.getUrglvl());
					}
					entitys[i].setState(BusiGlobal.TBSBUSIBUSIREC_STATE_NOTFINISHED);
					entitys[i].setRemark(busirec.getRemark());
					entitys[i].setStand(busirec.getStand());
					entitys[i].setCreateby(currentUserId);
					entitys[i].setCreatetime(Common.getCurrentTime());
					entitys[i].setDataorgid(currentUserDataOrgId);
					entitys[i].setCreateorgid(currentUserOrgId);
					entitys[i].setDelflag(Globals.DELFLAG_NODELETE);
				}
				this.busiBpsDefineDao.insertEntityBatch(entitys);
			}
		} catch (Exception e) {
			SrmLog.error("生产工单失败!", e);
			throw new BusinessException("生产工单失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据流程定义ID获取流程级业务规则配置
	 * @author 陈今伟
	 * @param processdefinepkid
	 * @param dataorgid
	 * @param dealtype
	 * @return 描述******
	 * @return TBsBusirule[]
	 */
	public TBsBusirule[] getBusiRuleByFlow(String processdefinepkid, String dataorgid, String dealtype) throws BusinessException {
		Map<String, String> condition = new HashMap<String, String>();
		condition.put("processdefinepkid", processdefinepkid);
		condition.put("dealtype", dealtype);
		condition.put("delflag", Globals.DELFLAG_NODELETE);
		condition.put("state", Globals.FLAG_VALID);
		condition.put("dataorgid", dataorgid);
		return this.busiBpsDefineDao.getBusinessRuleByBusiType(condition);
	}

	/**
	 * 方法描述: 默认的流程完成后处理方法(包含回填诉求状态、工单状态、回访信息、计划任务状态)
	 * @author 陈今伟
	 * @param worklistinfopkid 工单编号
	 * @param busiType  业务类型
	 * @param userid 用户号
	 * @throws BusinessException  描述******
	 * @return void
	 */
	public void handlerAfterFlowFinished(String worklistinfopkid, String busiType, String userid) throws BusinessException {
		try {
			// 1.查询出当前工单
			TBsWorklistinfo work = new TBsWorklistinfoImpl();
			work.setPkid(worklistinfopkid);
			this.busiBpsDefineDao.expandEntity(work);
			String applyinfoPkid = work.getApplyinfopkid();
			TBsWorklistinfo workTemp = new TBsWorklistinfoImpl();
			workTemp.setApplyinfopkid(applyinfoPkid);
			workTemp.setState(BusiGlobal.TBSWORKLISTINFO_STATE_NOTFINISHED);
			TBsWorklistinfo[] works = this.busiBpsDefineDao.queryEntitiesByTemplate(TBsWorklistinfo.class, workTemp);
			// 2.完成工单
			work.setUpdatetime(Common.getCurrentTime());
			work.setState(BusiGlobal.TBSWORKLISTINFO_STATE_FINISHED);
			this.busiBpsDefineDao.updateEntity(work);
			//3.从其他途径获取完成诉求信息:完成部门，完成人
			Map<String, Object> condition = new HashMap<String, Object>();
			condition.put("worklistinfopkid", worklistinfopkid);
			DataObject[] datas = this.busiBpsDefineDao.getBpsFinishInfo(condition);
			String enddep = "";
			String endemp = "";
			if(datas.length>0){
				enddep = datas[0].getString("dealorgcode");
				endemp = datas[0].getString("dealopt");
			}
		
			// 5.判断当前工单是否为业务工单，当前诉求下是否还存在存活的业务工单
			if(BusiGlobal.TBSWORKLISTINFO_WORKLISTTYPE_BUSI.equals(work.getWorklisttype()) && works.length <= 1){
				//	6.完成诉求
				TBsApplyinfo apply = new TBsApplyinfoImpl();
				apply.setPkid(applyinfoPkid);
				apply.setEnddep(enddep);
				apply.setEndemp(endemp);
				apply.setEnddate(Common.getCurrentTime());
				apply.setFinishtype(BusiGlobal.TBSAPPLYINFO_FINISHTYPE_DEPARTMENT);
				apply.setState(BusiGlobal.TBSAPPLYINFO_STATE_FINISHED);
				this.busiBpsDefineDao.updateEntity(apply);
			}
		} catch (Exception e) {
			throw new BusinessException("流程完成后处理失败！", e.getMessage());
		}
	}
	
	/**
	 * 
	 * 方法描述: 获取流程实例当前环节的参与者userid
	 * @author 何源
	 * @param worklistinfopkid
	 * @return
	 * @throws BusinessException 描述******
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getParticipantUsersForActivityInst(String worklistinfopkid) throws BusinessException {
		TBsWorklistinfo worklist = new TBsWorklistinfoImpl();
		worklist.setPkid(worklistinfopkid);
		this.busiBpsDefineDao.expandEntity(worklist);
		Map condition = new HashMap();
		condition.put("processinstid", worklist.getProcessinstid());
		condition.put("dataorgid", worklist.getDataorgid());
		return this.busiBpsDefineDao.getParticipantUsersForActivityInst(condition);
	}
	
	public BusiBpsDefineDao getBusiBpsDefineDao() {
		return busiBpsDefineDao;
	}

	public void setBusiBpsDefineDao(BusiBpsDefineDao busiBpsDefineDao) {
		this.busiBpsDefineDao = busiBpsDefineDao;
	}
}
