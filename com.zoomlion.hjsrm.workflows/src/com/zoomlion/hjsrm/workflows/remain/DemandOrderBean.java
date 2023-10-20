package com.zoomlion.hjsrm.workflows.remain;

import java.util.HashMap;

import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

/**
 * 
 * <pre>
 *     Title: 工作单管理-工作单详细信息
 *     Description: 工作单详细信息查询。
 * </pre>
 * @author 毛晓东
 * @date 2013-6-7 下午04:25:04
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录
 */
public class DemandOrderBean extends BaseBean{

	
	private DemandOrderDao demandOrderDao;
	
	public void setDemandOrderDao(DemandOrderDao demandOrderDao) {
		this.demandOrderDao = demandOrderDao;
	}

    /**
     * 
     * 方法描述：(工作单详细信息查询) 
     *
     * @param condition
     * @return
     * @throws BusinessException
     * @author 毛晓东
     * @time:2013-6-7 下午04:27:12
     */
	@SuppressWarnings("unchecked")
	public DataObject[] queryDemandOrder(HashMap condition)throws BusinessException {
		try {
			condition.put("dataorgid", Common.getCurrentUserDataOrgId());
			return this.demandOrderDao.queryDemandOrder(condition);
		} catch (Exception e) {
			SrmLog.error("根据工单号工作单详细信息失败!", e);
			throw new BusinessException("根据工单号查询工作单详细信息失败！", e.getMessage());
		}
	}
    
}
