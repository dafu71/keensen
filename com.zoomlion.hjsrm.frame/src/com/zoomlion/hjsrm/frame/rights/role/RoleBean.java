package com.zoomlion.hjsrm.frame.rights.role;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.eos.das.entity.SequenceGenerator;
import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.VOmOrganizationTrs;
import com.zoomlion.hjsrm.data.org.Organization.impl.VOmOrganizationTrsImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperatorrole;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRole;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoleres;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperatorroleImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcRoleImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcRoleresImpl;
import com.zoomlion.hjsrm.frame.auth.loader.PermissionCacheManager;
import com.zoomlion.hjsrm.frame.rights.operatorrole.OperatorRoleDao;
import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现角色管理功能
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-28 陈今伟 创建文件
 *      **************************************************
 */
public class RoleBean extends BaseBean {

	private RoleDao roleDao;

	private OperatorRoleDao operatorRoleDao;

	private QueryRoleResDao queryRoleResDao;

	@SuppressWarnings("unused")
	private String SYS_ROLETYPE = "0";

	@SuppressWarnings("unused")
	private String COM_ROLETYPE = "1";

	/**
	 * 方法描述: 新增角色
	 * 
	 * @author 陈今伟
	 * @param role
	 * @throws BusinessException
	 * @return void
	 */
	public void addRole(TAcRole role) throws BusinessException {
		String roleId;
		try {
			role.setCreateby(Common.getCurrentUserId());
			roleId = this.roleDao.getEosPKByKeyname("TAcRole.roldeid");

			// TOmOrganization org = new TOmOrganizationImpl();
			// this.roleDao.expandEntity(org);
			//按orgid查询dataorgid
			VOmOrganizationTrs orgTemplate = new VOmOrganizationTrsImpl();
			orgTemplate.setOrgid(role.getOrgid());
			VOmOrganizationTrs[] orgs = this.roleDao.queryEntitiesByTemplate(
					VOmOrganizationTrs.class, orgTemplate);
			if (null != orgs && orgs.length > 0) {
				role.setDataorgid(orgs[0].getDataorgid());
			} else {
				role.setDataorgid(10000);
			}
		} catch (Exception e) {
			SrmLog.error("新增角色异常!", e);
			throw new BusinessException("新增角色异常!", e.getMessage());
		}
		role.setRoleid(Integer.parseInt(roleId));
		this.roleDao.insertEntity(role);
	}

	/**
	 * 方法描述: 修改角色(role)
	 * 
	 * @author 陈今伟
	 * @param role
	 * @throws BusinessException
	 * @return void
	 */
	public void modifyRole(TAcRole role) throws BusinessException {
		String currentUserId;
		try {
			currentUserId = Common.getCurrentUserId();
		} catch (Exception e) {
			SrmLog.error("查询当前用户信息异常!", e);
			throw new BusinessException("查询当前用户信息异常！", e.getMessage());
		}
		if (currentUserId != null) {
			role.setModifyby(currentUserId);
			role.setUpdatetime(new Date(System.currentTimeMillis()));
			//TOmOrganization org = new TOmOrganizationImpl();
			//org.setOrgid(role.getOrgid());
			//this.roleDao.expandEntity(org);
			//role.setDataorgid(org.getDataorgid());
			//按orgid查询dataorgid
			VOmOrganizationTrs orgTemplate = new VOmOrganizationTrsImpl();
			orgTemplate.setOrgid(role.getOrgid());
			VOmOrganizationTrs[] orgs = this.roleDao.queryEntitiesByTemplate(
					VOmOrganizationTrs.class, orgTemplate);
			if (null != orgs && orgs.length > 0) {
				role.setDataorgid(orgs[0].getDataorgid());
			} else {
				role.setDataorgid(10000);
			}
			try {
				this.roleDao.saveEntity(role);
			} catch (Exception e) {
				SrmLog.error("修改角色信息异常!", e);
				throw new BusinessException("修改角色信息异常！", e.getMessage());
			}
		}
	}

