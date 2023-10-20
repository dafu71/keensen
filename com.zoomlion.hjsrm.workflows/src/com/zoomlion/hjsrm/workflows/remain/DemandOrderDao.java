package com.zoomlion.hjsrm.workflows.remain;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
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
public class DemandOrderDao extends BaseDao{

	/**
	 * 
	 * 方法描述：(根据工作单编号查询热线工作单列表) 
	 *
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception
	 * @author 毛晓东
	 * @time:2013-6-7 下午02:12:19
	 */
	public DataObject[] queryDemandOrder(Map condition) throws Exception{
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.demandorder.queryDemandOrder", condition);
	}
}
