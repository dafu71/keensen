package com.zoomlion.hjsrm.pub.businessclib.busi.common;

import java.util.Map;

import com.zoomlion.hjsrm.core.exception.BusinessException;

/**
 * <pre>
 * Title: 业务规则操作接口类
 * Description: 程序功能的描述
 * </pre>
 * @author   陈今伟
 * @version   1.0    
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 *
 */

public interface BaseBusiRule {
	/**
	 * 方法描述:	统一业务校验接口方法
	 * @author 陈今伟
	 * @param busiParams
	 * @return
	 * @throws BusinessException 描述******
	 * @return Map (校验结果集：必须包含msg(校验失败提示信息)/returnvalue(返回校验值,用于与配置信息中校验使用))
	 */
	public Map execute(Map busiParams) throws BusinessException;
	
	/**
	 * 方法描述:	统一传递保存工单/业务信息接口方法
	 * @author 陈今伟
	 * @param workItemID
	 * @param busiParams
	 * @throws BusinessException 描述******
	 * @return void
	 */
	public void unifyDeliver(Long workItemID, Map busiParams) throws BusinessException;
}
