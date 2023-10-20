<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-07-10 11:31:59
  - Description:
-->
<head>
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);

	String dataorgid = (String) userObject.getAttributes().get(
			"dataorgid");
	Long operatorid = (Long) userObject.getAttributes().get(
			"operatorid");
	String operatorname = (String) userObject.getAttributes().get(
			"operatorname");

	String sysdate = Common.getSysTime();
%>

<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var sysdate = "<%=sysdate %>";
  BIZ.ns('com.zoomlion.hjsrm.inspect');
  </script>
<js:load scriptPath="inspect/inspectwltmsb/js/inspectwltmsbUi.js" />
<js:load scriptPath="inspect/inspectwltmsb/js/inspectwltmsbEv.js" />
<ext:dict property="GE_INSPECT_JGPD" dictTypeId="GE_INSPECT_JGPD" />
<ext:dict property="GE_INSPECT_ZCBZ" dictTypeId="GE_INSPECT_ZCBZ" />
<script type="text/javascript">
  FunctionMgr.load({
		mainfn: com.zoomlion.hjsrm.inspect.Inspectwltmsbmgr
	});
 </script>
<title>物料条码识别</title>

</head>
<body>
<div id="inspectwltmsbemgr"></div>
</body>
</html>
