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
<title>计划管理</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component');
</script>

<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="pub/common/storageCombo.js" />
<js:load scriptPath="pub/common/storagePosCombo.js" />
<js:load scriptPath="pub/common/componentteamCombo.js" />
<js:load scriptPath="produce/component/plan/js/manageUi.js"/>
<js:load scriptPath="produce/component/plan/js/manageEv.js"/>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var listid = Ext.id();
  
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.PlanMgr
		});
 </script>
 
 <style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
</head>
<body>
<div id="componentplanmgr"></div>
</body>
</html>