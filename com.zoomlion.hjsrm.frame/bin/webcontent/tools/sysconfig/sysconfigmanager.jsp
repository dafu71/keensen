<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<ext:dict property="TCIS_OM_CONFIGTYPE"   dictTypeId="TCIS_OM_CONFIGTYPE" />
<ext:dict property="CM_PARAMTYPE"   dictTypeId="CM_PARAMTYPE" />
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
String dataorgid=(String)userObject.getAttributes().get("dataorgid");
 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script type="text/javascript">
var dataorgid = '<%=dataorgid%>';
var CONFIGTEMP = [];
BIZ.ns('com.zoomlion.hjsrm.sysconfig');
</script>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js"/>
<js:load scriptPath="frame/tools/sysconfig/js/sysconfigUi.js"/>
<js:load scriptPath="frame/tools/sysconfig/js/sysconfigEv.js"/>
<script type="text/javascript">
  FunctionMgr.load({
			mainfn:com.zoomlion.hjsrm.sysconfig.SysconfigMgr
		});
 </script>
<title>参数维护</title>
</head>
<body>
<div id="sysconfigMgr"></div>
</body>
</html>
