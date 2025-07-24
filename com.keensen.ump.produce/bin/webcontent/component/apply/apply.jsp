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
			DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"list");
			
			DataObject head = (DataObject) XpathUtil.getObjectByXpath(rootObj,
			"data");
			String ifSG = head.get("ifSG").toString();
			
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>元件入库请检单</title>

<script type="text/javascript" src="base/jquery/jquery-1.11.3.min.js"></script>
<script type='text/javascript'
	src="base/jquery/plugins/JsBarcode.all.min.js"></script>
<script type='text/javascript' src="base/utility/utf.js"></script>
<script type="text/javascript"
	src="base/jquery/plugins/jquery.qrcode.js"></script>
<script type="text/javascript"
	src="qinsen/produce/tumo/js/printTumoTag.js?nowtime=<%=String.valueOf(System.currentTimeMillis())%>"></script>
	
<style type="text/css">
<!--
.style0 {font-family: "仿宋";font-size:9pt;}
.style1 {font-family: "仿宋";font-size:11pt;}
.style2 {font-family: "仿宋";font-size:12pt;}
.style3 {font-family: "仿宋";font-size:20pt;}
.style4 {font-family: "仿宋";font-size:24pt;}
 
-->
    </style>


</head>
<body onload="initPage()">
<div align="center" id="pdfContainer">

<table width="780" border="0">
	<tr>
		<td width="100%" height="47">
		<div align="right" class="style3">		
		<svg id="barcode_<b:write property="data/code" />" style="width:80mm"></svg>
		</div>
		</td>
	</tr>
</table>
<table width="780" border="0">
	<tr>
		<td width="100%" height="47">
		<div align="center" class="style3"><strong>元件入库请检单</strong>
		
		
		</div>
		</td>
	</tr>
</table>

<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>订单类型:</strong><b:write property="data/orderType" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>订单号:</strong><b:write property="data/orderNo" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>栈板号:</strong><b:write property="data/code" /></div>
		</td>		
	</tr>
	
	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>订单元件型号:</strong><b:write property="data/prodSpecName" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>订单数量:</strong><b:write property="data/orderAmount" /></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>请检数量:</strong><b:write property="data/applyAmount" /></div>
		</td>		
	</tr>
	
	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>请检经办人:</strong><b:write property="data/applyUserName" /></div>
		</td>		
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>请检日期:</strong><b:write property="data/applyDate" formatPattern="yyyy-MM-dd"/></div>
		</td>	
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>带NSF:</strong><input type="checkbox">是&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox">否
		</div>
		</td>	
	</tr>
	
</table>
<table width="780" border="0">
	<tr>
		<td width="100%" height="28">
		<div align="center" class="style2"><strong>订单要求</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>元件类型:</strong><d:write property="data/prodClassFlag" dictTypeId="KS_PROD_CLASS_FLAG"/></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>端盖:</strong><d:write property="data/lid" dictTypeId="KS_PROD_LID"/></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>膜体所裹胶带:</strong><d:write property="data/tape" dictTypeId="KS_PROD_TAPE"/></div>
		</td>		
	</tr>
	<tr style="border: 1px solid black;">
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>唛头情况:</strong><d:write property="data/markTypeFlag" dictTypeId="KS_PROD_MARK_TYPE_FLAG"/></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>唛头显示型号:</strong><b:write property="data/markSpecCode"/></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>加贴特殊唛头:</strong><d:write property="data/markSpecialFlag" dictTypeId="KS_YESORNO"/></div>
		</td>		
	</tr>
	
	<tr style="border: 1px solid black;">
		
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>包装箱:</strong><d:write property="data/box" dictTypeId="KS_COMPONENT_INDUSTRY_BOX"/></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>托盘:</strong><b:write property="data/tray"/></div>
		</td>	
		
		<td width="33%" height="38">
		&nbsp;
		<%--<div align="left" class="style1"><strong>性能:</strong><b:write property="data/performance"/></div>--%>
		</td>
			
	</tr>
	<% if(ifSG.equals("N")){ %>
	<td width="33%" height="38">
		<div align="left" class="style1"><strong>最低脱盐率(%)</strong><b:write property="data/saltLow"/></div>
		</td>
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>产水量下限(GPD)</strong><b:write property="data/gpdLow"/></div>
		</td>	
		
		<td width="33%" height="38">
		<div align="left" class="style1"><strong>产水量上限(GPD)</strong><b:write property="data/gpdUp"/></div>
		</td>
		<% } %>
