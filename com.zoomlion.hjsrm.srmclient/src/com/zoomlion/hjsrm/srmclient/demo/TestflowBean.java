package com.zoomlion.hjsrm.srmclient.demo;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.srmclient.workflow.Testflow;
import commonj.sdo.DataObject;

public class TestflowBean extends BaseBean {
	private TestflowDao testflowDao;

	public TestflowDao getTestflowDao() {
		return testflowDao;
	}

	public void setTestflowDao(TestflowDao testflowDao) {
		this.testflowDao = testflowDao;
	}

	/**
	 * 方法描述: 查询测试工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryTestflow(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.testflowDao.queryTestflow(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}

	}

	
	/**
	 * 方法描述: 查询测试工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryTestflow(Map paramObj)
			throws BusinessException {
		try {
			return this.testflowDao.queryTestflow(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 保存业务工单
	 * 
	 * @param testflow
	 * @throws BusinessException
	 */
	public Long saveTestFlow(Testflow testflow) throws BusinessException {
		try {
			if(null == testflow.get("pkid")){//如果为新增
				this.testflowDao.getPrimaryKey(testflow);
				testflow.setCreateby(Common.getCurrentUserId());
				testflow.setCreatetime(Common.getCurrentTime());
			}else{
				testflow.setCheckby(Common.getCurrentUserId());
				testflow.setChecktime(Common.getCurrentTime());				
			}
			this.testflowDao.saveEntity(testflow);
			return testflow.getPkid();
		} catch (Exception e) {
			SrmLog.error("保存异常!", e);
			throw new BusinessException("保存异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 修改业务工单
	 * 
	 * @param testflow
	 * @throws BusinessException
	 */
	public void modifyTestFlow(Testflow testflow) throws BusinessException {
		try {
			
			this.testflowDao.saveEntity(testflow);
			
		} catch (Exception e) {
			SrmLog.error("修改异常!", e);
			throw new BusinessException("修改异常!", e.getMessage());
		}
	}
}
