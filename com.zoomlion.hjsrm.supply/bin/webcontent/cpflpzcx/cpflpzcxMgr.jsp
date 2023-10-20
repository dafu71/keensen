<!-- 
  - Author(s): liuxin
  - Date: 2015-08-24 16:13:13
  - Description:
-->
<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  String dataorgseq=(String)userObject.getAttributes().get("dataorgseq");
%>
<script type="text/javascript">
 var dataorgseq="<%=dataorgseq%>";
  var dataorgid="<%=dataorgid%>";
  BIZ.ns('com.zoomlion.hjsrm.cpflpzcxdl');
 </script>
  <js:load scriptPath="supply/cpflpzcx/js/cpflpzcxdl/cpflpzcxdlUi.js"/>
 <js:load scriptPath="supply/cpflpzcx/js/cpflpzcxdl/cpflpzcxdlEv.js"/>
  <js:load scriptPath="supply/cpflpzcx/js/cpflpzcxzl/cpflpzcxzlUi.js"/>
 <js:load scriptPath="supply/cpflpzcx/js/cpflpzcxzl/cpflpzcxzlEv.js"/>
 <js:load scriptPath="supply/cpflpzcx/js/cpflpzcxxl/cpflpzcxxlUi.js"/>
 <js:load scriptPath="supply/cpflpzcx/js/cpflpzcxxl/cpflpzcxxlEv.js"/>
 <js:load scriptPath="supply/cpflpzcx/js/cpflpzcxUi.js"/>
 <js:load scriptPath="supply/cpflpzcx/js/cpflpzcxEv.js"/>
<script type="text/javascript">
var xllistPanel = Ext.id();
var zllistPanel = Ext.id();
  FunctionMgr.load({
			mainfn:com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxMgr
		});
 </script>
<title>产品分类配置查询管理</title>
</head>
<body>
<div id="cpflpzcxMgr"></div>
</body>
</html>
