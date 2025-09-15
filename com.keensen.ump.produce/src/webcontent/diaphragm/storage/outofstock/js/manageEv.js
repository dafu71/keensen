com.keensen.ump.produce.diaphragm.storage.OutofstockMgr.prototype.initEvent = function() {

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

	this.listPanel.store.on('load', function(o) {
		if (currentWindow == 'inputWindow2') {
			var obj = _this.inputWindow2.form.findField("outofstock/batchNo");
			obj.setValue('');
			_this.inputWindow2.form.findField("outofstock/amount").setValue('');
			_this.inputWindow2.form.findField("outofstock/remark").setValue('');
			obj.focus(false, 100);
		}
		if (currentWindow == 'inputWindow') {
			var obj = _this.inputWindow.form.findField("outofstock/batchNo");
			obj.setValue('');
			_this.inputWindow.form.findField("outofstock/amount").setValue('');
			_this.inputWindow.form.findField("outofstock/remark").setValue('');
			_this.inputWindow.form.findField("outofstock/deliveryNo")
					.setValue('');
			_this.inputWindow.form.findField("outofstock/deliveryPlanNo")
					.setValue('');
			obj.focus(false, 100);
		}
	});

	this.inputWindow2.activeItem.mon(this.inputWindow2.activeItem,
			'beforeSave', function() {
				/*var obj = this.inputWindow2.form
						.findField("outofstock/customerName");
				this.inputWindow2.form.findField("outofstock/customerCode")
						.setValue(obj.actualValue);*/
				var batchNo = this.inputWindow2.form
						.findField("outofstock/batchNo").getValue();

			}, this);

	this.inputWindow2.activeItem.mon(this.inputWindow2.activeItem, 'afterSave',
			function() {
				// currentWindow = 'inputWindow2';
				//this.listPanel.store.reload();

			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'afterSave',
			function() {
				// currentWindow = 'inputWindow';
				// this.listPanel.store.reload();

			}, this);
			
	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {
		var stockAmount = this.inputWindow.form
						.findField("outofstock/stockAmount").getValue();
		var amount = this.inputWindow.form
						.findField("outofstock/amount").getValue();
						
		var type = this.inputWindow.type.getValue();
		var storageId = this.inputWindow.storageId.getValue();
		
		if(type == '发货出库' && storageId != 3 ){
			Ext.Msg.alert("系统提示", "请走膜片发货仓发货出库！");
			return false;
		}
		
		if(parseFloat(amount)>parseFloat(stockAmount)){
			Ext.Msg.alert("系统提示", "出库数量大于库存无法出库！");
			return false;
		}
		

			}, this);

	// 增加修改事件
	/*
	 * this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
	 * this.editWindow.show(); this.editWindow.loadData(cell); }, this);
	 * this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
	 * function(gird, cell) { }, this);
	 */
}

/*
 * com.keensen.ump.produce.diaphragm.storage.OutofstockMgr.prototype.exportExcel =
 * function() { var _this = this; var daochu =
 * _this.queryPanel.getForm().getValues(); this.requestMask = this.requestMask ||
 * new Ext.LoadMask(Ext.getBody(), { msg : "后台正在操作,请稍候!" });
 * this.requestMask.show(); Ext.Ajax.request({ url :
 * "com.keensen.ump.base.storage.exportStorage.biz.ext", method : "post",
 * jsonData : daochu, success : function(resp) { var ret =
 * Ext.decode(resp.responseText); if (ret.success) { if (ret.success) { var
 * fname = ret.fname; if(Ext.isIE){
 * window.open('/default/deliverynote/seek/down4IE.jsp?fname='+fname); }else{
 * window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" +
 * fname; } } } }, callback : function() { _this.requestMask.hide() } }) }
 */

com.keensen.ump.produce.diaphragm.storage.OutofstockMgr.prototype.onSave2 = function() {
	var me = this;
	//var obj = this.inputWindow2.form.findField("outofstock/customerName");
	var batchNo = this.inputWindow2.form.findField("outofstock/batchNo").getValue();
	var customerCode = this.inputWindow2.form.findField("outofstock/customerCode").getValue();
	// 退货入库的产品，需要进行判定合格后才允许出库发货如属退货产品，出货又发往原客户，系统给予告警提示
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.storage.outofstock.queryCustomerReturn.biz.ext',
		jsonData : {
			condition : {
				'customerCode' : customerCode,
				'batchNo' : batchNo
			}
		},
		success : function(response, action) {
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.ret != 1) {
				Ext.Msg.confirm("系统提示", "您退货入库的产品又发往原客户,确定吗？",
						function(btnText) {
							if (btnText == "yes") {
								me.inputWindow2.saveData();
								return true;
							} else {
								return false;
							}
						}, this);
			}
		},
		failure : function(resp, opts) {

		}
	});

}

com.keensen.ump.produce.diaphragm.storage.OutofstockMgr.prototype.onAdd = function() {
	this.inputWindow.items.items[0].batchNo.focus(false, 100);
	this.inputWindow.show();

}

com.keensen.ump.produce.diaphragm.storage.OutofstockMgr.prototype.onAdd2 = function() {
	this.inputWindow2.form.findField("outofstock/batchNo").focus(false, 100);
	this.inputWindow2.show();

}

com.keensen.ump.produce.diaphragm.storage.OutofstockMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

// 扫码
com.keensen.ump.produce.diaphragm.storage.OutofstockMgr.prototype.onScan = function() {
	var obj = this.inputWindow.form.findField("outofstock/batchNo");
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
			var data = result.data;
			if (Ext.isEmpty(data)) {
				Ext.Msg.alert("系统提示", "没有找到库存信息!");
			} else {
				var data = data[0]
				this.inputWindow.form.findField("outofstock/storageId")
						.setValue(data.storageId);
				this.inputWindow.form.findField("outofstock/stockAmount")
						.setValue(data.amount);
				this.inputWindow.form.findField("outofstock/amount")
						.setValue(data.amount);
				this.inputWindow.form.findField("outofstock/model")
						.setValue(data.materSpecCode);
				this.inputWindow.form.findField("outofstock/class")
						.setValue(data.perfFlagName);
				this.inputWindow.form.findField("outofstock/position")
						.setValue(data.position);
				
			}
		}
	});
}


/*
 * com.keensen.ump.produce.diaphragm.storage.OutofstockMgr.prototype.onEdit =
 * function() { this.listPanel.onEdit(); };
 */