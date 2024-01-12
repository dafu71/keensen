<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>

<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<html>
<%
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	DataObject[] list2 = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"list");
	//判断导入明细格式
	//分为1、只有元件数据	2、包含测试数据
	int flag = 1;//只有元件数据
	for(int i=0;i<list2.length;i++){ 

		if(null !=list2[i].getString("water") || null !=list2[i].getString("desalination")){
			flag = 2;
			break;
		}
	}	
%>

<html>
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
    
<script type="text/javascript">
	(function(){
		window.print();
	})();
</script> 

</head>
<body>
<div align="center">

  <table width="780" border="0">
    <tr>
      <td rowspan="4" width="50%"><img src="produce/quality/deliveryrecord/img/image001.jpg" width="161" height="56"></td>
      <td width="50%"><div align="left" class="style0">地址：湖南省长沙市高新开发区麓谷麓天路6号</div></td>
    </tr>
    <tr>
      <td><div align="left" class="style0">网址：www.keensen.com</div></td>
    </tr>
    <tr>
      <td><div align="left" class="style0">电话：+86-731-89972869</div></td>
    </tr>
    <tr>
      <td><div align="left" class="style0">传真：+86-731-89972600</div></td>
    </tr>
  </table>
  <table width="780" border="0" >
<tr>
    <td width="100%" height="47"> <div align="center" class="style3"><strong>Product Test Report</strong></div> </td>
  </tr>
</table>
<table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>Product Information</strong></div> </td>
	<td width="50%"> <div align="right" class="style2"> Report No：<b:write property="data/code" /></div> </td>
  </tr>
</table>
<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
  <tr style="border: 1px solid black;">
    <td width="25%" height="38"> <div align="center" class="style1"><strong>Item</strong></div></td>
    <td width="25%" height="38"> <div align="center" class="style1"><b:write property="data/productName" /></div></td>
    <td width="25%" height="38"> <div align="center" class="style1"><strong>Model</strong></div></td>
    <td width="25%" height="38"> <div align="center" class="style1"><b:write property="data/labelingModel" /></div></td>
  </tr>
  <tr style="border: 1px solid black;">
    <td height="38" rowspan="2"> <div align="center" class="style1"><strong>Batch No</strong></div> </td>
    <td height="38" rowspan="2"> <div align="center" class="style1"><b:write property="data/batchNo" /></div> </td>
    <td height="38"><div align="center" class="style1"><strong>Date of inspection</strong></div></td>
    <td height="38"><div align="center" class="style1">
    <div align="center" class="style1"><b:write property="data/checkDt" formatPattern="yyyy.MM.dd"/></div> </td>
  </tr>
  <tr style="border: 1px solid black;">
    <td height="38"><div align="center" class="style1"><strong>Order Quantity</strong></div></td>
    <td height="38"> <div align="center" class="style1"><b:write property="data/orderAmount" /></div> </td>
  </tr>
  <tr style="border: 1px solid black;">
    <td height="38"><div align="center" class="style1"><strong>Internal Order No</strong></div></td>
    <td height="38"> <div align="center" class="style1"><b:write property="data/orderNo" /></div> </td>
    <td height="38"><div align="center" class="style1"><strong>Spot-check Quality</strong></div></td>
    <td height="38"><div align="center" class="style1"><b:write property="data/checkAmount" /> </div></td>
  </tr>
