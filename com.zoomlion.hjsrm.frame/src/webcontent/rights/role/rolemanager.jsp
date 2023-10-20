<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
  <head>
<!-- 角色类型(业务字典) -->
<ext:dict property="AC_ROLETYPE" dictTypeId="AC_ROLETYPE"/>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.role');
</script>
 <js:load scriptPath="frame/rights/role/js/rolesManagerUi.js"/>
 <js:load scriptPath="frame/rights/role/js/rolesManagerEv.js"/>
 <js:load scriptPath="frame/rights/role/js/part/rolesUi.js"/>
 <js:load scriptPath="frame/rights/role/js/part/rolesEv.js"/>
 <js:load scriptPath="frame/rights/role/js/operator/operatorInRoleUi.js"/>
 <js:load scriptPath="frame/rights/role/js/operator/operatorInRoleEv.js"/>
<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.role.RolesManagerMgr
		});
 </script>
<title>角色管理</title>
</head>
<body>
<div id="rolesMgr"></div>
</body>
</html>
