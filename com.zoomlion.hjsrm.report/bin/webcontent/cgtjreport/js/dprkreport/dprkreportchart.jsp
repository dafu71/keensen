<%@page contentType="text/xml;charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%
	String dataXml = request.getParameter("dataXml");
%>
<html>
<!-- 
  - Author(s): liuxin
  - Date: 2015-12-11 13:44:41
  - Description:
-->
<head>
<title>Title</title>

</head>
<body>
<div id="myChartDiv"></div>
<script type="text/javascript"  charset="UTF-8">

var dataXml = '<%=dataXml%>';
	var myChart = new FusionCharts("FusionCharts/FCF_Doughnut2D.swf","myChartId","608","350");
    myChart.setDataXML(dataXml);
    myChart.render("myChartDiv");


</script>
</body>
</html>