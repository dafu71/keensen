<!-- 
  - Author(s): liuxin
  - Date: 2016-03-16 11:45:14
  - Description:
-->
<%@page contentType="text/xml;charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%
	String dataXml = request.getParameter("dataXml");
%>
<html>
<head>
<title>Title</title>

</head>
<body>
<div id="MScolumn3dChartDiv"></div>
<script type="text/javascript" charset="UTF-8">

var dataXml = '<%=dataXml%>';
	var myChart = new FusionCharts("FusionCharts/FCF_MSColumn3DLineDY.swf","myChartId","608","320");
    myChart.setDataXML(dataXml);
    myChart.render("MScolumn3dChartDiv");


</script>
</body>
</html>