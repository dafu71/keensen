<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2016-01-22 09:34:29
  - Description:
-->
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");

%>
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
BIZ.ns('com.zoomlion.hjsrm.inspect');
 </script>
<js:load scriptPath="inspect/inspectwxlljywh/js/selectlifnrWin.js"/>
<js:load scriptPath="inspect/inspectsbtkwh/js/inspectsbtkwhUi.js"/>
<js:load scriptPath="inspect/inspectsbtkwh/js/inspectsbtkwhEv.js"/>
 <js:load scriptPath="pub/common/factoryCombo.js"/>
  <js:load scriptPath="pub/common/cxmcCombo.js"/>
 <js:load scriptPath="pub/common/jjyCombo.js"/>
 <js:load scriptPath="pub/common/matnrallCombo.js"/>
 <ext:dict property="GE_INSPECT_DJLX" dictTypeId="GE_INSPECT_DJLX" />
 <ext:dict property="GE_INSPECT_ZJLB" dictTypeId="GE_INSPECT_ZJLB" />
 <ext:dict property="GE_INSPECT_CJWTDJ" dictTypeId="GE_INSPECT_CJWTDJ" />
 <ext:dict property="GE_INSPECT_JYJL" dictTypeId="GE_INSPECT_JYJL" />
 <ext:dict property="GE_INSPECT_CLYJ" dictTypeId="GE_INSPECT_CLYJ" />
 <ext:dict property="GE_INSPECT_DXJFL" dictTypeId="GE_INSPECT_DXJFL" />
<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr
		});
 </script>
<title>三包不合格品退库记录表维护</title>
</head>
<body>
<div id="inspectsbtkwhMgr"></div>
</body>
</html>


