com.keensen.ump.produce.diaphragm.storage.PdaqueryMgr.prototype.initEvent = function() {

	var _this = this;

}

// 扫码
com.keensen.ump.produce.diaphragm.storage.PdaqueryMgr.prototype.onScan = function() {
	var obj = this.inputPanel.form.findField("batchNo");
	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.storage.query.queryStock.biz.ext',
		jsonData : {
			"map/batchNo" : batchNo
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);

			var datas = result.data;
			if (Ext.isEmpty(datas)) {
				Ext.Msg.alert("系统提示", "没有数据！");
				return;
			}
			var data = datas[0];
			this.inputPanel.form.findField("id").setValue(data.id);
			this.inputPanel.form.findField("oldValue").setValue(data.position);
			//库存大于0
			if(!Ext.isEmpty(data.amount) && data.amount > 0)
				this.inputPanel.form.findField("position").setValue(data.position);
			this.inputPanel.form.findField("storageId")
					.setValue(data.storageId);
			this.inputPanel.form.findField("stockAmount")
					.setValue(data.amount);
			this.inputPanel.form.findField("amount")
					.setValue(data.amount);
			this.inputPanel.form.findField("model")
					.setValue(data.materSpecCode);
			this.inputPanel.form.findField("class").setValue(data.perfFlagName);
			this.inputPanel.form.findField("position").focus(false, 100);

		}
	});
}

com.keensen.ump.produce.diaphragm.storage.PdaqueryMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.diaphragm.storage.PdaqueryMgr.prototype.savePosition = function() {
	var position = this.inputPanel.form.findField("position").getValue();
	var id = this.inputPanel.form.findField("id").getValue();
	var oldValue = this.inputPanel.form.findField("oldValue").getValue();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.storage.query.savePosition.biz.ext',
		jsonData : {
			"id" : id,
			"position" : position,
			"oldValue" : oldValue
		},
		success : function(response, action) {
			Ext.Msg.alert("系统提示", "库位修改成功！");
		}
	});
};

com.keensen.ump.produce.diaphragm.storage.PdaqueryMgr.prototype.saveAllocate = function() {
	var id = this.inputPanel.form.findField("id").getValue();
	var toStorageId = this.inputPanel.form.findField("storageId").getValue();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.storage.allocate.allocateBatch.biz.ext',
		jsonData : {
			"ids" : id,
			"toStorageId" : toStorageId
		},
		success : function(response, action) {
			Ext.Msg.alert("系统提示", "调拨成功！");
		}
	});
};

com.keensen.ump.produce.diaphragm.storage.PdaqueryMgr.prototype.saveOutofstock = function() {
	var _this = this;
	var stockId = this.inputPanel.form.findField("id").getValue();
	var amount = this.inputPanel.form.findField("amount").getValue();
	var stockAmount = this.inputPanel.form.findField("stockAmount").getValue();
	var batchNo = this.inputPanel.form.findField("batchNo").getValue();
	var storageId = this.inputPanel.form.findField("storageId").getValue();
	if(stockAmount==0 || stockAmount=='0'){
		Ext.Msg.alert("系统提示", "库存为零，不能出库！");
		return;
	}
	if(Ext.isEmpty(amount) || amount==0 || amount=='0'){
		Ext.Msg.alert("系统提示", "出库为零，不能出库！");
		return;
	}
	if(amount>stockAmount){
		Ext.Msg.alert("系统提示", "出库数量不能大于库存数量，不能出库！");
		return;
	}
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.storage.outofstock.outofstock4part.biz.ext',
		jsonData : {
			"outofstock/stockId" : stockId,
			"outofstock/storageId" : storageId,
			"outofstock/batchNo" : batchNo,
			"outofstock/amount" : amount,
			"outofstock/stockAmount" : stockAmount
		},
		success : function(response, action) {
			_this.inputPanel.form.reset();
			Ext.Msg.alert("系统提示", "出库成功！");
		}
	});
};

