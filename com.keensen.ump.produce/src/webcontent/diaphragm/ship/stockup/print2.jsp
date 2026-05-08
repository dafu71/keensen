<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<%@ taglib uri="http://eos.primeton.com/tags/dict" prefix="d"%>


<%

	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
			
	String markSpecName = XpathUtil.getObjectByXpath(rootObj,"markSpecName")==null?"":(String)(XpathUtil.getObjectByXpath(rootObj,"markSpecName"));
	String deliveryOrderNo =  XpathUtil.getObjectByXpath(rootObj,"deliveryOrderNo")==null?"":(String)(XpathUtil.getObjectByXpath(rootObj,"deliveryOrderNo"));
	DataObject[] list = (DataObject[]) XpathUtil
			.getObjectByXpath(rootObj, "list");
			
	double usefulLength = 0;
	double qualifidLength = 0;
	double diff = 0;
	
	int tagNum = 0;
	double tagLength = 0;
 %>
<html>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
 <title>膜片备货请检单</title>
    <style>
        /* 打印设置 */
        @page {            
            size: auto;
            margin: 1;
        }
        
        /* 屏幕显示样式 */
        body {
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        
        /* A4容器 */
        .a4-container {
            width: 297mm;
            height: 205mm;
            margin: 2mm auto;
            padding: 2mm;
            background: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
        }
        
        
        
        <!--
		.style0 {font-family: "仿宋";font-size:9pt;}
		.style1 {font-family: "仿宋";font-size:6pt;}
		.style2 {font-family: "仿宋";font-size:12pt;}
		.style3 {font-family: "仿宋";font-size:20pt;}
		.style4 {font-family: "仿宋";font-size:24pt;}
		.style11 {font-family: "仿宋";font-size:10pt;} 
		-->
    </style>

</head>
<body>
 <div class="a4-container" align="center">
  <table width= '98%' border="0" bordercolor="#000000" 
  style="border-collapse: collapse; ">   
  <tr style="border: 0px solid black;">
  <td width="100%" height="47" colspan=6> <div align="center" class="style3"><strong><b:write property="data/types" />膜片备货请检单</strong></div> </td>  
  </tr>
  
  </table>   
  
  <table width= '98%' border="1" bordercolor="#000000" 
  style="border-collapse: collapse; ">   
  <tr style="border: 1px solid black;">
  <td width='5%'  ><div align='center' class='style1'>膜片卷号</div></td>
<td width='5%'  ><div align='center' class='style1'>膜片批次</div></td>
<td width='5%'  ><div align='center' class='style1'>可用长度(m)</div></td>
<td width='5%'  ><div align='center' class='style1'>合格长度(m)</div></td>
<td width='5%'  ><div align='center' class='style1'>膜片型号</div></td>
<td width='4%'  ><div align='center' class='style1'>初检膜通量</div></td>
<td width='4%'  ><div align='center' class='style1'>初检脱盐率%</div></td>
<td width='4%'  ><div align='center' class='style1'>复检膜通量</div></td>
<td width='4%'  ><div align='center' class='style1'>复检脱盐率%</div></td>
<td width='13%'  ><div align='center' class='style1'>生产备注</div></td>
<td width='4%'  ><div align='center' class='style1'>标签数</div></td>
<td width='4%'  ><div align='center' class='style1'>厚度(平均)</div></td>
<td width='4%'  ><div align='center' class='style1'>厚度(最小)</div></td>
<td width='4%'  ><div align='center' class='style1'>厚度(最大)</div></td>
<td width='5%'  ><div align='center' class='style1'>标签长度</div></td>
<td width='5%'  ><div align='center' class='style1'>发货订单号</div></td>
<td width='5%'  ><div align='center' class='style1'>膜片唛头型号</div></td>

<td width='4%'  ><div align='center' class='style1'>宽幅</div></td>
<td width='4%'  ><div align='center' class='style1'>辊筒内径</div></td>
<td width='4%'  ><div align='center' class='style1'>报告脱盐率</div></td>
<td width='4%'  ><div align='center' class='style1'>膜通量</div></td>
  
  
  </tr> 
  
   
  <% 	for (int i = 0; i < list.length; i++) { 
  			usefulLength = usefulLength + (null == list[i].get("usefulLength")?0:Double.parseDouble(list[i].get("usefulLength").toString()));
  			qualifidLength = qualifidLength + (null == list[i].get("qualifidLength")?0:Double.parseDouble(list[i].get("qualifidLength").toString()));
  			tagNum = tagNum + (null == list[i].get("tagNum")?0:Integer.parseInt(list[i].get("tagNum").toString()));
  			tagLength = tagLength + (null == list[i].get("tagLength")?0:Double.parseDouble(list[i].get("tagLength").toString()));
  
  
  %>
  <tr style="border: 1px solid black;">
    <td  > <div align="center" class="style1"><%=list[i].get("outBatchNo") %></div></td>
<td  > <div align="center" class="style1"><%=list[i].get("batchNo") %></div></td>
<td  > <div align="center" class="style1"><%=list[i].get("usefulLength") %></div></td>
<td  > <div align="center" class="style1"><%=list[i].get("qualifidLength") %></div></td>
<td  > <div align="center" class="style1"><%=list[i].get("materSpecName") %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("fGfdAvg")?"":list[i].get("fGfdAvg").toString() %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("fSaltRejection")?"":list[i].get("fSaltRejection").toString() %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("rGfdAvg")?"":list[i].get("rGfdAvg").toString() %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("rSaltRejection")?"":list[i].get("rSaltRejection").toString() %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("remark")?"":list[i].get("remark").toString() %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("tagNum")?"":list[i].get("tagNum").toString()  %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("thickAvg")?"":list[i].get("thickAvg").toString() %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("thickMin")?"":list[i].get("thickMin").toString() %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("thickMax")?"":list[i].get("thickMax").toString() %></div></td>
<td  > <div align="center" class="style1"><%=null == list[i].get("tagLength")?"":list[i].get("tagLength").toString() %></div></td>
<td > <div align="center" class="style1"><%=deliveryOrderNo %></div></td>
<td > <div align="center" class="style1"><%=markSpecName %></div></td>

<td  > <div align='center' class='style1'><%=null == list[i].get("width")?"":list[i].get("width").toString() %></div></td>
<td  > <div align='center' class='style1'>78</div></td>
<td  > <div align='center' class='style1'><%=null == list[i].get("fSaltRejection2")?"":list[i].get("fSaltRejection2").toString() %></div></td>
<td  > <div align='center' class='style1'><%=null == list[i].get("fGfdAvg2")?"":list[i].get("fGfdAvg2").toString() %></div></td>


  </tr>
 <% 		}  %>
 
 <% diff = usefulLength - qualifidLength; %>
 
 <tr style="border: 1px solid black;">
    <td><div align='center' class='style1'>合计</div></td>
<td> &nbsp;</td>
<td> <div align="center" class="style1"><%=usefulLength %></div></td>
<td> <div align="center" class="style1"><%=qualifidLength %></div></td>
<td> <div align="center" class="style1"><%=diff %></div></td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> <div align="center" class="style1"><%=tagNum  %></div></td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> <div align="center" class="style1"><%=tagLength %></div></td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> &nbsp;</td>
<td> &nbsp;</td>
  </tr>
  
  </table>      
  <table width= '98%' border="0" bordercolor="#000000" 
  style="border-collapse: collapse; ">   
  <tr style="border: 0px solid black;">
  <td width="33%"> <div align="left" class="style11">编辑:</div> </td> 
  <td width="33%"> <div align="left" class="style11">审核:</div> </td> 
  <td width="33%"> <div align="left" class="style11">签字:</div> </td> 
  </tr>
  
  </table>      
        
        <div align='center' id='noprintdiv' >
            <button onclick="printPage()">打印本页</button>
        </div>
    </div>
</body>

<script type="text/javascript">
 
	function printPage() {
	
		document.getElementById('noprintdiv').style.display = "none";;
		window.print();
					
	};
</script>
</html>
