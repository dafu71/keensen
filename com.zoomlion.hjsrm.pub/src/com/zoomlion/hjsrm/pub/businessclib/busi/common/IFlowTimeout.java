package com.zoomlion.hjsrm.pub.businessclib.busi.common;

/**
 * <pre>
 *     Title: 流程超时处理接口类
 *     Description: 流程超时处理
 * </pre>
 * @author How
 * @date 2013-9-16
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录                
 */

public interface IFlowTimeout {
	/**
	 * 方法描述:	流程超时预警处理接口方法	
	 * @author 陈今伟
	 * @param busiType
	 * @param processdefinepkid
	 * @param worklistinfopkid
	 * @param userId 描述******
	 * @return void
	 */
	public void doBeforeTimeout(String busiType,String processdefinepkid,String worklistinfopkid,String userId);
	
	/**
	 * 方法描述:	流程超时后处理接口方法
	 * @author 陈今伟
	 * @param busiType
	 * @param processdefinepkid
	 * @param worklistinfopkid
	 * @param userId 描述******
	 * @return void
	 */
	public void doAfterTimeout(String busiType,String processdefinepkid,String worklistinfopkid,String userId);
}
