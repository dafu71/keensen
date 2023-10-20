<%-----------------------------------------------------------------------------
/*******************************************************************************
 * 
 * 版权所有： 港华科技（武汉）有限公司
 * 描    述： 业务待办工单
 * 创建日期： 2014-10-8
 * 补丁编号： G3_P_20140915_01_212
 * 作    者： 何源
 ******************************************************************************/
// ==============================修改历史===========================
//      补丁编号          修改人     日期      归属   备注
// G3_P_20140709_01_101  肖斌   2014-8-8    集团
// G3_P_20140915_01_212  何源   2014-10-8   集团
// =================================================================
-------------------------------------------------------------------------------%>
<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
String busiattrUser= BusiGlobal.BUSIDISTRINFO_BUSIATTR_USER;
String busiattrDepartment= BusiGlobal.BUSIDISTRINFO_BUSIATTR_DEPARTMENT;
%>
<%@page import="com.zoomlion.hjsrm.pub.common.BusiGlobal"%>
<html>
<%-- 
  - Author(s): 吕俊涛
  - Date: 2013-03-20 13:47:47
  - Description:
--%>
<head>
<title>业务待办工单</title>

<script language="javascript" src="interfaces/print/print.jsp?id=bs_commonprintremain"></script>
<script language="javascript" src="interfaces/print/print.jsp?id=bs_fire"></script>
<script language="javascript" src="interfaces/print/print.jsp?id=bs_leakrepair"></script>
<script language="javascript" src="interfaces/print/print.jsp?id=bs_appliance"></script>
<script language="javascript" src="interfaces/print/print.jsp?id=gas_repair"></script>
<script language="javascript" src="interfaces/print/print.jsp?id=bs_gsfire"></script>
<script language="javascript" src="interfaces/print/print.jsp?id=bs_departmentliaison"></script>
<script language="javascript" src="interfaces/print/print.jsp?id=bs_meterdeal"></script>

<script type="text/javascript">
    Ext.util.CSS.swapStyleSheet("","workflows/common/lockingGridView.css");
</script>
<script type="text/javascript">
	Ext.util.CSS.createStyleSheet('','busi_css_sht1');
	Ext.util.CSS.swapStyleSheet('busi_css_sht1','workflows/businessremain/css/btn_icon.css');
	BIZ.ns('com.zoomlion.hjsrm.workflows');
	var batchparams = "";
	var busiattrUser = '<%=busiattrUser%>';
	var busiattrDepartment = '<%=busiattrDepartment%>';
</script>
<lpt:loadprinttpl tplId="sheetinfo_print"/>


<ext:dict property="PB_ISORNOT"   dictTypeId="PB_ISORNOT" />
<ext:dict property="KH_USERTYPE"   dictTypeId="KH_USERTYPE" />
<ext:dict property="KH_CUSTINFO_CERTTYPE"   dictTypeId="KH_CUSTINFO_CERTTYPE" />
<ext:dict property="BS_APPLYINFO_CHNLTYPE"   dictTypeId="BS_APPLYINFO_CHNLTYPE" />
<ext:dict property="BS_WORKPRIORITY"   dictTypeId="BS_WORKPRIORITY" />
<ext:dict property="BS_CANCELCAUSE"   dictTypeId="BS_CANCELCAUSE" />


<js:load scriptPath="workflows/common/comboGrid.js"/>
<js:load scriptPath="workflows/common/exBorderLayout.js"/>
<js:load scriptPath="workflows/common/lockingGridView.js"/>
<js:load scriptPath="pub/cust/common/abstractSelectField.js"/>
<js:load scriptPath="pub/cust/user/userSelectField.js"/>
<js:load scriptPath="pub/resource/address/addrcombox.js"/>
<js:load scriptPath="pub/busi/processcombox/processCombox.js"/>


<js:load scriptPath="workflows/businessremain/js/dispatchWin.js"/>
<js:load scriptPath="workflows/businessremain/js/overtimeWin.js"/>
<js:load scriptPath="workflows/businessremain/js/turnUpWin.js"/>
<js:load scriptPath="workflows/common/setPriorWin.js"/>
<js:load scriptPath="workflows/common/commHandler.js"/>

<js:load scriptPath="workflows/businessremain/js/businessRemainUi.js"/>
<js:load scriptPath="workflows/businessremain/js/businessRemainEv.js"/>

<script type="text/javascript">
   FunctionMgr.load({mainfn : com.zoomlion.hjsrm.workflows.BusinessRemainMgr });
</script>  
</head>
<body>
<div id="businessRemainDiv"></div>
</body>
</html>
