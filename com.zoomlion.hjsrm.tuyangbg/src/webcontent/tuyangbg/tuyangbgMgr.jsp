<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  String userId=(String)userObject.getUserId();
  String userName=(String)userObject.getUserName();
   String userOrgName=(String)userObject.getUserOrgName();   
  userOrgName=userOrgName==null?"中联重科环境产业公司":userOrgName;  
  String userOrgId=(String)userObject.getUserOrgId();
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");

%>
<ext:dict property="TYBG_PROCESS_STATUS"  dictTypeId="TYBG_PROCESS_STATUS" />
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var userId = "<%=userId%>";
var userName = "<%=userName%>";
var userOrgId = "<%=userOrgId%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var userOrgName = "<%=userOrgName%>";
BIZ.ns('com.zoomlion.hjsrm.tuyangbg');
 </script>
 <script type="text/javascript" src="srmclient/common/commonFunc.js"></script>
 <js:load scriptPath="pub/common/selectParticipantsWin3.js"/>
<js:load scriptPath="tuyangbg/tuyangbg/js/tybgUi.js"/>
<js:load scriptPath="tuyangbg/tuyangbg/js/tybgEv.js"/>
<script type="text/javascript">
var listId = Ext.id();
  var tybgId = Ext.id();	
  var attachId = Ext.id();
  var personNameId=Ext.id();
  var deptNameId=Ext.id();
  var techDate=Ext.id();
  var str;
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.tuyangbg.TuyangbgMgr
		});
 </script> 
<title>图样变更通知单</title>
</head>
<body>
<div id="tuyangbgMgr"></div>
</body>
</html>