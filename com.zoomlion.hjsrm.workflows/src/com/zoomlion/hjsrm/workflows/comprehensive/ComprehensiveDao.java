/** 
 *  
 */ 
package com.zoomlion.hjsrm.workflows.comprehensive;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

/**
 * <pre>
 *    Title: 我的工作-综合工作单处理
 *     Description: 工作单综合查询、处理、流程图。
 * </pre>
 * @author 雷德猛
 * @date 2013-7-9 下午02:23:10
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录                
 */

public class ComprehensiveDao extends BaseDao {
	
	/**
	 * 
	 * 方法描述：(TCIS综合工作单分页查询) 
	 *
	 * @param condition
	 * @param pageCond
	 * @return
	 * @throws Exception
	 * @author 雷德猛
	 * @time:2013-7-9 下午02:47:12
	 */
	public DataObject[] querySrmOrder(Map<String,String> condition,PageCond pageCond)throws Exception {
		return queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.workflows.comprehensive.comprehensive.querySrmOrder", pageCond, condition);
	}
	
	/**
	 * 
	 * 方法描述: 综合工单查询-导出EXCEL
	 * @author 何源
	 * @param condition
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject[]
	 */
	public DataObject[] queryAllWorklist(Map<String,String> condition)throws Exception {
		return queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.comprehensive.comprehensive.queryAllWorklist", condition);
	}
}
