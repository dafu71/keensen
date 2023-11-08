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
    //10001101膜片库管员
    int modifyFlag = roleId.indexOf("10001101")>-1?1:0;
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>库存查询</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.diaphragm.storage');
</script>
<ext:dict property="STORAGE_TYPE"   dictTypeId="STORAGE_TYPE" />
<js:load scriptPath="pub/common/storageCombo.js" />
<js:load scriptPath="pub/common/supCombo.js" />
<js:load scriptPath="pub/common/mpworkerCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="pub/common/mplineCombo.js" />
<js:load scriptPath="pub/common/mpperfCombo.js" />
<js:load scriptPath="pub/common/storagePosCombo.js" />
<js:load scriptPath="produce/diaphragm/storage/query/js/manageUi.js"/>
<js:load scriptPath="produce/diaphragm/storage/query/js/manageEv.js"/>
<script type="text/javascript">
  var uid = "<%=uid %>";
  var listid = Ext.id();
  var modifyFlag = <%=modifyFlag %>;

  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr
		});
 </script>
</head>
<body>
<div id="storagequerymgr"></div>
</body>
</html>