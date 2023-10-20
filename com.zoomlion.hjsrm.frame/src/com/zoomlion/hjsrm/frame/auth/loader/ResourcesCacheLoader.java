package com.zoomlion.hjsrm.frame.auth.loader;
import java.util.HashMap;
import java.util.Map;
import com.eos.common.cache.ICacheLoader;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  系统资源缓存类
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */

public class ResourcesCacheLoader implements ICacheLoader {
	public ResourcesCacheLoader() {
		super();
	}

	/**
	 * 从数据源中加载对应数据到缓存<BR>
	 * 
	 */
	public Object get(Object key) {		
		return null;		
	}

	/**
	 * 预加载数据在cache第一次调用get方法时触发
	 */
	@SuppressWarnings("unchecked")
	public Map preLoad() {
		HashMap ret = null;
		DataObject[] resources = null;
		try{
			resources=AuthResourcesLoader.getAllResources();
			
		}catch(Exception e){
			e.printStackTrace();
		}
		if(resources!=null&&resources.length>0){
			ret = new HashMap();
			for(int i=0;i<resources.length;i++){
				ret.put(resources[i].get("action"), resources[i]);
			}
		}
		return ret;	
	}

	public void put(Object arg0, Object arg1) {

	}

	public Object remove(Object arg0) {
		return null;
	}
}
