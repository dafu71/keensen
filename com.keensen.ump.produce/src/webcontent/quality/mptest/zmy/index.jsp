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
<title>铸膜液浓度</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.quality.mptest');
</script>
<js:load scriptPath="pub/common/operatorroleCombo.js"/>
<js:load scriptPath="produce/quality/mptest/zmy/js/manageUi.js"/>
<js:load scriptPath="produce/quality/mptest/zmy/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<script type="text/javascript">
  var uid = "<%=uid %>";
  var opt = '';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.quality.mptest.zmyMgr
		});
 </script>
</head>
<body>
<div id="mptestzmymgr"></div>
</body>
</html>