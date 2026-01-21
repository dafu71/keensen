<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%--<%@include file="/frame/ui/page/include.jsp"%>--%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<html>
<%
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
			
	
	DataObject[] details = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"details");
	
	DataObject[] counts = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"counts");
			
	DataObject[] counts2 = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"counts2");
			
	String currentTime = request.getAttribute("currentTime")
			.toString();
			
	int cnt = 0;
	float residue = 0;

	
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>底膜库存</title>
<h:css href="/css/style1/style-custom.css" />
<style type="text/css">
<!--
.style0 {font-family: "仿宋";font-size:9pt;}
.style1 {font-family: "仿宋";font-size:11pt;}
.style2 {font-family: "仿宋";font-size:14pt;font-weight: bold;border: 1px solid black; }
.style3 {font-family: "仿宋";font-size:20pt;}
.style4 {font-family: "仿宋";font-size:26pt;}
.style5 {color:red;font-family: "仿宋";font-size:26pt;}
.style42 {color:red;font-family: "仿宋";font-size:26pt;}

.style22 {font-family: "仿宋";font-size:14pt;font-weight: bold;border: 1px solid black; }
.style23 {font-family: "仿宋";font-size:14pt;font-weight: bold;border: 1px solid black;background-color: #FFE384; }
 
.my-row { height: 50px; }
-->
    </style>

</head>

<script type="text/javascript">
	(function(){
		setInterval(function(){ location.reload(true); }, 30000);
	})();
</script>

<body onload="initPage()">

<div align="center">

<table border="0" width="100%" height="100%">

<tr class="my-row">
<td width='25%' valign="middle" colspan=4>
&nbsp;
</td>
<td width='50%' valign="middle" colspan=9 align="center" style="border: 1px solid black;">
<span style="font-size: 24pt;font-weight: bold">冷库底膜存放明细</span>
</td>
<td width='25%' valign="middle" align="center" colspan=4 >
<span style="font-size: 24pt;font-weight: bold">更新时间</span>
</td>
</tr>

<tr class="my-row">
<td width='25%' valign="middle" colspan=4 >
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2" >
库位
</td>
<td width='8%' valign="middle" align="center" class="style2">
底膜批号
</td>
<td width='4.6%' valign="middle" align="center" class="style2">
米数
</td>
<td width='4%' valign="middle" align="center" class="style2">
库位
</td><td width='8%' valign="middle" align="center" class="style2">
底膜批号
</td>
<td width='4.6%' valign="middle" align="center" class="style2">
米数
</td>
<td width='4%' valign="middle" align="center" class="style2">
库位
</td>
<td width='8%' valign="middle" align="center" class="style2">
底膜批号
</td>
<td width='4.6%' valign="middle" align="center" class="style2">
米数
</td>
<td width='25%' valign="middle" align="center" colspan=4>
<span style="font-size: 24pt;font-weight: bold"><%=currentTime %></span>
</td>
</tr>

<tr class="my-row">
<td width='25%' valign="middle" colspan=4>
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
8-2
</td>
<td width='8%' valign="middle" align="center" class="style2" id="8-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="8-2a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23" >
7-2
</td>
<td width='8%' valign="middle" align="center" class="style23" id="7-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="7-2a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
6-2
</td><td width='8%' valign="middle" align="center" class="style2" id="6-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="6-2a">
&nbsp;
</td>
<td width='25%' valign="middle" align="center" align="center" colspan=4>
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='25%' valign="middle" colspan=4>
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
8-1
</td>
<td width='8%' valign="middle" align="center" class="style2" id="8-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="8-1a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
7-1
</td><td width='8%' valign="middle" align="center" class="style23" id="7-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="7-1a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
6-1
</td><td width='8%' valign="middle" align="center" class="style2" id="6-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="6-1a">
&nbsp;
</td>
<td width='25%' valign="middle" align="center" align="center" colspan=4>
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style2">
底膜批号
</td>
<td width='4.6%' valign="middle" align="center" class="style2">
米数
</td>
<td width='4%' valign="middle" align="center" class="style2">
库位
</td>
<td width='6.4%' valign="middle" align="center" class="style2">
膜卷架
</td>
<td valign="middle" align="center" class="style2" colspan=3>
8
</td>
<td valign="middle" align="center" class="style23" colspan=3>
7
</td>
<td valign="middle" align="center" class="style2" colspan=3>
6
</td>
<td width='6.4%' valign="middle" align="center" class="style2">
膜卷架
</td>
<td width='4%' valign="middle" align="center" class="style2">
库位
</td>
<td width='8%' valign="middle" align="center" class="style2">
底膜批号
</td>
<td width='4.6%' valign="middle" align="center" class="style2">
米数
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style23" id="9-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="9-1a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
9-1
</td>
<td width='6.4%' valign="middle" align="center" class="style23" rowspan=3>
9
</td>
<td valign="middle" align="center" class="style2" colspan=9 rowspan=15>
<br>
<br>
<table border="0" width="60%" class="EOS_table">
		<tr>
			<th width="100%" align="center" colspan=3><span style="font-size: 24pt;font-weight: bold">底膜生产管理看板</span></th>
		</tr>
	
	<tr>

		<th width="33%" align="center" class="style2">底膜类型</th>
		<th width="33%" align="center" class="style2">底膜卷数</th>
		<th width="33%" align="center" class="style2">总米数</th>	

	</tr>
	<%
	for (int i = 0; i < counts.length; i++) {
		cnt += Integer.valueOf(counts[i].getString("cnt"));
		residue += Float.valueOf(counts[i].getString("residue"));
	%>
	<tr>
		<td align='center' class="style4"><%=counts[i].getString("dimoType")%></td>
		<td align='center' class="style4"><%=counts[i].getString("cnt")%></td>
		<td align='right' class="style4"><%=counts[i].getString("residue")%></td>
	
	</tr>	
	<% } %>
	<tr>
		<td align='center' class="style5" class="style2">合计</td>
		<td align='center' class="style5" class="style2"><%=cnt%></td>
		<td align='right' class="style5" class="style2"><%=(int) Math.round(residue)%></td>
	</tr>
	</table>
	<br>
	<table border="0" width="60%" class="EOS_table">
	<tr>
			<th width="100%" align="center" colspan=3><span style="font-size: 24pt;font-weight: bold">底膜超期预警</span></th>
		</tr>
	
	<tr>

		<th width="33%" align="center" class="style2">底膜类型</th>
		<th width="33%" align="center" class="style2">底膜卷数</th>
		<th width="33%" align="center" class="style2">总米数</th>	

	</tr>
	<%
	for (int i = 0; i < counts2.length; i++) {
	%>
	<tr>
		<td align='center' class="style42"><%=counts2[i].getString("dimoType")%></td>
		<td align='center' class="style42"><%=counts2[i].getString("cnt")%></td>
		<td align='center' class="style42"><%=counts2[i].getString("residue")%></td>
	
	</tr>	
	<% } %>
	</table>



</td>
<td width='6.4%' valign=""middle"" align="center" class="style23" rowspan=3>
5
</td>
<td width='4%' valign="middle" align="center" class="style23">
5-3
</td>
<td width='8%' valign="middle" align="center" class="style23" id="5-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="5-3a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style23" id="9-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="9-2a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
9-2
</td>
<td width='4%' valign="middle" align="center" class="style23">
5-2
</td>
<td width='8%' valign="middle" align="center" class="style23"  id="5-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="5-2a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style23" id="9-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="9-3a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
9-3
</td>
<td width='4%' valign="middle" align="center" class="style23">
5-1
</td>
<td width='8%' valign="middle" align="center" class="style23"  id="5-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="5-1a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style2" id="10-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="10-1a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
10-1
</td>
<td width='6.4%' valign="middle" align="center" class="style2" rowspan=3>
10
</td>

<td width='6.4%' valign=""middle"" align="center" class="style2" rowspan=3>
4
</td>
<td width='4%' valign="middle" align="center" class="style2">
4-3
</td>
<td width='8%' valign="middle" align="center" class="style2" id="4-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="4-3a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style2" id="10-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="10-2a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
10-2
</td>
<td width='4%' valign="middle" align="center" class="style2">
4-2
</td>
<td width='8%' valign="middle" align="center" class="style2"  id="4-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="4-2a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='9.6%' valign="middle" align="center" class="style2" id="10-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="10-3a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
10-3
</td>
<td width='4%' valign="middle" align="center" class="style2">
4-1
</td>
<td width='8%' valign="middle" align="center" class="style2"  id="4-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="4-1a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style23" id="11-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="11-1a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
11-1
</td>
<td width='6.4%' valign="middle" align="center" class="style23" rowspan=3>
11
</td>

<td width='6.4%' valign=""middle"" align="center" class="style23" rowspan=3>
3
</td>
<td width='4%' valign="middle" align="center" class="style23">
3-3
</td>
<td width='8%' valign="middle" align="center" class="style23" id="3-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="3-3a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style23" id="11-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="11-2a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
11-2
</td>
<td width='4%' valign="middle" align="center" class="style23">
3-2
</td>
<td width='8%' valign="middle" align="center" class="style23"  id="3-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="3-2a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style23" id="11-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="11-3a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
11-3
</td>
<td width='4%' valign="middle" align="center" class="style23">
3-1
</td>
<td width='8%' valign="middle" align="center" class="style23"  id="3-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="3-1a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style2" id="12-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="12-1a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
12-1
</td>
<td width='6.4%' valign="middle" align="center" class="style2" rowspan=3>
12
</td>

<td width='6.4%' valign=""middle"" align="center" class="style2" rowspan=3>
2
</td>
<td width='4%' valign="middle" align="center" class="style2">
2-3
</td>
<td width='8%' valign="middle" align="center" class="style2" id="2-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="2-3a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style2" id="12-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="12-2a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
12-2
</td>
<td width='4%' valign="middle" align="center" class="style2">
2-2
</td>
<td width='8%' valign="middle" align="center" class="style2"  id="2-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="2-2a">
&nbsp;
</td>
</tr>


<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style2" id="12-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="12-3a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style2">
12-3
</td>
<td width='4%' valign="middle" align="center" class="style2">
2-1
</td>
<td width='8%' valign="middle" align="center" class="style2"  id="2-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style2" id="2-1a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style23" id="13-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="13-1a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
13-1
</td>
<td width='6.4%' valign="middle" align="center" class="style23" rowspan=3>
13
</td>

<td width='6.4%' valign=""middle"" align="center" class="style23" rowspan=3>
1
</td>
<td width='4%' valign="middle" align="center" class="style23">
1-3
</td>
<td width='8%' valign="middle" align="center" class="style23" id="1-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="1-3a">
&nbsp;
</td>
</tr>

<tr class="my-row">
<td width='8%' valign="middle" align="center" class="style23" id="13-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="13-2a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
13-2
</td>
<td width='4%' valign="middle" align="center" class="style23">
1-2
</td>
<td width='8%' valign="middle" align="center" class="style23"  id="1-2">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="1-2a">
&nbsp;
</td>
</tr>

<tr>
<td width='8%' valign="middle" align="center" class="style23" id="13-3">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="13-3a">
&nbsp;
</td>
<td width='4%' valign="middle" align="center" class="style23">
13-3
</td>
<td width='4%' valign="middle" align="center" class="style23">
1-1
</td>
<td width='8%' valign="middle" align="center" class="style23"  id="1-1">
&nbsp;
</td>
<td width='4.6%' valign="middle" align="center" class="style23" id="1-1a">
&nbsp;
</td>
</tr>

</table>

</div>

</body>

<script type="text/javascript">
	function initPage() {
		<%
		for (int i = 0; i < details.length; i++) {
		%>
			var myid = '<%=null == details[i].get("position")?"0":details[i].getString("position")%>';
			var element = document.getElementById(myid);
			var element2 = document.getElementById(myid + 'a');
			if(null != element){
				element.innerText = '<%=null == details[i].get("dimoBatchNo")?"":details[i].getString("dimoBatchNo")%>';
				element2.innerText = '<%=null == details[i].get("residue")?"":details[i].getString("residue")%>';
				<% int diff = Integer.valueOf(details[i].getString("diff")); %>
				<% if(diff>30){ %>
				   element.style.color = "red";
				<% } %>
			}
		<% } %>
		
	}

</script>

</html>
