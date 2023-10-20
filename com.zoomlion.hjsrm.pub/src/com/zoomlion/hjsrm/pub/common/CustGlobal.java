/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述：  客户维护 和 统一客户视图查询,新增客户，修改客户，查询客户，零星遗留户建档，三户资料查询等
*创建日期： 2014-10-13
*补丁编号： G3_P_20140915_01_130
*作    者： 毛晓东
*******************************************************************/
//==============================修改历史===========================
//补丁编号                修改人     日期       区域       备注
//G3_P_20140915_01_130 毛晓东 20141014 集团 
//=================================================================

package com.zoomlion.hjsrm.pub.common;

import java.io.Serializable;

import com.zoomlion.hjsrm.pub.common.Globals;

/**
 * 每个模块建立一个本模块的 公共类，用以存放 数据字典值等公共变量
 * 
 */
public class CustGlobal extends Globals implements Serializable {
	private static final long serialVersionUID = 4544582373536964718L;

	// 以“表实体名+字段名+分类”的方式表现变量名，例如：

	/**
	 * // **********缴费记录表(T_ZW_PAYREC)************* public static final String
	 * TZWPAYREC_STATE_ONWAY_ = "1";// 在途 public static final String
	 * TZWPAYREC_STATE_ONREC = "2";// 已记录 public static final String
	 * TZWPAYREC_STATE_ONACC = "3"; // 已入账 public static final String
	 * TZWPAYREC_STATE_ONREVR = "4"; // 已冲正 public static final String
	 * OTZWPAYREC_STATE_NINVALID = "0"; // 已作废
	 * 
	 * //********************************联系人类别**************************
	 */
	/**
	 * 用户联系人:1
	 */
	public static final String TKHCONTACTINFO_USER_OWNTYPE = "1";

	/**
	 * 客户联系人:2
	 */
	public static String TKHCONTACTINFO_CUST_OWNTYPE =  "2";

	/**
	 * 业务联系人:3
	 */
	public static String TKHCONTACTINFO_BUSI_OWNTYPE = "3";

	// *******************************************************************
	/**
	 * 已删除:1
	 */
	public static final String DELETED = "1";

	/**
	 * 未删除:0
	 */
	public static final String UNDELETE = "0";

	// ********************************************************************
	/**
	 * 已归档:1
	 */
	public static final String ARCHIVED = "1";

	/**
	 * 未归档:0
	 */
	public static final String NOT_ARCHIVE = "0";

	// ***********************************************************************
	/**
	 * 最新数据:1
	 */
	public static final String NEWFLAG = "1";

	/**
	 * 历史数据:0
	 */
	public static final String OLDFLAG = "0";

	// ********************************合同类别***************************************
	/**
	 * 居民供气合同:0
	 */
	public static String SUPPPLY_CONTRACT = "0";

	/**
	 * 民用安装合同:1
	 */
	public static String SETUP_CONTRACT = "1";

	/**
	 * 小型商业安装合同:2
	 */
	public static String SMALL_BUSINESS_CONTRACT = "2";

	/**
	 * 大型工商客户安装合同:3
	 */
	public static String LARGE_BUSINESS_CONTRACT = "3";

	/**
	 * 施工委托合同:4
	 */
	public static String CONSTRUCT_CONTRACT = "4";

	/**
	 * 发包合同:5
	 */
	public static String LET_CONTRACT = "5";

	/**
	 * 年度用气协议:6
	 */
	public static String YEAR_SUPPLY_CONTRACT = "6";

	/**
	 * 委托维护协议:7
	 */
	public static String TRUST_CONTRACT = "7";

	/**
	 * 校表通气协议:8
	 */
	public static String CHECK_CONTRACT = "8";

	/**
	 * 零售供货合同:A
	 */
	public static String RESALE_CONTRACT = "A";

	/**
	 * 项目供货合同:B
	 */
	public static String PROJECT_SUPPLY_CONTRACT = "B";

	/**
	 * 项目销售合同:C
	 */
	public static String PROJECT_SALE_CONTRACT = "C";
	
	/**
	 * 居民用气协议:D
	 */
	public static String RESDENT_CONTRACT = "D";
	
