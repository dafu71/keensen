<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<html>
<%
			Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	
	DataObject data = (DataObject) XpathUtil.getObjectByXpath(rootObj,
			"data");
	String opt = (String) XpathUtil.getObjectByXpath(rootObj, "opt");
	
	
	DataObject[] waterList = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "waterList");
	DataObject[] airList = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "airList");
	DataObject[] prodList = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "prodList");
	
	String labelingModel = data.getString("labelingModel");
	int rowspan = 2;
	if (labelingModel.equals("NF-60") || labelingModel.equals("NF-80")) {
		rowspan = 1;
	}
	
		
	String solutionWidth = "25%";
	String solutionWidth2 = "5%";
	String solutionWidth3 = "20%";
	String temperatureWidth = "15%";
	String phWidth = "15%";
	String pressWidth = "25%";
	String recoveryWidth = "20%";
	String pressWorkWidth = "0%";
	String rangePhWidth = "0%";
	String rangeRunPhWidth = "0%";
	String areaWidth = "0%";
	
	
	//如果有最高工作压力，则重新分配宽度
	if(null != data.get("pressWork")){
		 solutionWidth = "20%";
		 solutionWidth2 = "5%";
		 solutionWidth3 = "15%";
		 temperatureWidth = "10%";
		 phWidth = "10%";
		 pressWidth = "10%";
		 recoveryWidth = "10%";
		 pressWorkWidth = "10%";
		 rangePhWidth = "10%";
		 rangeRunPhWidth = "10%";
		 areaWidth = "10%";
	}

	
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title><b:write
			property="data/productName" />检测报告</title>
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
<%if("print".equals(opt)){ %>
<div align='center' id="deliveryreportprint">
<button onclick="printPage()">打印</button>
</div>
<%} %>
<div align="center" id="pdfContainer">

<table width="780" border="0">
	<tr>
		<td rowspan="4" width="50%"><img
			src="produce/quality/deliveryrecord/img/image001.jpg" width="161"
			height="56"></td>
		<td width="50%">
		<div align="left" class="style0">Add:No.370,Minghu RD,Hunan,China</div>
		</td>
	</tr>
	<tr>
		<td>
		<div align="left" class="style0">Web：www.keensen.com</div>
		</td>
	</tr>
	<tr>
		<td>
		<div align="left" class="style0">Tel.：+86-731-89972869</div>
		</td>
	</tr>
	<tr>
		<td>
		<div align="left" class="style0">Fax.：+86-731-89972600</div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="100%" height="47">
		<div align="center" class="style3"><strong>Product Test Report</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="70%">
		<div align="left" class="style2"><strong>1.Product Information</strong>
		&nbsp;&nbsp;<l:notEmpty property ="data/materCode" >‌Material Number:<b:write property="data/materCode" /></l:notEmpty>
		</div>
		</td>
		<td width="30%">
		<div align="right" class="style2">Report No：<b:write
			property="data/code" /></div>
		</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="20%" height="38">
		<div align="center" class="style1"><strong>
		
		Product Name<l:equal property="data/client" targetValue="BYD">/Material describe</l:equal> 
		
		</strong></div>
		</td>
		
		<td width="20%" height="38">
		<div align="center" class="style1"><strong>Model</strong></div>
		</td>
		<td width="20%" height="38">
		<div align="center" class="style1"><strong>Order No</strong></div>
		</td>
		<td width="20%" height="38">
		<div align="center" class="style1"><strong>Order Quantity</strong></div>
		</td>
		<td width="20%" height="38">
		<div align="center" class="style1"><strong>Date of inspection</strong></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
	
	<td height="38">
		<div align="center" class="style1"><b:write
			property="data/productName" /></div>
		</td>
		<td  height="38">
		<div align="center" class="style1"><b:write
			property="data/labelingModel" /></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><b:write
			property="data/orderNo" /></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><b:write
			property="data/orderAmount" /></div>
		</td>
		
		<td height="38">
		<div align="center" class="style1"><b:write
			property="data/checkDt" formatPattern="yyyy/MM/dd" /></div>
		</td>
	</tr>
	
