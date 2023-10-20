/******************************************************************
*版权所有： 港华科技（武汉）有限公司
*描    述：  
*创建日期： 2014-10-8
*补丁编号： G3_P_20140915_01_272
*作    者：梅建明
*******************************************************************/
//==============================修改历史===========================
//补丁编号                				修改人     	日期       		区域       备注
// G3_P_20140915_01_272   	梅建明      	20141008    集团      
//=================================================================
package com.zoomlion.hjsrm.pub.common;

public class GasGlobal extends Globals {

    public static final String APP_NAME_GAS = "GS";// 燃气具销售
//  虚拟用户发起安装维修用
    public static final String UNKNOW = "UNKNOW";
    public static final String UNKNOW_ZH = "未知";
    public static final String OTHER_RESSORT = "X";
    public static final String A_RESSORT = "A";
    public static final String OTHER_SORTTYPE = "XX";
    public static final String OTHER_RESTYPE= "AXXXX";
    public static final String OTHER_BRAND= "BXXX";
    public static final String FACTORY_TYPE_SUPPLIER= "1";
    public static final String FACADE_F= "F";

    /**
         * 仓库关联类别
         */
    public static final String DEPOT_RELATIONTYPE_ZZ = "1";// 组织结构编号

    public static final String DEPOT_RELATIONTYPE_XM = "2";// 项目编号
    /**
     * 是否数据字典
     */
    public static final String GS_YESORNO_NO = "0";// 否
    
    public static final String GS_YESORNO_YES = "1";// 是

    /**
         * 仓库类别
         */
    public static final String DEPOT_DEPOTTYPE_LS = "0";// 非项目

    public static final String DEPOT_DEPOTTYPE_XM = "1";// 项目
    
    public static final String FIXPOSI_IN  = "1";//户内
    public static final String FIXPOSI_OUT  = "2";//户外
    public static final String FIXPOSI_KITCHEN  = "4";//厨房
    

    /**
         * 价格属性
         */
    public static final String PRODUCTPRICE_PRICETYPE_GJ = "1";// 供价

    public static final String PRODUCTPRICE_PRICETYPE_BJ = "2";// 标价
    
    public static final String PRODUCT_BUYADDR_IN = "1";//公司内部
    public static final String PRODUCT_BUYADDR_OUT = "2";//公司外部
    
    

    /**
         * 资产状态
         * 
         * @author 梅建明<br>
         *         2013-6-5 16:27:48
         */
    public static final String APPLIANCE_STATE_DAZ = "0";// 待安装

    public static final String APPLIANCE_STATE_YX = "1";// 运行

    public static final String APPLIANCE_STATE_DS = "2";// 丢失

    public static final String APPLIANCE_STATE_YWX = "3";// 已维修

    public static final String APPLIANCE_STATE_FC = "4";// 返厂

    public static final String APPLIANCE_STATE_BF = "5";// 报废

    // ******************业务类型******************************
    public static final String GAS_BUSITYP_GS001 = "GS001"; // 进货入库

    public static final String GAS_BUSITYP_GS002 = "GS002"; // 库存调配
    
    public static final String GAS_BUSITYP_GS012 = "GS012"; // 公司级库存调配

    public static final String GAS_BUSITYP_GS003 = "GS003"; // 库存转换

    public static final String GAS_BUSITYP_GS011 = "GS011"; // 零售一级库入库

    public static final String GAS_BUSITYP_GS021 = "GS021"; // 零售一级库入库（冲正）

    public static final String GAS_BUSITYP_GS031 = "GS031"; // 零售二级库入库

    public static final String GAS_BUSITYP_GS041 = "GS041"; // 零售二级库入库（冲正）

    public static final String GAS_BUSITYP_GS051 = "GS051"; // 零售三级库入库

    public static final String GAS_BUSITYP_GS061 = "GS061"; // 零售三级库入库（冲正）

    public static final String GAS_BUSITYP_GS071 = "GS071"; // 项目一级库入库

    public static final String GAS_BUSITYP_GS081 = "GS081"; // 项目一级库入库（冲正）

    public static final String GAS_BUSITYP_GS091 = "GS091"; // 项目二级库入库

    public static final String GAS_BUSITYP_GS101 = "GS101"; // 项目二级库入库（冲正）

