package com.zoomlion.hjsrm.clib.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.eos.foundation.data.DataObjectUtil;
import com.eos.infra.config.Configuration;
import com.eos.infra.config.Configuration.Group;
import com.eos.infra.config.Configuration.Module;
import com.eos.runtime.core.ApplicationContext;
import com.eos.system.exception.EOSRuntimeException;
import com.zoomlion.hjsrm.core.common.Common;

import commonj.sdo.DataObject;

/**
 * **************************************************
 * 描    述：  配置文件加载类：提供配置文件的读取功能（因为已加载至缓存<在auth构件包加载完成后加载至缓存>，实际上是从缓存读取）
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-30 bingyu 创建文件
 * **************************************************
 */
public class SrmConfig{
	
	public   static final String CONTRIBUTION_SRMCLIB = "com.zoomlion.hjsrm.clib";
	
	public  static final String SRM_APP_CONFIG_FILENAME = "srmapp.xml";
	
	//linux下配置
	//public  static final String SRM_APP_CONFIG_FILEPATH = "//WEB-INF//srmconfig//";
	
	//windows下配置
	public  static final String SRM_APP_CONFIG_FILEPATH = "WEB-INF\\srmconfig\\";
	
	/**
	 * 方法描述: 获取SRM应用配置文件的路径
	 * @author bingyu
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public static String  getSrmConfigPath() throws Exception{
		String configPath = ApplicationContext.getInstance().getWarRealPath()+SRM_APP_CONFIG_FILEPATH;
		return configPath;
	}
	
	/**
	 * 方法描述: 获取SRM应用配置文件的路径
	 * @author bingyu
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public static String  getAppConfigFile() throws Exception{
		String appConfigPath = getSrmConfigPath();
		String filePath = appConfigPath+SRM_APP_CONFIG_FILENAME;
		return filePath;
	}


	
	/**
	 * 方法描述: 加载配置
	 * @author bingyu
	 * @return
	 * @throws Exception 
	 * @return Configuration
	 */
	public static Configuration  load() throws Exception{
		String filePath = getAppConfigFile();
		Configuration configuration = Configuration.initConfiguration(filePath);
		SrmCache.putValue(Common.SRM_APPCONFIG_CACHEKEY, configuration);
		return configuration;
	}
	
	/**
	 * 方法描述: 重新加载配置
	 * @author bingyu
	 * @return
	 * @throws Exception 
	 * @return Configuration
	 */
	public static Configuration  reload() throws Exception{
		SrmCache.removeKey(Common.SRM_APPCONFIG_CACHEKEY);
		return load();
	}
	
	/**
	 * 方法描述: 获取SRM应用配置文件中的某个module->group->key下的值
	 * @author bingyu
	 * @param module
	 * @param group
	 * @param key
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public static String  getAppConfigValue(String module, String group, String key) throws Exception{
		Configuration configuration = (Configuration)SrmCache.getValue(Common.SRM_APPCONFIG_CACHEKEY);
		//update by linfeng 2011-9-22 缓存为空时，加载一次
		if (configuration==null)
			configuration = load();
		return configuration.getConfigValue(module, group, key);
	}

	/**
	 * 方法描述: 设置SRM应用配置文件中的某个module->group->key下的值
	 * @author bingyu
	 * @param module
	 * @param group
	 * @param key
	 * @param value
	 * @throws Exception 
	 * @return void
	 */
	public static void setAppConfigValue(String module, String group, String key, String value) throws Exception{
		Configuration configuration = (Configuration)SrmCache.getValue(Common.SRM_APPCONFIG_CACHEKEY);
		//update by linfeng 2011-9-22 缓存为空时，加载一次
		if (configuration==null)
			configuration = load();
		configuration.setValue(module, group, key, value);
	}

