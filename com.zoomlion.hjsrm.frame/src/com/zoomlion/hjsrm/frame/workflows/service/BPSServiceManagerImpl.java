package com.zoomlion.hjsrm.frame.workflows.service;

import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.access.client.ServiceContext;
import com.eos.sca.host.IServiceInvoker;
import com.eos.workflow.api.BPSServiceClientFactory;
import com.eos.workflow.api.IBPSServiceClient;
import com.eos.workflow.api.IWFActivityInstManager;
import com.eos.workflow.api.IWFBackActivityManager;
import com.eos.workflow.api.IWFDefinitionQueryManager;
import com.eos.workflow.api.IWFProcessInstManager;
import com.eos.workflow.api.IWFWorkItemDrawbackManager;
import com.eos.workflow.api.IWFWorkItemManager;
import com.eos.workflow.data.WFActivityDefine;
import com.eos.workflow.data.WFActivityInst;
import com.eos.workflow.data.WFAgent;
import com.eos.workflow.data.WFAgentItem;
import com.eos.workflow.data.WFProcessDefine;
import com.eos.workflow.data.WFProcessInst;
import com.eos.workflow.data.WFWorkItem;
import com.eos.workflow.omservice.WFParticipant;
import com.eos.workflow.omservice.WIParticipantInfo;
import com.primeton.bps.data.WFBizProcessDef;
import com.primeton.workflow.api.WFReasonableException;
import com.primeton.workflow.api.WFServiceException;
import com.zoomlion.hjsrm.clib.util.SrmLog;

/**
 * ************************************************** 描 述： 工作流相关API封装类
 * 
 * @author 陈今伟
 * @version 1.0
 * @see HISTORY 2013-1-29 陈今伟 创建文件
 *      **************************************************
 */
public class BPSServiceManagerImpl {

	final static int BPS_WORKITEM_RUNNING = 10;// 待领取（4）、运行（10）、完成（12）、终止（13）、挂起（8）

	final static int BPS_PROC_RUNNING = 2;// 未启动（1）、运行（2）、挂起（3）、完成（7）、终止（8）

	final static int BPS_PROC_SUSPENDED = 3;

	private static IBPSServiceClient client = null;

	/**
	 * 方法描述: 通过客户端工厂BPSServiceClientFactory创建默认的客户端实例
	 * 
	 * @author 陈今伟
	 * @throws Exception
	 *             描述******
	 * @return void
	 * @throws WFServiceException
	 */
	private static void getClient() throws WFServiceException {
		if (client == null) {
			client = BPSServiceClientFactory.getDefaultClient();
		}
	}

	private static void getClient(String clientID) throws WFServiceException {
		if (client == null) {
			client = BPSServiceClientFactory.getClient(clientID);
		}
	}

	/** ***********************************流程流转相关******************************************************************************* */

	/** **********创建与启动********** */

	/**
	 * 方法描述: 创建流程
	 * 
	 * @author 陈今伟
	 * @param processDefName
	 *            流程定义名称
	 * @param processInstName
	 *            流程实例名称
	 * @param processInstDesc
	 *            流程实例描述
	 * @return
	 * @throws Exception
	 * @return long 流程实例ID
	 */
	public static long createProcessInst(String processDefName,
			String processInstName, String processInstDesc) throws Exception {
		long processInstID = 0;
		try {
			// 获取流程实例管理器接口
			getClient();
			IWFProcessInstManager mng = client.getProcessInstManager();
			// 创建流程实例，获取流程实例ID
			processInstID = mng.createProcessInstance(processDefName,
					processInstName, processInstDesc);
		} catch (Exception e) {
			SrmLog.error("createProcessInst error", e);
			throw e;
		}
		return processInstID;
	}

	/**
	 * 方法描述: 创建流程并且设置相关数据
	 * 
	 * @author 陈今伟
	 * @param processDefName
	 *            流程定义名称
	 * @param processInstName
	 *            流程实例名称
	 * @param processInstDesc
	 *            流程实例描述
	 * @return
	 * @throws Exception
	 * @return long 流程实例ID
	 */
	public static long createProcessInstAndSetRelaData(String processDefName,
			String processInstName, String processInstDesc,
			Map<String, Object> reldata) throws Exception {
		long processInstId = 0;
		try {
			getClient();
			processInstId = client.getProcessInstManager()
					.createProcessInstance(processDefName, processInstName,
							processInstDesc);
			client.getRelativeDataManager().setRelativeDataBatch(processInstId,
					reldata);
		} catch (Exception e) {
			SrmLog.error("createProcessInstAndSetRelaData error", e);
			throw e;
		}
		return processInstId;
	}

	/**
	 * 方法描述: 启动流程并设置相关数据
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @param reldata
	 *            相关数据
	 * @return
	 * @throws Exception
	 */
	public static void startProcInstAndSetRelaData(long processInstID,
			Map<String, Object> reldata) throws Exception {
		try {
			getClient();
			client.getProcessInstManager().startProcessInstance(processInstID);
			if (null != reldata) {//相关数据不为空
				client.getRelativeDataManager().setRelativeDataBatch(
						processInstID, reldata);
			}
		} catch (Exception e) {
			SrmLog.error("startProcInstAndSetRelaData error", e);
			throw e;
		}
	}

	/**
	 * 方法描述: 启动流程并设置相关数据区，并完成第一个工作项 事务为join
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @param reldata
	 *            相关数据
	 * @return
	 * @throws Exception
	 */
	public static void startProcInstAndSetRelaDataAndFnshFirst(
			long processInstID, Map<String, Object> reldata) throws Exception {
		try {
			getClient();
			client.getProcessInstManager()
					.startProcessInstAndFinishFirstWorkItem(processInstID,
							false, null);
			client.getRelativeDataManager().setRelativeDataBatch(processInstID,
					reldata);
		} catch (Exception e) {
			SrmLog.error("startProcInstAndSetRelaDataAndFnshFirst error", e);
			throw e;
		}
	}

