<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): 蔡慧文
  - Date: 2013-03-19 14:46:52
  - Description:我的工作-已派工单
-->
<head>
<title>已派工单</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.workflows');
</script>
<ext:dict property="KH_USERTYPE"   dictTypeId="KH_USERTYPE" />
<ext:dict property="KH_CUSTINFO_CERTTYPE"   dictTypeId="KH_CUSTINFO_CERTTYPE" />
<js:load scriptPath="pub/busi/processcombox/processCombox.js"/>
<js:load scriptPath="workflows/workinsent/js/workinsentUi.js"/>
<js:load scriptPath="workflows/workinsent/js/workinsentEv.js"/>
<js:load scriptPath="pub/cust/common/abstractSelectField.js"/>
<js:load scriptPath="pub/cust/user/userSelectField.js"/>
<js:load scriptPath="pub/resource/address/addrcombox.js"/>
<script type="text/javascript">
	FunctionMgr.load({mainfn : com.zoomlion.hjsrm.workflows.WorkinSent });
 </script>
</head>
<body>
	<div id="workinsentDiv"></div>
</body>
</html>