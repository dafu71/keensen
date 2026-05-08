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
	
	rootUrl = rootUrl.replace(
			"/produce/component/applys/household/printHHProdMarks.jsp", "");
%>

<html>
<!-- 
  - Author(s): dafu
  - Date: 2026-04-08 13:32:24
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


<div id="printContent" align="left">
<%
for (int i = 0; i < list.length; i++) {
%>

<table style="background-size: cover;page-break-after:always;"
	class="main_table" border=0>
	<tr hight="260px">
		<td align="left">
		<div class="image-container" id="image-container<%=i %>">
		<img
			src="<%=rootUrl %>/produce/component/applys/household/img/dashedbox.png" id="preview-image<%=i %>">
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
	<%-- 循环开始--%>			
	<% 	for (int i = 0; i < list.length; i++) { 
			String cNo = list[i].get("cNo").toString();
			String model = list[i].get("model").toString();
			String qty = list[i].get("qty").toString();
			String dryWet = list[i].get("dryWet").toString();
			String nsf = list[i].get("nsf").toString();
			String log = list[i].get("log").toString();
			
	%>		
			var container = document.getElementById('image-container<%=i %>');
			
			<% if(log.indexOf("Y")>-1){ %>
				var brand = document.createElement('div');
			    brand.className = 'text-overlay';
			    brand.textContent = 'Brand:';
			    var fontSize = '20pt';
			    var color = 'black';
			            
			    // 设置样式
			    brand.style.left = '10px';
			    brand.style.top = '25px';
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
			    brandvalue.style.left = '110px';
			    brandvalue.style.top = '25px';
			    brandvalue.style.fontSize = fontSize;
			    //brand.style.fontWeight = 'bold';
			    brandvalue.style.color = color;
			    brandvalue.style.fontFamily = 'Arial';         
			    container.appendChild(brandvalue);
		   <% } %>
		    
		    var model = document.createElement('div');
		    model.className = 'text-overlay';
		    model.textContent = 'Model:';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    model.style.left = '10px';
		    model.style.top = '75px';
		    model.style.fontSize = fontSize;
		    model.style.fontWeight = 'bold';
		    model.style.color = color;
		    model.style.fontFamily = 'Arial';         
		    container.appendChild(model);
		    
		    //modelvalue
			var modelvalue = document.createElement('div');
		    modelvalue.className = 'text-overlay';
		    modelvalue.textContent = '<%=model %>';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    modelvalue.style.left = '110px';
		    modelvalue.style.top = '75px';
		    modelvalue.style.fontSize = fontSize;
		    //brand.style.fontWeight = 'bold';
		    modelvalue.style.color = color;
		    modelvalue.style.fontFamily = 'Arial';         
		    container.appendChild(modelvalue);
		    
		    var cNo = document.createElement('div');
		    cNo.className = 'text-overlay';
		    cNo.textContent = 'C/No:';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    cNo.style.left = '24px';
		    cNo.style.top = '125px';
		    cNo.style.fontSize = fontSize;
		    cNo.style.fontWeight = 'bold';
		    cNo.style.color = color;
		    cNo.style.fontFamily = 'Arial';         
		    container.appendChild(cNo);
		    
		    //cNovalue
			var barcodeElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			barcodeElement.setAttribute("id", 'barcode_' + '<%=cNo %>');
			barcodeElement.setAttribute("width", '200');
			barcodeElement.style.position = "absolute"; // 绝对定位
			barcodeElement.style.top = "125px";          
			barcodeElement.style.left = "110px"; 
			container.appendChild(barcodeElement);
			const options<%=i %> = {
							format : "CODE128",
							displayValue : true,
							fontSize : 15,
							font : 'Arial',
							textMargin : 0,
							height : 30 ,
							margin : 0,
							width : 1.5 							
							};
						
			JsBarcode(barcodeElement, '<%=cNo %>', options<%=i %>);
			
			var qty = document.createElement('div');
		    qty.className = 'text-overlay';
		    qty.textContent = 'QTY:';
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    qty.style.left = '32px';
		    qty.style.top = '175px';
		    qty.style.fontSize = fontSize;
		    qty.style.fontWeight = 'bold';
		    qty.style.color = color;
		    qty.style.fontFamily = 'Arial';   
		           
		    container.appendChild(qty);
		    //qtyvalue
			var qtyvalue = document.createElement('div');
		    qtyvalue.className = 'text-overlay';
		    qtyvalue.textContent = '<%=qty %> pcs';
		        		            
		    var fontSize = '20pt';
		    var color = 'black';
		            
		    // 设置样式
		    qtyvalue.style.left = '110px';
		    qtyvalue.style.top = '175px';
		    qtyvalue.style.fontSize = fontSize;
		    //brand.style.fontWeight = 'bold';
		    qtyvalue.style.color = color;
		    qtyvalue.style.fontFamily = 'Arial';         
		    container.appendChild(qtyvalue);
		    
		    <% if(dryWet.indexOf("湿")>-1){ %>
		    	var dryWet = document.createElement('div');
			    dryWet.className = 'text-overlay';
			    dryWet.textContent = 'WET';
			    var fontSize = '16pt';
			    var color = 'black';
			            
			    // 设置样式
			    dryWet.style.left = '32px';
			    dryWet.style.top = '225px';
			    dryWet.style.fontSize = fontSize;
			    //dryWet.style.fontWeight = 'bold';
			    dryWet.style.color = color;
			    dryWet.style.fontFamily = 'Arial';   
			           
			    container.appendChild(dryWet);
		    
		    
		    <% } %>
		    
		    <% if(nsf.indexOf("Y")>-1){ %>
		    	 var nsfElement = document.createElement('div');
		         nsfElement.className = 'text-overlay';
		    	 nsfElement.textContent = 'Certified to NSF/ANSI 58';
		    	 var fontSize = '12px';
		         var color = 'black';
		            
		         // 设置样式
		         nsfElement.style.left = '225px';
		         nsfElement.style.top = '240px';
		         nsfElement.style.fontSize = fontSize;
		         //nsfElement.style.fontWeight = 'bold';
		         nsfElement.style.color = color;
		            
		         container.appendChild(nsfElement);
			 <% } %>
    <% } %> 
    <%-- 循环结束--%> 
			 					
	// 调用延时函数
	delayFunction(printFunction, 2000); // 延迟2秒执行打印
					
					
};
</script>
</body>


</html>
