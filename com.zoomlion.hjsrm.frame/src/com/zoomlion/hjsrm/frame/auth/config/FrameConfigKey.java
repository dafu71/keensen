package com.zoomlion.hjsrm.frame.auth.config;
import com.eos.foundation.common.utils.StringUtil;
/**
 * **************************************************
 * 描    述：  描述auth构件包中配置文件contribution.eosinf中的配置项类 构件包配置项枚举类 用于通过枚举类型获得配置值
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public enum FrameConfigKey {

	/** 
	 * 登录相关配置 
	 */
	/** 登录加密算法 * */
	LOGIN_PASSWORD_ENCRYPTION_ALGORITHM(FrameGroup.AUTH_ABFRAME_LOGIN, "password_encryption_algorithm"),
	
	/** 是否使用验证码 **/
	LOGIN_USE_VERIFY_CODE(FrameGroup.AUTH_ABFRAME_LOGIN, "use_verify_code"),
	
	/** 是否使用语言选择 **/
	USE_LANGUAGE_CHOOSE(FrameGroup.AUTH_ABFRAME_LOGIN, "use_language_choose"),
	
	/** 登录的缺省语言 **/
	USE_DEFAULT_LANGUAGE(FrameGroup.AUTH_ABFRAME_LOGIN, "use_default_language"),
	
	/**
	 * 权限校验配置项
	 */
	/** 是否使用ABFrame的权限验证 **/
	PERMISSION_CHECK_USEFLAG(FrameGroup.AUTH_ABFRAME_PERMISSION, "permission_check_use"),
	
	/** 是否使用岗位来处理数据区域权限 **/
	IS_USER_POSITION(FrameGroup.AUTH_ABFRAME_PERMISSION, "is_user_position"),
	
	/** 数据区域权限的默认类型**/
	DATA_PERMISSION_DEFAULT_RIGHTTYPE(FrameGroup.AUTH_ABFRAME_PERMISSION, "data_permission_default_righttype"),
	
	/** 权限校验器 * */
	PERMISSION_CHECK_HANDER(FrameGroup.AUTH_ABFRAME_PERMISSION, "permission_check_handler"),
	
	/** 权限缓存数据提供者 * */
	PERMISSION_DATA_PROVIDER(FrameGroup.AUTH_ABFRAME_PERMISSION, "permission_data_provider"),
	
	/** 系统管理员账号 逗号分隔userid * */
	PERMISSION_ADMIN_USERS(FrameGroup.AUTH_ABFRAME_PERMISSION, "admin_users"),
	
	/** 内置不检查权限的资源 * */
	PERMISSION_UNCHECK_RESOURCE(FrameGroup.AUTH_ABFRAME_PERMISSION, "default_uncheck_resource"),
	
	/** 定义需要权限校验的构件包 * */
	PERMISSION_CHECKED_CONTRIBUTIONS(FrameGroup.AUTH_ABFRAME_PERMISSION, "checked_contributions"),
	
	/** 定义不需要权限校验的构件包 * */
	PERMISSION_UNCHECKED_CONTRIBUTIONS(FrameGroup.AUTH_ABFRAME_PERMISSION, "unchecked_contributions"),
	
	/** 不匹配的构件包是否校验 不满足上述两个构件包规则的构件包默认是否使用校验 * */
	PERMISSION_UNMATCH_CHECKED(FrameGroup.AUTH_ABFRAME_PERMISSION, "unmatch_contributions_checked"),
	
	/** 不在数据库功能表中注册的访问资源默认是否有权限使用，true表示有权限，false表示无 * */
	PERMISSION_UNREGIST_ACCESS(FrameGroup.AUTH_ABFRAME_PERMISSION, "unregistered_function_access"),

	/**
	 * 缓存相关配置
	 */
	/** 权限模型缓存 * */
	CACHE_FOR_PERMISSION(FrameGroup.AUTH_ABFRAME_CACHE, "SRM_PERMISSION_CACHE"),
	
	/** 已注册的功能缓存 * */
	CACHE_FOR_FUNCTION(FrameGroup.AUTH_ABFRAME_CACHE, "CacheForFunction"),
	
	/** Portal资源缓存 * */
	CACHE_FOR_PORTALRESOURCE(FrameGroup.AUTH_ABFRAME_CACHE, "CacheForPortalResource"),
	
	/** 业务日志缓存 * */
	CACHE_FOR_BUSINESSLOG(FrameGroup.AUTH_ABFRAME_CACHE, "CacheForBusinessLog");


	private final FrameGroup group;

	private String name;

	FrameConfigKey(FrameGroup group, String name) {
		this.group = group;
		this.name = name;
	}

	public FrameGroup group() {
		return group;
	}

	/**
	 * 方法描述: 以字符串形式返回构件包配置项的值
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public String getConfigValue() throws Exception{
		return group.getGroupConfig().getConfigValue(name);
	}
	
	/**
	 * 方法描述: 以字符串形式返回构件包配置项的值，提供为空时的默认值 默认值如果配置项为空则返回此默认值
	 * @author 侯杰
	 * @param defValue
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public String getConfigValue(String defValue) throws Exception{
		String value = getConfigValue();		
		return StringUtil.isBlank(value)?defValue:value;
	}
	
	/**
	 * 方法描述: 以布尔值形式返回构件包配置项的值
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean getBLConfigValue() throws Exception{
		return Boolean.parseBoolean(getConfigValue());
	}
	
	/**
	 * 方法描述: 以布尔值形式返回构件包配置项的值,如果配置项无值则返回默认值
	 * @author 侯杰
	 * @param defValue
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean getBLConfigValue(boolean defValue) throws Exception{
		String value = getConfigValue();
		return  StringUtil.isBlank(value)?defValue:Boolean.parseBoolean(getConfigValue());
	}

	@Override
	public String toString() {
		return group.toString() + ":" + name;
	}
}