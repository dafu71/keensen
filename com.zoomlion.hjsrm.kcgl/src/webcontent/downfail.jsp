<%@page pageEncoding="UTF-8"%>
<%@page import="java.util.HashMap"%>
<%@include file="/common/common.jsp"%>
<%

	response.setContentType("text/html; charset=utf-8"); 
	String error = "导出数据超过10000条"; //返回错误信息
	response.getWriter().write("{success:true,msg:'"+error+"'}");
%>
