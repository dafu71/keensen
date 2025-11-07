com.keensen.ump.produce.component.produce.ConfirmCodeMgr.prototype.initEvent = function() {

	var _this = this;

}

com.keensen.ump.produce.component.produce.ConfirmCodeMgr.prototype.onSave = function() {

	var _this = this;
	var ifChange = this.inputPanel.ifChange.getValue();

	if (this.inputPanel.form.isValid()) {
		var oldcode = this.inputPanel.oldcode.getValue();
		var newcode = this.inputPanel.newcode.getValue();
		var newcode2 = this.inputPanel.newcode2.getValue();

		if (newcode != newcode2) {
			Ext.Msg.alert("系统提示", "确认的密码不一致，请重新输入！");
			return;
		}

		this.inputPanel.form.submit({
					method : "POST",
					url : this.inputPanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {
							var err = D.err;
							if (err == 0) {
								Ext.MessageBox.alert("操作提示", "保存成功!",
										function() {
											_this.inputPanel.form.reset();
										})
							}else{
								var msg = D.msg;
								Ext.MessageBox.alert("操作提示", msg);
							}
						}
					},
					failure : function(C, B) {
						if (B.result.exception) {
							var A, E;
							if (B.result.exception.extype == "biz") {
								E = "【" + B.result.exception.message + "】";
								A = Ext.Msg.WARNING;
							} else {
								A = Ext.Msg.ERROR;
								E = "【系统发生异常！请与管理员联系】";
							}
							Ext.Msg.show({
										width : 350,
										title : "操作提示",
										msg : E,
										icon : A,
										buttons : Ext.Msg.OK
									})
						}
					}
				})
	}
}