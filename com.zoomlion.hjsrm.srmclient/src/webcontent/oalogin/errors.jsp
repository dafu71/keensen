<%@page pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%
		com.eos.data.datacontext.IUserObject user = null;
		if(com.eos.data.datacontext.DataContextManager.current().getMUODataContext()==null){
			user = (com.eos.data.datacontext.IUserObject)com.eos.data.datacontext.DataContextManager.current().getSessionCtx().get(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
		}else{
		    user = com.eos.data.datacontext.DataContextManager.current().getMUODataContext().getUserObject();
		}
%>
<html>
<head>
<link rel="stylesheet" href="/default/css/style1/style-customoa.css" type="text/css"/>
<title>无访问权限</title>
</head>
<body topmargin="0" leftmargin="0">
<table width="200px" align="left" border="0" cellspacing="0" height="60"
	cellpadding="0">        
          <tr>
          <td align="left"  width="100%" valign="top">            
            <font style="color: red;font-weight:bold; size=3">&nbsp;&nbsp;<%=user.getUserName()%>无SRM访问操作权限!</font>
          </td>
          </tr>        
</table>
</body>
</html>
