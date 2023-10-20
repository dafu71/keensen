<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-06-26 15:50:46
  - Description:
-->
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=(String)userObject.getAttributes().get("operatorname");
  
  String sysdate = Common.getSysTime();
  String useid = Common.getCurrentUserId();
  String lifnr = (String) userObject.getAttributes().get("lifnr");
	String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");

%>

<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var useid = "<%=useid%>";
var sysdate = "<%=sysdate %>";
var lifnrname = "<%=lifnrname %>";
var lifnr = "<%=lifnr %>";
  BIZ.ns('com.zoomlion.hjsrm.inspect');
  </script>
  <ext:dict property="GE_INSPECT_JGPD"   dictTypeId="GE_INSPECT_JGPD" />
  <ext:dict property="GE_INSPECT_ZCBZ"   dictTypeId="GE_INSPECT_ZCBZ" />
  <ext:dict property="GE_INSPECT_CJWTDJ"   dictTypeId="GE_INSPECT_CJWTDJ" />
  <ext:dict property="GE_INSPECT_QJPD"   dictTypeId="GE_INSPECT_QJPD" />
  <ext:dict property="GE_INSPECT_ZJLB"   dictTypeId="GE_INSPECT_ZJLB" />
   <js:load scriptPath="pub/common/factoryCombo.js"/>
  <js:load scriptPath="inspect/inspectrecordedit/js/inspectrecordeditUi.js"/>
  <js:load scriptPath="inspect/inspectrecordedit/js/inspectrecordeditEv.js"/>
<script type="text/javascript">
  FunctionMgr.load({
		mainfn: com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr
	});
 </script>
<title>质检记录表维护</title>

</head>
<body>
<div id="inspectrecordceditmgr"></div>
</body>
</html>
