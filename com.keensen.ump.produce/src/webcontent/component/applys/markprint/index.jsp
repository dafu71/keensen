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
<title>家用元件箱唛打印</title>

<!-- 导出Excel -->
<script src="base/babel-polyfill/6.26.0/polyfill.js"></script>
<script src="base/exceljs/4.2.1/exceljs.min.js"></script>
<script src="base/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component.applys');
</script>


<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<js:load scriptPath="pub/common/prodspecCombo.js" />
<js:load scriptPath="produce/component/applys/markprint/js/manageUi.js"/>
<js:load scriptPath="produce/component/applys/markprint/js/manageEv.js"/>
<script type="text/javascript">

function getCurrentWeekNumber() {
  var now = new Date();
  var startOfYear = new Date(now.getFullYear(), 0, 1);
  var startOfWeek = new Date(startOfYear.setDate(startOfYear.getDate() - startOfYear.getDay() + 1));
  var daysSinceStartOfWeek = Math.ceil((now - startOfWeek + 1) / (24 * 60 * 60 * 1000));
  var currentWeekNumber = Math.ceil(daysSinceStartOfWeek / 7);
  return currentWeekNumber;
}

  var mylistid = Ext.id();
  var uid = "<%=uid %>";
  var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var opt = '';
  var listid = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.applys.MarkPrintMgr
		});
 </script>
</head>
<body>



<div id="applysmarkprintmgr"></div>


<div style="display: none">
		<form name="printForm" id="applysmarkprintmgrForm" action="" target="_blank" method="post" accept-charset="UTF-8">
			<input type="hidden" name="markBatchNo"/>
			<input type="hidden" name="prodSpecName"/>
			<input type="hidden" name="quantityBox"/>
			<input type="hidden" name="quantityLastBox"/>
			<input type="hidden" name="quantityPerBox"/>
			<input type="hidden" name="dryWet"/>
			<input type="hidden" name="nsf"/>
			<input type="hidden" name="log"/>
			<input type="hidden" name="orderId"/>
			<input type="hidden" name="orderNo"/>
			<input type="hidden" name="tapColor"/>
			<input type="hidden" name="orderAmount"/>
			<input type="hidden" name="applyAmount"/>
		</form>
	</div>
	
</body>
</html>