	/**
	 * 方法描述: 创建、启动流程、设置相关数据并完成第一个工作项
	 * 
	 * @author 陈今伟
	 * @param processDefName
	 *            流程定义名称
	 * @param proceInstName
	 *            流程实例名称
	 * @param span
	 *            是否分割事务
	 * @param procInstDesc
	 *            流程实例描述
	 * @param arguments
	 *            相关数据
	 * @return
	 * @throws Exception
	 */
	public static long createAndStartWithSetRelateDateAndFinishFirstWorkItem(
			String processDefName, String proceInstName, boolean span,
			String procInstDesc, Map<String, Object> arguments)
			throws Exception {
		long processInstId = 0;
		try {
			try {
				getClient();
				processInstId = client.getProcessInstManager()
						.createAndStartProcInstAndSetRelativeData(
								processDefName, proceInstName, procInstDesc,
								span, arguments);
			} catch (Exception e) {
				SrmLog.error("create process error", e);
				throw e;
			}
			boolean fetchPartics = false; // 返回参数比较少的 不带参与者的列表
			if (processInstId > 0) {
				List<WFWorkItem> list = client.getWorkItemManager()
						.queryNextWorkItemsByProcessInstID(processInstId,
								fetchPartics);
				if (list != null) {
					WFWorkItem firstItem = list.get(0);
					client.getWorkItemManager().finishWorkItem(
							firstItem.getWorkItemID(), true);
				}
			}
		} catch (Exception e) {
			SrmLog
					.error(
							"createAndStartWithSetRelateDateAndFinishFirstWorkItem error",
							e);
			throw e;
		}
		return processInstId;
	}

	/**
	 * 方法描述: 创建、启动流程、设置相关数据
	 * 
	 * @author 蔡慧文
	 * @param processDefName
	 *            流程定义名称
	 * @param proceInstName
	 *            流程实例名称
	 * @param span
	 *            是否分割事务
	 * @param procInstDesc
	 *            流程实例描述
	 * @param arguments
	 *            相关数据
	 * @return
	 * @throws Exception
	 */
	public static long createAndStartProcInstAndSetRelativeData(
			String processDefName, String proceInstName, boolean span,
			String procInstDesc, Map<String, Object> arguments)
			throws Exception {
		long processInstId = 0;
		try {
			try {
				getClient();
				processInstId = client.getProcessInstManager()
						.createAndStartProcInstAndSetRelativeData(
								processDefName, proceInstName, procInstDesc,
								span, arguments);
			} catch (Exception e) {
				SrmLog.error("create process error", e);
				throw e;
			}
		} catch (Exception e) {
			SrmLog.error("createAndStartProcInstAndSetRelativeData error", e);
			throw e;
		}
		return processInstId;
	}

	/** ****终止***** */

	/**
	 * 方法描述: 终止流程
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @return
	 * @throws WFServiceException
	 */
	public static void terminateProcessInstance(long processInstID)
			throws WFServiceException {
		getClient();
		client.getProcessInstManager().terminateProcessInstance(processInstID);
	}

	/**
	 * 方法描述: 终止指定的工作项
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @throws WFServiceException
	 */
	public static void terminateWorkItem(long workItemID)
			throws WFServiceException {
		client.getWorkItemManager().terminateWorkItem(workItemID);
	}

	/**
	 * 方法描述: 终止活动实例
	 * 
	 * @author 陈今伟
	 * @param actInstID
	 *            活动实例ID
	 * @throws WFServiceException
	 *             描述******
	 * @return void
	 */
	public static void terminateActivityInstance(long actInstID)
			throws WFServiceException {
		client.getActivityInstManager().terminateActivityInstance(actInstID);
	}

	/** ****执行工作项***** */
	/**
	 * 方法描述: 完成工作项
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @param userid
	 *            用户ID
	 * @throws Exception
	 */
	public static void finishWorkItem(long workItemID, String userid)
			throws Exception {
		try {
			getClient();
			// 获取要结束的工作项的详细信息
			WFWorkItem workItem = queryWorkItemDetail(workItemID);
			if (workItem.getCurrentState() <= BPS_WORKITEM_RUNNING) { // 待领取（4）、运行（10）、完成（12）、终止（13）、挂起（8）
				// 设置当前的登录用户
				// BPSServiceClientFactory.getLoginManager().setCurrentUser(userid,
				// userid);
				// 结束工作项管理接口
				client.getWorkItemManager().finishWorkItem(workItemID, false);
			} else {
				// 其他状态的工作项不需要结束
				SrmLog
						.info("WorkItem ["
								+ workItemID
								+ "] status is ["
								+ workItem.getCurrentState()
								+ "], it has been finished, it need not to be finished again.");
			}
		} catch (Exception e) {
			SrmLog.error("finishWorkItem error", e);
			throw e;
		}
	}

	/**
	 * 方法描述: 完成工作项并设置相关数据
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @param mapData
	 *            相关数据
	 * @param userid
	 *            用户ID
	 * @throws Exception
	 */
	public static void finishWorkItemAndSetRelaData(long workItemID,
			Map<String, Object> mapData, String userid) throws Exception {
		try {
			getClient();
			// 获取要结束的工作项的详细信息
			WFWorkItem workItem = queryWorkItemDetail(workItemID);
			if (workItem.getCurrentState() <= BPS_WORKITEM_RUNNING) {
				// 工作项状态为4、8、10的，是需要结束的工作项
				// 设置当前的登录用户
				// BPSServiceClientFactory.getLoginManager().setCurrentUser(userid,
				// userid);
				// 设置相关数据
				client.getRelativeDataManager().setRelativeDataBatch(
						workItem.getProcessInstID(), mapData);
				// 结束工作项
				client.getWorkItemManager().finishWorkItem(workItemID, false);
			} else {
				// 其他状态的工作项不需要结束
				SrmLog
						.info("WorkItem ["
								+ workItemID
								+ "] status is ["
								+ workItem.getCurrentState()
								+ "], it has been finished, it need not to be finished again.");
			}
		} catch (Exception e) {
			SrmLog.error("finishWorkItemAndSetRelaData error", e);
			throw e;
		}
	}

	/** ****活动处理***** */

	/**
	 * 方法描述: 查询某个活动实例的所有前驱实例
	 * 
	 * @author 陈今伟
	 * @param actInstID
	 *            活动实例ID
	 * @return 前驱实例列表
	 * @throws Exception
	 */
	public static List<WFActivityInst> queryPreviousActivityInstances(
			long actInstID) throws WFServiceException {
		getClient();
		return client.getActivityInstManager().queryPreviousActivityInstances(
				actInstID);
	}

