com.keensen.ump.produce.diaphragm.zmx.pda.WarehousingMgr.prototype.initEvent = function() {

	var _this = this;

}

// 扫码
com.keensen.ump.produce.diaphragm.zmx.pda.WarehousingMgr.prototype.onScan = function() {

	var _this = this;
	var dimoBatchNo = this.inputPanel.dimoBatchNo.getValue();

	if (Ext.isEmpty(dimoBatchNo)) {
		Ext.Msg.alert("系统提示", "请输入底膜批号！");
		return;
	}
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.diaphragm.make.make.queryStock2.biz.ext',
				jsonData : {
					"condition/dimoBatchNo" : dimoBatchNo
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					var data = result.data;
					if (Ext.isEmpty(data)) {
						Ext.Msg.alert("系统提示", "底膜批号不存在！");
						return;
					}
					var position = data[0].position;
					
					
					if (!Ext.isEmpty(position) && position != 'null' ) {
						Ext.Msg.alert("系统提示", "该底膜批号已经入库，库位为" + position);
						_this.inputPanel.dimoBatchNo.setValue('');
						_this.inputPanel.dimoBatchNo.focus(false, 100);
						return;
					}

					_this.inputPanel.residue.setValue(data[0].residue);
					_this.inputPanel.dimoType.setValue(data[0].dimoType);
					_this.inputPanel.supName.setValue(data[0].supName);
					_this.inputPanel.psfName.setValue(data[0].psfName);
					_this.inputPanel.line.setValue(data[0].line);

					_this.inputPanel.position.focus(false, 100);
				}

			});
}

com.keensen.ump.produce.diaphragm.zmx.pda.WarehousingMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.diaphragm.zmx.pda.WarehousingMgr.prototype.onSave = function() {

	var _this = this;

	if (this.inputPanel.form.isValid()) {

		this.inputPanel.form.submit({
					method : "POST",
					url : this.inputPanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {

							var cnt = D.cnt;
							if (cnt > 0) {
								Ext.MessageBox.alert("操作提示", "保存成功!",
										function() {
											_this.inputPanel.form.reset();
											_this.inputPanel.dimoBatchNo.focus(
													false, 100);
										})
							} else {
								Ext.Msg.alert("系统提示", "保存失败，请检查库位");
								return;
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