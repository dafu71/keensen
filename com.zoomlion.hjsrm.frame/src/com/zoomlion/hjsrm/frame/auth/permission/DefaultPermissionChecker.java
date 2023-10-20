package com.zoomlion.hjsrm.frame.auth.permission;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.frame.auth.loader.PermissionCacheManager;
import com.zoomlion.hjsrm.frame.auth.loader.PrivilegeCacheManager;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  默认权限校验实现类
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class DefaultPermissionChecker extends BasePermissionChecker{
	
	private static final long serialVersionUID = 4544582373536964707L;

	public DefaultPermissionChecker(){
	}

	/**
	 * 方法描述: 检查角色的资源权限, 根据角色对于的hashmap 
	 * @author bingyu
	 * @param role 角色模型
	 * @param action 资源路径
	 * @return 
	 * @return boolean 有权限返回true,否则返回false
	 */
	private boolean checkResourcePermission(HashMap<String,Map> role,String action){
		Iterator<String> rescodes=role.keySet().iterator();
		while(rescodes.hasNext()){
			String rescode=rescodes.next();
			if(role.get(rescode)!=null){
				DataObject temp = (DataObject) role.get(rescode);
				if(temp!=null&&temp.get("respath")!=null){
					if(temp.get("respath").toString().equals(action)){
						return true;
					}
				}
			}
		}
		return false;
	}
	
	/**
	 * 方法描述: 检查对应角色的功能权限
	 * @author bingyu
	 * @param role 角色模型
	 * @param action 资源路径
	 * @return  
	 * @return boolean 有权限返回true,否则返回false
	 */
	private boolean checkFunctionPermission(HashMap<String,Map> role,String action){
		String rescode=this.getRescodeFromMap4Action(role, action);
		if(rescode==null){
			return false;//没有找到对应rescode 认为没有权限
		}else{
			return true;
		}
	}
	
	/**
	 * 方法描述: 循环roleid对应的缓存取到对应的rescode
	 * @author bingyu
	 * @param map
	 * @param action
	 * @return 
	 * @return String
	 */
	private String  getRescodeFromMap4Action(HashMap<String,Map> map,String action){
		Iterator<String> rescodes=map.keySet().iterator();
		while(rescodes.hasNext()){
			String rescode=rescodes.next();
			if(map.get(rescode)!=null){
				DataObject temp = (DataObject) map.get(rescode);
					if(temp!=null&&temp.get("respath")!=null){
						if(temp.get("respath").toString().equals(action)){
							return rescode;
						}
					}
				}
			}
		return null;
	}
	
	
	/**
	 * 方法描述: 检查对应操作员的特殊权限
	 * @author bingyu
	 * @param operatorid
	 * @param isResource
	 * @return 
	 * @return String
	 */
	@SuppressWarnings("unchecked")
	public int checkAdditionalPermission(String operatorid,String action,boolean isResource) {		
		List<DataObject> oper=PrivilegeCacheManager.getPrivilegeByOid(operatorid);			
		if(oper!=null){
			for (Iterator iter = oper.iterator(); iter.hasNext();) {
				DataObject el = (DataObject) iter.next();
				if(el.getString("respath")!=null&&action.equals(el.getString("respath"))){
					String authType=el.getString("authtype");
					boolean auth = AUTH_TYPE_ON.equalsIgnoreCase(authType);
					//判断是否在有效时间内
					String dateStart=el.getString("startdate");  //日期为yyyy-mm-dd hh24:mi:ss 格式 在loader缓存时通过sql的to_char 语句已经转换
					String dateEnd=el.getString("enddate");
					String now=null;
					try {
						now=Common.getSysTime("yyyy-MM-dd HH:mm:ss");
					} catch (Exception e) {
						// TODO 自动生成 catch 块
						e.printStackTrace();
					}
					if(auth&&dateEnd==null&&dateStart.compareTo(now)<=0){
						return 1;
					}
					if(auth&&dateEnd!=null&&dateStart.compareTo(now)<=0&&now.compareTo(dateEnd)<=0){
						return 1;
					}
				}
				
			}
							
		}
		return AUTH_TYPE_RESULT_NONE;
	}

	/**
	 * 方法描述: 检查对应操作员的特殊权限
	 * @author bingyu
	 * @param operatorid
	 * @param rescode
	 * @return 
	 * @return int
	 */
	@SuppressWarnings("unchecked")
	public int checkAdditionalRightPermission(String operatorid,String rescode) {		
		List<DataObject> oper=PrivilegeCacheManager.getPrivilegeByOid(operatorid);	
		
		if(oper!=null){
			for (Iterator iter = oper.iterator(); iter.hasNext();) {
				DataObject el = (DataObject) iter.next();
				if(el.getString("rescode")!=null){
					
					String authType=el.getString("authtype");
					boolean auth = AUTH_TYPE_ON.equalsIgnoreCase(authType);
					//判断是否在有效时间内
					String dateStart=el.getString("startdate");  //日期为yyyy-mm-dd hh24:mi:ss 格式 在loader缓存时通过sql的to_char 语句已经转换
					String dateEnd=el.getString("enddate");
					String now=null;
					try {
						now=Common.getSysTime("yyyy-MM-dd HH:mm:ss");
					} catch (Exception e) {
						// TODO 自动生成 catch 块
						e.printStackTrace();
					}
					if(auth&&dateEnd==null&&dateStart.compareTo(now)<=0){
						return 1;
					}
					if(auth&&dateEnd!=null&&dateStart.compareTo(now)<=0&&now.compareTo(dateEnd)<=0){
						return 1;
					}
				}
				
			}
							
		}
		return AUTH_TYPE_RESULT_NONE;
	}
	
	/**
	 * 方法描述: 检查角色权限
	 * @author bingyu
	 * @param roleid
	 * @param action
	 * @param isResource
	 * @return 
	 * @return boolean
	 */
	@SuppressWarnings("unchecked")
	public boolean checkRolePermission(String roleid, String action,boolean isResource) {
		HashMap roleModel=PermissionCacheManager.getPermissionByRole(roleid);
		if(roleModel!=null){
			//当前是资源检查
			if(isResource){
				return checkResourcePermission(roleModel, action);
			}else{
				return checkFunctionPermission(roleModel, action);
			}
		}
		return false;
	}
	
	/**
	 * 方法描述: 检查角色权限
	 * @author 陈今伟
	 * @param roleid
	 * @param rescode
	 * @return 
	 * @return boolean
	 */
	public boolean checkRolePermission(String roleid, String rescode) {
		HashMap roleModel=PermissionCacheManager.getPermissionByRole(roleid);
		if(roleModel!=null&&roleModel.get(rescode)!=null){
			return true; //如果角色的权限缓存中存在该rescode
		}
		return false;
	}

	/**
	 * 方法描述: 用于判断是否拥有该资源，不需要判断资源的URL路径是否包含在 配置的respath中。只需要验证rescode是否在配置的rescode中
	 * @author bingyu
	 * @param rescode
	 * @return 
	 * @return int
	 */
	public boolean hasRightPermission(String rescode) {
		int checkResult=checkAdditionalRightPermission(operatorid,rescode);
		if(checkResult==AUTH_TYPE_RESULT_ON)
			return true;
		if(checkResult==AUTH_TYPE_RESULT_OFF)
			return false;
		if(roles!=null){
			for(int i=0;i<roles.length;i++){
				if(this.checkRolePermission(roles[i],rescode)){
					return true;
				}
			}
		}
		return false;
	}
}