	/**
	 * 方法描述: 根据活动实例ID，查询后继活动实例
	 * 
	 * @author 陈今伟
	 * @param actInstID
	 *            活动实例ID
	 * @return 后继实例列表
	 * @throws Exception
	 */
	public static List<WFActivityInst> queryNextActInsts(long actInstID)
			throws WFServiceException {
		getClient();
		return client.getActivityInstManager().queryNextActInsts(actInstID);
	}
	
	/**
	 * 方法描述：查询业务流程中的某个活动定义的所有直接后继活动
	 * @author 王富强
	 * @param processDefID
	 * @param activityDefID
	 * @return
	 * @throws WFServiceException
	 */
	public static List<WFActivityDefine> queryNextActivities(long processDefID,String activityDefID)throws WFServiceException{
		getClient();
		return client.getDefinitionQueryManager().queryNextActivities(processDefID, activityDefID);
	}
	
	/**
	 * 根据规则获得相应后续定义环节
	 * @param activityDefID
	 * @return
	 * @throws WFServiceException
	 */
	public static List<WFActivityDefine> getNextActivitiesMaybeArrived(long activityDefID) throws WFServiceException{
		getClient();
		return client.getProcessInstManager().getNextActivitiesMaybeArrived(activityDefID);
	}

	/**
	 * 方法描述: 查询某个流程下的所有活动实例
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @param pageCond
	 *            分页对象
	 * @return 流程下的所有活动实例
	 * @throws Exception
	 */
	public static List<WFActivityInst> queryActivityInstsByProcessInstID(
			long processInstID, com.primeton.workflow.api.PageCond pageCond)
			throws WFServiceException {
		getClient();
		return client.getActivityInstManager()
				.queryActivityInstsByProcessInstID(processInstID, pageCond);
	}

	/**
	 * 方法描述: 根据流程实例ID和活动定义ID创建并启动一个未运行到的活动. 返回活动实例id
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @param activityDefID
	 *            活动定义ID
	 * @return 活动实例ID
	 * @throws Exception
	 */
	public static long createAndStartActivityInstance(long processInstID,
			java.lang.String activityDefID) throws WFServiceException {
		getClient();
		return client.getActivityInstManager().createAndStartActivityInstance(
				processInstID, activityDefID);
	}

	/**
	 * 方法描述: 用于激活一个待激活、未启动状态的活动
	 * 
	 * @author 陈今伟
	 * @param activityInstID
	 *            活动实例ID
	 * @throws WFServiceException
	 *             描述******
	 * @return void
	 */
	public static void activateActivityInstance(long activityInstID)
			throws WFServiceException {
		getClient();
		client.getActivityInstManager()
				.activateActivityInstance(activityInstID);
	}

	/**
	 * 方法描述: 完成活动实例
	 * 
	 * @author 陈今伟
	 * @param actId
	 *            活动ID
	 * @return
	 * @throws Exception
	 */
	public static void finishActivity(long actId) throws Exception {
		try {
			getClient();
			WFActivityInst activity = queryActivityDetail(actId);
			if ((activity.getCurrentState() != 7)
					&& (activity.getCurrentState() != 8)) {
				// 未终止、完成的活动需要结束
				client.getActivityInstManager().finishActivityInstance(actId);
			} else {
				// 其他状态的活动不需要处理
				SrmLog
						.info("Activity ["
								+ actId
								+ "] status is ["
								+ activity.getCurrentState()
								+ "], it has been finished, it need not to be finished again.");
			}
		} catch (Exception e) {
			SrmLog.error("finishActivity error", e);
			throw e;
		}
	}

	/**
	 * 方法描述: 回退环节 根据某策略回退到某活动 现支持 基于两点间的路径回退
	 * 
	 * @author 陈今伟
	 * @param currentActInstID
	 *            当前活动实例ID
	 * @param destActDefID
	 *            目标活动定义ID
	 * @param rollBackStrategy
	 *            回退策略类型
	 * @return
	 * @throws Exception
	 */
	public static void backActivity(long currentActInstID, String destActDefID,
			String rollBackStrategy) throws Exception {
		getClient();
		// 第三个参数为回退策略 回退策略类型
		client.getBackActivityManager().backActivity(currentActInstID,
				destActDefID, rollBackStrategy);
	}

	/** ****挂起与恢复***** */
	/**
	 * 方法描述: 挂起活动实例
	 * 
	 * @author 陈今伟
	 * @param actId
	 *            活动实例ID
	 * @return
	 * @throws WFServiceException
	 */
	public static void suspendActivityInstance(long actId)
			throws WFServiceException {
		getClient();
		client.getActivityInstManager().suspendActivityInstance(actId);
	}

	/**
	 * 方法描述: 恢复活动实例
	 * 
	 * @author 陈今伟
	 * @param actId
	 *            活动实例ID
	 * @return
	 * @throws WFServiceException
	 */
	public static void resumeActivityInstance(long actId)
			throws WFServiceException {
		getClient();
		client.getActivityInstManager().resumeActivityInstance(actId);
	}

	/**
	 * 方法描述: 挂起流程实例
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @return
	 * @throws Exception
	 */
	public static void suspendProcessInstance(long processInstID)
			throws Exception {
		try {
			getClient();
			IWFProcessInstManager instManager = client.getProcessInstManager();
			// 流程状态
			int processState = instManager.getProcessInstState(processInstID);
			// 如果流程是运行状态 (2->运行)
			if (processState == BPS_PROC_RUNNING) {
				IWFProcessInstManager manager = client.getProcessInstManager();
				manager.suspendProcessInstance(processInstID);
			} else {
				SrmLog
						.info("ProcessInst ["
								+ processInstID
								+ "] status is ["
								+ processState
								+ "], it has been finished or suspended, it need not to be suspend again.");
			}
		} catch (WFServiceException e) {
			SrmLog.error("suspendProcessInstance error :" + e);
			throw new WFServiceException("挂起流程实例异常:" + e);
		}
	}

