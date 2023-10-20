<!-- 
  - Author(s): liuxin
  - Date: 2015-08-24 16:13:38
  - Description:
-->
<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="java.net.URLEncoder"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	String lifnr = (String) userObject.getAttributes().get("lifnr");
	String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
    String sysdate = Common.getSysDate();
    String dataorgid=(String)userObject.getAttributes().get("dataorgid");
    Long operatorid=(Long)userObject.getAttributes().get("operatorid");
    String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
%>
<script type="text/javascript">
 var lifnr = "<%=lifnr %>";
 var lifnrname = "<%=lifnrname %>";
 var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
 var sysdate = "<%=sysdate %>";
 var now = new Date();
  now.setDate(now.getDate()-90);
  BIZ.ns('com.zoomlion.hjsrm.cpflpzcxdl');
 </script>
 <ext:dict property="ABF_STATUS1"   dictTypeId="ABF_STATUS" />
<ext:dict property="AT_ANNOUNCETYPE"   dictTypeId="AT_ANNOUNCETYPE" />
<ext:dict property="GE_SUPPLY_MASSTYPE"   dictTypeId="GE_SUPPLY_MASSTYPE" />
<ext:dict property="GE_SUPPLY_MATERIALTYPE"   dictTypeId="GE_SUPPLY_MATERIALTYPE" />
<ext:dict property="GE_SUPPLY_PROPERTY"   dictTypeId="GE_SUPPLY_PROPERTY" />
<ext:dict property="GE_SUPPLY_REGIMENTATION"   dictTypeId="GE_SUPPLY_REGIMENTATION" />
<ext:dict property="GE_SUPPLY_SYSTEMATICS"   dictTypeId="GE_SUPPLY_SYSTEMATICS" />
<ext:dict property="GE_INSPECT_QJBZ"   dictTypeId="GE_INSPECT_QJBZ" />
 <js:load scriptPath="supply/cpqdwhcx/js/cpqdwhcxUi.js"/>
 <js:load scriptPath="supply/cpqdwhcx/js/cpqdwhcxEv.js"/>
 <js:load scriptPath="pub/common/cplbCombo.js"/> 
<script type="text/javascript">
  FunctionMgr.load({
			mainfn:com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr
		});
 </script>
<title>产品清单维护与查询</title>
</head>
<body>
<div id="cpqdwhcxMgr"></div>
</body>
</html>
