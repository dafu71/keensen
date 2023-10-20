package com.zoomlion.hjsrm.pub.businessclib.busi.common;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.common.cache.CacheFactory;
import com.eos.common.cache.CacheRuntimeException;
import com.eos.common.cache.ICache;
import com.eos.data.datacontext.DataContextManager;
import com.eos.data.datacontext.IMUODataContext;
import com.eos.data.datacontext.IUserObject;
import com.eos.spring.BeanFactory;
import com.eos.workflow.data.WFActivityInst;
import com.eos.workflow.data.WFWorkItem;
import com.eos.workflow.omservice.WFParticipant;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.frame.workflows.service.BPSServiceManagerImpl;
import com.zoomlion.hjsrm.pub.busi.Business.TBsApplyinfo;
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusirule;
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusistepdefine;
import com.zoomlion.hjsrm.pub.busi.Business.TBsParticipantrule;
import com.zoomlion.hjsrm.pub.busi.Business.TBsProcessdefine;
import com.zoomlion.hjsrm.pub.busi.Business.TBsWorklistinfo;
import com.zoomlion.hjsrm.pub.busi.Business.impl.TBsWorklistinfoImpl;
import com.zoomlion.hjsrm.pub.common.BusiGlobal;
import commonj.sdo.DataObject;

/**
 * <pre>
 * Title: 业务处理流程通用工具类
 * Description: 包括流程的启动、注销等通用功能，是业务处理以及其他模块处理流程的统一入口
 * </pre>
 * @author   陈今伟
 * @version   1.0    
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 *
 */

public class BusiBpsCommon {
	
	//	业务规则表 处理类型 begin
	/**
	 * 1:传递时校验 (业务规则表 处理类型)
	 */
	public static final String DEALTYPE_DELIVER_VERIFY = "1";
	/**
	 * 2:传递时保存 (业务规则表 处理类型)
	 */
	public static final String DEALTYPE_DELIVER_SAVE = "2";
	/**
	 * 3:注销时规则 (业务规则表 处理类型)
	 */
	public static final String DEALTYPE_CANCEL_VERIFY = "3";
	/**
	 * 4:注销后处理 (业务规则表 处理类型)
	 */
	public static final String DEALTYPE_CANCEL_AFTER = "4";
	/**
	 * 5:启动前规则 (业务规则表 处理类型)
	 */
	public static final String DEALTYPE_BEFORE_START= "5";
	/**
	 * 6:流程结束完成后业务处理 (业务规则表 处理类型)
	 */
	public static final String DEALTYPE_FINISH_HANDLER= "6";
	/**
	 * 7:流程超时预警配置(业务规则表 处理类型)
	 */
	public static final String DEALTYPE_BEFORE_TIMEOUT= "7";
	/**
	 * 8:流程超时后配置(业务规则表 处理类型)
	 */
	public static final String DEALTYPE_AFTER_TIMEOUT= "8";
	
	//	业务规则表 处理类型 end
	
	//	业务规则表 程序类型 begin
	public static final String PROGTYPE_EOS = "1";	//	EOS构件类型
	public static final String PROGTYPE_JAVA = "2";	//	JAVA
	//	业务规则表 程序类型 end
	
	//	是否启用默认校验规则/生产工单
	public static final String BS_BPSDEFAULTCONFIG = "0";	//	允许使用
	
	public static final String DefineOrgCode = "busicommon";//	全局通用配置
	public static final String DefineDataOrgid = "0";//	全局通用配置
	public static final String DefineConfigGrade = "1";	//	启用机构配置等级(配置到任何机构,此时机构能使用本机构配置or全局通用的配置)
	
	/**
	 * 方法描述:	用于解决静态调用时取不到session中orgcode的方法(只能在存在上下文的环境中使用该方法)
	 * @author 陈今伟
	 * @return
	 * @throws Exception 描述******
	 * @return String
	 */
	public static String getCurrentUserOrgCode()throws Exception{
		IMUODataContext muo = DataContextManager.current().getMUODataContext();
		IUserObject user = muo.getUserObject();
		return (String) user.getAttributes().get("orgcode");
	}
	
	/**
	 * 方法描述:	用于解决静态调用时取不到session中dataorgid的方法(只能在存在上下文的环境中使用该方法)
	 * @author 陈今伟
	 * @return
	 * @throws Exception 描述******
	 * @return String
	 */
	public static String getCurrentUserDataOrgId() throws Exception{
		IMUODataContext muo = DataContextManager.current().getMUODataContext();
		IUserObject user = muo.getUserObject();
		return (String) user.getAttributes().get("dataorgid");
	}
	
