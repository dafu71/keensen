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
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>元件返工指令</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.produce.component.applys');
</script>


<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
<ext:dict property="KS_COMPONENT_INDUSTRY_BOX" dictTypeId="KS_COMPONENT_INDUSTRY_BOX" />
<ext:dict property="KS_COMPONENT_INDUSTRY_ABNORMAL" dictTypeId="KS_COMPONENT_INDUSTRY_ABNORMAL" />
<ext:dict property="KS_COMPONENT_INDUSTRY_LABEL" dictTypeId="KS_COMPONENT_INDUSTRY_LABEL" />
<ext:dict property="ABF_YESORNO" dictTypeId="ABF_YESORNO" />
<ext:dict property="KS_YESORNO" dictTypeId="KS_YESORNO" />
<ext:dict property="KS_PROD_CLASS_FLAG" dictTypeId="KS_PROD_CLASS_FLAG" />
<ext:dict property="KS_PROD_LID" dictTypeId="KS_PROD_LID" />
<ext:dict property="KS_PROD_TAPE" dictTypeId="KS_PROD_TAPE" />
<ext:dict property="KS_PROD_STORAGE" dictTypeId="KS_PROD_STORAGE" />
<ext:dict property="KS_PROD_APPLY_DEAL" dictTypeId="KS_PROD_APPLY_DEAL" />
<ext:dict property="KS_PROD_MARK_TYPE_FLAG"
	dictTypeId="KS_PROD_MARK_TYPE_FLAG" />
<ext:dict property="KS_COMPONENT_REWORK_DEFECT"   dictTypeId="KS_COMPONENT_REWORK_DEFECT" />
<js:load scriptPath="pub/common/prodspecCombo.js" />
<js:load scriptPath="produce/component/applys/rework/js/manageUi.js"/>
<js:load scriptPath="produce/component/applys/rework/js/manageEv.js"/>
<script type="text/javascript">

function getCurrentWeekNumber() {
  var now = new Date();
  var startOfYear = new Date(now.getFullYear(), 0, 1);
  var startOfWeek = new Date(startOfYear.setDate(startOfYear.getDate() - startOfYear.getDay() + 1));
  var daysSinceStartOfWeek = Math.ceil((now - startOfWeek + 1) / (24 * 60 * 60 * 1000));
  var currentWeekNumber = Math.ceil(daysSinceStartOfWeek / 7);
  return currentWeekNumber;
}

  var mylistid = Ext.id();
  var uid = "<%=uid %>";
  var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var opt = '';
  var listid = Ext.id();
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.produce.component.applys.reworkMgr
		});
 </script>
</head>
<body>



<div id="applysreworkmgr"></div>
</body>
</html>