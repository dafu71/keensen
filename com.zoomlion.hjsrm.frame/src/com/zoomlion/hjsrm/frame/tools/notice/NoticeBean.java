package com.zoomlion.hjsrm.frame.tools.notice;


import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import com.eos.foundation.PageCond;
import com.eos.foundation.impl.PageCondImpl;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticeinfo;
import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser;
import com.zoomlion.hjsrm.data.tools.Tools.VAtNoticereader;
import com.zoomlion.hjsrm.data.tools.Tools.VAtNoticeHis;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticeinfoImpl;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticerecvuserImpl;
import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticeiplimit;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticeiplimitImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteDetail;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlPurchaseNoteDetailImpl;


import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现邮件收发功能
 * 
 * @author 刘鑫 **************************************************
 */
public class NoticeBean {

	private NoticeInfoDao noticeInfoDao;

	private NoticeRecvuserDao noticeRecvuserDao;

	private NoticeReadDao noticeReadDao;

	private NoticeReadrecordDao noticeReadrecordDao;

	// 1:未发布 2:已发布 3:发布停止 4:删除
	public static int UNSEND = 1;

	public static int SENDED = 2;

	public static int SENDSTOPED = 3;

	public static int DELETED = 4;

	// 阅读状态：1:未阅读 2:已阅读 3:已删除
	public static int UNREADED = 1;

	public static int READED = 2;

	public static int RECVDELETED = 3;

