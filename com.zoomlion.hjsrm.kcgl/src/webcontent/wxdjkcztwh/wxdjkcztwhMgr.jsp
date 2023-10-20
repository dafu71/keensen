<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 采购方库存查询
  - Author(s): liuxin
  - Date: 2014-12-16 17:02:24
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
BIZ.ns('com.zoomlion.hjsrm.kcgl');
 </script>


<js:load scriptPath="kcgl/wxdjkcztwh/js/wxdjkcztwhUi.js"/>
<js:load scriptPath="kcgl/wxdjkcztwh/js/wxdjkcztwhEv.js"/>



<script type="text/javascript">

  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.WxdjkcztwhMgr
		});
 </script>
<title>外协大件库存状态维护</title>
</head>
<body>
<div id="WxdjkcztwhMgr"></div>
</body>
</html>
