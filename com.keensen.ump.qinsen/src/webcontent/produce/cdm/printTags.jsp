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
<title>叠膜栈板号标签打印</title>
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
					htmlArr.push('栈板编号：<span class="span_label">' + '<%=list[i].get("batchNo") %>' + '</span><br/>');
					htmlArr.push('膜片批次：<span class="span_label">' + '<%=list[i].get("tumoBatchNo") %>' + '</span><br/>');
					htmlArr.push('元件型号：<span class="span_label">' + '<%=list[i].get("cdmSpecName") %>' + '</span><br/>');
					htmlArr.push('订&nbsp;单&nbsp;号&nbsp;：<span class="span_label">' + '<%=list[i].get("orderNo") %>' + '</span><br/>');
					
				<%	if(null == list[i].get("isToMixStr")){ %>
						var isToMixStr = '';
				<%	}else{ %>
						var isToMixStr = '<%=list[i].get("isToMixStr") %>';
				<%  }  %>	
					htmlArr.push('单&nbsp;&nbsp;/&nbsp;&nbsp;混&nbsp;：<span class="span_label">' + isToMixStr + '</span><br/>');
					htmlArr.push('总&nbsp;页&nbsp;数&nbsp;：<span class="span_label" style="display:inline-block;width:10mm;">' + '<%=list[i].get("quantity") %>' + '</span>');
									
				<%	if(null == list[i].get("numPerWad")){ %>
						var numPerWad = '';
				<%	}else{ %>
						var numPerWad = '<%=list[i].get("numPerWad") %>';
				<%  }  %>	
				
					htmlArr.push('每叠页数：<span class="span_label">' + numPerWad + '</span><br/>');
			
				<%	if(null == list[i].get("blankingSize")){ %>
						var blankingSize = '';
				<%	}else{ %>
						var blankingSize = '<%=list[i].get("blankingSize") %>';
				<%  }  %>	
					
					
					
					htmlArr.push('下料尺寸：<span class="span_label" style="display:inline-block;width:10mm;">' + blankingSize + '</span>');
				<%	if(null == list[i].get("denseNet")){ %>
						var denseNet = '';
				<%	}else{ %>
						var denseNet = '<%=list[i].get("denseNet") %>';
				<%  }  %>	
					
					htmlArr.push('浓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网：<span class="span_label">' + denseNet + '</span>');
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