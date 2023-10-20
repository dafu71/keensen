package com.zoomlion.hjsrm.pub.common;
/**
 * TCIS系统中统一诉求配置类，存放统一诉求静态参数，该类可以被统一诉求业务模块常量类继承
 * @author chy 2012.10.25
 */
@SuppressWarnings("serial")
public class DemandGlobal extends Globals {
	public static final  String   DEALMAXTIMEUNIT_HOUR   = "1";//处理时限为小时
	public static final  String   DEALMAXTIMEUNIT_DAY   = "2";//处理时限为天
	//方案项操作类别
	public static final  String   PARAMOPERTYPE_HW   = "1";//话务员
	public static final  String   PARAMOPERTYPE_YY   = "2";//营业员
	public static final  String   PARAMOPERTYPE_AJ   = "3";//安检维修员
	
	//现场回访方案
	public static final String CONSCHEMENAME = "现场回访方案";
	//上门是否及时
	public static final String CONSCHEME_INTIME = "上门是否及时";
	//服务态度
	public static final String CONSCHEME_MANNER = "服务态度";
	//业务技能
	public static final String CONSCHEME_SKILLLEVEL = "业务技能";
	//工作效率
	public static final String CONSCHEME_EFFICIENCY = "工作效率";
	//单项整体评价
	public static final String CONSCHEME_APPRAISE = "单项整体评价";
	//回访类型--现场回访
	public static final String REVISITRESULTINPUTTYPE_SCENE = "2";
	//回访类型--电话回访
	public static final String REVISITRESULTINPUTTYPE_PHONE = "1";
	//回访类型--上门回访
	public static final String REVISITRESULTINPUTTYPE_DOOR = "0";
	//回访组类型
	public static final  String   GROUPTYPE_BUSIS   = "2";//2：业务回访组
	//回访计划类型
	public static final  String   SCHTYPE_BUSIS   = "2";//2：业务计划
	//回访计划状态
	public static final  String   PLANSTATE_NONE   = "0";//0：未生成计划
	public static final  String   PLANSTATE_HAVED   = "1";//1：已生成计划
	
	//计划执行状态
	public static final  String   SCHSTATE_UNDO   = "0";//0：未开始
	public static final  String   SCHSTATE_DOING   = "1";//1：执行中
	public static final  String   SCHSTATE_FINISH   = "2";//2：已完成
	
	//回访任务状态
	public static final  String   TASKWOSTATE_UNDO   = "3";//3：未回访
	public static final  String   TASKWOSTATE_FAIL   = "2";//2：已回访未成功
	public static final  String   TASKWOSTATE_SUCCESS   = "1";//1：已回访成功
	public static final  String   TASKWOSTATE_REFUSE   = "0";//0：拒绝
	
	//回访结果
	public static final  String   REVISITRESULT_FAIL   = "0";//0：未成功
	public static final  String   REVISITRESULT_SUCCESS   = "1";//1：成功
	public static final  String   REVISITRESULT_REFUSE   = "3";//3：拒绝
	
	//计划生成状态
	public static final  String   POOLPLANSTATE_UNDO  = "0";//0：未生成计划
	public static final  String   POOLPLANSTATE_HAVEDO  = "1";//1：已生成计划
	
	//知会查看状态
	public static final String NOTIFYSTATE_UNCHECK = "0";//0：未查看
	public static final String NOTIFYSTATE_HAVECHECK = "1";//1：已查看
	
	//补话查看状态
	public static final String COMMSTATE_UNCHECK = "0";//0：未查看
	public static final String COMMSTATE_HAVECHECK = "1";//1：已查看
	
	//跟进查看状态
	public static final String TRACKSTATE_UNCHECK = "0";//0：未查看
	public static final String TRACKSTATE_HAVECHECK = "1";//1：已查看
	
	//报表类型
	public static final String REPORTTYPE_RETURN = "0";//0：转派
	public static final String REPORTTYPE_SATISFY = "1";//1：满意度
	
	//回访池工单类型
	public static final String POOLWOTYPE_DEMAND = "1";//1：热线工单
	public static final String POOLWOTYPE_TCIS = "2";//2：业务工单
	
	//业务来源类型
	public static final String BUSISOURCETYPE_NOTIFY = "1";//1:知会
	public static final String BUSISOURCETYPE_COMLEMENT = "2";//2:补话
	public static final String BUSISOURCETYPE_TRACK = "3";//3:跟进
	public static final String BUSISOURCETYPE_URGEREC = "4";//4:催办
	public static final String BUSISOURCETYPE_RECOVERY ="5";//5：回收
	public static final String BUSISOURCETYPE_BUSITYPE ="6";//5：修改业务类型配置
	
