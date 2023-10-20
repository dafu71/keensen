package com.zoomlion.hjsrm.pub.common;

/**
 * <pre>
 *          Title: 业务处理公共配置类
 *          Description: 程序功能的描述
 * </pre>
 * 
 * @author 陈今伟
 * @version 1.0
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 * 
 */

public class BusiGlobal extends Globals {

	/* 业务处理中的营业费类型常量 */
	public static final String BUSI_FEETYPEID_REFORM = "B1103";// 改造服务费

	public static final String BUSI_FEETYPEID_TRANSFER = "B1104"; // 过户费

	public static final String BUSI_FEETYPEID_OILINGFEE = "B1105";	//注油费

	public static final String BUSI_FEETYPEID_OPTFEE = "B1106";	//人工费
	
	public static final String BUSI_FEETYPEID_PRICEADJUST= "B0012";	//价调基金

	/* 业务环节定义 -- 超时类型 */
	public static final String TBSBUSISTEPDEFINE_CYCLETYPE_HOUR = "0";// 小时

	public static final String TBSBUSISTEPDEFINE_CYCLETYPE_DAY = "1";// 天

	/** **************转单信息表 是否签收 0是 1否****************** */
	public static final String TURNISSIGNIN_YES = "0";// 欠费稽查

	public static final String TURNISSIGNIN_NO = "1";// 查户稽查

	/** **************转单信息表 状态****************** */
	public static final String TURNSTATE_NORMAL = "1";// 正常

	public static final String TURNSTATE_BACK = "2";// 已打回

	public static final String TURNSTATE_FINISHED = "3";// 已完成

	public static final String TURNSTATE_SIGN = "4";// 已签收

	/** **************装拆表记录表 数据分类****************** */
	public static final String TBSMETERFIXREMOVE_RECTYPE_FIX = "1";// 装表读数

	public static final String TBSMETERFIXREMOVE_RECTYPE_BUSI = "2";// 业务抄表读数

	public static final String TBSMETERFIXREMOVE_RECTYPE_REMOVE = "3";// 拆表读数

	public static final String TBSMETERFIXREMOVE_RECTYPE_XBJG = "4";// 校表结果

	public static final String TBSMETERFIXREMOVE_RECTYPE_XBLS = "5";// 校表临时

	public static final String TBSMETERFIXREMOVE_RECTYPE_UNDO = "0";// 无记录

	/** **************装拆表记录表 表具是否计费表****************** */
	public static final String TBSMETERFIXREMOVE_ISBILL_YES = "1";// 计费表

	public static final String TBSMETERFIXREMOVE_ISBILL_NO = "0";// 非计费表

	/** **************表具处理记录表 状态****************** */
	public static final String TBSMETERDEALREC_METERDEALSTATE_YES = "0";// 完成

	public static final String TBSMETERDEALREC_METERDEALSTATE_NO = "1";// 未完成
	
	public static final String TBSMETERDEALREC_METERDEALSTATE_BATCH = "9";// 批量换表

	public static final String TBSMETERDEALREC_METERDEALSTATE_ICCARD = "8";//IC卡表换表

	/** **************表具维护计划类型****************** */
	public static final String PLANINFO_PLANTYPE_OILINGPLAN = "3010"; // 注油计划

	public static final String PLANINFO_PLANTYPE_VERIFICATIONPLAN = "3020"; // 检定计划

	public static final String PLANINFO_PLANTYPE_CHANGEPLAN = "3030"; // 换表计划

	public static final String PLANINFO_PLANTYPE_MAINTAINPLAN = "3040"; // 维护计划

	public static final String PLANINFO_PLANTYPE_DISMANTLE = "3050"; // 拆表计划

	/** **************校表方式****************** */
	public static final int TBSMETERFIXREMOVE_VERIFYTYPE_DEFAULT = 0;// 在线校表

	public static final int TBSMETERFIXREMOVE_VERIFYTYPE_REPLACE = 1;// 上替代表

	public static final int TBSMETERFIXREMOVE_VERIFYTYPE_SIGN = 2;// 签直通协议

	/**
	 * 整改计划
	 */
	public static final String PLANINFO_PLANTYPE_REFORM = "3060";

	/** *****************计划任务状态****************** */
	/**
	 * 0: 未完成 (计划任务状态)
	 */
	public static final String TBSPLANTASK_UNFINISH = "0";

