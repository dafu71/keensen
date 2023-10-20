package com.zoomlion.hjsrm.workflows.workinfinished;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

/**
 * 
 * <pre>
 *     Title: 我的工作-已办工单
 *     Description: 查询已办工作单，并提供环节流程图查询功能。
 * </pre>
 * @author 蔡慧文
 * @date 2013-6-6 下午06:40:45
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录
 */
public class WorkinFinishedDao extends BaseDao {
	
	/**
	 * 
	 * 方法描述：分页查询已办工单
	 *
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception
	 * @author 毛晓东
	 * @time:2013-7-31 下午02:23:36
	 */
	public DataObject[] queryFinishedWithPage(Map condition, PageCond pageCond) throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.workflows.workinfinished.workinfinished.queryFinishedWithPage", pageCond, condition);
	}
}
