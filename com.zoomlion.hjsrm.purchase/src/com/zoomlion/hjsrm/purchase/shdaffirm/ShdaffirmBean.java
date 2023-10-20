package com.zoomlion.hjsrm.purchase.shdaffirm;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNote;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteAffirm;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteAffirmImpl;

import commonj.sdo.DataObject;

public class ShdaffirmBean extends BaseBean {
	
	private ShdaffirmDao shdaffirmDao;
	
	/**
	 * 方法描述:查询待确认送货单(分页)
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryshdConfirm(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
					"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)) {
				paramObj.put("lifnr", lifnr);
			}
			return this.shdaffirmDao.queryshdConfirm(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询待确认送货单异常!", e);
			throw new BusinessException("查询待确认送货单异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 确认送货单验证
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public String shdaffirmyz(DataObject[] entity)
			throws BusinessException {
		Map condition = new HashMap();
		String k = "0";
		try {
			for (int i = 0; i < entity.length; i++) {
				condition.put("zasnh", entity[i].getString("zasnh"));
				DataObject[] cool = this.shdaffirmDao
						.queryshddelflag(condition);
				GenlPurchaseNote templatea = new GenlPurchaseNoteImpl();
				templatea.setZasnh(entity[i].getString("zasnh"));
				templatea.setStatus("N");
				GenlPurchaseNote[] love = this.shdaffirmDao.queryEntitiesByTemplate(
						GenlPurchaseNote.class, templatea);
				if(null != cool && cool.length > 0 && null != love && love.length > 0){
					if(null != entity[i].get("sfdpvn")){
					if(entity[i].getString("sfdpvn").equals("Y")){
				          DataObject[] cool2 = this.shdaffirmDao.queryvnwzyz(condition);
				          if(null != cool2 && cool2.length > 0){
				        	  if(cool2[0].getString("vnx").equals("0")){
				        		  k ="1";
				        	  }else{
				        		  k="0";
					        	  break;  
				        	  }
				          }else{
				        	  k="0";
				        	  break;
				          }
					}else{
					   k = "1";
					}
					}else{
						k = "1";	
					}
				}else{
					k="0";
					break;
				}
			}
			return k;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 确认送货单验证
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public String shdcxcxyz(DataObject[] entity)
			throws BusinessException {
		Map condition = new HashMap();
		String k = "0";
		try {
			for (int i = 0; i < entity.length; i++) {
				condition.put("zasnh", entity[i].getString("zasnh"));
				DataObject[] cool = this.shdaffirmDao
						.queryshddelflag(condition);
				GenlPurchaseNote templatea = new GenlPurchaseNoteImpl();
				templatea.setZasnh(entity[i].getString("zasnh"));
				templatea.setStatus("Y");
				GenlPurchaseNote[] love = this.shdaffirmDao.queryEntitiesByTemplate(
						GenlPurchaseNote.class, templatea);
				if(null != cool && cool.length > 0 && null != love && love.length > 0){	
					k = "1";
				}else{
					k="0";
					break;
				}
			}
			return k;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 撤销送货单验证
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public String shdcexiaoyz(DataObject[] entity)
			throws BusinessException {
		Map condition = new HashMap();
		String v = "0";
		try {
			for (int i = 0; i < entity.length; i++) {
				condition.put("zasnh", entity[i].getString("zasnh"));
				DataObject[] cool = this.shdaffirmDao
						.shdcexiaoyz(condition);
				if(cool.length > 0){
					v = "1";
					break;
				}else{
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
	 * 方法描述: 确认送货单操作
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void saveshdaffirm(DataObject[] entity)
			throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				GenlPurchaseNote love = new GenlPurchaseNoteImpl();
				love.setZasnh(entity[i].getString("zasnh"));
				love.setStatus(String.valueOf('Y'));
				// love.setZcdat(Common.getCurrentTime());
				this.shdaffirmDao.saveEntity(love);
				GenlPurchaseNoteAffirm cool = new GenlPurchaseNoteAffirmImpl();
				this.shdaffirmDao.getPrimaryKey(cool);
				cool.setZasnh(entity[i].getString("zasnh"));
				cool.setStatus(String.valueOf('Y'));
				cool.setUseid(Common.getCurrentUserId());
				cool.setUsename(Common.getCurrentUserObject().getUserName());
				cool.setTime(Common.getCurrentTime());
				// love.setZcdat(Common.getCurrentTime());
				this.shdaffirmDao.saveEntity(cool);
			}			
		} catch (Exception e) {
			SrmLog.error("数据异常请重新查询后再试!", e);
			throw new BusinessException("数据异常请重新查询后再试!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 撤销送货单操作
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void cxshdaffirm(DataObject[] entity)
			throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				GenlPurchaseNote love = new GenlPurchaseNoteImpl();
				love.setZasnh(entity[i].getString("zasnh"));
				love.setStatus(String.valueOf('N'));
				// love.setZcdat(Common.getCurrentTime());
				this.shdaffirmDao.saveEntity(love);
				GenlPurchaseNoteAffirm cool = new GenlPurchaseNoteAffirmImpl();
				this.shdaffirmDao.getPrimaryKey(cool);
				cool.setZasnh(entity[i].getString("zasnh"));
				cool.setStatus(String.valueOf('N'));
				cool.setUseid(Common.getCurrentUserId());
				cool.setUsename(Common.getCurrentUserObject().getUserName());
				cool.setTime(Common.getCurrentTime());
				// love.setZcdat(Common.getCurrentTime());
				this.shdaffirmDao.saveEntity(cool);
			}
		} catch (Exception e) {
			SrmLog.error("数据异常请重新查询后再试!", e);
			throw new BusinessException("数据异常请重新查询后再试!", e.getMessage());
		}
	}
	/**
	 * 方法描述:查询送货单详情
	 * 
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] queryshd(Map paramObj) throws BusinessException {
		try {

			return this.shdaffirmDao.queryshd(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询待确认结算凭证异常!", e);
			throw new BusinessException("查询待确认结算凭证异常!", e.getMessage());
		}

	}
	public ShdaffirmDao getShdaffirmDao() {
		return shdaffirmDao;
	}

	public void setShdaffirmDao(ShdaffirmDao shdaffirmDao) {
		this.shdaffirmDao = shdaffirmDao;
	}

}
