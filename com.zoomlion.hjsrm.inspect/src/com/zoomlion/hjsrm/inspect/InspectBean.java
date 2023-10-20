package com.zoomlion.hjsrm.inspect;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.eos.das.entity.DASManager;
import com.eos.das.entity.ExpressionHelper;
import com.eos.das.entity.IDASCriteria;
import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWtqd;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectLbwh;
import com.zoomlion.hjsrm.pub.busi.common.SrmCommonBean;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNote;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfa1;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl;
import com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectLbwhImpl;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz;
import com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjbzImpl;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectCjdetail;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectCjnote;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteDetail;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteDetailImpl;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjdetail;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyNote;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWglljyNote;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWglljyDetail;

import commonj.sdo.DataObject;

public class InspectBean extends BaseBean {
	private InspectDao inspectDao;

	/**
	 * 方法描述: 查询质检问题维护
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectwtwh(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.inspectDao.queryinspectwtwh(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询质检问题维护异常!", e);
			throw new BusinessException("查询质检问题维护异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 新增质检问题维护
	 * 
	 * @author liuxin
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addInspectwtqd(GenlInspectWtqd zjwtwh) throws BusinessException {
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_INSPECT_WTQD");
		String t = String.valueOf(nextSeq);
		int a = t.length();
		if (a < 5) {
			for (int i = a; i < 4; i++) {
				t = "0" + t;
			}
		}
		String love = "ZJGZ" + t;
		try {
			Map condition = new HashMap();
			condition.put("zjwtms", zjwtwh.getZjwtms());
			DataObject[] cool = this.inspectDao.queryinspectwtwh2(condition);
			if (cool == null || cool.length == 0) {
				zjwtwh.setZjwtid(love);
				zjwtwh.setTranu(Common.getCurrentUserId());
				zjwtwh.setTrant(Common.getCurrentTime());
				this.inspectDao.saveEntity(zjwtwh);
			} else {
				throw new BusinessException("问题描述有重复或者数据异常!", "问题描述有重复或者数据异常!");
			}
		} catch (Exception e) {
			SrmLog.error("问题描述有重复或者数据异常!", e);
			throw new BusinessException("问题描述有重复或者数据异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 新增质检类别维护
	 * 
	 * @author liuxin
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addInspectlbwh(GenlInspectLbwh zjlbwh) throws BusinessException {
		try {
			Map condition = new HashMap();
			condition.put("matnr", zjlbwh.getMatnr());
			condition.put("lifnr", zjlbwh.getLifnr());
			DataObject[] cool = this.inspectDao.queryinspectlbwhyz(condition);
			if (cool == null || cool.length == 0) {
				zjlbwh.setTranu(Common.getCurrentUserId());
				zjlbwh.setTrant(Common.getCurrentTime());
				this.inspectDao.saveEntity(zjlbwh);
			} else {
				throw new BusinessException("新增的物料编码和供应商的组合不唯一!",
						"新增的物料编码和供应商的组合不唯一!");
			}
		} catch (Exception e) {
			SrmLog.error("新增的物料编码和供应商的组合不唯一!", e);
			throw new BusinessException("新增的物料编码和供应商的组合不唯一!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存质检类别维护
	 * 
	 * @author liuxin
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void saveInspectlbwh(GenlInspectLbwh zjlbwh)
			throws BusinessException {
		try {
			zjlbwh.setTranu(Common.getCurrentUserId());
			zjlbwh.setTrant(Common.getCurrentTime());
			this.inspectDao.saveEntity(zjlbwh);
		} catch (Exception e) {
			SrmLog.error("保存质检类别维护异常!", e);
			throw new BusinessException("保存质检类别维护异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询质检类别表单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectlbwh(Map paramObj, PageCond pageCond)
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
			return this.inspectDao.queryinspectlbwh(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询类别维护异常!", e);
			throw new BusinessException("查询类别维护异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询质检记录抬头表
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectcjqjrecord(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (!"".equals(lifnr)) {
				paramObj.put("lifnrsup", lifnr);
			}
			return this.inspectDao.queryinspectcjqjrecord(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询类别维护异常!", e);
			throw new BusinessException("查询类别维护异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询无质检类别数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectnotzjlb(Map paramObj, PageCond pageCond)
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
			return this.inspectDao.queryinspectnotzjlb(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询无质检类别数据异常!", e);
			throw new BusinessException("查询无质检类别数据异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询无质检类别数据导出
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectnotzjlbdaochu(Map paramObj)
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
			return this.inspectDao.queryinspectnotzjlbdaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询无质检类别数据异常!", e);
			throw new BusinessException("查询无质检类别数据异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 获取抽检记录明细
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getinspectzjcjrecordmx(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.getinspectzjcjrecordmx(paramObj);
		} catch (Exception e) {
			SrmLog.error("获取抽检记录明细异常!", e);
			throw new BusinessException("获取抽检记录明细异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 获取全检记录明细
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getinspectzjqjrecordmx(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.getinspectzjqjrecordmx(paramObj);
		} catch (Exception e) {
			SrmLog.error("获取全检记录明细异常!", e);
			throw new BusinessException("获取全检记录明细异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询全检标准表单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectqjbz(Map paramObj, PageCond pageCond)
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
			return this.inspectDao.queryinspectqjzb(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询全检标准异常!", e);
			throw new BusinessException("查询全检标准异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询全检标准明细
	 * 
	 * @author 刘鑫
	 * @param matnr
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryinspectqjbzmx(String matnr, String werks)
			throws BusinessException {
		if (matnr == null) {
			return null;
		}
		DataObject[] ret;
		Map condition = new HashMap();
		condition.put("matnr", matnr);
		condition.put("werks", werks);
		try {
			ret = this.inspectDao.queryinspectqjbzmx(condition);
		} catch (Exception e) {
			SrmLog.error("查询全检标准明细!", e);
			throw new BusinessException("查询全检标准明细!", e.getMessage());
		}
		for (DataObject temp : ret) {
			temp.setString("jyxm_old", temp.getString("jyxm"));
		}
		return ret;
	}

	/**
	 * 方法描述: 保存全检标准明细
	 * 
	 * @author 刘鑫
	 * @return
	 * @throws BusinessException
	 * @return boolean
	 */
	@SuppressWarnings("unchecked")
	public boolean saveInspectqjbzmx(GenlInspectQjbz[] qjbzmx)
			throws BusinessException {
		try {
			for (GenlInspectQjbz temp : qjbzmx) {
				if (temp.getString("jyxm_old") == null
						|| temp.getString("jyxm_old").equals("")) {
					temp.setTranu(Common.getCurrentUserId());
					temp.setTrant(Common.getCurrentTime());
					inspectDao.saveEntity(temp);
				} else {
					// update
					GenlInspectQjbz qry = GenlInspectQjbz.FACTORY.create();
					qry.setMatnr(temp.getMatnr());
					qry.setJyxm(temp.getString("jyxm_old"));
					qry.setWerks(temp.getWerks());// heqj
					qry.setText(temp.getText());// heqj
					qry.setJybz(temp.getJybz());// heqj
					qry.setTranu(Common.getCurrentUserId());
					qry.setTrant(Common.getCurrentTime());
					// 添加数据归属查询条件定位修改的记录。
					inspectDao.saveEntity(qry);
				}
			}
		} catch (Exception e) {
			SrmLog.error("保存全检标准明细异常！", e);
			throw new BusinessException("保存全检标准明细异常！", e.getMessage());
		}
		// 如果为空 则认为是新增
		return true;
	}

