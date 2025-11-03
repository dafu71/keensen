<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);

	String dataorgid = (String) userObject.getAttributes().get(
			"dataorgid");
	Long operatorid = (Long) userObject.getAttributes().get(
			"operatorid");
	String operatorname = URLEncoder.encode((String) userObject
			.getAttributes().get("operatorname"), "UTF-8");
	String roleId = (String) userObject.getAttributes().get(
			"roles_rolecode_str");
	boolean workerflag = roleId.indexOf("10001161") > -1;
	String uid = userObject.getUserId();
	String userOrgId = userObject.getUserOrgId();

	int modifyLimit = 0;
	//李长林 梁彪  王正娥 蒋滔
	if (uid.equals("dafu") || uid.equals("KS00524")
			|| uid.equals("KS00141") || uid.equals("KS00388") || uid.equals("KS00420")) {
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
<title>计件岗位产量报表</title>

<!-- 导出Excel -->

<!-- 导出Excel -->
<script src="base/exceljs/polyfill.js"></script>
<script src="base/exceljs/exceljs.min.js"></script>
<script src="base/exceljs/FileSaver.min.js"></script>
<script src="base/exceljs/FileSaver.min.js"></script>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.report.component');
</script>



<js:load scriptPath="produce/report/component/piecework/js/cdmUi.js" />
<js:load scriptPath="produce/report/component/piecework/js/cdmEv.js" />

<js:load scriptPath="produce/report/component/piecework/js/jmUi.js" />
<js:load scriptPath="produce/report/component/piecework/js/jmEv.js" />

<js:load scriptPath="produce/report/component/piecework/js/qjUi.js" />
<js:load scriptPath="produce/report/component/piecework/js/qjEv.js" />

<js:load scriptPath="produce/report/component/piecework/js/rsUi.js" />
<js:load scriptPath="produce/report/component/piecework/js/rsEv.js" />

<js:load scriptPath="produce/report/component/piecework/js/hhjmUi.js" />
<js:load scriptPath="produce/report/component/piecework/js/hhjmEv.js" />

<js:load scriptPath="produce/report/component/piecework/js/manageUi.js" />
<js:load scriptPath="produce/report/component/piecework/js/manageEv.js" />

<js:load scriptPath="produce/report/component/piecework/js/trimUi.js" />
<js:load scriptPath="produce/report/component/piecework/js/trimEv.js" />

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>



<script type="text/javascript">

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
  
  var modifyLimit  = <%=modifyLimit  %>;
  
  var quantityTotalId4cdm = Ext.id();
  var quantityTotalId2 = Ext.id();
  var quantityTotalId3 = Ext.id();
  var quantityTotalId4 = Ext.id();
  var quantityTotalId5 = Ext.id();
  
  var quantityTotalId6 = Ext.id();
  
  <% if(workerflag){ %>
  var teamId = "<%=userOrgId %>";
  <% }else{ %>
  var teamId = '';
  <% } %>

  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.report.component.PieceworkMgr
		});
		
		
 </script>
</head>
<body>
<div id="pieceworkmgr"></div>
</body>
</html>
