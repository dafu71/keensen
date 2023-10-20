<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<head>
<title>机构权限设置</title>
<ext:dict property="SY_QUERYTYPE" dictTypeId="SY_QUERYTYPE"/>
<ext:dict property="AC_OPERATORSTATUS" dictTypeId="AC_OPERATORSTATUS"/>
<link rel="stylesheet" type="text/css"	href="frame/ui/css/RowEditor.css" />

<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.orgright');
</script>
<js:load scriptPath="frame/rights/orgright/js/orgset/orgsetUI.js"/>
<js:load scriptPath="frame/rights/orgright/js/orgset/orgsetEv.js"/>
<js:load scriptPath="frame/rights/orgright/js/optrightUI.js"/>
<js:load scriptPath="frame/rights/orgright/js/optrightEv.js"/>
<script type="text/javascript">
FunctionMgr.load({
		mainfn:com.zoomlion.hjsrm.orgright.orgrightMgr
});
</script>
</head>
<body>
<div id="orgrightDiv"></div>
</body>
</html>