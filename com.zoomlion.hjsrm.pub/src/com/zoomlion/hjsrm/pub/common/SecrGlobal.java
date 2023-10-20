package com.zoomlion.hjsrm.pub.common;

/**
 * 
 * <pre>
 *   Title: 安检管理-每个模块建立一个本模块的 公共类，用以存放 数据字典值等公共变量
 *   Description:  每个模块建立一个本模块的 公共类，用以存放 数据字典值等公共变量。
 * </pre>
 * 
 * @author 肖钢
 * @version 1.0
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容
 * 
 */
public class SecrGlobal {
	/**
	 * T_SC_DISTRICT STATE 无效
	 */
	public static final String FLAG_INVALID = "0";

	/**
	 * T_SC_DISTRICT STATE 有效
	 */
	public static final String FLAG_VALID = "1";

	/**
	 * 未通气用户
	 */
	public static final String NONTONGQI = "1";
	
	/**
	 * 未挂表用户
	 */
	public static final String NONGUABIAO = "2";

	/**
	 * 已制定计划用户
	 */
	public static final String PLANUSER = "3";
	
	/**
	 * 注销户
	 */
	public static final String CANCELUSER = "4";

	/**
	 * 穿层户
	 */
	public static final String PASSFLOOR = "5";
	
	/**
	 * 已挂表未通气
	 */
	public static final String GUABIAONONTONGQI = "6";
	
	/**
	 * 已制定计划未安检户
	 */
	public static final String EXISTPLANNOSECR = "7";
	
	/**
	 * 未制定计划未安检户
	 */
	public static final String NOPLANNOSECR = "8";
	
	/**
	 * 周期内新户
	 */
	public static final String RANGENEWUSER = "9";

	/**
	 * 安检周期
	 */
	public static final String TSCPLANRECORD_CATEGORY_DAGERANGE = "1";

	/**
	 * 普通计划
	 */
	public static final String TSCPLANRECORD_CATEGORY_PLAIN = "2";

	/**
	 * 高级计划
	 */
	public static final String TSCPLANRECORD_CATEGORY_ADVANCED = "3";
	/**
	 * 预约计划
	 */
	public static final String TSCPLANRECORD_CATEGORY_PREPLAN = "4";
	/**
	 * 计划执行状态:未开始
	 */
	public static final String TSCPLANRECORD_STATE_NONSTARTED = "0";
	
	/**
	 * 计划执行状态:已分配
	 */
	public static final String TSCPLANRECORD_STATE_ASSIGNED = "1";
	/**
	 * 计划执行状态:执行中
	 */
	public static final String TSCPLANRECORD_STATE_EXECUTED = "2";
	/**
	 * 计划执行状态:已完成
	 */
	public static final String TSCPLANRECORD_STATE_FINISHED = "3";
	/**
	 * 安检小组状态：有效
	 */
	public static final String TSCCONFIGGROUP_STATE_VALID = "1";
	/**
	 * 安检小组状态：无效
	 */
	public static final String TSCCONFIGGROUP_STATE_INVALID = "0";
	/**
	 * 安检日志状态：是否作废
	 */
	public static final String TSCCONFIGLOG_STATE_VALID = "0";
	/**
	 * 安检日志状态：是否作废
	 */
	public static final String TSCCONFIGLOG_STATE_INVALID = "1";
	/**
	 * 安检记录状态：有效
	 */
	public static final String TSCSECURITYRECORD_STATE_VALID = "1";
	/**
	 * 安检记录状态：无效
	 */
	public static final String TSCSECURITYRECORD_STATE_INVALID = "0";
	/**
	 * 维修状态：未修
	 */
	public static final String TSCREPAIRRECORD_STATE_UNREPAIR = "3";
	/**
	 * 维修状态：局修
	 */
	public static final String TSCREPAIRRECORD_STATE_PARTREPAIR = "2";
	/**
	 * 维修状态：全修
	 */
	public static final String TSCREPAIRRECORD_STATE_REPAIRED = "1";
	/**
	 * 维修录入状态：正常录入
	 */
	public static final String TSCREPAIRRECORD_REPARISTATE_RECORD = "0";
	/**
	 * 维修录入状态：补录
	 */
	public static final String TSCREPAIRRECORD_REPARISTATE_RECORDED = "1";
	/**
	 * 维修完成状态：未完成
	 */
	public static final String TSCREPAIRRECORD_REPARISTATE_NOFINISH = "0";
	/**
	 * 维修完成状态：已完成
	 */
	public static final String TSCREPAIRRECORD_REPARISTATE_FINISHED = "1";
	/**
	 * 安检状态:已安检
	 */
	public static final String TSCSECURITYRECORD_STATE_EXECUTED = "1";
	
	/**
	 * 入户情况：正常入户
	 */
	public static final String TSCSECURITYRECORD_HOMEQK_ZCRH = "1";
	/**
	 * 入户情况：到访不遇
	 */
	public static final String TSCSECURITYRECORD_HOMEQK_DFBY = "2";
	/**
	 * 入户情况:拒绝安检
	 */
	public static final String TSCSECURITYRECORD_HOMEQK_JJAJ = "3";
	/**
	 * 入户情况：查无此户
	 */
	public static final String TSCSECURITYRECORD_HOMEQK_CWCW = "4";
	/**
	 * 入户情况：户内无管
	 */
	public static final String TSCSECURITYRECORD_HOMEQK_HNWG = "5";
	/**
	 * 入户情况: 重复户
	 */
	public static final String TSCSECURITYRECORD_HOMEQK_CFH = "6";
	
