<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>

<%
	String batchIdStr = request.getParameter("batchIdStr");
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "list");
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>工艺调整指令打印</title>
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

<script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>

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
function initPage() {

	var htmlArr = new Array();
<% 	for (int i = 0; i < list.length; i++) { 

		String adjustType = list[i].get("adjustType").toString();
		String trough = adjustType.equals("liquid")? "漂洗" + list[i].get("trough").toString() + "槽": list[i].get("trough").toString();
		String weight2 = list[i].get("weight").toString();
		String item = list[i].get("item").toString();
		String weight = adjustType.equals("liquid")? weight2 + "kg": item.equals("RO水") ||  item.equals("水相液排料")? weight2 + "kg" :  weight2 + "g";
		if (i == list.length - 1) { %>
			htmlArr.push('<table id="printview" class="main_table">');
<% 		} else {   %>
			htmlArr
					.push('<table id="printview" class="main_table" style="page-break-after:always;">');
<% 		}  %>

		htmlArr.push('<tr>');
		
		htmlArr.push('<td class="td_label">');
		htmlArr.push('线别：<span class="span_label">' + '<%=list[i].get("lineName") %>'
				+ '</span><br/>');
		htmlArr.push('膜片型号：<span class="span_label">' + '<%=list[i].get("specName") %>'
				+ '</span><br/>');
		htmlArr.push('调整类型：<span class="span_label">' + '<%=trough %>'
				+ '</span><br/>');
		htmlArr.push('调整项目：<span class="span_label">' + '<%=list[i].get("item") %>'
				+ '</span><br/>');
		htmlArr.push('重量：<span class="span_label">' + '<%=weight %>'
				+ '</span>');
		
		htmlArr.push('</td>');
		htmlArr.push('</tr>');
		
		htmlArr.push('</table>');
	<% } %>
	$("body").append(htmlArr.join(''));

	window.print();
}


</script>
</head>
<body onload="initPage()">
</body>


</html>
