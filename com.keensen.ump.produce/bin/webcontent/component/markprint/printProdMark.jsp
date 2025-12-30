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
	//Object txt = request.getParameter("txt"); 
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "list");
	String rootUrl = request.getRequestURL().toString();
	String prodBatchNo = request.getParameter("prodBatchNo").toString();
	String dryWet = request.getParameter("dryWet").toString();
	//String url = request.getParameter("url").toString();
	String isStar = null == request.getParameter("isStar") ? ""
			: request.getParameter("isStar").toString();
	String prodSpecName = request.getParameter("prodSpecName")
			.toString();
	String prodSpecName2 = request.getParameter("prodSpecName2")
			.toString();

	DataObject template = (DataObject) XpathUtil.getObjectByXpath(
			rootObj, "template");
	String drawingCode = template.getString("drawingCode");
	
	String nsfnum = drawingCode.indexOf("M0224")>-1?"58":"61";
	
	String ifPrintBatchNo = template.getString("ifPrintBatchNo");
	String yBatchNo = template.getString("yBatchNo");
	String xBatchNo = template.getString("xBatchNo");
	String ifPrintSpecName = template.getString("ifPrintSpecName");
	String yBatchSpecName = template.getString("yBatchSpecName");
	String xBatchSpecName = template.getString("xBatchSpecName");
	String ifPrintDryWet = template.getString("ifPrintDryWet");
	String yDryImg = template.getString("yDryImg");
	String xDryImg = template.getString("xDryImg");
	String yDrySpan = template.getString("yDrySpan");
	String xDrySpan = template.getString("xDrySpan");
	String yWetImg = template.getString("yWetImg");
	String xWetImg = template.getString("xWetImg");
	String yWetSpan = template.getString("yWetSpan");
	String xWetSpan = template.getString("xWetSpan");
	String yStarImg = template.getString("yStarImg");
	String xStarImg = template.getString("xStarImg");
	String ifPrintDayCode = template.getString("ifPrintDayCode");
	String yDayCodeSpan = template.getString("yDayCodeSpan");
	String xDayCodeSpan = template.getString("xDayCodeSpan");
	String printDelayTime = null == template.getString("printDelayTime")?"1000":template.getString("printDelayTime");
	int batchNoFontSize = null == template.getString("reserve1")?15:Integer.parseInt(template.getString("reserve1"));
	
	
	String ifPrintNsf = null == template.get("reserve3")?"N" : template.get("reserve3").toString();
	int xNsf = null == template.get("reserve5")? 100000: Integer.parseInt(template.get("reserve5").toString());
	int yNsf = null == template.get("reserve4")? 100000: Integer.parseInt(template.get("reserve4").toString());
						
	String url = template.getString("url");
	
	//System.out.println("isStar" + isStar);
	String qty = null == request.getAttribute("qty")?"1":request.getAttribute("qty").toString();

	int isnsf = null == request.getAttribute("isnsf")?0:Integer.parseInt(request.getAttribute("isnsf").toString());

	String ifPrintBrand = template.get("ifPrintBrand").toString();
	
	int topDiff = 0;//纵坐标补差
						
	//System.out.println("ifPrintNsf=" + ifPrintNsf);
	
	rootUrl = rootUrl.replace(
			"/produce/component/markprint/printProdMark.jsp", "");
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
<table style="background-size: cover;page-break-after:always;"
	class="main_table" border=0>
	<tr hight="260px">
		<td align="left">
		<div class="image-container" id="image-container">
		<img src="<%=rootUrl %><%=url %>" id="preview-image">
		</div>
		</td>
	</tr>

</table>
</div>

