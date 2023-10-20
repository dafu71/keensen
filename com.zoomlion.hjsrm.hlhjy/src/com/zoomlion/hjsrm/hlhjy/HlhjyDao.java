package com.zoomlion.hjsrm.hlhjy;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class HlhjyDao extends BaseDao {
	public DataObject[] queryhlhjy(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.hlhjy.hlhjy.queryhlhjy", pageCond,
				condition);
	}

	public DataObject[] queryhlhjydaochu(Map condition)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.hlhjy.hlhjy.queryhlhjydaochu",
				condition);
	}
}
