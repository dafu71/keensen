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
.style2 {font-family: "仿宋";font-size:26pt;font-weight: bold }
.style3 {font-family: "仿宋";font-size:20pt;}
.style4 {font-family: "仿宋";font-size:26pt;}
.style5 {color:red;font-family: "仿宋";font-size:26pt;}
.style42 {color:red;font-family: "仿宋";font-size:26pt;}
 
-->
    </style>

</head>

<script type="text/javascript">
	(function(){
		setInterval(function(){ location.reload(true); }, 30000);
	})();
</script>

<body>
<div align="center">

<table border="0" width="100%">
<tr>
<td width='64%' valign="top">
<table border="0" width="100%" class="EOS_table">
	<tr>
		<th width="100%" align="center" colspan=6><span style="font-size: 26pt;font-weight: bold">冷库底膜明细</span></th>
	</tr>

	<tr>

		<th width="10%" align="center" class="style2">库位</th>
		<th width="23%" align="center" class="style2">底膜批号</th>
		<th width="10%" align="center" class="style2">库位</th>
		<th width="23%" align="center" class="style2">底膜批号</th>
		<th width="10%" align="center" class="style2">库位</th>
		<th width="23%" align="center" class="style2">底膜批号</th>

	</tr>
	
	<%
	for (int i = 0; i < details.length; i++) {
	%>
		<%  int k = i % 3; 
			int diff = Integer.valueOf(details[i].getString("diff"));
			String style = diff>30?"style5":"style4";
			if(k == 0){
		%>
		<tr>
		<% } %>	
		<td align='center' class="style4"><%=null == details[i].get("position")?"":details[i].getString("position")%></td>
				
		<td align='center' class="<%=style %>"><%=null == details[i].get("dimoBatchNo")?"":details[i].getString("dimoBatchNo")%></td>
		
		<% if(k == 2 || i==details.length-1) { %>
		</tr>
		<% } %>
	<% } %>
</table>
</td>

<td width='2%'>
&nbsp;
</td>

<td width='34%'>

<table border="0" width="100%">
<tr><td>
	<table border="0" width="100%" class="EOS_table">
		<tr>
			<th width="100%" align="center" colspan=3><span style="font-size: 26pt;font-weight: bold">底膜生产管理看板</span></th>
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
		<td align='center' class="style4"><%=counts[i].getString("residue")%></td>
	
	</tr>	
	<% } %>
	<tr>
		<td align='center' class="style5" class="style2">合计</td>
		<td align='center' class="style5" class="style2"><%=cnt%></td>
		<td align='center' class="style5" class="style2"><%=residue%></td>
	</tr>
	</table>
</td></tr>


<tr><td>
	<table border="0" width="100%" class="EOS_table">
		<tr>
			<th width="100%" align="center" colspan=3><span style="font-size: 26pt;font-weight: bold">底膜超期预警</span></th>
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
		<td align='right' class="style42"><%=counts2[i].getString("residue")%></td>
	
	</tr>	
	<% } %>
	</table>
</td></tr>
</table>

</td>

</tr>
</table>

</div>

</body>
</html>
