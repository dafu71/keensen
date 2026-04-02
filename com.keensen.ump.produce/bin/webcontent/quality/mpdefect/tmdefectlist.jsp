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
    
    String relationId = request.getParameter("relationId");
    String tmBatchNo = request.getParameter("tmBatchNo");
    String iftear = request.getParameter("iftear");
    
    
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>涂膜工序不良记录</title>

<!-- 导出Excel -->
<script src="base/exceljs/polyfill.js"></script>
<script src="base/exceljs/exceljs.min.js"></script>
<script src="base/exceljs/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.quality');
</script>
 <ext:dict property="ABF_YESORNO"   dictTypeId="ABF_YESORNO" />
  <ext:dict property="KS_YESORNO"   dictTypeId="KS_YESORNO" />
  
  <js:load scriptPath="pub/common/lineCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="pub/common/mpperfCombo.js" />
<js:load scriptPath="pub/common/teamCombo.js" />
<js:load scriptPath="produce/quality/mpdefect/js/tmDefectListUi.js"/>
<js:load scriptPath="produce/quality/mpdefect/js/tmDefectListEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<script type="text/javascript">
  var uid = "<%=uid %>";
  
  var relationId4Search = "<%=relationId  %>";
  var tmBatchNo4Search = "<%=tmBatchNo  %>";
  var iftear4Search = "<%=iftear  %>";
  
  var lengthTotalId = Ext.id();
 
  var opt = '';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.quality.TmDefectListMgr
		});
 </script>
</head>
<body>
<div id="tmdefectlistmgr"></div>
</body>
</html>