package com.zoomlion.hjsrm.frame.rights.operatorrole;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmData;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperatorrole;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRole;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperatorroleImpl;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现操作员角色功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OperatorRoleBean extends BaseBean {

	private OperatorRoleDao operatorRoleDao;

	/**
	 * 方法描述: 删除操作员所有角色关系
	 * @author 陈今伟
	 * @param operatorrole
	 * @throws BusinessException 
	 * @return void
	 */
	public void deleteOperatorRoles(TAcOperatorrole operatorrole) throws BusinessException {
		try {
			TAcOperatorrole temp = new TAcOperatorroleImpl();
			temp.setOperatorid(operatorrole.getOperatorid());
			operatorRoleDao.deleteByTemplate(temp);
		} catch (Exception e) {
			SrmLog.error("删除操作员角色关系异常！", e);
			throw new BusinessException("删除操作员角色关系异常！",e.getMessage());
		}
		
	}
	
	/**
	 * 方法描述: 批量新增操作员角色关系
	 * @author 陈今伟
	 * @param operatorroles
	 * @throws BusinessException 
	 * @return void
	 */
	public void addOperatorRoleBatch(TAcOperatorrole[] operatorroles) throws BusinessException {
		try {
			if(operatorroles.length > 0){
				operatorRoleDao.insertEntityBatch(operatorroles);
			}
		} catch (Exception e) {
			SrmLog.error("批量新增操作员角色关系异常！", e);
			throw new BusinessException("批量新增操作员角色关系异常！",e.getMessage());
		}
		 
		
	}

	/**
	 * 方法描述: 查询不在某个操作员下并且在某个机构下的角色
	 * @author 陈今伟
	 * @param operatorid
	 * @param empid
	 * @param role
	 * @param pageCond
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryRoleByDataOrgNotInOperator(String operatorid, String empid, TAcRole role, PageCond pageCond) throws BusinessException {
		if (operatorid != null) {
			Map condition;
			try {
				condition = SrmData.entityToData(role);
			} catch (Exception e) {
				SrmLog.error("查询条件转换异常！", e);
				throw new BusinessException("查询条件转换异常！",e.getMessage());
			}
			try {
				condition.put("operatorid", operatorid);
				String dataOrgid = Common.getCurrentUserDataOrgId();
				if("0".equals(dataOrgid)){
					condition.put("dataorgid", dataOrgid);
				}else{
					condition.remove("dataorgid");
				}
				if(role.getOrgid()==0){
					condition.put("empid", empid);
				}
				return operatorRoleDao.queryRoleByDataOrgNotInOperator(condition, pageCond);
			} catch (Exception e) {
				SrmLog.error("查询不在某个操作员下并且在某个机构下的角色信息异常！", e);
				throw new BusinessException("查询不在某个操作员下并且在某个机构下的角色信息异常！",e.getMessage());
			}
		}
		return null;
	}

	/**
	 * 方法描述: 查询操作员对应的角色
	 * @author 陈今伟
	 * @param operatorid
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryRoleInOperator(String operatorid)throws BusinessException {
		if (operatorid == null) {
			return null;
		}
		Map condition = new HashMap();
		condition.put("operatorid", operatorid);
		try {
			return this.operatorRoleDao.queryRoleInOperator(condition);
		} catch (Exception e) {
			SrmLog.error("查询异常！", e);
			throw new BusinessException("查询异常！",e.getMessage());
		}
	}

	public void setOperatorRoleDao(OperatorRoleDao operatorRoleDao) {
		this.operatorRoleDao = operatorRoleDao;
	}
}
