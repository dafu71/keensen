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
<title>发货单查询</title>

<!-- 导出Excel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.2.1/exceljs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="base/exceljs/doQueryAndExport.js"></script>


<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.diaphragm.ship');
</script>
<ext:dict property="STORAGE_TYPE"   dictTypeId="STORAGE_TYPE" />
<js:load scriptPath="pub/common/storageCombo.js" />
<js:load scriptPath="pub/common/supCombo.js" />
<js:load scriptPath="pub/common/mpworkerCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="pub/common/mplineCombo.js" />
<js:load scriptPath="pub/common/mpperfCombo.js" />
<js:load scriptPath="pub/common/storagePosCombo.js" />

<js:load scriptPath="produce/diaphragm/ship/shipquery/js/manageUi.js"/>
<js:load scriptPath="produce/diaphragm/ship/shipquery/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var listid = 'rkdrk-list';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.diaphragm.ship.ShipqueryMgr
		});
 </script>
</head>
<body>
<div id="shipquerymgr"></div>
</body>
</html>