	/**
	 * 方法描述: 删除角色(及删除角色对应的关系)
	 * 
	 * @author 陈今伟
	 * @param role
	 * @throws BusinessException
	 * @return void
	 */
	public void deleteRole(TAcRole role) throws BusinessException {
		int roleid = role.getRoleid();
		if (role.getRoleid() != 0) {

			// 1、判断是否有角色操作员
			TAcOperatorrole operatorRoleTemplate = new TAcOperatorroleImpl();
			operatorRoleTemplate.setRoleid(roleid);
			TAcOperatorrole[] tos;
			try {
				tos = operatorRoleDao.queryEntitiesByTemplate(
						TAcOperatorrole.class, operatorRoleTemplate);
			} catch (Exception e) {
				SrmLog.error("查询角色操作员关系异常", new Exception());
				throw new BusinessException("查询角色操作员关系异常", "");
			}

			if (tos != null && tos.length > 0) {
				SrmLog.error("该角色已经被授权给操作员，请删除授权后在进行该操作!", new Exception());
				throw new BusinessException("该角色已经被授权给操作员，请删除授权后在进行该操作！", "");
			}

			// 2、删除角色资源关系
			TAcRoleres roleresTemplate = new TAcRoleresImpl();
			roleresTemplate.setRoleid(roleid);
			try {
				queryRoleResDao.deleteByTemplate(roleresTemplate);
			} catch (Exception e) {
				SrmLog.error("删除角色资源异常!", e);
				throw new BusinessException("删除角色资源异常！", e.getMessage());
			}
			// 3、删除角色
			try {
				this.roleDao.deleteEntity(role);
			} catch (Exception e) {
				SrmLog.error("删除角色信息异常!", e);
				throw new BusinessException("删除角色信息异常！", e.getMessage());
			}

		}
	}

	/**
	 * 方法描述: 根据Roleid查询详细信息
	 * 
	 * @author 陈今伟
	 * @param roleid
	 * @return
	 * @throws BusinessException
	 * @return TAcRole
	 */
	public TAcRole queryRoleByRoleId(int roleid) throws BusinessException {
		TAcRole role = new TAcRoleImpl();
		try {
			role.setRoleid(roleid);
			roleDao.expandEntity(role);
		} catch (Exception e) {
			SrmLog.error("查询修改角色信息异常！", e);
			throw new BusinessException("查询修改角色信息异常！", e.getMessage());
		}
		return role;
	}

