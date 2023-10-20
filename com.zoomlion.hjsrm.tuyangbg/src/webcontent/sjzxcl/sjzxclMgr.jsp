<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  String userId=(String)userObject.getUserId();
  String userName=(String)userObject.getUserName();
  String userOrgId=(String)userObject.getUserOrgId();
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
	//工作项id
	String workitemid = request.getParameter("workitemid");	
	//流程id
	String processinstid = request.getParameter("processinstid");	
	//listId
	String listId = request.getParameter("listId");	
	String operatorname=(String)userObject.getAttributes().get("operatorname");
 %>
<html>
<!-- 
  - Author(s): 刘鑫
  - Date: 2014-12-24 15:49:55
  - Description:
-->
<head>
<title>数据中心处理</title>
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var userId = "<%=userId%>";
var userName = "<%=userName%>";
var userOrgId = "<%=userOrgId%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
BIZ.ns('com.zoomlion.hjsrm.tuyangbg');
 </script>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js"/>
<js:load scriptPath="tuyangbg/sjzxcl/js/sjzxclUi.js"/>
<js:load scriptPath="tuyangbg/sjzxcl/js/sjzxclEv.js"/>
 
<script type="text/javascript">
	var processinstid = <%=processinstid %>;
	var workitemid = <%=workitemid %>;
	var listId = "<%=listId %>";
	var tybgId = Ext.id();	
	var actionsPersonId= Ext.id();
   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.tuyangbg.SjzxclMgr
		});

 </script>
</head>
<body>
<div id="sjzxclMgr"></div>
</body>
</html>