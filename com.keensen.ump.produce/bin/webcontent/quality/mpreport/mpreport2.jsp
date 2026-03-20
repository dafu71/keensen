<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<html>
<%
			Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	    DataObject[] list2 = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "list");
		String opt = (String) XpathUtil.getObjectByXpath(rootObj, "opt");
	
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>膜片检测报告</title>
<style type="text/css">
<!--
.style0 {font-family: "仿宋";font-size:9pt;}
.style1 {font-family: "仿宋";font-size:11pt;}
.style2 {font-family: "仿宋";font-size:12pt;}
.style3 {font-family: "仿宋";font-size:20pt;}
.style4 {font-family: "仿宋";font-size:24pt;}
 
-->
    </style>
<%if("print".equals(opt)){ %>
<script type="text/javascript">
	(function(){
		window.print();
	})();
</script>
<%} %>
</head>
<body>
<div align="center" id="pdfContainer2">

<table width="780" border="0">
	<tr>
		<td rowspan="4" width="50%"><img
			src="produce/quality/deliveryrecord/img/image001.jpg" width="161"
			height="56"></td>
		<td width="50%">
		<div align="left" class="style0">地址：湖南省长沙市湘江新区明湖路370号</div>
		</td>
	</tr>
	<tr>
		<td>
		<div align="left" class="style0">网址：www.keensen.com</div>
		</td>
	</tr>
	<tr>
		<td>
		<div align="left" class="style0">电话：+86-731-89972869</div>
		</td>
	</tr>
	<tr>
		<td>
		<div align="left" class="style0">传真：+86-731-89972600</div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="100%" height="47">
		<div align="center" class="style3"><strong>产品检测报告</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="50%">
		<div align="left" class="style2">曼胡料号：105.1899.0101
		</td>
		<td width="50%">
		<div align="right" class="style2">报告编号：<b:write
			property="data/code" /></div>
		</td>
	</tr>
</table>

<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse;collapse;border-bottom:none; ">

	<tr style="border: 1px solid black;">
		<td width="10%" height="38">
		<div align="center" class="style1"><strong>订单号</strong></div>
		</td>
		<td width="17%">
		<div align="center" class="style1"><b:write
			property="data/orderNo" /></div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>货品名称</strong></div>
		</td>
		<td width="15%">
		<div align="center" class="style1"><b:write
			property="data/productName" /></div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>规格型号</strong></div>
		</td>
		<td width="13%">
		<div align="center" class="style1"><b:write
			property="data/labelSpecName" /></div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>检验日期</strong></div>
		</td>
		<td width="15%">
		<div align="center" class="style1"><b:write
			property="data/checkDt" /></div>
		</td>
	</tr>
</table>

<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse;border-top:none; ">

	<tr style="border: 1px solid black;">
		<td width="10%" height="38">
		<div align="center" class="style1"><strong>订单数量</strong></div>
		</td>
		<td width="23%">
		<div align="center" class="style1"><b:write
			property="data/orderAmount" />m</div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>实发数量</strong></div>
		</td>
		<td width="23%">
		<div align="center" class="style1"><b:write
			property="data/amountIndeed" />m</div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>可用数量</strong></div>
		</td>
		<td width="23%">
		<div align="center" class="style1"><b:write
			property="data/amountUse" />m</div>
		</td>
		
	</tr>
</table>

<table width="780" border="0">
	<tr>
		<td width="50%">
		<div align="left" class="style2"><div align="left" class="style2">
		<strong>检验项目、方法</strong>
		</div>
		</td>
		<td width="50%">
		<div align="right" class="style2">&nbsp;
		</td>
	</tr>
</table>

