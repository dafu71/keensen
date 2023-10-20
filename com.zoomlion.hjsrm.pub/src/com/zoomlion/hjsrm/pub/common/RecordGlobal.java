package com.zoomlion.hjsrm.pub.common;

import java.io.Serializable;

import com.zoomlion.hjsrm.pub.common.Globals;

public class RecordGlobal extends Globals implements Serializable{

	private static final long serialVersionUID = -7947581584583101656L;
	
	/**
	 * 删除标识  0. 无效 1. 有效
	 */
	public static final String DELFLAG_TRUE = "1";
	public static final String DELFLAG_FALSE = "0";
	
	/** add by hey
	 * 	抄表区属性:	1.民用区 2.工商区
	 */
	public static final String BOOKATTR_RESIDENT = "1";
	public static final String BOOKATTR_BUSINESS = "2";
	
	/** add by hey
	 *  抄表册属性： 1.民用册 2.工商册
	 */
	public static final String SECTIONATTR_RESIDENT = "1";
	public static final String SECTIONATTR_BUSINESS = "2";
	
	/**
	 * 核算业务记录，对象类型[1 册号 ， 2 户号]
	 */
	public static final String OBJECTTYPE_SECTION = "1";
	public static final String OBJECTTYPE_USER = "2";

	/**
	 * 核算业务记录，结果类型[1 成功 ， 0 失败]
	 */
	public static final String RSLTTYPE_SUCESS = "1";
	public static final String RSLTTYPE_FAIL = "0";
	
	/**
	 * 气费、气量 追退
	 */
	public static final String ADDSUBDETAIL_ADD = "1";//追收
	public static final String ADDSUBDETAIL_ADD_STR = "追收";//追收
	public static final String ADDSUBDETAIL_MINUS = "2";//退还
	public static final String ADDSUBDETAIL_MINUS_STR = "退还";//退还
		
	/**
	 * 抄表数据类型
	 */
	public static final String DATATYPE_PLAN = "1";  //计划抄表
	public static final String DATATYPE_NONPLAN = "2";  //非计划抄表
	public static final String DATATYPE_ADD = "3";  //气量调整
	public static final String DATATYPE_ADJUST = "4";  //止码调整
	public static final String DATATYPE_REMOVEMETER = "5";  //拆表
	
	/**
	 * 抄表数据标识
	 */
	public static final String DATAFLAG_UNRECORD = "0";  //未抄
	public static final String DATAFLAG_NORMAL = "1";  //正常
	public static final String DATAFLAG_TURNING = "2";	//转圈
	public static final String DATAFLAG_BIG = "I";	//大气量
	public static final String DATAFLAG_SMALL = "M";	//小气量
	public static final String DATAFLAG_DOWN = "C";	//倒转
	public static final String DATAFLAG_NEGATIVE = "T";	//负气量
	public static final String DATAFLAG_NORES = "E";  //元表
	
	/**
	 * 抄表数据来源
	 */
	public static final String DATASOURCE_RECORD = "1";  //抄见    在用 fr:自报
	public static final String DATASOURCE_SELFRECORD = "2";  //自报      fr:例抄
	public static final String DATASOURCE_MANESTIMATE = "3";  //人工估抄     fr:核表
	public static final String DATASOURCE_SYSESTIMATE = "4";  //系统估抄    在用 fr:估数
	public static final String DATASOURCE_TELERECORD = "5";  // fr:电话取数
	public static final String DATASOURCE_SMARTRECORD = "6";  // fr:智能抄表
	public static final String DATASOURCE_SMSRECORD = "7";  // fr:短信
	public static final String DATASOURCE_GASAMT = "B";  // 气量追退
	public static final String DATASOURCE_ENDCODE = "C";  // 止码调整
	/**
	 * 抄表数据异常处理标识 
	 */	
	
	public static final String DEALFLAG_UNPROCESSED = "1";  //未处理
	public static final String DEALFLAG_PROCESSED = "2";  //已处理
	
	
	/**
	 * 抄表数据状态
	 */
	public static final String RECORDSTATE_CANCEL = "0";  //已作废
	public static final String RECORDSTATE_NOBILL = "1";  //未算费
	public static final String RECORDSTATE_BILL = "2";  //已算费
	public static final String RECORDSTATE_ISSUE = "3";  //已发单
	