	/**
	 * 1：已完成 (计划任务状态)
	 */
	public static final String TBSPLANTASK_FINISHED = "1";

	/** **************表具计划状态************** * */
	/**
	 * 1:未派工(计划状态)
	 */
	public static final String PLANINFO_STATE_NOTDISPATCHING = "1"; // 未派工

	/**
	 * 2:执行中(计划状态)
	 */
	public static final String PLANINFO_STATE_RUNNING = "2"; // 执行中

	/**
	 * 3:已完成(计划状态)
	 */
	public static final String PLANINFO_STATE_COMPLETED = "3"; // 已完成

	/**
	 * 0:已取消 (计划状态)
	 */
	public static final String PLANINFO_STATE_CANCELLED = "0"; // 已取消

	/** ****************表处理换表类别*************************** */
	public static final String BS_CHANGEMETERMODE_SAME = "7";// 换同类型表

	public static final String BS_CHANGEMETERMODE_TOMACHINE = "8";// IC卡表换机械表

	public static final String BS_CHANGEMETERMODE_TOIC = "9";// 机械表换IC卡表

	/** ****************表处理操作信息处理类别*************************** */
	public static final String TBSMETERDEALREC_DEALTYPE_CHANGEMETER = "1";// 换表

	public static final String TBSMETERDEALREC_DEALTYPE_FIX = "2";// 维修

	public static final String TBSMETERDEALREC_DEALTYPE_VERIFYMETER = "10";// 校表

	public static final String TBSMETERDEALREC_DEALTYPE_SETUPMETER = "11";// 上表

	public static final String TBSMETERDEALREC_DEALTYPE_UNSUBSCRIBE = "12";// 销户

	public static final String TBSMETERDEALREC_DEALTYPE_QUITTING = "13";// 报停

	public static final String TBSMETERDEALREC_DEALTYPE_SEAL = "3";// 上封条

	public static final String TBSMETERDEALREC_DEALTYPE_BATTERY = "14";// 换电池

	public static final String TBSMETERDEALREC_DEALTYPE_PLUGGING = "15";// 封堵

	public static final String TBSMETERDEALREC_DEALTYPE_CALCELPLUGGING = "16";// 解封

	public static final String TBSMETERDEALREC_DEALTYPE_OTHER = "6";// 其他

	public static final String TBSMETERDEALREC_DEALTYPE_TURNORDER = "5";// 转单

	public static final String TBSMETERDEALREC_DEALTYPE_DOWN = "A";// 下表

	public static final String TBSMETERDEALREC_DEALTYPE_NOTDOWN = "B";// 未下表

	public static final String TBSMETERDEALREC_DEALTYPE_REMOVESUBPPLY = "C";// 拆除供气点

	public static final String TBSMETERDEALREC_DEALTYPE_UNREMOVESUBPPLY = "D";// 不拆除供气点

	public static final String TBSMETERDEALREC_DEALTYPE_STOPESTIMATE = "E";// 暂停估抄

	public static final String TBSMETERDEALREC_DEALTYPE_PIPECUT = "F";// 割管

	/** **********************诉求来源类型************* */
	public static final String TBSAPPLYINFO_FINISHTYPE_DIRECT = "F001"; // 诉求完成类型有三种：受理时解决

	public static final String TBSAPPLYINFO_FINISHTYPE_DISPATCH = "F002";// 热线调度派单时解决

	public static final String TBSAPPLYINFO_FINISHTYPE_DEPARTMENT = "F003";// 业务部门解决
	
	/** **********************换表原因类型************* */
	public static final String TBSMETERDEALREC_REASONTYPE_OTHER = "CXXX";	//其他

	/** **********************诉求状态：未派单（发起），已派单，已打回，已结束（完成）； 确认 处理 关闭************* */
	public static final String TBSAPPLYINFO_STATE_NOTDISPATCHING = "S001"; // 未派单（发起）

	public static final String TBSAPPLYINFO_STATE_DISPATCHING = "S002"; // 已派单

	public static final String TBSAPPLYINFO_STATE_RETURN = "S003"; // 已打回

	public static final String TBSAPPLYINFO_STATE_CONFIRM = "S004"; // 确认

	public static final String TBSAPPLYINFO_STATE_HANDLE = "S005"; // 处理

	public static final String TBSAPPLYINFO_STATE_FINISHED = "S006"; // 已结束（完成）

	public static final String TBSAPPLYINFO_STATE_CLOSED = "S007"; // 注销（流程注销时更新）

