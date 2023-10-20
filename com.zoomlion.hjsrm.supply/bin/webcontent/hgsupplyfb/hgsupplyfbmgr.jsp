<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2016-03-17 10:17:20
  - Description:
-->
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  String sysdate = Common.getSysDate();
%>
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";
var operatorname = "<%=operatorname%>";
var sysdate = "<%=sysdate %>";
BIZ.ns('com.zoomlion.hjsrm.supply');
 </script>
 

<js:load scriptPath="supply/hgsupplyfb/js/hgsupplyfbUi.js"/>
<js:load scriptPath="supply/hgsupplyfb/js/hgsupplyfbEv.js"/>
 <js:load scriptPath="pub/common/companyCombo.js"/>
 <js:load scriptPath="pub/common/lifnrallCombo.js"/> 
 <ext:dict property="GE_SUPPLY_WGWX" dictTypeId="GE_SUPPLY_WGWX" />
 <ext:dict property="GE_SUPPLY_GYSLX" dictTypeId="GE_SUPPLY_GYSLX" />
 <ext:dict property="GE_SUPPLY_WZLB" dictTypeId="GE_SUPPLY_WZLB" />
 <ext:dict property="GE_SUPPLY_WZLX" dictTypeId="GE_SUPPLY_WZLX" />
<script type="text/javascript">
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.supply.HgsupplyfbMgr
		});
 </script>
<title>合格供应商名录发布</title>
</head>
<body>
<div id="hgsupplyfbMgr"></div>
</body>
</html>


