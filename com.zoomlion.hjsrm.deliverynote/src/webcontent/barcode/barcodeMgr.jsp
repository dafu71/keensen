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

<title>物料条码打印</title>
<script language="javascript" src="interfaces/print/Lodop/LodopFuncs.js"></script>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.deliverynote');

 </script>
<ext:dict property="GE_MATNR_SFGJJ"   dictTypeId="GE_MATNR_SFGJJ" /> 
<ext:dict property="GE_INSPECT_ZJLB"   dictTypeId="GE_INSPECT_ZJLB" /> 
<js:load scriptPath="deliverynote/barcode/js/barcodeMgrUi.js" />
<js:load scriptPath="deliverynote/barcode/js/barcodeMgrEv.js" />

<script type="text/javascript">
 var lifnr = "<%=lifnr %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.deliverynote.BarcodeMgr
		});
 </script>
</head>
<body>
<div id="notebarcodeMgr"></div>
</body>
</html>