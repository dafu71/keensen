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
    String uname = userObject.getUserName();
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-09-15 10:15:43
  - Description:
-->
<head>
<title>测试jquery mobile</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="js/jquery.mobile-1.4.5.min.css">
<script src="js/jquery.min.js"></script>
<script src="js/jquery.mobile-1.4.5.min.js"></script>

</head>
<body>

<div data-role="page" id="pageone">
  <div data-role="header">
    <h1>欢迎来到我的主页</h1>
  </div>

  <div data-role="main" class="ui-content">
    <p>欢迎!</p>
    <a href="#pagetwo">弹出对话框</a>
  </div>

  <div data-role="footer">
    <h1>底部文本</h1>
  </div>
</div> 

<div data-role="page" data-dialog="true" id="pagetwo">
  <div data-role="header">
    <h1>我是一个对话框！</h1>
  </div>

  <div data-role="main" class="ui-content">
    <p>对话框与普通页面不同，它显示在当期页面上, 但又不会填充完整的页面，顶部图标 "X" 用于关闭对话框。</p>
    <a href="#pageone">跳转到第一个页面</a>
  </div>

  <div data-role="footer">
    <h1>对话框底部文本</h1>
  </div>
</div>

</body>
</html>