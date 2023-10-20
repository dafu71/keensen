package com.zoomlion.hjsrm.frame.auth.loader;
import java.util.HashMap;

import com.eos.common.cache.CacheFactory;
import com.eos.common.cache.CacheRuntimeException;
import com.eos.common.cache.ICache;
import com.eos.common.cache.ICacheLoader;
import com.zoomlion.hjsrm.core.common.Common;
/**
 * **************************************************
 * 描    述：  功能权限缓存管理器,实现对功能权限缓存的调用和更新.
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class PermissionCacheManager {

	public static final String CACHE_INSTANCE = Common.SRM_PERMISSION_CACHE;  //权限缓存名称

	//private final static String ALLSPACE = "^ *$";  //该正则表达式的含义为 匹配0个或多个空的字符串，即该字符串有0个或多个空并且没有其他字符时 匹配该表达式。

	public static ICache getCache() {
		ICache icache = CacheFactory.getInstance().findCache(CACHE_INSTANCE);
		if (icache == null) {
			
			throw new CacheRuntimeException("not found cache \"" + CACHE_INSTANCE + "\"");
		}
		return icache;
	}

	/**
	 * 方法描述: 获取角色拥有的资源权限
	 * @author 侯杰
	 * @param roleId
	 * @return 
	 * @return HashMap
	 */
	public static HashMap getPermissionByRole(String roleId) {
		return roleId==null ? null: (HashMap) getCache().get(roleId);
	}

	/**
	 * 方法描述: 清除对应角色的缓存
	 * @author 侯杰
	 * @param key 
	 * @return void
	 */
	public static void removeCacheByRole(Object key) {
		getCache().remove(key);
	}

	@SuppressWarnings("unchecked")
	public static void clearCacheAll() {
		getCache().clear();
		ICacheLoader loader = new PermissionCacheLoader();
		getCache().putAll(loader.preLoad());
	}
}
