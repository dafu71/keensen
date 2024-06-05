<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<%@ taglib uri="http://eos.primeton.com/tags/dict" prefix="d"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="java.net.URLDecoder"%>
<html>
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);

	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	String operatorname = (String) userObject.getAttributes().get(
			"operatorname");
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(
			rootObj, "list");
	String lastRelationId = "0";
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>作业锁定计划</title>
<style type="text/css">
<!--
.style0 {font-family: "仿宋";font-size:9pt;}
.style1 {font-family: "仿宋";font-size:11pt;}
.style2 {font-family: "仿宋";font-size:12pt;}
.style3 {font-family: "仿宋";font-size:20pt;}
.style4 {font-family: "仿宋";font-size:24pt;}
.style5 {
  position: fixed;
  bottom: 0; 
  left: 0; 
}

.table {
  width: 190mm;
  height: 277mm;
}

@media print {
  table {
    page-break-after: always;
  }
}
 
-->
    </style>

<script type="text/javascript">
	(function(){
		//window.print();
		//var obj = document.getElementById("pdfContainer");
		//alert(obj);
	})();
	
	
</script>

</head>
<body>
<div align="center" id="pdfContainer">

<table border="1" bordercolor="#000000"
	style="border-collapse: collapse;">
	<tr>
		<td colspan=9 height=40>
		<div align="center" class="style1"><strong>作业锁定计划表(<b:write
			property="condition/size" />寸)&nbsp;&nbsp;&nbsp;&nbsp;制表人:<%=operatorname%></strong></div>
		</td>
		<td colspan=6>
		<div align="center" class="style1"><strong>作业日期：<b:write
			property="condition/planDate" formatPattern="yyyy-MM-dd" /></strong></div>
		</td>
	</tr>
	<tr>
		<td>
		<div align="center" valign="middle" class="style1"><strong>订单号</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>规格型号</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>卷膜数量</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>订单交期</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>订单备注</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>膜片批次</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>米数</strong></div>
		</td>
		<td colspan=2>
		<div align="center" valign="middle" class="style1"><strong>仓位</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>膜片备注</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>裁膜人员</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>生产顺序</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>卷制元件</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>可卷制元件<br>
		换算平均产水量</strong></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><strong>按试卷型号<br>
		换算脱盐率</strong></div>
		</td>
	</tr>

	<%
	for (int i = 0; i < list.length; i++) {
			String relationId = list[i].getString("relationId");
			String rowspan = "0";
			if (!relationId.equals(lastRelationId)) {
				rowspan = list[i].getString("cnt");
				
			}
	%>
	<%
	if (!relationId.equals(lastRelationId)) {
	%>
	<tr>
		<td rowspan=<%=rowspan %>>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("orderNo")%></div>
		</td>
		<td rowspan=<%=rowspan %>>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("materSpecName")%></div>
		</td>
		<td rowspan=<%=rowspan %>>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("jmAmount")%></div>
		</td>
		<td rowspan=<%=rowspan %>>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("orderDate")%></div>
		</td>
		<td rowspan=<%=rowspan %>>
		<div align="center" valign="middle" class="style1"><%=(null == list[i].get("orderRemark")) ? ""
							: list[i].getString("orderRemark")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("batchNo")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("meterAmount")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("storageName2")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("storagePosition2")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=(null == list[i].get("mpRemark")) ? ""
							: list[i].getString("mpRemark")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=(null == list[i].get("cmWorker2")) ? ""
							: list[i].getString("cmWorker2")%></div>
		</td>
		<td rowspan=<%=rowspan %>>
		<div align="center" valign="middle" class="style1"><%=(null == list[i].get("productOrder")) ? ""
							: list[i].getString("productOrder")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("materSpecName")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("testAvgGpd")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("saltRejection")%></div>
		</td>
	</tr>
	<%
	} else {
	%>
	<tr>

		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("batchNo")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("meterAmount")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("storageName2")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("storagePosition2")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=(null == list[i].get("mpRemark")) ? ""
							: list[i].getString("mpRemark")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=(null == list[i].get("cmWorker2")) ? ""
							: list[i].getString("cmWorker2")%></div>
		</td>

		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("materSpecName")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("testAvgGpd")%></div>
		</td>
		<td>
		<div align="center" valign="middle" class="style1"><%=list[i].getString("saltRejection")%></div>
		</td>
	</tr>

	<%
	}
	%>
	<%
		lastRelationId = relationId;
		}
	%>
	
	
	<tr>
		<td colspan=4 height=40>
		<div align="left" class="style1"><strong>审核：</strong></div>
		</td>
		<td colspan=4 height=40>
		<div align="left" class="style1"><strong>执行确认：</strong></div>
		</td>
		<td colspan=4 height=40>
		<div align="left" class="style1"><strong>材料确认：</strong></div>
		</td>
		<td colspan=3 height=40>
		<div align="left" class="style1"><strong>品质审核：</strong></div>
		</td>
	</tr>
	
</table>

<%--<div class="style5">
<table width="1100" border="0">
	<tr>
		<td width="25%">
		<div align="center" valign="middle" class="style1"><strong>审核：</strong></div>
		</td>
		<td width="25%">
		<div align="center" valign="middle" class="style1"><strong>执行确认：</strong></div>
		</td>
		<td width="25%">
		<div align="center" valign="middle" class="style1"><strong>材料确认：</strong></div>
		</td>
		<td width="25%">
		<div align="center" valign="middle" class="style1"><strong>品质审核：</strong></div>
		</td>
	</tr>
</table>
</div>--%>
</div>

</body>
<script type="text/javascript">
	(function(){
		//window.print();
		//var obj = document.getElementById("pdfContainer");
		//alert(obj);
	})();
	document.addEventListener('DOMContentLoaded', function() {
    	var element = document.getElementById('pdfContainer');
    	if (element) {
        	var obj = document.getElementById("pdfContainer");
        	str = obj.innerHTML;
        	var blob = new Blob(["\ufeff", str], {
								type : 'application/vnd.ms-excel;charset=utf-8'
							});
			var link = document.createElement('a');
			var url = URL.createObjectURL(blob);
			link.href = url;
			link.download = 'plan.xls'; // 指定导出文件的名称
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
    	} else {
        	// 处理元素不存在的情况        	
    	}
	});
</script>
</html>
