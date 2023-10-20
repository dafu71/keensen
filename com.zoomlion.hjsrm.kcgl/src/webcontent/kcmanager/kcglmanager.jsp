<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<%--采购收货入库管理
    author 刘鑫
    修改时间 14-11-26
--%>
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  
  String sysdate = Common.getSysDate();
  String userId=(String)userObject.getUserId();
%>

<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var sysdate = "<%=sysdate %>";
var userId = "<%=userId%>";
  BIZ.ns('com.zoomlion.hjsrm.kcgl');
  </script>
  <ext:dict property="GE_PURCHASE_YDYY"   dictTypeId="GE_PURCHASE_YDYY" />
  <js:load scriptPath="kcgl/kcmanager/js/kcglUi.js"/>
  <js:load scriptPath="kcgl/kcmanager/js/kcglEv.js"/>
  <js:load scriptPath="kcgl/kcmanager/js/wlpzcx/wlpzcxUi.js"/>
  <js:load scriptPath="kcgl/kcmanager/js/wlpzcx/wlpzcxEv.js"/>
   <js:load scriptPath="kcgl/kcmanager/js/shrk/shrkUi.js"/> 
  <js:load scriptPath="kcgl/kcmanager/js/shrk/shrkEv.js"/>
  <js:load scriptPath="kcgl/kcmanager/js/ckth/ckthUi.js"/>
  <js:load scriptPath="kcgl/kcmanager/js/ckth/ckthEv.js"/>
  <js:load scriptPath="pub/common/factoryCombo.js"/>
<script type="text/javascript">
   var list1id = Ext.id();
   var list2id = Ext.id();
   var msgxx = Ext.id();
  FunctionMgr.load({
		mainfn: com.zoomlion.hjsrm.kcgl.KcglMgr
	});
 </script>
<title>采购收货入库管理</title>

</head>
<body>
<div id="kcglMgr"></div>
</body>
</html>
