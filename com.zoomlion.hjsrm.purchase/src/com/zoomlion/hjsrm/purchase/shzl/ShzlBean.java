package com.zoomlion.hjsrm.purchase.shzl;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Formatter;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.busi.common.SrmCommonBean;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlDeliverList;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfa1;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024eImpl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl;
import commonj.sdo.DataObject;

/**
 * 描述: 送货单维护/查询
 * 
 * @author 刘鑫
 */

public class ShzlBean extends BaseBean {

	private ShzlDao shzlDao;

	/**
	 * 方法描述: 删除送货指令，将删除标记改为X
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public void delshzlcx(DataObject[] entity) throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				GenlDeliverList love = new GenlDeliverListImpl();
				love.setZshso(entity[i].getString("zshso"));
				love.setZshsoN(entity[i].getString("zshso_n"));
				love.setStatu(String.valueOf('X'));
				this.shzlDao.saveEntity(love);
			}
		} catch (Exception e) {
			SrmLog.error("送货指令保存异常!", e);
			throw new BusinessException("送货指令保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 采购员修改送货指令
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return viod
	 */
	@SuppressWarnings("unchecked")
	public void saveshzlcx(DataObject[] entity) throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				GenlDeliverList liu = new GenlDeliverListImpl();
				liu.setZshso(entity[i].getString("zshso"));
				liu.setZshsoN(entity[i].getString("zshso_n"));
				liu.setMenge(new BigDecimal(entity[i].getLong("menge")));
				liu.setZdate(entity[i].getDate("zdate"));
				liu.setZtext(entity[i].getString("ztext"));
				this.shzlDao.saveEntity(liu);
			}
		} catch (Exception e) {
			SrmLog.error("送货指令保存异常!", e);
			throw new BusinessException("送货指令保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 供应商修改送货指令
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return viod
	 */
	@SuppressWarnings("unchecked")
	public void saveshzlcxsupply(DataObject[] entity) throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				GenlDeliverList xin = new GenlDeliverListImpl();
				xin.setZshso(entity[i].getString("zshso"));
				xin.setZshsoN(entity[i].getString("zshso_n"));
				xin.setZtext01(entity[i].getString("ztext_01"));
				this.shzlDao.saveEntity(xin);
			}
		} catch (Exception e) {
			SrmLog.error("送货指令保存异常!", e);
			throw new BusinessException("送货指令保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 采购员查询送货指令
	 * 
	 * @author 刘鑫
	 * @param entitya
	 * @param entityb
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryShzlwh(DataObject entitya, DataObject entityb,
			DataObject query, PageCond pageCond) throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				if (query.getString("lifnr") != null
						&& !query.getString("lifnr").equals("")) {
					condition.put("lifnr", query.getString("lifnr"));
				}
				if (query.getString("bukrs") != null
						&& !query.getString("bukrs").equals("")) {
					condition.put("bukrs", query.getString("bukrs"));
				}
				if (query.getString("werks") != null
						&& !query.getString("werks").equals("")) {
					condition.put("werks", query.getString("werks"));
				}
				if (query.getString("zshso") != null
						&& !query.getString("zshso").equals("")) {
					condition.put("zshso", query.getString("zshso"));
				}
				if (query.getString("matnr2") != null
						&& !query.getString("matnr2").equals("")) {
					//condition.put("matnr", query.getString("matnr"));
					String matnrs = query.getString("matnr2");
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
				if (entitya.getString("startDate") == null
						&& entitya.getString("endDate") != null) {
					condition.put("startDatea", Common.getSysDate());
					condition.put("endDatea", entitya.getString("endDate"));
				} else if (entitya.getString("startDate") != null
						&& entitya.getString("endDate") == null) {
					condition.put("startDatea", entitya.getString("startDate"));
					condition.put("endDatea", Common.getSysDate());
				} else {
					condition.put("startDatea", entitya.getString("startDate"));
					condition.put("endDatea", entitya.getString("endDate"));
				}
				if (entityb.getString("startDate") == null
						&& entityb.getString("endDate") != null) {
					condition.put("startDateb", Common.getSysDate());
					condition.put("endDateb", entityb.getString("endDate"));
				} else if (entityb.getString("startDate") != null
						&& entityb.getString("endDate") == null) {
					condition.put("startDateb", entityb.getString("startDate"));
					condition.put("endDateb", Common.getSysDate());
				} else {
					condition.put("startDateb", entityb.getString("startDate"));
					condition.put("endDateb", entityb.getString("endDate"));
				}
			} catch (Exception e) {
				SrmLog.error("送货指令查询异常!", e);
				throw new BusinessException("送货指令查询异常!", e.getMessage());
			}
			return shzlDao.queryshzlwhManager(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("送货指令查询异常!", e);
			throw new BusinessException("送货指令查询异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 采购员查询送货指令导出
	 * 
	 * @author 赵竞
	 * @param entitya
	 * @param entityb
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryShzlwhBuyer(DataObject query) throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				if (query.getString("lifnr") != null
						&& !query.getString("lifnr").equals("")) {
					condition.put("lifnr", query.getString("lifnr"));
				}
				if (query.getString("bukrs") != null
						&& !query.getString("bukrs").equals("")) {
					condition.put("bukrs", query.getString("bukrs"));
				}
				if (query.getString("werks") != null
						&& !query.getString("werks").equals("")) {
					condition.put("werks", query.getString("werks"));
				}
				if (query.getString("zshso") != null
						&& !query.getString("zshso").equals("")) {
					condition.put("zshso", query.getString("zshso"));
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
				if (query.getString("startDatea") == null
						&& query.getString("endDatea") != null) {
					condition.put("startDatea", Common.getSysDate());
					condition.put("endDatea", query.getString("endDatea"));
				} else if (query.getString("startDatea") != null
						&& query.getString("endDatea") == null) {
					condition.put("startDatea", query.getString("startDatea"));
					condition.put("endDatea", Common.getSysDate());
				} else {
					condition.put("startDatea", query.getString("startDatea"));
					condition.put("endDatea", query.getString("endDatea"));
				}
				if (query.getString("startDateb") == null
						&& query.getString("endDateb") != null) {
					condition.put("startDateb", Common.getSysDate());
					condition.put("endDateb", query.getString("endDateb"));
				} else if (query.getString("startDateb") != null
						&& query.getString("endDateb") == null) {
					condition.put("startDateb", query.getString("startDateb"));
					condition.put("endDateb", Common.getSysDate());
				} else {
					condition.put("startDateb", query.getString("startDateb"));
					condition.put("endDateb", query.getString("endDateb"));
				}
			} catch (Exception e) {
				SrmLog.error("送货指令查询异常!", e);
				throw new BusinessException("送货指令查询异常!", e.getMessage());
			}
			return shzlDao.queryshzlsdaochuBuyer(condition);
		} catch (Exception e) {
			SrmLog.error("送货指令查询异常!", e);
			throw new BusinessException("送货指令查询异常!", e.getMessage());
		}
	}	

	/**
	 * 方法描述: 供应商查询送货指令
	 * 
	 * @author 刘鑫
	 * @param entitya
	 * @param entityb
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryShzlcxsupply(DataObject entitya,
			DataObject entityb, DataObject query, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
			"lifnr").toString();
			try {
				condition.put("lifnr", lifnr);
				if (query.getString("bukrs") != null
						&& !query.getString("bukrs").equals("")) {
					condition.put("bukrs", query.getString("bukrs"));
				}
				if (query.getString("werks") != null
						&& !query.getString("werks").equals("")) {
					condition.put("werks", query.getString("werks"));
				}
				if (query.getString("zshso") != null
						&& !query.getString("zshso").equals("")) {
					condition.put("zshso", query.getString("zshso"));
				}
				if (query.getString("matnr") != null
						&& !query.getString("matnr").equals("")) {
					condition.put("matnr", query.getString("matnr"));
				}
				if (query.getString("maktx") != null
						&& !query.getString("maktx").equals("")) {
					condition.put("maktx", query.getString("maktx"));
				}
				if (query.getString("ekorg") != null
						&& !query.getString("ekorg").equals("")) {
					condition.put("ekorg", query.getString("ekorg"));
				}
				if (query.getString("ekgrp") != null
						&& !query.getString("ekgrp").equals("")) {
					condition.put("ekgrp", query.getString("ekgrp"));
				}
				if (entitya.getString("startDate") == null
						&& entitya.getString("endDate") != null) {
					condition.put("startDatea", Common.getSysDate());
					condition.put("endDatea", entitya.getString("endDate"));
				} else if (entitya.getString("startDate") != null
						&& entitya.getString("endDate") == null) {
					condition.put("startDatea", entitya.getString("startDate"));
					condition.put("endDatea", Common.getSysDate());
				} else {
					condition.put("startDatea", entitya.getString("startDate"));
					condition.put("endDatea", entitya.getString("endDate"));
				}
				if (entityb.getString("startDate") == null
						&& entityb.getString("endDate") != null) {
					condition.put("startDateb", Common.getSysDate());
					condition.put("endDateb", entityb.getString("endDate"));
				} else if (entityb.getString("startDate") != null
						&& entityb.getString("endDate") == null) {
					condition.put("startDateb", entityb.getString("startDate"));
					condition.put("endDateb", Common.getSysDate());
				} else {
					condition.put("startDateb", entityb.getString("startDate"));
					condition.put("endDateb", entityb.getString("endDate"));
				}
			} catch (Exception e) {
				SrmLog.error("送货指令查询异常!", e);
				throw new BusinessException("送货指令查询异常!", e.getMessage());
			}
			return shzlDao.queryshzlcxsupplyManager(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("送货指令查询异常!", e);
			throw new BusinessException("送货指令查询异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 供应商查询送货指令导出
	 * 
	 * @author 刘鑫
	 * @param entitya
	 * @param entityb
	 * @param query
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryShzlsupplydaochu(DataObject query)
			throws BusinessException {
			try {
				Map condition = new HashMap();
				String lifnr = Common.getCurrentUseObject().getAttributes().get(
				"lifnr").toString();
				try {
					condition.put("lifnr", lifnr);
					if (query.getString("bukrs") != null
							&& !query.getString("bukrs").equals("")) {
						condition.put("bukrs", query.getString("bukrs"));
					}
					if (query.getString("werks") != null
							&& !query.getString("werks").equals("")) {
						condition.put("werks", query.getString("werks"));
					}
					if (query.getString("zshso") != null
							&& !query.getString("zshso").equals("")) {
						condition.put("zshso", query.getString("zshso"));
					}
					if (query.getString("matnr") != null
							&& !query.getString("matnr").equals("")) {
						condition.put("matnr", query.getString("matnr"));
					}
					if (query.getString("maktx") != null
							&& !query.getString("maktx").equals("")) {
						condition.put("maktx", query.getString("maktx"));
					}
					if (query.getString("ekorg") != null
							&& !query.getString("ekorg").equals("")) {
						condition.put("ekorg", query.getString("ekorg"));
					}
					if (query.getString("ekgrp") != null
							&& !query.getString("ekgrp").equals("")) {
						condition.put("ekgrp", query.getString("ekgrp"));
					}
					if (query.getString("startDatea") == null
							&& query.getString("endDatea") != null) {
						condition.put("startDatea", Common.getSysDate());
						condition.put("endDatea", query.getString("endDatea"));
					} else if (query.getString("startDatea") != null
							&& query.getString("endDatea") == null) {
						condition.put("startDatea", query.getString("startDatea"));
						condition.put("endDatea", Common.getSysDate());
					} else {
						condition.put("startDatea", query.getString("startDatea"));
						condition.put("endDatea", query.getString("endDatea"));
					}
					if (query.getString("startDateb") == null
							&& query.getString("endDateb") != null) {
						condition.put("startDateb", Common.getSysDate());
						condition.put("endDateb", query.getString("endDateb"));
					} else if (query.getString("startDateb") != null
							&& query.getString("endDateb") == null) {
						condition.put("startDateb", query.getString("startDateb"));
						condition.put("endDateb", Common.getSysDate());
					} else {
						condition.put("startDateb", query.getString("startDateb"));
						condition.put("endDateb", query.getString("endDateb"));
					}
				} catch (Exception e) {
					SrmLog.error("送货指令查询异常!", e);
					throw new BusinessException("送货指令查询异常!", e.getMessage());
				}
				return shzlDao.queryShzlsupplydaochu(condition);
			} catch (Exception e) {
				SrmLog.error("送货指令查询异常!", e);
				throw new BusinessException("送货指令查询异常!", e.getMessage());
			}
		}
	/**
	 * 方法描述: excel上传！
	 * 
	 * @author 刘鑫 下面全属于excel上传
	 * @param s
	 * @return
	 */

	public String uploadExcelshzl(DataObject[] datas, String bukrs, String werks)
			throws BusinessException {
		StringBuffer sb = new StringBuffer();
		if (null == datas || datas.length == 0) {
			sb.append("excel文件无数据");

		} else {

			for (int i = 0; i < datas.length; i++) {
				DataObject data = datas[i];
				// 公共判断部分
				// 供应商编号
				if (SrmCommonBean.isEmpty(data.get("lifnr"))) {// 供应商编号为空
					sb.append("第 " + (i + 4) + " 行供应商编号为空");
					break;
				} else {
					String lifnr = this.lifnr(data.get("lifnr").toString());
					if (null == lifnr) {
						sb.append("第 " + (i + 4) + " 行供应商编号不正确");
						break;
					} else {
						data.set("lifnr", lifnr);
					}
				}
				// 物料编码
				if (SrmCommonBean.isEmpty(data.get("matnr"))) {// 供应商编号为空
					sb.append("第 " + (i + 4) + " 行物料编号为空");
					break;
				} else {
					String matnr = this.matnr(data.get("matnr").toString(),
							werks);
					if (null == matnr) {
						sb.append("第 " + (i + 4) + " 行物料编号不正确");
						break;
					} else {
						data.set("matnr", matnr);
					}
				}

				// 采购组织
				if (SrmCommonBean.isEmpty(data.get("ekorg"))) {// 供应商编号为空
					sb.append("第 " + (i + 4) + " 行采购组织为空");
					break;
				} else {
					String ekorg = this.ekorg(data.get("ekorg").toString());
					if (null == ekorg) {
						sb.append("第 " + (i + 4) + " 行采购组织不正确");
						break;
					} else {
						data.set("ekorg", ekorg);
					}
				}

				// 采购组
				if (SrmCommonBean.isEmpty(data.get("ekgrp"))) {// 供应商编号为空
					sb.append("第 " + (i + 4) + " 行采购组为空");
					break;
				} else {
					String ekgrp = this.ekgrp(data.get("ekgrp").toString());
					if (null == ekgrp) {
						sb.append("第 " + (i + 4) + " 行采购组不正确");
						break;
					} else {
						data.set("ekgrp", ekgrp);
					}
				}

				// 送货数量
				if (SrmCommonBean.isEmpty(data.get("menge"))
						|| !SrmCommonBean
								.isNumber(data.get("menge").toString())) {// 送货数量为空或不为数字
					sb.append("第 " + (i + 4) + " 行送货数量为空或不为数字");
					break;
				}
				// 交货日期
				if (SrmCommonBean.isEmpty(data.get("zdate"))) {// 交货日期为空
					sb.append("第 " + (i + 4) + " 行交货日期为空");
					break;
				} else {
					String zdate = data.get("zdate").toString();
					if (!isValidDate(zdate)) {
						sb.append("第 " + (i + 4) + " 行时间输入不正确!");
						break;
					} else {
					}

				}
			}
		}

		if (null == sb.toString() || "".equals(sb.toString())) {// 无错误则保存
			String t = this.saveGenlDeliverList(datas, bukrs, werks);
			sb.append("保存了" + datas.length + "条数据,送货指令号:" + t);
		}
		return sb.toString();
	}

	public String saveGenlDeliverList(DataObject[] datas, String bukrs,
			String werks) throws BusinessException {
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
			String h = this.zshso1();
			for (int i = 0; i < datas.length; i++) {
				GenlDeliverList shzldr = new GenlDeliverListImpl();
				shzldr.setZshso(h);
				shzldr.setZshsoN(String.valueOf(i + 1));
				shzldr.setBukrs(bukrs);
				shzldr.setWerks(werks);
				shzldr.setZdate(datas[i].getDate("zdate"));
				shzldr.setMatnr(datas[i].getString("matnr"));
				shzldr.setLifnr(datas[i].getString("lifnr"));
				shzldr.setEkorg(datas[i].getString("ekorg"));
				shzldr.setEkgrp(datas[i].getString("ekgrp"));
				shzldr.setMenge(new BigDecimal(datas[i].getString("menge")));
				shzldr.setZtext(datas[i].getString("ztext"));
				shzldr.setTrant(Common.getCurrentTime());
				shzldr.setTranu(Common.getCurrentUserId());

				this.shzlDao.saveEntity(shzldr);

			}
			return h;
		} catch (Exception e) {
			SrmLog.error("保存绩效数据异常!", e);
			throw new BusinessException("保存绩效数据异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 内置函数（校验函数）
	 * 
	 * @author 刘鑫 下面全为EXCEL导入的内置函数（自己慢慢找 - -！）
	 * @param s
	 * @return
	 */
	public String lifnr(String s) {
		int l = 10 - s.length();
		for (int i = 0; i < l; i++) {
			s = "0" + s;
		}
		BaseSupplyLfa1 template = new BaseSupplyLfa1Impl();
		template.setLifnr(s);
		BaseSupplyLfa1[] supply = this.shzlDao.queryEntitiesByTemplate(
				BaseSupplyLfa1.class, template);
		if (null != supply && supply.length > 0) {
			return supply[0].getLifnr();
		}
		return null;
	}

	public String matnr(String s, String t) {
		BaseMaterialMarc templatea = new BaseMaterialMarcImpl();
		templatea.setMatnr(s);
		templatea.setWerks(t);
		BaseMaterialMarc[] cool = this.shzlDao.queryEntitiesByTemplate(
				BaseMaterialMarc.class, templatea);
		if (null != cool && cool.length > 0) {
			return cool[0].getMatnr();
		}
		return null;
	}

	public String ekorg(String s) {
		BasePurchaseT024e templateb = new BasePurchaseT024eImpl();
		templateb.setEkorg(s);
		BasePurchaseT024e[] cool1 = this.shzlDao.queryEntitiesByTemplate(
				BasePurchaseT024e.class, templateb);
		if (null != cool1 && cool1.length > 0) {
			return cool1[0].getEkorg();
		}
		return null;
	}

	public String ekgrp(String s) {
		BasePurchaseT024 templatec = new BasePurchaseT024Impl();
		templatec.setEkgrp(s);
		BasePurchaseT024[] cool2 = this.shzlDao.queryEntitiesByTemplate(
				BasePurchaseT024.class, templatec);
		if (null != cool2 && cool2.length > 0) {
			return cool2[0].getEkgrp();
		}
		return null;
	}

	public String zshso() throws BusinessException {
		GenlDeliverList templated = new GenlDeliverListImpl();
		try {
			GenlDeliverList[] coolx = this.shzlDao.queryshzlzshso(templated);
			int l = coolx.length;
			if (null != coolx && l > 0) {
				String v = coolx[0].getZshso();
				String m = v.substring(2, 12);
				int t = Integer.parseInt(m);
				int k = t + 1;
				String n = String.valueOf(k);
				String o = "SH" + n;
				return o;
			} else {
				return "SH1000000001";
			}
		} catch (Exception e) {
			SrmLog.error("创建送货指令号异常!", e);
			throw new BusinessException("创建送货指令号异常!", e.getMessage());
		}
	}

	public String zshso1() throws BusinessException {
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_DELIVER_LIST");
		return "SH" + nextSeq;
	}

	public static boolean isValidDate(String sDate) {
		String datePattern1 = "\\d{4}-\\d{2}-\\d{2}";
		String datePattern2 = "^((\\d{2}(([02468][048])|([13579][26]))"
				+ "[\\-\\/\\s]?((((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|"
				+ "(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?"
				+ "((0?[1-9])|([1-2][0-9])))))|(\\d{2}(([02468][1235679])|([13579][01345789]))[\\-\\/\\s]?("
				+ "(((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?"
				+ "((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))";
		if ((sDate != null)) {
			Pattern pattern = Pattern.compile(datePattern1);
			Matcher match = pattern.matcher(sDate);
			if (match.matches()) {
				pattern = Pattern.compile(datePattern2);
				match = pattern.matcher(sDate);
				return match.matches();
			} else {
				return false;
			}
		}
		return false;
	}

	public ShzlDao getShzlDao() {
		return shzlDao;
	}

	public void setShzlDao(ShzlDao shzlDao) {
		this.shzlDao = shzlDao;
	}

}