	/**
	 * 方法描述: 恢复流程实例
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @return
	 * @throws Exception
	 */
	public static void resumeProcessInstance(long processInstID)
			throws Exception {
		try {
			getClient();
			IWFProcessInstManager instManager = client.getProcessInstManager();
			// 流程状态
			int processState = instManager.getProcessInstState(processInstID);
			// 如果流程是运行状态 (3->挂起)
			if (processState == BPS_PROC_SUSPENDED) {
				IWFProcessInstManager manager = client.getProcessInstManager();
				manager.resumeProcessInstance(processInstID);
			} else {
				SrmLog
						.info("ProcessInst ["
								+ processInstID
								+ "] status is ["
								+ processState
								+ "], it has not suspended, you do not resumeProcessInstance");
			}
		} catch (WFServiceException e) {
			SrmLog.error("sumeProcessInstance error:" + e);
			throw new WFServiceException("恢复流程实例失败:" + e);
		}
	}

	/** ***********************************相关数据相关******************************************************************************* */
	/**
	 * 方法描述: 设置流程相关数据
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @param xpath
	 *            设置的相关数据的xpath路径
	 * @param value
	 *            设置的相关数据的在xpath路径对应的值
	 * @return
	 * @throws WFServiceException
	 */
	public static void setRelativeData(long processInstID, String xpath,
			Object value) throws WFServiceException {
		getClient();
		// 获取相关数据管理接口
		client.getRelativeDataManager().setRelativeData(processInstID, xpath,
				value);
	}

	/**
	 * 方法描述: 批量设置流程相关数据
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @param map
	 *            批量设置的相关数据
	 * @return
	 * @throws WFServiceException
	 */
	public static void setRelativeDataBatch(long processInstID,
			Map<String, Object> map) throws WFServiceException {
		getClient();
		client.getRelativeDataManager()
				.setRelativeDataBatch(processInstID, map);
	}

	/**
	 * 方法描述: 获取流程相关数据
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @param xpath
	 *            设置的相关数据的xpath路径
	 * @return 相关数据的在xpath路径对应的值
	 * @throws WFServiceException
	 */
	public static Object getRelativeData(long processInstID, String xpath)
			throws WFServiceException {
		getClient();
		// 获取相关数据值
		return client.getRelativeDataManager().getRelativeData(processInstID,
				xpath);
	}

	/**
	 * 方法描述: 批量获取流程相关数据
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @param paramArrayOfString
	 *            设置的相关数据的xpath路径数组
	 * @return 相关数据的在xpath路径对应的值的列表
	 * @throws WFServiceException
	 */
	public static List<Object> getRelativeBatchData(long processdInstID,
			String[] paramArrayOfString) throws WFServiceException {
		getClient();
		return client.getRelativeDataManager().getRelativeDataBatch(
				processdInstID, paramArrayOfString);
	}

	/**
	 * 方法描述: 删除流程中的相关数据
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @param xpath
	 *            要删除的相关数据的xpath路径
	 * @throws WFServiceException
	 */
	public static void removeRelativeDataBatch(long processInstID, String xpath)
			throws WFServiceException {
		getClient();
		client.getRelativeDataManager().removeRelativeDataBatch(processInstID,
				xpath);
	}

	/** ***********************************流程信息查询相关******************************************************************************* */
	/**
	 * 方法描述: 获取流程详细信息
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @retrun 流程实例详细对象
	 * @throws WFServiceException
	 */
	public static WFProcessInst queryProcessInstDetail(long processInstID)
			throws WFServiceException {
		getClient();
		return client.getProcessInstManager().queryProcessInstDetail(
				processInstID);
	}

	/**
	 * 方法描述: 获取流程实例当前状态和流程创建者 返回数组str[0]：状态 str[1]：创建者
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @retrun 返回数组str[0]：状态 str[1]：创建者
	 * @throws WFServiceException
	 */
	public static String[] queryProcInstState(long processInstID)
			throws WFServiceException {
		getClient();
		String str[] = new String[2];
		WFProcessInst processInst = client.getProcessInstManager()
				.queryProcessInstDetail(processInstID);
		str[0] = Integer.toString(processInst.getCurrentState());
		str[1] = processInst.getCreator();
		return str;
	}

	/**
	 * 方法描述: 获取活动的详细信息
	 * 
	 * @author 陈今伟
	 * @param activityId
	 *            活动实例ID
	 * @retrun 活动实例详细对象
	 * @throws WFServiceException
	 */
	public static WFActivityInst queryActivityDetail(long activityId)
			throws WFServiceException {
		getClient();
		return client.getActivityInstManager()
				.findActivityInstByActivityInstID(activityId);
	}

	/**
	 * 方法描述: 获取工作项详细信息
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @retrun 工作项详细对象
	 * @throws WFServiceException
	 */
	public static WFWorkItem queryWorkItemDetail(long workItemID)
			throws WFServiceException {
		getClient();
		// 获取工作列表查询器接口
		return client.getWorkItemManager().queryWorkItemDetail(workItemID);
	}

	/**
	 * 方法描述: 查询流程实例的状态
	 * 
	 * @author 陈今伟
	 * @param processInstID
	 *            流程实例ID
	 * @retrun 流程实例的状态
	 * @throws WFServiceException
	 */
	public static int queryProcessInstState(long processInstID)
			throws WFServiceException {
		getClient();
		return client.getProcessInstManager()
				.getProcessInstState(processInstID);
	}

	/**
	 * 方法描述: 查询工作项参与者,查询指定工作项的参与者信息
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @return 参与者信息
	 */
	public static List<WIParticipantInfo> queryWorkItemParticipantInfo(
			long workItemID) throws WFServiceException {
		getClient();
		IWFWorkItemManager mng = client.getWorkItemManager();
		List<WIParticipantInfo> workItems = mng
				.queryWorkItemParticipantInfo(workItemID);
		return workItems;
	}

	/**
	 * 方法描述: 查询出当前活动完成后生成下一个活动的工作项
	 * 
	 * @author 陈今伟
	 * @param processInstID -
	 *            流程实例ID
	 * @param fetchParticipant -
	 *            工作项中是否包含参与者
	 * @return 工作项数据对象列表
	 * @throws WFServiceException
	 */
	public static List<WFWorkItem> queryNextWorkItemsByProcessInstID(
			long processInstID, boolean fetchParticipant)
			throws WFServiceException {
		getClient();
		IWFWorkItemManager mng = client.getWorkItemManager();
		List<WFWorkItem> workItems = mng.queryNextWorkItemsByProcessInstID(
				processInstID, fetchParticipant);
		return workItems;
	}