	/**
	 * 方法描述: 保存SRM应用配置文件srmapp.xml
	 * @author bingyu
	 * @throws Exception 
	 * @return void
	 */
	public static void save() throws Exception{
		Configuration configuration = (Configuration)SrmCache.getValue(Common.SRM_APPCONFIG_CACHEKEY);
		//update by linfeng 2011-9-22 缓存为空时，加载一次
		if (configuration==null)
			configuration = load();
		configuration.save();
	}


	/**
	 * 方法描述: 获取配置文件中的多个module->group->key对应的值
	 * @author bingyu
	 * @param params 成对数组,即module->group->key每三个为一组的参数数组
	 * 				 例如：String[] params = {"module1","group1","key1","module2","group2","key2"}表示两组;
	 * @return
	 * @throws Exception 
	 * @return DataObject
	 */
	public static DataObject  getAppConfigValueBatch(String[] params) throws Exception{
		if (params == null)
		      return null;
		    DataObject cfgDO = DataObjectUtil.createDataObject("com.primeton.das.datatype.AnyType");
		    int len = params.length;
		    if (len % 3 != 0) {
		      throw new EOSRuntimeException("module->group->key not per three appeared!");
		    }
		    for (int i = 0; i < len; i += 3) {
		      cfgDO.set(params[i]+"-"+params[(i + 1)]+"-"+params[(i + 2)], getAppConfigValue(params[i], params[(i + 1)], params[(i + 2)]));
		    }
		    return cfgDO;
	}

	/**
	 * 方法描述: 获取SRM应用配置文件srmapp.xml中某个moudle下的配置(moudle下有多个group)
	 * @author bingyu
	 * @param module
	 * @return
	 * @throws Exception 
	 * @return List
	 */
	@SuppressWarnings("unchecked")
	public static List  getAppConfigGroups(String module) throws Exception{
		Configuration configuration = (Configuration)SrmCache.getValue(Common.SRM_APPCONFIG_CACHEKEY);
		Module modules = configuration.getModule(module);
		Map<String, Group> maps = modules.getGroups();
		List dataset = new ArrayList();
		Iterator<Map.Entry<String,Group>> iter = maps.entrySet().iterator(); 
		while (iter.hasNext()) { 
		    Map.Entry entry = (Map.Entry) iter.next(); 
		    String key = (String)entry.getKey(); 
		    Group val = (Group)entry.getValue(); 
		    Map<String, String> mapGp = val.toMapValues();
		    Map dataGp = new HashMap();
			Iterator<Map.Entry<String,String>> iterGp = mapGp.entrySet().iterator(); 
			while (iterGp.hasNext()) { 
			    Map.Entry entryGp = (Map.Entry) iterGp.next(); 
			    String keyGp = (String)entryGp.getKey(); 
			    String valGp = (String)entryGp.getValue(); 
			    dataGp.put(keyGp, valGp);
			}
		    Map data = new HashMap();
		    data.put(key, dataGp);
		    dataset.add(data);
		}
		return dataset;
	}

	/**
	 * 方法描述: 获取SRM应用配置文件srmapp.xml中某个moudle->group下的配置
	 * @author bingyu
	 * @param module
	 * @param group
	 * @return
	 * @throws Exception 
	 * @return Map
	 */
	@SuppressWarnings("unchecked")
	public static Map  getAppConfigGroup(String module, String group) throws Exception{
		Configuration configuration = (Configuration)SrmCache.getValue(Common.SRM_APPCONFIG_CACHEKEY);
		Group groupObj = configuration.getModule(module).getGroup(group);
		Map<String, String> groupMap = groupObj.toMapValues();
		Map data = new HashMap();
		Iterator<Map.Entry<String,String>> iter = groupMap.entrySet().iterator(); 
		while (iter.hasNext()) { 
		    Map.Entry entry = (Map.Entry) iter.next(); 
		    String key = (String)entry.getKey(); 
		    String val = (String)entry.getValue(); 
		    data.put(key, val);
		}
		return data;
	}
}
