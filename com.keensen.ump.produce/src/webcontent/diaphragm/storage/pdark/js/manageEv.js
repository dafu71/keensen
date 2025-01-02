com.keensen.ump.produce.diaphragm.storage.PdarkMgr.prototype.initEvent = function() {

	var _this = this;

}

// 扫码
com.keensen.ump.produce.diaphragm.storage.PdarkMgr.prototype.onScan = function() {
	var obj = this.inputPanel.form.findField("warehousing/batchNo");

	var ifChange = this.inputPanel.ifChange.checked;

	var storageId = this.inputPanel.form.findField("warehousing/storageId")
			.getValue();
	if (Ext.isEmpty(storageId) && ifChange) {
		Ext.Msg.alert("系统提示", "请选择仓库！");
		return;
	}

	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.storage.rkdrk.queryRkdByBatchNo.biz.ext',
		jsonData : {
			"batchNo" : batchNo
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.msg != 1) {
				Ext.Msg.alert("系统提示", result.msg);
			} else {
				var data = result.data;
				if (!ifChange) {
					// 仓库不变没有选择
					this.inputPanel.form.findField("warehousing/storageId")
							.setValue(data.storageId);
				}else{
					this.inputPanel.form.findField("warehousing/storageId")
							.setValue(storageId);
				}

				this.inputPanel.form.findField("warehousing/amount")
						.setValue(data.usefulLength);
				this.inputPanel.form.findField("warehousing/model")
						.setValue(data.materSpecCode);
				this.inputPanel.form.findField("warehousing/class")
						.setValue(data.perfFlagName);
				this.inputPanel.form.findField("warehousing/position").focus(
						false, 100);
			}
		}
	});
}

com.keensen.ump.produce.diaphragm.storage.PdarkMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.diaphragm.storage.PdarkMgr.prototype.onSave = function() {
	var _this = this;
	var ifChange = this.inputPanel.ifChange.getValue();

	if (this.inputPanel.form.isValid()) {
		var storageId = this.inputPanel.storageId.getValue();
		this.inputPanel.form.submit({
					method : "POST",
					url : this.inputPanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {
							Ext.MessageBox.alert("操作提示", "保存成功!", function() {
										_this.inputPanel.form.reset();
										_this.inputPanel.ifChange.setValue(ifChange);
										_this.inputPanel.storageId
												.setValue(storageId);
										_this.inputPanel.form
												.findField('warehousing/batchNo')
												.focus(false, 100);
									})
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