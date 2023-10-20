<%@page pageEncoding="UTF-8"%>

<%@include file="/frame/ui/page/include.jsp"%>


<%
	//工作项id
	String workitemid = request.getParameter("workitemid");	
	//流程id
	String processinstid = request.getParameter("processinstid");	
	//listId
	String listId = request.getParameter("listId");	
	//System.out.println("processinstid=" + processinstid);
 %>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2016-07-11 15:18:12
  - Description:
-->
<head>
<title>研发审核</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.techChange');
</script>

<js:load scriptPath="techChange/second/js/secondUi.js" />
<js:load scriptPath="techChange/second/js/secondEv.js" />

<script type="text/javascript">
	
	var techChangeSecond = {
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
					processinstid : techChangeSecond.processinstid
				},
				url : 'com.zoomlion.hjsrm.techChange.techChange.getTechId.biz.ext',
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						techChangeSecond.techId = result.ret;
						FunctionMgr.load({ 
							mainfn:com.zoomlion.hjsrm.techChange.Second
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
<div id="techChangeSecond"></div>
</body>
</html>