	/**
	 * 工程配套合同:E
	 */
	public static String PROJECT_CONTRACT = "E";
	
	/**
	 * 工商户用气协议:F
	 */
	public static String YEAR_CONTRACT = "F";
	
	/**
	 * 民建施工合同:G
	 */
	public static String COLLECTIVECONSTRUCT_CONTRACT = "G";
	
	/**
	 * 供气点表具状态:1(正常)
	 */
	public static String USERMETER_STATE_NORMAL = "1";

	// ****************************客户业务类别****************************
	/**
	 * 生成月征费
	 */
	public static String BUSIREC_BUSITYPE_MONFEE_GENER = "BS401";

	// **************************用户状态***************************
	/**
	 * 临时状态
	 */
	public static final String TKHUSERINFO_USERSTATE_TEMP = "A";

	/**
	 * 运行状态
	 */
	public static final String TKHUSERINFO_USERSTATE_RUNNING = "B";

	/**
	 * 销户状态
	 */
	public static final String TKHUSERINFO_USERSTATE_CANCELED = "C";

	/**
	 * 报停状态
	 */
	public static final String TKHUSERINFO_USERSTATE_STOPED = "D";

	/**
	 * 预销户状态
	 */
	public static final String TKHUSERINFO_USERSTATE_PRECANCEL = "E";
	
	/**
	 *  休户状态
	 */
	public static final String TKHUSERINFO_USERSTATE_RELEASED = "F";

	/**
	 * 1 基本帐户
	 */
	public static final String TKHACCTINFO_BASICFLAG_BASIC = "1";

	/**
	 * 0 付费帐户
	 */
	public static final String TKHACCTINFO_BASICFLAG_PAY = "0";

	/**
	 * 1:民用户
	 */
	public static final String TKHUSERINFO_USERTYPE_RESIDENT = "1";

	/**
	 * 2:商业户
	 */
	public static final String TKHUSERINFO_USERTYPE_BUSINESS = "2";

	/**
	 * 3:工业户
	 */
	public static final String TKHUSERINFO_USERTYPE_FACTORY = "3";
	/**
	 * 4:公福户
	 */
	public static final String TKHUSERINFO_USERTYPE_PUBLICSEVICE  = "4";

	// *************************************业务类型
	// ****************************************************
	/**
	 * 取消用户月征费配置:BS403
	 */
	public static final String TKHUSERINFO_BUSITYPE_CANCELMONTHFEE = "BS403";

	/**
	 * 帐务关系新增:BS411
	 */
	public static final String TKHUSERINFO_BUSITYPE_ADDACCTREL = "BS411";

	/**
	 * 帐务关系删除:BS412
	 */
	public static final String TKHUSERINFO_BUSITYPE_DELACCTREL = "BS412";

	/**
	 * 置换保存:BS421
	 */
	public static final String TKHUSERINFO_BUSITYPE_CHANGECOMSUMPTYPE = "BS421";

	/**
	 * 履约保证金新增:BS431
	 */
	public static final String TKHUSERINFO_BUSITYPE_ADDDEPOSIT = "BS431";

	/**
	 * 履约保证金退回:BS432
	 */
	public static final String TKHUSERINFO_BUSITYPE_BACKDEPOSIT = "BS432";

	/**
	 * 履约保证金转预存:BS433
	 */
	public static final String TKHUSERINFO_BUSITYPE_DEPOSITTOPRESAVING = "BS433";

	/**
	 * 年度用气协议维护:BS451
	 */
	public static final String TKHUSERINFO_BUSITYPE_SAVEYEARCONTRACT = "BS451";

	/**
	 * 供气合同维护:BS452
	 */
	public static final String TKHUSERINFO_BUSITYPE_SAVESUPPLYCONTRACT = "BS452";

	/**
	 * 设置用户月征费配置:BS402
	 */
	public static final String TKHUSERINFO_BUSITYPE_SETMONTHFEE = "BS402";

	/**
	 * 联系人增加:BS129
	 */
	public static final String TKHUSERINFO_BUSITYPE_ADDCONTACT = "BS129";

	/**
	 * 联系人删除:BS130
	 */
	public static final String TKHUSERINFO_BUSITYPE_DELCONTACT = "BS130";

