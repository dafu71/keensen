package com.zoomlion.hjsrm.frame.auth.util;

import java.util.HashMap;

import com.eos.access.authorization.CheckedResult;
import com.eos.access.authorization.IAccessedResource;
import com.eos.data.datacontext.IUserObject;
import com.zoomlion.hjsrm.frame.auth.loader.PermissionCacheManager;
/**
 * **************************************************
 * 描    述：  权限工具类
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class AuthClibUtilBean {
	
	public AuthClibUtilBean() { }

	/**
	 * 方法描述: 检查用户是否具有查看某资源的权限
	 * @author 侯杰
	 * @param accessedResource 资源
	 * @param userObject session中的用户对象
	 * @return
	 * @throws Exception 
	 * @return CheckedResult CheckedResult.THREAD_ACCESSED_PASS  ：有权限，验证通过
	 *          	 		 CheckedResult.REJECT ：没有权限，验证不通过
	 *           			 CheckedResult.FORWARDLOGIN:用户信息为空，跳往登录界面
	 */
	public static CheckedResult hasPermission(IAccessedResource accessedResource,IUserObject userObject) throws Exception{
		CheckedResult rtn=PermissionUtil.hasPermission(accessedResource, userObject);
		return rtn;
	}
	
	/**
	 * 方法描述: 取得缓存中某角色对于的所有功能
	 * @author 侯杰
	 * @param roleid
	 * @return 
	 * @return HashMap
	 */
	public static HashMap getFuncPermissionByRoleid(String roleid) {
		HashMap roleModel=PermissionCacheManager.getPermissionByRole(roleid);
		return roleModel;
	}

	/**
	 * 方法描述:  判断用户是否有权限访问功能
	 *          不进行权限校验的情况，有如下几种：
	 *          1、为配置中的免检用户如sysadmin
	 *          2、当前所调用的资源为portal资源(abframe的portal资源管理)
	 * @author 侯杰
	 * @param funccode
	 * @param userObject
	 * @return 
	 * @return boolean
	 */
	public static boolean checkRight(String funccode, IUserObject userObject) {
		return PermissionUtil.checkRight(funccode, userObject);
	}
	
	/**
	 * 方法描述: 判断是否已登记的功能
	 * @author 侯杰
	 * @param url
	 * @return 
	 * @return boolean
	 */
	public static boolean isRegistedFunction(String url) {
		 return PermissionUtil.isRegistedFunction(url);
	}
	
	/**
	 * 方法描述: 是否免检用户
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public static boolean isAdminUser() throws Exception {
		IUserObject user = PermissionUtil.getUserObject();
		return PermissionUtil.isAdminUser(user);
	}
	
	/**
	 * 方法描述: 取得session中的userobject
	 * @author 侯杰
	 * @return 
	 * @return IUserObject
	 */
	public static  IUserObject getUserObject() {
		return PermissionUtil.getUserObject(); 
	}
}
