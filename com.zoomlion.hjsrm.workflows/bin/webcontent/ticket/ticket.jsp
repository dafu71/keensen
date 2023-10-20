<%@page pageEncoding="UTF-8"%>
<%com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
String dataorgid=(String)userObject.getAttributes().get("dataorgid");
String areacode =(String)userObject.getAttributes().get("areacode");
//流程实例id 
String pId=request.getParameter("pId");
//定义id
String processId = request.getParameter("processId");
//工作项id
String workItemId = request.getParameter("workItemId");
//工作项名称
String activityName = request.getParameter("activityName");
//活动定义id 
String activityInstId = request.getParameter("activityInstId");
//活动实例id
String activityId = request.getParameter("activityId");
//参与者id
String participantId = request.getParameter("participantId");
String tabId = request.getParameter("tabId");
String url = request.getParameter("url");
//	用户号
String userId = request.getParameter("userId");
//	批量号/计划号
String planId = request.getParameter("planId");
//	业务类型
String busitype = request.getParameter("busitype");
//	业务处理记录表主键
String busipkid = request.getParameter("busipkid");
//	诉求主键
String applyinfopkid = request.getParameter("applyinfopkid");
//	工单信息表主键
String worklistinfopkid = request.getParameter("worklistinfopkid");
Date s = new Date();
String d ="sheet" + + s.getTime();
 %>
<%@include file="/frame/ui/page/include.jsp"%>
<%@ taglib uri="http://eos.primeton.com/tags/hjsrm/workitem" prefix="workitem"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.util.Date"%>
<html>
<head>
<title>电子工单</title>
<script type="text/javascript">
var divId = '<%=d %>';
var tabId = '<%=tabId %>';
BIZ.ns('com.zoomlion.hjsrm.workflows');
</script>
<js:load scriptPath="workflows/common/exBorderLayout.js"/>
<js:load scriptPath="workflows/ticket/js/worksheet/WorkShtTabPanel.js" replaceName="cfg" DBData="${workitem:getActivityTabsBusiType(param.busitype,param.activityId,param.url)}"/>

<js:load scriptPath="workflows/common/complementButton.js"/>

<js:load scriptPath="workflows/ticket/js/workflowsinfo/loadWorkinfoPanel.js"/>
<js:load scriptPath="workflows/ticket/js/workflowsinfo/workFlowsInfoUi.js"/>
<js:load scriptPath="workflows/ticket/js/workflowsinfo/workFlowsInfoEv.js"/>

<js:load scriptPath="workflows/ticket/js/workiteminfo/workItemInfoUi.js"/>
<js:load scriptPath="workflows/ticket/js/workiteminfo/workItemInfoEv.js"/>

<js:load scriptPath="workflows/ticket/js/worksheet/workSheetInfoUi.js"/>
<js:load scriptPath="workflows/ticket/js/worksheet/workSheetInfoEv.js"/>

<js:load scriptPath="workflows/ticket/js/ticketUi.js"/>
<js:load scriptPath="workflows/ticket/js/ticketEv.js"/>

<script type="text/javascript">
 FunctionMgr.load({mainfn : com.zoomlion.hjsrm.workflows.TicketMgr ,
 	cfg:{pId : '<%=pId %>' , processId : '<%=processId %>' , workItemId : '<%=workItemId %>' , activityName : '<%=activityName %>' ,
				activityInstId : '<%=activityInstId %>' , activityId : '<%=activityId %>' , participantId : '<%=participantId %>' , 
				url : '<%=url%>' , userId : '<%=userId%>' , planId : '<%=planId%>' , busitype : '<%=busitype%>', busipkid : '<%=busipkid%>',
				applyinfopkid : '<%=applyinfopkid%>' , worklistinfopkid : '<%=worklistinfopkid%>'
	}
 });
</script>
</head>
<body>
<div id="<%=d%>"></div>
</body>
</html>
