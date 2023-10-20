package com.zoomlion.hjsrm.pub.common;

import java.io.Serializable;

import com.zoomlion.hjsrm.pub.common.Globals;

public class BillGlobal extends Globals implements Serializable{

	private static final long serialVersionUID = 2219673588253191056L;
	//	 以“表实体名+字段名+分类”的方式表现变量名，例如：
	
	// **********气价类型表(T_HS_PRICETYPE)*************
	//	是否有效
	public static final String THSPRICETYPE_STATE_VALID = "1";// 有效
	public static final String THSPRICETYPE_STATE_INVALID = "0";	// 失效

	// **********调价信息记录表(T_HS_CHRGPRICEREC)*************
	//	业务类型
	public static final String THSCHRGPRICEREC_BUSITYPE_ADJUSTALLPRICE = "A0001";// 整体调价
	
	//	结果类型
	public static final String THSCHRGPRICEREC_RESULTTYPE_SUCCEED = "0000";	//	成功
	
	//	 **********违约金减免记录表(T_HS_LATEFEEDISCINFO)*************
	//	是否减免
	public static final String THSLATEFEEDISCINFO_ISDISC_VALID = "1";// 减免成功
	public static final String THSLATEFEEDISCINFO_ISDISC_INVALID = "0";// 已申请未减免成功
	
	
	//****************调价追收帐单确认**********************
	//业务类型--调价追收
	public static final String THSUNPAIDACCTSHT_BUSITYPE = "HS006";  
	//费用类型
	public static final String THSUNPAIDACCTSHT_FEETYPE = "G";
	//帐单状态
	public static final String THSUNPAIDACCTSHT_STATE = "1";
	
	//业务类型--气费调整
	public static final String THSUNPAIDACCTSHT_BUSITYPE_FEECHRG = "HS005";  
	
	//费用类型明细---气费
	public static final String THSUNPAIDACCTSHT_FEETYPEDETAIL_GASFEE = "G0001"; //气费全部为G0001
	//用类型明细——违约金
	public static final String THSUNPAIDACCTSHT_FEETYPEDETAIL_LATEFEE = "G0000";
	
	//	业务类别--负气量协商处理
	public static final String THSUNPAIDACCTSHT_Dispose_CivilCalFee = "HS999";
	

	//违约金明细记录表--来源类别
	//系统计算
	public static final String THSLATEFEEACCTSHT_DATASOURCE_SYSTEM = "1";
	//人工录入
	public static final String THSLATEFEEACCTSHT_DATASOURCE_MANUAL = "2";
	
	
	// **********利息信息记录表(T_HS_INTERESTINFO)*************
	//利息状态
	public static final String THSINTERESTINFO_STATE_CARRY = "1";	//已结转
	
	//	 **********业务记录表(t_at_operlog)*************
	//气价相关操作类型
	public static final String HS_PRICE_BUSITYPE_ADD = "HS101";	//新增气价
	public static final String HS_PRICE_BUSITYPE_MODIFY = "HS102";	//修改气价
	public static final String HS_PRICE_BUSITYPE_DELETE = "HS103";	//删除气价
	public static final String HS_PRICE_BUSITYPE_ADJUSTMENT = "HS104";	//整体调价
	//气价方式
	public static final String THSPRICE_PRICEMODE_BASE = "1";  //标准气价
	public static final String THSPRICE_PRICEMODE_SCALE = "2"; //比例气价
	public static final String THSPRICE_PRICEMODE_STEP = "3";  //阶梯气价
	public static final String THSPRICE_PRICEMODE_LEVEL = "4";  //分档气价
	
	//阶梯周期
	public static final String THSPRICE_STEPCYCLE_TIME = "1";  //按次阶梯
	public static final String THSPRICE_STEPCYCLE_MONTH = "2";  //按月阶梯
	public static final String THSPRICE_STEPCYCLE_YEAR = "3";  //按年阶梯
	public static final String THSPRICE_STEPCYCLE_YEARMONTH = "4";  //年月混合阶梯
}
