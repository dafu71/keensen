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
<js:load scriptPath="pub/common/cxmcCombo.js"/>
<js:load scriptPath="kcgl/wxdjcxqdwh/js/cxqdwhUi.js"/>
<js:load scriptPath="kcgl/wxdjcxqdwh/js/cxqdwhEv.js"/>
 <js:load scriptPath="pub/common/factoryCombo.js"/>
<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.CxqdwhMgr
		});
 </script>
<title>车型清单维护</title>
</head>
<body>
<div id="cxqdwhMgr"></div>
</body>
</html>
