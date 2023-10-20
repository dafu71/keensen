<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%--
	套打模板管理的所有界面构造
 	@author Chenmin (mailto:chenmin@primeton.com)
--%>
<%@page import="com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateBean"%>
<html>
	<head>
	<title>套打模板管理</title>
		<script type="text/javascript">
	  		BIZ.ns("com.zoomlion.hjsrm.interfaces");
	  	</script>
	  	<js:load scriptPath="interfaces/print/js/printTemplateUi.js"/>
	  	<js:load scriptPath="interfaces/print/js/printTemplateEv.js"/>
	  	<script type="text/javascript">
	  		FunctionMgr.load({mainfn : com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr});
	  	</script>
	</head>
	<body>
		<script type="text/javascript">
		var temp_file= '<%=TJkPrinttemplateBean.TEMP_FILE.replace('\\','/') %>';
		</script>
		<style type="text/css">
		.icon-database_export { background-image: URL("${pageContext.request.contextPath}/interfaces/print/img/database_export.png") !important; }
		.icon-database_import { background-image: URL("${pageContext.request.contextPath}/interfaces/print/img/database_import.png") !important; }
		 </style>
		<div id="TJkPrinttemplateDiv"></div>
	</body>
</html>
