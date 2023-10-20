<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>

<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-12-30 16:22:24
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
	//工作项id
	String description = request.getParameter("description");
	//流程id
	String processinstid = request.getParameter("processinstid");
	
	//待阅读listId
	String listId = request.getParameter("listId");	
	//已阅读listId
	String listId2 = request.getParameter("listId2");
	//readPkid
	String readPkid = request.getParameter("readPkid");		
%>
<head>
<title>阅读处理</title>
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";

var processinstid = "<%=processinstid %>";
var description = "<%=description %>";

var readPkid = <%=readPkid %>;

var listId = "<%=listId %>";
var listId2 = "<%=listId2 %>";
BIZ.ns('com.zoomlion.hjsrm.srmclient');

 </script>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js" />
<js:load scriptPath="srmclient/read/js/readDealMgrUi.js" />
<js:load scriptPath="srmclient/read/js/readDealMgrEv.js" />
<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.srmclient.ReadDealMgr
		});
 </script>
</head>
<body>
<div id="readdealMgr"></div>
</body>
</html>
