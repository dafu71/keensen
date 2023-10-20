package com.zoomlion.hjsrm.frame.tools.announce;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.eos.das.entity.DASManager;
import com.eos.das.entity.ExpressionHelper;
import com.eos.das.entity.IDASCriteria;
import com.eos.foundation.PageCond;
import com.eos.foundation.impl.PageCondImpl;
import com.eos.workflow.omservice.WFParticipant;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.tools.Tools.TAtAnnounce;
import com.zoomlion.hjsrm.data.tools.Tools.TAtAnnounceOrganization;
import com.zoomlion.hjsrm.data.tools.Tools.VAtAnnounceReader;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAnnounceImpl;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAnnounceOrganizationImpl;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAnnounceReadImpl;
import com.zoomlion.hjsrm.data.tools.Tools.TAtAnnounceRead;

import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现公告管理功能
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-28 陈今伟 创建文件
 *      **************************************************
 */
public class AnnounceBean extends BaseBean {

	private AnnounceDao announceDao;

	private AnnounceReadDao announceReadDao;

	private AnnounceReadrecordDao announceReadrecordDao;

	/**
	 * 方法描述: 查询公告列表
	 * 
	 * @author 陈今伟
	 * @param query
	 * @param pagecond
	 * @return
	 * @throws BusinessException
	 * @return TAtAnnounce[]
	 */
	@SuppressWarnings("unchecked")
	public TAtAnnounce[] queryAnnounces(TAtAnnounce announce,
			DataObject entity, PageCond pagecond) throws BusinessException {
		TAtAnnounce[] announces;
		try {
			Map conditon = new HashMap();
			conditon.put("title", announce.getTitle());
			conditon.put("announcetype", announce.getAnnouncetype());
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String now = sdf.format(new Date());
			conditon.put("now", now);
			String roles_ids_str = Common.getCurrentUserObject()
			.getAttributes().get("roles_ids_str").toString();
			try {
				conditon.put("userid", Common.getCurrentUserId());
				if (entity.getString("startDate") == null
						&& entity.getString("endDate") != null) {
					conditon.put("startDate", Common.getSysDate());
					conditon.put("endDate", entity.getString("endDate"));
				} else if (entity.getString("startDate") != null
						&& entity.getString("endDate") == null) {
					conditon.put("startDate", entity.getString("startDate"));
					conditon.put("endDate", Common.getSysDate());
				} else {
					conditon.put("startDate", entity.getString("startDate"));
					conditon.put("endDate", entity.getString("endDate"));
				}
				conditon.put("orgid", Common.getCurrentUserOrgId());
				// 因Ajax请求异步，可能无法获取orgid，故判断后做后台查询。
				if (conditon.get("orgid") == null) {
					conditon.put("empid", Common.getCurrentUseObject()
							.getAttributes().get("empid"));
				} else {
					if ("0".equals(conditon.get("orgid"))) {
						conditon.put("orgid", null);
						conditon.put("empid", null);
					}

				}
				if (roles_ids_str != null && (!roles_ids_str.equals(""))) {
					String[] temp = roles_ids_str.split(",");
					for (int i = 0; i < temp.length; i++) {
						if("161".equals(temp[i])){
							conditon.put("orgid", null);
							conditon.put("empid", null);
							break;
						}
					}
				}
			} catch (Exception e) {
				SrmLog.error("公告查询异常!", e);
				throw new BusinessException("公告查询异常!", e.getMessage());
			}
			conditon.put("dataorgid", Common.getCurrentUserDataOrgId());
			announces = this.announceDao.queryAnnounces(conditon, pagecond);
		} catch (Exception e) {
			SrmLog.error("公告查询异常!", e);
			throw new BusinessException("公告查询异常!", e.getMessage());
		}
		return announces;
	}

