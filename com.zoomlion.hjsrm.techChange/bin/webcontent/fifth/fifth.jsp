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
<title>工艺核查</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.techChange');
</script>

<js:load scriptPath="techChange/fifth/js/fifthUi.js" />
<js:load scriptPath="techChange/fifth/js/fifthEv.js" />

<script type="text/javascript">
	var techId = "0";
	var processinstid = "<%=processinstid %>"; 
	var workitemid = <%=workitemid %>;
	var listId = "<%=listId %>"; 
	
	var techChangeFifth ={
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
					processinstid : techChangeFifth.processinstid
				},
				url : 'com.zoomlion.hjsrm.techChange.techChange.getTechId.biz.ext',
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						techChangeFifth.techId = result.ret;
						FunctionMgr.load({ 
							mainfn:com.zoomlion.hjsrm.techChange.Fifth
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
<div id="techChangeFifth"></div>
</body>
</html>