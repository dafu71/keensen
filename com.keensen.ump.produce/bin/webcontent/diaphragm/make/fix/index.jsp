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
    String userName = userObject.getUserName();
    //10001221膜片生产管理员
    int modifyFlag = roleId.indexOf("10001221")>-1?1:0;
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>铸膜混料记录管理</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.diaphragm.make');
</script>

<%--<js:load scriptPath="pub/common/mpworkerCombo2.js" />--%>
<js:load scriptPath="produce/diaphragm/make/fix/js/manageUi.js"/>
<js:load scriptPath="produce/diaphragm/make/fix/js/manageEv.js"/>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var uname = "<%=userName %>";
  var modifyFlag = <%=modifyFlag %>;
  var opt = '';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.diaphragm.make.FixMgr
		});
 </script>
</head>
<body>
<div id="makefixmgr"></div>
</body>
</html>