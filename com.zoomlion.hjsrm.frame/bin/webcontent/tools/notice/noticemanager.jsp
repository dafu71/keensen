<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%--邮件收发
    author 刘鑫
    修改时间 14-11-26
--%>
<html>
<head>
<ext:dict property="AT_NOTICEINFOREADSTATUS" dictTypeId="AT_NOTICEINFOREADSTATUS"/>
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
var lajilistPanel = Ext.id();
var recvuselistPanel = Ext.id();
var sendlistPanel = Ext.id();
  BIZ.ns('com.zoomlion.hjsrm.notice');
  </script>
  <js:load scriptPath="frame/tools/notice/js/noticeUi.js"/>
  <js:load scriptPath="frame/tools/notice/js/noticeEv.js"/>
  <js:load scriptPath="frame/tools/notice/js/recvuse/recvuseUi.js"/>
  <js:load scriptPath="frame/tools/notice/js/recvuse/recvuseEv.js"/>
   <js:load scriptPath="frame/tools/notice/js/send/sendUi.js"/> 
  <js:load scriptPath="frame/tools/notice/js/send/sendEv.js"/>
    <js:load scriptPath="frame/tools/notice/js/laji/lajiUi.js"/> 
  <js:load scriptPath="frame/tools/notice/js/laji/lajiEv.js"/>
  <js:load scriptPath="pub/common/selectParticipantsWin2.js"/>
<script type="text/javascript">
var ggnoticeid = '0';
  FunctionMgr.load({
		mainfn: com.zoomlion.hjsrm.notice.NoticeMgr
	});
 </script>
<title>我的邮件</title>

</head>
<body>
<div id="noticeMgr"></div>
</body>
</html>
