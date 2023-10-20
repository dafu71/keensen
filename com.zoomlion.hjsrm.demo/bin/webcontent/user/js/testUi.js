Ext.onReady(function() {
	var f = new Ext.form.FormPanel({
				renderTo : "testPan",
				title : "用户信息录入框",
				url : "person.ejf",			
				labelWidth : 60,
				labelAlign : "right",
				frame : true,
				defaults : {
					xtype : "textfield",
					width : 180
				},
				items : [{
							name : "username",
							fieldLabel : "姓名"
						}, {
							name : "password",
							fieldLabel : "密码",
							inputType : "password"
						}, {
							name : "email",
							fieldLabel : "电子邮件"
						}, {
							xtype : "textarea",
							name : "intro",
							fieldLabel : "简介"
						}],
				buttons : [{
							text : "提交",
							handler : function() {
								f.form.submit({
											waitTitle : "请稍候",
											waitMsg : "正在提交表单数据，请稍候。。。。。。"
										});
							}
						}, {
							text : "重置",
							handler : function() {
								//f.form.reset();
								Ext.MessageBox.show({
											title : "标题",
											msg : "确定处理吗？",
											buttons : Ext.MessageBox.YESNOCANCEL,
											fn : function(but) {
												Ext.MessageBox.alert('你点击了:' + but);
											}
										});
										Ext.get("testPan").setOpacity(1);
							}
						},
						{
							text : "透明",
							handler : function() {
								//Ext.get("testPan").setOpacity(0.5);
								
								//Ext.get("c4").setVisibilityMode(Ext.Element.DISPLAY);
								//Ext.get("c4").setVisible(false);
								Ext.get("c4").update("ffffffffffffffffffffffffffff");
							}
						}
						]

			})
});