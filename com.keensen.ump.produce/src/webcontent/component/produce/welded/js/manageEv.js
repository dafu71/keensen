com.keensen.ump.produce.component.produce.WeldedMgr.prototype.initEvent = function() {

	var _this = this;
	
	Ext.getCmp(addBtn).setDisabled(true);
	
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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {

				var perNum = this.inputWindow.perNum.getValue();
				var produceNum = this.inputWindow.produceNum.getValue();
				if (parseFloat(produceNum) < parseFloat(perNum)) {
					Ext.Msg.alert("系统提示", "生产数量必须大于每卷数量!");
					return false;
				}
				var num = Math
						.ceil(parseFloat(produceNum) / parseFloat(perNum));

				this.inputWindow.reserve5.setValue(num);

			}, this);

}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onAdd = function() {
	this.inputWindow.show();
	if(ip == '172.16.10.94'){
		this.inputWindow.machineCode.setValue('H1');
	}
	if(ip == '172.16.10.63'){
		this.inputWindow.machineCode.setValue('H2');
	}
	if(ip == '172.16.10.64'){
		this.inputWindow.machineCode.setValue('H3');
	}
	//测试用
	if(ip == '127.0.0.1'){
		this.inputWindow.machineCode.setValue('H1');
	}
}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onDel = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	this.listPanel.onDel();
	if (B && B.length != 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return
	}
}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();

		}
	}
}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '焊网记录',
			'com.keensen.ump.produce.component.produce.queryWelded');

}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onPrintTag = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < C.length; i++) {
			arr.push(C[i].data.id)
		}

		var f = document.getElementById('weldedprintsForm');

		f.ids.value = arr.join(',');
		var actionUrl = 'com.keensen.ump.produce.component.printWeldedTags.flow?token='
				+ Date.now();
		f.action = actionUrl;
		f.submit();

	}

}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onScan = function(
		flag) {

	if (flag == 1) {
		var batchNo = this.inputWindow.batchNo.getValue();
		var pipeSize = getSize(batchNo);
		this.inputWindow.pipeSize.setValue(pipeSize);
		return;
	}
	if (flag == 2) {
		var lightNetBatchNo = this.inputWindow.lightNetBatchNo.getValue();
		var lightNetType = getSize(lightNetBatchNo);
		this.inputWindow.lightNetType.setValue(lightNetType);
		return;
	}
	if (flag == 3) {
		var batchNo = this.editWindow.batchNo.getValue();
		var pipeSize = getSize(batchNo);
		this.editWindow.pipeSize.setValue(pipeSize);
		return;
	}
	if (flag == 4) {
		var lightNetBatchNo = this.editWindow.lightNetBatchNo.getValue();
		var lightNetType = getSize(lightNetBatchNo);
		this.editWindow.lightNetType.setValue(lightNetType);
		return;
	}

}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onStart = function() {
	var _this = this;
	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.productioncount.saveWeldedStart.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var msg = ret.msg;
				_this.queryPanel.setTitle("<span style='color:red'>" + msg
						+ "</span>");
				Ext.getCmp(addBtn).setDisabled(false);
			}
		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onEnd = function() {
	
	var _this = this;
	Ext.Msg.confirm("操作确认", "您确实要下机结算工作量吗?", function(A) {
		if (A == "yes") {
			Ext.Msg.prompt('您的确认码', '请输入', function(btn, text) {
				if (btn == 'ok') {
					var confirmCode = text.trim();
					if (Ext.isEmpty(confirmCode)) {
						Ext.Msg.alert('系统提示', '确认码不能为空');
						return false;
					} else {
						_this.requestMask = this.requestMask
								|| new Ext.LoadMask(Ext.getBody(), {
											msg : "后台正在操作,请稍候!"
										});
						_this.requestMask.show();
						Ext.Ajax.request({
							url : "com.keensen.ump.produce.component.produce.queryConfirmCode.biz.ext",
							jsonData : {
								'confirmCode' : confirmCode
							},
							method : "post",
							success : function(resp) {
								var ret = Ext.decode(resp.responseText);
								if (ret.success) {
									var err = ret.err;
									var msg = ret.msg;
									if (err != '0') {
										Ext.Msg.alert('系统提示', msg);
										return false;
									} else {
										Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.productioncount.saveWeldedEnd.biz.ext",
				method : "post",
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var msg = ret.msg;
						_this.queryPanel.setTitle("<span style='color:red'>"
								+ msg + "</span>");
						Ext.getCmp(addBtn).setDisabled(true);
					}
				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
									}
								}
							},
							callback : function() {
								_this.requestMask.hide()
							}
						})
					}
				}
			}, this, false);

		}
	})
}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.onQueryQuantity = function() {
	
	this.produceCountWindow.show();
}

com.keensen.ump.produce.component.produce.WeldedMgr.prototype.exportProduceCountExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel4ProduceCount,
			this.listPanel4ProduceCount,
			'产量统计',
			'com.keensen.ump.produce.component.productioncount.queryProductWeldedList',
			'0,1');

}

function getSize(str) {

	if (Ext.isEmpty(str))
		return '';

	var arr = [];

	var splitStr = ['/', '│', '|'];
	for (var i = 0; i < splitStr.length; i++) {
		if (str.indexOf(splitStr[i]) > -1) {
			arr = str.split(splitStr[i]);
			return arr[1];
		}
	}
	return '';

}