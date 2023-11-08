com.keensen.ump.produce.component.TempareaMgr.prototype.initEvent = function() {

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

}

com.keensen.ump.produce.component.TempareaMgr.prototype.onRuku = function() {
	this.inputWindow.items.items[0].batchNo.focus(false, 100);
	this.inputWindow.show();

}

com.keensen.ump.produce.component.TempareaMgr.prototype.onChuku = function() {
	this.inputWindow2.items.items[0].batchNo.focus(false, 100);
	this.inputWindow2.show();

}

com.keensen.ump.produce.component.TempareaMgr.prototype.onHuanku = function() {
	this.inputWindow3.items.items[0].batchNo.focus(false, 100);
	this.inputWindow3.show();

}

// 扫码
com.keensen.ump.produce.component.TempareaMgr.prototype.onScan = function() {
	var obj = this.inputWindow.form.findField("entity/batchNo");
	var _this = this;
	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.order.queryPlanStock.biz.ext',
				jsonData : {
					"map/batchNo" : batchNo
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					var data = result.data;
					
					if (Ext.isEmpty(data)) {
						Ext.Msg.alert("系统提示", "没有搜索到该膜片批号即时库存信息！");
						return;
					}
					_this.inputWindow.form.findField("entity/amount")
							.setValue(data[0].amount);
					_this.inputWindow.form.findField("entity/storageName")
							.focus(false, 100);

				}
			});
}

// 扫码
com.keensen.ump.produce.component.TempareaMgr.prototype.onScan2 = function() {
	var obj = this.inputWindow2.form.findField("entity/batchNo");
	var _this = this;
	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.temporaryarea.queryArea.biz.ext',
				jsonData : {
					"map/batchNo" : batchNo
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					var data = result.data;
					
					if (Ext.isEmpty(data)) {
						Ext.Msg.alert("系统提示", "没有搜索到该膜片批号待用区库存信息！");
						return;
					}
					_this.inputWindow2.form.findField("entity/amount")
							.setValue(data[0].amount);
					_this.inputWindow2.form.findField("entity/storageName")
							.setValue(data[0].storageName);
					_this.inputWindow2.form.findField("entity/position")
							.setValue(data[0].position);
				}
			});
}

// 扫码
com.keensen.ump.produce.component.TempareaMgr.prototype.onScan3 = function() {
	var obj = this.inputWindow3.form.findField("entity/batchNo");
	var _this = this;
	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.order.queryHuanku.biz.ext',
				jsonData : {
					"map/batchNo" : batchNo
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					var data = result.data;
					
					if (Ext.isEmpty(data)) {
						Ext.Msg.alert("系统提示", "没有搜索到该膜片批号可还库数量信息！");
						return;
					}
					_this.inputWindow3.form.findField("entity/amount")
							.setValue(data[0].amount2);
					_this.inputWindow3.form.findField("entity/storageName")
							.focus(false, 100);
				}
			});
}