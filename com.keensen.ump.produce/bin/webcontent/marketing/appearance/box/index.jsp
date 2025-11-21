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
  	rootUrl = rootUrl.replace("/produce/marketing/appearance/box/index.jsp","");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>包装箱订制</title>

<!-- 导出Excel -->
<script src="base/exceljs/polyfill.js"></script>
<script src="base/exceljs/exceljs.min.js"></script>
<script src="base/exceljs/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.marketing');
</script>

<js:load scriptPath="produce/marketing/appearance/box/js/manageUi.js"/>
<js:load scriptPath="produce/marketing/appearance/box/js/manageEv.js"/>
<script type="text/javascript">
  var markRootUrl = "<%=rootUrl %>";
 
  var uid = "<%=uid %>";
  var listid = Ext.id();
  var marktemplateupload = Ext.id();
  
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.marketing.BoxMgr
		});
 </script>
 
 <style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
</head>
<body>
<div id="marketingboxmgr"></div>


	
</body>
</html>