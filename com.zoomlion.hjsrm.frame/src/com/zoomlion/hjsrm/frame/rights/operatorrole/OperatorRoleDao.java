package com.zoomlion.hjsrm.frame.rights.operatorrole;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现操作员角色功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OperatorRoleDao extends BaseDao {
	
	/**
	 * 方法描述: 查询角色对应的操作员
	 * @author 陈今伟
	 * @param role
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryOperatorByRole(Map role ,PageCond pageCond) throws Exception{
		return queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operatorrole.operatorrole.queryOperByRole", pageCond, role);
	}
	
	/**
	 * 方法描述: 查询角色对应的操作员
	 * @author dafu
	 * @param role
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryOperatorByRole2(Map role ,PageCond pageCond) throws Exception{
		return queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operatorrole.operatorrole.queryOperByRole2", pageCond, role);
	}
	
	/**
	 * 方法描述: 查询角色对应的操作员(不分页)
	 * @param role
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryOperatorByRole2(Map role) throws Exception{
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operatorrole.operatorrole.queryOperByRole2", role);
	}
	
	/**
	 * 方法描述: 查询不在某个操作员下并且在某个机构下的角色
	 * @author 陈今伟
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryRoleByDataOrgNotInOperator(Map condition,PageCond pageCond) throws Exception{
		return queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operatorrole.operatorrole.queryRoleByDataOrg", pageCond, condition);
	} 
	
	/**
	 * 方法描述: 查询操作员对应的角色
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryRoleInOperator(Map condition) throws Exception{
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operatorrole.operatorrole.queryRoleInOperator", condition);
	}
}
