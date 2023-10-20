package com.zoomlion.hjsrm.purchase.shdaffirm;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class ShdaffirmDao extends BaseDao{
	/**
	 * 方法描述:查询待确认送货单(分页)
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryshdConfirm(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.purchase.query.queryPurchase.queryshdconfirm",
				pageCond, paramObj);
	}
	public DataObject[] queryshddelflag(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.queryshddelflag",
						condition);
	}
	public DataObject[] queryvnwzyz(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.vnwzyz",
						condition);
	}
	public DataObject[] shdcexiaoyz(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.shdcexiaoyz",
						condition);
	}
	/**
	 * 方法描述:查询送货单详情
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryshd(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.purchase.query.queryPurchase.queryshd",
				paramObj);
	}

}
