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
<title>焊网记录</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component.produce');
</script>

<script type="text/javascript">
	function dayDiff(start,end){
		var datediff = (new Date(end)) - (new Date(start));
		datediff = datediff / 24 / 60 / 60 / 1000;
		return datediff;
		
	}
</script>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<js:load scriptPath="produce/component/produce/welded/js/manageUi.js"/>
<js:load scriptPath="produce/component/produce/welded/js/manageEv.js"/>
<script type="text/javascript">

function getCurrentWeekNumber() {
  var now = new Date();
  var startOfYear = new Date(now.getFullYear(), 0, 1);
  var startOfWeek = new Date(startOfYear.setDate(startOfYear.getDate() - startOfYear.getDay() + 1));
  var daysSinceStartOfWeek = Math.ceil((now - startOfWeek + 1) / (24 * 60 * 60 * 1000));
  var currentWeekNumber = Math.ceil(daysSinceStartOfWeek / 7);
  return currentWeekNumber;
}

function formatStr(str){
	return ((Ext.isEmpty(str)) || ('null' == str)) ? '':str;
}
  var mylistid = Ext.id();
  var uid = "<%=uid %>";
  var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var opt = '';



  var listid = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.produce.WeldedMgr
		});
 </script>
</head>
<body>
<div id="componentproduceweldedmgr"></div>


<div style="display: none">
<form name="weldedprintsForm" id="weldedprintsForm" action="" target="_blank" method="post" accept-charset="UTF-8">
			<input type="hidden" name="ids"/>			
</form>
</div>
</body>
</html>