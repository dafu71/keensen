<!-- 
  - Author(s): liuxin
  - Date: 2015-12-14 08:38:14
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
<div id="pie3dChartDiv"></div>
<script type="text/javascript" charset="UTF-8">

var dataXml = '<%=dataXml%>';
	var myChart = new FusionCharts("FusionCharts/FCF_Pie3D.swf","myChartId","608","400");
    myChart.setDataXML(dataXml);
    myChart.render("pie3dChartDiv");


</script>
</body>
</html>