<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>

<%
	//工作项id
	String workitemid = request.getParameter("workitemid");	
	//actionurl
	String actionurl = request.getParameter("actionurl");	
	//listId
	String listId = request.getParameter("listId");	
 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-11-24 10:58:27
  - Description:
-->
<head>
<title>test</title>
<script type="text/javascript">
function postWorkflow(){

	var lid = Ext.getCmp('<%=listId %>');
	if(lid){//重新加载待办任务列表
		lid.store.reload();
	}

	var tabId = "workitem-" + <%=workitemid %>;
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {//关闭标签页
		if (item.id == ('menu'+ tabId)) {
			spac.remove(item);
			return;
		}
	});
}

</script>
</head>
<body>
<div>
<input type="button" value="提交后关闭" onclick="javascript:postWorkflow();">

</div>
</body>
</html>