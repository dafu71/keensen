<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<%@page import="java.util.Random;"%>
<html>
<%
	Random random = new Random();
	int randomNumber = 50 + random.nextInt(101); // 生成0到100的随机整数
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "list");
	String itype = "common";
	String opt = (String) XpathUtil.getObjectByXpath(rootObj, "opt");
	if (null != list && list.length > 0) {
		itype = list[0].getString("itype");
	}
	DataObject data = (DataObject) XpathUtil.getObjectByXpath(rootObj,
			"data");
	String press = null != data.get("press") ? data.get("press")
			.toString() : "";
	press = press.replace("(", "psi(").replace(")", "MPa)");
	String press2 = null != data.get("press2") ? data.get("press2")
			.toString() : "";
	press2 = press2.replace("(", "psi(").replace(")", "MPa)");
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>产品合格证</title>
<style type="text/css">
<!--
.style0 {font-family: "仿宋";font-size:9pt;}
.style1 {font-family: "仿宋";font-size:11pt;}
.style2 {font-family: "仿宋";font-size:12pt;}
.style3 {font-family: "仿宋";font-size:20pt;}
.style4 {font-family: "仿宋";font-size:24pt;}
.stamp-container {
  position: relative;
  display: inline-block;
}
 
.stamp {
  position: absolute;
  top: 60;
  left: <%=randomNumber %>;
}
 
-->
    </style>

<script type="text/javascript">
<% if("print".equals(opt)){ %>
	(function(){
		window.print();
	})();
<% } %>
</script>

</head>
<body>
<div align="center" id="pdfContainer">

<table width="780" border="0">
	<tr>
		<td rowspan="4" width="50%"><img
			src="produce/quality/deliveryrecord/img/image001.jpg" width="161"
			height="56"></td>
		<td width="50%">&nbsp;</td>
	</tr>

</table>
<hr>
<table width="780" border="0">
	<tr>
		<td width="100%" height="47">
		<div align="center" class="style3"><strong>产品合格证</strong></div>
		</td>
	</tr>
</table>
<div class="stamp-container">
<table width="780" border="0">
	<tr>
		<td width="100%">
		<div align="left" class="style2">生产厂家：湖南沁森高科新材料有限公司</div>
		</td>

	</tr>
	<tr>
		<td width="100%">
		<div align="left" class="style2">产品规格：<b:write
			property="data/labelingModel" /></div>
		</td>
	</tr>
	<tr>
		<td width="100%">
		<div align="left" class="style2">产品数量：<b:write
			property="data/orderAmount" /></div>
		</td>
	</tr>
	<l:notEqual targetValue="纳滤膜元件" property="data/productName">
		<tr>
			<td width="100%">
			<div align="left" class="style2">测试条件：压力<%=press%>,进水盐浓度<b:write
				property="data/solution" />,进水温度<b:write
				property="data/temperature" />℃,回收率<b:write
				property="data/recovery" />%，PH<b:write property="data/ph" /></div>
			</td>
		</tr>
	</l:notEqual>
	<l:equal targetValue="纳滤膜元件" property="data/productName">
		<tr>
			<td width="100%">
			<div align="left" class="style2">测试条件：压力<%=press%>,进水盐浓度<b:write
				property="data/solution" />,进水温度<b:write
				property="data/temperature" />℃,回收率<b:write
				property="data/recovery" />%，PH<b:write property="data/ph" />
			</td>
		</tr>
		<tr>
			<td width="100%">
			<div align="left" class="style2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;压力<%=press2%>,进水盐浓度<b:write
				property="data/solution2" />,进水温度<b:write
				property="data/temperature2" />℃,回收率<b:write
				property="data/recovery2" />%，PH<b:write property="data/ph2" /></div>
			</td>
		</tr>
	</l:equal>
	<tr>
		<td width="100%">
		<div align="left" class="style2">出厂测试数据：</div>
		</td>
	</tr>
	<l:notEqual targetValue="纳滤膜元件" property="data/productName">
		<tr>
			<td width="100%">
			<div align="left" class="style2">氯化钠：平均产水量<b:write
				property="data/waterCheck" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平均脱盐率<b:write
				property="data/desalinationCheck" /></div>
			</td>
		</tr>
	</l:notEqual>
	<l:equal targetValue="纳滤膜元件" property="data/productName">
		<tr>
			<td width="100%">
			<div align="left" class="style2">氯化钠：平均产水量<b:write
				property="data/waterCheck" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平均脱盐率<b:write
				property="data/desalinationCheck" /></div>
			</td>
		</tr>
		<tr>
			<td width="100%">
			<div align="left" class="style2">硫酸镁：平均产水量<b:write
				property="data/waterCheck2" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平均脱盐率<b:write
				property="data/desalinationCheck2" /></div>
			</td>
		</tr>
	</l:equal>


	<tr>
		<td width="100%">
		<div align="left" class="style2">检验结果：<b:write
			property="data/result" /></div>
		</td>
	</tr>