	/**
	 * 客户信息代维协议保存:BS131
	 */
	public static final String TKHUSERINFO_BUSITYPE_SAEECUSTCONTRACT = "BS131";

	/**
	 * 客户信息用气计划制定:BS132
	 */
	public static final String TKHUSERINFO_BUSITYPE_SETUSEPLAN = "BS132";

	/**
	 * 帐务关系变更:BS145
	 */
	public static final String TKHUSERINFO_BUSITYPE_CHANGEACCTUSER = "BS145";

	/**
	 * 客户信息修改:BS156
	 */
	public static final String TKHUSERINFO_BUSITYPE_MODIFYCUST = "BS156";

	/**
	 * 客户信息删除:BS406
	 */
	public static final String TKHUSERINFO_BUSITYPE_DELCUST = "BS406";

	/**
	 * 用户信息修改:BS157
	 */
	public static final String TKHUSERINFO_BUSITYPE_MODIFYUSER = "BS157";

	/**
	 * 用户信息删除:BS407
	 */
	public static final String TKHUSERINFO_BUSITYPE_DELUSER = "BS407";

	/**
	 * 帐户信息修改:BS158
	 */
	public static final String TKHUSERINFO_BUSITYPE_MODIFYACCT = "BS158";

	/**
	 * 帐户信息删除:BS408
	 */
	public static final String TKHUSERINFO_BUSITYPE_DELACCT = "BS408";

	/**
	 * 用户燃气具信息修改:BS160
	 */
	public static final String TKHUSERINFO_BUSITYPE_MODIFYUSERGASREC = "BS160";

	/**
	 * 用户燃气具信息新增:BS161
	 */
	public static final String TKHUSERINFO_BUSITYPE_ADDUSERGASREC = "BS161";

	/**
	 * 用户燃气具信息删除:BS162
	 */
	public static final String TKHUSERINFO_BUSITYPE_DELUSERGASREC = "BS162";

	/**
	 * 联系人修改:BS167
	 */
	public static final String TKHUSERINFO_BUSITYPE_MODIFYCONTACT = "BS167";

	/**
	 * 零星建档:BS168
	 */
	public static final String TKHUSERINFO_BUSITYPE_SETSINGEUSER = "BS168";

	/**
	 * 收取押金:BS172
	 */
	public static final String TKHUSERINFO_BUSITYPE_CHARGEDCASH = "BS172";

	/**
	 * 退押金:BS173
	 */
	public static final String TKHUSERINFO_BUSITYPE_BACKCASH = "BS173";

	/**
	 * 客户用气证打印:BS180
	 */
	public static final String TKHUSERINFO_BUSITYPE_PRINTUSECARD = "BS180";

	/**
	 * 用户计费策略修改:BS181
	 */
	public static final String TKHUSERINFO_BUSITYPE_MODIFYBILLPLAN = "BS181";

	/**
	 * 单户调价:BS190
	 */
	public static final String TKHUSERINFO_BUSITYPE_CHANGEUSERPRICE = "BS190";

	/**
	 * 批量调价:BS193
	 */
	public static final String TKHUSERINFO_BUSITYPE_BATCHCHANGEPRICE = "BS193";

	/**
	 * 整体调价:BS196
	 */
	public static final String TKHUSERINFO_BUSITYPE_ALLCHANGEPRICE = "BS196";

	/**
	 * 营业费制定:BS502
	 */
	public static final String TKHUSERINFO_BUSITYPE_SETBUSIFEE = "BS502";

	/**
	 * 营业费退费:BS505
	 */
	public static final String TKHUSERINFO_BUSITYPE_BACKBUSIFEE = "BS505";

	/**
	 * 营业费删除:BS506
	 */
	public static final String TKHUSERINFO_BUSITYPE_DELBUSIFEE = "BS506";

	/**
	 * 批量营业费制定:BS212
	 */
	public static final String TKHUSERINFO_BUSITYPE_BATCHSETBUSIFEE = "BS212";
	/**
	 * 营业费修改:BS507
	 */
	public static final String TKHUSERINFO_BUSITYPE_MODIFYFEE = "BS507";
	