	/**
	 * 方法描述: 根据工作项ID完成工作项,不进行权限校验,只能完成待执行的工作项，不能完成待领取的工作项
	 * 
	 * @author 陈今伟
	 * @param workItemID -
	 *            工作项ID
	 * @param transactionSpan -
	 *            是否分割事物
	 * @throws WFReasonableException
	 * @throws WFServiceException
	 */
	public static void finishWorkItemDirectly(long workItemID,
			boolean transactionSpan) throws WFServiceException,
			WFReasonableException {
		getClient();
		IWFWorkItemManager mng = client.getWorkItemManager();
		mng.finishWorkItemDirectly(workItemID, transactionSpan);
	}

	/** ****流程参与者 流程权限 相关********************************** */

	/**
	 * 方法描述: 领取工作项 返回1 为成功
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @param personID
	 *            员工ID
	 * @retrun 返回1 为成功。
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public static Map acceptWorkItem(long workItemID, String personID)
			throws Exception {
		getClient();
		Map data = new HashMap();
		// 查询出该工作项
		WFWorkItem workItem = null;
		try {
			workItem = queryWorkItemDetail(workItemID);
		} catch (Exception e) {
			SrmLog.error("Query workitem error", e);
			throw new WFServiceException("查询工作项详细信息时发生异常:" + e.getMessage());
		}
		// 设置当前的登录用户
		// BPSServiceClientFactory.getLoginManager().setCurrentUser(personID,personID);
		if (workItem != null) {
			// 该工作项的状态-4 待领取 10 运行 12 完成
			int workItemState = workItem.getCurrentState();
			// 判断该工作项是否已领取
			// 如果该工作项是领取状态，则领取；如果是运行状态或其它，则不执行操作
			if (workItemState == 4) {
				IWFWorkItemManager itemManager = client.getWorkItemManager();
				itemManager.assignWorkItemToPerson(workItemID, personID);
				data.put("result", 1);
			} else {
				if (!(workItem.getParticipant().equals(personID))) {
					String participant = workItem.getPartiName();
					SrmLog.error("工作项[" + workItem.getWorkItemID() + "]已经被["
							+ participant + "]领取");
					data.put("result", 0);
					data.put("participant", participant);
				}
			}
		}
		return data;
	}

	/**
	 * 方法描述: 取消所领取的工作项
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @throws Exception
	 */
	public static void withdrawWorkItem(long workItemID) throws Exception {
		getClient();
		client.getWorkItemManager().withdrawWorkItem(workItemID);
	}

	/**
	 * 工作项改派给多个参与者，可以改派给多个个人、机构、角色或用户自定义参与者类型
	 * 
	 * @param workItemID
	 *            工作项ID
	 * @param participantArr
	 *            参与者（改派到的参与者）
	 * @throws Exception
	 * @author 蔡慧文
	 */
	public static void reassignWorkItemEx(long workItemID,
			WFParticipant[] participantArr) throws Exception {
		getClient();
		client.getWorkItemManager().reassignWorkItemEx(workItemID,
				participantArr);
	}

	/**
	 * ****************************************指派后继活动
	 * 相关**************************************************************
	 */

	/**
	 * 方法描述: 判断当前工作项操作是否需要为后继活动指派参与者. 根据工作项ID，判断当前工作项操作是否需要为后继活动指派参与者 注意事项：
	 * 需要为后继活动指派参与者需要的条件：
	 * 
	 * 在流程定义的活动定义中的"参与者"选项卡内，参与者是根据"从参与者列表"获得;
	 * 在流程定义的活动定义中选中"是否需要前驱活动根据如上参与者列表指派该活动的参与者" 满足上述条件时候，方法执行返回true，否则返回false
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @return 方法执行返回true，否则返回false
	 * @throws WFServiceException
	 */
	public static boolean isNeedAppointNextActivityParticipant(long workItemID)
			throws WFServiceException {
		getClient();
		return client.getAppointActivityManager()
				.isNeedAppointNextActivityParticipant(workItemID);
	}

	/**
	 * 方法描述: 返回指定工作项ID对应活动的所有需要指派参与者的后继活动列表.
	 * 根据工作项ID查询所有需要指派参与者的后继活动定义列表，该方法返回一个List集合 注意事项：
	 * 查询出的活动列表符合：后继活动的参与者类型是组织结构，并且活动定义中允许指派参与者
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 * @return 后继活动定义列表
	 * @throws WFServiceException
	 */
	public static List<WFActivityDefine> queryNextActivitesNeedAppointParticipant(
			long workItemID) throws WFServiceException {
		getClient();
		return client.getAppointActivityManager()
				.queryNextActivitesNeedAppointParticipant(workItemID);
	}

	/**
	 * 方法描述: 查询某工作项后继活动已被指定的参与者. 根据工作项ID和后继活动ID，查询该后继活动已经指派过的参与者，该方法返回一个List集合
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @param activityDefID
	 *            活动定义ID
	 * @return 参与者列表
	 * @throws WFServiceException
	 */
	public static List<WFParticipant> queryAppointedActivityParticipants(
			long workItemID, java.lang.String activityDefID)
			throws WFServiceException {
		getClient();
		return client.getAppointActivityManager()
				.queryAppointedActivityParticipants(workItemID, activityDefID);
	}

	/**
	 * 方法描述: 指派后继活动的参与者. 根据工作项ID和需要指派的活动定义ID，找到该工作项对应活动的需要指派参与者的后继活动，
	 * 然后把指定的参与者数组指派给该后继活动 注意事项： 如果工作项不存在，则会抛出WFServiceException
	 * 就算指定的后继活动不允许指派参与者也可以调用这个方法来指派参与者，引擎没有做严格的限制
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @param activityDefID
	 *            活动定义ID
	 * @param participants
	 *            参与者
	 * @throws WFServiceException
	 */
	public static void appointActivityParticipant(long workItemID,
			java.lang.String activityDefID, WFParticipant[] participants)
			throws WFServiceException {
		getClient();
		client.getAppointActivityManager().appointActivityParticipant(
				workItemID, activityDefID, participants);
	}

	/**
	 * *******************************代理关系(流程委托)
	 * 相关*****************************************************************
	 */