</table>
<% if("view".equals(opt)){ %>
<img src="produce/quality/deliveryrecord/img/image003.png" class="stamp"
	width="120" height="120" />
<% } %>	
</div>
<p>
<p>
<p>
<p><l:notEmpty property="list">
	<table width="780" border="0">
		<tr>
			<td width="100%">
			<div align="left" class="style2">产品明细：</div>
			</td>
		</tr>
	</table>

	<%
	if (itype.equals("common")) {
	%>
	<table width="780" border="0">
		<%
		for (int i = 0; i < list.length; i++) {
		%>
		<%
		if (i % 6 == 0) {
		%>
		<tr style="border: 0px;">
			<%
			}
			%>

			<td width="17%">
			<div align="center" class="style1"><%=list[i].getString("batchNo")%></div>
			</td>



			<%
			if (i % 6 == 5 || i == list.length) {
			%>
		</tr>
		<%
		}
		%>
		<%
		}
		%>

	</table>
	<%
	}
	%>
	<%
	if (itype.equals("zh")) {
	%>
	<table width="780" border="0">
		<tr style="border: 0px;">
			<td width="15%">
			<div align="center" class="style1">序列</div>
			</td>
			<td width="17%">
			<div align="center" class="style1">元件序列号</div>
			</td>
			<td width="17%">
			<div align="center" class="style1">干/湿膜</div>
			</td>
			<td width="17%">
			<div align="center" class="style1">气检值 Kpa</div>
			</td>
			<td width="17%">
			<div align="center" class="style1">气检标准 Kpa</div>
			</td>
			<td width="17%">
			<div align="center" class="style1">膜片卷号</div>
			</td>

		</tr>
		<%
		for (int i = 0; i < list.length; i++) {
		%>
		<tr style="border: 0px;">
			<td>
			<div align="center" class="style1"><%=i + 1%></div>
			</td>
			<td>
			<div align="center" class="style1"><%=list[i].getString("batchNo")%></div>
			</td>
			<td>
			<div align="center" class="style1"><%=list[i].getString("ext0")%></div>
			</td>
			<td>
			<div align="center" class="style1"><%=list[i].getString("ext1")%></div>
			</td>
			<td>
			<div align="center" class="style1"><%=list[i].getString("ext2")%></div>
			</td>
			<td>
			<div align="center" class="style1"><%=list[i].getString("ext3")%></div>
			</td>


		</tr>

		<%
		}
		%>
	</table>
	<%
	}
	%>
	<%
	if (itype.equals("toyobo")) {
	%>
	<table width="780" border="0">
		<tr style="border: 0px;">
			<td width="20%">
			<div align="center" class="style1">序列</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">元件序列号</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">干/湿膜</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">气检值 Kpa</div>
			</td>
			<td width="20%">
			<div align="center" class="style1">气检标准 Kpa</div>
			</td>


		</tr>
		<%
		for (int i = 0; i < list.length; i++) {
		%>
		<tr style="border: 0px;">
			<td width="20%">
			<div align="center" class="style1"><%=i + 1%></div>
			</td>
			<td width="20%">
			<div align="center" class="style1"><%=list[i].getString("batchNo")%></div>
			</td>
			<td width="20%">
			<div align="center" class="style1"><%=list[i].getString("ext0")%></div>
			</td>
			<td width="20%">
			<div align="center" class="style1"><%=list[i].getString("ext1")%></div>
			</td>
			<td width="20%">
			<div align="center" class="style1"><%=list[i].getString("ext2")%></div>
			</td>



		</tr>

		<%
		}
		%>
	</table>
	<%
	}
	%>
</l:notEmpty>
</div>

</body>
</html>
