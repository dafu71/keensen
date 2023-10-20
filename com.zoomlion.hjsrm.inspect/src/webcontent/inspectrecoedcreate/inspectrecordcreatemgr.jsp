<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-06-23 14:17:12
  - Description:
-->
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=(String)userObject.getAttributes().get("operatorname");
  
  String sysdate = Common.getSysTime();

%>

<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var sysdate = "<%=sysdate %>";
  BIZ.ns('com.zoomlion.hjsrm.inspect');
  </script>
  <ext:dict property="GE_INSPECT_CJWTDJ"   dictTypeId="GE_INSPECT_CJWTDJ" />
  <ext:dict property="GE_INSPECT_QJPD"   dictTypeId="GE_INSPECT_QJPD" />
  <js:load scriptPath="inspect/inspectrecoedcreate/js/inspectrecordcreateUi.js"/>
  <js:load scriptPath="inspect/inspectrecoedcreate/js/inspectrecordcreateEv.js"/>
<script type="text/javascript">
  FunctionMgr.load({
		mainfn: com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr
	});
 </script>
<title>质检记录表生成</title>

</head>
<body>
<div id="inspectrecordcreatemgr"></div>
</body>
</html>
