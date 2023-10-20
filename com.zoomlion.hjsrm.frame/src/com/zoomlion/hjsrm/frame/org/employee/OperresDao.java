package com.zoomlion.hjsrm.frame.org.employee;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现操作员管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OperresDao extends BaseDao {
	
	/**
	 * 方法描述: 依据操作员ID查询员工特殊权限
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryEmpOperresByOPerid(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.queryEmpOperresByOPerid", condition);
	}
	
	/**
	 * 方法描述: 删除当前操作员的所有特权信息
	 * @author 陈今伟
	 * @param condition
	 * @throws Exception 
	 * @return void
	 */
	public void deleteEmpOperres(Map condition)throws Exception{
		this.executeNamedSql("com.zoomlion.hjsrm.frame.rights.operator.operator.deleteEmpOperres", condition);
	}
}
