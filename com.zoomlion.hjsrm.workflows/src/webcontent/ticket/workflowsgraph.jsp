<%@page pageEncoding="UTF-8"%>
<%@ taglib uri="http://eos.primeton.com/tags/hjsrm/workitem" prefix="workitem"%>
<%@page import="java.util.Date"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
String dataorgid=(String)userObject.getAttributes().get("dataorgid");
String areacode =(String)userObject.getAttributes().get("areacode");
//流程实例id 
String pId=request.getParameter("pId");
String tabId = request.getParameter("tabId");
Date s = new Date();
String d ="graph" + + s.getTime();
 %>

<html>
<head>
<title>流程图和工作项</title>
<script type="text/javascript">
var divId = '<%=d %>';
var tabId = '<%=tabId %>';
BIZ.ns('com.zoomlion.hjsrm.workflows');
</script>
<js:load scriptPath="workflows/ticket/js/workflowsinfo/loadWorkinfoPanel.js"/>

<js:load scriptPath="workflows/ticket/js/workflowsinfo/workFlowsInfoUi.js"/>
<js:load scriptPath="workflows/ticket/js/workflowsinfo/workFlowsInfoEv.js"/>
<script type="text/javascript">
 FunctionMgr.load({mainfn :com.zoomlion.hjsrm.workflows.WorkFlowsInfo,
 	cfg:{renderDiv:'<%=d %>',pId : '<%=pId %>' }
 });
</script>
</head>
<body>
<div id="<%=d%>"></div>
</body>
</html>
