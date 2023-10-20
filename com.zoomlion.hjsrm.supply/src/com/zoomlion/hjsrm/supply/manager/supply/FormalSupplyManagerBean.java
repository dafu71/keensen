package com.zoomlion.hjsrm.supply.manager.supply;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.eos.das.entity.DASManager;
import com.eos.das.entity.ExpressionHelper;
import com.eos.das.entity.IDASCriteria;
import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.tools.Tools.TAtAnnounce;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectLbwh;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz;
import com.zoomlion.hjsrm.pub.busi.common.SrmCommonBean;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyData;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyTtel;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vformalsupplybase;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyTtelImpl;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpflpzListImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlDeliverList;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfa1;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024eImpl;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpqdwhList;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl;
import commonj.sdo.DataObject;

public class FormalSupplyManagerBean extends BaseBean {

	private static FormalSupplyManagerDao formalSupplyManagerDao;

	/**
	 * 方法描述: 查询正式供应商 创建日期： 2014/11/18
	 * 
	 * @author 黄平
	 * @param query
	 * @param pagecond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querySupplys(DataObject entity, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				String lifnr = Common.getCurrentUseObject().getAttributes()
						.get("lifnr").toString();
				if (null != lifnr && !"".equals(lifnr)) {
					condition.put("lifnrsup", lifnr);
				} else {
					if (entity.getString("lifnr") != null
							&& !entity.getString("lifnr").equals("")) {
						condition.put("lifnr", entity.getString("lifnr"));
					}
				}
				if (entity.getString("name1") != null
						&& !entity.getString("name1").equals("")) {
					condition.put("name1", entity.getString("name1"));
				}
				if (entity.getString("lprop") != null
						&& !entity.getString("lprop").equals("")) {
					condition.put("lprop", entity.getString("lprop"));
				}
				if (entity.getString("lsort") != null
						&& !entity.getString("lsort").equals("")) {
					condition.put("lsort", entity.getString("lsort"));
				}
				if (entity.getString("batch") != null
						&& !entity.getString("batch").equals("")) {
					condition.put("batch", entity.getString("batch"));
				}
				if (entity.getString("ltype") != null
						&& !entity.getString("ltype").equals("")) {
					condition.put("ltype", entity.getString("ltype"));
				}
				if (entity.getString("lsyst") != null
						&& !entity.getString("lsyst").equals("")) {
					condition.put("lsyst", entity.getString("lsyst"));
				}
				if (entity.getString("zzyyw") != null
						&& !entity.getString("zzyyw").equals("")) {
					condition.put("zzyyw", entity.getString("zzyyw"));
				}
				if (entity.getString("whzt") != null
						&& !entity.getString("whzt").equals("")) {
					if (entity.getString("whzt").equals("1")) {
						condition.put("whzt1", entity.getString("whzt"));
					}
					if (entity.getString("whzt").equals("2")) {
						condition.put("whzt2", entity.getString("whzt"));
					}
				}
			} catch (Exception e) {
				SrmLog.error("供应商查询异常!", e);
				throw new BusinessException("供应商查询异常!", e.getMessage());
			}
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return formalSupplyManagerDao.querySupplyManager(condition,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("供应商查询异常!", e);
			throw new BusinessException("供应商查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询需加载的供应商信息 创建日期： 2014/11/18
	 * 
	 * @author 黄平
	 * @param lifnr
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public Vformalsupplybase loadSupplyBaseinfo(Vformalsupplybase vfor)
			throws BusinessException {
		try {
			// this.formalSupplyManagerDao.expandEntity(vfor);
			IDASCriteria dasCriteria = DASManager
					.createCriteria(Vformalsupplybase.class.getName());
			dasCriteria.add(ExpressionHelper.eq("lifnr", vfor.getLifnr()));
			Vformalsupplybase[] aos = this.formalSupplyManagerDao
					.queryEntitiesByCriteriaEntity(Vformalsupplybase.class,
							dasCriteria);
			for (int i = 0; i < aos.length; i++) {
				// vfor.set("lifnr", aos[i].getLifnr());

				vfor = aos[i];
			}
		} catch (Exception e) {
			SrmLog.error("供应商加载异常!", e);
			throw new BusinessException("供应商加载异常!", e.getMessage());
		}
		return vfor;
	}

	/**
	 * 方法描述: 查询正式供应商联系人信息 创建日期： 2014/11/20
	 * 
	 * @author 黄平
	 * @param query
	 * @param pagecond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getSupplysTel(Vformalsupplybase vfor, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				if (vfor.getLifnr() != null && !vfor.getLifnr().equals("")) {
					condition.put("lifnr", vfor.getLifnr());
				}
			} catch (Exception e) {
				SrmLog.error("供应商加载联系人信息异常!", e);
				throw new BusinessException("供应商加载联系人信息异常!", e.getMessage());
			}
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return formalSupplyManagerDao.querySupplyTel(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("供应商加载联系人信息异常!", e);
			throw new BusinessException("供应商加载联系人信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存正式供应商SRM加载信息 创建日期： 2014/11/22
	 * 
	 * @author 黄平
	 * @param gdata
	 * @param ttel[]
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void saveSupplyData(GenlSupplyData gdata, GenlSupplyTtel[] ttel)
			throws BusinessException {
		try {
			if (gdata.getLifnr() != null && !gdata.getLifnr().equals("")) {
				gdata.setCreid(Common.getCurrentUserId());
				gdata.setCretm(Common.getCurrentTime());
				this.formalSupplyManagerDao.saveSypplyinfo(gdata);
				for (int i = 0; i < ttel.length; i++) {
					GenlSupplyTtel saveData = new GenlSupplyTtelImpl();
					saveData = ttel[i];
					saveData.setLifnr(gdata.getLifnr());
					saveData.setCreid(Common.getCurrentUserId());
					saveData.setCretm(Common.getCurrentTime());
					this.formalSupplyManagerDao.saveSupplyTtel(saveData);
				}
			}
		} catch (Exception e) {
			SrmLog.error("修改供应商信息异常!", e);
			throw new BusinessException("修改供应商信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 新增产品类别大类信息 创建日期： 2015/08/28
	 * 
	 * @author 刘鑫
	 * @param cpfl
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addcpflpzcxdl(GenlCpflpzList cpfl) throws BusinessException {
		try {
			this.formalSupplyManagerDao.getPrimaryKey(cpfl);
			cpfl.setSjid(0);
			cpfl.setSsdj("1");
			cpfl.setHbdm(cpfl.getString("fldm"));
			this.formalSupplyManagerDao.saveEntity(cpfl);
		} catch (Exception e) {
			SrmLog.error("保存产品类别大类信息异常!", e);
			throw new BusinessException("保存产品类别大类信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存产品类别大类信息 创建日期： 2015/08/31
	 * 
	 * @author 刘鑫
	 * @param cpfl
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savecpflpzcxdl(GenlCpflpzList cpfl) throws BusinessException {
		try {
			cpfl.setHbdm(cpfl.getString("fldm"));
			this.formalSupplyManagerDao.saveEntity(cpfl);
		} catch (Exception e) {
			SrmLog.error("保存产品类别大类信息异常!", e);
			throw new BusinessException("保存产品类别大类信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询产品类别大类信息
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querycpflpzcxdl(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.formalSupplyManagerDao.querycpflpzcxdl(paramObj,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("查询产品类别大类信息异常!", e);
			throw new BusinessException("查询产品类别大类信息异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询产品清单
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querycpqdwhcx(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null == lifnr || "".equals(lifnr)) {
				if (paramObj.get("lifnr") != null
						&& !paramObj.get("lifnr").equals("")) {
					paramObj.put("lifnr", paramObj.get("lifnr"));
				}
			} else {
				paramObj.put("lifnrsup", lifnr);
			}
			return this.formalSupplyManagerDao
					.querycpqdwhcx(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询产品类别大类信息异常!", e);
			throw new BusinessException("查询产品类别大类信息异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询产品清单
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querycpqdwhcxdaochu(Map paramObj)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null == lifnr || "".equals(lifnr)) {
				if (paramObj.get("lifnr") != null
						&& !paramObj.get("lifnr").equals("")) {
					paramObj.put("lifnr", paramObj.get("lifnr"));
				}
			} else {
				paramObj.put("lifnrsup", lifnr);
			}
			return this.formalSupplyManagerDao.querycpqdwhcxdaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询产品类别大类信息异常!", e);
			throw new BusinessException("查询产品类别大类信息异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询产品类别中小类信息
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querycpflpzcxzxl(Map paramObj) throws BusinessException {
		try {
			return this.formalSupplyManagerDao.querycpflpzcxzxl(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询产品类别信息异常!", e);
			throw new BusinessException("查询产品类别信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 产品清单下载模版
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querycpqdwhcxxzMb(Map paramObj)
			throws BusinessException {
		try {
			return this.formalSupplyManagerDao.querycpqdwhcxxzMb(paramObj);
		} catch (Exception e) {
			SrmLog.error("产品清单下载模版异常!", e);
			throw new BusinessException("产品清单下载模版异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询供应商姓名
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryname1(Map paramObj) throws BusinessException {
		try {
			return this.formalSupplyManagerDao.queryname1(paramObj);
		} catch (Exception e) {
			SrmLog.error("供应商信息查询异常!", e);
			throw new BusinessException("供应商信息查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存产品类别中小类信息
	 * 
	 * @author 刘鑫
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	@SuppressWarnings("unchecked")
	public boolean savecpflpzcxzxl(GenlCpflpzList[] cpfl)
			throws BusinessException {
		try {
			for (GenlCpflpzList temp : cpfl) {
				if (temp.getString("id") == null
						|| temp.getString("id").equals("")) {
					this.formalSupplyManagerDao.getPrimaryKey(temp);
					temp.setHbdm(temp.getString("sjdm")
							+ temp.getString("fldm"));
					this.formalSupplyManagerDao.saveEntity(temp);
				} else {
					temp.setHbdm(temp.getString("sjdm")
							+ temp.getString("fldm"));
					this.formalSupplyManagerDao.saveEntity(temp);
				}
			}
		} catch (Exception e) {
			SrmLog.error("保存产品类别中小类信息！", e);
			throw new BusinessException("保存产品类别中小类信息！", e.getMessage());
		}
		// 如果为空 则认为是新增
		return true;
	}

	/**
	 * 方法描述: 加载产品类别大类信息
	 * 
	 * @author 刘鑫
	 * @param cpfl
	 * @throws BusinessException
	 * @return GenlCpflpzList
	 */
	public GenlCpflpzList loadcpflpzcxdl(GenlCpflpzList cpfl)
			throws BusinessException {
		try {
			this.formalSupplyManagerDao.expandEntity(cpfl);
		} catch (Exception e) {
			SrmLog.error("加载产品类别大类信息异常!", e);
			throw new BusinessException("加载产品类别大类信息异常!", e.getMessage());
		}
		return cpfl;
	}

