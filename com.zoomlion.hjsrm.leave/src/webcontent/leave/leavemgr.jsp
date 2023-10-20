<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2017-2-16 13:38:39
  - Description:
-->
<head>
<meta http-equiv="Content-Type" contentType="text/html; charset=UTF-8"%>
<title>请假流程</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.leave');
</script>
<js:load scriptPath="leave/leave/js/leaveMgrUi.js" />
<js:load scriptPath="leave/leave/js/leaveMgrEv.js" />

<script type="text/javascript">
var listid = Ext.id();
	 FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.leave.LeaveMgr
		});
 </script>
</head>
<body>
<div id="leaveMgr"></div>
</body>
</html>