	/**
	 * 安检状态:未安检
	 */
	public static final String TSCSECURITYRECORD_STATE_NONSTARTED  = "0";
	/**
	 * 模板发布状态:已发布
	 */
	public static final String TSCCONFIGMOULD_STATE_PUBLISHED = "1";
	/**
	 * 模板发布状态:未发布
	 */
	public static final String TSCCONFIGMOULD_STATE_NONPUBLISHED  = "0";
	/**
	 * 模板类型:业务模板
	 */
	public static final String TSCCONFIGMOULD_FLAG_BUSSINESS = "1";
	/**
	 * 模板类型:基础模板
	 */
	public static final String TSCCONFIGMOULD_FLAG_BASIC = "2";
	
	//*************t_sc_config_inspector***************
	/**
	 * 安检员角色
	 */
	public static final String TSCCONFIGINSPECTOR_CATEGORY_SECURITY_ROLE = "1";
	/**
	 * 维修员角色
	 */
	public static final String TSCCONFIGINSPECTOR_CATEGORY_REPAIR_ROLE = "2";
	
	/**
	 * 系统用户
	 */
	public static final String TSCPLANINSPECTOR_CUSTOMERTYPE_SYSUSER = "1";
	
	/**
	 * 新增用户
	 */
	public static final String TSCPLANINSPECTOR_CUSTOMERTYPE_NEWUSER = "2";
	

	//安检模块类型
	public final static String DISTRICT_TYPE = "片区管理";
	public final static String PLAN_TYPE = "计划管理";
	public final static String SECURITY_TYPE = "安检管理";
	public final static String REPAIR_TYPE = "隐患整改";
	public final static String CHECK_TYPE = "稽查管理";
	public final static String SYSTEM_TYPE = "系统管理";
	public final static String RESOURCE_TYPE = "资源管理";
	
	public final static String CONFIG_PDA_MOULDPKID = "AJ130711105718169118";
	public final static String CONFIG_SCANNER_MOULDPKID = "AJ130711165347302105";
	
	//日志操作结果
	public final static String OPERATION_OK = "1";
	public final static String OPERATION_ERROR = "0";
	
	public final static String OPERATION_DELETE_OK = "1";
	
	public final static String OPERATION_DELETE_ERROR = "0";
	
	public final static String TABLE_DELETE_FLAG_OK = "1";
	
	public final static String TABLE_DELETE_FLAG = "0";
	
	public final static String SURE_OK = "1";  //确认查看
	
	public final static String SURE_NO = "0"; //未查看
	
	// 删除操作
	public final static String OPERATION_DEL = "1";
	
	//状态有效性
	public final static String STATE_OK = "1";
	public final static String STATE_INVALID= "0";
	
	//转单审核结果
	public final static String RESULT_OK = "1";//通过
	public final static String RESULT_NO = "0";// 不通过
	//变更状态
	public final static String CHANGE_OK = "1";//已变更
	public final static String CHANGE_ERROR = "0";// 未变更
	//用户信息变更的确认状态
	public final static String SUERSTATE_OK = "1";//已确认
	public final static String SUERSTATE_NON = "0";// 未确认
	//安检用户变更类型
	public final static String CHANGETYPE_ADD = "0";//新增
	public final static String CHANGETYPE_CHANGE = "1";//变更
	public final static String CHANGETYPE_NOUSER = "2";//查无此户
	public final static String CHANGETYPE_REPEAT = "3";//重复户
	//安检回访业务类型
	public final static String SC_BUSITYPE="SC001";
	//安检转单状态
	public final static String TRANSFER_STATE_THEN="1";//已转
	public final static String TRANSFER_STATE_UN="2";//未转
	public final static String TRANSFER_STATE_BACK="3";//打回
	public final static String TRANSFER_STATE_END="4";//完成
	public final static String TRANSFER_STATE_CANCEL="5";//注销
	public final static String TRANSFER_STATE_AUDITING="6";//待审核
	public final static String TRANSFER_STATE_AUDITFIAL="7";//审核未通过
	//	安检角色
	public final static String ROLE_MOULD_ADMIN="SC_TEMPLATE_ROLE";//安检模板管理员
	public final static String ROLE_CHANGE_ADMIN="SC_CHANGE_ROLE";//安检模板管理员
	//	安检录入用户
	public final static String SECURITY_TPYE_PLANNED="1";//安检计划用户
	public final static String SECURITY_TYPE_NEW="2";//安检新增户
	public final static String SECURITY_TYPE_BZ="3";//安检报装用户
	//安检单录入：固定项
	public final static String CODE_USERID="NO_24424025211781";//用户号
	public final static String CODE_USERNAME="NO_24424048938815";//用户名
	public final static String CODE_USERADDR="NO_24424066668533";//用户地址
	public final static String CODE_USERCONSUMPATTR="NO_24424073100729";//客户性质
	public final static String CODE_CONTACTMAN="";//联系人
	public final static String CODE_CONTACTPHONE="NO_24424087545056";//固话
	public final static String CODE_MOBILE="NO_24424094060309";//手机
	public final static String CODE_METER1MODELID="NO_24424106373636";//表1型号
	public final static String CODE_METER1RESID="NO_24424140727675";//表1编号
	public final static String CODE_METER1LASTREADING="NO_24424147772061";//表1上次读数
	public final static String CODE_METER1CURRENTREADING="NO_24424152524001";//表1本次读数
	public final static String CODE_METER2MODELID="NO_41622432810032";//表2型号
	public final static String CODE_METER2RESID="NO_41622437093030";//表2编号
	public final static String CODE_METER2LASTREADING="NO_41622441686322";//表2上次读数
	public final static String CODE_METER2CURRENTREADING="NO_41622447976669";//表2本次读数
	public final static String CODE_SITUATIONSHEETID="NO_41622452961913";//情况单编号 用户速记码+年月日
	
}
