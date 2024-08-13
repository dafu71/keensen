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
	String url = request.getParameter("url").toString();
	String prodSpecName = request.getParameter("prodSpecName")
			.toString();
	String prodSpecName2 = request.getParameter("prodSpecName2")
			.toString();
	rootUrl = rootUrl.replace(
			"/produce/component/markprint/printMark3.jsp", "");
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

.main_table {
	width: 376px;
	height: 265px;
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
	font-size: 9pt;
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
<table background='<%=rootUrl %><%=url %>?ver=<%=prodBatchNo %>'
	style="background-size: cover;page-break-after:always;"
	class="main_table" border=0 border=0>
	<tr height="270px">
		<td width="47px"></td>
		<td width="47px"></td>
		<td width="47px"></td>
		<td width="47px"></td>
		<td width="47px"></td>
		<td width="47px"></td>
		<td width="47px"></td>
		<td width="47px"></td>
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
    	delayFunction(closeFunction, 5000); // 延迟5秒执行关闭当前窗口
	}
	
	function closeFunction() {
    	window.close();
	}
 
	function initPage() {						
		// 调用延时函数
		delayFunction(printFunction, 2000); // 延迟2秒执行打印
	};
</script>
</body>


</html>
