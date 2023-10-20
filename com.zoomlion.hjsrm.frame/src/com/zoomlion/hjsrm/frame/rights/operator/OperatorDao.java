package com.zoomlion.hjsrm.frame.rights.operator;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
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
public class OperatorDao extends BaseDao {
	
	/**
	 * 方法描述: 查询操作员的员工/机构信息
	 * @author 陈今伟
	 * @param userid
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryOperator(String userid) throws Exception{
		Map<String,String> param = new HashMap<String,String>();
		param.put("userid", userid);
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.queryOperatorByUserID", param);
	}
	/**
	 * 方法描述: 查询操作员的挂起状态
	 * @author 陈今伟
	 * @param userid
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryOperatorguaqi(String userid) throws Exception{
		Map<String,String> param = new HashMap<String,String>();
		param.put("userid", userid);
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.queryOperatorguaqi", param);
	}
	/**
	 * 方法描述: 查询srm操作员的挂起状态
	 * @author 陈今伟
	 * @param userid
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querysrmOperatorguaqi(String userid) throws Exception{
		Map<String,String> param = new HashMap<String,String>();
		param.put("userid", userid);
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.querysrmOperatorguaqi", param);
	}
	/**
	 * 方法描述: 查询操作员的员工/机构信息
	 * @author dafu
	 * @param userid
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryOperator2(String userid) throws Exception{
		Map<String,String> param = new HashMap<String,String>();
		param.put("userid", userid);
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.queryOperatorByUserID2", param);
	}
	/**
	 * 方法描述:更新状态
	 * 
	 * @param condition
	 * @throws Exception
	 */
	public void updatestatus(Map condition) throws Exception {
		this.executeNamedSql(
				"com.zoomlion.hjsrm.frame.auth.login.login.updateStatus",
				condition);
	}

	/**
	 * 方法描述: 查询不在某个角色下，在某个机构下的操作员
	 * @author 陈今伟
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryOperatorNotInRoleByDataOrg(Map condition,PageCond pageCond) throws Exception{
		return queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.queryOperatorNotInRole", pageCond, condition);
		
	}
	
	/**
	 * 方法描述: 查询不在某个角色下，在某个机构下的操作员
	 * @author dafu
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryOperatorNotInRoleByDataOrg2(Map condition,PageCond pageCond) throws Exception{
		return queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.queryOperatorNotInRole2", pageCond, condition);
		
	}
	
	
	/**
	 * 方法描述: 查询员工及操作员信息
	 * @author 陈今伟
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryOperators(Map condition,PageCond pageCond) throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.queryOperators", pageCond ,condition);
	}
	
	/**
	 * 方法描述: 查询员工及操作员信息
	 * @author dafu
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryOperators2(Map condition,PageCond pageCond) throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.queryOperators2", pageCond ,condition);
	}
	
	/**
	 * 方法描述:加载操作员的所有权限信息
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] loadOperatorAuth(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.operator.operator.loadOperatorAuth", condition);
	}
}
