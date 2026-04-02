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
  	rootUrl = rootUrl.replace("produce/diaphragm/ship/yxorderbase/index.jsp","");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>膜片销售统计表</title>


<!-- 导出Excel -->
<script src="base/exceljs/polyfill.js"></script>
<script src="base/exceljs/exceljs.min.js"></script>
<script src="base/exceljs/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>

<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.diaphragm.ship');
</script>

<ext:dict property="STORAGE_TYPE"   dictTypeId="STORAGE_TYPE" />
<ext:dict property="ABF_YESORNO"   dictTypeId="ABF_YESORNO" />
<js:load scriptPath="pub/common/storageCombo.js" />
<js:load scriptPath="pub/common/supCombo.js" />
<js:load scriptPath="pub/common/mpworkerCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="pub/common/mplineCombo.js" />
<js:load scriptPath="pub/common/mpperfCombo.js" />
<js:load scriptPath="pub/common/storagePosCombo.js" />

<js:load scriptPath="produce/diaphragm/ship/yxorderbase/js/manageUi.js"/>
<js:load scriptPath="produce/diaphragm/ship/yxorderbase/js/manageEv.js"/>
<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var markRootUrl = "<%=rootUrl %>";
  
  var importExcelBtnId = Ext.id();
  importExcelBtnId = 'YxOrderBaseMgr-' + importExcelBtnId;
  
  var listid = Ext.id();
  var deleteMpBtnId = Ext.id();
  
  var urlDateDeliveryId = Ext.id();
  var urlDateDeliveryId2 = Ext.id();
  var urlDateDeliveryId3 = Ext.id();

  var opt = '';
  
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr
		});
 </script>
</head>
<body>
<div id="shipyxorderbasemgr"></div>
</body>
</html>