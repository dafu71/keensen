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
    
<style type="text/css">
.main_table {
	width: 85mm;
	height: 45mm;
	text-align: center;
	vertical-align: middle;
	margin: auto;
 	margin-top: 2mm;
	font-size: 10px;
	/*  		border:1px solid #000000;  */
}

.td_label {
	text-align: left;
	vertical-align: middle;
	padding-left: 2mm;
	font-size: 12px;
}

.span_label {
	align: center;
	text-align: left;
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 12px;
	font-color: #000000;
	font-weight: bold;
}

.square {
	display: inline-block;
	border: 1px solid #000000;
	height: 7px;
	width: 7px;
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
	var batchIdStr = '<%=batchIdStr%>';
</script>
<script type="text/javascript">
function initPage() {

	var htmlArr = new Array();
<% 	for (int i = 0; i < list.length; i++) { 
		if (i == list.length - 1) { %>
			htmlArr.push('<table id="printview" class="main_table">');
<% 		} else {   %>
			htmlArr
					.push('<table id="printview" class="main_table" style="page-break-after:always;">');
<% 		}  %>

		htmlArr.push('<tr>');
		htmlArr.push('<td style="height:32mm;vertical-align: middle;">');
		htmlArr.push('<div id="canvas_' + <%=i %>
				+ '" style="margin:auto;width:102px;height:102px"></div>');
		htmlArr.push('</td>');
		htmlArr.push('<td class="td_label">');
		htmlArr.push('卷膜序号：<span class="span_label">' + '<%=list[i].get("batchNo") %>'
				+ '</span><br/>');
		htmlArr.push('元件型号：<span class="span_label">' + '<%=list[i].get("prodSpecName") %>'
				+ '</span><br/>');
		htmlArr.push('卷制日期：<span class="span_label">' + '<%=list[i].get("produceDay") %>'
				+ '</span><br/>');
		htmlArr.push('卷制机台：<span class="span_label">' + '<%=list[i].get("lineCode") %>'
				+ '</span><br/>');
		htmlArr.push('订单号：<span class="span_label">' + '<%=list[i].get("orderNo") %>'
				+ '</span><br/>');
		htmlArr.push('操作工：<span class="span_label">' + '<%=list[i].get("workerName") %>'
				+ '</span>');
		htmlArr.push('</td>');
		htmlArr.push('</tr>');
		htmlArr.push('<tr>');
		htmlArr
				.push('<td colspan="2" style="text-align:center;padding:0px;margin:0px">');
		var tumoBatchArr = '<%=list[i].get("tumoBatchStr") %>'.split(',');
		var tumoBatchStr = '<%=list[i].get("tumoBatchStr") %>';
		if (tumoBatchArr.length >= 3) {
			tumoBatchStr = tumoBatchArr[0] + ',' + tumoBatchArr[1] + ',省略';
		}
		htmlArr.push('膜片批次：<span id="tumoBatchStr" class="span_label">'
				+ tumoBatchStr + '</span>');
		htmlArr.push('</td>');
		htmlArr.push('</tr>');
		htmlArr.push('<tr>');
		htmlArr
				.push('<td colspan="2" style="text-align:center;padding:0px;margin:0px;">');
		htmlArr.push('测试结果：');
		htmlArr.push('<div class="square"></div> 合格  ');
		htmlArr.push('<div class="square"></div> 报废  ');
		htmlArr.push('<div class="square"></div> 待处理');
		htmlArr.push('</td>');
		htmlArr.push('</tr>');
		htmlArr.push('</table>');
	<% } %>
	$("body").append(htmlArr.join(''));
	paint();
	window.print();
}

function paint() {
	<% for (int i = 0; i < list.length; i++) { %>
		$('#canvas_' + <%=i %>).qrcode({
			render : 'canvas',// 设置渲染方式，有table和canvas
			text : '<%=list[i].get("batchNo") %>',
			width : 110, // 二维码的宽度
			height : 110, // 二维码的高度
			correctLevel : 2
				// 纠错级别，低
			});

		// 不转换打印时会变模糊
		document.getElementById('canvas_' + <%=i %>).childNodes[0]
				.toDataURL("image/pcx");
	<% } %>
}

</script>
</head>
<body onload="initPage()">
</body>


</html>