</table>
<table width="780" border="0">
	<tr>
		<td width="100%" height="28">
		<div align="center" class="style2"><strong>外观和尺寸检查</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>检查项目</strong></div></td>
		<td width="35%" height="38">
		<div align="center" class="style1"><strong>检验标准</strong></div></td>
		<td width="10%" height="38">
		<div align="center" class="style1"><strong>检验方法</strong></div></td>
		<td width="20%" height="38">
		<div align="center" class="style1"><strong>抽样数量或比例</strong></div></td>
		<td width="20%" height="38">
		<div align="center" class="style1"><strong>检验判定</strong></div></td>
			
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style2"><strong>包装箱唛头</strong></div></td>
		<td width="35%" height="38">
		<div align="left" class="style1"><p>&nbsp;&nbsp;字迹清晰，内容符合图纸或订单要求</p></div></td>
		<td width="10%" height="38">
		<div align="center" class="style1">目视</div></td>
		<td width="20%" height="38">
		<div align="center" class="style1">5</div></td>
		<td width="20%" height="38">
		<div align="center" class="style1"><input type="checkbox">合格<input type="checkbox">不合格
		</div></td>
			
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style2"><strong>元件标签</strong></div></td>
		<td width="35%" height="38">
		<div align="left" class="style1"><p>&nbsp;&nbsp;字迹清晰，内容符合图纸或订单要求</p></div></td>
		<td width="10%" height="38">
		<div align="center" class="style1">目视</div></td>
		<td width="20%" height="38">
		<div align="center" class="style1">5</div></td>
		<td width="20%" height="38">
		<div align="center" class="style1"><input type="checkbox">合格<input type="checkbox">不合格
		</div></td>
		
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="68">
		<div align="center" class="style2"><strong>元件外观</strong></div></td>
		<td width="35%" height="68">
		<div align="left" class="style1">&nbsp;&nbsp;玻璃钢表面平整，无刺手凸点或毛刺。<br>
		&nbsp;&nbsp;玻璃钢内部和端面颜色均匀。<br>
		&nbsp;&nbsp;膜元件端盖处平齐。</div></td>
		<td width="10%" height="68">
		<div align="center" class="style1">目视</div></td>
		<td width="20%" height="68">
		<div align="center" class="style1">50%</div></td>
		<td width="20%" height="68">
		<div align="center" class="style1"><input type="checkbox">合格<input type="checkbox">不合格
		</div></td>
				
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="56">
		<div align="center" class="style2"><strong>元件直径</strong></div></td>
		<td width="35%" height="56">
		<div align="left" class="style1">&nbsp;&nbsp;直径检测仪测试合格或<br>
		&nbsp;&nbsp;测直径的卡规可正常通过。</div></td>
		<td width="10%" height="56">
		<div align="center" class="style1">测量</div></td>
		<td width="20%" height="56">
		<div align="center" class="style1">8寸：100%<br>4寸：10%</div></td>
		<td width="20%" height="56">
		<div align="center" class="style1"><input type="checkbox">合格<input type="checkbox">不合格
		</div></td>
				
	</tr>
</table>	

