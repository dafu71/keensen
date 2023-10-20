package com.zoomlion.hjsrm.frame.auth.permission;

import com.eos.data.datacontext.IUserObject;
/**
 * **************************************************
 * 描    述：  功能权限校验接口基础实现类 实现初始化用户对象(UserObject)获取操作员角色集合，以及实现hasAccessPermission方法校验权限
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public abstract class BasePermissionChecker implements IPermissionChecker{
	
	protected String[] roles;  //角色

	protected String operatorid;

	protected boolean checkGuest;
	
	/**
	 * 方法描述: 初始化用户信息
	 * @author bingyu
	 * @param userObject 
	 * @param checkGuest 
	 * @return 
	 * @return 
	 */
	public void init(IUserObject userObject,boolean checkGuest){
		if(userObject!=null){
			String roles_str=(String)(userObject.getAttributes().get("roles_ids_str"));//确认具体位置  需要跟初始化session中路径一致
			if(roles_str!=null)
				roles =roles_str.split(","); 
			Long operid=(Long)userObject.getAttributes().get("operatorid");
			operatorid=operid==null?null:operid+"";
		}
		this.checkGuest=checkGuest;
	}

	/**
	 * 方法描述: 判断指定的角色是否拥有某一功能的权限
	 * @author bingyu
	 * @param roleid 角色ID
	 * @param action 功能入口
	 * @param isResource 是否检查资源
	 * @return 
	 * @return boolean true-有权限,false-无权限
	 */
	public abstract boolean checkRolePermission(String roleid, String action,boolean isResource);

	/**
	 * 方法描述: 校验附加功能权限(不通过角色授权)
	 * @author bingyu
	 * @param operatorid 操作员ID
	 * @param action 功能入口
	 * @param isResource 是否检查资源
	 * @return 
	 * @return int
	 */
	public abstract int checkAdditionalPermission(String operatorid,String action,boolean isResource);

	/**
	 * 方法描述: 判断当前action是否具有可访问权限
	 * @author bingyu
	 * @param action 功能入口
	 * @param isResource 是否检查资源
	 * @return 
	 * @return int
	 */
	public boolean hasAccessPermission(String action,boolean isResource){
		//不检查guest用户权限
		if(!checkGuest)
			return true;
		int checkResult=checkAdditionalPermission(operatorid,action,isResource);
		if(checkResult==AUTH_TYPE_RESULT_ON)
			return true;
		if(checkResult==AUTH_TYPE_RESULT_OFF)
			return false;
		if(roles!=null){
			for(int i=0;i<roles.length;i++){
				if(this.checkRolePermission(roles[i], action,isResource)){
					return true;
				}
			}
		}
		return false;
	}
	
	public boolean getCheckGuest(){
		return checkGuest;
	}


	public String[] getOperatorRoles() {
		return roles;
	}
	

	public String getOperatorId(){
		return operatorid;
	}

	public void setCheckGuest(boolean checkGuest) {
		this.checkGuest=checkGuest;

	}

	public void recycle() {
		roles = new String[0];
		operatorid =null;
		checkGuest = false;
	}
}
