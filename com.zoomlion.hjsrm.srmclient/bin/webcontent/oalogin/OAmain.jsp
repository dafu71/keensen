<%@page pageEncoding="UTF-8"%>
<%@page import="java.util.HashMap"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>SRM待办</title>
<link rel="stylesheet" href="/default/css/style1/style-customoa.css" type="text/css"/>
<script type="text/javascript">	
	var st1 = new Date();
	var st2 = new Date(); 
		//计算时间差
	function getDatediff(sTime,eTime){
		var divNum = 1000;
		return parseInt((eTime.getTime() - sTime.getTime())/parseInt(divNum));
	}	
</script>
</head>
<%
String retCode=String.valueOf(request.getAttribute("retCode"));
String oaAccount=String.valueOf(request.getAttribute("oaAccount"));
String message=String.valueOf(request.getAttribute("message"));
 %>
<body leftmargin="0" topmargin="0">
<script type="text/javascript">
var msg = '<%= message%>';
	function toMain(){
	    var et1=new Date();
		if (getDatediff(st1,et1)>3){
			st1 = et1;
			if ( msg !== null){
				if (msg.length > 20) {
								if(confirm(msg)){
								var url = "<%=request.getContextPath() %>/srmclient/oalogin/tempDirect.jsp?oaAccount=<%=oaAccount%>";
		    window.location.href=url;
								}else{
								var url = "<%=request.getContextPath() %>/srmclient/oalogin/tempDirect.jsp?oaAccount=<%=oaAccount%>";
		    window.location.href=url;
								}
		}else{
		var url = "<%=request.getContextPath() %>/srmclient/oalogin/tempDirect.jsp?oaAccount=<%=oaAccount%>";
		    window.location.href=url;
		}	
		}else{
		var url = "<%=request.getContextPath() %>/srmclient/oalogin/tempDirect.jsp?oaAccount=<%=oaAccount%>";
		    window.location.href=url;
		}    
		}else{
			return false;
		}
	}
	
	//待阅任务
	function toReadMain(){
	    var et2=new Date();
		if(getDatediff(st2,et2)>3){
			st2 = et2;	
			if(msg !== null){
			if (msg.length > 20) {
								if(confirm(msg)){
								var url = "<%=request.getContextPath() %>/srmclient/oalogin/tempRead.jsp?oaAccount=<%=oaAccount%>";
			window.location.href=url;
								}else{
							var url = "<%=request.getContextPath() %>/srmclient/oalogin/tempRead.jsp?oaAccount=<%=oaAccount%>";
			window.location.href=url;
								}
		}else{
		var url = "<%=request.getContextPath() %>/srmclient/oalogin/tempRead.jsp?oaAccount=<%=oaAccount%>";
			window.location.href=url;
		}	
		}else{
		var url = "<%=request.getContextPath() %>/srmclient/oalogin/tempRead.jsp?oaAccount=<%=oaAccount%>";
			window.location.href=url;
		}	
		}else{
			return false;
		}
	}
	
</script>
<table width="200px" align="left"  border="0" cellspacing="0" cellpadding="0" height="58">
	<% 
	if("-1".equals(retCode)){
	%>
	<tr>
			<td title="请联系SRM管理员" align="left" valign="top">SRM提示： <br>
			<font style="color: red" size="3">&nbsp;&nbsp;账号不存在或用户状态非正常!</font>		
			</td>
		</tr>
	<%
	}else if("-4".equals(retCode)){
	%>
	<tr>
			<td title="请联系SRM管理员" align="left" valign="top">SRM提示： <br>
			<font style="color: red" size="3">&nbsp;&nbsp;用户已挂起，可通过点击UMP链接进行帐号解锁!</font>
			</td>
		</tr>
	<%
	}else if("-3".equals(retCode)){
	%>
	<tr>
			<td title="请联系SRM管理员" align="left" valign="top">SRM提示： <br>
			<font style="color: red" size="3">&nbsp;&nbsp;用户已锁定，可通过点击UMP链接进行帐号解锁!</font>
			</td>
		</tr>
	<%
	}
	else if("-2".equals(retCode)){
	%>
	<tr>
			<td title="请联系SRM管理员" align="left" valign="top">SRM提示： <br>
			<font style="color: red" size="3">&nbsp;&nbsp;用户为注销状态!</font>
			</td>
		</tr>
		<%
	}
	else if("-5".equals(retCode)){
	%>
	<tr>
			<td title="请联系SRM管理员" align="left" valign="top">SRM提示： <br>
			<font style="color: red" size="3">&nbsp;&nbsp;用户验证信息错误!</font>
			</td>
		</tr>
	<%
	}else if("0".equals(retCode)){
	HashMap obj=(HashMap)request.getAttribute("data");
    HashMap objread=(HashMap)request.getAttribute("readData");
    int workCount=-1;
    int readCount=-1;
    if(obj.get("COUNT")!=null){
    	workCount=Integer.parseInt(obj.get("COUNT").toString());
    }
    if(objread.get("COUNT")!=null){
    	readCount=Integer.parseInt(objread.get("COUNT").toString());
    }
	%>	
		<%	
		if(workCount==0 && readCount==0){
		%>	
		<tr>
					<td title="点击进入" align="left" valign="top"><img src="<%=request.getContextPath() %>/images/dot6.jpg">&nbsp;&nbsp;<a href="#" class="link" onclick="toMain();">
					<font style="color: blue">环境供应商管理系统</font> </a></td>
				</tr>
		<%
		}else if(workCount>0){
		%>	
		<tr>
			<td nowrap align="left" valign="top" title="点击进入"><img src="<%=request.getContextPath() %>/images/dot6.jpg">&nbsp;&nbsp;<a href="#" class="link" onclick="toMain();">
			SRM待办任务(${data.COUNT})</a></td>
		</tr>
		<%
		}else if(readCount>0){
		%>	
		<tr>
			<td nowrap align="left" valign="top" title="点击进入"><img src="<%=request.getContextPath() %>/images/dot6.jpg">&nbsp;&nbsp;<a href="#" class="link" onclick="toReadMain();">
			SRM待阅任务(${readData.COUNT})</a></td>
		</tr>	
		<%
		}
	}
	 %>	
</table>
</body>
</html>