	/**
	 * 方法描述: 用于解决静态调用时取不到session中userid的方法(只能在存在上下文的环境中使用该方法)
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public static String getCurrentUserId() throws Exception{
		IMUODataContext muo = DataContextManager.current().getMUODataContext();
		IUserObject user = muo.getUserObject();
		return (String) user.getAttributes().get("userid");
	}
	
	/**
	 * 方法描述: 用于解决静态调用时取不到session中dataorgid时取TCIS系统特定缓存定义的方法(只能在存在上下文的环境中使用该方法)
	 * @author 侯杰
	 * @param code
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	@SuppressWarnings("unchecked")
	public static String getConfigValue(String code) throws Exception{
		ICache icache = CacheFactory.getInstance().findCache(Common.SRM_SYSCONFFIG_CACHE);
		if (icache == null) {
			throw new CacheRuntimeException("not found cache \"" + Common.SRM_SYSCONFFIG_CACHE+ "\"");
		}
		String dataorgid = getCurrentUserDataOrgId();
		String defaultValue = (String) icache.get(code+"_0");
		String Value = (String) icache.get(code+"_"+dataorgid);
		if(Value==null||Value.equals("")){
			if(defaultValue==null){
				return null;
			}else{				
				return defaultValue.trim();
			}
		}else{
			return Value.trim();
		}
	}
	
	/**
	 * 方法描述: 统一流程启动方法
	 * @author 陈今伟
	 * @param	applyInfoPkId	诉求PKID
	 * @param busiType	业务类型
	 * @param userId	用户号
	 * @param processInstName	流程实例名称
	 * @param reldata	流程中的相关数据(没有时传空map)
	 * @param fetchParticipant	返回的下一个活动的工作项相关信息中是否包含参与者信息(true:包含,false：不包含)
	 * @throws Exception 描述******
	 * @return List<WFWorkItem>	下一个活动的工作项相关信息
	 */
	@SuppressWarnings("unchecked")
	public List<WFWorkItem> startBusiBps(String applyInfoPkId ,String busiType, String userId, String processInstName, Map reldata,boolean fetchParticipant) throws Exception {
		BeanFactory factory = BeanFactory.newInstance();
		BusiBpsDefineBean bean = factory.getBean("busiBpsDefineBean");
		TBsApplyinfo applyInfo = bean.expandApplyinfo(applyInfoPkId);
		// 1.根据业务类型获取流程定义
		TBsProcessdefine entity = bean.getBpsDefineByBusiType(busiType, String.valueOf(applyInfo.getDataorgid()));
		long processinstid = 0;
		List<WFWorkItem> workItems = null;
		// 2.创建流程
		//	3.展开诉求实体，获取预警时间、超时时间
		Map<String, String> calculateTimeoutAndEarlyTime = this.calculateTimeoutAndEarlyTimeToProcess(applyInfo);
		// 3.将流程业务类型编码/用户号/业务流程定义表主键/超时时间/预警时间放入流程相关数据区供后续业务使用
		reldata.put("dataorgid", applyInfo.getDataorgid());
		reldata.put("busitype", busiType);
		reldata.put("processdefinepkid", entity.getPkid());
		reldata.put("userid", userId);
		reldata.put("processFinalTime", calculateTimeoutAndEarlyTime.get("processFinalTime"));
		reldata.put("processEarlyTime",  calculateTimeoutAndEarlyTime.get("processEarlyTime"));
		processinstid = BPSServiceManagerImpl.createProcessInstAndSetRelaData(entity.getProcessdefname(), processInstName, entity.getProcessdefdesc(),reldata);
		// 4.启动流程,设置相关数据
		BPSServiceManagerImpl.startProcInstAndSetRelaData(processinstid, reldata);
		// 5.返回下一个活动的工作项相关信息供后续业务调用
		workItems = BPSServiceManagerImpl.queryNextWorkItemsByProcessInstID(processinstid, fetchParticipant);
		return workItems;
	}
	
	/**
	 * 方法描述: 统一流程启动方法
	 * @author 蔡慧文
	 * @param applyInfo	诉求信息
	 * @param busiType	业务类型
	 * @param userId	用户号
	 * @param processInstName	流程实例名称
	 * @param reldata	流程中的相关数据(没有时传空map)
	 * @param fetchParticipant	返回的下一个活动的工作项相关信息中是否包含参与者信息(true:包含,false：不包含)
	 * @param processdefine 流程定义
	 * @throws Exception 描述******
	 * @return List<WFWorkItem>	下一个活动的工作项相关信息
	 */
	@SuppressWarnings("unchecked")
	public List<WFWorkItem> startBusiBpsThread(TBsApplyinfo applyInfo ,String busiType, String userId, String processInstName, Map reldata,boolean fetchParticipant, TBsProcessdefine processdefine) throws Exception {
		// 1.根据业务类型获取流程定义
		long processinstid = 0;
		List<WFWorkItem> workItems = null;
		// 2.展开诉求实体，获取预警时间、超时时间
		Map<String, String> calculateTimeoutAndEarlyTime = this.calculateTimeoutAndEarlyTimeToProcessThread(applyInfo, processdefine);
		// 3.将流程业务类型编码/用户号/业务流程定义表主键/超时时间/预警时间放入流程相关数据区供后续业务使用
		reldata.put("dataorgid", applyInfo.getDataorgid());
		reldata.put("busitype", busiType);
		reldata.put("processdefinepkid", processdefine.getPkid());
		reldata.put("userid", userId);
		reldata.put("processFinalTime", calculateTimeoutAndEarlyTime.get("processFinalTime"));
		reldata.put("processEarlyTime",  calculateTimeoutAndEarlyTime.get("processEarlyTime"));
		// 4.启动流程,设置相关数据
		/*processinstid = BPSServiceManagerImpl.createProcessInstAndSetRelaData(processdefine.getProcessdefname(), processInstName, processdefine.getProcessdefdesc(),reldata);
		BPSServiceManagerImpl.startProcInstAndSetRelaData(processinstid, reldata);*/
		processinstid = BPSServiceManagerImpl.createAndStartProcInstAndSetRelativeData(processdefine.getProcessdefname(), processInstName, true, processdefine.getProcessdefdesc(), reldata);
		// 5.返回下一个活动的工作项相关信息供后续业务调用
		workItems = BPSServiceManagerImpl.queryNextWorkItemsByProcessInstID(processinstid, fetchParticipant);
		/*System.out.println("用户ID\t"+userId);
		System.out.println("流程实例ID\t"+processinstid);*/
		return workItems;
	}
	
	/**
	 * 方法描述:	根据业务类型、业务环节定义ID等获取该环节的定义信息
	 * @author 陈今伟
	 * @param busitype	业务类型
	 * @param activitydefid 业务环节定义ID
	 * @return
	 * @throws Exception 描述******
	 * @return TBsBusistepdefine 业务环节定义信息
	 */
	public TBsBusistepdefine getActivityConfigByBusiType(String busitype,String activitydefid, String dataorgid) throws Exception{
		BeanFactory factory = BeanFactory.newInstance();
		BusiBpsDefineBean bean = factory.getBean("busiBpsDefineBean");
		return bean.getActivityConfigByBusiType(busitype, activitydefid, dataorgid);
	}
	
	/**
	 * 方法描述:	根据业务类型、业务环节定义ID等获取该环节配置的Tab资源信息
	 * @author 陈今伟
	 * @param busitype
	 * @param activitydefid
	 * @param url
	 * @return
	 * @throws Exception 描述******
	 * @return String
	 */
	public static String getActivityTabsBusiType(String busitype,String activitydefid,String url) throws Exception{
		//	如果流程图中配置了页面资源,则不再请求数据库读取配置信息.
		if(url != null && !"".equals(url)){
			return "[]";
		}else{
			BeanFactory factory = BeanFactory.newInstance();
			BusiBpsDefineBean bean = factory.getBean("busiBpsDefineBean");
			DataObject[] activityTabs = bean.getActivityTabsBusiType(busitype, activitydefid, getCurrentUserDataOrgId());
			StringBuffer sb = new StringBuffer();
			sb.append("[");
			if (activityTabs != null) {
				for (int i = 0, j = activityTabs.length; i < j; i++) {
					String resId = activityTabs[i].getString("tabresid");
					String resPath = activityTabs[i].getString("respath");
					String resLabel = activityTabs[i].getString("reslabel");
					String ischeck = activityTabs[i].getString("ischeck");
					String checkurl = activityTabs[i].getString("checkurl");
					sb.append("{");
					sb.append("resid:");
					sb.append("'"+resId+"'");
					sb.append(", respath:");
					sb.append("'"+resPath+"'");
					sb.append(", reslabel:");
					sb.append("'"+resLabel+"'");
					sb.append(", isCheck:");
					sb.append("'"+ischeck+"'");
					sb.append(", checkUrl:");
					sb.append("'"+checkurl+"'");
					sb.append("}");
					if (i != j - 1) {// 不是最后一个
						sb.append(",");
					}
				}
			}
			sb.append("]");
			System.out.println(sb.toString());
			return sb.toString();
		}
	}
	
