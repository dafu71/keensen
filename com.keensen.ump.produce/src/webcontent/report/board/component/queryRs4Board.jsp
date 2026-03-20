<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%--<%@include file="/frame/ui/page/include.jsp"%>--%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<html>
<%
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
			
	String boardDate = (String)XpathUtil.getObjectByXpath(rootObj,"boardDate");		
	String title = boardDate + "工业元件订单贴标及绕丝工序电子看板";
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"list");
	int cnt = list.length;
	
	

	//System.out.println(list);	
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title><%=title %></title>
 <h:css href="/css/style1/style-custom.css"/>  
 <style type="text/css">
<!--
.style0 {font-family: "仿宋";font-size:9pt;}
.style1 {font-family: "仿宋";font-size:11pt;}
.style2 {font-family: "仿宋";font-size:12pt;}
.style3 {font-family: "仿宋";font-size:20pt;}
.style4 {font-family: "仿宋";font-size:18pt;}
.style5 {color:red;font-family: "仿宋";font-size:18pt;}
.style6 {font-family: "仿宋";font-size:18pt;font-weight:bold;}
 
-->
    </style>
    
</head>

<script type="text/javascript">
	(function(){
		setInterval(function(){ location.reload(true); }, 30000);
	})();
</script> 

<body>
<div align="center" >
<table border="1" width="100%" class="EOS_table">
<tr>
<td align='center' colspan=13 class="style6">
          	<%=title %>
        </td>
</tr>
 <tr>
        <th width="10%" align="center" class="style5">
         订单编号
        </th> 
        <th width="10%" align="center" class="style5">
          订单类型
        </th>        
        <th  width="10%" align="center" class="style5">
          计划入库时间
        </th>
        <th width="10%" align="center" class="style5">
          卷膜型号
        </th>
         <th width="10%" align="center" class="style5">
          卷膜执行型号
        </th>
        <th width="10%" align="center" class="style5">
                 干膜/湿
        </th>
        <th width="6%" align="center" class="style5">
         需生产入库数量（支）
        </th> 
        <th width="6%" align="center" class="style5">
          卷膜生产数量（支）
        </th>        
        <th  width="6%" align="center" class="style5">
          切边气检生产数量（支）
        </th>
        <th width="5%" align="center" class="style5">
          贴标签数量（支）
        </th>
         <th width="6%" align="center" class="style5">
          贴标完成比例
        </th>
        <th width="5%" align="center" class="style5">
         绕丝数量（支）
        </th>
        <th width="6%" align="center" class="style5">
         绕丝完成比例
        </th>
        
        
</tr>

<%  for(int i=0;i<list.length;i++){ %>
<%
	String style5="style4";	
	
	
 %>

  <% if(i%2==0){ %>
  <tr class="EOS_table_row" style="height: 60px;">
  <% }else{ %>
  <tr class="" style="height: 60px;">
  <% } %>
  
    	<td align='center' class="<%=style5 %>" style="background-color: #<%=list[i].getString("mystyle") %>" >
   		<%=list[i].getString("orderNo") %>
          
        </td>
        <td align='center' class="<%=style5 %>" style="background-color: #<%=list[i].getString("mystyle") %>">
        <%=list[i].getString("orderType") %>
        </td>
        <td align='center' class="<%=style5 %>" style="background-color: #<%=list[i].getString("mystyle") %>">
        <%=list[i].getString("demandStockDate") %>
        </td>
         <td align='center' class="<%=style5 %>" style="background-color: #<%=list[i].getString("mystyle") %>">
        <%=list[i].getString("orderSpecName") %>
        </td>
         <td align='center' class="<%=style5 %>"  style="background-color: #<%=list[i].getString("mystyle") %>">
        <%=list[i].getString("prodSpecName") %>
        </td>
        <td align='center' class="<%=style5 %>"  >
   		<%=list[i].getString("dryWet") %>
          
        </td>
        <td align='center' class="<%=style5 %>" >
        <%=list[i].getString("prodAmount") %>
        </td>
        <td align='center' class="<%=style5 %>" >
        <%=list[i].getString("jmCount") %>
        </td>
         <td align='center' class="<%=style5 %>" >
        <%=list[i].getString("qjCount") %>
        </td>
         <td align='center' class="<%=style5 %>"  >
        <%=list[i].getString("labelCount") %>
        </td>
         <td align='center' class="<%=style5 %>" >
        <%=list[i].getString("labelRate") %>
        </td>
         <td align='center' class="<%=style5 %>" >
        <%=list[i].getString("rsCount") %>
        </td>
         <td align='center' class="<%=style5 %>"  >
        <%=list[i].getString("rsRate") %>
        </td>
        

         </tr>
<% } %>

</table>
</div>

</body>
</html>