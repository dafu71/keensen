package com.zoomlion.hjsrm.demo;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.raq.chartengine.chartElement.map.DataMap;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmEmployee;
import com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus;
import commonj.sdo.DataObject;

public class PersonStatusBean extends BaseBean {
	private PersonStatusDao personStatusDao;
	/**
	 * 查询员工信息
	 * @param datas
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public DataObject [] queryPseronList(SerPersonStatus persons, PageCond pageCond)throws BusinessException{
		try {
			Map condition = new HashMap();
			condition.put("statusId", persons.getStatusId());
			return personStatusDao.queryPseronList(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询不存在员工信息失败!", e);
			throw new BusinessException("查询不存在的员工信息失败!", e.getMessage());
		}
	}
	
	/**
	 * 根据不同条件，查询员工信息
	 * @param persons
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryPseronByList(SerPersonStatus persons, PageCond pageCond)throws Exception{
		try {
			Map condition = new HashMap();
			condition.put("operatorStatus", persons.getOperatorStatus());
			condition.put("userName", persons.getUserName());
			return personStatusDao.queryPseronByList(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询不存在员工信息失败!", e);
			throw new BusinessException("查询不存在的员工信息失败!", e.getMessage());
		}
	}
	
	/**
	 * 根据主键，获得一条员工信息；
	 * @param person
	 * @return
	 * @throws BusinessException
	 */
	public SerPersonStatus expandEmployee(SerPersonStatus person) throws BusinessException {
		try {
			this.personStatusDao.expandEntity(person);
		} catch (Exception e) {
			SrmLog.error("查询不存在员工信息失败!", e);
			throw new BusinessException("查询不存在的员工信息失败!", e.getMessage());
		}
		return person;
	}
	
	public PersonStatusDao getPersonStatusDao() {
		return personStatusDao;
	}
	public void setPersonStatusDao(PersonStatusDao personStatusDao) {
		this.personStatusDao = personStatusDao;
	}
}
