package com.zoomlion.hjsrm.supply.manager.qzsupply;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.eos.system.exception.EOSRuntimeException;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyData;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyTtel;

import commonj.sdo.DataObject;

public class QzSupplyManagerDao extends BaseDao {

	public void saveqzSypplyinfo(GenlSupplyData genlSupplyData)
			throws EOSRuntimeException {
		this.saveEntity(genlSupplyData);
	}

	public void saveqzSupplyTtel(GenlSupplyTtel genlSupplyTtel)
			throws EOSRuntimeException {
		this.saveEntity(genlSupplyTtel);
	}

	public DataObject[] queryqzSupplyManager(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.supply.manager.supply.srmsupplymgr.queryQzSupplyManager",
						pageCond, condition);
	}

	public DataObject[] queryQzsupplyTel(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.supply.manager.supply.srmsupplymgr.queryQzsupplyTel",
						pageCond, condition);
	}

	public DataObject[] querySupplyTel(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.supply.manager.supply.srmsupplymgr.loadSupplyTel",
						pageCond, condition);
	}

}
