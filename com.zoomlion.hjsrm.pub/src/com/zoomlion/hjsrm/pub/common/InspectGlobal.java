package com.zoomlion.hjsrm.pub.common;

import java.io.Serializable;

public class InspectGlobal extends Globals implements Serializable {
	private static final long serialVersionUID = 4544582373536964718L;

	/** **************稽查类型 欠费稽查：6010 查户稽查：6020 违章稽查:6030************** */

	/**
	 * 欠费稽查
	 */
	public static final String PLANTYPE_ARREARS = "6010";

	/**
	 * 查户稽查
	 */
	public static final String PLANTYPE_PATROL = "6020";

	/**
	 * 违章稽查
	 */
	public static final String PLANTYPE_ILLEGAL = "6030";

	/** *****************稽查计划表 状态 1 未派工 2 已完成 3 执行中 4 已取消****** */
	/**
	 * 未派工
	 */
	public static final String PLANSTATE_NOTWORK = "1"; // 

	/**
	 * 已完成
	 */
	public static final String PLANSTATE_FINISHED = "2"; // 

	/**
	 * 执行中
	 */
	public static final String PLANSTATE_INPROGRESS = "3"; // 

	/**
	 * 已取消
	 */
	public static final String PLANSTATE_CANCELED = "4"; // 

	/** *****************稽查计划明细 状态 1 有效 0 无效****** */
	/**
	 * 有效
	 */
	public static final String PLANTASKSTATE_VALID = "1"; // 

	/**
	 * 无效
	 */
	public static final String PLANTASKSTATE_INVALID = "0"; // 

	/**
	 * 已录入
	 */
	public static final String PLANTASKSTATE_SAVED = "2";// 

	/**
	 * 已转黑名单(欠费)
	 */
	public static final String PLANTASKSTATE_BLACKED = "3";// 

	/**
	 * 已传单
	 */
	public static final String PLANTASKSTATE_TURNED = "4";// 

	/**
	 * *****************违章用户 状态 0 : 未入计划(待计划制定) 1 : 已入计划(在途中） 2 : 已稽查完毕******
	 */
	/**
	 * 未入计划
	 */
	public static final String ILLEGALUSERSTATE_PREPARE = "0"; // 

	/**
	 * 已入计划
	 */
	public static final String ILLEGALUSERSTATE_WORKING = "1"; // 

	/**
	 * 已稽查完毕
	 */
	public static final String ILLEGALUSERSTATE_FINISHED = "2";// 

	/** ******************稽查结果******************************** */
	/**
	 * 用户缴费
	 */
	public static final String INSPECTRESAULT_PAYED = "0"; // 

	/**
	 * 承诺缴费
	 */
	public static final String INSPECTRESULT_WILLPAY = "1";// 

	/**
	 * 拒绝缴费
	 */
	public static final String INSPECTRESULT_NOPAY = "2";// 

	/**
	 * 无表
	 */
	public static final String INSPECTRESULT_NOMETER = "3";// 

	/**
	 * 协议缴费
	 */
	public static final String INSPECTRESULT_PACTPAY = "4";// 

	/**
	 * 后期无人
	 */
	public static final String INSPECTRESULT_NOMAN = "5";// 

	/**
	 * 表坏
	 */
	public static final String INSPECTRESULT_BADMETER = "6";// 

	/**
	 * 空房
	 */
	public static final String INSPECTRESULT_VACANTROOM = "7";// 

	/**
	 * 拆房
	 */
	public static final String INSPECTRESULT_TAKEROOM = "8";// 

	/**
	 * 部队
	 */
	public static final String INSPECTRESULT_ARMY = "9";// 

	/**
	 * 其他
	 */
	public static final String INSPECTRESULT_OTHER = "A";// 

	/** ************************见表情况**************************正常、违章表具、表坏、表锈、超期表、乱码、空房户、代签、未进户、无铅封、漏气、其他***** */
	/**
	 * 正常
	 */
	public static final String CHKRLTTYPE_NORMAL = "0";// 

	/**
	 * 违章表具
	 */
	public static final String CHKRLTTYPE_BREAK = "1";// 

	/**
	 * 表坏
	 */
	public static final String CHKRLTTYPE_DESTROY = "2";// 

	/**
	 * 表锈
	 */
	public static final String CHKRLTTYPE_RUST = "3";// 

	/**
	 * 超期表
	 */
	public static final String CHKRLTTYPE_PASSTIME = "4";// 

	/**
	 * 乱码
	 */
	public static final String CHKRLTTYPE_MESSYCODE = "5";// 

	/**
	 * 空房户
	 */
	public static final String CHKRLTTYPE_VACANTROOM = "6";// 

	/**
	 * 代签
	 */
	public static final String CHKRLTTYPE_ALLOGRAPH = "7";// 

	/**
	 * 未进户
	 */
	public static final String CHKRLTTYPE_UNHOUSEIN = "8";// 

	/**
	 * 无铅封
	 */
	public static final String CHKRLTTYPE_UNSEALING = "9";// 

	/**
	 * 漏气
	 */
	public static final String CHKRLTTYPE_LEAKAGE = "A";// 

	/**
	 * 其他
	 */
	public static final String CHKRLTTYPE_OTHER = "B";// 

	/** *****************违章稽查 稽查结果： 0未违章 1已整改 2未整改****** */
	/**
	 * 0未违章
	 */
	public static final String ILLEGALCHECKRESULT_NORECORD = "0";// 

	/**
	 * 1已整改
	 */
	public static final String ILLEGALCHECKRESULT_CORRECTED = "1";// 

	/**
	 * 2未整改
	 */
	public static final String ILLEGALCHECKRESULT_UNCORRECTED = "2";// 
	
	/** *****************安检稽查 稽查状态： 1已稽查****** */
	/**
	 * 1已稽查
	 */
	public static final String CHECKRECORD_STATE = "1";// 

	

}
