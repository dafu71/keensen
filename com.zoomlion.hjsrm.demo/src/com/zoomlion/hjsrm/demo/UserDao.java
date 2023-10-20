package com.zoomlion.hjsrm.demo;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class UserDao extends BaseDao {
	public DataObject[] queryUserList(Map condition, PageCond pageCond) throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.demo.usermanger.queryUserList", pageCond, condition);
	}
}
