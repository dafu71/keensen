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
    String gyy = "0";//工艺员
    String fxy = "0";//分析员
    String ply = "0";//配料员
    if(roleId.toString().indexOf("10001322")!=-1 || uid.equals("sysadmin")){
		gyy="1";
  	}
  	if(roleId.toString().indexOf("10001323")!=-1 || uid.equals("sysadmin")){
		fxy="1";
  	}
  	if(roleId.toString().indexOf("10001321")!=-1 || uid.equals("sysadmin")){
		ply="1";
  	}	
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>水相液浓度</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.quality.mptest');
</script>

<ext:dict property="KS_GC_ITEM"   dictTypeId="KS_GC_ITEM" />
<ext:dict property="KS_HPLC_ITEM"   dictTypeId="KS_HPLC_ITEM" />

<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="pub/common/operatorroleCombo.js"/>
<js:load scriptPath="produce/quality/mptest/water/js/manageUi.js"/>
<js:load scriptPath="produce/quality/mptest/water/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<script type="text/javascript">
  var gyy = "<%=gyy %>";
  var fxy = "<%=fxy %>";
  var ply = "<%=ply %>";
  
  var uid = "<%=uid %>";
  
  var opt = '';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.quality.mptest.waterMgr
		});
 </script>
</head>
<body>
<div id="mptestwatermgr"></div>
</body>
</html>