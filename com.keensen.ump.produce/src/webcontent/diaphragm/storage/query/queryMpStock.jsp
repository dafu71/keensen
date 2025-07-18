<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%--<%@include file="/frame/ui/page/include.jsp"%>--%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<html>
<%
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
			
	String flag = (String)XpathUtil.getObjectByXpath(rootObj,"flag");
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"list");
	int cnt = list.length;


	//System.out.println(list2);	
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>库存超期提醒</title>
 <h:css href="/css/style1/style-custom.css"/>  
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
<div align="center" >
<table border="1" width="100%" class="EOS_table">
 <tr>
        <th width="10%" align="center">
          	膜片批次
        </th> 
        <th width="10%" align="center">
          仓库名称
        </th>        
        <th  width="10%" align="center">
          库位
        </th>
        <th width="10%" align="center">
          生产日期
        </th>        
        <th  width="10%" align="center">
          库存数量
        </th>
         <th  width="10%" align="center">
          长度(米)
        </th>
         <th  width="10%" align="center">
          可用长度(米)
        </th>
         <th  width="10%" align="center">
          合格长度(米)
        </th>
         <th  width="10%" align="center">
          膜片系列
        </th>
        <th  width="10%" align="center">
          膜片型号
        </th>
        
        
</tr>

<%  for(int i=0;i<list.length;i++){ %>
<%
	
	String style5="style5";
	
 %>

  
  <tr class="EOS_table_row">
		 <td align='center' class="<%=style5 %>">
        <%=list[i].getString("batchNo") %>
        </td>

    	<td align='center' class="<%=style5 %>">
    	<%=list[i].getString("storageName") %>
          
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list[i].getString("position") %>
        </td>
        
         <td align='center' class="<%=style5 %>">
        <%=list[i].getString("produceDt") %>
        </td>

    	<td align='center' class="<%=style5 %>">
    	<%=list[i].getString("amount") %>
          
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list[i].getString("outLength") %>
        </td>
        
         <td align='center' class="<%=style5 %>">
        <%=list[i].getString("usefulLength") %>
        </td>

    	<td align='center' class="<%=style5 %>">
    	<%=list[i].getString("qualifidLength") %>
          
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list[i].getString("materClassCode") %>
        </td>
        
        <td align='center' class="<%=style5 %>">
        <%=list[i].getString("materSpecCode") %>
        </td>
       
         </tr>

<% } %>

</table>
</div>

</body>
</html>