	/**
	 * calFeeFlag 算费方式，0 撤消算费  1 算费 2 发单  3 算费发单。
	 */
	public static final String CALFEE_CANCELFEE="0";
	public static final String CALFEE_CALFEE="1";
	public static final String CALFEE_ISSUE="2";
	public static final String CALFEE_FEELIST="3";
	
	/**
	 * 气费、气量、止码调整的调整原因，在止码调整时，默认 为 1 【调整】
	 */
	public static final String REASON_ADJUST = "1";//调整
	public static final String REASON_ADJUST_STR = "调整";
	public static final String REASON_ADJUST_RESBAD = "2";//表具故障
	public static final String REASON_ADJUST_RESBAD_STR = "表具故障";
	public static final String REASON_ADJUST_CHECK = "3";//稽查
	public static final String REASON_ADJUST_CHECK_STR = "稽查";
	/**
	 * 抄表数据采集方式
	 */
	public static final String COLLLECTTYPE_MANUAL = "1";	//手工录入
	public static final String COLLLECTTYPE_RECORDER = "2";	//抄表机抄表
	public static final String COLLLECTTYPE_REMOTE = "3";	//远程抄表
	
	/**
	 * @author jiangji
	 * @抄表机领用关系
	 */	
	public static final String  RECORDERRECIVE_STATE_UNUSED  = "1";//非领用状态
	public static final String  RECORDERRECIVE_STATE_USED  = "2";	//领用状态
	
	
	/**
	 * @author jiangji
	 * @抄表机状态
	 */		
	public static final String  RECORDINFO_MACHINESTATE_IN="1";  //在库
	public static final String  RECORDINFO_MACHINESTATE_USED="2"; //使用
	public static final String  RECORDINFO_MACHINESTATE_LOST="3";  //遗失
	public static final String  RECORDINFO_MACHINESTATE_NOTVALID="4";  //废弃
	
	/**
	 * @author jiangji
	 * @抄表机端口
	 */		
	public static final String  RECORDERINFO_PORT_1="COM1";  
	public static final String  RECORDERINFO_PORT_2="COM2";  
	public static final String  RECORDERINFO_PORT_3="COM3";  
	
	/**
	 * @author jiangji
	 * @抄表机速率
	 */		
	public static final String  RECORDERINFO_SPEED_1="1000";  
	public static final String  RECORDERINFO_SPEED_2="1500";  
	public static final String  RECORDERINFO_SPEED_3="500";  	
	
	/**
	 * @author heyuan
	 * @临时册系统配置
	 */
	public static final String TEMPSECTION_PARAMNAME = "CB_TEMPSECTION_NUM";
	
	/**
	 * @author heyuan
	 * @抄表册状态
	 */
	public static final String SECTIONSTATE_NORMAL = "1";
	public static final String SECTIONSTATE_CANCEL = "0";
	public static final String SECTIONSTATE_TEMP = "T";
	
	
	/**
	 * @author jiangji
	 * @下装保险费 
	 */	
	public static final String DOWNLOAD_INSURANCE="B0011";
	
	/**
	 * @author jiangji
	 * @计划状态
	 */	
	public static final String PLANINFO_DELSTATE="0";  //删除状态
	public static final String PLANINFO_MAKESTATE="1"; //制定状态
	public static final String PLANINFO_RUNSTATE="2";  //执行状态
	public static final String PLANINFO_OVERSTATE="3"; //完成状态
	public static final String PLANINFO_CANCELSTATE="4"; //取消状态
	
	/**
	 * @author 江骥
	 * @计划类型；按册制定的正常计划、按户制定的临时计划
	 */
	public static final String PLANINFO_PLANTYPE_OFFICIAL="1";  //正常状态
	public static final String PLANINFO_PLANTYPE_TEMP="2";  //临时计划
	
	/**
	 * @author 江骥
	 * @计划类型；计划类型
	 */
	public static final String PLANINFO_PLANATTR_MY="1";  //民用
	public static final String PLANINFO_PLANATTR_GS="2";  //工商	
	
	/**
	 * @author heyuan
	 * @抄表数据处理类型
	 */
	public static final String PLANDRUN_DATAFLAG_NOTRECORD = "0";	//未抄
	
	//用户号前缀
	public static final String USERID_PREFIX = "01";   //用户号前补01
	
}
