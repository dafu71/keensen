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
    String rootUrl = request.getRequestURL().toString();
    rootUrl = rootUrl.replace("produce/diaphragm/print/index.jsp","");
    //System.out.println(rootUrl);

%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2014-12-01 11:40:24
  - Description:
-->
<head>
<script language="javascript" src="interfaces/print/Lodop/LodopFuncs.js"></script>
<%--<script type="text/javascript" src="frame/ui/jslib/newjquery/jquery-1.11.3.min.js"></script>	
<script type='text/javascript' src='frame/ui/jslib/newjquery/JsBarcode.all.min.js'></script>--%>

<title>唛头打印</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.diaphragm.print');
 </script>
 <ext:dict property="ABF_YESORNO"   dictTypeId="ABF_YESORNO" />
<%--<js:load scriptPath="pub/common/markspecCombo.js" />--%>
<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="produce/diaphragm/print/js/manageUi.js" />
<js:load scriptPath="produce/diaphragm/print/js/manageEv.js" />

<script type="text/javascript">
	var uid = "<%=uid %>";
  	var listid = 'mark-print-list';
  	var rootUrl = "<%=rootUrl %>";

  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.diaphragm.print.PrintMarkMgr
		});
 </script>
 <style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
 
</head>
<body>
<div id="printmarkmgr"></div>
</body>
</html>