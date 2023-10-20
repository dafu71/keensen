<%@page pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="com.zoomlion.hjsrm.frame.auth.config.FrameConfig"%>
<%@page import="com.zoomlion.hjsrm.core.common.Common"%>
<html>
<html>
<head>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";

	Object theme = session.getAttribute("theme");
	session.setAttribute("theme", theme == null ? "default" : theme);
	String remoteIP =Common.getClientIpAddr(request);
	String sysname = Common.getConfigValue("SY_SYSNAME");
	String hasvcode = FrameConfig.getFrameConfigValue("frame-config", "login-config", "use_verify_code");
%>
<!-- extjsCommon start -->
<base href="<%=basePath%>">
<link rel="stylesheet" type="text/css" href="frame/ui/jslib/ext_340/resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="frame/ui/css/icons/icons.css" />
        <link type="text/css" href="frame/ui/images/favicon.ico" rel="shortcut icon" />
		<link type="text/css" href="frame/ui/css/common/bootstrap.min.css" rel="stylesheet" />
		<link type="text/css" href="frame/ui/css/common/common.css" rel="stylesheet" />
		<link type="text/css" href="frame/ui/css/login.css" rel="stylesheet" />
		<link rel="stylesheet" type="text/css" href="frame/ui/css/common/iconfont.css">
		<link rel="stylesheet" type="text/css" href="frame/ui/css/common/iconfont_update.css">
		<link href="frame/ui/jslib/plugins/icheck-1.0.2/css/_all.css" rel="stylesheet" />
<script src="frame/ui/jslib/newjquery/checkCode.js"></script> 
<script type="text/javascript" src="frame/ui/jslib/ext_340/adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="frame/ui/jslib/ext_340/ext-all.js"></script>
<script src="frame/ui/jslib/newjquery/jquery-2.2.0.min.js"></script>
		<script type="text/javascript" src="frame/ui/jslib/newjquery/bootstrap.min.js"></script>
		<script type="text/javascript" src="frame/ui/jslib/plugins/icheck-1.0.2/icheck.min.js"></script>
		<script type="text/javascript" src="frame/ui/jslib/newjquery/common.js"></script>
		<script type="text/javascript" src="frame/ui/jslib/newjquery/md5.js"></script>
		<script type="text/javascript" src="frame/ui/jslib/loginnew.js"></script>
<%--<script type="text/javascript" src="frame/ui/jslib/login.js"></script>--%>
<title><%=sysname%>-登录</title>
<%--<script>

var hasvcode = <%= hasvcode%>;
var remoteIP ='<%=remoteIP %>';
Ext.onReady(function() {
var logonwin =  new Frame.ui.LoginWindow({
                        x:742,
						width : 400,
						height : 300,
						hasvcode:hasvcode,
						remoteIP:remoteIP
});
					
Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

		var save = Ext.state.Manager.get("save");
		
		if (typeof(save)== "undefined"){
			save1 = false;
		}
 		var uid =  Ext.state.Manager.get("uid");
			if (typeof(uid)== "undefined"){
				uid = '';
 			}
 		var pwd =  Ext.state.Manager.get("pwd");
			if (typeof(pwd)== "undefined"){
				pwd = '';
 			}
		var verifycode =  Ext.state.Manager.get("verifycode");
			if (typeof(verifycode)== "undefined"){
				verifycode = '';
 			}
		 var checkboxGroup=Ext.getCmp('checkboxgroup1');	
		 var cbitems = checkboxGroup.items;
		 Ext.apply(cbitems[0],{checked: save});
			if(uid!='')
				Ext.getCmp('userid').setValue(uid);
			if(pwd!='')
				Ext.getCmp('password').setValue(pwd);
			if(verifycode!='')
				Ext.getCmp('vcode').setValue(verifycode);
			
			logonwin.show();
			
			Ext.EventManager.onWindowResize (function(){
			if(logonwin){
       			 logonwin.center();
   			 }
});
		});
</script>--%>
</head>
<body class="wl-bg-white"style="background-image:url(frame/ui/img/fengmian.jpg);background-position: 100%100% left top">

		<div class="wl-login-content">
			<div class="wl-login-widget wl-bg-white">
				<header class="text-center">
					<h1>账号登录</h1>
					<div class="green-line"></div>
				</header>
				<div id="errormsg" class="errorMsg">${retVal.msg.msgContent}</div>
				<form class="wl-login-form" name="loginform" id="form" method="post" autocomplete="off" action="logincheck.do" onSubmit="return false;">
					<div class="form-group">
						<div class="input-group">
							<div class="input-group-addon">
								<img class='' src='frame/ui/images/user.svg'>
							</div>
							<input type="text" id="loginName" name="loginName" class="form-control" placeholder="请输入账号">
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<div class="input-group-addon"><span class="iconfont icon-password"></span></div>
							<input type="text" name="password" onfocus="this.type='password'" id="pass" class="form-control" placeholder="请输入密码">
							<input type="hidden" id="passWord" name="passWord" class="form-control">
							<input type="hidden" id="changePassFlg" name="changePassFlg" class="form-control">
						</div>
					</div>
					<div class="form-group" id="verify">
						<div class="input-group">
							<input type="text" id="code" name="code" class="form-control" placeholder="请输入验证码" style="width: 109px;margin-left: 25px;">
							<div id="vCode" class="form-control" style="width:90px;"></div>
						</div>
					</div>
					<div class="form-group">
						<div class="checkbox">
							<input type="checkbox" id="chk" name="chk" />
							<label for="chk">十天内自动登录</label>
							<input type="hidden" id="passChk" name="passChk" class="form-control">
							<a href="" ><div class="pull-right forgetPwd">忘记密码?</div></a>
						</div>
					</div>
					<div class="form-group">
						<button id="login" type="submit" class="wl-btn wl-btn-blue">登录</button>
						<button id="login" type="submit" class="wl-btn wl-btn-blue">注册</button>
					</div>
				</form>
			</div>
		</div>
		
<div style="display:none"><a href="/default/frame/ui/page/index.jsp" id="linkid">index</a></div>
</body>
</html>