	/**
	 * 方法描述: 查询公告列表（主页调用）
	 * 
	 * @author 侯杰
	 * @return
	 * @throws BusinessException
	 * @return TAtAnnounce[]
	 * @throws ParseException
	 */
	@SuppressWarnings("unchecked")
	public TAtAnnounce[] queryAnnounces() throws BusinessException {
		TAtAnnounce query = new TAtAnnounceImpl();
		PageCond pagecond = new PageCondImpl();
		pagecond.setLength(8);
		TAtAnnounce[] announces;
		Map conditon = new HashMap();
		conditon.put("title", query.getTitle());
		conditon.put("startDate", query.get("startDate"));
		conditon.put("endDate", query.get("endDate"));
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String now = sdf.format(new Date());
		conditon.put("now", now);
		conditon.put("announcetype", "1");
		try {
			conditon.put("orgid", Common.getCurrentUserOrgId());
			conditon.put("userid", Common.getCurrentUserId());
			String roles_ids_str = Common.getCurrentUserObject()
			.getAttributes().get("roles_ids_str").toString();
			// 因Ajax请求异步，可能无法获取orgid，故判断后做后台查询。
			if (conditon.get("orgid") == null) {
				conditon.put("empid", Common.getCurrentUseObject()
						.getAttributes().get("empid"));
			} else {
				if ("0".equals(conditon.get("orgid"))) {
					conditon.put("orgid", null);
					conditon.put("empid", null);
				}

			}
			if (roles_ids_str != null && (!roles_ids_str.equals(""))) {
				String[] temp = roles_ids_str.split(",");
				for (int i = 0; i < temp.length; i++) {
					if("161".equals(temp[i])){
						conditon.put("orgid", null);
						conditon.put("empid", null);
						break;
					}
				}
			}
			// conditon.put("dataorgid", Common.getCurrentUserDataOrgId());
			announces = this.announceDao.queryAnnounces(conditon, pagecond);
		} catch (Exception e) {
			SrmLog.error("公告查询异常!", e);
			throw new BusinessException("公告查询异常!", e.getMessage());
		}
		return announces;
	}
	
	/**
	 * 方法描述: 查询管理制度公告列表（主页调用）
	 * 
	 * @author 刘鑫
	 * @return
	 * @throws BusinessException
	 * @return TAtAnnounce[]
	 * @throws ParseException
	 */
	@SuppressWarnings("unchecked")
	public TAtAnnounce[] queryglzdAnnounces() throws BusinessException {
		TAtAnnounce query = new TAtAnnounceImpl();
		PageCond pagecond = new PageCondImpl();
		pagecond.setLength(5);
		TAtAnnounce[] announces;
		Map conditon = new HashMap();
		conditon.put("title", query.getTitle());
		conditon.put("startDate", query.get("startDate"));
		conditon.put("endDate", query.get("endDate"));
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String now = sdf.format(new Date());
		conditon.put("now", now);
		conditon.put("announcetype", "2");
		try {
			conditon.put("orgid", Common.getCurrentUserOrgId());
			conditon.put("userid", Common.getCurrentUserId());
			String roles_ids_str = Common.getCurrentUserObject()
			.getAttributes().get("roles_ids_str").toString();
			// 因Ajax请求异步，可能无法获取orgid，故判断后做后台查询。
			if (conditon.get("orgid") == null) {
				conditon.put("empid", Common.getCurrentUseObject()
						.getAttributes().get("empid"));
			} else {
				if ("0".equals(conditon.get("orgid"))) {
					conditon.put("orgid", null);
					conditon.put("empid", null);
				}

			}
			if (roles_ids_str != null && (!roles_ids_str.equals(""))) {
				String[] temp = roles_ids_str.split(",");
				for (int i = 0; i < temp.length; i++) {
					if("161".equals(temp[i])){
						conditon.put("orgid", null);
						conditon.put("empid", null);
						break;
					}
				}
			}
			// conditon.put("dataorgid", Common.getCurrentUserDataOrgId());
			announces = this.announceDao.queryAnnounces(conditon, pagecond);
		} catch (Exception e) {
			SrmLog.error("公告查询异常!", e);
			throw new BusinessException("公告查询异常!", e.getMessage());
		}
		return announces;
	}