	/**
	 * 方法描述: 创建代理关系. 委托人将某时间段内的工作委托给代理人(代理人列表)处理，在该时间段内委托人与多个代理人之间建立了多条代理关系。
	 * 注意事项：代理方式用agentType表示 ALL:完全代理 PART:部分代理
	 * 
	 * @author 陈今伟
	 * @param agentFrom -
	 *            委托人ID
	 * @param agentTo -
	 *            代理人列表
	 * @param agentType -
	 *            代理方式
	 * @param startTime -
	 *            代理生效时间
	 * @param endTime -
	 *            代理终止时间
	 * @param agentItemList -
	 *            流程/活动列表
	 * @param agentReason -
	 *            代理原因
	 * @throws WFServiceException
	 */
	public static List<Long> createAgent(String agentFrom,
			WFParticipant[] agentTo, String agentType, Date startTime,
			Date endTime, WFAgentItem[] agentItemList, String agentReason)
			throws WFServiceException {
		getClient();
		List<Long> list = null;
		list = client.getAgentManager().createAgent(agentFrom, agentTo,
				agentType, startTime, endTime, agentItemList, agentReason);
		return list;
	}

	/**
	 * 方法描述: 删除代理关系. 如果agentID对应的WFAgent实体不存在则会跳过该ID，去执行删除下一个WFAgent。
	 * 删除过程中如果，对某一个agentID对应的WFAgent删除出错时，则会抛出异常，回滚所有操作
	 * 
	 * @author 陈今伟
	 * @param agentID -
	 *            代理关系ID
	 * @return 删除的条数
	 * @throws WFServiceException
	 */
	public static long deleteAgent(long[] agentID) throws WFServiceException {
		getClient();
		long count = 0;
		count = client.getAgentManager().deleteAgentBatch(agentID);
		return count;
	}

	/**
	 * 方法描述: 查询委托人代理关系
	 * 
	 * @author 陈今伟
	 * @param agentFrom -
	 *            委托人ID
	 * @return 代理关系列表
	 * @throws WFServiceException
	 */
	public static List<WFAgent> queryAgentByAgentFrom(String agentFrom)
			throws WFServiceException {
		getClient();
		List<WFAgent> list = null;
		list = client.getAgentManager().queryAgentByAgentFrom(agentFrom);
		return list;
	}

	/**
	 * 方法描述: 根据代理关系ID查询代理关系的详细信息. 查询某代理关系的详细信息 查询出来的WFAgent不包括java.util.List<agentItem>用以描述代理出去的流程和活动
	 * 
	 * @author 陈今伟
	 * @param agentID -
	 *            代理关系ID
	 * @return WFAgent对象 代理关系
	 * @throws WFServiceException
	 */
	public static WFAgent queryAgentDetail(long agentID)
			throws WFServiceException {
		getClient();
		WFAgent agent = null;
		agent = client.getAgentManager().queryAgentDetail(agentID);
		return agent;
	}

	/**
	 * *******************************代办、协办
	 * 相关*****************************************************************
	 */

	/**
	 * 方法描述: 委托人将工作项代办给代办人. 委托人将自己待执行或待领取的工作项交给其他人代为完成。 注意事项
	 * 代办方式，取值为DELEG（代办）|HELP（协办）
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @param participants
	 *            代办人（WFParticipant对象）
	 * @param delegateType
	 *            代办方式
	 * @throws WFServiceException
	 */
	public static void delegateWorkItem(long workItemID,
			WFParticipant[] participants, String delegateType)
			throws WFServiceException {
		getClient();
		client.getDelegateManager().delegateWorkItem(workItemID, participants,
				delegateType);
	}

	/**
	 * 方法描述: 委托人将工作项代办给代办人，不校验权限. 委托人将自己待执行或待领取的工作项交给其他人代为完成。 注意事项
	 * 代办方式，取值为DELEG（代办）|HELP（协办）
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @param participants
	 *            代办人（WFParticipant对象）
	 * @param delegateType
	 *            代办方式
	 * @throws WFServiceException
	 */
	public static void delegateWorkItemDirectly(long workItemID,
			WFParticipant[] participants, java.lang.String delegateType)
			throws WFServiceException {
		getClient();
		client.getDelegateManager().delegateWorkItemDirectly(workItemID,
				participants, delegateType);
	}

	/**
	 * 方法描述: 将委托人的工作项代办给代办人（替委托人代办）. 替委托人将委托人待执行或待领取的工作项交给其他人代为完成。 注意事项
	 * 代办方式，取值为DELEG（代办）|HELP（协办）
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @param from
	 *            委托人
	 * @param participants
	 *            代办人（WFParticipant对象）
	 * @param delegateType
	 *            代办方式
	 * @throws WFServiceException
	 */
	public static void delegateWorkItem4Person(long workItemID,
			java.lang.String from, WFParticipant[] participants,
			java.lang.String delegateType) throws WFServiceException {
		getClient();
		client.getDelegateManager().delegateWorkItem4Person(workItemID, from,
				participants, delegateType);
	}

	/**
	 * 方法描述: 委托人确认代办人提交的代办工作项. 委托人以协办方式将工作项代办给代办人，代办人完成工作项后将由
	 * 委托人确认，若对完成的工作满意，则可确认该工作项完成
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @throws WFServiceException
	 */
	public static void confirmDelegatedWorkItem(long workItemID)
			throws WFServiceException {
		getClient();
		client.getDelegateManager().confirmDelegatedWorkItem(workItemID);
	}

	/**
	 * 方法描述: 委托人将代办出去的工作项收回. 委托人将工作项代办给代办人后，在代办人完成该工作项之前，委托人可以收回该工作项
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @throws WFServiceException
	 */
	public static void withdrawDelegatedWorkItem(long workItemID)
			throws WFServiceException {
		getClient();
		client.getDelegateManager().withdrawDelegatedWorkItem(workItemID);
	}

	/**
	 * 方法描述: 代办人拒绝代办工作项. 委托人将工作项代办给代办人，代办人可以拒绝代办该工作项
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @throws WFServiceException
	 */
	public static void rejectDelegatedWorkItem(long workItemID)
			throws WFServiceException {
		getClient();
		client.getDelegateManager().rejectDelegatedWorkItem(workItemID);
	}

	/**
	 * 方法描述: 委托人打回代办人代办的工作项. 委托人以协办方式将工作项代办给代办人，代办人完成工作项后由委托人确认
	 * 若委托人对完成的工作不满意，可将该工作项打回给代办人重做。 注意事项
	 * 该操作会进行工作项权限验证，如果没有操作权限会抛出WFServiceException
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @throws WFServiceException
	 */
	public static void redoDelegatedWorkItem(long workItemID)
			throws WFServiceException {
		getClient();
		client.getDelegateManager().redoDelegatedWorkItem(workItemID);
	}

