<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%--<%@include file="/frame/ui/page/include.jsp"%>--%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<html>
<%
			Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);

	String flag = (String) XpathUtil.getObjectByXpath(rootObj, "flag");
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "list");
			
			String batchNo = list[0].getString("batchNo");
			
			 
	int cnt = list.length;

	//System.out.println(list2);
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>组件膜片待用区预警提醒</title>

<!-- 导出Excel -->
<script src="base/exceljs/polyfill.js"></script>
<script src="base/exceljs/exceljs.min.js"></script>
<script src="base/exceljs/FileSaver.min.js"></script>
<script src="base/exceljs/doExport.js"></script>

<h:css href="/css/style1/style-custom.css" />
<style type="text/css">
<!--
.style0 {font-family: "仿宋";font-size:9pt;}
.style1 {font-family: "仿宋";font-size:11pt;}
.style2 {font-family: "仿宋";font-size:12pt;}
.style3 {font-family: "仿宋";font-size:20pt;}
.style4 {font-family: "仿宋";font-size:18pt;}
.style5 {color:red;font-family: "仿宋";font-size:18pt;}
 
-->
    </style>

</head>

<script type="text/javascript">
	(function(){
		setInterval(function(){ location.reload(true); }, 60000);
	})();
</script>

<body>
<div align="center">


<% if("1234567".equals(batchNo)){


}else{ %>
<table border="1" width="100%" class="EOS_table">
	<tr>
		<td align="center">
		<button type="button" onclick="exprotExcel()">导出Excel</button>
		</td>
	</tr>
</table>


<table border="1" width="100%" class="EOS_table">
	<tr>
		<th width="10%" align="center">膜片批次</th>
		<th width="10%" align="center">膜片型号</th>
		<th width="10%" align="center">车间</th>
		<th width="10%" align="center">入库可用长度（米）</th>
		<th width="10%" align="center">实时可用长度（米）</th>
		<th width="10%" align="center">呆滞时间(天)</th>
		<th width="10%" align="center">报警</th>
		<th width="10%" align="center">生产时间</th>
		<th width="10%" align="center">入库时间</th>
		<th width="10%" align="center">入库操作人</th>
		


	</tr>

	<%
	for (int i = 0; i < list.length; i++) {
	%>
	<%
	String style5 = "style5";
	%>


	<tr class="EOS_table_row">
		<td align='center' class="<%=style5 %>"><%=list[i].getString("batchNo")%>
		</td>

		<td align='center' class="<%=style5 %>"><%=list[i].getString("specName")%>

		</td>
		<td align='center' class="<%=style5 %>"><%=list[i].getString("workshop")%>
		</td>

		<td align='center' class="<%=style5 %>"><%=list[i].getString("amount")%>
		</td>

		<td align='center' class="<%=style5 %>"><%=list[i].getString("remainLength")%>

		</td>
		<td align='center' class="<%=style5 %>"><%=list[i].getString("diff")%>
		</td>

		<td align='center' class="<%=style5 %>">
		
		
		
		<img src="produce/component/semifinished/img/<%=list[i].getString("ifWarn")%>.png" width="20" height="20">
		
		
		</td>

		<td align='center' class="<%=style5 %>"><%=list[i].getString("produceDt")%>

		</td>
		<td align='center' class="<%=style5 %>"><%=list[i].getString("createTime")%>
		</td>

		<td align='center' class="<%=style5 %>"><%=list[i].getString("createName")%>
		</td>

	</tr>

	<%
	}
	%>

</table>

<% } %>
</div>

<script type="text/javascript">

	function exprotExcel(){
		var mytitle = '膜片超期提醒';
		var columnArr = ['膜片批次',	'膜片型号','车间','入库可用长度（米）','实时可用长度（米）','呆滞时间(天)','报警','生产时间','入库时间','入库操作人'];
		var columns = [];
		// 创建一个workbook
		var workbook = new ExcelJS.Workbook();
		// workbook 添加一个标签的sheet
		var worksheet = workbook.addWorksheet(mytitle);
		// 设置sheet数据中的列名
		for(var i=0;i<columnArr.length;i++){
			var column = {};
			column.header = columnArr[i];
			column.key = i;							
			columns.push(column);
		}
		
				
		worksheet.columns = columns;
		// 设置数据（可以通过后台获取、获取已经存在的数据）

		// 开始添加数据
		var data = [];
		
		<%
			for (int i = 0; i < list.length; i++) {
		%>
				var d = ['<%=list[i].getString("batchNo")%>','<%=list[i].getString("specName")%>',
				'<%=list[i].getString("workshop")%>','<%=list[i].getString("amount")%>',
				'<%=list[i].getString("remainLength")%>','<%=list[i].getString("diff")%>',
				'<%=list[i].getString("ifWarn")%>','<%=list[i].getString("produceDt")%>',
				'<%=list[i].getString("createTime")%>','<%=list[i].getString("createName")%>'];
				data.push(d)
		<% } %>
	
		
		worksheet.addRows(data);
		const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
		// 下载excel
		workbook.xlsx.writeBuffer().then((data) => {
			const blob = new Blob([data], {
					type: EXCEL_TYPE
				});
			saveAs(blob, 'download.xlsx');
		});
	}
</script>


</body>
</html>
