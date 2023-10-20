package com.zoomlion.hjsrm.purchase.affirm;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEklg;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEklgImpl;
import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现采购订单确认
 * 
 * @author 刘鑫 **************************************************
 */
public class PurchaseaffirmBean extends BaseBean {

	private PurchaseaffirmDao purchaseaffirmDao;

	/**
	 * 方法描述: 采购订单查询/供应商和管理员的查询不一样
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryPurchaseaffirm(DataObject entity,
			DataObject query, PageCond pageCond) throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				String lifnr = Common.getCurrentUseObject().getAttributes()
						.get("lifnr").toString();
				if (null == lifnr || "".equals(lifnr)) {
					if (query.getString("lifnr") != null
							&& !query.getString("lifnr").equals("")) {
						condition.put("lifnr", query.getString("lifnr"));
					}
				} else {
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
				if (null != query.get("matnr")
						&& !"".equals(query.get("matnr").toString())) {
					String matnrs = query.get("matnr").toString();
					String[] arr = matnrs.split(",");
					String matnr = "";
					for (int i = 0; i < arr.length; i++) {
						if (!"".equals(arr[i])) {
							arr[i] = "'" + arr[i] + "'";
							matnr += arr[i] + ",";
						}
					}
					matnr += "'0'";
					condition.put("matnr", matnr);
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
				if (query.getString("ekgrp") != null
						&& !query.getString("ekgrp").equals("")) {
					condition.put("ekgrp", query.getString("ekgrp"));
				}
				if (query.getString("bednr") != null
						&& !query.getString("bednr").equals("")) {
					condition.put("bednr", query.getString("bednr"));
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
				SrmLog.error("采购订单查询异常!", e);
				throw new BusinessException("采购订单查询异常!", e.getMessage());
			}
			return purchaseaffirmDao.queryPurchaseaffirmManager(condition,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("采购订单查询异常!", e);
			throw new BusinessException("采购订单查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 采购订单导出
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] purchaseaffirmdaochu(DataObject query)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				String lifnr = Common.getCurrentUseObject().getAttributes()
						.get("lifnr").toString();
				if (null == lifnr || "".equals(lifnr)) {
					if (query.getString("lifnr") != null
							&& !query.getString("lifnr").equals("")) {
						condition.put("lifnr", query.getString("lifnr"));
					}
				} else {
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
				if (null != query.get("matnr")
						&& !"".equals(query.get("matnr").toString())) {
					String matnrs = query.get("matnr").toString();
					String[] arr = matnrs.split(",");
					String matnr = "";
					for (int i = 0; i < arr.length; i++) {
						if (!"".equals(arr[i])) {
							arr[i] = "'" + arr[i] + "'";
							matnr += arr[i] + ",";
						}
					}
					matnr += "'0'";
					condition.put("matnr", matnr);
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
				if (query.getString("ekgrp") != null
						&& !query.getString("ekgrp").equals("")) {
					condition.put("ekgrp", query.getString("ekgrp"));
				}
				if (query.getString("bednr") != null
						&& !query.getString("bednr").equals("")) {
					condition.put("bednr", query.getString("bednr"));
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
				SrmLog.error("采购订单查询异常!", e);
				throw new BusinessException("采购订单查询异常!", e.getMessage());
			}
			return purchaseaffirmDao.purchaseaffirmdaochu(condition);
		} catch (Exception e) {
			SrmLog.error("采购订单查询异常!", e);
			throw new BusinessException("采购订单查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 采购订单确认保存数据
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings({ "unchecked", "deprecation" })
	public void savePurchaseaffirm(DataObject[] entity)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			for (int i = 0; i < entity.length; i++) {
				condition.put("ebeln", entity[i].getString("ebeln"));
				condition.put("ebelp", entity[i].getString("ebelp"));
				DataObject[] cool = this.purchaseaffirmDao
						.queryPurchaseaffirmyz(condition);
				double v = Double.parseDouble(entity[i].getString("menge"));
				double k = 0;
				if (cool.length > 0) {
					k = Double.parseDouble(cool[0].getString("zquer"));
				}
				double l = Double.parseDouble(entity[i].getString("zquerb"));
				if (k + l > v) {
					throw new BusinessException("确认总数已经超过采购订单数!",
							"确认总数已经超过采购订单数!");
				}
				GenlPurchaseEklg love = new GenlPurchaseEklgImpl();
				this.purchaseaffirmDao.getPrimaryKey(love);
				love.setEbeln(entity[i].getString("ebeln"));
				love.setEbelp(entity[i].getString("ebelp"));
				love.setZquer(new BigDecimal(entity[i].getString("zquerb")));
				love.setZtext(entity[i].getString("ztext"));
				love.setZcret(Common.getCurrentUserId());
				if (entity[i].getString("answer") != null
						&& entity[i].getString("answer") != "") {
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
					love.setAnswer(sdf.parse(entity[i].getString("answer")));
				}

				// love.setZcdat(Common.getCurrentTime());
				this.purchaseaffirmDao.saveEntity(love);
			}
		} catch (Exception e) {
			SrmLog.error("确认总数已经超过采购订单数或者其他异常!", e);
			throw new BusinessException("确认总数已经超过采购订单数或者其他异常!", e.getMessage());
		}
	}

	public PurchaseaffirmDao getPurchaseaffirmDao() {
		return purchaseaffirmDao;
	}

	public void setPurchaseaffirmDao(PurchaseaffirmDao purchaseaffirmDao) {
		this.purchaseaffirmDao = purchaseaffirmDao;
	}
}