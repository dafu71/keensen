<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>

<%
	String batchIdStr = request.getParameter("batchIdStr");
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	DataObject[] list = (DataObject[]) XpathUtil
			.getObjectByXpath(rootObj, "list");
			
 %>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>卷膜标签打印</title>
	<meta http-equiv="pragma" content="no-cache"/>
	<meta http-equiv="cache-control" content="no-cache"/>
	<meta http-equiv="expires" content="0"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
	
 <script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>	
<script type='text/javascript' src="base/jquery/plugins/JsBarcode.all.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>
<script type="text/javascript" src="base/jquery/plugins/jquery.qrcode.js"></script>
<script type="text/javascript" src="qinsen/produce/juanmo/js/printTag.js"></script>
    
<style type="text/css">
.main_table {
	width: 98mm;
	height: 28mm;
	text-align: center;
	vertical-align: top;
	margin: auto;
 	margin-top: 0mm;
	font-size: 6px;
	/*  		border:1px solid #000000;  */
}

.td_label {
	text-align: left;
	vertical-align: middle;
	padding-left: 2mm;
	font-size: 6px;
}

.span_label {
	align: center;
	text-align: left;
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 6px;
	font-color: #000000;
	font-weight: bold;
}

.span_label2 {
	align: center;
	text-align: left;
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 8px;
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
	var batchId = '<%=list[0].get("batchId") %>';
	var batchNo = '<%=list[0].get("batchNo") %>';
	var orderNo = '<%=list[0].get("orderNo") %>';
	var tumoBatchStr = '<%=list[0].get("tumoBatchStr") %>';
	var prodSpecName = '<%=list[0].get("prodSpecName") %>';
	var produceDay = '<%=list[0].get("produceDay") %>';
	var lineCode = '<%=list[0].get("lineCode") %>';
	var workerName = '<%=list[0].get("workerName") %>';
</script>
</head>
<body onload="paint()">
		<table id="printview" class="main_table" border=0>
			<tr>
				<td style="height:15mm;vertical-align: middle; width:24mm">
					<div id="canvas" style="margin:auto;width:61px;height:61px"></div>
				</td>
				<td class="td_label" style="width:24mm">
					卷膜序号：<span class="span_label"><%=list[0].get("batchNo") %></span><br/>
					元件型号：<span class="span_label"><%=list[0].get("prodSpecName") %></span><br/>
					卷制日期：<span class="span_label"><%=list[0].get("produceDay") %></span><br/>
					卷制机台：<span class="span_label"><%=list[0].get("lineCode") %></span><br/>
					订单号：<span class="span_label"><%=list[0].get("orderNo") %></span><br/>
					操作工：<span class="span_label"><%=list[0].get("workerName") %></span>
				</td>
				
				<td style="height:15mm;vertical-align: middle; width:24mm">
					<div id="canvas" style="margin:auto;width:61px;height:61px"></div>
				</td>
				<td class="td_label" style="width:24mm">
					&nbsp;
				</td>
			</tr>
			<tr>
				<td colspan="2" style="height:3mm;text-align:center;padding:0px;margin:0px">
					膜片批次：<span id="tumoBatchStr" class="span_label2"><%=list[0].get("tumoBatchStr") %></span>
				</td>
				<td colspan="2" style="height:3mm;text-align:center;padding:0px;margin:0px">
					&nbsp;
				</td>
			</tr>
			<%--<tr>
				<td colspan="2" style="height:3mm;text-align:center;padding:0px;margin:0px;">
					测试结果：
					<div class="square"></div> 合格  
					<div class="square"></div> 报废  
					<div class="square"></div> 待处理
				</td>
				<td colspan="2" style="height:3mm;text-align:center;padding:0px;margin:0px;">
					&nbsp;
				</td>
			</tr>--%>
		</table>
</body>
</html>