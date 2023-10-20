package com.zoomlion.hjsrm.frame.org.emporg;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.core.common.Common;
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
public class EmpOrgDao extends BaseDao {
	
	/**
	 * 方法描述: 查询机构下的员工,用于机构管理下查询员工信息
	 * 
	 * @author 陈今伟
	 * @param employee
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryEmpployeesByOrg(TOmEmployee employee, PageCond pageCond) throws Exception {
		Map condition = new HashMap();
		if(employee.getEmpcode()!=null&&!employee.getEmpcode().equals("")){
			condition.put("empcode", employee.getEmpcode());
		}
		if(employee.getEmpname()!=null&&!employee.getEmpname().equals("")){
			condition.put("empname", employee.getEmpname());
		}
		if(employee.getEmpstatus()!=null&&!employee.getEmpstatus().equals("")){
			condition.put("empstatus", employee.getEmpstatus());
		}
		if(employee.getString("orgid")!=null&&!employee.getString("orgid").equals("")){
			condition.put("orgid", employee.getString("orgid"));
		}
		String dataorgid = Common.getCurrentUserDataOrgId();
		String userid = Common.getCurrentUserId();
		if(!userid.equals("sysadmin")){
			condition.put("dataorgid", dataorgid);			
		}		
		return this.queryByNamedSqlWithPage(DataObject.class,"com.zoomlion.hjsrm.frame.org.emporg.emporg.queryEmployeesByOrg", pageCond, condition);
	}
	

	/**
	 * 方法描述: 查询机构下的员工,用于机构管理下查询员工信息
	 * 
	 * @author dafu
	 * @param employee
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryEmpployeesByOrg(VOmEmployeeTrs employee, PageCond pageCond) throws Exception {
		Map condition = new HashMap();
		if(employee.getEmpcode()!=null&&!employee.getEmpcode().equals("")){
			condition.put("empcode", employee.getEmpcode());
		}
		if(employee.getEmpname()!=null&&!employee.getEmpname().equals("")){
			condition.put("empname", employee.getEmpname());
		}
		if(employee.getEmpstatus()!=null&&!employee.getEmpstatus().equals("")){
			condition.put("empstatus", employee.getEmpstatus());
		}
		if(employee.getString("orgid")!=null&&!employee.getString("orgid").equals("")){
			condition.put("orgid", employee.getString("orgid"));
		}
		String dataorgid = Common.getCurrentUserDataOrgId();
		String userid = Common.getCurrentUserId();
		if(!userid.equals("sysadmin")){
			condition.put("dataorgid", dataorgid);			
		}		
		return this.queryByNamedSqlWithPage(DataObject.class,"com.zoomlion.hjsrm.frame.org.emporg.emporg.queryEmployeesByOrg2", pageCond, condition);
	}
	/**
	 * 方法描述: 依据empid 扩展员工信息(刘鑫专用)
	 * @author 刘鑫
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] expandEmployeeliuxin(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,"com.zoomlion.hjsrm.frame.org.emporg.emporg.loadEmpnewCombo", condition);
	}
	
}
