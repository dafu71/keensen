package com.zoomlion.hjsrm.frame.auth.loader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.eos.common.cache.ICacheLoader;
import commonj.sdo.DataObject;

/**
 * **************************************************
 * 描    述：  特殊权限信息(个人权限)
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class PrivilegeCacheLoader implements ICacheLoader{
	
	public PrivilegeCacheLoader() {
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
		DataObject[] resources = null;
		try{
			resources = AuthResourcesLoader.getOperPrivileges();
		}catch(Exception e){
			e.printStackTrace();
		}
		if(resources!=null&&resources.length>0){
			for(int i=0;i<resources.length;i++){
				List temp = (List) map.get(resources[i].getString("operatorid"));
				if(temp==null){
					List list = new ArrayList<DataObject>();
					list.add(resources[i]);
					map.put(resources[i].getString("operatorid"), list);
				}else{
					temp.add(resources[i]);
					map.put(resources[i].getString("operatorid"), temp);
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
