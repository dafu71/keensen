<%@page pageEncoding="UTF-8"%><%@page import="com.zoomlion.hjsrm.clib.util.SrmFileUtil"%><%
	String filePath = (String) request.getAttribute("filePath");
	String fileName = (String) request.getAttribute("fileName");
	response.reset();
	SrmFileUtil.downFile(response, filePath, fileName);
	response.flushBuffer();  
	
    out.clear();  
    out = pageContext.pushBody(); 
%>