    public static final String GAS_BUSITYP_GS111 = "GS111"; // 库存耗损

    public static final String GAS_BUSITYP_GS121 = "GS121"; // 库存报警设置增加
    
    public static final String GAS_BUSITYP_GS122 = "GS122"; // 库存报警设置删除

    public static final String GAS_BUSITYP_GS123 = "GS123"; // 库存报警设置修改

    public static final String GAS_BUSITYP_GS131 = "GS131"; // 零售仓库增加

    public static final String GAS_BUSITYP_GS132 = "GS132"; // 零售仓库删除

    public static final String GAS_BUSITYP_GS134 = "GS134"; // 零售仓库修改

    public static final String GAS_BUSITYP_GS133 = "GS133"; // 零售仓库作废

    public static final String GAS_BUSITYP_GS141 = "GS141"; // 项目仓库增加

    public static final String GAS_BUSITYP_GS142 = "GS142"; // 项目仓库删除

    public static final String GAS_BUSITYP_GS144 = "GS144"; // 项目仓库修改

    public static final String GAS_BUSITYP_GS143 = "GS143"; // 项目仓库作废

    public static final String GAS_BUSITYP_GS151 = "GS151"; // 优惠项制定增加

    public static final String GAS_BUSITYP_GS152 = "GS152"; // 优惠项制定删除

    public static final String GAS_BUSITYP_GS171 = "GS171"; // 优惠活动制定增加

    public static final String GAS_BUSITYP_GS172 = "GS172"; // 优惠活动制定删除

    public static final String GAS_BUSITYP_GS173 = "GS173"; // 优惠活动制定修改

    public static final String GAS_BUSITYP_GS174 = "GS174"; // 优惠活动对象增加

    public static final String GAS_BUSITYP_GS175 = "GS175"; // 优惠活动对象删除

    public static final String GAS_BUSITYP_GS181 = "GS181"; // 优惠券制定增加

    public static final String GAS_BUSITYP_GS182 = "GS182"; // 优惠券制定删除

    public static final String GAS_BUSITYP_GS191 = "GS191"; // 供价优惠制定增加

    public static final String GAS_BUSITYP_GS192 = "GS192"; // 供价优惠制定删除

    public static final String GAS_BUSITYP_GS201 = "GS201"; // 产品组合销售制定增加

    public static final String GAS_BUSITYP_GS202 = "GS202"; // 产品组合销售制定删除

    public static final String GAS_BUSITYP_GS211 = "GS211"; // 厂家让利增加

    public static final String GAS_BUSITYP_GS212 = "GS212"; // 厂家让利删除

    public static final String GAS_BUSITYP_GS221 = "GS221"; // 零售营业登记增加

    public static final String GAS_BUSITYP_GS222 = "GS222"; // 零售营业登记删除

    public static final String GAS_BUSITYP_GS231 = "GS231"; // 零售移交登记增加

    public static final String GAS_BUSITYP_GS232 = "GS232"; // 零售移交登记删除

    public static final String GAS_BUSITYP_GS241 = "GS241"; // 零售确认接收

    public static final String GAS_BUSITYP_GS251 = "GS251"; // 零售打回接收

    public static final String GAS_BUSITYP_GS261 = "GS261"; // 订单管理增加

    public static final String GAS_BUSITYP_GS263 = "GS263"; // 订单管理修改
    
    public static final String GAS_BUSITYP_GS265 = "GS265"; // 增加历史遗留燃气具
    
    public static final String GAS_BUSITYP_GS266 = "GS266"; // 删除历史遗留燃气具

    public static final String GAS_BUSITYP_GS271 = "GS271"; // 零售销售计划增加

    public static final String GAS_BUSITYP_GS272 = "GS272"; // 零售销售计划删除

    public static final String GAS_BUSITYP_GS281 = "GS281"; // 项目销售计划增加

    public static final String GAS_BUSITYP_GS282 = "GS282"; // 项目销售计划删除

    public static final String GAS_BUSITYP_GS291 = "GS291"; // 零售合同增加

    public static final String GAS_BUSITYP_GS293 = "GS293"; // 零售合同修改

    public static final String GAS_BUSITYP_GS301 = "GS301"; // 零售合同增加附加协议

