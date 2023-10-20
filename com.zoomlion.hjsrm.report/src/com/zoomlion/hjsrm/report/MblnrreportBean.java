package com.zoomlion.hjsrm.report;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.ibm.icu.util.GregorianCalendar;
import com.kp.persistance.types.Date;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

public class MblnrreportBean extends BaseBean {

	private MblnrreportDao mblnrreportDao;
	
	/**
	 * 方法描述:物料凭证查询
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryMblnrreport(DataObject entity, DataObject query,
			PageCond pageCond) throws BusinessException {
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
					condition.put("lifnrsup", lifnr);
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
				if (query.getString("mjahr") != null
						&& !query.getString("mjahr").equals("")) {
					condition.put("mjahr", query.getString("mjahr"));
				}
				if (query.getString("maktx") != null
						&& !query.getString("maktx").equals("")) {
					condition.put("maktx", query.getString("maktx"));
				}
				if (query.getString("name1") != null
						&& !query.getString("name1").equals("")) {
					condition.put("name1", query.getString("name1"));
				}
				if (query.getString("vnbm") != null
						&& !query.getString("vnbm").equals("")) {
					condition.put("vnbm", query.getString("vnbm"));
				}
				if (query.getString("zasnh") != null
						&& !query.getString("zasnh").equals("")) {
					condition.put("zasnh", query.getString("zasnh"));
				}
				if (query.getString("lgort") != null
						&& !query.getString("lgort").equals("")) {
					condition.put("lgort", query.getString("lgort"));
				}
				if (query.getString("username") != null
						&& !query.getString("username").equals("")) {
					condition.put("username", query.getString("username"));
				}
				if (query.getString("mblnr") != null
						&& !query.getString("mblnr").equals("")) {
					condition.put("mblnr", query.getString("mblnr"));
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
				SrmLog.error("物料凭证查询异常!", e);
				throw new BusinessException("物料凭证查询异常!", e.getMessage());
			}
			return mblnrreportDao.queryMblnrreport(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("物料凭证查询异常!", e);
			throw new BusinessException("物料凭证查询异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述:物料凭证导出查询
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryMblnrreportdaochu( DataObject query) throws BusinessException {
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
					condition.put("lifnrsup", lifnr);
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
				if (query.getString("mjahr") != null
						&& !query.getString("mjahr").equals("")) {
					condition.put("mjahr", query.getString("mjahr"));
				}
				if (query.getString("maktx") != null
						&& !query.getString("maktx").equals("")) {
					condition.put("maktx", query.getString("maktx"));
				}
				if (query.getString("name1") != null
						&& !query.getString("name1").equals("")) {
					condition.put("name1", query.getString("name1"));
				}
				if (query.getString("zasnh") != null
						&& !query.getString("zasnh").equals("")) {
					condition.put("zasnh", query.getString("zasnh"));
				}
				if (query.getString("lgort") != null
						&& !query.getString("lgort").equals("")) {
					condition.put("lgort", query.getString("lgort"));
				}
				if (query.getString("username") != null
						&& !query.getString("username").equals("")) {
					condition.put("username", query.getString("username"));
				}
				if (query.getString("mblnr") != null
						&& !query.getString("mblnr").equals("")) {
					condition.put("mblnr", query.getString("mblnr"));
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
				SrmLog.error("物料凭证查询异常!", e);
				throw new BusinessException("物料凭证查询异常!", e.getMessage());
			}
			return mblnrreportDao.queryMblnrreportdaochu(condition);
		} catch (Exception e) {
			SrmLog.error("物料凭证查询异常!", e);
			throw new BusinessException("物料凭证查询异常!", e.getMessage());
		}
	}
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
	public DataObject[] queryEbelnreport(DataObject entity, DataObject query,
			PageCond pageCond) throws BusinessException {
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
					condition.put("lifnrsup", lifnr);
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
				if (query.getString("ekgrp") != null
						&& !query.getString("ekgrp").equals("")) {
					condition.put("ekgrp", query.getString("ekgrp"));
				}
				if (query.getString("bednr") != null
						&& !query.getString("bednr").equals("")) {
					condition.put("bednr", query.getString("bednr"));
				}
				if (query.getString("opt1") != null
						&& !query.getString("opt1").equals("")){
				if(query.getString("opt1").equals("1")){
					condition.put("a", "0");
				}else if(query.getString("opt1").equals("2")){
					condition.put("b", "0");
				}
				}else{
					condition.put("a", null);
					condition.put("b", null);
				}
				if (query.getString("opt2") != null
						&& !query.getString("opt2").equals("")){
				if(query.getString("opt2").equals("1")){
					condition.put("c", "0");
				}else if(query.getString("opt2").equals("2")){
					condition.put("d", "0");
				}
				}else{
					condition.put("c", null);
					condition.put("d", null);
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
				SrmLog.error("采购执行查询异常!", e);
				throw new BusinessException("采购执行查询异常!", e.getMessage());
			}
			return mblnrreportDao.queryEbelnreport(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("采购执行查询异常!", e);
			throw new BusinessException("采购执行查询异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 采购订单查询/供应商和管理员的导出查询
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryEbelnreportdaochu( DataObject query
			) throws BusinessException {
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
					condition.put("lifnrsup", lifnr);
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
				if (query.getString("ekgrp") != null
						&& !query.getString("ekgrp").equals("")) {
					condition.put("ekgrp", query.getString("ekgrp"));
				}
				if (query.getString("bednr") != null
						&& !query.getString("bednr").equals("")) {
					condition.put("bednr", query.getString("bednr"));
				}
				if (query.getString("opt1") != null
						&& !query.getString("opt1").equals("")){
				if(query.getString("opt1").equals("1")){
					condition.put("a", "0");
				}else if(query.getString("opt1").equals("2")){
					condition.put("b", "0");
				}
				}else{
					condition.put("a", null);
					condition.put("b", null);
				}
				if (query.getString("opt2") != null
						&& !query.getString("opt2").equals("")){
				if(query.getString("opt2").equals("1")){
					condition.put("c", "0");
				}else if(query.getString("opt2").equals("2")){
					condition.put("d", "0");
				}
				}else{
					condition.put("c", null);
					condition.put("d", null);
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
				SrmLog.error("采购执行查询异常!", e);
				throw new BusinessException("采购执行查询异常!", e.getMessage());
			}
			return mblnrreportDao.queryEbelnreportdaochu(condition);
		} catch (Exception e) {
			SrmLog.error("采购执行查询异常!", e);
			throw new BusinessException("采购执行查询异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 采购周期报表
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryCgzqreport(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			if (null != paramObj.get("matnr")
					&& !"".equals(paramObj.get("matnr").toString())) {
				String matnrs = paramObj.get("matnr").toString();
				String[] arr = matnrs.split(",");
				String matnr = "";
				for (int i = 0; i < arr.length; i++) {
					if (!"".equals(arr[i])) {
						arr[i] = "'" + arr[i] + "'";
						matnr += arr[i] + ",";
					}
				}
				matnr += "'0'";
				paramObj.put("matnr", matnr);
			}
			
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null == lifnr || "".equals(lifnr)) {
				if (paramObj.get("lifnr") != null
						&& !"".equals(paramObj.get("lifnr").toString())) {
					paramObj.put("lifnr", paramObj.get("lifnr").toString());
				}	
			}else{
				paramObj.put("lifnrsup", lifnr);
			}
			return this.mblnrreportDao.querycgzqreport(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询采购周期异常!", e);
			throw new BusinessException("查询采购周期异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 采购周期报表导出
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryCgzqreportdaochu(Map paramObj)
			throws BusinessException {
		try {
			if (null != paramObj.get("matnr")
					&& !"".equals(paramObj.get("matnr").toString())) {
				String matnrs = paramObj.get("matnr").toString();
				String[] arr = matnrs.split(",");
				String matnr = "";
				for (int i = 0; i < arr.length; i++) {
					if (!"".equals(arr[i])) {
						arr[i] = "'" + arr[i] + "'";
						matnr += arr[i] + ",";
					}
				}
				matnr += "'0'";
				paramObj.put("matnr", matnr);
			}
			
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null == lifnr || "".equals(lifnr)) {
				if (paramObj.get("lifnr") != null
						&& !"".equals(paramObj.get("lifnr").toString())) {
					paramObj.put("lifnr", paramObj.get("lifnr").toString());
				}	
			}else{
				paramObj.put("lifnrsup", lifnr);
			}
			return this.mblnrreportDao.querycgzqreportdaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询采购周期异常!", e);
			throw new BusinessException("查询采购周期异常!", e.getMessage());
		}

	}
	
	/**
	 * 方法描述: 查询底盘入库统计报表
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querydprkreport(Map paramObj)
			throws BusinessException {
		try {
			GregorianCalendar gc = new GregorianCalendar();
			SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
			Date d = new Date();
			if ("year".equals(paramObj.get("querystartdate").toString())) {
				gc.setTime(d);
				gc.add(1, -1);
				String k = sf.format(gc.getTime());
				paramObj.put("querystartdate", k);
			}else if ("month".equals(paramObj.get("querystartdate").toString())){
				gc.setTime(d);
				gc.add(2, -1);
				String k = sf.format(gc.getTime());
				paramObj.put("querystartdate", k);
			}else if ("werk".equals(paramObj.get("querystartdate").toString())){
				gc.setTime(d);
				gc.add(3, -1);
				String k = sf.format(gc.getTime());
				paramObj.put("querystartdate", k);
			}
			return this.mblnrreportDao.querydprkreport(paramObj);		
		} catch (Exception e) {
			SrmLog.error("底盘入库统计报表查询异常!", e);
			throw new BusinessException("底盘入库统计报表查询异常!", e.getMessage());
		}

	}
	
	/**
	 * 方法描述: 查询采购外协外购入库统计报表
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querycgrkreport(Map paramObj)
			throws BusinessException {
		try {
			return this.mblnrreportDao.querycgrkreport(paramObj);		
		} catch (Exception e) {
			SrmLog.error("查询采购外协外购入库统计报表异常!", e);
			throw new BusinessException("查询采购外协外购入库统计报表异常!", e.getMessage());
		}

	}
	
	public MblnrreportDao getMblnrreportDao() {
		return mblnrreportDao;
	}

	public void setMblnrreportDao(MblnrreportDao mblnrreportDao) {
		this.mblnrreportDao = mblnrreportDao;
	}
}
