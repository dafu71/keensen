package com.zoomlion.hjsrm.frame.tools.announce;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.data.tools.Tools.VAtAnnounceReader;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

/**
 * 方法描述: 查看公告查阅信息
 * 
 * @author 刘鑫
 * @param announce
 * @throws Exception
 * @return VAtAnnounceReader[]
 */
public class AnnounceReadrecordDao extends BaseDao {

	public DataObject[] queryannounceReader(Map paramObj, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.frame.tools.announce.announce.queryAnnouncesread2",
						pageCond, paramObj);
	}

	public DataObject[] queryannouncenotReader(Map paramObj, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.frame.tools.announce.announce.queryAnnouncesnotread",
						pageCond, paramObj);
	}

	public DataObject[] queryannounceReadorg(Map paramObj) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.frame.tools.announce.announce.queryAnnouncesreadorg",
						paramObj);
	}

	public VAtAnnounceReader[] queryAnnounceReadrecordByOrg(
			VAtAnnounceReader announce) throws Exception {

		return this
				.queryByNamedSql(
						VAtAnnounceReader.class,
						"com.zoomlion.hjsrm.frame.tools.announce.announce.queryAnnouncesread",
						announce);

	}
}
