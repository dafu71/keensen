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
	String rootUrl = request.getRequestURL().toString();
	rootUrl = rootUrl.replace("/produce/quality/review/mp/index.jsp",
			"");

	//10002001
	//销售内勤
	int nqLimit = 0;

	//品管30479  30797
	int pgLimit = 0;

	//销售内勤
	if (roleId.indexOf("10002001") > -1) {
		nqLimit = 1;
	}

	//品管
	if (roleId.indexOf("30479") > -1 || roleId.indexOf("30797") > -1) {
		pgLimit = 1;
	}
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>膜片检测报告</title>

<!-- 导出Excel -->
<script src="base/exceljs/polyfill.js"></script>
<script src="base/exceljs/exceljs.min.js"></script>
<script src="base/exceljs/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.quality.review');
</script>

<js:load scriptPath="pub/common/mpspecCombo.js" />

<js:load scriptPath="produce/quality/review/mp/js/manageUi.js" />
<js:load scriptPath="produce/quality/review/mp/js/manageEv.js" />
<script type="text/javascript">
  var markRootUrl = "<%=rootUrl %>";
 
  var uid = "<%=uid %>";
  var listid = Ext.id();
  var marktemplateupload = Ext.id();
  
  var nqLimit = <%=nqLimit %>;
  var pgLimit = <%=pgLimit %>;
  
  function down(v){
  	//window.location.href = v;
  	
  	var url = v;
    var fileName = '检测报告.pdf';
    
  	var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var blob = new Blob([xhr.response]);
            var blobUrl = window.URL.createObjectURL(blob);
            
            var a = document.createElement('a');
            a.href = blobUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            window.URL.revokeObjectURL(blobUrl);
        }
    };
    xhr.send();
  } 
  
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.quality.review.MpMgr
		});
 </script>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
</head>
<body>
<div id="qualityreviewmpmgr"></div>



</body>
</html>
