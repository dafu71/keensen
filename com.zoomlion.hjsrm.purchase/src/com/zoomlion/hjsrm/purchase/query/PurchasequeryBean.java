package com.zoomlion.hjsrm.purchase.query;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.busi.common.SrmCommonBean;
import com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData;
import com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl;
import commonj.sdo.DataObject;

public class PurchasequeryBean extends BaseBean {

	private PurchasequeryDao purchasequeryDao;

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
	public DataObject[] queryPurchase(DataObject entity, DataObject query,
			PageCond pageCond) throws BusinessException {
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
				
				if (query.getString("ifconfirm") != null
						&& !query.getString("ifconfirm").equals("")) {
					condition.put("ifconfirm", query.getString("ifconfirm"));
				}
				
			} catch (Exception e) {
				SrmLog.error("采购订单查询异常!", e);
				throw new BusinessException("采购订单查询异常!", e.getMessage());
			}
			return purchasequeryDao.queryPurchaseManager(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("采购订单查询异常!", e);
			throw new BusinessException("采购订单查询异常!", e.getMessage());
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
	public DataObject[] queryPurchasedaochu(DataObject query)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			try {
				if (null == lifnr || "".equals(lifnr)) {
					if (query.getString("lifnr") != null
							&& !query.getString("lifnr").equals("")) {
						condition.put("lifnr", query.getString("lifnr"));
					}
				} else {
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
			return purchasequeryDao.queryPurchasedaochuManager(condition);
		} catch (Exception e) {
			SrmLog.error("采购订单查询异常!", e);
			throw new BusinessException("采购订单查询异常!", e.getMessage());
		}
	}

	/**
	 * 导入供应商库存
	 * 
	 * @param datas
	 * @throws BusinessException
	 */
	public String uploadApplyStock(DataObject[] datas) throws BusinessException {
		StringBuffer sb = new StringBuffer();
		Calendar cal = Calendar.getInstance();
		Date temp = cal.getTime();
		SimpleDateFormat dz = new SimpleDateFormat("yyyy-MM-dd");
		// String currentdate = df.format(temp);
		String erdat = dz.format(temp);
		int errCount = 0;// 错误计数
		String[] fields = { "a", "b", "c", "d", "e", "f", "g", "h"};
		String[] fieldnames = { "物料编码", "物料名称", "供应商", "(采购申请总汇总数)", "原材料", "半成品", "库存成品数量", "备注" };
		try {
			String lifnr = Common.getCurrentUserObject().getAttributes().get(
					"lifnr").toString();
			if (null == datas || datas.length < 2) {// 至少有标题和一行数据
				sb.append("excel文件无数据");
				return sb.toString();
			}
			// 标题行校验
			DataObject titledata = datas[0];
			// 标题空值校验
			for (int i = 0; i < fields.length; i++) {
				if (SrmCommonBean.isEmpty(titledata.get(fields[i]))) {
					sb.append("第" + (i + 1) + "列标题为空</br>");
				}

			}
			if (null != sb.toString() && !"".equals(sb.toString())) {
				return sb.toString();
			}
			// 标题数据校验
			for (int i = 0; i < fieldnames.length; i++) {
				if (!fieldnames[i].equals(titledata.get(fields[i]).toString()
						.trim())) {
					sb
							.append("第" + (i + 1) + "列标题应为" + fieldnames[i]
									+ "</br>");
				}
			}
			if (null != sb.toString() && !"".equals(sb.toString())) {
				return sb.toString();
			}

			Map<String, String> map = new HashMap<String, String>();

			// 校验车型物料编码
			for (int i = 1; i < datas.length; i++) {
				DataObject data = datas[i];
				
				//供应商校验
				if(!lifnr.equals(data.get("c").toString())){
					sb.append("第" + (i + 1) + "行供应商不是当前供应商</br>");
					errCount++;
					if (errCount > 20) {
						return sb.toString();
					}
				}
				
				//空值校验 
				if (SrmCommonBean.isEmpty(data.get("a"))) {
					sb.append("第" + (i + 1) + "行车型物料编码为空</br>");
					errCount++;
					if (errCount > 20) {
						return sb.toString();
					}
				} else {
					map.put(data.get("a").toString(), data.get("a").toString());
					if (!this.isLegal(lifnr, data.get("a").toString(), erdat)) {
						sb.append("第" + (i + 1) + "行车型物料编码不存在或不属于当前供应商</br>");
						errCount++;
						if (errCount > 20) {
							return sb.toString();
						}
					}
				}
	
			}
			// 去重校验
			if (map.size() != datas.length - 1) {
				sb.append("物料编码有重复</br>");
				errCount++;
				if (errCount > 20) {
					return sb.toString();
				}
			}
			if (errCount > 0) {
				return sb.toString();
			}
			
			String reg = "^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$";
			//保存数据
			for (int i = 1; i < datas.length; i++) {
				DataObject data = datas[i];
				GenlPurchaseApplyData template = new GenlPurchaseApplyDataImpl();
				template.setMatnr(data.get("a").toString());
				template.setLifnr(lifnr);
				template.setErdat(erdat);
				GenlPurchaseApplyData gpad = new GenlPurchaseApplyDataImpl();
				String e = null == data.get("e")?"":data.get("e").toString();
				String f = null == data.get("f")?"":data.get("f").toString();
				String g = null == data.get("g")?"":data.get("g").toString();
				String h = null == data.get("h")?"":data.get("h").toString();
				
				if(!Common.isMatches(e, reg)){
					e = "0";
				}
				if(!Common.isMatches(f, reg)){
					f = "0";
				}
				if(!Common.isMatches(g, reg)){
					g = "0";
				}
				
				gpad.setData1(e);
				gpad.setData4(f);
				gpad.setData5(g);
				gpad.setRemark(h);
				this.purchasequeryDao.updateEntityByTemplate(gpad, template);
			}
		} catch (Exception e) {
			SrmLog.error("您没有导入权限或导入异常!", e);
			throw new BusinessException("您没有导入权限或导入异常!", e.getMessage());
		}
		if (null == sb.toString() || "".equals(sb.toString())) {// 无错误则保存
			// this.savekcglwxdjkcztwhnew(datas);
			sb.append("保存了" + (datas.length - 1) + "条数据");
		}
		return sb.toString();
	}

	/**
	 * 查询供应商物料信息
	 * 
	 * @param lifnr
	 * @param matnr
	 * @param erdat
	 * @return
	 * @throws BusinessException
	 */
	public boolean isLegal(String lifnr, String matnr, String erdat)
			throws BusinessException {
		try {
			GenlPurchaseApplyData template = new GenlPurchaseApplyDataImpl();
			template.setLifnr(lifnr);
			template.setMatnr(matnr);
			template.setErdat(erdat);
			return this.purchasequeryDao.countByTemplate(template) > 0;
		} catch (Exception e) {
			SrmLog.error("查询供应商物料信息异常!", e);
			throw new BusinessException("查询供应商物料信息异常!", e.getMessage());
		}
	}

	public PurchasequeryDao getPurchasequeryDao() {
		return purchasequeryDao;
	}

	public void setPurchasequeryDao(PurchasequeryDao purchasequeryDao) {
		this.purchasequeryDao = purchasequeryDao;
	}
	
	public static void main(String[] args) 
	{
		String reg = "^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$";
		String str1 = "";
		String str2 = "1243";
		System.out.println("-----------" + Common.isMatches(str1, reg));
		System.out.println("1243-----------" + Common.isMatches(str2, reg));
	}
}
