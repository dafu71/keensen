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
  	boolean applyflag = roleId.indexOf("10001182")>-1;
  	boolean followflag = roleId.indexOf("10001201")>-1;
    String uid = userObject.getUserId();
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>5why分析报告</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.report.quality');
</script>
<ext:dict property="KS_HAPPEN_PLACE"   dictTypeId="KS_HAPPEN_PLACE" />
<ext:dict property="KS_PRODUCT_CLASSIFY"   dictTypeId="KS_PRODUCT_CLASSIFY" />
<ext:dict property="KS_POOR_CLASSIFY"   dictTypeId="KS_POOR_CLASSIFY" />
<js:load scriptPath="produce/report/quality/fivewhy/js/manageUi.js"/>
<js:load scriptPath="produce/report/quality/fivewhy/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<script type="text/javascript">
  var uid = "<%=uid %>";
  var applyflag = "<%=applyflag %>";
  var followflag = "<%=followflag %>";
  var fivewhyEdit = Ext.id();
  var fivewhyInput = Ext.id();
  var fivewhyPicture = Ext.id();
  var fivewhyPoorUrl = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.report.quality.FivewhyMgr
		});
 </script>
</head>
<body>
<div id="fivewhymgr"></div>
</body>
</html>