<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-12-10 13:38:39
  - Description:
-->
<head>
<meta http-equiv="Content-Type" contentType="text/html; charset=UTF-8"%>
<title>结算维护</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.settleaccounts');
</script>
<ext:dict property="GE_PRUCHASE_TARIFF"   dictTypeId="GE_PRUCHASE_TARIFF" />

<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="pub/common/companyCombo.js" />
<js:load scriptPath="pub/common/ekorgCombo.js" />
<js:load scriptPath="settleaccounts/manage/js/manageMgrUi.js" />
<js:load scriptPath="settleaccounts/manage/js/manageMgrEv.js" />

<script type="text/javascript">
var listid = Ext.id();
	 FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.settleaccounts.ManageMgr
		});
 </script>
</head>
<body>
<div id="accountsmanageMgr"></div>
</body>
</html>
