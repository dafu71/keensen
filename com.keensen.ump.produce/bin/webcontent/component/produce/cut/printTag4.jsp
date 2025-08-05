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
<title>裁网标签打印</title>
 <script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>	
<script type='text/javascript' src="base/jquery/plugins/JsBarcode.all.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>
<script type="text/javascript" src="base/jquery/plugins/jquery.qrcode.js"></script>
<script type="text/javascript" src="produce/component/produce/cut/js/printTag4.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>
    
<style type="text/css">
	.main_table{
		width: 110mm;
	height: 28mm;
	text-align: center;
	vertical-align: top;
	margin: auto;
 	margin-top: 0mm;
	font-size: 2px;
/* 		border:1px solid #000000; */
	}
	.td_label{
		text-align: left;
	vertical-align: middle;
	padding-left: 2mm;
	font-size: 2px;
	}
	.span_label{
		align: center;
	text-align: left;
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 2px;
	font-color: #000000;
	font-weight: bold;
	}
	.span_label2{
		align: center;
	text-align: left;
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 2px;
	font-color: #000000;
	font-weight: bold;
	}
	
	.square {
	display: inline-block;
	border: 1px solid #000000;
	height: 5px;
	width: 5px;
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
	
	var operateUserName = '<b:write property="operateUserName" />';
	var pipeType = '<b:write property="pipeType" />';
	var createDate = '<b:write property="createDate" />';
	var netCode = '<b:write property="netCode" />';
	var prodSpecName = '<b:write property="prodSpecName" />';
	var machineCode = '<b:write property="machineCode" />';
	var produceType = '<b:write property="produceType" />';
	var lightNetType = '<b:write property="lightNetType" />';

</script>
    
</head>
<body onload="paint()">
		<table id="cutprintview" align="left" class="main_table">
			<tr>
				<td style="height:15mm;vertical-align: middle; width:24mm">
					<div id="cutcanvas" style="margin:auto;width:61px;height:61px"></div>
				</td>
				<td class="td_label" style="width:24mm">
					<span class="span_label"><b:write property="netCode" /></span><br/>
					<span class="span_label"><b:write property="pipeType" /></span><br/>
					<span class="span_label"><b:write property="createDate" /></span><br/>
					<span class="span_label"><b:write property="machineCode" /></span><br/>
					<span class="span_label"><b:write property="produceType" /></span><br/>
					<span class="span_label"><b:write property="operateUserName" /></span>
					
				</td>
			</tr>
		</table>
</body>

</html>