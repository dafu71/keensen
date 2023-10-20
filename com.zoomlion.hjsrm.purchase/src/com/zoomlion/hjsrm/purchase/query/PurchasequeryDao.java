package com.zoomlion.hjsrm.purchase.query;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;

import commonj.sdo.DataObject;

public class PurchasequeryDao extends BaseDao {
	public DataObject[] queryPurchaseManager(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.queryPurchaseManager",
						pageCond, condition);
	}

	public DataObject[] queryPurchasedaochuManager(Map condition)
			throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.queryPurchaseManager",
						condition);
	}

}
