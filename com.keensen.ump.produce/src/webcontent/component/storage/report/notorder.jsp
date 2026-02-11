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
  	//String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
    String uid = userObject.getUserId();
     String exportflag="0";
  String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
  if(roleId.toString().indexOf("10001381")!=-1 || uid.equals("sysadmin")){
		exportflag="1";
  }	
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>非订单仓元件库存报表</title>

<!-- 导出Excel -->
<script src="base/babel-polyfill/6.26.0/polyfill.js"></script>
<script src="base/exceljs/4.2.1/exceljs.min.js"></script>
<script src="base/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>


<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component.storage');
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

<js:load scriptPath="produce/component/storage/report/js/notorderUi.js" />
<js:load scriptPath="produce/component/storage/report/js/notorderEv.js" />
<script type="text/javascript">
  var uid = "<%=uid %>";
  var listid = Ext.id();
  var listid3 = Ext.id();
  
  var stockAmountTotalId = Ext.id();
  
  var exportflag = "<%=exportflag %>";
  
  var opt = '';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.storage.Report4NotOrderMgr
		});
 </script>
</head>
<body>
<div id="report4notordermgr"></div>
</body>
</html>
