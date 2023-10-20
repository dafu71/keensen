package com.zoomlion.hjsrm.kcgl.kcgl;

import java.io.File;
import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.eos.common.connection.ConnectionHelper;
import com.eos.das.entity.DASManager;
import com.eos.das.entity.ExpressionHelper;
import com.eos.das.entity.IDASCriteria;
import com.eos.foundation.PageCond;
import com.eos.foundation.data.DataObjectUtil;
import com.eos.foundation.impl.PageCondImpl;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.busi.common.SrmCommonBean;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNote;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteDetail;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveData;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDatab;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveList;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveVerd;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveVerl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveVerz;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveZcpcxZleib;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveZdajiZleib;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveZleibLifnr;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlVegicleList;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.V_Zxlbqd;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteDetailImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDataImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDataVersionImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDatabImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveVerdImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveVerlImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveVerzImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveZcpcxZleibImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveZdajiZleibImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveZleibLifnrImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.V_ZxlbqdImpl;
import com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanHead;
import com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanOpt;
import com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanHeadImpl;
import com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanOptImpl;
import com.zoomlion.hjsrm.pub.file.excelutil.ExcelUtil;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl;
import commonj.sdo.DataObject;

import edu.emory.mathcs.backport.java.util.Arrays;

/**
 * ************************************************** 描 述： 实现采购收货入库功能
 * 
 * @author 刘鑫 **************************************************
 */

public class KcglkcglBean extends BaseBean {
	
	public static final String OPT_IMPORTPLAN = "1";// 导入计划
	
	public static final String OPT_UPDATETITLE = "2";// 修改计划标题
	
	public static final String OPT_CONFIRM = "3";// 计划确认
	
	public static final String OPT_UNCONFIRM = "4";// 取消确认
	
	public static final String OPT_ARCHIVE = "5";// 归档
	
	public static final String OPT_UNARCHIVE = "6";// 取消归档
	
	public static final String OPT_UPDATE = "7";// 修改计划
	
	public static final String OPT_ADD = "8";// 新增计划
	
	public static final String OPT_DELETE = "9";// 删除计划
	
	public static final String OPT_DELETEIMPORT = "10";// 删除导入计划
	
	public static final String OPT_ANSWER = "11";// 答交
	
	private KcglkcglDao kcglkcglDao;

	/**
	 * 方法描述: 获取收货入库抬头
	 * 
	 * @author 刘鑫
	 * @param kcglkcgl
	 * @throws BusinessException
	 * @return GenlPurchaseNote
	 */
	@SuppressWarnings("unchecked")
	public GenlPurchaseNote getKcgl(GenlPurchaseNote kcglkcgl)
			throws BusinessException {
		GenlPurchaseNote love = new GenlPurchaseNoteImpl();
		if (kcglkcgl.getZasnh() != null && !kcglkcgl.getZasnh().equals("")) {
			try {
				this.kcglkcglDao.expandEntity(kcglkcgl);
				IDASCriteria dasCriteria = DASManager
						.createCriteria(GenlPurchaseNote.class.getName());
				dasCriteria.add(ExpressionHelper.eq("zasnh", kcglkcgl
						.getZasnh()));
				GenlPurchaseNote[] aos = this.kcglkcglDao
						.queryEntitiesByCriteriaEntity(GenlPurchaseNote.class,
								dasCriteria);
				int t = aos.length;
				for (int i = 0; i < t; i++) {
					// vfor.set("lifnr", aos[i].getLifnr());

					love = aos[0];
				}
			} catch (Exception e) {
				SrmLog.error("送货单加载异常!", e);
				throw new BusinessException("送货单加载异常!", e.getMessage());
			}
		}
		return love;
	}

	@SuppressWarnings("unchecked")
	public V_Zxlbqd queryCxlbqd(DataObject cxlbqd) throws BusinessException {
		V_Zxlbqd liu = new V_ZxlbqdImpl();
		try {
			Map condition = new HashMap();
			condition.put("zleibname", cxlbqd.getString("zleibname"));
			DataObject[] cool = this.kcglkcglDao.querycxlbqd(condition);
			liu.setNr("");
			liu.setZleibname("");
			if (cool.length > 0) {
				liu.setNr(cool[0].getString("nr"));
				liu.setZleibname(cool[0].getString("zleibname"));
			}
		} catch (Exception e) {
			SrmLog.error("类别清单查询异常!", e);
			throw new BusinessException("类别清单查询异常!", e.getMessage());
		}
		return liu;
	}

	/**
	 * 方法描述: 获取物料凭证冲销抬头
	 * 
	 * @author 刘鑫
	 * @param kcglkcgl
	 * @throws BusinessException
	 * @return GenlPurchaseNote
	 */
	@SuppressWarnings("unchecked")
	public GenlReceiptsMseg getKcglwlpzcx(GenlReceiptsMseg kcglkcgl)
			throws BusinessException {
		GenlReceiptsMseg love1 = new GenlReceiptsMsegImpl();
		if (kcglkcgl.getMblnr() != null && !kcglkcgl.getMblnr().equals("")) {
			try {
				this.kcglkcglDao.expandEntity(kcglkcgl);
				IDASCriteria dasCriteria = DASManager
						.createCriteria(GenlReceiptsMseg.class.getName());
				dasCriteria.add(ExpressionHelper.eq("mblnr", kcglkcgl
						.getMblnr()));
				dasCriteria.add(ExpressionHelper.eq("mjahr", kcglkcgl
						.getMjahr()));
				GenlReceiptsMseg[] aos = this.kcglkcglDao
						.queryEntitiesByCriteriaEntity(GenlReceiptsMseg.class,
								dasCriteria);
				int t = aos.length;
				for (int i = 0; i < t; i++) {
					// vfor.set("lifnr", aos[i].getLifnr());

					love1 = aos[0];
				}
			} catch (Exception e) {
				SrmLog.error("物料凭证加载异常!", e);
				throw new BusinessException("物料凭证加载异常!", e.getMessage());
			}
		}
		return love1;
	}

