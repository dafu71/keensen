package com.zoomlion.hjsrm.frame.auth.loader;
import java.util.HashMap;
import java.util.Map;
import com.eos.common.cache.ICacheLoader;
import com.zoomlion.hjsrm.clib.util.SrmLog;

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
public class SysconfigCacheLoader implements ICacheLoader {
	public SysconfigCacheLoader() {
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
		DataObject[] configs = null;
		try{
			configs=AuthResourcesLoader.getAllSysconfigs();			
		}catch(Exception e){
			e.printStackTrace();
			SrmLog.error("加载系统配置出错:", e);
		}
		if(configs!=null&&configs.length>0){
			ret = new HashMap();
			for(int i=0;i<configs.length;i++){
				ret.put(configs[i].getString("paramid")+"_"+configs[i].getString("dataorgid"), configs[i].getString("paramvalue"));
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
