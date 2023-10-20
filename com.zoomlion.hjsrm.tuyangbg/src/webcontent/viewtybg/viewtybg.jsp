<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
	//工作项id
	String workitemid = request.getParameter("workitemid");	
	//流程id
	String processinstid = request.getParameter("processinstid");	
	//listId
	String listId = request.getParameter("listId");	
	String operatorname=(String)userObject.getAttributes().get("operatorname");
	
	
 %>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2014-1-15 10:00:55
  - Description:
-->
<head>
<title>技术通知流程审核</title>
<ext:dict property="TYBG_PROCESS_STATUS"  dictTypeId="TYBG_PROCESS_STATUS" />
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.tuyangbg');

</script>
<js:load scriptPath="tuyangbg/viewtybg/js/viewtybgUi.js"/>
<js:load scriptPath="tuyangbg/viewtybg/js/viewtybgEv.js"/>
 
<script type="text/javascript">
	var processinstid = <%=processinstid %>;
	var operatorname = "<%=operatorname%>";
	var workitemid = <%=workitemid %>;
	var listId = "<%=listId %>";
	
   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.tuyangbg.ViewtybgMgr
		});

 </script>
</head>
<body>
<div id="viewtybgMgr"></div>
</body>
</html>