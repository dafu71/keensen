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
  String lifnr = (String) userObject.getAttributes().get("lifnr");
  String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
  String uid = userObject.getUserId();
  String exportflag="0";
  String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
  if(roleId.toString().indexOf("00681")!=-1 || uid.equals("sysadmin")){
		exportflag="1";
  }	
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2018-10-16 09:12:08
  - Description:
-->
<head>
<title>采购申请查询</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.purchase');
</script>
<js:load scriptPath="pub/common/factoryCombo.js"/>
<js:load scriptPath="pub/common/ekorgCombo.js"/>
<js:load scriptPath="pub/common/ekgrpCombo.js"/>
<js:load scriptPath="purchase/queryapply/js/queryapplyUi.js"/>
<js:load scriptPath="purchase/queryapply/js/queryapplyEv.js"/>

<script type="text/javascript">
  var lifnr = "<%=lifnr %>";
  var uid = "<%=uid %>";
  var exportflag = "<%=exportflag %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.purchase.QueryapplyMgr
		});
 </script>
 
</head>
<body>
<div id="queryapplymgr"></div>
</body>
</html>