    public static final String GAS_BUSITYP_GS311 = "GS311"; // 零售合同制定付款模式

    public static final String GAS_BUSITYP_GS321 = "GS321"; // 项目合同增加

    public static final String GAS_BUSITYP_GS323 = "GS323"; // 项目合同修改

    public static final String GAS_BUSITYP_GS331 = "GS331"; // 项目合同增加附加协议

    public static final String GAS_BUSITYP_GS341 = "GS341"; // 项目合同制定付款模式

    public static final String GAS_BUSITYP_GS351 = "GS351"; // 新建项目增加

    public static final String GAS_BUSITYP_GS352 = "GS352"; // 项目删除

    public static final String GAS_BUSITYP_GS361 = "GS361"; // 增加项目意向产品

    public static final String GAS_BUSITYP_GS362 = "GS362"; // 删除项目意向产品

    public static final String GAS_BUSITYP_GS371 = "GS371"; // 项目发货发燃气具增加

    public static final String GAS_BUSITYP_GS381 = "GS381"; // 项目发货发提货券增加

    public static final String GAS_BUSITYP_GS391 = "GS391"; // 产品目录维护增加

    public static final String GAS_BUSITYP_GS393 = "GS393"; // 产品目录维护修改

    public static final String GAS_BUSITYP_GS401 = "GS401"; // 燃气具技术参数增加

    public static final String GAS_BUSITYP_GS402 = "GS402"; // 燃气具技术参数删除

    public static final String GAS_BUSITYP_GS403 = "GS403"; // 燃气具技术参数修改

    public static final String GAS_BUSITYP_GS411 = "GS411"; // 供价维护增加

    public static final String GAS_BUSITYP_GS412 = "GS412"; // 供价维护删除

    public static final String GAS_BUSITYP_GS413 = "GS413"; // 供价维护修改

    public static final String GAS_BUSITYP_GS421 = "GS421"; // 标价维护增加

    public static final String GAS_BUSITYP_GS422 = "GS422"; // 标价维护删除

    public static final String GAS_BUSITYP_GS423 = "GS423"; // 标价维护修改

    public static final String GAS_BUSITYP_GS431 = "GS431"; // 供应商建档及维护增加

    public static final String GAS_BUSITYP_GS432 = "GS432"; // 供应商建档及维护删除

    public static final String GAS_BUSITYP_GS433 = "GS433"; // 供应商建档及维护修改

    public static final String GAS_BUSITYP_GS441 = "GS441"; // 供应商许可证增加

    public static final String GAS_BUSITYP_GS442 = "GS442"; // 供应商许可证删除

    public static final String GAS_BUSITYP_GS443 = "GS443"; // 供应商许可证修改

    public static final String GAS_BUSITYP_GS451 = "GS451"; // 供应商考评

    public static final String GAS_BUSITYP_GS461 = "GS461"; // 供应商零售结算增加

    public static final String GAS_BUSITYP_GS462 = "GS462"; // 供应商零售结算删除

    public static final String GAS_BUSITYP_GS463 = "GS463"; // 供应商零售结算修改

    public static final String GAS_BUSITYP_GS471 = "GS471"; // 供应商项目结算增加

    public static final String GAS_BUSITYP_GS472 = "GS472"; // 供应商项目结算删除

    public static final String GAS_BUSITYP_GS473 = "GS473"; // 供应商项目结算修改

    public static final String GAS_BUSITYP_GS481 = "GS481"; // 授权密码修改

    public static final String GAS_BUSITYP_GS491 = "GS491"; // 指定授权者

    public static final String GAS_BUSITYP_GS492 = "GS492"; // 授权记录删除

    public static final String GAS_BUSITYP_GS501 = "GS501"; // 回访录入

    public static final String GAS_BUSITYP_GS511 = "GS511"; // 发起诉求

    public static final String GAS_BUSITYP_GS521 = "GS521"; // 生成销售记录

    public static final String GAS_BUSITYP_GS531 = "GS531"; // 费用制定增加

    public static final String GAS_BUSITYP_GS532 = "GS532"; // 费用制定删除

    public static final String GAS_BUSITYP_GS533 = "GS533"; // 费用制定修改

