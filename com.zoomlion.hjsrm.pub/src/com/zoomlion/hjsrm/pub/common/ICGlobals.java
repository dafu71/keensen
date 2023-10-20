package com.zoomlion.hjsrm.pub.common;

import com.zoomlion.hjsrm.pub.common.Globals;

/*******************************************************************************
 * 
 * 版权所有： 港华科技（武汉）有限公司
 * 
 * 描 述： IC卡公共配置类
 * 
 * 创建日期： 2014-9-22
 * 
 * 补丁编号： G3_P_20140915_01_380
 * 
 * 作 者： 肖斌
 * 
 ******************************************************************************/

// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// G3_P_XXXXXXXX_XX_XX XX XXXXXXXX 集团
// =================================================================
@SuppressWarnings("serial")
public class ICGlobals extends Globals {

	/**
	 * 厂商编码
	 */

	public static final String IC_FACTORYID_LY = "1";// 蓝焰

	public static final String IC_FACTORYID_WX = "2";// 威星IC

	public static final String IC_FACTORYID_XF = "3";// 先锋

	public static final String IC_FACTORYID_QC = "4";// 成都秦川

	public static final String CARD_FACTORY_LBS = "5";// 蓝宝石

	public static final String IC_FACTORYID_JK = "6";// 浙江金卡
	
	public static final String IC_FACTORYID_XFJE = "7";// 先锋金额
	
	/**
	 * 民用工商标志
	 */
	public static final String IC_GSMYFLAG_MY = "0";// 民用

	public static final String IC_GSMYFLAG_GY = "1";// 工业

	public static final String IC_GSMYFLAG_SY = "2";// 商业

	/**
	 * 配置参数
	 */
	public static final String IC_ICCARDSTARTREST = "IC_ICCARDSTARTREST";// 限购开启标志

	public static final String IC_ICIFRECHARGE = "IC_ICIFRECHARGE";// 续充开启标志

	public static final String IC_ICIFPRESAVE = "IC_ICIFPRESAVE";// 结余开启标志

	public static final String IC_METER_LIMIT = "IC_METER_LIMIT";// 系列表具限购气量

	public static final String IC_IFMETERLIMIT = "IC_IFMETERLIMIT";// 特定表具限购标识

	public static final String SYSCONFIG_IC_PAY = "PAY";// IC卡充值配置分组ID

	public static final String SYSCONFIG_IC_LIMITPAY = "LIMITPAY";// IC卡限充配置分组ID

	public static final String SYSCONFIG_IC_LIMITBUY = "LIMITBUY";// IC卡限购配置分组ID

	public static final String SYSCONFIG_IC_INTERFACE = "INTERFACE";// 接口参数配置分组ID

	public static final String IC_DECIMALTYPE = "IC_DECIMALTYPE";// 应收金额取舍方式

	public static final String IC_DECIMALPLACE = "IC_DECIMALPLACE";// 应收金额取舍位数

	public static final String IC_OVERDRAW = "IC_OVERDRAW";// 结余透支金额

	public static final String IC_NORESADDGAS = "IC_NORESADDGAS"; // 未上表补气

	/**
	 * 厂商配置参数
	 */

	public static final String IC_F_CARDIDWAYS = "IC_CARDIDWAYS"; // 卡号生成方式

	public static final String IC_F_ICIFRECHARGE = "IC_ICIFRECHARGE";// 是否支持续充

	public static final String IC_F_IFDECIMAL = "IC_IFDECIMAL";// 是否支持充小数 气量

	public static final String IC_F_DECIMALDIGITS = "IC_DECIMALDIGITS";// 小数支持位数

	public static final String IC_MYODLEDAYS = "IC_MYODLEDAYS"; // 闲置天数(民用)

	public static final String IC_MYOVERDRAFTGAS = "IC_MYOVERDRAFTGAS"; // 透支气量(民用)

