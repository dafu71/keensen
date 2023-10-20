package com.zoomlion.hjsrm.frame.auth.permission;

import com.eos.data.datacontext.IUserObject;

public interface IPermissionChecker extends java.io.Serializable{
	
	/**
	 * 特别开通
	 */
	public static final String AUTH_TYPE_ON="y";

	/**
	 * 特别禁止
	 */
	public static final String AUTH_TYPE_OFF="n";

	public static final int AUTH_TYPE_RESULT_ON=1;

	public static final int AUTH_TYPE_RESULT_OFF=2;

	public static final int AUTH_TYPE_RESULT_NONE=0;

	/**
	 * 方法描述: 获取操作员ID
	 * @author bingyu
	 * @return 
	 * @return String
	 */
	public String getOperatorId();

	/**
	 * 方法描述: 获取用户所有角色
	 * @author bingyu
	 * @return 
	 * @return String[]
	 */
	public String[] getOperatorRoles();

	/**
	 * 方法描述: 初始化用户对象
	 * @author bingyu
	 * @param userObject
	 * @param checkGuest 
	 * @return void
	 */
	public void init(IUserObject userObject,boolean checkGuest);

	/**
	 * 方法描述: 设置是否校验guest用户
	 * @author bingyu
	 * @param checkGuest 
	 * @return void
	 */
	public void setCheckGuest(boolean checkGuest);

	public boolean getCheckGuest();

	/**
	 * 方法描述: 判断当前操作员是否具有访问权限
	 * @author bingyu
	 * @param action
	 * @param isResource
	 * @return 
	 * @return boolean
	 */
	public boolean hasAccessPermission(String action,boolean isResource);

	/**
	 * 方法描述: 判断当前操作员是否具有功能权限权限
	 * @author bingyu
	 * @param funccode
	 * @return 
	 * @return boolean
	 */
	public boolean hasRightPermission(String funccode );

	/**
	 * 方法描述: 资源回收
	 * @author bingyu 
	 * @return void
	 */
	public void recycle();
}
