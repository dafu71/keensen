package com.zoomlion.hjsrm.clib.util;

import java.util.Set;
import com.zoomlion.hjsrm.core.common.Common;
/**
 * **************************************************
 * 描    述：  缓存(特指通用缓存)工具类：提供查缓存、清除缓存等功能
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class SrmCache {
	
	/**
	 * 方法描述: 查询cache中所有的key的集合
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return Set
	 */
	public static Set getKeys() throws Exception{
		
		return Common.getCache().keySet();
	}
	
	/**
	 * 方法描述: 根据key取得缓存中相应的数据
	 * @author 侯杰
	 * @param key
	 * @return
	 * @throws Exception 
	 * @return Object
	 */
	public static Object getValue (String key) throws Exception{
		return Common.getCache().get(key);
	}

	/**
	 * 方法描述: 根据key清除缓存中的相应数据
	 * @author 侯杰
	 * @param key
	 * @throws Exception 
	 * @return void
	 */
	public static void removeKey (String key) throws Exception{
		Common.getCache().remove(key);
		return  ;
	}
	
	/**
	 * 方法描述: 往缓存中存放数据
	 * @author 侯杰
	 * @param key
	 * @param value
	 * @throws Exception 
	 * @return void
	 */
	public static void putValue (String key,Object value) throws Exception{
		//todo 不在列表中定义的key，不允许加载到缓存，这是为了严格控制加载到缓存中的数据
		
		//考虑到集群环境，先清除缓存中原有的数据，可同步失效集群缓存数据
		Common.getCache().remove(key);
		//加载数据到集群
		Common.getCache().put(key, value);
		return  ;
	}

	/**
	 * 
	//清除所有缓存
	private static void clear () throws Exception{
		
		Common.getCache().clear();
		return  ;
	}
	*/
}
