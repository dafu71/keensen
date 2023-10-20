package com.zoomlion.hjsrm.hlhjy;

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
import com.zoomlion.hjsrm.data.tools.Tools.TAtAnnounce;
import com.zoomlion.hjsrm.data.tools.Tools.TAtAnnounceOrganization;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplywtfkList;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl;
import commonj.sdo.DataObject;


public class HlhjyBean extends BaseBean {
	private HlhjyDao hlhjyDao;

	
	public String newWtfkid() throws BusinessException {
		long nextSeq = com.zoomlion.hjsrm.pub.srmclient.CommonUtils.getNextSeq(
				"default", "SEQ_GENL_SUPPLYWTFK_LIST");
		String t = String.valueOf(nextSeq);
		int a = t.length();
		if(a<9){
			for (int i = a; i < 8; i++) {
				t = "0"+t;
			}
		}
		return "WT" + t;
	}
	/**
	 * 方法描述: 新增供应商问题反馈
	 * 
	 * @author 刘鑫
	 * @param hlhjy
	 * @throws BusinessException
	 * @return void
	 */
	public void addHlhjy(GenlSupplywtfkList hlhjy) throws BusinessException {
		if (hlhjy.getWtms() != null
				&& hlhjy.getWtms().length() > 3000) {
			throw new BusinessException("问题描述超出限制!", "问题描述超出限制!");
		}
		if (hlhjy.getWtms() == null || hlhjy.getWtms().equals("")) {
			throw new BusinessException("问题描述不能为空", "问题描述不能为空!");
		}
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
			"lifnr").toString();
			String lifnrname = Common.getCurrentUseObject().getAttributes().get(
			"lifnrname").toString();
			hlhjy.setLifnr(lifnr);
			hlhjy.setName1(lifnrname);
			hlhjy.setClzt("1");
			hlhjy.setSupqr("1");
			this.hlhjyDao.insertEntity(hlhjy);
		} catch (Exception e) {
			SrmLog.error("问题反馈新增异常!", e);
			throw new BusinessException("问题反馈新增异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 处理供应商问题反馈
	 * 
	 * @author 刘鑫
	 * @param hlhjy
	 * @throws BusinessException
	 * @return void
	 */
	public void saveHlhjy(GenlSupplywtfkList hlhjy) throws BusinessException {
		if (hlhjy.getJjfa() != null
				&& hlhjy.getJjfa().length() > 3000) {
			throw new BusinessException("问题描述超出限制!", "问题描述超出限制!");
		}
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
			"lifnr").toString();
			if (null != lifnr && !"".equals(lifnr)){
			GenlSupplywtfkList cool1 = new GenlSupplywtfkListImpl();
			GenlSupplywtfkList cool3 = new GenlSupplywtfkListImpl();
			cool1.setWtfkid(hlhjy.getWtfkid());
			cool3.setWtfkid(hlhjy.getWtfkid());
			cool3.setSupqr(hlhjy.getSupqr());
			this.hlhjyDao.expandEntity(cool1);
			if ("1".equals(cool1.getClzt())){
			this.hlhjyDao.saveEntity(hlhjy);
			}else{
				this.hlhjyDao.saveEntity(cool3);
			}
			}else{
				GenlSupplywtfkList cool2 = new GenlSupplywtfkListImpl();
				cool2.setWtfkid(hlhjy.getWtfkid());
				this.hlhjyDao.expandEntity(cool2);
				if ("1".equals(cool2.getSupqr()) ||"3".equals(cool2.getSupqr())){
				hlhjy.setTranu(Common.getCurrentUserId());
				this.hlhjyDao.saveEntity(hlhjy);
			}else{
				throw new BusinessException("问题反馈保存失败!", "问题反馈保存失败!");	
			}
			}
		} catch (Exception e) {
			SrmLog.error("问题反馈保存失败!", e);
			throw new BusinessException("问题反馈保存失败!", "问题反馈保存失败!");
		}
	}
	/**
	 * 方法描述: 删除供应商问题反馈
	 * 
	 * @author 刘鑫
	 * @param hlhjy
	 * @throws BusinessException
	 * @return void
	 */
	public void delHlhjy(GenlSupplywtfkList[] hlhjys) throws BusinessException {
		
		try {
			for (int i = 0; i < hlhjys.length; i++) {
				GenlSupplywtfkList love = new GenlSupplywtfkListImpl();
				love.setWtfkid(hlhjys[i].getWtfkid());
				this.hlhjyDao.expandEntity(hlhjys[i]);
				this.hlhjyDao.expandEntity(love);
				if ("1".equals(love.getClzt())){
				hlhjys[i].setSupqr("4");
				this.hlhjyDao.saveEntity(hlhjys[i]);
				}else{
					throw new BusinessException("所选条目中有数据已被供管工程师处理，无法进行删除!", "所选条目中有数据已被供管工程师处理，无法进行删除!");
				}
			}
		} catch (Exception e) {
			SrmLog.error("所选条目中有数据已被供管工程师处理，无法进行删除!", e);
			throw new BusinessException("所选条目中有数据已被供管工程师处理，无法进行删除!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 查询合理化建议供应商问题反馈
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querysupwtfk(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
			"lifnr").toString();
			if (null == lifnr || "".equals(lifnr)) {
				if (paramObj.get("lifnr") != null
						&& !paramObj.get("lifnr").equals("")) {
					paramObj.put("lifnr", paramObj.get("lifnr"));
				}	
			}else{
				paramObj.put("lifnrsup", lifnr);
			}
			return this.hlhjyDao.queryhlhjy(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询供应商问题反馈异常!", e);
			throw new BusinessException("查询供应商问题反馈异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查询合理化建议供应商问题反馈导出
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @param pageCond
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querysupwtfkdaochu(Map paramObj)
			throws BusinessException {
		try {
			String lifnr = Common.getCurrentUseObject().getAttributes().get(
			"lifnr").toString();
			if (null == lifnr || "".equals(lifnr)) {
				if (paramObj.get("lifnr") != null
						&& !paramObj.get("lifnr").equals("")) {
					paramObj.put("lifnr", paramObj.get("lifnr"));
				}	
			}else{
				paramObj.put("lifnrsup", lifnr);
			}
			return this.hlhjyDao.queryhlhjydaochu(paramObj);
		} catch (Exception e) {
			SrmLog.error("查询供应商问题反馈异常!", e);
			throw new BusinessException("查询供应商问题反馈异常!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 加载供应商问题反馈
	 * 
	 * @author 刘鑫
	 * @param hlhjy
	 * @return
	 * @throws BusinessException
	 * @return TAtAnnounce
	 */
	public GenlSupplywtfkList loadHlhjy(GenlSupplywtfkList hlhjy)
			throws BusinessException {
		try {
			this.hlhjyDao.expandEntity(hlhjy);
		} catch (Exception e) {
			SrmLog.error("公告加载异常!", e);
			throw new BusinessException("公告加载异常!", e.getMessage());
		}
		return hlhjy;
	}
	public HlhjyDao getHlhjyDao() {
		return hlhjyDao;
	}

	public void setHlhjyDao(HlhjyDao hlhjyDao) {
		this.hlhjyDao = hlhjyDao;
	}
}
