<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>

<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-12-31 10:27:50
  - Description:
-->
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);

	String dataorgid = (String) userObject.getAttributes().get(
			"dataorgid");
	Long operatorid = (Long) userObject.getAttributes().get(
			"operatorid");
	String operatorname = URLEncoder.encode((String) userObject
			.getAttributes().get("operatorname"), "UTF-8");

	//readPkid
	String esheetno = request.getParameter("esheetno");
%>
<head>
<title>转阅记录</title>
<script type="text/javascript">
var filewindow = Ext.id();
var esheetno ="<%=esheetno %>";
BIZ.ns('com.zoomlion.hjsrm.srmclient');

 </script>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js" />
<js:load scriptPath="srmclient/read/js/readHistoryMgrUi.js" />
<js:load scriptPath="srmclient/read/js/readHistoryMgrEv.js" />
<script type="text/javascript">

  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.ReadHistoryMgr
		});
 </script>
</head>
<body>
<div id="readhistoryMgr"></div>
</body>
</html>
