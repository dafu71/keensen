package com.zoomlion.hjsrm.frame.tools.announce;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.tools.Tools.TAtAnnounce;
import com.zoomlion.hjsrm.data.tools.Tools.TAtAnnounceRead;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAnnounceReadImpl;

/**
 * ************************************************** 描 述： 实现查看公告功能
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-28 陈今伟 创建文件
 *      **************************************************
 */
public class AnnounceReadDao extends BaseDao {

	/**
	 * 方法描述: 查看公告
	 * 
	 * @author 陈今伟
	 * @param announce
	 * @throws Exception
	 * @return void
	 */
	public void addAnnounceRead(TAtAnnounce announce) throws Exception {
		TAtAnnounceRead ar = new TAtAnnounceReadImpl();
		ar.setUserid(Common.getCurrentUserId());
		ar.setUsername(Common.getCurrentUseObject().getUserName());
		ar.setReadtime(Common.getCurrentTime());
		ar.setAnnounceid(announce.getAnnounceid());
		this.saveEntity(ar);
	}

}
