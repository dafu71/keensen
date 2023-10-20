<!-- 
  - Author(s): liuxin
  - Date: 2015-06-19 09:35:12
  - Description:
-->
<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-06-16 14:06:23
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
BIZ.ns('com.zoomlion.hjsrm.inspect');
 </script>
<js:load scriptPath="inspect/inspectnotzjlb/js/inspectnotzjlbUi.js"/>
<js:load scriptPath="inspect/inspectnotzjlb/js/inspectnotzjlbEv.js"/>
 <js:load scriptPath="pub/common/factoryCombo.js"/>
<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.inspect.Inspectnotzjlbmgr
		});
 </script>
<title>无质检类别数据查询</title>
</head>
<body>
<div id="inspectnotzjlbmgr"></div>
</body>
</html>


