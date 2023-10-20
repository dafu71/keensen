package com.zoomlion.hjsrm.settleaccounts;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class SettleAccountsDao extends BaseDao {

	/**
	 * 方法描述: 查询待生成结算凭证（分页）
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryCreateAccounts(Map paramObj, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.settleaccounts.accounts.queryCreateAccounts",
						pageCond, paramObj);
	}

	/**
	 * 方法描述: 查询待生成结算凭证
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryCreateAccounts(Map paramObj) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.settleaccounts.accounts.queryCreateAccounts",
						paramObj);
	}

	/**
	 * 方法描述: 查询待生成结算凭证(分页)
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryCreateAccountsPage(Map paramObj, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.settleaccounts.accounts.queryCreateAccounts",
						pageCond, paramObj);
	}

	public DataObject[] queryJiesuanPage(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryJiesuan",
				pageCond, paramObj);
	}

	public DataObject[] queryJiesuanPagedaochu(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryJiesuan",
				paramObj);
	}

	public DataObject[] queryJiesuan(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryJiesuan",
				paramObj);
	}

	/**
	 * 方法描述:查询编码
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryCode(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryCode",
				paramObj);
	}

	/**
	 * 方法描述:更新编码
	 * 
	 * @param condition
	 * @throws Exception
	 */
	public void updateCode(Map condition) throws Exception {
		this.executeNamedSql(
				"com.zoomlion.hjsrm.settleaccounts.accounts.updateCode",
				condition);
	}

	/**
	 * 方法描述:更新编码
	 * 
	 * @param condition
	 * @throws Exception
	 */
	public void updateCode2(Map condition) throws Exception {
		this.executeNamedSql(
				"com.zoomlion.hjsrm.settleaccounts.accounts.updateCode2",
				condition);
	}

	/**
	 * 方法描述:查询待确认结算凭证
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryUnConfirm(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryUnConfirm",
				paramObj);
	}

	/**
	 * 方法描述:查询待确认结算凭证(分页)
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryUnConfirm(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryUnConfirm",
				pageCond, paramObj);
	}

	/**
	 * 方法描述:查询结算凭证
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryAccount(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryAccount",
				paramObj);
	}

	/**
	 * 方法描述:查询已生成结算凭证
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryCreated(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryCreated",
				paramObj);
	}

	/**
	 * 方法描述:结算凭证查询
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */

	public DataObject[] queryLists(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryLists",
				pageCond, paramObj);
	}

	/**
	 * 方法描述:结算凭证查询导出
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */

	public DataObject[] queryListsdaochu(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryLists",
				paramObj);
	}

	/**
	 * 方法描述:结算凭证查询
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryPrints(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryPrints",
				paramObj);
	}

	/**
	 * 方法描述:结算凭证打印抬头
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryPrintHead(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.queryPrintHead",
				paramObj);
	}

	/**
	 * 方法描述:结算数量校验
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] checkAmount(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.settleaccounts.accounts.checkAmount",
				paramObj);
	}

	/**
	 * 方法描述:删除结算表
	 * 
	 * @param condition
	 * @throws Exception
	 */
	public void deleteJiesuan(Map condition) throws Exception {
		this.executeNamedSql(
				"com.zoomlion.hjsrm.settleaccounts.accounts.deleteJiesuan",
				condition);
	}
}
