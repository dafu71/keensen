package com.zoomlion.hjsrm.techChange;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class TechChangeDao extends BaseDao {

	/**
	 * 方法描述:查询线外技术变更(分页)
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryFlowTechList(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.techChange.techChange.queryFlowTechList",
				pageCond, paramObj);
	}

	/**
	 * 方法描述:查询总装技术人员或供应商技术人员
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryJs(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.techChange.techChange.queryJs", paramObj);
	}

	/**
	 * 方法描述:查询供应商(或内部)确认
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryConfirms(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.techChange.techChange.queryConfirms",
				paramObj);
	}
}
