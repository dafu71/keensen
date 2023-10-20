<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 采购订单查询
  - Author(s): liuxin
  - Date: 2014-12-09 10:50:24
  - Description:
-->
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  String lifnr = (String) userObject.getAttributes().get("lifnr");
  String lifnrname = (String) userObject.getAttributes().get(
			"lifnrname");
%>
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
BIZ.ns('com.zoomlion.hjsrm.purchasequery');
 </script>

<ext:dict property="GE_PURCHASE_KMFPLB"   dictTypeId="GE_PURCHASE_KMFPLB" />
<ext:dict property="GE_PURCHASE_XMFPLB"   dictTypeId="GE_PURCHASE_XMFPLB" />
<js:load scriptPath="purchase/purchasequery/js/purchaseUi.js"/>
<js:load scriptPath="purchase/purchasequery/js/purchaseEv.js"/>
<js:load scriptPath="pub/common/factoryCombo.js"/>
<js:load scriptPath="pub/common/ekorgCombo.js"/>
<js:load scriptPath="pub/common/ekgrpCombo.js"/>

<script type="text/javascript">
  var lifnr = "<%=lifnr %>";
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.purchasequery.PurchasequeryMgr
		});
 </script>
<title>采购订单查询</title>
</head>
<body>
<div id="purchasequeryMgr"></div>
</body>
</html>
