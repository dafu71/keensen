package com.zoomlion.hjsrm.frame.auth.loader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.eos.common.cache.ICacheLoader;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.data.tools.Tools.EosDictEntry;

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
public class DictCacheLoader implements ICacheLoader {
	public DictCacheLoader() {
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
		Map map = new HashMap<String, List<DataObject>>();
		EosDictEntry [] dicts = null;
		try {
			dicts = AuthResourcesLoader.getAllDicts();
		} catch (Exception e) {
			SrmLog.error("加载业务字典出错:", e);			
		}

		if(dicts!=null&&dicts.length>0){
			for(int i=0;i<dicts.length;i++){
				List temp = (List) map.get(dicts[i].getString("dicttypeid"));
				if(temp!=null){
					temp.add(dicts[i]);
					map.put(dicts[i].getString("dicttypeid"), temp);
				}else{
					List list = new ArrayList<DataObject>();
					list.add(dicts[i]);
					map.put(dicts[i].getString("dicttypeid"), list);
					
				}
			}
		}
		return map;	
	}

	public void put(Object arg0, Object arg1) {

	}

	public Object remove(Object arg0) {
		return null;
	}
}
