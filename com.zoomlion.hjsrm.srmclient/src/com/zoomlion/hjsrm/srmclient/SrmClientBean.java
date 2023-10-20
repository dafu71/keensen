package com.zoomlion.hjsrm.srmclient;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.das.entity.DASManager;
import com.eos.das.entity.ExpressionHelper;
import com.eos.das.entity.IDASCriteria;
import com.eos.foundation.PageCond;
import com.eos.foundation.data.DataObjectUtil;
import com.eos.workflow.data.WFActivityInst;
import com.eos.workflow.data.WFWorkItem;
import com.eos.workflow.omservice.WFParticipant;
import com.primeton.workflow.api.WFServiceException;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.frame.workflows.service.BPSServiceManagerImpl;
import com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo;
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion;
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo;
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten;
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead;
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformReadDeal;
import com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl;
import com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl;
import com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl;
import com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsHastenImpl;
import com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadDealImpl;
import com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl;
import commonj.sdo.DataObject;

/**
 * **************************************************
 * 
 * 描 述： 流程管理客户端
 * 
 * @author dafu
 * 
 * **************************************************
 */

public class SrmClientBean extends BaseBean {
	private SrmClientDao srmClientDao;

	public SrmClientDao getSrmClientDao() {
		return srmClientDao;
	}

	public void setSrmClientDao(SrmClientDao srmClientDao) {
		this.srmClientDao = srmClientDao;
	}

	/**
	 * 结合业务表查询用户待执行的工作任务
	 * 
	 * @param personID
	 * @param permission
	 * @param scope
	 * @param bizCriteria
	 * @param workItem
	 * @param joinFeild
	 * @param pagecond
	 * @return
	 */
	public DataObject[] queryWorking(String personID, String permission,
			String scope, DataObject bizCriteria, DataObject workItem,
			String joinFeild, DataObject pagecond) {
		return null;
	}

	/**
	 * 方法描述: 根据查询条件查询业务待办工单
	 * 
	 * @author dafu
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryBusinessRemain(Map paramObj, PageCond pageCond)
			throws BusinessException {
		DataObject[] outData = null;
		String orgId = "";
		String roleId = paramObj.get("roleid").toString();
		roleId = "'" + roleId.replace(",", "','") + "'";
		try {

			orgId = this.srmClientDao.querySubOrgWithOrg(paramObj);
			if (orgId.equals("")) {
				outData = null;
			} else {
				paramObj.put("orgid", orgId);
				paramObj.put("roleid", roleId);
				paramObj.put("userid", "'" + paramObj.get("userid") + "'");
				// paramObj.put("dataorgid", Common.getCurrentUserDataOrgId());
				outData = this.srmClientDao.queryRemainTicketWithPage(paramObj,
						pageCond);
			}
		} catch (Exception e) {
			SrmLog.error("[业务待办工单查询]：业务待办工单查询失败！", e);
			throw new BusinessException("[业务待办工单查询]：业务待办工单查询失败！", e
					.getMessage());
		}
		return outData;
	}

	/**
	 * 方法描述: OA首页待办，根据查询条件查询业务待办工单
	 * 
	 * @author dafu
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public HashMap<String, String> queryOAWorking(HashMap paramObj)
			throws BusinessException {
		DataObject outData = null;
		HashMap map = new HashMap<String, String>();
		String orgId = "";
		String roleId = "";
		if (paramObj.get("roleid") != null
				&& !"".equals(paramObj.get("roleid"))) {
			roleId = paramObj.get("roleid").toString();
			roleId = "'" + roleId.replace(",", "','") + "'";
		}
		try {
			orgId = this.srmClientDao.querySubOrgWithOrg(paramObj);
			if (orgId.equals("")) {
				map.put("COUNT", "0");
			} else {
				paramObj.put("orgid", orgId);
				paramObj.put("roleid", roleId);
				paramObj.put("userid", "'" + paramObj.get("userid") + "'");
				DataObject[] datas = this.srmClientDao.queryOAWorking(paramObj);
				if (datas != null && datas.length > 0) {
					outData = datas[0];
					map.put("COUNT", outData.get("COUNT"));
				} else {
					map.put("COUNT", "0");
				}

			}
		} catch (Exception e) {
			SrmLog.error("[ OA首页待办，根据查询条件查询业务待办工单失败！", e);
			throw new BusinessException(" OA首页待办，根据查询条件查询业务待办工单失败！", e
					.getMessage());
		}
		return map;
	}

	/**
	 * 方法描述: 工单基本信息
	 * 
	 * @param processinstid
	 * @return
	 * @throws BusinessException
	 */
	public EsBasicinfo queryEsBasicinfo(String processinstid)
			throws BusinessException {
		EsBasicinfo template = new EsBasicinfoImpl();
		template.setProcessinstid(processinstid);
		EsBasicinfo[] esBasecinfos = this.srmClientDao.queryEntitiesByTemplate(
				EsBasicinfo.class, template);
		if (null != esBasecinfos && esBasecinfos.length > 0) {
			return esBasecinfos[0];
		} else
			return null;
	}