</table>
<table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>Test condition</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
</table>
<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
  <tr style="border: 1px solid black;">
    <td height="27" colspan="2"> <div align="center" class="style1">Test solution</div> </td>
    <td width="15%" height="27"><div align="center" class="style1"> Feed water Temperature（℃）</div> </td>
    <td width="15%" height="27"> <div align="center" class="style1">pH</div> </td>
    <td width="20%" height="27"> <div align="center" class="style1">Test pressure psi(Mpa）</div> </td>
    <td width="15%" height="27"> <div align="center" class="style1">Recovery rate（%）</div> </td>
  </tr>
  <l:equal targetValue="NF Membrane" property="data/productName" compareType="string">
  <tr style="border: 1px solid black;">
    <td width="5%" height="33"><div align="center" class="style1">NaCl</div> </td>
    <td width="20%" height="33"><div align="center" class="style1"><b:write property="data/solution" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/temperature" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/ph" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/press" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/recovery" /></div></td>
  </tr>
  
  <tr style="border: 1px solid black;">
    <td height="33"><div align="center" class="style1">MgSO<sub>4</sub></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/solution2" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/temperature2" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/ph2" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/press2" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/recovery2" /></div></td>
  </tr>
  </l:equal>
   <l:notEqual targetValue="NF Membrane" property="data/productName" compareType="string">
  <tr style="border: 1px solid black;">
    <td height="33" colspan="2"><div align="center" class="style1"><b:write property="data/solution" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/temperature" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/ph" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/press" /></div></td>
    <td height="33"><div align="center" class="style1"><b:write property="data/recovery" /></div></td>
  </tr> 
  </l:notEqual>
</table>
<table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>Inspection Result</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
</table>
<table width="780" border="1" style="border-collapse: collapse; ">
  <tr  style="border: 1px solid black;">
    <td width="47" height="27"><div align="center" class="style1">No.</div></td>
    <td width="51" height="27"><div align="center" class="style1">Items</div></td>
    <td height="27" colspan="2"><div align="center" class="style1">Standard</div></td>
    <td width="176" height="27"><div align="center" class="style1">Inspection Result</div></td>
    <td width="125" height="27"><div align="center" class="style1">Test Method</div></td>
    <td width="110" height="27"><div align="center" class="style1">Result</div></td>
  </tr>
  <tr  style="border: 1px solid black;">
    <td height="78"><div align="center" class="style1">1</div></td>
    <td height="78"><div align="center" class="style1">Appearance</div></td>
    <td height="78" colspan="2"><div align="center" class="style1">The surface is bright and clean、without obvious flaw, such as  thorn ,damage ,contamination ,scratch ,crack ,breakage ect.</div></td>
    <td height="78"><div align="center" class="style1">The surface is bright and clean、without obvious flaw, such as  thorn ,damage ,contamination ,scratch ,crack ,breakage ect.</div></td>
    <td height="78"><div align="center" class="style1">Visual Inspection Qualified</div></td>
    <td height="78"><div align="center" class="style1"><b:write property="data/appearanceResult" /></div></td>
  </tr>
  <l:equal targetValue="NF Membrane" property="data/productName" compareType="string">
  <tr  style="border: 1px solid black;">
    <td height="38" rowspan="2"><div align="center" class="style1">2</div></td>
    <td height="38" rowspan="2"><div align="center" class="style1">Average Permeate Flow</div></td>
    <td width="50" height="38"><div align="center" class="style1">NaCl</div></td>
    <td width="175" height="38"> <div align="center" class="style1"><b:write property="data/water" /> </div></td>
    <td height="38"> <div align="center" class="style1"><b:write property="data/waterCheck" /></div></td>
    <td height="38"><div align="center" class="style1">Product standard test</div></td>
    <td height="38"><div align="center" class="style1"><b:write property="data/waterResult" /></div></td>
  </tr>
  <tr  style="border: 1px solid black;">
    <td height="38"><div align="center" class="style1">MgSO<sub>4</sub></div></td>
    <td height="38"><div align="center" class="style1"> <b:write property="data/water2" /> </div></td>
    <td height="38"><div align="center" class="style1"> <b:write property="data/waterCheck2" /> </div></td>
    <td height="38"><div align="center" class="style1">Product standard test</div></td>
    <td height="38"><div align="center" class="style1"><b:write property="data/waterResult2" /></div></td>
  </tr>
  <tr  style="border: 1px solid black;">
    <td height="38" rowspan="2"><div align="center" class="style1">3</div></td>
    <td height="38" rowspan="2"><div align="center" class="style1">Average Salt Rejection</div></td>
    <td height="38"><div align="center" class="style1">NaCl</div></td>
    <td height="38"><div align="center" class="style1"> <b:write property="data/desalination" /> </div></td>
    <td height="38"><div align="center" class="style1"> <b:write property="data/desalinationCheck" /> </div></td>
    <td height="38"><div align="center" class="style1">Product standard test</div></td>
    <td height="38"><div align="center" class="style1"><b:write property="data/desalinationResult" /></div></td>
  </tr>
  <tr  style="border: 1px solid black;">
    <td height="38"><div align="center" class="style1">MgSO<sub>4</sub></div></td>
    <td height="38"><div align="center" class="style1"> <b:write property="data/desalination2" /> </div></td>
    <td height="38"><div align="center" class="style1"> <b:write property="data/desalinationCheck2" /> </div></td>
    <td height="38"><div align="center" class="style1">Product standard test</div></td>
    <td height="38"><div align="center" class="style1"><b:write property="data/desalinationResult2" /></div></td>
  </tr>
  </l:equal>
  <l:notEqual targetValue="NF Membrane" property="data/productName" compareType="string">
   <tr  style="border: 1px solid black;">
    <td height="38"><div align="center" class="style1">2</div></td>
    <td height="38"><div align="center" class="style1">Average Permeate Flow</div></td>
    <td colspan="2" height="38"> <div align="center" class="style1"><b:write property="data/water" /> </div></td>
    <td height="38"> <div align="center" class="style1"><b:write property="data/waterCheck" /></div></td>
    <td height="38"><div align="center" class="style1">Product standard test</div></td>
    <td height="38"><div align="center" class="style1"><b:write property="data/waterResult" /></div></td>
  </tr>
  <tr  style="border: 1px solid black;">
    <td height="38" ><div align="center" class="style1">3</div></td>
    <td height="38" ><div align="center" class="style1">Average Salt Rejection</div></td>
    <td height="38" colspan="2"><div align="center" class="style1"> <b:write property="data/desalination" /> </div></td>
    <td height="38"><div align="center" class="style1"> <b:write property="data/desalinationCheck" /> </div></td>
    <td height="38"><div align="center" class="style1">Product standard test</div></td>
    <td height="38"><div align="center" class="style1"><b:write property="data/desalinationResult" /></div></td>
  </tr>
  
  </l:notEqual>
</table>

<l:notEmpty property="data/result">

<table width="780" border="0" style="border: 1px solid black;">
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>Conclusion：</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
  <tr>
    <td width="50%" height="192"> <div align="center" class="style4"><strong><b:write property="data/result" /></strong></div> </td>
	<td width="50%" height="192"><div align="center"><img src="produce/quality/deliveryrecord/img/image003.png" width="189" height="190"></div> </td>
  </tr>
</table>
<table width="780" border="0" >
<tr>
    <td width="33%"> <div align="left" class="style1">Inspector：<b:write property="data/inspector" /></div> </td>
	<td width="33%"> <div align="left" class="style1"> Auditor：<b:write property="data/reviewer" /></div> </td>
	<td width="33%"> <div align="left" class="style1">Report Date：<b:write property="data/reportDt" formatPattern="yyyy/MM/dd"/></div> </td>
  </tr>
</table>

</l:notEmpty>

<l:notEmpty property="list">
<p>&nbsp;</p>
<table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>Test Data of Membrane</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
</table>

<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; " >
<% if(flag==2){ %>
<tr  style="border: 1px solid black;">
    <td  width="6%"> <div align="center" class="style1">No.</div> </td>
	<td  width="20%"> <div align="center" class="style1">Serial No.</div> </td>
	<td  width="12%"> <div align="center" class="style1">Permeate Flow，gpd</div> </td>
	<td  width="12%"> <div align="center" class="style1">Salt Rejection，%</div> </td>
	<td  width="6%"> <div align="center" class="style1">No.</div> </td>
	<td  width="20%"> <div align="center" class="style1">Serial No.</div> </td>
	<td  width="12%"> <div align="center" class="style1">Permeate Flow，gpd</div> </td>
	<td  width="12%"> <div align="center" class="style1">Salt Rejection，%</div> </td>
  </tr>

<%  for(int i=0;i<list2.length;i++){ %>
<% if(i%2==0){ %>
<tr  style="border: 1px solid black;">
<% } %>

	<td  width="6%"> <div align="center" class="style1"><%=i+1 %></div> </td>
	<td  width="20%"> <div align="center" class="style1"><%=list2[i].getString("batchNo") %></div> </td>
	<td  width="12%"> <div align="center" class="style1"><%=list2[i].getString("water") %></div> </td>
	<td  width="12%"> <div align="center" class="style1"><%=list2[i].getString("desalination") %></div> </td>
	
<%if(i==list2.length-1 && i%2==0){ %>
	<td  width="6%"> &nbsp; </td>
	<td  width="20%"> &nbsp; </td>
	<td  width="12%"> &nbsp; </td>
	<td  width="12%"> &nbsp; </td>
<% } %>
	
<% if(i%2==1 || i==list2.length-1){ %>
  </tr>
<% } %>
<% } %> 
<% } %>

<% if(flag==1){ %>
<tr  style="border: 1px solid black;">
    <td  width="5%"> <div align="center" class="style1">No.</div> </td>
	<td  width="20%"> <div align="center" class="style1">Serial No.</div> </td>
	<td  width="5%"> <div align="center" class="style1">No.</div> </td>
	<td  width="20%"> <div align="center" class="style1">Serial No.</div> </td>
	<td  width="5%"> <div align="center" class="style1">No.</div> </td>
	<td  width="20%"> <div align="center" class="style1">Serial No.</div> </td>
	<td  width="5%"> <div align="center" class="style1">No.</div> </td>
	<td  width="20%"> <div align="center" class="style1">Serial No.</div> </td>
  </tr>

<%  for(int i=0;i<list2.length;i++){ %>
<% if(i%4==0){ %>
<tr  style="border: 1px solid black;">
<% } %>
<td  width="5%"> <div align="center" class="style1"><%=i+1 %></div> </td>
<td  width="20%"> <div align="center" class="style1"><%=list2[i].getString("batchNo") %></div> </td>

<% if(i==list2.length-1){ %>
<% 	for(int j =0;j<3-(i%4);j++){ %>
	<td  width="5%"> &nbsp; </td>
	<td  width="20%"> &nbsp; </td>
<% } %>
<% } %>
<% if(i%4==3 || i==list2.length-1){ %>
  </tr>
<% } %>
<% } %>
<% } %> 
</table>

</l:notEmpty>

<p>&nbsp;</p>
<p>&nbsp;</p>
</div>
</body>
</html>