	/** **********************诉求派单活动表状态 1：派单 2：打回 3：确认 4：转单************* */
	public static final String TBSAPPEALSENDHOTLIST_DISPOSETYPE_SEND = "1"; // 1:分派工单

	public static final String TBSAPPEALSENDHOTLIST_DISPOSETYPE_RETURN = "2";// 2:打回工单

	public static final String TBSAPPEALSENDHOTLIST_DISPOSETYPE_CONFIRM = "3";// 3:确认

	public static final String TBSAPPEALSENDHOTLIST_DISPOSETYPE_TRANSFER = "4";// 3:转单

	/** **********************临时读数表状态 1：未算费 0：已算费************* */
	public static final String TBSREADINGTEMP_STATE_FEE = "0";

	public static final String TBSREADINGTEMP_STATE_NOTFEE = "0";

	/** **********************抢修信息 施工结论 1：通过 0：转单************* */
	public static final String TBSREPAIRINFO_CONCLUSIONTYPE_PASS = "1";

	public static final String TBSREPAIRINFO_CONCLUSIONTYPE_TRUN = "0";

	/** **********************勘测结论 1：符合用气条件 2：符合用气条件************* */
	public static final String TBSSURVEYCONCLUSION_CONCLUSIONTYPE_CONFORMITY = "1"; // 1:符合用气条件

	public static final String TBSSURVEYCONCLUSION_CONCLUSIONTYPE_INCONFORMITY = "2"; // 2:不符合用气条件

	/** 营业费状态 */
	public static final String TBSBUSIFEE_STATE_ACTIVE = "1"; // 正常

	public static final String TBSBUSIFEE_STATE_INVALID = "0"; // 作废

	/** 营业费账目类型 */
	public static final String TBSBUSIFEE_FEEID_PARENTID = "B"; // 营业费帐目类型标识

	public static final String TBSBUSIFEE_FEEID_MATERIAL = "GS003"; // 管件材料费

	/** 工程材料使用状态 */
	public static final String TBSPROJECTMATERIAL_UNUSEFLAG_ACTIVE = "1";// 使用

	public static final String TBSPROJECTMATERIAL_UNUSEFLAG_INVALID = "0";// 未使用

	/**
	 * 诉求分类：0：业务诉求、1：投诉、2：建议、3：表扬）
	 */
	public static final String TBSAPPLYINFO_APPLYTYPE_BUSI = "0";

	public static final String TBSAPPLYINFO_APPLYTYPE_COMPLAINTS = "1";

	public static final String TBSAPPLYINFO_APPLYTYPE_PROPOSAL = "2";

	public static final String TBSAPPLYINFO_APPLYTYPE_PRAISE = "3";

	/**
	 * 渠道类型：1：热线 2：营业厅 3：公司内部转单 4：网报 5：短信方式 6抢修热线 7大客户经理组 X：其他
	 */
	public static final String TBSAPPLYINFO_CHNLTYPE_HOTLINE = "1";

	public static final String TBSAPPLYINFO_CHNLTYPE_HALL = "2";

	public static final String TBSAPPLYINFO_CHNLTYPE_INSIDE = "3";

	public static final String TBSAPPLYINFO_CHNLTYPE_WEB = "4";

	public static final String TBSAPPLYINFO_CHNLTYPE_TEXT = "5";
	public static final String TBSAPPLYINFO_CHNLTYPE_REPAIR = "6";
	public static final String TBSAPPLYINFO_CHNLTYPE_BIGCUSTOMER = "7";

	public static final String TBSAPPLYINFO_CHNLTYPE_OTHER = "X";

	/** 工单信息表 工单类型 1： 诉求工单 2：业务工单 3:其他工单 * */
	/**
	 * 1： 诉求工单
	 */
	public static final String TBSWORKLISTINFO_WORKLISTTYPE_APPLY = "1";

	/**
	 * 2：业务工单
	 */
	public static final String TBSWORKLISTINFO_WORKLISTTYPE_BUSI = "2";

	/**
	 * 3:其他工单
	 */
	public static final String TBSWORKLISTINFO_WORKLISTTYPE_OTHER = "3";

	/** 工单信息表 工单状态 1： 未完成 2：已完成 * */
	/**
	 * 1： 未完成
	 */
	public static final String TBSWORKLISTINFO_STATE_NOTFINISHED = "1";

