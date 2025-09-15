com.keensen.ump.produce.component.applys.applyMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryChooseOrderPanel.mon(this.queryChooseOrderPanel, 'query',
			function(form, vals) {
				var store = this.chooseOrderListPanel.store;
				store.baseParams = this.queryChooseOrderPanel.form.getValues();
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseOrderListPanel.pagingToolbar.pageSize
					}
				});
			}, this);

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
				var confirmDate = r.data.confirmDate;
				if (!Ext.isEmpty(confirmDate)) {
					Ext.Msg.alert("系统提示", "已确认请检单不能删除！");
					return false;
				}
			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var confirmDate = cell.get('confirmDate');

				if (this.opt == 'modify') {
					if (!Ext.isEmpty(confirmDate)) {
						// Ext.Msg.alert("系统提示", "已确认请检单不能修改！");
						// return;
					}
					this.editWindow4ModifyOrder.show();
					this.editPanel4ModifyOrder.loadData(cell);
					var relationId = cell.get('id');
					this.hWaterTestStore.removeAll();

					var store = this.listPanel4ModifyOrder.store;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
				}

				if (this.opt == 'view') {

					this.editWindow4ViewOrder.show();
					this.editPanel4ViewOrder.loadData(cell);
					this.editPanel4ViewOrder.buttons[0].hide();
					var relationId = cell.get('id');
					this.hWaterTestStore.removeAll();

					var store = this.listPanel4ViewOrder.store;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
				}

				if (this.opt == 'confirm') {

					this.editWindow4ViewOrder.show();
					this.editPanel4ViewOrder.loadData(cell);
					this.editPanel4ViewOrder.buttons[0].show();
					var relationId = cell.get('id');
					this.hWaterTestStore.removeAll();

					var store = this.listPanel4ViewOrder.store;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
				}
			}, this);
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onDeleteOrder = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	// var records = this.listPanel.store.getRange();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		this.listPanel.onDel();
	}
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onChoose = function() {

	if (!this.inputWindow.hidden) {
		var orderNo = this.inputPanel.orderNo.getValue();
	} else {
		var orderNo = this.modifyPanel.orderNo.getValue();
	}
	// var prodSpecId = this.inputPanel.prodSpecId.getValue();
	if (Ext.isEmpty(orderNo)) {
		Ext.Msg.alert("系统提示", "请输入订单号！");
		return;
	}
	// if (Ext.isEmpty(prodSpecId)) {
	// Ext.Msg.alert("系统提示", "请选择订单元件型号！");
	// return;
	// }

	this.queryPanel3.orderNo.setValue(orderNo);
	// this.queryPanel3.prodSpecId.setValue(prodSpecId);
	this.prodcombo.reset();
	this.prodcombo.getStore().baseParams = {
		'condition/orderNo' : orderNo
		// ,
		// 'condition/prodSpecId' : prodSpecId
	};
	this.prodcombo.getStore().load();

	this.chooseWindow.show();
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onSelect = function() {
	var A = this.listPanel3;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		// this.listPanel2.store.removeAll();
		if (!this.inputWindow.hidden) {
			var records2 = this.listPanel2.store.getRange();

			for (var i = 0; i < records.length; i++) {
				var batchNo = records[i].data.batchNo;
				var addFlag = true;
				Ext.each(records2, function(r) {
							var batchNo2 = r.data.batchNo;
							if (batchNo == batchNo2)
								addFlag = false;
						})
				if (addFlag)
					this.listPanel2.store.add(records[i]);
			}
			var records = this.listPanel2.store.getRange();
			this.inputPanel.applyAmount.setValue(records.length);
		} else {
			var records2 = this.listPanel7.store.getRange();

			for (var i = 0; i < records.length; i++) {
				var batchNo = records[i].data.batchNo;
				var addFlag = true;
				Ext.each(records2, function(r) {
							var batchNo2 = r.data.batchNo;
							if (batchNo == batchNo2)
								addFlag = false;
						})
				if (addFlag)
					this.listPanel7.store.add(records[i]);
			}
			var records = this.listPanel7.store.getRange();
			this.modifyPanel.applyAmount.setValue(records.length);
		}
		this.chooseWindow.hide();
	}
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onSave = function() {
	var _this = this;

	var pnl = this.editWindow4ModifyOrder.hidden
			? this.inputPanel4AddOrder
			: this.editPanel4ModifyOrder;
	var lst = this.editWindow4ModifyOrder.hidden
			? this.ListPanel4AddOrder
			: this.listPanel4ModifyOrder;
	var wd = this.editWindow4ModifyOrder.hidden
			? this.inputWindow4AddOrder
			: this.editWindow4ModifyOrder;

	if (pnl.form.isValid()) {

		var records = lst.store.getRange();
		var entitys = [];
		Ext.each(records, function(r) {
					if (!Ext.isEmpty(r.data['amount'])
							&& !Ext.isEmpty(r.data['jmProduceDt'])
							&& !Ext.isEmpty(r.data['batchNoStr'])) {
						var d = {
							'batchNo' : r.data['batchNo'],
							'gpd' : r.data['gpd'],
							'salt' : r.data['salt'],
							'isProdQualified' : r.data['isProdQualified'],
							'amount' : r.data['amount'],
							'batchNoStr' : r.data['batchNoStr'],
							'jmProduceDt' : r.data['jmProduceDt']
						}
						entitys.push(d);
					}
				});

		_this.requestMask = _this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.component.applys.saveHHCheck.biz.ext",
			method : "post",
			jsonData : {
				'entity' : pnl.form.getValues(),
				'tumos' : entitys
			},
			success : function(resp) {
				// 返回值处理

				_this.listPanel.refresh();
				wd.hide();

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})

	}

}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onModifyOrder = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.opt = 'modify';
			this.listPanel.onEdit();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onConfirm = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.opt = 'confirm';
			this.listPanel.onEdit();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.destroy = function() {
	this.inputWindow4AddOrder.destroy();
	this.editWindow4ModifyOrder.destroy();
	this.editWindow4ViewOrder.destroy();
	this.chooseWindow.destroy();

}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onPrint = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		window.open('com.keensen.ump.produce.component.hhapply.flow?entity/id='
						+ id, "top");

	}

}

