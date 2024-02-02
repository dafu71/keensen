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
<title>叠膜栈板号标签打印</title>
 <script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>	
<script type='text/javascript' src="base/jquery/plugins/JsBarcode.all.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>
<script type="text/javascript" src="base/jquery/plugins/jquery.qrcode.js"></script>
<script type="text/javascript" src="qinsen/produce/cdm/js/printTag.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>
    
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
		font-size:12px;
	}
	.span_label{
		align:center;
		text-align:left;
		vertical-align:middle;
		font-family:Microsoft YaHei;
		font-size:12px;
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
	
	var batchId = '<b:write property="batchId" />';
	var batchNo = '<b:write property="batchNo" />';
	var orderNo = '<b:write property="orderNo" />';
	var tumoBatchNo = '<b:write property="tumoBatchNo" />';
	var prodSpecName = '<b:write property="prodSpecName" />';
	var isToMixStr = '<b:write property="isToMixStr" />';
	var quantity = '<b:write property="quantity" />';
	var numPerWad = '<b:write property="numPerWad" />';
	var blankingSize = '<b:write property="blankingSize" />';
	var denseNet = '<b:write property="denseNet" />';

</script>
    
</head>
<body onload="paint()">
		<table id="printview" class="table">
			<tr>
				<td>
					<div id="canvas" style="margin:auto;width:112px;height:112px"></div>
				</td>
				<td class="td_label">
					栈板编号：<span class="span_label"><b:write property="batchNo" /></span><br/>
					膜片批次：<span class="span_label"><b:write property="tumoBatchNo" /></span><br/>
					元件型号：<span class="span_label"><b:write property="prodSpecName" /></span><br/>
					订&nbsp;单&nbsp;号&nbsp;：<span class="span_label"><b:write property="orderNo" /></span><br/>
					单&nbsp;&nbsp;/&nbsp;&nbsp;混&nbsp;：<span class="span_label"><b:write property="isToMixStr" /></span><br/>
					总&nbsp;页&nbsp;数&nbsp;：<span class="span_label" style="display:inline-block;width:10mm;"><b:write property="quantity" /></span>
					每叠页数：<span class="span_label"><b:write property="numPerWad" /></span><br/>
					下料尺寸：<span class="span_label" style="display:inline-block;width:10mm;"><b:write property="blankingSize" /></span>
					浓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网：<span class="span_label"><b:write property="denseNet" /></span><br/>
				</td>
			</tr>
		</table>
</body>

</html>