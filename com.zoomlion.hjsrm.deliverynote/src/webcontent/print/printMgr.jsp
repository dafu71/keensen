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
  - Date: 2014-12-01 11:40:24
  - Description:
-->
<head>
<script language="javascript" src="interfaces/print/Lodop/LodopFuncs.js"></script>
<script language="javascript" src="interfaces/print/print.jsp?id=deliverynote"></script>
<title>送货单打印</title><script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.deliverynote');

 </script>
 
 <js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="deliverynote/print/js/printMgrUi.js" />
<js:load scriptPath="deliverynote/print/js/printMgrEv.js" />

<script type="text/javascript">
 var lifnr = "<%=lifnr %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.deliverynote.PrintMgr
		});
 </script>
</head>
<body>
<div id="noteprintMgr"></div>
</body>
</html>