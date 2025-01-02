<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>

<%
	String specName = request.getParameter("specName");
	String logoUrl = request.getParameter("logoUrl");
	String logoId = request.getParameter("logoId");
	String withStar = request.getParameter("withStar"); 
	Object txt = request.getParameter("txt"); 
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "list");
	String rootUrl = request.getRequestURL().toString();
  	rootUrl = rootUrl.replace("/qinsen/produce/pack/print/printMarks.jsp","");
  	
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
<script type="text/javascript"
	src="qinsen/produce/tumo/js/printTumoTag.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>

<style type="text/css">
body {
	margin : 0px;
}
table {
	border-spacing: 0
}

.main_table {
	width: 80mm;
	height: 58mm;
	text-align: center;
	vertical-align: middle;
	margin: auto;
	/* margin-top: 2mm; */
	font-size: 10pt;
	/* 	border:1px solid #000000; */
}

.logo {
	margin: auto;
	width: auto;
	height: auto;
	max-width: 98%;
	max-height: 15mm;
}

.td_a {
	height:15mm;
	vertical-align: middle;
}

.td_b {
	height:9mm;
	text-align: center;
	vertical-align: middle;
	font-size: 14pt;
	padding:0px;
	margin:0px;
}


.td_c {
	height:7mm;
	text-align:center;
	vertical-align: middle;
	font-size: 14pt;
	padding:0px;
	margin:0px;
}

.td_d {
	height:18mm;
	width:10mm;
	text-align:right;
	padding:0px;
	margin:0px;
}

.td_e{
	width:52mm;
	text-align:center;
	padding:0px;
	margin:0px;
}

.td_f{
	width:18mm;
	text-align:center;
	padding:0px;
	margin:0px;
}

.symbol_dry {
	width:3mm;
	height:3mm;
	vertical-align: middle;
}

.symbol_wet {
	margin-left:15mm;
	width:3mm;
	height:3mm;
	vertical-align: middle;
}

.span_a {
	vertical-align: middle;
	margin-left: 1mm;
	font-size: 12pt;
	font-family:simsun;
	font-color: #000000;
	font-weight: bold;
}

.model {
	margin-left:2mm;
	vertical-align: middle;
	font-size: 18pt;
	font-family: simsun;
	font-color: #000000;
	font-weight: bold;
}

.specName {
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 18pt;
	font-color: #000000;
	font-weight: bold;
}

.specName2 {
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 10pt;
	font-color: #000000;
	font-weight: bold;
}

.mytxt {
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 14pt;
	font-color: #000000;
}

.line {
	width: 68mm;
	margin-block-start: 0;
	margin-block-end: 0;
}

.square {
	display: inline-block;
	vertical-align: top;
	border: 0.1mm dashed #000000;
	height: 13mm;
	width: 13mm;
}

.span_sn {
	align: center;
	text-align: left;
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 10pt;
	font-color: #000000;
	font-weight: bold;
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
</body>
<script type="text/javascript">
function initPage() {
	
	var dayCode = getDayCode();// 获取入库日期编码
			<% 	for (int i = 0; i < list.length; i++) { %>
					var batchNo = '<%=list[i].get("batchNo") %>';
					var specName = '<%=specName %>';
					var specNameLen = specName.length;
	
					var htmlArr = new Array();
					if (i == <%=list.length-1 %>) {
						htmlArr.push('<table id="printview" class="main_table" border=0>');
					} else {
						htmlArr.push('<table id="printview" class="main_table" style="page-break-after:always;" border=0>');
					}
					htmlArr.push('<tr>');
					htmlArr.push('<td colspan=3 class="td_a">');
					htmlArr.push('<img class="logo" src="' + '<%=logoUrl %>' + '"></img>');
					htmlArr.push('</td>');
					htmlArr.push('</tr>');
					htmlArr.push('<tr>');
					htmlArr.push('<td colspan=3 class="td_b">');
					htmlArr.push('<span class="model">MODEL:</span>');
					if(specNameLen>13){
						htmlArr.push('<span class="specName2">' + '<%=specName %>' + '</span>');
					}else{
						htmlArr.push('<span class="specName">' + '<%=specName %>' + '</span>');
					}
					htmlArr.push('</td>');
					htmlArr.push('</tr>');
					<% if(null != txt && !"".equals(txt) ){ %>
					htmlArr.push('<tr>');
					htmlArr.push('<td colspan=3 class="td_b">');
					htmlArr.push('<span class="mytxt">' + '<%=txt.toString() %>' + '</span>');
					htmlArr.push('</td>');
					htmlArr.push('</tr>');
					
					<% } %>
					
					
					htmlArr.push('<tr>');
					htmlArr.push('<td colspan=3 style="height:1mm;">');
					htmlArr.push('<hr color="#000000" size=2 class="line">');
					htmlArr.push('</td>');
					htmlArr.push('</tr>');
					htmlArr.push('<tr>');
					htmlArr.push('<td colspan=3 class="td_c">');
					var imgDry =  '<%=rootUrl %>/qinsen/produce/pack/print/image/round.png';
					if (<%=list[i].get("hasWaterTest") %> > 0) {
						imgDry = '<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png';
					}
					htmlArr.push('<img src="' + imgDry + '" class="symbol_dry"/>');
					htmlArr.push('<span class="span_a">DRY</span>');
					var imgWet = '<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png';
					if (<%=list[i].get("hasWaterTest") %> > 0) {
						imgWet = '<%=rootUrl %>/qinsen/produce/pack/print/image/round.png';
					}
					htmlArr.push('<img src="' + imgWet + '" class="symbol_wet"/>');
					htmlArr.push('<span class="span_a">WET</span>');
					htmlArr.push('</td>');
					htmlArr.push('</tr>');
					htmlArr.push('<tr>');
					htmlArr.push('<td class="td_d">');
					htmlArr.push('<span class="span_sn">S/N</span>');
					htmlArr.push('</td>');
					htmlArr.push('<td class="td_e">');
					htmlArr.push('<svg id="barcode_' + '<%=list[i].get("batchNo") %>' + '" style="width:50mm"></svg>');
					htmlArr.push('</td>');
					htmlArr.push('<td class="td_f">');
					htmlArr.push('<div class="square">');
					if('<%=withStar %>' == 'Y'){
						htmlArr.push('<img src="' + '<%=rootUrl %>/qinsen/produce/pack/print/image/mark_star.png" class="star"/>');
					}
					htmlArr.push('</div>');
					if ('<%=logoId %>' == '63' || '<%=logoId %>' == '115') {
						htmlArr.push('<span class="span_day">' + dayCode + '</span>');
					} else {
						htmlArr.push('<span class="span_day;" style="color:rgba(255,255,255,0)">' + dayCode + '</span>');
					}

					htmlArr.push('</td>');
					htmlArr.push('</tr>');
					htmlArr.push('</table>');

					$("body").append(htmlArr.join(''));
					var barcode = document.getElementById('barcode_' + batchNo), options = {
						format : "CODE128",
						displayValue : true,
						fontSize : 14,
						font : 'arial',
						fontOptions : 'bold',
						textMargin : 0,
						height : 50,
						margin : 0,
						width : 1.5
					};
					JsBarcode(barcode, batchNo, options);// 原生
				
	<% } %>
	//dwr.engine.setAsync(true);
	window.print();
}

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


</html>