	/**
	 * 方法描述: 保存退货信息
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savekcglckth(DataObject[] entity) throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				GenlReceiptsMseg ckth = new GenlReceiptsMsegImpl();
				ckth.setMblnr(entity[i].getString("mblnr"));
				ckth.setMjahr(entity[i].getString("mjahr"));
				ckth.setZeile(entity[i].getString("zeile"));
				ckth.setGrund(entity[i].getString("grund"));
				// love.setZcdat(Common.getCurrentTime());
				this.kcglkcglDao.saveEntity(ckth);
			}
		} catch (Exception e) {
			SrmLog.error("订单保存异常!", e);
			throw new BusinessException("订单保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存收货入库信息
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savekcglshrk(DataObject[] entity) throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				GenlPurchaseNoteDetail shrk = new GenlPurchaseNoteDetailImpl();
				shrk.setPkid(entity[i].getString("pkid"));
				String amount = entity[i].getString("amount");
				float amount2 = Float.parseFloat(amount);
				String menge = entity[i].getString("menge");
				float menge2 = Float.parseFloat(menge);
				// shrk.setReturnAmount(new
				// BigDecimal(entity[i].getString("amount")
				// - entity[i].getLong("menge")));
				shrk.setReturnAmount(new BigDecimal(amount2 - menge2));
				// love.setZcdat(Common.getCurrentTime());
				this.kcglkcglDao.saveEntity(shrk);
			}
		} catch (Exception e) {
			SrmLog.error("订单保存异常!", e);
			throw new BusinessException("订单保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存收货入库信息
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savekcglvnshrk(DataObject[] entity) throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				GenlPurchaseNoteDetail shrk = new GenlPurchaseNoteDetailImpl();
				shrk.setPkid(entity[i].getString("pkid"));
				shrk.setReturnAmount(new BigDecimal(entity[i].getLong("amount")
						- entity[i].getLong("menge")));
				if (entity[i].getLong("menge") == 0) {
					Map condition = new HashMap();
					if (entity[i].getString("vnbm") != null
							&& !entity[i].getString("vnbm").equals("")) {
						condition.put("vnbm", entity[i].getString("vnbm"));
						this.kcglkcglDao.delvncode(condition);
					}
				}
				// love.setZcdat(Common.getCurrentTime());
				this.kcglkcglDao.saveEntity(shrk);
			}
		} catch (Exception e) {
			SrmLog.error("订单保存异常!", e);
			throw new BusinessException("订单保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存大件库存状态维护信息
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savekcglwxdjkcztwh(DataObject[] entity)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)) {
				try {
					for (int i = 0; i < entity.length; i++) {
						// 保存A状态
						GenlReserveData liu1 = new GenlReserveDataImpl();
						liu1.setLifnr(lifnr);
						liu1.setZleib(entity[i].getString("zleib"));
						liu1.setZdaji(entity[i].getString("zdaji"));
						liu1.setZstat("A");
						if (entity[i].getString("menge_a") != null
								&& !entity[i].getString("menge_a").equals("")) {
							liu1.setMenge(new BigDecimal(entity[i]
									.getLong("menge_a")));
						} else {
							liu1.setMenge(new BigDecimal(0));
						}
						liu1.setZcreu(Common.getCurrentUserId());
						liu1.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu1);
						// 保存B状态
						GenlReserveData liu2 = new GenlReserveDataImpl();
						liu2.setLifnr(lifnr);
						liu2.setZleib(entity[i].getString("zleib"));
						liu2.setZdaji(entity[i].getString("zdaji"));
						liu2.setZstat("B");
						if (entity[i].getString("menge_b") != null
								&& !entity[i].getString("menge_b").equals("")) {
							liu2.setMenge(new BigDecimal(entity[i]
									.getLong("menge_b")));
						} else {
							liu2.setMenge(new BigDecimal(0));
						}
						liu2.setZcreu(Common.getCurrentUserId());
						liu2.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu2);
						// 保存C状态
						GenlReserveData liu3 = new GenlReserveDataImpl();
						liu3.setLifnr(lifnr);
						liu3.setZleib(entity[i].getString("zleib"));
						liu3.setZdaji(entity[i].getString("zdaji"));
						liu3.setZstat("C");
						if (entity[i].getString("menge_c") != null
								&& !entity[i].getString("menge_c").equals("")) {
							liu3.setMenge(new BigDecimal(entity[i]
									.getLong("menge_c")));
						} else {
							liu3.setMenge(new BigDecimal(0));
						}
						liu3.setZcreu(Common.getCurrentUserId());
						liu3.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu3);
						// 保存D状态
						GenlReserveData liu4 = new GenlReserveDataImpl();
						liu4.setLifnr(lifnr);
						liu4.setZleib(entity[i].getString("zleib"));
						liu4.setZdaji(entity[i].getString("zdaji"));
						liu4.setZstat("D");
						if (entity[i].getString("menge_d") != null
								&& !entity[i].getString("menge_d").equals("")) {
							liu4.setMenge(new BigDecimal(entity[i]
									.getLong("menge_d")));
						} else {
							liu4.setMenge(new BigDecimal(0));
						}
						liu4.setZcreu(Common.getCurrentUserId());
						liu4.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu4);
						// 保存E状态
						GenlReserveData liu5 = new GenlReserveDataImpl();
						liu5.setLifnr(lifnr);
						liu5.setZleib(entity[i].getString("zleib"));
						liu5.setZdaji(entity[i].getString("zdaji"));
						liu5.setZstat("E");
						if (entity[i].getString("menge_e") != null
								&& !entity[i].getString("menge_e").equals("")) {
							liu5.setMenge(new BigDecimal(entity[i]
									.getLong("menge_e")));
						} else {
							liu5.setMenge(new BigDecimal(0));
						}
						liu5.setZcreu(Common.getCurrentUserId());
						liu5.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu5);
					}
				} catch (Exception e) {
					SrmLog.error("订单保存异常!", e);
					throw new BusinessException("订单保存异常!", e.getMessage());
				}
			} else {
				throw new BusinessException("您没有保存权限", "您没有保存权限!");
			}
		} catch (Exception e) {
			SrmLog.error("您没有保存权限!", e);
			throw new BusinessException("您没有保存权限!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存大件库存状态维护信息new
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savekcglwxdjkcztwhnew(DataObject[] entity)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)) {
				try {
					for (int i = 0; i < entity.length; i++) {
						// 保存A状态
						GenlReserveDatab liu1 = new GenlReserveDatabImpl();
						liu1.setLifnr(lifnr);
						liu1.setMatnr(entity[i].getString("matnr"));
						liu1.setCxdm(entity[i].getString("cxdm"));
						liu1.setZstat("A");
						if (entity[i].getString("menge_a") != null
								&& !entity[i].getString("menge_a").equals("")) {
							liu1.setMenge(new BigDecimal(entity[i]
									.getLong("menge_a")));
						} else {
							liu1.setMenge(new BigDecimal(0));
						}
						liu1.setZcreu(Common.getCurrentUserId());
						liu1.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu1);
						// 保存B状态
						GenlReserveDatab liu2 = new GenlReserveDatabImpl();
						liu2.setLifnr(lifnr);
						liu2.setMatnr(entity[i].getString("matnr"));
						liu2.setCxdm(entity[i].getString("cxdm"));
						liu2.setZstat("B");
						if (entity[i].getString("menge_b") != null
								&& !entity[i].getString("menge_b").equals("")) {
							liu2.setMenge(new BigDecimal(entity[i]
									.getLong("menge_b")));
						} else {
							liu2.setMenge(new BigDecimal(0));
						}
						liu2.setZcreu(Common.getCurrentUserId());
						liu2.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu2);
						// 保存C状态
						GenlReserveDatab liu3 = new GenlReserveDatabImpl();
						liu3.setLifnr(lifnr);
						liu3.setMatnr(entity[i].getString("matnr"));
						liu3.setCxdm(entity[i].getString("cxdm"));
						liu3.setZstat("C");
						if (entity[i].getString("menge_c") != null
								&& !entity[i].getString("menge_c").equals("")) {
							liu3.setMenge(new BigDecimal(entity[i]
									.getLong("menge_c")));
						} else {
							liu3.setMenge(new BigDecimal(0));
						}
						liu3.setZcreu(Common.getCurrentUserId());
						liu3.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu3);
						// 保存D状态
						GenlReserveDatab liu4 = new GenlReserveDatabImpl();
						liu4.setLifnr(lifnr);
						liu4.setMatnr(entity[i].getString("matnr"));
						liu4.setCxdm(entity[i].getString("cxdm"));
						liu4.setZstat("D");
						if (entity[i].getString("menge_d") != null
								&& !entity[i].getString("menge_d").equals("")) {
							liu4.setMenge(new BigDecimal(entity[i]
									.getLong("menge_d")));
						} else {
							liu4.setMenge(new BigDecimal(0));
						}
						liu4.setZcreu(Common.getCurrentUserId());
						liu4.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu4);
						// 保存E状态
						GenlReserveDatab liu5 = new GenlReserveDatabImpl();
						liu5.setLifnr(lifnr);
						liu5.setMatnr(entity[i].getString("matnr"));
						liu5.setCxdm(entity[i].getString("cxdm"));
						liu5.setZstat("E");
						if (entity[i].getString("menge_e") != null
								&& !entity[i].getString("menge_e").equals("")) {
							liu5.setMenge(new BigDecimal(entity[i]
									.getLong("menge_e")));
						} else {
							liu5.setMenge(new BigDecimal(0));
						}
						liu5.setZcreu(Common.getCurrentUserId());
						liu5.setZcret(Common.getCurrentTime());
						this.kcglkcglDao.saveEntity(liu5);
					}
				} catch (Exception e) {
					SrmLog.error("订单保存异常!", e);
					throw new BusinessException("订单保存异常!", e.getMessage());
				}
			} else {
				throw new BusinessException("您没有保存权限", "您没有保存权限!");
			}
		} catch (Exception e) {
			SrmLog.error("您没有保存权限!", e);
			throw new BusinessException("您没有保存权限!", e.getMessage());
		}
	}

	/**
	 * 方法描述: excel上传！
	 * 
	 * @author 刘鑫 下面全属于excel上传
	 * @param s
	 * @return
	 */

