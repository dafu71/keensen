package com.zoomlion.hjsrm.settleaccounts;

import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import com.eos.common.connection.ConnectionHelper;
import com.eos.foundation.PageCond;
import com.eos.foundation.data.DataObjectUtil;
import com.eos.spring.BeanFactory;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.OperLog;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl;
import com.zoomlion.hjsrm.sapinterface.SapJiesuan.SapJiesuanBean;
import commonj.sdo.DataObject;
import edu.emory.mathcs.backport.java.util.Arrays;

public class SettleAccountsBean extends BaseBean {

	private SettleAccountsDao settleAccountsDao;

	/**
	 * 方法描述: 查询待生成结算凭证（分页）
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryCreateAccounts(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.settleAccountsDao.queryCreateAccounts(paramObj,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("查询待生成结算凭证异常!", e);
			throw new BusinessException("查询待生成结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询待生成结算凭证
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryCreateAccounts(Map paramObj)
			throws BusinessException {
		try {
			paramObj.put("lifnr", Common.getCurrentUserObject().getAttributes()
					.get("lifnr").toString());
			return this.settleAccountsDao.queryCreateAccounts(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询待生成结算凭证异常!", e);
			throw new BusinessException("查询待生成结算凭证异常!", e.getMessage());
		}

	}

	@SuppressWarnings("unchecked")
	public DataObject[] queryJiesuan(Map paramObj) throws BusinessException {
		try {
			paramObj.put("lifnr", Common.getCurrentUserObject().getAttributes()
					.get("lifnr").toString());
			return this.settleAccountsDao.queryJiesuan(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询待生成结算凭证异常!", e);
			throw new BusinessException("查询待生成结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询待生成结算凭证(分页)
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryCreateAccountsPage(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			paramObj.put("lifnr", Common.getCurrentUserObject().getAttributes()
					.get("lifnr").toString());
			return this.settleAccountsDao.queryCreateAccountsPage(paramObj,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("查询待生成结算凭证异常!", e);
			throw new BusinessException("查询待生成结算凭证异常!", e.getMessage());
		}

	}

	@SuppressWarnings("unchecked")
	public DataObject[] queryJiesuanPage(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			paramObj.put("lifnr", Common.getCurrentUserObject().getAttributes()
					.get("lifnr").toString());
			return this.settleAccountsDao.queryJiesuanPage(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询待生成结算凭证异常!", e);
			throw new BusinessException("查询待生成结算凭证异常!", e.getMessage());
		}

	}
	
	@SuppressWarnings("unchecked")
	public DataObject[] queryJiesuanPagedaochu(Map paramObj)
			throws BusinessException {
		try {
			paramObj.put("lifnr", Common.getCurrentUserObject().getAttributes()
					.get("lifnr").toString());
			return this.settleAccountsDao.queryJiesuanPagedaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("导出待生成结算凭证异常!", e);
			throw new BusinessException("导出待生成结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 结算数量校验
	 * 
	 * @param datas
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public boolean checkAmount(HashMap[] datas, boolean flag)
			throws BusinessException {
		try {
			for (int i = 0; i < datas.length; i++) {
				String zeile = datas[i].get("zeile").toString();
				String mjahr = datas[i].get("mjahr").toString();
				String mblnr = datas[i].get("mblnr").toString();
				Map paramObj = new HashMap();
				paramObj.put("zeile", zeile);
				paramObj.put("mjahr", mjahr);
				paramObj.put("mblnr", mblnr);
				if (flag) {
					String jspz = datas[i].get("jspz").toString();
					paramObj.put("jspz", jspz);
				}
				DataObject[] ds = this.settleAccountsDao.checkAmount(paramObj);
				if (null != ds && ds.length > 0) {
					// 待结算数量+已结算数量<=收货数量
					if (Float.parseFloat(datas[i].get("m_djssl").toString())
							+ Float.parseFloat(ds[0].get("mysum").toString()) > Float
							.parseFloat(datas[i].get("erfmg").toString())) {
						return false;
					}

				} else {
					return false;
				}

			}
			return true;
		} catch (Exception e) {
			SrmLog.error("物料凭证数据已经变更，请重新查询操作!", e);
			throw new BusinessException("物料凭证数据已经变更，请重新查询操作!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 生成结算凭证
	 * 
	 * @param datas
	 * @param flje
	 * @param yfje
	 * @param qtkkje
	 * @return
	 * @throws BusinessException
	 */
	public String createSettleAccount(HashMap[] datas, double flje,
			double yfje, double qtkkje) throws BusinessException {

		boolean flag = false;
		// 如果是修改数据
		if (null != datas[0].get("jspz")
				&& !"".equals(datas[0].get("jspz").toString())) {
			flag = true;
		}
		if (this.checkAmount(datas, flag) == false) {
			throw new BusinessException("物料凭证数据已经变更，请重新查询操作!",
					"生成结算凭证异常,存在结算数量大于收货数量数据!");
		}

		GenlInvoiceHead ihead = new GenlInvoiceHeadImpl();// 结算凭证表抬头

		try {

			HashMap<String, String> code = new HashMap<String, String>();
			// 如果是修改数据
			if (null != datas[0].get("jspz")
					&& !"".equals(datas[0].get("jspz").toString())) {
				String jspz = datas[0].get("jspz").toString();
				String mjahr = datas[0].get("mjahr").toString();

				// 查询抬头
				GenlInvoiceHead template = new GenlInvoiceHeadImpl();// 结算凭证表抬头
				template.setJspz(jspz);// 结算凭证号
				template.setMjahr(mjahr);// 结算凭证年度
				template.setLifnr(Common.getCurrentUseObject().getAttributes()
						.get("lifnr").toString());// 供应商
				template.setStatu("0");// 未确定
				GenlInvoiceHead[] ihead2 = this.settleAccountsDao
						.queryEntitiesByTemplate(GenlInvoiceHead.class,
								template);
				if (null == ihead || ihead2.length == 0) {
					throw new BusinessException("结算凭证修改异常!", "结算凭证未找到或状态已确定!");
				}

				// 先删除行项目
				GenlInvoiceList temp = new GenlInvoiceListImpl();
				temp.setJspz(jspz);
				temp.setMjahr(mjahr);
				this.settleAccountsDao.deleteByTemplate(temp);// 删除

				code.put("jspz", jspz);
				code.put("mjahr", mjahr);

			} else {// 如果是新增
				code = this.getCode();
			}

			double tax = Double.valueOf(datas[0].get("tax").toString());
			String ekotx = datas[0].get("ekotx").toString();// 采购组织
			// 结算凭证表抬头

			ihead.setJspz(code.get("jspz".toString()));
			ihead.setMjahr(code.get("mjahr".toString()));

			ihead.setBukrs(datas[0].get("bukrs").toString());
			ihead.setWerks(datas[0].get("werks").toString());
			ihead.setLifnr(datas[0].get("lifnr").toString());

			ihead.setMwskz(datas[0].get("m_mwskz").toString());
			ihead.setTaxrt(new BigDecimal(tax));
			ihead.setFlje(new BigDecimal(flje));
			ihead.setYfje(new BigDecimal(yfje));
			ihead.setQtkkje(new BigDecimal(qtkkje));

			ihead.setUsnam(Common.getCurrentUserId());
			ihead.setDatum(Common.getCurrentTime());

			ihead.setStatu("0");

			// //待结算数量*结算单价/结算价格单位
			// 借贷标识=S
			double S = 0;
			double H = 0;
			int sLength = 0;
			double ZCDF = 0;
			for (int i = 0; i < datas.length; i++) {
				if ("S".equals(datas[i].get("shkzg").toString())) {
					// 待结算数量
					double m_djssl = Double.valueOf((datas[i].get("m_djssl")
							.toString()));

					// 结算单价
					double m_jsdj = Double.valueOf((datas[i].get("m_jsdj")
							.toString()));

					// 结算价格单位
					double m_jsdw = Double.valueOf((datas[i].get("m_jsdw")
							.toString()));
					S = S + m_djssl * m_jsdj / m_jsdw;

					ZCDF += Double.valueOf((datas[i].get("m_zcdf").toString()));
					sLength += 1;
				}
				if ("H".equals(datas[i].get("shkzg").toString())) {
					// 待结算数量
					double m_djssl = Double.valueOf((datas[i].get("m_djssl")
							.toString()));

					// 结算单价
					double m_jsdj = Double.valueOf((datas[i].get("m_jsdj")
							.toString()));

					// 结算价格单位
					double m_jsdw = Double.valueOf((datas[i].get("m_jsdw")
							.toString()));
					H = H + m_djssl * m_jsdj / m_jsdw;

				}

			}

			// 结算金额（整单）
			double JSJE = 0;
			if ("3003".equals(ekotx)) {
				JSJE = (S - H) * (1 + tax) - flje + yfje - qtkkje - ZCDF;
			} else {
				JSJE = S - H - flje + yfje - qtkkje - ZCDF;
			}

			ihead.setJsje(new BigDecimal(JSJE));

			// float tax = Float.valueOf(datas[0].get("m_tax").toString());

			double TAX = JSJE * tax / (1 + tax);

			ihead.setTax(new BigDecimal(TAX));

			// 新增结算凭证表抬头
			this.settleAccountsDao.saveEntity(ihead);

			int sLength2 = 0;

			double HFLJE_sum = 0;// 分摊返利金额求和
			double HYFJE_sum = 0;// 分摊运费额求和
			double HQTKKJE_sum = 0;// 分摊其他扣款求和
			for (int i = 0; i < datas.length; i++) {
				double HFLJE = 0;// 分摊返利金额（单行）
				double HYFJE = 0;// 分摊运费额（单行）
				double HQTKKJE = 0;// 分摊其他扣款（单行）

				// 待结算数量
				double m_djssl = Double.valueOf((datas[i].get("m_djssl")
						.toString()));
				// 结算单价
				double m_jsdj = Double.valueOf((datas[i].get("m_jsdj")
						.toString()));
				// 结算价格单位
				double m_jsdw = Double.valueOf((datas[i].get("m_jsdw")
						.toString()));

				// 单行扣款
				double m_zcdf = Double.valueOf((datas[i].get("m_zcdf")
						.toString()));
				if ("S".equals(datas[i].get("shkzg").toString())) {

					// 行计数
					sLength2 += 1;

					if (sLength2 == sLength) {// 最后一行
						// 分摊返利金额（单行）
						HFLJE = flje - HFLJE_sum;
						// 分摊运费额（单行）
						HYFJE = yfje - HYFJE_sum;
						// 分摊其他扣款（单行）
						HQTKKJE = qtkkje - HQTKKJE_sum;

					} else {
						// 分摊返利金额（单行）
						HFLJE = (m_djssl * m_jsdj / m_jsdw) * flje / S;

						// 分摊运费额（单行）
						HYFJE = (m_djssl * m_jsdj / m_jsdw) * yfje / S;

						// 分摊其他扣款（单行）
						HQTKKJE = (m_djssl * m_jsdj / m_jsdw) * qtkkje / S;
						// 分摊返利金额求和
						HFLJE_sum += HFLJE;
						// 分摊运费额求和
						HYFJE_sum += HYFJE;
						// 分摊其他扣款求和
						HQTKKJE_sum += HQTKKJE;
					}

				}

				// 结算金额（整行）
				double HJSJE = 0;
				if ("3003".equals(ekotx)) {
					HJSJE = ((m_djssl * m_jsdj) * (1 + tax) / m_jsdw - HFLJE
							+ HYFJE - HQTKKJE - m_zcdf)
							/ (1 + tax);
				} else {
					HJSJE = (m_djssl * m_jsdj / m_jsdw - HFLJE + HYFJE
							- HQTKKJE - m_zcdf)
							/ (1 + tax);
				}
				GenlInvoiceList ilist = new GenlInvoiceListImpl();// 结算凭证表

				ilist.setJspz(code.get("jspz".toString()));
				ilist.setMjahr(code.get("mjahr".toString()));
				ilist.setJspzh("" + (i + 1));
				ilist.setMblnr(datas[i].get("mblnr").toString());
				ilist.setZeile(datas[i].get("zeile").toString());
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				ilist.setBudat(sdf.parse(datas[i].get("budat").toString()));
				ilist.setShkzg(datas[i].get("shkzg").toString());
				ilist.setBwart(datas[i].get("bwart").toString());

				ilist.setDjssl(new BigDecimal(m_djssl));
				ilist.setDjsslCk(new BigDecimal(datas[i].get("djssl_ck")
						.toString()));
				// ilist.setMeins(datas[i].get("waers").toString());//基本计量单位

				ilist.setHjsje(new BigDecimal(HJSJE));// 结算金额（整行）
				ilist
						.setJsdj(new BigDecimal(datas[i].get("m_jsdj")
								.toString()));// 结算单价（含税）
				ilist.setJsdw(Integer.parseInt(datas[i].get("m_jsdw")
						.toString()));// 结算价格单位

				ilist
						.setKbetr(new BigDecimal(datas[i].get("kbetr")
								.toString()));// 合同价
				ilist.setKpein(Integer.parseInt(datas[i].get("kpein")
						.toString()));// 合同价格单位
				ilist.setKmein(null == datas[i].get("kmein") ? "" : datas[i]
						.get("kmein").toString());// 条件单位

				boolean m_flag_htj = (new BigDecimal(datas[i].get("m_jsdj")
						.toString()).multiply(new BigDecimal(datas[i].get(
						"kpein").toString())).equals((new BigDecimal(datas[i]
						.get("kbetr").toString()).multiply(new BigDecimal(
						datas[i].get("m_jsdw").toString())))));// 结算单价*合同价格单位==合同价*结算价格单位
				// System.out.println(m_flag_htj);
				// ilist.setFlagHtj(datas[i].get("m_flag_htj").toString());//
				// 与合同价一致
				ilist.setFlagHtj(m_flag_htj ? "Y" : "N");

				ilist.setMeins(null == datas[i].get("mein") ? "" : datas[i]
						.get("mein").toString());// 基本计量单位

				ilist.setHqtkkje(new BigDecimal(HQTKKJE));// 分摊其他扣款（单行）
				ilist.setHflje(new BigDecimal(HFLJE));// 分摊返利金额（单行）
				ilist.setHyfje(new BigDecimal(HYFJE));// 分摊运费额（单行）

				ilist.setZcdf(new BigDecimal(m_zcdf));// 其他扣款（单项）

				ilist.setLfbnr(datas[i].get("lfbnr").toString());// 参考凭证的凭证号
				ilist.setLfpos(datas[i].get("lfpos").toString());// 参考凭证项目
				ilist.setLfgja(datas[i].get("lfbja").toString());// 当前期间的会计年度

				ilist.setWaers(datas[i].get("waers").toString());// 货币码

				ilist.setEkorg(datas[i].get("ekorg").toString());// 采购组织
				ilist.setEkgrp(datas[i].get("ekgrp").toString());// 采购组

				ilist.setEbeln(datas[i].get("ebeln").toString());// 采购凭证号
				ilist.setEbelp(datas[i].get("ebelp").toString());// 采购凭证的项目编号
				ilist.setMatnr(null == datas[i].get("matnr") ? "" : datas[i]
						.get("matnr").toString());// 物料号

				ilist.setAufnr(null == datas[i].get("aufnr") ? "" : datas[i]
						.get("aufnr").toString());// 生产订单号

				ilist.setZwriusr(Common.getCurrentUserId());// 最近写入者
				ilist.setZwrildt(Common.getCurrentTime());// 最近写入日期

				ilist.setZtext(null == datas[i].get("m_ztext") ? "" : datas[i]
						.get("m_ztext").toString());

				ilist.setMenge(null == datas[i].get("menge") ? "" : datas[i]
						.get("menge").toString());// 数量

				// 新增结算凭证表
				this.settleAccountsDao.saveEntity(ilist);

			}
			return "结算凭证号:" + code.get("jspz".toString()) + "<br>结算凭证年度:"
					+ code.get("mjahr".toString());

		} catch (Exception e) {
			SrmLog.error("生成结算凭证异常!", e);
			throw new BusinessException("生成结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 生成结算凭证(new)
	 * 
	 * @param datas
	 * @param flje
	 * @param yfje
	 * @param qtkkje
	 * @return
	 * @throws BusinessException
	 */
	public String createSettleAccountNew(HashMap[] datas, String _flje,
			String _yfje, String _qtkkje) throws BusinessException {

		boolean flag = false;

		int scale = 2;// 小数点后保留几位

		// MathContext mc = new MathContext(2,RoundingMode.HALF_UP);
		// 如果是修改数据
		if (null != datas[0].get("jspz")
				&& !"".equals(datas[0].get("jspz").toString())) {
			flag = true;
		}
		if (this.checkAmount(datas, flag) == false) {
			throw new BusinessException("物料凭证数据已经变更，请重新查询操作!",
					"生成结算凭证异常,存在结算数量大于收货数量数据!");
		}

		// 校验数据是否有重复数据
		// select jspz, mjahr, mblnr,zeile from genl_invoice_list t
		if (datas.length > 1) {
			for (int i = 0; i < datas.length; i++) {
				String _mjahr = datas[i].get("mjahr").toString();
				String _mblnr = datas[i].get("mblnr").toString();
				String _zeile = datas[i].get("zeile").toString();

				for (int j = i + 1; j < datas.length; j++) {
					String _mjahr2 = datas[j].get("mjahr").toString();
					String _mblnr2 = datas[j].get("mblnr").toString();
					String _zeile2 = datas[j].get("zeile").toString();
					if (_mjahr.equals(_mjahr2) && _mblnr.equals(_mblnr2)
							&& _zeile.equals(_zeile2)) {
						throw new BusinessException("结算凭证修改异常!", "物料凭证数据有重复数据!");
					}

				}

			}
		}

		// 行结算金额求和
		BigDecimal HJSJE_SUM = new BigDecimal("0");

		GenlInvoiceHead ihead = new GenlInvoiceHeadImpl();// 结算凭证表抬头

		try {
			HashMap<String, String> code = new HashMap<String, String>();
			// 如果是修改数据
			if (null != datas[0].get("jspz")
					&& !"".equals(datas[0].get("jspz").toString())) {
				String jspz = datas[0].get("jspz").toString();
				String mjahr = datas[0].get("mjahr").toString();

				// 查询抬头
				GenlInvoiceHead template = new GenlInvoiceHeadImpl();// 结算凭证表抬头
				template.setJspz(jspz);// 结算凭证号
				template.setMjahr(mjahr);// 结算凭证年度
				template.setLifnr(Common.getCurrentUseObject().getAttributes()
						.get("lifnr").toString());// 供应商
				template.setStatu("0");// 未确定
				GenlInvoiceHead[] ihead2 = this.settleAccountsDao
						.queryEntitiesByTemplate(GenlInvoiceHead.class,
								template);
				if (null == ihead || ihead2.length == 0) {
					throw new BusinessException("结算凭证修改异常!", "结算凭证未找到或状态已确定!");
				}

				// 先删除行项目
				GenlInvoiceList temp = new GenlInvoiceListImpl();
				temp.setJspz(jspz);
				temp.setMjahr(mjahr);
				this.settleAccountsDao.deleteByTemplate(temp);// 删除

				code.put("jspz", jspz);
				code.put("mjahr", mjahr);

			} else {// 如果是新增
				code = this.getCode();
			}

			BigDecimal tax = new BigDecimal(datas[0].get("tax").toString());
			BigDecimal flje = new BigDecimal(_flje);// 返利总金额
			BigDecimal yfje = new BigDecimal(_yfje);// 运费总金额
			BigDecimal qtkkje = new BigDecimal(_qtkkje);// 其他扣款总金额

			String ekotx = datas[0].get("ekotx").toString();// 采购组织
			// 结算凭证表抬头

			ihead.setJspz(code.get("jspz".toString()));
			ihead.setMjahr(code.get("mjahr".toString()));

			ihead.setBukrs(datas[0].get("bukrs").toString());
			ihead.setWerks(datas[0].get("werks").toString());
			ihead.setLifnr(datas[0].get("lifnr").toString());

			ihead.setMwskz(datas[0].get("m_mwskz").toString());
			ihead.setTaxrt(tax);
			ihead.setFlje(flje);
			ihead.setYfje(yfje);
			ihead.setQtkkje(qtkkje);

			ihead.setUsnam(Common.getCurrentUserId());
			ihead.setDatum(Common.getCurrentTime());

			ihead.setStatu("0");

			// 待结算数量*结算单价/结算价格单位
			// 借贷标识=S
			BigDecimal S = new BigDecimal(0);
			BigDecimal H = new BigDecimal(0);
			int sLength = 0;
			BigDecimal ZCDF = new BigDecimal(0);
			for (int i = 0; i < datas.length; i++) {
				if ("S".equals(datas[i].get("shkzg").toString())) {
					// 待结算数量
					BigDecimal m_djssl = new BigDecimal((datas[i]
							.get("m_djssl").toString()));

					// 结算单价
					BigDecimal m_jsdj = new BigDecimal((datas[i].get("m_jsdj")
							.toString()));

					// 结算价格单位
					BigDecimal m_jsdw = new BigDecimal((datas[i].get("m_jsdw")
							.toString()));
					S = S.add((m_djssl.multiply(m_jsdj)).divide(m_jsdw, 2,
							BigDecimal.ROUND_HALF_UP));

					ZCDF = ZCDF.add(new BigDecimal((datas[i].get("m_zcdf")
							.toString())));
					sLength += 1;
				}
				if ("H".equals(datas[i].get("shkzg").toString())) {
					// 待结算数量
					BigDecimal m_djssl = new BigDecimal((datas[i]
							.get("m_djssl").toString()));

					// 结算单价
					BigDecimal m_jsdj = new BigDecimal((datas[i].get("m_jsdj")
							.toString()));

					// 结算价格单位
					BigDecimal m_jsdw = new BigDecimal((datas[i].get("m_jsdw")
							.toString()));

					H = H.add((m_djssl.multiply(m_jsdj)).divide(m_jsdw, scale,
							BigDecimal.ROUND_HALF_UP));

				}

			}

			// 结算金额（整单）
			BigDecimal JSJE = new BigDecimal(0);
			if ("3003".equals(ekotx)) {
				// JSJE = (S - H) * (1 + tax) - flje + yfje - qtkkje - ZCDF;
				JSJE = (S.subtract(H)).multiply(new BigDecimal(1).add(tax))
						.subtract(flje).add(yfje).subtract(qtkkje).subtract(
								ZCDF);
			} else {
				// JSJE = S - H - flje + yfje - qtkkje - ZCDF;
				JSJE = S.subtract(H).subtract(flje).add(yfje).subtract(qtkkje)
						.subtract(ZCDF);
			}

			ihead.setJsje(JSJE);

			// BigDecimal aaa = (new BigDecimal(10)).divide(new
			// BigDecimal(0.2),scale,BigDecimal.ROUND_HALF_UP);

			// BigDecimal TAX = (JSJE.multiply(tax)).divide(new
			// BigDecimal(1).add(tax),scale,BigDecimal.ROUND_HALF_UP);

			// ihead.setTax(TAX);

			// 新增结算凭证表抬头
			// this.settleAccountsDao.saveEntity(ihead);

			int sLength2 = 0;

			BigDecimal HFLJE_sum = new BigDecimal(0);// 分摊返利金额求和
			BigDecimal HYFJE_sum = new BigDecimal(0);// 分摊运费额求和
			BigDecimal HQTKKJE_sum = new BigDecimal(0);// 分摊其他扣款求和

			for (int i = 0; i < datas.length; i++) {
				BigDecimal HFLJE = new BigDecimal(0);// 分摊返利金额（单行）
				BigDecimal HYFJE = new BigDecimal(0);// 分摊运费额（单行）
				BigDecimal HQTKKJE = new BigDecimal(0);// 分摊其他扣款（单行）

				// 待结算数量
				BigDecimal m_djssl = new BigDecimal((datas[i].get("m_djssl")
						.toString()));
				// 结算单价
				BigDecimal m_jsdj = new BigDecimal((datas[i].get("m_jsdj")
						.toString()));
				// 结算价格单位
				BigDecimal m_jsdw = new BigDecimal((datas[i].get("m_jsdw")
						.toString()));

				// 单行扣款
				BigDecimal m_zcdf = new BigDecimal((datas[i].get("m_zcdf")
						.toString()));
				if ("S".equals(datas[i].get("shkzg").toString())) {

					// 行计数
					sLength2 += 1;

					if (sLength2 == sLength) {// 最后一行
						// 分摊返利金额（单行）
						HFLJE = flje.subtract(HFLJE_sum);
						// 分摊运费额（单行）
						HYFJE = yfje.subtract(HYFJE_sum);
						// 分摊其他扣款（单行）
						HQTKKJE = qtkkje.subtract(HQTKKJE_sum);

					} else {
						// 分摊返利金额（单行）
						// HFLJE = (m_djssl * m_jsdj / m_jsdw) * flje / S;
						HFLJE = (m_djssl.multiply(m_jsdj).divide(m_jsdw, scale,
								BigDecimal.ROUND_HALF_UP)).multiply(flje)
								.divide(S, scale, BigDecimal.ROUND_HALF_UP);

						// 分摊运费额（单行）
						// HYFJE = (m_djssl * m_jsdj / m_jsdw) * yfje / S;
						HYFJE = (m_djssl.multiply(m_jsdj).divide(m_jsdw, scale,
								BigDecimal.ROUND_HALF_UP)).multiply(yfje)
								.divide(S, scale, BigDecimal.ROUND_HALF_UP);

						// 分摊其他扣款（单行）
						// HQTKKJE = (m_djssl * m_jsdj / m_jsdw) * qtkkje / S;
						HQTKKJE = (m_djssl.multiply(m_jsdj).divide(m_jsdw,
								scale, BigDecimal.ROUND_HALF_UP)).multiply(
								qtkkje).divide(S, scale,
								BigDecimal.ROUND_HALF_UP);
						// 分摊返利金额求和
						// HFLJE_sum += HFLJE;
						HFLJE_sum = HFLJE_sum.add(HFLJE);
						// 分摊运费额求和
						// HYFJE_sum += HYFJE;
						HYFJE_sum = HYFJE_sum.add(HYFJE);
						// 分摊其他扣款求和
						// HQTKKJE_sum += HQTKKJE;
						HQTKKJE_sum = HQTKKJE_sum.add(HQTKKJE);
					}

				}

				// 结算金额（整行）
				BigDecimal HJSJE = new BigDecimal(0);
				if ("3003".equals(ekotx)) {
					// HJSJE = ((m_djssl * m_jsdj) * (1 + tax) / m_jsdw - HFLJE+
					// HYFJE - HQTKKJE - m_zcdf) / (1 + tax);
					HJSJE = (((m_djssl.multiply(m_jsdj))
							.multiply((new BigDecimal(1)).add(tax)).divide(
							m_jsdw, scale, BigDecimal.ROUND_HALF_UP)).subtract(
							HFLJE).add(HYFJE).subtract(HQTKKJE)
							.subtract(m_zcdf)).divide((new BigDecimal(1))
							.add(tax), scale, BigDecimal.ROUND_HALF_UP);

				} else {
					// HJSJE = (m_djssl * m_jsdj / m_jsdw - HFLJE + HYFJE-
					// HQTKKJE - m_zcdf)/ (1 + tax);
					HJSJE = ((m_djssl.multiply(m_jsdj).divide(m_jsdw, scale,
							BigDecimal.ROUND_HALF_UP)).subtract(HFLJE).add(
							HYFJE).subtract(HQTKKJE).subtract(m_zcdf)).divide(
							(new BigDecimal(1)).add(tax), scale,
							BigDecimal.ROUND_HALF_UP);

				}
				GenlInvoiceList ilist = new GenlInvoiceListImpl();// 结算凭证表

				ilist.setJspz(code.get("jspz".toString()));
				ilist.setMjahr(code.get("mjahr".toString()));
				ilist.setJspzh("" + (i + 1));
				ilist.setMblnr(datas[i].get("mblnr").toString());
				ilist.setZeile(datas[i].get("zeile").toString());
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				ilist.setBudat(sdf.parse(datas[i].get("budat").toString()));
				ilist.setShkzg(datas[i].get("shkzg").toString());
				ilist.setBwart(datas[i].get("bwart").toString());

				ilist.setDjssl(m_djssl);
				ilist.setDjsslCk(new BigDecimal(datas[i].get("djssl_ck")
						.toString()));
				// ilist.setMeins(datas[i].get("waers").toString());//基本计量单位

				ilist.setHjsje(HJSJE);// 结算金额（整行）

				// 行结算金额求和
				if ("S".equals(datas[i].get("shkzg").toString())) {
					HJSJE_SUM = HJSJE_SUM.add(HJSJE);
				} else {
					HJSJE_SUM = HJSJE_SUM.subtract(HJSJE);
				}

				ilist
						.setJsdj(new BigDecimal(datas[i].get("m_jsdj")
								.toString()));// 结算单价（含税）
				ilist.setJsdw(Integer.parseInt(datas[i].get("m_jsdw")
						.toString()));// 结算价格单位

				ilist
						.setKbetr(new BigDecimal(datas[i].get("kbetr")
								.toString()));// 合同价
				ilist.setKpein(Integer.parseInt(datas[i].get("kpein")
						.toString()));// 合同价格单位
				ilist.setKmein(null == datas[i].get("kmein") ? "" : datas[i]
						.get("kmein").toString());// 条件单位

				BigDecimal _m_jsdj = new BigDecimal(datas[i].get("m_jsdj")
						.toString());
				BigDecimal _kpein = new BigDecimal(datas[i].get("kpein")
						.toString());
				BigDecimal _kbetr = new BigDecimal(datas[i].get("kbetr")
						.toString());
				BigDecimal _m_jsdw = new BigDecimal(datas[i].get("m_jsdw")
						.toString());

				boolean m_flag_htj;
				if (_kbetr.compareTo(new BigDecimal(0)) == 0) {// 合同价为0，合同价标志为N
					m_flag_htj = false;
				} else {
					m_flag_htj = (_m_jsdj.multiply(_kpein)).compareTo(_kbetr
							.multiply(_m_jsdw)) == 0;
				}

				// 结算单价*合同价格单位==合同价*结算价格单位
				// System.out.println(m_flag_htj);
				// ilist.setFlagHtj(datas[i].get("m_flag_htj").toString());//
				// 与合同价一致
				ilist.setFlagHtj(m_flag_htj ? "Y" : "N");

				ilist.setMeins(null == datas[i].get("mein") ? "" : datas[i]
						.get("mein").toString());// 基本计量单位

				ilist.setHqtkkje(HQTKKJE);// 分摊其他扣款（单行）
				ilist.setHflje(HFLJE);// 分摊返利金额（单行）
				ilist.setHyfje(HYFJE);// 分摊运费额（单行）

				ilist.setZcdf(m_zcdf);// 其他扣款（单项）

				ilist.setLfbnr(datas[i].get("lfbnr").toString());// 参考凭证的凭证号
				ilist.setLfpos(datas[i].get("lfpos").toString());// 参考凭证项目
				ilist.setLfgja(datas[i].get("lfbja").toString());// 当前期间的会计年度

				ilist.setWaers(datas[i].get("waers").toString());// 货币码

				ilist.setEkorg(datas[i].get("ekorg").toString());// 采购组织
				ilist.setEkgrp(datas[i].get("ekgrp").toString());// 采购组

				ilist.setEbeln(datas[i].get("ebeln").toString());// 采购凭证号
				ilist.setEbelp(datas[i].get("ebelp").toString());// 采购凭证的项目编号
				ilist.setMatnr(null == datas[i].get("matnr") ? "" : datas[i]
						.get("matnr").toString());// 物料号

				ilist.setAufnr(null == datas[i].get("aufnr") ? "" : datas[i]
						.get("aufnr").toString());// 生产订单号

				ilist.setZwriusr(Common.getCurrentUserId());// 最近写入者
				ilist.setZwrildt(Common.getCurrentTime());// 最近写入日期

				ilist.setZtext(null == datas[i].get("m_ztext") ? "" : datas[i]
						.get("m_ztext").toString());

				ilist.setMenge(null == datas[i].get("menge") ? "" : datas[i]
						.get("menge").toString());// 数量

				// 新增结算凭证表
				this.settleAccountsDao.saveEntity(ilist);

			}

			BigDecimal TAX = JSJE.subtract(HJSJE_SUM);

			ihead.setTax(TAX);

			// 新增结算凭证表抬头
			this.settleAccountsDao.saveEntity(ihead);
			return "结算凭证号:" + code.get("jspz".toString()) + "<br>结算凭证年度:"
					+ code.get("mjahr".toString());
		} catch (Exception e) {
			SrmLog.error("生成结算凭证异常!", e);
			throw new BusinessException("生成结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询编码
	 * 
	 * @return
	 * @throws BusinessException
	 */
	public HashMap<String, String> getCode() throws BusinessException {
		try {
			Map paramObj = new HashMap();
			HashMap<String, String> code = new HashMap<String, String>();
			DataObject[] queryCodes = this.settleAccountsDao
					.queryCode(paramObj);
			if (null == queryCodes || queryCodes.length == 0) {// 找不到记录，则更新
				this.settleAccountsDao.updateCode2(paramObj);
				DataObject[] queryCodes2 = this.settleAccountsDao
						.queryCode(paramObj);
				code.put("jspz", queryCodes2[0].getString("jspz"));
				code.put("mjahr", Common.getSysTime("yyyy"));
				// code.put("mjahr", queryCodes2[0].getString("mjahr"));
			} else {
				code.put("jspz", queryCodes[0].getString("jspz"));
				code.put("mjahr", Common.getSysTime("yyyy"));
				// code.put("mjahr", queryCodes[0].getString("mjahr"));
				this.settleAccountsDao.updateCode(paramObj);// 更新
			}

			return code;

		} catch (Exception e) {
			SrmLog.error("查询编码异常!", e);
			throw new BusinessException("查询编码异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询待确认结算凭证
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryUnConfirm(Map paramObj) throws BusinessException {
		try {

			return this.settleAccountsDao.queryUnConfirm(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询待确认结算凭证异常!", e);
			throw new BusinessException("查询待确认结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:查询待确认结算凭证(分页)
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryUnConfirm(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)) {
				paramObj.put("lifnr", lifnr);
			}
			return this.settleAccountsDao.queryUnConfirm(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询待确认结算凭证异常!", e);
			throw new BusinessException("查询待确认结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:校验结算凭证状态
	 * 
	 * @param datas
	 * @param statu
	 * @return
	 * @throws BusinessException
	 */
	public boolean checkStatu(HashMap[] datas, String statu)
			throws BusinessException {
		try {
			// 如果是撤销操作,查找是否存在已撤销状态的数据
			// 如果是确认操作,查找是否存在已确认状态的数据
			for (int i = 0; i < datas.length; i++) {
				GenlInvoiceHead template = new GenlInvoiceHeadImpl();// 结算凭证表抬头
				template.setJspz(datas[i].get("jspz").toString());
				template.setMjahr(datas[i].get("mjahr").toString());
				GenlInvoiceHead[] heads = this.settleAccountsDao
						.queryEntitiesByTemplate(GenlInvoiceHeadImpl.class,
								template);
				if (null != heads && heads.length > 0) {
					if (statu.equals(heads[0].getStatu())) {
						return false;
					}
				} else {
					return false;
				}
			}

			return true;
		} catch (Exception e) {
			SrmLog.error("查询待确认结算凭证异常!", e);
			throw new BusinessException("查询待确认结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:确认结算凭证
	 * 
	 * @param datas
	 * @param flag
	 * @throws BusinessException
	 */
	public void confirm(HashMap[] datas, String statu) throws BusinessException {
		String msg = "";
		String msg2 = "";
		if ("0".equals(statu)) {// 撤销
			msg = "撤销结算凭证异常,存在已撤销数据!";
			msg2 = "撤销结算凭证异常";
		} else {
			msg = "确认结算凭证异常,存在已确认数据!";
			msg2 = "确认结算凭证异常";
		}
		try {

			if (this.checkStatu(datas, statu) == false) {

				throw new BusinessException(msg2, msg);
			}

			BeanFactory factory = BeanFactory.newInstance();
			SapJiesuanBean js = factory.getBean("sapJiesuanBean");
			HashMap returnObj = new HashMap();
			if ("0".equals(statu)) {// 撤销
				returnObj = js.removeJiesuanDan(
						datas[0].get("jspz").toString(), datas[0].get("mjahr")
								.toString());

			} else {
				returnObj = js.syncJiesuanDan(datas);
			}
			if ("E".equals(returnObj.get("msgty").toString())) {
				throw new BusinessException(msg2, returnObj.get("msgtx")
						.toString());
			}
			for (int i = 0; i < datas.length; i++) {
				String jspz = datas[i].get("jspz").toString();
				String mjahr = datas[i].get("mjahr").toString();
				GenlInvoiceHead template = new GenlInvoiceHeadImpl();// 结算凭证表抬头
				template.setJspz(jspz);
				template.setMjahr(mjahr);
				GenlInvoiceHead newHead = new GenlInvoiceHeadImpl();// 结算凭证表抬头
				newHead.setStatu(statu);
				newHead.setTranu(Common.getCurrentUserId());
				newHead.setTrant(Common.getCurrentTime());
				this.settleAccountsDao
						.updateEntityByTemplate(newHead, template);
			}

		} catch (Exception e) {
			SrmLog.error(msg2, e);
			throw new BusinessException(msg2, e.getMessage());
		}
	}

	/**
	 * 方法描述:查询结算凭证
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryAccount(Map paramObj) throws BusinessException {
		try {

			return this.settleAccountsDao.queryAccount(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询待确认结算凭证异常!", e);
			throw new BusinessException("查询待确认结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:删除结算凭证
	 * 
	 * @param entitys
	 * @throws BusinessException
	 */
	public void delAccounts(DataObject[] entitys) throws BusinessException {
		try {
			String jspz = entitys[0].getString("jspz");// 结算凭证号
			String mjahr = entitys[0].getString("mjahr");// 结算凭证年度

			// 查询抬头
			GenlInvoiceHead template = new GenlInvoiceHeadImpl();// 结算凭证表抬头
			template.setJspz(jspz);// 结算凭证号
			template.setMjahr(mjahr);// 结算凭证年度
			template.setLifnr(Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString());// 供应商
			template.setStatu("0");// 未确定
			GenlInvoiceHead[] ihead = this.settleAccountsDao
					.queryEntitiesByTemplate(GenlInvoiceHead.class, template);
			if (null == ihead || ihead.length == 0) {
				throw new BusinessException("结算凭证删除异常!", "结算凭证未找到或状态已确定!");
			}

			// 先删除行项目
			GenlInvoiceList temp = new GenlInvoiceListImpl();
			temp.setJspz(jspz);
			temp.setMjahr(mjahr);
			this.settleAccountsDao.deleteByTemplate(temp);// 删除

			// 删除抬头
			this.settleAccountsDao.deleteByTemplate(template);// 删除

			// 记录操作日志
			String optdesc = "删除结算凭证号:" + jspz + ",凭证年度:" + mjahr;
			String operattype = "删除结算凭证";
			String operatresult = "成功";
			OperLog.log(operattype, operatresult, optdesc);
		} catch (Exception e) {
			SrmLog.error("结算凭证异常!", e);
			throw new BusinessException("结算凭证删除异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述:查询已生成结算凭证
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryCreated(Map paramObj) throws BusinessException {
		try {
			return this.settleAccountsDao.queryCreated(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询已生成结算凭证异常!", e);
			throw new BusinessException("查询已生成结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:结算凭证查询
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryLists(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {

			if (null != Common.getCurrentUseObject().getAttributes().get(
					"lifnr")
					&& !"".equals(Common.getCurrentUseObject().getAttributes()
							.get("lifnr").toString())) {
				paramObj.put("lifnr", Common.getCurrentUseObject()
						.getAttributes().get("lifnr").toString());
			}

			if (paramObj.get("statu").toString().equals("3")) {
				paramObj.remove("statu");
			}

			return this.settleAccountsDao.queryLists(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询结算凭证异常!", e);
			throw new BusinessException("查询结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:结算凭证查询导出
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryListsdaochu(Map paramObj) throws BusinessException {
		try {

			if (null != Common.getCurrentUseObject().getAttributes().get(
					"lifnr")
					&& !"".equals(Common.getCurrentUseObject().getAttributes()
							.get("lifnr").toString())) {
				paramObj.put("lifnr", Common.getCurrentUseObject()
						.getAttributes().get("lifnr").toString());
			}

			if (paramObj.get("statu").toString().equals("3")) {
				paramObj.remove("statu");
			}

			return this.settleAccountsDao.queryListsdaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询结算凭证异常!", e);
			throw new BusinessException("查询结算凭证异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:结算凭证查询
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryPrints(Map paramObj) throws BusinessException {
		try {
			if (null != Common.getCurrentUseObject().getAttributes().get(
					"lifnr")
					&& !"".equals(Common.getCurrentUseObject().getAttributes()
							.get("lifnr").toString())) {
				paramObj.put("lifnr", Common.getCurrentUseObject()
						.getAttributes().get("lifnr").toString());
			}
			return this.settleAccountsDao.queryPrints(paramObj);
		} catch (Exception e) {
			SrmLog.error("结算凭证查询异常!", e);
			throw new BusinessException("结算凭证查询异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:结算凭证打印抬头
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings( { "unchecked" })
	public DataObject queryPrintHead(Map paramObj) throws BusinessException {
		try {
			if (null != Common.getCurrentUseObject().getAttributes().get(
					"lifnr")
					&& !"".equals(Common.getCurrentUseObject().getAttributes()
							.get("lifnr").toString())) {
				paramObj.put("lifnr", Common.getCurrentUseObject()
						.getAttributes().get("lifnr").toString());
			}
			DataObject[] heads = this.settleAccountsDao
					.queryPrintHead(paramObj);
			if (null == heads || heads.length == 0) {
				throw new BusinessException("结算凭证查询异常!", "结算凭证查询异常!");
			}
			DataObject head = heads[0];
			String jsje = head.getString("jsje");
			head.set("daxie", Common.toChineseMoney(jsje));
			return head;
		} catch (Exception e) {
			SrmLog.error("结算凭证查询异常!", e);
			throw new BusinessException("结算凭证查询异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述:增加打印次数
	 * 
	 * @param jspz
	 * @throws BusinessException
	 */
	public void modifyPrintCount(String jspz) throws BusinessException {
		try {
			// 查询抬头
			GenlInvoiceHead template = new GenlInvoiceHeadImpl();// 结算凭证表抬头
			template.setJspz(jspz);
			this.settleAccountsDao.expandEntity(template);

			GenlInvoiceHead newHead = new GenlInvoiceHeadImpl();
			newHead.setJspz(jspz);
			newHead.setPrint(template.getPrint() + 1);
			this.settleAccountsDao.updateEntityByTemplate(newHead, template);
		} catch (Exception e) {
			SrmLog.error("更新结算凭证打印次数异常!", e);
			throw new BusinessException("更新结算凭证打印次数异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述:结算计算
	 * 
	 * @param dsName
	 * @throws BusinessException
	 */
	public void jiesuan(String dsName, Map paramObj) throws BusinessException {
		Connection conn = ConnectionHelper
				.getCurrentContributionConnection(dsName);
		Statement stmt = null;

		if (dsName == null || dsName.equals(""))
			dsName = "default";
		try {
			CallableStatement proc = null;
			proc = conn.prepareCall("{ call  P_GENL_JIESUAN(?,?,?,?) }");
			proc.setString(1, Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString());
			proc.setString(2, Common.getCurrentUseObject().getUserId());
			proc.setString(3, null != paramObj.get("ruksjstartdate") ? paramObj
					.get("ruksjstartdate").toString() : null);
			proc.setString(4, null != paramObj.get("ruksjendate") ? paramObj
					.get("ruksjendate").toString() : null);
			proc.execute();
		} catch (Exception e) {
			SrmLog.error("查询结算凭证异常!", e);
			throw new BusinessException("查询结算凭证异常!", e.getMessage());
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
	 * 方法描述:删除结算表
	 * 
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public void deleteJiesuan() throws BusinessException {
		Map condition = new HashMap();

		try {
			condition.put("lifnr", Common.getCurrentUseObject().getAttributes()
					.get("lifnr").toString());
			condition.put("userid", Common.getCurrentUseObject().getUserId());
			this.settleAccountsDao.deleteJiesuan(condition);
		} catch (Exception e) {
			SrmLog.error("删除结算表失败!", e);
			throw new BusinessException("删除结算表失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询待生成结算凭证
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querynosettle(Map paramObj) throws BusinessException {
		try {
			String ruksjstartdate = "";
			String ruksjendate = "";
			if (null != Common.getCurrentUseObject().getAttributes().get("lifnr")&& !"".equals(Common.getCurrentUseObject().getAttributes()
							.get("lifnr").toString())) {
				paramObj.put("lifnr", Common.getCurrentUseObject()
						.getAttributes().get("lifnr").toString());
			}
			if (null != paramObj.get("ruksjstartdate")&& !"".equals(paramObj.get("ruksjstartdate").toString())) {
				 ruksjstartdate = paramObj.get("ruksjstartdate").toString();
			}
			if (null != paramObj.get("ruksjendate")&& !"".equals(paramObj.get("ruksjendate").toString())) {
				ruksjendate = paramObj.get("ruksjendate").toString();
			}
			HashMap<String, DataObject[]> nosettle = this
					.querymynosettle("default", paramObj.get("lifnr")
							.toString(), paramObj.get("werks").toString(),
							Common.getCurrentUseObject().getUserId(),ruksjstartdate, ruksjendate);
			DataObject[] list = nosettle.get("list");
			return list;
		} catch (Exception e) {
			SrmLog.error("无合同价查询异常!", e);
			throw new BusinessException("无合同价查询异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 获取无合同价数据
	 * 
	 * @author liuxin
	 * @param dsName
	 * @param zvern
	 * @throws BusinessException
	 * @return HashMap[]
	 */
	@SuppressWarnings("unchecked")
	public HashMap<String, DataObject[]> querymynosettle(String dsName,
			String lifnr, String werks, String userid, String ruksjstartdate,
			String ruksjendate) throws BusinessException {
		HashMap<String, DataObject[]> map = new HashMap<String, DataObject[]>();
		Connection conn = ConnectionHelper
				.getCurrentContributionConnection(dsName);
		Statement stmt = null;
		ResultSet rs9 = null;
		if (dsName == null || dsName.equals(""))
			dsName = "default";
		try {

			CallableStatement proc = null;
			proc = conn.prepareCall("{ call  P_GENL_JIESUAN_SEARCH(?,?,?,?,?,?) }");
			proc.setString(1, lifnr);
			proc.setString(2, werks);
			proc.setString(3, userid);
			proc.setString(4, ruksjstartdate);
			proc.setString(5, ruksjendate);
			proc.registerOutParameter(6, oracle.jdbc.OracleTypes.CURSOR);
			conn.setAutoCommit(false);
			proc.execute();
			conn.setAutoCommit(true);
			int i = 0;
			DataObject[] dl = new DataObject[0];
			rs9 = (ResultSet)proc.getObject(6);
			ResultSetMetaData rsm2 = rs9.getMetaData();
			//System.out.println(rsm2.getColumnCount());
			while (rs9.next()) {

				DataObject d = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				dl = (DataObject[]) Arrays.copyOf(dl, dl.length + 1);
				for (int j = 0; j < rsm2.getColumnCount(); j++) {
					d.set(rsm2.getColumnName(j + 1).toLowerCase(), null == rs9
							.getObject(j + 1) ? "" : rs9.getObject(j + 1)
							.toString());
				}
				dl[i] = d;
				i += 1;
			}
			map.put("list", dl);

			return map;
		} catch (Throwable e) {
			throw new BusinessException("无合同价查询异常!", e.getMessage());
		} finally {
			close(stmt);
			close(conn);
		}
	}

	public SettleAccountsDao getSettleAccountsDao() {
		return settleAccountsDao;
	}

	public void setSettleAccountsDao(SettleAccountsDao settleAccountsDao) {
		this.settleAccountsDao = settleAccountsDao;
	}
}
