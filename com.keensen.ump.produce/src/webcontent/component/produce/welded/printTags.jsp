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
			.getObjectByXpath(rootObj, "datas");
			
 %>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>焊网标签打印</title>
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
	.span_label2{
		align:center;
		text-align:left;
		vertical-align:middle;
		font-family:Microsoft YaHei;
		font-size:10px;
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
	var batchIdStr = '<%=batchIdStr%>';
</script>
<script type="text/javascript">
function initPage() {

	var htmlArr = new Array();
				
				<% 	for (int i = 0; i < list.length; i++) { 
						if (i == list.length - 1) { %>
							htmlArr.push('<table id="printview" class="table">');
				<% 		} else {   %>
							htmlArr.push('<table id="printview" class="table" style="page-break-after:always;">');
				<% 		}  %>
					htmlArr.push('<tr>');
					htmlArr.push('<td>');
					htmlArr.push('<div id="canvas_' + <%=i %> + '" style="margin:auto;width:112px;height:112px"></div>');
					htmlArr.push('</td>');
					htmlArr.push('<td class="td_label">');
					htmlArr.push('中心管编号：<span class="span_label">' + '<%=list[i].get("pipeCode") %>' + '</span><br/>');
					htmlArr.push('中心管型号：<span class="span_label2">' + '<%=list[i].get("pipeType") %>' + '</span><br/>');
					htmlArr.push('&nbsp;&nbsp;&nbsp;生产日期：<span class="span_label">' + '<%=list[i].get("createDate") %>' + '</span><br/>');
					htmlArr.push('生产机台号：<span class="span_label">' + '<%=list[i].get("machineCode") %>' + '</span><br/>');
					htmlArr.push('&nbsp;&nbsp;&nbsp;生产类型：<span class="span_label">' + '<%=list[i].get("produceType") %>' + '</span><br/>');
					htmlArr.push('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;操作工：<span class="span_label">' + '<%=list[i].get("operateUserName") %>' + '</span><br/>');
					
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