	/**
	 * 方法描述: 依据当前操作员的权限查询角色 (通过orgid过滤角色)
	 * 
	 * @author 陈今伟
	 * @param role
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryRoleByOpeartorPermission(TAcRole role,
			PageCond pageCond) throws BusinessException {
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("查询当前用户信息异常!", e);
			throw new BusinessException("查询当前用户信息异常!", e.getMessage());
		}
		Map condition = new HashMap();
		condition.put("rolecode", role.getRolecode());
		condition.put("rolename", role.getRolename());
		String orgid = Integer.toString(role.getOrgid());
		String sysrole = role.getString("sysrole");
		if (sysrole != null && sysrole.equals("on")) {
			condition.put("sysrole", true);
		}
		condition.put("orgid", "0".equals(orgid) ? null : orgid);
		if ("0".equals(dataorgid)) {
			try {
				return this.roleDao.queryRoleByOpeartorPermission(condition,
						pageCond);// 系统管理员可以管理所有的角色
			} catch (Exception e) {
				SrmLog.error("依据当前操作员的权限查询角色异常!", e);
				throw new BusinessException("依据当前操作员的权限查询角色异常!", e.getMessage());
			}
		} else {
			try {
				condition.put("dataorgid", dataorgid);
				return this.roleDao.queryRoleByOpeartorPermission(condition,
						pageCond);
			} catch (Exception e) {
				SrmLog.error("依据当前操作员的权限查询角色异常!", e);
				throw new BusinessException("查询角色机构信息异常！", e.getMessage());
			}
		}
	}

	/**
	 * 方法描述: 批量删除角色对应的操作员
	 * 
	 * @author 陈今伟
	 * @param operatorRoles
	 * @throws BusinessException
	 * @return void
	 */
	public void deleteOperatorRoleBatch(TAcOperatorrole[] operatorRoles)
			throws BusinessException {
		try {
			this.operatorRoleDao.deleteEntityBatch(operatorRoles);
		} catch (Exception e) {
			SrmLog.error("删除角色下操作员信息异常！", e);
			throw new BusinessException("删除角色下操作员信息异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 批量新增角色对应的操作员
	 * 
	 * @author 陈今伟
	 * @param operatorRoles
	 * @throws BusinessException
	 * @return void
	 */
	public void addOperatorRoleBatch(TAcOperatorrole[] operatorRoles)
			throws BusinessException {
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("查询用户机构信息异常！", e);
			throw new BusinessException("查询用户机构信息异常！", e.getMessage());
		}
		if (dataorgid != null) {
			for (TAcOperatorrole iteratorRoleOperator : operatorRoles) {// 配置数据记录归属
				iteratorRoleOperator.setDataorgid(Integer.parseInt(dataorgid));
			}
			try {
				this.operatorRoleDao.insertEntityBatch(operatorRoles);
			} catch (Exception e) {
				SrmLog.error("批量新增角色操作员异常！", e);
				throw new BusinessException("批量新增角色操作员异常！", e.getMessage());
			}
		}
	}

	/**
	 * 方法描述: 加载已授权的资源
	 * 
	 * @author 陈今伟
	 * @param roleid
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadRoleAuthorizedRs(int roleid, String parentid)
			throws BusinessException {
		Map param = new HashMap();
		param.put("roleid", roleid);
		param.put("parentid", parentid);
		try {
			return this.queryRoleResDao.loadAuthorizedRs(param);
		} catch (Exception e) {
			SrmLog.error("加载资源授权信息异常！", e);
			throw new BusinessException("加载资源授权信息异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 加载已授权的资源
	 * 
	 * @author 陈今伟
	 * @param roleid
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadRoleAuthorizedRs(int[] roleids)
			throws BusinessException {
		if (roleids == null || roleids.length < 1) {
			int[] ints = { 0 };
			roleids = ints;
		}
		try {
			return this.queryRoleResDao.loadAuthorizedRs(roleids);
		} catch (Exception e) {
			SrmLog.error("加载资源授权信息异常！", e);
			throw new BusinessException("加载资源授权信息异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存角色的资源配置
	 * 
	 * @author 陈今伟
	 * @param roleid
	 * @param checkeds
	 * @throws BusinessException
	 * @return void
	 */
	public void saveRoleAuthorizedRs(int roleid, int[] checkeds)
			throws BusinessException {
		// 删除该角色所有权限
		try {
			queryRoleResDao.moveRoleResByRoleid(roleid);
		} catch (Exception e) {
			SrmLog.error("清空角色资源异常！", e);
			throw new BusinessException("清空角色资源异常！", e.getMessage());
		}
		// 查询角色对应的机构ID
		TAcRole roletemplate = TAcRole.FACTORY.create();
		roletemplate.set("roleid", roleid);
		roleDao.expandEntity(roletemplate);

		if (checkeds == null || checkeds.length == 0) {
			return;
		}
		// 保存页面设置的新权限
		try {
			queryRoleResDao.saveRoleRs(roleid, roletemplate.getDataorgid(),
					checkeds);
		} catch (Exception e) {
			SrmLog.error("设置角色资源异常！", e);
			throw new BusinessException("设置角色资源异常！", e.getMessage());
		}
		// 刷新缓存
		try {
			PermissionCacheManager.clearCacheAll();
		} catch (Exception e1) {
			SrmLog.error("刷新缓存失败！", e1);
		}
	}

	/**
	 * 方法描述: 用于校验角色编码是否在同一个公司重复
	 * 
	 * @author 陈今伟
	 * @param code
	 * @return
	 * @throws BusinessException
	 * @return int
	 */
	public int checkRoleCode(String code) throws BusinessException {
		try {
			TAcRole temp = new TAcRoleImpl();
			temp.setRolecode(code);
			temp.setDataorgid(Integer
					.parseInt(Common.getCurrentUserDataOrgId()));
			TAcRole[] ts = this.roleDao.queryEntitiesByTemplate(TAcRole.class,
					temp);
			if (ts != null && ts.length > 0) {
				return 0;
			} else {
				return 1;
			}
		} catch (Exception e) {
			SrmLog.error("校验角色编码异常!", e);
			throw new BusinessException("校验角色编码异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 获得角色编码
	 * 
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException
	 * @return String
	 */
	public String getNewRoleCode() throws BusinessException {
		long code = SequenceGenerator.getNextSequence("TAcRole.Roleid");
		return Common.padLeft(String.valueOf(code), 5, '0');
	}

	
	/**
	 * 方法描述: 角色关联到机构
	 * 
	 * @author dafu
	 * @param roleid
	 * @param orgid
	 * @throws BusinessException
	 */
	public void saveOperatorRoles(String roleid,String orgid,String dataorgid) throws BusinessException {
		HashMap<String,String> condition = new HashMap<String,String>();
		condition.put("roleid", roleid);
		condition.put("orgid", orgid);
		try {
			DataObject[] operators = this.roleDao.queryOperatorByOrgRole(condition);
			for(int i=0;i<operators.length;i++){
				TAcOperatorrole operatorRole =  new TAcOperatorroleImpl();
				operatorRole.setRoleid(Integer.valueOf(roleid));
				operatorRole.setDataorgid(Integer.valueOf(dataorgid));
				operatorRole.setOperatorid(Integer.valueOf(operators[i].getString("operatorid")));
				this.roleDao.saveEntity(operatorRole);
			}
		} catch (Exception e) {
			SrmLog.error("角色关联到机构异常!", e);
			throw new BusinessException("角色关联到机构异常!", e.getMessage());
		}
	}
	
	public void setQueryRoleResDao(QueryRoleResDao queryRoleResDao) {
		this.queryRoleResDao = queryRoleResDao;
	}

	public void setOperatorRoleDao(OperatorRoleDao operatorRoleDao) {
		this.operatorRoleDao = operatorRoleDao;
	}

	public void setRoleDao(RoleDao roleDao) {
		this.roleDao = roleDao;
	}

}
