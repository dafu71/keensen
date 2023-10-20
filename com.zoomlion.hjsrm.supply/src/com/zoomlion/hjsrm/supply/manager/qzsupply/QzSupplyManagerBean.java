package com.zoomlion.hjsrm.supply.manager.qzsupply;

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
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyData;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyTtel;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyLinshiImpl;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyTtelImpl;

import commonj.sdo.DataObject;

/**
 * 描述: 潜在供应商维护
 * 
 * @author 刘鑫
 */
public class QzSupplyManagerBean extends BaseBean {

	private QzSupplyManagerDao qzSupplyManagerDao;

	/**
	 * 方法描述: 加载潜在供应商界面中的tel
	 * 
	 * @author 刘鑫
	 * @param vfor
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] loadqzsupplysTel(Vqzsupplybase vfor, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				if (vfor.getLifnr() != null && !vfor.getLifnr().equals("")) {
					condition.put("lifnr", vfor.getLifnr());
				}
			} catch (Exception e) {
				SrmLog.error("潜在供应商加载联系人信息异常!", e);
				throw new BusinessException("潜在供应商加载联系人信息异常!", e.getMessage());
			}
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return qzSupplyManagerDao.querySupplyTel(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("潜在供应商加载联系人信息异常!", e);
			throw new BusinessException("潜在供应商加载联系人信息异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 获取潜在供应商界面中的tel
	 * 
	 * @author 刘鑫
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getQzsupplysTel(PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			return qzSupplyManagerDao.queryQzsupplyTel(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("潜在供应商新增加载异常!", e);
			throw new BusinessException("潜在供应商新增加载异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 保存潜在供应商信息
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
	public void saveQzSupplyData(GenlSupplyLinshi linshi, GenlSupplyData gdata,
			GenlSupplyTtel[] ttel) throws BusinessException {
		try {
			if (linshi.getName1().equals("")) {
			}
			if (linshi.getName1() != null && !linshi.getName1().equals("")) {
				if (gdata.getLifnr() != null && !gdata.getLifnr().equals("")) {
					gdata.setCreid(Common.getCurrentUserId());
					gdata.setCretm(Common.getCurrentTime());
					linshi.setCreid(Common.getCurrentUserId());
					linshi.setCretm(Common.getCurrentTime());
					this.qzSupplyManagerDao.saveEntity(linshi);
					this.qzSupplyManagerDao.saveqzSypplyinfo(gdata);
					for (int i = 0; i < ttel.length; i++) {
						GenlSupplyTtel saveData = new GenlSupplyTtelImpl();
						saveData = ttel[i];
						saveData.setLifnr(gdata.getLifnr());
						saveData.setCreid(Common.getCurrentUserId());
						saveData.setCretm(Common.getCurrentTime());
						this.qzSupplyManagerDao.saveqzSupplyTtel(saveData);
					}
				}
			} else {
				throw new BusinessException("请输入潜在供应商名称!", "请输入潜在供应商名称!");
			}

		} catch (Exception e) {
			SrmLog.error("修改潜在供应商信息异常或未录入必填项!", e);
			throw new BusinessException("修改潜在供应商信息异常或未录入必填项!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 获取拼接潜在供应商主键id
	 * 
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return String
	 */
	@SuppressWarnings("unchecked")
	public String newQzsupply() throws BusinessException {
		GenlSupplyLinshi qzsupply = new GenlSupplyLinshiImpl();
		this.qzSupplyManagerDao.getPrimaryKey(qzsupply);
		String k = qzsupply.getLifnr();
		int b = k.length();
		if (b < 8) {
			int c = 8 - b;
			for (int i = 0; i < c; i++) {
				k = "0" + k;
			}
		}
		String d = "QZ" + k;
		return d;
	}

	/**
	 * 方法描述: 查询潜在供应商信息
	 * 
	 * @param entity
	 * @param pageCond
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryQzSupplys(DataObject entity, PageCond pageCond)
			throws BusinessException {
		try {
			Map condition = new HashMap();
			try {
				if (entity.getString("lifnr") != null
						&& !entity.getString("lifnr").equals("")) {
					condition.put("lifnr", entity.getString("lifnr"));
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
				if (entity.getString("ltype") != null
						&& !entity.getString("ltype").equals("")) {
					condition.put("ltype", entity.getString("ltype"));
				}
				if (entity.getString("zzyyw") != null
						&& !entity.getString("zzyyw").equals("")) {
					condition.put("zzyyw", entity.getString("zzyyw"));
				}
			} catch (Exception e) {
				SrmLog.error("潜在供应商查询异常!", e);
				throw new BusinessException("潜在供应商查询异常!", e.getMessage());
			}
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return qzSupplyManagerDao.queryqzSupplyManager(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("潜在供应商查询异常!", e);
			throw new BusinessException("潜在供应商查询异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 加载潜在供应商信息
	 * 
	 * @param vfor
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return Vqzsupplybase
	 */
	@SuppressWarnings("unchecked")
	public Vqzsupplybase loadQzSupplyBaseinfo(Vqzsupplybase vfor)
			throws BusinessException {
		try {
			// this.formalSupplyManagerDao.expandEntity(vfor);
			IDASCriteria dasCriteria = DASManager
					.createCriteria(Vqzsupplybase.class.getName());
			dasCriteria.add(ExpressionHelper.eq("lifnr", vfor.getLifnr()));
			Vqzsupplybase[] aos = this.qzSupplyManagerDao
					.queryEntitiesByCriteriaEntity(Vqzsupplybase.class,
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
	 * 方法描述: 删除潜在供应商（修改删除标记）
	 * 
	 * @param qzsupplys
	 * @author 刘鑫
	 * @throws BusinessException
	 * @return void
	 */
	public void delQzsupply(GenlSupplyLinshi[] qzsupplys)
			throws BusinessException {
		try {
			for (int i = 0; i < qzsupplys.length; i++) {
				this.qzSupplyManagerDao.expandEntity(qzsupplys[i]);
				qzsupplys[i].setZstus("X");
				this.qzSupplyManagerDao.saveEntity(qzsupplys[i]);
			}
		} catch (Exception e) {
			SrmLog.error("公告删除异常!", e);
			throw new BusinessException("公告删除异常!", e.getMessage());
		}
	}

	public QzSupplyManagerDao getQzSupplyManagerDao() {
		return qzSupplyManagerDao;
	}

	public void setQzSupplyManagerDao(QzSupplyManagerDao qzSupplyManagerDao) {
		this.qzSupplyManagerDao = qzSupplyManagerDao;
	}

}
