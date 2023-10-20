<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<% 
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  String currentDataorgid=(String)userObject.getAttributes().get("dataorgid");
  String dictid = "0";
  if(currentDataorgid==null){
  	currentDataorgid="";
  	 dictid = "1";
  }
  String currentDataorgseq=(String)userObject.getAttributes().get("dataorgseq");
  if(currentDataorgseq==null){
  	 currentDataorgseq="";
  }
%>
<html>
<head>
<title>机构管理</title>
<ext:dict property="OM_ORGTYPE"  dictTypeId="OM_ORGTYPE"/>
<ext:dict property="OM_POSITIONTYPE" dictTypeId="OM_POSITIONTYPE" />
<ext:dict property="SRM_AC_ISLEAF" dictTypeId="SRM_AC_ISLEAF"/>
<ext:dict property="AC_OPERATORSTATUS" dictTypeId="AC_OPERATORSTATUS"/>
<ext:dict property="OM_ORGSTATUS" dictTypeId="OM_ORGSTATUS"/>
<ext:dict dictTypeId="AC_MENUTYPE" property="AC_MENUTYPE"/>
<ext:dict property="CM_GENDER" dictTypeId="CM_GENDER"/>
<ext:dict property="OM_EMPSTATUS" dictTypeId="OM_EMPSTATUS"/>
<ext:dict property="AC_AUTHMODE" dictTypeId="AC_AUTHMODE"/>
<ext:dict property="OM_PARTYVISAGE" dictTypeId="OM_PARTYVISAGE"/>
<ext:dict property="AC_ROLETYPE" dictTypeId="AC_ROLETYPE" filterField="dictid" filterOp="=" filterStr="<%=dictid%>"/>

<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.org');
	var currentDataorgid = '<%=currentDataorgid %>';
	var currentDataorgseq = '<%=currentDataorgseq %>';
</script>

<js:load scriptPath="frame/org/organization/js/dept/orgSingleLoader.js"/>
<js:load scriptPath="frame/org/organization/js/dept/orgIndexTree.js"/>
<js:load scriptPath="frame/org/organization/js/dept/departmentUI.js"/>
<js:load scriptPath="frame/org/organization/js/dept/departmentEv.js"/>
<js:load scriptPath="frame/org/organization/js/emp/empUI.js"/>
<js:load scriptPath="frame/org/organization/js/emp/empEv.js"/>
<js:load scriptPath="frame/org/organization/js/orgUI.js"/>
<js:load scriptPath="frame/org/organization/js/orgEv.js"/>
<script type="text/javascript">
	FunctionMgr.load({
		mainfn:com.zoomlion.hjsrm.org.OrgMgr
	});
</script>
</head>
<body>
<div id="orgDiv"></div>
</body>
</html>