	/**
	 * 方法描述: 查询审批意见
	 * 
	 * @param processinstid
	 * @param rootprocinstid
	 * @return
	 * @throws BusinessException
	 */
	public EsAuditopinion[] queryEsAuditopinion(String processinstid,
			String rootprocinstid) throws BusinessException {
		if (rootprocinstid == null && processinstid == null) {
			return null;
		}
		IDASCriteria criteria = DASManager
				.createCriteria("com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion");

		if (processinstid.equals(rootprocinstid)) {
			criteria.add(ExpressionHelper.eq("rootprocinstid", rootprocinstid));

		} else {
			criteria.add(ExpressionHelper.eq("processinstid", processinstid));
		}
		criteria.asc("time");

		return this.srmClientDao.queryEntitiesByCriteriaEntity(
				EsAuditopinion.class, criteria);
		/*
		 * EsAuditopinion template = new EsAuditopinionImpl();
		 * if(processinstid.equals(rootprocinstid)){
		 * template.setRootprocinstid(rootprocinstid); return
		 * this.srmClientDao.queryEntitiesByTemplate(EsAuditopinion.class,
		 * template); }else{ template.setRootprocinstid(processinstid); return
		 * this.srmClientDao.queryEntitiesByTemplate(EsAuditopinion.class,
		 * template); }
		 */
	}

	/**
	 * 方法描述:分页查询已办工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public HashMap[] queryWorked(HashMap paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.srmClientDao.queryWorked(paramObj, pageCond);

		} catch (Exception e) {
			SrmLog.error("[业务已办工单查询]：业务已办工单查询失败！", e);
			throw new BusinessException("[业务已办工单查询]：业务已办工单查询失败！", e
					.getMessage());
		}

	}

	/**
	 * 方法描述:分页查询办结工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public HashMap[] queryFinished(HashMap paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.srmClientDao.queryFinished(paramObj, pageCond);

		} catch (Exception e) {
			SrmLog.error("[业务办结工单查询]：业务办结工单查询失败！", e);
			throw new BusinessException("[业务办结工单查询]：业务办结工单查询失败！", e
					.getMessage());
		}

	}

	/**
	 * 方法描述:业务流程信息保存
	 * 
	 * @throws BusinessException
	 */
	public void saveEsBasicinfo(EsBasicinfo esbaseinfo)
			throws BusinessException {
		try {
			this.srmClientDao.getPrimaryKey(esbaseinfo);
			esbaseinfo.setUserid(Common.getCurrentUserId());
			esbaseinfo.setUsername(Common.getCurrentUseObject().getUserName());
			esbaseinfo.setOrgid(Long.valueOf(Common.getCurrentUserOrgId()));
			esbaseinfo
					.setOrgname(Common.getCurrentUseObject().getUserOrgName());
			esbaseinfo.setDeptid(Long.valueOf(Common.getCurrentUserOrgId()));
			esbaseinfo.setDeptname(Common.getCurrentUseObject()
					.getUserOrgName());
			esbaseinfo.setApplydate(Common.getCurrentTime());

			this.srmClientDao.saveEntity(esbaseinfo);

		} catch (Exception e) {
			SrmLog.error("[业务流程信息保存]：业务流程信息保存失败！", e);
			throw new BusinessException("[业务流程信息保存]：业务流程信息保存失败！", e
					.getMessage());
		}

	}