	/**
	 * 方法描述: 删除全检标准明细
	 * 
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return void
	 */
	public void deleteInspectqjzbmx(GenlInspectQjbz[] qjbzmx)
			throws BusinessException {
		try {
			this.inspectDao.deleteEntityBatch(qjbzmx);
		} catch (Exception e) {
			SrmLog.error("删除全检标准明细失败！", e);
			throw new BusinessException("删除全检标准明细失败！", e.getMessage());
		}
	}

	/**
	 * 方法描述: 修改质检问题维护
	 * 
	 * @author liuxin
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void saveInspectwtqd(GenlInspectWtqd zjwtwh)
			throws BusinessException {
		try {
			zjwtwh.setTranu(Common.getCurrentUserId());
			zjwtwh.setTrant(Common.getCurrentTime());
			this.inspectDao.saveEntity(zjwtwh);
		} catch (Exception e) {
			SrmLog.error("修改质检问题异常!", e);
			throw new BusinessException("修改质检问题异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除质检问题清单
	 * 
	 * @author 刘鑫
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	public void delInspectwtqd(GenlInspectWtqd[] cool) throws BusinessException {
		try {
			for (int i = 0; i < cool.length; i++) {
				this.inspectDao.expandEntity(cool[i]);
				cool[i].setStatu("X");
				this.inspectDao.saveEntity(cool[i]);
			}
		} catch (Exception e) {
			SrmLog.error("删除质检问题异常!", e);
			throw new BusinessException("删除质检问题异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 加载质检问题维护，用于修改
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public GenlInspectWtqd loadInspectwtwh(GenlInspectWtqd zjwtwh)
			throws BusinessException {
		try {
			this.inspectDao.expandEntity(zjwtwh);
		} catch (Exception e) {
			SrmLog.error("质检问题维护加载异常!", e);
			throw new BusinessException("质检问题维护加载异常!", e.getMessage());
		}
		return zjwtwh;
	}

	/**
	 * 方法描述: 加载质检类别维护，用于修改
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public GenlInspectLbwh loadInspectlbwh(GenlInspectLbwh zjlbwh)
			throws BusinessException {
		try {
			this.inspectDao.expandEntity(zjlbwh);
		} catch (Exception e) {
			SrmLog.error("质检类别维护加载异常!", e);
			throw new BusinessException("质检类别维护加载异常!", e.getMessage());
		}
		return zjlbwh;
	}

	/**
	 * 方法描述: 加载抽检暂存记录表
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public GenlInspectCjnote loadcjzcrecordlbwh(GenlInspectCjnote cjzcrecord)
			throws BusinessException {
		try {
			this.inspectDao.expandEntity(cjzcrecord);
		} catch (Exception e) {
			SrmLog.error("暂存抽检加载异常!", e);
			throw new BusinessException("暂存抽检加载异常!", e.getMessage());
		}
		return cjzcrecord;
	}

	/**
	 * 方法描述: 加载全检暂存记录表
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public GenlInspectQjnote loadqjzcrecordlbwh(GenlInspectQjnote qjzcrecord)
			throws BusinessException {
		try {
			this.inspectDao.expandEntity(qjzcrecord);
		} catch (Exception e) {
			SrmLog.error("暂存全检加载异常!", e);
			throw new BusinessException("暂存全检加载异常!", e.getMessage());
		}
		return qjzcrecord;
	}

	/**
	 * 方法描述: 删除质检类别维护数据
	 * 
	 * @author 刘鑫
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void delInspectlbwh(GenlInspectLbwh[] cool) throws BusinessException {
		try {
			for (int i = 0; i < cool.length; i++) {
				Map condition = new HashMap();
				condition.put("matnr", cool[i].getString("matnr"));
				condition.put("lifnr", cool[i].getString("lifnr"));
				this.inspectDao.deleteInspectlbwh(condition);
			}
		} catch (Exception e) {
			SrmLog.error("删除质检类别维护数据异常!", e);
			throw new BusinessException("删除质检类别维护数据异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除抽检质检明细表中的数据
	 * 
	 * @author 刘鑫
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void delInspectcjdetail(Map condition) throws BusinessException {
		try {
			this.inspectDao.delInspectcjdetail(condition);
		} catch (Exception e) {
			SrmLog.error("删除抽检质检明细表异常!", e);
			throw new BusinessException("删除抽检质检明细表异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除全检质检明细表中的数据
	 * 
	 * @author 刘鑫
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void delInspectqjdetail(Map condition) throws BusinessException {
		try {
			this.inspectDao.delInspectqjdetail(condition);
		} catch (Exception e) {
			SrmLog.error("删除全检质检明细表异常!", e);
			throw new BusinessException("删除全检质检明细表异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除抽检、免检抬头和明细表中的数据
	 * 
	 * @author 刘鑫
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void delInspectcjnotedetail(Map condition) throws BusinessException {
		try {
			this.inspectDao.delInspectcjnote(condition);
			this.inspectDao.delInspectcjdetail1(condition);
			if (condition.get("zjlb").equals("免检")) {
				GenlPurchaseNoteDetail cool = new GenlPurchaseNoteDetailImpl();
				DataObject[] love = this.inspectDao
						.querypurchaenotedetail(condition);
				if (love.length > 0) {
					cool.setPkid(love[0].getString("PKID"));
					cool.setMjzt("3");
					this.inspectDao.saveEntity(cool);
				}
			}
		} catch (Exception e) {
			SrmLog.error("删除抽检质检抬头和明细表异常!", e);
			throw new BusinessException("删除抽检质检抬头和明细表异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除全检抬头和明细表中的数据
	 * 
	 * @author 刘鑫
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void delInspectqjnotedetail(Map condition) throws BusinessException {
		try {
			this.inspectDao.delInspectqjnote(condition);
			this.inspectDao.delInspectqjdetail1(condition);
		} catch (Exception e) {
			SrmLog.error("删除抽检质检抬头和明细表异常!", e);
			throw new BusinessException("删除抽检质检抬头和明细表异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 质检类别维护excel上传！
	 * 
	 * @author 刘鑫 下面全属于excel上传
	 * @param s
	 * @return
	 */

