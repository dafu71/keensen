package com.zoomlion.hjsrm.frame.auth.config;

import com.eos.infra.config.Configuration.Module;
/**
 * **************************************************
 * 描    述：  描述auth构件包中配置文件contribution.eosinf中的配置模块
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public enum FrameModule {
	/** 数据源配置模块 * */
	AUTH_DATASOURCE(FrameContribution.Auth, "DataSource"),
	
	/** ABFrame 配置模块* */
	AUTH_ABFRAME(FrameContribution.Auth, "frame-config");
	
	private final FrameContribution contribution;

	private final String name;

	FrameModule(FrameContribution contribution, String name) {
		this.contribution = contribution;
		this.name = name;
	}

	@Override
	public String toString() {
		return contribution.toString() + ":" + name;
	}

	public FrameContribution getContribution() {
		return contribution;
	}

	public String getName() {
		return name;
	}

	/**
	 * 方法描述: 获取模块配置信息
	 * @author bingyu
	 * @return
	 * @throws Exception 
	 * @return Module
	 */
	public Module getModuleConfig() throws Exception{
		return contribution.getConfig().getModule(name);
	}
}
