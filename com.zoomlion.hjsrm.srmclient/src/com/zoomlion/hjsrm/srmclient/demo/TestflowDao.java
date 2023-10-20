package com.zoomlion.hjsrm.srmclient.demo;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class TestflowDao extends BaseDao {

	/**
	 * 方法描述: 查询测试工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryTestflow(Map paramObj,
			PageCond pageCond) throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.srmclient.common.testflow.queryTestflow", pageCond,
				paramObj);
	}
	
	/**
	 * 方法描述: 查询测试工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryTestflow(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.srmclient.common.testflow.queryTestflow",
				paramObj);
	}
}