<br>
<table width="780" border="1" bordercolor="#000000"
	style="border-collapse: collapse; ">
	<tr style="border: 1px solid black;">
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>最终判定</strong></div></td>
		<td width="55%" height="38">
		<div align="center" class="style1"><strong>不合格处理方式</strong></div></td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>C等品</strong></div></td>
		<td width="15%" height="38">
		<div align="center" class="style1"><strong>入库仓位</strong></div></td>			
	</tr>
	<tr style="border: 1px solid black;">
		<td width="15%" height="68">
		<div align="center" class="style1"><input type="checkbox">合格&nbsp;&nbsp;<br><input type="checkbox">不合格</div></td>
		<td width="55%" height="68">
		<div align="left" class="style1">
		&nbsp;&nbsp;<input type="checkbox">返工，重新检验结果：<input type="checkbox">合格<input type="checkbox">不合格
		<br>
		&nbsp;&nbsp;<input type="checkbox">让步接收，品质异常单编号：
		<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
		<br>
		&nbsp;&nbsp;<input type="checkbox">待处理，建议元件型号：
		<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
		</div></td>
		
		<td width="15%" height="38">
		<div align="center" class="style1">&nbsp;<input type="checkbox">是
		<br>
		&nbsp;<input type="checkbox">否
		</div>
		
		</td>
		
		<td width="15%" height="68">
		<div align="center" class="style1">&nbsp;<input type="checkbox">成品仓
		<br>
		&nbsp;<input type="checkbox">订单仓
		<br>
		&nbsp;&nbsp;<input type="checkbox">C等品仓
		</div></td>			
	</tr>
	</table>
	<table width="780" border="0">
	<tr>
		<td width="40%" height="48"><div align="left" class="style1">检验员：</div></td>
		<td width="60%" height="48"><div align="left" class="style1">质量管理部部长：</div></td>			
	</tr>
</table>	
<br>
<table width="780" border="0">
	<tr>
		<td width="100%" height="28">
		<div align="center" class="style2"><strong>请检元件清单</strong></div>
		</td>
	</tr>
</table>
<table width="780" border="1" bordercolor="#000000" style="border-collapse: collapse; " >
<tr style="border: 1px solid black;">
    <td  width="6%" height="38"> <div align="center" class="style1"><strong>序号</strong></div> </td>
	<td  width="15%" height="38"> <div align="center" class="style1"><strong>元件序列号</strong></div> </td>
	<td  width="15%" height="38"> <div align="center" class="style1"><strong>膜片批次</strong></div> </td>
	<td  width="7%" height="38"> <div align="center" class="style1"><strong>状态</strong></div> </td>
	<td  width="7%" height="38"> <div align="center" class="style1"><strong>气检值</strong></div> </td>	
	<td  width="6%" height="38"> <div align="center" class="style1"><strong>序号</strong></div> </td>
	<td  width="15%" height="38"> <div align="center" class="style1"><strong>元件序列号</strong></div> </td>
	<td  width="15%" height="38"> <div align="center" class="style1"><strong>膜片批次</strong></div> </td>
	<td  width="7%" height="38"> <div align="center" class="style1"><strong>状态</strong></div> </td>
	<td  width="7%" height="38"> <div align="center" class="style1"><strong>气检值</strong></div> </td>
	
  </tr>
  <%  for(int i=0;i<list.length;i++){ %>
  <% if(i%2==0){ %>
  <tr  style="border: 1px solid black;">
  <% } %>
   <td  height="38"> <div align="center" class="style1"><%=i+1 %></div> </td>
	<td height="38"> <div align="center" class="style1"><%=list[i].getString("batchNo") %></div> </td>
	<td height="38"> <div align="center" class="style1"><%=null == list[i].getString("tumoBatchStr2")?"":list[i].getString("tumoBatchStr2") %></div> </td>
	<td height="38"> <div align="center" class="style1"><%=list[i].getString("state") %></div> </td> 
	<td height="38"> <div align="center" class="style1"><%=list[i].getString("checkResult") %></div> </td>   
  
  <% if(i%2==1 || i==list.length-1){ %>
  </tr>
<% } %>
  <% } %>
</table>

<p>&nbsp;</p>
<p>&nbsp;</p>
</div>
<script type="text/javascript">
 
	function initPage() {
						var batchNo = '<b:write property="data/code" />';
						var barcode = document.getElementById('barcode_' + batchNo), 
						options = {
						format : "CODE128",
						displayValue : true,
						fontSize : 16,
						font : 'msyhbd',
						fontOptions : 'bold',
						textMargin : 0,
						height : 50,
						margin : 0,
						width : 3
						};
						
					JsBarcode(barcode, batchNo, options);
					window.print();
					
	};
</script>
</body>
</html>
