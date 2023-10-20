package com.zoomlion.hjsrm.workflows.ticket;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;
/**
 * 
 * <pre>
 *     Title: 我的工作-统一待办
 *     Description: 查询统一待办工单流程实例工作项。
 * </pre>
 * @author 毛晓东
 * @date 2013-6-6 下午06:38:48
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录
 */
public class TicketDao extends BaseDao {

	/**
	 * 查询流程实例工作项列表
	 * @param condition
	 * @param pageCond
	 * @return DataObject[]
	 * @throws Exception
	 */
	public DataObject[] queryWorkItems(Map condition ,PageCond pageCond) throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.workflows.ticket.ticket.queryWorkitemsById2", pageCond ,condition);
	}
}
