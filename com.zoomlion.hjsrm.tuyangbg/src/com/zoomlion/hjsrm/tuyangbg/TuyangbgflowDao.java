package com.zoomlion.hjsrm.tuyangbg;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTempNoticeItems;
import com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems;
import com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice;

import commonj.sdo.DataObject;

public class TuyangbgflowDao extends BaseDao {

	/**
	 * 方法描述: 查询数据
	 * 
	 * @author 刘鑫
	 */
	public DataObject[] queryTybg(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.tuyangbg.tuyangbg.querytybgnotice",
				pageCond, paramObj);
	}

	public DataObject[] viewtybgdatabyid(Map paramObj) throws Exception {
		try {
			return this.queryByNamedSql(DataObject.class,
					"com.zoomlion.hjsrm.tuyangbg.tuyangbg.getTybgNotice",
					paramObj);
		} catch (Exception e) {
			SrmLog.error("viewtybgdatabyid查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	public DataObject[] queryTybgNoticeList(Map paramObj, PageCond pageCond)
			throws Exception {
		try {
			return this
					.queryByNamedSqlWithPage(
							DataObject.class,
							"com.zoomlion.hjsrm.techNotice.technotice.queryTechNoticeList",
							pageCond, paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTechNoticeList查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	/**
	 * 删除临时参与人员处理信息
	 * 
	 * @param items
	 * @return
	 * @throws BusinessException
	 */
	public int delTempNoticeItems(FlowTempNoticeItems items)
			throws BusinessException {
		int num = 0;
		try {
			Map<String, String> tempMap = new HashMap<String, String>();
			tempMap.put("processinstid", items.getProcessinstid());
			this.executeNamedSql(
					"com.zoomlion.hjsrm.tuyangbg.tuyangbg.deleteTempTechData",
					tempMap);
		} catch (Exception e) {
			SrmLog.error("delTempNoticeItems异常!", e);
			throw new BusinessException("删除临时参与人员数据异常!", e.getMessage());
		}
		return num;
	}

	/**
	 * 更改附件与业务工单关联id
	 * 
	 * @param condition
	 * @throws Exception
	 */
	public void updateFileRetionId(Map condition) throws Exception {
		try {
			this.executeNamedSql(
					"com.zoomlion.hjsrm.tuyangbg.tuyangbg.updateFileRetionId",
					condition);

		} catch (Exception e) {
			SrmLog.error("updateFileRetionId异常!", e);
			throw new BusinessException("更改附件与业务工单关联id异常!", e.getMessage());
		}
	}

	public DataObject[] queryTybgNotice(Map paramObj) throws Exception {
		try {
			return this.queryByNamedSql(DataObject.class,
					"com.zoomlion.hjsrm.tuyangbg.tuyangbg.getTybgNotice",
					paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTybgNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	public DataObject[] queryTybgNoticeItem(Map paramObj) throws Exception {
		try {
			return this.queryByNamedSql(DataObject.class,
					"com.zoomlion.hjsrm.tuyangbg.tuyangbg.getTybgNoticeItem",
					paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTybgNotice查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
	}

	public int auditingTybgNotices(FlowTybgNotice notices,
			FlowTybgNoticeItems items) throws BusinessException {
		int num = 0;
		try {
			this.updateEntity(notices);

			// 获得处理业务表，系统编号
			this.getPrimaryKey(items);
			this.saveEntity(items);
			num = 1;
		} catch (Exception e) {
			SrmLog.error("数据提交异常!", e);
			throw new BusinessException("数据提交异常!", e.getMessage());
		}
		return num;
	}

	public DataObject[] queryTybgbyproid(Map paramObj) throws Exception {
		try {
			return this
					.queryByNamedSql(
							DataObject.class,
							"com.zoomlion.hjsrm.tuyangbg.tuyangbg.querytybgdatabyproid",
							paramObj);
		} catch (Exception e) {
			SrmLog.error("queryTybgbyproid查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}
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
}
