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
<title>涂膜物料报表</title>


<!-- 导出Excel -->
<script src="base/exceljs/polyfill.js"></script>
<script src="base/exceljs/exceljs.min.js"></script>
<script src="base/exceljs/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.report.diaghragm');
</script>

<js:load scriptPath="pub/common/lineCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />

<js:load scriptPath="produce/report/diaghragm/mater/js/mainUi.js"/>
<js:load scriptPath="produce/report/diaghragm/mater/js/mainEv.js"/>
<js:load scriptPath="produce/report/diaghragm/mater/js/pvaUi.js"/>
<js:load scriptPath="produce/report/diaghragm/mater/js/pvaEv.js"/>

<js:load scriptPath="produce/report/diaghragm/mater/js/waterUi.js"/>
<js:load scriptPath="produce/report/diaghragm/mater/js/waterEv.js"/>

<js:load scriptPath="produce/report/diaghragm/mater/js/oilUi.js"/>
<js:load scriptPath="produce/report/diaghragm/mater/js/oilEv.js"/>

<js:load scriptPath="produce/report/diaghragm/mater/js/zmyUi.js"/>
<js:load scriptPath="produce/report/diaghragm/mater/js/zmyEv.js"/>

<js:load scriptPath="produce/report/diaghragm/mater/js/manageUi.js"/>
<js:load scriptPath="produce/report/diaghragm/mater/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>



<script type="text/javascript">

function strToFloat(v) {
	return Ext.isEmpty(v) ? 0 : parseFloat(v)
}

function dayDiff(start, end) {
	var datediff = (new Date(end)) - (new Date(start));
	datediff = datediff / 24 / 60 / 60 / 1000;
	return datediff;

}

function getCurrentDate(t) {
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	month = month < 10 ? '0' + month : month;;
	return t == 'y' ? year : year + '-' + month
}

function roundToDecimalPlace(number, decimalPlaces) {
	if(Ext.isEmpty(number) || Number.isNaN(number)) number = 0;
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}

  var uid = "<%=uid %>";
  
  <% if(workerflag){ %>
  var teamId = "<%=userOrgId %>";
  <% }else{ %>
  var teamId = '';
  <% } %>

  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.report.diaghragm.MaterMgr
		});
		
		
 </script>
</head>
<body>
<div id="diaghragmreportmatermgr"></div>
</body>
</html>