	/**
	 * 方法描述:	统一执行业务规则入口
	 * @author 陈今伟
	 * @param busitype	业务类型
	 * @param activitydefid	业务环节定义Id
	 * @param params	参数集合
	 * @return
	 * @throws Exception 描述******
	 * @return DataObject
	 */
	@SuppressWarnings("unchecked")
	public Map executeBusinessRule(String busitype,String activitydefid,Map params) throws Exception{
		BeanFactory factory = BeanFactory.newInstance();
		BusiBpsDefineBean bean = factory.getBean("busiBpsDefineBean");
		// 规则级别(必须(强制校验)or友好(提示,并弹出确认框,可通过也可返回)or提示(通过,仅提示信息不做为传递的限制))
		String rulelvl = null;
		ArrayList<String> rulelvls= new ArrayList<String>();
		// 错误提示消息标题
		int failNo = 1;
		// 整体校验是否通过
		boolean success = true;
		Map ret = new HashMap();
		StringBuffer msg = new StringBuffer();
		// 1.根据传入条件查找配置的业务规则,得到业务规则对象数组
		TBsBusirule[] busiRule = bean.getBusinessRuleByBusiType(busitype, activitydefid, DEALTYPE_DELIVER_VERIFY, getCurrentUserDataOrgId());
		// 2.是否启用默认校验规则/生产工单(即:没有配置的情况下使用通用配置)
		Boolean bpsdefaultconfig = BusiBpsCommon.getConfigValue("BS_BPSDEFAULTCONFIG").equals(BS_BPSDEFAULTCONFIG);
		if(busiRule.length == 0 && bpsdefaultconfig){
			rulelvl = "2";
			msg.append("没有找到相应的业务规则,将使用默认规则!");
		}else if(busiRule.length == 0 && !bpsdefaultconfig){
			rulelvl = "1";
			msg.append("没有找到相应的业务规则且没有启用默认规则!");
		}else{
			// 3.按照配置顺序执行得到的业务规则对象
			for (int i = 0, j = busiRule.length; i < j; i++) {
				// 如果配置的程序类型是java方法
				if (busiRule[i].getProgtype().equals(PROGTYPE_JAVA)) {
					BaseBusiRule baseBusiRule = (BaseBusiRule) factory.getBean(busiRule[i].getOptfunction());
					ret = baseBusiRule.execute(params);
					// 如果返回值和配置中返回值匹配,则判断操作逻辑(and/or)
					if (ret.get("returnvalue").equals(busiRule[i].getReturnvalue())) {
						// 操作逻辑为or,不再执行后续业务逻辑直接返回
						if (busiRule[i].getOptlogic().equals("or")) {
							//	整体校验成功
							success = true;
							break;
						}
					} else {
						//	取校验失败时的提示级别放入集合
						rulelvls.add(busiRule[i].getRulelvl());
						if(j == 1){
							//	只配置了一个规则,一个失败整体失败
							success = false;
						}
						// 重组错误提示消息
						msg.append(failNo++ + ":" + ret.get("msg"));
						// 每行提示消息的后缀标识符
						String sign = i == (j - 1) ? "." : ";</BR>";
						msg.append(sign);
						// 如果返回值和配置中返回值不匹配,而且操作逻辑为and,则不执行后续业务规则直接返回
						if (busiRule[i].getOptlogic().equals("and")) {
							//	整体校验失败
							success = false;
							rulelvl = Collections.min(rulelvls);
							break;
						}else if(busiRule[i].getOptlogic().equals("andor")){
							//	此时只要有一个失败全部失败,且所有配置全部校验
							success = false;
						}
						//	取出当前集合中最小(提示级别最高)的校验级别传递到前台
						rulelvl = Collections.min(rulelvls);
					}
				} else {
					// TODO 其他程序类型暂不支持,譬如EOS构件,后期完善
				}
			}
		}
		// 覆盖整体规则级别
		ret.put("rulelvl", rulelvl);
		// 覆盖整体校验信息
		ret.put("success", success);
		// 覆盖提示消息
		ret.put("msg", msg.toString());
		// 4.返回校验结果
		return ret;
	}
	
	/**
	 * 方法描述: 设置统一参与者规则逻辑
	 * @author 陈今伟
	 * @param busitype	业务类型
	 * @param thisActivityInst	流程中传递的活动对象
	 * @return
	 * @throws Exception 描述******
	 * @return WFParticipant[]
	 */
	@SuppressWarnings("unchecked")
	public WFParticipant [] getParticipantRuleByBusiType(String busitype,WFActivityInst thisActivityInst) throws Exception{
		BeanFactory factory = BeanFactory.newInstance();
		BusiBpsDefineBean bean = factory.getBean("busiBpsDefineBean");
		//  1.从流程实例相关数据区中获取流程实例数据归属
		String dataorgid = BPSServiceManagerImpl.getRelativeData(thisActivityInst.getProcessInstID(), "dataorgid").toString();
		//	2.查找配置的参与者规则
		TBsParticipantrule[] participantRule = bean.getParticipantRuleByBusiType
													(busitype, thisActivityInst.getActivityDefID(), dataorgid);
		//	3.转换为BPS的参与者数组
		WFParticipant [] wfParticipant = new WFParticipant[participantRule.length];
		for (int i = 0, j = participantRule.length; i < j; i++) {
			wfParticipant[i] = new WFParticipant();
			//	参与者Id
			wfParticipant[i].setId(participantRule[i].getParticipantid());
			//	参与者类型
			wfParticipant[i].setTypeCode(participantRule[i].getParticipanttype());
			//	参与者名称
			wfParticipant[i].setName(participantRule[i].getParticipantname());
		}
		return wfParticipant;
	}
	
