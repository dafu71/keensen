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
  	boolean workerflag = roleId.indexOf("10001161")>-1;
    String uid = userObject.getUserId();
    String userOrgId = userObject.getUserOrgId();
    String uname = userObject.getUserName();
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>卷膜记录</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.qinsen.produce');
</script>
<script type="text/javascript">
	function dayDiff(start,end){
		var datediff = (new Date(end)) - (new Date(start));
		datediff = datediff / 24 / 60 / 60 / 1000;
		return datediff;
		
	}
</script>
<ext:dict property="ABF_YESORNO"   dictTypeId="ABF_YESORNO" />

<js:load scriptPath="pub/common/prodspecCombo.js" />
<js:load scriptPath="pub/common/lineCombo.js" />
<js:load scriptPath="pub/common/componentworkerCombo.js" />
<js:load scriptPath="pub/common/tacheteamCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />

<js:load scriptPath="qinsen/produce/jmrecord/js/manageUi.js"/>
<js:load scriptPath="qinsen/produce/jmrecord/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
<script type="text/javascript">
  var uid = "<%=uid %>";
   var nowStaffName = "<%=uname %>";
  var nowStaffId = <%=operatorid %>;
   <% if(workerflag){ %>
  var teamId = "<%=userOrgId %>";
  <% }else{ %>
  var teamId = '';
  <% } %>
  var listid = 'produce-jmrecord-list';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.qinsen.produce.jmrecordMgr
		});
 </script>
</head>
<body>
<div id="jmrecordmgr"></div>
<div style="display: none">
		
		<form name="printForm" id="printForm" action="" target="_blank" method="post" accept-charset="UTF-8">
			<input type="hidden" name="batchIdStr"/>			
		</form>
	</div>
</body>
</html>