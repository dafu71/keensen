<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%
	com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  	String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  	Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  	String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  	String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
    String uid = userObject.getUserId();
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>工时录入</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.research.project');
	
	
</script>

<js:load scriptPath="produce/research/project/clockin/js/manageUi.js"/>
<js:load scriptPath="produce/research/project/clockin/js/manageEv.js"/>

 <style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
<script type="text/javascript">

  
  
  var uid = "<%=uid %>";
  var listid = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.research.project.ProjectClockinMgr
		});
		
 // 格式化日期
function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}
 </script>
 
 
</head>
<body>
<div id="projectclockinmgr"></div>
</body>
</html>