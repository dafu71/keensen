package com.zoomlion.hjsrm.workflows.workinsent;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;
/**
 * 
 * <pre>
 *     Title: 我的工作-已派工单
 *     Description: 查询已派工作单，并提供环节流程图查询功能。
 * </pre>
 * @author 毛晓东
 * @date 2013-6-6 下午06:42:33
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录
 */
public class WorkinSentDao extends BaseDao {
	
	/**
	 * 分页查询已派工单
	 * @param condition	查询条件
	 * @param pageCond	分页信息
	 * @return 工单结果集
	 * @throws Exception
	 */
	public DataObject[] querySentWithPage(Map condition, PageCond pageCond) throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.workflows.workinsent.workinsent.querySentWithPage", pageCond, condition);
	}
	
}
