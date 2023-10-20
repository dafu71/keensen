<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>

<%
	//流程实例id
	String processinstid = request.getParameter("processinstid");	
	//父流程实例id
	String rootprocinstid = request.getParameter("rootprocinstid");	

 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-11-24 10:58:27
  - Description:
-->
<head>
<title>流程日志</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.srmclient');
 </script>
<ext:dict property="PROCESSTYPE"   dictTypeId="PROCESSTYPE" />
<ext:dict property="CA_LAST_RESULT"   dictTypeId="CA_LAST_RESULT" />
<js:load scriptPath="srmclient/worklog/js/workLogMgrUi.js"/>
<js:load scriptPath="srmclient/worklog/js/workLogMgrEv.js"/>
<script type="text/javascript">
var processinstid = <%=processinstid %>;
var rootprocinstid = <%=rootprocinstid %>;
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.WorkLogMgr
		});
 </script>
</head>
<body>
<div id="workLogMgr">

</div>
</body>
</html>