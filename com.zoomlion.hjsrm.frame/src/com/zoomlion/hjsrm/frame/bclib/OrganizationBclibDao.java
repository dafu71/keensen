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
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.data.org.Organization.TOmOrganization;
import com.zoomlion.hjsrm.data.org.Organization.VOmOrganizationTrs;
/**
 * **************************************************
 * 描    述：  机构公共方法
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OrganizationBclibDao extends BaseDao {
	
	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询)
	 * @author 侯杰
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryOrgnizations(Map condition) throws Exception {
		return this.queryByNamedSql(TOmOrganization.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryOrganizations", condition);
	}
	
	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询)
	 * @author dafu
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public VOmOrganizationTrs[] queryOrgnizations2(Map condition) throws Exception {
		return this.queryByNamedSql(VOmOrganizationTrs.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryOrganizations2", condition);
	}
	
	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询)
	 * @author 侯杰
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryAllCompanys(Map condition) throws Exception {
		return this.queryByNamedSql(TOmOrganization.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryAllCompanys", condition);
	}
	
	
	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询)
	 * @author dafu
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public VOmOrganizationTrs[] queryAllCompanys2(Map condition) throws Exception {
		return this.queryByNamedSql(VOmOrganizationTrs.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryAllCompanys2", condition);
	}
	
	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询)
	 * @author dafu
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public VOmOrganizationTrs[] queryAllCompanysAdd(Map condition) throws Exception {
		return this.queryByNamedSql(VOmOrganizationTrs.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryAllCompanysAdd", condition);
	}
	
	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询),
	 * 
	 * @author 侯杰
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryDataCompanys(Map condition) throws Exception {
		return this.queryByNamedSql(TOmOrganization.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryDataCompanys", condition);
	}
	
	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询),
	 * 
	 * @author dafu
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public VOmOrganizationTrs[] queryDataCompanysAdd(Map condition) throws Exception {
		return this.queryByNamedSql(VOmOrganizationTrs.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryDataCompanysAdd", condition);
	}
	
	/**
	 * 方法描述: 依据查询对象查询机构(按TOmOrganization实体查询),
	 * 
	 * @author dafu
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public VOmOrganizationTrs[] queryDataCompanys2(Map condition) throws Exception {
		return this.queryByNamedSql(VOmOrganizationTrs.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryDataCompanys2", condition);
	}
	
	
	/**
	 * 方法描述: 查询分公司机构(按TOmOrganization实体查询),
	 * 
	 * @author 
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryDataSubCompanys(Map condition) throws Exception {
		return this.queryByNamedSql(TOmOrganization.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.querySubCompanys", condition);
	}
	
	/**
	 * 方法描述: 查询本级及以下机构 只查orgtype=1,2,3的数据
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryDataAreas(Map condition) throws Exception {
		return this.queryByNamedSql(TOmOrganization.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryDataAreas", condition);
	}
	
	/**
	 * 方法描述: 查询本级及以下机构 只查orgtype=1,2,3的数据
	 * @author dafu
	 * @param condition
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public VOmOrganizationTrs[] queryDataAreas2(Map condition) throws Exception {
		return this.queryByNamedSql(VOmOrganizationTrs.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryDataAreas2", condition);
	}
	
	/**
	 * 方法描述: 查询本级及以下机构 只查orgtype=2,4的数据
	 * @author 陈今伟
	 * @return
	 * @throws Exception 
	 * @return TOmOrganization[]
	 */
	public TOmOrganization[] queryDataClient(Map condition) throws Exception {
		return this.queryByNamedSql(TOmOrganization.class,"com.zoomlion.hjsrm.frame.bclib.organizationBclib.queryDataClient", condition);
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
}