    //是否转派
	public static final String ALLOCATE_UNDO = "0";//0：未转派
	public static final String ALLOCATE_DO = "1";//1：已转派
	
    //是否知会
	public static final String NOTIFY_UNDO = "0";//0：未知会
	public static final String NOTIFY_DO = "1";//1：已知会
	
    //是否及时通话
	public static final String ONLINE_UNDO = "0";//0：未及时通话
	public static final String ONLINE_DO = "1";//1：已及时通话
	
    //预约计划类型
	public static final String RESERVATIONPLANMODE_NUMBER = "1";//1：数量模式
	public static final String RESERVATIONPLANMODE_WORKHOUR = "2";//1：工时模式

	//问题记录状态
	public static final String ISSUESTATE_UNSHUTDOWN = "0";//0：未关闭
	public static final String ISSUESTATE_SHUTDOWN = "1";//1：已关闭
	
	//问题解决状态
	public static final String ISSUESOLVESTATE_UNDO = "0";//0：未解决
	public static final String ISSUESOLVESTATE_DO = "1";//1：已解决
	
	//公告（问题）查看状态
	public static final String DECLARESTATE_UNDO = "0";//0：未查看
	public static final String DECLARESTATE_DO = "1";//1：已查看
	
	//诉求类型是否大项
	public static final String APPLYTYPEISBIG_NO = "0";//0：非大项
	public static final String APPLYTYPEISBIG_YES = "1";//1：是大项
	//回访工单来源类型
	public static final String SOURCETYPE_HOMEREVISIT = "0";//上门调查
	public static final String SOURCETYPE_BUSIS = "1";//业务处理
	public static final String SOURCETYPE_GAS = "2";//燃气具销售
	public static final String SOURCETYPE_INSPECT = "3";//安检
	public static final String SOURCETYPE_RECORD = "4";//抄表
	public static final String SOURCETYPE_INSTALL = "5";//报装流程
	public static final String SOURCETYPE_PROJECT = "6";//报装工程接口
	public static final String SOURCETYPE_USERPAY = "7";//用户缴费
	public static final String SOURCETYPE_RESULTINPUT = "8";//回访结果录入
	public static final String SOURCETYPE_EXCELIMPORT = "9";//回访结果导入数据库
	//回访工单类型
	public static final String VISITLISTTYPE_DEMAND = "1";//诉求工单
	public static final String VISITLISTTYPE_BUSIS = "2";//业务工单
	//是否启用流程
	public static final String ISFLOW_YES = "0";//是
	public static final String ISFLOW_NO = "1";//否
	//补话录入联系人分隔符 
	public static final String FILLWORDSEPARATION = ";";
	
	public static final String ISONLINE_OFF= "0";//不在线
	public static final String ISONLINE_ON = "1";//在线
	
	//热线班长的rolecode值
	public static final String LINEMONITOR = "linemonitor";//热线班长
	
	//回访录入的整体满意度评价--满意
	public static final String INPUTAPPROVELEVEL_SEVEN = "4";
	//回访类型
	public static final String INPUTTYPE_HOME = "0";//上门回访
	public static final String INPUTTYPE_PHONE = "1";//电话回访
	public static final String INPUTTYPE_LOCALE = "2";//现场回访
	public static final String INPUTTYPE_GROUP = "3";//班组回访
	
	//回访方案配置类型
	public static final String PARAMVALUTYPE_TXT = "1";//文本输入框
	public static final String PARAMVALUTYPE_BOX = "2";//勾选框
	//回访业务类型开关
	public static final String ISOPEN_POEN = "0";//开
	public static final String ISOPEN_CLOSE= "1";//关
	
	
	//话务来源
	public static final String  CALLINGSOURCE_DEMAND= "0";//热线
	//用户类型
	public static final String USERSVCTYPE_GAS = "1";//燃气用户,有产权的，使用燃气的用户，有供气点的。可以有用户燃气具资料
	public static final String USERSVCTYPE_GASTOOLS ="2" ;// 2.燃气具用户  ：          购买了燃气具的用户。无供气点。
	public static final String USERSVCTYPE_VIRTUAL= "0";// 0.虚拟用户 ，非正式用户
	
}
