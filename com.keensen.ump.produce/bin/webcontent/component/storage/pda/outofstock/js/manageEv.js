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

com.keensen.ump.produce.component.storage.OutofStockMgr.prototype.queryCheck = function() {
	//com.keensen.ump.produce.component.apply.queryApply
	var _this = this;
	var checkCode = this.inputPanel.checkCode.getValue();
	if (Ext.isEmpty(checkCode)) {
		return;
	}
	
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.storage.queryCheckId.biz.ext',
		jsonData : {
			"condition/checkCode" : checkCode
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var data = result.data;

			if (Ext.isEmpty(data)) {
				_this.inputPanel.msg.setValue('<p style="color:red;font-size:16px;">' + '没有找到请检单' + '</p>');
				_this.inputPanel.checkCode.setValue('');
				_this.inputPanel.checkId.setValue('');
				_this.inputPanel.checkCode.focus().defer(100);
				
			} else {
				//_this.inputPanel.msg.setValue('');
				_this.inputPanel.msg.setValue('<p style="color:red;font-size:16px;">' + '请检单号校验成功' + '</p>');
				_this.inputPanel.checkId.setValue(data[0].checkId);
				_this.inputPanel.storageCode.focus().defer(100);
				
			}
		}
	});
}


com.keensen.ump.produce.component.storage.OutofStockMgr.prototype.onSave = function() {

	var _this = this;
	var checkCode = this.inputPanel.checkCode.getValue();
	var checkId = this.inputPanel.checkId.getValue();
	var storage = this.inputPanel.storage.getValue();
	var storageCode = this.inputPanel.storageCode.getValue();
	var type = this.inputPanel.type.getValue();

	if (!this.inputPanel.form.isValid()) {
		return;
	}
	
	if(Ext.isEmpty(checkId)){
		Ext.Msg.alert("系统提示", "请校验请检单号，输入请检单号按回车键！");
		return;
	}

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.storage.saveWarehousingByCheckCode.biz.ext',
		jsonData : {
			"entity/checkCode" : checkCode,
			"entity/checkId" : checkId,
			"entity/storage" : storage,
			"entity/storageCode" : storageCode,
			"entity/type" : type
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var err = result.err;
			var msg = result.msg;

			if (err != 0) {
				_this.inputPanel.msg.setValue('<p style="color:red;font-size:16px;">' + msg + '</p>');
				_this.inputPanel.checkCode.setValue('');
				_this.inputPanel.checkId.setValue('');
				
			} else {
				_this.inputPanel.msg.setValue('');
				_this.inputPanel.checkCode.setValue('');
				_this.inputPanel.checkId.setValue('');
				_this.listPanel.store.reload();
			}
		}
	});
}



