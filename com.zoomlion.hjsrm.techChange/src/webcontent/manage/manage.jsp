<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="java.net.URLEncoder"%>
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	String uid = (String) userObject.getUserId();
	String uname = (String) userObject.getUserName();
	String uorg = (String) userObject.getUserOrgName();
	String uorgid = (String) userObject.getUserOrgId();

	String dataorgid = (String) userObject.getAttributes().get(
			"dataorgid");
	Long operatorid = (Long) userObject.getAttributes().get(
			"operatorid");
	String operatorname = URLEncoder.encode((String) userObject
			.getAttributes().get("operatorname"), "UTF-8");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2016-06-30 09:18:02
  - Description:
-->
<head>
<title>技术图样变更</title>
<script type="text/javascript">
BIZ.ns('com.zoomlion.hjsrm.techChange');
</script>
<js:load scriptPath="pub/common/selectParticipantsWin.js"/>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js" />
<js:load scriptPath="pub/common/tree/pLoader.js" />
<js:load scriptPath="pub/common/tree/pTree.js" />
<js:load scriptPath="pub/common/productnoCombo.js" />
<js:load scriptPath="techChange/manage/js/manageUi.js" />
<js:load scriptPath="techChange/manage/js/manageEv.js" />

<script type="text/javascript">
		var uname = "<%=uname %>";
		var uid = "<%=uid %>";
		var uorg = "<%=uorg %>";
		var uorgid = "<%=uorgid %>";
		var dataorgid = "<%=dataorgid%>";
		var operatorid = "<%=operatorid%>";
		var operatorname = "<%=operatorname%>";
		var description = "techChange/view/view.jsp";

	 FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.techChange.Manage
		});
 </script>
</head>
<body>
<div id="techChangeMgr"></div>
</body>
</html>
