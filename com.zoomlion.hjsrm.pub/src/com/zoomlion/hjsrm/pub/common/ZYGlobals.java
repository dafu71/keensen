package com.zoomlion.hjsrm.pub.common;
/**
 * <pre>
 * Title: 资源静态常量类
 * Description: 资源管理公共配置
 * </pre>
 * @author   石绍锋
 * @version   1.0    
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 * G3_P_20140915_01_226 蔡慧文 20140917 集团
 */
import com.zoomlion.hjsrm.pub.common.Globals;

@SuppressWarnings("serial")
public class ZYGlobals extends Globals{

	/* 地址级别 */
	public static final String ADDRESS_LEVEL_ROOT = "0";//地址根节点
	
	public static final String ADDRESS_LEVEL_1= "1";//城市
	public static final String ADDRESS_LEVEL_2= "2";//区县
	public static final String ADDRESS_LEVEL_3= "3";//大道
	public static final String ADDRESS_LEVEL_4= "4";//街道
	public static final String ADDRESS_LEVEL_5= "5";//小区
	public static final String ADDRESS_LEVEL_6= "6";//楼栋
	
	
	public static final String COUPON_ISLOCK_FALSE = "0";//优惠券是否锁定 未锁定
	
	public static final String COUPON_STATE_UNUSE = "0";//优惠券的状态 未使用
	public static final String COUPON_STATE_WASTE = "3";//优惠券的状态 已作废
	
	public static final String COUPON_TYPE_FEE = "1";//优惠券的类型 气费券
	public static final String COUPON_TYPE_FEENAME = "气费券";//优惠券的类型 气费券
	
	public static final String COUPON_ISBELONG_N = "2";//优惠券的归属类型 公共券
	
	public static final String METER_STATE_ONUSE = "1";//表具出入库业务记录表 在用
	
	public static final String METERINFO_STATE_UNUSE = "0"; // 表具信息中的表状态 待装:0 
	public static final String METERINFO_STATE_ONUSE = "1";// 表具信息中的表状态 运行:1 
	public static final String METERINFO_STATE_LOST = "2";// 表具信息中的表状态 丢失:2 
	public static final String METERINFO_STATE_ONCHECK = "3";// 表具信息中的表状态 校表:3 
	public static final String METERINFO_STATE_ONRETURN_FACTORY = "4";// 表具信息中的表状态 返厂:4 
	public static final String METERINFO_STATE_SCRAP = "5";  //  表具信息中的表状态 报废:5 
	public static final String METERINFO_STATE_REPAIR = "6";  //  表具信息中的表状态 维修:6 
	
	public static final String METERINFO_METERTYPE_ICCARD_PREPAYAMOUNT = "11";  // 表具类型：IC卡预付气量
	public static final String METERINFO_METERTYPE_ICCARD_PREPAYFEE = "12";  // 表具类型：IC卡预付金额
	public static final String METERINFO_METERTYPE_MECHANICAL_AFTERPAYFEE = "21";  // 表具类型：机械后付费
	public static final String METERINFO_METERTYPE_REMOTE_AFTERPAYFEE = "22";  // 表具类型：远传后付费
	public static final String METERINFO_METERTYPE_INTELLIGENCE_PREPAYFEE = "23";  // 表具类型：智能预付金额
	
	public static final String METERTPARAM_RESTYPE_PMIC = "M0002";//表具资产类别 皮膜式IC卡表
	public static final String METERTPARAM_RESTYPE_PMJX = "M0001";//表具资产类别 皮膜式机械表
	public static final String METERTPARAM_RESTYPE_LC = "M0003";//表具资产类别 罗茨
	public static final String METERTPARAM_RESTYPE_WL = "M0004";//表具资产类别 涡轮
	public static final String METERTPARAM_RESTYPE_CSB = "M0005";//表具资产类别 超声波
	public static final String METERTPARAM_RESTYPE_YXZN = "M0021";//表具资产类别 有线智能表
	public static final String METERTPARAM_RESTYPE_WXZN = "M0022";//表具资产类别 无线智能表
	
	public static final String METERTPARAM_GSMYFLAG_PUB = "X";//表具民用工商标识 不区分
	
	public static final String METER_FIXSTOCK = "4";//表具配置库存类型 维修库
	public static final String METER_WASTESTOCK = "5";//表具配置库存类型 报废库
	
	public static final String METER_BACKMETTER = "4";//表具库存类型 拆回表
	public static final String METER_WASTEMETER = "3";//表具库存类型 报废表
	public static final String METER_CANUSEMETER = "1";//表具库存类型 可用表
	public static final String METER_BACKFIXMETER = "2";//表具库存类型 返修表
	
	
	public static final String BUSITYPE_INVOICE_first = "RS201";//发票一级库入库
	public static final String BUSITYPE_INVOICE_second = "RS202";//发票二级库入库
	public static final String BUSITYPE_INVOICE_third = "RS203";//发票三级库入库
	
	public static final String BUSITYPE_INVOICE_second_to_first = "RS204";//发票一级库回收二级库
	public static final String BUSITYPE_INVOICE_third_to_second = "RS205";//发票二级库回收三级库
	
	public static final String BUSITYPE_INVOICE_cancel = "RS206";//发票核销
	public static final String BUSITYPE_INVOICE_second_to_adjust = "RS207";//发票二级调配
	public static final String BUSITYPE_INVOICE_third_to_adjust = "RS208";//发票三级调配
	
