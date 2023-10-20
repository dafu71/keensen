package com.zoomlion.hjsrm.workflows.comprehensive;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

/**
 * <pre>
 *      Title: 我的工作-综合工作单处理
 *      Description: 工作单综合查询、处理、流程图。
 * </pre>
 * 
 * @author 雷德猛
 * @date 2013-7-9 下午02:20:54
 * @version 1.0
 */
/*
 * =======================修改历史============================== 补丁号 修改人 时间 区域 备注
 * 修改一次添加一条修改记录
 */

public class ComprehensiveBean extends BaseBean {
	private ComprehensiveDao comprehensiveDao;

	/**
	 * 
	 * 方法描述：(查询综合工单信息)
	 * 
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws BusinessException
	 * @author 雷德猛
	 * @time:2013-7-9 下午02:40:13
	 */
	public DataObject[] querySynOrder(Map<String, String> condition, PageCond pageCond) throws BusinessException {
		try {
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return this.comprehensiveDao.querySrmOrder(condition, pageCond);
		} catch (Exception e) {
			SrmLog.error("综合工作单查询失败！", e);
			throw new BusinessException("综合工作单查询失败！", e.getMessage());
		}
	}

	/**
	 * 
	 * 方法描述: 综合工单查询-导出EXCEL
	 * @author 何源
	 * @param condition
	 * @return
	 * @throws BusinessException 描述******
	 * @return DataObject[]
	 */
	@SuppressWarnings("unchecked")
	public DataObject[] queryAllWorklist(Map condition) throws BusinessException {
		DataObject[] datas = null;
		try {
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			datas = this.comprehensiveDao.queryAllWorklist(condition);
		} catch (Exception e) {
			SrmLog.error("导出工单失败！", e);
			throw new BusinessException("导出工单失败！", e.getMessage());
		}
		if(datas.length > 20000){
			SrmLog.error("工单记录超过20000条，导出失败！");
			throw new BusinessException("工单记录超过20000条，导出失败！", "");
		}
		return datas;
	}
	
	public void setComprehensiveDao(ComprehensiveDao comprehensiveDao) {
		this.comprehensiveDao = comprehensiveDao;
	}
}
