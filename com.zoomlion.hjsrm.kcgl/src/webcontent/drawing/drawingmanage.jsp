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
	String uid = userObject.getUserId();
	String optflag="0";
	  String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
	  if(roleId.toString().indexOf("drawingmanager")!=-1 ){
			optflag="1";
	  }	
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2019-03-07 10:40:06
  - Description:
-->
<head>
<title>图纸发放</title>

<script type="text/javascript">
	var lifnr = "<%=lifnr %>";
	var optflag = "<%=optflag %>";
	BIZ.ns('com.zoomlion.hjsrm.kcgl');
</script>
<js:load scriptPath="kcgl/drawing/js/drawingmanageUi.js" />
<js:load scriptPath="kcgl/drawing/js/drawingmanageEv.js" />
<script type="text/javascript">
  	FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.kcgl.DrawingmanageMgr
		});
 </script>
</head>
<body>
<div id="drawingmanagemgr"></div>
</body>
</html>