<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse;border-top:none; ">

	<tr style="border: 1px solid black;">
		<td width="28%" height="38" colspan=2>
		<div align="center" class="style1"><strong>检验项目</strong></div>
		</td>
		<td width="26%" height="38">
		<div align="center" class="style1"><strong>检验标准</strong></div>
		</td>
		<td width="21%" height="38">
		<div align="center" class="style1"><strong>检查/测试方法</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><strong>检验方式</strong></div>
		</td>
		
	</tr>
	<tr style="border: 1px solid black;">
		<td width="8%" height="78">
		<div align="center" class="style1"><strong>包装</strong></div>
		</td>
		<td width="20%" height="78">
		<div align="center" class="style1"><strong>唛头、内包装、包装箱</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1">1.唛头内容正确，清楚。<br>
		2.内包装符合包装要求，密封牢固，无破损。<br>
		3.包装箱无破损受潮，包装牢固等。</div>
		</td>
		<td width="21%">
		<div align="center" class="style1">目视</div>
		</td>
		<td width="25%">
		<div align="center" class="style1">全检</div>
		</td>
		
	</tr>
	<tr style="border: 1px solid black;" >
		<td width="8%" height="78" rowspan=3>
		<div align="center" class="style1"><strong>尺寸</strong></div>
		</td>
		<td width="20%" height="26">
		<div align="center" class="style1"><strong>膜片平均厚度</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1"><b:write
			property="data/thickAvg" /></div>
		</td>
		<td width="21%" height="26">
		<div align="center" class="style1">厚度测定仪</div>
		</td>
		<td width="25%" height="78" rowspan=3>
		<span style="word-wrap: break-word;" align="left" class="style1">
		每卷取样300mm*1047mm，测试10个点</span>
		</td>
		
	</tr>
	
	<tr style="border: 1px solid black;" >
		
		<td width="20%" height="26">
		<div align="center" class="style1"><strong>膜片宽幅</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1"><b:write
			property="data/widthMp" /></div>
		</td>
		<td width="21%" height="26">
		<div align="center" class="style1">卷尺/直尺</div>
		</td>
		
	</tr>
	
		<tr style="border: 1px solid black;" >
		
		<td width="20%" height="26">
		<div align="center" class="style1"><strong>有效涂布宽度</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1"><b:write
			property="data/widthValid" /></div>
		</td>
		<td width="21%" height="26">
		<div align="center" class="style1">卷尺/直尺</div>
		</td>
		
	</tr>
	
	<tr style="border: 1px solid black;" >
		<td width="8%" height="78" rowspan=2>
		<div align="center" class="style1"><strong>性能</strong></div>
		</td>
		<td width="20%" height="39">
		<div align="center" class="style1"><strong>通量</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1"><b:write
			property="data/gfdLimit" /></div>
		</td>
		<td width="21%" height="78" rowspan=2>
		<div align="left" class="style1">
		温度：25℃<br>
		压力：1.55MPa<br>
		测试液浓度：2000mg/L NaCl溶液<br>
		测试液pH值：7.0-8.0<br>
		浓水流量：4Lpm    
		</div>
		</td>
		<td width="25%" height="78" rowspan=2>
		<span style="word-wrap: break-word;" align="left" class="style1">
		每卷取样300mm*1047mm，测试3个点</span>
		</td>
		
	</tr>
	
	<tr style="border: 1px solid black;" >
		
		<td width="20%" height="39">
		<div align="center" class="style1"><strong>脱盐率</strong></div>
		</td>
		<td width="31%" >
		<div align="left" class="style1"><b:write
			property="data/saltLimit" /></div>
		</td>
		
		
	</tr>
</table>

<table width="780" border="0">
	<tr>
		<td width="50%">
		<div align="left" class="style2"><div align="left" class="style2">
		<strong>检验结果</strong>
		</div>
		</td>
		<td width="50%">
		<div align="right" class="style2">&nbsp;
		</td>
	</tr>
</table>

<l:notEmpty property="list">
<table width="780" border="1" bordercolor="#000000"
		style="border-collapse: collapse; ">
		
	<tr style="border: 1px solid black;" >	
		<td width="10%" height="52" rowspan=2>
		<div align="center" class="style1"><strong>批号</strong></div>
		</td>
		<td width="5%" height="52" rowspan=2>
		<div align="center" class="style1"><strong>底膜号</strong></div>
		</td>
		<td width="14%" height="26" colspan=2>
		<div align="center" class="style1"><strong>长度</strong></div>
		</td>
		<td width="20%" height="26" colspan=4>
		<div align="center" class="style1"><strong>尺寸</strong></div>
		</td>
		<td width="12%" height="26" colspan=2>
		<div align="center" class="style1"><strong>性能</strong></div>
		</td>
		<td width="24%" height="26" colspan=2>
		<div align="center" class="style1"><strong>外观</strong></div>
		</td>
		<td width="7%" height="52" rowspan=2>
		<div align="center" class="style1"><strong>包装</strong></div>
		</td>
		<td width="7%" height="52" rowspan=2>
		<div align="center" class="style1"><strong>膜片批次判定</strong></div>
		</td>
	</tr>
	
	<tr style="border: 1px solid black;" >
	<td width="8%" height="26" >
		<div align="center" class="style1"><strong>实发数量</strong><br>m</div>
		</td>
		<td width="8%" height="26" >
		<div align="center" class="style1"><strong>可用数量</strong><br>m</div>
		</td>
		<td width="5%" height="26" >
		<div align="center" class="style1"><strong>平均厚度</strong><br>μm</div>
		</td>
		<td width="5%" height="26" >
		<div align="center" class="style1"><strong>宽幅</strong><br>mm</div>
		</td>
		<td width="5%" height="26" >
		<div align="center" class="style1"><strong>卷筒内径</strong><br>mm</div>
		</td>
		<td width="5%" height="26" >
		<div align="center" class="style1"><strong>有效涂布宽度</strong><br>mm</div>
		</td>
		<td width="6%" height="26" >
		<div align="center" class="style1"><strong>通量</strong><br>GFD</div>
		</td>
		<td width="6%" height="26" >
		<div align="center" class="style1"><strong>脱盐率</strong><br>%</div>
		</td>
		<td width="16%" height="26" >
		<div align="center" class="style1"><strong>瑕疵点位置、类型和长度</strong></div>
		</td>
		<td width="8%" height="26" >
		<div align="center" class="style1"><strong>瑕疵标签个数</strong></div>
		</td>
	</tr>	
		<%
		for (int i = 0; i < list2.length; i++) {
		%>
		<tr style="border: 1px solid black;">
		<td>
			<div align="center" class="style1"><%=list2[i].getString("batchNo")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("dm")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("amountIndeed")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("amountUse")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("thickAvg")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("widthMp")%></div>
		</td>
		<td>
			<div align="center" class="style1">78.0</div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("widthValid")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("gfd")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("salt")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("defect1")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("defect2")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("package")%></div>
		</td>
		<td>
			<div align="center" class="style1"><%=list2[i].getString("result")%></div>
		</td>
		</tr>
		
		
		
		
		<% } %>
		
		<tr style="border: 1px solid black;">
		<td colspan=2>
			<div align="center" class="style1"><strong>小计</strong></div>
		</td>
		<td>
			<div align="center" class="style1"><b:write
			property="data/amountIndeed" /></div>
		</td>
		<td>
			<div align="center" class="style1"><b:write
			property="data/amountUse" /></div>
		</td>
		<td colspan=9>
			&nbsp;
		</td>
		</tr>
		
		
