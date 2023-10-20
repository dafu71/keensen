<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>

<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-12-08 11:02:07
  - Description:
-->
<head>
<title>供应商绩效维护</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.supply');
 </script>

<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="pub/common/companyCombo.js" />
<js:load scriptPath="supply/performance/manage/js/manageMgrUi.js" />
<js:load scriptPath="supply/performance/manage/js/manageMgrEv.js" />

<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.supply.ManageMgr
		});
 </script>
</head>
<body>
<div id="performancemanageMgr"></div>
</body>
</html>
