package com.zoomlion.hjsrm.frame.auth.config;

import com.eos.infra.config.Configuration;
import com.zoomlion.hjsrm.clib.util.SrmCache;
import com.zoomlion.hjsrm.core.common.Common;

/**
 * **************************************************
 * 描    述：  描述构件包的配置类
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public enum FrameContribution {
	
	/** 认证 构件包配置  **/
	Auth("com.zoomlion.hjsrm.frame.auth"),
	
	/** 机构管理 构件包配置  **/
	Org("com.zoomlion.hjsrm.frame.org"), 
	
	/** 权限管理 构件包配置  **/
	Rights("com.zoomlion.hjsrm.frame.rights"), 
	
	/** 工具 构件包配置  **/
	Tools("com.zoomlion.hjsrm.frame.tools");
	
	private String name;

	FrameContribution(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	/**
	 * 方法描述: 返回srmframe.xml配置信息，从缓存中获取
	 * @author bingyu
	 * @return
	 * @throws Exception 
	 * @return Configuration
	 */
	public Configuration getConfig() throws Exception{
		return (Configuration)SrmCache.getValue(Common.SRM_FRAMECONFIG_CACHEKEY);
	}
	/*
	public Configuration getConfig() {
		return ConfigurationFactory.getContributionConfiguration(name);
	}
	*/

	@Override
	public String toString() {
		return name;
	}
}