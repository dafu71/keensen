com.keensen.ump.produce.component.produce.TrimMgr.prototype.initEvent = function() {

	var _this = this;
	
	Ext.getCmp(addTrimBtn).setDisabled(true);
	
	// 查询事件
	this.queryPanel4ProduceCount.mon(this.queryPanel4ProduceCount, 'query',
			function(form, vals) {
				var store = this.listPanel4ProduceCount.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ProduceCount.pagingToolbar.pageSize
					}
				});
			}, this);
			
	this.listPanel4ProduceCount.store.on('load', function() {

				var records = _this.listPanel4ProduceCount.store.getRange();
				if (records.length == 0) {
					Ext.getCmp(quantityTotalId).setValue('');
				} else {
					var quantityTotal = records[0].data.quantityTotal;
					Ext.getCmp(quantityTotalId).setValue('产量合计:'
							+ quantityTotal);
				}
			});

	this.machineCodeStore.on('load', function() {
				var store = _this.machineCodeStore;
				var i = store.findBy(function(record, id) {
							return record.get('ip') == userIP;
						});
				if (i != -1) {
					var rec = store.getAt(i);
					var code = rec.get('code');
					_this.inputWindow.machineCode.setValue(code);
				}
			})

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		var store = this.listPanel.store;
		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

}

com.keensen.ump.produce.component.produce.TrimMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.component.produce.TrimMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.produce.TrimMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}


com.keensen.ump.produce.component.produce.TrimMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '切边记录',
			'com.keensen.ump.produce.component.produce.queryTrim');

}


com.keensen.ump.produce.component.produce.TrimMgr.prototype.onScan = function() {

	var _this = this;
	var obj = this.inputWindow;

	var jmBatchNo = obj.jmBatchNo.getValue();
	if (Ext.isEmpty(jmBatchNo)) {
		Ext.Msg.alert("系统提示", "请输入卷膜序号！");
		return;
	}

	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.produce.queryJuanmo2.biz.ext',
				jsonData : {
					"condition/jmBatchNo" : jmBatchNo
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					if (result.msg != 1) {
						Ext.Msg.alert("系统提示", result.msg, function() {
									obj.jmBatchNo.setValue('');
									obj.jmBatchNo.focus().defer(100);

								});

					} else {
						var data = result.data[0];
						var prodSpecName = data.prodSpecName;
						var orderNo = data.orderNo;
						var intakePipeLength = data.intakePipeLength;
						var effluentPipeLength = data.effluentPipeLength;
						var juanmoBatchId = data.recordId;

						obj.orderNo.setValue(orderNo);
						obj.prodSpecName.setValue(prodSpecName);
						obj.intakePipeLength.setValue(intakePipeLength);
						obj.effluentPipeLength.setValue(effluentPipeLength);
						obj.juanmoBatchId.setValue(juanmoBatchId);

					}
				}
			});

}

com.keensen.ump.produce.component.produce.TrimMgr.prototype.onStart = function() {
	var _this = this;
	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.productioncount.saveTrimStart.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var msg = ret.msg;
				_this.queryPanel.setTitle("<span style='color:red'>" + msg
						+ "</span>");
				Ext.getCmp(addTrimBtn).setDisabled(false);
			}
		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.produce.TrimMgr.prototype.onEnd = function() {
	var _this = this;
	Ext.Msg.confirm("操作确认", "您确实要下机结算工作量吗?", function(A) {
		if (A == "yes") {
			_this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			_this.requestMask.show();
			Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.productioncount.saveTrimEnd.biz.ext",
				method : "post",
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var msg = ret.msg;
						_this.queryPanel.setTitle("<span style='color:red'>"
								+ msg + "</span>");
						Ext.getCmp(addTrimBtn).setDisabled(true);
					}
				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
		}
	})
}

com.keensen.ump.produce.component.produce.TrimMgr.prototype.onQueryQuantity = function() {
	this.produceCountWindow.show();
}

com.keensen.ump.produce.component.produce.TrimMgr.prototype.exportProduceCountExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel4ProduceCount,
			this.listPanel4ProduceCount,
			'产量统计',
			'com.keensen.ump.produce.component.productioncount.queryProductTrimList',
			'0,1');

}