com.keensen.ump.produce.component.applys.applyMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '家用膜入库请检',
			'com.keensen.ump.produce.component.applys.queryHHApply', '0,1');
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.chooseOrder = function() {
	this.chooseOrderWindow.show();
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.chooseOrderOk = function() {

	// var obj = this.modifyWindow.hidden ? this.inputPanel :
	// this.modifyPanel.hidden ? this.inputPanel4AddOrder:this.modifyPanel;
	var obj = this.editWindow4ModifyOrder.hidden
			? this.inputPanel4AddOrder
			: this.editPanel4ModifyOrder;
	var records = this.chooseOrderListPanel.getSelectionModel().getSelections();
	if (records.length == 0)
		return;
	var record = records[0];
	var materSpecName2 = record.data.materSpecName2;
	var orderNo = record.data.orderNo;
	var dryWet = record.data.dryWet;
	var markSpecCode = record.data.specNameMark;
	var tapColor = record.data.tapeBase;
	var orderAmount = record.data.orderAmount;
	var gpdAvg = record.data.gpdAvg;
	var saltAvg = record.data.saltAvg;
	var orderType = record.data.orderType;
	var makeLabelBase = record.data.makeLabelBase;

	var label = record.data.labelBase;
	var bag = record.data.bagBase;
	var box = record.data.boxBase;
	
	var quantityPerBox = record.data.packingNum;
	var tumoBatchStr = record.data.tumoBatchStr;

	obj.prodSpecName.setValue(materSpecName2);
	obj.orderNo.setValue(orderNo);
	obj.dryWet.setValue(dryWet);
	obj.markSpecCode.setValue(markSpecCode);
	obj.tapColor.setValue(tapColor);
	obj.orderAmount.setValue(orderAmount);
	obj.gpdAvg.setValue(gpdAvg);
	obj.saltAvg.setValue(saltAvg);
	obj.orderType.setValue(orderType);

	obj.label.setValue(label);
	obj.bag.setValue(bag);
	obj.box.setValue(box);

	obj.makeLabelBase.setValue(makeLabelBase);
	obj.quantityPerBox.setValue(quantityPerBox);
	obj.tumoBatchStr.setValue(tumoBatchStr);

	this.chooseOrderWindow.hide();
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.queryHWaterTest = function() {

	var obj = this.editWindow4ModifyOrder.hidden
			? this.inputPanel4AddOrder
			: this.editPanel4ModifyOrder;
	var lst = this.editWindow4ModifyOrder.hidden
			? this.ListPanel4AddOrder
			: this.listPanel4ModifyOrder;
	lst.store.removeAll();
	var tumoBatchStr = obj.tumoBatchStr.getValue();

	if (Ext.isEmpty(tumoBatchStr)) {
		Ext.Msg.alert("系统提示", "请输入涂膜批次，多个以半角逗号隔开!");
		return;
	}

	var arr = tumoBatchStr.split(',');
	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		arr2.push("'" + arr[i] + "'")
	}

	this.hWaterTestStore.baseParams = {
		'condition/batchNoStr' : arr2.join(',')
	};
	this.hWaterTestStore.load({});

}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onAddOrder = function() {
	this.ListPanel4AddOrder.store.removeAll();
	this.inputPanel4AddOrder.form.reset();
	this.inputWindow4AddOrder.show();
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.calculateBox = function() {
	var obj = this.editWindow4ModifyOrder.hidden
			? this.inputPanel4AddOrder
			: this.editPanel4ModifyOrder;
	var applyAmount = obj.applyAmount.getValue();
	var quantityPerBox = obj.quantityPerBox.getValue();
	if (Ext.isEmpty(applyAmount) || Ext.isEmpty(quantityPerBox)) {
		Ext.Msg.alert("系统提示", "请检数量和单箱数量不能为空");
		return
	}

	var quantityBox = Math.ceil(applyAmount / quantityPerBox);
	var quantityLastBox = applyAmount % quantityPerBox;
	obj.quantityBox.setValue(quantityBox);
	obj.quantityLastBox.setValue(quantityLastBox);

	return;
	// 唛头
	var makeLabelBase = obj.makeLabelBase.getValue();
	var orderType = obj.orderType.getValue();
	var applyAmount = obj.applyAmount.getValue();
	var materSpecName2 = obj.prodSpecName.getValue();
	
	//alert(makeLabelBase + '----' + orderType + '----' + applyAmount + '----' +materSpecName2) ;

	if (Ext.isEmpty(makeLabelBase) || Ext.isEmpty(orderType)
			|| Ext.isEmpty(applyAmount) || Ext.isEmpty(materSpecName2)) {
		return;
	}
	var markSn = '';
	if (orderType == '公司标准' && makeLabelBase.indexOf('印刷') > -1) {
		markSn = 'K';
	} else if (orderType == '公司标准' && makeLabelBase.indexOf('打印') > -1) {
		markSn = 'S'
	} else {
		markSn = 'T'
	}

	if (materSpecName2.substring(0, 2) == 'RO') {
		markSn += '3'
	} else if (materSpecName2.substring(0, 3) == 'SHF') {
		markSn += '4'
	} else if (materSpecName2.substring(0, 3) == 'NF') {
		if (materSpecName2.substring(materSpecName2.length - 1)) {
			markSn += '7'
		} else {
			markSn += '6'
		}
	} else {
		markSn += 'X'
	}

	var arr = materSpecName2.split('-');

	if (arr.length >= 2) {
		if (arr[1] == '1812') {
			markSn += 'A2'
		}
		if (arr[1] == '2012') {
			markSn += 'B2'
		}
		if (arr[1] == '2812') {
			markSn += 'C2'
		}
		if (arr[1] == '3213') {
			markSn += 'E3'
		}
		if (arr[1] == '3012') {
			markSn += 'D2'
		}
		if (arr[1] == '3013') {
			markSn += 'D3'
		}
		if (arr[1] == '3020') {
			markSn += 'DA'
		}
	}
	if (arr.length > 2) {
		if (arr[2] == '50') {
			markSn += '050'
		}
		if (arr[2] == '50S') {
			markSn += '05S'
		}

		if (arr[2] == '75') {
			if (arr.length > 3 && arr[3] == '2')
				markSn += '072'
			else
				markSn += '070';
		}
		if (arr[2] == '75A') {
			markSn += '07A'
		}
		if (arr[2] == '75S') {
			markSn += '07S'
		}
		if (arr[2] == '100') {
			markSn += '100'
		}
		if (arr[2] == '100') {
			if (arr.length > 3 && arr[3] == '2') {
				markSn += '102'
			}
			if (arr.length > 3 && arr[3] == '3') {
				markSn += '103'
			}
		}
		if (arr[2] == '100S') {
			markSn += '10S'
		}
		if (arr[2] == '150') {
			markSn += '150'
		}
		if (arr[2] == '150') {
			if (arr.length > 3 && arr[3] == '2') {
				markSn += '152'
			}
		}
		if (arr[2] == '200') {
			markSn += '200'
		}
		if (arr[2] == '300') {
			markSn += '300'
		}
		if (arr[2] == '400') {
			markSn += '400'
		}
		if (arr[2] == '400A') {
			markSn += '40A'
		}
		if (arr[2] == '500') {
			markSn += '500'
		}
		if (arr[2] == '600') {
			markSn += '600'
		}
		
		if (arr[2] == '600S') {
			markSn += '60S'
		}
		if (arr[2] == '800') {
			markSn += '800'
		}
		if (arr[2] == '1000') {
			markSn += 'A00'
		}
		if (arr[2] == '1200') {
			markSn += 'A20'
		}
	} else {
		markSn += '000'
	}

	var now = new Date();
	var ymd = now.toISOString().slice(0, 10);
	var yearCode = ' ';
	var monthCode = ' ';
	var dayCode = '  ';
	var dateArr = ymd.split('-');
	yearCode = dateArr[0].substr(3);
	mon = dateArr[1];
	switch (mon) {
		case '10' :
			monthCode = 'A';
			break;
		case '11' :
			monthCode = 'B';
			break;
		case '12' :
			monthCode = 'C';
			break;
		default :
			monthCode = mon.substr(1);
	}
	

	markSn += yearCode + monthCode ;

	var markSnStart = '1'.padStart(7, "0");
	var markSnEnd = ('' + quantityBox).padStart(7, "0");
	
	obj.markSnStart.setValue(markSn + markSnStart);
	obj.markSnEnd.setValue(markSn + markSnEnd);
} 

com.keensen.ump.produce.component.applys.applyMgr.prototype.onViewOrder = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.opt = 'view';
			this.listPanel.onEdit();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onConfirmOrder = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.opt = 'confirm';
			this.listPanel.onEdit();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.applys.applyMgr.prototype.onSaveConfirm = function() {

	var _this = this;

	var pkid = this.editPanel4ViewOrder.pkid.getValue();

	_this.requestMask = _this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.applys.saveHHCheckConfirm.biz.ext",
		method : "post",
		jsonData : {
			'id' : pkid
		},
		success : function(resp) {
			// 返回值处理

			_this.listPanel.refresh();
			_this.editWindow4ViewOrder.hide();

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}
