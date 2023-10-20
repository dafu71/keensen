package com.zoomlion.hjsrm.frame.org.emporg;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmEmployee;
import com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现员工机构管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class EmpOrgBean extends BaseBean {
	private EmpOrgDao emporgDao;
	
	/**
	 * 方法描述: 查询机构下的员工,用于机构管理下查询员工信息
	 * @author 陈今伟
	 * @param employee
	 * @param pageCond
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	public DataObject[] queryEmployeesByOrg(TOmEmployee employee,PageCond pageCond) throws BusinessException {		
			try {
				return emporgDao.queryEmpployeesByOrg(employee, pageCond);
			} catch (Exception e) {
				SrmLog.error("查询机构下的员工信息失败!", e);
				throw new BusinessException("查询机构下的员工信息失败!", e.getMessage());
			}
	}
	
	/**
	 * 方法描述: 查询机构下的员工,用于机构管理下查询员工信息
	 * @author dafu
	 * @param employee
	 * @param pageCond
	 * @return
	 * @throws BusinessException 
	 * @return DataObject[]
	 */
	public DataObject[] queryEmployeesByOrg(VOmEmployeeTrs employee,PageCond pageCond) throws BusinessException {		
			try {
				return emporgDao.queryEmpployeesByOrg(employee, pageCond);
			} catch (Exception e) {
				SrmLog.error("查询机构下的员工信息失败!", e);
				throw new BusinessException("查询机构下的员工信息失败!", e.getMessage());
			}
	}
	
	
	public EmpOrgDao getEmporgDao() {
		return emporgDao;
	}

	public void setEmporgDao(EmpOrgDao emporgDao) {
		this.emporgDao = emporgDao;
	}
	
	
}
