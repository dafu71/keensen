package com.zoomlion.hjsrm.frame.bclib;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
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
public class EmployeeBclibDao extends BaseDao{
	
	/**
	 * 方法描述: 根据条件查询员工操作员视图信息
	 * @author 侯杰
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return VOmEmpoper[]
	 */
	public VOmEmpoper[] queryEmpopers(Map condition) throws Exception{		
		return this.queryByNamedSql(VOmEmpoper.class,"com.zoomlion.hjsrm.frame.bclib.employeeBclib.queryEmpopers", condition);
	}
	
	/**
	 * 方法描述: 根据角色ID查询员工视图信息
	 * @author 侯杰
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return VOmEmpoper[]
	 */
	public VOmEmpoper[] queryEmpopersByRoleId(Map condition) throws Exception{		
		return this.queryByNamedSql(VOmEmpoper.class,"com.zoomlion.hjsrm.frame.bclib.employeeBclib.queryEmpopersByRoleId", condition);
	}
	
	/**
	 * 方法描述: 根据机构ID查询员工视图信息
	 * @author 侯杰
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return VOmEmpoper[]
	 */
	public VOmEmpoper[] queryEmpopersByOrgId(Map condition) throws Exception{
		return this.queryByNamedSql(VOmEmpoper.class,"com.zoomlion.hjsrm.frame.bclib.employeeBclib.queryEmpopersByOrgId", condition);
	}
	
	/**
	 * 方法描述: 根据当前操作员查询下属员工
	 * @author 侯杰
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public VOmEmpoper[] queryEmpopersByDataorgid(Map condition) throws Exception{
		return this.queryByNamedSql(VOmEmpoper.class,"com.zoomlion.hjsrm.frame.bclib.employeeBclib.queryvomEmpopersBydataorgId", condition);
	}
	
	/**
	 * 方法描述: 根据当前操作员查询下属员工
	 * @author 侯杰
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryEmpopersByDataorgid(Map condition,PageCond pageCond) throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class,"com.zoomlion.hjsrm.frame.bclib.employeeBclib.queryEmpopersByDataorgid", pageCond, condition);
	}
	
	/**
	 * 方法描述: 根据USERID查询用户机构信息
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryOrgsByUserId(Map condition) throws Exception{		
		return this.queryByNamedSql(TOmOrganization.class,"com.zoomlion.hjsrm.frame.bclib.employeeBclib.queryOrgsByUserId", condition);
	}
	
	/**
	 * 方法描述: 根据USERID数组查询角色列表
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TAcRole[]
	 */
	public TAcRole[] queryRolesByUserIds(Map condition) throws Exception{		
		return this.queryByNamedSql(TAcRole.class,"com.zoomlion.hjsrm.frame.bclib.employeeBclib.queryRolesByUserIds", condition);
	}
}
