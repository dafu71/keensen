package com.zoomlion.hjsrm.frame.tools.notice;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticeinfo;
import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticerecvuserImpl;

public class NoticeReadDao extends BaseDao {

	/**
	 * 方法描述: 查看邮件后改变状态
	 * 
	 * @author 刘鑫
	 * @param notice
	 * @throws Exception
	 * @return void
	 */
	public void addNoticeRead(TAtNoticeinfo notice) throws Exception {
		TAtNoticerecvuser ar = new TAtNoticerecvuserImpl();
		ar.setNoticeid(notice.getNoticeid());
		ar.setRecvuserid(Common.getCurrentUserId());
		ar.setRecvusername(Common.getCurrentUseObject().getUserName());
		ar.setReadstatus(2);
		ar.setReadtime(Common.getCurrentTime());
		this.saveEntity(ar);

	}
}