</table>
<table width="780" border="0">
	<tr>
		<td width="50%">
		<div align="left" class="style2"><strong>2.Standard Test Conditions</strong></div>
		</td>
		<td width="50%">&nbsp;</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="<%=solutionWidth %>" height="27" colspan="2">
		<div align="center" class="style1">Test Solution</div>
		</td>
		<td width="<%=temperatureWidth %>" height="27">
		<div align="center" class="style1">Temperature(℃)</div>
		</td>
		<td width="<%=phWidth %>" height="27">
		<div align="center" class="style1">pH</div>
		</td>
		<td width="<%=pressWidth %>" height="27">
		<div align="center" class="style1">Test Pressure psi(MPa)</div>
		</td>
		<td width="<%=recoveryWidth %>" height="27">
		<div align="center" class="style1">Recovery(%)</div>
		</td>
	<%  if(null != data.get("pressWork")){%>
		<td width="<%=pressWorkWidth %>" height="27">
		<div align="center" class="style1">Maximum working pressure psi(MPa)</div>
		</td>
		<td width="<%=rangePhWidth %>" height="27">
		<div align="center" class="style1">PH adaptation range</div>
		</td>
		<td width="<%=rangeRunPhWidth %>" height="27">
		<div align="center" class="style1">PH range of inlet water during continuous operation</div>
		</td>
		<td width="<%=areaWidth %>" height="27">
		<div align="center" class="style1">Effective membrane area ft2(m²)</div>
		</td>
		
	<% } %>
	</tr>
	<l:equal targetValue="纳滤膜元件" property="data/productName"
		compareType="string">
		<tr style="border: 1px solid black;">
			<td width="<%=solutionWidth2 %>" height="33">
			<div align="center" class="style1">NaCl</div>
			</td>
			<td width="<%=solutionWidth3 %>" height="33">
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
			
	<%  if(null != data.get("pressWork")){%>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/pressWork" /></div>
		</td>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/rangePh" /></div>
		</td>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/rangeRunPh" /></div>
		</td>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/area" /></div>
		</td>
		
		
	<% } %>
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
	<%  if(null != data.getString("pressWork")){%>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/pressWork2" /></div>
		</td>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/rangePh2" /></div>
		</td>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/rangeRunPh2" /></div>
		</td>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/area2" /></div>
		</td>
		
		
	<% } %>
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
	<%  if(null != data.get("pressWork")){%>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/pressWork" /></div>
		</td>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/rangePh" /></div>
		</td>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/rangeRunPh" /></div>
		</td>
		<td height="33">
			<div align="center" class="style1"><b:write
				property="data/area" /></div>
		</td>
		
		
	<% } %>
		</tr>
	</l:notEqual>
</table>
<table width="780" border="0">
	<tr>
		<td width="50%">
		<div align="left" class="style2"><strong>3.Inspect Conclusion</strong></div>
		</td>
		<td width="50%">&nbsp;</td>
	</tr>
