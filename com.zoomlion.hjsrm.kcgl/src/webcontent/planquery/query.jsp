<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2018-06-26 10:03:34
  - Description:
-->
<head>
<title>采购计划查询</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.kcgl');
</script>
<js:load scriptPath="kcgl/planquery/js/queryUi.js" />
<js:load scriptPath="kcgl/planquery/js/queryEv.js" />

<script type="text/javascript">
	var view_relationid;
	var view_pmatnr;
	var view_line;
	var result_relationid;
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.PlanqueryMgr
		});
 </script>
</head>
<body>
<div id="planquerymgr"></div>
</body>
</html>