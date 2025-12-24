com.keensen.ump.produce.component.inventory.LocalMgr.prototype.initEvent = function() {

	var _this = this;

	this.inputPanel.form.findField('entity/juanmoBatchNo').focus(false, 100);

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	
	this.queryPanel4QueryJuanmo.mon(this.queryPanel4QueryJuanmo, 'query', function(form, vals) {
		var store = this.listPanel4QueryJuanmo.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4QueryJuanmo.pagingToolbar.pageSize
					}
				});
	}, this);

	this.listPanel.store.on('load', function() {
				var count = _this.listPanel.store.getTotalCount();
				_this.inputPanel.count.setValue(count);
			})

}

com.keensen.ump.produce.component.inventory.LocalMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.inventory.LocalMgr.prototype.onSave = function() {

	var _this = this;

	if (this.inputPanel.form.isValid()) {

		var batchNo = _this.inputPanel.form.findField('entity/batchNo')
				.getValue();
		var juanmoBatchNo = _this.inputPanel.form
				.findField('entity/juanmoBatchNo').getValue();
		var lastBatchNo = Ext.isEmpty(batchNo) ? juanmoBatchNo : batchNo;

		if (Ext.isEmpty(lastBatchNo)) {
			Ext.MessageBox.alert("操作提示", "请扫码元件序号或卷膜序号", function() {
					})
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
							var msg = D.msg;
							var err = D.err;
							if (err == 0) {
								_this.listPanel.refresh();
								_this.inputPanel.lastBatchNo
										.setValue(lastBatchNo);
								_this.inputPanel.form
										.findField('entity/batchNo')
										.setValue('');
								_this.inputPanel.form
										.findField('entity/juanmoBatchNo')
										.setValue('');

								if (Ext.isEmpty(batchNo)) {
									_this.inputPanel.form
											.findField('entity/juanmoBatchNo')
											.focus(false, 100);
								} else {
									_this.inputPanel.form
											.findField('entity/batchNo').focus(
													false, 100);
								}
								/*
								 * Ext.MessageBox.alert("操作提示", "保存成功!",
								 * function() { _this.listPanel.refresh();
								 * _this.inputPanel.form.reset();
								 * _this.inputPanel.form
								 * .findField('entity/batchNo') .focus(false,
								 * 100); })
								 */
							} else {
								Ext.MessageBox.alert("操作提示", msg, function() {
										})
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

com.keensen.ump.produce.component.inventory.LocalMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.component.inventory.LocalMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, 'PDA盘点库存',
			'com.keensen.ump.produce.component.stocktaking.queryInventoryLocal');
}

com.keensen.ump.produce.component.inventory.LocalMgr.prototype.queryJuanmo = function() {

	this.queryJuanmoWindow.show();
}

com.keensen.ump.produce.component.inventory.LocalMgr.prototype.exportJmExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '卷膜记录',
			'com.keensen.ump.produce.component.stocktaking.queryJuanmo4Stocktaking');
}

function formatStr(str) {
	return ((Ext.isEmpty(str)) || ('null' == str)) ? '' : str;
}