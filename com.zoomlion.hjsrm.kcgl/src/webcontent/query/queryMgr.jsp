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
  - Date: 2014-12-01 11:40:50
  - Description:
-->
<head>
<title>外协大件库存状态查询</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.kcgl');

 </script>
 
 <js:load scriptPath="pub/common/zvernCombo.js" />
<js:load scriptPath="kcgl/query/js/queryMgrUi.js" />
<js:load scriptPath="kcgl/query/js/queryMgrEv.js" />

<script type="text/javascript">
 var lifnr = "<%=lifnr %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.QueryMgr
		});
 </script>
</head>
<body>
<div id="kcglqueryMgr"></div>
</body>
</html>