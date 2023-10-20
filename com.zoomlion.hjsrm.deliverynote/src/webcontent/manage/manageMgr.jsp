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
  - Date: 2014-12-01 11:39:42
  - Description:
-->
<head>
<script language="javascript" src="interfaces/print/print.jsp?id=deliverynote"></script>
<title>送货单维护</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.deliverynote');

 </script>



<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="deliverynote/manage/js/manageMgrUi.js" />
<js:load scriptPath="deliverynote/manage/js/manageMgrEv.js" />

<script type="text/javascript">
	var lifnrname = "<%=lifnrname %>";
	var lifnr = "<%=lifnr %>";
	var listid = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.deliverynote.ManageMgr
		});
 </script>
</head>
<body>
<div id="notemanageMgr"></div>
</body>
</html>
