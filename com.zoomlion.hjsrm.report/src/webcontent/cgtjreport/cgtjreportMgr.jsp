<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<!-- 
  - Author(s): liuxin
  - Date: 2015-12-09 13:59:38
  - Description:
-->
<html>
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  String sysdate = Common.getSysDate();
%>

<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
  BIZ.ns('com.zoomlion.hjsrm.cgzqreport');
  </script>
 <%-- <js:load scriptPath="http://127.0.0.1:8080/default/FusionCharts/fusionCharts.js"/>--%>
  <js:load scriptPath="report/cgtjreport/js/cgtjreportUi.js"/>
  <js:load scriptPath="report/cgtjreport/js/cgtjreportEv.js"/>
  <js:load scriptPath="report/cgtjreport/js/dprkreport/dprkreportUi.js"/>
  <js:load scriptPath="report/cgtjreport/js/dprkreport/dprkreportEv.js"/>
  <js:load scriptPath="report/cgtjreport/js/cgrkreport/cgrkreportUi.js"/>
  <js:load scriptPath="report/cgtjreport/js/cgrkreport/cgrkreportEv.js"/>
  <js:load scriptPath="pub/common/factoryCombo.js"/>
  <script LANGUAGE="Javascript" SRC="FusionCharts/fusionCharts.js"></script>
<script type="text/javascript">
 var sysdate = "<%=sysdate %>";
  FunctionMgr.load({
		mainfn: com.zoomlion.hjsrm.cgzqreport.CgtjreportMgr
	});
 </script>
<title>采购统计报表</title>

</head>
<body>
<div id="cgtjreportMgr"></div>
</body>
</html>
