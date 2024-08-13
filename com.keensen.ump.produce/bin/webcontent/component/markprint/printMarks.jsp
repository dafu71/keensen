<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@include file="/common/common.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2024-07-10 10:44:02
  - Description:
-->
<head>
<title>jsp auto create</title> 
</head>
<body>


<form id="form1" action="com.keensen.ump.produce.printMarks.flow"  method="post">
	<h:hidden name="_eosFlowKey" property="_eosFlowKey"></h:hidden>
	
		
	<table cellPadding="0" style="width:80%" class="pg_result" align="left" 

cellSpacing="1" border="1">
  		<tr bgcolor="#99FFFF"> 
    		<td colspan="4" align="center">输入变量定义</td>
	    </tr>
	    <tr bgcolor="#CCCCFF"> 
	    	<td style="width:10%">变量名称</td>
	    	<td style="width:10%">变量类别</td>
	    	<td style="width:10%">变量类型</td>
	    	<td style="width:25%">变量值</td>
	    </tr>
	    
	    
  </table>
  <input id="action" type="hidden" name="_eosFlowAction" value="action1">
  
  	<script type="text/javascript">
		function selectAction(action){			
			document.getElementById("action").value=action;
			document.getElementById("form1").submit();
		}		
	</script>
	
  <input type="button" align="left" value="提交"  onclick="selectAction('action1');">
</form>




</body>
</html>
