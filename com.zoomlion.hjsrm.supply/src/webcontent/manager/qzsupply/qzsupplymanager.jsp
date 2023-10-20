<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2014-11-17 14:35:24
  - Description:潜在供应商管理
-->
<head>
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

BIZ.ns('com.zoomlion.hjsrm.qzsupply');
 </script>
<ext:dict property="ABF_STATUS1"   dictTypeId="ABF_STATUS" />
<ext:dict property="AT_ANNOUNCETYPE"   dictTypeId="AT_ANNOUNCETYPE" />
<ext:dict property="GE_SUPPLY_MASSTYPE"   dictTypeId="GE_SUPPLY_MASSTYPE" />
<ext:dict property="GE_SUPPLY_MATERIALTYPE"   dictTypeId="GE_SUPPLY_MATERIALTYPE" />
<ext:dict property="GE_SUPPLY_PROPERTY"   dictTypeId="GE_SUPPLY_PROPERTY" />
<ext:dict property="GE_SUPPLY_REGIMENTATION"   dictTypeId="GE_SUPPLY_REGIMENTATION" />
<ext:dict property="GE_SUPPLY_SYSTEMATICS"   dictTypeId="GE_SUPPLY_SYSTEMATICS" />

<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js"/>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js"/>
<js:load scriptPath="frame/ui/jslib/extex/MultiSelect/MultiSelect.js"/>
<js:load scriptPath="supply/manager/qzsupply/js/qzsupplyUi.js"/>
<js:load scriptPath="supply/manager/qzsupply/js/qzsupplyEv.js"/>
<script type="text/javascript">
  var qzSupplyMaterialid = Ext.id();
  var mySupplyMaterialid = Ext.id();
  var str;
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.qzsupply.QzsupplyMgr
		});
 </script>
<title>潜在供应商信息维护</title>
</head>
<body>

<div id="qzsupplyMgr">
<%----%>
</div>
</body>
</html>