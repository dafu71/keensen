com.keensen.ump.produce.component.storage.PdaAllocateMgr.prototype.initEvent = function() {

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

com.keensen.ump.produce.component.storage.PdaAllocateMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.component.storage.PdaAllocateMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.storage.PdaAllocateMgr.prototype.onSave = function() {

	var _this = this;
	var fromTrayCode = this.inputPanel.fromTrayCode.getValue();
	var batchNos = this.inputPanel.batchNos.getValue();
	var toStorage = this.inputPanel.toStorage.getValue();
	var toStorageCode = this.inputPanel.toStorageCode.getValue();
	var toTrayCode = this.inputPanel.toTrayCode.getValue();

	if (!this.inputPanel.form.isValid()) {
		return;
	}

	if (Ext.isEmpty(fromTrayCode) && Ext.isEmpty(batchNos)) {
		return;
	}

	//处理batchNos	
	batchNos = batchNos.replace(/\n/g, "','");
	batchNos = "'" + batchNos + "'";
	
	
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.storage.saveBatchAllocate2.biz.ext',
		jsonData : {
			"fromTrayCode" : fromTrayCode,
			"batchNos" : Ext.isEmpty(fromTrayCode) ? batchNos : '',
			"toStorage" : toStorage,
			"toStorageCode" : toStorageCode,
			"toTrayCode" : toTrayCode
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var err = result.err;
			var msg = result.msg;

			if (err != 0) {
				_this.inputPanel.msg
						.setValue('<p style="color:red;font-size:16px;">' + msg
								+ '</p>');
				_this.inputPanel.fromTrayCode.setValue('');
				_this.inputPanel.batchNos.setValue('');

			} else {
				_this.inputPanel.fromTrayCode.setValue('');
				_this.inputPanel.batchNos.setValue('');
				_this.listPanel.store.reload();
			}
		}
	});
}
