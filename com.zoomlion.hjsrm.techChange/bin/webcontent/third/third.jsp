<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="java.net.URLEncoder"%>

<%
	com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
	
	//工作项id
	String workitemid = request.getParameter("workitemid");	
	//流程id
	String processinstid = request.getParameter("processinstid");	
	//listId
	String listId = request.getParameter("listId");	
	
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
  - Date: 2016-07-11 16:58:01
  - Description:
-->
<head>
<title>业务确认</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.techChange');
</script>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js" />
<js:load scriptPath="techChange/third/js/thirdUi.js" />
<js:load scriptPath="techChange/third/js/thirdEv.js" />

<script type="text/javascript">
	
	var dataorgid = "<%=dataorgid%>";
	var operatorid = "<%=operatorid%>";
	var operatorname = "<%=operatorname%>";
	
	var techChangeThird = {
		processinstid : <%=processinstid %>, 
		workitemid : <%=workitemid %>,
		techId : 0,
		listId : "<%=listId %>"
	}
	//查询业务流水
	Ext.Ajax.request({
				method : "post",
				scope : this,
				jsonData:{
					processinstid : techChangeThird.processinstid
				},
				url : 'com.zoomlion.hjsrm.techChange.techChange.getTechId.biz.ext',
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						techChangeThird.techId = result.ret;
						FunctionMgr.load({ 
							mainfn:com.zoomlion.hjsrm.techChange.Third
						});						
						
					}
				},
				failure : function(resp, opts) {
					Ext.Msg.alert("系统提示", "系统错误,加载失败", function() {
						
							});

				}
			});
</script>
</head>
<body>
<div id="techChangeThird"></div>
</body>
</html>