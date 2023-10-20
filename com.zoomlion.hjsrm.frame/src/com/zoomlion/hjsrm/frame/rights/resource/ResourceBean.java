package com.zoomlion.hjsrm.frame.rights.resource;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.codehaus.jettison.json.JSONString;

import com.eos.das.entity.SequenceGenerator;
import com.eos.data.datacontext.IUserObject;
import com.eos.foundation.data.DataObjectUtil;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.RightsLog;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcAppresauth;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoleres;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcAppresauthImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcRoleresImpl;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现资源管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class ResourceBean extends BaseBean {
	
	private ResourceDao resourceDao;

	private String SYS_DATA_ORG = "0";

	/**
	 * 方法描述: 查询权限内的为应用的资源
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryResourceIsAppByRole() throws BusinessException {
		IUserObject userObject;
		try {		
			userObject = Common.getCurrentUseObject();
		} catch (Exception e) {
			SrmLog.error("查询用户信息异常!", e);
			throw new BusinessException("查询用户信息异常!", e.getMessage());
		}
		String roleids = (String) userObject.getAttributes().get("roles_ids_str");
		Long operatorid = (Long) userObject.getAttributes().get("operatorid");
		String dataorgid = (String) userObject.getAttributes().get("dataorgid");
		String orgid = (String) userObject.getUserOrgId();
		HashMap condition = new HashMap();
		if (roleids != null && !roleids.equals("")) {
			condition.put("roleids", roleids);
		}
		condition.put("operatorid", operatorid);
		if (!this.SYS_DATA_ORG.equals(dataorgid)) {// 系统管理员数据归属为0
			condition.put("dataorgid", dataorgid);
			if(!this.SYS_DATA_ORG.equals(orgid)){
				condition.put("orgid", orgid);
			}
			
		}
		try {
			return this.resourceDao.queryResourceIsAppByRole2(condition);
		} catch (Exception e) {
			SrmLog.error("查询操作员系统资源异常!", e);
			throw new BusinessException("查询操作员系统资源异常!", e.getMessage());
		}
	}

	
	public DataObject[] queryResourceIsBizMap() throws BusinessException {
		IUserObject userObject;
		try {		
			userObject = Common.getCurrentUseObject();
		} catch (Exception e) {
			SrmLog.error("查询用户信息异常!", e);
			throw new BusinessException("查询用户信息异常!", e.getMessage());
		}
		String roleids = (String) userObject.getAttributes().get("roles_ids_str");
		Long operatorid = (Long) userObject.getAttributes().get("operatorid");
		String dataorgid = (String) userObject.getAttributes().get("dataorgid");
		String orgid = (String) userObject.getUserOrgId();
		HashMap condition = new HashMap();
		if (roleids != null && !roleids.equals("")) {
			condition.put("roleids", roleids);
		}
		condition.put("operatorid", operatorid);
		if (!this.SYS_DATA_ORG.equals(dataorgid)) {// 系统管理员数据归属为0
			condition.put("dataorgid", dataorgid);
			if(!this.SYS_DATA_ORG.equals(orgid)){
				condition.put("orgid", orgid);
			}
			
		}
		try {
			return this.resourceDao.queryResourceIsBizMap(condition);
		} catch (Exception e) {
			SrmLog.error("查询操作员系统资源异常!", e);
			throw new BusinessException("查询操作员系统资源异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 查询权限内的为菜单的资源
	 * @author 陈今伟
	 * @param parentresid
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryResourceIsMenuByRole(int parentresid)throws BusinessException {
		IUserObject userObject;
		try {
			userObject = Common.getCurrentUseObject();
		} catch (Exception e) {
			SrmLog.error("查询用户信息异常!", e);
			throw new BusinessException("查询用户信息异常!", e.getMessage());
		}
		String roleids = (String) userObject.getAttributes().get("roles_ids_str");
		Long operatorid = (Long) userObject.getAttributes().get("operatorid");
		String dataorgid = (String) userObject.getAttributes().get("dataorgid");
		if (roleids != null) {
			HashMap condition = new HashMap();
			condition.put("parentresid", parentresid);
			if (roleids != null && !roleids.equals("")) {
				condition.put("roleids", roleids);
			}
			condition.put("operatorid", operatorid);
			if (!this.SYS_DATA_ORG.equals(dataorgid)) {// 系统管理员数据归属为0
				condition.put("dataorgid", dataorgid);
			}
			try {
				return this.resourceDao.queryResourceIsMenuByRole(condition);
			} catch (Exception e) {
				SrmLog.error("查询权限内的为菜单的资源异常!", e);
				throw new BusinessException("查询权限内的为菜单的资源异常!", e.getMessage());
			}
		}
		return null;
	}

	/**
	 * 方法描述: 查询权限内的为菜单的资源
	 * @author 陈今伟
	 * @param parentresid
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryResourceIsMenuByRole()throws BusinessException {
		IUserObject userObject;
		try {
			userObject = Common.getCurrentUseObject();
		} catch (Exception e) {
			SrmLog.error("查询用户信息异常!", e);
			throw new BusinessException("查询用户信息异常!", e.getMessage());
		}
		String roleids = (String) userObject.getAttributes().get("roles_ids_str");
		Long operatorid = (Long) userObject.getAttributes().get("operatorid");
		String dataorgid = (String) userObject.getAttributes().get("dataorgid");
		if (roleids != null) {
			HashMap condition = new HashMap();
			if (roleids != null && !roleids.equals("")) {
				condition.put("roleids", roleids);
			}
			condition.put("operatorid", operatorid);
			if (!this.SYS_DATA_ORG.equals(dataorgid)) {// 系统管理员数据归属为0
				condition.put("dataorgid", dataorgid);
			}
			try {
				return this.resourceDao.queryResourceMenusByRole(condition);
			} catch (Exception e) {
				SrmLog.error("查询权限内的为菜单的资源异常!", e);
				throw new BusinessException("查询权限内的为菜单的资源异常!", e.getMessage());
			}
		}
		return null;
	}
	/**
	 * 方法描述: 查询管理员权限下的所有菜单资源
	 * @author 陈今伟
	 * @param operatorid
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryResourceIsMenuByOrg(int operatorid)throws BusinessException {
		Map condition = new HashMap();
		condition.put("operatorid", operatorid);
		try {
			String dataorgid = Common.getCurrentUserDataOrgId();
			if (Integer.parseInt(dataorgid) == 0) {
				return this.resourceDao.queryResourceIsMenu(condition);
			}
			condition.put("dataorgid", dataorgid);
			return this.resourceDao.queryResourceIsMenuByOrg(condition);
		} catch (Exception e) {
			SrmLog.error("查询管理员权限下的所有菜单资源异常!", e);
			throw new BusinessException("查询管理员权限下的所有菜单资源异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询所有系统资源
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	public DataObject[] queryAllResource() throws BusinessException {
		try {
			return this.resourceDao.queryAllResource();
		} catch (Exception e) {
			SrmLog.error("查询系统资源异常!", e);
			throw new BusinessException("查询系统资源异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 更新所有资源信息
	 * @author 陈今伟
	 * @param resource
	 * @throws BusinessException 
	 * @return void
	 */
	public void saveResource(TAcResource resource)throws BusinessException {
		String dataorgid = null;
		Date date = null;
		String userid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
			date = Common.getCurrentTime();
			userid = Common.getCurrentUseObject().getUserId();
		} catch (Exception e1) {
			SrmLog.error("获取用户信息异常!", e1);
			throw new BusinessException("获取用户信息异常!", e1.getMessage());
		}
		boolean isAdd = false;
		try {
			if (resource.getIsleaf() != null && resource.getIsleaf().equals("on")) {
				resource.setIsleaf("y");
			} else {
				resource.setIsleaf("n");
			}
			if (resource.getIsbizmap()!= null && resource.getIsbizmap().equals("on")) {
				resource.setIsbizmap("y");
			} else {
				resource.setIsbizmap("n");
			}
			resource.setReslabel(resource.getResname());
			// 新增
			if (resource.getResid() == 0) {
				this.resourceDao.getPrimaryKey(resource);
				resource.setCreateby(userid);
				isAdd = true;
			}else{
				resource.setUpdatetime(date);
				resource.setModifyby(userid);
			}
			if (resource.getParentresid() == 0) {
				resource.setResseq("." + resource.getResid() + ".");
			} else {
				TAcResource pnode = new TAcResourceImpl();
				pnode.setResid(resource.getParentresid());
				this.resourceDao.expandEntity(pnode);
				resource.setResseq("" + pnode.getResseq() + "" + resource.getResid() + ".");
			}
			resource.setDataorgid(Integer.valueOf(dataorgid));
			this.resourceDao.saveEntity(resource);
			if (isAdd) {
				//	为sysadmin赋权
				TAcRoleres rolerres = new TAcRoleresImpl();
				rolerres.setRoleid(1);
				rolerres.setResid(resource.getResid());
				rolerres.setDataorgid(Integer.parseInt(dataorgid));
				this.resourceDao.saveEntity(rolerres);
				RightsLog.writeSucceedLog(2, "添加资源【" + resource.getResname() + "】成功");
			} else {
				RightsLog.writeSucceedLog(2, "修改资源【" + resource.getResname() + "】成功");
			}
		} catch (Exception e) {
			SrmLog.error("保存菜单资源异常!", e);
			if (isAdd) {
				RightsLog.writeFailedLog(2, "添加资源【" + resource.getResname() + "】失败", e);
			} else {
				RightsLog.writeFailedLog(2, "修改资源【" + resource.getResname() + "】失败", e);
			}
			throw new BusinessException("保存菜单资源异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 获取新的Rescode
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException 
	 * @return String
	 */
	public String getNewResCode()throws BusinessException{
		long rescode = SequenceGenerator.getNextSequence("TAcResource.Rescode");
		return Common.padLeft(String.valueOf(rescode), 5, '0');
	}
	
	/**
	 * 方法描述: 删除一条资源记录
	 * @author 侯杰
	 * @return
	 * @throws BusinessException 
	 * @return String
	 */
	public void delResource(TAcResource resource)throws BusinessException{
		
		//1、判断资源是否有子节点
		TAcResource resourceTmp = new TAcResourceImpl();
		resourceTmp.setParentresid(resource.getResid());
		TAcResource [] ress = this.resourceDao.queryEntitiesByTemplate(TAcResource.class, resourceTmp);
		if(ress!=null&&ress.length>0){
			throw new BusinessException("该资源不允许!请先删除该资源的子节点", "");
		}
		
		//2、判断资源是否有应用授权
		TAcAppresauth resauthtmp = new TAcAppresauthImpl();
		resauthtmp.setResid(resource.getResid());
		TAcAppresauth [] auths = this.resourceDao.queryEntitiesByTemplate(TAcAppresauth.class, resauthtmp);
		if(auths!=null&&auths.length>0){
			throw new BusinessException("该资源已存在授权公司!请先删除公司授权", "");
		}
		
		//3、判断资源是否有角色授权（sysadmin例外）
		Map map =  new HashMap();
		map.put("resid", resource.getResid());
		DataObject[] dos;
		try {
			dos = this.resourceDao.queryResourceRole(map);
		} catch (Exception e) {
			throw new BusinessException("查询资源角色授权异常", e.getMessage());
		}
		if(dos!=null&&dos.length>0){
			throw new BusinessException("该资源存在角色关联!请先角色资源权限", "");
		}
		
		//4、删除该资源
		try {
			this.resourceDao.deleteEntity(resource);
		} catch (Exception e) {
			throw new BusinessException("删除资源失败", e.getMessage());
		}
		
		
	}
	/**
	 * 方法描述: 移动一条资源记录
	 * @author 侯杰
	 * @return
	 * @throws BusinessException 
	 * @return String
	 */
	public void moveResource(String jsonStr)throws BusinessException{
		String temp = jsonStr.substring(1, jsonStr.length()-1);
		String [] temparr = temp.split(",");
		TAcResource resourceTmp = new TAcResourceImpl();
		int pid = 0;
		for (int i = 0; i < temparr.length; i++) {
			String [] string = temparr[i].split(":");
			if(string[0].equals("resid")){
				resourceTmp.setResid(Integer.parseInt(string[1]));
			}
			if(string[0].equals("parentresid")){
				pid = Integer.parseInt(string[1]);
			}
		}
		this.resourceDao.expandEntity(resourceTmp);
		resourceTmp.setParentresid(pid);
		this.saveResource(resourceTmp);
		
	}
	public void setResourceDao(ResourceDao resourceDao) {
		this.resourceDao = resourceDao;
	}
}
