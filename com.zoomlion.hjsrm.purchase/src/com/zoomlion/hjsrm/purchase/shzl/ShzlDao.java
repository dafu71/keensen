package com.zoomlion.hjsrm.purchase.shzl;

import java.util.Map;
import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlDeliverList;

public class ShzlDao extends BaseDao {

	public DataObject[] queryshzlwhManager(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.shzlcxManager",
						pageCond, condition);
	}

	public DataObject[] queryshzlcxsupplyManager(Map condition,
			PageCond pageCond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.shzlcxsupplyManager",
						pageCond, condition);
	}
	
	public DataObject[] queryShzlsupplydaochu(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.shzlcxsupplyManager", condition);
	}
	
	public DataObject[] queryshzlsdaochuBuyer(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.shzlcxManager", condition);
	}
  
	public GenlDeliverList[] queryshzlzshso(GenlDeliverList templated)
			throws Exception {
		return this
				.queryByNamedSql(
						GenlDeliverList.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.shzlcxzshsodrManager",
						templated);
	}
}
