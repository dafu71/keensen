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
	
  	rootUrl = rootUrl.replace("/produce/component/markprint/printMarks1.jsp","");
  	
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

.star {
	align: center;
	text-align: center;
	vertical-align: middle;
	width: 13mm;
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

<% if(i==0){ %>
 <script type="text/javascript">
	/*
 * 获取当日的编码
 */
function getDayCode() {

	var date = new Date();
	var formattedDate = date.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }); // 将日期按指定格式进行格式化
	formattedDate = formattedDate.replaceAll('/', '-') ;

	var arr = formattedDate.split('-');
	var year, month, day1, day2;

	switch (arr[0]) {
		case '2022' :
			year = 'A';
			break;
		case '2023' :
			year = 'B';
			break;
		case '2024' :
			year = 'C';
			break;
		case '2025' :
			year = 'D';
			break;
		case '2026' :
			year = 'E';
			break;
		case '2027' :
			year = 'F';
			break;
		case '2028' :
			year = 'G';
			break;
		case '2029' :
			year = 'H';
			break;
		case '2030' :
			year = 'I';
			break;
		case '2031' :
			year = 'J';
			break;
		case '2032' :
			year = 'K';
			break;
		case '2033' :
			year = 'L';
			break;
	}

	switch (arr[1]) {
		case '01' :
			month = '1';
			break;
		case '02' :
			month = '2';
			break;
		case '03' :
			month = '3';
			break;
		case '04' :
			month = '4';
			break;
		case '05' :
			month = '5';
			break;
		case '06' :
			month = '6';
			break;
		case '07' :
			month = '7';
			break;
		case '08' :
			month = '8';
			break;
		case '09' :
			month = '9';
			break;
		case '10' :
			month = '0';
			break;
		case '11' :
			month = 'A';
			break;
		case '12' :
			month = 'B';
			break;
	}

	switch (arr[2].charAt(0)) {
		case '0' :
			day1 = '0';
			break;
		case '1' :
			day1 = 'A';
			break;
		case '2' :
			day1 = 'B';
			break;
		case '3' :
			day1 = 'C';
			break;
	}

	switch (arr[2].charAt(1)) {
		case '0' :
			day2 = '0';
			break;
		case '1' :
			day2 = 'A';
			break;
		case '2' :
			day2 = 'B';
			break;
		case '3' :
			day2 = 'C';
			break;
		case '4' :
			day2 = 'D';
			break;
		case '5' :
			day2 = 'E';
			break;
		case '6' :
			day2 = 'F';
			break;
		case '7' :
			day2 = 'G';
			break;
		case '8' :
			day2 = 'H';
			break;
		case '9' :
			day2 = 'I';
			break;
	}

	return year + month + day1 + day2;
}

</script>
<% } %>
<table 
background='<%=rootUrl %><%=list[i].get("url") %>' 
style="background-size: cover;page-break-after:always;"
class="main_table" border=0>
   <tr height="28px">   
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>   
   </tr>
   <tr height="30px">   
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>   
   </tr>
   <tr height="30px">   
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>   
   </tr>
   <tr height="60px">   
   <td width="47px"></td>
   <td width="47px"></td>
   <td width="47px"></td>
   <% String prodSpecName2 = list[i].get("prodSpecName2").toString();
   	  String fontSize = prodSpecName2.length() >= 16 ? "20px"
					: prodSpecName2.length() > 9 ? "24px" : "30px";
    %>
   <td colspan=5  valign="top" align="left" style="font-size: <%=fontSize %>;">&nbsp;&nbsp;&nbsp;<%=list[i].get("prodSpecName2") %><br><br></td>
     
   </tr>
   
   <tr height="30px">   
   <td width="47px"></td>
   <td width="47px"></td>
   <% if(list[i].get("dryWet").equals("干")){%>	
	<td colspan=2 align="center" valign="middle"><img src="<%=rootUrl %>/qinsen/produce/pack/print/image/round.png" class="symbol_dry"/><span class="span_a">DRY</span></td>
	<td colspan=2 align="center" valign="middle"><img src="<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png" class="symbol_wet"/><span class="span_a">WET</span></td>
	<% }else{ %>
	<td colspan=2 align="center" valign="middle"><img src="<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png" class="symbol_dry"/><span class="span_a">DRY</span></td>
	<td colspan=2 align="center" valign="middle"><img src="<%=rootUrl %>/qinsen/produce/pack/print/image/round.png" class="symbol_wet"/><span class="span_a">WET</span></td>

	<% } %>
  
   <td width="47px"></td>
   <td width="47px"></td>   
   </tr>
   <tr height="62px">   
   <td width="47px"></td>
   <td colspan=5 align="center" valign="top"><svg id="barcode_<%=list[i].get("prodBatchNo") %>" style="width:50mm"></svg></td>
   
   <td colspan=2 align="center" valign="bottom">
   
   <img src="<%=rootUrl %>/qinsen/produce/pack/print/image/mark_star.png" class="star">
   
   <span class="span_day;">
    <script type="text/javascript">
    var dayCode = getDayCode();// 获取入库日期编码
    document.write(dayCode);
    
    </script>
   </span></td>
      
   </tr>
    
</table>
<% } %>
</div>
 <script type="text/javascript">
	function initPage() {
	
						<% 	for (int i = 0; i < list.length; i++) { %>
						var batchNo = '<%=list[i].get("prodBatchNo") %>';
						var barcode = document.getElementById('barcode_' + batchNo), 
						options = {
						format : "CODE128",
						displayValue : true,
						fontSize : 15,
						font : 'msyhbd',
						fontOptions : 'bold',
						textMargin : 0,
						height : 50,
						margin : 0,
						width : 1
						};
						
					JsBarcode(barcode, batchNo, options);
					<% } %>
					setTimeout(function() {
        				window.print();
    				}, 1000);
	
					
	};

</script>

</body>


</html>
