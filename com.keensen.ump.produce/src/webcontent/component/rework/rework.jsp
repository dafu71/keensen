<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<%@ taglib uri="http://eos.primeton.com/tags/dict" prefix="d"%>
<html>
<%
			Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>元件返工指令单</title>
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
<div align="center" id="pdfContainer">

<table width="780" border="0">
	<tr>
		<td width="100%" height="47">
		<div align="center" class="style3"><strong>元件返工指令单</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="100%">
		<div align="left" class="style2">文件编号：<b:write
			property="data/code" /></div>
		</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="20%" rowspan=6>
		<div align="center" class="style1"><strong>不良现象 </strong></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>日期</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/happenDate" formatPattern="yyyy-MM-dd" /></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>发生工序</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/tache" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td height="60">
		<div align="center" class="style1"><strong>不良现象 </strong></div>
		</td>
		<td colspan=3>
		<div align="center" class="style1"><b:write
			property="data/describe" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>订单编号</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/orderNo" /></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>元件型号</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/prodSpecName" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">

		<td width="15%" height="38">
		<div align="center" class="style1"><strong>不良类型</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><d:write
			property="data/defectType" dictTypeId="KS_COMPONENT_REWORK_DEFECT" /></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>不良数量</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/defectAmount" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td>
		<div align="center" class="style1"><strong>返工批号</strong></div>
		</td>
		<td colspan=3 height="60">
		<div align="center" class="style1"><b:write
			property="data/batchNoStr" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>质量管理员</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/firstName" /></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>日期</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/createTime" formatPattern="yyyy-MM-dd" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td rowspan=3>
		<div align="center" class="style1"><strong>返工指令 </strong></div>
		</td>
		<td height="38">
		<div align="center" class="style1"><strong>返工方法</strong></div>
		</td>
		<td colspan=3 height="60">
		<div align="center" class="style1"><b:write
			property="data/reworkMethod" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td>
		<div align="center" class="style1"><strong>处置方式 </strong></div>
		</td>
		<td colspan=3 height="60">
		<div align="center" class="style1"><b:write
			property="data/reworkDeal" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>工艺员</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/secondName" /></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>日期</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/secondTime" formatPattern="yyyy-MM-dd" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td rowspan=3>
		<div align="center" class="style1"><strong>返工安排 </strong></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>返工负责人</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/reworkResponse" /></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>返工激励（元）</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/reworkIncentive" /></div>
		</td>
	</tr>

	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>计划完成日期</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/planFinishDate" formatPattern="yyyy-MM-dd" /></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>返工入库订单号</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/reworkOrderNo" /></div>
		</td>
	</tr>

	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>班长确认</strong></div>
		</td>
		<td colspan=3>&nbsp;</td>
	</tr>
	
	<tr style="border: 1px solid black;">
		<td rowspan=3>
		<div align="center" class="style1"><strong>结果确认 </strong></div>
		</td>
		<td width="15%" height="48">
		<div align="center" class="style1"><strong>是否按时完成</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><d:write
			property="data/ifOntime" dictTypeId="ABF_YESORNO"/></div>
		</td>
		<td width="15%" height="48">
		<div align="center" class="style1"><strong>返修后是否<br>符合标准</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><d:write
			property="data/ifOk" dictTypeId="ABF_YESORNO"/></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>延时完成说明</strong></div>
		</td>
		<td colspan=3 height="60">
		<div align="center" class="style1"><b:write
			property="data/notOntime" /></div>
		</td>
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>质量管理员</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/fourthName" /></div>
		</td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>日期</strong></div>
		</td>
		<td width="25%" height="38">
		<div align="center" class="style1"><b:write
			property="data/fourthTime" formatPattern="yyyy-MM-dd" /></div>
		</td>
	</tr>
</table>

<p>&nbsp;</p>
<p>&nbsp;</p>
</div>

</body>
</html>