	/** 业务记录表状态 状态 1： 未完成 2：已完成 3:挂起 * */
	public static final String TBSBUSIBUSIREC_STATE_NOTFINISHED = "1";// 未完成

	public static final String TBSBUSIBUSIREC_STATE_FINISHED = "2";// 已完成

	public static final String TBSBUSIBUSIREC_STATE_SUSPENDED = "3";// 挂起

	/**
	 * 2：已完成
	 */
	public static final String TBSWORKLISTINFO_STATE_FINISHED = "2";

	/** ***************业务类型************************ */

	/**
	 * BS100:诉求
	 */
	public static final String TBS_BUSITYPE_APPLY = "BS100";
	
	/**
	 * 诉求环节定义
	 */

	public static final String TBS_BUSITYPE_APPEALACCEPTED = "BS10001";	//诉求受理

	public static final String TBS_BUSITYPE_DISTRIBUTION = "BS10002";	//派单到业务部门
	
	public static final String TBS_BUSITYPE_BUSICONFIRM = "BS10003";	//业务部门确认
	
	/**
	 * 无业务流程的诉求类型
	 */
	
	public static final String TSQAPPLYTYPE_TYPE_RECORDRESERVATION = "HS019";	//预约抄表
	
	public static final String TSQAPPLYTYPE_TYPE_SECURITYRESERVATION = "SC001";	//预约安检
	
	public static final String TSQAPPLYTYPE_TYPE_GSSECURITY = "SC002";			//工商户安检
	/**
	 * BS104:恢复用气
	 */
	public static final String TBS_BUSITYPE_RESTORATION = "BS104";

	/**
	 * BS105:稽查下表
	 */
	public static final String TBS_BUSITYPE_CHECKDOWNMETER = "BS105";

	/**
	 * BS106:稽查上表
	 */
	public static final String TBS_BUSITYPE_CHECKUPMETER = "BS106";

	/**
	 * BS107:漏气抢修
	 */
	public static final String TBS_BUSITYPE_LEAKREPAIR = "BS107";

	/**
	 * BS108:户内整改
	 */
	public static final String TBS_BUSITYPE_REFORM = "BS108";

	/**
	 * BS109:销户
	 */
	public static final String TBS_BUSITYPE_UNSUBSCRIBE = "BS109";

	/**
	 * BS110:过户
	 */
	public static final String TBS_BUSITYPE_USERTRANSFER = "BS110";

	/**
	 * BS111:表注油处理
	 */
	public static final String TBS_BUSITYPE_OIL = "BS111";

	/**
	 * BS112:表维护处理
	 */
	public static final String TBS_BUSITYPE_MAINT = "BS112";

	/**
	 * BS113:点火
	 */
	public static final String TBS_BUSITYPE_IGNITE = "BS113";
	
	
	/**
	 * BS118:工商户点火
	 */
	public static final String TBS_BUSITYPE_FIRE = "BS118";

	/**
	 * BS114:挂表
	 */
	public static final String TBS_BUSITYPE_INSTALL = "BS114";

	/**
	 * BS115:点火挂表
	 */
	public static final String TBS_BUSITYPE_INSTALLIGNITE = "BS115";
	
	/**
	 * BS116:用户类型变更
	 */
	public static final String TBS_BUSITYPE_USERTYPEALTER = "BS116";

	/**
	 * BS101:表处理
	 */
	public static final String TBS_BUSITYPE_DEAL = "BS101";

	/**
	 * BS102 : 校表
	 */
	public static final String TBS_BUSITYPE_PROOFREADING = "BS102";

	/**
	 * BS117 : 户内换管
	 */
	public static final String TBS_BUSITYPE_CHANGEPIPE = "BS117";
	
	/**
	 * BS119 : 工商户挂表
	 */
	public static final String TBS_BUSITYPE_GSINSTALL = "BS119";
	
	/**
	 * 校表活动定义
	 */
	public static final String TBS_BUSITYPE_PROOFREADING_CHOOSE = "BS10201";

	public static final String TBS_BUSITYPE_PROOFREADING_SIGN = "BS10202";

	public static final String TBS_BUSITYPE_PROOFREADING_DEAL = "BS10203";

	public static final String TBS_BUSITYPE_PROOFREADING_RESULT = "BS10204";

	/**
	 * 校表结果
	 */

	public static final String BS_CCONCLUSIONTYPE_RIGHT = "1";// 合格

	public static final String BS_CCONCLUSIONTYPE_NORIGHT = "0";// 不合格

