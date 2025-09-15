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
<title>返厂元件登记</title>

<!-- 导出Excel -->
<script src="base/babel-polyfill/6.26.0/polyfill.js"></script>
<script src="base/exceljs/4.2.1/exceljs.min.js"></script>
<script src="base/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}

</style>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component');
</script>

<js:load scriptPath="produce/component/prodrecord/js/manageUi.js"/>
<js:load scriptPath="produce/component/prodrecord/js/manageEv.js"/>
<script type="text/javascript">
  var uid = "<%=uid %>";
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.ProdRecordMgr
		});
 </script>
</head>
<body>
<div id="prodrecordmgr"></div>

<div style="display: none">
	<form name="printForm" id="prodrecordprintForm" action="" target="_blank" method="post" accept-charset="UTF-8">
		<input type="hidden" name="ids"/>			
	</form>
</div>
</body>
</html>