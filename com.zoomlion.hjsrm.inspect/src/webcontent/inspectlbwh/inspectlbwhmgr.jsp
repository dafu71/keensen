<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-06-17 08:53:51
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
<js:load scriptPath="pub/common/factoryCombo.js"/>
<js:load scriptPath="pub/common/lifnrallCombo.js"/>
<js:load scriptPath="pub/common/matnrallCombo.js"/>
<ext:dict property="GE_INSPECT_ZJLB"   dictTypeId="GE_INSPECT_ZJLB" />
<js:load scriptPath="inspect/inspectlbwh/js/inspectlbwhUi.js"/>
<js:load scriptPath="inspect/inspectlbwh/js/inspectlbwhEv.js"/>
<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.inspect.Inspectlbwhmgr
		});
 </script>
<title>物料质检类别维护</title>
</head>
<body>
<div id="inspectlbwhmgr"></div>
</body>
</html>


