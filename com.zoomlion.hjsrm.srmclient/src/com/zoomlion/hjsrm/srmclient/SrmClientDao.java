package com.zoomlion.hjsrm.srmclient;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

/**
 * **************************************************
 * 
 * 描 述： 流程管理客户端
 * 
 * @author dafu
 * 
 * **************************************************
 */
public class SrmClientDao extends BaseDao {

	/**
	 * 方法描述: 根据登陆用户机构查询其所有子机构
	 * 
	 * @author dafu
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public String querySubOrgWithOrg(Map paramObj) throws Exception {
		StringBuffer outData = new StringBuffer();
		DataObject[] orgs = this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.srmclient.query.queryAllOrgs", paramObj);
		if (orgs.length == 0) {
			return "";
		} else {
			for (DataObject org : orgs) {
				outData.append("'").append(org.get("orgid")).append("',");
			}
			return outData.substring(0, outData.length() - 1);
		}
	}

	/**
	 * 方法描述: 根据查询条件查询待办工单
	 * 
	 * @author dafu
	 * @param paramMap
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryRemainTicketWithPage(Map paramObj,
			PageCond pageCond) throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.srmclient.query.queryWorking", pageCond,
				paramObj);
	}
	
	/**
	 * 方法描述: OA首页待办，根据查询条件查询待办工单
	 * 
	 * @author dafu
	 * @param paramMap
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryOAWorking(HashMap paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,"com.zoomlion.hjsrm.srmclient.query.queryOAWorking", paramObj);
	}

	/**
	 * 方法描述:分页查询已办工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public HashMap[] queryWorked(HashMap paramObj, PageCond pageCond)
			throws Exception {

		return this.queryByNamedSqlWithPage(HashMap.class,
				"com.zoomlion.hjsrm.srmclient.query.queryWorked", pageCond,
				paramObj);
	}

	/**
	 * 方法描述:分页查询办结工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public HashMap[] queryFinished(HashMap paramObj, PageCond pageCond)
			throws Exception {

		return this.queryByNamedSqlWithPage(HashMap.class,
				"com.zoomlion.hjsrm.srmclient.query.queryFinished", pageCond,
				paramObj);
	}

	/**
	 * 方法描述:分页查询阅读工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public HashMap[] queryRead(HashMap paramObj, PageCond pageCond)
			throws Exception {

		return this.queryByNamedSqlWithPage(HashMap.class,
				"com.zoomlion.hjsrm.srmclient.query.queryRead", pageCond,
				paramObj);
	}
	
	/**
	 * 方法描述:OA查询阅读工单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public HashMap[] queryOARead(HashMap paramObj)
			throws Exception {
		return this.queryByNamedSql(HashMap.class,"com.zoomlion.hjsrm.srmclient.query.queryOARead",paramObj);
	}

	/**
	 * 方法描述:分页查询转阅记录
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public HashMap[] queryReadRecords(HashMap paramObj, PageCond pageCond)
			throws Exception {

		return this.queryByNamedSqlWithPage(HashMap.class,
				"com.zoomlion.hjsrm.srmclient.query.queryReadRecords",
				pageCond, paramObj);
	}

	/**
	 * 方法描述:查询活动参与者
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public HashMap[] queryActivityUsers(HashMap paramObj) throws Exception {

		return this.queryByNamedSql(HashMap.class,
				"com.zoomlion.hjsrm.srmclient.query.queryActivityUsers",
				paramObj);
	}

	/**
	 * 方法描述:查询短信催办人员
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public HashMap[] queryPart3(HashMap paramObj) throws Exception {

		return this.queryByNamedSql(HashMap.class,
				"com.zoomlion.hjsrm.srmclient.query.queryPart3", paramObj);
	}

	/**
	 * 方法描述:查询短信催办人员
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public HashMap[] queryPart2(HashMap paramObj) throws Exception {

		return this.queryByNamedSql(HashMap.class,
				"com.zoomlion.hjsrm.srmclient.query.queryPart2", paramObj);
	}

	/**
	 * 方法描述:查询短信催办人员
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public HashMap[] queryPart1(HashMap paramObj) throws Exception {

		return this.queryByNamedSql(HashMap.class,
				"com.zoomlion.hjsrm.srmclient.query.queryPart1", paramObj);
	}
	
	
	/**
	 * 方法描述:根据流程实例id查询待执行工作项
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryWorkitems(HashMap paramObj) throws Exception {

		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.srmclient.query.queryWorkitems", paramObj);
	}
	
	/**
	 * 根据empcode查询userid
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryUserid(HashMap paramObj) throws Exception {

		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.srmclient.query.queryUserid", paramObj);
	}
}



