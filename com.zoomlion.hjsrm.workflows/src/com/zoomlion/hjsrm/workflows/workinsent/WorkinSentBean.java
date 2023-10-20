package com.zoomlion.hjsrm.workflows.workinsent;

import java.util.HashMap;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

/**
 * 
 * <pre>
 *     Title: 我的工作-已派工单
 *     Description: 查询已派工作单，并提供环节流程图查询功能。
 * </pre>
 * @author 蔡慧文
 * @date 2013-6-6 下午06:41:43
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录
 */
public class WorkinSentBean extends BaseBean {
	
	private WorkinSentDao workinSentDao;
	
	public void setWorkinSentDao(WorkinSentDao workinSentDao) {
		this.workinSentDao = workinSentDao;
	}


	/**
	 * 分页查询已派工单
	 * @param condition	查询条件
	 * @param pageCond	分页信息
	 * @return 工单结果集
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] querySentWithPage(HashMap condition, PageCond pageCond) throws BusinessException {
		DataObject[] data = null;
		//当前用户
		String userId = null;
		try {
			userId = Common.getCurrentUserId();
		} catch (Exception e) {
			SrmLog.error("查询当前用户信息异常!", e);
			throw new BusinessException("查询当前用户信息异常!",e.getMessage());
		}
		//派工者id
		condition.put("sourceoptr", userId);
		try {
			//查询
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			data = this.workinSentDao.querySentWithPage(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("分页查询已派工单异常!", e);
			throw new BusinessException("分页查询已派工单异常!", e.getMessage());
		}
		return data;
	}
	
}