	/**
	 * 营业费优惠:BS508
	 */
	public static final String TKHUSERINFO_BUSITYPE_CHANGEFEE = "BS508";
	
	/**
	 * 用户气源类型变更:BS301
	 */
	public static final String TKHUSERINFO_BUSITYPE_CHANGECONSUMPTYPE = "BS301";

	/**
	 * 用户类型变更:BS302
	 */
	public static final String TKHUSERINFO_BUSITYPE_CHANGEUSERTYPE = "BS302";

	/**
	 * 用户用气性质变更:BS303
	 */
	public static final String TKHUSERINFO_BUSITYPE_CHANGECONSUMPATTR = "BS303";

	/**
	 *生成月征费:BS401
	 */
	public static final String TKHUSERINFO_BUSITYPE_GETMONTHFEE = "BS401";
	/**
	 * 零星上表：BS501
	 */
	public static final String TKHUSERINFO_BUSITYPE_INSTALLMETER = "BS501";
	
	
	
	/**
	 * 客户证件信息记录:BS199
	 */
	public static final String TKHUSERINFO_BUSITYPE_CERTINFORECORD = "BS199";
	

	/**
	 * 用户分类 :  0.虚拟用户
	 */
	public static final String TKHUSERINFO_USERSVCTYPE_VIRTUALUSER = "0";
	/**
	 * 用户分类 :  1.燃气用户
	 */
	public static final String TKHUSERINFO_USERSVCTYPE_GASUSER = "1";
	/**
	 * 用户分类 :  2.燃气具用户
	 */
	public static final String TKHUSERINFO_USERSVCTYPE_GASRESUSER = "2";
	/**
	 * 用户分类： 3.燃气与燃气具用户
	 */
	public static final String TKHUSERINFO_USERSVCTYPE_GASRESGASUSER = "3";
	/**
	 * 帐户 支付类型
	 */
	public static class ACCT_PAYTYPE {
		/**
		 * 1:台收
		 */
		public static final String CRASH = "1";
		/**
		 * 2:走收
		 */
		public static final String CHARGE = "2";
		/**
		 * 3:银行托收
		 */
		public static final String DELEGATE = "3";
		/**
		 * 4:银行代扣
		 */
		public static final String CUT = "4";
	}
	public static final String TKHUSERINFO_BILLTYPE_ONE = "1";//短信账单
	public static final String TKHUSERINFO_BILLTYPE_TWO = "2";//139邮箱账单
	public static final String TKHUSERINFO_BILLTYPE_THREE = "3";//邮寄账单 
	
	public static final String TKHCUSTINFO_CERTTYPE_ONE = "1";//证件类型：身份证
	
	public static final String TKHUSERAPPLIANCE_APPSOURCE_SELL = "3"; //燃气具销售
	public static final String TKHUSERAPPLIANCE_APPSOURCE_HIS = "4";  //历史遗留
	
	/**
	 * 预收款状态
	 */
	public static class DEPOSIT_PLAN_STATE {
		/**
		 * '0', '未收款'
		 */
		public static final String UNPAID = "0";
		/**
		 * '1', '已收款'
		 */
		public static final String PAIDED = "1";
	}
	/**
	 * 预收款状态
	 */
	public static class DEPOSIT_STATE {
		/**
		 * '0', '失效'
		 */
		public static final String INVALID = "0";
		/**
		 * '1', '有效'
		 */
		public static final String VALID = "1";
		/**
		 * '2', '已退款'
		 */
		public static final String BACKED = "1";
	}
	
	
	/**
	 * 用气性质
	 */
	public static final String TKHUSERINFO_CONSUMPATTR_DIBAO = "1004";//低保
	
	public static final String TKHUSERINFO_CONSUMPATTR_YOUFU = "1005";//优抚
	
	public static final String TKHUSERINFO_CONSUMPATTR_PUTONG = "1006";//普通居民
	
	
	/**
	 * 客户证件
	 */
	public static final String TKHCERTINFO_CERTTYPE_DIBAO = "5";//低保证
	
	public static final String TKHCERTINFO_CERTTYPE_YOUFU = "6";//优抚证
}