	/**
	 * 方法描述: 删除小类信息
	 * 
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return void
	 */
	public void delcpflpzcxxl(GenlCpflpzList[] cpfl) throws BusinessException {
		try {
			this.formalSupplyManagerDao.deleteEntityBatch(cpfl);
		} catch (Exception e) {
			SrmLog.error(" 删除小类信息失败！", e);
			throw new BusinessException(" 删除小类信息失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除中类信息
	 * 
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void delcpflpzcxzl(GenlCpflpzList[] cpfl) throws BusinessException {
		try {
			Map condition = new HashMap();
			for (int i = 0; i < cpfl.length; i++) {
				if (cpfl[i].getString("id") == null
						|| cpfl[i].getString("id").equals("")) {

				} else {
					condition.put("sjid", cpfl[i].getId());
					this.formalSupplyManagerDao.deletecpflxl(condition);
					this.formalSupplyManagerDao.deleteEntity(cpfl[i]);
				}
			}
		} catch (Exception e) {
			SrmLog.error(" 删除中类信息失败！", e);
			throw new BusinessException(" 删除中类信息失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除大类信息及中类小类信息
	 * 
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void delcpflpzcxdl(GenlCpflpzList[] cpfl) throws BusinessException {
		try {
			Map condition = new HashMap();
			for (int i = 0; i < cpfl.length; i++) {
				condition.put("id", cpfl[i].getFldm());
				this.formalSupplyManagerDao.deletecpfldl(condition);
			}
		} catch (Exception e) {
			SrmLog.error(" 删除大类信息失败！", e);
			throw new BusinessException(" 删除大类信息失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询供应商主供物资类别 创建日期： 2014/11/24
	 * 
	 * @author 黄平
	 * @param entity
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querySupplyMaterial(DataObject entity)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			return formalSupplyManagerDao.querySupplyMaterial(condition);
		} catch (Exception e) {
			SrmLog.error("供应商主供物资类别查询异常!", e);
			throw new BusinessException("供应商主供物资类别查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 产品清单excel上传！
	 * 
	 * @author 刘鑫 下面全属于excel上传
	 * @param s
	 * @return
	 */

	public String uploadExcelcpqd(DataObject[] datas) throws BusinessException {
		StringBuffer sb = new StringBuffer();
		int j = 0;
		if (null == datas || datas.length == 0) {
			sb.append("excel文件无数据");

		} else {

			for (int i = 0; i < datas.length; i++) {
				DataObject data = datas[i];
				// 公共判断部分
				if (SrmCommonBean.isEmpty(data.get("lifnr"))
						&& SrmCommonBean.isEmpty(data.get("cpmc"))
						&& SrmCommonBean.isEmpty(data.get("cpxh"))
						&& SrmCommonBean.isEmpty(data.get("cpgg"))
						&& SrmCommonBean.isEmpty(data.get("xldm"))
						&& SrmCommonBean.isEmpty(data.get("ntgl"))
						&& SrmCommonBean.isEmpty(data.get("gjzld"))
						&& SrmCommonBean.isEmpty(data.get("zyjscs"))
						&& SrmCommonBean.isEmpty(data.get("text"))) {

				} else {
					j = j + 1;
					if (SrmCommonBean.isEmpty(data.get("lifnr"))) {// 供应商编号为空
						sb.append("第 " + (i + 6) + " 行供应商编号为空");
						break;
					} else {
						String lifnr = this.lifnr(data.get("lifnr").toString());
						if (null == lifnr) {
							sb.append("第 " + (i + 6) + " 行供应商编号不正确");
							break;
						} else {
							data.set("lifnr", lifnr);
						}
					}
					if (SrmCommonBean.isEmpty(data.get("cpmc"))) {
						sb.append("第 " + (i + 6) + " 行产品名称为空");
						break;
					}
					if (SrmCommonBean.isEmpty(data.get("cpxh"))) {
						sb.append("第 " + (i + 6) + " 行产品型号为空");
						break;
					}
					if (SrmCommonBean.isEmpty(data.get("cpgg"))) {
						sb.append("第 " + (i + 6) + " 行产品规格为空");
						break;
					}
					if (SrmCommonBean.isEmpty(data.get("xldm"))) {// 供应商编号为空
						sb.append("第 " + (i + 6) + " 行归属小类代码为空");
						break;
					} else {
						String xldm = this.xldm(data.get("xldm").toString());
						if (null == xldm) {
							sb.append("第 " + (i + 6) + " 行归属小类代码不存在");
							break;
						} else {
							data.set("xldm", xldm);
						}
					}
				}
			}
		}

		if (null == sb.toString() || "".equals(sb.toString())) {// 无错误则保存
			this.saveGenlCpqdwhList(datas);
			sb.append("保存了" + j + "条数据！");
		}
		return sb.toString();
	}

	public void saveGenlCpqdwhList(DataObject[] datas) throws BusinessException {
		try {
			for (int i = 0; i < datas.length; i++) {
				DataObject data = datas[i];
				// 公共判断部分
				if (SrmCommonBean.isEmpty(data.get("lifnr"))
						&& SrmCommonBean.isEmpty(data.get("cpmc"))
						&& SrmCommonBean.isEmpty(data.get("cpxh"))
						&& SrmCommonBean.isEmpty(data.get("cpgg"))
						&& SrmCommonBean.isEmpty(data.get("xldm"))
						&& SrmCommonBean.isEmpty(data.get("ntgl"))
						&& SrmCommonBean.isEmpty(data.get("gjzld"))
						&& SrmCommonBean.isEmpty(data.get("zyjscs"))
						&& SrmCommonBean.isEmpty(data.get("text"))) {

				} else {
					GenlCpqdwhList cpflqd = new GenlCpqdwhListImpl();
					String a = datas[i].getString("xldm");
					String b = a.substring(0, 2);
					String c = a.substring(0, 4);
					this.formalSupplyManagerDao.getPrimaryKey(cpflqd);
					cpflqd.setSsdl(b);
					cpflqd.setSszl(c);
					cpflqd.setSsxl(a);
					cpflqd.setCpgg(datas[i].getString("cpgg"));
					cpflqd.setGjzld(datas[i].getString("gjzld"));
					cpflqd.setZyjscs(datas[i].getString("zyjscs"));
					cpflqd.setNtgl(datas[i].getString("ntgl"));
					cpflqd.setLifnr(datas[i].getString("lifnr"));
					cpflqd.setCpmc(datas[i].getString("cpmc"));
					cpflqd.setCpxh(datas[i].getString("cpxh"));
					cpflqd.setText(datas[i].getString("text"));
					cpflqd.setModifytime(Common.getCurrentTime());
					cpflqd.setUserid(Common.getCurrentUserId());

					this.formalSupplyManagerDao.saveEntity(cpflqd);
				}

			}
		} catch (Exception e) {
			SrmLog.error("保存产品清单异常!", e);
			throw new BusinessException("保存产品清单异常!", e.getMessage());
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
		BaseSupplyLfa1[] supply = this.formalSupplyManagerDao
				.queryEntitiesByTemplate(BaseSupplyLfa1.class, template);
		if (null != supply && supply.length > 0) {
			return supply[0].getLifnr();
		}
		return null;
	}

	public String name1(String s) {
		int l = 10 - s.length();
		for (int i = 0; i < l; i++) {
			s = "0" + s;
		}
		BaseSupplyLfa1 template = new BaseSupplyLfa1Impl();
		template.setLifnr(s);
		BaseSupplyLfa1[] supply = this.formalSupplyManagerDao
				.queryEntitiesByTemplate(BaseSupplyLfa1.class, template);
		if (null != supply && supply.length > 0) {
			return supply[0].getName1();
		}
		return null;
	}

	public String xldm(String s) {
		GenlCpflpzList template1 = new GenlCpflpzListImpl();
		template1.setHbdm(s);
		GenlCpflpzList[] cool = this.formalSupplyManagerDao
				.queryEntitiesByTemplate(GenlCpflpzList.class, template1);
		if (null != cool && cool.length > 0) {
			return cool[0].getHbdm();
		}
		return null;
	}

	/**
	 * 方法描述: 新增产品清单信息 创建日期： 2015/09/06
	 * 
	 * @author 刘鑫
	 * @param cpfl
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addcpqdwhcx(GenlCpqdwhList cpflqd) throws BusinessException {
		String lifnr = this.lifnr(cpflqd.get("lifnr").toString());
		if (null == lifnr) {
			throw new BusinessException("该供应商编码不存在!", "该供应商编码不存在!");
		} else {
			cpflqd.set("lifnr", lifnr);
			try {
				if (cpflqd.getString("id") == null
						|| cpflqd.getString("id").equals("")) {
					this.formalSupplyManagerDao.getPrimaryKey(cpflqd);
				}
				cpflqd.setModifytime(Common.getCurrentTime());
				cpflqd.setUserid(Common.getCurrentUserId());
				this.formalSupplyManagerDao.saveEntity(cpflqd);
			} catch (Exception e) {
				SrmLog.error("保存产品清单信息异常!", e);
				throw new BusinessException("保存产品清单信息异常!", e.getMessage());
			}
		}
	}

	/**
	 * 方法描述: 加载产品清单信息
	 * 
	 * @author 刘鑫
	 * @param cpqd
	 * @return
	 * @throws BusinessException
	 * @return GenlCpqdwhList
	 */
	public GenlCpqdwhList loadCpqdwhcx(GenlCpqdwhList cpqd)
			throws BusinessException {
		try {
			this.formalSupplyManagerDao.expandEntity(cpqd);
			String name1 = this.name1(cpqd.get("lifnr").toString());
			cpqd.set("name1", name1);
		} catch (Exception e) {
			SrmLog.error("产品清单加载异常!", e);
			throw new BusinessException("产品清单加载异常!", e.getMessage());
		}
		return cpqd;
	}

	/**
	 * 方法描述: 删除产品清单信息
	 * 
	 * @author 刘鑫
	 * @param cpqd
	 * @throws BusinessException
	 * @return void
	 */
	public void delCpqdwhcx(GenlCpqdwhList[] cpqd) throws BusinessException {
		try {
			for (int i = 0; i < cpqd.length; i++) {
				this.formalSupplyManagerDao.expandEntity(cpqd[i]);
				cpqd[i].setStatu("X");
				this.formalSupplyManagerDao.saveEntity(cpqd[i]);
			}
		} catch (Exception e) {
			SrmLog.error("产品清单删除异常!", e);
			throw new BusinessException("产品清单删除异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 新增一条合格供应商名录
	 * 
	 * @author 刘鑫
	 * @param hgsupply
	 * @throws BusinessException
	 * @return void
	 */
	public void addHgsupply(GenlSupplyHgsupply hgsupply)
			throws BusinessException {
		try {
			hgsupply.setCreatetime(Common.getCurrentTime());
			hgsupply.setCreateuserid(Common.getCurrentUserId());
			this.formalSupplyManagerDao.saveEntity(hgsupply);
		} catch (Exception e) {
			SrmLog.error("合格供应商名录新增异常!", e);
			throw new BusinessException("合格供应商名录新增异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 修改一条合格供应商名录
	 * 
	 * @author 刘鑫
	 * @param hgsupply
	 * @throws BusinessException
	 * @return void
	 */
	public void saveHgsupply(GenlSupplyHgsupply hgsupply)
			throws BusinessException {
		try {
			hgsupply.setUpdatetime(Common.getCurrentTime());
			hgsupply.setUpdateuseid(Common.getCurrentUserId());
			this.formalSupplyManagerDao.saveEntity(hgsupply);
		} catch (Exception e) {
			SrmLog.error("合格供应商名录保存异常!", e);
			throw new BusinessException("合格供应商名录保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询合格供应商名录
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryhgsupplyml(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.formalSupplyManagerDao.queryhgsupplyml(paramObj,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("查询合格供应商名录异常!", e);
			throw new BusinessException("查询合格供应商名录异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 加载合格供应商名录
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public GenlSupplyHgsupply loadHgsupplyfb(GenlSupplyHgsupply hgsupply)
			throws BusinessException {
		try {
			this.formalSupplyManagerDao.expandEntity(hgsupply);
			String name1 = this.name1(hgsupply.get("lifnr").toString());
			hgsupply.set("name1", name1);
		} catch (Exception e) {
			SrmLog.error("合格供应商名录加载异常!", e);
			throw new BusinessException("合格供应商名录加载异常!", e.getMessage());
		}
		return hgsupply;
	}

	/**
	 * 方法描述: 删除供应商合格名录
	 * 
	 * @author 刘鑫
	 * @param hgsupply
	 * @throws BusinessException
	 * @return void
	 */
	public void delSupplyfb(GenlSupplyHgsupply[] hgsupplys)
			throws BusinessException {
		try {
			for (int i = 0; i < hgsupplys.length; i++) {
				this.formalSupplyManagerDao.expandEntity(hgsupplys[i]);
				hgsupplys[i].setDelflag("X");
				this.formalSupplyManagerDao.saveEntity(hgsupplys[i]);
			}
		} catch (Exception e) {
			SrmLog.error("供应商合格名录删除异常!", e);
			throw new BusinessException("供应商合格名录删除异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 导入合格供应商
	 * 
	 * @author 刘鑫
	 * @param datas
	 * @throws BusinessException
	 * @return void
	 */
	public String uploadExcelhgsupply(DataObject[] datas)
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
					sb.append("第 " + (i + 9) + " 行供应商编号为空");
					break;
				} else {
					String lifnr = this.lifnr(data.get("lifnr").toString());
					if (null == lifnr) {
						sb.append("第 " + (i + 9) + " 行供应商编号不正确");
						break;
					} else {
						data.set("lifnr", lifnr);
					}
				}
				// 年
				if (SrmCommonBean.isEmpty(data.get("yearr"))
						|| isValidDatea(data.get("yearr").toString())==false) {
					sb.append("第 " + (i + 9) + " 行年份为空或格式不对");
					break;
				}
				// 采购组织
				if (SrmCommonBean.isEmpty(data.get("ekorg"))) {
					sb.append("第 " + (i + 9) + " 行采购组织为空");
					break;
				} else {
					if ("外购".equals(data.get("ekorg").toString())){
						data.set("ekorg", "3001");
					}else if("外协".equals(data.get("ekorg").toString())){
						data.set("ekorg", "3002");
					} else {
						sb.append("第 " + (i + 9) + " 行采购组织不正确");
						break;
					}
				}
//				 供应商类型
				if (SrmCommonBean.isEmpty(data.get("gyslx"))) {
					sb.append("第 " + (i + 9) + " 行供应商类型为空");
					break;
				} else {
					if (FormalSupplyManagerBean.dictjy("GE_SUPPLY_GYSLX",data.get("gyslx").toString()) == false) {
						sb.append("第 " + (i + 9) + " 行供应商类型不正确");
						break;
					} 
				}
				
				//物资类型
				if (SrmCommonBean.isEmpty(data.get("wzlx"))) {
					sb.append("第 " + (i + 9) + " 行物资类型为空");
					break;
				} else {
					if (FormalSupplyManagerBean.dictjy("GE_SUPPLY_WZLX",data.get("wzlx").toString()) == false) {
						sb.append("第 " + (i + 9) + " 行物资类型不正确");
						break;
					} 
				}
				
//				物资类别
				if (SrmCommonBean.isEmpty(data.get("wzlb"))) {
					sb.append("第 " + (i + 9) + " 行物资类别为空");
					break;
				} else {
					if (FormalSupplyManagerBean.dictjy("GE_SUPPLY_WZLB",data.get("wzlb").toString()) == false) {
						sb.append("第 " + (i + 9) + " 行物资类别不正确");
						break;
					} 
				}

				// 联系电话
				if (SrmCommonBean.isEmpty(data.get("gyslxdh"))) {
					sb.append("第 " + (i + 9) + " 行供应商联系电话为空");
					break;
				}
                // 经营单元
				if (SrmCommonBean.isEmpty(data.get("jydy"))) {
					sb.append("第 " + (i + 9) + " 行经营单元为空");
					break;
				}
                // 主供产品
				if (SrmCommonBean.isEmpty(data.get("zgcp"))) {
					sb.append("第 " + (i + 9) + " 行主供产品为空");
					break;
				}
               // 供应商详细地址
				if (SrmCommonBean.isEmpty(data.get("gysdz"))) {
					sb.append("第 " + (i + 9) + " 行供应商详细地址为空");
					break;
				}
			}
		}

		if (null == sb.toString() || "".equals(sb.toString())) {// 无错误则保存
			this.saveGenlHgSupplyfb(datas);
			sb.append("保存了" + datas.length + "条数据!");
		}
		return sb.toString();
	}

	public void saveGenlHgSupplyfb(DataObject[] datas) throws BusinessException {
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
			for (int i = 0; i < datas.length; i++) {
				GenlSupplyHgsupply hgsupply = new GenlSupplyHgsupplyImpl();
				hgsupply.setLifnr(datas[i].getString("lifnr"));
				hgsupply.setEkorg(datas[i].getString("ekorg"));
				hgsupply.setYearr(datas[i].getString("yearr"));
				hgsupply.setJydy(datas[i].getString("jydy"));
				hgsupply.setGyslx(datas[i].getString("gyslx"));
				hgsupply.setZgcp(datas[i].getString("zgcp"));
				hgsupply.setWzlx(datas[i].getString("wzlx"));
				hgsupply.setWzlb(datas[i].getString("wzlb"));
				hgsupply.setGysdz(datas[i].getString("gysdz"));
				hgsupply.setGyslxr(datas[i].getString("gyslxr"));
				hgsupply.setGyslxdh(datas[i].getString("gyslxdh"));
				hgsupply.setText1(datas[i].getString("text1"));
				hgsupply.setText2(datas[i].getString("text2"));
				hgsupply.setCreatetime(Common.getCurrentTime());
				hgsupply.setCreateuserid(Common.getCurrentUserId());
				this.formalSupplyManagerDao.saveEntity(hgsupply);

			}
		} catch (Exception e) {
			SrmLog.error("保存绩效数据异常!", e);
			throw new BusinessException("保存绩效数据异常!", e.getMessage());
		}

	}
	public static boolean isValidDatea(String sDate) {
		String datePattern1 = "\\d{4}";
		String datePattern2 = "^((\\d{2}(([02468][048])|([13579][26]))"
				+ "[\\-\\/\\s]?((((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|"
				+ "(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?"
				+ "((0?[1-9])|([1-2][0-9])))))|(\\d{2}(([02468][1235679])|([13579][01345789]))[\\-\\/\\s]?("
				+ "(((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?"
				+ "((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))";
		if ((sDate != null)) {
			Pattern pattern = Pattern.compile(datePattern1);
			Matcher match = pattern.matcher(sDate);
				return match.matches();
		}
		return false;
	}
	@SuppressWarnings("unchecked")
	public static boolean dictjy(String a,String b) throws BusinessException {
		Map condition = new HashMap();
		condition.put("dicttypeid", a);
		condition.put("dictname", b);
		try{
		DataObject[] cool = formalSupplyManagerDao.querydictjy(condition);
		if(null != cool && cool.length > 0){
			return true;
		}else{
			return false;
		}
		} catch (Exception e) {
			SrmLog.error("保存绩效数据异常!", e);
			throw new BusinessException("保存绩效数据异常!", e.getMessage());
		}	
	}

	public FormalSupplyManagerDao getFormalSupplyManagerDao() {
		return formalSupplyManagerDao;
	}

	public void setFormalSupplyManagerDao(
			FormalSupplyManagerDao formalSupplyManagerDao) {
		this.formalSupplyManagerDao = formalSupplyManagerDao;
	}

}
