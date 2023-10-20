<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2018-08-07 14:35:11
  - Description:
-->
<head>
<title>供应商库存管理</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.kcgl');
</script>
<js:load scriptPath="kcgl/stockmanage/js/stockmanageUi.js" />
<js:load scriptPath="kcgl/stockmanage/js/stockmanageEv.js" />
<script type="text/javascript">
  	FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.StockmanageMgr
		});
 </script>
</head>
<body>
<div id="stockmanagemgr"></div>
</body>
</html>