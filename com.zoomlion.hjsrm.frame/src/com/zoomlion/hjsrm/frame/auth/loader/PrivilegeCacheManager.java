package com.zoomlion.hjsrm.frame.auth.loader;

import java.util.HashMap;
import java.util.List;

import com.eos.common.cache.CacheFactory;
import com.eos.common.cache.CacheRuntimeException;
import com.eos.common.cache.ICache;
import com.zoomlion.hjsrm.core.common.Common;
import commonj.sdo.DataObject;

public class PrivilegeCacheManager {
	
	public static final String CACHE_INSTANCE = Common.SRM_PRIVILEGE_CACHE;

	public static ICache getCache() {
		
		ICache icache = CacheFactory.getInstance().findCache(CACHE_INSTANCE);
		if (icache == null) {
			throw new CacheRuntimeException("not found cache \"" + CACHE_INSTANCE + "\"");
		}
		return icache;
	}
	
	/**
	 * 方法描述: 获取操作员拥有的资源特权
	 * @author 侯杰
	 * @param operatorid
	 * @return 
	 * @return HashMap
	 */
	public static List<DataObject> getPrivilegeByOid(String operatorid) {
		return operatorid==null ? null: (List) getCache().get(operatorid);
	}

	
	/**
	 * 方法描述: 清除对应角色的缓存
	 * @author 侯杰
	 * @param key 
	 * @return void
	 */
	public static void removeCache(Object key) {
		getCache().remove(key);
	}


	public static void clearCache() {
		getCache().clear();
		PrivilegeCacheLoader pl = new PrivilegeCacheLoader();
		getCache().putAll(pl.preLoad());
	}
}
