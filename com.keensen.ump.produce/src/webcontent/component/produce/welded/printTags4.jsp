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
	.main_table {
	width: 110mm;
	height: 28mm;
	text-align: center;
	vertical-align: top;
	margin: auto;
 	margin-top: 0mm;
	font-size: 2px;
	  		
}

.td_label {
	text-align: left;
	vertical-align: middle;
	padding-left: 2mm;
	font-size: 2px;
}

.span_label {
	align: center;
	text-align: left;
	vertical-align: middle;
	font-family: Microsoft YaHei;
	font-size: 2px;
	font-color: #000000;
	font-weight: bold;
}

.span_label2 {
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
	var batchIdStr = '<%=batchIdStr%>';
</script>
<script type="text/javascript">

function initPage() {

	var htmlArr = new Array();
	
	<%
		int len = list.length;//list长度
		boolean br = false;//是否换行
		int j = 0;//第二个打印对象
		boolean secondPrint = false;//是否打印第二个
	 %>
	
<% 	for (int i = 0; i < list.length; i+=2) { 
        br = i%2==0;
		if (br) { %>
			htmlArr.push('<table id="printview" align=left border=0 class="main_table">');
<% 		} else {   %>
			htmlArr
					.push('<table id="printview" align=left border=0 class="main_table" style="page-break-after:always;">');
<% 		}  %>
<% 	
		j = i+1;
		secondPrint = j<len;
%>		
		htmlArr.push('<tr>');
		htmlArr.push('<td style="height:27mm;vertical-align: middle;width:12mm">');
		htmlArr.push('<div id="canvas_' + <%=i %>
				+ '" style="margin:auto;width:61px;height:61px"></div>');
		htmlArr.push('</td>');
		htmlArr.push('<td class="td_label" style="width:37mm">');
		htmlArr.push('<span class="span_label">' + '<%=list[i].get("pipeCode") %>'
				+ '</span><br/>');
		htmlArr.push('<span class="span_label">' + '<%=list[i].get("pipeType") %>'
				+ '</span><br/>');
		htmlArr.push('<span class="span_label">' + '<%=list[i].get("createDate") %>'
				+ '</span><br/>');
		<%--htmlArr.push('<span class="span_label">' + '<%=list[i].get("machineCode") %>'
				+ '</span><br/>');--%>
		htmlArr.push('<span class="span_label">' + '<%=list[i].get("produceType") %>'
				+ '</span><br/>');
		htmlArr.push('<span class="span_label">' + '<%=list[i].get("operateUserName") %>'
				+ '</span>');
		htmlArr.push('</td>');
		
		<% if(secondPrint){ %>
		htmlArr.push('<td style="height:27mm;vertical-align: middle;width:12mm">');
		htmlArr.push('<div id="canvas_' + <%=j %>
				+ '" style="margin:auto;width:61px;height:61px"></div>');
		htmlArr.push('</td>');
		htmlArr.push('<td class="td_label" style="width:37mm">');
		htmlArr.push('<span class="span_label">' + '<%=list[j].get("pipeCode") %>'
				+ '</span><br/>');
		htmlArr.push('<span class="span_label">' + '<%=list[j].get("pipeType") %>'
				+ '</span><br/>');
		htmlArr.push('<span class="span_label">' + '<%=list[j].get("createDate") %>'
				+ '</span><br/>');
		<%--htmlArr.push('<span class="span_label">' + '<%=list[j].get("machineCode") %>'
				+ '</span><br/>');--%>
		htmlArr.push('<span class="span_label">' + '<%=list[j].get("produceType") %>'
				+ '</span><br/>');
		htmlArr.push('<span class="span_label">' + '<%=list[j].get("operateUserName") %>'
				+ '</span>');
		htmlArr.push('</td>');
		
		<% }else{ %>
		htmlArr.push('<td style="height:27mm;vertical-align: middle; width:24mm"><div id="canvas" style="margin:auto;width:61px;height:61px"></div></td><td class="td_label" style="width:24mm">&nbsp;</td>');
		<% } %>
		
		
		
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
			width : 42, // 二维码的宽度
			height : 42, // 二维码的高度
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