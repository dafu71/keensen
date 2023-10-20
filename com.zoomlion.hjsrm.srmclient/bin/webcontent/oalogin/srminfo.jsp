<%@include file="/common/common.jsp"%>
<%@include file="/common/skins/skin0/component.jsp"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>无访问权限</title>
<link rel="stylesheet" href="/default/css/style1/style-customoa.css" type="text/css"/>
</head>
<%
String tuserid=(String)request.getAttribute("tuserid");
String troleid=(String)request.getAttribute("troleid");
Boolean flag=(Boolean)request.getAttribute("flag");
String retCode=(String)request.getAttribute("retCode");
//System.out.println("用户===="+tuserid);
//System.out.println("角色===="+troleid);
//System.out.println("是否登陆===="+flag);
//System.out.println("返回代码===="+retCode);
%>
<body topmargin="0" leftmargin="0">
<div style="display: none">
用户:<h:text value="<%=tuserid %>"/>
角色:<h:text value="<%=troleid %>"/>
是否登陆:<h:text value="<%=flag.toString() %>"/>
返回代码:<h:text value="<%=retCode %>"/>
</div>
</body>
</html>
