package com.zoomlion.hjsrm.purchase.cght;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

public class CghtqueryBean extends BaseBean {

	private CghtqueryDao cghtqueryDao;

	/**
	 * 方法描述: 采购订单查询/供应商和管理员的查询不一样
	 * 
	 * @author 刘鑫 2014-12-12
	 * @param entity
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryCght(DataObject entity,DataObject query, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				String lifnr = Common.getCurrentUseObject().getAttributes().get(
				"lifnr").toString();
				if (null == lifnr || "".equals(lifnr)) {
					if (query.getString("lifnr") != null
							&& !query.getString("lifnr").equals("")) {
						condition.put("lifnr", query.getString("lifnr"));
					}	
				}else{
					condition.put("lifnr", lifnr);
				}
				if (query.getString("werks") != null
						&& !query.getString("werks").equals("")) {
					condition.put("werks", query.getString("werks"));
				}
				if (query.getString("ebeln") != null
						&& !query.getString("ebeln").equals("")) {
					condition.put("ebeln", query.getString("ebeln"));
				}
				if (query.getString("matnr") != null
						&& !query.getString("matnr").equals("")) {
					condition.put("matnr", query.getString("matnr"));
				}
				if (query.getString("maktx") != null
						&& !query.getString("maktx").equals("")) {
					condition.put("maktx", query.getString("maktx"));
				}
				if (query.getString("name1") != null
						&& !query.getString("name1").equals("")) {
					condition.put("name1", query.getString("name1"));
				}
				if (query.getString("ekorg") != null
						&& !query.getString("ekorg").equals("")) {
					condition.put("ekorg", query.getString("ekorg"));
				}
				if (query.getString("verkf") != null
						&& !query.getString("verkf").equals("")) {
					condition.put("verkf", query.getString("verkf"));
				}
				if (query.getString("frgrl") != null
						&& !query.getString("frgrl").equals("")) {
					if(query.getString("frgrl").equals("1")){
					condition.put("frgrl", "是");
					}else if(query.getString("frgrl").equals("0")) {
						condition.put("frgrl", "否");
					}
				}
				if (entity.getString("startDate") == null
						&& entity.getString("endDate") != null) {
					condition.put("startDate", Common.getSysDate());
					condition.put("endDate", entity.getString("endDate"));
				} else if (entity.getString("startDate") != null
						&& entity.getString("endDate") == null) {
					condition.put("startDate", entity.getString("startDate"));
					condition.put("endDate", Common.getSysDate());
				} else {
					condition.put("startDate", entity.getString("startDate"));
					condition.put("endDate", entity.getString("endDate"));
				}
			} catch (Exception e) {
				SrmLog.error("采购合同查询异常!", e);
				throw new BusinessException("采购合同查询异常!", e.getMessage());
			}
			return cghtqueryDao.queryPurchaseManager(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("采购合同查询异常!", e);
			throw new BusinessException("采购合同查询异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 采购订单查询/供应商和管理员的查询不一样导出
	 * 
	 * @author 刘鑫 2014-12-12
	 * @param entity
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryCghtdaochu(DataObject query)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				String lifnr = Common.getCurrentUseObject().getAttributes().get(
				"lifnr").toString();
				if (null == lifnr || "".equals(lifnr)) {
					if (query.getString("lifnr") != null
							&& !query.getString("lifnr").equals("")) {
						condition.put("lifnr", query.getString("lifnr"));
					}	
				}else{
					condition.put("lifnr", lifnr);
				}
				if (query.getString("werks") != null
						&& !query.getString("werks").equals("")) {
					condition.put("werks", query.getString("werks"));
				}
				if (query.getString("ebeln") != null
						&& !query.getString("ebeln").equals("")) {
					condition.put("ebeln", query.getString("ebeln"));
				}
				if (query.getString("matnr") != null
						&& !query.getString("matnr").equals("")) {
					condition.put("matnr", query.getString("matnr"));
				}
				if (query.getString("maktx") != null
						&& !query.getString("maktx").equals("")) {
					condition.put("maktx", query.getString("maktx"));
				}
				if (query.getString("name1") != null
						&& !query.getString("name1").equals("")) {
					condition.put("name1", query.getString("name1"));
				}
				if (query.getString("ekorg") != null
						&& !query.getString("ekorg").equals("")) {
					condition.put("ekorg", query.getString("ekorg"));
				}
				if (query.getString("verkf") != null
						&& !query.getString("verkf").equals("")) {
					condition.put("verkf", query.getString("verkf"));
				}
				if (query.getString("frgrl") != null
						&& !query.getString("frgrl").equals("")) {
					if(query.getString("frgrl").equals("1")){
					condition.put("frgrl", "是");
					}else if(query.getString("frgrl").equals("0")) {
						condition.put("frgrl", "否");
					}
				}
				if (query.getString("startDate") == null
						&& query.getString("endDate") != null) {
					condition.put("startDate", Common.getSysDate());
					condition.put("endDate", query.getString("endDate"));
				} else if (query.getString("startDate") != null
						&& query.getString("endDate") == null) {
					condition.put("startDate", query.getString("startDate"));
					condition.put("endDate", Common.getSysDate());
				} else {
					condition.put("startDate", query.getString("startDate"));
					condition.put("endDate", query.getString("endDate"));
				}
			} catch (Exception e) {
				SrmLog.error("采购合同查询异常!", e);
				throw new BusinessException("采购合同查询异常!", e.getMessage());
			}
			return cghtqueryDao.queryPurchaseManagerdaochu(condition);
		} catch (Exception e) {
			SrmLog.error("采购合同查询异常!", e);
			throw new BusinessException("采购合同查询异常!", e.getMessage());
		}
	}

	public CghtqueryDao getCghtqueryDao() {
		return cghtqueryDao;
	}

	public void setCghtqueryDao(CghtqueryDao cghtqueryDao) {
		this.cghtqueryDao = cghtqueryDao;
	}
}
