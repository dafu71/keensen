package com.zoomlion.hjsrm.srmclient.common;

import java.util.HashMap;
import java.util.Map;

import com.eos.workflow.omservice.WFParticipant;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.core.exception.BusinessException;

public class WorkFlowEmployeeBean extends BaseBean {
	
	public WorkFlowEmployeeDao wfEmployeeDao;
	
	/**
	 * 设置参与者,转换数据对象
	 * @param userMap
	 * @param data
	 * @return
	 * @throws BusinessException
	 */
	 public WFParticipant [] getParticipantPersons(Map userMap,Map [] data) throws BusinessException{
		return wfEmployeeDao.getParticipantPersons(userMap, data);
	 }
	 
	 /**
		 * 设置参与者,转换数据对象		
		 * @param data
		 * @return
		 * @throws BusinessException
		 */
	 public WFParticipant [] getParticipantPersons(Map [] data) throws BusinessException{ 
		 return wfEmployeeDao.getParticipantPersons(data);
	 }

	public WorkFlowEmployeeDao getWfEmployeeDao() {
		return wfEmployeeDao;
	}

	public void setWfEmployeeDao(WorkFlowEmployeeDao wfEmployeeDao) {
		this.wfEmployeeDao = wfEmployeeDao;
	}

	
}
