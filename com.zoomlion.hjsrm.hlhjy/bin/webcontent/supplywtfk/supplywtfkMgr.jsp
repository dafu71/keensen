<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-06-04 14:19:15
  - Description:
-->
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  String lifnr = (String) userObject.getAttributes().get("lifnr");
%>
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var userid = Ext.id;
var useridx = Ext.id;
BIZ.ns('com.zoomlion.hjsrm.hlhjy');
 </script>
 <js:load scriptPath="pub/common/wtfkCombo.js"/>
<ext:dict property="GE_SUPPLYWTFK_WTLB"   dictTypeId="GE_SUPPLYWTFK_WTLB" />
<ext:dict property="GE_SUPPLYWTFK_CLZT"   dictTypeId="GE_SUPPLYWTFK_CLZT" />
<ext:dict property="GE_SUPPLYWTFK_SUPQR"   dictTypeId="GE_SUPPLYWTFK_SUPQR" />	
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js"/>
<js:load scriptPath="hlhjy/supplywtfk/js/supplywtfkUi.js"/>
<js:load scriptPath="hlhjy/supplywtfk/js/supplywtfkEv.js"/>
<script type="text/javascript">
var lifnr = "<%=lifnr %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.hlhjy.SupplywtfkMgr
		});
 </script>
<title>供应商问题反馈管理</title>
</head>
<body>
<div id="supplywtfkMgr"></div>
</body>
</html>
