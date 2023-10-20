<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-1-16 16:38:39
  - Description:
-->
<head>
<meta http-equiv="Content-Type" contentType="text/html; charset=UTF-8" %>
<title>送货单确认</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.purchase');
</script>
<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="pub/common/companyCombo.js" />

<js:load scriptPath="purchase/shdconfirm/js/shdconfirmMgrUi.js" />
<js:load scriptPath="purchase/shdconfirm/js/shdconfirmMgrEv.js" />

<script type="text/javascript">
	 FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.purchase.ShdconfirmMgr
		});
 </script>
</head>
<body>
<div id="shdconfirmMgr"></div>
</body>
</html>