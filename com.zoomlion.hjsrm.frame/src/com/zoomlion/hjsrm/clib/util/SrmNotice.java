package com.zoomlion.hjsrm.clib.util;
import java.util.Date;
import com.eos.das.entity.SequenceGenerator;
import com.eos.foundation.database.DatabaseUtil;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticeinfo;
import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticeinfoImpl;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticerecvuserImpl;
/**
 * **************************************************
 * 描    述：  消息发送类
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class SrmNotice {
	
	//	 1:未发布 2:已发布 3:发布停止 4:删除
	public static int UNSEND = 1;

	public static int SENDED = 2;

	public static int SENDSTOPED = 3;

	public static int DELETED = 4;
	/**
	 * 方法描述: 通用发送消息方法
	 * @author 侯杰
	 * @param content
	 * @param userIds
	 * @throws BusinessException 
	 * @return void
	 */
	public static void sendto(String content,String [] userIds) throws BusinessException{
		String userid;
		String username;
		try {
			userid =Common.getCurrentUserId();
			username = Common.getCurrentUseObject().getUserName();
		} catch (Exception e) {
			SrmLog.error("获取操作员信息失败", e);
			throw new BusinessException("获取操作员信息失败",e.getMessage());
		}
    	TAtNoticeinfo tnf = new TAtNoticeinfoImpl();
    	long noticeid = SequenceGenerator.getNextSequence("TAtNoticeinfo.Noticeid");
    	tnf.setStatus(SrmNotice.SENDED);
    	tnf.setNoticetime(new Date());
    	tnf.setNoticeid(noticeid);
    	tnf.setCreateby(userid);
    	tnf.setContent(content);
    	tnf.setTitle(null);
    	tnf.setSenduserid(userid);
    	tnf.setSendusername(username);
    	DatabaseUtil.insertEntity("default", tnf);
		TAtNoticerecvuser [] tatnoticerecvusers = new TAtNoticerecvuser[userIds.length];
		for (int i = 0; i < userIds.length; i++) {
			tatnoticerecvusers[i] = new TAtNoticerecvuserImpl();
			tatnoticerecvusers[i].setReadstatus(1);
			tatnoticerecvusers[i].setRecvuserid(userIds[i]);
			tatnoticerecvusers[i].setNoticeid(noticeid);
			DatabaseUtil.insertEntity("default", tatnoticerecvusers[i]);
		}
	}
	
	public static void sendto(String content,String userId) throws BusinessException{
		String userid;
		String username;
		try {
			userid =Common.getCurrentUserId();
			username = Common.getCurrentUseObject().getUserName();
		} catch (Exception e) {
			SrmLog.error("获取操作员信息失败", e);
			throw new BusinessException("获取操作员信息失败",e.getMessage());
		}
    	TAtNoticeinfo tnf = new TAtNoticeinfoImpl();
    	long noticeid = SequenceGenerator.getNextSequence("TAtNoticeinfo.Noticeid");
    	tnf.setStatus(SrmNotice.SENDED);
    	tnf.setNoticetime(new Date());
    	tnf.setNoticeid(noticeid);
    	tnf.setCreateby(userid);
    	tnf.setContent(content);
    	tnf.setTitle(null);
    	tnf.setSenduserid(userid);
    	tnf.setSendusername(username);
    	DatabaseUtil.insertEntity("default", tnf);
		TAtNoticerecvuser tatnoticerecvusers = new TAtNoticerecvuserImpl();
		tatnoticerecvusers = new TAtNoticerecvuserImpl();
		tatnoticerecvusers.setReadstatus(1);
		tatnoticerecvusers.setRecvuserid(userId);
		tatnoticerecvusers.setNoticeid(noticeid);
		DatabaseUtil.insertEntity("default", tatnoticerecvusers);
	}
}