    public static final String GAS_BUSITYP_GS541 = "GS541"; // 收预存款

    public static final String GAS_BUSITYP_GS551 = "GS551"; // 制定实收计划

    public static final String GAS_BUSITYP_GS561 = "GS561"; // 燃气具缴费
    
    public static final String GAS_BUSITYP_GS562 = "GS562"; // 燃气具发票打印
    
    public static final String GAS_BUSITYP_GS563 = "GS563"; // 退订金
    
    public static final String GAS_BUSITYP_GS566 = "GS566"; // 燃气具费用代扣

    public static final String GAS_BUSITYP_GS571 = "GS571"; // 项目配套缴费

    public static final String GAS_BUSITYP_GS581 = "GS581"; // 新建客户

    public static final String GAS_BUSITYP_GS591 = "GS591"; // 回访筛选

    public static final String GAS_BUSITYP_GS601 = "GS601"; // 安装

    public static final String GAS_BUSITYP_GS602 = "GS602"; // 提货

    public static final String GAS_BUSITYP_GS603 = "GS603"; // 送货

    public static final String GAS_BUSITYP_GS604 = "GS604"; // 自提

    public static final String GAS_BUSITYP_GS605 = "GS605"; // 提货和送货

    public static final String GAS_BUSITYP_GS606 = "GS606"; // 送货和安装

    public static final String GAS_BUSITYP_GS607 = "GS607"; // 提货送货和安装
    
    public static final String GAS_BUSITYP_GS608 = "GS608"; // 项目资产安装

    public static final String GAS_BUSITYP_GS611 = "GS611"; // 维修

    public static final String GAS_BUSITYP_GS613 = "GS613"; // 燃气具用户安装

    public static final String GAS_BUSITYP_GS614 = "GS614"; // 燃气具用户维修

    public static final String GAS_BUSITYP_GS621 = "GS621"; // 换货

    public static final String GAS_BUSITYP_GS631 = "GS631"; // 退货

    public static final String GAS_BUSITYP_GS632 = "GS632"; // 换货入库

    public static final String GAS_BUSITYP_GS633 = "GS633"; // 换货出库

    public static final String GAS_BUSITYP_GS641 = "GS641"; // 投诉

    public static final String GAS_BUSITYP_GS651 = "GS651"; // 库存业务确认

    public static final String GAS_BUSITYP_GS652 = "GS652"; // 库存业务作废

    public static final String GAS_BUSITYP_GS661 = "GS661"; // 产品附属零配件增加

    public static final String GAS_BUSITYP_GS662 = "GS662"; // 产品附属零配件删除

    public static final String GAS_BUSITYP_GS671 = "GS671"; // 产品图片增加

    public static final String GAS_BUSITYP_GS672 = "GS672"; // 产品图片删除

    public static final String GAS_BUSITYP_GS681 = "GS681"; // 产品扩展参数增加

    public static final String GAS_BUSITYP_GS682 = "GS682"; // 产品扩展参数删除

    public static final String GAS_BUSITYP_GS691 = "GS691"; // 合同附加协议增加

    public static final String GAS_BUSITYP_GS701 = "GS701"; // 技术参数分类增加

    public static final String GAS_BUSITYP_GS702 = "GS702"; // 技术参数分类删除

    public static final String GAS_BUSITYP_GS703 = "GS703"; // 技术参数分类修改
    
    public static final String GAS_BUSITYP_GS711 = "GS711"; // 赠送销售

    public static final String GAS_BUSITYP_GS901 = "GS901"; // 负卖入库

    public static final String GAS_BUSITYP_GS902 = "GS902"; // (库存)销售转提货

    public static final String GAS_BUSITYP_GS903 = "GS903"; // (库存)提货转送货

    public static final String GAS_BUSITYP_GS904 = "GS904"; // (库存)送货转安装

    public static final String GAS_BUSITYP_GS905 = "GS905"; // (库存)提货转安装

    public static final String GAS_BUSITYP_GS920 = "GS920"; // 资产新增

    public static final String GAS_BUSITYP_GS921 = "GS921"; // 资产修改

    public static final String GAS_BUSITYP_GS922 = "GS922"; // 资产删除

    public static final String GAS_BUSITYP_GS923 = "GS923"; // 资产导入

