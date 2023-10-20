
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
<title>图样变更流程采购室处理</title>
<ext:dict property="TECH_PRODUCT_TYPE"  dictTypeId="TECH_PRODUCT_TYPE" />
<ext:dict property="TECH_NOTICES_LEVEL"  dictTypeId="TECH_NOTICES_LEVEL" />
<ext:dict property="TECH_NOTICES_TYPE"  dictTypeId="TECH_NOTICES_TYPE" />
<ext:dict property="TECH_NOTICES_DEPTS"  dictTypeId="TECH_NOTICES_DEPTS" />
<ext:dict property="TECH_NOTICES_ACTION"  dictTypeId="TECH_NOTICES_ACTION" />
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.tuyangbg');
var operatorname = "<%=operatorname%>";

//默认供应商处理角色
var CURRENTROLECODE = '00041';
var CURRENTROLEID = '21';

//归档角色
var CURRENTROLEID2 = '461';
var CURRENTROLECODE2 = '00601';
 </script>
<js:load scriptPath="tuyangbg/purchase1Notice/js/purchaseUi.js"/>
<js:load scriptPath="tuyangbg/purchase1Notice/js/purchaseEv.js"/>
 
<script type="text/javascript">
	var processinstid = <%=processinstid %>;
	var workitemid = <%=workitemid %>;
	var listId = "<%=listId %>";
	var tybgId = Ext.id();	
	var actionsPersonId= Ext.id();
   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.tuyangbg.Purchase1Mgr
		});

 </script>
</head>
<body>
<div id="purchase1Mgr"></div>
</body>
</html>