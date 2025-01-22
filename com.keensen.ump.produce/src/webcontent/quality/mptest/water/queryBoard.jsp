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
	String title = flag.equals("1")?"分析室测试任务看板":"产线配料任务看板";
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
		setInterval(function(){ location.reload(true); }, 60000);
	})();
</script> 

<body>
<div align="center" >
<table border="1" width="100%" class="EOS_table">
<tr>
<td align='center' colspan=6 class="style6">
          	<%=title %>
        </td>
</tr>
 <tr>
        <th width="17%" align="center" class="style5">
          	物料名称
        </th> 
        <th width="17%" align="center" class="style5">
          生产线
        </th>        
        <th  width="17%" align="center" class="style5">
          膜片型号
        </th>
        <th width="17%" align="center" class="style5">
          物料批号
        </th>
         <th width="17%" align="center" class="style5">
          流水号
        </th>
        <th  width="15%" align="center" class="style5">
           当前步骤
        </th>
        
        
</tr>

<%  for(int i=0;i<list.length;i++){ %>
<%
	String style5="style4";	
 %>

  <% if(i%2==0){ %>
  <tr class="EOS_table_row">
  <% }else{ %>
  <tr class="">
  <% } %>
  
    	<td align='center' class="<%=style5 %>" style="color:<%=list[i].getString("color") %>">
   <%=list[i].getString("materName") %>
          
        </td>
        <td align='center' class="<%=style5 %>" style="color:<%=list[i].getString("color") %>">
        <%=list[i].getString("line") %>
        </td>
        <td align='center' class="<%=style5 %>" style="color:<%=list[i].getString("color") %>">
        <%=list[i].getString("mptype") %>
        </td>
         <td align='center' class="<%=style5 %>" style="color:<%=list[i].getString("color") %>">
        <%=list[i].getString("batchNo") %>
        </td>
         <td align='center' class="<%=style5 %>"  style="color:<%=list[i].getString("color") %>">
        <%=list[i].getString("code") %>
        </td>
        <td align='center' class="<%=style5 %>"  style="color:<%=list[i].getString("color") %>"zzzzzzzzzzzzzzzzz>
        <%=list[i].getString("stepName") %>
        </td>

         </tr>
<% } %>

</table>
</div>

</body>
</html>