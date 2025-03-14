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
<title>元件唛头打印</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component');
</script>

<js:load scriptPath="produce/component/markprint/js/printUi.js"/>
<js:load scriptPath="produce/component/markprint/js/printEv.js"/>
<script type="text/javascript">
  var rootUrl = "<%=rootUrl %>";
  var uid = "<%=uid %>";
  var listid = Ext.id();
  
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.markprintMgr
		});
 </script>
 
 <style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
</head>
<body>
<div id="componentmarkprintmgr"></div>
<div style="display: none">
		<form name="printForm" id="componentmarkprintForm" action="" target="_blank" method="post" accept-charset="UTF-8">
			<input type="hidden" name="url"/>
			<input type="hidden" name="dryWet"/>
			<input type="hidden" name="prodBatchNo"/>
			<input type="hidden" name="prodSpecName"/>
			<input type="hidden" name="prodSpecName2"/>
			<input type="hidden" name="code"/>
			<input type="hidden" name="isStar"/>
		</form>
	</div>
</body>
</html>