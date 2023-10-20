<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-05-20 08:27:01
  - Description:
-->
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
var cxdmxxx = Ext.id;
var cxdmxxx2 = Ext.id;
BIZ.ns('com.zoomlion.hjsrm.kcgl');
 </script>
<js:load scriptPath="pub/common/matnrCombo.js"/> 
<js:load scriptPath="pub/common/djqdCombo.js"/>
<js:load scriptPath="kcgl/wxdjqdwh/js/wxdjqdUi.js"/>
<js:load scriptPath="kcgl/wxdjqdwh/js/wxdjqdEv.js"/>
 <js:load scriptPath="pub/common/factoryCombo.js"/>
<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.DjqdwhMgr
		});
 </script>
<title>大件清单维护</title>
</head>
<body>
<div id="djqdwhMgr"></div>
</body>
</html>