	/**
	 * 业务类型
	 */
	public static final class BusiType {
		/**
		 * 诉求：BS100
		 */
		public static final String TURNINFO = "BS100";
	}

	/**
	 * 预约计划类型：数量模式 1
	 */
	public static final String RESERPLANMODE_NUMBER = "1";

	/**
	 * 预约计划类型：工时模式 2
	 */
	public static final String RESERPLANMODE_WORKHOUR = "2";

	/**
	 * 派工业务属性：1为人员，2为部门；
	 */
	public static final String BUSIDISTRINFO_BUSIATTR_USER = "1";// 1表示人员

	public static final String BUSIDISTRINFO_BUSIATTR_DEPARTMENT = "2";// 1表示部门

	/**
	 * 在统一诉求视图中不显示的业务类型
	 */
	public static final String[] BUSITYPE_NOSHOW = new String[] {
			BusiGlobal.TBS_BUSITYPE_APPLY, GasGlobal.GAS_BUSITYP_GS602,
			GasGlobal.GAS_BUSITYP_GS603, GasGlobal.GAS_BUSITYP_GS605,
			InstallGlobal.BUSITYPE_INDUSTRIAL_METER,
			InstallGlobal.BUSITYPE_INDUSTRIAL_FIRE,
			InstallGlobal.BUSITYPE_COLLECTIVE_METER,
			InstallGlobal.BUSITYPE_COLLECTIVE_FIRE };

	/**
	 * 在统一诉求视图中不显示的业务大类
	 */
	public static final String[] BUSISORT_NOSHOW = new String[] { BusiGlobal.BUSISORT_SQ002 };

	/**
	 * 燃气具业务类型
	 */
	public static final String[] BUSITYPE_GASTYPES = new String[] {
			GasGlobal.GAS_BUSITYP_GS601, GasGlobal.GAS_BUSITYP_GS602,
			GasGlobal.GAS_BUSITYP_GS603, GasGlobal.GAS_BUSITYP_GS604,
			GasGlobal.GAS_BUSITYP_GS605, GasGlobal.GAS_BUSITYP_GS606,
			GasGlobal.GAS_BUSITYP_GS607 };

	/**
	 * WFActivityInst中的活动状态
	 */
	public static final int BPS_CURRENTSTATE = 7;// 活动处于完成状态

	public static final int BPS_CURRENTSTATE_RUN = 2;// 活动处于运行状态

	/**
	 * WFWorkItem中的工作项状态
	 */
	public static final String WFWORKITEM_CURRENTSTATE_NOTGET = "4";	//待领取
	
	public static final String WFWORKITEM_CURRENTSTATE_RUN = "10";		//运行

	public static final String WFWORKITEM_CURRENTSTATE_SUSPEND = "8";	//挂起
	
	public static final String WFWORKITEM_CURRENTSTATE_FINISHED = "12";	//完成
	
	/**
	 * 是否为虚拟用户
	 */
	public static final String APPLYINFO_ISVIRTUAL = "1";// 是虚拟用户

	public static final String APPLYINFO_NOTVIRTUAL = "0";// 不是虚拟用户

	/**
	 * 业务大类:维修类
	 */
	public static final String BUSISORT_SQ001 = "SQ001"; // 维修类

	/**
	 * 业务大类:报装类
	 */
	public static final String BUSISORT_SQ002 = "SQ002"; // 报装类

	/**
	 * 业务大类:燃气具售后服务类
	 */
	public static final String BUSISORT_SQ003 = "SQ003"; // 燃气具售后服务类

	/**
	 * 业务大类:咨询类
	 */
	public static final String BUSISORT_SQ004 = "SQ004"; // 咨询类

	/**
	 * 业务大类:其他
	 */
	public static final String BUSISORT_SQ005 = "SQ005"; // 其他

	/**
	 * 2：强制
	 */
	public static final String APPOINT_CFG_CHECK = "2";

	/**
	 * 1：非强制
	 */
	public static final String APPOINT_CFG_UNCHECK = "1";

	/**
	 * 0：不管理
	 */
	public static final String APPOINT_CFG_UNDO = "0";

	/**
	 * 1：数量模式
	 */
	public static final String APPOINT_MODE_NUM = "1";

	/**
	 * 2：工时模式
	 */
	public static final String APPOINT_MODE_TIME = "2";

	/**
	 * 流程定义--超时类型
	 */
	public static final class Process_CycleType {
		public static final String DAY = "1";

