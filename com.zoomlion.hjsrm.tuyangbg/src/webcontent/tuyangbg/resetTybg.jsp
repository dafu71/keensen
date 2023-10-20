<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="java.net.URLEncoder"%>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
	//工作项id
	String workitemid = request.getParameter("workitemid");	
	//流程id
	String processinstid = request.getParameter("processinstid");	
	//listId
	String listId = request.getParameter("listId");		
	String dataorgid=(String)userObject.getAttributes().get("dataorgid");
	Long operatorid=(Long)userObject.getAttributes().get("operatorid");  
    String operatorname=(String)userObject.getAttributes().get("operatorname");
    String operator=URLEncoder.encode(operatorname,"UTF-8");  
 %>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-5-18 10:00:55
  - Description:
-->
<head>
<ext:dict property="TECH_PRODUCT_TYPE"  dictTypeId="TECH_PRODUCT_TYPE" />
<ext:dict property="TECH_NOTICES_LEVEL"  dictTypeId="TECH_NOTICES_LEVEL" />
<ext:dict property="TECH_NOTICES_TYPE"  dictTypeId="TECH_NOTICES_TYPE" />
<ext:dict property="TECH_NOTICES_DEPTS"  dictTypeId="TECH_NOTICES_DEPTS" />
<title>技术通知流程发布</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.tuyangbg');
 </script>
 <js:load scriptPath="pub/common/selectParticipantsWin3.js"/>
<js:load scriptPath="tuyangbg/tuyangbg/js/resetTybgUi.js"/>
<js:load scriptPath="tuyangbg/tuyangbg/js/resetTybgEv.js"/>
 
<script type="text/javascript">
	var processinstid = <%=processinstid %>;
	var workitemid = <%=workitemid %>;
	var listId = "<%=listId %>";	
	var dataorgid = "<%=dataorgid%>";
    var operatorid = "<%=operatorid%>";
    var operator = "<%=operator%>";
   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.tuyangbg.ResetTybgMgr
		});

 </script>
</head>
<body>
<div id="addtybgMgr"></div>
</body>
</html>