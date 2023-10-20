<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
	
	String fname =request.getParameter("fname");

 %>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2018-07-11 08:39:47
  - Description:
-->
<head>
<title>Title</title>
</head>
<body>
<input type="button" value="关闭" onclick="javascript:window.close();">
</body>
<script type="text/javascript">
window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="+ '<%=fname %>';	
</script>
</html>