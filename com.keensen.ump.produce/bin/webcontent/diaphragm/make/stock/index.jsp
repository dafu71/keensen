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
  	boolean workerflag = roleId.indexOf("10001161")>-1;
    String uid = userObject.getUserId();
    String userOrgId = userObject.getUserOrgId();
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>底膜库存管理</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.diaphragm.make');
</script>

<ext:dict property="KS_DIMO_TYPE"   dictTypeId="KS_DIMO_TYPE" />
<ext:dict property="KS_ZM_LINE"   dictTypeId="KS_ZM_LINE" />

<js:load scriptPath="pub/common/teamCombo.js" />
<js:load scriptPath="pub/common/supCombo.js" />
<js:load scriptPath="produce/diaphragm/make/stock/js/manageUi.js"/>
<js:load scriptPath="produce/diaphragm/make/stock/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<script type="text/javascript">
  var uid = "<%=uid %>";
  
  <% if(workerflag){ %>
  var teamId = "<%=userOrgId %>";
  <% }else{ %>
  var teamId = '';
  <% } %>

  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.diaphragm.make.stockMgr
		});
 </script>
</head>
<body>
<div id="makestockmgr"></div>
</body>
</html>