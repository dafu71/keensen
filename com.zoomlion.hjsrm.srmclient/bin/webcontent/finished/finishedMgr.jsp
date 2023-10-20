<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-11-19 12:21:24
  - Description:
-->
<head>
<title>我的办结</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.srmclient');
 </script>
 <ext:dict property="PROCESSTYPE"   dictTypeId="PROCESSTYPE" />
 
 <script type="text/javascript" src="srmclient/common/commonFunc.js"></script>
<js:load scriptPath="srmclient/finished/js/finishedMgrUi.js"/>
<js:load scriptPath="srmclient/finished/js/finishedMgrEv.js"/>
<script type="text/javascript">

  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.finishedMgr
		});
 </script>
</head>
<body>
<div id="finishedMgr"></div>
</body>
</html>