com.keensen.ump.produce.component.PlanMgr.prototype.initEvent = function() {

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

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var state = r.data.state;

				if (state == '完成') {
					Ext.Msg.alert('系统提示', '完成状态的不能删除');
					return false;
				}
			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editPanel.loadData(cell);
				var relationId = cell.get('id');
				this.editPanel.form.findField("entity/edited").setValue(0);
				var store = this.listPanel4.store;
				store.load({
							params : {
								'map/relationId' : relationId
								// 修改时加载
							}
						});
			}, this);

	this.inputPanel2.mon(this.inputPanel2, 'beforeSave', function() {
				var orderId = this.inputPanel2.form.findField("entity/orderId")
						.getValue();
				if (Ext.isEmpty(orderId)) {
					Ext.Msg.alert("系统提示", "请输入合法的订单号！");
					return false;
				}

			}, this);

	this.editPanel.mon(this.editPanel, 'beforeSave', function() {

			}, this);

}

function formatBatchNo(str) {
	str = str.replaceAll('，', ',');
	str = str.replaceAll(' ', '');
	var arr = [];
	arr = str.split(',');

	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		arr2.push("'" + arr[i] + "'");
	}
	return arr2.join(",") == "''" ? null : arr2.join(",");
}

com.keensen.ump.produce.component.PlanMgr.prototype.onOrderNo2 = function(
		orderNo, mpspeccombo) {

	var _this = this;
	if (Ext.isEmpty(orderNo)) {
		Ext.Msg.alert("系统提示", "请输入订单号！")
	} else {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.diaphragm.ship.order.queryOrder.biz.ext",
			method : "post",
			jsonData : {
				'map/orderNo2' : orderNo
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (Ext.isEmpty(ret.data)) {
						Ext.Msg.alert("系统提示", "订单号不存在，请重新输入！")
					} else {
						Ext.Msg.alert("系统提示", "订单号合法！");
						// mpspeccombo.setValue(ret.data[0].specId);
					}

				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}

};

com.keensen.ump.produce.component.PlanMgr.prototype.onView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var relationId = r.data.id;;
		var store = this.listPanel5.store;
		this.viewWindow.show();
		this.viewPanel.loadData(r);
		store.load({
					params : {
						'map/relationId' : relationId
						// 修改时加载
					}
				});
	}
};

com.keensen.ump.produce.component.PlanMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.component.PlanMgr.prototype.onAdd = function() {

	this.inputWindow.show();

}

com.keensen.ump.produce.component.PlanMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.component.PlanMgr.prototype.onPlan = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var orderNo = r.data.orderNo;
		var specId = r.data.specId;
		var orderamount = r.data.amount;
		this.inputPanel2.form.findField("entity/orderNo").setValue(orderNo);
		this.inputPanel2.form.findField("entity/specId").setValue(specId);
		this.inputPanel2.form.findField("entity/orderamount")
				.setValue(orderamount);
		this.listPanel2.store.load({
					params : {
						"condition/orderNo" : orderNo
					}
				});
		this.inputWindow2.show();
	}

};

com.keensen.ump.produce.component.PlanMgr.prototype.onSavePlan = function() {
	var _thispanel = this.inputPanel2;
	var _thislist = this.listPanel;
	var _this = this;
	if (_thispanel.form.isValid()) {
		var batchNo = this.inputPanel2.form.findField("entity/batchNo")
				.getValue();
		this.inputPanel2.form.findField("entity/batchNoStr")
				.setValue(formatBatchNo(batchNo));
		_thispanel.form.submit({
					method : "POST",
					url : _thispanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {
							Ext.MessageBox.alert("操作提示", "保存成功!", function() {
										_thislist.store.load({});
										_this.inputWindow.hide();
									})
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
};

com.keensen.ump.produce.component.PlanMgr.prototype.onSavePlan2 = function() {
	var _thispanel = this.editPanel;
	var _thislist = this.listPanel;
	var _this = this;
	if (_thispanel.form.isValid()) {
		var batchNo = this.editPanel.form.findField("entity/batchNo")
				.getValue();
		this.editPanel.form.findField("entity/batchNoStr")
				.setValue(formatBatchNo(batchNo));
		_thispanel.form.submit({
					method : "POST",
					url : _thispanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {
							Ext.MessageBox.alert("操作提示", "保存成功!", function() {
										_thislist.store.load({});
										_this.editWindow.hide();
									})
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
};

com.keensen.ump.produce.component.PlanMgr.prototype.onDelPlan = function() {
	this.listPanel2.onDel();
};

com.keensen.ump.produce.component.PlanMgr.prototype.onBatchNo = function(
		batchNoStr) {
	if (Ext.isEmpty(batchNoStr))
		return;
	var store = this.listPanel3.store;
	var str = formatBatchNo(batchNoStr);
	store.baseParams = {
		"map/batchNoStr" : str
	};
	store.load({});
};

com.keensen.ump.produce.component.PlanMgr.prototype.onBatchNo2 = function(
		batchNoStr) {
	if (Ext.isEmpty(batchNoStr))
		return;
	var store = this.listPanel4.store;
	var str = formatBatchNo(batchNoStr);
	store.baseParams = {
		"map/batchNoStr" : str
	};
	store.load({});
	this.editPanel.form.findField("entity/edited").setValue(1);
};

com.keensen.ump.produce.component.PlanMgr.prototype.onOrderNo = function(
		orderNo, mpspeccombo) {

	var _this = this;
	if (Ext.isEmpty(orderNo)) {
		Ext.Msg.alert("系统提示", "请输入订单号！")
	} else {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
					url : "com.keensen.ump.produce.component.order.queryOrder.biz.ext",
					method : "post",
					jsonData : {
						'map/orderNo' : orderNo
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							if (Ext.isEmpty(ret.data)) {
								Ext.Msg.alert("系统提示", "订单号不存在，请重新输入！");
								_this.inputPanel2.form
										.findField("entity/orderNo")
										.setValue('');
							} else {
								// Ext.Msg.alert("系统提示", "订单号合法！");
								_this.inputPanel2.form
										.findField("entity/orderAmount")
										.setValue(ret.data[0].orderAmount);
								_this.inputPanel2.form
										.findField("entity/materSpecName")
										.setValue(ret.data[0].materSpecName);
								_this.inputPanel2.form
										.findField("entity/orderDate")
										.setValue(ret.data[0].orderDate);
								_this.inputPanel2.form
										.findField("entity/orderId")
										.setValue(ret.data[0].id);
							}

						}

					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
	}

};