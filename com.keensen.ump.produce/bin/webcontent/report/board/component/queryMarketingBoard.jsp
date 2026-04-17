<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%--<%@include file="/frame/ui/page/include.jsp"%>--%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>
<html>
<%
	com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request.getSession().getAttribute(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
  
	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
			
	String boardDate = (String)XpathUtil.getObjectByXpath(rootObj,"boardDate");		
	String title = boardDate + "销售订单生产进度看板";
	DataObject[] list = (DataObject[]) XpathUtil.getObjectByXpath(rootObj,
			"list");
	
	String uid = userObject.getUserId();
	double speed = uid.indexOf("public")>-1?1:0.1;
	
	

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
.style4 {font-family: "仿宋";font-size:12pt;}
.style5 {color:red;font-family: "仿宋";font-size:12pt;height: 60px;}
.style6 {font-family: "仿宋";font-size:18pt;font-weight:bold;}
.style5b {color:red;font-family: "仿宋";font-size:12pt;}
 
 <%--thead th {
    position: sticky; /* 固定表头 */
    top: 0; /* 固定在顶部 */
    background-color: white; /* 背景色与页面背景相同，或使用其他颜色以确保清晰可见 */
    z-index: 1000; /* 确保表头在其他内容之上 */
  }--%>
-->
    </style>
    
</head>

<script type="text/javascript">
	(function(){
		setInterval(function(){ location.reload(true); }, 60000);
	})();
	
	
</script> 

<body>
<div align="center" style="position: fixed; top: 0;z-index: 1000;" id="tableHead">
<table border="1" width="100%" class="EOS_table" id="tableHead" >
<thead>
<tr>
<th align='center' colspan=14 class="style6">
          	<%=title %>
        </th>
</tr>
 <tr>
        <th width="16%" align="center" class="style5b">
         订单编号
        </th> 
        <th width="10%" align="center" class="style5b">
          卷膜型号
        </th>        
        <th  width="12%" align="center" class="style5b">
          干/湿膜
        </th>
        <th width="5%" align="center" class="style5b">
          需生产入库数量（支）
        </th>
         <th width="5%" align="center" class="style5b">
          已裁叠膜数量（支）
        </th>
        <th width="5%" align="center" class="style5b">
         已卷膜数量+改入订单数量（支）
        </th>
        <th width="5%" align="center" class="style5b">
         已切边气检数量（支）
        </th> 
        <th width="5%" align="center" class="style5b">
          已贴标签数量（支）
        </th>        
        <th  width="5%" align="center" class="style5b">
          已绕丝数量（支）
        </th>
        <th width="5%" align="center" class="style5b">
          已请检数量（支）
        </th>
         <th width="5%" align="center" class="style5b">
          已请检干膜总数量(支)
        </th>
         <th width="5%" align="center" class="style5b">
           已请检湿膜总数量(支)
        </th>
         <th width="5%" align="center" class="style5b">
          已生产入库总数量（支）
        </th>
        <th width="12%" align="center" class="style5b">
        计划入库时间
        </th>
        
        
        
</tr>
</thead>
</table>
</div>
<div align="center" style="width:100%;height:100%;overflow-y: auto; margin-top: 1px;" id="scrollable">
<div style="position: absolute; width:100%; white-space: nowrap;">
<table border="1" width="100%" class="EOS_table">

<% for(int j=0;j<5;j++){ %>
<%  for(int i=0;i<list.length;i++){ %>
<%
	String style5="style4";	
	
	
 %>

  <% if(i%2==0){ %>
  <tr class="EOS_table_row" style="height: 60px;">
  <% }else{ %>
  <tr class="" style="height: 60px;">
  <% } %>
  
    	<td width="16%" align='center' class="<%=style5 %>" style="background-color: #<%=list[i].getString("mystyle") %>" >
   		<%=list[i].getString("orderNo") %>
          
        </td>
        <td width="10%" align='center' class="<%=style5 %>" style="background-color: #<%=list[i].getString("mystyle") %>">
        <%=list[i].getString("jmSpecName") %>
        </td>
        <td width="12%" align='center' class="<%=style5 %>" style="background-color: #<%=list[i].getString("mystyle") %>">
        <%=list[i].getString("dryWet").substring(0,7) %>
        </td>
         <td width="5%" align='center' class="<%=style5 %>" style="background-color: #<%=list[i].getString("mystyle") %>">
        <%=list[i].getString("prodAmount") %>
        </td>
         
        <td width="5%" align='center' class="<%=style5 %>"  >
   		<%=list[i].getString("cdmAmount") %>
          
        </td>
        <td width="5%" align='center' class="<%=style5 %>" >
        <%=list[i].getString("jAmount") %>
        </td>
        <td width="5%" align='center' class="<%=style5 %>" >
        <%=list[i].getString("qjAmount") %>
        </td>
         <td width="5%" align='center' class="<%=style5 %>" >
        <%=list[i].getString("qjLabelAmount") %>
        </td>
         <td width="5%" align='center' class="<%=style5 %>"  >
        <%=list[i].getString("rsAmount") %>
        </td>
         <td width="5%" align='center' class="<%=style5 %>" >
        <%=list[i].getString("chkAmount") %>
        </td>
        <td width="5%" align='center' class="<%=style5 %>" >
        <%=list[i].getString("dryAmount") %>
        </td>
        <td width="5%" align='center' class="<%=style5 %>" >
        <%=list[i].getString("wetAmount") %>
        </td>
        <td width="5%" align='center' class="<%=style5 %>" >
        <%=list[i].getString("deliveryConfirmAmount") %>
        </td>
         <td width="12%" align='center' class="<%=style5 %>" >
        <%=list[i].getString("demandStockDate") %>
        </td>
        
        

         </tr>
<% } %>
<% } %>
</table>
</div>
</div>
</body>
<script type="text/javascript">
	
	function scrollText() {
	    var elem = document.getElementById("scrollable");
	    var tableHead = document.getElementById("tableHead");
	    var text = elem.querySelector('div');
	    var textHeight = text.offsetHeight;
	    var elemHeight = elem.offsetHeight;
	    var speed = <%=speed %>; // 速度，可以根据需要调整
	    var position = tableHead.offsetHeight -125; // 初始位置在文本宽度之外，使其开始滚动
	    var id = setInterval(frame, 10); // 每10毫秒调用一次frame函数
	    function frame() {
	      if (position < -textHeight+tableHead.offsetHeight) { // 如果文本已经完全滚动出去，重置位置
	        position = tableHead.offsetHeight -125;
	      } else { // 否则，继续滚动
	        position = position - speed;
	      }
	      text.style.transform = "translateY(" + position + "px)"; // 更新文本位置
	    }
  	}
  	scrollText(); // 调用函数开始滚动
</script> 
</html>