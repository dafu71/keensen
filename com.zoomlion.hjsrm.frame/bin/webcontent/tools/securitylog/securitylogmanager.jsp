<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<ext:dict property="SRM_AC_ACOPTTYPE"   dictTypeId="SRM_AC_ACOPTTYPE" />
<ext:dict property="AT_LOGINTYPE"   dictTypeId="AT_LOGINTYPE" />
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script type="text/javascript">
 BIZ.ns('com.zoomlion.hjsrm.securitylog');
</script>
<js:load scriptPath="frame/tools/securitylog/js/securityLogUi.js"/>
<js:load scriptPath="frame/tools/securitylog/js/securityLogEv.js"/>
<script type="text/javascript">
  FunctionMgr.load({
			mainfn :com.zoomlion.hjsrm.securitylog.SecuritylogMgr
		});
 </script>
<title>消息管理</title>
</head>
<body>
<div id="securitylogMgr"></div>
</body>
</html>
