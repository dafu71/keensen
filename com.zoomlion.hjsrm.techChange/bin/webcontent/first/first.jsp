<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>

<%
	//工作项id
	String workitemid = request.getParameter("workitemid");	
	//流程id
	String processinstid = request.getParameter("processinstid");	
	//listId
	String listId = request.getParameter("listId");	
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2016-07-11 08:56:21
  - Description:
-->
<head>
<meta http-equiv="Content-Type" contentType="text/html; charset=UTF-8"%>
<title>修改问题流程</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.techChange');
</script>
<js:load scriptPath="pub/common/selectParticipantsWin.js" />
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js" />
<js:load scriptPath="pub/common/tree/pLoader.js" />
<js:load scriptPath="pub/common/tree/pTree.js" />
<js:load scriptPath="pub/common/productnoCombo.js" />
<js:load scriptPath="techChange/first/js/firstUi.js" />
<js:load scriptPath="techChange/first/js/firstEv.js" />

<script type="text/javascript">
	var techId = "0";
	var processinstid = <%=processinstid %>; 
	
	var techChangeFirst = {
		processinstid : <%=processinstid %>, 
		workitemid : <%=workitemid %>,
		techId : 0,
		listId : "<%=listId %>"
	}
	
	
	//查询业务流水
	Ext.Ajax.request({
				method : "post",
				scope : this,
				jsonData:{
					processinstid : techChangeFirst.processinstid
				},
				url : 'com.zoomlion.hjsrm.techChange.techChange.getTechId.biz.ext',
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						techChangeFirst.techId = result.ret;
						FunctionMgr.load({ 
							mainfn:com.zoomlion.hjsrm.techChange.First
						});						
						
					}
				},
				failure : function(resp, opts) {
					Ext.Msg.alert("系统提示", "系统错误,加载失败", function() {
						
							});

				}
			});

	
</script>
</head>
<body>
<div id="techChangeFirst"></div>
</body>
</html>
