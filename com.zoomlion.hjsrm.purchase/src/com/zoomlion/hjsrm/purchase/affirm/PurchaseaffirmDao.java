package com.zoomlion.hjsrm.purchase.affirm;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现采购订单确认
 * 
 * @author 刘鑫 **************************************************
 */
public class PurchaseaffirmDao extends BaseDao {
	public DataObject[] queryPurchaseaffirmManager(Map condition,
			PageCond pageCond) throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.affirmPurchaseManager",
						pageCond, condition);
	}
	
	public DataObject[] purchaseaffirmdaochu(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.affirmPurchaseManager", condition);
	}

	public DataObject[] queryPurchaseaffirmyz(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.queryPurchaseaffirmyz",
						condition);
	}

}
