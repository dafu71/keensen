Ext.ns("Frame.ui");
Ext.QuickTips.init();
$(document).ready(function() {
	App.clearItem();
	//document.getElementById("login_green_log").style.top=(-$(".wl-login-content").height()-105)+"px";
	//$(".logo1")[0].style.marginLeft=($(document.body).width()/6+15)+"px";
	var pass;
	var checkverify= false;
	// 中英文切换
	var lanEnglish = false
/*	$("#languageChange").click(function(){
		if(lanEnglish){
			$(this).html('<span class="iconfont_update icon-yuyan-zhongwen"></span>&nbsp;中文');
		}else{
			$(this).html('<span class="iconfont_update icon-yuyan-english"></span>&nbsp;English');
		};
		lanEnglish = !lanEnglish;
	});*/
	
	// checkbox初始化
	$('input').iCheck({
		checkboxClass: 'icheckbox_square-green',
		radioClass: 'iradio_square-green',
		increaseArea: '20%' // optional
	});
	
	var cookieloginNm = App.getCookie("loginName");
	var cookietimes = App.getCookie("times");
	var cookiepass = App.getCookie("passWord");
	var container = document.getElementById("vCode");
    var code = new vCode(container, {});
   	$("#verify").hide(); 
	if (cookietimes != undefined && cookietimes.length > 0&& cookietimes>4) {
		$("#verify").show();
		checkverify= true;
	}
	if (cookieloginNm != undefined && cookieloginNm.length > 0) {
		$("#loginName").val(cookieloginNm);
	}
	if (cookiepass != undefined && cookiepass.length > 0) {
		$("#passWord").val(cookiepass);
		$("#pass").val("******")
	}
	
	if (cookiepass) {
		$('input').iCheck('check');
	}
	
	$('#loginName').change(function(){
		$("#pass").val('');
		App.delCookie("loginName");
		App.delCookie("passWord");
	})
	
	$('#pass').change(function(){
		App.delCookie("loginName");
		App.delCookie("passWord");
	})
	
	$('#login').click(function(){
		var _this = this;
		$("#errormsg").html("");
		if ($("#loginName").val().trim() == 0) {
			$("#errormsg").html("请您填写帐号");
			return;
		}

		if ($("#pass").val().length == 0) {
			$("#errormsg").html("请您输入密码"); // + '，<a onclick="" href="#"><font color="white">忘记密码</font></a>？'
			return;
		}
		if(checkverify && !code.verify($("#code").val())){
			$("#errormsg").html("验证码不正确");
			container.click();
			return;
		}
		var reg_pass = /^(?![0-9]+$)(?![a-zA-Z]+$).{6,20}$/;
		var changePassFlg = reg_pass.test($("#pass").val());
		if (!changePassFlg) {
			$("#changePassFlg").val('1');
		} else {
			$("#changePassFlg").val('0');
		}
		
		App.setCookie("loginName", $("#loginName").val().trim());
		
		if ($("#chk").get(0).checked == true) {
			if(App.isNull(App.getCookie("passWord"))) {
				App.setCookie("passWord", md5($("#pass").val()));
			}
			pass = App.getCookie("passWord");
			$("#passChk").val('1');
		} else {
			if(App.isNull(App.getCookie("passWord"))) {
				pass = md5($("#pass").val());
			} else {
				pass = App.getCookie("passWord");
			}
			App.delCookie("passWord");
			$("#passChk").val('0');
		}
		$("#loginName").val($("#loginName").val().trim());
		$("#passWord").val(pass);
		if (cookietimes != undefined && cookietimes.length > 0) {
			App.setCookie("times", parseFloat(App.getCookie("times"))+1);
		}else{
			App.setCookie("times", 1);
		}
		var E = new Ext.state.CookieProvider();
		Ext.state.Manager.setProvider(E);
		var mk = new Ext.LoadMask(document.body, {
				msg : '登录中....',
				removeMask : true
			});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.authenticationnew.biz.ext',
			jsonData : {
				"operator/userid" : $("#loginName").val(),
				"operator/password" : $("#pass").val()
			},
				success : function(response, action) {
					mk.hide();
					var D = Ext.decode(response.responseText);
					if (D.rs == true) {
						/*if(_this.redirect==true){*/
							//location.href = "/default/frame/ui/page/redirect.jsp"
							if (D.message.length > 20) {
								Ext.Msg.show({
									title : "提示",
									icon : Ext.MessageBox.INFO,
									msg : D.message,
									buttons : Ext.Msg.OK,
									fn : function() {
										document.getElementById("linkid").click();
									}
								})
							}else{
								document.getElementById("linkid").click();
								
							}
							
					/*	}else{
							var head = Ext.getCmp("indexLayout").items.itemAt(0).get("head");
							if(head.orgsel){
								head.loadData(head.orgsel);
							}else{
								head.loadData({});
							}
							
							head.doLayout();
							_this.hide();
							
						}				*/
					} else {
						$("#errormsg").html(D.message);
			            return;
						/*Ext.Msg.show({
									title : "提示",
									icon : Ext.MessageBox.ERROR,
									msg : D.message,
									buttons : Ext.Msg.OK,
									fn : function() {
										F.fireEvent("changeimg")
									}
								})*/
					}
				},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	});
});