/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 修改组织机构模型
 * 创建日期： 2014-9-24
 * 补丁编号： G3_P_20140915_01_238 
 * 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20140915_01_238 吕俊涛   2014-9-24  集团
//
// =================================================================
package com.zoomlion.hjsrm.frame.bclib;

import java.util.HashMap;
import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmData;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmOrganization;
import com.zoomlion.hjsrm.data.org.Organization.VOmOrganizationTrs;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmOrganizationImpl;
import com.zoomlion.hjsrm.data.org.Organization.impl.VOmOrganizationTrsImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRole;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcRoleImpl;
import com.zoomlion.hjsrm.frame.rights.role.RoleDao;
/**
 * **************************************************
 * 描    述：  机构公共方法
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OrganizationBclibBean extends BaseBean {

	private OrganizationBclibDao organizationBclibDao;

	private RoleDao roleDao;

	/**
	 * 方法描述: 查询机构下的子机构信息
	 * @author 侯杰
	 * @param OrgId
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] querySubOrganizations(int OrgId)throws BusinessException {
		try {
			TOmOrganization org = new TOmOrganizationImpl();
			org.setParentorgid(OrgId);
			return organizationBclibDao.queryEntitiesByTemplate(TOmOrganization.class, org);
		} catch (Exception e) {
			SrmLog.error("查询机构的下级机构信息失败", e);
			throw new BusinessException("查询机构的下级机构信息失败", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询机构的平级机构信息
	 * @author 侯杰
	 * @param OrgId
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryEvenOrganizations(int OrgId)throws BusinessException {
		try {
			TOmOrganization org = new TOmOrganizationImpl();
			TOmOrganization porg = new TOmOrganizationImpl();
			org.setOrgid(OrgId);
			organizationBclibDao.expandEntity(org);
			porg.setParentorgid(org.getParentorgid());
			return organizationBclibDao.queryEntitiesByTemplate(TOmOrganization.class, porg);
		} catch (Exception e) {
			SrmLog.error("查询机构的平级机构信息失败", e);
			throw new BusinessException("查询机构的平级机构信息失败", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询机构的上级机构信息
	 * @author 侯杰
	 * @param OrgId
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization
	 */
	public TOmOrganization querySupOrganizations(int OrgId)throws BusinessException {
		try {
			TOmOrganization org = new TOmOrganizationImpl();
			TOmOrganization porg = new TOmOrganizationImpl();
			org.setOrgid(OrgId);
			organizationBclibDao.expandEntity(org);
			porg.setOrgid(org.getParentorgid());
			organizationBclibDao.expandEntity(porg);
			return porg;
		} catch (Exception e) {
			SrmLog.error("查询机构的上级机构信息失败", e);
			throw new BusinessException("查询机构的上级机构信息失败", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询机构下的角色信息
	 * @author 侯杰
	 * @param OrgId
	 * @return
	 * @throws BusinessException
	 * @return TAcRole[]
	 */
	public TAcRole[] queryOrganizationRoles(int OrgId) throws BusinessException {
		TAcRole role = new TAcRoleImpl();
		role.setDataorgid(OrgId);
		try {
			return roleDao.queryEntitiesByTemplate(TAcRole.class, role);
		} catch (Exception e) {
			SrmLog.error("查询机构角色信息失败", e);
			throw new BusinessException("查询机构角色信息失败", e.getMessage());
		}
	}

	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询)
	 * @author 侯杰
	 * @param organization
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryOrgnizations(TOmOrganization organization)throws BusinessException {
		Map condition;
		try {
			organization.setDelflag("n");
			organization.setStatus("running");
			condition = SrmData.entityToData(organization);
		} catch (Exception e) {
			SrmLog.error("查询条件转换异常", e);
			throw new BusinessException("查询条件转换异常", e.getMessage());
		}
		try {
			return organizationBclibDao.queryOrgnizations(condition);
		} catch (Exception e) {
			SrmLog.error("机构查询异常", e);
			throw new BusinessException("机构查询异常", e.getMessage());
		}
	}

	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询)
	 * @author dafu
	 * @param organization
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	public VOmOrganizationTrs[] queryOrgnizations(VOmOrganizationTrs organization)throws BusinessException {
		Map condition;
		try {
			organization.setDelflag("n");
			organization.setStatus("running");
			condition = SrmData.entityToData(organization);
		} catch (Exception e) {
			SrmLog.error("查询条件转换异常", e);
			throw new BusinessException("查询条件转换异常", e.getMessage());
		}
		try {
			return organizationBclibDao.queryOrgnizations2(condition);
		} catch (Exception e) {
			SrmLog.error("机构查询异常", e);
			throw new BusinessException("机构查询异常", e.getMessage());
		}
	}
	
	
	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询)
	 * @author 侯杰
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] queryDataCompanys() throws BusinessException {
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取用户信息异常", e);
			throw new BusinessException("获取用户信息异常", e.getMessage());
		}
		try {
			// 如果存在数据归属
			if (dataorgid != null && !dataorgid.equals("")) {
				if (!dataorgid.equals("0")) {
					Map condition = new HashMap();
					condition.put("orgid", dataorgid);
					return organizationBclibDao.queryDataCompanys(condition);
				} else {
					return organizationBclibDao.queryAllCompanys(new HashMap());
				}
			} else {
				throw new BusinessException("用户数据归属信息异常", "");
			}
		} catch (Exception e) {
			SrmLog.error("查询操作员公司信息异常", e);
			throw new BusinessException("查询操作员公司信息异常", e.getMessage());
		}

	}
	
	
	
	/**
	 * 方法描述: 依据查询对象查询机构(按VOmOrganizationTrs实体查询)
	 * @author dafu
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public VOmOrganizationTrs[] queryDataCompanys2() throws BusinessException {
		String dataorgid;
		String rolecodeStr="";
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
			rolecodeStr = Common.getCurrentUseObject().getAttributes().get("roles_rolecode_str").toString();
		} catch (Exception e) {
			SrmLog.error("获取用户信息异常", e);
			throw new BusinessException("获取用户信息异常", e.getMessage());
		}
		try {
			// 如果存在数据归属
			if (dataorgid != null && !dataorgid.equals("") ) {
				if (!dataorgid.equals("0") && rolecodeStr.indexOf("srmadmin")==-1) {
					Map condition = new HashMap();
					condition.put("orgid", dataorgid);
					return organizationBclibDao.queryDataCompanys2(condition);
				} else {//sysadmin和srmadmin
					return organizationBclibDao.queryAllCompanys2(new HashMap());
				}
			} else {
				throw new BusinessException("用户数据归属信息异常", "");
			}
		} catch (Exception e) {
			SrmLog.error("查询操作员公司信息异常", e);
			throw new BusinessException("查询操作员公司信息异常", e.getMessage());
		}

	}
	
	/**
	 * 方法描述: 依据查询对象查询机构(按VOmOrganizationTrs实体查询)
	 * @author dafu
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public VOmOrganizationTrs[] queryDataCompanysAdd() throws BusinessException {
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取用户信息异常", e);
			throw new BusinessException("获取用户信息异常", e.getMessage());
		}
		try {
			// 如果存在数据归属
			if (dataorgid != null && !dataorgid.equals("")) {
				if (!dataorgid.equals("0")) {
					Map condition = new HashMap();
					condition.put("orgid", dataorgid);
					return organizationBclibDao.queryDataCompanysAdd(condition);
				} else {
					return organizationBclibDao.queryAllCompanysAdd(new HashMap());
				}
			} else {
				throw new BusinessException("用户数据归属信息异常", "");
			}
		} catch (Exception e) {
			SrmLog.error("查询操作员公司信息异常", e);
			throw new BusinessException("查询操作员公司信息异常", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询分公司(按TOmOrganization实体查询)
	 * @author  吕俊涛
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] queryDataSubCompanys() throws BusinessException {
		try {
			return organizationBclibDao.queryDataSubCompanys(new HashMap());
		} catch (Exception e) {
			SrmLog.error("查询操作员公司信息异常", e);
			throw new BusinessException("查询操作员公司信息异常", e.getMessage());
		}
	}

	/**
	 * 方法描述: 依据查询对象查询区域(按TOmOrganization实体查询)
	 * @author 侯杰
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] queryDataAreas() throws BusinessException {
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取用户信息异常", e);
			throw new BusinessException("获取用户信息异常", e.getMessage());
		}
		try {
			// 如果存在数据归属
			if (dataorgid != null && !dataorgid.equals("")) {
				Map condition = new HashMap();
				condition.put("status", "running");
				if (!dataorgid.equals("0")) {
					condition.put("dataorgid", dataorgid);
					condition.put("orgtype", 3);
					return organizationBclibDao.queryOrgnizations(condition);
				} else {
					condition.put("orgtype", 3);
					return organizationBclibDao.queryOrgnizations(condition);
				}
			} else {
				throw new BusinessException("用户数据归属信息异常", "");
			}
		} catch (Exception e) {
			SrmLog.error("查询操作员区域信息异常", e);
			throw new BusinessException("查询操作员区域信息异常", e.getMessage());
		}
	}

	/**
	 * 方法描述:获取当前操作员权限内的机构类型为0,1,3的机构信息
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] getOrgInDataArea() throws BusinessException {
		// 获取当前操作员权限
		String dataOrgidStr;
		try {
			dataOrgidStr = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取用户信息异常", e);
			throw new BusinessException("获取用户信息异常", e.getMessage());
		}
		if (dataOrgidStr != null || !dataOrgidStr.equals("")) {
			if (!dataOrgidStr.equals("0")) {
				try {
					Map condition = new HashMap();
					condition.put("orgid", Integer.valueOf(dataOrgidStr));
					condition.put("status", "running");
					condition.put("delflag", "n");
					condition.put("orgtypes", "'0','1','3'");
					
					return this.organizationBclibDao.queryDataAreas(condition);
				} catch (Exception e1) {
					SrmLog.error("获取机构信息异常", e1);
					throw new BusinessException("获取机构信息异常", e1.getMessage());
				}
			}
			try {
				TOmOrganization org = new TOmOrganizationImpl();
				org.setStatus("running");
				org.setDelflag("n");
				return organizationBclibDao.queryEntitiesByTemplate(TOmOrganization.class, org);
			} catch (Exception e2) {
				SrmLog.error("获取机构信息异常", e2);
				throw new BusinessException("获取机构信息异常", e2.getMessage());
			}
		}
		return null;
	}

	
	/**
	 * 方法描述:获取当前操作员权限内的机构类型为0,1,3的机构信息
	 * @author dafu
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public VOmOrganizationTrs[] getOrgInDataArea2() throws BusinessException {
		// 获取当前操作员权限
		String dataOrgidStr;
		try {
			dataOrgidStr = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取用户信息异常", e);
			throw new BusinessException("获取用户信息异常", e.getMessage());
		}
		if (dataOrgidStr != null || !dataOrgidStr.equals("")) {
			if (!dataOrgidStr.equals("0")) {
				try {
					Map condition = new HashMap();
					condition.put("orgid", Integer.valueOf(dataOrgidStr));
					condition.put("status", "running");
					condition.put("delflag", "n");
					condition.put("orgtypes", "'0','1','3'");
					
					return this.organizationBclibDao.queryDataAreas2(condition);
				} catch (Exception e1) {
					SrmLog.error("获取机构信息异常", e1);
					throw new BusinessException("获取机构信息异常", e1.getMessage());
				}
			}
			try {
				VOmOrganizationTrs org = new VOmOrganizationTrsImpl();
				org.setStatus("running");
				org.setDelflag("n");
				return organizationBclibDao.queryEntitiesByTemplate(VOmOrganizationTrs.class, org);
			} catch (Exception e2) {
				SrmLog.error("获取机构信息异常", e2);
				throw new BusinessException("获取机构信息异常", e2.getMessage());
			}
		}
		return null;
	}
	
	
	
	/**
	 * 方法描述:获取当前操作员权限内的机构类型为0,1,3的机构信息
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] getOrgInDataClient(String areaid) throws BusinessException {		
		Map condition = new HashMap();	
		condition.put("areaid", areaid);
			try {
				return this.organizationBclibDao.queryDataClient(condition);
			} catch (Exception e1) {
				SrmLog.error("获取机构信息异常", e1);
				throw new BusinessException("获取机构信息异常", e1.getMessage());
			}
	}
	
	/**
	 * 方法描述:获取当前操作员登录机构及以下的机构树
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException 
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] getDataOrgs() throws BusinessException {	
		String orgid;
		try {
			orgid = Common.getCurrentUserOrgId();
		} catch (Exception e) {
			SrmLog.error("获取用户信息异常", e);
			throw new BusinessException("获取用户信息异常", e.getMessage());
		}
		if(orgid == null){
			return null;
		}
		Map condition = new HashMap();	
		condition.put("orgid", orgid);
		try {
			return this.organizationBclibDao.queryEquDownOrgs(condition, null);
		} catch (Exception e1) {
			SrmLog.error("获取机构信息异常", e1);
			throw new BusinessException("获取机构信息异常", e1.getMessage());
		}
	}
	
	
	public OrganizationBclibDao getOrganizationBclibDao() {
		return organizationBclibDao;
	}

	public void setOrganizationBclibDao(
			OrganizationBclibDao organizationBclibDao) {
		this.organizationBclibDao = organizationBclibDao;
	}

	public RoleDao getRoleDao() {
		return roleDao;
	}

	public void setRoleDao(RoleDao roleDao) {
		this.roleDao = roleDao;
	}

}