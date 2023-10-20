package com.zoomlion.hjsrm.techNotice;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNoticeItems;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTempNoticeItems;
import commonj.sdo.DataObject;

public class TechNoticeDao extends BaseDao {

	/**
	 * 查询技术通知流程业务工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryTechNoticeList(Map paramObj, PageCond pageCond)throws Exception {
		try {
			return this.queryByNamedSqlWithPage(DataObject.class,"com.zoomlion.hjsrm.techNotice.technotice.queryTechNoticeList",pageCond, paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTechNoticeList查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}
	
	/**
	 * 查询技术通知流程业务工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject [] queryTechNotice(Map paramObj)
			throws Exception {
		try {
			return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.techNotice.technotice.getTechNotice", paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTechNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
				
	}
	
	/**
	 * 查询技术通知流程业务工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject [] queryPrintTechNotice(Map paramObj)
			throws Exception {
		try {
			return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.techNotice.technotice.getPrintTechNotice", paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTechNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
				
	}
	
	/**
	 * 查询技术通知流程处理数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject [] queryTechNoticeItem(Map paramObj)
			throws Exception {
		try {
			return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.techNotice.technotice.getTechNoticeItem", paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTechNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
				
	}
	
	/**
	 * 查询临时参与人员处理数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject [] queryTempNoticeItem(Map paramObj)
			throws Exception {
		try {
			return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.techNotice.technotice.getTempNoticeItem", paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTempNoticeItem查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
				
	}
	
	/**
	 * 查询工作项参与人员数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject [] queryItemPerson(Map paramObj)
			throws Exception {
		try {
			return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.techNotice.technotice.getTempNoticeItem", paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTempNoticeItem查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
				
	}

	/**
	 * 处理技术通知流程
	 * @param notices
	 * @param items
	 * @return
	 * @throws BusinessException
	 */
	public int auditingTechNotices(FlowTechniqueNotice notices,
			FlowTechniqueNoticeItems items) throws BusinessException {
		int num = 0;
		try {
			this.updateEntity(notices);
			
			//获得处理业务表，系统编号
			this.getPrimaryKey(items);			
			this.saveEntity(items);
			num = 1;
		} catch (Exception e) {
			SrmLog.error("auditingTechNotices审核异常!", e);
			throw new BusinessException("审核异常!", e.getMessage());
		}
		return num;
	}	
	
	
	/**
	 * 新增一条临时参与人员处理信息	 
	 * @param items
	 * @return
	 * @throws BusinessException
	 */
	public int addTempNoticeItems(FlowTempNoticeItems items) throws BusinessException {
		int num = 0;
		try {			
			//获得处理业务表，系统编号
			this.getPrimaryKey(items);			
			this.saveEntity(items);
			num = 1;
		} catch (Exception e) {
			SrmLog.error("addTempNoticeItems审核异常!", e);
			throw new BusinessException("新增一条临时参与人员处理信息异常!", e.getMessage());
		}
		return num;
	}	
	
	/**
	 * 删除临时参与人员处理信息	 
	 * @param items
	 * @return
	 * @throws BusinessException
	 */
	public int delTempNoticeItems(FlowTempNoticeItems items) throws BusinessException {
		int num = 0;
		try {
			Map<String, String> tempMap=new HashMap<String, String>();
			tempMap.put("processinstid",items.getProcessinstid());
			this.executeNamedSql("com.zoomlion.hjsrm.techNotice.technotice.deleteTempTechData",tempMap);
		} catch (Exception e) {
			SrmLog.error("delTempNoticeItems异常!", e);
			throw new BusinessException("删除临时参与人员数据异常!", e.getMessage());
		}
		return num;
	}	
	
	
	/**
	 * 查询技术通知业务数据
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryTechData(Map condition)throws Exception{
		try {
			return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.techNotice.technotice.queryTechData",condition);
		} catch (Exception e) {
			SrmLog.error("queryTechData异常!", e);
			throw new BusinessException("加载数据异常!", e.getMessage());
		}
	}
	
	/**
	 * 获得技术通知ID业务数据
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] getTechNoticeId(Map condition)throws Exception{
		try {
			return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.techNotice.technotice.getTechNoticeId",condition);
			
		} catch (Exception e) {
			SrmLog.error("getTechNoticeId异常!", e);
			throw new BusinessException("获得技术通知ID业务数据异常!", e.getMessage());
		}
	}
	
	/**
	 * 更改附件与业务工单关联id
	 * @param condition
	 * @throws Exception
	 */
	public void updateFileRetionId(Map condition)throws Exception{
		try {
			this.executeNamedSql("com.zoomlion.hjsrm.techNotice.technotice.updateFileRetionId",condition);
			
		} catch (Exception e) {
			SrmLog.error("updateFileRetionId异常!", e);
			throw new BusinessException("更改附件与业务工单关联id异常!", e.getMessage());
		}
	}
	
	
}