	/**
	 * 方法描述:	统一传递时保存业务信息方法入口
	 * @author 陈今伟
	 * @param busitype
	 * @param activitydefid
	 * @param busiParams
	 * @throws Exception 描述******
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void commonUnifyDeliver(String busitype,String activitydefid, Long workItemID, Map busiParams) throws Exception{
		String currentUserId = "";
		String currentUserOrgId = "";
		String currentUserDataOrgId = "";
		String currentUserOrgCode = "";
		BeanFactory factory = BeanFactory.newInstance();
		BusiBpsDefineBean bean = factory.getBean("busiBpsDefineBean");
		TBsBusirule[] busiRule = new TBsBusirule[0];
		Boolean bpsdefaultconfig = true;
		try{
			currentUserId = Common.getCurrentUserId();
			currentUserOrgId = Common.getCurrentUserOrgId();
			currentUserDataOrgId = Common.getCurrentUserDataOrgId();
			currentUserOrgCode = Common.getCurrentUserOrgCode();
			//	由于每个环节的业务不同,流程的相关数据也不同,故将结束工作项/设置相关数据/相关业务动作放置接口实现类的统一保存方法中处理
			//	1. 得到配置的传递保存规则信息
			busiRule = bean.getBusinessRuleByBusiType(busitype, activitydefid, DEALTYPE_DELIVER_SAVE, currentUserDataOrgId);
			//	2.是否启用默认校验规则/生产工单(即:没有配置的情况下使用通用配置)
			bpsdefaultconfig = BusiBpsCommon.getConfigValue("BS_BPSDEFAULTCONFIG").equals(BS_BPSDEFAULTCONFIG);
		}catch(Exception e){
			SrmLog.error("获取系统缓存失败!", new Exception());
			throw new BusinessException("获取系统缓存失败!", "");
		}
		busiParams.put("dataorgid", currentUserDataOrgId);
		busiParams.put("createby", currentUserId);
		busiParams.put("userorgid", currentUserOrgId);
		busiParams.put("userorgcode", currentUserOrgCode);
		if(busiRule.length == 0 && bpsdefaultconfig){
			/**传递工单**/
			Map<String, Object> currentData = new HashMap<String, Object>();
			currentData.put("currentUserId", currentUserId);
			currentData.put("currentUserOrgId", currentUserOrgId);
			currentData.put("currentUserDataOrgId", currentUserDataOrgId);
			this.gotoNextBusiBps(new HashMap(), workItemID, (String)busiParams.get("busipkid"), false, currentData);
		}else if(busiRule.length == 0 && !bpsdefaultconfig){
			SrmLog.error("没有找到相应的生产工单规则且没有启用默认配置!", new Exception());
			throw new BusinessException("没有找到相应的生产工单规则且没有启用默认配置!", "");
		}else{
			//	3.执行配置的业务方法(传递保存时不考虑多条配置,不考虑执行顺序,不考虑返回值)
			TBsBusirule unifyDeliver = busiRule[0];
			//	如果配置的程序类型是java方法
			if (unifyDeliver.getProgtype().equals(PROGTYPE_JAVA)) {
				//	获得业务规则操作接口
				BaseBusiRule baseBusiRule = (BaseBusiRule) factory.getBean(unifyDeliver.getOptfunction());
				//	执行统一传递保存工单/业务信息接口方法
				baseBusiRule.unifyDeliver(workItemID, busiParams);
			}else{
				//TODO 其他程序类型暂不支持,譬如EOS构件,后期完善
			}
		}
		//	4.回填当前业务记录相关信息
		bean.backfillBusiRec(Integer.parseInt(currentUserOrgId), currentUserId, (String)busiParams.get("busipkid"));
	}
	
	/**
	 * 方法描述:	通用结束当前工作项(单条业务记录) 进入下一环节
	 * @author 曹桢
	 * @param reldata	相关数据
	 * @param workItemID	工作项ID
	 * @param busirecpkid	当前业务记录主键
	 * @param fetchParticipant	是否包含参与者
	 * @param currentData	系统缓存相关数据
	 * @throws BusinessException 描述******
	 * @return void
	 */
	public void gotoNextBusiBps(Map<String, Object> reldata, Long workItemID, String busirecpkid, boolean fetchParticipant, Map<String, Object> currentData) throws BusinessException {
		try {
			BusiBpsDefineBean bean = BeanFactory.newInstance().getBean("busiBpsDefineBean");
			String currentUserId = (String)currentData.get("currentUserId");
			int currentUserOrgId = Integer.parseInt(currentData.get("currentUserOrgId").toString());
			//	1.回填当前业务记录相关信息
			bean.backfillBusiRec(currentUserOrgId, currentUserId, busirecpkid);
			// 2. 结束当前工作项
			BPSServiceManagerImpl.finishWorkItemAndSetRelaData(workItemID, reldata, currentUserId);
			// 3. 获取当前工作项结束后的后续工作项
			List<WFWorkItem> networkItems = BPSServiceManagerImpl.queryNextWorkItemsByWorkItemID(workItemID, fetchParticipant);
			// 4. 生成工单
			bean.commonCreateWorkOrder(busirecpkid, currentData, networkItems);
		} catch (Exception e) {
			SrmLog.error("结束业务流程失败!", e);
			throw new BusinessException("结束业务流程失败!", e.getMessage());
		}
	}
	
	/**
	  * 方法描述：流程注销前校验
	  * @author 陈今伟
	 * @param busiType 业务类型
	 * @param worklistinfopkid 工单ID
	 * @param userId 用户号
	 * @return MsgEntity
	 */
	public MsgEntity beforeCanceled(String busiType,String worklistinfopkid,String userId) throws BusinessException{
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		String dataorgid = null;
		try {
			dataorgid = getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取当前操作员数据归属失败!", e);
			throw new BusinessException("获取当前操作员数据归属失败!", e.getMessage());
		}
		//1.取得当前业务类型对应的流程配置
		TBsProcessdefine entity = bpsBean.getBpsDefineByBusiType(busiType, dataorgid);
		//2.查询流程注销前处理配置
		TBsBusirule[] busiRules = bpsBean.getBusiRuleByFlow(entity.getPkid(),dataorgid, DEALTYPE_CANCEL_VERIFY);
		MsgEntity msg = new MsgEntity();
		int errorNo = 1;
		String rulelvl = "1";
		boolean passed = true;//默认校验通过
		if(busiRules.length>0){
			//规则提示级别
			ArrayList<String> rulelvls= new ArrayList<String>();
			StringBuffer errorMsg = new StringBuffer();
			for (int i = 0, j = busiRules.length; i < j; i++) {
				// 如果配置的程序类型是java方法
				TBsBusirule busirule = busiRules[i];
				if (busirule.getProgtype().equals(PROGTYPE_JAVA)) {
					String beanId =busirule.getOptfunction();
					BaseFlowEvent flowEventbean = beanFactory.getBean(beanId);
					MsgEntity checkResult =flowEventbean.beforeCanceled(busiType,worklistinfopkid, userId);
					String optLogic = busirule.getOptlogic();
					if (checkResult.isPassed()) {//成功
						if (optLogic.equals("or")) {// 操作逻辑为or,不再执行后续业务逻辑直接返回(整体校验成功)
							passed = true;
							break;
						}
					} else {//失败
						passed = false;
						//	取校验失败时的提示级别放入集合
						rulelvls.add(busirule.getRulelvl());
						// 重组错误提示消息
						errorMsg.append(errorNo++ + ":" + checkResult.getErrormsg());
						// 每行提示消息的后缀标识符
						String sign = i == (j - 1) ? "." : ";</BR>";
						errorMsg.append(sign);
						if (optLogic.equals("and")) { //操作逻辑为and,则不执行后续业务规则直接返回 (整体校验失败)
							break;
						}
					}
				}
			}
			if(passed==false){
				//取出当前集合中最小(提示级别最高)的校验级别传递到前台
				rulelvl = Collections.min(rulelvls);
				msg.setErrormsg(errorMsg.toString());
				msg.setErrorlvl(rulelvl);
			}
			msg.setPassed(passed);
		}else{
			//默认校验通过
			msg.setPassed(true);
		}
		return msg;
	}
	
	/**
	 * 方法描述:	流程注销后处理统一入口
	 * @author 陈今伟
	 * @param busiType  业务类型编码
	 * @param worklistinfopkid		工单信息表主键
	 * @param userId 	用户号
	 * @return void
	 */
	public void doAfterCanceled(String busiType,String worklistinfopkid,String userId) throws BusinessException{
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		String dataorgid = null;
		try {
			dataorgid = getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取当前操作员数据归属失败!", e);
			throw new BusinessException("获取当前操作员数据归属失败!", e.getMessage());
		}
		//	根据业务类型获取流程定义
		TBsProcessdefine processDefine = bpsBean.getBpsDefineByBusiType(busiType, dataorgid);
		String processdefinepkid = processDefine.getPkid();
		//	1.执行必要配置(完成诉求、完成工单、完成计划、调用回访等通用处理.)
		bpsBean.handlerAfterFlowFinished(worklistinfopkid, busiType, userId);
		//	2. 查询流程完成后处理配置
		TBsBusirule[] busiRules = bpsBean.getBusiRuleByFlow(processdefinepkid, dataorgid, DEALTYPE_CANCEL_AFTER);
		if(busiRules.length > 0){
			//	3.发现该流程还存在单独的配置则应用该配置
			for (TBsBusirule busirule : busiRules) {
				String beanId = busirule.getOptfunction();
				BaseFlowEvent flowEventbean = beanFactory.getBean(beanId);
				flowEventbean.doAfterCanceled(busiType,processdefinepkid,worklistinfopkid, userId);
			}
		}
	}
	
	/**
	 * 
	 * 方法描述：启动流程前校验	
	 * @param busiType 业务类型编码
	 * @param processdefinepkid 流程定义pkid
	 * @param worklistinfopkid 工单pkid
	 * @param userId 用户号
	 * @return
	 * MsgEntity
	 */
	public MsgEntity beforeStartFlow(String busiType,String userId) throws BusinessException{
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		String dataorgid = null;
		try {
			dataorgid = getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取当前操作员数据归属失败!", e);
			throw new BusinessException("获取当前操作员数据归属失败!", e.getMessage());
		}
		//根据业务类型获取流程定义
		TBsProcessdefine processDefine = bpsBean.getBpsDefineByBusiType(busiType, dataorgid);
		String processdefinepkid = processDefine.getPkid();
		//查询流程启动前配置
		TBsBusirule[] busiRules = bpsBean.getBusiRuleByFlow(processdefinepkid,dataorgid, DEALTYPE_BEFORE_START);
		MsgEntity msg = new MsgEntity();
		int errorNo = 1;
		boolean passed = true;//默认校验通过
		if(busiRules.length > 0){
			//应用配置
			StringBuffer errorMsg = new StringBuffer();
			for (int i = 0, j = busiRules.length; i < j; i++) {
				// 如果配置的程序类型是java方法
				TBsBusirule busirule = busiRules[i];
				if (busirule.getProgtype().equals(PROGTYPE_JAVA)) {
					String beanId =busirule.getOptfunction();
					BaseFlowEvent flowEventbean = beanFactory.getBean(beanId);
					MsgEntity checkResult = flowEventbean.beforeStartFlow(busiType,userId);
					String optLogic = busirule.getOptlogic();
					if (checkResult.isPassed()) {//成功
						if (optLogic.equals("or")) {// 操作逻辑为or,不再执行后续业务逻辑直接返回(整体校验成功)
							passed = true;
							break;
						}
					} else {//失败
						passed = false;
						// 重组错误提示消息
						errorMsg.append(errorNo++ + ":" + checkResult.getErrormsg());
						// 每行提示消息的后缀标识符
						String sign = i == (j - 1) ? "." : ";</BR>";
						errorMsg.append(sign);
						if (optLogic.equals("and")) { //操作逻辑为and,则不执行后续业务规则直接返回 (整体校验失败)
							break;
						}
					}
				}
			}
			if(passed==false){
				msg.setErrormsg(errorMsg.toString());
			}
		}
		msg.setPassed(passed);
		return msg;
	}
	
	/**
	 * 方法描述:	流程完成后处理统一入口
	 * @author 陈今伟
	 * @param busiType	业务类型编码
	 * @param worklistinfopkid		工单信息表主键
	 * @param userId 	用户号
	 * @return void
	 */
	public void doAfterFinished(String busiType,String processdefinepkid,String worklistinfopkid,String userId) throws BusinessException{
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		//查询工单信息
		TBsWorklistinfo worklist = new TBsWorklistinfoImpl();
		worklist.setPkid(worklistinfopkid);
		bpsBean.getBusiBpsDefineDao().expandEntity(worklist);
		//	1. 查询流程完成后处理配置
		TBsBusirule[] busiRules = bpsBean.getBusiRuleByFlow(processdefinepkid,String.valueOf(worklist.getDataorgid()),  DEALTYPE_FINISH_HANDLER);
		if(busiRules.length > 0){
			//	2.发现该流程还存在单独的配置则应用该配置
			for (TBsBusirule busirule : busiRules) {
				String beanId = busirule.getOptfunction();
				BaseFlowEvent flowEventbean = beanFactory.getBean(beanId);
				flowEventbean.doAfterFinished(busiType,processdefinepkid,worklistinfopkid, userId);
			}
		}else{
			//	3.执行通用必要配置(完成诉求、完成工单、完成计划、调用回访等通用处理.)
			bpsBean.handlerAfterFlowFinished(worklistinfopkid, busiType, userId);
		}
	}
	
	/**
	 * 方法描述:	获取流程要求完成时间点
	 * @author 陈今伟
	 * @param startTime	开始时间
	 * @param busiType	业务类型编码
	 * @return
	 * @throws Exception 描述******
	 * @return long
	 */
	public long getFinalTime(long startTime,String busiType) throws Exception{
		String dataorgid = null;
		try {
			dataorgid = getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取当前操作员数据归属失败!", e);
			throw new BusinessException("获取当前操作员数据归属失败!", e.getMessage());
		}
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		TBsProcessdefine entity = bpsBean.getBpsDefineByBusiType(busiType, dataorgid);
		
		if(entity != null){
			long timeInterval = 0;
			String cycleType = entity.getCycletype();
			BigDecimal unit =  entity.getFinaldays();
			if(BusiGlobal.Process_CycleType.DAY.equals(cycleType)){
				timeInterval = (unit.multiply(new BigDecimal(8*60*60*1000))).longValue();
			}else if(BusiGlobal.Process_CycleType.HOUR.equals(cycleType)){
				timeInterval = (unit.multiply(new BigDecimal(60*60*1000))).longValue();
			}
			String calendarID = BPSServiceManagerImpl.getCalendarID(entity.getProcessdefname());
			return BPSServiceManagerImpl.getFinalTime(calendarID, startTime, timeInterval);
		}else{
			return 0L;
		}
	}
	
	/**
	 * 方法描述:	获取流程要求完成时间点
	 * @author 蔡慧文
	 * @param startTime	开始时间
	 * @param busiType	业务类型编码
	 * @return
	 * @throws Exception 描述******
	 * @return long
	 */
	public long getFinalTimeThread(long startTime,String busiType, Map paramMap) throws Exception{
		String dataorgid = null;
		try {
			dataorgid = (String) (paramMap.containsKey("currentUserOrgId") ? paramMap.get("currentUserOrgId") : Common.getCurrentUserOrgId());
		} catch (Exception e) {
			SrmLog.error("获取当前操作员数据归属失败!", e);
			throw new BusinessException("获取当前操作员数据归属失败!", e.getMessage());
		}
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		TBsProcessdefine entity = bpsBean.getBpsDefineByBusiType(busiType, dataorgid);
		
		if(entity != null){
			long timeInterval = 0;
			String cycleType = entity.getCycletype();
			BigDecimal unit =  entity.getFinaldays();
			if(BusiGlobal.Process_CycleType.DAY.equals(cycleType)){
				timeInterval = (unit.multiply(new BigDecimal(8*60*60*1000))).longValue();
			}else if(BusiGlobal.Process_CycleType.HOUR.equals(cycleType)){
				timeInterval = (unit.multiply(new BigDecimal(60*60*1000))).longValue();
			}
			String calendarID = BPSServiceManagerImpl.getCalendarID(entity.getProcessdefname());
			return BPSServiceManagerImpl.getFinalTime(calendarID, startTime, timeInterval);
		}else{
			return 0L;
		}
	}
	
	/**
	 * 方法描述:	获取流程超时预警时间点
	 * @author 陈今伟
	 * @param startTime	开始时间
	 * @param busiType	业务类型编码
	 * @return
	 * @throws Exception 描述******
	 * @return long
	 */
	public long getEarlyTime(long startTime,String busiType) throws Exception{
		String dataorgid = null;
		try {
			dataorgid = getCurrentUserDataOrgId();
		} catch (Exception e) {
			SrmLog.error("获取当前操作员数据归属失败!", e);
			throw new BusinessException("获取当前操作员数据归属失败!", e.getMessage());
		}
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		TBsProcessdefine entity = bpsBean.getBpsDefineByBusiType(busiType, dataorgid);
		if(entity != null){
			long timeInterval = 0;
			//	超时配置类型 / 单位
			String cycleType = entity.getCycletype();
			BigDecimal finaldays =  entity.getFinaldays();
			//	预警配置类型 / 单位
			String earlyType = entity.getEarlytype();
			BigDecimal earlydays =  entity.getEarlydays();
			if(BusiGlobal.Process_CycleType.DAY.equals(earlyType)){
				if(BusiGlobal.Process_CycleType.DAY.equals(cycleType)){
					//	超时时间配置-预警时间配置 = 预警时间点
					timeInterval = ((finaldays.subtract(earlydays)).multiply(new BigDecimal(8*60*60*1000))).longValue();
				}else if(BusiGlobal.Process_CycleType.HOUR.equals(cycleType)){
					timeInterval = (finaldays.multiply(new BigDecimal(60*60*1000))).longValue() - (earlydays.multiply(new BigDecimal(8*60*60*1000))).longValue();
				}
			}else if(BusiGlobal.Process_CycleType.HOUR.equals(earlyType)){
				if(BusiGlobal.Process_CycleType.DAY.equals(cycleType)){
					//	超时时间配置-预警时间配置 = 预警时间点
					timeInterval = (finaldays.multiply(new BigDecimal(8*60*60*1000))).longValue() - (earlydays.multiply(new BigDecimal(60*60*1000))).longValue();
				}else if(BusiGlobal.Process_CycleType.HOUR.equals(cycleType)){
					timeInterval = ((finaldays.subtract(earlydays)).multiply(new BigDecimal(60*60*1000))).longValue();
				}
			}
			String calendarID = BPSServiceManagerImpl.getCalendarID(entity.getProcessdefname());
			return BPSServiceManagerImpl.getFinalTime(calendarID, startTime, timeInterval);
		}else{
			return 0L;
		}
	}
	
	/**
	 * 方法描述:	获取流程超时预警时间点
	 * @author 蔡慧文
	 * @param startTime	开始时间
	 * @param busiType	业务类型编码
	 * @return
	 * @throws Exception 描述******
	 * @return long
	 */
	public long getEarlyTimeThread(long startTime,String busiType, Map paramMap) throws Exception{
		String dataorgid = null;
		try {
			dataorgid = (String) (paramMap.containsKey("currentUserOrgId") ? paramMap.get("currentUserOrgId") : Common.getCurrentUserOrgId());
		} catch (Exception e) {
			SrmLog.error("获取当前操作员数据归属失败!", e);
			throw new BusinessException("获取当前操作员数据归属失败!", e.getMessage());
		}
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		TBsProcessdefine entity = bpsBean.getBpsDefineByBusiType(busiType, dataorgid);
		if(entity != null){
			long timeInterval = 0;
			//	超时配置类型 / 单位
			String cycleType = entity.getCycletype();
			BigDecimal finaldays =  entity.getFinaldays();
			//	预警配置类型 / 单位
			String earlyType = entity.getEarlytype();
			BigDecimal earlydays =  entity.getEarlydays();
			if(BusiGlobal.Process_CycleType.DAY.equals(earlyType)){
				if(BusiGlobal.Process_CycleType.DAY.equals(cycleType)){
					//	超时时间配置-预警时间配置 = 预警时间点
					timeInterval = ((finaldays.subtract(earlydays)).multiply(new BigDecimal(8*60*60*1000))).longValue();
				}else if(BusiGlobal.Process_CycleType.HOUR.equals(cycleType)){
					timeInterval = (finaldays.multiply(new BigDecimal(60*60*1000))).longValue() - (earlydays.multiply(new BigDecimal(8*60*60*1000))).longValue();
				}
			}else if(BusiGlobal.Process_CycleType.HOUR.equals(earlyType)){
				if(BusiGlobal.Process_CycleType.DAY.equals(cycleType)){
					//	超时时间配置-预警时间配置 = 预警时间点
					timeInterval = (finaldays.multiply(new BigDecimal(8*60*60*1000))).longValue() - (earlydays.multiply(new BigDecimal(60*60*1000))).longValue();
				}else if(BusiGlobal.Process_CycleType.HOUR.equals(cycleType)){
					timeInterval = ((finaldays.subtract(earlydays)).multiply(new BigDecimal(60*60*1000))).longValue();
				}
			}
			String calendarID = BPSServiceManagerImpl.getCalendarID(entity.getProcessdefname());
			return BPSServiceManagerImpl.getFinalTime(calendarID, startTime, timeInterval);
		}else{
			return 0L;
		}
	}
	
	/**
	 * 方法描述:	更新诉求实体的超时时间和预警时间
	 * @author 陈今伟
	 * @param entity
	 * @return
	 * @throws Exception 描述******
	 * @return TBsApplyinfo
	 */
	public TBsApplyinfo setTimeoutAndEarlyTimeByEntity(TBsApplyinfo entity) throws Exception{
		Long ckaimTime = this.getFinalTime(Common.getCurrentTime().getTime(), entity.getBusitype());
		Long earlyTime = this.getEarlyTime(Common.getCurrentTime().getTime(), entity.getBusitype());
		entity.setClaimdate(ckaimTime == 0L ? null : new Date(ckaimTime));
		entity.setEarlydate(ckaimTime == 0L ? null : new Date(earlyTime));
		return entity;
	}
	
	/**
	 * 方法描述:	更新诉求实体的超时时间和预警时间
	 * @author 蔡慧文
	 * @param entity
	 * @return
	 * @throws Exception 描述******
	 * @return TBsApplyinfo
	 */
	public TBsApplyinfo setTimeoutAndEarlyTimeByEntityThread(TBsApplyinfo entity, Map paramMap) throws Exception{
		Long ckaimTime = this.getFinalTimeThread(Common.getCurrentTime().getTime(), entity.getBusitype(), paramMap);
		Long earlyTime = this.getEarlyTimeThread(Common.getCurrentTime().getTime(), entity.getBusitype(), paramMap);
		entity.setClaimdate(ckaimTime == 0L ? null : new Date(ckaimTime));
		entity.setEarlydate(ckaimTime == 0L ? null : new Date(earlyTime));
		return entity;
	}
	
	/**
	 * 方法描述:	将诉求信息中的超时时间和预警时间转换为流程引擎能辨识的字符串
	 * @author 陈今伟
	 * @param entity	包含业务超时时间和预警时间的诉求实体
	 * @return
	 * @throws Exception 描述******
	 * @return Map<String,String>
	 */
	public Map<String, String> calculateTimeoutAndEarlyTimeToProcess(TBsApplyinfo entity)throws Exception{
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		TBsProcessdefine entitys = bpsBean.getBpsDefineByBusiType(entity.getBusitype(), String.valueOf(entity.getDataorgid()));
		Date claimDate = entity.getClaimdate();
		Map<String, String> calculateTimeoutAndEarlyTime = new HashMap<String, String>();
		String otStr = "0.0";
		String etStr = "0.0";
		if(claimDate != null){
			Long claimDateMillis = claimDate.getTime();
			Long currentTimeMillis = Common.getCurrentTime().getTime();
			String calendarID = BPSServiceManagerImpl.getCalendarID(entitys.getProcessdefname());
			Long timeOut = 0L;
			if(currentTimeMillis<claimDateMillis){
				timeOut = BPSServiceManagerImpl.getElapsedTime(calendarID, currentTimeMillis, claimDateMillis);
				otStr = (timeOut/(1000 * 60 * 60))+"."+(timeOut%(1000 * 60 * 60) / (1000 * 60));
				String earlyType = entitys.getEarlytype();
				BigDecimal earlydays =  entitys.getEarlydays();
				if(BusiGlobal.Process_CycleType.DAY.equals(earlyType)){
					Long early = (earlydays.multiply(new BigDecimal(8*60*60*1000))).longValue();
					etStr = (early/(1000 * 60 * 60))+"."+(early%(1000 * 60 * 60) / (1000 * 60));
				}else if(BusiGlobal.Process_CycleType.HOUR.equals(earlyType)){
					Long early = (earlydays.multiply(new BigDecimal(60*60*1000))).longValue();
					etStr = (early/(1000 * 60 * 60))+"."+(early%(1000 * 60 * 60) / (1000 * 60));
				}
			}
			calculateTimeoutAndEarlyTime.put("processFinalTime", otStr);
			calculateTimeoutAndEarlyTime.put("processEarlyTime", etStr);
		} else {
			calculateTimeoutAndEarlyTime.put("processFinalTime", otStr);
			calculateTimeoutAndEarlyTime.put("processEarlyTime", etStr);
		}
		return calculateTimeoutAndEarlyTime;
	}
	
	/**
	 * 方法描述:	将诉求信息中的超时时间和预警时间转换为流程引擎能辨识的字符串
	 * @author 蔡慧文
	 * @param entity	包含业务超时时间和预警时间的诉求实体
	 * @param processdefine 流程定义
	 * @return
	 * @throws Exception 描述******
	 * @return Map<String,String>
	 */
	public Map<String, String> calculateTimeoutAndEarlyTimeToProcessThread(TBsApplyinfo entity, TBsProcessdefine processdefine)throws Exception{
		Date claimDate = entity.getClaimdate();
		Map<String, String> calculateTimeoutAndEarlyTime = new HashMap<String, String>();
		String otStr = "0.0";
		String etStr = "0.0";
		if(claimDate != null){
			Long claimDateMillis = claimDate.getTime();
			Long currentTimeMillis = Common.getCurrentTime().getTime();
			String calendarID = BPSServiceManagerImpl.getCalendarID(processdefine.getProcessdefname());
			Long timeOut = 0L;
			if(currentTimeMillis<claimDateMillis){
				timeOut = BPSServiceManagerImpl.getElapsedTime(calendarID, currentTimeMillis, claimDateMillis);
				otStr = (timeOut/(1000 * 60 * 60))+"."+(timeOut%(1000 * 60 * 60) / (1000 * 60));
				String earlyType = processdefine.getEarlytype();
				BigDecimal earlydays =  processdefine.getEarlydays();
				if(BusiGlobal.Process_CycleType.DAY.equals(earlyType)){
					Long early = (earlydays.multiply(new BigDecimal(8*60*60*1000))).longValue();
					etStr = (early/(1000 * 60 * 60))+"."+(early%(1000 * 60 * 60) / (1000 * 60));
				}else if(BusiGlobal.Process_CycleType.HOUR.equals(earlyType)){
					Long early = (earlydays.multiply(new BigDecimal(60*60*1000))).longValue();
					etStr = (early/(1000 * 60 * 60))+"."+(early%(1000 * 60 * 60) / (1000 * 60));
				}
			}
			calculateTimeoutAndEarlyTime.put("processFinalTime", otStr);
			calculateTimeoutAndEarlyTime.put("processEarlyTime", etStr);
		} else {
			calculateTimeoutAndEarlyTime.put("processFinalTime", otStr);
			calculateTimeoutAndEarlyTime.put("processEarlyTime", etStr);
		}
		return calculateTimeoutAndEarlyTime;
	}
	
	/**
	 * 方法描述:	流程超时预警处理统一入口方法
	 * @author 陈今伟
	 * @param busiType
	 * @param processdefinepkid
	 * @param worklistinfopkid
	 * @param userId
	 * @throws BusinessException 描述******
	 * @return void
	 */
	public static void doBeforeTimeout(String busiType,String processdefinepkid,String worklistinfopkid,String userId) throws BusinessException{
//		System.out.println("流程超时预警.....流程超时预警........");
		BeanFactory beanFactory = BeanFactory.newInstance();
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		//查询工单信息
		TBsWorklistinfo worklist = new TBsWorklistinfoImpl();
		worklist.setPkid(worklistinfopkid);
		bpsBean.getBusiBpsDefineDao().expandEntity(worklist);
		//	1. 查询流程超时预警配置
		TBsBusirule[] busiRules = bpsBean.getBusiRuleByFlow(processdefinepkid, String.valueOf(worklist.getDataorgid()), DEALTYPE_BEFORE_TIMEOUT);
		if(busiRules.length > 0){
			//	2.发现该流程还存在单独的配置则应用该配置
			for (TBsBusirule busirule : busiRules) {
				String beanId = busirule.getOptfunction();
				IFlowTimeout iFlowTimeoutbean = beanFactory.getBean(beanId);
				iFlowTimeoutbean.doBeforeTimeout(busiType,processdefinepkid,worklistinfopkid, userId);
			}
		}else{
			//	3.模拟通用超时预警处理方式，测试触发事件
//			System.out.println("流程超时预警.....流程超时预警........");
		}
	}
	
	/**
	 * 方法描述:	流程超时后处理统一入口法
	 * @author 陈今伟
	 * @param busiType
	 * @param processdefinepkid
	 * @param worklistinfopkid
	 * @param userId
	 * @throws BusinessException 描述******
	 * @return void
	 */
	public static void doAfterTimeout(String busiType,String processdefinepkid,String worklistinfopkid,String userId) throws BusinessException{
		BeanFactory beanFactory = BeanFactory.newInstance();
//		System.out.println("流程已经超时.....流程已经超时........");
		BusiBpsDefineBean bpsBean = beanFactory.getBean("busiBpsDefineBean");
		//查询工单信息
		TBsWorklistinfo worklist = new TBsWorklistinfoImpl();
		worklist.setPkid(worklistinfopkid);
		bpsBean.getBusiBpsDefineDao().expandEntity(worklist);
		
		//	1. 查询流程超时后处理配置
		TBsBusirule[] busiRules = bpsBean.getBusiRuleByFlow(processdefinepkid, String.valueOf(worklist.getDataorgid()),  DEALTYPE_BEFORE_TIMEOUT);
		if(busiRules.length > 0){
			//	2.发现该流程还存在单独的配置则应用该配置
			for (TBsBusirule busirule : busiRules) {
				String beanId = busirule.getOptfunction();
				IFlowTimeout iFlowTimeoutbean = beanFactory.getBean(beanId);
				iFlowTimeoutbean.doBeforeTimeout(busiType,processdefinepkid,worklistinfopkid, userId);
			}
		}else{
			//	3.模拟通用超时后处理方式，测试触发事件
//			System.out.println("流程已经超时.....流程已经超时........");
		}
	}
}
