<%@page pageEncoding="UTF-8"%><%@page import="com.zoomlion.hjsrm.clib.util.SrmFileUtil"%><%
	String filePath = "D://primeton_run//eos65_bybon//apache-tomcat-5.5.20//webapps"+(String) request.getAttribute("filePath");
	String fileName = (String) request.getAttribute("fileName");
	SrmFileUtil.downFile(response, filePath, fileName);
	response.flushBuffer();  
    out.clear();  
    out = pageContext.pushBody(); 
%>
