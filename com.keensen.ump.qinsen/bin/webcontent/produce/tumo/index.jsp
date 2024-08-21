<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%
	com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  	String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  	Long operatorid=(Long)userObject.getAttributes().get("operatorid");
  	String operatorname=URLEncoder.encode((String)userObject.getAttributes().get("operatorname"),"UTF-8");
  	String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
  	boolean workerflag = roleId.indexOf("10001161")>-1;
    String uid = userObject.getUserId();
    String userOrgId = userObject.getUserOrgId();
     //10001322膜片测试-工艺员
    int gyyFlag = roleId.indexOf("10001322")>-1?1:0;
    //10001441 更换漂洗槽提醒
    int replaceTroughFlag = roleId.indexOf("10001441")>-1?1:0;
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>涂膜记录</title>
<script type="text/javascript">
	BIZ.ns('com.keensen.ump.qinsen.produce');
</script>
<script type="text/javascript">
	function dayDiff(start,end){
		var datediff = (new Date(end)) - (new Date(start));
		datediff = datediff / 24 / 60 / 60 / 1000;
		return datediff;
		
	}
</script>
<ext:dict property="STORAGE_TYPE"   dictTypeId="STORAGE_TYPE" />
<ext:dict property="ABF_YESORNO"   dictTypeId="ABF_YESORNO" />
<ext:dict property="KS_YESORNO"   dictTypeId="KS_YESORNO" />
<ext:dict property="KS_QUALITY_JUDGE_ITEM"   dictTypeId="KS_QUALITY_JUDGE_ITEM" />

<js:load scriptPath="pub/common/operatorroleCombo.js"/>
<js:load scriptPath="pub/common/storageCombo.js" />
<js:load scriptPath="pub/common/supCombo.js" />
<js:load scriptPath="pub/common/mpworkerCombo.js" />
<js:load scriptPath="pub/common/mpspecCombo.js" />
<js:load scriptPath="pub/common/mplineCombo.js" />
<js:load scriptPath="pub/common/mpperfCombo.js" />
<js:load scriptPath="pub/common/prodFlagSelCombo.js" />
<js:load scriptPath="pub/common/lineCombo.js" />
<js:load scriptPath="pub/common/teamCombo.js" />

<js:load scriptPath="pub/common/defectWin.js" />
<js:load scriptPath="pub/common/defectViewWin.js" />

<js:load scriptPath="qinsen/produce/tumo/js/manageUi.js"/>
<js:load scriptPath="qinsen/produce/tumo/js/manageEv.js"/>

<style type="text/css">
.x-grid3-cell-inner {-webkit-user-select:text;}
</style>
<script type="text/javascript">
  var uid = "<%=uid %>";
   <% if(workerflag){ %>
  var teamId = "<%=userOrgId %>";
  <% }else{ %>
  var teamId = '';
  <% } %>
  
  var gyyFlag = <%=gyyFlag %>;
  var replaceTroughFlag = <%=replaceTroughFlag %>;
  
  var maxMpd = 10;
  //var sumOutLength = 10;
  
  var listid = 'produce-tumo-list';
  FunctionMgr.load({ 
			mainfn:com.keensen.ump.qinsen.produce.tumoMgr
		});
 </script>
</head>
<body>
<div id="producetumomgr"></div>
</body>
</html>