	/**
	 * 方法描述:流程日志保存
	 * 
	 * @param approvedresult
	 * @param approvedinfo
	 * @param workitem
	 * @throws BusinessException
	 */
	public void saveEsAuditopinion(String approvedresult, String approvedinfo,
			WFWorkItem workitem) throws BusinessException {
		try {
			EsAuditopinion esauditopinion = new EsAuditopinionImpl();
			this.srmClientDao.getPrimaryKey(esauditopinion);
			esauditopinion.setStatus(approvedresult);
			esauditopinion.setOpinion(approvedinfo);
			esauditopinion.setUserid(Common.getCurrentUserId());
			esauditopinion.setUsername(Common.getCurrentUseObject()
					.getUserName());
			esauditopinion.setOrgid(Long.valueOf(Common.getCurrentUserOrgId()));
			esauditopinion.setOrgname(Common.getCurrentUseObject()
					.getUserOrgName());

			esauditopinion.setProcessinstid("" + workitem.getProcessInstID());
			esauditopinion.setWorkitemid("" + workitem.getWorkItemID());
			esauditopinion.setWorkitemname(workitem.getWorkItemName());
			esauditopinion.setTime(Common.getCurrentTime());
			esauditopinion.setRootprocinstid("" + workitem.getRootProcInstID());
			this.srmClientDao.saveEntity(esauditopinion);
		} catch (Exception e) {
			SrmLog.error("[流程日志保存]：流程日志保存失败！", e);
			throw new BusinessException("[流程日志保存]：流程日志保存失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述:分页查询阅读工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public HashMap[] queryRead(HashMap paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.srmClientDao.queryRead(paramObj, pageCond);

		} catch (Exception e) {
			SrmLog.error("[查询阅读工单]：查询阅读工单失败！", e);
			throw new BusinessException("[查询阅读工单]：查询阅读工单失败！", e.getMessage());
		}

	}

	/**
	 * 方法描述:OA首页待办查询阅读工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public HashMap queryOARead(HashMap paramObj) throws BusinessException {
		try {
			HashMap[] map;
			map = this.srmClientDao.queryOARead(paramObj);
			if (map != null && map.length > 0) {
				return map[0];
			} else {
				HashMap temp = new HashMap();
				temp.put("COUNT", "0");
				return temp;
			}
		} catch (Exception e) {
			SrmLog.error("[查询阅读工单]：查询阅读工单失败！", e);
			throw new BusinessException("[查询阅读工单]：查询阅读工单失败！", e.getMessage());
		}

	}

	/**
	 * 方法描述:获取阅读工单表主键
	 * 
	 * @return
	 * @throws BusinessException
	 */
	public long readdealPkid() throws BusinessException {
		EsWorkformReadDeal esWorkformReadDeal = new EsWorkformReadDealImpl();
		this.srmClientDao.getPrimaryKey(esWorkformReadDeal);
		return esWorkformReadDeal.getPkid();
	}

	/**
	 * 方法描述:保存工单阅读
	 * 
	 * @param readdeal
	 * @throws BusinessException
	 */
	public void saveRead(EsWorkformReadDeal readdeal) throws BusinessException {
		try {
			EsWorkformRead readTemplate = new EsWorkformReadImpl();
			readTemplate.setId(readdeal.getReadPkid());
			EsWorkformRead read = new EsWorkformReadImpl();
			read.setStatus(1);
			read.setReadtime(Common.getCurrentTime());
			this.srmClientDao.updateEntityByTemplate(read, readTemplate);

			this.srmClientDao.saveEntity(readdeal);

		} catch (Exception e) {
			SrmLog.error("[保存工单阅读]：保存工单阅读失败！", e);
			throw new BusinessException("[保存工单阅读]：保存工单阅读失败！", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询转阅记录
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public HashMap[] queryReadRecords(HashMap paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.srmClientDao.queryReadRecords(paramObj, pageCond);

		} catch (Exception e) {
			SrmLog.error("[查询转阅记录]：查询转阅记录失败！", e);
			throw new BusinessException("[查询转阅记录]：查询转阅记录失败！", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询某个活动实例的所有前驱实例
	 * 
	 * @param activityInstID
	 * @return
	 * @throws WFServiceException
	 */
	public List<WFActivityInst> queryPreviousActivityInstances(
			long activityInstID) throws WFServiceException {

		return BPSServiceManagerImpl
				.queryPreviousActivityInstances(activityInstID);
	}

	/**
	 * 方法描述:查询活动参与者
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public HashMap[] queryActivityUsers(HashMap paramObj)
			throws BusinessException {
		try {
			return this.srmClientDao.queryActivityUsers(paramObj);

		} catch (Exception e) {
			SrmLog.error("[查询活动参与者]：查询活动参与者失败！", e);
			throw new BusinessException("[查询活动参与者]：查询活动参与者失败！", e.getMessage());
		}

	}

	/**
	 * 方法描述:发送短信
	 * 
	 * @param paradata
	 * @throws Exception
	 */
	public void sendMessage(Map paradata) throws BusinessException {

		try {
			// TODO:开发时注释掉，部署后去掉注释
			// DXSendUtil.sendMessage(paradata);
			String[] userids = paradata.get("userid").toString().split(",");
			String[] phones = paradata.get("mobileno").toString().split(",");
			String[] empnames = paradata.get("empname").toString().split(",");
			String contractid = paradata.get("contractid").toString();
			String msgcontent = paradata.get("content").toString();
			String processinstid = paradata.get("processinstid").toString();

			for (int i = 0; i < userids.length; i++) {
				ContractMessageinfo msg = new ContractMessageinfoImpl();
				this.srmClientDao.getPrimaryKey(msg);
				msg.setReceiveUserid(userids[i]);
				msg.setReceiveName(empnames[i]);
				msg.setReceivePhone(phones[i]);
				msg.setContractid(contractid);
				msg.setMessagetype("1");
				msg.setMsgcontent(msgcontent);
				msg.setProcessinstid(processinstid);
				msg.setSendbyUserid(Common.getCurrentUserId());
				msg.setSendbyName(Common.getCurrentUseObject().getAttributes()
						.get("operatorname").toString());
				msg.setSenddate(Common.getCurrentTime());
				this.srmClientDao.saveEntity(msg);
			}

		} catch (Exception e) {
			SrmLog.error("[发送短信]：发送短信失败！", e);
			throw new BusinessException("[发送短信]：发送短信失败！", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询短信催办人员
	 * 
	 * @param rootprocessinstid
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getMsgRemindUser(long rootprocessinstid)
			throws BusinessException {
		try {
			List<DataObject> list = new ArrayList<DataObject>();
			HashMap paramObj1 = new HashMap();
			paramObj1.put("rootprocinstid", rootprocessinstid);
			HashMap[] queryPart1 = this.srmClientDao.queryPart1(paramObj1);

			if (null != queryPart1 && queryPart1.length > 0) {
				for (int i = 0; i < queryPart1.length; i++) {
					DataObject d = DataObjectUtil
							.createDataObject("commonj.sdo.DataObject");
					String participant = queryPart1[i].get("participant")
							.toString();
					String partiname = queryPart1[i].get("partiname")
							.toString();
					String mobileno = queryPart1[i].get("mobileno").toString();
					HashMap paramObj2 = new HashMap();
					paramObj2.put("participant", participant);
					HashMap[] queryPart2 = this.srmClientDao
							.queryPart2(paramObj2);
					if (null == queryPart2 || queryPart2.length == 0) {
						HashMap paramObj3 = new HashMap();
						paramObj3.put("participant", participant);
						HashMap[] queryPart3 = this.srmClientDao
								.queryPart3(paramObj3);
						if (null != queryPart3 && queryPart3.length > 0) {
							participant = queryPart3[0].get("userid")
									.toString();
							partiname = queryPart3[0].get("empname").toString();
							mobileno = queryPart3[0].get("mobileno").toString();
						}

					}
					d.set("userid", participant);
					d.set("empname", partiname);
					d.set("mobileno", mobileno);
					list.add(d);
				}

				DataObject[] resultArr = new DataObject[list.size()];
				list.toArray(resultArr);
				return resultArr;
			}
		} catch (Exception e) {
			SrmLog.error("[查询活动参与者]：查询活动参与者失败！", e);
			throw new BusinessException("[查询活动参与者]：查询活动参与者失败！", e.getMessage());
		}

		return null;
	}

	/**
	 * 方法描述:催办
	 * 
	 * @param processinstid
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public void insertHasten(String processinstid) throws BusinessException {
		try {

			HashMap paramObj = new HashMap();
			paramObj.put("processinstid", processinstid);
			DataObject[] workitems = this.srmClientDao.queryWorkitems(paramObj);
			for (int i = 0; i < workitems.length; i++) {
				// 通过工作项id更新多条查询催办记录
				EsHasten ehTemplate = new EsHastenImpl();
				ehTemplate.setWorkitemid(workitems[i].getString("workitemid"));
				EsHasten ehNew = new EsHastenImpl();
				ehNew.setHastenstate("0");
				this.srmClientDao.updateEntityByTemplate(ehNew, ehTemplate);
				// 插入催办
				EsHasten eh = new EsHastenImpl();
				eh.setEshastenid(this.getPk());
				eh.setHastenerid(Common.getCurrentUserId());
				eh.setHastenername(Common.getCurrentUseObject().getAttributes()
						.get("operatorname").toString());
				eh.setHastenstate("1");
				eh.setHastentime(Common.getCurrentTime());
				eh.setWorkitemid(workitems[i].getString("workitemid"));
				this.srmClientDao.insertEntity(eh);

			}

		} catch (Exception e) {
			SrmLog.error("[催办]：催办失败！", e);
			throw new BusinessException("[催办]：催办失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述:返回随即的字符串主键
	 * 
	 * @return
	 */
	public String getPk() {
		String pk = "";
		SimpleDateFormat fs = new SimpleDateFormat("yyyyMMdd");
		String num = (Math.random() * 1000000) + "";
		num = num.substring(0, num.indexOf("."));
		String str = "000000";
		String tmp = "";
		if ((num + "").length() < 6) {
			tmp = str.substring(0, 6 - (num + "").length());
		}
		pk = fs.format(new Date()) + tmp + num; // 主键由日期+随即的小于10000的数字组成，随机数不足4位的用0补满。
		return pk;
	}

	/**
	 * 方法描述:批量催办
	 * 
	 * @param processinstids
	 * @throws BusinessException
	 */
	public void insertHastens(String processinstids) throws BusinessException {
		try {
			String[] processinstid = processinstids.split(",");
			for (int i = 0; i < processinstid.length; i++) {
				this.insertHasten(processinstid[i]);
			}

		} catch (Exception e) {
			SrmLog.error("[批量催办]：批量催办失败！", e);
			throw new BusinessException("[批量催办]：批量催办失败！", e.getMessage());
		}
	}

	/**
	 * 根据empcode查询userid
	 * 
	 * @param empcode
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public String queryUserid(String empcode) throws BusinessException {

		try {
			HashMap paramObj = new HashMap();
			paramObj.put("empcode", empcode);
			DataObject[] users = this.srmClientDao.queryUserid(paramObj);
			if (null != users && users.length > 0) {
				return users[0].getString("userid");
			} else {
				return empcode;
			}

		} catch (Exception e) {
			SrmLog.error("查询用户ID失败！", e);
			throw new BusinessException("查询用户ID失败！", e.getMessage());
		}

	}

	/**
	 * 方法描述:转办
	 * 
	 * @param userid
	 * @param workitemid
	 * @throws BusinessException
	 */
	public void reassign(String userid, String username, WFWorkItem wfworkitem)
			throws BusinessException {
		// 当前状态为完成
		if (wfworkitem.getCurrentState() == 12) {
			throw new BusinessException("当前工作项已完成，不能转办！", "当前工作项已完成，不能转办！");
		}
		WFParticipant[] participantArr = new WFParticipant[1];
		WFParticipant part = new WFParticipant();
		part.setId(userid);
		part.setName(username);
		part.setTypeCode("person");
		participantArr[0] = part;
		try {
			BPSServiceManagerImpl.reassignWorkItemEx(
					wfworkitem.getWorkItemID(), participantArr);
		} catch (Exception e) {
			SrmLog.error("转办失败！", e);
			throw new BusinessException("转办失败！", e.getMessage());
		}

	}
}
