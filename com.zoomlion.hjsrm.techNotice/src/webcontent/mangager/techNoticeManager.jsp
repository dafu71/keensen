<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="java.io.*"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%
com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
  String dataorgid=(String)userObject.getAttributes().get("dataorgid");
  String userOrgName=(String)userObject.getUserOrgName();
  String userId=(String)userObject.getUserId();
  userOrgName=userOrgName==null?"中联重科环境产业公司":userOrgName;  
  Long operatorid=(Long)userObject.getAttributes().get("operatorid");  
  String operatorname=(String)userObject.getAttributes().get("operatorname");
  String operator=URLEncoder.encode(operatorname,"UTF-8");  
  String roleId=(String)userObject.getAttributes().get("roles_rolecode_str");
  //String modiflag="0";
  //只有数据查看角色对应人员才有权限查看所有数据
	//if(roleId.toString().indexOf("00201")!=-1 || roleId.toString().indexOf("sysadmin")!=-1 || roleId.toString().indexOf("srmadmin")!=-1){
	//	modiflag="1";
	//}	
%>
<html>
<!-- 
  - Author(s): wangfuqiang
  - Date: 2014-12-15 10:21:24
  - Description:
-->
<head>
<title>技术通知管理</title>
<ext:dict property="TECH_PRODUCT_TYPE"  dictTypeId="TECH_PRODUCT_TYPE" />
<ext:dict property="TECH_NOTICES_LEVEL"  dictTypeId="TECH_NOTICES_LEVEL" />
<ext:dict property="TECH_NOTICES_TYPE"  dictTypeId="TECH_NOTICES_TYPE" />
<ext:dict property="TECH_NOTICES_DEPTS"  dictTypeId="TECH_NOTICES_DEPTS" />
<ext:dict property="TECH_PROCESS_STATUS"  dictTypeId="TECH_PROCESS_STATUS" />
<script type="text/javascript">
var dataorgid = "<%=dataorgid%>";
var operatorid = "<%=operatorid%>";

var operatorname = "<%=operatorname%>";
var userOrgName = "<%=userOrgName%>";
var operator = "<%=operator%>";

BIZ.ns('com.zoomlion.hjsrm.techNotice');
</script>

<script type="text/javascript" src="srmclient/common/commonFunc.js"></script>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js"/>

<js:load scriptPath="techNotice/mangager/js/query/querytechNoticeUi.js"/>
<js:load scriptPath="techNotice/mangager/js/query/querytechNoticeEv.js"/>
<js:load scriptPath="techNotice/mangager/js/add/addTechNoticeUi.js"/>
<js:load scriptPath="techNotice/mangager/js/add/addTechNoticeEv.js"/>

<script type="text/javascript">
  var listId = Ext.id();
  var noticeId = Ext.id();	
  var attachId = Ext.id();
  var personNameId=Ext.id();
  var deptNameId=Ext.id();
  var techDate=Ext.id();
  var userId = "<%=userId%>";
  var str;
  FunctionMgr.load({ 
			mainfn:com.zoomlion.hjsrm.techNotice.QueryMgr
		});
 </script>
</head>
<body>
<div id="queryMgr"></div>
</body>
</html>