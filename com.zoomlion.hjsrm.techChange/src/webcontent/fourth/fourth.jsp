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
  - Date: 2016-07-12 10:33:23
  - Description:
-->
<head>
<title>研发修改</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.techChange');
</script>

<js:load scriptPath="techChange/fourth/js/fourthUi.js" />
<js:load scriptPath="techChange/fourth/js/fourthEv.js" />

<script type="text/javascript">
	
	var techChangeFourth = {
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
					processinstid : techChangeFourth.processinstid
				},
				url : 'com.zoomlion.hjsrm.techChange.techChange.getTechId.biz.ext',
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						techChangeFourth.techId = result.ret;
						FunctionMgr.load({ 
							mainfn:com.zoomlion.hjsrm.techChange.Fourth
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
<div id="techChangeFourth"></div>
</body>
</html>