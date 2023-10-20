package com.zoomlion.hjsrm.frame.tools.announce;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.data.tools.Tools.TAtAnnounce;
import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现公告管理功能
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-28 陈今伟 创建文件
 *      **************************************************
 */
public class AnnounceDao extends BaseDao {

	/**
	 * 方法描述: 查询公告列表
	 * 
	 * @author 陈今伟
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 * @return TAtAnnounce[]
	 */
	public TAtAnnounce[] queryAnnounces(Map conditon, PageCond pagecond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						TAtAnnounce.class,
						"com.zoomlion.hjsrm.frame.tools.announce.announce.queryAnnounces",
						pagecond, conditon);
	}

	/**
	 * 方法描述: 删除公告部门关联关系表
	 * 
	 * @author 方曦
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 * @return TAtAnnounce[]
	 */
	public void deleteAnnounceOrganization(Map<String, Object> condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.frame.tools.announce.announce.deleteAnnounceOrganization",
						condition);
	}

	/**
	 * 方法描述: 校验title是否重复
	 * 
	 * @author 方曦
	 * @param conditon
	 * @param pagecond
	 * @return
	 * @throws Exception
	 * @return TAtAnnounce[]
	 */
	public String checkTitle(String title) {
		DataObject[] objs = this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.frame.tools.announce.announce.checkTitle",
				title);
		if (objs.length > 0) {
			return "error";
		}
		return "ok";
	}
}
