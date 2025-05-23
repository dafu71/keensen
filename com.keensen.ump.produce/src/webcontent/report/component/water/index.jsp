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
<title>水测统计</title>

<!-- 导出Excel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.2.1/exceljs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.report.component');
</script>



<js:load scriptPath="produce/report/component/water/js/dayUi.js"/>
<js:load scriptPath="produce/report/component/water/js/dayEv.js"/>
<js:load scriptPath="produce/report/component/water/js/monthUi.js"/>
<js:load scriptPath="produce/report/component/water/js/monthEv.js"/>
<js:load scriptPath="produce/report/component/water/js/yearUi.js"/>
<js:load scriptPath="produce/report/component/water/js/yearEv.js"/>
<js:load scriptPath="produce/report/component/water/js/detailUi.js"/>
<js:load scriptPath="produce/report/component/water/js/detailEv.js"/>
<js:load scriptPath="produce/report/component/water/js/manageUi.js"/>
<js:load scriptPath="produce/report/component/water/js/manageEv.js"/>

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

  var uid = "<%=uid %>";
  
  <% if(workerflag){ %>
  var teamId = "<%=userOrgId %>";
  <% }else{ %>
  var teamId = '';
  <% } %>

  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.report.component.WaterMgr
		});
		
		
 </script>
</head>
<body>
<div id="componentreportwatermgr"></div>
</body>
</html>