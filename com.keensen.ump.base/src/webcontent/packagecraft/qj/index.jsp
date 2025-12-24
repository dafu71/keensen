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
    
    int exportLimit = 0;
    int modifyLimit = 0;
    
    if(roleId.indexOf("10001481")>-1){
    	exportLimit = 1;
    }
    
    if(roleId.indexOf("10001901")>-1){
    	modifyLimit = 1;
    }
    
    
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>气检标准包</title>

<!-- 导出Excel -->
<script src="base/exceljs/polyfill.js"></script>
<script src="base/exceljs/exceljs.min.js"></script>
<script src="base/exceljs/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}

</style>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.base');
</script>

<ext:dict property="PARA_MATER_SPEC_STATE"
	dictTypeId="PARA_MATER_SPEC_STATE" />

<js:load scriptPath="base/packagecraft/qj/js/manageUi.js"/>
<js:load scriptPath="base/packagecraft/qj/js/manageEv.js"/>
<script type="text/javascript">
  var uid = "<%=uid %>";
  
  var exportLimit = "<%=exportLimit %>";
  var modifyLimit = "<%=modifyLimit %>";
 
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.base.QjCraftspackageMgr
		});
 </script>
</head>
<body>
<div id="qjcraftspackagemgr"></div>
</body>
</html>