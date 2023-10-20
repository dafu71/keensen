<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-01-26 10:39:03
  - Description:
-->
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  String lifnr = (String) userObject.getAttributes().get("lifnr");
  String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
%>
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
BIZ.ns('com.zoomlion.hjsrm.mblnrreport');
 </script>

<js:load scriptPath="report/mblnrreport/js/mblnrreportUi.js"/>
<js:load scriptPath="report/mblnrreport/js/mblnrreportEv.js"/>
<js:load scriptPath="pub/common/factoryCombo.js"/>


<script type="text/javascript">
  var lifnr = "<%=lifnr %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.mblnrreport.MblnrreportMgr
		});
 </script>
<title>物料凭证查询报表</title>
</head>
<body>
<div id="mblnrreportMgr"></div>
</body>
</html>
