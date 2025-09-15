<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<%@ taglib uri="http://eos.primeton.com/tags/dict" prefix="d"%>
<html>
<%
			Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
			DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"list");
			
			DataObject head = (DataObject) XpathUtil.getObjectByXpath(rootObj,
			"data");
			String nsf = null == head.get("reserve2")?"N":head.get("reserve2").toString();
			String nsfName = "N".equals(nsf)?"否":"是";
			
			String orderNo = head.get("reserve1").toString();
			int storage = -1;
			//成品仓 0,C等品仓 1,订单仓 2
			//SG开头
			if(orderNo.startsWith("SG")){
				String label = null == head.get("label")?"":head.get("label").toString();
				//标签包含公司标准,成品仓
				if(label.indexOf("公司标准")>-1){
					storage = 0;
					//标签包含中性,C等品仓
				}else if(label.indexOf("中性")>-1){
					storage = 1;
				}
				//非SG开头
			}else{
				String saltLowBase = null == head.get("saltLowBase")?"":head.get("saltLowBase").toString();
				String gpdLowBase = null == head.get("gpdLowBase")?"":head.get("gpdLowBase").toString();
				String gpdUpBase = null == head.get("gpdUpBase")?"":head.get("gpdUpBase").toString();
				if("公司标准".equals(saltLowBase) && "公司标准".equals(gpdLowBase) && "公司标准".equals(gpdUpBase)){
					storage = 0;
				}else{
					storage = 2;//订单仓
				}
			}
			
			
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>家用元件入库请检单</title>

<script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>
<script type='text/javascript'
	src="base/jquery/plugins/JsBarcode.all.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>
<script type="text/javascript"
	src="base/jquery/plugins/jquery.qrcode.js"></script>
<script type="text/javascript"
	src="qinsen/produce/tumo/js/printTumoTag.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>

<style type="text/css">
<!--
.style0 {font-family: "仿宋";font-size:9pt;}
.style1 {font-family: "仿宋";font-size:11pt;}
.style2 {font-family: "仿宋";font-size:12pt;}
.style3 {font-family: "仿宋";font-size:20pt;}
.style4 {font-family: "仿宋";font-size:24pt;}
 
-->
    </style>


</head>
<body onload="initPage()">
<div align="center" id="pdfContainer">
<%--<table width="780" border="0">
	<tr>
		<td width="100%" height="47">
		<div align="right" class="style3">		
		<svg id="barcode_<b:write property="data/code" />" style="width:80mm"></svg>
		</div>
		</td>
	</tr>
</table>--%>
<table width="780" border="0">
	<tr>
		<td width="100%" height="47">
		<div align="center" class="style3"><strong>家用元件入库请检单</strong></div>
		</td>
	</tr>
</table>

<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>订单类型:</strong><b:write
			property="data/orderType" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>订单号:</strong><b:write
			property="data/reserve1" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>栈板号:</strong><b:write
			property="data/code" /></div>
		</td>
	</tr>

	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>订单元件型号:</strong><b:write
			property="data/prodSpecName" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>订单数量:</strong><b:write
			property="data/orderAmount" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>请检数量:</strong><b:write
			property="data/applyAmount" /></div>
		</td>
	</tr>

	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>请检经办人:</strong><b:write
			property="data/applyUserName" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>请检日期:</strong><b:write
			property="data/applyDate" formatPattern="yyyy-MM-dd" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>带NSF:<%=nsfName%></div>
		</td>
	</tr>

</table>
<table width="780" border="0">
	<tr>
		<td width="100%" height="28">
		<div align="center" class="style2"><strong>订单要求</strong></div>
		</td>
	</tr>
</table>

