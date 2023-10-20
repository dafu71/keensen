/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： 我的工作-待办工单，包括待办工作的查询和统一处理。
*创建日期： 2014-10-9
*补丁编号： G3_P_20140915_01_212
*作    者： 何源
*******************************************************************/
//==============================修改历史===========================
//      补丁编号                 修改人     日期       归属       备注
// G3_P_20140709_01_101        肖斌    2014-8-8    集团  
// G3_P_20140915_01_212        何源    2014-10-9   集团 
//=================================================================
package com.zoomlion.hjsrm.workflows.remain;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.core.exception.BusinessException;

import commonj.sdo.DataObject;

/*******************************************************************************
 * 
 * 版权所有： 港华科技（武汉）有限公司
 * 
 * 描 述： 我的工作-待办工单，包括待办工作的查询和统一处理。
 * 
 * 创建日期： 2014-8-8
 * 
 * 补丁编号： G3_P_20140709_01_101
 * 
 * 作 者： 肖斌
 * 
 ******************************************************************************/

// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// G3_P_XXXXXXXX_XX_XX XX XXXXXXXX 集团
// =================================================================
public class RemainDao extends BaseDao {

	/**
	 * 方法描述: 根据查询条件查询待办工单
	 * 
	 * @author 吕俊涛
	 * @param paramMap
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryRemainTicketWithPage(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.workflows.remain.remain.queryWorkflowsRemain", pageCond, paramObj);
	}
	
	/**
	 * 
	 * 方法描述：(不分页查询业务待办工单) 
	 *
	 * @param paramObj
	 * @return
	 * @throws Exception
	 * @author 毛晓东
	 * @time:2013-8-21 下午03:50:32
	 */
	public DataObject[] queryRemainTicket(Map paramObj)throws Exception {
        return this.queryByNamedSql(DataObject.class,
		        "com.zoomlion.hjsrm.workflows.remain.remain.queryWorkflowsRemain",  paramObj);
    }
	
	/**
	 * 方法描述: 根据查询条件查询热线待办工单
	 * 
	 * @author maoxiaodong
	 * @param paramMap
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryDemandRemainWithPage(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.workflows.remain.remain.queryDemandRemain", pageCond, paramObj);
	}
	
	

	/**
	 * 方法描述: 根据登陆用户机构查询其所有子机构
	 * 
	 * @author 吕俊涛
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public String querySubOrgWithOrg(Map paramObj) throws Exception {
		StringBuffer outData = new StringBuffer();
		DataObject[] orgs = this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.remain.queryAllOrgs", paramObj);
		if (orgs.length == 0) {
			return "";
		} else {
			for (DataObject org : orgs) {
				outData.append("'").append(org.get("orgid")).append("',");
			}
			return outData.substring(0, outData.length() - 1);
		}
	}

	/**
	 * 查询待办工单信息，以导出excel
	 * @param paramObj 查询条件
	 * @return 待办工单集合
	 * @throws Exception
	 * @author 蔡慧文
	 */
	public DataObject[] getRemainForExport(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.remain.queryWorkflowsRemain", paramObj);
	}
	
	/**
	 * 分页查询可进行分配的工作项
	 * @param condition	查询条件
	 * @param pageCond	分页信息
	 * @return 工作项集合
	 * @throws Exception
	 * @author 蔡慧文
	 */
	public DataObject[] queryDispatchingWithPage(Map condition, PageCond pageCond) throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.remain.queryDispatchingWithPage", pageCond, condition);
	}
	
	/**
	 * 分页查询已分派的情况
	 * @param condition	查询条件
	 * @param pageCond	分页信息
	 * @return 分派的情况集合
	 * @throws Exception
	 * @author 蔡慧文
	 */
	public DataObject[] queryDispatchedWithPage(Map condition, PageCond pageCond) throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.remain.queryDispatchedWithPage", pageCond, condition);
	}
	
	/**
	 * 取消派工
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public void doCancelDispatchedWorkItem(String pkids) throws Exception {
		this.executeNamedSql("com.zoomlion.hjsrm.workflows.remain.remain.doCancelDispatchedWorkItem", pkids);
	}
	/**
	 * 查询待办工单的优先级
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject loadUrglvlByPkId(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.remain.loadUrglvlByPkid", condition)[0];
	}
	/**
	 * 设置优先级
	 * @param condition
	 * @throws Exception
	 */
	public void updateUrglvl(Map condition) throws Exception{
		this.executeNamedSql("com.zoomlion.hjsrm.workflows.remain.remain.updateUrglvl", condition);
	}
	
	/**
	 * 查询待办工单的超期说明
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryTimeOutExplain(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.remain.queryTimeOutExplain", condition);
	}
	
	/**
	 * 插入待办工单的超期说明
	 * @param condition
	 * @throws Exception
	 */
	public void addTimeOutExplain(Map condition) throws Exception{
		this.executeNamedSql("com.zoomlion.hjsrm.workflows.remain.remain.insertTimeOutExplain", condition);
	}
	
	/**
	 * 查询工单的基本信息
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryRemainSheeet(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.remain.queryReaminSheeet", condition);
	}
	/**
	 * 查询送货/安装诉求信息
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryAppliance(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.print.queryAppliance", condition);
	}
	/**
	 * 查询维修诉求信息
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryRepairAppliance(Map condition) throws Exception {
	    return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.print.queryRepairAppliance", condition);
	}

	/**
	 * 
	 * 方法描述：获取部门联络单要打印的数据
	 *
	 * @param condition
	 * @return
	 * @author 石绍锋
	 * @time:2014-1-9 下午07:49:11
	 */
	public DataObject[] getDepartmentliaisonData(Map<String, String> condition) {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.print.getDepartmentliaisonData", condition);
	}
	
	/**
	 * 
	 * 方法描述：查询诉求待办工单信息（打印）
	 *
	 * @param condition
	 * @return
	 * @author 何源
	 * @time:2014-1-20 下午07:49:11
	 */
	public DataObject[] queryApplyRemainInfo(Map condition) {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.print.queryApplyRemainInfo", condition);
	}
	
	/**
	 * 
	 * 方法描述：查询表处理工单信息（顺德打印）
	 *
	 * @param condition
	 * @return
	 * @author 何源
	 * @time:2014-1-20 下午07:49:11
	 */
	public DataObject[] queryMeterDealPrint(Map condition) {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.print.queryMeterDealPrint", condition);
	}
	
	/**
	 * 
	 * 方法描述：查询业务工单通用打印内容
	 *
	 * @param condition
	 * @return
	 * @author 何源
	 * @time:2014-1-20 下午07:49:11
	 */
	public DataObject[] queryCommonPrintBusiRemain(Map condition) {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.remain.print.queryCommonPrintBusiRemain", condition);
	}
	
}