<script type="text/javascript">

	function delayFunction(fn, delay) {
    	setTimeout(fn, delay);
	}
 
	// 要延迟执行的函数
	function printFunction() {
    	window.print();
    	delayFunction(closeFunction, 6000); // 延迟5秒执行关闭当前窗口
	}
	
	function closeFunction() {
    	window.close();
	}
 
	function initPage() {
	
						const container = document.getElementById('image-container');
						var batchNo = '<%=prodBatchNo %>';
						<%if("Y".equals(ifPrintNsf)){ %>
						
						
			
			//固定字段
			
			<%if("Y".equals(ifPrintBrand)){ %>
			//brand
			var brand = document.createElement('div');
		    brand.className = 'text-overlay';
		    brand.textContent = 'Brand:';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    brand.style.left = '40px';
		    brand.style.top = '<%=10  %>px';
		    brand.style.fontSize = fontSize;
		    brand.style.fontWeight = 'bold';
		    brand.style.color = color;
		    brand.style.fontFamily = 'Arial';          
		    container.appendChild(brand);
		    
		    //brandvalue
			var brandvalue = document.createElement('div');
		    brandvalue.className = 'text-overlay';
		    brandvalue.textContent = 'KeenSen';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    brandvalue.style.left = '140px';
		    brandvalue.style.top = '<%=10  %>px';
		    brandvalue.style.fontSize = fontSize;
		    //brand.style.fontWeight = 'bold';
		    brandvalue.style.color = color;
		    brandvalue.style.fontFamily = 'Arial';       
		    container.appendChild(brandvalue);
		    
		    <% } %>
		    
		     //不打印brand
		    <%if("N".equals(ifPrintBrand)){ %>
		    	
		    <% topDiff = 20; } %>  
		            
			//model
			var model = document.createElement('div');
		    model.className = 'text-overlay';
		    model.textContent = 'Model:';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    model.style.left = '38px';
		    model.style.top = '<%=60-topDiff-15  %>px';
		    model.style.fontSize = fontSize;
		    model.style.fontWeight = 'bold';
		    model.style.color = color;
		    model.style.fontFamily = 'Arial';       
		    container.appendChild(model);
		    
		    //sn
			var sn = document.createElement('div');
		    sn.className = 'text-overlay';
		    sn.textContent = 'S/N:';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    sn.style.left = '70px';
		    sn.style.top = '<%=110-topDiff  %>px';
		    sn.style.fontSize = fontSize;
		    sn.style.fontWeight = 'bold';
		    sn.style.color = color;
		    sn.style.fontFamily = 'Arial';          
		    container.appendChild(sn);
		    
		    //qty
			var qty = document.createElement('div');
		    qty.className = 'text-overlay';
		    qty.textContent = 'QTY:';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    qty.style.left = '62px';
		    qty.style.top = '<%=160  %>px';
		    qty.style.fontSize = fontSize;
		    qty.style.fontWeight = 'bold';
		    qty.style.color = color;
		    qty.style.fontFamily = 'Arial';          
		    container.appendChild(qty);
		    
		    //qty
			var qtyvalue = document.createElement('div');
		    qtyvalue.className = 'text-overlay';
		    qtyvalue.textContent = '<%=qty %> pc<% if(Integer.valueOf(qty)>1){ %>s<% } %>';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    qtyvalue.style.left = '140px';
		    qtyvalue.style.top = '<%=160 %>px';
		    qtyvalue.style.fontSize = fontSize;
		    //qty.style.fontWeight = 'bold';
		    qtyvalue.style.color = color;
		    qtyvalue.style.fontFamily = 'Arial';          
		    container.appendChild(qtyvalue);
		    
		    <% } %>
		    
		    var dayCode = getDayCode();// 获取入库日期编码
						
						<%if("Y".equals(ifPrintBatchNo)){ %>
						<% if(batchNoFontSize>0){%>								
						const barcodeElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
						barcodeElement.setAttribute("id", 'barcode_' + batchNo);
						barcodeElement.setAttribute("width", '200');
												
						barcodeElement.style.position = "absolute"; // 绝对定位
					    barcodeElement.style.top = "<%=yBatchNo %>px";          
					    barcodeElement.style.left = "<%=xBatchNo %>px"; 
						
						container.appendChild(barcodeElement);
						const options = {
							format : "CODE128",
							displayValue : true,
							fontSize : <%=batchNoFontSize %>,
							font : 'Arial',
							<%if(!"Y".equals(ifPrintNsf)){ %>
							fontOptions : 'bold',
							<% } %>
							textMargin : 0,
							
							<%if("Y".equals(ifPrintNsf)){ %>
							height : <% if(batchNoFontSize<=15){ %>30 <%} %><% else { %>25<%} %>,
							margin : 0,
							width : <% if(batchNoFontSize<=15){ %>1.5 <%} %><% else { %>1<%} %>
							<% }else{ %>
							
							height : <% if(batchNoFontSize<=15){ %>50 <%} else { %>25<%} %>,
							margin : 0,
							width : <% if(batchNoFontSize<=15){ %>1.5 <%} else { %>1<%} %>
							<% } %>
							};
						
						JsBarcode(barcodeElement, batchNo, options);
						<% }else{ %>
						// 创建批次元素
			            var barcodeElement = document.createElement('div');
			            barcodeElement.className = 'text-overlay';
			            barcodeElement.textContent = batchNo;
			            barcodeElement.style.position = "absolute"; // 绝对定位
					    barcodeElement.style.top = "<%=yBatchNo%>px";          
					    barcodeElement.style.left = "<%=xBatchNo %>px"; 
					    //barcodeElement.style.fontSize = "26px";
						container.appendChild(barcodeElement);
						
						<% } %>
						<% } %>
						
						<%if("Y".equals(ifPrintNsf) && "Y".equals(ifPrintBrand)){
					
						
					
					 %>
					// 创建Nsf元素
					
					<%if(isnsf == 1){ %>
		            var nsfElement = document.createElement('div');
		            nsfElement.className = 'text-overlay';
		           
		             <% if(nsfnum.equals("58")){ %>
		            nsfElement.textContent = 'Certified to NSF/ANSI <%=nsfnum %>';
		            <% }else{ %>
		            nsfElement.textContent = 'Certified to NSF/ANSI/CAN <%=nsfnum %>';
		            <% } %>
		            		            
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
		    
			    
			    <% } %>	
				
				
				<%if("Y".equals(ifPrintSpecName)){ %>
				
					// 创建型号元素
		            var prodSpecNameElement = document.createElement('div');
		            prodSpecNameElement.className = 'text-overlay';
		            prodSpecNameElement.textContent = '<%=prodSpecName2 %>';
		            
		            <%
					String fontSize = prodSpecName2.length() >= 15 ? "22px"
					: prodSpecName2.length() > 9 ? "26px" : "30px";
					%>
		            
		            <%if("Y".equals(ifPrintNsf)){ %>
		            <%
					 fontSize = prodSpecName2.length() >= 15 ? "20pt"
					: prodSpecName2.length() > 9 ? "20pt" : "20pt";
					%>
		            <% } %>
		            var fontSize = '<%=fontSize %>';
		            var color = 'black';
		            
		            // 设置样式
		            prodSpecNameElement.style.left = '<%=xBatchSpecName %>px';
		            prodSpecNameElement.style.top = '<%=yBatchSpecName %>px';
		            prodSpecNameElement.style.fontSize = fontSize;
		            //prodSpecNameElement.style.fontWeight = 'bold';
		            prodSpecNameElement.style.color = color;
		            
		            container.appendChild(prodSpecNameElement);
		            <% } %>		
				
		 <%if("Y".equals(ifPrintDryWet)){ %>          
		 <%
		if (dryWet.equals("干")) {
		%>
				
				<% if(Integer.parseInt(xDryImg)<2000){ %>
				const dryimg = document.createElement('img');
				dryimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/round.png";
				dryimg.className = 'symbol_dry';      // 应用样式类
				dryimg.style.position = 'absolute';
				dryimg.style.left = '<%=xDryImg %>px';
				dryimg.style.top = '<%=yDryImg %>px';
				container.appendChild(dryimg);
				<% } %>
				
				<% if(Integer.parseInt(xDrySpan)<2000){ %>
				const dryspan = document.createElement('span');
				dryspan.className = 'span_a';
				dryspan.style.position = 'absolute';
				dryspan.style.left = '<%=xDrySpan %>px';
				dryspan.style.top = '<%=yDrySpan %>px';
				dryspan.textContent = 'DRY';
				container.appendChild(dryspan);
				<% } %>
				
				<% if(Integer.parseInt(xWetImg)<2000){ %>
				const wetimg = document.createElement('img');
				wetimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png";
				wetimg.className = 'symbol_wet';      // 应用样式类
				wetimg.style.position = 'absolute';
				wetimg.style.left = '<%=xWetImg %>px';
				wetimg.style.top = '<%=yWetImg %>px';
				container.appendChild(wetimg);
				<% } %>
				
				<% if(Integer.parseInt(xWetSpan)<2000 && !"Y".equals(ifPrintNsf)){ %>
				const wetspan = document.createElement('span');
				wetspan.className = 'span_a';
				wetspan.style.position = 'absolute';
				wetspan.style.left = '<%=xWetSpan %>px';
				wetspan.style.top = '<%=yWetSpan %>px';
				wetspan.textContent = 'WET';
				container.appendChild(wetspan);
				<% } %>
			<%
		} else {
		%>	
				<% if(Integer.parseInt(xDryImg)<2000){ %>
				const dryimg = document.createElement('img');
				dryimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png";
				dryimg.className = 'symbol_dry';      // 应用样式类
				dryimg.style.position = 'absolute';
				dryimg.style.left = '<%=xDryImg %>px';
				dryimg.style.top = '<%=yDryImg %>px';
				container.appendChild(dryimg);
				<% } %>
				
				<% if(Integer.parseInt(xDrySpan)<2000){ %>
				const dryspan = document.createElement('span');
				dryspan.className = 'span_a';
				dryspan.style.position = 'absolute';
				dryspan.style.left = '<%=xDrySpan %>px';
				dryspan.style.top = '<%=yDrySpan %>px';
				dryspan.textContent = 'DRY';
				container.appendChild(dryspan);
				<% } %>
				
				<% if(Integer.parseInt(xWetImg)<2000){ %>
				const wetimg = document.createElement('img');
				wetimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/round.png";
				wetimg.className = 'symbol_wet';      // 应用样式类
				wetimg.style.position = 'absolute';
				wetimg.style.left = '<%=xWetImg %>px';
				wetimg.style.top = '<%=yWetImg %>px';
				container.appendChild(wetimg);
				<% } %>
				
				<% if(Integer.parseInt(xWetSpan)<2000){ %>
				const wetspan = document.createElement('span');
				wetspan.className = 'span_a';
				
				<%if("Y".equals(ifPrintNsf)){ %>
				wetspan.className = 'span_aa';
				
				<% } %>
				
				wetspan.style.position = 'absolute';
				wetspan.style.left = '<%=xWetSpan %>px';
				wetspan.style.top = '<%=yWetSpan %>px';
				wetspan.textContent = 'WET';
				container.appendChild(wetspan);
				<% } %>
		<%
		}
		%>	
		
		<% } %>
		
		<%--<%if("Y".equals(ifPrintDryWet) && Integer.parseInt(yWetSpan)<2000){		%>
				const wetspan = document.createElement('span');
				wetspan.className = 'span_aa';
				wetspan.style.position = 'absolute';
				wetspan.style.left = '<%=xWetSpan %>px';
				wetspan.style.top = '<%=yWetSpan  %>px';
				wetspan.textContent = 'WET';
				
				container.appendChild(wetspan);
		
		<% } %>--%>
		
		
		<% if("Y".equals(isStar)){ %>
		
		const starimg = document.createElement('img');
		starimg.src = "<%=rootUrl %>/qinsen/produce/pack/print/image/mark_star.png";
		starimg.className = 'star';      // 应用样式类
		starimg.style.position = 'absolute';
		starimg.style.left = '<%=xStarImg %>px';
		starimg.style.top = '<%=yStarImg %>px';
		container.appendChild(starimg);
		
	<% } %>		
	
	<%if("Y".equals(ifPrintDayCode)){ %>    
		const dayCodespan = document.createElement('span');
				dayCodespan.className = 'span_day';
				dayCodespan.style.position = 'absolute';
				dayCodespan.style.left = '<%=xDayCodeSpan %>px';
				dayCodespan.style.top = '<%=yDayCodeSpan %>px';
				dayCodespan.textContent = dayCode;
				container.appendChild(dayCodespan);
						
    <% } %>        					
					// 调用延时函数
					delayFunction(printFunction, <%=printDelayTime %>); // 延迟2秒执行打印		
						
					
					
	};
</script>
</body>


</html>