<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>元件类型:</strong><b:write
			property="data/prodSpecName" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>胶带颜色:</strong><b:write
			property="data/tapColor" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>唛头显示型号:</strong><b:write
			property="data/markSpecCode" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>标签:</strong><d:write
			property="data/label" dictTypeId="KS_COMPONENT_INDUSTRY_LABEL" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>包装袋:</strong><b:write
			property="data/bag" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>包装箱:</strong><d:write
			property="data/box" dictTypeId="KS_COMPONENT_INDUSTRY_BOX" /></div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="100%" height="28">
		<div align="center" class="style2"><strong>性能要求</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="50%" height="38">
		<div align="left" class="style1"><strong>产水量GPD:</strong><b:write
			property="data/gpdAvg" /></div>
		</td>
		<td width="50%" height="38">
		<div align="left" class="style1"><strong>脱盐率%:</strong><b:write
			property="data/saltAvg" /></div>
		</td>

	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="100%" height="28">
		<div align="center" class="style2"><strong>请检信息</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>请检箱数/箱:</strong><b:write
			property="data/quantityBox" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>单箱数量/支:</strong><b:write
			property="data/quantityPerBox" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>尾箱内元件数量/支:</strong><b:write
			property="data/quantityLastBox" /></div>
		</td>
	</tr>
</table>
<%--<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="50%" height="38">
		<div align="left" class="style1"><strong>唛头起始号:</strong><b:write
			property="data/markSnStart" /></div>
		</td>
		<td width="50%" height="38">
		<div align="left" class="style1"><strong>唛头尾号:</strong><b:write
			property="data/markSnEnd" /></div>
		</td>

	</tr>
</table>--%>
<table width="780" border="0">
	<tr>
		<td width="100%" height="28">
		<div align="center" class="style2"><strong>性能数据</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="25%" height="38">
		<div align="center" class="style1"><strong>膜批次</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><strong>数量/支</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><strong>元件序号</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><strong>卷膜日期</strong></div>
		</td>
		<%--<td width="14%" height="38">
		<div align="center" class="style1"><strong>平均产水量</strong></div>
		</td>
		<td width="14%" height="38">
		<div align="center" class="style1"><strong>平均脱盐率%</strong></div>
		</td>
		<td width="16%" height="38">
		<div align="center" class="style1"><strong>水测判定结果</strong></div>
		</td>--%>

	</tr>
	<%
	for (int i = 0; i < list.length; i++) {
	%>
	<tr style="border: 1px solid black;">

		<td height="38">
		<div align="center" class="style1"><%=list[i].getString("batchNo")%></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><%=list[i].getString("amount")%></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><%=list[i].getString("batchNoStr")%></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><%=list[i].getString("jmProduceDt")%></div>
		</td>
		<%--<td height="38">
		<div align="center" class="style1"><%=list[i].getString("gpd")%></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><%=list[i].getString("salt")%></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><%=list[i].getString("isProdQualified")%></div>
		</td>--%>


	</tr>

	<%
	}
	%>
</table>

<table width="780" border="0">
	<tr>
		<td width="100%" height="28">
		<div align="center" class="style2"><strong>外观和尺寸检查</strong></div>
		</td>
	</tr>
</table>

