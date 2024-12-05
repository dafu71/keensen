<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>底膜批次标签打印</title>
 <script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>	
<script type='text/javascript' src="base/jquery/plugins/JsBarcode.all.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>
<script type="text/javascript" src="base/jquery/plugins/jquery.qrcode.js"></script>
<script type="text/javascript" src="qinsen/produce/tumo/js/printTumoTag.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>
    
<style type="text/css">
	.table{
		width:85mm;
		height:45mm;
		text-align:center;
		vertical-align:middle;
		margin: auto;
 		margin-top:2mm; 
		font-size:10px;
/* 		border:1px solid #000000; */
	}
	.td_label{
		text-align:left;
		vertical-align:middle;
		padding-left:1mm;
		font-size:14px;
	}
	.span_label{
		align:center;
		text-align:left;
		vertical-align:middle;
		font-family:Microsoft YaHei;
		font-size:14px;
		font-color:#000000;
		font-weight:bold;
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

<script type="text/javascript">
	var batchNo = '<b:write property="batchNo" />';
	var materSpecName = '<b:write property="materSpecName" />';
	var outLength = '<b:write property="outLength" />m';
	var usefulLength = '<b:write property="usefulLength" />m';
</script> 
    
</head>
<body onload="paint()">
		<table id="printview" class="table">
			<tr>
				<td>
					<div id="canvas" style="margin:auto;width:122px;height:122px"></div>
				</td>
				<td class="td_label">
					批次：<span class="span_label"><b:write property="batchNo" /></span><br/>
					型号：<span class="span_label"><b:write property="materSpecName" /></span><br/>
					长度：<span class="span_label"><b:write property="outLength" />m</span><br/>
					可用长度：<span class="span_label"><b:write property="usefulLength" />m</span><br/>
				</td>
			</tr>
		</table>
</body>



</html>