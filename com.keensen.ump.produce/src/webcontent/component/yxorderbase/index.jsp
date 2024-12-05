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
    String userName = userObject.getUserName();
    String mConfirm = "0";//生产管理部管理员
    
    String allRight = "0";
    
    if(roleId.toString().indexOf("10001521")!=-1 || uid.equals("sysadmin")){
		allRight="1";
  	}
    
    if(roleId.toString().indexOf("10001481")!=-1 || uid.equals("sysadmin")){
		mConfirm="1";
  	}
  	
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>产品销售统计表</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component');
</script>

<ext:dict property="KS_YXORDER_PHOTO_SINGLE" dictTypeId="KS_YXORDER_PHOTO_SINGLE" />
<ext:dict property="KS_YXORDER_PHOTO_ALL" dictTypeId="KS_YXORDER_PHOTO_ALL" />

<js:load scriptPath="pub/common/optColumnWin.js"/>
<js:load scriptPath="produce/component/yxorderbase/js/manageUi2.js"/>
<js:load scriptPath="produce/component/yxorderbase/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<script type="text/javascript">
  var uid = "<%=uid %>";
  var mConfirm = "<%=mConfirm %>";
  var userName = "<%=userName %>";
  var allRight = "<%=allRight %>";
 
  var opt = '';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.yxorderbaseMgr
		});
 </script>
</head>
<body>
<div id="yxorderbasemgr"></div>
</body>
</html>