	public static final String IC_MYWARNPARAM = "IC_MYWARNPARAM"; // 预警参数(民用)

	public static final String IC_MYOFFVALUEPARAM = "IC_MYOFFVALUEPARAM"; // 关阀参数(民用)

	public static final String IC_GYODLEDAYS = "IC_GYODLEDAYS"; // 闲置天数(工业)

	public static final String IC_GyOVERDRAFTGAS = "IC_GYOVERDRAFTGAS"; // 透支气量(工业)

	public static final String IC_GYWARNPARAM = "IC_GYWARNPARAM"; // 预警参数(工业)

	public static final String IC_GyOFFVALUEPARAM = "IC_GYOFFVALUEPARAM"; // 关阀参数(工业)

	public static final String IC_SYODLEDAYS = "IC_SYODLEDAYS";// 闲置天数(商业)

	public static final String IC_SYOVERDRAFTGAS = "IC_SYOVERDRAFTGAS";// 透支气量(商业)

	public static final String IC_SYWARNPARAM = "IC_SYWARNPARAM"; // 预警参数(商业)

	public static final String IC_SYOFFVALUEPARAM = "IC_SYOFFVALUEPARAM"; // 关阀参数(商业)

	// 气量

	public static final String IC_F_NORESADDGAS = "IC_NORESADDGAS"; // 未上表补气

	/**
	 * 充值相关
	 */

	public static final String IC_TUNLOCKED = "0";// 卡技术锁定状态

	public static final String IC_TLOCKED = "1";// 卡技术锁定状态

	public static final String IC_BUNLOCKED = "0";// 卡业务未锁定状态

	public static final String IC_BLOCKED = "1";// 卡业务锁定状态

	public static final String IC_BUSITY_XHSK = "AC700";// 业务类型为新户售卡

	public static final String IC_BUSITY_ZCCZ = "AC701";// 业务类型为正常充值

	public static final String IC_BUSITY_SUB = "AC702";// IC卡超用

	public static final String IC_BUSITY_ADD = "AC703";// IC卡补气

	public static final String IC_BUSITY_YHCZ = "AC704";// 业务类型为银行充值

	public static final String IC_BUSITY_ZZCZ = "AC705";// 业务类型为自助充值

	public static final String IC_BUSITY_BKCZ = "AC706";// IC卡补卡充值

	public static final String IC_BUSITY_CXYCZ = "AC709";// IC卡撤销预充值

	public static final String IC_BUSITY_YCZ = "AC710";// IC卡预冲账

	public static final String IC_BUSITY_TZHG = "AC719";// 业务类型为IC卡冲正

	public static final String IC_BUSITY_TF = "AC723";// IC卡退费

	public static final String IC_BUSITY_JF = "AC724";// IC卡缴费

	public static final String IC_BUSITY_AJ = "AC725";// IC卡气量调整

	public static final String IC_BUSITY_AJ_ADD = "AC726";// IC卡气量调整(补气)

	public static final String IC_BUSITY_ZS = "AC731";// 业务类型为暂售

	public static final String IC_BUSITY_XC = "AC732";// IC卡续充

	public static final String IC_BUSITY_WSBBQ = "AC733";// IC卡未上表补气

	public static final String IC_BUSITY_SYYHQ = "AC734";// 使用优惠券

	public static final String IC_BUSITY_SYTW = "AC735";// 使用调尾

	public static final String IC_BUSITY_ZFFS = "AC736";// 支付方式
	
	public static final String IC_BUSITY_ZF = "AC737";// IC卡作废
	
	public static final String IC_BUSITY_TJJL = "AC738";// 调价记录
	
	public static final String IC_BUSITY_YC = "AC007";// 使用预存
	
	public static final String IC_BUSITY_QLZS = "AC123"; // 气量折算（IC卡置换退差）
	
	public static final String IC_BUSITY_QLZS2 = "AC456"; // 气量折算（IC卡置换补差）

