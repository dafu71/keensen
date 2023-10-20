/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述： 
*创建日期： 
*补丁编号： G3_P_20140915_01_334
*作    者： 甘丽
*******************************************************************/
//==============================修改历史===========================
//补丁编号                修改人     日期       归属       备注
//G3_P_20140915_01_334 甘丽     2014-09-23 集团     增加数据                                                     
//=================================================================
package com.zoomlion.hjsrm.pub.common;

/**
 * <pre>
 *		Title: 报装管理-用以存放报装管理数据字典值等公共变量
 * 		Description:  用以存放报装管理数据字典值等公共变量。
 * </pre>
 * 
 * @author 蔡慧文
 * @version 1.0
 * 
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录                
 */
public class InstallGlobal {
	
	/** 报装业务类型 */
	public static final String BUSITYPE_SINGLE_PROJECT = "BS201"; //民现零星报装-工程流程
	
	public static final String BUSITYPE_GROUP_PROJECT = "BS202"; //民现团体报装-工程流程
	
	public static final String BUSITYPE_INDUSTRIAL_PROJECT = "BS203"; //工商户报装-工程流程
	
	public static final String BUSITYPE_INDUSTRIAL_METER = "BS119"; //工商户报装-挂表流程
	
	public static final String BUSITYPE_INDUSTRIAL_FIRE = "BS118"; //工商户报装-点火流程
	
	public static final String BUSITYPE_COLLECTIVE_PROJECT = "BS204"; //民建户报装-工程流程
	
	public static final String BUSITYPE_COLLECTIVE_METER = "BS114"; //民建户报装-挂表流程
	
	public static final String BUSITYPE_COLLECTIVE_FIRE = "BS113"; //民建户报装-点火流程
	
	public static final String BUSITYPE_PROJECT_INSTALL = "BS211"; //工程流程-工程安装
	
	//报装所有业务类型，以'',隔开
	public static final String BUSITYPE_ALL = "'BS201', 'BS202', 'BS203', 'BS204'";
	
	/** 报装业务字典 */
	public static final String ZYSUPPLYPOINT_FLOOR_FLAG = "B"; //地下室标志
	
	public static final String BZSENDPROJECT_SENDFLAG_IS = "1"; //供气点传递标志：已传递
	public static final String BZSENDPROJECT_SENDFLAG_NOT = "0"; //供气点传递标志：未传递
	
	public static final String TABNAME_SUPPLYPOINT = "T_ZY_SUPPLYPOINT"; //供气点信息表的表名
	public static final String TABNAME_BILLPLAN = "T_KH_BILLPLAN"; //计费策略表的表名
	
	/** 报装系统参数 */
	public static final String BZ_SYSCONFIG_AUTOSUSPEND = "BZ_AUTOSUSPEND"; //自动挂起报装工单
	public static final String BZ_SYSCONFIG_AUTOSUSPEND_ACTIVE = "1"; //开启自动挂起
	public static final String BZ_SYSCONFIG_AUTOSUSPEND_INACTIVE = "1"; //关闭自动挂起
	
	public static final String BZ_CONCLUSIONTYPE_Y = "1"; //符合用气条件
	public static final String BZ_CONCLUSIONTYPE_N = "2"; //不符合用气条件
	
	/** 报装流程环节编码 */
	//零星报装
	public static final String SINGLE_ACTIVITYDEFID_DESIGN = "BS20102"; //民现零星报装-勘测环节活动定义
	
	//工商户报装
	public static final String INDUSTRIAL_ACTIVITYDEFID_DESIGN = "BS20302"; //工商户报装-勘测环节活动定义
	public static final String INDUSTRIAL_ACTIVITYDEFID_CONSTRUCTIONLIST = "BS20304"; //工商户报装-签订合同环节活动定义
	public static final String INDUSTRIAL_ACTIVITYDEFID_METER = "";//工商户报装-施工装表活动定义【用于佛然的方案审核环节后，是签订供气合同、还是派工程施工单的分支判断，已弃】
	
	//民建户报装
	public static final String COLLECTIVE_ACTIVITYDEFID_DESIGN = "BS20402"; //民建户报装-勘测环节活动定义
	public static final String COLLECTIVE_ACTIVITYDEFID_APPLY = "BS20401"; //民建户报装-诉求环节活动定义
	public static final String ACTIVITYDEFID_PRICE = ""; //民建户制定气价环节活动定义【用于批量生成供气点后，分批传递制定气价环节，已弃】
	public static final String ACTIVITYDEFID_PROJECTCHECK = ""; //民建户工程验收环节活动定义【用于批量生成供气点后，分批传递制定工程验收环节，已弃】
	public static final String COLLECTIVE_ACTIVITYDEFID_ANCILLARY = "BS20405";//民建户报装-签工程合同环节活动定义
	public static final String COLLECTIVE_ACTIVITYDEFID_CONSTRUCT = "BS20404";//民建户报装-签发包合同环节活动定义
	
	//通用
	public static final String ACTIVITYDEFID_FINISHACTIVITY = "finishActivity";//结束环节活动定义
	
	/** 安装铜管 */
	public static final String BZ_COPPERTUBO_N = "1";//没有安装
	public static final String BZ_COPPERTUBO_Y2 = "2";//总公司安装
	public static final String BZ_COPPERTUBO_Y3 = "3";//管网安装
	public static final String BZ_COPPERTUBO_Y4 = "4";//自埋
	public static final String BZ_COPPERTUBO_Y5 = "5";//禅然公司
	public static final String BZ_COPPERTUBO_Y6 = "6";//华燃能公司
	
	public static final String BZ_CONSTRUCTIONLIST_CONSTRUCTIONTYPE_INNER = "1"; //派施工单类型：派户内施工单
	public static final String BZ_CONSTRUCTIONLIST_CONSTRUCTIONTYPE_OUTER = "2"; //派施工单类型：派户外施工单
	
	/** 工程施工单 工作类型 **/
	public static final String BZ_CONSTRUCTIONLIST_WORKTYPE_RECTIFYPIPE = "4";	//改管
	public static final String BZ_CONSTRUCTIONLIST_WORKTYPE_FIREFAILURE = "7";	//点火不成功
	
	public static final String BZ_STANDARDMATERIALNAME = "BZ_STANDARDMATERIALNAME";	//系统参数配置，标准材料名称
	
	public static final String SINGLE_ACTIVITYDEFID_METER = "BS20104";//民现零星报装 - 施工装表
	public static final String COLLECTIVE_ACTIVITYDEFID_METER = "BS20408";//民建户报装 - 施工装表
	public static final String ACTIVITYDEFID_IGNITE = "BS11301";//点火
	public static final String ACTIVITYDEFID_IGNITEMETER = "BS11501";//点火挂表--点火
	public static final String ACTIVITYDEFID_CHANGEMETER = "BS10101";//表处理
	
}
