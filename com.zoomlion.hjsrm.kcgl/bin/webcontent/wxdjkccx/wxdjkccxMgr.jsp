
<!-- 
  - Author(s): liuxin
  - Date: 2015-05-22 11:47:24
  - Description:
-->
<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");

%>
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
BIZ.ns('com.zoomlion.hjsrm.kcgl');
 </script>
<js:load scriptPath="kcgl/wxdjkccx/js/wxdjkccxUi.js"/>
<js:load scriptPath="kcgl/wxdjkccx/js/wxdjkccxEv.js"/>
 <js:load scriptPath="pub/common/factoryCombo.js"/>
<script type="text/javascript">
var msgxxx = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.WxdjkccxMgr
		});
 </script>
<title>外协大件库存查询</title>
</head>
<body>
<div id="wxdjkccxMgr"></div>
</body>
</html>
