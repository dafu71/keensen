<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>

<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	String lifnr = (String) userObject.getAttributes().get("lifnr");
	String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
	
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-12-01 11:40:50
  - Description:
-->
<head>
<title>送货单查询</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.deliverynote');

 </script>
 <ext:dict property="GE_INSPECT_ZJLB"   dictTypeId="GE_INSPECT_ZJLB" />
 <js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="deliverynote/seek/js/seekMgrUi.js" />
<js:load scriptPath="deliverynote/seek/js/seekMgrEv.js" />

<script type="text/javascript">
 var lifnr = "<%=lifnr %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.deliverynote.SeekMgr
		});
 </script>
</head>
<body>
<div id="noteseekMgr"></div>
</body>
</html>