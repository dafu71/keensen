package com.zoomlion.hjsrm.deliverynote;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectLbwh;
import com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectLbwhImpl;
import com.zoomlion.hjsrm.interfaces.Interfaces.TJkPrinttemplate;
import com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl;
import com.zoomlion.hjsrm.pub.busi.common.SrmCommonBean;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlLabelPrint;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNote;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteDetail;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteLifnr;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlSupplyVnbm;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlVnCoincident;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlVnRule;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlLabelPrintImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteDetailImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteLifnrImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlSupplyVnbmImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlVnCoincidentImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlVnRuleImpl;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlNoteVndetailImpl;
import commonj.sdo.DataObject;

public class DeliveryBean extends BaseBean {

	public static final String STATUS_YES = "Y";// 确认

	public static final String STATUS_NO = "N";// 未确认

	private DeliveryDao deliveryDao;

	public DeliveryDao getDeliveryDao() {
		return deliveryDao;
	}

	public void setDeliveryDao(DeliveryDao deliveryDao) {
		this.deliveryDao = deliveryDao;
	}

	/**
	 * 方法描述: 查询是否供应商
	 * 
	 * @return
	 * @throws BusinessException
	 */
	public boolean isSupplier() throws BusinessException {
		try {
			return Common.getCurrentUserId().startsWith("S");
		} catch (Exception e) {
			SrmLog.error("查询用户账号异常!", e);
			throw new BusinessException("查询用户账号异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询已确认订货单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOrders(Map paramObj, PageCond pageCond)
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

			return this.deliveryDao.queryOrders(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询已确认订货单异常!", e);
			throw new BusinessException("查询已确认订货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询已确认带VN号管理送货单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryVnOrders(Map paramObj, PageCond pageCond)
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

			return this.deliveryDao.queryVnOrders(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询已确认订货单异常!", e);
			throw new BusinessException("查询已确认订货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查导出已确认订货单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryOrdersdaochu(Map paramObj)
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

			return this.deliveryDao.queryOrdersdaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询已确认订货单异常!", e);
			throw new BusinessException("查询已确认订货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询待生成送货单数据
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryOrder4Create(Map paramObj)
			throws BusinessException {
		try {
			return this.deliveryDao.queryOrder4Create(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询待生成送货单数据异常!", e);
			throw new BusinessException("查询待生成送货单数据异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 拼接查询字符串
	 * 
	 * @param arr
	 * @return
	 * @throws BusinessException
	 */
	public String strCondition(String[] arr) throws BusinessException {

		StringBuffer sb = new StringBuffer();
		sb.append("(");
		for (int i = 0; i < arr.length; i++) {

			int index = arr[i].indexOf('|');
			sb.append("(t2.ebeln=");
			sb.append(arr[i].substring(0, index));
			sb.append(" and t2.ebelp=");
			sb.append(arr[i].substring(index + 1));
			sb.append(")");
			if (i != arr.length - 1) {
				sb.append(" or ");
			}
		}
		sb.append(")");
		return sb.toString();
	}

	/**
	 * 方法描述: 送货单编号
	 * 
	 * @return
	 * @throws BusinessException
	 */
	public String ZASNH() throws BusinessException {
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_PURCHASE_NOTE");
		return "ASN" + nextSeq;
	}

	/**
	 * 方法描述: 送货数量校验
	 * 
	 * @param paramObj
	 * @param datas
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public boolean checkAmount(HashMap[] datas) throws BusinessException {
		try {

			for (int i = 0; i < datas.length; i++) {
				Map paramObj = new HashMap();
				// 取出ebeln
				paramObj.put("ebeln", datas[i].get("ebeln").toString());
				// 取出ebelp
				paramObj.put("ebelp", datas[i].get("ebelp").toString());
				DataObject[] ds = this.deliveryDao.checkAmount(paramObj);
				if (null != ds && ds.length > 0) {
					// 如果本次送货数量大于待送货量
					if (Float.parseFloat(ds[0].get("maxamount").toString()) < Float
							.parseFloat(datas[i].get("sendamount").toString())) {
						return false;
					}
					// 如果本次待送货量不等于待送货量
					if (Float.parseFloat(ds[0].get("maxamount").toString()) != Float
							.parseFloat(datas[i].get("maxamount").toString())) {
						return false;
					}

				} else {
					return false;
				}
			}

			return true;
		} catch (Exception e) {
			SrmLog.error("送货单数据已变更，请重新查询操作!", e);
			throw new BusinessException("送货单数据已变更，请重新查询操作!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 创建送货单
	 * 
	 * @param datas
	 * @param note
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public String[] saveDeliverys(HashMap[] datas, GenlPurchaseNote note)
			throws BusinessException {

		// 判断是否供应商
		if (!this.isSupplier()) {// 不是供应商
			throw new BusinessException("请确定没有用其它账号登录!!", "请确定没有用其它账号登录!!");
		}

		if (this.checkAmount(datas) == false) {
			throw new BusinessException("送货单数据已变更，请重新查询操作!",
					"创建送货单异常,存在本次送货数量大于待送货量数据!");
		}

		int zasnp = 10;// 送货单行号
		String zasnh = "";// 送货单编号
		String lastLgort_knttp = "";// 上次库存地点+科目分配类别
		String ret = "送货单编号编号为:<br>";
		String ret2 = "";
		int num = 0;// 送货单数量
		if (null == datas || datas.length == 0) {// 容错处理
			return null;
		}

		try {

			boolean isChassis = this.isChassis(Common.getCurrentUserObject()
					.getAttributes().get("lifnr").toString());

			for (int i = 0; i < datas.length; i++) {
				String currentLgort_knttp = datas[i].get("lgort").toString()
						+ (null == datas[i].get("knttp") ? "" : datas[i].get(
								"knttp").toString())

						+ (null == datas[i].get("aufnr") ? "" : datas[i].get(
								"aufnr").toString())
						+ (null == datas[i].get("kostl") ? "" : datas[i].get(
								"kostl").toString());// 当前库存地点+科目分配类别+质检类别
				/* + datas[i].get("zjlb").toString() */
				if (zasnp == 10) {// 如果送货单行号为10
					zasnh = this.saveNote(datas[i], note, isChassis);// 生成新的送货单
					lastLgort_knttp = currentLgort_knttp;// 将上次库存地点保存为当前库存地点
					ret += zasnh + "<br>";
					ret2 += zasnh + ",";
					num += 1;
				}
				if (zasnp > 10 && zasnp <= 100) {// 如果送货单行号>10并且<=100
					if (!currentLgort_knttp.equals(lastLgort_knttp)) {// 当前库存地点与上次库存地点不同
						lastLgort_knttp = currentLgort_knttp;// 将上次库存地点保存为当前库存地点
						zasnh = this.saveNote(datas[i], note, isChassis);// 并且生成新的送货单
						zasnp = 10;// 送货单行号为10
						ret += zasnh + "<br>";
						ret2 += zasnh + ",";
						num += 1;
					}
				}
				datas[i].put("zasnh", zasnh);// 插入送货单编号
				datas[i].put("zasnp", zasnp);// 插入送货单行号
				this.saveNoteDetail(datas[i]);
				zasnp += 10;// 送货单行号增加10
				if (zasnp == 110) {// 如果送货单行号为100
					zasnp = 10;
				}
			}
			// ret += "0";
			ret = num + "个送货单<br>" + ret;
			ret2 += "0";
			String rets[] = new String[2];
			rets[0] = ret;
			rets[1] = ret2;
			return rets;
		} catch (Exception e) {
			SrmLog.error("创建送货单异常!", e);
			throw new BusinessException("创建送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 保存vn号明细
	 * 
	 * @param datas
	 * @param note
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public String saveVndetail(HashMap[] datas) throws BusinessException {
		Map condition = new HashMap();
		String ret = "";
		try {
			condition.put("zasnh", datas[0].get("zasnh").toString());
			DataObject[] cool = this.deliveryDao.queryvndetailrows(condition);
			GenlPurchaseNote template = new GenlPurchaseNoteImpl();
			template.setZasnh(datas[0].get("zasnh").toString());
			template.setStatus(STATUS_NO);
			GenlPurchaseNote[] notes = this.deliveryDao
					.queryEntitiesByTemplate(GenlPurchaseNote.class, template);
			if (null == notes || notes.length == 0) {
				ret = "送货单已经被确认，保存数据失败";
			} else if (Integer.parseInt(cool[0].getString("sumvn")) < datas.length) {
				ret = "修改的条目已经被删除，请重新查询后再进行操作";
			} else {
				for (int i = 0; i < datas.length; i++) {
					GenlNoteVndetail vndetail = new GenlNoteVndetailImpl();
					GenlVnCoincident vncoincident = new GenlVnCoincidentImpl();
					GenlVnRule vnrule = new GenlVnRuleImpl();
					vnrule.setMatnr(datas[i].get("matnr").toString());
					GenlVnRule[] vnrules = this.deliveryDao
							.queryEntitiesByTemplate(GenlVnRule.class, vnrule);
					if (datas[i].get("vnbm") != null) {
						if (datas[i].get("vnbm").toString().length() > 18) {
							ret = "您输入的VN号" + datas[i].get("vnbm").toString()
									+ "超过18位，请检查后重新录入!";
							return ret;
						} else if (null != vnrules
								&& vnrules[0].getVnrule() != null) {
							if (datas[i].get("vnbm").toString().length() < vnrules[0]
									.getVnrule().length()) {
								ret = "您输入的VN号"
										+ datas[i].get("vnbm").toString()
										+ "位数小于判定位数，请检查后重新录入!";
								return ret;
							} else {
								String t = datas[i].get("vnbm").toString();
								String a = t.substring(0, vnrules[0]
										.getVnrule().length());
								if (!a.equals(vnrules[0].getVnrule())) {
									ret = "您输入的VN号"
											+ datas[i].get("vnbm").toString()
											+ "不符合规范，请检查后重新录入!";
									return ret;
								}
							}

						}
					}
					vndetail.setZasnh(datas[i].get("zasnh").toString());
					vndetail.setZasnp(datas[i].get("zasnp").toString());
					vndetail.setModifyby(Common.getCurrentUserId());
					vndetail.setModifytime(Common.getCurrentTime());
					if (null == datas[i].get("vnid")) {
						if (null != datas[i].get("vnbm")) {
							this.deliveryDao.getPrimaryKey(vncoincident);
							long pkid = vncoincident.getId();
							vndetail.setVnid(pkid);
							vndetail.setVnbm(datas[i].get("vnbm").toString());
							vncoincident.setVnbm(datas[i].get("vnbm")
									.toString());
							this.deliveryDao.saveEntity(vncoincident);
							this.deliveryDao.saveEntity(vndetail);
						}
					} else {
						if (null != datas[i].get("vnbm")) {
							vncoincident.setId(Long.parseLong(datas[i].get(
									"vnid").toString()));
							vncoincident.setVnbm(datas[i].get("vnbm")
									.toString());
							vndetail.setVnbm(datas[i].get("vnbm").toString());
							this.deliveryDao.saveEntity(vncoincident);
							this.deliveryDao.saveEntity(vndetail);
						} else {
							vncoincident.setId(Long.parseLong(datas[i].get(
									"vnid").toString()));
							vncoincident.setVnbm("");
							vndetail.setVnbm("");
							this.deliveryDao.saveEntity(vncoincident);
							this.deliveryDao.saveEntity(vndetail);
						}
					}

				}
				ret = "保存成功！";
			}
			return ret;
		} catch (Exception e) {
			SrmLog.error("保存vn号明细异常!", e);
			throw new BusinessException("保存vn号明细异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 保存vn号明细
	 * 
	 * @param datas
	 * @param werks
	 * @return
	 * @throws BusinessException
	 */

	@SuppressWarnings("unchecked")
	public String saveVndetail(HashMap[] datas, String werks)
			throws BusinessException {
		Map condition = new HashMap();
		String ret = "";
		try {
			condition.put("zasnh", datas[0].get("zasnh").toString());
			DataObject[] cool = this.deliveryDao.queryvndetailrows(condition);
			GenlPurchaseNote template = new GenlPurchaseNoteImpl();
			template.setZasnh(datas[0].get("zasnh").toString());
			template.setStatus(STATUS_NO);
			GenlPurchaseNote[] notes = this.deliveryDao
					.queryEntitiesByTemplate(GenlPurchaseNote.class, template);
			if (null == notes || notes.length == 0) {
				ret = "送货单已经被确认，保存数据失败";
			} else if (Integer.parseInt(cool[0].getString("sumvn")) < datas.length) {
				ret = "修改的条目已经被删除，请重新查询后再进行操作";
			} else {
				for (int i = 0; i < datas.length; i++) {
					GenlNoteVndetail vndetail = new GenlNoteVndetailImpl();
					GenlVnCoincident vncoincident = new GenlVnCoincidentImpl();
					GenlVnRule vnrule = new GenlVnRuleImpl();
					vnrule.setMatnr(datas[i].get("matnr").toString());
					GenlVnRule[] vnrules = this.deliveryDao
							.queryEntitiesByTemplate(GenlVnRule.class, vnrule);
					if (datas[i].get("vnbm") != null) {
						if (datas[i].get("vnbm").toString().length() > 18) {
							ret = "您输入的VN号" + datas[i].get("vnbm").toString()
									+ "超过18位，请检查后重新录入!";
							return ret;
						} else if (null != vnrules
								&& vnrules[0].getVnrule() != null) {
							if (datas[i].get("vnbm").toString().length() < vnrules[0]
									.getVnrule().length()) {
								ret = "您输入的VN号"
										+ datas[i].get("vnbm").toString()
										+ "位数小于判定位数，请检查后重新录入!";
								return ret;
							} else {
								String t = datas[i].get("vnbm").toString();
								String a = t.substring(0, vnrules[0]
										.getVnrule().length());
								if (!a.equals(vnrules[0].getVnrule())) {
									ret = "您输入的VN号"
											+ datas[i].get("vnbm").toString()
											+ "不符合规范，请检查后重新录入!";
									return ret;
								}
							}

						}
					}
					vndetail.setZasnh(datas[i].get("zasnh").toString());
					vndetail.setZasnp(datas[i].get("zasnp").toString());
					vndetail.setModifyby(Common.getCurrentUserId());
					vndetail.setModifytime(Common.getCurrentTime());
					if (null == datas[i].get("vnid")) {
						if (null != datas[i].get("vnbm")) {
							this.deliveryDao.getPrimaryKey(vncoincident);
							long pkid = vncoincident.getId();
							vndetail.setVnid(pkid);
							vndetail.setVnbm(datas[i].get("vnbm").toString());
							vncoincident.setVnbm(datas[i].get("vnbm")
									.toString());
							//vncoincident.setWerks(werks);
							//vncoincident.setCheckname(werks + "|" + vncoincident.getVnbm());
							this.deliveryDao.saveEntity(vncoincident);
							this.deliveryDao.saveEntity(vndetail);
						}
					} else {
						if (null != datas[i].get("vnbm")) {
							vncoincident.setId(Long.parseLong(datas[i].get(
									"vnid").toString()));
							vncoincident.setVnbm(datas[i].get("vnbm")
									.toString());
							vndetail.setVnbm(datas[i].get("vnbm").toString());
							//vncoincident.setWerks(werks);
							//vncoincident.setCheckname(werks + "|" + vncoincident.getVnbm());
							this.deliveryDao.saveEntity(vncoincident);
							this.deliveryDao.saveEntity(vndetail);
						} else {
							vncoincident.setId(Long.parseLong(datas[i].get(
									"vnid").toString()));
							vncoincident.setVnbm("");
							//vncoincident.setWerks("");
							//vncoincident.setCheckname("");
							vndetail.setVnbm("");
							this.deliveryDao.saveEntity(vncoincident);
							this.deliveryDao.saveEntity(vndetail);
						}
					}

				}
				ret = "保存成功！";
			}
			return ret;
		} catch (Exception e) {
			SrmLog.error("保存vn号明细异常!", e);
			throw new BusinessException("保存vn号明细异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 创建启用vn码的底盘送货单
	 * 
	 * @author 刘鑫
	 * @param datas
	 * @param note
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public String[] saveDpdeliverys(HashMap[] datas, GenlPurchaseNote note)
			throws BusinessException {

		if (this.checkAmount(datas) == false) {
			throw new BusinessException("送货单数据已变更，请重新查询操作!",
					"创建送货单异常,存在本次送货数量大于待送货量数据!");
		}

		int zasnp = 10;// 送货单行号
		String zasnh = "";// 送货单编号
		// String lastLgort_knttp = "";// 上次库存地点+科目分配类别
		String ret = "送货单编号编号为:<br>";
		String ret2 = "";
		int num = 0;// 送货单数量
		if (null == datas || datas.length == 0) {// 容错处理
			return null;
		}

		try {

			boolean isChassis = this.isChassis(Common.getCurrentUserObject()
					.getAttributes().get("lifnr").toString());

			for (int i = 0; i < Integer.parseInt(datas[0].get("sendamount")
					.toString()); i++) {
				/*
				 * String currentLgort_knttp = datas[i].get("lgort").toString() +
				 * (null == datas[i].get("knttp") ? "" : datas[i].get(
				 * "knttp").toString()) + (null == datas[i].get("aufnr") ? "" :
				 * datas[i].get( "aufnr").toString()) + (null ==
				 * datas[i].get("kostl") ? "" : datas[i].get(
				 * "kostl").toString());// 当前库存地点+科目分配类别+质检类别
				 *//* + datas[i].get("zjlb").toString() */
				if (zasnp == 10) {// 如果送货单行号为10
					zasnh = this.saveDpnote(datas[0], note, isChassis);// 生成新的送货单
					// lastLgort_knttp = currentLgort_knttp;// 将上次库存地点保存为当前库存地点
					ret += zasnh + "<br>";
					ret2 += zasnh + ",";
					num += 1;
				}
				/*
				 * if (zasnp > 10 && zasnp <= 100) {// 如果送货单行号>10并且<=100 if
				 * (!currentLgort_knttp.equals(lastLgort_knttp)) {//
				 * 当前库存地点与上次库存地点不同 lastLgort_knttp = currentLgort_knttp;//
				 * 将上次库存地点保存为当前库存地点 zasnh = this.saveNote(datas[i], note,
				 * isChassis);// 并且生成新的送货单 zasnp = 10;// 送货单行号为10 ret += zasnh + "<br>";
				 * ret2 += zasnh + ","; num += 1; } }
				 */
				datas[0].put("zasnh", zasnh);// 插入送货单编号
				datas[0].put("zasnp", zasnp);// 插入送货单行号
				this.saveDpNoteDetail(datas[0]);
				zasnp += 10;// 送货单行号增加10
				if (zasnp == 110) {// 如果送货单行号为100
					zasnp = 10;
				}
			}
			// ret += "0";
			ret = num + "个送货单<br>" + ret;
			ret2 += "0";
			String rets[] = new String[2];
			rets[0] = ret;
			rets[1] = ret2;
			return rets;
		} catch (Exception e) {
			SrmLog.error("创建送货单异常!", e);
			throw new BusinessException("创建送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 保存送货单
	 * 
	 * @param data
	 * @param note
	 * @return
	 * @throws BusinessException
	 */
	public String saveNote(HashMap data, GenlPurchaseNote note,
			boolean isChassis) throws BusinessException {
		// 判断是否供应商
		if (!this.isSupplier()) {// 不是供应商
			throw new BusinessException("请确定没有用其它账号登录!!", "请确定没有用其它账号登录!!");
		}
		try {
			String zasnh = ZASNH();
			GenlPurchaseNote newNote = new GenlPurchaseNoteImpl();
			newNote.setZasnh(zasnh);// 送货单编号
			newNote.setArrivedate(note.getArrivedate());// 预计到货日期
			newNote.setLifnr(Common.getCurrentUserObject().getAttributes().get(
					"lifnr").toString());// 供应商帐户号
			newNote.setName1(Common.getCurrentUserObject().getAttributes().get(
					"lifnrname").toString());// 供应商名称
			newNote.setLgort("0".equals(data.get("lgort").toString()) ? ""
					: data.get("lgort").toString());// 库存地
			newNote.setAufnr((null == data.get("aufnr")) ? "" : data.get(
					"aufnr").toString());// 生产订单
			newNote.setKostl((null == data.get("kostl")) ? "" : data.get(
					"kostl").toString());// 成本中心
			newNote.setKnttp((null == data.get("knttp")) ? "" : data.get(
					"knttp").toString());// 科目分配类别
			newNote.setWerks(note.getWerks());
			newNote.setCreateby(Common.getCurrentUserId());// 创建人
			newNote.setCreatetime(Common.getCurrentTime());// 创建时间
			newNote.setDelflag("0");// 未删除
			// newNote.setZjlb(data.get("zjlb").toString());
			if (isChassis) {
				newNote.setStatus(STATUS_NO);// 确认(用于底盘供应商确认 Y:确认 N:未确认)
			} else {
				newNote.setStatus(STATUS_YES);// 确认(用于底盘供应商确认 Y:确认 N:未确认)
			}

			this.deliveryDao.saveEntity(newNote);
			return zasnh;
		} catch (Exception e) {
			SrmLog.error("保存送货单异常!", e);
			throw new BusinessException("保存送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 保存启动vn号底盘送货单
	 * 
	 * @author 刘鑫
	 * @param data
	 * @param note
	 * @return
	 * @throws BusinessException
	 */
	public String saveDpnote(HashMap data, GenlPurchaseNote note,
			boolean isChassis) throws BusinessException {
		try {
			String zasnh = ZASNH();
			GenlPurchaseNote newNote = new GenlPurchaseNoteImpl();
			newNote.setZasnh(zasnh);// 送货单编号
			newNote.setArrivedate(note.getArrivedate());// 预计到货日期
			newNote.setLifnr(Common.getCurrentUserObject().getAttributes().get(
					"lifnr").toString());// 供应商帐户号
			newNote.setName1(Common.getCurrentUserObject().getAttributes().get(
					"lifnrname").toString());// 供应商名称
			newNote.setLgort("0".equals(data.get("lgort").toString()) ? ""
					: data.get("lgort").toString());// 库存地
			newNote.setAufnr((null == data.get("aufnr")) ? "" : data.get(
					"aufnr").toString());// 生产订单
			newNote.setKostl((null == data.get("kostl")) ? "" : data.get(
					"kostl").toString());// 成本中心
			newNote.setKnttp((null == data.get("knttp")) ? "" : data.get(
					"knttp").toString());// 科目分配类别
			newNote.setWerks(note.getWerks());
			newNote.setCreateby(Common.getCurrentUserId());// 创建人
			newNote.setCreatetime(Common.getCurrentTime());// 创建时间
			newNote.setDelflag("0");// 未删除
			newNote.setSfdpvn("Y");
			// newNote.setZjlb(data.get("zjlb").toString());
			if (isChassis) {
				newNote.setStatus(STATUS_NO);// 确认(用于底盘供应商确认 Y:确认 N:未确认)
			} else {
				newNote.setStatus(STATUS_YES);// 确认(用于底盘供应商确认 Y:确认 N:未确认)
			}

			this.deliveryDao.saveEntity(newNote);
			return zasnh;
		} catch (Exception e) {
			SrmLog.error("保存送货单异常!", e);
			throw new BusinessException("保存送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 保存启动vn号底盘送货单明细
	 * 
	 * @author 刘鑫
	 * @param data
	 * @throws BusinessException
	 */
	public void saveDpNoteDetail(HashMap data) throws BusinessException {
		try {
			GenlPurchaseNoteDetail newDetail = new GenlPurchaseNoteDetailImpl();
			this.deliveryDao.getPrimaryKey(newDetail);// 生成主键
			newDetail.setZasnh(data.get("zasnh").toString());// 送货单编号
			newDetail.setZasnp(data.get("zasnp").toString());// 送货单行号
			newDetail.setEbeln(data.get("ebeln").toString());// 采购订单号
			newDetail.setEbelp(data.get("ebelp").toString());// 采购订单行号
			newDetail.setAmount(new BigDecimal(1));// 本次送货数量
			newDetail.setReturnAmount(new BigDecimal(0));// 验退数量
			newDetail.setRemark2((null == data.get("remark")) ? "" : data.get(
					"remark").toString());// remark

			newDetail.setCreateby(Common.getCurrentUserId());// 创建人
			newDetail.setCreatetime(Common.getCurrentTime());// 创建时间
			newDetail.setDelflag("0");// 未删除
			// newDetail.setZjlb(data.get("zjlb").toString());
			this.deliveryDao.saveEntity(newDetail);

		} catch (Exception e) {
			SrmLog.error("保存送货单异常!", e);
			throw new BusinessException("保存送货单异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 增加打印次数
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savePrintNo(GenlPurchaseNote cool) throws BusinessException {
		try {
			String zasnh = cool.get("zasnh").toString();
			this.deliveryDao.expandEntity(cool);
			GenlPurchaseNote love = new GenlPurchaseNoteImpl();
			love.setZasnh(zasnh);
			love.setPrint(cool.getLong("print") + 1);
			// love.setZcdat(Common.getCurrentTime());
			this.deliveryDao.saveEntity(love);
		} catch (Exception e) {
			SrmLog.error("打印次数保存异常!", e);
			throw new BusinessException("打印次数保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存送货单明细
	 * 
	 * @param data
	 * @throws BusinessException
	 */
	public void saveNoteDetail(HashMap data) throws BusinessException {
		// 判断是否供应商
		if (!this.isSupplier()) {// 不是供应商
			throw new BusinessException("请确定没有用其它账号登录!!", "请确定没有用其它账号登录!!");
		}
		try {
			GenlPurchaseNoteDetail newDetail = new GenlPurchaseNoteDetailImpl();
			this.deliveryDao.getPrimaryKey(newDetail);// 生成主键
			newDetail.setZasnh(data.get("zasnh").toString());// 送货单编号
			newDetail.setZasnp(data.get("zasnp").toString());// 送货单行号
			newDetail.setEbeln(data.get("ebeln").toString());// 采购订单号
			newDetail.setEbelp(data.get("ebelp").toString());// 采购订单行号
			newDetail.setAmount(new BigDecimal(data.get("sendamount")
					.toString()));// 本次送货数量
			newDetail.setReturnAmount(new BigDecimal(0));// 验退数量
			newDetail.setRemark2((null == data.get("remark")) ? "" : data.get(
					"remark").toString());// remark

			newDetail.setCreateby(Common.getCurrentUserId());// 创建人
			newDetail.setCreatetime(Common.getCurrentTime());// 创建时间
			newDetail.setDelflag("0");// 未删除
			// newDetail.setZjlb(data.get("zjlb").toString());
			this.deliveryDao.saveEntity(newDetail);

		} catch (Exception e) {
			SrmLog.error("保存送货单异常!", e);
			throw new BusinessException("保存送货单异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询待删除送货单数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryNote4Delete(Map paramObj, PageCond pageCond)
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
			/*
			 * if (null != paramObj.get("zasnh") &&
			 * !"".equals(paramObj.get("zasnh").toString())) { String zasnhs =
			 * paramObj.get("zasnh").toString(); String[] arr =
			 * zasnhs.split(","); String zasnh = ""; for (int i = 0; i <
			 * arr.length; i++) { if (!"".equals(arr[i])) { arr[i] = "'" +
			 * arr[i] + "'"; zasnh += arr[i] + ","; } } zasnh += "'0'";
			 * paramObj.put("zasnh", zasnh); }
			 */
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)) {
				paramObj.put("lifnr", lifnr);
			}

			return this.deliveryDao.queryNote4Delete(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询待删除送货单异常!", e);
			throw new BusinessException("查询待删除送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询待删除VN送货单数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryVnNote4Delete(Map paramObj, PageCond pageCond)
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
			if (null != paramObj.get("zasnh")
					&& !"".equals(paramObj.get("zasnh").toString())) {
				String zasnhs = paramObj.get("zasnh").toString();
				String[] arr = zasnhs.split(",");
				String zasnh = "";
				for (int i = 0; i < arr.length; i++) {
					if (!"".equals(arr[i])) {
						arr[i] = "'" + arr[i] + "'";
						zasnh += arr[i] + ",";
					}
				}
				zasnh += "'0'";
				paramObj.put("zasnh", zasnh);
			}

			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)) {
				paramObj.put("lifnr", lifnr);
			}

			return this.deliveryDao.queryVNNote4Delete(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询待删除送货单异常!", e);
			throw new BusinessException("查询待删除送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询物料打印条码
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querymatnrbarcode(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)) {
				paramObj.put("lifnr", lifnr);
			}

			return this.deliveryDao.querymatnrbarcode(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询待删除送货单异常!", e);
			throw new BusinessException("查询待删除送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询待删除送货单导出数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryNote4Deletedaochu(Map paramObj)
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
			if (null != paramObj.get("zasnh")
					&& !"".equals(paramObj.get("zasnh").toString())) {
				String zasnhs = paramObj.get("zasnh").toString();
				String[] arr = zasnhs.split(",");
				String zasnh = "";
				for (int i = 0; i < arr.length; i++) {
					if (!"".equals(arr[i])) {
						arr[i] = "'" + arr[i] + "'";
						zasnh += arr[i] + ",";
					}
				}
				zasnh += "'0'";
				paramObj.put("zasnh", zasnh);
			}
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)) {
				paramObj.put("lifnr", lifnr);
			}

			return this.deliveryDao.queryNote4Deletedaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询待删除送货单异常!", e);
			throw new BusinessException("查询待删除送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询入库数量
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryStorage(Map paramObj) throws BusinessException {
		try {
			return this.deliveryDao.queryStorage(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询入库数量异常!", e);
			throw new BusinessException("查询入库数量异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 删除送货单明细
	 * 
	 * @param datas
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public void deleteNoteDetails(HashMap[] datas) throws BusinessException {
		try {
			if (null == datas || datas.length == 0) {
				return;
			}
			for (int i = 0; i < datas.length; i++) {
				boolean del = true;// 默认可以删除
				String zasnh = datas[i].get("zasnh").toString();
				String zasnp = datas[i].get("zasnp").toString();
				String pkid = datas[i].get("pkid").toString();
				HashMap paramObj = new HashMap();
				paramObj.put("zasnh", zasnh);
				paramObj.put("zasnp", zasnp);
				// 送货单是否为底盘供应商
				boolean isChassis = this.isChassis(datas[i].get("lifnr")
						.toString());
				if (isChassis) {// 底盘供应商
					// 查询送货单是否已确认，已确认的不能删除
					GenlPurchaseNote template = new GenlPurchaseNoteImpl();
					template.setZasnh(zasnh);
					template.setStatus(STATUS_NO);
					GenlPurchaseNote[] notes = this.deliveryDao
							.queryEntitiesByTemplate(GenlPurchaseNote.class,
									template);
					if (null == notes || notes.length == 0) {
						continue;
					}
				}
				if (datas[i].get("amount").toString().equals(
						datas[i].get("return_amount").toString())) {
					del = false;
				}
				DataObject[] qs = this.queryStorage(paramObj);
				if (null != qs && qs.length > 0) {
					int amount = qs[0].getInt("ruku");
					if (amount > 0) {
						del = false;// 有入库且入库数量大于0，不能删除
					}
				}
				/*
				 * DataObject[] qs1 =
				 * this.deliveryDao.shddeleteinspectjy(paramObj); if (null !=
				 * qs1 && qs1.length > 0) { del = false;// 已经生成质检抬头表！ }
				 */
				if (del) {
					GenlPurchaseNoteDetail newDetail = new GenlPurchaseNoteDetailImpl();
					newDetail.setPkid(pkid);
					newDetail.setDelflag("1");
					newDetail.setModifyby(Common.getCurrentUserId());
					newDetail.setModifytime(Common.getCurrentTime());
					this.deliveryDao.saveEntity(newDetail);

				}
			}
		} catch (Exception e) {
			SrmLog.error("保存送货单异常!", e);
			throw new BusinessException("保存送货单异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除VN送货单明细
	 * 
	 * @param datas
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public void deleteVnNoteDetails(HashMap[] datas) throws BusinessException {
		try {
			if (null == datas || datas.length == 0) {
				return;
			}
			for (int i = 0; i < datas.length; i++) {
				boolean del = true;// 默认可以删除
				String zasnh = datas[i].get("zasnh").toString();
				String zasnp = datas[i].get("zasnp").toString();
				String pkid = datas[i].get("pkid").toString();
				HashMap paramObj = new HashMap();
				paramObj.put("zasnh", zasnh);
				paramObj.put("zasnp", zasnp);
				// 送货单是否为底盘供应商
				boolean isChassis = this.isChassis(datas[i].get("lifnr")
						.toString());
				if (isChassis) {// 底盘供应商
					// 查询送货单是否已确认，已确认的不能删除
					GenlPurchaseNote template = new GenlPurchaseNoteImpl();
					template.setZasnh(zasnh);
					template.setStatus(STATUS_NO);
					GenlPurchaseNote[] notes = this.deliveryDao
							.queryEntitiesByTemplate(GenlPurchaseNote.class,
									template);
					if (null == notes || notes.length == 0) {
						continue;
					}
				}
				if (datas[i].get("amount").toString().equals(
						datas[i].get("return_amount").toString())) {
					del = false;
				}
				DataObject[] qs = this.queryStorage(paramObj);
				if (null != qs && qs.length > 0) {
					int amount = qs[0].getInt("ruku");
					if (amount > 0) {
						del = false;// 有入库且入库数量大于0，不能删除
					}
				}
				/*
				 * DataObject[] qs1 =
				 * this.deliveryDao.shddeleteinspectjy(paramObj); if (null !=
				 * qs1 && qs1.length > 0) { del = false;// 已经生成质检抬头表！ }
				 */
				if (del) {
					GenlPurchaseNoteDetail newDetail = new GenlPurchaseNoteDetailImpl();
					GenlNoteVndetail newVndetail = new GenlNoteVndetailImpl();
					GenlNoteVndetail newVndetail2 = new GenlNoteVndetailImpl();
					GenlVnCoincident newVn = new GenlVnCoincidentImpl();
					newVndetail.setZasnh(zasnh);
					newVndetail.setZasnp(zasnp);
					newVndetail.setDelflay("1");
					newDetail.setPkid(pkid);
					newDetail.setDelflag("1");
					newDetail.setModifyby(Common.getCurrentUserId());
					newDetail.setModifytime(Common.getCurrentTime());
					this.deliveryDao.saveEntity(newDetail);
					this.deliveryDao.saveEntity(newVndetail);
					newVndetail2.setZasnh(zasnh);
					newVndetail2.setZasnp(zasnp);
					GenlNoteVndetail[] notes = this.deliveryDao
							.queryEntitiesByTemplate(GenlNoteVndetail.class,
									newVndetail2);
					if (null != notes[0].get("vnid")) {
						newVn.setId(notes[0].getVnid());
						this.deliveryDao.deleteEntity(newVn);
					}
				}
			}
		} catch (Exception e) {
			SrmLog.error("保存送货单异常!", e);
			throw new BusinessException("保存送货单异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询送货单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryNotes(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			if (null != paramObj.get("zasnh")
					&& !"".equals(paramObj.get("zasnh").toString())) {
				String zasnhs = paramObj.get("zasnh").toString();
				String[] arr = zasnhs.split(",");
				String zasnh = "";
				for (int i = 0; i < arr.length; i++) {
					if (!"".equals(arr[i])) {
						arr[i] = "'" + arr[i] + "'";
						zasnh += arr[i] + ",";
					}
				}
				zasnh += "'0'";
				paramObj.put("zasnh", zasnh);
			}
			paramObj.put("ifprint", STATUS_YES);
			return this.deliveryDao.queryNotes(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询送货单异常!", e);
			throw new BusinessException("查询送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询使用vn号的送货单 用于vn维护
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryvnNotes(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			if (null != paramObj.get("zasnh")
					&& !"".equals(paramObj.get("zasnh").toString())) {
				String zasnhs = paramObj.get("zasnh").toString();
				String[] arr = zasnhs.split(",");
				String zasnh = "";
				for (int i = 0; i < arr.length; i++) {
					if (!"".equals(arr[i])) {
						arr[i] = "'" + arr[i] + "'";
						zasnh += arr[i] + ",";
					}
				}
				zasnh += "'0'";
				paramObj.put("zasnh", zasnh);
			}
			return this.deliveryDao.queryvnNotes(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询vn送货单异常!", e);
			throw new BusinessException("查询vn送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询使用vn号的送货单明细 用于vn维护
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryvnDetail(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.deliveryDao.queryvnDetail(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询vn送货单明细异常!", e);
			throw new BusinessException("查询vn送货单明细异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 导出要输入的vn号的明细数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryvnDetaildaochu(Map paramObj)
			throws BusinessException {
		try {
			return this.deliveryDao.queryvnDetaildaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询vn送货单明细异常!", e);
			throw new BusinessException("查询vn送货单明细异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 打印送货单
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public HashMap<String, String> printNote(Map paramObj)
			throws BusinessException {

		try {
			String zasnh = paramObj.get("zasnh").toString();
			HashMap<String, String> ret = new HashMap<String, String>();
			// 查询送货单
			Map condition = new HashMap();
			condition.put("zasnh", zasnh);
			condition.put("ifprint", STATUS_YES);

			DataObject[] notes = this.deliveryDao.queryNotes2(condition);
			if (null != notes && notes.length > 0) {
				ret.put("zasnh", zasnh);
				ret.put("col1", "采购订单");
				ret.put("col2", "物料编号");
				ret.put("col3", "物料描述");
				if (notes[0].get("sfdpvn") == null) {
					ret.put("col4", "货位编码");
				} else if ((notes[0].get("sfdpvn").toString()).equals("Y")) {
					ret.put("col4", "VN编码");
				} else {
					ret.put("col4", "货位编码");
				}
				ret.put("col5", "单位");
				ret.put("col6", "送货");
				ret.put("col7", "合格");
				ret.put("col8", "实收");
				ret.put("col9", "备注");
				ret.put("print", "第" + notes[0].getString("print") + "次打印");
				ret.put("werks", "工厂：" + notes[0].getString("werksname"));
				ret.put("lifnr", "供应商：" + notes[0].getString("lifnr"));
				ret.put("name1", notes[0].getString("name1"));
				// ret.put("zasnh", "送货单号：" + notes[0].getString("zasnh"));
				if ((notes[0].getString("knttp")) == null) {
					ret.put("lgort", "库存地点："
							+ (null == notes[0].getString("lgort") ? ""
									: notes[0].getString("lgort"))
							+ " "
							+ (null == notes[0].getString("lgort2") ? ""
									: notes[0].getString("lgort2")));
				} else if ((notes[0].getString("knttp")).equals("F")) {
					ret.put("lgort", "生产订单："
							+ (null == notes[0].getString("aufnr") ? ""
									: notes[0].getString("aufnr")));
				} else if ((notes[0].getString("knttp")).equals("K")) {
					ret.put("lgort", "成本中心："
							+ (null == notes[0].getString("kostl") ? ""
									: notes[0].getString("kostl")));
				}
				ret.put("createtime", "送货日期："
						+ notes[0].getString("createtime"));
				ret.put("zhidan", "经手人：");
				ret.put("zhuangyun", "检验员：");
				ret.put("shouhuo", "库管员：");
				ret.put("caigouyuan", "采购员：");
				ret.put("pzbh", "凭证编号：");
				ret.put("zjlb", notes[0].getString("zjlb"));
				for (int i = 1; i <= 10; i++) {
					String xh = "xh" + i;
					ret.put(xh, "" + i);
				}
				DataObject[] details = this.deliveryDao
						.queryNote5Delete(condition);
				for (int i = 0; i < details.length; i++) {
					String ebeln = "ebeln" + (i + 1);
					String ebelp = "ebelp" + (i + 1);
					String matnr = "matnr" + (i + 1);
					String zhwbm = "zhwbm" + (i + 1);
					String remark = "remark" + (i + 21);
					String amount = "amount" + (i + 1);
					String meins = "meins" + (i + 1);
					String txz = "txz0" + (i + 11);
					ret.put(ebeln, details[i].get("ebeln").toString());
					ret.put(ebelp, details[i].get("ebelp").toString());
					ret.put(matnr, null == details[i].get("matnr") ? ""
							: details[i].get("matnr").toString());
					if (notes[0].get("sfdpvn") == null) {
						ret.put(zhwbm, null == details[i].get("zhwbm") ? ""
								: details[i].get("zhwbm").toString());
					} else if ((notes[0].get("sfdpvn").toString()).equals("Y")) {
						ret.put(zhwbm, null == details[i].get("vnbm") ? ""
								: details[i].get("vnbm").toString());
					} else {
						ret.put(zhwbm, null == details[i].get("zhwbm") ? ""
								: details[i].get("zhwbm").toString());
					}
					ret.put(remark, null == details[i].get("remark2") ? ""
							: details[i].get("remark2").toString());
					ret.put(amount, null == details[i].get("amount") ? ""
							: details[i].get("amount").toString());
					ret.put(meins, null == details[i].get("meins") ? ""
							: details[i].get("meins").toString());
					if ("1".equals(details[i].get("flag").toString())) {
						ret.put(txz, null == details[i].get("txz01") ? "" : "★"
								+ details[i].get("txz01").toString());
					} else {
						ret.put(txz, null == details[i].get("txz01") ? ""
								: details[i].get("txz01").toString());
					}
				}

				// 查询条码位置

				TJkPrinttemplate tempalte = new TJkPrinttemplateImpl();
				tempalte.setTemplateid("deliverynote");
				TJkPrinttemplate[] prints = this.deliveryDao
						.queryEntitiesByTemplate(TJkPrinttemplate.class,
								tempalte);
				TJkPrinttemplate print = prints[0];
				// 展开大字段
				this.deliveryDao.expandLobProperty(print, "template");
				String template = print.getTemplate();
				String[] str = template.split(";");
				for (int i = 0; i < str.length; i++) {
					if (str[i].indexOf("code") > 0) {// 找到了code位置
						ret.put("codeStr", str[i]);
					}
				}
				ret.put("title", notes[0].getString("butxt"));
				ret.put("title1", "采购送检入库单");
			} else {
				throw new BusinessException("打印送货单异常!", "送货单数据异常，请重新查询!");
			}

			return ret;
		} catch (Exception e) {
			SrmLog.error("查询送货单异常!", e);
			throw new BusinessException("查询送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询生成条码送货单
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryNotes4Barcode(Map paramObj)
			throws BusinessException {
		try {
			return this.deliveryDao.queryNotes4Barcode(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询送货单异常!", e);
			throw new BusinessException("查询送货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 送货单批量打印
	 * 
	 * @param zasnhs
	 * @return
	 * @throws BusinessException
	 */
	public List<HashMap<String, String>> printBatch(String[] zasnhs)
			throws BusinessException {
		HashMap<String, String> printMap = null;
		try {
			List<HashMap<String, String>> printInfo = new ArrayList<HashMap<String, String>>();
			for (int i = 0, j = zasnhs.length; i < j; i++) {
				Map<String, String> paramObj = new HashMap<String, String>();
				paramObj.put("zasnh", zasnhs[i]);
				printMap = this.printNote(paramObj);
				if (printMap != null) {
					printInfo.add(printMap);
				}
			}
			return printInfo;
		} catch (Exception e) {
			SrmLog.error("送货单打印失败！", e);
			throw new BusinessException("送货单打印失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 打印次数保存
	 * 
	 * @param zasnhs
	 * @throws BusinessException
	 */
	public void savePrintNoBatch(String[] zasnhs) throws BusinessException {
		try {
			for (int i = 0, j = zasnhs.length; i < j; i++) {
				GenlPurchaseNote cool = new GenlPurchaseNoteImpl();
				cool.setZasnh(zasnhs[i]);
				this.savePrintNo(cool);
			}

		} catch (Exception e) {
			SrmLog.error("打印次数保存异常!", e);
			throw new BusinessException("打印次数保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 是否底盘供应商
	 * 
	 * @param u
	 * @return
	 * @throws BusinessException
	 */
	public boolean isChassis(String lifnr) throws BusinessException {
		try {
			if ("".equals(lifnr)) {
				return false;
			}
			GenlPurchaseNoteLifnr template = new GenlPurchaseNoteLifnrImpl();
			template.setLifnr(lifnr);
			template.setZmode("A");// 底盘供应商
			GenlPurchaseNoteLifnr[] lf = this.deliveryDao
					.queryEntitiesByTemplate(GenlPurchaseNoteLifnr.class,
							template);
			if (null != lf && lf.length > 0) {
				return true;
			} else
				return false;

		} catch (Exception e) {
			SrmLog.error("查询是否底盘供应商异常!", e);
			throw new BusinessException("查询是否底盘供应商异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 更新打印次数
	 * 
	 * @param entitys
	 * @throws BusinessException
	 */
	public void modifyPrintNum(HashMap[] entitys) throws BusinessException {
		try {
			for (int i = 0; i < entitys.length; i++) {
				String lifnr = entitys[i].get("lifnr").toString();
				String matnr = entitys[i].get("matnr").toString();
				String shDate = entitys[i].get("createtime").toString();
				int printNum = Integer.valueOf(entitys[i].get("printNum")
						.toString()) + 1;
				GenlLabelPrint print = new GenlLabelPrintImpl();
				print.setLifnr(lifnr);
				print.setMatnr(matnr);
				print.setShDate(shDate);
				print.setPrintNum(printNum);
				this.deliveryDao.saveEntity(print);

			}
		} catch (Exception e) {
			SrmLog.error("更新打印次数异常!", e);
			throw new BusinessException("更新打印次数异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 更新打印次数
	 * 
	 * @param entitys
	 * @throws BusinessException
	 */
	public String queryPrintNum(Map entitys) throws BusinessException {
		try {
			DataObject[] cool = this.deliveryDao.queryPrintNum(entitys);
			if (cool.length > 0) {
				return cool[0].get("print_num").toString();
			} else {
				return "0";
			}
		} catch (Exception e) {
			SrmLog.error("查询已确认订货单异常!", e);
			throw new BusinessException("查询已确认订货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 更新打印次数
	 * 
	 * @param entitys
	 * @throws BusinessException
	 */
	public String query300lifnr(Map entitys) throws BusinessException {
		try {
			DataObject[] cool = this.deliveryDao.query300lifnr(entitys);
			if (cool.length > 0) {
				return "1";
			} else {
				return "0";
			}
		} catch (Exception e) {
			SrmLog.error("查询已确认订货单异常!", e);
			throw new BusinessException("查询已确认订货单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询供应商导入的vnbm
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querystorevnbm(Map paramObj) throws BusinessException {
		try {
			paramObj.put("lifnr", Common.getCurrentUserObject().getAttributes()
					.get("lifnr").toString());
			return this.deliveryDao.querystorevnbm(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询供应商导入的vnbm!", e);
			throw new BusinessException("查询供应商导入的vnbm!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 质检类别维护excel上传！
	 * 
	 * @author 刘鑫 下面全属于excel上传
	 * @param s
	 * @return
	 * @throws Exception
	 */

	public String uploadExcelvnbm(DataObject[] datas) throws Exception {
		StringBuffer sb = new StringBuffer();
		String lifnr = Common.getCurrentUserObject().getAttributes().get(
				"lifnr").toString();
		if (null == lifnr || "".equals(lifnr)) {
			sb.append("您不是供应商无法进行导入");
		} else if (null == datas || datas.length == 0) {
			sb.append("excel文件无数据");

		} else {

			for (int i = 0; i < datas.length; i++) {
				DataObject data = datas[i];
				// 公共判断部分
				if (SrmCommonBean.isEmpty(data.get("vnbm"))) {// vnbm为空
					sb.append("第 " + (i + 2) + " 行vnbm为空");
					break;
				} else {
					if (data.get("vnbm").toString().length() != 17) {
						sb.append("第 " + (i + 2) + " 行vn编码不是17位，不能进行导入");
						break;
					} else {
						data.set("lifnr", lifnr);
					}
				}
			}
		}

		if (null == sb.toString() || "".equals(sb.toString())) {// 无错误则保存
			this.saveVnbmlifnr(datas);
			sb.append("保存了" + datas.length + "条数据");
		}

		return sb.toString();
	}

	public void saveVnbmlifnr(DataObject[] datas) throws BusinessException {
		try {

			for (int i = 0; i < datas.length; i++) {
				GenlSupplyVnbm zjlbwh = new GenlSupplyVnbmImpl();
				zjlbwh.setVnbm(datas[i].getString("vnbm") + "C");//字母C
				zjlbwh.setLifnr(datas[i].getString("lifnr"));
				zjlbwh.setTrant(Common.getCurrentTime());
				zjlbwh.setTranu(Common.getCurrentUserId());
				this.deliveryDao.saveEntity(zjlbwh);
				GenlSupplyVnbm zjlbwh2 = new GenlSupplyVnbmImpl();
				zjlbwh2.setVnbm(datas[i].getString("vnbm") + "N");//字母N
				//zjlbwh2.setLifnr(datas[i].getString("lifnr"));
				zjlbwh2.setLifnr("0000003450");//C3450
				zjlbwh2.setTrant(Common.getCurrentTime());
				zjlbwh2.setTranu(Common.getCurrentUserId());
				this.deliveryDao.saveEntity(zjlbwh2);

			}
		} catch (Exception e) {
			SrmLog.error("保存数据异常!", e);
			throw new BusinessException("保存数据异常!", e.getMessage());
		}

	}

}
