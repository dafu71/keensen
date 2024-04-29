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
	DataObject data = (DataObject) XpathUtil.getObjectByXpath(rootObj,
			"data");
	String opt = (String) XpathUtil.getObjectByXpath(rootObj, "opt");
	//判断导入明细格式
	//分为1、只有元件数据	2、包含测试数据
	int flag = 1;//只有元件数据
	for (int i = 0; i < list2.length; i++) {

		if (null != list2[i].getString("water")
		|| null != list2[i].getString("desalination")) {
			flag = 2;
			break;
		}
	}
	String labelingModel = data.getString("labelingModel");
	int rowspan = 2;
	if (labelingModel.equals("NF-60") || labelingModel.equals("NF-80")) {
		rowspan = 1;
	}
	;
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>纳滤膜元件检测报告</title>
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
<div align="center" id="pdfContainer">

<table width="780" border="0">
	<tr>
		<td rowspan="4" width="50%"><img
			src="produce/quality/deliveryrecord/img/image001.jpg" width="161"
			height="56"></td>
		<td width="50%">
		<div align="left" class="style0">地址：湖南省长沙市高新开发区麓谷麓天路6号</div>
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
		<div align="left" class="style2"><strong>产品信息</strong></div>
		</td>
		<td width="50%">
		<div align="right" class="style2">报告编号：<b:write
			property="data/code" /></div>
		</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="25%" height="38">
		<div align="center" class="style1"><strong>品名 </strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/productName" /></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><strong>规格</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/labelingModel" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td height="38" rowspan="2">
		<div align="center" class="style1"><strong>批号</strong></div>
		</td>
		<td height="38" rowspan="2">
		<div align="center" class="style1"><b:write
			property="data/batchNo" /></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><strong>检验日期</strong></div>
		</td>
		<td height="38">
		<div align="center" class="style1">
		<div align="center" class="style1"><b:write
			property="data/checkDt" formatPattern="yyyy.MM.dd" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td height="38">
		<div align="center" class="style1"><strong>订单数量</strong></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><b:write
			property="data/orderAmount" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td height="38">
		<div align="center" class="style1"><strong>订单号</strong></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><b:write
			property="data/orderNo" /></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><strong>抽检数量</strong></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><b:write
			property="data/checkAmount" /></div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="50%">
		<div align="left" class="style2"><strong>测试条件</strong></div>
		</td>
		<td width="50%">&nbsp;</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td height="27" colspan="2">
		<div align="center" class="style1">测试用原水</div>
		</td>
		<td width="15%" height="27">
		<div align="center" class="style1">温度（℃）</div>
		</td>
		<td width="15%" height="27">
		<div align="center" class="style1">pH</div>
		</td>
		<td width="20%" height="27">
		<div align="center" class="style1">测试压力psi(Mpa）</div>
		</td>
		<td width="15%" height="27">
		<div align="center" class="style1">回收率（ % ）</div>
		</td>
	</tr>
	<l:equal targetValue="纳滤膜元件" property="data/productName"
		compareType="string">
		<tr style="border: 1px solid black;">
			<td width="5%" height="33">
			<div align="center" class="style1">NaCl</div>
			</td>
			<td width="20%" height="33">
			<div align="center" class="style1"><b:write
				property="data/solution" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/temperature" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write property="data/ph" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/press" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/recovery" /></div>
			</td>
		</tr>
		<%
					if (!labelingModel.equals("NF-60")
					&& !labelingModel.equals("NF-80")) {
		%>
		<tr style="border: 1px solid black;">
			<td height="33">
			<div align="center" class="style1">MgSO<sub>4</sub></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/solution2" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/temperature2" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write property="data/ph2" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/press2" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/recovery2" /></div>
			</td>
		</tr>
		<%
		}
		%>
	</l:equal>
	<l:notEqual targetValue="纳滤膜元件" property="data/productName"
		compareType="string">
		<tr style="border: 1px solid black;">
			<td height="33" colspan="2">
			<div align="center" class="style1"><b:write
				property="data/solution" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/temperature" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write property="data/ph" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/press" /></div>
			</td>
			<td height="33">
			<div align="center" class="style1"><b:write
				property="data/recovery" /></div>
			</td>
		</tr>
	</l:notEqual>
</table>
<table width="780" border="0">
	<tr>
		<td width="50%">
		<div align="left" class="style2"><strong>检验结果</strong></div>
		</td>
		<td width="50%">&nbsp;</td>
	</tr>
</table>
<table width="780" border="1" style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="47" height="27">
		<div align="center" class="style1">序号</div>
		</td>
		<td width="51" height="27">
		<div align="center" class="style1">项目</div>
		</td>
		<td height="27" colspan="2">
		<div align="center" class="style1">标准</div>
		</td>
		<td width="176" height="27">
		<div align="center" class="style1">检验结果</div>
		</td>
		<td width="125" height="27">
		<div align="center" class="style1">检验方法</div>
		</td>
		<td width="110" height="27">
		<div align="center" class="style1">判定</div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td height="78">
		<div align="center" class="style1">1</div>
		</td>
		<td height="78">
		<div align="center" class="style1">外观</div>
		</td>
		<td height="78" colspan="2">
		<div align="center" class="style1">表面光洁平整、无毛刺、损伤、污染、划痕、裂痕、破损等明显缺陷。</div>
		</td>
		<td height="78">
		<div align="center" class="style1">表面光洁平整、无毛刺、损伤、污染、划痕、裂痕、破损等明显缺陷。</div>
		</td>
		<td height="78">
		<div align="center" class="style1">目视</div>
		</td>
		<td height="78">
		<div align="center" class="style1"><b:write
			property="data/appearanceResult" /></div>
		</td>
	</tr>
	<l:equal targetValue="纳滤膜元件" property="data/productName"
		compareType="string">
		<tr style="border: 1px solid black;">
			<td height="38" rowspan="<%=rowspan %>">
			<div align="center" class="style1">2</div>
			</td>
			<td height="38" rowspan="<%=rowspan %>">
			<div align="center" class="style1">产水量</div>
			</td>
			<td width="50" height="38">
			<div align="center" class="style1">NaCl</div>
			</td>
			<td width="175" height="38">
			<div align="center" class="style1"><b:write
				property="data/water" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterCheck" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1">产品标准测试</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterResult" /></div>
			</td>
		</tr>
		<%
					if (!labelingModel.equals("NF-60")
					&& !labelingModel.equals("NF-80")) {
		%>
		<tr style="border: 1px solid black;">
			<td height="38">
			<div align="center" class="style1">MgSO<sub>4</sub></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/water2" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterCheck2" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1">产品标准测试</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterResult2" /></div>
			</td>
		</tr>
		<%
		}
		%>
		<tr style="border: 1px solid black;">
			<td height="38" rowspan="<%=rowspan %>">
			<div align="center" class="style1">3</div>
			</td>
			<td height="38" rowspan="<%=rowspan %>">
			<div align="center" class="style1">脱盐率</div>
			</td>
			<td height="38">
			<div align="center" class="style1">NaCl</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalination" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationCheck" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1">产品标准测试</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationResult" /></div>
			</td>
		</tr>
		<%
					if (!labelingModel.equals("NF-60")
					&& !labelingModel.equals("NF-80")) {
		%>
		<tr style="border: 1px solid black;">
			<td height="38">
			<div align="center" class="style1">MgSO<sub><sub>4</sub></sub></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalination2" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationCheck2" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1">产品标准测试</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationResult2" /></div>
			</td>
		</tr>
		<%
		}
		%>
	</l:equal>
	<l:notEqual targetValue="纳滤膜元件" property="data/productName"
		compareType="string">
		<tr style="border: 1px solid black;">
			<td height="38">
			<div align="center" class="style1">2</div>
			</td>
			<td height="38">
			<div align="center" class="style1">产水量</div>
			</td>
			<td colspan="2" height="38">
			<div align="center" class="style1"><b:write
				property="data/water" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterCheck" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1">产品标准测试</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterResult" /></div>
			</td>
		</tr>
		<tr style="border: 1px solid black;">
			<td height="38">
			<div align="center" class="style1">3</div>
			</td>
			<td height="38">
			<div align="center" class="style1">脱盐率</div>
			</td>
			<td height="38" colspan="2">
			<div align="center" class="style1"><b:write
				property="data/desalination" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationCheck" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1">产品标准测试</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationResult" /></div>
			</td>
		</tr>

	</l:notEqual>
</table>

<l:notEmpty property="data/result">

	<table width="780" border="0" style="border: 1px solid black;">
		<tr>
			<td width="50%">
			<div align="left" class="style2"><strong>结论：</strong></div>
			</td>
			<td width="50%">&nbsp;</td>
		</tr>
		<tr>
			<td width="50%" height="192">
			<div align="center" class="style4"><strong><b:write
				property="data/result" /></strong></div>
			</td>
			<td width="50%" height="192">
			<%if("view".equals(opt)){ %>
			<div align="center"><img
				src="produce/quality/deliveryrecord/img/image003.png" width="189"
				height="190"></div>
				<%} %>
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

</l:notEmpty> <l:notEmpty property="list">
	<p>&nbsp;</p>
	<table width="780" border="0">
		<tr>
			<td width="50%">
			<div align="left" class="style2"><strong>测试膜元件性能数据</strong></div>
			</td>
			<td width="50%">&nbsp;</td>
		</tr>
	</table>


	<table width="780" border="1" bordercolor="#000000"
		style="border-collapse: collapse; ">
		<%
		if (flag == 2) {
		%>
		<tr style="border: 1px solid black;">
			<td width="6%">
			<div align="center" class="style1">序号</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">元件序列号</div>
			</td>
			<td width="12%">
			<div align="center" class="style1">产水量，gpd</div>
			</td>
			<td width="12%">
			<div align="center" class="style1">脱盐率，%</div>
			</td>
			<td width="6%">
			<div align="center" class="style1">序号</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">元件序列号</div>
			</td>
			<td width="12%">
			<div align="center" class="style1">产水量，gpd</div>
			</td>
			<td width="12%">
			<div align="center" class="style1">脱盐率，%</div>
			</td>
		</tr>

		<%
		for (int i = 0; i < list2.length; i++) {
		%>
		<%
		if (i % 2 == 0) {
		%>
		<tr style="border: 1px solid black;">
			<%
			}
			%>

			<td width="6%">
			<div align="center" class="style1"><%=i + 1%></div>
			</td>
			<td width="20%">
			<div align="center" class="style1"><%=list2[i].getString("batchNo")%></div>
			</td>
			<td width="12%">
			<div align="center" class="style1"><%=list2[i].getString("water")%></div>
			</td>
			<td width="12%">
			<div align="center" class="style1"><%=list2[i].getString("desalination")%></div>
			</td>

			<%
			if (i == list2.length - 1 && i % 2 == 0) {
			%>
			<td width="6%">&nbsp;</td>
			<td width="20%">&nbsp;</td>
			<td width="12%">&nbsp;</td>
			<td width="12%">&nbsp;</td>
			<%
			}
			%>

			<%
			if (i % 2 == 1 || i == list2.length - 1) {
			%>
		</tr>
		<%
		}
		%>
		<%
		}
		%>
		<%
		}
		%>

		<%
		if (flag == 1) {
		%>
		<tr style="border: 1px solid black;">
			<td width="5%">
			<div align="center" class="style1">序号</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">元件序列号</div>
			</td>
			<td width="5%">
			<div align="center" class="style1">序号</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">元件序列号</div>
			</td>
			<td width="5%">
			<div align="center" class="style1">序号</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">元件序列号</div>
			</td>
			<td width="5%">
			<div align="center" class="style1">序号</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">元件序列号</div>
			</td>
		</tr>

		<%
		for (int i = 0; i < list2.length; i++) {
		%>
		<%
		if (i % 4 == 0) {
		%>
		<tr style="border: 1px solid black;">
			<%
			}
			%>
			<td width="5%">
			<div align="center" class="style1"><%=i + 1%></div>
			</td>
			<td width="20%">
			<div align="center" class="style1"><%=list2[i].getString("batchNo")%></div>
			</td>

			<%
			if (i == list2.length - 1) {
			%>
			<%
			for (int j = 0; j < 3 - (i % 4); j++) {
			%>
			<td width="5%">&nbsp;</td>
			<td width="20%">&nbsp;</td>
			<%
			}
			%>
			<%
			}
			%>
			<%
			if (i % 4 == 3 || i == list2.length - 1) {
			%>
		</tr>
		<%
		}
		%>
		<%
		}
		%>
		<%
		}
		%>
	</table>

</l:notEmpty>
<p>&nbsp;</p>
<p>&nbsp;</p>
</div>

</body>
</html>
