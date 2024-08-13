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
<script type="text/javascript" src="produce/quality/mptest/water/js/printTag.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>
    
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
	
	var batchNo = '<b:write property="data/batchNo" />';
</script> 
    
</head>
<body onload="paint()">
		<table id="printview" class="table">
			<tr>
				<td>
					<div id="watertestcanvas" style="margin:auto;width:122px;height:122px"></div>
				</td>
				<td class="td_label">
					配料时间：<span class="span_label"><b:write property="data/plDt" /></span><br/>
					线别：<span class="span_label"><b:write property="data/line" /></span><br/>
					批号：<span class="span_label"><b:write property="data/batchNo" /></span><br/>
					膜片型号：<span class="span_label"><b:write property="data/mptype" /></span><br/>
					水相液重量：<span class="span_label"><b:write property="data/weightPlan" />KG</span><br/>
					配料人：<span class="span_label"><b:write property="data/appointName2" /></span>
				</td>
			</tr>
			
		</table>
</body>



</html>