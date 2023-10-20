package com.zoomlion.hjsrm.pub.businessclib.busi.common;

import com.zoomlion.hjsrm.core.exception.BusinessException;

/**
 * <pre>
 * Title: 	流程级别规则校验接口类
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

public interface BaseFlowEvent {
	
	/**
	 * 方法描述：启动流程前校验	
	 * @param busiType 业务类型编码
	 * @param processdefinepkid 流程定义pkid
	 * @param worklistinfopkid 工单pkid
	 * @param userId 用户号
	 * @return
	 * boolean
	 */
	public MsgEntity beforeStartFlow(String busiType,String userId)throws BusinessException;
	
	/**
	 * 方法描述:	流程完成后处理	
	 * @param busiType 业务类型
	 * @param processdefinepkid 流程定义pkid
	 * @param worklistinfopkid 工单pkid
	 * @param userId 用户号
	 * @throws BusinessException
	 * void
	 */
	public void doAfterFinished(String busiType,String processdefinepkid,String worklistinfopkid,String userId)throws BusinessException;
	
	/**
	  * 方法描述：流程注销前校验
	 * @param activityInstID 活动定义ID
	 * @param busiType 业务类型
	 * @param worklistinfopkid 工单ID
	 * @param userId 用户号
	 * @return
	 * MsgEntity
	 */
	public MsgEntity beforeCanceled(String busiType,String worklistinfopkid,String userId)throws BusinessException;
	
	/**
	 * 方法描述:	流程注销后处理	
	 * @author 陈今伟
	 * @param busiType 业务类型
	 * @param processdefinepkid 流程定义pkid
	 * @param worklistinfopkid 工单pkid
	 * @param userId 用户号
	 * @throws BusinessException
	 * void
	 */
	public void doAfterCanceled(String busiType,String processdefinepkid,String worklistinfopkid,String userId)throws BusinessException;
}
