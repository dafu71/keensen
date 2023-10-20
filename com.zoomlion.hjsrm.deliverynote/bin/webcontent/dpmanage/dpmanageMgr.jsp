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
  - Author(s): liuxin
  - Date: 2016-07-12 08:27:45
  - Description:
-->
<head>
<script language="javascript" src="interfaces/print/print.jsp?id=deliverynote"></script>
<title>底盘送货单维护</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.deliverynote');

 </script>



<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="deliverynote/dpmanage/js/dpmanageMgrUi.js" />
<js:load scriptPath="deliverynote/dpmanage/js/dpmanageMgrEv.js" />

<script type="text/javascript">
	var lifnrname = "<%=lifnrname %>";
	var lifnr = "<%=lifnr %>";
	var listid = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.deliverynote.DpmanageMgr
		});
 </script>
</head>
<body>
<div id="dpnotemanageMgr"></div>
</body>
</html>
