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
    
    String rootUrl = request.getRequestURL().toString();
  	rootUrl = rootUrl.replace("produce/component/linecheck/household/index.jsp","");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>家用膜判定</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component.linecheck');
</script>
<ext:dict property="KS_PROD_STORAGE" dictTypeId="KS_PROD_STORAGE" />
<js:load scriptPath="produce/component/linecheck/household/js/manageUi.js"/>
<js:load scriptPath="produce/component/linecheck/household/js/manageEv.js"/>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var markRootUrl = "<%=rootUrl %>";
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.linecheck.HouseholdMgr
		});
 </script>
</head>
<body>
<div id="linecheckhouseholdmgr"></div>
</body>
</html>