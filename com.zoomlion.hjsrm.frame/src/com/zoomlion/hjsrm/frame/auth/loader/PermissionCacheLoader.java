package com.zoomlion.hjsrm.frame.auth.loader;

import java.util.HashMap;
import java.util.Map;

import com.eos.common.cache.ICacheLoader;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  角色权限加载器(配置在config/user_config.xml)<BR>
 * 			 当对应角色的功能发生变更(新增/修改/删除)时，为了保持数据同步从缓存中移除相应角色的key，
 * 			 当下次调用时，从CacheLoader重新加载数据。
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class PermissionCacheLoader implements ICacheLoader{

	public PermissionCacheLoader(){
		super();
	}

	/**
	 * 从数据源中加载对应数据到缓存<BR>
	 * 
	 */
	public Object get(Object key) {		
		return null;
	}

	@SuppressWarnings("unchecked")
	public Map preLoad() {
		DataObject[] rolePermissions=null;
		try{
			
			rolePermissions=AuthResourcesLoader.getRoleResources();
		}catch(Exception e){
			e.printStackTrace();
		}
		Map<String, HashMap> cache = new HashMap<String, HashMap>();
		if (rolePermissions != null && rolePermissions.length > 0) {
			for (int i = 0; i <rolePermissions.length; i++) {
				// 角色功能权限
				String rescode = rolePermissions[i].getString("rescode");
				String roleid = rolePermissions[i].getString("roleid");
					if (rescode != null&&roleid!=null) {
						if (cache.get(roleid) != null) {
							HashMap roleMap = (HashMap) cache.get(roleid);
							// 为角色更新或添加功能
							roleMap.put(rescode, rolePermissions[i]);
						} else {
							//假如不存在 则新建map
							HashMap roleMap=new HashMap();
							roleMap.put(rescode, rolePermissions[i]); 
							cache.put(roleid, roleMap);
						}
					} else {
						//break;
					}
				}
			}
		return cache;
	}

	public void put(Object arg0, Object arg1) {

	}

	public Object remove(Object arg0) {
		return null;
	}
}
