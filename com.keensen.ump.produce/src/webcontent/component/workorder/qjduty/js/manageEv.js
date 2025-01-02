com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.initEvent = function() {

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

	// 查询事件
	this.queryChooseOrderPanel.mon(this.queryChooseOrderPanel, 'query',
			function(form, vals) {
				var store = this.chooseOrderListPanel.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseOrderListPanel.pagingToolbar.pageSize
					}
				});
			}, this);

	this.listPanel4Arrange.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

	this.qjStore.on('load', function() {
				var records = _this.qjStore.getRange();
				var arr = [];
				for (var i = 0; i < records.length; i++) {
					arr.push(records[i].data.code)
				}
				_this.defaultQjCode = arr.join(',')
			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onArrange = function() {
	this.window4Arrange.show();
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onAddArrange = function() {
	this.chooseOrderWindow.show();
	this.queryChooseOrderPanel.form.reset();
	this.chooseOrderListPanel.store.removeAll();
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onChooseOrder = function() {
	var records = this.chooseOrderListPanel.getSelectionModel().getSelections();
	var store = this.listPanel4Arrange.store;

	// 过滤已选订单
	var arr = [];
	var rds = store.getRange();
	for (var i = 0; i < rds.length; i++) {
		arr.push(rds[i].data.orderId)
	}

	for (var i = 0; i < records.length; i++) {
		var orderId = records[i].data.id;
		if (arr.indexOf(orderId) > -1) {
			continue;
		}
		var r = new Ext.data.Record({
					orderNo : records[i].data.orderNo,
					orderType : records[i].data.orderType,
					materSpecName2 : records[i].data.materSpecName2,
					materSpecName : records[i].data.materSpecName,
					orderAmount : records[i].data.orderAmount,
					orderId : records[i].data.id,
					productOrder : 1,
					qjCode : this.defaultQjCode
				})
		store.add(r);
	}
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onDelArrange = function() {
	var records = this.listPanel4Arrange.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		this.listPanel4Arrange.store.remove(records[0]);
	}
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onChooseCode = function() {
	this.chooseMachineWindow.setTitle('选择机台');
	this.chooseMachineWindow.show();
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onSelectCode = function() {

	var A = this.listPanel4ChooseMachine;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var records = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < records.length; i++) {
			var code = records[i].data.code;
			arr.push(code);
		}
		if (this.window4Arrange.isVisible()) {
			var idx = this.rec.data['orderId'];
			var i = this.listPanel4Arrange.store.find('orderId', idx);
			var rec2 = this.listPanel4Arrange.store.getAt(i);
			A.getSelectionModel().clearSelections();
			rec2.set('qjCode', arr.join(','));
			rec2.commit();
			A.refresh();

		}
		if (this.editWindow.isVisible()) {
			this.editWindow.qjCode.setValue(arr.join(','));
		}
		this.chooseMachineWindow.hide();
	}

}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onSaveArrange = function() {
	var _this = this;
	var arrangeDate = this.inputPanel4Arrange.arrangeDate.getValue();
	if (Ext.isEmpty(arrangeDate))
		return;
	var store = this.listPanel4Arrange.store;
	var rds = store.getRange();
	if (rds.length == 0)
		return;
	var duties = [];
	Ext.each(rds, function(r) {
				var dt = {
					'orderId' : r.data['orderId'],
					'productOrder' : r.data['productOrder'],
					'arrangeDate' : arrangeDate,
					'qjCode' : r.data['qjCode']
				};
				duties.push(dt);

			});
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.workorder2.addBatchQjDuties.biz.ext",
		method : "post",
		jsonData : {
			'duties' : duties
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					_this.listPanel.store.reload();
					_this.inputPanel4Arrange.form.reset();
					_this.window4Arrange.hide();
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onDelArrange = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onViewList = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择一条记录！")
		return false;
	} else {
		var relationId = records[0].data.id;
		var store = this.listPanel4ViewList.store;
		store.load({
					params : {
						"condition/relationId" : relationId
					}
				});
		this.viewListWindow.show();
	}
}

com.keensen.ump.produce.component.workorder.QjdutyMgr.prototype.onRefreshList = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择一条记录！")
		return false;
	} else {
		var relationId = records[0].data.id;
		var orderId = records[0].data.orderId;
		this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.workorder2.saveQjDutyList.biz.ext",
		method : "post",
		jsonData : {
			'relationId' : relationId,
			'orderId' : orderId
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					_this.listPanel.store.reload();
					
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
		
	}
}

function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}