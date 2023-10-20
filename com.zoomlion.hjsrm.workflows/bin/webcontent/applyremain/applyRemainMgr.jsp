<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
String commState  = DemandGlobal.COMMSTATE_HAVECHECK;
String trackState  = DemandGlobal.TRACKSTATE_HAVECHECK;
String notifyState  = DemandGlobal.NOTIFYSTATE_HAVECHECK;

 %>
<%@page import="com.zoomlion.hjsrm.pub.common.DemandGlobal"%>
<html>
<%-- 
  - Author(s): 吕俊涛
  - Date: 2013-03-20 13:47:47
  - Description:
--%>
<head>
<title>诉求待办工单</title>
<script language="javascript" src="interfaces/print/print.jsp?id=bs_applyremain"></script>
<script type="text/javascript">
	Ext.util.CSS.createStyleSheet('','busi_css_sht2');
	Ext.util.CSS.swapStyleSheet('busi_css_sht2','workflows/businessremain/css/btn_icon.css');
	
    Ext.util.CSS.swapStyleSheet("","workflows/common/lockingGridView.css");
</script>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.workflows');
	var batchparams = "";
	var commState = '<%=commState%>';
	var trackState = '<%=trackState%>';
	var notifyState = '<%=notifyState%>';
 </script>
<ext:dict dictTypeId="BS_APPLYINFO_SOURCETYPE" property="BS_APPLYINFO_SOURCETYPE"/>
<ext:dict dictTypeId="SQ_NOTIFYMSG_NOFITYSTATE" property="SQ_NOTIFYMSG_NOFITYSTATE"/>

<ext:dict dictTypeId="SQ_TRACK_TRACKSTATE" property="SQ_TRACK_TRACKSTATE"/>
<ext:dict dictTypeId="SQ_COMPLEMENT_COMMSTATE" property="SQ_COMPLEMENT_COMMSTATE"/>
<ext:dict dictTypeId="SQ_URGEREC_PRIORITY" property="SQ_URGEREC_PRIORITY"/>
<ext:dict dictTypeId="SQ_TRACK_DEPARTTYPE" property="SQ_TRACK_DEPARTTYPE"/>
<ext:dict property="KH_USERTYPE"   dictTypeId="KH_USERTYPE" />
<ext:dict property="KH_CUSTINFO_CERTTYPE"   dictTypeId="KH_CUSTINFO_CERTTYPE" />
<ext:dict property="BS_WORKPRIORITY"   dictTypeId="BS_WORKPRIORITY" />
<ext:dict property="SQ_PRIORITY"   dictTypeId="SQ_PRIORITY" />
<ext:dict property="BS_CANCELCAUSE"   dictTypeId="BS_CANCELCAUSE" />


<js:load scriptPath="workflows/common/comboGrid.js"/>
<js:load scriptPath="workflows/common/exBorderLayout.js"/>
<js:load scriptPath="workflows/common/lockingGridView.js"/>
<js:load scriptPath="pub/busi/busitype/busitypeCascadeCombo.js"/>

<js:load scriptPath="pub/cust/common/abstractSelectField.js"/>
<js:load scriptPath="pub/cust/user/userSelectField.js"/>
<js:load scriptPath="pub/resource/address/addrcombox.js"/>

<js:load scriptPath="workflows/applyremain/js/complementWin.js"/>
<js:load scriptPath="workflows/applyremain/js/notifyWin.js"/>
<js:load scriptPath="workflows/applyremain/js/trackApplyWin.js"/>
<js:load scriptPath="workflows/applyremain/js/urgeWorkWin.js"/>
<js:load scriptPath="workflows/common/setPriorWin.js"/>
<js:load scriptPath="workflows/businessremain/js/turnUpWin.js"/>
<js:load scriptPath="workflows/common/commHandler.js"/>

<js:load scriptPath="workflows/applyremain/js/applyRemainUi.js"/>
<js:load scriptPath="workflows/applyremain/js/applyRemainEv.js"/>

<script type="text/javascript">
   FunctionMgr.load({mainfn : com.zoomlion.hjsrm.workflows.ApplyRemainMgr });
</script>  
</head>
<body>
<div id="applyRemainDiv"></div>
</body>
</html>