    public static final String GAS_BUSITYP_GS924 = "GS924"; // 报废资产导入
    
    public static final String GAS_BUSITYP_GS925 = "GS925"; // 预收款录入新增
    public static final String GAS_BUSITYP_GS926 = "GS926"; // 发货新增
    public static final String GAS_BUSITYP_GS11925 = "GS985"; // 销售计划新增
    public static final String GAS_BUSITYP_GS11926 = "GS986"; // 销售计划删除

    // *******************************优惠券状态******************
    public static final String GAS_COUPONSTATE_INACTIVE = "0"; // 失效

    public static final String GAS_COUPONSTATE_UNUSED = "1"; // 未使用

    public static final String GAS_COUPONSTATE_USED = "2"; // 已使用

    // *******************************优惠活动类型************************
    public static final String GAS_FAVACTIVITYTYPE_GS09 = "GS09"; // 产品组合优惠

    // ********************项目收款进度状态**********************************
    
    public static final String GAS_PROJECTPRICEPLAN_STATE_UNPAID = "1"; // 未缴费
    public static final String GAS_PROJECTPRICEPLAN_STATE_PAID = "2";   // 已缴费
    // ********************授权默认密码**********************************
    public static final String GAS_AUTHORIZATION_PASSWORD = "000000"; // 授权默认密码
    
    //***************************项目合同金额保存item名*****************
    public static final String GAS_CONTRACTITEM_CONTRACTMONEY = "contractMoney"; 

    // ********************产品状态**************************************对应数据字典：GS_PRODUCTSTATE
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_PICKUP = "PS001"; //已提货
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_PREINSTALL = "PS002"; // 预安装
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_INSTALL = "PS003"; // 已安装
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_PREMAINTAIN = "PS004"; // 预维修
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_MAINTAIN = "PS005"; // 已维修
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_REPLACEMENT = "PS006"; // 已换货
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_RETURN = "PS007"; // 已退货
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_UNPICKUP = "PS008"; // 未提货
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_PREDELIVERY = "PS009"; // 预送货
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_DELIVERY = "PS010"; // 已送货
    public static final String GAS_BALANCEBASIC_PRODUCTSTATE_PREPICKUP = "PS011"; // 预提货

    public static final String GAS_BALANCEBASIC_STATE_ORDER = "D";    // 已订购
    public static final String GAS_BALANCEBASIC_STATE_SELL = "X";     // 已销售
    public static final String GAS_BALANCEBASIC_STATE_INSTALL = "A";  // 已安装
    public static final String GAS_BALANCEBASIC_STATE_PAID = "J";     // 已结算 --供应商结账后的状态
    public static final String GAS_BALANCEBASIC_STATE_BF= "Z";   // 已作废
    
    //安装结果
    public static final String GAS_INSTALL_RESULT = "1";  // 已安装
    //订单状态
    public static final String GAS_SELLREC_STATE_UNPAID = "1";     //未缴费
    public static final String GAS_SELLREC_STATE_PARTPAID = "2";  //部分缴费
    public static final String GAS_SELLREC_STATE_PAID = "3";      //已缴费
    public static final String GAS_SELLREC_STATE_CANCEL = "4";    //取消
    public static final String GAS_SELLREC_STATE_SELL = "5";    //转为销售单
       
    public static final String GAS_SELLDETAIL_STATE_UNPAID = "1";  //未缴费
    public static final String GAS_SELLDETAIL_STATE_ORDER = "2";  // 已订购
    public static final String GAS_SELLDETAIL_STATE_PAID = "3";   //已缴费   
    public static final String GAS_SELLDETAIL_STATE_RETURN = "4";  //已退费
    
    public static final String GAS_BALANCEDETAIL_FEETYPE_ORDER = "1";   //订金
    public static final String GAS_BALANCEDETAIL_FEETYPE_SELL = "2";   //销售款
    
    public static final String GAS_BALANCEETAIL_STATE_NOMAL = "1";  // 正常
    public static final String GAS_BALANCEETAIL_STATE_RETURN = "2";  // 已退
    