	public static final String INVOICE_RECTYPE_box  = "1";//按箱
	public static final String INVOICE_RECTYPE_part = "2";//按段
	
	public static final String INVCSTOCK_USETYPE_personal  = "1";//个人使用
	public static final String INVCSTOCK_USETYPE_department = "2";//部门使用
	public static final String INVCSTOCK_USETYPE_positionip = "3";//坐席使用
	
	public static final String INVOICE_State_in_stock = "1";//在库
	public static final String INVOICE_State_usered = "2";//领用
	public static final String INVOICE_State_cancel = "3";//核销
	public static final String INVOICE_State_delete = "4";//作废
	
	public static final String INVCRECEIVE_State_usered = "1";//领用
	public static final String INVCRECEIVE_State_user_by_person = "2";//个人领用
	public static final String INVCRECEIVE_State_print = "3";//正常打印
	public static final String INVCRECEIVE_State_delete = "4";//作废
	public static final String INVCRECEIVE_State_lose = "5";//遗失
	public static final String INVCRECEIVE_State_cancel = "6";//核销
	public static final String INVCRECEIVE_State_user_and_cancel = "7";//使用并核销
	public static final String INVCRECEIVE_State_red = "8";//冲红
	
	
	public static final String  INVOICE_STOCKTYPE_first= "1";//发票一级库
	public static final String  INVOICE_STOCKTYPE_second= "2";//发票二级库
	public static final String  INVOICE_STOCKTYPE_third= "3";//发票三级库
	
	public static final String BUSITYPE_METERSTOCK_FIRST = "RS100";//表具一级库入库
	public static final String BUSITYPE_METERSTOCK_BACKFIX = "RS105";//返修表入库
	public static final String BUSITYPE_METERSTOCK_BACKFACTORY = "RS104";//返厂
	public static final String BUSITYPE_METERSTOCK_FIXMETER = "RS108";//维修表入库
	public static final String BUSITYPE_METERSTOCK_SCRAP = "RS109";//表具报废
	public static final String BUSITYPE_METERSTOCK_TOFIX = "RS112";//拆表入维修库
	public static final String BUSITYPE_METERSTOCK_TOSCRAP = "RS113";//拆表入报废库
	public static final String BUSITYPE_METERSTOCK_TOCONSTRUCT = "RS119";//拆表入施工队
	public static final String BUSITYPE_METERSTOCK_INSTALLMETER = "RS164";//装表
	
	public static final String BACKFIXSTOCK_ORGID = "-10000";//返修库虚拟机构ID
	
	public static final String ZY_SYSCONFIG_USEYEAR = "ZY_METERUSEYEAR";//表具使用年限，系统参数编码
	
	public static final String ZY_SYSCONFIG_ADDRLEVEL = "ZY_ADDRLEVEL";//地址的显示级别配置，系统参数编码
	
	public static final String ZY_SYSCONFIG_INVCUSELEVEL = "ZY_INVCUSELEVEL";//发票的领用级别配置，系统参数编码
	public static final String ZY_SYSCONFIG_ISPOSITIONCONFIG = "ZY_ISPOSITIONCONFIG";//是否坐席配置，系统参数编码
	
	public static final String ZY_SYSCONFIG_ISMGRMETERSTOCK = "ZY_ISMGRMETERSTOCK";//是否管理表具库存配置，系统参数编码
	
	public static final String RISER_STATE_USERGAS = "2";//立管状态  通气在用
	
	public static final String SUPPLYPOINT_STATE_ONCREATE = "0";//供气点状态  建立
	public static final String SUPPLYPOINT_STATE_ONGAS = "1";//供气点状态  通气
	public static final String SUPPLYPOINT_STATE_ONMETER = "2";//供气点状态  挂表
	public static final String SUPPLYPOINT_STATE_REMOVE = "3";//供气点状态  拆除
	public static final String SUPPLYPOINT_STATE_DOWNMETER = "4";//供气点状态  下表
	
	public static final String SUPPLYPOINT_TYPE_MY = "1";//供气点类型  民用
	public static final String SUPPLYPOINT_TYPE_GS = "2";//供气点类型  商用
	
	public static final String TZYPOSITIONCONFIG_STATE_VALIED = "1"; //有效
	public static final String TZYPOSITIONCONFIG_STATE_INVALIED = "0"; //无效
	
	public static final String SUPPLYPOINT_SUPPLYPOINTSOURCE_SPORADIC = "0";//供气点来源 零星建档
	public static final String SUPPLYPOINT_SUPPLYPOINTSOURCE_COLLECTIVE = "1";//供气点来源 民建户报装
	public static final String SUPPLYPOINT_SUPPLYPOINTSOURCE_CIVIL = "2";//供气点来源 民现户报装
	public static final String SUPPLYPOINT_SUPPLYPOINTSOURCE_INDUSTRIAL = "3";//供气点来源 工商户报装
	

	/**************发票类型 by 李云涛******************/
	/**
	 * 气费发票
	 * */
	public static final String INVCSTOCK_INVCTYPE_QF = "0";
	/**
	 * IC卡发票
	 * */
	public static final String INVCSTOCK_INVCTYPE_IC = "1";
	/**
	 * 燃气具发票
	 * */
	public static final String INVCSTOCK_INVCTYPE_RQJ = "2";
	
	/**
	 * 导出所能导出的最大数据量
	 * */
	public static final int EXPORT_INVCDETAIL_MAXCOUNT = 10000;

}