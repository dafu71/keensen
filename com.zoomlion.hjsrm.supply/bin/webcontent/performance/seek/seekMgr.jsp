<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	String lifnr = (String) userObject.getAttributes().get("lifnr");
	String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-12-08 11:02:37
  - Description:
-->
<head>
<title>供应商绩效查询</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.supply');

 </script>
 <ext:dict property="GE_SUPPLY_MATERIALTYPE"   dictTypeId="GE_SUPPLY_MATERIALTYPE" />
 <ext:dict property="GE_SUPPLY_MASSTYPE"   dictTypeId="GE_SUPPLY_MASSTYPE" />
  <ext:dict property="GE_SUPPLY_SYSTEMATICS"   dictTypeId="GE_SUPPLY_SYSTEMATICS" />
 <js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="pub/common/companyCombo.js" />
<js:load scriptPath="supply/performance/seek/js/seekMgrUi.js" />
<js:load scriptPath="supply/performance/seek/js/seekMgrEv.js" />
<script type="text/javascript">
 var lifnr = "<%=lifnr %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.supply.SeekMgr
		});
 </script>
</head>
<body>
<div id="performanceseekMgr"></div>
</body>
</html>