    public static final String GAS_BALANCEETAIL_PAYFLAG_NOMAL = "1";    // 正常
    public static final String GAS_BALANCEETAIL_PAYFLAGE_RETURN = "2";  // 退费
    public static final String GAS_BALANCEETAIL_PAYFLAGE_CANCEL = "3";  // 冲正
    
    // ********************库存属性*****************************
    public static final String GS_STORE_ATTRIB_SELL = "0";      // 销售库存
    public static final String GS_STORE_ATTRIB_CANPICKUP = "6"; // 可提货库存

    // *********************客户建档时默认的属性
    public static final String GAS_USERINFO_CONSUMPTYPE_NATURAL = "1"; // 天然气

    public static final String GAS_USERINFO_CONSUMPATTR_OTHER = "1XXX"; // 其他民用
    public static final String GAS_USERINFO_CONSUMPATTR_OTHERBUSINESS = "2XXX"; // 其他商业
    
    public static final String GAS_USERINFO_INDUSTRYTYPE_CIVIL = "A002"; //普通居民

    public static final String GAS_USERINFO_CHNLTYPE_HALL = "1"; // 营业厅
    
    //*************************优惠分类
    public static final String FAVACTIVITY_FAVSORT_NORMAL  = "1";  //普通优惠
    public static final String FAVACTIVITY_FAVSORT_SPECIAL = "2";  //特殊优惠
    public static final String FAVACTIVITY_FAVSORT_GROUP   = "3";  //组合优惠
    
    //*************************优惠项优惠类型
    public static final String FAVITEM_FAVMODE_GJBASED = "A"; //基于标价优惠
    public static final String FAVITEM_FAVMODE_BJBASED = "B";  //基于供价优惠
    public static final String FAVITEM_FAVMODE_GE = "C";  //大于等于
    public static final String FAVITEM_FAVMODE_LE = "D";  //小于等于   
    //*************************客户类型
    public static final String GAS_CUSTINFO_SVCTYPE_VIRTUAL = "4"; //虚拟客户
    public static final String SALL_TYPE = "销售类型";// 销售类型
    public static final String SALL_WAY = "销售方式";// 方式
    public static final String PRODUCT_CATALOG = "产品分类";// 
    public static final String PRODUCT_TYPE = "产品类型";// 
    public static final String PRODUCT_BRAND = "产品品牌";// 
    public static final String PRODUCT_MODELIDO = "产品型号";// 
    public static final String PRODUCT_CODE = "产品编号";// 
    public static final String DICTABLE_NAME ="eos_dict_type t left join eos_dict_entry tt on t.dicttypeid=tt.dicttypeid ";
    public static final String DICCOLUMN1_NAME ="t.dicttypename=";
    public static final String DICCOLUMN2_NAME =" and tt.dictname";
    public static final String GAS_NOPAYFOR = "1";
    public static final String GAS_PAYFOR = "2";
    public static final String STORE_ATTRIB="GS_STORE_ATTRIB";
    public static final String STORE_ATTRIBNAME="样机库存";
    public static final String STORE_SELL_ATTRIBNAME="销售库存";
    
    //*************************燃气具打印
    public static final int GAS_SALEVOUCHER_MAXLENGTH = 4;  //燃气具销售凭证最多能打印的产品数
    public static final int GAS_INVC_MAXLENGTH = 6;  //燃气具发票最多能打印的行数
    public static final String GSG_INVCPRINT_TEMPLATEID = "gas_invcprint"; //打印模板id
    
    //********************费用类型
    public static final String THSUNPAIDACCTSHT_FEETYPE_GASRES = "R";           // 燃气具费
    public static final String THSUNPAIDACCTSHT_FEETYPEDETAIL_GASRES = "GS007"; //销售金额
    public static final String THSUNPAIDACCTSHT_FEETYPEDETAIL_SERVICE = "GAS04"; //服务费
    public static final String THSUNPAIDACCTSHT_FEETYPEDETAIL_MATERIAL = "GAS05"; //材料费
    
    //********************销售类型
    public static final String GAS_SELLREC_SELLTYPE_RETAIL = "1";   //零售
    public static final String GAS_SELLREC_SELLTYPE_RROJECT = "3";  //项目销售
    
    //*******************燃气具状态
    public static final String GAS_INSTALLSTATE_NOMAL = "1";  //正常
    
}
