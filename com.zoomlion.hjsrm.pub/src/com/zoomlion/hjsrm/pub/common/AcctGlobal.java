package com.zoomlion.hjsrm.pub.common;

import java.io.Serializable;

/**
 * 
 * <pre>
 *    Title: 帐务管理-用以存放帐务模块数据字典值等公共变量
 *    Description:  用以存放帐务模块数据字典值等公共变量。
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
public class AcctGlobal extends Globals implements Serializable {
	private static final long serialVersionUID = 4544582373536964718L;
	
    public static final String APP_NAME_ZW = "ZW";// 账务信息

	// *********************************************************
	// 缴费记录表(T_ZW_PAYREC) STATE 状态
	// *********************************************************
	/**
	 * 缴费记录状态:已作废
	 */
	public static final String TZWPAYREC_STATE_NINVALID = "1";

	/**
	 * 缴费记录状态:已记录
	 */
	public static final String TZWPAYREC_STATE_ONREC = "2";

	/**
	 * 缴费记录状态:已入账
	 */
	public static final String TZWPAYREC_STATE_ONACC = "3";

	/**
	 * 缴费记录状态:已冲正
	 */
	public static final String TZWPAYREC_STATE_ONREVR = "4";

	/**
	 * 缴费记录状态:预冲正
	 */
	public static final String TZWPAYREC_STATE_YCZ = "5";

	// *********************************************************
	// 缴费记录表(T_ZW_PAYREC) CHNLTYPE 缴费渠道
	// *********************************************************
	/**
	 * 缴费渠道:台收
	 */
	public static final String TZWPAYREC_CHNL_STATPAY = "0";

	/**
	 * 缴费渠道:走收
	 */
	public static final String TZWPAYREC_CHNL_WALKPAY = "1";

	/**
	 * 缴费渠道:代扣
	 */
	public static final String TZWPAYREC_CHNL_WITHHOLD = "3";

	/**
	 * 缴费渠道:托收
	 */
	public static final String TZWPAYREC_CHNL_COLLECTIONPAY = "2";

	/**
	 * 缴费渠道:银行实时
	 */
	public static final String TZWPAYREC_CHNL_SELFBANKPAY = "4";

	/**
	 * 缴费渠道:保证金转预存
	 */
	public static final String TZWPAYREC_CHNL_DEPOSIT = "5";

	/**
	 * 缴费渠道:利息转预存
	 */
	public static final String TZWPAYREC_CHNL_INTEREST = "6";

	// *********************************************************
	// 缴费记录表(T_ZW_PAYREC) FEEMEDIUM 支付方式
	// *********************************************************
	/**
	 * 支付方式:代收
	 */
	public static final String TZWPAYREC_FEEMEDIUM_DAISHOU = "0";

	/**
	 * 支付方式:现金
	 */
	public static final String TZWPAYREC_FEEMEDIUM_CASH = "1";

	/**
	 * 支付方式:支票
	 */
	public static final String TZWPAYREC_FEEMEDIUM_ZHIPIAO = "2";

	/**
	 * 支付方式:代扣
	 */
	public static final String TZWPAYREC_FEEMEDIUM_DAIKOU = "3";

	/**
	 * 支付方式:POS机刷卡
	 */
	public static final String TZWPAYREC_FEEMEDIUM_POS = "4";

	/**
	 * 支付方式:转账
	 */
	public static final String TZWPAYREC_FEEMEDIUM_ZHUANZHANG = "5";

	/**
	 * 支付方式:1.0转入
	 */
	public static final String TZWPAYREC_FEEMEDIUM_10ZHUANRU = "6";

	/**
	 * 支付方式:2.0转入
	 */
	public static final String TZWPAYREC_FEEMEDIUM_20ZHUANRU = "7";

	/**
	 * 支付方式:赠券
	 */
	public static final String TZWPAYREC_FEEMEDIUM_COUPON = "9";

	/**
	 * 支付方式:利息
	 */
	public static final String TZWPAYREC_FEEMEDIUM_LIXI = "10";

	/**
	 * 支付方式:IC卡调尾
	 */
	public static final String TZWPAYREC_FEEMEDIUM_ICTIAOWEI = "11";

	/**
	 * 支付方式:预收转预存
	 */
	public static final String TZWPAYREC_FEEMEDIUM_DEPOSITE = "12";

	// *********************************************************
	// 在途记录表(T_ZW_ONWAYDETAIL) STATE 状态
	// *********************************************************
	/**
	 * 在途状态:初始
	 */
	public static final String TZWONWAYDETAIL_STATE_INITIAL = "1";

	/**
	 * 在途状态:已打印
	 */
	public static final String TZWONWAYDETAIL_STATE_PRINTED = "2";

	/**
	 * 在途状态:成功
	 */
	public static final String TZWONWAYDETAIL_STATE_SUCCESS = "3";

	/**
	 * 在途状态:失败
	 */
	public static final String TZWONWAYDETAIL_STATE_FAIL = "4";

	/**
	 * 在途状态:作废
	 */
	public static final String TZWONWAYDETAIL_STATE_INVALID = "5";

	// *********************************************************
	// 在途记录表(T_ZW_ONWAYDETAIL) PAYTYPE 在途缴费方式
	// *********************************************************
	/**
	 * 在途缴费方式:托收
	 */
	public static final String TZWONWAYDETAIL_PAYTYPE_COLLECTION = "1";

	/**
	 * 在途缴费方式:走收
	 */
	public static final String TZWONWAYDETAIL_PAYTYPE_WALK = "2";

	/**
	 * 在途缴费方式:代扣
	 */
	public static final String TZWONWAYDETAIL_PAYTYPE_WITHHOLD = "3";

	// *********************************************************
	// 代扣文件表(T_ZW_APFILE) STATE 状态
	// *********************************************************
	/**
	 * 代扣文件状态:已生成
	 */
	public static final String TZWAPFILE_STATE_CREATE = "0";

	/**
	 * 代扣文件状态:已传盘
	 */
	public static final String TZWAPFILE_STATE_TURNPLATE = "1";

	/**
	 * 代扣文件状态:已导入(已回盘)
	 */
	public static final String TZWAPFILE_STATE_INPUT = "2";

	/**
	 * 代扣文件状态:已作废
	 */
	public static final String TZWAPFILE_STATE_INVALID = "3";

	// *********************************************************
	// 票据打印记录表(T_ZW_INVCPRINT) INVCTYPE 票据类型
	// *********************************************************
	/**
	 * 票据类型:收据
	 */
	public static final String TZWINVCPRINT_INVCTYPE_RECEIPT = "1";

	/**
	 * 票据类型:发票
	 */
	public static final String TZWINVCPRINT_INVCTYPE_INVOICE = "2";

	// *********************************************************
	// 票据打印记录表(T_ZW_INVCPRINT) ISCHANGE 置换状态
	// *********************************************************
	/**
	 * 置换状态:置换
	 */
	public static final String TZWINVCPRINT_ISCHANGE_YES = "1";

	/**
	 * 置换状态:非置换
	 */
	public static final String TZWINVCPRINT_ISCHANGE_NO = "0";

	// *********************************************************
	// 票据打印记录表(T_ZW_INVCPRINT) PRINTSTATE 打印状态
	// *********************************************************
	/**
	 * 打印状态:已作废
	 */
	public static final String TZWINVCPRINT_PRINTSTATE_INVALID = "0";

	/**
	 * 打印状态:已打印
	 */
	public static final String TZWINVCPRINT_PRINTSTATE_PRINT = "1";

	/**
	 * 打印状态:补打
	 */
	public static final String TZWINVCPRINT_PRINTSTATE_COMPLEMENT = "2";

	/**
	 * 打印状态:重打
	 */
	public static final String TZWINVCPRINT_PRINTSTATE_PRINTAGAIN = "3";
	
	/**
	 * 打印状态:预打印
	 */
	public static final String TZWINVCPRINT_PRINTSTATE_ONPRINT = "A";

	// *********************************************************
	// 票据打印记录表(T_ZW_INVCPRINT) PRINTINFO 打印文本
	// *********************************************************
	/**
	 * 票据打印文本printinfo字段分隔符
	 */
	public static final String TZWINVCPRINT_PRINTINFO_SPLITSIGN = "|";

	/**
	 * 解析打印文本printinfo使用字段分隔符
	 */
	public static final String TZWINVCPRINT_PRINTINFO_TRANSSPLITSIGN = "\\|";

	// **********发票打印系统参数*************
	public static final int NUM_OF_ACCT_INVOICE = 3; // 每张发票打印多少帐单

	public static final long MAXIMUM_INVOICE_CHRGSUM = 20L; // 每张发票最大金额

	// 帐本类型
	public static final String TZWSAVINGTYPE_STATE_VALID = "1"; // 有效

	public static final String TZWSAVINGTYPE_STATE_INVALID = "0"; // 有效

	// 统计类别(作废)
	public static final String TZWSTATSTATECTL_STATTYPE_MYYS = "A"; // 民用应收

	public static final String TZWSTATSTATECTL_STATTYPE_GSYS = "B"; // 工商应收

	public static final String TZWSTATSTATECTL_STATTYPE_MYSS = "C"; // 民用实收

	public static final String TZWSTATSTATECTL_STATTYPE_GSSS = "D"; // 工商实收

	public static final String TZWSTATSTATECTL_STATTYPE_MYQL = "E"; // 民用气量

	public static final String TZWSTATSTATECTL_STATTYPE_GSQL = "F"; // 工商气量

	public static final String TZWSTATSTATECTL_STATTYPE_YC = "L"; // 预存

	// 统计类别
	/**
	 * 民用应收统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_MYYS = "A";

	/**
	 * 工商应收统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_GSYS = "B";

	/**
	 * 民用气量统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_MYQL = "C";

	/**
	 * 工商气量统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_GSQL = "D";

	/**
	 * 民用销帐统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_MYXZ = "E";

	/**
	 * 工商销帐统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_GSXZ = "F";

	/**
	 * 实收统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_SS = "G";

	/**
	 * 预存情况统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_YCQK = "H";

	/**
	 * 民用燃气具应收统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_MYRQJYS = "I";

	/**
	 * 工商燃气具应收统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_GSRQJYS = "J";

	/**
	 * 民用抄表率统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_MYCB = "K";

	/**
	 * 工商抄表率统计
	 */
	public static final String VZWSTATSTATECTL_STATTYPE_GSCB = "L";

	// 扎帐用户类型
	/**
	 * 民用户统计
	 */
	public static final String VZWSTATSTATECTL_USERTYPE_MY = "1";

	/**
	 * 工商户统计
	 */
	public static final String VZWSTATSTATECTL_USERTYPE_GS = "2";

	/**
	 * 不区分民用工商
	 */
	public static final String VZWSTATSTATECTL_USERTYPE_TOTAL = "0";

	// 用户类型
	public static final String COMMON_USERTYPE_MY = "0"; // 民用

	public static final String COMMON_USERTYPE_GS = "1"; // 工商

	// 帐期类型
	public static final String COMMON_YRMONTHTYPE_YS = "1"; // 应收

	/**
	 * 实收
	 * */
	public static final String COMMON_YRMONTHTYPE_SS = "2"; // 实收

	public static final String COMMON_YRMONTHTYPE_QL = "3"; // 气量

	public static final String COMMON_YRMONTHTYPE_YC = "4"; // 预存

	// 扎帐状态
	public static final String TZWSTATSTATECTL_STATSTATE_UNS = "0"; // 未统计

	public static final String TZWSTATSTATECTL_STATSTATE_SING = "1"; // 正在统计

	public static final String TZWSTATSTATECTL_STATSTATE_ALS = "2"; // 已统计

	public static final String TZWSTATSTATECTL_STATSTATE_ASBA = "3"; // 已扎帐

	// **********代扣协议信息表(T_ZW_USERBANKPACT)*************
	public static final String TZWUSERBANKPACT_STATE_VALID = "0"; // 有效

	public static final String TZWUSERBANKPACT_STATE_INVALID = "1"; // 无效

	public static final String TZWUSERBANKPACT_STATE_PRECANCEL = "2"; // 预撤销

	public static final String TZWUSERBANKPACT_STATE_TEMP = "3"; // 临时

	// **********业务类别(BUSITYPE)*************
	public static final String ACCT_BUSITYPE_STATPAY = "AC001"; // 坐收录入

	public static final String ACCT_BUSITYPE_WALKCHARGE = "AC003";// 走收录入

	public static final String ACCT_BUSITYPE_CHARGEBACK = "AC007";// 气费退费

	public static final String ACCT_BUTITYPE_BADDEBT = "AC401";// 呆坏账确认

	public static final String ACCT_BUTITYPE_BADDEBTCANCEL = "AC403";// 呆坏账撤销(复活)

	public static final String ACCT_BUSITYPE_BADDEBTEDIT = "AC402";// 修改呆坏账

	public static final String ACCT_BUSITYPE_REVERSAL = "AC006"; // 缴费冲正

	public static final String ACCT_BUSIYPE_COLLECTION = "AC100"; // 托收录入

	public static final String ACCT_BUSITYPE_WITHHOLD = "AC890"; // 代扣缴费

	public static final String ACCT_BUSITYPE_BANKREVERSAL = "AC889"; // 银行冲正

	public static final String ACCT_BUSITYPE_PRINTINVOICE = "AC201"; // 帐单发票打印
	
	public static final String ACCT_BUSITYPE_AGENCY = "AC888"; // 代收缴费
	//*****************短信服务业务自编码********************************
	public static final String ACCT_BUSITYPE_MGS01 = "MGS01"; // 短信服务
	public static final String ACCT_BUSITYPE_MGS02 = "MGS02"; // 气量气费短信通知
	public static final String ACCT_BUSITYPE_MGS03 = "MGS03"; // 预存短信通知
	
	public static final String ACCT_BUSITYPE_AC600 = "AC600"; // 欠费催缴通知
	public static final String ACCT_BUSITYPE_AC601 = "AC601"; // 其他短信通知
	public static final String ACCT_BUSITYPE_AC602 = "AC602"; // 气量气费短信通知
	public static final String ACCT_BUSITYPE_AC603 = "AC603"; // 预存短信通知
	

	// **********优惠券(T_ZY_COUPONINFO)*************
	public static final String TZYCOUPONINFO_ISBELONG_USER = "1"; // 绑定用户类

	public static final String TZYCOUPONINFO_STATE_UNUSERD = "0"; // 未使用

	public static final String TZYCOUPONINFO_STATE_ALLUSERD = "1"; // 已全部使用

	public static final String TZYCOUPONINFO_STATE_PARTUSERD = "2"; // 已部分使用

	public static final String TZYCOUPONINFO_STATE_INVALID = "3"; // 已作废

	public static final String TZYCOUPONINFO_COUPONTYPE_FEE = "1"; // 气费券

	public static final String TZYCOUPONINFO_COUPONTYPE_AMOUNT = "2"; // 气量券

	// ****************发票领用表(T_ZY_INVCRECEIVE)***************
	public static final String TZYINVCRECEIVE_STATE_RECEIVE = "1"; // 领用

	public static final String TZYINVCRECEIVE_STATE_PERSONRECE = "2"; // 个人领用

	public static final String TZYINVCRECEIVE_STATE_NORMALPRINT = "3"; // 正常打印

	public static final String TZYINVCRECEIVE_STATE_INVALID = "4"; // 作废

	public static final String TZYINVCRECEIVE_STATE_LOST = "5"; // 遗失

	public static final String TZYINVCRECEIVE_STATE_WRITEOFF = "6"; // 核销

	public static final String TZYINVCRECEIVE_USETYPE_PERSONAL = "1"; // 个人使用

	public static final String TZYINVCRECEIVE_USETYPE_DEPT = "2"; // 部门使用

	// *********************呆坏账状态***************************
	public static final String THSBADACCTSHT_STATE_BADDEBT = "1";// 呆坏账

	public static final String THSBADACCTSHT_STATE_EDIT = "2";// 已修改

	public static final String THSBADACCTSHT_STATE_PAYED = "3";// 已缴费

	public static final String THSBADACCTSHT_STATE_REVIVE = "4";// 已复活

	// ***********************呆坏账 统计标识***********************************
	public static final String THSBADACCTSHT_STATFLAG_STATED = "1";// 已统计

	public static final String THSBADACCTSHT_STATFLAG_UNSTAT = "0";// 未统计

	// ****************三大基础帐目类型 ***************
	public static final String ACCTTYPE_GAS = "G"; // 气费

	public static final String ACCTTYPE_GAS_GASFEE = "G0001"; // 气费费用

	public static final String ACCTTYPE_GAS_LATEFEE = "G0000"; // 气费违约金

	public static final String ACCTTYPE_BUSI = "B"; // 营业费

	public static final String ACCTTYPE_APPLIANCE = "R"; // 燃气具费

	public static final String ACCTTYPE_INFLATFEE = "B0013"; // 虚增应收

	// ****************销帐相关 ***************
	public static final String TXZWRITEOFFINF_PROCTYPE_FADAN = "F"; // 帐单发行

	public static final String TXZWRITEOFFINF_PROCTYPE_ZHANGWU = "P";// 帐务处理

	// ****************未缴费帐单busitype*************
	public static final String THSUNPAIDACCTSHT_BUSITYPE_JIHUACHAOBIAO = "HS001"; // 计划抄表

	public static final String THSUNPAIDACCTSHT_BUSITYPE_FEIJIHUACHAOBIAO = "HS002"; // 非计划抄表

	public static final String THSUNPAIDACCTSHT_BUSITYPE_ZHIMATIAOZHENG = "HS003"; // 止码调整

	public static final String THSUNPAIDACCTSHT_BUSITYPE_QILIANGTIAOZHENG = "HS004";// 气量调整

	public static final String THSUNPAIDACCTSHT_BUSITYPE_QIFEIZHUITUI = "HS005"; // 气费追退

	public static final String THSUNPAIDACCTSHT_BUSITYPE_TIAOJIAZHUISHOU = "HS006"; // 调价追收

	public static final String THSUNPAIDACCTSHT_BUSITYPE_INFLATREC = "AC894"; // 误缴费处理(虚增应收)

	// ****************未缴费帐单state*************
	public static final String THSUNPAIDACCTSHT_STATE_VALID = "1"; // 有效

	public static final String THSUNPAIDACCTSHT_STATE_BADDEBT = "C"; // 呆坏账

	// ****************销帐日志表状态issuccess************
	public static final String TZWWRITEOFFLOG_ISSUCCESS_SUCCESS = "0"; // 实时销帐成功

	public static final String TZWWRITEOFFLOG_ISSUCCESS_FAILURE = "1"; // 实时销帐失败

	// ****************发票打印模板************
	public static final String PRINT_TEMPLATE_GAS_INVOICE = "zw_gasinvoice";

	public static final String PRINT_TEMPLATE_GAS_RECEIPT = "zw_gasreceipt";

	public static final String PRINT_TEMPLATE_BUSI_INVOICE = "zw_busiinvoice";

	public static final String PRINT_TEMPLATE_BUSI_RECEIPT = "zw_busireceipt";

	// ******************取整方式***************
	public static final String amountByUser = "0"; // 按用户取整

	public static final String amountByAcct = "1"; // 按总金额取整(帐户取整)

	// ****************缴费折打印状态************************
	public static final String INVCFLODPRINT_PRINTSTATE_ING = "0"; // 预打印

	public static final String INVCFLODPRINT_PRINTSTATE_PRINT = "1"; // 已打印

	// ****************代扣文件规则，字段对齐标识************************
	public static final String ACCTWITHHOLD_PARAM_LEFT = "1"; // 左对齐

	public static final String ACCTWITHHOLD_PARAM_RIGHT = "2"; // 左对齐

	// 缴费折打印状态
	public static final String TZWINVCFLODPRINT_PRINTSTATE_INVALID = "0"; // 已作废

	public static final String TZWINVCFLODPRINT_PRINTSTATE_PRINT = "1"; // 已打印

	public static final String TZWINVCFLODPRINT_PRINTSTATE_COMPLEMENT = "2"; // 补打

	public static final String TZWINVCFLODPRINT_PRINTSTATE_PRINTAGAIN = "3"; // 重打
	
	
	public static final String ZY_SYSCONFIG_MsgURL = "ACCT_MSURL";
	/**
	 * 当前所使用的打印模板
	 * */
	public static final String TZWACCTDISPLAYRULE_TEMPLATEID_CURRENTTEMPLATE = "zw_foshanfp";
	
	/**
	 * 当前代扣最大条数
	 * */
	public static final String TZWWITHHOLD_MAXCOUNT = "50000";
}