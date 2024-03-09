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
	DataObject[] list2 = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"list2");
	int cnt2 = list2.length;
	

	//System.out.println(list2);	
%>

<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>底膜库存</title>
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
        <th width="15%" align="center">
          	基地
        </th> 
        <th width="15%" align="center">
          生产日期
        </th>        
        <th  width="10%" align="center">
          生产线别
        </th>
        <th width="10%" align="center">
          底膜类型
        </th>
        <th  width="10%" align="center">
           底膜泵速
        </th>
         <th width="15%" align="center">
          无纺布（供应商）
        </th>        
        <th  width="10%" align="center">
                底膜批号
        </th>
        <th  width="15%" align="center">
         结存
        </th>
        
</tr>
<% if(flag.equals("1") || flag.equals("2")){ %>
<%  for(int i=0;i<list.length;i++){ %>
<%
	String diff = list[i].getString("diff");
	int diff2 =Integer.valueOf(diff);
	String style5="";
	if(diff2>15){
		style5="style5";
	}else{
		style5="style4";
	}
 %>

  <% if(i%2==0){ %>
  <tr class="EOS_table_row">
  <% }else{ %>
  <tr class="">
  <% } %>
  <% if(i==0){ %>
  		<td align='center' rowspan=<%=cnt %> class="style4">
          	老基地
        </td>
  <% } %>
    	<td align='center' class="<%=style5 %>">
    	<%=list[i].getString("productDt") %>
          
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list[i].getString("line") %>
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list[i].getString("dimoType") %>
        </td>
         <td align='center' class="<%=style5 %>">
        <%=list[i].getString("pumpSpeed") %>
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list[i].getString("supName") %>
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list[i].getString("dimoBatchNo") %>
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list[i].getString("residue") %>
        </td>
         </tr>
<% } %>
<% } %>
<% if(flag.equals("1") || flag.equals("3")){ %>
<%  for(int i=0;i<list2.length;i++){ %>
<%
	String diff = list2[i].getString("diff");
	int diff2 =Integer.valueOf(diff);
	String style5="";
	if(diff2>15){
		style5="style5";
	}else{
		style5="style4";
	}
 %>
  <% if(i%2==0){ %>
  <tr class="EOS_table_row">
  <% }else{ %>
  <tr class="">
  <% } %>
  <% if(i==0){ %>
  		<td align='center' rowspan=<%=cnt2 %> class="style4">
          	新基地
        </td>
   <% } %>
    	<td align='center' class="<%=style5 %>">
          <%=list2[i].getString("productDt") %>
        </td>
        <td align='center' class="<%=style5 %>">
         <%=list2[i].getString("line") %>
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list2[i].getString("dimoType") %>
        </td>
         <td align='center' class="<%=style5 %>">
        <%=list2[i].getString("pumpSpeed") %>
        </td>
		<td align='center' class="<%=style5 %>">
        <%=list2[i].getString("supName") %>
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list2[i].getString("dimoBatchNo") %>
        </td>
        <td align='center' class="<%=style5 %>">
        <%=list2[i].getString("residue") %>
        </td>
         </tr>
<% } %>
<% } %>
</table>
</div>

</body>
</html>