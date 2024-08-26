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
  	//String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
    String uid = userObject.getUserId();
     String exportflag="0";
  String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
  if(roleId.toString().indexOf("10001381")!=-1 || uid.equals("sysadmin")){
		exportflag="1";
  }	
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>元件入库请检</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component');
</script>
<script type="text/javascript">
	function dayDiff(start,end){
		var datediff = (new Date(end)) - (new Date(start));
		datediff = datediff / 24 / 60 / 60 / 1000;
		return datediff;
		
	}
</script>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>

<ext:dict property="KS_COMPONENT_INDUSTRY_ABNORMAL" dictTypeId="KS_COMPONENT_INDUSTRY_ABNORMAL" />
<ext:dict property="KS_COMPONENT_INDUSTRY_LABEL" dictTypeId="KS_COMPONENT_INDUSTRY_LABEL" />

<ext:dict property="KS_YESORNO" dictTypeId="KS_YESORNO" />
<ext:dict property="KS_PROD_CLASS_FLAG" dictTypeId="KS_PROD_CLASS_FLAG" />
<ext:dict property="KS_PROD_LID" dictTypeId="KS_PROD_LID" />
<ext:dict property="KS_PROD_TAPE" dictTypeId="KS_PROD_TAPE" />
<ext:dict property="KS_PROD_STORAGE" dictTypeId="KS_PROD_STORAGE" />
<ext:dict property="KS_PROD_APPLY_DEAL" dictTypeId="KS_PROD_APPLY_DEAL" />
<ext:dict property="KS_PROD_MARK_TYPE_FLAG"
	dictTypeId="KS_PROD_MARK_TYPE_FLAG" />
<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="pub/common/prodspecCombo.js" />

<js:load scriptPath="produce/component/apply/js/manageUi.js" />
<js:load scriptPath="produce/component/apply/js/manageEv.js" />
<script type="text/javascript">
  var uid = "<%=uid %>";
  var listid = Ext.id();
  var listid3 = Ext.id();
  
  var exportflag = "<%=exportflag %>";
  
  var opt = '';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.applyMgr
		});
 </script>
</head>
<body>
<div id="componentapplymgr"></div>
</body>
</html>