</table>
</l:notEmpty>

<l:notEmpty property="data/result">

	<table width="780" border="1" bordercolor="#000000"
		style="border-collapse: collapse; ">
		<tr>
		<td width="20%" style="border-bottom: 1px solid #ffffff;">
			<div align="left" valign="top" class="style2"><strong>综合判定：</strong></div>
			</td>
			<td width="80%" rowspan=2>
			
			<div align="center"><img
				src="produce/quality/mpreport/img/1.png" width="100%"
				height="100%"></div>
			<%--<span align="left" class="style1">说明：</span>
			<div align="left" class="style1">
		
		1.检验项目、方法参照沁森高科《反渗透膜和纳滤膜产品质量检验方法及管理标准》。<br>
		2.膜卷中检查出的所有瑕疵点、接头和取样口均使用标签沿宽幅方向标识贴于有效层面。<br>
		3.所有膜卷中的实发数量包括所有瑕疵点数量、接头和取样口数量，请按可用数量签收。<br>
		4.膜片应在干燥、避光的环境中储存，储存环境温度须控制在（5-35）℃，使用前保持膜卷密封、避光保存，使用后将剩余膜片进行密封包装并注意避光保存。 <br>
		5.膜片宜在收到后90天内使用完毕，超过90天的，膜片性能、颜色等存在变化风险。   <br>
		6.膜片的储存、运输、测试和使用过程中禁止触碰、挤压膜片的正面，即脱盐层，避免其受到物理损伤后性能下降。 <br>
        7.客户自收到膜片后，发现存在缺陷的，须在7个工作日内提出，遵循沁森高科提供的技术文件正确使用的，如出现因制造工艺或材料方面引起的质量问题，
        经沁森高科检测确认后，沁森高科依据《沁森高科膜产品质量保证书》中的规定措施处理
		</div>
		<br>	--%>
		</td>
		</tr>
		<tr>
			<td width="20%" height="192" >
			<div align="center" class="style4"><strong><b:write
				property="data/result" /></strong></div>
			</td>
			
		</tr>
	</table>
	<table width="780" border="0">
		<tr>
			<td width="33%" height="56">
			<div align="left" class="style1">检验员：<b:write
				property="data/inspector" /></div>
			</td>

			<l:equal property="data/reviewerId" targetValue="KS00610">
				<td width="10%" height="56">
				<div align="left" class="style1">审核人：</div>
				</td>
				<td width="23%" height="56" align="left"><img
					src="produce/quality/deliveryrecord/img/KS00610.jpg" width="120"
					height="56"></td>
			</l:equal>
			<l:notEqual property="data/reviewerId" targetValue="KS00610">
				<td width="33%" height="56">
				<div align="left" class="style1">审核人：<b:write
					property="data/reviewer" /></div>
				</td>
			</l:notEqual>
			<td width="33%" height="56">
			<div align="left" class="style1">报告日期：<b:write
				property="data/reportDt" formatPattern="yyyy/MM/dd" /></div>
			</td>
		</tr>
	</table>
</l:notEmpty>

</div>
<div align='center' id="mpreportprint">
<button onclick="printPage()">打印</button>
</div>
</body>
<script type="text/javascript">
 
	function printPage() {
	
		document.getElementById('mpreportprint').style.display = "none";;
		window.print();
					
	};
</script>
</html>
