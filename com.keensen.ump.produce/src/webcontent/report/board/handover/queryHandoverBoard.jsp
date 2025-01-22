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
	String title = boardDate.replace("-",".") + "分析室交接班看板";
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
<td align='center' colspan=5 class="style6">
          	<%=title %>
        </td>
</tr>
 <tr>
        <th width="20%" align="center" class="style5">
          	班次
        </th> 
        <th width="20%" align="center" class="style5">
          涂膜C线
        </th>        
        <th  width="20%" align="center" class="style5">
          涂膜D线
        </th>
        <th width="20%" align="center" class="style5">
          涂膜E线
        </th>
         <th width="20%" align="center" class="style5">
          涂膜F线
        </th>
        
        
        
</tr>

<%  for(int i=0;i<list.length;i++){ %>
<%
	String style5="style4";	
	String classes=null == list[i].getString("classes")?"":list[i].getString("classes");
	String C=null == list[i].getString("C")?"":list[i].getString("C");
	String D=null == list[i].getString("D")?"":list[i].getString("D");
	String E=null == list[i].getString("E")?"":list[i].getString("E");
	String F=null == list[i].getString("F")?"":list[i].getString("F");	
	
 %>

  <% if(i%2==0){ %>
  <tr class="EOS_table_row" style="height: 150px;">
  <% }else{ %>
  <tr class="" style="height: 150px;">
  <% } %>
  
    	<td align='center' class="<%=style5 %>"  >
   		<%=classes %>
          
        </td>
        <td align='center' class="<%=style5 %>" >
        <%=C %>
        </td>
        <td align='center' class="<%=style5 %>" >
        <%=D %>
        </td>
         <td align='center' class="<%=style5 %>" >
        <%=E %>
        </td>
         <td align='center' class="<%=style5 %>"  >
        <%=F %>
        </td>
        

         </tr>
<% } %>

</table>
</div>

</body>
</html>