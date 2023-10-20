<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  
  String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
  String modiflag="0";
  //只有系统管理员才有权限查看所有数据
	if(roleId.toString().indexOf("srmadmin")!=-1 || roleId.toString().indexOf("sysadmin")!=-1){
		modiflag="1";
	}	
%>
<html>
<head>
<title>应用授权</title>
<link rel="stylesheet" type="text/css"	href="frame/ui/css/RowEditor.css" />

<ext:dict property="CM_GENDER" dictTypeId="CM_GENDER"/>
<ext:dict property="OM_EMPSTATUS" dictTypeId="OM_EMPSTATUS"/>
<ext:dict property="AC_AUTHMODE" dictTypeId="AC_AUTHMODE"/>
<ext:dict property="OM_ORGTYPE" dictTypeId="OM_ORGTYPE"/>
<ext:dict property="OM_POSITIONTYPE" dictTypeId="OM_POSITIONTYPE"/>
<ext:dict property="TCIS_AC_ISLEAF" dictTypeId="TCIS_AC_ISLEAF"/>
<ext:dict property="AC_OPERATORSTATUS" dictTypeId="AC_OPERATORSTATUS" />
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.rights');
</script>
<js:load scriptPath="frame/rights/orgauth/js/orgAuthUI.js"/>
<js:load scriptPath="frame/rights/orgauth/js/orgAuthEv.js"/>
<script type="text/javascript">
var modiflag = <%=modiflag %>

if(modiflag != 1){
    		Ext.MessageBox.alert("提示","该功能为系统管理员专属功能，您无权限操作该功能！!");
		}else{
			FunctionMgr.load({
				mainfn:com.zoomlion.hjsrm.rights.orgAuthMgr
			});
		}

</script>
</head>
<body>
<div id="orgAuthMgr"></div>
</body>
</html>