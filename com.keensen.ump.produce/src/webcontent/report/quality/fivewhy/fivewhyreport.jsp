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
<title>5why分析报告</title>
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
    <td width="100%" height="47"> <div align="center" class="style3"><strong>5why分析报告</strong></div> </td>
  </tr>
</table>
<table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2">管理编号：<b:write property="data/code" /></div> </td>
	<td width="50%"> <div align="right" class="style2">主导部门：<b:write property="data/dept" /></div> </td>
  </tr>
</table>
<table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>1. 不良信息</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
</table>
<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
  <tr style="border: 1px solid black;">
    <td width="10%" height="38"> <div align="center" class="style1"><strong>发生地点</strong></div></td>
    <td width="23%" height="38"> <div align="center" class="style1"><d:write property="data/happenPlace" dictTypeId="KS_HAPPEN_PLACE"/></div></td>
    <td width="10%" height="38"> <div align="center" class="style1"><strong>产品型号</strong></div></td>
    <td width="23%" height="38"> <div align="center" class="style1"><b:write property="data/prodSpecName" /></div></td>
    <td width="10%" height="38"> <div align="center" class="style1"><strong>发生日期</strong></div></td>
    <td width="23%" height="38"> <div align="center" class="style1"><b:write property="data/happenDt" formatPattern="yyyy-MM-dd"/></div></td>
  </tr>
  <tr style="border: 1px solid black;">
    <td height="38"> <div align="center" class="style1"><strong>现品区分</strong></div></td>
    <td height="38"> <div align="center" class="style1"><d:write property="data/productClassify" dictTypeId="KS_PRODUCT_CLASSIFY"/></div></td>
    <td height="38"> <div align="center" class="style1"><strong>不良分类</strong></div></td>
    <td height="38" colspan=3> <div align="center" class="style1"><d:write property="data/poorClassify" dictTypeId="KS_POOR_CLASSIFY"/>
    <l:notEmpty property="data/poorClassifyOther">(<b:write property="data/poorClassifyOther" />)</l:notEmpty>    
    </div></td>
    </tr>
    <l:empty property="data/poorUrl">
     <tr style="border: 1px solid black;">
    <td height="60"> <div align="center" class="style1"><strong>不良现象</strong></div></td>
    <td height="60" colspan=5> <div align="center" class="style1"><d:write property="data/poorDescribe" dictTypeId="KS_PRODUCT_CLASSIFY"/></div></td>
     
  </tr>
  </l:empty>
  <l:notEmpty property="data/poorUrl">
     <tr style="border: 1px solid black;">
    <td height="192"> <div align="center" class="style1"><strong>不良现象</strong></div></td>
    <td height="192" colspan=2> <div align="center" class="style1"><d:write property="data/poorDescribe" dictTypeId="KS_PRODUCT_CLASSIFY"/></div></td>
    <td height="192" colspan=3> <div align="center"><img src="<b:write property="data/poorUrl" />" width="189" height="190"></div></td>
      
  </tr>
  </l:notEmpty>
</table>
<table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>2. 围堵措施</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
</table>
<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
  <tr style="border: 1px solid black;">
    <td width="10%" height="38"> <div align="center" class="style1"><strong>类型</strong></div></td>
    <td width="10%" height="38"> <div align="center" class="style1"><strong>数量</strong></div></td>
    <td width="55%" height="38"> <div align="center" class="style1"><strong>处理措施</strong></div></td>
    <td width="10%" height="38"> <div align="center" class="style1"><strong>责任人</strong></div></td>
    <td width="15%" height="38"> <div align="center" class="style1"><strong>完成日期</strong></div></td>
  </tr>
  <l:notEmpty property="measureList">
  <l:iterate property="measureList" id="id1">
  <tr style="border: 1px solid black;">
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="classify"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="num"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="deal"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="responsible"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id1" property="finishDt" formatPattern="yyyy-MM-dd"/></div></td>
  </tr>
  </l:iterate>
  </l:notEmpty>
</table> 
<table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>3. 生产信息调查</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
</table> 
<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
  <tr style="border: 1px solid black;">
    <td width="100%" height="100"><b:write property="data/productInfo" /></td>    
  </tr>
 </table> 
 <table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>4. 原因分析</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
</table>  

