package com.zoomlion.hjsrm.pub.common;

/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： TCIS系统中公共的配置类，存放公共的静态参数，该类可以被各业务模块常量类继承
*创建日期： 2014-09-26
*补丁编号： G3_P_20140915_01_245_02
*作    者： chy
*******************************************************************/
//==============================修改历史===========================
//		补丁编号                修改人     日期       		归属       备注
//G3_P_20140915_01_245_02    chy      2014-09-26     集团    【1846】IC业务记录查询的导出excel功能，会导致系统宕机                                                                  
//=================================================================
@SuppressWarnings("serial")
public class Globals {

	/* 各业务模块名，获取业务流水号时用 */
	public static final String APP_NAME_RESOURCE = "ZY";// 资源

	public static final String APP_NAME_IC = "IC";// IC卡

	public static final String APP_NAME_ACCT = "ZW";// 帐务
	
	public static final String APP_NAME_CUST = "KH";// 客户

	public static final String APP_NAME_RECORD = "CB";// 抄表

	public static final String APP_NAME_BILL = "HS";// 核算

	public static final String APP_NAME_SECR = "SC";// 民用户安检
	
	public static final String APP_NAME_GSAJ = "AJ";// 工商户安检
	
	public static final String APP_NAME_BCSECR = "BC";// 工商户安检

	public static final String APP_NAME_INSPECT = "JC";// 稽查

	public static final String APP_NAME_DEMAND = "SQ";// 诉求

	public static final String APP_NAME_BUSI = "BS";// 业务处理
	
	public static final String APP_NAME_INSTALL = "BZ";// 报装

	/* 有效无效标识 */
	public static final String FLAG_ACTIVE = "1";// 有效

	public static final String FLAG_INACTIVE = "0";// 无效

	/**
	 * 1:有效
	 */
	public static final String FLAG_VALID = "1";// 有效

	/**
	 * 0:无效
	 */
	public static final String FLAG_INVALID = "0";// 无效

	/* 删除标识 */
	/**
	 * 0:未删除 (删除标识)
	 */
	public static final String DELFLAG_NODELETE = "0"; // 未删除
	/**
	 * 1: 已删除 (删除标识)
	 */
	public static final String DELFLAG_DELETE = "1"; // 已删除

	/* 新数据 历史数据 标识 */
	public static final String FLAG_OLD = "0"; // 历史数据标识

	public static final String FLAG_NEW = "1"; // 新数据标识

	/* 抄表业务类型 编码 */
	public static final String BUSITYPE_GASFEE_ADJUST = "HS005";// 气费调整

	public static final String BUSITYPE_GASAMOUNT_ADJUST = "HS004";// 气量追退

	public static final String BUSITYPE_ENDCODE_ADJUST = "HS003";// 止码调整

	public static final String BUSITYPE_NONPLAN_RECORD = "HS002";// 非计划抄表
	
	public static final String BUSITYPE_SELFREPORT_RECORD = "HS020";// 自报读数
	
	public static final String BUSITYPE_BOOKING_RECORD= "HS019";// 预约抄表
	
	public static final String BUSITYPE_ALL_RECORD = "HS000";// 抄表管理
	
	public static final String BUSITYPE_GS_RECORD = "HS100";// 抄表管理-工商 chy add

	public static final String BUSITYPE_PLAN_RECORD = "HS001";// 计划抄表

	public static final String BUSITYPE_LATEFEE_JOB = "HS009";// 违约金job计算

	public static final String BUSITYPE_BILL_ISSUE = "HS010";// 发单

	public static final String BUSITYPE_INTEREST_TRANSFER = "HS011";// 预存优惠结转

	public static final String BUSITYPE_LATEFEE_MANUAL = "HS012";// 违约金人工录入

	public static final String BUSITYPE_UPLOADRECORD = "HS015";// 上装

	public static final String BUSITYPE_SAVERECORD = "HS016";// 录入

	public static final String BUSITYPE_DOWNLOADRECORD = "HS017";// 下装

	// ******************************是否*************************
	/**
	 * 是
	 */
	public static final String FLAG_IS = "1";

	/**
	 * 否
	 */
	public static final String FLAG_NOT = "0";
	
	
	public static final String ORDER_TCIS = "0";//工单类型，0为TCIS业务工单
	
	public static final String ORDER_DEMAND = "1";//工单类型，1为热线工单
	
	public static final long EXCEL_MAXROWS = 65535;//excel导出的最大行数
	
	/** 导出EXCEL的默认最大条数 */
	public static final int EXPORT_MAXCOUNT_DEFAULT = 10000;
}