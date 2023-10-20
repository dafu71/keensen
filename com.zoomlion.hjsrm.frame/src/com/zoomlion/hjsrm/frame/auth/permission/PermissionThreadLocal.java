package com.zoomlion.hjsrm.frame.auth.permission;
/**
 * **************************************************
 * 描    述：  权限对象的线程本地变量实现<BR>
 * 			 将权限对象PermissionChecker设置到线程变量，以便在其他后续处理可以简易获取该对象
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class PermissionThreadLocal {

	private static ThreadLocal<IPermissionChecker> _threadLocal =new ThreadLocal<IPermissionChecker>();
	
	public static IPermissionChecker getPermissionChecker() {
		return _threadLocal.get();
	}

	public static void setPermissionChecker(IPermissionChecker permissionChecker) {
		_threadLocal.set(permissionChecker);
	}
}
