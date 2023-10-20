package com.zoomlion.hjsrm.demo;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class PersonStatusDao extends BaseDao {
	/**
	 * 根据主键查询员工信息
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryPseronList(Map condition, PageCond pageCond)throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.demo.usermanger.queryUserList", pageCond, condition);
		
	}
	
	/**
	 * 根据查询条件，查询员工信息
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryPseronByList(Map condition, PageCond pageCond)throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.demo.personmanager.queryPersonByAll", pageCond, condition);
		
	}
}
