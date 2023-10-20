package com.zoomlion.hjsrm.supply.manager.supply;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class PerformanceDao extends BaseDao {

	/**
	 * 方法描述: 查询绩效
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryPerformances(Map paramObj, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.supply.manager.supply.performance.queryPerformances",
						pageCond, paramObj);
	}
}
