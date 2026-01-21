<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<%@ taglib uri="http://eos.primeton.com/tags/dict" prefix="d"%>
<html>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
 <title>元件报废处理单</title>
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
		.style1 {font-family: "仿宋";font-size:10pt;}
		.style2 {font-family: "仿宋";font-size:12pt;}
		.style3 {font-family: "仿宋";font-size:20pt;}
		.style4 {font-family: "仿宋";font-size:24pt;}
		 
		-->
    </style>

</head>
<body>
 <div class="a4-container" align="center">
  <table width= '98%' border="0" bordercolor="#000000" 
  style="border-collapse: collapse; ">   
  <tr style="border: 0px solid black;">
  <td width="100%" height="47" colspan=6> <div align="center" class="style3"><strong><b:write property="data/types" />元件报废处理单</strong></div> </td>  
  </tr>
  
  <tr style="border: 0px solid black;">
    <td width="10%" height="38"> <div align="center" class="style1"><strong>报废单编号：</strong></div></td>
    <td width="23%" height="38"> <div align="center" class="style1"><b:write property="head/code" /></div></td>
    <td width="10%" height="38"> <div align="center" class="style1"><strong>申请日期：</strong></div></td>
    <td width="23%" height="38"> <div align="center" class="style1"><b:write property="head/createTime" /></div></td>
    <td width="10%" height="38"> <div align="center" class="style1"><strong>元件归属类型：</strong></div></td>
    <td width="24%" height="38"> <div align="center" class="style1"><b:write property="head/belongType" /></div></td>
  </tr>
  <tr style="border: 0px solid black;">
    <td width="10%" height="38"> <div align="center" class="style1"><strong>申请部门：</strong></div></td>
    <td width="23%" height="38"> <div align="center" class="style1"><b:write property="head/deptName" /></div></td>
    <td width="10%" height="38"> <div align="center" class="style1"><strong>申请人：</strong></div></td>
    <td width="23%" height="38"> <div align="center" class="style1"><b:write property="head/createName" /></div></td>
    <td width="10%" height="38"> &nbsp;</td>
    <td width="24%" height="38"> &nbsp;</td>
  </tr>
  
  </table>   
  
  <table width= '98%' border="1" bordercolor="#000000" 
  style="border-collapse: collapse; ">   
  <tr style="border: 1px solid black;">
  <td width="8%" height="38" rowspan=2><div align="center" class="style1">物料代码</div></td>
  <td width="7%" height="38" rowspan=2><div align="center" class="style1">元件型号</div></td>
  <td width="4%" height="38" rowspan=2><div align="center" class="style1">胶带颜色</div></td>
  <td width="4%" height="38" rowspan=2><div align="center" class="style1">干/湿膜</div></td>
  <td width="8%" height="38" rowspan=2><div align="center" class="style1">卷膜序号/元件序列号</div></td>
  <td width="8%" height="38" rowspan=2><div align="center" class="style1">膜片批次</div></td>
  <td width="4%" height="38" rowspan=2><div align="center" class="style1">报废数量</div></td>
  <td width="3%" height="38" rowspan=2><div align="center" class="style1">单位</div></td>
  <td width="6%" height="38" rowspan=2><div align="center" class="style1">入库日期</div></td>
  <td width="6%" height="38" colspan=3><div align="center" class="style1">最后一次水测数据</div></td>
  <td width="8%" height="38" rowspan=2><div align="center" class="style1">报废原因</div></td>
  <td width="5%" height="38" rowspan=2><div align="center" class="style1">责任人</div></td>
  <td width="5%" height="38" rowspan=2><div align="center" class="style1">责任部门</div></td>
  <td width="7%" height="38" rowspan=2><div align="center" class="style1">处理方式</div></td>
  <td width="5%" height="38" rowspan=2><div align="center" class="style1">品管员确认</div></td>
  
  
  </tr>
  
   <tr style="border: 1px solid black;">
   <td width="8%" height="38" ><div align="center" class="style1">测试时间</div></td>
   <td width="5%" height="38" ><div align="center" class="style1">产水量GPD</div></td>
   <td width="5%" height="38" ><div align="center" class="style1">脱盐率%</div></td>
   </tr>
   
   <l:notEmpty property="list">
      
   <l:iterate property="list" id="id1">
  <tr style="border: 1px solid black;">
    <td height="38" width="8%"> <div align="center" class="style1"><b:write iterateId="id1" property="materCode"/></div></td>
    <td height="38" width="7%"> <div align="center" class="style1"><b:write iterateId="id1" property="prodSpecName"/></div></td>
    <td height="38" width="4%"> <div align="center" class="style1"><b:write iterateId="id1" property="tapeColor"/></div></td>
    <td height="38" width="4%"> <div align="center" class="style1"><b:write iterateId="id1" property="dryWet"/></div></td>
    <td height="38" width="8%"> <div align="center" class="style1"><b:write iterateId="id1" property="jmBatchNo"/></div></td>
    <td height="38" width="8%"> <div align="center" class="style1"><b:write iterateId="id1" property="tmBatchNo"/></div></td>
    <td height="38" width="4%"> <div align="center" class="style1"><b:write iterateId="id1" property="amount"/></div></td>
    <td height="38" width="3%"> <div align="center" class="style1"><b:write iterateId="id1" property="unit"/></div></td>
    <td height="38" width="6%"> <div align="center" class="style1"><b:write iterateId="id1" property="returnFactory"/></div></td>
    <td height="38" width="8%"> <div align="center" class="style1"><b:write iterateId="id1" property="checkTm"/></div></td>
    <td height="38" width="5%"> <div align="center" class="style1"><b:write iterateId="id1" property="gpd"/></div></td>
    <td height="38" width="5%"> <div align="center" class="style1"><b:write iterateId="id1" property="salt"/></div></td>
    <td height="38" width="8%"> <div align="center" class="style1"><b:write iterateId="id1" property="describe"/></div></td>
    <td height="38"  width="5%"> <div align="center" class="style1"><b:write iterateId="id1" property="responsible"/></div></td>
    <td height="38" width="5%"> <div align="center" class="style1"><b:write iterateId="id1" property="department"/></div></td>
    <td height="38" width="7%"> <div align="center" class="style1"><b:write iterateId="id1" property="dealMethod"/></div></td>
    <td height="38" width="5%"> &nbsp;</td>
  </tr>
  </l:iterate>
   
   </l:notEmpty>
  
  </table>      
  <table width= '98%' border="1" bordercolor="#000000" 
  style="border-collapse: collapse; ">  
  <tr style="border: 1px solid black;">
  <td width="20%" height="150" valign='top'>
  <p align='center'  class="style1">申请部门负责人：</p>
  <br>
  <br>
  <p align='left' class="style1"> 签字：</p>
  <p align='left' class="style1">日期：</p>
  </td>
  <td width="20%" height="150" valign='top'>
  <p align='center' valign='top' class="style1">质量管理部负责人：</p>
  <br>
  <br>
  <p align='left' class="style1"> 签字：</p>
  <p align='left' class="style1">日期：</p>
  </td>
  <td width="20%" height="150" valign='top'>
  <p align='center' valign='top' class="style1">中心主任：</p>
  <br>
  <br>
  <p align='left' class="style1"> 签字：</p>
  <p align='left' class="style1">日期：</p>
  </td>
  <td width="20%" height="150" valign='top'>
  <p align='center' valign='top' class="style1">财务部部长：</p>
  <br>
  <br>
  <p align='left' class="style1"> 签字：</p>
  <p align='left' class="style1">日期：</p>
  </td>
  <td width="20%" height="150" valign='top'>
  <p align='center' valign='top' class="style1">总经理：</p>
  <br>
  <br>
  <p align='left' class="style1"> 签字：</p>
  <p align='left' class="style1">日期：</p>
  </td>
  
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
