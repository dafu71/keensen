<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): 陈今伟
  - Date: 2013-01-17 09:55:35
  - Description:
-->
<head>
<title>人员信息</title>
<ext:dict property="CM_GENDER" dictTypeId="CM_GENDER" />
<ext:dict property="OM_EMPSTATUS" dictTypeId="OM_EMPSTATUS"/>
<ext:dict property="AC_AUTHMODE" dictTypeId="AC_AUTHMODE"/>
<ext:dict property="OM_PARTYVISAGE" dictTypeId="OM_PARTYVISAGE"/>
<script type="text/javascript">
      BIZ.ns("com.zoomlion.hjsrm.demo");
</script>
<js:load scriptPath="demo/user/js/userUi.js"/>
<js:load scriptPath="demo/user/js/userEv.js"/>
<script type="text/javascript">
      FunctionMgr.load({
        mainfn:com.zoomlion.hjsrm.demo.userMgr
        });
      </script>
</head>
<body>
<div id="userMgrDiv"></div>
</body>
</html>
