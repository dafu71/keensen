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
	String uid = userObject.getUserId();
	
	int modifyOrderNoFlag = roleId.indexOf("10001561")>-1?1:0;

	//修改干湿膜订单号权限
	int modifyOrderNoFlag4Wet = 0;
	int modifyOrderNoFlag4Dry = 0;
	if (modifyOrderNoFlag == 1) {
		//气检湿膜贴标,梁彪、李长林
		if (uid.equals("KS00141") || uid.equals("KS00524")) {
			modifyOrderNoFlag4Wet = 1;
		}
		//气检干膜贴标,罗海鹰、任栋、吴敏
		if (uid.equals("LHY") || uid.equals("KS00307")
		|| uid.equals("KS01147") || uid.equals("XXB")
		|| uid.equals("KS01441")) {
			modifyOrderNoFlag4Dry = 1;
		}
	}
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>查询与处理</title>

<!-- 导出Excel -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.2.1/exceljs.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component.vstorage');
</script>
<js:load scriptPath="pub/common/prodspecCombo.js" />
<js:load scriptPath="produce/component/vstorage/list/js/manageUi.js" />
<js:load scriptPath="produce/component/vstorage/list/js/manageEv.js" />

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<script type="text/javascript">
  var uid = "<%=uid %>";
  
   var modifyOrderNoFlag = <%=modifyOrderNoFlag %>;
  
  var modifyOrderNoFlag4Wet = <%=modifyOrderNoFlag4Wet %>;
  var modifyOrderNoFlag4Dry = <%=modifyOrderNoFlag4Dry %>;
  
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.vstorage.VstorageListMgr
		});
 </script>
</head>
<body>
<div id="vstoragelistmgr"></div>
</body>
</html>
