<%@page pageEncoding="UTF-8"%>
<%@page import="java.util.HashMap"%>
<%@include file="/common/common.jsp"%>
<%
	response.setContentType("text/html; charset=utf-8");
	String ids = (String) request.getAttribute("ids");
	
	response.getWriter().write(
			"{success:true,ids:'" + ids + "'}");
%>
