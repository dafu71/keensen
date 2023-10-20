<%@page pageEncoding="UTF-8"%>
<html>
<html>
<head>

<title>系统登录</title>
<script>
if(typeof(_logonwin)!="undefined"){
	_logonwin.setTitle("<font color=red>已有其他用户使用现有账号登录</font>");
	if(!_logonwin.isVisible()){
		_logonwin.accountField.value=userid;
		_logonwin.pwdField.reset();
		_logonwin.accountField.readOnly=true;
		_logonwin.show();
	}
	
}else{
	window.location.href="/default/frame/ui/page/login.jsp";
}
</script>
</head>
<body>
</body>
</html>
