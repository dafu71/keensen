package com.zoomlion.hjsrm.frame.auth.listener;

import com.eos.access.authorization.AccessedResourceCheckedHandlerProvider;
import com.eos.access.authorization.IAccessedResourceCheckedHandler;
import com.eos.common.cache.CacheFactory;
import com.eos.common.cache.CacheProperty;
import com.eos.common.cache.ICache;
import com.eos.runtime.core.ApplicationContext;
import com.eos.runtime.resource.IContributionEvent;
import com.eos.runtime.resource.IContributionListener;
import com.eos.spring.BeanFactory;
import com.zoomlion.hjsrm.clib.util.SrmConfig;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.frame.auth.config.FrameConfig;
import com.zoomlion.hjsrm.frame.auth.config.FrameConfigKey;
import com.zoomlion.hjsrm.frame.auth.login.LoginBean;
/**
 * **************************************************
 * 描    述：  auth构件包的监听器
 *   		 监听构件包启动时，自动创建SRM.0通用权限缓存实例（实例名:SRM_COMMON_CACH，在Common类中定义）
 *   		 然后依次加载以下数据至缓存：
 *   		 --业务配置文件srmapp.xml内容
 *   		 --frame配置文件srmframe.xml内容
 *   		 --业务流水配置数据
 *   		 --功能权限配置数据
 *   		 --资源权限配置数据
 *   		 ----业务字典暂不加载，eos已经提供一套，看后续是否需要扩展
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class AuthContributionListener implements IContributionListener {

	public void load(IContributionEvent event) {
		//构件包加载处理事件
	}

	public void loadFinished(IContributionEvent event){
		try{
			//创建缓存实例
			createSrmFrameCache();
			//--加载缓存：业务配置文件srmframe.xml内容
			System.out.println("@SRM:加载[文件:srmframe.xml]系统管理配置数据至缓存...");
			FrameConfig.load();
			//--加载缓存：业务配置文件srmapp.xml内容
			System.out.println("@SRM:加载[文件:srmapp.xml]应用配置数据至缓存...");
			SrmConfig.load();
		}catch(Exception e){
			//e.printStackTrace();
			Common.error("auth构件包加载异常");
		}
		//注册权限监控handler
		try{
			boolean checked = FrameConfigKey.PERMISSION_CHECK_USEFLAG.getBLConfigValue();
			if(checked){
				IAccessedResourceCheckedHandler handler = this.getCheckHandler();
				if (handler != null) {
					AccessedResourceCheckedHandlerProvider.setHandler(handler);
				}
			}else{
				AccessedResourceCheckedHandlerProvider.setHandler(null);
			}
		}catch(Exception e){
			Common.error("auth构件包注册权限监控handler异常");
		}
		//打印三个缓存的数据
		//printCaches();
	}
	public void unLoad(IContributionEvent event) {
		//构件包删除事件处理
	}

/*********************************以下为工具方法**********************************************/
	
	/**
	 * 方法描述:获取Handler
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return IAccessedResourceCheckedHandler
	 */
	private IAccessedResourceCheckedHandler getCheckHandler() throws Exception{
		IAccessedResourceCheckedHandler checkHandler = null;
		String checkHandlerName = FrameConfigKey.PERMISSION_CHECK_HANDER.getConfigValue();
		if (checkHandlerName != null) {
			try {
				checkHandler = (IAccessedResourceCheckedHandler) Class.forName(checkHandlerName).newInstance();
			} catch (Exception e) {
			}
		}
		return checkHandler;
	}
	
	/**
	 * 方法描述: 创建srm基础框架的缓存实例，主要是通用缓存实例和权限缓存实例
	 * @author 侯杰
	 * @throws Exception 
	 * @return void
	 */
	private void createSrmFrameCache() throws Exception{
		//从bps的配置是判断是否集群
        String configPath = ApplicationContext.getInstance().getApplicationConfigPath();
        //linux下配置
        //Configuration wfclusterConfiguration = Configuration.initConfiguration((new StringBuilder()).append(configPath).append("/").append("wfengine-config.xml").toString());
        
        //window下配置
        //Configuration wfclusterConfiguration = Configuration.initConfiguration((new StringBuilder()).append(configPath).append("\\").append("wfengine-config.xml").toString());
        
        //String isClustered = wfclusterConfiguration.getConfigValue("wfcluster", "wfcache", "enable");
		
		//创建通用缓存
		ICache cacheCommon = CacheFactory.getInstance().findCache(Common.SRM_COMMON_CACHE);
		if (cacheCommon == null) {
			//--缓存配置
			CacheProperty cacheProperty = new CacheProperty();
			cacheProperty.setCacheName(Common.SRM_COMMON_CACHE);
			//cacheProperty.setCacheLoader(CACHE_LOADER);
			//--集群模式
			cacheProperty.setClustered(false);
			//--创建缓存
			CacheFactory.getInstance().createCache(cacheProperty, false);			
			System.out.println("@SRM:创建通用系统缓存...");
		}
		
//		创建字典缓存
		ICache cacheDict = CacheFactory.getInstance().findCache(Common.SRM_BIZDICT_CACHE);
		if (cacheDict == null) {
			//--缓存配置
			CacheProperty cacheProperty = new CacheProperty();
			cacheProperty.setCacheName(Common.SRM_BIZDICT_CACHE);
			cacheProperty.setCacheLoader(Common.SRM_BIZDICT_CACHE_LOADER);
			//--集群模式
			cacheProperty.setClustered(false);
			//--创建缓存
			CacheFactory.getInstance().createCache(cacheProperty, false);			
			System.out.println("@SRM:创建业务字典缓存...");
			System.out.println(Common.SRM_BIZDICT_CACHE+"------cache size---------"+CacheFactory.getInstance().findCache(Common.SRM_BIZDICT_CACHE).keySet().size());
		}
		
		//创建系统参数缓存
		ICache cacheSys = CacheFactory.getInstance().findCache(Common.SRM_SYSCONFFIG_CACHE);
		if (cacheSys == null) {
			//--缓存配置
			CacheProperty cacheProperty = new CacheProperty();
			cacheProperty.setCacheName(Common.SRM_SYSCONFFIG_CACHE);
			cacheProperty.setCacheLoader(Common.SRM_SYSCONFFIG_CACHE_LOADER);
			//--集群模式
			cacheProperty.setClustered(false);
			//--创建缓存
			CacheFactory.getInstance().createCache(cacheProperty, false);
			System.out.println("@SRM:加载系统参数至缓存...");
			System.out.println(Common.SRM_SYSCONFFIG_CACHE+"------cache size---------"+CacheFactory.getInstance().findCache(Common.SRM_SYSCONFFIG_CACHE).keySet().size());
		}
		//创建资源缓存
		ICache cacheRes = CacheFactory.getInstance().findCache(Common.SRM_RESOURCE_CACHE);
		if (cacheRes == null) {
			CacheProperty cacheProperty = new CacheProperty();
			cacheProperty.setCacheName(Common.SRM_RESOURCE_CACHE);
			cacheProperty.setCacheLoader(Common.SRM_RESOURCE_CACHE_LOADER);
			//--集群模式
			cacheProperty.setClustered(false);
			CacheFactory.getInstance().createCache(cacheProperty, false);
			System.out.println("@SRM:加载资源数据至缓存...");
			System.out.println(Common.SRM_RESOURCE_CACHE+"------cache size---------"+CacheFactory.getInstance().findCache(Common.SRM_RESOURCE_CACHE).keySet().size());
		}
		//创建员工权限缓存
		ICache cacheOpt = CacheFactory.getInstance().findCache(Common.SRM_PRIVILEGE_CACHE);
		if (cacheOpt == null) {
			//--缓存配置
			CacheProperty cacheProperty = new CacheProperty();
			cacheProperty.setCacheName(Common.SRM_PRIVILEGE_CACHE);
			cacheProperty.setCacheLoader(Common.SRM_PRIVILEGE_CACHE_LOADER);
			//--集群模式
			cacheProperty.setClustered(false);
			//--创建缓存
			CacheFactory.getInstance().createCache(cacheProperty, false);
			System.out.println("@SRM:加载员工权限数据至缓存...");
			System.out.println(Common.SRM_PRIVILEGE_CACHE+"------cache size---------"+CacheFactory.getInstance().findCache(Common.SRM_PRIVILEGE_CACHE).keySet().size());
		}
		//创建角色权限缓存
		ICache cachePriv = CacheFactory.getInstance().findCache(Common.SRM_PERMISSION_CACHE);
		if (cachePriv == null) {
			//--缓存配置
			CacheProperty cacheProperty = new CacheProperty();
			cacheProperty.setCacheName(Common.SRM_PERMISSION_CACHE);
			cacheProperty.setCacheLoader(Common.SRM_PERMISSION_CACHE_LOADER);
			//--集群模式
			cacheProperty.setClustered(false);
			//--创建缓存
			CacheFactory.getInstance().createCache(cacheProperty, false);
			System.out.println("@SRM:加载角色权限数据至缓存...");
			System.out.println(Common.SRM_PERMISSION_CACHE+"------cache size---------"+CacheFactory.getInstance().findCache(Common.SRM_PERMISSION_CACHE).keySet().size());
		}
		 System.out.println("@SRM:初始化spring容器...");
		 //预加载springBean文件
	     BeanFactory factory = BeanFactory.newInstance();
	     LoginBean lg = factory.getBean("loginBean");
	     System.out.println("@SRM:spring初始化完成...");
		
	}
	public static void printCaches() {
		ICache aa=CacheFactory.getInstance().findCache(Common.SRM_RESOURCE_CACHE);
		System.out.println(aa);
		System.out.println("=====================\n\n");
		aa=CacheFactory.getInstance().findCache(Common.SRM_PERMISSION_CACHE);
		System.out.println(aa);
		System.out.println("=====================\n\n");
		aa=CacheFactory.getInstance().findCache(Common.SRM_PRIVILEGE_CACHE);
		System.out.println(aa);
		System.out.println("=====================\n\n");
		aa=CacheFactory.getInstance().findCache(Common.SRM_COMMON_CACHE);
		System.out.println(aa);
	}
}
