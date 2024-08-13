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
<title>膜片入库</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.diaphragm.storage');
</script>
<script type="text/javascript">
	function dayDiff(start,end){
		var datediff = (new Date(end)) - (new Date(start));
		datediff = datediff / 24 / 60 / 60 / 1000;
		return datediff;
		
	}
	
	function formatStr(str){
	return ((Ext.isEmpty(str)) || ('null' == str)) ? '':str;
}
</script>

<ext:dict property="WAREHOUSING_TYPE"   dictTypeId="WAREHOUSING_TYPE" />
<ext:dict property="STORAGE_TYPE"   dictTypeId="STORAGE_TYPE" />
<js:load scriptPath="pub/common/storageCombo.js" />
<js:load scriptPath="pub/common/customerCombo.js" />
<js:load scriptPath="pub/common/storagePosCombo.js" />

<js:load scriptPath="pub/common/mpspecCombo2.js" />
<js:load scriptPath="produce/diaphragm/storage/warehousing/js/manageUi.js"/>
<js:load scriptPath="produce/diaphragm/storage/warehousing/js/manageEv.js"/>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var listid = Ext.id();
  var currentWindow ='';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.diaphragm.storage.WarehousingMgr
		});
 </script>
</head>
<body>
<div id="warehousingmgr"></div>
</body>
</html>