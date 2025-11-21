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
<title>PDA入库</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.diaphragm.zmx.pda');
</script>

<js:load scriptPath="produce/diaphragm/make/pda/warehousing/js/manageUi.js"/>
<js:load scriptPath="produce/diaphragm/make/pda/warehousing/js/manageEv.js"/>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var listid = Ext.id();
  var currentWindow ='';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.diaphragm.zmx.pda.WarehousingMgr
		});
 </script>
</head>
<body>
<div id="zmxpdawarehousingmgr"></div>
</body>
</html>