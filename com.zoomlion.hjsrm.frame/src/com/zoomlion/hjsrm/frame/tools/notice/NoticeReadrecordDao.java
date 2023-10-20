package com.zoomlion.hjsrm.frame.tools.notice;

/**
 * **************************************************
 * 描    述：  实现邮件查阅信息
 * @author   刘鑫
 * **************************************************
 */
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;

import com.zoomlion.hjsrm.data.tools.Tools.VAtNoticereader;
import commonj.sdo.DataObject;

public class NoticeReadrecordDao extends BaseDao {
	public VAtNoticereader[] queryNoticeReadrecordByOrg(VAtNoticereader notice)
			throws Exception {

		return this
				.queryByNamedSql(
						VAtNoticereader.class,
						"com.zoomlion.hjsrm.frame.tools.notice.noticequery.queryNoticeread",
						notice);

	}

	public DataObject[] querynoticeReader(Map paramObj, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.frame.tools.notice.noticequery.queryNoticeread2",
						pageCond, paramObj);
	}

	public DataObject[] querynoticenotReader(Map paramObj, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.frame.tools.notice.noticequery.queryNoticenotread",
						pageCond, paramObj);
	}
}
