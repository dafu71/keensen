package com.zoomlion.hjsrm.frame.rights.role;

import java.util.HashMap;
import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoleres;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现角色资源功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class QueryRoleResDao extends BaseDao {
	
	/**
	 * 方法描述: 保存角色资源
	 * @author 陈今伟
	 * @param roleid
	 * @param dataorgid
	 * @param checkeds
	 * @throws Exception 
	 * @return void
	 */
	public void saveRoleRs(int roleid,int dataorgid,int[] checkeds) throws Exception {
		TAcRoleres[] insertEt = new TAcRoleres[checkeds.length];
		for (int j = 0; j < checkeds.length; j++) {
			insertEt[j] = TAcRoleres.FACTORY.create();
			insertEt[j].setRoleid(roleid);
			insertEt[j].setResid(checkeds[j]);
			insertEt[j].setDataorgid(dataorgid);
			this.saveEntity(insertEt[j]);
		}
	}
	
	/**
	 * 方法描述: 删除角色下所有资源
	 * @author 陈今伟
	 * @param roleid
	 * @throws Exception 
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void moveRoleResByRoleid(int roleid) throws Exception {
		Map map = new HashMap();
		map.put("roleid", roleid);
		this.executeNamedSql("com.zoomlion.hjsrm.frame.rights.role.role.delRoleRes", map);
		
	}

	/**
	 * 方法描述: 加载已授权的资源
	 * @author 陈今伟
	 * @param roleid
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadAuthorizedRs(Map param) throws Exception {
		String dataorgid = Common.getCurrentUserDataOrgId();
		String roles = (String) Common.getCurrentUseObject().getAttributes().get("roles_ids_str");		
		param.put("orgid", dataorgid);
		param.put("roles", roles);
		String sql;
		if(Integer.parseInt(dataorgid) == 0){
			//系统级的角色 不需要读取授权表
			sql = "com.zoomlion.hjsrm.frame.rights.role.role.loadAuthorizedMnSys";
		}else{
			//公司级的角色，须关联机构授权表
			sql = "com.zoomlion.hjsrm.frame.rights.role.role.loadAuthorizedMnCom";
		}
		return queryByNamedSql(DataObject.class, sql, param);
	}
	/**
	 * 方法描述: 加载已授权的资源
	 * @author 方曦
	 * @param roleid
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadAuthorizedRs(int[] roleids) throws Exception {
		String dataorgid = Common.getCurrentUserDataOrgId();
		String roles = (String) Common.getCurrentUseObject().getAttributes().get("roles_ids_str");		
		Map<String,Object> param = new HashMap<String,Object>();		
		param.put("roleids", roleids);
		param.put("orgid", dataorgid);
		param.put("roles", roles);
		String sql;
		if(Integer.parseInt(dataorgid) == 0){
			//系统级的角色 不需要读取授权表
			sql = "com.zoomlion.hjsrm.frame.rights.role.role.loadAuthorizedMnSyss";
		}else{
			//公司级的角色，须关联机构授权表
			sql = "com.zoomlion.hjsrm.frame.rights.role.role.loadAuthorizedMnComs";
		}
		return queryByNamedSql(DataObject.class, sql, param);
	}
}
