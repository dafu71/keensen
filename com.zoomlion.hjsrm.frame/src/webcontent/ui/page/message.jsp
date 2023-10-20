<%@page pageEncoding="UTF-8"%>
<%
String msg = request.getParameter("msg");
%>
<html>
<!-- 
  - Author(s): 吕俊涛
  - Date: 2013-12-03 11:51:09
  - Description:消息提醒页面
-->
<head>
<title>消息提醒页面</title>
</head>
<body
	style="margin:5px 5px 5px 5px;padding:5px 5px 5px 5px;overflow:hidden;">
<table style="width:100%;height:100%;" cellpadding="1" cellspacing="0">
	<tbody>
		<tr>
			<td align="center" valign="middle" style="font-size: 16px;" class="">
			<span class="icon-application_page_error">&nbsp;</span><span><%=msg%></span>
			</td>
		</tr>
	</tbody>
</table>
</body>
</html>
