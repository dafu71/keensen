Ext.ns("Frame.ui");
Ext.QuickTips.init();
$(document).ready(function() {	
	$("#loginName").val('');
	$("#pass").val('');
	$('#login').click(function(){
		var _this = this;
		if ($("#loginName").val().length == 0) {
			return;
		}
		if ($("#pass").val().length == 0) {
			return;
		}
		var E = new Ext.state.CookieProvider();
		Ext.state.Manager.setProvider(E);
	    $('#loading').css("display","");
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.authenticationnew.biz.ext',
			jsonData : {
				"operator/userid" : $("#loginName").val(),
				"operator/password" : $("#pass").val()
			},
				success : function(response, action) {
					$('#loading').css("display","none");
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
						if(D.message=="用户不存在"){
						$("#error").fadeOut('fast', function(){
                              $("#error").css('top', '27px');
                               });
                         $("#loginName").val('');
                         $("#error").fadeIn('fast', function(){
                         $("#error").parent().find('.username').focus();
                         });
                             return false;
						}else if(D.message=="用户名或者密码错误"){
							$("#error").fadeOut('fast', function(){
                              $("#error").css('top', '96px');
                               });
                         $("#pass").val('');
                         $("#error").fadeIn('fast', function(){
                         $("#error").parent().find('.password').focus();
                         });
                             return false;
                         }else{
							return
						}
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
			}
		});
	});
});