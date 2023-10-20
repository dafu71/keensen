/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 修改密码策略
 * 创建日期： 2014-9-18
 * 补丁编号： G3_P_20140915_01_249 
 * 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20140915_01_249 吕俊涛   2014-9-18  集团
//
// =================================================================
package com.zoomlion.hjsrm.frame.rights.operator;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmData;
import com.zoomlion.hjsrm.clib.util.SrmEncrypt;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmEmployee;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmEmployeeImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperator;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOptorgcfg;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRole;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.VAcOperatorTrs;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcRoleImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.VAcOperatorTrsImpl;
import com.zoomlion.hjsrm.frame.rights.operatorrole.OperatorRoleDao;
import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现操作员管理功能
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-28 陈今伟 创建文件
 *      **************************************************
 */
public class OperatorBean extends BaseBean {

	private OperatorDao opDao;

	private OperatorRoleDao operroleDao;

	private OperOrgConfigDao operOrgConfigDao;

	private final String SYS_ADMIN = "sysadmin";

	/**
	 * 方法描述: 保存操作员的机构查询配置
	 * 
	 * @author 陈今伟
	 * @param tacoptorgcfgs
	 * @throws BusinessException
	 * @return void
	 */
	public void saveOperatorOrgConfig(TAcOptorgcfg[] tacoptorgcfgs,
			Long operatorid) throws BusinessException {
		try {
			this.operOrgConfigDao.deleteOperatorOrgConfig(operatorid);
		} catch (Exception e) {
			SrmLog.error("删除操作员机构查询配置信息失败!", e);
			throw new BusinessException("删除操作员机构查询配置信息失败！", e.getMessage());
		}
		try {
			// 为解决前台将某操作员所有配置全部删除而保存造成的空指针问题
			if (tacoptorgcfgs.length > 0) {
				this.operOrgConfigDao.saveOperatorOrgConfig(tacoptorgcfgs);
			}
		} catch (Exception e) {
			SrmLog.error("保存操作员机构查询配置信息失败!", e);
			throw new BusinessException("保存操作员机构查询配置信息失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 加载操作员机构查询配置信息
	 * 
	 * @author 陈今伟
	 * @param operatorid
	 * @return
	 * @throws BusinessException
	 * @return TAcOptorgcfg[]
	 */
	public TAcOptorgcfg[] loadOperatorOrgConfig(long operatorid)
			throws BusinessException {
		try {
			return this.operOrgConfigDao.loadOperatorOrgConfig(operatorid);
		} catch (Exception e) {
			SrmLog.error("加载操作员机构查询配置信息失败!", e);
			throw new BusinessException("加载操作员机构查询配置信息失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询操作员
	 * 
	 * @author 陈今伟
	 * @param query
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOperators(TAcOperator query, PageCond pageCond)
			throws BusinessException {
		Map condition = new HashMap();
		try {
			condition = SrmData.entityToData(query);
			if (!(query.getString("orgid") == null)) {
				condition.put("orgid", query.getString("orgid"));
			}
			String dataorgid = Common.getCurrentUserDataOrgId();
			String user = Common.getCurrentUserId();
			if (condition.get("dataorgid") != null
					&& condition.get("dataorgid").equals("0")) {
				condition.remove("dataorgid");
			}
			if (user != null && !user.equals(SYS_ADMIN)) {
				condition.put("dataorgid", dataorgid);
			}
			if (query.getString("empcode") != null
					&& !query.getString("empcode").equals("")) {
				condition.put("empcode", query.getString("empcode"));
			}
			if (query.getString("empname") != null
					&& !query.getString("empname").equals("")) {
				condition.put("empname", query.getString("empname"));
			}
		} catch (Exception e) {
			SrmLog.error("设置操作员查询条件异常!", e);
			throw new BusinessException("设置操作员查询条件异常！", e.getMessage());
		}
		DataObject[] objs;
		try {
			objs = opDao.queryOperators(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("操作员查询异常!", e);
			throw new BusinessException("操作员查询异常！", e.getMessage());
		}
		return objs;
	}

	/**
	 * 方法描述: 查询操作员
	 * 
	 * @author dafu
	 * @param query
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOperators(VAcOperatorTrs query, PageCond pageCond)
			throws BusinessException {
		Map condition = new HashMap();
		try {
			condition = SrmData.entityToData(query);
			if (!(query.getString("orgid") == null)) {
				condition.put("orgid", query.getString("orgid"));
			}
			String dataorgid = Common.getCurrentUserDataOrgId();
			String user = Common.getCurrentUserId();
			if (condition.get("dataorgid") != null
					&& condition.get("dataorgid").equals("0")) {
				condition.remove("dataorgid");
			}
			if (user != null && !user.equals(SYS_ADMIN)) {
				condition.put("dataorgid", dataorgid);
			}
			if (query.getString("empcode") != null
					&& !query.getString("empcode").equals("")) {
				condition.put("empcode", query.getString("empcode"));
			}
			if (query.getString("empname") != null
					&& !query.getString("empname").equals("")) {
				condition.put("empname", query.getString("empname"));
			}
		} catch (Exception e) {
			SrmLog.error("设置操作员查询条件异常!", e);
			throw new BusinessException("设置操作员查询条件异常！", e.getMessage());
		}
		DataObject[] objs;
		try {
			objs = opDao.queryOperators2(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("操作员查询异常!", e);
			throw new BusinessException("操作员查询异常！", e.getMessage());
		}
		return objs;
	}

	/**
	 * 方法描述: 模板查询操作员
	 * 
	 * @author 陈今伟
	 * @param template
	 * @return
	 * @throws Exception
	 * @return TAcOperator[]
	 */
	public TAcOperator[] queryOperatorByTemplate(TAcOperator template)
			throws Exception {
		return opDao.queryEntitiesByTemplate(TAcOperator.class, template);
	}

	/**
	 * 方法描述: 新增操作员
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @throws BusinessException
	 * @return void
	 */
	public void addOperator(TAcOperator operator) throws BusinessException {

		// 登录名校验
		VAcOperatorTrs opr = new VAcOperatorTrsImpl();
		opr.setUserid(operator.getUserid());
		VAcOperatorTrs[] oprs = this.opDao.queryEntitiesByTemplate(
				VAcOperatorTrs.class, opr);
		if (null != oprs && oprs.length > 0) {
			throw new BusinessException("此登录名已被使用，请使用其他登录名...",
					"此登录名已被使用，请使用其他登录名....");
		}

		boolean flag = this.checkPassword(operator.getPassword());
		if (flag) {
			throw new BusinessException("此密码为禁用密码，请使用其他密码...",
					"此密码为禁用密码，请使用其他密码...");
		}
		TOmEmployee emp = new TOmEmployeeImpl();
		emp.setEmpid(operator.getEmpid());
		this.opDao.expandEntity(emp);
		operator.setDataorgid(emp.getDataorgid());
		operator.setStatus("0");

		// 密码加密
		String encryptpwd = SrmEncrypt.encryptIrreversible(operator
				.getPassword());
		operator.setPassword(encryptpwd);
		operator.setValidtime(encryptpwd);
		this.opDao.getPrimaryKey(operator);
		try {
			operator.setCreateby(Common.getCurrentUserId());
			opDao.insertEntity(operator);
		} catch (Exception e) {
			SrmLog.error("新增操作员信息失败!", e);
			throw new BusinessException("新增操作员信息失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 新增操作员
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @throws BusinessException
	 * @return void
	 */
	public String checkOperatorUserid(String userid) throws BusinessException {

		DataObject[] dos;
		try {
			dos = this.opDao.queryOperator(userid);
		} catch (Exception e) {
			return "验证失败！";
		}

		if (dos != null && dos.length > 0) {
			if (dos[0].getString("status").equals("2")) {
				return "该ID已存在，正处于注销状态！";
			} else {
				return "该ID已存在，正处于使用状态！";
			}
		}
		return "";
	}

	/**
	 * 方法描述: 保存操作员
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @throws BusinessException
	 * @return void
	 */
	public void saveOperator(TAcOperator operator) throws BusinessException {

		// 是否重置密码
		if (operator.getBoolean("isReset")) {
			operator.setPassword(SrmEncrypt
					.encryptIrreversible(Common.SRM_DEFAULT_PASS));
		}
		try {
			operator.setModifyby(Common.getCurrentUserId());
			operator.setUpdatetime(Common.getCurrentTime());
			opDao.saveEntity(operator);
		} catch (Exception e) {
			SrmLog.error("保存操作员信息失败!", e);
			throw new BusinessException("保存操作员信息失败!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 校验用户密码是否为禁用密码
	 * 
	 * @author 吕俊涛
	 * @param password
	 * @return boolean
	 */
	public boolean checkPassword(String password) {
		boolean flag = false;
		String invalidPassword = "";
		try {
			invalidPassword = Common.getConfigValue("SY_INVALID_PASSWORD");
		} catch (Exception e1) {
			invalidPassword = "";
		}
		if (invalidPassword.indexOf(password) > -1) {
			flag = true;
		}
		return flag;
	}

	/**
	 * 方法描述: 注销操作员(只注销操作员，不删除相关角色及其特权信息，以便恢复该操作员)
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @throws Exception
	 * @return void
	 */
	public void deleteOperator(TAcOperator operator) throws Exception {
		// 将操作员的状态设置为2(注销状态)已经注销的不进行任何操作
		if (!operator.getStatus().equals("2")) {
			this.opDao.expandEntity(operator);
			operator.setStatus("2");
			opDao.updateEntity(operator);
		}
	}

	/**
	 * 方法描述: 批量注销操作员
	 * 
	 * @author 陈今伟
	 * @param opers
	 * @throws BusinessException
	 * @return void
	 */
	public void deleteOperBatch(TAcOperator[] opers) throws BusinessException {
		for (int i = 0, j = opers.length; i < j; i++) {
			try {
				this.deleteOperator(opers[i]);
			} catch (Exception e) {
				SrmLog.error("注销操作员失败！", e);
				throw new BusinessException("注销操作员失败！", e.getMessage());
			}
		}
	}

	/**
	 * 方法描述: 恢复操作员(只恢复已经注销的操作员)
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @throws Exception
	 * @return void
	 */
	public void regainOperator(TAcOperator operator) throws Exception {
		// 将操作员的状态设置为0(正常状态)
		if (operator.getStatus().equals("2")) {
			this.opDao.expandEntity(operator);
			operator.setStatus("0");
			opDao.updateEntity(operator);
		}
	}

	/**
	 * 方法描述: 锁定操作员
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @throws Exception
	 * @return void
	 */
	public void lockOperator(TAcOperator operator) throws Exception {
		this.opDao.expandEntity(operator);
		// 将操作员的状态设置为3(锁定状态)
		operator.setStatus("3");
		opDao.updateEntity(operator);
	}

	/**
	 * 方法描述: 批量锁定操作员
	 * 
	 * @author 陈今伟
	 * @param opers
	 * @throws BusinessException
	 * @return void
	 */
	public void lockOperBatch(TAcOperator[] opers) throws BusinessException {
		for (int i = 0, j = opers.length; i < j; i++) {
			try {
				this.lockOperator(opers[i]);
			} catch (Exception e) {
				SrmLog.error("锁定操作员失败！", e);
				throw new BusinessException("锁定操作员失败！", e.getMessage());
			}
		}
	}

	/**
	 * 方法描述: 批量解锁操作员
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @throws Exception
	 * @return void
	 */
	public void unlockOperator(TAcOperator operator) throws BusinessException {
		this.opDao.expandEntity(operator);
		// 将操作员的状态设置为0(解锁状态)
		operator.setStatus("0");
		// 记录解锁时间
		operator.setUnlocktime(new Date());
		opDao.updateEntity(operator);
	}

	/**
	 * 方法描述: 批量解锁操作员
	 * 
	 * @author 陈今伟
	 * @param opers
	 * @throws BusinessException
	 * @return void
	 */
	public void unlockOperBatch(TAcOperator[] opers) throws BusinessException {
		for (int i = 0, j = opers.length; i < j; i++) {
			try {
				this.unlockOperator(opers[i]);
			} catch (Exception e) {
				SrmLog.error("解锁操作员失败！", e);
				throw new BusinessException("解锁操作员失败！", e.getMessage());
			}
		}
	}

	/**
	 * 方法描述: 查询角色对应的操作员
	 * 
	 * @author 陈今伟
	 * @param roleID
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOperatorByRoleID(String roleID, PageCond pageCond)
			throws BusinessException {
		if (roleID != null || "".equals(roleID)) {
			TAcRole role = new TAcRoleImpl();
			role.setRoleid(Integer.parseInt(roleID));
			this.opDao.expandEntity(role);
			Map condition = new HashMap();
			condition.put("roleid", roleID);
			try {
				int dataorgid = Integer.parseInt(Common
						.getCurrentUserDataOrgId());
				if (dataorgid != 0) {
					condition.put("dataorgid", dataorgid);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			try {
				return this.operroleDao
						.queryOperatorByRole(condition, pageCond);
			} catch (Exception e) {
				SrmLog.error("查询操作角色信息失败!", e);
				throw new BusinessException("查询操作角色信息失败！", e.getMessage());
			}
		}
		return null;
	}

	/**
	 * 方法描述: 查询角色对应的操作员
	 * 
	 * @author 陈今伟
	 * @param roleID
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOperatorByRoleID2(String roleID, PageCond pageCond)
			throws BusinessException {
		if (roleID != null || "".equals(roleID)) {
			TAcRole role = new TAcRoleImpl();
			role.setRoleid(Integer.parseInt(roleID));
			this.opDao.expandEntity(role);
			Map condition = new HashMap();
			condition.put("roleid", roleID);
			try {
				// int dataorgid = Integer.parseInt(Common
				// .getCurrentUserDataOrgId());
				// if (dataorgid != 0) {
				// condition.put("dataorgid", dataorgid);
				// }
			} catch (Exception e) {
				e.printStackTrace();
			}
			try {
				return this.operroleDao.queryOperatorByRole2(condition,
						pageCond);
			} catch (Exception e) {
				SrmLog.error("查询操作角色信息失败!", e);
				throw new BusinessException("查询操作角色信息失败！", e.getMessage());
			}
		}
		return null;
	}

	/**
	 * 方法描述: 查询角色对应的操作员(不分页)
	 * 
	 * @param roleID
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOperatorByRoleID2(String roleID)
			throws BusinessException {
		if (roleID != null || "".equals(roleID)) {
			TAcRole role = new TAcRoleImpl();
			role.setRoleid(Integer.parseInt(roleID));
			this.opDao.expandEntity(role);
			Map condition = new HashMap();
			condition.put("roleid", roleID);
			try {
				// int dataorgid = Integer.parseInt(Common
				// .getCurrentUserDataOrgId());
				// if (dataorgid != 0) {
				// condition.put("dataorgid", dataorgid);
				// }
			} catch (Exception e) {
				e.printStackTrace();
			}
			try {
				return this.operroleDao.queryOperatorByRole2(condition);
			} catch (Exception e) {
				SrmLog.error("查询操作角色信息失败!", e);
				throw new BusinessException("查询操作角色信息失败！", e.getMessage());
			}
		}
		return null;
	}

	/**
	 * 方法描述: 查询不在某个角色下，在某个机构下的操作员
	 * 
	 * @author 陈今伟
	 * @param operator
	 * @param roleid
	 * @param dataOrgSeq
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOperatorNotInRoleByDataOrgID(TAcOperator operator,
			String roleid, String dataOrgSeq, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = SrmData.entityToData(operator);
			condition.put("roleid", roleid);
			// 取出当前用户的dataorgid
			String dataorgid = Common.getCurrentUserDataOrgId();
			// 判断是否系统管理员
			if (Integer.parseInt(dataorgid) == 0) {
				return this.opDao.queryOperatorNotInRoleByDataOrg(condition,
						pageCond);
			} else {
				// 非系统管理员传入dataorgid查询下属所有机构的操作员
				// 如果操作员选择了所属机构过滤条件,则将选择的orgid放入
				if ((operator.getDataorgid()) != 0) {
					condition.put("dataorgid", operator.getDataorgid());
				} else {
					condition.put("dataorgid", dataorgid);
				}
				return this.opDao.queryOperatorNotInRoleByDataOrg(condition,
						pageCond);
			}
		} catch (Exception e) {
			SrmLog.error("查询不在某个角色下，在某个机构下的操作员失败!", e);
			throw new BusinessException("查询不在某个角色下，在某个机构下的操作员失败!", e
					.getMessage());
		}
	}

	/**
	 * 方法描述: 查询不在某个角色下，在某个机构下的操作员
	 * 
	 * @author dafu
	 * @param operator
	 * @param roleid
	 * @param dataOrgSeq
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOperatorNotInRoleByDataOrgID(
			VAcOperatorTrs operator, String roleid, String dataOrgSeq,
			PageCond pageCond, String orgnames) throws BusinessException {
		try {
			Map condition = SrmData.entityToData(operator);

			condition.put("orgnames", orgnames);

			condition.put("roleid", roleid);
			// 取出当前用户的dataorgid
			String dataorgid = Common.getCurrentUserDataOrgId();
			// 判断是否系统管理员
			if (Integer.parseInt(dataorgid) == 0) {
				return this.opDao.queryOperatorNotInRoleByDataOrg2(condition,
						pageCond);
			} else {
				// 非系统管理员传入dataorgid查询下属所有机构的操作员
				// 如果操作员选择了所属机构过滤条件,则将选择的orgid放入
				if ((operator.getDataorgid()) != 0) {
					condition.put("dataorgid", operator.getDataorgid());
				} else {
					condition.put("dataorgid", dataorgid);
				}
				return this.opDao.queryOperatorNotInRoleByDataOrg2(condition,
						pageCond);
			}
		} catch (Exception e) {
			SrmLog.error("查询不在某个角色下，在某个机构下的操作员失败!", e);
			throw new BusinessException("查询不在某个角色下，在某个机构下的操作员失败!", e
					.getMessage());
		}
	}

	/**
	 * 方法描述: 加载操作员信息
	 * 
	 * @author 陈今伟
	 * @param entity
	 * @return
	 * @throws BusinessException
	 * @return TAcOperator
	 */
	public TAcOperator loadOperator(TAcOperator entity)
			throws BusinessException {
		try {
			this.opDao.expandEntity(entity);
			return entity;
		} catch (Exception e) {
			SrmLog.error("查询操作员信息失败！", e);
			throw new BusinessException("查询操作员信息失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述:加载操作员的所有权限明细
	 * 
	 * @author 陈今伟
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadOperatorAuth(Long operatorid)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			condition.put("operatorid", operatorid);
			return this.opDao.loadOperatorAuth(condition);
		} catch (Exception e) {
			SrmLog.error("加载操作员的所有权限明细失败！", e);
			throw new BusinessException("加载操作员的所有权限明细失败！", e.getMessage());
		}
	}

	public OperatorDao getOpDao() {
		return opDao;
	}

	public void setOpDao(OperatorDao opDao) {
		this.opDao = opDao;
	}

	public OperatorRoleDao getOperroleDao() {
		return operroleDao;
	}

	public void setOperroleDao(OperatorRoleDao operroleDao) {
		this.operroleDao = operroleDao;
	}

	public OperOrgConfigDao getOperOrgConfigDao() {
		return operOrgConfigDao;
	}

	public void setOperOrgConfigDao(OperOrgConfigDao operOrgConfigDao) {
		this.operOrgConfigDao = operOrgConfigDao;
	}

}
