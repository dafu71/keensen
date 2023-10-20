package com.zoomlion.hjsrm.frame.tools.notice;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticeinfo;
import com.zoomlion.hjsrm.data.tools.Tools.VAtNoticeHis;

import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现邮件收发功能
 * 
 * @author 刘鑫
 * 
 * **************************************************
 */
public class NoticeInfoDao extends BaseDao {

	public void addNoticeInfo(TAtNoticeinfo tatnoticeinfo) throws Exception {
		this.insertEntity(tatnoticeinfo);
	}

	public DataObject[] getNotices(Map condition) throws Exception {
		return queryByNamedSql(
				DataObject.class,
				"com.zoomlion.hjsrm.frame.tools.notice.noticequery.getNoticesByUserID",
				condition);
	}

	/**
	 * 方法描述: 加载收件箱邮件信息
	 * 
	 * @author 刘鑫
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getNoticesHis(DataObject notice, DataObject entity,
			PageCond pageCond) throws Exception {
		Map condition = new HashMap();
		if (notice.getString("title")!= null && !notice.getString("title").equals("")) {
			condition.put("title",notice.getString("title"));
		}
		if (notice.getString("readstatus") != null
				&& !notice.getString("readstatus").equals("")) {
			condition.put("readstatus", notice.getString("readstatus"));
		}
		if (notice.getString("sendusername") != null
				&& !notice.getString("sendusername").equals("")) {
			condition.put("sendusername", notice.getString("sendusername"));
		}
		if (entity.getString("startDate") == null
				&& entity.getString("endDate") != null) {
			condition.put("startDate", Common.getSysDate());
			condition.put("endDate", entity.getString("endDate"));
		} else if (entity.getString("startDate") != null
				&& entity.getString("endDate") == null) {
			condition.put("startDate", entity.getString("startDate"));
			condition.put("endDate", Common.getSysDate());
		} else {
			condition.put("startDate", entity.getString("startDate"));
			condition.put("endDate", entity.getString("endDate"));
		}
		String uid = Common.getCurrentUserId();
		condition.put("uid", uid);

		return queryByNamedSqlWithPage(
				DataObject.class,
				"com.zoomlion.hjsrm.frame.tools.notice.noticequery.getNoticeHis",
				pageCond, condition);
	}

	/**
	 * 方法描述: 加载收件箱邮件信息（主页专用）
	 * 
	 * @author 刘鑫
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getNoticesHiszhuye(PageCond pageCond) throws Exception {
		Map condition = new HashMap();
		String uid = Common.getCurrentUserId();
		condition.put("uid", uid);
		return queryByNamedSqlWithPage(
				DataObject.class,
				"com.zoomlion.hjsrm.frame.tools.notice.noticequery.getNoticeHis",
				pageCond, condition);
	}

	/**
	 * 方法描述: 加载发件箱邮件信息
	 * 
	 * @author 刘鑫
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] getNoticesHisSend(DataObject query, DataObject entity,
			PageCond pageCond) throws Exception {
		Map condition = new HashMap();
		if (query.getString("title") != null
				&& !query.getString("title").equals("")) {
			condition.put("title", query.getString("title"));
		}
		if (query.getString("recvusername") != null
				&& !query.getString("recvusername").equals("")) {
			condition.put("recvusername", query.getString("recvusername"));
		}
		if (entity.getString("startDate") == null
				&& entity.getString("endDate") != null) {
			condition.put("startDate", Common.getSysDate());
			condition.put("endDate", entity.getString("endDate"));
		} else if (entity.getString("startDate") != null
				&& entity.getString("endDate") == null) {
			condition.put("startDate", entity.getString("startDate"));
			condition.put("endDate", Common.getSysDate());
		} else {
			condition.put("startDate", entity.getString("startDate"));
			condition.put("endDate", entity.getString("endDate"));
		}
		String uid = Common.getCurrentUserId();
		condition.put("uid", uid);
		return queryByNamedSqlWithPage(
				DataObject.class,
				"com.zoomlion.hjsrm.frame.tools.notice.noticequery.getNoticeHisSend",
				pageCond, condition);
	}
	/**
	 * 方法描述: 查询被删除的邮件
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] querylajinotice(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.frame.tools.notice.noticequery.querylajinotice",
				pageCond, condition);
	}
}
