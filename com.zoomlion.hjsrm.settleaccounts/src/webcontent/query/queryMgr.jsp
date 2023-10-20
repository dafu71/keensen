<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
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
<meta http-equiv="Content-Type" contentType="text/html; charset=UTF-8"%>
<title>结算凭证查询</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.settleaccounts');
</script>
<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="pub/common/companyCombo.js" />
<js:load scriptPath="pub/common/ekorgCombo.js" />
<js:load scriptPath="settleaccounts/query/js/queryMgrUi.js" />
<js:load scriptPath="settleaccounts/query/js/queryMgrEv.js" />

<script type="text/javascript">
	var lifnrname = "<%=lifnrname %>";
	var lifnr = "<%=lifnr %>";
	var now = new Date();
	//var curYear = parseInt(now.getYear())+1900;
	var curYear = now.getFullYear();
	 FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.settleaccounts.QueryMgr
		});
 </script>
</head>
<body>
<div id="accountsqueryMgr"></div>
</body>
</html>
