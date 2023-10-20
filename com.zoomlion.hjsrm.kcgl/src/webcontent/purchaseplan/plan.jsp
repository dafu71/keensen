<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2018-06-21 13:50:40
  - Description:
-->
<head>
<title>采购计划</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.kcgl');
</script>
<js:load scriptPath="kcgl/purchaseplan/js/planheadUi.js" />
<js:load scriptPath="kcgl/purchaseplan/js/planheadEv.js" />

<js:load scriptPath="kcgl/purchaseplan/js/planlistUi.js" />
<js:load scriptPath="kcgl/purchaseplan/js/planlistEv.js" />

<js:load scriptPath="kcgl/purchaseplan/js/planUi.js" />
<js:load scriptPath="kcgl/purchaseplan/js/planEv.js" />

<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.PurchaseplanMgr
		});
 </script>
 
</head>
<body>
<div id="purchaseplanmgr"></div>
</body>
</html>