<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>

<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  String lifnr = (String) userObject.getAttributes().get("lifnr");
  String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
			
  Calendar cal = Calendar.getInstance();
  Date now = cal.getTime();
  SimpleDateFormat dz = new SimpleDateFormat("yyyy-MM-dd");
  String erdat = dz.format(now);
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2018-10-16 09:20:12
  - Description:
-->
<head>
<title>供应商库存查询</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.purchase');
</script>
<js:load scriptPath="purchase/querystock/js/querystockUi.js"/>
<js:load scriptPath="purchase/querystock/js/querystockEv.js"/>
<script type="text/javascript">
  var lifnr = "<%=lifnr %>";
  var now = "<%=erdat %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.purchase.QuerystockMgr
		});
 </script>
</head>
<body>
<div id="querystockmgr"></div>
</body>
</html>