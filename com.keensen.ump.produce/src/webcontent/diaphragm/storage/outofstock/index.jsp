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
<title>膜片出库</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.diaphragm.storage');
</script>
<ext:dict property="OUTOFSTOCK_TYPE"   dictTypeId="OUTOFSTOCK_TYPE" />
<ext:dict property="STORAGE_TYPE"   dictTypeId="STORAGE_TYPE" />
<js:load scriptPath="pub/common/storageCombo.js" />
<js:load scriptPath="pub/common/customerCombo.js" />
<js:load scriptPath="produce/diaphragm/storage/outofstock/js/manageUi.js"/>
<js:load scriptPath="produce/diaphragm/storage/outofstock/js/manageEv.js"/>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var listid = 'outofstock-list';
  var currentWindow ='';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.diaphragm.storage.OutofstockMgr
		});
 </script>
</head>
<body>
<div id="outofstockmgr"></div>
</body>
</html>