package com.zoomlion.hjsrm.workflows.common;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

/**
 * 
 * <pre>
 *     Title: 我的工作-公共业务
 *     Description:提供业务类别(流程定义)、当前环节查询
 * </pre>
 * 
 * @author 蔡慧文
 * @version 1.0
 * 
 */
/*
 * =======================修改历史==============================
 * 
 * 
 */
public class WorkinCommonDao extends BaseDao {
	
	/**
	 * 查询所有业务流程定义
	 * @return 业务流程定义集合
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public DataObject[] queryAllBizProcess() throws Exception {
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.workflows.common.workincommon.queryAllBizProcess", null);
	}
	
	/**
	 * 根据部门id,分页查询操作员
	 * @param condition		查询条件
	 * @param pageCond		分页信息
	 * @return 操作员集合
	 * @throws BusinessException
	 * @author 蔡慧文
	 */
	public DataObject[] queryOperatorByDataOrgIdWithPage(Map condition, PageCond pageCond) throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.workflows.common.workincommon.queryOperatorByDataOrgId", pageCond, condition);
	}
	/**
	 * 
	 * 方法描述：查询诉求补话信息	
	 * @param cond
	 * @param pageCond
	 * @return
	 * DataObject[]
	 */
	public DataObject[] queryComplementByApply(Map cond,PageCond pageCond){
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.workflows.common.workincommon.queryComplementByApply", pageCond,cond);
	}
}
