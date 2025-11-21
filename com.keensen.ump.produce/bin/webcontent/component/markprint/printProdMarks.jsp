<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>

<%
			Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "list");
	String rootUrl = request.getRequestURL().toString();
	String isStar = null == request.getParameter("isStar") ? ""
			: request.getParameter("isStar").toString();
	
	
	
	int tableHeight = 265;

	rootUrl = rootUrl.replace(
			"/produce/component/markprint/printProdMarks.jsp", "");
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
<%--<script type="text/javascript"
	src="qinsen/produce/tumo/js/printTumoTag.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>
--%>
<style>

.image-container {
			width: 386px;
			height: 265px;
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
 	width:50mm
 }

.main_table {
	width: 386px;
	height: 265px;
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

.span_aa {
	vertical-align: middle;
	margin-left: 1mm;
	font-size: 16px;
	font-family:Arial;
	font-color: #000000;
	
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

<div id="printContent" align="left">
<%
for (int i = 0; i < list.length; i++) {
%>

<table style="background-size: cover;page-break-after:always;"
	class="main_table" border=0>
	<tr hight="260px">
		<td align="left">
		<div class="image-container" id="image-container<%=i %>"><img
			src="<%=rootUrl %><%=list[i].get("url") %>" id="preview-image<%=i %>">
		</div>
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
			
						String ifPrintNsf = null == list[i].get("reserve3")?"N" : list[i].get("reserve3").toString();
						int xNsf = null == list[i].get("reserve5")? 100000: Integer.parseInt(list[i].get("reserve5").toString());
						int yNsf = null == list[i].get("reserve4")? 100000: Integer.parseInt(list[i].get("reserve4").toString());
								
						String prodBatchNo = list[i].get("printBatchNo").toString();
						String ifPrintSpecName = list[i].get("ifPrintSpecName").toString();
						String ifPrintBatchNo = list[i].get("ifPrintBatchNo").toString();
						String ifPrintDryWet = list[i].get("ifPrintDryWet").toString();
						String ifPrintDayCode = list[i].get("ifPrintDayCode").toString();
						int yBatchNo = Integer.parseInt(list[i].get("yBatchNo").toString());
						int xBatchNo = Integer.parseInt(list[i].get("xBatchNo").toString());
						int yBatchSpecName = Integer.parseInt(list[i].get("yBatchSpecName").toString());
						int xBatchSpecName = Integer.parseInt(list[i].get("xBatchSpecName").toString());
						String prodSpecName = list[i].get("prodSpecName2").toString();
						
						String fontSize = prodSpecName.length() >= 15 ? "22px" : prodSpecName.length() > 9 ? "26px" : "30px";
						
						if("Y".equals(ifPrintNsf)){	
							fontSize = prodSpecName.length() >= 15 ? "21px" : prodSpecName.length() > 9 ? "21px" : "21px";
						}
						
						int yDryImg = Integer.parseInt(list[i].get("yDryImg").toString());
						int xDryImg = Integer.parseInt(list[i].get("xDryImg").toString());
						int yDrySpan = Integer.parseInt(list[i].get("yDrySpan").toString());
						int xDrySpan = Integer.parseInt(list[i].get("xDrySpan").toString());
						int yWetImg = Integer.parseInt(list[i].get("yWetImg").toString());
						int xWetImg = Integer.parseInt(list[i].get("xWetImg").toString());
						int yWetSpan = Integer.parseInt(list[i].get("yWetSpan").toString());
						int xWetSpan = Integer.parseInt(list[i].get("xWetSpan").toString());
						int yDayCodeSpan = Integer.parseInt(list[i].get("yDayCodeSpan").toString());
						int xDayCodeSpan = Integer.parseInt(list[i].get("xDayCodeSpan").toString());
						
						int yStarImg = Integer.parseInt(list[i].get("yStarImg").toString());
						int xStarImg = Integer.parseInt(list[i].get("xStarImg").toString());
	
						String dryWet = list[i].get("dryWet").toString();
						int batchNoFontSize = null == list[i].get("reserve1")?15:Integer.parseInt(list[i].get("reserve1").toString());
						
			%>			
				var batchNo = '<%=prodBatchNo %>';
				var container = document.getElementById('image-container<%=i %>');
				
				<%if("Y".equals(ifPrintNsf)){ %>
			
			//固定字段
			//brand
			var brand = document.createElement('div');
		    brand.className = 'text-overlay';
		    brand.textContent = 'Brand:';
		        		            
		    var fontSize = '21px';
		    var color = 'black';
		            
		    // 设置样式
		    brand.style.left = '40px';
		    brand.style.top = '<%=10  %>px';
		    brand.style.fontSize = fontSize;
		    brand.style.fontWeight = 'bold';
		    brand.style.color = color;
		    brand.style.fontName = 'Arial';   
		           
		    container.appendChild(brand);
		    
		    //brandvalue
			var brandvalue = document.createElement('div');
		    brandvalue.className = 'text-overlay';
		    brandvalue.textContent = 'KeenSen';
		        		            
		    var fontSize = '21px';
		    var color = 'black';
		            
		    // 设置样式
		    brandvalue.style.left = '140px';
		    brandvalue.style.top = '<%=10  %>px';
		    brandvalue.style.fontSize = fontSize;
		    //brand.style.fontWeight = 'bold';
		    brandvalue.style.color = color;
		    brandvalue.style.fontName = 'Arial';         
		    container.appendChild(brandvalue);
		            
			//model
			var model = document.createElement('div');
		    model.className = 'text-overlay';
		    model.textContent = 'Model:';
		        		            
		    var fontSize = '21px';
		    var color = 'black';
		            
		    // 设置样式
		    model.style.left = '40px';
		    model.style.top = '<%=60  %>px';
		    model.style.fontSize = fontSize;
		    model.style.fontWeight = 'bold';
		    model.style.color = color;
		    model.style.fontName = 'Arial';         
		    container.appendChild(model);
		    
		    //sn
			var sn = document.createElement('div');
		    sn.className = 'text-overlay';
		    sn.textContent = 'S/N:';
		        		            
		    var fontSize = '21px';
		    var color = 'black';
		            
		    // 设置样式
		    sn.style.left = '65px';
		    sn.style.top = '<%=110  %>px';
		    sn.style.fontSize = fontSize;
		    sn.style.fontWeight = 'bold';
		    sn.style.color = color;
		    sn.style.fontName = 'Arial';         
		    container.appendChild(sn);
		    
		    //qty
			var qty = document.createElement('div');
		    qty.className = 'text-overlay';
		    qty.textContent = 'QTY:';
		        		            
		    var fontSize = '21px';
		    var color = 'black';
		            
		    // 设置样式
		    qty.style.left = '62px';
		    qty.style.top = '<%=160  %>px';
		    qty.style.fontSize = fontSize;
		    qty.style.fontWeight = 'bold';
		    qty.style.color = color;
		    qty.style.fontName = 'Arial';         
		    container.appendChild(qty);
		    
		    //qty
			var qtyvalue = document.createElement('div');
		    qtyvalue.className = 'text-overlay';
		    qtyvalue.textContent = '1 pc';
		        		            
		    var fontSize = '21px';
		    var color = 'black';
		            
		    // 设置样式
		    qtyvalue.style.left = '140px';
		    qtyvalue.style.top = '<%=160  %>px';
		    qtyvalue.style.fontSize = fontSize;
		    //qty.style.fontWeight = 'bold';
		    qtyvalue.style.color = color;
		    qtyvalue.style.fontName = 'Arial';         
		    container.appendChild(qtyvalue);
		    
		    <% } %>
				
				
				
				
				
						<%if("Y".equals(ifPrintBatchNo)){					
						
						 %>
						
						<% if(batchNoFontSize>0){%>						
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
							
							
							<%if("Y".equals(ifPrintNsf)){ %>
							height : <% if(batchNoFontSize<=15){ %>30 <%} %><% else { %>25<%} %>,
							margin : 0,
							width : <% if(batchNoFontSize<=15){ %>1.5 <%} %><% else { %>1<%} %>
							
							<% }else{ %>
							
							height : <% if(batchNoFontSize<=15){ %>50 <%} %><% else { %>25<%} %>,
							margin : 0,
							width : <% if(batchNoFontSize<=15){ %>1.5 <%} %><% else { %>1<%} %>
							
							<% } %>
							
							
							};
						
						JsBarcode(barcodeElement, batchNo, options<%=i %>);
						<% }else{ %>
						// 创建批次元素
			            var barcodeElement = document.createElement('div');
			            barcodeElement.className = 'text-overlay';
			            barcodeElement.textContent = batchNo;
			            barcodeElement.style.position = "absolute"; // 绝对定位
					    barcodeElement.style.top = "<%=yBatchNo  %>px";          
					    barcodeElement.style.left = "<%=xBatchNo %>px"; 
						container.appendChild(barcodeElement);
						
						<% } %>
						
						<% } %>
            		
            		
            		<%if("Y".equals(ifPrintNsf) && xNsf<2000){
					
						
					
					 %>
					// 创建Nsf元素
		            var nsfElement = document.createElement('div');
		            nsfElement.className = 'text-overlay';
		            nsfElement.textContent = 'Certified to NSF/ANSI/CAN 61';
		            
		            		            
		            var fontSize = '12px';
		            var color = 'black';
		            
		            // 设置样式
		            nsfElement.style.left = '<%=xNsf %>px';
		            nsfElement.style.top = '<%=yNsf %>px';
		            nsfElement.style.fontSize = fontSize;
		            //nsfElement.style.fontWeight = 'bold';
		            nsfElement.style.color = color;
		            
		            container.appendChild(nsfElement);
		    
			    
			    <% } %>
			    	
						
					
					<%if("Y".equals(ifPrintSpecName)){
					
						
					
					 %>
					// 创建型号元素
		            var prodSpecNameElement = document.createElement('div');
		            prodSpecNameElement.className = 'text-overlay';
		            prodSpecNameElement.textContent = '<%=prodSpecName %>';
		            
		            		            
		            var fontSize = '<%=fontSize %>';
		            var color = 'black';
		            
		            // 设置样式
		            prodSpecNameElement.style.left = '<%=xBatchSpecName %>px';
		            prodSpecNameElement.style.top = '<%=yBatchSpecName  %>px';
		            prodSpecNameElement.style.fontSize = fontSize;
		            //prodSpecNameElement.style.fontWeight = 'bold';
		            prodSpecNameElement.style.color = color;
		            
		            container.appendChild(prodSpecNameElement);
		            <% } %>
		  
		  <%if("Y".equals(ifPrintDryWet)){		  
				if (dryWet.equals("干")) {
			%>
				
				<% if(xDryImg<2000){ %>
				var dryimg = document.createElement('img');
				dryimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/round.png";
				dryimg.className = 'symbol_dry';      // 应用样式类
				dryimg.style.position = 'absolute';
				dryimg.style.left = '<%=xDryImg %>px';
				dryimg.style.top = '<%=yDryImg  %>px';
				container.appendChild(dryimg);
				<% } %>
				
				<% if(yDrySpan<2000){ %>
				var dryspan = document.createElement('span');
				dryspan.className = 'span_a';
				dryspan.style.position = 'absolute';
				dryspan.style.left = '<%=xDrySpan %>px';
				dryspan.style.top = '<%=yDrySpan  %>px';
				dryspan.textContent = 'DRY';
				container.appendChild(dryspan);
				<% } %>
				
				<% if(yWetImg<2000){ %>
				var wetimg = document.createElement('img');
				wetimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png";
				wetimg.className = 'symbol_wet';      // 应用样式类
				wetimg.style.position = 'absolute';
				wetimg.style.left = '<%=xWetImg %>px';
				wetimg.style.top = '<%=yWetImg %>px';
				container.appendChild(wetimg);
				<% } %>
				
				<% if(yWetSpan<2000){ %>
				var wetspan = document.createElement('span');
				wetspan.className = 'span_a';
				wetspan.style.position = 'absolute';
				wetspan.style.left = '<%=xWetSpan %>px';
				wetspan.style.top = '<%=yWetSpan  %>px';
				wetspan.textContent = 'WET';
				container.appendChild(wetspan);
				<% } %>
			<%
		} else {
		%>	
				<% if(yDryImg<2000){ %>
				var dryimg = document.createElement('img');
				dryimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png";
				dryimg.className = 'symbol_dry';      // 应用样式类
				dryimg.style.position = 'absolute';
				dryimg.style.left = '<%=xDryImg %>px';
				dryimg.style.top = '<%=yDryImg  %>px';
				container.appendChild(dryimg);
				<% } %>
				
				<% if(yDrySpan<2000){ %>
				var dryspan = document.createElement('span');
				dryspan.className = 'span_a';
				dryspan.style.position = 'absolute';
				dryspan.style.left = '<%=xDrySpan %>px';
				dryspan.style.top = '<%=yDrySpan  %>px';
				dryspan.textContent = 'DRY';
				container.appendChild(dryspan);
				<% } %>
				
				<% if(yWetImg<2000){ %>
				var wetimg = document.createElement('img');
				wetimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/round.png";
				wetimg.className = 'symbol_wet';      // 应用样式类
				wetimg.style.position = 'absolute';
				wetimg.style.left = '<%=xWetImg %>px';
				wetimg.style.top = '<%=yWetImg  %>px';
				container.appendChild(wetimg);
				<% } %>
				
				<% if(yWetSpan<2000){ %>
				var wetspan = document.createElement('span');
				wetspan.className = 'span_a';
				wetspan.style.position = 'absolute';
				wetspan.style.left = '<%=xWetSpan %>px';
				wetspan.style.top = '<%=yWetSpan  %>px';
				wetspan.textContent = 'WET';
				container.appendChild(wetspan);
				<% } %>
		<%
		}
		%>	
		
		<% } %>
		
		<%--<%if("Y".equals(ifPrintDryWet) && yWetSpan<2000){		%>
				var wetspan = document.createElement('span');
				wetspan.className = 'span_aa';
				wetspan.style.position = 'absolute';
				wetspan.style.left = '<%=xWetSpan %>px';
				wetspan.style.top = '<%=yWetSpan %>px';
				wetspan.textContent = 'WET';
				
				container.appendChild(wetspan);
		
		<% } %>--%>
		
		
		
		<% if("Y".equals(isStar)){ %>
		
		var starimg = document.createElement('img');
		starimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/mark_star.png";
		starimg.className = 'star';      // 应用样式类
		starimg.style.position = 'absolute';
		starimg.style.left = '<%=xStarImg %>px';
		starimg.style.top = '<%=yStarImg %>px';
		container.appendChild(starimg);
		
	<% } %>		
	
	<%if("Y".equals(ifPrintDayCode)){ 
		
	
	%>    
		var dayCodespan = document.createElement('span');
				dayCodespan.className = 'span_day';
				dayCodespan.style.position = 'absolute';
				dayCodespan.style.left = '<%=xDayCodeSpan %>px';
				dayCodespan.style.top = '<%=yDayCodeSpan  %>px';
				dayCodespan.textContent = dayCode;
				container.appendChild(dayCodespan);
						
    <% } %> 		    
    
   <%-- 循环结束--%>
    <% } %>    					
					// 调用延时函数
					delayFunction(printFunction, 2000); // 延迟2秒执行打印
					
					
	};
</script>
</body>


</html>