	public String uploadExcelwxdjwh(DataObject[] datas)
			throws BusinessException {
		StringBuffer sb = new StringBuffer();
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)) {
				if (null == datas || datas.length == 0) {
					sb.append("excel文件无数据");

				} else {
					for (int i = 0; i < datas.length; i++) {
						DataObject data = datas[i];
						// 公共判断部分
						// 物料编码
						if (SrmCommonBean.isEmpty(data.get("matnr"))) {// 供应商编号为空
							sb.append("第 " + (i + 4) + " 行物料编号为空");
							break;
						} else {
							if (SrmCommonBean.isEmpty(data.get("cxdm"))) {// 供应商编号为空
								sb.append("第 " + (i + 4) + " 车型代码为空");
								break;
							} else {
								String cxdm = this.cxdm(lifnr, data
										.get("matnr").toString(), data.get(
										"cxdm").toString());
								if ("0".equals(cxdm)) {
									sb.append("第 " + (i + 4)
											+ " 您更改了系统数据导致数据异常！");
									break;
								}
							}
						}
					}
				}
			} else {
				throw new BusinessException("您不是供应商,没有导入权限", "您不是供应商,没有导入权限!");
			}
		} catch (Exception e) {
			SrmLog.error("您没有导入权限或导入异常!", e);
			throw new BusinessException("您没有导入权限或导入异常!", e.getMessage());
		}
		if (null == sb.toString() || "".equals(sb.toString())) {// 无错误则保存
			this.savekcglwxdjkcztwhnew(datas);
			sb.append("保存了" + datas.length + "条数据");
		}
		return sb.toString();
	}

	@SuppressWarnings("unchecked")
	public String cxdm(String s, String a, String b) throws BusinessException {
		try {
			String k = "0";
			Map condition = new HashMap();
			condition.put("lifnr", s);
			condition.put("matnr", a);
			condition.put("cxdm", b);
			DataObject[] cool1 = this.kcglkcglDao.querywxdjwhyz(condition);
			if (null != cool1 && cool1.length > 0) {
				k = "1";
			}
			return k;
		} catch (Exception e) {
			SrmLog.error("验证数据合法性异常!", e);
			throw new BusinessException("验证数据合法性异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 底盘送货单号验证
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public String shdshrkyz(String query) throws BusinessException {
		Map condition = new HashMap();
		String k = "0";
		try {
			condition.put("zasnh", query);
			DataObject[] cool = this.kcglkcglDao.shdshrkyz(condition);
			if (cool.length < 1) {
				k = "1";
			} else {
				k = "0";
			}
			return k;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 检查库管员是否有权限过账送货单
	 * 
	 * @author hw_zj
	 * @param entity
	 * @throws BusinessException
	 * @return DataObject[]
	 * @date 2017-08-02
	 */
	@SuppressWarnings("unchecked")
	public String checkStoreMagAuth(String userid, String werks)
			throws BusinessException {
		Map condition = new HashMap();
		String k = "0";
		try {
			condition.put("userid", userid);
			condition.put("werks", werks);
			DataObject[] outcome = this.kcglkcglDao
					.checkStoreMagAuth(condition);
			if (outcome.length < 1) {
				k = "1";
			} else {
				k = "0";
			}
			return k;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 冲销被删除或已结算验证
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public String wlpzcxdelyz(DataObject[] entity) throws BusinessException {
		Map condition = new HashMap();
		String k = "0";
		try {
			String username = Common.getCurrentUseObject().getUserName();
			if (username.equals("guest")) {
				k = "2";
			} else {
				for (int i = 0; i < entity.length; i++) {
					condition.put("mblnr", entity[i].getString("mblnr"));
					condition.put("mjahr", entity[i].getString("mjahr"));
					condition.put("zeile", entity[i].getString("zeile"));
					DataObject[] cool = this.kcglkcglDao.wlpzcxdelyz(condition);
					if (null != cool && cool.length > 0) {
						k = "1";
					} else {
						k = "0";
						break;
					}
				}
			}
			return k;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 收货入库过账验证
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public String shrkdelyz(DataObject[] entity) throws BusinessException {
		String v = "0";
		try {
			String username = Common.getCurrentUseObject().getUserName();
			if (username.equals("guest")) {
				v = "2";
			} else {
				for (int i = 0; i < entity.length; i++) {
					GenlPurchaseNoteDetail templatea = new GenlPurchaseNoteDetailImpl();
					templatea.setPkid(entity[i].getString("pkid"));
					templatea.setDelflag("1");
					GenlPurchaseNoteDetail[] love = this.kcglkcglDao
							.queryEntitiesByTemplate(
									GenlPurchaseNoteDetail.class, templatea);
					if (null != love && love.length > 0) {
						v = "1";
						break;
					} else {
						v = "0";
					}
				}
			}
			return v;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 收货入库数据是否异常验证
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public String shrkshujuyichangyz(DataObject[] entity)
			throws BusinessException {
		Map condition = new HashMap();
		String v = "0";
		try {
			for (int i = 0; i < entity.length; i++) {
				condition.put("zasnh", entity[i].getString("zasnh"));
				condition.put("zasnp", entity[i].getString("zasnp"));
				DataObject[] love = this.kcglkcglDao
						.queryKcglshrkshujuyz(condition);
				if (null == love || love.length == 0) {
					v = "1";
					break;
				} else {
					v = "0";
				}
			}

			return v;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询收货入库信息
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryKcglshrk(DataObject entity, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				if (entity.getString("zasnh") != null
						&& !entity.getString("zasnh").equals("")) {
					condition.put("zasnh", entity.getString("zasnh"));
				}
			} catch (Exception e) {
				SrmLog.error("收货入库查询异常!", e);
				throw new BusinessException("收货入库查询异常!", e.getMessage());
			}
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return kcglkcglDao.queryKcglshrkManager(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("收货入库查询异常!", e);
			throw new BusinessException("收货入库查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询物料凭证冲销信息
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryKcglwlpzcx(DataObject entity, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				if (entity.getString("mblnr") != null
						&& !entity.getString("mblnr").equals("")) {
					condition.put("mblnr", entity.getString("mblnr"));
				}
				if (entity.getString("mjahr") != null
						&& !entity.getString("mjahr").equals("")) {
					condition.put("mjahr", entity.getString("mjahr"));
				}
			} catch (Exception e) {
				SrmLog.error("物料凭证查询异常!", e);
				throw new BusinessException("物料凭证查询异常!", e.getMessage());
			}
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return kcglkcglDao.queryKcglwlpzcxManager(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("物料凭证查询异常!", e);
			throw new BusinessException("物料凭证查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询外协大件库存状态
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryKcglwxdjkcztwh(DataObject entity)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			condition.put("lifnr", lifnr);
			return kcglkcglDao.queryKcglwxdjkcztwhManager(condition);
		} catch (Exception e) {
			SrmLog.error("大件库存状态查询异常!", e);
			throw new BusinessException("大件库存状态查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询外协大件库存状态（new）
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryKcglwxdjkcztwhnew(DataObject entity)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			condition.put("lifnr", lifnr);
			return kcglkcglDao.queryKcglwxdjkcztwhnewManager(condition);
		} catch (Exception e) {
			SrmLog.error("大件库存状态查询异常!", e);
			throw new BusinessException("大件库存状态查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询仓库退货信息
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryKcglckth(DataObject entity, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				if (entity.getString("mblnr") != null
						&& !entity.getString("mblnr").equals("")) {
					condition.put("mblnr", entity.getString("mblnr"));
				}
				if (entity.getString("mjahr") != null
						&& !entity.getString("mjahr").equals("")) {
					condition.put("mjahr", entity.getString("mjahr"));
				}
			} catch (Exception e) {
				SrmLog.error("物料凭证查询异常!", e);
				throw new BusinessException("物料凭证查询异常!", e.getMessage());
			}
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return kcglkcglDao.queryKcglckthManager(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("物料凭证查询异常!", e);
			throw new BusinessException("物料凭证查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询外协大件车型清单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querywxdjcxqd(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.kcglkcglDao.querywxdjcxqd(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询外协大件车型清单异常!", e);
			throw new BusinessException("查询外协大件车型清单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询外协大件清单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querywxdjqd(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.kcglkcglDao.querywxdjqd(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询外协大件清单异常!", e);
			throw new BusinessException("查询外协大件清单异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 删除车型清单
	 * 
	 * @author 刘鑫
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	public void delWxdjcxqd(GenlVegicleList[] cool) throws BusinessException {
		try {
			for (int i = 0; i < cool.length; i++) {
				this.kcglkcglDao.expandEntity(cool[i]);
				cool[i].setStatu("X");
				this.kcglkcglDao.saveEntity(cool[i]);
			}
		} catch (Exception e) {
			SrmLog.error("删除车型清单异常!", e);
			throw new BusinessException("删除车型清单异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除外协大件清单
	 * 
	 * @author 刘鑫
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void delWxdjqd(GenlReserveList[] cool) throws BusinessException {
		try {
			for (int i = 0; i < cool.length; i++) {
				Map condition = new HashMap();
				condition.put("matnr", cool[i].getString("matnr"));
				this.kcglkcglDao.deleteWxdjqd(condition);
			}
		} catch (Exception e) {
			SrmLog.error("删除大件清单异常!", e);
			throw new BusinessException("删除大件清单异常!", e.getMessage());
		}
	}

	public String newWxdjcxdm() throws BusinessException {
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_VEGICLE_LIST");
		String t = String.valueOf(nextSeq);
		int a = t.length();
		if (a < 5) {
			for (int i = a; i < 4; i++) {
				t = "0" + t;
			}
		}
		return "CX" + t;
	}

	/**
	 * 方法描述: 加载车型清单，用于修改
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	public GenlVegicleList loadWxdjcxqd(GenlVegicleList cxqd)
			throws BusinessException {
		try {
			this.kcglkcglDao.expandEntity(cxqd);
		} catch (Exception e) {
			SrmLog.error("车型清单加载异常!", e);
			throw new BusinessException("车型清单加载异常!", e.getMessage());
		}
		return cxqd;
	}

	/**
	 * 方法描述: 加载大件清单，用于修改
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public DataObject loadWxdjqd(GenlReserveList djqd) throws BusinessException {
		try {
			Map condition = new HashMap();
			condition.put("matnr", djqd.getString("matnr"));
			PageCond pagecond = new PageCondImpl();
			pagecond.setLength(8);
			DataObject[] cool = this.kcglkcglDao.querywxdjqd(condition,
					pagecond);
			return cool[0];
		} catch (Exception e) {
			SrmLog.error("公告加载异常!", e);
			throw new BusinessException("公告加载异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 新增车型清单
	 * 
	 * @author liuxin
	 * @param announce
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addWxdjcxqd(GenlVegicleList cxqd) throws BusinessException {
		try {
			Map condition = new HashMap();
			condition.put("cxmc", cxqd.getString("cxmc"));
			PageCond pagecond = new PageCondImpl();
			pagecond.setLength(8);
			DataObject[] cool = this.kcglkcglDao.querywxdjcxqd(condition,
					pagecond);
			if (null != cool && cool.length > 0) {
				throw new BusinessException("新增或修改车型名称异常!", "新增或修改车型名称异常!");
			} else {
				cxqd.setTranu(Common.getCurrentUseObject().getUserName());
				cxqd.setTrant(Common.getCurrentTime());
				this.kcglkcglDao.saveEntity(cxqd);
			}
		} catch (Exception e) {
			SrmLog.error("车型清单新增异常!", e);
			throw new BusinessException("车型清单新增异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 新增大件清单
	 * 
	 * @author liuxin
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addWxdjqd(GenlReserveList djqd) throws BusinessException {
		try {
			Map condition = new HashMap();
			condition.put("matnr", djqd.getString("matnr"));
			DataObject[] cool = this.kcglkcglDao.querymatnr(condition);
			if (null == cool && cool.length == 0) {
				throw new BusinessException("新增或修改大件清单异常!", "新增或修改大件清单异常!");
			} else {
				djqd.setTranu(Common.getCurrentUseObject().getUserName());
				djqd.setTrant(Common.getCurrentTime());
				this.kcglkcglDao.saveEntity(djqd);
			}
		} catch (Exception e) {
			SrmLog.error("车型清单新增异常!", e);
			throw new BusinessException("新增或修改大件清单异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 外协大件查询
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryWxdjwhcx(Map paramObj, PageCond pageCond)
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
			return this.kcglkcglDao.querywxdjwhcx(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("外协大件库存查询异常!", e);
			throw new BusinessException("外协大件库存查询异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 外协大件查询sum
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryWxdjwhcxsum(Map paramObj) throws BusinessException {
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
			return this.kcglkcglDao.querywxdjwhcxsum(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询采购周期异常!", e);
			throw new BusinessException("查询采购周期异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 获取大件抬头信息与行项目信息
	 * 
	 * @author HP
	 * @param dsName
	 * @param zvern
	 * @throws BusinessException
	 * @return HashMap[]
	 */
	@SuppressWarnings("unchecked")
	public HashMap<String, DataObject[]> queryDaJian(String dsName, String zvern)
			throws BusinessException {
		HashMap<String, DataObject[]> map = new HashMap<String, DataObject[]>();
		Connection conn = ConnectionHelper
				.getCurrentContributionConnection(dsName);
		Statement stmt = null;
		ResultSet rs = null;
		if (dsName == null || dsName.equals(""))
			dsName = "default";
		try {

			CallableStatement proc = null;
			proc = conn.prepareCall("{ call  P_GENL_DAJIAN_VERSION(?,?,?) }");
			proc.setString(1, zvern);
			proc.registerOutParameter(2, oracle.jdbc.OracleTypes.CURSOR);
			proc.registerOutParameter(3, oracle.jdbc.OracleTypes.CURSOR);
			proc.execute();
			rs = (ResultSet) proc.getObject(2);
			ResultSetMetaData rsm = rs.getMetaData();
			int i = 0;
			DataObject[] dh = new DataObject[0];
			while (rs.next()) {
				DataObject d = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				dh = (DataObject[]) Arrays.copyOf(dh, dh.length + 1);
				for (int j = 0; j < rsm.getColumnCount(); j++) {
					d.set(rsm.getColumnName(j + 1).toLowerCase(), null == rs
							.getObject(j + 1) ? "" : rs.getObject(j + 1)
							.toString());
				}
				dh[i] = d;
				i += 1;
			}
			map.put("head", dh);

			i = 0;
			DataObject[] dl = new DataObject[0];
			ResultSet rs2 = (ResultSet) proc.getObject(3);
			ResultSetMetaData rsm2 = rs2.getMetaData();
			while (rs2.next()) {

				DataObject d = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				dl = (DataObject[]) Arrays.copyOf(dl, dl.length + 1);
				for (int j = 0; j < rsm2.getColumnCount(); j++) {
					d.set(rsm2.getColumnName(j + 1).toLowerCase(), null == rs2
							.getObject(j + 1) ? "" : rs2.getObject(j + 1)
							.toString());
				}
				dl[i] = d;
				i += 1;
			}
			map.put("list", dl);

			return map;
		} catch (Throwable e) {
			throw new BusinessException("大件查询异常!", e.getMessage());
		} finally {
			close(stmt);
			close(conn);
		}
	}

	/**
	 * 方法描述: 获取大件抬头信息与行项目信息new
	 * 
	 * @author liuxin
	 * @param dsName
	 * @param zvern
	 * @throws BusinessException
	 * @return HashMap[]
	 */
	@SuppressWarnings("unchecked")
	public HashMap<String, DataObject[]> queryDaJiannew(String dsName)
			throws BusinessException {
		HashMap<String, DataObject[]> map = new HashMap<String, DataObject[]>();
		Connection conn = ConnectionHelper
				.getCurrentContributionConnection(dsName);
		Statement stmt = null;
		ResultSet rs = null;
		if (dsName == null || dsName.equals(""))
			dsName = "default";
		try {

			CallableStatement proc = null;
			proc = conn.prepareCall("{ call  P_GENL_DAJIAN_NEW(?,?) }");
			proc.registerOutParameter(1, oracle.jdbc.OracleTypes.CURSOR);
			proc.registerOutParameter(2, oracle.jdbc.OracleTypes.CURSOR);
			proc.execute();
			rs = (ResultSet) proc.getObject(1);
			ResultSetMetaData rsm = rs.getMetaData();
			int i = 0;
			DataObject[] dh = new DataObject[0];
			while (rs.next()) {
				DataObject d = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				dh = (DataObject[]) Arrays.copyOf(dh, dh.length + 1);
				for (int j = 0; j < rsm.getColumnCount(); j++) {
					d.set(rsm.getColumnName(j + 1).toLowerCase(), null == rs
							.getObject(j + 1) ? "" : rs.getObject(j + 1)
							.toString());
				}
				dh[i] = d;
				i += 1;
			}
			map.put("head", dh);

			i = 0;
			DataObject[] dl = new DataObject[0];
			ResultSet rs2 = (ResultSet) proc.getObject(2);
			ResultSetMetaData rsm2 = rs2.getMetaData();
			while (rs2.next()) {

				DataObject d = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				dl = (DataObject[]) Arrays.copyOf(dl, dl.length + 1);
				for (int j = 0; j < rsm2.getColumnCount(); j++) {
					d.set(rsm2.getColumnName(j + 1).toLowerCase(), null == rs2
							.getObject(j + 1) ? "" : rs2.getObject(j + 1)
							.toString());
				}
				dl[i] = d;
				i += 1;
			}
			map.put("list", dl);

			return map;
		} catch (Throwable e) {
			throw new BusinessException("大件查询异常!", e.getMessage());
		} finally {
			close(stmt);
			close(conn);
		}
	}

	/**
	 * 关闭statemen
	 * 
	 * @param stmt
	 */
	private static void close(Statement stmt) throws BusinessException {
		if (stmt == null)
			return;
		try {
			stmt.close();
		} catch (SQLException e) {
			throw new BusinessException("关闭异常!", e.getMessage());
			// ignore
		}
	}

	/**
	 * 关闭数据库连接
	 * 
	 * @param conn
	 */
	private static void close(Connection conn) throws BusinessException {
		if (conn == null)
			return;
		try {
			conn.close();
		} catch (SQLException e) {
			throw new BusinessException("关闭连接异常!", e.getMessage());
			// ignore
		}
	}

	/**
	 * 方法描述: 大件导出
	 * 
	 * @param zvern
	 * @return
	 * @throws BusinessException
	 */
	public String exportExcel(String zvern) throws BusinessException {

		try {
			// 获取大件抬头信息与行项目信息
			HashMap<String, DataObject[]> dajian = this.queryDaJian("default",
					zvern);
			DataObject[] heads = dajian.get("head");
			DataObject[] list = dajian.get("list");

			String templateFilename = "dajian.xls";

			String fname = ExcelUtil.exportExcel(list, heads[0],
					templateFilename);
			File fl = new File(fname);
			fname = fl.getName();
			// int pos = fname.i
			return fname;

		} catch (Throwable e) {
			throw new BusinessException("大件导出异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 大件导出new
	 * 
	 * @param zvern
	 * @return
	 * @throws BusinessException
	 */
	public String exportExcelnew() throws BusinessException {

		try {
			// 获取大件抬头信息与行项目信息
			HashMap<String, DataObject[]> dajian = this
					.queryDaJiannew("default");
			DataObject[] heads = dajian.get("head");
			DataObject[] list = dajian.get("list");

			String templateFilename = "dajiannew.xls";

			String fname = ExcelUtil.exportExcel(list, heads[0],
					templateFilename);
			File fl = new File(fname);
			fname = fl.getName();
			// int pos = fname.i
			return fname;

		} catch (Throwable e) {
			throw new BusinessException("大件导出异常!", e.getMessage());
		}

	}

	@SuppressWarnings("unchecked")
	public void databackup() throws BusinessException {
		GenlReserveData templatea = new GenlReserveDataImpl();
		GenlReserveZdajiZleib templateb = new GenlReserveZdajiZleibImpl();
		GenlReserveZcpcxZleib templatec = new GenlReserveZcpcxZleibImpl();
		GenlReserveZleibLifnr templated = new GenlReserveZleibLifnrImpl();
		try {
			GenlReserveData[] coola = this.kcglkcglDao
					.queryReserveData(templatea);
			GenlReserveZdajiZleib[] coolc = this.kcglkcglDao
					.queryReserveZdajiZleib(templateb);
			GenlReserveZcpcxZleib[] coole = this.kcglkcglDao
					.queryReserveZcpcxZleib(templatec);
			GenlReserveZleibLifnr[] coolg = this.kcglkcglDao
					.queryReserveZleibLifnr(templated);
			DateFormat liu = new SimpleDateFormat("yyyyMMdd");
			String love = liu.format(Common.getCurrentTime());
			for (int i = 0; i < coola.length; i++) {
				GenlReserveDataVersion coolb = new GenlReserveDataVersionImpl();
				this.kcglkcglDao.getPrimaryKey(coolb);
				coolb.setLifnr(coola[i].getLifnr());
				coolb.setZleib(coola[i].getZleib());
				coolb.setZdaji(coola[i].getZdaji());
				coolb.setZstat(coola[i].getZstat());
				coolb.setMenge(coola[i].getMenge());
				coolb.setZcret(coola[i].getZcret());
				coolb.setZcreu(coola[i].getZcreu());
				coolb.setZvern(love);
				this.kcglkcglDao.saveEntity(coolb);
			}
			this.kcglkcglDao.deleteEntityBatch(coola);
			for (int i = 0; i < coolc.length; i++) {
				GenlReserveVerd coold = new GenlReserveVerdImpl();
				this.kcglkcglDao.getPrimaryKey(coold);
				coold.setZleib(coolc[i].getZleib());
				coold.setZdaji(coolc[i].getZdaji());
				coold.setZvern(love);
				this.kcglkcglDao.saveEntity(coold);
			}
			for (int i = 0; i < coole.length; i++) {
				GenlReserveVerz coolf = new GenlReserveVerzImpl();
				this.kcglkcglDao.getPrimaryKey(coolf);
				coolf.setZcpcx(coole[i].getZcpcx());
				coolf.setZleib(coole[i].getZleib());
				coolf.setZvern(love);
				this.kcglkcglDao.saveEntity(coolf);
			}
			for (int i = 0; i < coolg.length; i++) {
				GenlReserveVerl coolh = new GenlReserveVerlImpl();
				this.kcglkcglDao.getPrimaryKey(coolh);
				coolh.setLifnr(coolg[i].getLifnr());
				coolh.setZleib(coolg[i].getZleib());
				coolh.setZvern(love);
				this.kcglkcglDao.saveEntity(coolh);
			}
		} catch (Exception e) {
			SrmLog.error("数据备份异常!", e);
			throw new BusinessException("数据备份异常!", e.getMessage());
		}
	}

	/**
	 * 计划导入
	 * 
	 * @param datas
	 * @param title
	 * @return
	 * @throws BusinessException
	 */
	public String uploadPlan(DataObject[] datas, String title)
			throws BusinessException {
		StringBuffer sb = new StringBuffer();
		String[] fields = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
				"k", "l", "m", "n","o" };
		String[] fieldnames = { "产品线","车型物料编码", "车号", "欠量", "计划总数" };
		String[] arrDate = new String[10];// 十个日期字段

		int errCount = 0;// 错误计数
		try {

			if (null == datas || datas.length < 2) {// 至少有标题和一行数据
				sb.append("excel文件无数据");
				return sb.toString();
			} else {
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
					if (!fieldnames[i].equals(titledata.get(fields[i])
							.toString().trim())) {
						sb.append("第" + (i + 1) + "列标题应为" + fieldnames[i]
								+ "</br>");
					}
				}
				if (null != sb.toString() && !"".equals(sb.toString())) {
					return sb.toString();
				}
				// 日期字段赋值
				for (int i = 5; i < fields.length; i++) {
					arrDate[i - 5] = titledata.get(fields[i]).toString();
				}
				// 数据校验
				// 格式校验
				for (int i = 1; i < datas.length; i++) {
					DataObject data = datas[i];
					// 校验车型物料编码
					if (SrmCommonBean.isEmpty(data.get("b"))) {
						sb.append("第" + (i + 1) + "行车型物料编码为空</br>");
						errCount++;
						if (errCount > 20) {
							return sb.toString();
						}

					}
					// 数字校验
					for (int k = 3; k < fields.length; k++) {
						if (!SrmCommonBean.isEmpty(data.get(fields[k]))
								&& !SrmCommonBean.isNumber(data.get(fields[k])
										.toString())) {
							sb.append("第" + (i + 1) + "行,第" + (k + 1)
									+ "列应为空或数字</br>");
							errCount++;
							if (errCount > 20) {
								return sb.toString();
							}
						}

					}

				}
				if (errCount > 0) {
					return sb.toString();
				}
				// 查询车型物料编码
				DataObject[] wholes = this.kcglkcglDao.queryWhole(null);
				// 车型物料编码校验
				for (int i = 1; i < datas.length; i++) {
					DataObject data = datas[i];
					String matnr = data.get("b").toString();// excel中车型物料编码
					boolean notEqual = true;
					for (int k = 0; k < wholes.length; k++) {
						if (matnr.equals(wholes[k].get("matnr").toString())) {
							notEqual = false;
							//判断车型编码有无大件
							if("0".equals(wholes[k].get("componentcount").toString())){
								sb.append("第" + (i + 1) + "行车型物料无大件</br>");
								errCount++;
								if (errCount > 20) {
									return sb.toString();
								}
							}else{
								//notEqual = false;
								break;
							}
							
						}
					}
					if (notEqual) {
						sb.append("第" + (i + 1) + "行车型物料编码不存在</br>");
						errCount++;
						if (errCount > 20) {
							return sb.toString();
						}
					}
				}
				if (errCount > 0) {
					return sb.toString();
				}
				this.savePlan(datas, title, arrDate);
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
	 * 保存计划
	 * 
	 * @param datas
	 * @param title
	 * @param strDate
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public void savePlan(DataObject[] datas, String title,String[] arrDate)
			throws BusinessException {

		try {
			String createby = Common.getCurrentUserId();
			String createbyname = Common.getCurrentUseObject().getUserName();  
			// 保存抬头数据
			String[] date = {"date1","date2","date3","date4","date5","date6","date7","date8","date9","date10"};
			String[] plan = {"plan1","plan2","plan3","plan4","plan5","plan6","plan7","plan8","plan9","plan10"};
			String[] fields = { "f", "g", "h", "i", "j","k", "l", "m", "n","o" };
			GenlPurchasePlanHead gpph = new GenlPurchasePlanHeadImpl();
			this.kcglkcglDao.getPrimaryKey(gpph);
			String relationid = gpph.getPkid();// 关联id
			gpph.setTitle(title);
			gpph.setCreateby(createby);
			gpph.setCreatebyname(createbyname);
			gpph.setCreatetime(new Date());
			this.kcglkcglDao.saveEntity(gpph);
			// 保存列表数据
			for (int i = 1; i < datas.length; i++) {
				DataObject data = datas[i];
				String pmatnr = data.get("b").toString();// excel中车型物料编码
				HashMap param = new HashMap();
				param.put("relationid",relationid);
				param.put("createby",createby);
				param.put("createbyname",createbyname);
				param.put("createtime",new Date());
				param.put("pmatnr",pmatnr);
				param.put("line",null== data.get("a")?"":data.get("a").toString());
				param.put("carno",null== data.get("c")?"0":data.get("c").toString());
				param.put("underamount",null== data.get("d")?"0":data.get("d").toString());
				param.put("plansum",null== data.get("e")?"0": data.get("e").toString());
				for(int k=0;k<date.length;k++){
					param.put(date[k],arrDate[k]);
					param.put(plan[k],null== data.get(fields[k])?"0": data.get(fields[k]).toString());
				}
				this.kcglkcglDao.addPlanlist(param);
			}
			//保存操作记录
			GenlPurchasePlanOpt opt = new GenlPurchasePlanOptImpl();
			opt.setRelationid(relationid);
			this.kcglkcglDao.getPrimaryKey(opt);
			opt.setOpt(OPT_IMPORTPLAN);
			opt.setCreateby(createby);
			opt.setCreatebyname(createbyname);
			opt.setCreatetime(new Date());
			this.kcglkcglDao.insertEntity(opt);
			
			
			
		} catch (Exception e) {
			SrmLog.error("保存计划异常!", e);
			throw new BusinessException("保存计划异常!", e.getMessage());
		}

	}

	public KcglkcglDao getKcglkcglDao() {
		return kcglkcglDao;
	}

	public void setKcglkcglDao(KcglkcglDao kcglkcglDao) {
		this.kcglkcglDao = kcglkcglDao;
	}

}