	/**
	 * 方法描述: 新增公告
	 * 
	 * @author 陈今伟
	 * @param announce
	 * @throws BusinessException
	 * @return void
	 */
	public void addAnnounce(TAtAnnounce announce) throws BusinessException {
		if (announce.getContent() != null
				&& announce.getContent().length() > 3000) {
			throw new BusinessException("公告内容超出限制!", "公告内容超出限制!");
		}
		if (announce.getContent() == null || announce.getContent().equals("")) {
			throw new BusinessException("公告内容不能为空", "公告内容不能为空!");
		}
		try {

			announce.setStatus(2);
			announce.setCreateby(Common.getCurrentUserId());
			announce.setDataorgid(Integer.valueOf(Common
					.getCurrentUserDataOrgId()));
			announce.setUserid(Common.getCurrentUserId());
			announce.setUsername(Common.getCurrentUseObject().getUserName());
			announce.setAnnouncetime(Common.getCurrentTime());
			this.announceDao.insertEntity(announce);
		} catch (Exception e) {
			SrmLog.error("公告新增异常!", e);
			throw new BusinessException("公告新增异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 新增公告
	 * 
	 * @author 方曦
	 * @param announce
	 * @throws BusinessException
	 * @return void
	 */
	public void addAnnounces(TAtAnnounce announce) throws BusinessException {
		if (announce.getContent() != null
				&& announce.getContent().length() > 3000) {
			throw new BusinessException("公告内容超出限制!", "公告内容超出限制!");
		}
		if (announce.getContent() == null || announce.getContent().equals("")) {
			throw new BusinessException("公告内容不能为空", "公告内容不能为空!");
		}
		String ret = this.announceDao.checkTitle(announce.getString("title"));
		if (ret == "error") {
			throw new BusinessException("公告标题已存在", "公告标题已存在!");
		}
		try {
			announce.setStatus(2);
			announce.setCreateby(Common.getCurrentUserId());
			announce.setDataorgid(Integer.valueOf(Common
					.getCurrentUserDataOrgId()));
			announce.setUserid(Common.getCurrentUserId());
			announce.setUsername(Common.getCurrentUseObject().getUserName());
			announce.setAnnouncetime(Common.getCurrentTime());
			this.announceDao.insertEntity(announce);
			String bizorgids = announce.getString("bizorgids");
			if ("0".equals(bizorgids)) {// 群发
				bizorgids = "41,10000";
			}
			String[] strs = bizorgids.split(",");
			TAtAnnounceOrganization demo = new TAtAnnounceOrganizationImpl();
			demo.setCreateby(Common.getCurrentUseObject().getUserName());
			int dataorgid = Integer.valueOf(Common.getCurrentUserDataOrgId());
			demo.setDataorgid(dataorgid);
			demo.setAnnounceid(announce.getAnnounceid());
			for (int i = 0; i < strs.length; i++) {
				demo.setOrgid(strs[i]);
				this.announceDao.insertEntity(demo);
			}
		} catch (Exception e) {
			SrmLog.error("公告新增异常!", e);
			throw new BusinessException("公告新增异常!", e.getMessage());
		}
	}

	public long newAnnounce() throws BusinessException {
		TAtAnnounce announce = new TAtAnnounceImpl();
		this.announceDao.getPrimaryKey(announce);
		return announce.getAnnounceid();
	}

	/**
	 * 方法描述: 修改公告
	 * 
	 * @author 陈今伟
	 * @param announce
	 * @throws BusinessException
	 * @return void
	 */
	public void updateAnnounce(TAtAnnounce announce) throws BusinessException {
		if (announce.getContent() != null
				&& announce.getContent().length() > 3000) {
			throw new BusinessException("公告内容超出限制!", "公告内容超出限制!");
		}
		if (announce.getContent() == null || announce.getContent().equals("")) {
			throw new BusinessException("公告内容不能为空", "公告内容不能为空!");
		}
		try {
			announce.setUpdatetime(Common.getCurrentTime());
			this.announceDao.saveEntity(announce);
			/*
			 * 修改公告部门关联关系表
			 */
			/*
			 * Map<String, Object> condition = new HashMap<String, Object>();
			 * condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			 * condition.put("announceid", announce.getString("announceid"));
			 * this.announceDao.deleteAnnounceOrganization(condition); String[]
			 * strs = announce.getString("bizorgids").split(",");
			 * TAtAnnounceOrganization demo = new TAtAnnounceOrganizationImpl();
			 * demo.setCreateby(Common.getCurrentUseObject().getUserName()); int
			 * dataorgid = Integer.valueOf(Common.getCurrentUserDataOrgId());
			 * demo.setDataorgid(dataorgid);
			 * demo.setAnnounceid(announce.getAnnounceid()); for (int i = 0; i <
			 * strs.length; i++) { demo.setOrgid(strs[i]);
			 * this.announceDao.insertEntity(demo); }
			 */

		} catch (Exception e) {
			SrmLog.error("公告修改异常!", e);
			throw new BusinessException("公告修改异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 删除公告
	 * 
	 * @author 陈今伟
	 * @param announces
	 * @throws BusinessException
	 * @return void
	 */
	public void delAnnounce(TAtAnnounce[] announces) throws BusinessException {
		try {
			for (int i = 0; i < announces.length; i++) {
				this.announceDao.expandEntity(announces[i]);
				announces[i].setStatus(3);
				this.announceDao.saveEntity(announces[i]);
			}
		} catch (Exception e) {
			SrmLog.error("公告删除异常!", e);
			throw new BusinessException("公告删除异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 加载公告，用于修改
	 * 
	 * @author 陈今伟
	 * @param announce
	 * @return
	 * @throws BusinessException
	 * @return TAtAnnounce
	 */
	public TAtAnnounce loadAnnounce(TAtAnnounce announce)
			throws BusinessException {
		try {
			this.announceDao.expandEntity(announce);
			IDASCriteria dasCriteria = DASManager
					.createCriteria(TAtAnnounceOrganization.class.getName());
			dasCriteria.add(ExpressionHelper.eq("announceid", announce
					.getAnnounceid()));
			TAtAnnounceOrganization[] aos = this.announceDao
					.queryEntitiesByCriteriaEntity(
							TAtAnnounceOrganization.class, dasCriteria);
			int[] ids = new int[aos.length];
			for (int i = 0; i < aos.length; i++) {
				ids[i] = Integer.parseInt(aos[i].getOrgid());
			}
			announce.set("bizorgids", ids);
		} catch (Exception e) {
			SrmLog.error("公告加载异常!", e);
			throw new BusinessException("公告加载异常!", e.getMessage());
		}
		return announce;
	}

	/**
	 * 方法描述: 查看公告
	 * 
	 * @author 刘鑫
	 * @param announce
	 * @return
	 * @throws BusinessException
	 * @return TAtAnnounce
	 */
	public TAtAnnounce viewAnnounce(TAtAnnounce announce)
			throws BusinessException {
		String userid;
		TAtAnnounceRead cool = new TAtAnnounceReadImpl();
		TAtAnnounceRead[] liu;
		try {
			userid = Common.getCurrentUserId();
			cool.setAnnounceid(announce.getAnnounceid());
			cool.setUserid(userid);
			liu = announceReadDao.queryEntitiesByTemplate(
					TAtAnnounceRead.class, cool);
			this.announceDao.expandEntity(announce);
			if (liu.length == 0) {
				this.announceReadDao.addAnnounceRead(announce);
			}
		} catch (Exception e) {
			SrmLog.error("公告加载异常!", e);
			throw new BusinessException("公告加载异常!", e.getMessage());
		}
		return announce;
	}

	/**
	 * 方法描述: 查看公告查阅情况
	 * 
	 * @author 刘鑫
	 * @param announce
	 * @return
	 * @throws BusinessException
	 * @return TAtAnnounce
	 */
	public VAtAnnounceReader queryAnnounceReadrecordByOrg(
			VAtAnnounceReader announce) throws BusinessException {

		try {
			this.announceReadrecordDao.expandEntity(announce);
		} catch (Exception e) {
			SrmLog.error("查询公告查阅人信息失败!", e);
			throw new BusinessException("查询公告查阅人信息失败!", e.getMessage());
		}
		return announce;
	}

	/**
	 * 方法描述: 查看公告查阅情况2
	 * 
	 * @author 刘鑫
	 * @param announce
	 * @return
	 * @throws BusinessException
	 * @return TAtAnnounce
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryannounceReader(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.announceReadrecordDao.queryannounceReader(paramObj,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("查询公告查阅人信息失败!", e);
			throw new BusinessException("查询公告查阅人信息失败!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查看公告未查阅情况
	 * 
	 * @author 刘鑫
	 * @param announce
	 * @return
	 * @throws BusinessException
	 * @return TAtAnnounce
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryannouncenotReader(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			DataObject[] cool = this.announceReadrecordDao
					.queryannounceReadorg(paramObj);
			String sql1 ="1=0";
			for (int i = 0; i < cool.length; i++) {
				String sql = "or ( c.orgseqs like '%."+cool[i].getString("orgid")+".%' and a.orgid = '"+cool[i].getString("orgid")+"') ";
				sql1 = sql1+sql;
				paramObj.put("sql", sql1);
			}
			return this.announceReadrecordDao.queryannouncenotReader(paramObj,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("查询公告查阅人信息失败!", e);
			throw new BusinessException("查询公告查阅人信息失败!", e.getMessage());
		}

	}

	public AnnounceDao getAnnounceDao() {
		return announceDao;
	}

	public void setAnnounceDao(AnnounceDao announceDao) {
		this.announceDao = announceDao;
	}

	public AnnounceReadDao getAnnounceReadDao() {
		return announceReadDao;
	}

	public void setAnnounceReadDao(AnnounceReadDao announceReadDao) {
		this.announceReadDao = announceReadDao;
	}

	public AnnounceReadrecordDao getAnnounceReadrecordDao() {
		return announceReadrecordDao;
	}

	public void setAnnounceReadrecordDao(
			AnnounceReadrecordDao announceReadrecordDao) {
		this.announceReadrecordDao = announceReadrecordDao;
	}

}
