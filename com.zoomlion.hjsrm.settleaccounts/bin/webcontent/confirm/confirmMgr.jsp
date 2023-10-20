<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-12-10 13:38:39
  - Description:
-->
<head>
<meta http-equiv="Content-Type" contentType="text/html; charset=UTF-8" %>
<title>确认结算凭证</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.settleaccounts');
</script>
<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="pub/common/companyCombo.js" />

<js:load scriptPath="settleaccounts/confirm/js/confirmMgrUi.js" />
<js:load scriptPath="settleaccounts/confirm/js/confirmMgrEv.js" />

<script type="text/javascript">
	 FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.settleaccounts.ConfirmMgr
		});
 </script>
</head>
<body>
<div id="accountsconfirmMgr"></div>
</body>
</html>