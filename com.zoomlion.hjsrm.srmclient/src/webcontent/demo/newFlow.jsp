<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-11-27 10:53:53
  - Description:
-->
<head>
<title>新建测试流程</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.srmclient.demo');

 </script>
 <js:load scriptPath="srmclient/demo/js/newFlowMgrUi.js"/>
<js:load scriptPath="srmclient/demo/js/newFlowMgrEv.js"/>
 
<script type="text/javascript">

   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.demo.NewFlowMgr
		});

 </script>
</head>
<body>
<div id="newFlowMgr"></div>
</body>
</html>