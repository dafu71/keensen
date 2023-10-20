<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
	
	//工作项id
	String workitemids = request.getParameter("workitemids");	
	//流程id
	String processinstids = request.getParameter("processinstids");	
	//listId
	String listId = request.getParameter("listId");	
	
 %>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2016-01-28 09:00:26
  - Description:
-->
<head>
<title>批量处理</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.srmclient.demo');

 </script>
 <js:load scriptPath="srmclient/demo/js/batchDealUi.js"/>
<js:load scriptPath="srmclient/demo/js/batchDealEv.js"/>
 
<script type="text/javascript">
	var processinstids = '<%=processinstids %>';
	var workitemids = '<%=workitemids %>';
	var listId = "<%=listId %>";
	
   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.demo.batchDealMgr
		});

 </script>
</head>
<body>
<div id="batchdealmgrdiv"></div>
</body>
</html>