	/**
	 * 方法描述: 根据委托人ID、代办人ID、代办方式组合分页查询代办/协办的工作项.
	 * 根据委托人ID、代办人ID、代办方式组合分页查询代办/协办的工作项。 举例： 可以以各种组合作为查询条件，如：
	 * 
	 * 查询条件1:"委托人",空,空 //空可以是 null," ","","null" 查询结果1：查询"委托人"代办出去的所有工作项
	 * 
	 * 查询条件2:空,"代办人",空 查询结果2：查询"代办人"代办进来的所有工作项
	 * 
	 * 查询条件3:空,空,"协办" 查询结果3：查询所有以协办方式代办出去的所有工作项
	 * 
	 * 查询条件4:"委托人","代办人","协办" 查询结果4：查询"委托人"以协办方式代办给"代办人"的所有工作项
	 * 
	 * 查询条件5:空,空,空 查询结果5：查询所有代办出去的工作项
	 * 
	 * @author 陈今伟
	 * @param fromer -
	 *            委托人ID
	 * @param toer -
	 *            代办人ID，一定是叶子节点
	 * @param delegateType -
	 *            代办方式，取值为DELEG（代办）|HELP（协办）|ALL(代办和协办)
	 * @param pageCond -
	 *            分页条件
	 * @return 代办/协办工作项列表
	 * @throws WFServiceException
	 */
	public static List<WFWorkItem> queryDelegationWorkItems(
			java.lang.String fromer, java.lang.String toer,
			java.lang.String delegateType,
			com.primeton.workflow.api.PageCond pageCond)
			throws WFServiceException {
		getClient();
		return client.getDelegateManager().queryDelegationWorkItems(fromer,
				toer, delegateType, pageCond);
	}

	/**
	 * 方法描述: 根据委托人ID、代办人、代办方式组合分页查询代办/协办的工作项. 举例： 可以以各种组合作为查询条件，如：
	 * 
	 * 查询条件1:"委托人",空,空 //空可以是 null," ","","null" 查询结果1：查询"委托人"代办出去的所有工作项
	 * 
	 * 查询条件2:空,"代办人",空 查询结果2：查询"代办人"代办进来的所有工作项
	 * 
	 * 查询条件3:空,空,"协办" 查询结果3：查询所有以协办方式代办出去的所有工作项
	 * 
	 * 查询条件4:"委托人","代办人","协办" 查询结果4：查询"委托人"以协办方式代办给"代办人"的所有工作项
	 * 
	 * 查询条件5:空,空,空 查询结果5：查询所有代办出去的工作项
	 * 
	 * @author 陈今伟
	 * @param fromer
	 *            委托人
	 * @param toer -
	 *            代办人,可以是任意参与者
	 * @param delegateType -
	 *            代办方式，取值为DELEG（代办）|HELP（协办）|ALL(代办和协办)
	 * @param pageCond -
	 *            分页条件
	 * @return 查询代办/协办的工作项结果集
	 * @throws WFServiceException
	 */
	public static List<WFWorkItem> queryDelegationWorkItems(
			java.lang.String fromer, WFParticipant toer,
			java.lang.String delegateType,
			com.primeton.workflow.api.PageCond pageCond)
			throws WFServiceException {
		getClient();
		return client.getDelegateManager().queryDelegationWorkItems(fromer,
				toer, delegateType, pageCond);
	}

	/** ***********************************流程日历相关************************************************************ */

	/**
	 * 
	 * 方法描述：查询流程日历ID
	 * 
	 * @param processDefName
	 *            流程实例名
	 * @return
	 * @throws WFServiceException
	 *             String
	 */
	public static String getCalendarID(String processDefName)
			throws WFServiceException {
		getClient();
		IWFDefinitionQueryManager mgr = client.getDefinitionQueryManager();
		List<WFProcessDefine> list = mgr.queryProcessesByName(processDefName);
		Collections.sort(list, new Comparator<WFProcessDefine>() {
			public int compare(WFProcessDefine o1, WFProcessDefine o2) {
				String v1 = o1.getVersionSign();
				String v2 = o2.getVersionSign();
				return v2.compareTo(v1);
			}
		});
		Long processDefID = list.get(0).getProcessDefID();
		String cID = mgr.queryProcessTimeLimitCalendarID(processDefID);
		return cID;
	}

	/**
	 * 方法描述: 获取超时时间
	 * 
	 * @author 陈今伟
	 * @param calendarUuid -
	 *            工作日历编号
	 * @param startTime -
	 *            开始时间
	 * @param timeInterval -
	 *            时间限制值
	 * @return 超时时间
	 * @throws Exception
	 */
	public static long getFinalTime(String calendarUuid, long startTime,
			long timeInterval) throws Exception {
		ServiceContext ctx = new ServiceContext();
		IServiceInvoker invoker = ctx
				.locateService("com.eos.workflow.component.bizresource.CalendarManagerComponent/CalendarManagerService");
		// 调用eos65提供的平台服务
		Object[] rtn = invoker.invoke("getFinalTime", new Object[] {
				calendarUuid, startTime, timeInterval });
		long finalTime = ((Long) rtn[0]).longValue();
		return finalTime;
	}

	/**
	 * 方法描述: 根据日历ID,计算使用该日历情况下，某时间段内的工作时间数
	 * 
	 * @author 陈今伟
	 * @param calendarUuid -
	 *            工作日历ID编号，如果指定为null或空字符串，则使用默认日历
	 * @param startTime -
	 *            时间段开始
	 * @param finalTime -
	 *            时间段结束
	 * @return 日历相关的工作时间数
	 * @throws Exception
	 * 
	 */
	public static long getElapsedTime(String calendarUuid, long startTime,
			long finalTime) throws Exception {
		ServiceContext ctx = new ServiceContext();
		IServiceInvoker invoker = ctx
				.locateService("com.eos.workflow.component.bizresource.CalendarManagerComponent/CalendarManagerService");
		// 调用eos65提供的平台服务
		Object[] rtn = invoker.invoke("getElapsedTime", new Object[] {
				calendarUuid, startTime, finalTime });
		long elapsedTime = ((Long) rtn[0]).longValue();
		return elapsedTime;
	}

