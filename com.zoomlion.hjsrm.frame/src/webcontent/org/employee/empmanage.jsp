<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): 陈今伟
  - Date: 2013-01-17 09:55:35
  - Description:
-->
<head>
<title>员工管理</title>
<ext:dict property="CM_GENDER" dictTypeId="CM_GENDER" />
<ext:dict property="OM_EMPSTATUS" dictTypeId="OM_EMPSTATUS"/>
<ext:dict property="AC_AUTHMODE" dictTypeId="AC_AUTHMODE"/>
<ext:dict property="OM_PARTYVISAGE" dictTypeId="OM_PARTYVISAGE"/>
<script type="text/javascript">
      BIZ.ns("com.zoomlion.hjsrm.org");
      var orgid = Ext.id();
      var orgidx = Ext.id();
      var bizorgidsx = Ext.id;
      var bizorgidsxx = Ext.id;
</script>
 <js:load scriptPath="pub/common/empnewCombo.js"/>
 <js:load scriptPath="pub/common/empnewCpmbox.js"/>
<js:load scriptPath="frame/org/employee/js/empUi.js"/>
<js:load scriptPath="frame/org/employee/js/empEv.js"/>

<script type="text/javascript">
      FunctionMgr.load({
        mainfn:com.zoomlion.hjsrm.org.employeeMgr
        });
      </script>
</head>
<body>
<div id="empMgrDiv"></div>
</body>
</html>