	/**
	 * 方法描述: 增加一个消息提醒
	 * 
	 * @author 陈今伟
	 * @param tatnoticeinfo
	 * @param userIds
	 * @param userNames
	 * @throws BusinessException
	 * @return void
	 */
	public void AddNotice(TAtNoticeinfo tatnoticeinfo, String pts)
			throws BusinessException {
		// 插入消息提醒表
		String userid, username;
		try {

			userid = Common.getCurrentUserId();
			username = Common.getCurrentUseObject().getUserName();
		} catch (Exception e1) {
			SrmLog.error("获取用户信息异常!", e1);
			throw new BusinessException("获取用户信息异常!", e1.getMessage());
		}
		try {
			tatnoticeinfo.setStatus(NoticeBean.SENDED);
			tatnoticeinfo.setSenduserid(userid);
			tatnoticeinfo.setSendusername(username);
			;
			noticeInfoDao.addNoticeInfo(tatnoticeinfo);
		} catch (Exception e) {
			SrmLog.error("增加邮件提醒项失败!", e);
			throw new BusinessException("增加邮件提醒项失败!", e.getMessage());
		}
		String[] temp = pts.split(",");
		TAtNoticerecvuser[] tatnoticerecvusers = new TAtNoticerecvuser[temp.length];
		for (int i = 0; i < temp.length; i++) {
			tatnoticerecvusers[i] = TAtNoticerecvuser.FACTORY.create();
			tatnoticerecvusers[i].setReadstatus(NoticeBean.UNREADED);
			tatnoticerecvusers[i].setRecvuserid(temp[i].substring(temp[i]
					.indexOf('(') + 1, temp[i].indexOf(")")));
			tatnoticerecvusers[i].setRecvusername(temp[i].substring(0, temp[i]
					.indexOf("(")));
			tatnoticerecvusers[i].setNoticeid(tatnoticeinfo.getNoticeid());
		}
		// 插入消息提醒接收者表
		try {
			noticeRecvuserDao.addNoticeRecvusers(tatnoticerecvusers);
		} catch (Exception e) {
			SrmLog.error("写入邮件接收者失败!", e);
			throw new BusinessException("写入邮件接收者失败!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 获得当前操作员的提醒列表
	 * 
	 * @author 刘鑫
	 * @param uid
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getNotices(String uid) throws BusinessException {
		try {
			Map condition = new HashMap();
			condition.put("uid", uid);
			return noticeInfoDao.getNotices(condition);
		} catch (Exception e) {
			SrmLog.error("加载邮件提醒失败!", e);
			throw new BusinessException("加载邮件提醒失败!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 撤销已发邮件，将删除标记改为3
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public void cxNotice(DataObject[] entity) throws BusinessException {
		try {
				TAtNoticeinfo love = new TAtNoticeinfoImpl();
				love.setNoticeid(entity[0].getLong("noticeid"));
				love.setStatus(3);
				this.noticeInfoDao.saveEntity(love);
		} catch (Exception e) {
			SrmLog.error("送货指令保存异常!", e);
			throw new BusinessException("送货指令保存异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 撤销邮件验证
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public String cxNoticeyz(DataObject[] entity)
			throws BusinessException {
		TAtNoticerecvuser cool = new TAtNoticerecvuserImpl();
		TAtNoticerecvuser[] liu;
		String v = "0";
		try {
			   cool.setNoticeid(entity[0].getLong("noticeid"));
			   cool.setReadstatus(1);
			   liu = noticeRecvuserDao.queryEntitiesByTemplate(
						TAtNoticerecvuser.class, cool);
				if(liu.length > 0){
					v = "1";
				}else{
					v = "0";
				}
			return v;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 查看邮件验证
	 * 
	 * @author 刘鑫
	 * @param query
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public String readNoticeyz(Long query)
			throws BusinessException {
		TAtNoticeinfo love = new TAtNoticeinfoImpl();
		TAtNoticeinfo[] cool;
		String k = "0";
		try {
			 love.setNoticeid(query);
			 love.setStatus(3);
			 cool = noticeRecvuserDao.queryEntitiesByTemplate(
					 TAtNoticeinfo.class, love);
				if(cool.length > 0){
					k = "1";
				}else{
					k = "0";
				}
			return k;
		} catch (Exception e) {
			SrmLog.error("数据检验异常!", e);
			throw new BusinessException("数据检验异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 创建邮件主键
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public long newNotice() throws BusinessException {
		TAtNoticeinfo notice = new TAtNoticeinfoImpl();
		this.noticeInfoDao.getPrimaryKey(notice);
		return notice.getNoticeid();
	}

	/**
	 * 方法描述: 邮件ip限制
	 * 
	 * @author 刘鑫
	 * @return
	 * @throws BusinessException
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public long noticeIplimit() throws BusinessException {
		TAtNoticeiplimit template = new TAtNoticeiplimitImpl();
		int love = 1;
		try {
			TAtNoticeiplimit[] cool = this.noticeInfoDao
					.queryEntitiesByTemplate(TAtNoticeiplimit.class, template);
			String b = Common.getCurrentUserObject().getUserRemoteIP();
			for (int i = 0; i < cool.length; i++) {
				String a = cool[i].getIp();
				String c = b.substring(0, a.length());
				if (a.equals(c)) {
					love = 2;
					break;
				}
			}
			return love;
		} catch (Exception e) {
			SrmLog.error("判定邮件IP异常!", e);
			throw new BusinessException("判定邮件IP异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述: 通过id查看收件箱邮件
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @return
	 * @throws BusinessException
	 * @return TAtNoticeinfo
	 */
	@SuppressWarnings("unchecked")
	public TAtNoticeinfo viewNotice(TAtNoticeinfo notice)
			throws BusinessException {
		String userid;
		TAtNoticerecvuser cool = new TAtNoticerecvuserImpl();
		TAtNoticerecvuser[] liu;
		try {
			userid = Common.getCurrentUserId();
			cool.setNoticeid(notice.getNoticeid());
			cool.setRecvuserid(userid);
			liu = noticeRecvuserDao.queryEntitiesByTemplate(
					TAtNoticerecvuser.class, cool);
			this.noticeInfoDao.expandEntity(notice);
			if (liu[0].getReadstatus() == 1) {
				this.noticeReadDao.addNoticeRead(notice);
			}

		} catch (Exception e) {
			SrmLog.error("邮件加载异常!", e);
			throw new BusinessException("邮件加载异常!", e.getMessage());
		}
		return notice;
	}

	/**
	 * 方法描述: 通过id查看发件箱邮件
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @return
	 * @throws BusinessException
	 * @return TAtNoticeinfo
	 */
	@SuppressWarnings("unchecked")
	public TAtNoticeinfo viewNoticesend(TAtNoticeinfo notice)
			throws BusinessException {

		try {
			this.noticeInfoDao.expandEntity(notice);
		} catch (Exception e) {
			SrmLog.error("邮件加载异常!", e);
			throw new BusinessException("邮件加载异常!", e.getMessage());
		}
		return notice;
	}

	/**
	 * 方法描述: 加载发件箱邮件
	 * 
	 * @author 刘鑫
	 * @param query,entity,pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getNoticesHisSend(DataObject query, DataObject entity,
			PageCond pageCond) throws BusinessException {
		try {
			return noticeInfoDao.getNoticesHisSend(query, entity, pageCond);
		} catch (Exception e) {
			SrmLog.error("加载邮件失败!", e);
			throw new BusinessException("加载邮件失败!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查看邮件
	 * 
	 * @author 刘鑫
	 * @param notice,entity,pageCond
	 * @return
	 * @throws BusinessException
	 * @return DataObject
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getNoticesHis(DataObject notice, DataObject entity,
			PageCond pageCond) throws BusinessException {
		try {
			return noticeInfoDao.getNoticesHis(notice, entity, pageCond);
		} catch (Exception e) {
			SrmLog.error("加载邮件失败!", e);
			throw new BusinessException("加载邮件失败!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 删除发送的邮件
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @throws BusinessException
	 * @return void
	 */
	public void delsendnotice(TAtNoticeinfo[] notice) throws BusinessException {
		try {
			for (int i = 0; i < notice.length; i++) {
				this.noticeInfoDao.expandEntity(notice[i]);
				notice[i].setDelstatus(1);
				this.noticeInfoDao.saveEntity(notice[i]);
			}
		} catch (Exception e) {
			SrmLog.error("发送邮件删除异常!", e);
			throw new BusinessException("发送邮件删除异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 删除接收的邮件
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @throws BusinessException
	 * @return void
	 */
	public void delrecvusenotice(TAtNoticerecvuser[] notice) throws BusinessException {
		try {
			for (int i = 0; i < notice.length; i++) {
				this.noticeInfoDao.expandEntity(notice[i]);
				notice[i].setRecvuserid(Common.getCurrentUserId());
				notice[i].setReadstatus(3);
				this.noticeInfoDao.saveEntity(notice[i]);
			}
		} catch (Exception e) {
			SrmLog.error("发送邮件删除异常!", e);
			throw new BusinessException("发送邮件删除异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 查询被删除的邮件
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querylajinotice(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			paramObj.put("uid", Common.getCurrentUserId());
			return this.noticeInfoDao.querylajinotice(paramObj, pageCond);
		} catch (Exception e) {
			SrmLog.error("查询被删除的邮件!", e);
			throw new BusinessException("查询被删除的邮件!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 还原被删除的邮件
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void returndelnotices(DataObject[] entity) throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				if( "0".equals(entity[i].getString("flag"))){
					TAtNoticeinfo notice1 = new TAtNoticeinfoImpl();
					notice1.setNoticeid(entity[i].getLong("noticeid"));
					notice1.setDelstatus(3);
					this.noticeInfoDao.saveEntity(notice1);
				}
				if( "1".equals(entity[i].getString("flag"))){
					TAtNoticerecvuser notice2 = new TAtNoticerecvuserImpl();
					notice2.setNoticeid(entity[i].getLong("noticeid"));
					notice2.setRecvuserid(Common.getCurrentUserId());
					this.noticeInfoDao.expandEntity(notice2);
					if(notice2.getReadtime() !=null){
					notice2.setReadstatus(2);
					}else{
					notice2.setReadstatus(1);
					}
					this.noticeInfoDao.saveEntity(notice2);
				}
			}
		} catch (Exception e) {
			SrmLog.error("订单保存异常!", e);
			throw new BusinessException("订单保存异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 彻底被删除的邮件
	 * 
	 * @author 刘鑫
	 * @param entity
	 * @throws BusinessException
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void deldelnotices(DataObject[] entity) throws BusinessException {
		try {
			for (int i = 0; i < entity.length; i++) {
				if( "0".equals(entity[i].getString("flag"))){
					TAtNoticeinfo notice1 = new TAtNoticeinfoImpl();
					notice1.setNoticeid(entity[i].getLong("noticeid"));
					notice1.setDelstatus(2);
					this.noticeInfoDao.saveEntity(notice1);
				}
				if( "1".equals(entity[i].getString("flag"))){
					TAtNoticerecvuser notice2 = new TAtNoticerecvuserImpl();
					notice2.setNoticeid(entity[i].getLong("noticeid"));
					notice2.setRecvuserid(Common.getCurrentUserId());
					notice2.setReadstatus(4);
					this.noticeInfoDao.saveEntity(notice2);
				}
			}
		} catch (Exception e) {
			SrmLog.error("订单保存异常!", e);
			throw new BusinessException("订单保存异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述: 查看邮件（主页专用）
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @return
	 * @throws BusinessException
	 * @return DataObject
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getNoticesHiszhuye(
			) throws BusinessException {
		PageCond pagecond = new PageCondImpl();
		pagecond.setLength(4);
		try {
			return noticeInfoDao.getNoticesHiszhuye(pagecond);
		} catch (Exception e) {
			SrmLog.error("加载邮件失败!", e);
			throw new BusinessException("加载邮件失败!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 查询邮件查阅情况
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @return
	 * @throws BusinessException
	 * @return DataObject
	 */
	public VAtNoticereader queryNoticeReadrecordByOrg(VAtNoticereader notice)
			throws BusinessException {

		try {
			this.noticeReadrecordDao.expandEntity(notice);
		} catch (Exception e) {
			SrmLog.error("查询邮件查阅人信息失败!", e);
			throw new BusinessException("查询邮件查阅人信息失败!", e.getMessage());
		}
		return notice;
	}
	/**
	 * 方法描述: 查看邮件查阅情况2
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 * @return DataObject
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querynoticeReader(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.noticeReadrecordDao.querynoticeReader(paramObj,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("查询邮件查阅人信息失败!", e);
			throw new BusinessException("查询邮件查阅人信息失败!", e.getMessage());
		}

	}
	/**
	 * 方法描述: 查看邮件查阅情况2
	 * 
	 * @author 刘鑫
	 * @param paramObj
	 * @return
	 * @throws BusinessException
	 * @return DataObject
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querynoticenotReader(Map paramObj, PageCond pageCond)
			throws BusinessException {
		try {
			return this.noticeReadrecordDao.querynoticenotReader(paramObj,
					pageCond);
		} catch (Exception e) {
			SrmLog.error("查询邮件查阅人信息失败!", e);
			throw new BusinessException("查询邮件查阅人信息失败!", e.getMessage());
		}

	}

	/**
	 * 方法描述: 设置消息提醒为已读
	 * 
	 * @author 陈今伟
	 * @param noticeid
	 * @param uid
	 * @throws BusinessException
	 * @return void
	 */
	public void setNoticeReaded(long noticeid, String uid)
			throws BusinessException {
		TAtNoticerecvuser template = TAtNoticerecvuser.FACTORY.create();
		template.setNoticeid(noticeid);
		template.setRecvuserid(uid);
		TAtNoticerecvuser[] ret;
		try {
			ret = noticeRecvuserDao.queryEntitiesByTemplate(
					TAtNoticerecvuser.class, template);
		} catch (Exception e) {
			SrmLog.error("设置邮件提醒状态失败!", e);
			throw new BusinessException("设置邮件提醒状态失败!", e.getMessage());
		}
		if (ret.length == 1) {// 取第一个
			ret[0].setReadstatus(NoticeBean.READED);
			noticeRecvuserDao.saveEntity(ret[0]);
		}
	}

	public void setNoticeInfoDao(NoticeInfoDao noticeInfoDao) {
		this.noticeInfoDao = noticeInfoDao;
	}

	public void setNoticeRecvuserDao(NoticeRecvuserDao noticeRecvuserDao) {
		this.noticeRecvuserDao = noticeRecvuserDao;
	}

	public NoticeReadDao getNoticeReadDao() {
		return noticeReadDao;
	}

	public void setNoticeReadDao(NoticeReadDao noticeReadDao) {
		this.noticeReadDao = noticeReadDao;
	}

	public NoticeReadrecordDao getNoticeReadrecordDao() {
		return noticeReadrecordDao;
	}

	public void setNoticeReadrecordDao(NoticeReadrecordDao noticeReadrecordDao) {
		this.noticeReadrecordDao = noticeReadrecordDao;
	}
}
