<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 供应商送货指令查询
  - Author(s): liuxin
  - Date: 2014-12-09 10:50:24
  - Description:
-->
<head>
<ext:dict property="AT_NOTICEINFOREADSTATUS" dictTypeId="AT_NOTICEINFOREADSTATUS"/>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");

%>

<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var now = new Date();
now.setDate(now.getDate()+7);

  BIZ.ns('com.zoomlion.hjsrm.purchase');
  </script>
  <ext:dict property="GE_PURCHASE_KMFPLB"   dictTypeId="GE_PURCHASE_KMFPLB" />
  <ext:dict property="GE_PURCHASE_XMFPLB"   dictTypeId="GE_PURCHASE_XMFPLB" />
  <js:load scriptPath="purchase/shzlcxsupply/js/shzlcxsupplyUi.js"/>
  <js:load scriptPath="purchase/shzlcxsupply/js/shzlcxsupplyEv.js"/>
  <js:load scriptPath="pub/common/factoryCombo.js"/>
  <js:load scriptPath="pub/common/ekorgCombo.js"/>
  <js:load scriptPath="pub/common/ekgrpCombo.js"/>
  <js:load scriptPath="pub/common/companyCombo.js" />
<script type="text/javascript">
  FunctionMgr.load({
		mainfn: com.zoomlion.hjsrm.purchase.shzlcxsupplyMgr
	});
 </script>
<title>送货指令查询</title>

</head>
<body>
<div id="shzlcxsupplyMgr"></div>
</body>
</html>
