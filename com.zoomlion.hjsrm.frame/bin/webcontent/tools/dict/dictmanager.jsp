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
<ext:dict property="ABF_STATUS1"   dictTypeId="ABF_STATUS" />
<ext:dict property="ABF_STATUS2"    dictTypeId="AC_RESTYPE"  filterOp=">" filterStr="tab"/>
<ext:dict property="ABF_STATUS3"    dictTypeId="province"  filterOp=">" filterStr="1"  />

<ext:dict property="ABF_STATUS4"    dictTypeId="city"  filterOp="!=" filterStr="11"  />
<ext:dict property="ABF_STATUS5"   dictTypeId="sys_code_12" filterOp="!=" filterStr="11"  filterField="filter"/>
<script type="text/javascript">
 var dataorgseq="<%=dataorgseq%>";
  var dataorgid="<%=dataorgid%>";
  BIZ.ns('com.zoomlion.hjsrm.dict');
 </script>
 <js:load scriptPath="frame/tools/dict/js/dictType/dictTypeUi.js"/>
 <js:load scriptPath="frame/tools/dict/js/dictType/dictTypeEv.js"/>
 <js:load scriptPath="frame/tools/dict/js/dictEntry/dictEntryUi.js"/>
 <js:load scriptPath="frame/tools/dict/js/dictEntry/dictEntryEv.js"/>
 <js:load scriptPath="frame/tools/dict/js/dictUi.js"/>
 <js:load scriptPath="frame/tools/dict/js/dictEv.js"/>
<script type="text/javascript">
  FunctionMgr.load({
			mainfn:com.zoomlion.hjsrm.dict.DictMgr
		});
 </script>
<title>业务字典管理</title>
</head>
<body>
<div id="dictMgr"></div>
</body>
</html>
