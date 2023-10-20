package com.zoomlion.hjsrm.frame.auth.util;

import com.eos.common.cache.CacheFactory;
import com.eos.common.cache.ICache;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.frame.auth.loader.ResourcesCacheManager;
import com.zoomlion.hjsrm.frame.auth.loader.PermissionCacheManager;

/**
 * **************************************************
 * 描    述：  缓存工具类
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class CacheClibUtilBean {

	
	public CacheClibUtilBean() {
	}

	/**
	 * 方法描述:  删除资源缓存中的 一条缓存
	 * 			 在修改菜单和修改功能的时候  需要调用该方法，保证资源缓存中的数据不是旧的，key为 url（菜单表中对应字段：menuaction,功能表中对应字段：funcaction）
	 * @author 侯杰
	 * @param key 
	 * @return void
	 */
	public static void removeResourceCacheByKey(Object key){
		ResourcesCacheManager.removeCache(key);
	}
	
	/**
	 * 方法描述: 删除资源缓存中的 所有缓存
	 * @author 侯杰 
	 * @return void
	 */
	public static void removeResourceCacheAll(){
		ResourcesCacheManager.clearCache();
	}
	
	
	/**
	 * 方法描述: 删除角色功能缓存中(角色权限)的 一条缓存
	 * @author 侯杰
	 * @param key 
	 * @return void
	 */
	public static void removePermissionCacheByRoleID(Object key){
		PermissionCacheManager.removeCacheByRole(key);
	}
	
	
	/**
	 * 方法描述: 打印缓存
	 * @author 侯杰 
	 * @return void
	 */
	public static void printCaches(){
		ICache aa=CacheFactory.getInstance().findCache(Common.SRM_RESOURCE_CACHE);
		System.out.println(aa);
		System.out.println("=====================\n\n");
		aa=CacheFactory.getInstance().findCache(Common.SRM_PERMISSION_CACHE);
		System.out.println(aa);
		System.out.println("=====================\n\n");
		aa=CacheFactory.getInstance().findCache(Common.SRM_PRIVILEGE_CACHE);
		System.out.println(aa);		
		aa=CacheFactory.getInstance().findCache(Common.SRM_COMMON_CACHE);
		System.out.println(aa);
	}
	
	
	public static void main(String[] args) {
		printCaches();
	}
}
