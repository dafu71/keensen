<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	String lifnrx = (String) userObject.getAttributes().get("lifnr");
	String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
    String sysdate = Common.getSysDate();
%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-10-29 09:45:12
  - Description:
-->
<head>

<title>按物料打印条码</title>
<script language="javascript" src="interfaces/print/Lodop/LodopFuncs.js"></script>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.deliverynote');

 </script>
<js:load scriptPath="deliverynote/matnrbarcode/js/matnrbarcodeUi.js" />
<js:load scriptPath="deliverynote/matnrbarcode/js/matnrbarcodeEv.js" />

<script type="text/javascript">
 var lifnrx = "<%=lifnrx %>";
 var sysdate = "<%=sysdate %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.deliverynote.MatnrbarcodeMgr
		});
 </script>
</head>
<body>
<div id="matnrbarcodeMgr"></div>
</body>
</html>