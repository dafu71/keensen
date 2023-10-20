package com.zoomlion.hjsrm.frame.rights.role;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperator;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRole;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.VAcOperatorTrs;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现角色管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class RoleDao extends BaseDao {

	/**
	 * 方法描述: 依据操作员ID查询对应的角色
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @return
	 * @throws Exception 
	 * @return TAcRole[]
	 */
	@SuppressWarnings("unchecked")
	public TAcRole[] queryRoleByOperator(TAcOperator operator) throws Exception {
		Map param = new HashMap();
		param.put("operatorid", operator.getOperatorid());
		return queryByNamedSql(TAcRole.class, "com.zoomlion.hjsrm.frame.rights.role.role.queryRoleByOperator", param);
	}
	
	
	/**
	 * 方法描述: 依据操作员ID查询对应的角色
	 * 
	 * @author dafu
	 * @param operator
	 * @return
	 * @throws Exception 
	 * @return TAcRole[]
	 */
	@SuppressWarnings("unchecked")
	public TAcRole[] queryRoleByOperator2(VAcOperatorTrs operator) throws Exception {
		Map param = new HashMap();
		param.put("operatorid", operator.getOperatorid());
		return queryByNamedSql(TAcRole.class, "com.zoomlion.hjsrm.frame.rights.role.role.queryRoleByOperator", param);
	}
	/**
	 * 方法描述: 依据当前操作员的权限查询角色 (通过orgid过滤角色)
	 * 
	 * @author 陈今伟
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryRoleByOpeartorPermission(Map condition, PageCond pageCond)throws Exception {
		return queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.frame.rights.role.role.queryRoleByOpeartorPermission", pageCond, condition);
	}
	
	/**
	 * 方法描述: 依据角色和机构查询待添加操作员
	 * 
	 * @author dafu
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryOperatorByOrgRole(Map condition)throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.role.role.queryOperatorByOrgRole",  condition);
	}
}
