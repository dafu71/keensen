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

<title>膜片事业部意见</title>
<script type="text/javascript">

BIZ.ns('com.keensen.ump.produce.quality');
 </script>
<ext:dict property="ABF_YESORNO"   dictTypeId="ABF_YESORNO" />
<ext:dict property="KS_QUALITY_JUDGE_ITEM"   dictTypeId="KS_QUALITY_JUDGE_ITEM" />
<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="produce/quality/concession/third/js/manageUi.js"/>
<js:load scriptPath="produce/quality/concession/third/js/manageEv.js"/>

<script type="text/javascript">
	var processinstid = <%=processinstid %>;
	var operatorname = "<%=operatorname%>";
	var workitemid = <%=workitemid %>;
	var listId = "<%=listId %>";
	var noticeId = Ext.id();	
	var actionsPersonId= Ext.id();
   FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.quality.concessionThirdMgr
		});

 </script>
</head>
<body>
<div id="concessionthirdmgr"></div>
</body>
</html>