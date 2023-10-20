package com.zoomlion.hjsrm.pub.srmclient;

import com.eos.das.entity.DASManager;
import com.eos.das.entity.ExpressionHelper;
import com.eos.das.entity.IDASCriteria;
import com.eos.workflow.data.WFWorkItem;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion;
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo;
import com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl;
import com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl;

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
	public void saveEsAuditopinion(String approvedresult,String approvedinfo,WFWorkItem workitem)
			throws BusinessException {
		try {
			EsAuditopinion esauditopinion = new EsAuditopinionImpl();
			this.srmClientDao.getPrimaryKey(esauditopinion);
			esauditopinion.setStatus(approvedresult);
			esauditopinion.setOpinion(approvedinfo);
			esauditopinion.setUserid(Common.getCurrentUserId());
			esauditopinion.setUsername(Common.getCurrentUseObject().getUserName());
			esauditopinion.setOrgid(Long.valueOf(Common.getCurrentUserOrgId()));
			esauditopinion.setOrgname(Common.getCurrentUseObject().getUserOrgName());
			
			esauditopinion.setProcessinstid("" + workitem.getProcessInstID());
			esauditopinion.setWorkitemid("" + workitem.getWorkItemID());
			esauditopinion.setWorkitemname(workitem.getWorkItemName());
			esauditopinion.setTime(Common.getCurrentTime());
			esauditopinion.setRootprocinstid("" +workitem.getRootProcInstID());
			this.srmClientDao.saveEntity(esauditopinion);
		} catch (Exception e) {
			SrmLog.error("[流程日志保存]：流程日志保存失败！", e);
			throw new BusinessException("[流程日志保存]：流程日志保存失败！", e
					.getMessage());
		}
	}
}
