<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>

<html>
<!-- 
  - Author(s): dafu
  - Date: 2018-06-12 15:51:59
  - Description:
-->
<head>
<title>基础数据维护</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.kcgl');
</script>

<js:load scriptPath="pub/common/lifnrallCombo.js"/>

<js:load scriptPath="kcgl/base/js/materialwholeUi.js" />
<js:load scriptPath="kcgl/base/js/materialwholeEv.js" />

<js:load scriptPath="kcgl/base/js/materialcomponentUi.js" />
<js:load scriptPath="kcgl/base/js/materialcomponentEv.js" />

<js:load scriptPath="kcgl/base/js/componentsupplierUi.js" />
<js:load scriptPath="kcgl/base/js/componentsupplierEv.js" />

<js:load scriptPath="kcgl/base/js/materialUi.js" />
<js:load scriptPath="kcgl/base/js/materialEv.js" />

<js:load scriptPath="kcgl/base/js/buyerUi.js" />
<js:load scriptPath="kcgl/base/js/buyerEv.js" />

<js:load scriptPath="kcgl/base/js/stockbaseUi.js" />
<js:load scriptPath="kcgl/base/js/stockbaseEv.js" />

<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.StockbaseMgr
		});
 </script>
</head>
<body>
<div id="stockbasemgr"></div>
</body>
</html>