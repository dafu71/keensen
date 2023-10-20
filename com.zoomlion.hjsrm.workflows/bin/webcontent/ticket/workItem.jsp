<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@ taglib uri="http://eos.primeton.com/tags/hjsrm/workitem" prefix="workitem"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%
//活动实例id
String activityId = request.getParameter("activityId");
String url = request.getParameter("url");
//	业务类型
String busitype = request.getParameter("busitype");
//	业务处理记录表主键
String busipkid = request.getParameter("busipkid");

%>
<html>
<head>
<title>工作项</title>
<%
String fnKey = request.getParameter("fnKey");
 %>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.workflows');
</script>
<js:load scriptPath="workflows/common/exBorderLayout.js"/>
<js:load scriptPath="workflows/ticket/js/worksheet/WorkShtTabPanel.js" replaceName="cfg" DBData="${workitem:getActivityTabsBusiType(param.busitype,param.activityDefId,param.url)}"/>
<js:load scriptPath="workflows/ticket/js/workiteminfo/workItemInfoUi.js"/>
<js:load scriptPath="workflows/ticket/js/workiteminfo/workItemInfoEv.js"/>
<js:load scriptPath="workflows/ticket/js/worksheet/workSheetInfoUi.js"/>
<js:load scriptPath="workflows/ticket/js/worksheet/workSheetInfoEv.js"/>

<script type="text/javascript">
	TicketFunctionMgr.add("<%=fnKey %>", com.zoomlion.hjsrm.workflows.WorkItemInfo);
</script>
</head>
<body>
</body>
</html>
