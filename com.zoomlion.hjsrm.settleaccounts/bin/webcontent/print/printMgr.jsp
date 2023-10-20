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
  - Date: 2014-12-25 15:00:49
  - Description:
-->
<head>
<title>结算凭证打印</title>
<script language="javascript" src="interfaces/print/Lodop/LodopFuncs.js"></script>

<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.settleaccounts');
</script>
<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="pub/common/companyCombo.js" />

<js:load scriptPath="settleaccounts/print/js/printMgrUi.js" />
<js:load scriptPath="settleaccounts/print/js/printMgrEv.js" />

<script type="text/javascript">
var lifnr = "<%=lifnr %>";
	 FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.settleaccounts.PrintMgr
		});
 </script>
</head>
<body>
<div id="accountsprintMgr"></div>
</body>
</html>