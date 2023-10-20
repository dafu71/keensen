package com.zoomlion.hjsrm.frame.tools.notice;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser;

/**
 * ************************************************** 描 述： 实现邮件收发功能
 * 
 * @author 刘鑫 **************************************************
 */
public class NoticeRecvuserDao extends BaseDao {

	/**
	 * 方法描述: 插入邮件提醒接收者
	 * 
	 * @author 刘鑫
	 * @param tatnoticerecvuser
	 * @throws Exception
	 * @return void
	 */
	public void addNoticeRecvusers(TAtNoticerecvuser[] tatnoticerecvuser)
			throws Exception {
		this.insertEntityBatch(tatnoticerecvuser);
	}

	/**
	 * 方法描述: 查询邮件阅读状态
	 * 
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception
	 * @return TAtNoticerecvuser[]
	 */
	public TAtNoticerecvuser[] queryNoticereadstatus(Map condition)
			throws Exception {
		return queryByNamedSql(
				TAtNoticerecvuser.class,
				"com.zoomlion.hjsrm.frame.tools.notice.noticequery.getNoticesByUserID",
				condition);
	}
}