	public static final String IC_PayFlag_TF = "1";// 收支标志为退费

	public static final String IC_PayFlag_JF = "3";// 收支标志为缴费

	public static final String IC_PayFlag_ZPCZ = "2";// 收支标志为整票冲正

	public static final String IC_ICPAYSTATE_YZT = "A";// IC卡业务状态为"预状态"

	public static final String IC_ICPAYSTATE_BCX = "C";// IC卡业务状态为"被撤销"

	public static final String IC_ICPAYSTATE_XKSBCX = "E";// IC卡业务状态为"写卡失败撤销"

	public static final String IC_ICPAYSTATE_YCZ = "B";// IC卡业务状态为"预冲帐

	public static final String IC_WRITEFLAG_MM = "1";// 1为密码传递卡

	public static final String IC_WRITEFLAG_PT = "0";// 0为充值卡

	public static final String IC_MAKETYPE_XHSK = "1";// 办卡类型1 新户售卡

	public static final String IC_MAKETYPE_BKSK = "2";// 办卡类型2 补卡售卡

	public static final String IC_MAKETYPE_BK = "2";// 办卡类型2 补卡

	public static final String IC_STATE_EFFECT = "1";// 卡状态生效

	public static final String IC_STATE_INVALID = "0";// 卡状态失效

	public static final String IC_ICPAYSTATE_ZC = "0";// 卡业务状态正常

	public static final String IC_RBREASONTYPE_JFCW = "1";// 冲正原因用户缴费错误

	public static final String IC_RBREASONTYPE_CZCW = "2";// 冲正原因操作错误

	public static final String IC_CHNLTYPE_YYT = "1";// 营业厅

	public static final String IC_CHNLTYPE_YH = "3";// 银行

	public static final String IC_CHNLTYPE_ZZCZ = "5";// 自助充值

	public static final String IC_CHNLTYPE_RX = "9";// 热线

	public static final String IC_CHNLTYPE_GLDW = "0";// 管理单位

	public static final String IC_PAYMODE_YHK = "0";// 银行卡

	public static final String IC_PAYMODE_XJ = "1";// 现金

	public static final String IC_PAYMODE_ZP = "2";// 支票

	public static final String IC_PAYMODE_WSYH = "3";// 网上银行

	public static final String IC_PAYMODE_DZFS = "4";// 多种支付方式

	/*
	 * 调价追收
	 */
	// 账单状态
	public static final String IC_ADPRBILL_NUPASS = "1"; // 未通过

	public static final String IC_ADPRBILL_PASS = "2"; // 已确认

	public static final String IC_ADPRBILL_DEL = "3"; // 删除

	public static final String IC_ADPRBILL_OK = "4"; // 完成

	// 账单记录状态
	public static final String IC_ADPR_SUCCESS = "0"; // 成功

	public static final String IC_ADPR_FAILURE = "1"; // 失败

	// 账单类型
	public static final String IC_BILLTYPE_SUB = "1"; // 追收 1

	public static final String IC_BILLTYPE_ADD = "2";// 追退 2

	/*
	 * 维修补气 气量调整
	 */
	public static final String IC_AS_ADD = "1"; // 补气

	public static final String IC_AS_SUB = "2"; // 超用

	public static final String IC_AS_NOT = "0";// 0：未补；

	public static final String IC_AS_HAS = "1";// 1：已补；

	public static final String IC_AS_PART = "2";// 2：部分补；

	/*
	 * 预维修补气
	 */

	public static final String IC_CAS_NUPASS = "0"; // 未通过

	public static final String IC_CAS_PASS = "1"; // 已确认

	public static final String IC_CAS_CANCEL = "2"; // 取消

	/*
	 * 卡表帐务
	 */
	public static final String IC_TOTAL_FALURE = "0"; // 失效

	public static final String IC_TOTAL_EFFECT = "1"; // 生效
}