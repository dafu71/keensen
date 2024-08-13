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
  	rootUrl = rootUrl.replace("/produce/component/markprint/index.jsp","");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>唛头打印列表</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component');
</script>
<ext:dict property="KS_YESORNO"   dictTypeId="KS_YESORNO" />
<js:load scriptPath="produce/component/markprint/js/listUi.js"/>
<js:load scriptPath="produce/component/markprint/js/listEv.js"/>
<script type="text/javascript">
  var rootUrl = "<%=rootUrl %>";
  var uid = "<%=uid %>";
  var listid = Ext.id();
  
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.markprintlistMgr
		});
 </script>
 
 <style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
</head>
<body>
<div id="componentmarkprintlistmgr"></div>
<div style="display: none">
		<form name="printForm" id="componentmarkprintlistForm" action="" target="_blank" method="post" accept-charset="UTF-8">
			<input type="hidden" name="prodBatchNos"/>
			<input type="hidden" name="code"/>
		</form>
	</div>
</body>
</html>