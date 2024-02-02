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
<title>请检单</title>
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


  <table width="780" border="0" >
<tr>
    <td width="100%" height="47"> <div align="center" class="style3"><strong><b:write property="data/types" />请检单</strong></div> </td>
  </tr>
</table>
<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
  <tr style="border: 1px solid black;">
    <td width="15%" height="38" rowspan=2> <div align="center" class="style1"><strong>请检时间</strong></div></td>
    <td width="35%" height="38" rowspan=2> <div align="center" class="style1"><b:write property="data/createTime" /></div></td>
    <td width="15%" height="38"> <div align="center" class="style1"><strong>请检人</strong></div></td>
    <td width="35%" height="38"> <div align="center" class="style1"><b:write property="data/createName" /></div></td>
  </tr>
  <tr style="border: 1px solid black;">
    <td width="15%" height="38"> <div align="center" class="style1"><strong>审核人</strong></div></td>
    <td width="35%" height="38"> <div align="center" class="style1"><b:write property="data/judgerName" /></div></td>
  </tr>
  <tr style="border: 1px solid black;">
    <td width="15%" height="38"> <div align="center" class="style1"><strong>膜片型号</strong></div></td>
    <td width="35%" height="38"> <div align="center" class="style1"><b:write property="data/prodSpecName" /></div></td>
    <td width="15%" height="38"> <div align="center" class="style1"><strong>计划单号</strong></div></td>
    <td width="35%" height="38"> <div align="center" class="style1"><b:write property="data/planNo" /></div></td>
  </tr>
  <tr style="border: 1px solid black;">
    <td width="15%" height="38"> <div align="center" class="style1"><strong>请检数量</strong></div></td>
    <td width="35%" height="38"> <div align="center" class="style1"><b:write property="data/amount" /></div></td>
    <td width="15%" height="38"> <div align="center" class="style1"><strong>请检单号</strong></div></td>
    <td width="35%" height="38"> <div align="center" class="style1"><b:write property="data/title" /></div></td>
  </tr>
  <l:equal targetValue="发货" property="data/types" compareType="string">
  <tr style="border: 1px solid black;">
    <td width="15%" height="38"> <div align="center" class="style1"><strong>请检订单号</strong></div></td>
    <td width="35%" height="38"> <div align="center" class="style1"><b:write property="data/orderNo" /></div></td>
    <td width="15%" height="38"> <div align="center" class="style1">&nbsp;</div></td>
    <td width="35%" height="38"> <div align="center" class="style1">&nbsp;</div></td>
  </tr>
  </l:equal>
 </table> 
<p>&nbsp;</p>
 <l:notEmpty property="list">
 <table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
  <tr style="border: 1px solid black;">
    <td width="8%" height="38"> <div align="center" class="style1"><strong>膜片批号</strong></div></td>
    <td width="8%" height="38"> <div align="center" class="style1"><strong>膜片卷号</strong></div></td>
    <td width="7%" height="38"> <div align="center" class="style1"><strong>长度(m)</strong></div></td>
    <td width="7%" height="38"> <div align="center" class="style1"><strong>可用长度(m)</strong></div></td>
    <td width="7%" height="38"> <div align="center" class="style1"><strong>合格长度(m)</strong></div></td>
    <td width="8%" height="38"> <div align="center" class="style1"><strong>初检测试台</strong></div></td>
    <td width="8%" height="38"> <div align="center" class="style1"><strong>初检膜通量</strong></div></td>
    <td width="8%" height="38"> <div align="center" class="style1"><strong>初检脱盐率%</strong></div></td>
    <td width="8%" height="38"> <div align="center" class="style1"><strong>复检测试台</strong></div></td>
    <td width="8%" height="38"> <div align="center" class="style1"><strong>复检膜通量</strong></div></td>
    <td width="8%" height="38"> <div align="center" class="style1"><strong>复检脱盐率%</strong></div></td>
    <td width="8%" height="38"> <div align="center" class="style1"><strong>判定结果</strong></div></td>
    <td width="8%" height="38"> <div align="center" class="style1"><strong>流转位置</strong></div></td>
  </tr>
  <l:iterate property="list" id="id1">
  <tr style="border: 1px solid black;">
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="batchNo"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="outBatchNo"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="outLength"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="usefulLength"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="qualifidLength"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="fMacName"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="fGfdAvg"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="fSaltRejection"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="rMacName"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="rGfdAvg"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="rSaltRejection"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="perfFlagName"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="trend"/></div></td>
  </tr>
  </l:iterate>
  </table> 
</l:notEmpty>

<p>&nbsp;</p>
<p>&nbsp;</p>
</div>

</body>
</html>