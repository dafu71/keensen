/*******************************************************************************
 * 版权所有： 中联重科环境产业公司
 * 描 述： 修改密码策略
 * 创建日期： 2014-9-18
 * 补丁编号： G3_P_20140915_01_249 
 * 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20140915_01_249 吕俊涛   2014-9-18  集团
//
// =================================================================
Ext.ns("Frame.ui");
Frame.ui.VerifyCodeField=Ext.extend(Ext.form.TriggerField,{imageHeight:20,length:4,type:"number",src:"common/jsp/codeImage.jsp",onRender:function(B,A){this.doc=Ext.isIE?Ext.getBody():Ext.getDoc();Ext.form.TriggerField.superclass.onRender.call(this,B,A);this.el.width=100,this.wrap=this.el.wrap({cls:"x-form-field-wrap x-form-field-trigger-wrap"});this.trigger=this.wrap.createChild(this.triggerConfig||{tag:"img",src:this.src+"?name=vcode&imageHeight=21&type="+this.type+"&length="+this.length,alt:"",cls:"x-trigger-verifyimg"});this.initTrigger();if(!this.width){this.wrap.setWidth(this.el.getWidth()+this.trigger.getWidth())}},afterRender:function(){Frame.ui.VerifyCodeField.superclass.afterRender.call(this);this.trigger.on("click",function(){this.trigger.dom.src=this.src+"?name=vcode&imageHeight=21&type="+this.type+"&length="+this.length+"&timestamp="+Math.random()},this);this.on("changeimg",function(){this.trigger.dom.src=this.src+"?name=vcode&imageHeight=21&type="+this.type+"&length="+this.length+"&timestamp="+Math.random()},this)}});Ext.reg("verifycodefield",Frame.ui.VerifyCodeField);
Ext.QuickTips.init();

Frame.ui.LoginWindow = Ext.extend(Ext.Window, {
	title : "系统登录",
	draggable : false,
	resizable : false,
	closable : false,
	constrain : true,
	hasvcode:true,
	remoteIP:"",
	redirect:true,
	layout : "fit",
	modal : true,
	iconCls : "icon-lock_key",
	initComponent : function() {
		this.buildLoginPanel();
		this.buildButtons();
		
		Frame.ui.LoginWindow.superclass.initComponent.call(this);
		this.on("afterrender", function() {
			var B = ' <div><img border="0" width="420" height="70" src="frame/ui/img/login_ks.jpg" /></div';
			//刘鑫：2014.11.11更改登录界面的图片
			Ext.DomHelper.insertFirst(this.loginpanel.getEl(), B)
		}, this)
	},
	buildLoginPanel : function() {
		this.accountField = new Ext.form.TextField({
					fieldLabel : "帐号",
					name : "operator/userid",
					id : "userid",
					msgTarget : "title",
					blankText : "帐号不能为空,请输入!",
					maxLength : 20,
					maxLengthText : "账号的最大长度为20个字符",
					allowBlank : false,
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								this.login()
							}
						},
						afterrender:function(S){
					   		S.focus(false,500);
						}
					}
					
				});
		this.pwdField = new Ext.form.TextField({
					fieldLabel : "密码",
					name : "operator/password",
					id : "password",
					inputType : "password",
					msgTarget : "title",
					value : '',//测试用
					blankText : "密码不能为空,请输入!",
					minLength : 6,
					maxLength : 100,
					minLengthText : '最小长度为6个字符，请检查...',
					maxLengthText : '最大长度为100个字符，请检查...',
					allowBlank : false,
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								this.login()
							}
						}
					}
				});
		this.verifycode = new Frame.ui.VerifyCodeField({
					fieldLabel : "验证码",
					id : "vcode",
					xtype : "verifycodefield",
					name : "operator/vcode",
					msgTarget : "title",
					allowBlank : false,
					blankText : "请输入验证码!",
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								this.login()
							}
						}
					}
				});
		this.checkSave = new Ext.form.CheckboxGroup({
					xtype : "checkboxgroup",
					columns : 2,
					id : "checkboxgroup1",
					items : [{
								boxLabel : "保存账号",
								name : "save",
								id : "save"
							}]
				});
		var items = [];
		if(hasvcode){
			items = [{name:'operator/remoteIP',hidden:true,value:this.remoteIP},this.accountField, this.pwdField,this.verifycode,this.checkSave];
		}else{
			items = [{name:'operator/remoteIP',hidden:true,value:this.remoteIP},this.accountField, this.pwdField,this.checkSave];
		}
		this.loginpanel = new Ext.Panel({
					border : false,
					items : {
						xtype : "tabpanel",
						activeTab : 0,
						height : 180,
						border : false,
						items : [{
							title : "身份认证",
							xtype : "form",
							id : "loginForm",
							defaults : {
								width : 240
							},
							bodyStyle : "padding:20 0 0 50",
							defaultType : "textfield",
							labelWidth : 50,
							items : items
						}]
					}
				});
		this.items = this.loginpanel
	},
	buildButtons : function() {
		this.buttons = [{
					text : "登录",
					scope : this,
					handler : function() {
						var B = Ext.getCmp("loginForm");
						if (B.getForm().isValid()) {
							this.login()
						}
					}
				}, {
					text : "清除",
					scope : this,
					handler : function() {
						var B = Ext.getCmp("loginForm");
						B.getForm().reset()
					}
				}]
	},
	login : function() {
		var _this = this;
		var E = new Ext.state.CookieProvider();
		Ext.state.Manager.setProvider(E);
		if (Ext.getCmp("save").checked) {
			E.set("save", true);
			E.set("uid", Ext.getCmp("userid").getValue())
		} else {
			E.set("uid", "");
			E.set("save1", false)
		}
		var D = Ext.getCmp("loginForm").getForm();
		var F = this.verifycode;
		if (D.isValid()) {
		D.submit({
				method : "POST",
				url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.authentication.biz.ext',
				waitTitle : "操作提示",
				waitMsg : "正在验证用户身份信息.....",
				success : function(C, B) {
					var D = B.result;
					if (D.rs == true) {
						if(_this.redirect==true){
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
							
						}else{
							var head = Ext.getCmp("indexLayout").items.itemAt(0).get("head");
							if(head.orgsel){
								head.loadData(head.orgsel);
							}else{
								head.loadData({});
							}
							
							head.doLayout();
							_this.hide();
							
						}				
					} else {
						Ext.Msg.show({
									title : "提示",
									icon : Ext.MessageBox.ERROR,
									msg : D.message,
									buttons : Ext.Msg.OK,
									fn : function() {
										F.fireEvent("changeimg")
									}
								})
					}
				}
			})
		}
	}
});