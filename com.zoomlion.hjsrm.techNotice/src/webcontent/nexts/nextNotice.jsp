
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
<title>技术通知流程归档下发</title>
<ext:dict property="TECH_PRODUCT_TYPE"  dictTypeId="TECH_PRODUCT_TYPE" />
<ext:dict property="TECH_NOTICES_LEVEL"  dictTypeId="TECH_NOTICES_LEVEL" />
<ext:dict property="TECH_NOTICES_TYPE"  dictTypeId="TECH_NOTICES_TYPE" />
<ext:dict property="TECH_NOTICES_DEPTS"  dictTypeId="TECH_NOTICES_DEPTS" />
<ext:dict property="TECH_NOTICES_ITEES"  dictTypeId="TECH_NOTICES_ITEES" />

<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.techNotice');
var operatorname = "<%=operatorname%>";

//默认采购反馈角色
var CURRENTROLECODE = '00521';
var CURRENTROLEID = '401';
 </script>
 <js:load scriptPath="pub/common/selectParticipantsWin.js"/>
 <js:load scriptPath="techNotice/nexts/js/nextsUi.js"/>
<js:load scriptPath="techNotice/nexts/js/nextsEv.js"/>
 
<script type="text/javascript">
	var processinstid = <%=processinstid %>;
	var workitemid = <%=workitemid %>;
	var listId = "<%=listId %>";
	var noticeId = Ext.id();	
	var actionsPersonId= Ext.id();
	
   FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.techNotice.NextsMgr
		});

 </script>
</head>
<body>
<div id="nextsMgr"></div>
</body>
</html>