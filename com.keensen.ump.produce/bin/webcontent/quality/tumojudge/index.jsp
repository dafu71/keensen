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
    String orgid = userObject.getUserOrgId();
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>膜片质检判定</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.quality');
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
<js:load scriptPath="pub/common/prodFlagSelCombo.js" />
<js:load scriptPath="pub/common/judgerCombo.js" />

<js:load scriptPath="produce/quality/tumojudge/js/manageUi.js"/>
<js:load scriptPath="produce/quality/tumojudge/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var orgid = "<%=orgid %>";
  var operatorid = "<%=operatorid %>";
  var optId = orgid == '100080'?operatorid:'';
  var listid = 'timojudge-list';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.quality.timojudgeMgr
		});
 </script>
</head>
<body>
<div id="timojudgemgr"></div>
</body>
</html>