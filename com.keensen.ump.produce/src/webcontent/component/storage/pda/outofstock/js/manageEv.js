com.keensen.ump.produce.component.storage.OutofStockMgr.prototype.initEvent = function() {

	var _this = this;

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

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

}

com.keensen.ump.produce.component.storage.OutofStockMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.component.storage.OutofStockMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.storage.OutofStockMgr.prototype.onSave = function() {

	var _this = this;
	var checkCode = this.inputPanel.checkCode.getValue();
	var storageCode = this.inputPanel.storageCode.getValue();
	var batchNo = this.inputPanel.batchNo.getValue();
	var type = this.inputPanel.type.getValue();
	var orderNo = this.inputPanel.orderNo.getValue();

	if (!this.inputPanel.form.isValid()) {
		return;
	}

	if (Ext.isEmpty(checkCode) && Ext.isEmpty(storageCode)
			&& Ext.isEmpty(batchNo)) {
		return;
	}

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.storage.saveOutOfStockByCode.biz.ext',
		jsonData : {
			"entity/checkCode" : checkCode,
			"entity/storageCode" : storageCode,
			"entity/batchNo" : batchNo,
			"entity/orderNo" : orderNo,
			"entity/type" : type
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var err = result.err;
			var msg = result.msg;

			if (err != 0) {
				_this.inputPanel.msg
						.setValue('<p style="color:red;font-size:16px;">' + msg
								+ '</p>');
				_this.inputPanel.checkCode.setValue('');
				_this.inputPanel.storageCode.setValue('');
				_this.inputPanel.batchNo.setValue('');

			} else {
				_this.inputPanel.msg.setValue('');
				_this.inputPanel.checkCode.setValue('');
				_this.inputPanel.storageCode.setValue('');
				_this.inputPanel.batchNo.setValue('');
				_this.listPanel.store.reload();
			}
		}
	});
}
