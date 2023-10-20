<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="java.net.URLEncoder"%>

<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);

	String techId = request.getParameter("techId");
	//流程id
	String processinstid = request.getParameter("processinstid");
	String dataorgid = (String) userObject.getAttributes().get(
			"dataorgid");
	Long operatorid = (Long) userObject.getAttributes().get(
			"operatorid");
	String operatorname = URLEncoder.encode((String) userObject
			.getAttributes().get("operatorname"), "UTF-8");
	String type = request.getParameter("type");
	//System.out.println("processinstid="+processinstid + ",techId=" + techId+ ",type=" + type);
	String renderToDiv = "techChangeView"; //已办查看工单
	if (null == processinstid) {
		if (null == type) {//待办查看工单
			renderToDiv = "techChangeView4do";
		} else {//弹窗查看工单
			renderToDiv = "techChangePopView";
		}

	}
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2016-07-08 15:03:17
  - Description:
-->
<head>
<title>查看工单</title>
<script type="text/javascript">
	BIZ.ns('com.zoomlion.hjsrm.techChange');
	var renderToDiv = "<%=renderToDiv %>";
</script>
<js:load scriptPath="frame/ui/jslib/extex/fileupload/attach-min.js" />
<js:load scriptPath="techChange/view/js/viewUi.js" />
<js:load scriptPath="techChange/view/js/viewEv.js" />
<script type="text/javascript">
	var dataorgid = "<%=dataorgid%>";
	var operatorid = "<%=operatorid%>";
	var operatorname = "<%=operatorname%>";
	var techId =<%=techId %>;
	var	processinstid = "<%=processinstid %>"; 
	
	
	<%
	if(null != processinstid ){
		
	 %>	
	
		//查询业务流水
		Ext.Ajax.request({
					method : "post",
					scope : this,
					jsonData:{
						processinstid : processinstid
					},
					url : 'com.zoomlion.hjsrm.techChange.techChange.getTechId.biz.ext',
					success : function(response, action) {
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							techId = result.ret;
							FunctionMgr.load({ 
								mainfn:com.zoomlion.hjsrm.techChange.View
							});						
							
						}
					},
					failure : function(resp, opts) {
						Ext.Msg.alert("系统提示", "系统错误,加载失败", function() {
							
								});
	
					}
				});

<% }else{ %>

	FunctionMgr.load({ mainfn:com.zoomlion.hjsrm.techChange.View });	
<% } %>

	

	
	
</script>
</head>
<body>
<div id='<%=renderToDiv %>'></div>
</body>
</html>
