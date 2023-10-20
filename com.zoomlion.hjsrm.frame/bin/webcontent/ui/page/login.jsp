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
<script type="text/javascript" src="frame/ui/jslib/ext_340/adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="frame/ui/jslib/ext_340/ext-all.js"></script>
<script type="text/javascript" src="frame/ui/jslib/login.js"></script>
<title><%=sysname%>-登录</title>
<script>

var hasvcode = <%= hasvcode%>;
var remoteIP ='<%=remoteIP %>';
Ext.onReady(function() {
var logonwin =  new Frame.ui.LoginWindow({
						title:'系统登录',
                        x:742,
						width : 410,
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
</script>
</head>
<body style="background-image:url(frame/ui/img/cover_ks2.jpg);background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;
background-size: 100% 100%;">
<div style="display:none"><a href="/default/frame/ui/page/index.jsp" id="linkid">index</a></div>
</body>
</html>