<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>检查项目</strong></div>
		</td>
		<td width="35%" height="38">
		<div align="center" class="style1"><strong>检验标准</strong></div>
		</td>
		<td width="10%" height="38">
		<div align="center" class="style1"><strong>检验方法</strong></div>
		</td>
		<td width="20%" height="38">
		<div align="center" class="style1"><strong>抽样数量或比例</strong></div>
		</td>
		<td width="20%" height="38">
		<div align="center" class="style1"><strong>检验判定</strong></div>
		</td>

	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style2"><strong>包装箱唛头</strong></div>
		</td>
		<td width="35%" height="38">
		<div align="left" class="style1">
		<p>&nbsp;&nbsp;字迹清晰，内容符合图纸或订单要求</p>
		</div>
		</td>
		<td width="10%" height="38">
		<div align="center" class="style1">目视</div>
		</td>
		<td width="20%" height="38">
		<div align="center" class="style1">5</div>
		</td>
		<td width="20%" height="38">
		<div align="center" class="style1"><input type="checkbox">合格<input
			type="checkbox">不合格</div>
		</td>

	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style2"><strong>元件标签</strong></div>
		</td>
		<td width="35%" height="38">
		<div align="left" class="style1">
		<p>&nbsp;&nbsp;字迹清晰，内容符合图纸或订单要求</p>
		</div>
		</td>
		<td width="10%" height="38">
		<div align="center" class="style1">目视</div>
		</td>
		<td width="20%" height="38">
		<div align="center" class="style1">5</div>
		</td>
		<td width="20%" height="38">
		<div align="center" class="style1"><input type="checkbox">合格<input
			type="checkbox">不合格</div>
		</td>

	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="68">
		<div align="center" class="style2"><strong>元件外观</strong></div>
		</td>
		<td width="35%" height="68">
		<div align="left" class="style1">&nbsp;&nbsp;玻璃钢表面平整，无刺手凸点或毛刺。<br>
		&nbsp;&nbsp;玻璃钢内部和端面颜色均匀。<br>
		&nbsp;&nbsp;膜元件端盖处平齐。</div>
		</td>
		<td width="10%" height="68">
		<div align="center" class="style1">目视</div>
		</td>
		<td width="20%" height="68">
		<div align="center" class="style1">50%</div>
		</td>
		<td width="20%" height="68">
		<div align="center" class="style1"><input type="checkbox">合格<input
			type="checkbox">不合格</div>
		</td>

	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="56">
		<div align="center" class="style2"><strong>元件直径</strong></div>
		</td>
		<td width="35%" height="56">
		<div align="left" class="style1">&nbsp;&nbsp;直径检测仪测试合格或<br>
		&nbsp;&nbsp;测直径的卡规可正常通过。</div>
		</td>
		<td width="10%" height="56">
		<div align="center" class="style1">测量</div>
		</td>
		<td width="20%" height="56">
		<div align="center" class="style1">8寸：100%<br>
		4寸：10%</div>
		</td>
		<td width="20%" height="56">
		<div align="center" class="style1"><input type="checkbox">合格<input
			type="checkbox">不合格</div>
		</td>

	</tr>
</table>

<br>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>最终判定</strong></div>
		</td>
		<td width="55%" height="38">
		<div align="center" class="style1"><strong>不合格处理方式</strong></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>C等品</strong></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>入库仓位</strong></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="68">
		<div align="center" class="style1"><input type="checkbox">合格&nbsp;&nbsp;<br>
		<input type="checkbox">不合格</div>
		</td>
		<td width="55%" height="68">
		<div align="left" class="style1">&nbsp;&nbsp;<input
			type="checkbox">返工，重新检验结果：<input type="checkbox">合格<input
			type="checkbox">不合格 <br>
		&nbsp;&nbsp;<input type="checkbox">让步接收，品质异常单编号： <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
		<br>
		&nbsp;&nbsp;<input type="checkbox">待处理，建议元件型号： <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
		</div>
		</td>

		<td width="15%" height="38">
		<div align="center" class="style1">&nbsp;<input type="checkbox">是
		<br>
		&nbsp;<input type="checkbox">否</div>

		</td>

		<td width="15%" height="68">
		<div align="center" class="style1">&nbsp;<input type="checkbox" <% if(storage==0){ %> checked  <% } %>>成品仓
		<br>
		&nbsp;<input type="checkbox" <% if(storage==2){ %> checked  <% } %>>订单仓 <br>
		&nbsp;&nbsp;<input type="checkbox" <% if(storage==1){ %> checked  <% } %>>C等品仓</div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="40%" height="48">
		<div align="left" class="style1">检验员：</div>
		</td>
		<td width="60%" height="48">
		<div align="left" class="style1">质量管理部部长：</div>
		</td>
	</tr>
</table>

<p>&nbsp;</p>
<p>&nbsp;</p>
</div>
<script type="text/javascript">
 
	function initPage() {
						<%--var batchNo = '<b:write property="data/code" />';
						var barcode = document.getElementById('barcode_' + batchNo), 
						options = {
						format : "CODE128",
						displayValue : true,
						fontSize : 16,
						font : 'msyhbd',
						fontOptions : 'bold',
						textMargin : 0,
						height : 50,
						margin : 0,
						width : 3
						};
						
					JsBarcode(barcode, batchNo, options);--%>
					window.print();
					
	};
</script>
</body>
</html>
