package com.zoomlion.hjsrm.frame.org.organization;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.data.org.Organization.TOmOrganization;
import com.zoomlion.hjsrm.data.org.Organization.VOmOrganizationTrs;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现机构管理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OrganizationDao extends BaseDao {

	/**
	 * 方法描述: 查询员工对应机构的机构
	 * 
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOrganizationByEmp(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,"com.zoomlion.hjsrm.frame.org.organization.organization.queryOrganizationByEmp",condition);
	}
	
	/**
	 * 方法描述: 查询某个机构下级的机构
	 * 
	 * @author 陈今伟
	 * @param HashMap
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryDownOrgs(Map HashMap, PageCond pageCond)throws Exception {
		if(pageCond == null){
			return this.queryByNamedSql(TOmOrganization.class, "com.zoomlion.hjsrm.frame.org.organization.organization.queryDownOrgs",HashMap);
		}
		return this.queryByNamedSqlWithPage(TOmOrganization.class, "com.zoomlion.hjsrm.frame.org.organization.organization.queryDownOrgs", pageCond,HashMap);
		
	}
	
	/**
	 * 方法描述: 查询某个机构下级的机构
	 * 
	 * @author 傅力
	 * @param HashMap
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public VOmOrganizationTrs[] queryDownOrgs2(Map HashMap, PageCond pageCond)throws Exception {
		if(pageCond == null){
			return this.queryByNamedSql(VOmOrganizationTrs.class, "com.zoomlion.hjsrm.frame.org.organization.organization.queryDownOrgs2",HashMap);
		}
		return this.queryByNamedSqlWithPage(VOmOrganizationTrs.class, "com.zoomlion.hjsrm.frame.org.organization.organization.queryDownOrgs2", pageCond,HashMap);
		
	}
	
	/**
	 * 方法描述: 查询某个机构及下级的机构 (点击查询按钮方法)
	 * 
	 * @author 陈今伟
	 * @param HashMap
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryEquDownOrgs(Map HashMap, PageCond pageCond)throws Exception {
		if(pageCond == null){
			return this.queryByNamedSql(TOmOrganization.class, "com.zoomlion.hjsrm.frame.org.organization.organization.queryEquDownOrgs",HashMap);
		}
		return this.queryByNamedSqlWithPage(TOmOrganization.class, "com.zoomlion.hjsrm.frame.org.organization.organization.queryEquDownOrgs", pageCond,HashMap);
	}
	
	/**
	 * 方法描述: 查询某个机构及下级的机构 (点击查询按钮方法)
	 * 
	 * @author dafu
	 * @param HashMap
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public VOmOrganizationTrs[] queryEquDownOrgs2(Map HashMap, PageCond pageCond)throws Exception {
		if(pageCond == null){
			return this.queryByNamedSql(VOmOrganizationTrs.class, "com.zoomlion.hjsrm.frame.org.organization.organization.queryEquDownOrgs2",HashMap);
		}
		return this.queryByNamedSqlWithPage(VOmOrganizationTrs.class, "com.zoomlion.hjsrm.frame.org.organization.organization.queryEquDownOrgs2", pageCond,HashMap);
	}
}
