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
		<div align="left" class="style0">地址：湖南省长沙市湘江新区明湖路370号<br>
		Add.: No.370,Minghu RD,  Changsha Hunan, China</div>
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
		<div align="center" class="style3"><strong>PRODUCT TEST REPORT</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="50%">
		<div align="left" class="style2">&nbsp;
		</td>
		<td width="50%">
		<div align="right" class="style2">Report No.：<b:write
			property="data/code" /></div>
		</td>
	</tr>
</table>

<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse;collapse;border-bottom:none; ">

	<tr style="border: 1px solid black;">
		<td width="10%" height="38">
		<div align="center" class="style1"><strong>Purchase NO.</strong></div>
		</td>
		<td width="15%">
		<div align="center" class="style1"><b:write
			property="data/orderNo" /></div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>Product name</strong></div>
		</td>
		<td width="15%">
		<div align="center" class="style1"><b:write
			property="data/eProductName" /></div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>Model</strong></div>
		</td>
		<td width="15%">
		<div align="center" class="style1"><b:write
			property="data/labelSpecName" /></div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>Test Date</strong></div>
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
		<div align="center" class="style1"><strong>Order Quantity</strong></div>
		</td>
		<td width="23%">
		<div align="center" class="style1"><b:write
			property="data/orderAmount" />m</div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>Actual Quantity</strong></div>
		</td>
		<td width="23%">
		<div align="center" class="style1"><b:write
			property="data/amountIndeed" />m</div>
		</td>
		<td width="10%">
		<div align="center" class="style1"><strong>Available Quantity</strong></div>
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
		<strong>Summary of test items, methods </strong>
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
		<div align="center" class="style1"><strong>Test item</strong></div>
		</td>
		<td width="26%" height="38">
		<div align="center" class="style1"><strong>Test result summaries</strong></div>
		</td>
		<td width="21%" height="38">
		<div align="center" class="style1"><strong>Check/test methods</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><strong>Test methods</strong></div>
		</td>
		
	</tr>
	<tr style="border: 1px solid black;">
		<td width="8%" height="78">
		<div align="center" class="style1"><strong>Package</strong></div>
		</td>
		<td width="20%" height="78">
		<div align="center" class="style1"><strong>Marks, inner package,packing carton</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1">1.Content of marks is right and clear.<br>
		2.The inner package meets the requirements, sealing firm, and no damaged.<br>
		3. The package carton no damaged or damp, and the packaging is firm, etc.</div>
		</td>
		<td width="21%">
		<div align="center" class="style1">Visual</div>
		</td>
		<td width="25%">
		<div align="center" class="style1">100% Inspect</div>
		</td>
		
	</tr>
	<tr style="border: 1px solid black;" >
		<td width="8%" height="78" rowspan=3>
		<div align="center" class="style1"><strong>Size</strong></div>
		</td>
		<td width="20%" height="26">
		<div align="center" class="style1"><strong>Average Thickness</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1"><b:write
			property="data/thickAvg" /></div>
		</td>
		<td width="21%" height="26">
		<div align="center" class="style1">Thickness tester</div>
		</td>
		<td width="25%" height="78" rowspan=3>
		<span style="word-wrap: break-word;" align="left" class="style1">
		Each roll take sample size 30cm*1047mm,test 10 positions.</span>
		</td>
		
	</tr>
	
	<tr style="border: 1px solid black;" >
		
		<td width="20%" height="26">
		<div align="center" class="style1"><strong>Sheet Width</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1"><b:write
			property="data/widthMp" /></div>
		</td>
		<td width="21%" height="26">
		<div align="center" class="style1">Tape measure /Ruler</div>
		</td>
		
	</tr>
	
		<tr style="border: 1px solid black;" >
		
		<td width="20%" height="26">
		<div align="center" class="style1"><strong>Effective coating width</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1"><b:write
			property="data/widthValid" /></div>
		</td>
		<td width="21%" height="26">
		<div align="center" class="style1">Tape measure /Ruler</div>
		</td>
		
	</tr>
	
	<tr style="border: 1px solid black;" >
		<td width="8%" height="78" rowspan=2>
		<div align="center" class="style1"><strong>Performance</strong></div>
		</td>
		<td width="20%" height="39">
		<div align="center" class="style1"><strong>Water flux</strong></div>
		</td>
		<td width="26%" >
		<div align="left" class="style1"><b:write
			property="data/gfdLimit" /></div>
		</td>
		<td width="21%" height="78" rowspan=2>
		<div align="left" class="style1">
		Temperature: 25℃<br>
		Pressure: 1.55MPa<br>
		Testing solution:2000mg/L NaCl<br>
		solution<br>
		PH :7.0-8.0<br>
		Concentration water flow: 4Lpm    
		</div>
		</td>
		<td width="25%" height="78" rowspan=2>
		<span style="word-wrap: break-word;" align="left" class="style1">
		Each roll take sample size 30cm*1047mm</span>
		</td>
		
	</tr>
	
	<tr style="border: 1px solid black;" >
		
		<td width="20%" height="39">
		<div align="center" class="style1"><strong>Rejection rate</strong></div>
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
		<strong>Test Result</strong>
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
		<td width="15%" height="52" rowspan=2>
		<div align="center" class="style1"><strong>Batch No.</strong></div>
		</td>
		
		<td width="16%" height="26" colspan=2>
		<div align="center" class="style1"><strong>Length</strong></div>
		</td>
		<td width="18%" height="26" colspan=3>
		<div align="center" class="style1"><strong>Size</strong></div>
		</td>
		<td width="12%" height="26" colspan=2>
		<div align="center" class="style1"><strong>Performance</strong></div>
		</td>
		<td width="24%" height="26" colspan=2>
		<div align="center" class="style1"><strong>Appearance</strong></div>
		</td>
		<td width="7%" height="52" rowspan=2>
		<div align="center" class="style1"><strong>Package</strong></div>
		</td>
		<td width="7%" height="52" rowspan=2>
		<div align="center" class="style1"><strong>Judgment</strong></div>
		</td>
	</tr>
	
	<tr style="border: 1px solid black;" >
	<td width="8%" height="26" >
		<div align="center" class="style1"><strong>Actual quantity</strong><br>m</div>
		</td>
		<td width="8%" height="26" >
		<div align="center" class="style1"><strong>Available quantity</strong><br>m</div>
		</td>
		<td width="6%" height="26" >
		<div align="center" class="style1"><strong>Average thickness</strong><br>μm</div>
		</td>
		<td width="6%" height="26" >
		<div align="center" class="style1"><strong>Sheet Width</strong><br>mm</div>
		</td>
		<td width="6%" height="26" >
		<div align="center" class="style1"><strong>Effective coating width</strong><br>mm</div>
		</td>
		<td width="6%" height="26" >
		<div align="center" class="style1"><strong>Water flux</strong><br>GFD</div>
		</td>
		<td width="6%" height="26" >
		<div align="center" class="style1"><strong>Rejection rate</strong><br>%</div>
		</td>
		<td width="16%" height="26" >
		<div align="center" class="style1"><strong>Defect point position、type and length</strong></div>
		</td>
		<td width="8%" height="26" >
		<div align="center" class="style1"><strong>Defect point numbers</strong></div>
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
			<div align="center" class="style1"><strong>Total</strong></div>
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
			<div align="left" valign="top" class="style2"><strong>Comprehensive Judgment：</strong></div>
			</td>
			<td width="80%" rowspan=2>
			<div align="center"><img
				src="produce/quality/mpreport/img/2.png" width="100%"
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
				property="data/eResult" /></strong></div>
			</td>
			
		</tr>
	</table>
	<table width="780" border="0">
		<tr>
			<td width="33%" height="56">
			<div align="left" class="style1">Checked by：<b:write
				property="data/inspector" /></div>
			</td>

			<l:equal property="data/reviewerId" targetValue="KS00610">
				<td width="10%" height="56">
				<div align="left" class="style1">Approved by：</div>
				</td>
				<td width="23%" height="56" align="left"><img
					src="produce/quality/deliveryrecord/img/KS00610.jpg" width="120"
					height="56"></td>
			</l:equal>
			<l:notEqual property="data/reviewerId" targetValue="KS00610">
				<td width="33%" height="56">
				<div align="left" class="style1">Approved by：<b:write
					property="data/reviewer" /></div>
				</td>
			</l:notEqual>
			<td width="33%" height="56">
			<div align="left" class="style1">Date：<b:write
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
