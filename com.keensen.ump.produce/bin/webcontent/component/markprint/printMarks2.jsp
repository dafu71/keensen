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
	
  	rootUrl = rootUrl.replace("/produce/component/markprint/printMarks2.jsp","");
  	
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

<style>

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


@media print {
         body{
            -webkit-print-color-adjust:exact;
            -moz-print-color-adjust:exact;
            -ms-print-color-adjust:exact;
            print-color-adjust:exact;
        } 
    }     



</style>


</head>
<body onload="initPage()">

<div id="printContent" align="center">
<% 	for (int i = 0; i < list.length; i++) { %>
<table background='<%=rootUrl %><%=list[i].get("url") %>' 
style="background-repeat: no-repeat;"
width="800px" height="600px" border=0>
   <tr height="100px">
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>	
  </tr>
  <tr height="100px">
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>	
  </tr>
  <tr height="100px">
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>	
  </tr>
 
  <tr height="60px">
	<td width="100px" ></td>
	<% if(list[i].get("dryWet").equals("干")){%>	
	<td colspan=2 align="center" valign="middle"><img src="<%=rootUrl %>/qinsen/produce/pack/print/image/round.png" class="symbol_dry"/><span class="span_a">DRY</span></td>
	<td colspan=2 align="center" valign="middle"><img src="<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png" class="symbol_wet"/><span class="span_a">WET</span></td>
	<% }else{ %>
	<td colspan=2 align="center" valign="middle"><img src="<%=rootUrl %>/qinsen/produce/pack/print/image/ring.png" class="symbol_dry"/><span class="span_a">DRY</span></td>
	<td colspan=2 align="center" valign="middle"><img src="<%=rootUrl %>/qinsen/produce/pack/print/image/round.png" class="symbol_wet"/><span class="span_a">WET</span></td>

	<% } %>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
  </tr>
  <tr height="130px">
	<td width="100px" ></td>
	<td colspan=4 align="left" valign="middle"><br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg id="barcode_<%=list[i].get("prodBatchNo") %>" style="width:80mm"></svg></td>	
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>	
  </tr>
  <tr height="70px">
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>
	<td width="100px" ></td>	
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
						fontSize : 16,
						font : 'msyhbd',
						fontOptions : 'bold',
						textMargin : 0,
						height : 50,
						margin : 0,
						width : 3
						};
						
					JsBarcode(barcode, batchNo, options);
					<% } %>
					//window.print();
					
	};
</script>
</body>


</html>
