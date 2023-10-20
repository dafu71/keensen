/******************************************************************
*版权所有： 中联重科环境产业公司
*描    述：  
*创建日期： 2014-9-17
*补丁编号： G3_P_20140915_01_241
*作    者： 吕俊涛
*******************************************************************/
//==============================修改历史===========================
// 补丁编号                    修改人     日期           区域       备注
// G3_P_20140915_01_241    吕俊涛     2014-9-17    集团      
//
//=================================================================
package com.zoomlion.hjsrm.frame.bclib;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmData;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmOrganization;
import com.zoomlion.hjsrm.data.org.Organization.VOmEmpoper;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRole;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  员工公共方法
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class EmployeeBclibBean extends BaseBean {

	private EmployeeBclibDao employeeBclibDao;

	/**
	 * 方法描述: 根据条件查询员工操作员视图信息
	 * @author 侯杰
	 * @param query
	 * @return
	 * @throws BusinessException
	 * @return VOmEmpoper[]
	 */
	public VOmEmpoper[] queryEmpopers(VOmEmpoper query)throws BusinessException {
		Map condition;
		try {
			condition = SrmData.entityToData(query);
		} catch (Exception e1) {
			SrmLog.error("查询条件转换异常!", e1);
			throw new BusinessException("查询条件转换异常!", e1.getMessage());
		}
		try {
			return employeeBclibDao.queryEmpopers(condition);
		} catch (Exception e) {
			SrmLog.error("查询员工视图信息异常!", e);
			throw new BusinessException("查询员工视图信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据角色ID查询员工视图信息
	 * @author 侯杰
	 * @param roleid
	 * @return
	 * @throws BusinessException
	 * @return VOmEmpoper[]
	 */
	@SuppressWarnings("unchecked")
	public VOmEmpoper[] queryEmpopersByRoleId(Long roleid)throws BusinessException {
		Map condition = new HashMap();
		condition.put("roleid", roleid);
		try {
			return employeeBclibDao.queryEmpopersByRoleId(condition);
		} catch (Exception e) {
			SrmLog.error("根据角色ID查询员工视图信息异常!", e);
			throw new BusinessException("根据角色ID查询员工视图信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据机构ID查询员工视图信息
	 * @author 侯杰
	 * @param orgid
	 * @return
	 * @throws BusinessException
	 * @return VOmEmpoper[]
	 */
	@SuppressWarnings("unchecked")
	public VOmEmpoper[] queryEmpopersByOrgId(Long orgid)throws BusinessException {
		Map condition = new HashMap();
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取用户DATAORGID失败!", e);
			throw new BusinessException("获取用户DATAORGID失败!", e.getMessage());
		}
		if(dataorgid != null && !dataorgid.equals("0")){
			condition.put("dataorgid", Integer.valueOf(dataorgid));
		}
		// 如果有机构ID值
		if (orgid == null || orgid == 0) {
			String org_id;
			try {
				org_id = Common.getCurrentUserOrgId();
				if (org_id != null && !org_id.equals("0")) {
					condition.put("orgid", org_id);
				}
			} catch (Exception e) {
				SrmLog.error("未读取到当前用户机构信息!", e);
				throw new BusinessException("未读取到当前用户机构信息!", e.getMessage());
			}
		} else {
			condition.put("orgid", orgid);
		}
		try {
			return employeeBclibDao.queryEmpopersByOrgId(condition);
		} catch (Exception e) {
			SrmLog.error("根据机构ID查询员工视图信息异常!", e);
			throw new BusinessException("根据机构ID查询员工视图信息异常!", e.getMessage());
		}
	}

	
	public VOmEmpoper[] queryEmpopersBydataOrgId()throws BusinessException {
		Map condition = new HashMap();
		String dataorgid;
		try {
			dataorgid = Common.getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取用户DATAORGID失败!", e);
			throw new BusinessException("获取用户DATAORGID失败!", e.getMessage());
		}
		if(dataorgid != null && !dataorgid.equals("0")){
			condition.put("dataorgid", Integer.valueOf(dataorgid));
		}
		
		try {
			return employeeBclibDao.queryEmpopersByDataorgid(condition);
		} catch (Exception e) {
			SrmLog.error("根据dataorgdi查询员工视图信息异常!", e);
			throw new BusinessException("根据dataorgdi查询员工视图信息异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 根据当前操作员查询下属员工
	 * @author 侯杰
	 * @param empid
	 * @param entity
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryEmpopersByDataorgid(String empid, DataObject entity, PageCond pageCond) throws BusinessException {
		Map condition = new HashMap();
		condition.put("empname", entity.getString("empname"));
		condition.put("orgseq", entity.getString("orgseq"));
		if(entity.getString("orgseq")==null || entity.getString("orgseq").equals("")){
			condition.put("empid", empid);
		}
		try {
			return employeeBclibDao.queryEmpopersByDataorgid(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("当前操作员查询下属员工信息异常!", e);
			throw new BusinessException("当前操作员查询下属员工信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 根据USERID查询用户机构信息
	 * @author 侯杰
	 * @param userid
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public TOmOrganization[] queryOrgsByUserId(String userid)throws BusinessException {
		Map condition = new HashMap();
		condition.put("userid", userid);
		try {
			return employeeBclibDao.queryOrgsByUserId(condition);
		} catch (Exception e) {
			SrmLog.error("根据USERID查询用户机构信息失败!", e);
			throw new BusinessException("根据USERID查询用户机构信息失败!", e.getMessage());
		}
	}

	
	/**
	 * 方法描述: 根据USERID查询用户机构信息
	 * @author 侯杰
	 * @param userid
	 * @return
	 * @throws BusinessException
	 * @return TOmOrganization[]
	 */
	@SuppressWarnings("unchecked")
	public Boolean isinOrg(String userid,int orgid)throws BusinessException {
		if(orgid==0){
			return false;
		}
		TOmOrganization[] orgs = queryOrgsByUserId(userid);
		for (int i = 0; i < orgs.length; i++) {
			if(orgs[i].getOrgid()==orgid){
				return true;
			}
		}
		return false;
	}
	
	/**
	 * 方法描述: 根据USERID数组查询角色列表
	 * @author 侯杰
	 * @param userid
	 * @return
	 * @throws BusinessException
	 * @return TAcRole[]
	 */
	@SuppressWarnings("unchecked")
	public TAcRole[] queryRolesByUserIds(String[] userid)throws BusinessException {
		Map condition = new HashMap();
		condition.put("userids", userid);
		try {
			return employeeBclibDao.queryRolesByUserIds(condition);
		} catch (Exception e) {
			SrmLog.error("根据USERID查询用户角色信息失败", e);
			throw new BusinessException("根据USERID查询用户角色信息失败", e.getMessage());
		}
	}

	public EmployeeBclibDao getEmployeeBclibDao() {
		return employeeBclibDao;
	}

	public void setEmployeeBclibDao(EmployeeBclibDao employeeBclibDao) {
		this.employeeBclibDao = employeeBclibDao;
	}

}
