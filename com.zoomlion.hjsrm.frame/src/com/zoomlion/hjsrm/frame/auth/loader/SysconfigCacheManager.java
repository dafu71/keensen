package com.zoomlion.hjsrm.frame.auth.loader;

import com.eos.common.cache.CacheFactory;
import com.eos.common.cache.CacheRuntimeException;
import com.eos.common.cache.ICache;
import com.eos.common.cache.ICacheLoader;
import com.zoomlion.hjsrm.core.common.Common;
/**
 * **************************************************
 * 描    述：  功能资源缓存管理器,实现对功能缓存的调用和更新
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class SysconfigCacheManager {

	public static final String CACHE_INSTANCE = Common.SRM_SYSCONFFIG_CACHE;

	public static ICache getCache() {
		ICache icache = CacheFactory.getInstance().findCache(CACHE_INSTANCE);
		if (icache == null) {
			throw new CacheRuntimeException("not found cache \"" + CACHE_INSTANCE + "\"");
		}
		return icache;
	}
	
	/**
	 * 方法描述: 清除对应角色的缓存
	 * @author 陈今伟
	 * @param key 
	 * @return void
	 */
	public static void removeCache(Object key) {
		getCache().remove(key);
	}


	@SuppressWarnings("unchecked")
	public static void clearCache() {
		getCache().clear();
		ICacheLoader loader = new SysconfigCacheLoader();
		getCache().putAll(loader.preLoad());
	}
}
