<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-04-17 08:45:50
  - Description:采购周期报表
-->
<head>
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	String lifnr = (String) userObject.getAttributes().get("lifnr");
	String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
    String sysdate = Common.getSysDate();
	
%>
<title>采购周期报表</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.cgzqreport');

 </script>
<js:load scriptPath="report/cgzqreport/js/cgzqreportUi.js" />
<js:load scriptPath="report/cgzqreport/js/cgzqreportEv.js" />

<script type="text/javascript">
 var lifnr = "<%=lifnr %>";
 var sysdate = "<%=sysdate %>";
 var now = new Date();
  now.setDate(now.getDate()-90);
Ext.chart.Chart.CHART_URL = 'frame/ui/jslib/ext_340/resources/charts.swf';

  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.cgzqreport.CgzqreportMgr
		});
 </script>
</head>
<body>
<div id="cgzqreportMgr"></div>
</body>
</html>