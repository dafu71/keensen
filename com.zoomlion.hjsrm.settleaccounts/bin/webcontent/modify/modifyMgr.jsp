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
  - Date: 2014-12-10 13:38:39
  - Description:
-->
<head>
<meta http-equiv="Content-Type" contentType="text/html; charset=UTF-8" %>
<title>修改结算凭证</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.settleaccounts');
</script>
<ext:dict property="GE_PRUCHASE_TARIFF"   dictTypeId="GE_PRUCHASE_TARIFF" />
<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="pub/common/companyCombo.js" />
<js:load scriptPath="pub/common/ekorgCombo.js" />
<js:load scriptPath="settleaccounts/modify/js/modifyMgrUi.js" />
<js:load scriptPath="settleaccounts/modify/js/modifyMgrEv.js" />

<script type="text/javascript">
var lifnrname = "<%=lifnrname %>";
	var lifnr = "<%=lifnr %>";
	var now = new Date();
	var curYear = now.getFullYear();
	var listid = Ext.id();
	 FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.settleaccounts.ModifyMgr
		});
 </script>
</head>
<body>
<div id="accountsmodifyMgr"></div>
</body>
</html>