<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2015-06-18 11:34:02
  - Description:
-->
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String lifnr = (String) userObject.getAttributes().get("lifnr");
%>
<title>无合同价查询</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.settleaccounts');
var lifnr = "<%=lifnr %>";
</script>
<ext:dict property="GE_PRUCHASE_TARIFF"   dictTypeId="GE_PRUCHASE_TARIFF" />

<js:load scriptPath="pub/common/factoryCombo.js" />
<js:load scriptPath="pub/common/companyCombo.js" />
<js:load scriptPath="pub/common/ekorgCombo.js" />
<js:load scriptPath="settleaccounts/nosettle/js/nosettleMgrUi.js" />
<js:load scriptPath="settleaccounts/nosettle/js/nosettleMgrEv.js" />

<script type="text/javascript">
var listid = Ext.id();
	 FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.settleaccounts.NosettleMgr
		});
 </script>
</head>
<body>
<div id="nosettleMgr"></div>
</body>
</html>