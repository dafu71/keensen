<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-12-30 13:49:17
  - Description:
-->
<head>
<title>工单阅读</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.srmclient');

 </script>
 <ext:dict property="PROCESSTYPE"   dictTypeId="PROCESSTYPE" />
 
<script type="text/javascript" src="srmclient/common/commonFunc.js"></script>

<js:load scriptPath="srmclient/read/js/readMgrUi.js"/>
<js:load scriptPath="srmclient/read/js/readMgrEv.js"/>
 
<script type="text/javascript">

var listId = Ext.id();
var listId2 = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.ReadMgr
		});
 </script>
</head>
<body>
<div id="readMgr"></div>
</body>
</html>