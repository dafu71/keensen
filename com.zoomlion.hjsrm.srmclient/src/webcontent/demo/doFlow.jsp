<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
	
	//工作项id
	String workitemid = request.getParameter("workitemid");	
	//流程id
	String processinstid = request.getParameter("processinstid");	
	//listId
	String listId = request.getParameter("listId");	
	
 %>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-11-27 12:00:55
  - Description:
-->
<head>
<title>执行流程</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.srmclient.demo');

 </script>
 <js:load scriptPath="srmclient/demo/js/doFlowMgrUi.js"/>
<js:load scriptPath="srmclient/demo/js/doFlowMgrEv.js"/>
 
<script type="text/javascript">
	var processinstid = <%=processinstid %>;
	var workitemid = <%=workitemid %>;
	var listId = "<%=listId %>";
	
   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.demo.DoFlowMgr
		});

 </script>
</head>
<body>
<div id="doFlowMgr"></div>
</body>
</html>