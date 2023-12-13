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
<title>元件不良记录</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.quality');
</script>
<ext:dict property="KS_COMPONENT_TYPE"   dictTypeId="KS_COMPONENT_TYPE" />
<ext:dict property="KS_INVALID_DEAL_METHOD"   dictTypeId="KS_INVALID_DEAL_METHOD" />
<ext:dict property="KS_INDUSTRY_INVALID_TYPE"   dictTypeId="KS_INDUSTRY_INVALID_TYPE" />
<ext:dict property="KS_CIVIL_INVALID_TYPE"   dictTypeId="KS_CIVIL_INVALID_TYPE" />
<ext:dict property="ABF_YESORNO"   dictTypeId="ABF_YESORNO" />
<js:load scriptPath="pub/common/prodspecCombo.js" />
<js:load scriptPath="produce/quality/poor/js/manageUi.js"/>
<js:load scriptPath="produce/quality/poor/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}

</style>

<script type="text/javascript">
  var uid = "<%=uid %>";
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.quality.poorMgr
		});
 </script>
</head>
<body>
<div id="poormgr"></div>
</body>
</html>