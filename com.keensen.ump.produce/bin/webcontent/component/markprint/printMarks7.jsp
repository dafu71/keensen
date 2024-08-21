<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>

<%
	
	//Object txt = request.getParameter("txt"); 
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "list");
	String rootUrl = request.getRequestURL().toString();
	
  	rootUrl = rootUrl.replace("/produce/component/markprint/printMarks7.jsp","");
  	
%>

<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>打印唛头</title>
<script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>
<script type='text/javascript'
	src="base/jquery/plugins/JsBarcode.all.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>
<script type="text/javascript"
	src="base/jquery/plugins/jquery.qrcode.js"></script>

<style>

body {
	margin : 0px;
}
table {
	border-spacing: 0
}

.main_table {
	width: 376px;
	height: 271px;
	text-align: center;
	vertical-align: middle;
	margin: auto;
	/* margin-top: 2mm; */
	font-size: 10pt;
	/* 	border:1px solid #000000; */
}

.symbol_dry {
	width:6mm;
	height:6mm;
	vertical-align: middle;
}

.symbol_wet {
	margin-left:15mm;
	width:6mm;
	height:6mm;
	vertical-align: middle;
}

.span_day {
	align: center;
	text-align: left;
	vertical-align: middle;
	font-family: Arial;
	font-size: 9pt;
	font-color: #000000;
	font-weight: bold;
}

.span_a {
	vertical-align: middle;
	margin-left: 1mm;
	font-size: 18pt;
	font-family:simsun;
	font-color: #000000;
	font-weight: bold;
}


</style>

<style media="print" type="text/css">
 	@page {
      size: auto;
      margin: auto;
    } 
	.noprint{
		visibility:hidden;
		display:none
	}
</style>
</head>
<body onload="initPage()">

<div id="printContent" align="center">
<% 	for (int i = 0; i < list.length; i++) { %>


<table 
background='<%=rootUrl %><%=list[i].get("url") %>' 
style="background-size: cover;page-break-after:always;"
class="main_table" border=0>
   <tr height="270px">   
   <td align='center' valign='middle' style='font-size: 20pt; font-weight: bold;'><%=list[i].get("prodBatchNo") %></td>
     
   </tr>
   
    
</table>
<% } %>
</div>
  <script type="text/javascript">
	function initPage() {
	
						
					window.print();
					
	};

</script>

</body>


</html>
