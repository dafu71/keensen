<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>

<%
			Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "datas");
	String rootUrl = request.getRequestURL().toString();
	
	rootUrl = rootUrl.replace("/qinsen/produce/qijian/printTags.jsp",
			"");
%>

<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>打印序列号</title>
<script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>
<script type='text/javascript'
	src="base/jquery/plugins/JsBarcode.all.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>
<script type="text/javascript"
	src="base/jquery/plugins/jquery.qrcode.js"></script>
<%--<script type="text/javascript"
	src="qinsen/produce/tumo/js/printTumoTag.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>
--%>
<style>

.image-container {
			width: 530px;
			height: 88px;
            position: relative;
            display: inline-block;
            border: 0px solid #ccc;
        }
        
 image-container img {
    max-width: 100%; /* 图片最大宽度不超过容器宽度 */
    height: auto; /* 保持图片的宽高比 */
}
        
 .text-overlay {
            position: absolute;
            cursor: move;
            user-select: none;
            white-space: nowrap;
            text-shadow: 1px 1px 2px white; /* 增强文字可读性 */
        }
        
 .svg-width{
 	width:100mm
 }

.main_table {
	width: 530px;
	height: 88px;
	text-align: center;
	vertical-align: middle;
	margin: 0 0;
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

.span_a {
	vertical-align: middle;
	margin-left: 1mm;
	font-size: 18pt;
	font-family:simsun;
	font-color: #000000;
	font-weight: bold;
}

.span_day {
	align: center;
	text-align: left;
	vertical-align: middle;
	font-family: Arial;
	font-size: 11pt;
	font-color: #000000;
	font-weight: bold;
}

@media print {
         body{
            -webkit-print-color-adjust:exact;
            -moz-print-color-adjust:exact;
            -ms-print-color-adjust:exact;
            print-color-adjust:exact;
        } 
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

<div id="printContent" align="center">
<%
for (int i = 0; i < list.length; i++) {
%>

<table style="background-size: cover;page-break-after:always;"
	class="main_table" border=0>
	<tr hight="88px">
		<td align="center">
		<div class="image-container" id="image-container<%=i %>"></div>
		</td>
	</tr>

</table>
<%
}
%>
</div>

<script type="text/javascript">

	function delayFunction(fn, delay) {
    	setTimeout(fn, delay);
	}
 
	// 要延迟执行的函数
	function printFunction() {

    	window.print();
    	//delayFunction(closeFunction, 5000); // 延迟5秒执行关闭当前窗口
	}
	
	function closeFunction() {
    	//window.close();
	}
 
 
function initPage() {
	
						
						var dayCode = getDayCode();// 获取入库日期编码
			<%-- 循环开始--%>			
			<% 	for (int i = 0; i < list.length; i++) { 		
						String batchNo = list[i].get("qjBatchNo").toString();
						
						int batchNoFontSize = batchNo.length()<=10?25:22;
						
						int yBatchNo = 30;
						int xBatchNo = 80;
						
						
			%>			
				var batchNo = '<%=batchNo %>';
				var container = document.getElementById('image-container<%=i %>');
											
						var barcodeElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
						barcodeElement.setAttribute("id", 'barcode_' + batchNo);
						barcodeElement.setAttribute("width", '200');
												
						barcodeElement.style.position = "absolute"; // 绝对定位
					    barcodeElement.style.top = "<%=yBatchNo %>px";          
					    barcodeElement.style.left = "<%=xBatchNo %>px"; 
						
						container.appendChild(barcodeElement);
						const options<%=i %> = {
							format : "CODE128",
							displayValue : true,
							fontSize : <%=batchNoFontSize %>,
							font : 'msyhbd',
							fontOptions : 'bold',
							textMargin : 0,
							height : <% if(batchNoFontSize==25){ %>50 <%} else { %>25<%} %>,
							margin : 0,
							width : <% if(batchNoFontSize==25){ %>2.5 <%} else { %>2<%} %>
							};
						
						JsBarcode(barcodeElement, batchNo, options<%=i %>);
						
            			
						
					
							    
    
   <%-- 循环结束--%>
    <% } %>    					
					// 调用延时函数
					delayFunction(printFunction, 2000); // 延迟2秒执行打印
					
					
	};
</script>
</body>


</html>
