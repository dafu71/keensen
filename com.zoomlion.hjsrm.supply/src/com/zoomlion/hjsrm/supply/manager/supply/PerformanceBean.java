package com.zoomlion.hjsrm.supply.manager.supply;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.busi.common.SrmCommonBean;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfa1;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl;
import commonj.sdo.DataObject;

public class PerformanceBean extends BaseBean {

	private PerformanceDao performanceDao;

	public PerformanceDao getPerformanceDao() {
		return performanceDao;
	}

	public void setPerformanceDao(PerformanceDao performanceDao) {
		this.performanceDao = performanceDao;
	}

	private static String PERFORMANCEMONTH = "1";// 月绩效

	private static String PERFORMANCEHALF = "2";// 半年绩效

	private static String PERFORMANCEYEAR = "3";// 年绩效

	/**
	 * 方法描述：导入excel
	 * 
	 * @param datas
	 * @return
	 * @throws BusinessException
	 */
	public String uploadExcel(DataObject[] datas, String ytype, String bukrs,
			String werks) throws BusinessException {
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
					}else{
						data.set("lifnr", lifnr);
					}
				}
				// 质量绩效
				if (SrmCommonBean.isEmpty(data.get("zqual"))
						|| !SrmCommonBean
								.isNumber(data.get("zqual").toString())) {// 质量绩效为空或不为数字
					sb.append("第 " + (i + 4) + " 行质量绩效为空或不为数字");
					break;
				}

				// 供应绩效
				if (SrmCommonBean.isEmpty(data.get("zsupp"))
						|| !SrmCommonBean
								.isNumber(data.get("zsupp").toString())) {// 供应绩效为空或不为数字
					sb.append("第 " + (i + 4) + " 行供应绩效为空或不为数字");
					break;
				}

				// 综合绩效
				if (SrmCommonBean.isEmpty(data.get("zzhjx"))
						|| !SrmCommonBean
								.isNumber(data.get("zzhjx").toString())) {// 综合绩效为空或不为数字
					sb.append("第 " + (i + 4) + " 行综合绩效为空或不为数字");
					break;
				}

				// 同类型物资排名
				if (SrmCommonBean.isEmpty(data.get("ztlpm"))
						|| !SrmCommonBean
								.isNumber(data.get("ztlpm").toString())) {// 同类型物资排名为空或不为数字
					sb.append("第 " + (i + 4) + " 行同类型物资排名为空或不为数字");
					break;
				}

				// 绩效得分排名
				if (SrmCommonBean.isEmpty(data.get("zjxpm"))
						|| !SrmCommonBean
								.isNumber(data.get("zjxpm").toString())) {// 绩效得分排名为空或不为数字
					sb.append("第 " + (i + 4) + " 行绩效得分排名为空或不为数字");
					break;
				}

				// 绩效等级
				if (SrmCommonBean.isEmpty(data.get("zjxdj"))) {// 绩效等级为空
					sb.append("第 " + (i + 4) + " 行绩效等级为空");
					break;
				}

				if (PERFORMANCEMONTH.equals(ytype)) {// 月绩效
					// 考核期间
					if (SrmCommonBean.isEmpty(data.get("zdata"))) {// 考核期间为空
						sb.append("第 " + (i + 4) + " 行考核期间为空");
						break;
					} else {
						if (data.get("zdata").toString().length() == 6
								&& SrmCommonBean.isInteger(data.get("zdata")
										.toString())) {// 考核期间是否6位整数
							String month = data.get("zdata").toString()
									.substring(4);// 截取月份数据
							if (!SrmCommonBean.isMonth(month)) {// 不为合法月份
								sb.append("第 " + (i + 4) + " 行考核期间数据月份不正确");
								break;
							}

						} else {
							sb.append("第 " + (i + 4) + " 行考核期间数据不正确");
							break;
						}
					}

				} else {// 非月绩效
					// 成本绩效
					if (SrmCommonBean.isEmpty(data.get("zcost"))) {// 成本绩效为空
						sb.append("第 " + (i + 4) + " 行成本绩效为空");
						break;
					}

					if (PERFORMANCEHALF.equals(ytype)) {// 半年绩效
						if (data.get("zdata").toString().length() != 5
								|| !SrmCommonBean.isInteger(data.get("zdata")
										.toString().substring(0, 3))) {// 考核期间是否4位整数+字符
							sb.append("第 " + (i + 4) + " 行考核期间数据不正确");
							break;
						}
					}

					if (PERFORMANCEYEAR.equals(ytype)) {// 年绩效
						if (data.get("zdata").toString().length() != 4
								|| !SrmCommonBean.isInteger(data.get("zdata")
										.toString())) {// 考核期间是否4位整数
							sb.append("第 " + (i + 4) + " 行考核期间数据不正确");
							break;
						}

						// 质量体系
						if (SrmCommonBean.isEmpty(data.get("zqtxi"))) {// 质量体系为空
							sb.append("第 " + (i + 4) + " 行质量体系为空");
							break;
						}

						// 技术合作
						if (SrmCommonBean.isEmpty(data.get("zjshz"))) {// 技术合作为空
							sb.append("第 " + (i + 4) + " 行技术合作为空");
							break;
						}
					}
				}
			}

		}

		if (null == sb.toString() || "".equals(sb.toString())) {// 无错误则保存
			this.saveGenlSupplyEfficacy(datas, ytype, bukrs, werks);
			sb.append("保存了" + datas.length + "条数据");
		}
		return sb.toString();
	}

	/**
	 * 方法描述：保存绩效数据
	 * 
	 * @param datas
	 * @param ytype
	 * @param bukrs
	 * @param werks
	 * @throws BusinessException
	 */
	public void saveGenlSupplyEfficacy(DataObject[] datas, String ytype,
			String bukrs, String werks) throws BusinessException {
		try {
			for (int i = 0; i < datas.length; i++) {
				GenlSupplyEfficacy supply = new GenlSupplyEfficacyImpl();
				supply.setBukrs(bukrs);
				supply.setWerks(werks);
				supply.setYtype(Long.parseLong(ytype));
				supply.setZdata(datas[i].getString("zdata"));
				supply.setLifnr(datas[i].getString("lifnr"));
				supply.setZqual(new BigDecimal(datas[i].getString("zqual")));
				supply.setZsupp(new BigDecimal(datas[i].getString("zsupp")));
				supply.setZzhjx(new BigDecimal(datas[i].getString("zzhjx")));
				supply.setZtlpm(new BigDecimal(datas[i].getString("ztlpm")));
				supply.setZjxpm(new BigDecimal(datas[i].getString("zjxpm")));
				supply.setZjxdj(datas[i].getString("zjxdj"));
				supply.setZbeiz(null == datas[i].get("zbeiz") ? "" : datas[i]
						.get("zbeiz").toString());

				supply.setZcost(null == datas[i].get("zcost") ? new BigDecimal(
						0) : new BigDecimal(datas[i].getString("zcost")));

				supply.setZqtxi(null == datas[i].get("zqtxi") ? new BigDecimal(
						0) : new BigDecimal(datas[i].getString("zqtxi")));
				supply.setZjshz(null == datas[i].get("zjshz") ? new BigDecimal(
						0) : new BigDecimal(datas[i].getString("zjshz")));
				supply.setCreid(Common.getCurrentUserId());
				supply.setCretm(Common.getCurrentTime());

				this.performanceDao.saveEntity(supply);

			}
		} catch (Exception e) {
			SrmLog.error("保存绩效数据异常!", e);
			throw new BusinessException("保存绩效数据异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询供应商编号
	 * 
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
		BaseSupplyLfa1[] supply = this.performanceDao.queryEntitiesByTemplate(
				BaseSupplyLfa1.class, template);
		if (null != supply && supply.length > 0) {
			return supply[0].getLifnr();
		}
		return null;
	}

	/**
	 * 方法描述: 查询绩效
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryPerformances(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.performanceDao.queryPerformances(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 删除绩效
	 * 
	 * @param datas
	 * @throws BusinessException
	 */
	public void deletePerformances(HashMap[] datas) throws BusinessException {
		try {
			if (null == datas || datas.length == 0) {
				return;
			}
			for (int i = 0; i < datas.length; i++) {

				GenlSupplyEfficacy supply = new GenlSupplyEfficacyImpl();
				supply.setLifnr(datas[i].get("lifnr").toString());
				supply.setZdata(datas[i].get("zdata").toString());
				this.performanceDao.deleteByTemplate(supply);

			}
		} catch (Exception e) {
			SrmLog.error("保存送货单异常!", e);
			throw new BusinessException("保存送货单异常!", e.getMessage());
		}
	}

}
