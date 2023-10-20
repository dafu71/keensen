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
  - Date: 2018-08-07 14:37:14
  - Description:
-->
<head>
<title>供应商大件库存报表</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.kcgl');
</script>
<js:load scriptPath="kcgl/stockreport/js/stockreportUi.js" />
<js:load scriptPath="kcgl/stockreport/js/stockreportEv.js" />
<script type="text/javascript">
	var lifnr = "<%=lifnr %>";
  	FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.StockreportMgr
		});
 </script>
</head>
<body>
<div id="stockreportmgr"></div>
</body>
</html>