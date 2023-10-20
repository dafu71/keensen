<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-06-18 09:29:32
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
<ext:dict property="GE_INSPECT_QJBZ"   dictTypeId="GE_INSPECT_QJBZ" />
<js:load scriptPath="inspect/inspectqjbz/js/inspectqjbzUi.js"/>
<js:load scriptPath="inspect/inspectqjbz/js/inspectqjbzEv.js"/>
<js:load scriptPath="inspect/inspectqjbz/js/inspectqjbztd/inspectqjbztdUi.js"/>
<js:load scriptPath="inspect/inspectqjbz/js/inspectqjbztd/inspectqjbztdEv.js"/>
<js:load scriptPath="inspect/inspectqjbz/js/inspectqjbzmx/inspectqjbzmxUi.js"/>
<js:load scriptPath="inspect/inspectqjbz/js/inspectqjbzmx/inspectqjbzmxEv.js"/>
<script type="text/javascript">
var lsqjwhtext = Ext.id();
var zjlblistPanel = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.inspect.Inspectqjbzmgr
		});
 </script>
<title>全检物料质检标准维护</title>
</head>
<body>
<div id="inspectqjbzmgr"></div>
</body>
</html>


