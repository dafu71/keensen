<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");

%>
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
BIZ.ns('com.zoomlion.hjsrm.announce');
 </script>
<ext:dict property="ABF_STATUS1"   dictTypeId="ABF_STATUS" />
<ext:dict property="AT_ANNOUNCETYPE"   dictTypeId="AT_ANNOUNCETYPE" />
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js"/>
<js:load scriptPath="frame/tools/announce/js/announceUi.js"/>
<js:load scriptPath="frame/tools/announce/js/announceEv.js"/>
<script type="text/javascript">
var ggannounceid = '0';
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.announce.AnnounceMgr
		});
 </script>
<title>公告管理</title>
</head>
<body>
<div id="announceMgr"></div>
</body>
</html>
