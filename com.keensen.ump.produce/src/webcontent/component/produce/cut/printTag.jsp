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
<title>焊网标签打印</title>
 <script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>	
<script type='text/javascript' src="base/jquery/plugins/JsBarcode.all.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>
<script type="text/javascript" src="base/jquery/plugins/jquery.qrcode.js"></script>
<script type="text/javascript" src="produce/component/produce/cut/js/printTag.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>
    
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
		<table id="cutprintview" class="table">
			<tr>
				<td>
					<div id="cutcanvas" style="margin:auto;width:112px;height:112px"></div>
				</td>
				<td class="td_label">
					&nbsp;&nbsp;&nbsp;淡网编号：<span class="span_label"><b:write property="netCode" /></span><br/>
					中心管型号：<span class="span_label"><b:write property="pipeType" /></span><br/>
					&nbsp;&nbsp;&nbsp;生产日期：<span class="span_label"><b:write property="createDate" /></span><br/>
					生产机台号：<span class="span_label"><b:write property="machineCode" /></span><br/>
					&nbsp;&nbsp;&nbsp;生产类型：<span class="span_label"><b:write property="produceType" /></span><br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;操作工：<span class="span_label"><b:write property="operateUserName" /></span>
					
				</td>
			</tr>
		</table>
</body>

</html>