	/**
	 * 方法描述: 分页查询业务流程
	 * 
	 * @author 陈今伟
	 * @param process
	 * @param page
	 * @return 业务流程实体列表
	 * @return List<WFBizProcessDef>
	 */
	public static List<WFBizProcessDef> queryBizProcess(
			WFBizProcessDef process, com.primeton.workflow.api.PageCond page)
			throws Exception {
		getClient();
		return client.getInterimDefinitionManager().queryBizProcess(process,
				page);
	}

	/**
	 * 方法描述: 根据业务流程ID 查询活动定义集合
	 * 
	 * @author 陈今伟
	 * @param processDefID
	 *            业务流程ID
	 * @return
	 * @throws WFServiceException
	 *             描述******
	 * @return List<WFActivityDefine>
	 */
	public static List<WFActivityDefine> queryActivitiesOfProcess(
			long processDefID) throws WFServiceException {
		getClient();
		return client.getDefinitionQueryManager().queryActivitiesOfProcess(
				processDefID);
	}

	/**
	 * 方法描述:查询出已完成的工作项生成的后继活动的工作项
	 * 
	 * @author 陈今伟
	 * @param workItemID
	 *            工作项ID
	 * @param fetchParticipant
	 *            工作项中是否包含参与者
	 * @return
	 * @throws WFServiceException
	 *             描述******
	 * @return List<WFWorkItem>
	 */
	public static List<WFWorkItem> queryNextWorkItemsByWorkItemID(
			long workItemID, boolean fetchParticipant)
			throws WFServiceException {
		getClient();
		IWFWorkItemManager mng = client.getWorkItemManager();
		List<WFWorkItem> workItems = mng.queryNextWorkItemsByWorkItemID(
				workItemID, fetchParticipant);
		return workItems;
	}

	/**
	 * 方法描述: 根据活动实例ID查询工作项列表
	 * 
	 * @author 陈今伟
	 * @param actInstID
	 *            活动实例ID
	 * @return
	 * @throws WFServiceException
	 *             描述******
	 * @return List<WFWorkItem>
	 */
	public static List<WFWorkItem> queryWorkItemsByActivityInstID(long actInstID)
			throws WFServiceException {
		getClient();
		IWFWorkItemManager workItemMananger = client.getWorkItemManager();
		return workItemMananger.queryWorkItemsByActivityInstID(actInstID, null);
	}

	/**
	 * 方法描述: 根据活动定义ID以及流程实例ID，查询最近被实例化的活动实例.
	 * 
	 * @author 陈今伟
	 * @param procInstID
	 *            流程实例ID
	 * @param activityDefID
	 *            活动定义ID
	 * @return
	 * @throws WFServiceException
	 *             描述******
	 * @return WFActivityInst
	 */
	public static WFActivityInst findLastActivityInstByActivityID(
			long procInstID, String activityDefID) throws WFServiceException {
		getClient();
		IWFActivityInstManager activityInstManager = client
				.getActivityInstManager();
		return activityInstManager.findLastActivityInstByActivityID(procInstID,
				activityDefID);
	}

	/**
	 * 方法描述: 获取流程时间限制工作日历ID
	 * 
	 * @author 陈今伟
	 * @param processDefID
	 *            流程定义ID
	 * @return
	 * @throws WFServiceException
	 *             描述******
	 * @return String
	 */
	public static String queryProcessTimeLimitCalendarID(long processDefID)
			throws WFServiceException {
		getClient();
		// 通过客户端来获取接口的实现
		IWFDefinitionQueryManager manager = client.getDefinitionQueryManager();
		return manager.queryProcessTimeLimitCalendarID(processDefID);
	}

	/**
	 * 方法描述:拽回工作项操作
	 * 
	 * 不可拽回的工作项范围如下： 1.后继活动中有子流程、结束活动、开始活动;
	 * 2.后继活动中不影响流程的其它分支，即后继活动的前驱连线实例WFTransition只有一条 3.后继活动或者工作项被完成、挂起、终止
	 * 后继活动的工作项做了领取、代办、协办等操作
	 * 
	 * @author 吕俊涛
	 * @param workItemID
	 *            工作项ID
	 * @param isRestartAllWI
	 *            参数为是否重启当前活动的所有工作项，true为重启动所有工作项，false为只重启第一个参数对应的工作项
	 * @param isCallRollbackEvent
	 *            参数为拽回后是否调用当前活动的回退应用，true 会调用回退应用，false不会调用
	 * @return
	 * @throws WFServiceException
	 */
	public static boolean drawbackManager(long workItemID,
			boolean isRestartAllWI, boolean isCallRollbackEvent)
			throws WFServiceException {
		getClient();
		boolean flag = true;
		IWFWorkItemDrawbackManager workItemDrawbackManager = client
				.getWorkItemDrawbackManager();
		if (workItemDrawbackManager.isDrawbackEnable(workItemID)) {
			workItemDrawbackManager.drawbackWorkItem(workItemID,
					isRestartAllWI, isCallRollbackEvent);
		} else {
			flag = false;
		}
		return flag;
	}
	
	/**
	 * 获得某业务流程中某活动定义设置在“组织机构与角色”里的参与者.	
	 * @param processDefID
	 * @param activityDefID
	 * @author wangfuqiang
	 * @param flatToLeaf
	 * @return
	 * @throws WFServiceException
	 */
	public static List<WFParticipant> getActivityParticipants(Long processDefID,
			String activityDefID, boolean flatToLeaf)
			throws WFServiceException {		
		getClient();
		IWFDefinitionQueryManager queryMan=client.getDefinitionQueryManager();
		return queryMan.getActivityParticipants(processDefID, activityDefID, flatToLeaf);
	}
	
	
	/**
	 * 根据当前活动实例ID和目标活动定义ID，查询他们之间所有已经运行过的活动定义，该方法返回的是一个List列表
	 * @param currentActInstID
	 * @param destActDefID
	 * @author wangfuqiang
	 * @return
	 * @throws WFServiceException
	 */
	public static List<WFActivityDefine> getPreviousActivities(long currentActInstID ,String destActDefID)throws WFServiceException {
		getClient();
		IWFBackActivityManager acmager=client.getBackActivityManager();
		return acmager.getPreviousActivities(currentActInstID, destActDefID);
	}
}
