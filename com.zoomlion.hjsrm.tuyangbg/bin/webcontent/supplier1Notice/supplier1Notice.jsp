
<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
	com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
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
  - Author(s): wangfuqiang
  - Date: 2014-12-15 10:00:55
  - Description:
-->
<head>
<title>图样变更流程供应商处理</title>
<ext:dict property="TECH_PRODUCT_TYPE"  dictTypeId="TECH_PRODUCT_TYPE" />
<ext:dict property="TECH_NOTICES_LEVEL"  dictTypeId="TECH_NOTICES_LEVEL" />
<ext:dict property="TECH_NOTICES_TYPE"  dictTypeId="TECH_NOTICES_TYPE" />
<ext:dict property="TECH_NOTICES_DEPTS"  dictTypeId="TECH_NOTICES_DEPTS" />
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.tuyangbg');
var operatorname = "<%=operatorname%>";
 </script>
 <js:load scriptPath="tuyangbg/supplier1Notice/js/supplier1Ui.js"/>
<js:load scriptPath="tuyangbg/supplier1Notice/js/supplier1Ev.js"/>
 
<script type="text/javascript">
	var processinstid = <%=processinstid %>;
	var workitemid = <%=workitemid %>;
	var listId = "<%=listId %>";
	var tybgId = Ext.id();	
	var actionsPersonId= Ext.id();
	
   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.tuyangbg.Supplier1Mgr
		});

 </script>
</head>
<body>
<div id="supplier1Mgr"></div>
</body>
</html>