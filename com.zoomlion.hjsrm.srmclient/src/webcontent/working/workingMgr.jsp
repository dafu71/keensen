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
<title>我的待办</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.srmclient');

 </script>
 <ext:dict property="PROCESSTYPE"   dictTypeId="PROCESSTYPE" />
 
<script type="text/javascript" src="srmclient/common/commonFunc.js"></script>

<js:load scriptPath="pub/common/selectParticipantsWin.js"/>
<js:load scriptPath="pub/common/sendMsgWin.js"/>
<js:load scriptPath="srmclient/working/js/workingMgrUi.js"/>
<js:load scriptPath="srmclient/working/js/workingMgrEv.js"/>
 
<script type="text/javascript">


  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.WorkingMgr
		});
 </script>
</head>
<body>
<div id="workingMgr"></div>
</body>
</html>