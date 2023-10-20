package com.zoomlion.hjsrm.frame.auth.loader;

import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.data.tools.Tools.EosDictEntry;
import com.zoomlion.hjsrm.db.DataBaseUx;
import commonj.sdo.DataObject;

/**
 * ************************************************** 
 * 描 述： 权限数据加载器，将功能权限 岗位权限
 * 角色权限等 数据加载至缓存中
 * @author 侯杰
 * @version 1.0
 * @see HISTORY 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class AuthResourcesLoader {

	/**
	 * 方法描述: 查询系统所有资源
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	public static DataObject[] getAllSysconfigs() throws Exception {
		DataObject[] rs;
		try {
			rs = DataBaseUx.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.auth.loader.loader.allSysconfigs", null);
		} catch (Exception e) {
			SrmLog.error("加载系统配置出错:", e);
			throw e;
		}
		return rs;
	}
	
	/**
	 * 方法描述: 查询系统所有业务字典
	 * @author 侯杰
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	public static EosDictEntry[] getAllDicts() throws Exception {
		EosDictEntry[] rs;
		try {
			rs = DataBaseUx.queryByNamedSql(EosDictEntry.class, "com.zoomlion.hjsrm.frame.auth.loader.loader.allDicts", null);
		} catch (Exception e) {
			SrmLog.error("加载业务字典出错:", e);
			throw e;
		}
		return rs;
	}

	/**
	 * 方法描述: 查询系统所有资源
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public static DataObject[] getAllResources() throws Exception {
		DataObject[] rs;
		try {
			rs = DataBaseUx.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.auth.loader.loader.allResources", null);
		} catch (Exception e) {
			SrmLog.error("加载资源列表出错:", e);
			throw e;
		}
		return rs;
	}

	/**
	 * 方法描述: 查询全部角色资源权限
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public static DataObject[] getRoleResources() throws Exception {
		DataObject[] rs;
		try {
			rs = DataBaseUx.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.auth.loader.loader.roleResources", null);
		} catch (Exception e) {
			SrmLog.error("加载角色权限功能出错:", e);
			throw e;
		}
		return rs;
	}

	/**
	 * 方法描述: 查询操作员拥有的资源权限
	 * @author 侯杰
	 * @param operatorid
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public static DataObject[] getOperResources(Long operatorid)throws Exception {
		DataObject[] rs;
		try {
			rs = DataBaseUx.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.auth.loader.loader.operResources", operatorid);
		} catch (Exception e) {
			SrmLog.error("获取用户资源权限出错:", e);
			throw e;
		}
		return rs;

	}

	/**
	 * 方法描述: 查询特殊功能关系 即操作员直接与功能直接的关系 特殊功能关系优先级高于角色功能关系 有opeartorid参数时查询该opeartorid的
	 * 		    没有opeartorid参数时 查询全部。 没有开始时间则认为从1900年开始 没有结束时间则认为结束时间为2999年、你活不到的那一年。
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public static DataObject[] getOperPrivileges() throws Exception {
		DataObject[] rs;
		try {
			rs = DataBaseUx.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.auth.loader.loader.operPrivileges", null);
		} catch (Exception e) {
			SrmLog.error("获取操作员特殊权限功能出错:", e);
			throw e;
		}
		return rs;
	}
}