<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
  <tr style="border: 1px solid black;" >
    <td width="15%" height="38" rowspan=2> <div align="center" class="style1"><strong>不良现象</strong></div></td>
    <td height="38" colspan="5"> <div align="center" class="style1"><strong>根本原因</strong></div></td>
    <td width="15%" height="38" rowspan=2> <div align="center" class="style1"><strong>再发防止对策</strong></div></td>
  </tr>
   <tr style="border: 1px solid black;">
    <td width="14%" height="38"> <div align="center" class="style1"><strong>1WHY</strong></div></td>
    <td width="14%" height="38"> <div align="center" class="style1"><strong>2WHY</strong></div></td>
    <td width="14%" height="38"> <div align="center" class="style1"><strong>3WHY</strong></div></td>
    <td width="14%" height="38"> <div align="center" class="style1"><strong>4WHY</strong></div></td>
    <td width="14%" height="38"> <div align="center" class="style1"><strong>5WHY</strong></div></td>
  </tr>
  
   <l:notEmpty property="reasonList">
  <l:iterate property="reasonList" id="id2">
  <tr style="border: 1px solid black;">
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id2" property="phenomenon"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id2" property="why1"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id2" property="why2"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id2" property="why3"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id2" property="why4"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id2" property="why5"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id2" property="answer"/></div></td>
  </tr>
  </l:iterate>
  </l:notEmpty>  
 </table> 
 
  <table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>5. 改善对策</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
</table> 
<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
   <tr style="border: 1px solid black;">
    <td width="5%" height="38"> <div align="center" class="style1"><strong>序号</strong></div></td>
    <td width="40%" height="38"> <div align="center" class="style1"><strong>改善对策</strong></div></td>
    <td width="10%" height="38"> <div align="center" class="style1"><strong>责任人</strong></div></td>
    <td width="15%" height="38"> <div align="center" class="style1"><strong>完成日期</strong></div></td>
    <td width="30%" height="38"> <div align="center" class="style1"><strong>实施确认</strong></div></td>
  </tr>
  <l:notEmpty property="answerList">
  <l:iterate property="answerList" id="id3" indexId="index">
  <tr style="border: 1px solid black;">
    <td height="38"> <div align="center" class="style1"><b:write property="index" scope="p" /></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id3" property="answer"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id3" property="responsible"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id3" property="finishDt" formatPattern="yyyy-MM-dd"/></div></td>
    <td height="38"> <div align="center" class="style1"><b:write iterateId="id3" property="confirm"/></div></td>
  </tr>
  </l:iterate>
  </l:notEmpty>  
 </table>   
 <table width="780" border="0" >
<tr>
    <td width="30%" height="38"> <div align="left" class="style2">编制：</div> </td>
	<td width="30%"> <div align="left" class="style2">确认：</div> </td>
	<td width="30%"> <div align="left" class="style2">批准：</div> </td>
  </tr>
</table> 

  <table width="780" border="0" >
<tr>
    <td width="50%"> <div align="left" class="style2"><strong>6. 效果验证</strong></div> </td>
	<td width="50%">&nbsp; </td>
  </tr>
</table> 
<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; ">
   <tr>
    <td width="20%" height="38"> <div align="center" class="style1"><strong>验证方法</strong></div></td>
    <td width="45%" height="38"> <div align="center" class="style1"><strong>验证结果</strong></div></td>
    <td width="25%" height="38"> <div align="center" class="style1"><strong>结论</strong></div></td>
  </tr>
   <tr>
    <td width="20%" height="70"> <div align="center" class="style1">1个月不再出现相同原因的类似事件。</div></td>
    <td width="45%" height="70"> <div align="left" class="style1">&nbsp;&nbsp;跟进日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 到&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ，</div>
    								<div align="left" class="style1">&nbsp;&nbsp;跟进数量：共&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;，其中发现不符合数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;。</div></td>
    <td width="25%" height="70"> <div align="left" class="style1"><input type="checkbox">可结案，结案日期：</div>
    <div align="left" class="style1"><input type="checkbox"> 需再跟进1月</div>
    <div align="left" class="style1"><input type="checkbox"> 需重新分析</div></td>
  </tr>
</table>   
 <table width="780" border="0" >
<tr>
    <td width="30%" height="38"> <div align="left" class="style2">跟进：</div> </td>
	<td width="30%"> <div align="left" class="style2">确认：</div> </td>
	<td width="30%"> <div align="left" class="style2">批准：</div> </td>
  </tr>
</table> 
<p>&nbsp;</p>
<p>&nbsp;</p>
</div>

</body>
</html>