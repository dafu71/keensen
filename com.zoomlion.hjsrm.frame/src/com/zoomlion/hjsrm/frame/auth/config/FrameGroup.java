package com.zoomlion.hjsrm.frame.auth.config;

import com.eos.infra.config.Configuration.Group;

/**
 * **************************************************
 * 描    述：  描述auth构件包中配置文件contribution.eosinf中的配置组
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public enum FrameGroup {

	/** 登录相关配置 * */
	AUTH_ABFRAME_LOGIN(FrameModule.AUTH_ABFRAME, "login-config"),
	
	/** 缓存相关配置* */
	AUTH_ABFRAME_CACHE(FrameModule.AUTH_ABFRAME, "cache-config"),
	
	/** 权限相关配置 列在缓存组中的cacheloader会被全部加载 * */
	AUTH_ABFRAME_PERMISSION(FrameModule.AUTH_ABFRAME, "permission-config"),
	
	/** 业务日志相关配置* */
	AUTH_ABFRAME_BUSSLOG(FrameModule.AUTH_ABFRAME, "business-log"),
	
	/** LDAP相关配置 * */
	AUTH_ABFRAME_LDAP(FrameModule.AUTH_ABFRAME, "ldap-config") ,
	
	/** SKIN相关配置 * */
	AUTH_ABFRAME_SKIN(FrameModule.AUTH_ABFRAME, "skin-config") ;
	
	private final FrameModule module;

	private String name;

	FrameGroup(FrameModule module, String name) {
		this.module = module;
		this.name = name;
	}

	public FrameModule getModule() {
		return module;
	}

	public String getName() {
		return name;
	}

	/**
	 * 方法描述: 获得配置组信息
	 * @author bingyu
	 * @return
	 * @throws Exception 
	 * @return Group
	 */
	public Group getGroupConfig() throws Exception{
		return module.getModuleConfig().getGroup(name);
	}

	@Override
	public String toString() {
		return module.toString() + ":" + name;
	}
}
