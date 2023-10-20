<%@page pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="com.zoomlion.hjsrm.frame.auth.config.FrameConfig"%>
<%@page import="com.zoomlion.hjsrm.core.common.Common"%>
<html>
<html>
<head>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";

	Object theme = session.getAttribute("theme");
	session.setAttribute("theme", theme == null ? "default" : theme);
	String remoteIP =Common.getClientIpAddr(request);
	String sysname = Common.getConfigValue("SY_SYSNAME");
	String hasvcode = FrameConfig.getFrameConfigValue("frame-config", "login-config", "use_verify_code");
%>
<base href="<%=basePath%>">
<title><%=sysname%>-登录</title>
<script>
var hasvcode = <%=hasvcode%>;
var remoteIP ='<%=remoteIP%>';
</script>
</head>

<body>
</body>
</html>
