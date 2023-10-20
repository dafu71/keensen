/**
 * 
 */
package com.zoomlion.hjsrm.workflows.ticket;

import java.util.HashMap;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

/**
 * 
 * <pre>
 *     Title: 我的工作-统一待办
 *     Description: 查询统一待办工单流程实例工作项。
 * </pre>
 * @author 毛晓东
 * @date 2013-6-6 下午06:38:06
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录
 */
public class TicketBean extends BaseBean {

	private TicketDao ticketDao;

	public void setTicketDao(TicketDao ticketDao) {
		this.ticketDao = ticketDao;
	}

	/**
	 * 查询流程实例工作项列表
	 * 
	 * @param condition
	 * @param pageCond
	 * @return DataObject[]
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryWorkItems(HashMap condition, PageCond pageCond)throws BusinessException {
		try {
			return this.ticketDao.queryWorkItems(condition ,pageCond);
		} catch (Exception e) {
			SrmLog.error("查询流程实例工作项列表失败!", e);
			throw new BusinessException("查询流程实例工作项列表失败！", e.getMessage());
		}
	}

}
