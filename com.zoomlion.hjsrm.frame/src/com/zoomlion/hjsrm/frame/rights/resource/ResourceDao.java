package com.zoomlion.hjsrm.frame.rights.resource;

import java.util.HashMap;
import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现资源管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class ResourceDao extends BaseDao {

	/**
	 * 方法描述: 查询权限内的快捷菜单
	 * @author 侯杰
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryResourceMenusByRole(HashMap condition) throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.resource.resource.queryResourcesMenus", condition);
	}
	
	/**
	 * 方法描述: 查询权限内的应用菜单
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryResourceIsMenuByRole(HashMap condition) throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.resource.resource.queryResourceIsMenuByRole", condition);
	}
	
	/**
	 * 方法描述: 查询权限内的为应用的资源
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryResourceIsAppByRole(HashMap condition) throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.resource.resource.queryResourceIsAppByRole", condition);
	}
	
	
	/**
	 * 方法描述: 查询权限内的为应用的资源
	 * @author dafu
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryResourceIsAppByRole2(HashMap condition) throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.resource.resource.queryResourceIsAppByRole2", condition);
	}
	/**
	 * 方法描述: 查询权限内的为应用的资源
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryResourceIsBizMap(HashMap condition) throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.resource.resource.queryResourcesIsBizMap", condition);
	}
	
	/**
	 * 方法描述: 用于查询(系统管理员)所有菜单资源
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryResourceIsMenu(Map condition) throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.resource.resource.queryResourceIsMenu", condition);
	}
	
	/**
	 * 方法描述: 用于查询管理员权限下的所有菜单资源
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryResourceIsMenuByOrg(Map condition) throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.resource.resource.queryResourceIsMenuByOrg", condition);
	}
	
	/**
	 * 方法描述: 查询所有系统资源
	 * @author 陈今伟
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryAllResource() throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.resource.resource.queryAllResources", new HashMap());
	}
	
	/**
	 * 方法描述: 查询资源角色关系(syadmin除外)
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryResourceRole(Map condition) throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.resource.resource.queryResourceRoles", condition);
	}
}