		public static final String HOUR = "0";
	}

	/**
	 * 外出资源类型
	 */
	public static final String OUTINGRESOURCETYPE_RY = "1";

	public static final String OUTINGRESOURCETYPE_DJJ = "2";

	public static final String OUTINGRESOURCETYPE_QC = "3";

	public static final String OUTINGRESOURCETYPE_MTC = "4";

	public static final String OUTINGRESOURCETYPE_JCY = "5";

	public static final String OUTINGRESOURCETYPE_LPJ = "6";
	
	/**
	 * 留头类型
	 */
	public static final String TBSREMAINHEADINFO_HEADTYPE_ONE = "1";//热水器
	public static final String TBSREMAINHEADINFO_HEADTYPE_TWO = "2";//燃气炉
	public static final String TBSREMAINHEADINFO_HEADTYPE_OTHER = "X";//其他
	public static final String TBSREMAINHEADINFO_HEADTYPE_DN20 = "3";//DN20
	public static final String TBSREMAINHEADINFO_HEADTYPE_DN15 = "4";//DN15
	
	/**
	 * 留头点火失败原因类型
	 */
	public static final String TBSREMAINHEADINFO_FIREFAILURE_GC = "BS1";//工程原因
	public static final String TBSREMAINHEADINFO_FIREFAILURE_YH = "BS2";//用户原因
	public static final String TBSREMAINHEADINFO_FIREFAILURE_QT = "BS3";//其他原因
	
	/**
	 * 数量模式预约计划-预约时间段状态
	 */
	public static final String TBSRESERVATIONPLANEXT_STATE_PRINTED = "2";// 已打印状态
	
	/**
	 * 参与者类型
	 */
	public static final String TBSPARTICIPANTRULE_TYPE_ORGANIZATION = "organization";	//机构
	public static final String TBSPARTICIPANTRULE_TYPE_ROLE = "role";	//角色
	public static final String TBSPARTICIPANTRULE_TYPE_PERSON = "person";	//人员
	
	/**
	 * 预约时间类型
	 */
	public static final String TBSRESERVATIONPLANEXT_TIMETYPE_FORENOON = "1";	//上午
	public static final String TBSRESERVATIONPLANEXT_TIMETYPE_AFTERNOON = "2";	//下午
	public static final String TBSRESERVATIONPLANEXT_TIMETYPE_EVENING = "3";	//晚上
	//接报来源
	
	public static final String   TBSREPORTEDSOURCE_CUSTOMER = "1";	//用户来电报
	public static final String   TBSREPORTEDSOURCE_CALLCENTER = "2";	//客户中心来电报
	public static final String   TBSREPORTEDSOURCE_DEPARTLIAISON = "3";	//部门联络单
	public static final String   TBSREPORTEDSOURCE_RECORDINSTALL = "4";	//抄表安检现场电话报
	public static final String   TBSREPORTEDSOURCE_110= "5";	//110救援中心
	public static final String   TBSREPORTEDSOURCE_TRACK = "6";	//遗留跟踪事项（抢修中心内部）
	public static final String   TBSREPORTEDSOURCE_INSPECTION= "7";	//巡检发现（部门内部其他班组报）
	public static final String   TBSREPORTEDSOURCE_REPAIRLOCALE = "8";	//维修现场接报
	public static final String   TBSREPORTEDSOURCE_MARKET = "9";	//市场经营部报
	public static final String   TBSREPORTEDSOURCE_PROJECT= "10";	//工程组安检报
	public static final String   TBSREPORTEDSOURCE_TESTINSTALL = "11";	//检测组安检报
	public static final String   TBSREPORTEDSOURCE_RECORDINSTALLSYSTEM = "12";	//抄表安检系统传送
	public static final String   TBSREPORTEDSOURCE_OTHER = "X";	//公司其他部门报
	
	//110用户
	public static final String   USER110= "110";	//110用户
	
	/**
	 * 业务类型
	 * 
	 */
	public static final String   TSQAPPLYTYPE_TYPE_SV000 = "SV000";	//前台服务
	public static final String   TSQAPPLYTYPE_TYPE_SV001 = "SV001";	//热线服务
	
	/**
	 * 工单信息数据标识
	 */
	public static final String   TBSWORKLISTINFO_DATAFLAG_USER = "1";	//用户号
	public static final String   TBSWORKLISTINFO_DATAFLAG_PROJECT = "2";	//项目号
	
}
