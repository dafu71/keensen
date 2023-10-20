<%@page pageEncoding="UTF-8" import="java.util.*"%>
<%@ page import="java.text.*"%>
<%@ page import="cn.jnz.encryption.MD5"%>
<%
String contextPathStr = request.getContextPath();  
String userid=request.getParameter("oaAccount");
SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhh");
Calendar c = Calendar.getInstance();
String date = sdf.format(c.getTime());
%>
<script type="text/javascript">
	    window.location.href="com.zoomlion.hjsrm.srmclient.common.oalogin.flow?oaAccount=<%=userid%>&oaKey=<%=MD5.encrypt(userid+date) %>"  
		var url = "<%=contextPathStr %>/frame/ui/page/index.jsp?keycode=<%=MD5.encrypt(userid+date) %>";
		window.open(url);
	
</script>	