</table>
<table width="780" border="1" style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		
		<td width="90" height="60">
		<div align="center" class="style1"><strong>Item</strong></div>
		</td>
		<td height="60" colspan="2">
		<div align="center" class="style1"><strong>Standard</strong></div>
		</td>
		<td width="87" height="60">
		<div align="center" class="style1"><strong>Sampling Quantity,set</strong></div>
		</td>
		<td width="105" height="60">
		<div align="center" class="style1"><strong>Test Mechod</strong></div>
		</td>
		<td width="156" height="60">
		<div align="center" class="style1"><strong>Inspection Result</strong></div>
		</td>
		
		<td width="110" height="60">
		<div align="center" class="style1"><strong>Judgment</strong></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		
		<td height="78">
		<div align="center" class="style1">Apperance</div>
		</td>
		<td height="78" colspan=2>
		<div align="center" class="style1">The surface of the Membrane is smooth and flat, with no defects such as cracks, depressions, or deformations</div>
		</td>
		<td height="78">
		<div align="center" class="style1"><b:write
				property="data/appearanceNum" /></div>
		</td>
		<td height="78">
		<div align="center" class="style1">Visual</div>
		</td>
		<td height="78">
		<div align="center" class="style1">The surface of the Membrane is smooth and flat, with no defects such as cracks, depressions, or deformations</div>
		</td>
		<td height="78">
		<div align="center" class="style1">up to standard</div>
		</td>
	</tr>
	<l:equal targetValue="纳滤膜元件" property="data/productName"
		compareType="string">
		<tr style="border: 1px solid black;">
			
			<td height="38" rowspan="<%=rowspan %>">
			<div align="center" class="style1">Permeate Flow Rate,GPD</div>
			</td>
			<td width="50" height="38">
			<div align="center" class="style1">NaCl</div>
			</td>
			<td width="135" height="38">
			<div align="center" class="style1"><b:write
				property="data/water" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterCheckNum" /></div>
			</td>
			<td height="76" rowspan=<%=rowspan %>>
			<div align="center" class="style1">Standard Test Conditions</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterCheck" /></div>
			</td>			
			<td height="38">
			<div align="center" class="style1">up to standard</div>
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
				property="data/waterCheck2Num" /></div>
			</td>
			
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterCheck2" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1">up to standard</div>
			</td>
		</tr>
		<%
		}
		%>
		<tr style="border: 1px solid black;">
			
			<td height="38" rowspan="<%=rowspan %>">
			<div align="center" class="style1">Min Salt Rejection,%</div>
			</td>
			<td width="50" height="38">
			<div align="center" class="style1">NaCl</div>
			</td>
			<td width="135" height="38">
			<div align="center" class="style1"><b:write
				property="data/desalination" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationCheckNum" /></div>
			</td>
			<td height="76" rowspan=<%=rowspan %>>
			<div align="center" class="style1">Standard Test Conditions</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationCheck" /></div>
			</td>			
			<td height="38">
			<div align="center" class="style1">up to standard</div>
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
				property="data/desalination2" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationCheck2Num" /></div>
			</td>
			
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationCheck2" /></div>
			</td>	
			<td height="38">
			<div align="center" class="style1">up to standard</div>
			</td>
		</tr>
		<%
		}
		%>
		
	<%  if(null != data.get("airCheckNum")){%>	
	<tr style="border: 1px solid black;">
		
		<td height="78">
		<div align="center" class="style1">Air Leakage Test,Kpa</div>
		</td>
		<td height="78" colspan=2>
		<div align="center" class="style1"><b:write
				property="data/airStdStr" /></div>
		</td>
		<td height="78">
		<div align="center" class="style1"><b:write
				property="data/airCheckNum" /></div>
		</td>
		<td height="78">
		<div align="center" class="style1">Pressure gage</div>
		</td>
				<td height="78">
		<div align="center" class="style1"><b:write
				property="data/airCheck" /></div>
		</td>
		<td height="78">
		<div align="center" class="style1">up to standard</div>
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
			<div align="center" class="style1">Permeate Flow Rate,GPD</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/water" /></div>
			</td>
			<td colspan="2" height="38">
			<div align="center" class="style1"><b:write
				property="data/waterCheckNum" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1">Standard Test Conditions</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/waterCheck" /></div>
			</td>
			
			<td height="38">
			<div align="center" class="style1">up to standard</div>
			</td>
		</tr>
		<tr style="border: 1px solid black;">
			<td height="38">
			<div align="center" class="style1">Min Salt Rejection,%</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalination" /></div>
			</td>
			<td height="38" colspan="2">
			<div align="center" class="style1"><b:write
				property="data/desalinationCheckNum" /></div>
			</td>
			<td height="38">
			<div align="center" class="style1">Standard Test Conditions</div>
			</td>
			<td height="38">
			<div align="center" class="style1"><b:write
				property="data/desalinationCheck" /></div>
			</td>
			
			<td height="38">
			<div align="center" class="style1">up to standard</div>
			</td>
		</tr>
<%  if(null != data.get("airCheckNum")){%>	
	<tr style="border: 1px solid black;">
		
		<td height="78">
		<div align="center" class="style1">Air Leakage Test,Kpa</div>
		</td>
		<td height="78" colspan=2>
		<div align="center" class="style1"><b:write
				property="data/airStdStr" /></div>
		</td>
		<td height="78">
		<div align="center" class="style1"><b:write
				property="data/airCheckNum" /></div>
		</td>
		<td height="78">
		<div align="center" class="style1">Pressure gage</div>
		</td>
				<td height="78">
		<div align="center" class="style1"><b:write
				property="data/airCheck" /></div>
		</td>
		<td height="78">
		<div align="center" class="style1">up to standard</div>
		</td>
	</tr>
	<%
		}
		%>
	</l:notEqual>
</table>

<l:notEmpty property="data/result">

	<table width="780" border="0" style="border: 1px solid black;">
		<tr>
			<td width="27%" colspan=2>
			<div align="left" valign="top" class="style2">Comprehensive Assessment:</div>
			</td>
			<td width="73%" rowspan=2>
			<div align="left" valign="top" class="style0">
			<p>Recommended storage condition:</p>
			<p>1.The membrane element shall be sealed and packaged in package box, which should be protected from direct sunlight. The storage environment shall be ≤45°C (dry) and 0-45°C (wet).</p>
			<p>2.Forbidden the rough handing for membrane elements, such as throwing. dropping from high place, etc.</p>
			<p>3.Avoid the membrane element remain in upright for a long period. </p>
			<p>4. It is recommended to use the wet membrane elements within 3 months.When it is over than 3month, the protection solution should be replaced.</p>
			<p>5. It is forbidden to add any of chemical agents has influence on membrane elements during storage and transportation process.
</p>
			</div>
			</td>
		</tr>
		<tr>
			<td width="13%">	
			<div align="center" class="style4"><strong>Qualified</strong></div>
			</td>
			<td width="14%"><% if(opt.equals("view")){ %>
			<div align="center"><img
				src="produce/quality/deliveryrecord/img/image003.png" width="150"
				height="140"></div>
			<% } %>	&nbsp;</td>
			
		</tr>
		
	</table>
	<table width="780" border="0">
		<tr>
			<td width="33%" height="56">
			<div align="left" class="style1">Inspector：<b:write
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
			<div align="left" class="style1">Report Date：<b:write
				property="data/reportDt" formatPattern="yyyy/MM/dd" /></div>
			</td>
		</tr>
	</table>

</l:notEmpty> 

<p>&nbsp;</p>

<% if(waterList.length>0 || airList.length>0 || prodList.length>0){   %>
<table width="780" border="0">
		<tr>
			<td width="50%">
			<div align="left" class="style2"><strong>Checklist</strong></div>
			</td>
			<td width="50%">&nbsp;</td>
		</tr>
</table>
<% } %>

<l:notEmpty property="waterList">

	<table width="780" border="0">
		<tr>
			<td width="50%">
			<div align="left" class="style2"><strong>Wet Test Data</strong></div>
			</td>
			<td width="50%">&nbsp;</td>
		</tr>
	</table>
	
	<table width="780" border="1" bordercolor="#000000"
		style="border-collapse: collapse; ">
	<tr  style="border: 1px solid black;">
			<td width="6%"  >
			<div align="center" class="style1"  >No.</div>
			</td>
			<td width="20%" style="">
			<div align="center" class="style1" >Serial No.</div>
			</td>
			<td width="12%">
			<div align="center" class="style1" >Permeate Flow Rate,GPD</div>
			</td>
			<td width="12%">
			<div align="center" class="style1" >Salt Rejection,%</div>
			</td>
			<td width="6%">
			<div align="center" class="style1" >No.</div>
			</td>
			<td width="20%">
			<div align="center" class="style1" >Serial No.</div>
			</td>
			<td width="12%">
			<div align="center" class="style1" >Permeate Flow Rate,GPD</div>
			</td>
			<td width="12%">
			<div align="center" class="style1" >Salt Rejection,%</div>
			</td>
		</tr>
	<%
		for (int i = 0; i < waterList.length; i++) {
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
			<div align="center" class="style1"><%=waterList[i].getString("batchNo")%></div>
			</td>
			<td width="12%">
			<div align="center" class="style1"><%=waterList[i].getString("water")%></div>
			</td>
			<td width="12%">
			<div align="center" class="style1"><%=waterList[i].getString("desalination")%></div>
			</td>

			<%
			if (i == waterList.length - 1 && i % 2 == 0) {
			%>
			<td width="6%">&nbsp;</td>
			<td width="20%">&nbsp;</td>
			<td width="12%">&nbsp;</td>
			<td width="12%">&nbsp;</td>
			<%
			}
			%>

			<%
			if (i % 2 == 1 || i == waterList.length - 1) {
			%>
		</tr>
		<%
		}
		%>
		<%
		}
		%>	
		
    </table>
</l:notEmpty>

<l:notEmpty property="airList">

	<table width="780" border="0">
		<tr>
			<td width="50%">
			<div align="left" class="style2"><strong>(2) Air Leakage Test Data</strong></div>
			</td>
			<td width="50%">&nbsp;</td>
		</tr>
	</table>
	
	<table width="780" border="1" bordercolor="#000000"
		style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
			<td width="6%">
			<div align="center" class="style1" >No.</div>
			</td>
			<td width="20%">
			<div align="center" class="style1" >Serial No.</div>
			</td>
			<td width="12%">
			<div align="center" class="style1" >Dry/Wet</div>
			</td>
			<td width="12%">
			<div align="center" class="style1" >Air Leakage Value,Kpa</div>
			</td>
			<td width="6%">
			<div align="center" class="style1" >No.</div>
			</td>
			<td width="20%">
			<div align="center" class="style1" >Serial No.</div>
			</td>
			<td width="12%">
			<div align="center" class="style1" >Dry/Wet</div>
			</td>
			<td width="12%">
			<div align="center" class="style1" >Air Leakage Value,Kpa</div>
			</td>
		</tr>
	<%
		for (int i = 0; i < airList.length; i++) {
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
			<div align="center" class="style1"><%=airList[i].getString("batchNo")%></div>
			</td>
			<td width="12%">
			<div align="center" class="style1"><%=airList[i].getString("dryWet").replace("干","dry").replace("湿","wet")%></div>
			</td>
			<td width="12%">
			<div align="center" class="style1"><%=airList[i].getString("checkResult")%></div>
			</td>

			<%
			if (i == airList.length - 1 && i % 2 == 0) {
			%>
			<td width="6%">&nbsp;</td>
			<td width="20%">&nbsp;</td>
			<td width="12%">&nbsp;</td>
			<td width="12%">&nbsp;</td>
			<%
			}
			%>

			<%
			if (i % 2 == 1 || i == airList.length - 1) {
			%>
		</tr>
		<%
		}
		%>
		<%
		}
		%>	
		
    </table>
</l:notEmpty> 

<l:notEmpty property="prodList">
	<table width="780" border="0">
		<tr>
			<td width="50%">
			<div align="left" class="style2"><strong>Serial No. List</strong></div>
			</td>
			<td width="50%">&nbsp;</td>
		</tr>
	</table>
	
	<table width="780" border="1" bordercolor="#000000"
		style="border-collapse: collapse; ">
		<tr style="border: 1px solid black;">
			<td width="5%">
			<div align="center" class="style1" >No.</div>
			</td>
			<td width="28%">
			<div align="center" class="style1" >Serial No.</div>
			</td>
			<td width="5%">
			<div align="center" class="style1" >No.</div>
			</td>
			<td width="28%">
			<div align="center" class="style1" >Serial No.</div>
			</td>
			<td width="5%">
			<div align="center" class="style1" >No.</div>
			</td>
			<td width="28%">
			<div align="center" class="style1" >Serial No.</div>
			</td>
			
		</tr>
		<%
		for (int i = 0; i < prodList.length; i++) {
		%>
		<%
		if (i % 3 == 0) {
		%>
		<tr style="border: 1px solid black;">
			<%
			}
			%>
			<td width="5%">
			<div align="center" class="style1"><%=i + 1%></div>
			</td>
			<td width="28%">
			<div align="center" class="style1"><%=prodList[i].getString("batchNo")%></div>
			</td>

			<%
			if (i == prodList.length - 1) {
			%>
			<%
			for (int j = 0; j < 2 - (i % 3); j++) {
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
			if (i % 3 == 2 || i == prodList.length - 1) {
			%>
		</tr>
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
<% if(opt.equals("print")){ %>
<div align='center' id="deliveryreportprint2">
<button onclick="printPage()">打印</button>
</div>
<% } %>
</body>
<script type="text/javascript">
 
	function printPage() {
	
		document.getElementById('deliveryreportprint').style.display = "none";
		document.getElementById('deliveryreportprint2').style.display = "none";
		window.print();
					
	};
</script>
</html>
