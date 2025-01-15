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
<title>常规物料</title>

<!-- 导出Excel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.2.1/exceljs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>


<script type="text/javascript">
	BIZ.ns('com.keensen.ump.base');
</script>
<ext:dict property="PARA_MATER_SPEC_STATE"   dictTypeId="PARA_MATER_SPEC_STATE" />
<js:load scriptPath="pub/common/measurementUnitCombo.js"/>
<js:load scriptPath="base/mater/js/materSingleLoader.js"/>
<js:load scriptPath="base/mater/js/materIndexTree.js"/>
<js:load scriptPath="base/mater/js/manageUi.js"/>
<js:load scriptPath="base/mater/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<script type="text/javascript">
  var uid = "<%=uid %>";
  var materClassId = '';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.base.materClassSpecMgr
		});
 </script>
</head>
<body>
<div id="materclassspecmgr"></div>
</body>
</html>