<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
	String userOrgId = (String) user.getUserOrgId();
	String dataorgid = (String) user.getAttributes().get("dataorgid");
	//系统管理员默认为空
	if(dataorgid.equalsIgnoreCase("0")){
	   dataorgid="-100";
	}
%>
<html>
<head>
<script type="text/javascript">
 var userOrgId = '<%=userOrgId%>';
 var DATAORGID = '<%=dataorgid%>';
</script>
<script type="text/javascript">
 BIZ.ns('com.zoomlion.hjsrm.opt');
</script>
<title>操作员管理</title>
<!-- orgmanage -->
<ext:dict property="OM_PARTYVISAGE" dictTypeId="OM_PARTYVISAGE"/>
<ext:dict property="CM_GENDER" dictTypeId="CM_GENDER"/>
<ext:dict property="OM_EMPSTATUS" dictTypeId="OM_EMPSTATUS"/>
<ext:dict property="AC_AUTHMODE" dictTypeId="AC_AUTHMODE"/>
<ext:dict property="OM_ORGTYPE" dictTypeId="OM_ORGTYPE"/>
<ext:dict property="OM_POSITIONTYPE" dictTypeId="OM_POSITIONTYPE"/>
<ext:dict property="AC_OPERATORSTATUS" dictTypeId="AC_OPERATORSTATUS"/>
<ext:dict property="AC_MENUTYPE" dictTypeId="AC_MENUTYPE"/>
<!-- 角色类型(业务字典) -->
<ext:dict property="AC_ROLETYPE" dictTypeId="AC_ROLETYPE"/>
<!-- 授权类型(业务字典) -->
<ext:dict property="ABF_FUNCAUTHTYPE" dictTypeId="ABF_FUNCAUTHTYPE"/>
<link rel="stylesheet" type="text/css" href="frame/ui/css/edittreegrid.css" />
<js:load scriptPath="frame/org/operator/js/optower/treeLoader.js"/>
<js:load scriptPath="frame/ui/jslib/extex/treegrid/treegrid_all.js"/>
<js:load scriptPath="frame/ui/jslib/extex/edittreegrid/edittreegrid_pkg.js"/>
<js:load scriptPath="frame/org/operator/js/optrole/optroleUI.js"/>
<js:load scriptPath="frame/org/operator/js/optrole/optroleEv.js"/>
<js:load scriptPath="frame/org/operator/js/optower/optAuthWindow.js"/>
<js:load scriptPath="frame/org/operator/js/optower/optAuthEv.js"/>
<js:load scriptPath="frame/org/operator/js/optUI.js"/>
<js:load scriptPath="frame/org/operator/js/optEv.js"/>
<script type="text/javascript">
FunctionMgr.load({
		mainfn:com.zoomlion.hjsrm.opt.operatorMgr
});
</script>
</head>
<body>
<div id="optDiv"></div>
</body>
</html>