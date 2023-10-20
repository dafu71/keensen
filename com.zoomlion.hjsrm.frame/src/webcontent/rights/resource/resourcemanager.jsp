<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<head>
<title>系统资源管理</title>
<link rel="stylesheet" type="text/css" href="frame/ui/css/edittreegrid.css" />
<ext:dict property="AC_RESTYPE" dictTypeId="AC_RESTYPE"/>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.rights');
</script>

<js:load scriptPath="frame/rights/resource/js/resourceUI.js"/>
<js:load scriptPath="frame/rights/resource/js/resourceEv.js"/>

<script type="text/javascript">
	FunctionMgr.load({
			mainfn:com.zoomlion.hjsrm.rights.resourceMgr
	});
</script>
</head>
<body>
<div id="resourceMgr"></div>
</body>
</html>