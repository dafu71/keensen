<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	String lifnr = (String) userObject.getAttributes().get("lifnr");
	String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2018-06-25 16:08:49
  - Description:
-->
<head>
<title>计划答交</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.kcgl');
</script>
<js:load scriptPath="kcgl/plananswer/js/answerUi.js" />
<js:load scriptPath="kcgl/plananswer/js/answerEv.js" />
<script type="text/javascript">
	var lifnr = "<%=lifnr %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.AnswerMgr
		});
 </script>
</head>
<body>
<div id="answermgr"></div>
</body>
</html>