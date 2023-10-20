<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
	//工作项id
	//String workitemid = request.getParameter("workitemid");	
	//流程id
	String processinstid = request.getParameter("processinstid");	

 %>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-11-27 12:01:14
  - Description:
-->
<head>
<title>查看流程</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.srmclient.demo');

 </script>
 <js:load scriptPath="srmclient/demo/js/viewFlowMgrUi.js"/>
<js:load scriptPath="srmclient/demo/js/viewFlowMgrEv.js"/>
 
<script type="text/javascript">
	var processinstid = <%=processinstid %>;

   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.demo.ViewFlowMgr
		});

 </script>
</head>
<body>
<div id="viewFlowMgr"></div>
</body>
</html>