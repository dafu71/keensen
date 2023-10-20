package com.zoomlion.hjsrm.frame.org.employee;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现员工管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class EmployeeDao extends BaseDao{

	/**
	 * 方法描述: 依据员工Id查询员工(和对应操作员)
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryEmpbyEmpid(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,"com.zoomlion.hjsrm.frame.org.employee.employee.queryEmpbyEmpid", condition);
	}
	
	/**
	 * 方法描述: 查询不存在操作员的员工信息
	 * @author 陈今伟
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryEmpNotOper(Map condition, PageCond pageCond) throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class,"com.zoomlion.hjsrm.frame.org.employee.employee.queryEmpNotOper", pageCond, condition);
	}
}