	public String uploadExcelinspect(DataObject[] datas)
			throws BusinessException {
		StringBuffer sb = new StringBuffer();
		if (null == datas || datas.length == 0) {
			sb.append("excel文件无数据");

		} else {

			for (int i = 0; i < datas.length; i++) {
				DataObject data = datas[i];
				// 公共判断部分
				if (SrmCommonBean.isEmpty(data.get("werks"))) {// 供应商编号为空
					sb.append("第 " + (i + 4) + " 行工厂号为空");
					break;
				}
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
							data.get("werks").toString());
					if (null == matnr) {
						sb.append("第 " + (i + 4) + " 行物料编号和对应的工厂不存在");
						break;
					} else {
						data.set("matnr", matnr);
					}
				}
				if (SrmCommonBean.isEmpty(data.get("zjlb"))) {// 供应商编号为空
					sb.append("第 " + (i + 4) + " 行质检类别为空");
					break;
				} else {
					if (!(data.get("zjlb").toString()).equals("全检")
							&& !(data.get("zjlb").toString()).equals("免检")
							&& !(data.get("zjlb").toString()).equals("抽检")) {
						sb.append("第 " + (i + 4) + " 行质检类别输入不正确");
						break;
					}
				}

			}
		}

		if (null == sb.toString() || "".equals(sb.toString())) {// 无错误则保存
			this.saveInspectimportlbwh(datas);
			sb.append("保存了" + datas.length + "条数据");
		}
		return sb.toString();
	}

	public void saveInspectimportlbwh(DataObject[] datas)
			throws BusinessException {
		try {

			for (int i = 0; i < datas.length; i++) {
				GenlInspectLbwh zjlbwh = new GenlInspectLbwhImpl();

				zjlbwh.setWerks(datas[i].getString("werks"));
				zjlbwh.setMatnr(datas[i].getString("matnr"));
				zjlbwh.setLifnr(datas[i].getString("lifnr"));
				zjlbwh.setZjlb(datas[i].getString("zjlb"));
				zjlbwh.setTrant(Common.getCurrentTime());
				zjlbwh.setTranu(Common.getCurrentUserId());
				this.inspectDao.saveEntity(zjlbwh);

			}
		} catch (Exception e) {
			SrmLog.error("保存数据异常!", e);
			throw new BusinessException("保存数据异常!", e.getMessage());
		}

	}

	public String lifnr(String s) {
		int l = 10 - s.length();
		for (int i = 0; i < l; i++) {
			s = "0" + s;
		}
		BaseSupplyLfa1 template = new BaseSupplyLfa1Impl();
		template.setLifnr(s);
		BaseSupplyLfa1[] supply = this.inspectDao.queryEntitiesByTemplate(
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
		BaseMaterialMarc[] cool = this.inspectDao.queryEntitiesByTemplate(
				BaseMaterialMarc.class, templatea);
		if (null != cool && cool.length > 0) {
			return cool[0].getMatnr();
		}
		return null;
	}

	/**
	 * 方法描述: 全检标准维护excel上传！
	 * 
	 * @author 刘鑫 下面全属于excel上传
	 * @param s
	 * @return
	 */

	public String uploadExcelinspectqjbz(DataObject[] datas)
			throws BusinessException {
		StringBuffer sb = new StringBuffer();
		if (null == datas || datas.length == 0) {
			sb.append("excel文件无数据");

		} else {

			for (int i = 0; i < datas.length; i++) {
				DataObject data = datas[i];
				// 公共判断部分
				if (SrmCommonBean.isEmpty(data.get("werks"))) {// 供应商编号为空
					sb.append("第 " + (i + 4) + " 行工厂号为空");
					break;
				}
				// 物料编码
				if (SrmCommonBean.isEmpty(data.get("matnr"))) {// 供应商编号为空
					sb.append("第 " + (i + 4) + " 行物料编号为空");
					break;
				} else {
					if (!(data.get("matnr").toString()).equals("0000")) {
						String matnr = this.matnr(data.get("matnr").toString(),
								data.get("werks").toString());
						if (null == matnr) {
							sb.append("第 " + (i + 4) + " 行物料编号和对应的工厂不存在");
							break;
						} else {
							data.set("matnr", matnr);
						}
					}
				}
				if (SrmCommonBean.isEmpty(data.get("jyxm"))) {// 供应商编号为空
					sb.append("第 " + (i + 4) + " 行检验项目为空");
					break;
				}
			}
		}
		if (null == sb.toString() || "".equals(sb.toString())) {// 无错误则保存
			this.saveInspectimportqjbz(datas);
			sb.append("保存了" + datas.length + "条数据");
		}
		return sb.toString();
	}

	public void saveInspectimportqjbz(DataObject[] datas)
			throws BusinessException {
		try {

			for (int i = 0; i < datas.length; i++) {
				GenlInspectQjbz zjqjbz = new GenlInspectQjbzImpl();
				zjqjbz.setWerks(datas[i].getString("werks"));
				zjqjbz.setMatnr(datas[i].getString("matnr"));
				zjqjbz.setJyxm(datas[i].getString("jyxm"));
				zjqjbz.setJybz(datas[i].getString("jybz"));
				zjqjbz.setText(datas[i].getString("text"));
				zjqjbz.setTrant(Common.getCurrentTime());
				zjqjbz.setTranu(Common.getCurrentUserId());
				this.inspectDao.saveEntity(zjqjbz);

			}
		} catch (Exception e) {
			SrmLog.error("保存数据异常!", e);
			throw new BusinessException("保存数据异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询质检记录信息
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectrc(DataObject entity, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				if (entity.getString("zasnh") != null
						&& !entity.getString("zasnh").equals("")) {
					condition.put("zasnh", entity.getString("zasnh"));
				}
			} catch (Exception e) {
				SrmLog.error("质检记录数据查询异常!", e);
				throw new BusinessException("质检记录数据查询异常!", e.getMessage());
			}
			return inspectDao.queryInspectrc(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("质检记录数据查询异常!", e);
			throw new BusinessException("质检记录数据查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 获取质检记录抬头
	 * 
	 * @author 刘鑫
	 * @param kcglkcgl
	 * @throws BusinessException
	 * @return GenlPurchaseNote
	 */
	@SuppressWarnings("unchecked")
	public GenlPurchaseNote getInspectrc(GenlPurchaseNote kcglkcgl)
			throws BusinessException {
		GenlPurchaseNote love = new GenlPurchaseNoteImpl();
		if (kcglkcgl.getZasnh() != null && !kcglkcgl.getZasnh().equals("")) {
			try {
				this.inspectDao.expandEntity(kcglkcgl);
				IDASCriteria dasCriteria = DASManager
						.createCriteria(GenlPurchaseNote.class.getName());
				dasCriteria.add(ExpressionHelper.eq("zasnh", kcglkcgl
						.getZasnh()));
				GenlPurchaseNote[] aos = this.inspectDao
						.queryEntitiesByCriteriaEntity(GenlPurchaseNote.class,
								dasCriteria);
				int t = aos.length;
				for (int i = 0; i < t; i++) {
					// vfor.set("lifnr", aos[i].getLifnr());

					love = aos[0];
				}
			} catch (Exception e) {
				SrmLog.error("获取质检记录抬头异常!", e);
				throw new BusinessException("获取质检记录抬头异常!", e.getMessage());
			}
		}
		return love;
	}

	public String newcjInspect() throws BusinessException {
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_INSPECT_CJNOTE");
		String t = String.valueOf(nextSeq);
		int a = t.length();
		if (a < 9) {
			for (int i = a; i < 10; i++) {
				t = "0" + t;
			}
		}
		return "CJ" + t;
	}

	public String newqjInspect() throws BusinessException {
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_INSPECT_QJNOTE");
		String t = String.valueOf(nextSeq);
		int a = t.length();
		if (a < 9) {
			for (int i = a; i < 10; i++) {
				t = "0" + t;
			}
		}
		return "QJ" + t;
	}

	/**
	 * 方法描述: 保存抽检质检抬头和详细信息
	 * 
	 * @author 刘鑫
	 * @param linshi
	 * @param gdata
	 * @param ttel
	 * @param pageCond
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addInspectcjnotedetail(GenlInspectCjnote note,
			GenlInspectCjdetail[] detail) throws BusinessException {
		if (note.getWltm() != null && !note.getWltm().equals("")) {
			String t = note.getWltm();
			String[] temp = t.split("-");
			if (!temp[0].equals(note.getMatnr())) {
				throw new BusinessException("您输入的物料条码不正确!", "您输入的物料条码不正确!");
			}
		}
		try {
			if (note.getJgpd().equals("2")) {
				note.setKrksl("0");
			}
			note.setTranu(Common.getCurrentUserId());
			note.setTrant(Common.getCurrentTime());
			this.inspectDao.saveEntity(note);
			for (int i = 0; i < detail.length; i++) {
				if (detail[i].getPkid() == null) {
					this.inspectDao.getPrimaryKey(detail[i]);
				}
				detail[i].setCjrecordid(note.getCjrecordid());
				detail[i].setTranu(Common.getCurrentUserId());
				detail[i].setTrant(Common.getCurrentTime());
				this.inspectDao.saveEntity(detail[i]);
			}

		} catch (Exception e) {
			SrmLog.error("抽检记录表生成或者修改异常!", e);
			throw new BusinessException("抽检记录表生成或者修改异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 解锁抽检保存记录！
	 * 
	 * @author 刘鑫
	 * @param note
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void jiesuocjbcrecord(GenlInspectCjnote note)
			throws BusinessException {
		try {
			note.setTranu(Common.getCurrentUserId());
			note.setTrant(Common.getCurrentTime());
			this.inspectDao.saveEntity(note);
		} catch (Exception e) {
			SrmLog.error("抽检记录表解锁异常!", e);
			throw new BusinessException("抽检记录表解锁异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 解锁全检保存记录！
	 * 
	 * @author 刘鑫
	 * @param note
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void jiesuoqjbcrecord(GenlInspectQjnote note)
			throws BusinessException {
		try {
			note.setTranu(Common.getCurrentUserId());
			note.setTrant(Common.getCurrentTime());
			this.inspectDao.saveEntity(note);
		} catch (Exception e) {
			SrmLog.error("全检记录表解锁异常!", e);
			throw new BusinessException("全检记录表解锁异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 新增全检质检抬头和详细信息
	 * 
	 * @author 刘鑫
	 * @param note
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addInspectqjnotedetail(GenlInspectQjnote note,
			GenlInspectQjdetail[] detail) throws BusinessException {
		if (note.getWltm() != null && !note.getWltm().equals("")) {
			String t = note.getWltm();
			String[] temp = t.split("-");
			if (!temp[0].equals(note.getMatnr())) {
				throw new BusinessException("您输入的物料条码不正确!", "您输入的物料条码不正确!");
			}
		}
		try {
			Map condition = new HashMap();
			condition.put("wltm", note.getWltm());
			DataObject[] cool = this.inspectDao.queryinspectwltmyz(condition);
			if (cool == null || cool.length == 0) {
				note.setTranu(Common.getCurrentUserId());
				note.setTrant(Common.getCurrentTime());
				this.inspectDao.saveEntity(note);
				for (int i = 0; i < detail.length; i++) {
					this.inspectDao.getPrimaryKey(detail[i]);
					detail[i].setQjrecordid(note.getQjrecordid());
					detail[i].setTranu(Common.getCurrentUserId());
					detail[i].setTrant(Common.getCurrentTime());
					this.inspectDao.saveEntity(detail[i]);
				}
			} else {
				throw new BusinessException("该物料条码已经存在或数据异常!",
						"该物料条码已经存在或数据异常!");
			}
		} catch (Exception e) {
			SrmLog.error("该物料条码已经存在或数据异常!", e);
			throw new BusinessException("该物料条码已经存在或数据异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存全检质检抬头和详细信息
	 * 
	 * @author 刘鑫
	 * @param linshi
	 * @param gdata
	 * @param ttel
	 * @param pageCond
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void saveInspectqjnotedetail(GenlInspectQjnote note,
			GenlInspectQjdetail[] detail) throws BusinessException {
		if (note.getWltm() != null && !note.getWltm().equals("")) {
			String t = note.getWltm();
			String[] temp = t.split("-");
			if (!temp[0].equals(note.getMatnr())) {
				throw new BusinessException("您输入的物料条码不正确!", "您输入的物料条码不正确!");
			}
		}
		try {
			note.setTranu(Common.getCurrentUserId());
			note.setTrant(Common.getCurrentTime());
			this.inspectDao.saveEntity(note);
			for (int i = 0; i < detail.length; i++) {
				if (detail[i].getPkid() == null) {
					this.inspectDao.getPrimaryKey(detail[i]);
				}
				detail[i].setQjrecordid(note.getQjrecordid());
				detail[i].setTranu(Common.getCurrentUserId());
				detail[i].setTrant(Common.getCurrentTime());
				this.inspectDao.saveEntity(detail[i]);
			}
		} catch (Exception e) {
			SrmLog.error("全记录表保存异常!", e);
			throw new BusinessException("全记录表保存异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存免检的质检状态1
	 * 
	 * @author liuxin
	 * @param  Bnote
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savemjInspectzt1(GenlPurchaseNoteDetail Bnote)
			throws BusinessException {
		try {
			Bnote.setMjzt("1");
			this.inspectDao.saveEntity(Bnote);
		} catch (Exception e) {
			SrmLog.error("保存免检状态异常!", e);
			throw new BusinessException("保存免检状态异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存免检的质检状态2
	 * 
	 * @author liuxin
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savemjInspectzt2(GenlPurchaseNoteDetail Bnote)
			throws BusinessException {
		try {
			Bnote.setMjzt("2");
			this.inspectDao.saveEntity(Bnote);
		} catch (Exception e) {
			SrmLog.error("保存免检状态异常!", e);
			throw new BusinessException("保存免检状态异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存免检的质检状态xx2
	 * 
	 * @author liuxin
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savemjInspectztxx2(GenlPurchaseNoteDetail Bnote)
			throws BusinessException {
		Map condition = new HashMap();
		try {
			condition.put("zasnh", Bnote.getZasnh());
			condition.put("zasnp", Bnote.getZasnp());
			DataObject[] cool = this.inspectDao
					.querypurchaenotedetail(condition);
			if (cool.length > 0) {
				Bnote.setPkid(cool[0].getString("PKID"));
				Bnote.setMjzt("2");
				this.inspectDao.saveEntity(Bnote);
			}
		} catch (Exception e) {
			SrmLog.error("保存免检状态异常!", e);
			throw new BusinessException("保存免检状态异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存免检的质检状态3
	 * 
	 * @author liuxin
	 * @param
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void savemjInspectzt3(GenlPurchaseNoteDetail Bnote)
			throws BusinessException {
		try {
			Bnote.setMjzt("3");
			this.inspectDao.saveEntity(Bnote);
		} catch (Exception e) {
			SrmLog.error("保存免检状态异常!", e);
			throw new BusinessException("保存免检状态异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 查询质检全检标准(用于全检维护选择)
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectqjzbxz(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			condition.put("matnr", paramObj.get("matnr"));
			condition.put("werks", paramObj.get("werks"));
			DataObject[] cool = this.inspectDao.queryinspectqjbzmx(condition);
			if (cool == null || cool.length == 0) {
				paramObj.put("matnr", "0000");
				paramObj.put("werks", "0000");
			}
			return this.inspectDao.queryinspectqjbzxz(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询质检问题维护异常!", e);
			throw new BusinessException("查询质检问题维护异常!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询质检过程中送货单行号是否入库数据异常信息！
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public String inspectshrkshujuyz(DataObject[] entity)
			throws BusinessException {
		Map condition = new HashMap();
		String v = "0";
		try {
			for (int i = 0; i < entity.length; i++) {
				condition.put("zasnh", entity[i].getString("zasnh"));
				condition.put("zasnp", entity[i].getString("zasnp"));
				DataObject[] love = this.inspectDao
						.inspectshrkshujuyz(condition);
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
	 * 方法描述: 获取物料条码查询信息
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryinspectwltmsb(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			// if (paramObj.get("wltm") != null &&
			// !paramObj.get("wltm").equals("")){
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			DataObject[] cool = this.inspectDao.queryinspectwltmsb(paramObj,
					pageCond);
			if (cool == null || cool.length == 0) {
				String p = sdf.format(new Date());
				String n = p.substring(0, 4);
				String a = p.substring(0, 2);
				String t = paramObj.get("wltm").toString();
				String[] temp = t.split("-");
				String k = temp[1].substring(0, 10);
				paramObj.put("matnr", temp[0]);
				paramObj.put("lifnr", k);
				if (Long.valueOf(n) < 2020) {
					String f = temp[1].substring(10, 11);
					if (Long.valueOf(f) < 2) {
						String v = temp[1].substring(10, 16);
						String v1 = a + v;
						paramObj.put("createtime", v1);
					} else {
						String o = temp[1].substring(10, 18);
						paramObj.put("createtime", o);
					}
				} else {
					String b = temp[1].substring(10, 16);
					String b1 = a + b;
					paramObj.put("createtime", b1);
				}
				return this.inspectDao.queryinspectwltmsb2(paramObj, pageCond);
			} else {
				return cool;
			}

		} catch (Exception e) {
			SrmLog.error("请输入正确的物料条码!", e);
			throw new BusinessException("请输入正确的物料条码!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询质检外协来料检验记录表
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectwxlljynote(Map paramObj, PageCond pageCond)
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
			return this.inspectDao.queryinspectwxlljynote(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询质检外协来料检验记录表异常!", e);
			throw new BusinessException("查询质检外协来料检验记录表异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询质检外购来料检验记录表
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectwglljynote(Map paramObj, PageCond pageCond)
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
			return this.inspectDao.queryinspectwglljynote(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询质检外购来料检验记录表异常!", e);
			throw new BusinessException("查询质检外购来料检验记录表异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询质检三包退库记录表
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectsbtknote(Map paramObj, PageCond pageCond)
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
			return this.inspectDao.queryinspectsbtknote(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询质检三包退库记录表异常!", e);
			throw new BusinessException("查询质检三包退库记录表异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询质检外购来料检验记录表导出
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectwglljynotedaochu(Map paramObj)
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
			return this.inspectDao.queryinspectwglljynotedaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询质检外购来料检验记录表异常!", e);
			throw new BusinessException("查询质检外购来料检验记录表异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询质检三包退库记录表导出
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectsbtknotedaochu(Map paramObj)
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
			return this.inspectDao.queryInspectsbtknotedaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询质检三包退库记录表导出异常!", e);
			throw new BusinessException("查询质检三包退库记录表导出异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询质检外协来料检验记录表导出
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryInspectwxlljynotedaochu(Map paramObj)
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
			return this.inspectDao.queryinspectwxlljynotedaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("导出质检外协来料检验记录表异常!", e);
			throw new BusinessException("导出质检外协来料检验记录表异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询物料store
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querystorematnr(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.querystorematnr(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询物料store异常!", e);
			throw new BusinessException("查询物料store异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询物料store故障系统结构
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querystorematnrgzxt(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.querystorematnrgzxt(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询异常!", e);
			throw new BusinessException("查询异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询供应商store
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querystorelifnr(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.querystorelifnr(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询供应商store异常!", e);
			throw new BusinessException("查询供应商store异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询故障形式排序store
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querystoregzxspx(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.querystoregzxspx(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询故障形式排序store异常!", e);
			throw new BusinessException("查询故障形式排序store异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询质检类别store
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querystorezjlb(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.querystorezjlb(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询质检类别store异常!", e);
			throw new BusinessException("查询质检类别store异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询外购故障系统store
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querywggzxtstore(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.querywggzxtstore(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询外购故障系统store异常!", e);
			throw new BusinessException("查询外购故障系统store异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询外购故障结构store
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querywggzjgstore(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.querywggzjgstore(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询外购故障结构store异常!", e);
			throw new BusinessException("查询外购故障结构store异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询缺件类型store
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querystoreqjlx(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.querystoreqjlx(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询缺件类型store异常!", e);
			throw new BusinessException("查询缺件类型store异常!", e.getMessage());
		}

	}
	
	/**
	 * 方法描述: 查询问题属性store
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querystorewtsx(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.querystorewtsx(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询问题属性store异常!", e);
			throw new BusinessException("查询问题属性store异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 加载外协来料检验明细表
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadinspectwxlljydetail(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.loadinspectwxlljydetail(paramObj);
		} catch (Exception e) {
			SrmLog.error("加载外协来料检验明细表异常!", e);
			throw new BusinessException("加载外协来料检验明细表异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 加载外购来料检验明细表
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadinspectwglljydetail(Map paramObj)
			throws BusinessException {
		try {
			return this.inspectDao.loadinspectwglljydetail(paramObj);
		} catch (Exception e) {
			SrmLog.error("加载外购来料检验明细表异常!", e);
			throw new BusinessException("加载外购来料检验明细表异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 新增质检外协来料检验抬头和明细
	 * 
	 * @author 刘鑫
	 * @param linshi
	 * @param gdata
	 * @param ttel
	 * @param pageCond
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addInspectwxlljynotedetail(GenlInspectWxlljyNote note,
			GenlInspectWxlljyDetail[] detail) throws BusinessException {
		GenlInspectLbwh lbwh = new GenlInspectLbwhImpl();
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_INSPECT_WXLLJY");
		String t = String.valueOf(nextSeq);
		String wxllno = "WX" + t;
		try {
			  lbwh.setMatnr(note.get("matnr").toString());			 
			  lbwh.setZjlb(note.get("zjlb").toString());
			  lbwh.setWerks(note.get("werks").toString());
			  lbwh.setTranu(Common.getCurrentUserId());
			  lbwh.setTrant(Common.getCurrentTime());
			if(note.get("lifnrx") != null
						&& !note.get("lifnrx").toString().equals("") ){
				note.setLifnr(note.get("lifnrx").toString());
				lbwh.setLifnr(note.get("lifnrx").toString());
			}else{
				 lbwh.setLifnr(note.get("lifnr").toString());
			}
			    note.setWxllno(wxllno);
				note.setCreatetime(Common.getCurrentTime());
				note.setCreateuserid(Common.getCurrentUserId());				
				note.setModifytime(Common.getCurrentTime());
				note.setModifyuserid(Common.getCurrentUserId());
				this.inspectDao.saveEntity(note);
				this.inspectDao.saveEntity(lbwh);
				for (int i = 0; i < detail.length; i++) {
					this.inspectDao.getPrimaryKey(detail[i]);
					detail[i].setWxllno(wxllno);
					detail[i].setUpdatetime(Common.getCurrentTime());
					detail[i].setUpdateuserid(Common.getCurrentUserId());
					this.inspectDao.saveEntity(detail[i]);
				}
		} catch (Exception e) {
			SrmLog.error("新增质检外协来料检验抬头和明细异常!", e);
			throw new BusinessException("新增质检外协来料检验抬头和明细异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 新增质检外购来料检验抬头
	 * 
	 * @author 刘鑫
	 * @param GenlInspectWglljyNote
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addInspectwglljynote(GenlInspectWglljyNote note,GenlInspectWglljyDetail[] detail) throws BusinessException {
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_INSPECT_WGLLJY");
		String t = String.valueOf(nextSeq);
		String wgllno = "WG" + t;
		try {
			if(note.get("lifnrx") != null
						&& !note.get("lifnrx").toString().equals("") ){
				note.setLifnr(note.get("lifnrx").toString());
			}
			    note.setWgllno(wgllno);
				note.setCreatetime(Common.getCurrentTime());
				note.setCreateuserid(Common.getCurrentUserId());				
				note.setModifytime(Common.getCurrentTime());
				note.setModifyuserid(Common.getCurrentUserId());
				this.inspectDao.saveEntity(note);
				for (int i = 0; i < detail.length; i++) {
					this.inspectDao.getPrimaryKey(detail[i]);
					detail[i].setWgllno(wgllno);
					detail[i].setUpdatetime(Common.getCurrentTime());
					detail[i].setUpdateuserid(Common.getCurrentUserId());
					this.inspectDao.saveEntity(detail[i]);
				}
		} catch (Exception e) {
			SrmLog.error("新增质检外购来料检验抬头异常!", e);
			throw new BusinessException("新增质检外购来料检验抬头异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 新增三包退库记录抬头
	 * 
	 * @author 刘鑫
	 * @param GenlInspectWglljyNote
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void addInspectsbtknote(GenlInspectSbtkNote note) throws BusinessException {
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_INSPECT_SBTK");
		String t = String.valueOf(nextSeq);
		String sbtkno = "ST" + t;
		try {
			if(note.get("lifnrx") != null
						&& !note.get("lifnrx").toString().equals("") ){
				note.setLifnr(note.get("lifnrx").toString());
			}
			    note.setSbtkno(sbtkno);
				note.setCreatetime(Common.getCurrentTime());
				note.setCreateuserid(Common.getCurrentUserId());				
				note.setModifytime(Common.getCurrentTime());
				note.setModifyuserid(Common.getCurrentUserId());
				this.inspectDao.saveEntity(note);
		} catch (Exception e) {
			SrmLog.error("新增三包退库记录抬头异常!", e);
			throw new BusinessException("新增三包退库记录抬头异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 保存质检外协来料检验抬头和明细
	 * 
	 * @author 刘鑫
	 * @param linshi
	 * @param gdata
	 * @param ttel
	 * @param pageCond
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void saveInspectwxlljynotedetail(GenlInspectWxlljyNote note,
			GenlInspectWxlljyDetail[] detail) throws BusinessException {
		GenlInspectLbwh lbwh = new GenlInspectLbwhImpl();
		Map condition = new HashMap();
		try {		
			  lbwh.setMatnr(note.get("matnr").toString());			 
			  lbwh.setZjlb(note.get("zjlb").toString());
			  lbwh.setWerks(note.get("werks").toString());
			  lbwh.setTranu(Common.getCurrentUserId());
			  lbwh.setTrant(Common.getCurrentTime());
			if(note.get("lifnrx") != null
						&& !note.get("lifnrx").toString().equals("") ){
				note.setLifnr(note.get("lifnrx").toString());
				lbwh.setLifnr(note.get("lifnrx").toString());
			}else{
				 lbwh.setLifnr(note.get("lifnr").toString());
			}
			    note.setWxllno(note.get("wxllno").toString());			
				note.setModifytime(Common.getCurrentTime());
				note.setModifyuserid(Common.getCurrentUserId());
				this.inspectDao.saveEntity(note);
				this.inspectDao.saveEntity(lbwh);
				condition.put("wxllno", note.get("wxllno").toString());
				this.inspectDao.delInspectwllldetail1(condition);
				for (int i = 0; i < detail.length; i++) {
					this.inspectDao.getPrimaryKey(detail[i]);
					detail[i].setWxllno(note.get("wxllno").toString());
					detail[i].setUpdatetime(Common.getCurrentTime());
					detail[i].setUpdateuserid(Common.getCurrentUserId());
					this.inspectDao.saveEntity(detail[i]);
				}
		} catch (Exception e) {
			SrmLog.error("修改质检外协来料检验抬头和明细异常!", e);
			throw new BusinessException("修改质检外协来料检验抬头和明细异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 保存质检外购来料检验抬头
	 * 
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void saveInspectwglljynote(GenlInspectWglljyNote note,
			GenlInspectWglljyDetail[] detail) throws BusinessException {
		Map condition = new HashMap();
		try {		
			if(note.get("lifnrx") != null
						&& !note.get("lifnrx").toString().equals("") ){
				note.setLifnr(note.get("lifnrx").toString());				
			}
			    note.setWgllno(note.get("wgllno").toString());				
				note.setModifytime(Common.getCurrentTime());
				note.setModifyuserid(Common.getCurrentUserId());
				this.inspectDao.saveEntity(note);
				condition.put("wgllno", note.get("wgllno").toString());
				this.inspectDao.delInspectwglldetail1(condition);
				for (int i = 0; i < detail.length; i++) {
					this.inspectDao.getPrimaryKey(detail[i]);
					detail[i].setWgllno(note.get("wgllno").toString());
					detail[i].setUpdatetime(Common.getCurrentTime());
					detail[i].setUpdateuserid(Common.getCurrentUserId());
					this.inspectDao.saveEntity(detail[i]);
				}
		} catch (Exception e) {
			SrmLog.error("保存质检外购来料检验抬头异常!", e);
			throw new BusinessException("保存质检外购来料检验抬头异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 保存三包退库记录抬头
	 * 
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void saveInspectsbtknote(GenlInspectSbtkNote note) throws BusinessException {

		try {		
			if(note.get("lifnrx") != null
						&& !note.get("lifnrx").toString().equals("") ){
				note.setLifnr(note.get("lifnrx").toString());				
			}
			    note.setSbtkno(note.get("sbtkno").toString());				
				note.setModifytime(Common.getCurrentTime());
				note.setModifyuserid(Common.getCurrentUserId());
				this.inspectDao.saveEntity(note);
		} catch (Exception e) {
			SrmLog.error("保存三包退库记录抬头异常!", e);
			throw new BusinessException("保存三包退库记录抬头异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 加载质检外协来料检验抬头
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public GenlInspectWxlljyNote loadinspectwxlljynote(GenlInspectWxlljyNote note)
			throws BusinessException {
		try {
			this.inspectDao.expandEntity(note);
		} catch (Exception e) {
			SrmLog.error("加载质检外协来料检验抬头异常!", e);
			throw new BusinessException("加载质检外协来料检验抬头异常!", e.getMessage());
		}
		return note;
	}
	/**
	 * 方法描述: 加载质检外购来料检验抬头
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public GenlInspectWglljyNote loadinspectwglljynote(GenlInspectWglljyNote note)
			throws BusinessException {
		try {
			this.inspectDao.expandEntity(note);
		} catch (Exception e) {
			SrmLog.error("加载质检外购来料检验抬头异常!", e);
			throw new BusinessException("加载质检外购来料检验抬头异常!", e.getMessage());
		}
		return note;
	}
	/**
	 * 方法描述: 加载质检三包退库抬头
	 * 
	 * @author 刘鑫
	 * @param
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public GenlInspectSbtkNote loadinspectsbtknote(GenlInspectSbtkNote note)
			throws BusinessException {
		try {
			this.inspectDao.expandEntity(note);
		} catch (Exception e) {
			SrmLog.error("加载质检三包退库抬头异常!", e);
			throw new BusinessException("加载质检三包退库抬头异常!", e.getMessage());
		}
		return note;
	}
	/**
	 * 方法描述: 删除外协来料检验抬头表
	 * 
	 * @author 刘鑫
	 * @param wxlljys
	 * @throws BusinessException
	 * @return void
	 */
	public void delWxlljynote(GenlInspectWxlljyNote[] wxlljys) throws BusinessException {
		try {
			for (int i = 0; i < wxlljys.length; i++) {
				this.inspectDao.expandEntity(wxlljys[i]);
				wxlljys[i].setStatu("X");
				this.inspectDao.saveEntity(wxlljys[i]);
			}
		} catch (Exception e) {
			SrmLog.error("删除外协来料检验抬头表异常!", e);
			throw new BusinessException("删除外协来料检验抬头表异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 删除外购来料检验抬头表
	 * 
	 * @author 刘鑫
	 * @param wxlljys
	 * @throws BusinessException
	 * @return void
	 */
	public void delWglljynote(GenlInspectWglljyNote[] wglljys) throws BusinessException {
		try {
			for (int i = 0; i < wglljys.length; i++) {
				this.inspectDao.expandEntity(wglljys[i]);
				wglljys[i].setStatu("X");
				this.inspectDao.saveEntity(wglljys[i]);
			}
		} catch (Exception e) {
			SrmLog.error("删除外协来料检验抬头表异常!", e);
			throw new BusinessException("删除外协来料检验抬头表异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 删除三包退库检验抬头表
	 * 
	 * @author 刘鑫
	 * @param sbtkjys
	 * @throws BusinessException
	 * @return void
	 */
	public void delSbtkjynote(GenlInspectSbtkNote[] sbtkjys) throws BusinessException {
		try {
			for (int i = 0; i < sbtkjys.length; i++) {
				this.inspectDao.expandEntity(sbtkjys[i]);
				sbtkjys[i].setStatu("X");
				this.inspectDao.saveEntity(sbtkjys[i]);
			}
		} catch (Exception e) {
			SrmLog.error(" 删除三包退库检验抬头表异常!", e);
			throw new BusinessException(" 删除三包退库检验抬头表异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 校验三包退库的出厂编号
	 * 
	 * @author 刘鑫
	 * @param 校验
	 * @throws BusinessException
	 * @return void
	 */
	public String querySbtkjyzatwrt(Map paramObj) throws BusinessException {
		try {
			DataObject[] cool =  this.inspectDao.querysbtkjyzatwrt(paramObj);
			if (cool == null || cool.length == 0) {
				return "0";
			}else{
				return "1";
			}
		} catch (Exception e) {
			SrmLog.error(" 校验三包退库出厂编号异常!", e);
			throw new BusinessException(" 校验三包退库出厂编号异常!", e.getMessage());
		}
	}
	
	public InspectDao getInspectDao() {
		return inspectDao;
	}

	public void setInspectDao(InspectDao inspectDao) {
		this.inspectDao = inspectDao;
	}
}
