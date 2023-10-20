package com.zoomlion.hjsrm.basedata;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class BasedataDao extends BaseDao {
	public DataObject[] queryMarabase(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.basedata.basedata.queryMarabase", pageCond,
				condition);
	}

}
