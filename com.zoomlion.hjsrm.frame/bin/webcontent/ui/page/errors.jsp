<%@page pageEncoding="UTF-8"%>
<%
		com.eos.data.datacontext.IUserObject user = null;
		if(com.eos.data.datacontext.DataContextManager.current().getMUODataContext()==null){
			user = (com.eos.data.datacontext.IUserObject)com.eos.data.datacontext.DataContextManager.current().getSessionCtx().get(com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);
		}else{
		    user = com.eos.data.datacontext.DataContextManager.current().getMUODataContext().getUserObject();
		}
%>

<html>
<html>
<head>
<link rel="stylesheet" href="/default/css/style1/style-custom.css" type="text/css"/>
<title>无访问权限</title>
</head>
<body>
<div style="padding-left:200px;padding-top:100px;font-family: '黑体';font-size: 10pt;font-weight:500;color:red"><%=user.getUserName() %>无该资源访问权限，请联系管理员授权</div>
</body>
</html>
