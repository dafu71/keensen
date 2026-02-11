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
    String rootUrl = request.getRequestURL().toString();
	rootUrl = rootUrl.replace("/produce/quality/file/material/index.jsp",
			"");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>原材料图纸</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.quality.file');
</script>

<js:load scriptPath="pub/common/prodspecCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />

<js:load scriptPath="produce/quality/file/material/js/manageUi.js"/>
<js:load scriptPath="produce/quality/file/material/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<script type="text/javascript">
  var uid = "<%=uid %>";
  var mylistid = Ext.id();
  
  var markRootUrl = '<%=rootUrl %>';
  
  function down(v,fileName){
  	//window.location.href = v;
  	
  	var url = '<%=rootUrl %>/myupload/qualityfile/' + v;
    var opt = '';
    
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
			mainfn:com.keensen.ump.produce.quality.file.MaterialMgr
		});
 </script>
</head>
<body>
<div id="qualityfilematerialmgr"></div>
</body>
</html>