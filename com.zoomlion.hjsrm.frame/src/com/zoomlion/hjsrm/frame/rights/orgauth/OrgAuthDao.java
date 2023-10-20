package com.zoomlion.hjsrm.frame.rights.orgauth;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  实现机构应用授权功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class OrgAuthDao extends BaseDao {

	/**
	 * 方法描述: 查询公司列表用于应用授权
	 * @author 陈今伟
	 * @param data
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	public DataObject[] getAllCompanys(DataObject data) throws Exception {
		return queryByNamedSql(DataObject.class,"com.zoomlion.hjsrm.frame.rights.orgauth.orgAuth.getAllCompanys",data);
	}

	/**
	 * 方法描述: 获得所有的资源授权情况
	 * @author 陈今伟
	 * @param condition
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	public DataObject[] getAppResAuth(Map condition) throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.frame.rights.orgauth.orgAuth.getOrgResAuth", condition);
	}

	/**
	 * 方法描述: 删除原有授权信息
	 * @author 陈今伟
	 * @param condition
	 * @throws Exception 
	 * @return void
	 */
	public void delAppResAuth(Map condition) throws Exception {
		executeNamedSql("com.zoomlion.hjsrm.frame.rights.orgauth.orgAuth.delOrgResAuth",condition);
	}
}
