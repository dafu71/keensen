<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 采购方库存查询
  - Author(s): liuxin
  - Date: 2014-12-15 15:50:24
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


<js:load scriptPath="kcgl/cgfkccx/js/cgfkccxUi.js"/>
<js:load scriptPath="kcgl/cgfkccx/js/cgfkccxEv.js"/>
<js:load scriptPath="pub/common/factoryCombo.js"/>


<script type="text/javascript">

  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.CgfkccxMgr
		});
 </script>
<title>采购方库存查询</title>
</head>
<body>
<div id="CgfkccxMgr"></div>
</body>
</html>
