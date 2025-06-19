com.keensen.ump.produce.component.applyMgr.prototype.initEvent = function() {

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
	this.queryPanel3.mon(this.queryPanel3, 'query', function(form, vals) {

				var store = this.listPanel3.store;
				store.baseParams = vals;
				store.load();
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
		var confirmDate = cell.get('confirmDate');
		if (this.opt == 'check') {
			if (!Ext.isEmpty(confirmDate)) {
				Ext.Msg.alert("系统提示", "已确认请检单不能修改！");
				return;
			}
			this.editWindow.show();
			this.editPanel.loadData(cell);
			var relationId = cell.get('id');

			var store = this.listPanel4.store;
			store.load({
						params : {
							'condition/relationId' : relationId
							// 修改时加载
						}
					});
		} else if (this.opt == 'confirm') {
			if (!Ext.isEmpty(confirmDate)) {
				Ext.Msg.alert("系统提示", "已确认请检单不能修改！");
				return;
			}
			this.editWindow2.show();
			this.editPanel2.loadData(cell);
			var relationId = cell.get('id');

			var store = this.listPanel5.store;
			store.load({
						params : {
							'condition/relationId' : relationId
							// 修改时加载
						}
					});
		} else if (this.opt == 'examine') {

			this.examineWindow.show();
			this.examinePanel.loadData(cell);
			var relationId = cell.get('id');

			var store = this.examineListPanel.store;
			store.load({
						params : {
							'condition/relationId' : relationId
							// 修改时加载
						}
					});
		} else if (this.opt == 'modify') {
			if (!Ext.isEmpty(confirmDate)) {
				Ext.Msg.alert("系统提示", "已确认请检单不能修改！");
				return;
			}
			this.modifyWindow.show();
			this.modifyPanel.loadData(cell);
			var relationId = cell.get('id');

			var orderNo = cell.get('orderNo');
			var prodSpecNameStore = this.prodSpecNameStore;
			prodSpecNameStore.baseParams = {
				'condition/orderNo' : orderNo,
				nameSqlId : 'com.keensen.ump.produce.component.apply.queryOrderSpecName'
			};
			prodSpecNameStore.load();

			var store = this.listPanel7.store;
			store.load({
						params : {
							'condition/relationId' : relationId
							// 修改时加载
						}
					});
		} else if (this.opt == 'cstock') {
			this.cstockWindow.show();
			this.editPanel8.loadData(cell);
			var relationId = cell.get('id');

			var store = this.listPanel8.store;
			store.load({
						params : {
							'condition/relationId' : relationId
							// 修改时加载
						}
					});
		} else {
			this.editWindow3.show();
			this.editPanel3.loadData(cell);
			var relationId = cell.get('id');

			var store = this.listPanel6.store;
			store.load({
						params : {
							'condition/relationId' : relationId
							// 修改时加载
						}
					});
		}
	}, this);

	// 增加删除后事件
	this.listPanel4.mon(this.listPanel4, 'afterdel', function(gird, cell) {
				_this.listPanel4.store.reload();
				var applyAmount = _this.editPanel.applyAmount.getValue();
				applyAmount = parseInt(applyAmount) - 1;
				_this.editPanel.applyAmount.setValue(applyAmount);
			}, this);

	this.listPanel4.mon(this.listPanel4, 'beforedel', function(gird, cell) {

			})

	this.listPanel7.mon(this.listPanel7, 'afterdel', function(gird, cell) {
				_this.listPanel7.store.reload();
				var applyAmount = _this.modifyPanel.applyAmount.getValue();
				applyAmount = parseInt(applyAmount) - 1;
				_this.modifyPanel.applyAmount.setValue(applyAmount);
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

	this.listPanel3.mon(this.listPanel3, 'rowclick', function(grid, rowIndex) {
				var sm = grid.getSelectionModel();
				if (sm.isSelected(rowIndex)) {
					sm.deselectRow(rowIndex)
				} else {
					sm.selectRow(rowIndex, true);
					sm.grid.getView().focusRow(rowIndex);
				}
			}, this);

	this.listPanel4.store.on('load', function() {
				// 直径校验
				var records = _this.listPanel4.store.getRange();
				var flag = false;
				for (var i = 0; i < records.length; i++) {
					var r = records[i];
					var diameter = r.get('diameter');
					var diameter2 = r.get('diameter2');
					if (parseFloat(diameter) > 201
							|| parseFloat(diameter2) > 201) {
						flag = true
						break;
					}
				}
				if (flag) {
					_this.editPanel.diameterCheckResult.setVisible(true);
					_this.editPanel.diameterCheckResult.setDisabled(false);
				} else {
					_this.editPanel.diameterCheckResult.setVisible(false);
					_this.editPanel.diameterCheckResult.setDisabled(true);
				}

			});

}

com.keensen.ump.produce.component.applyMgr.prototype.onDeleteOrder = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	// var records = this.listPanel.store.getRange();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		this.listPanel.onDel();
	}
}

com.keensen.ump.produce.component.applyMgr.prototype.onAdd = function() {
	this.inputPanel.form.reset();
	this.listPanel2.store.removeAll();
	this.inputWindow.show();
}

com.keensen.ump.produce.component.applyMgr.prototype.onChoose = function() {

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
	this.queryPanel3.prodcombo.reset();
	this.queryPanel3.prodcombo.getStore().baseParams = {
		'condition/orderNo' : orderNo
		// ,
		// 'condition/prodSpecId' : prodSpecId
	};
	this.queryPanel3.prodcombo.getStore().load();

	var store = this.listPanel3.store;
	// store.baseParams = {
	// 'condition/orderNo' : orderNo
	// ,
	// 'condition/prodSpecId' : prodSpecId
	// };
	//store.load();

	var prodSpecNameStore = this.prodSpecNameStore;
	prodSpecNameStore.baseParams = {
		'condition/orderNo' : orderNo,
		nameSqlId : 'com.keensen.ump.produce.component.apply.queryOrderSpecName'
	};
	prodSpecNameStore.load();

	this.chooseWindow.show();
}

com.keensen.ump.produce.component.applyMgr.prototype.onSelect = function() {
	var A = this.listPanel3;
	var _this = this;
	var records;
	var obj;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		records = A.getSelectionModel().getSelections();
		// this.listPanel2.store.removeAll();
		// 新增
		if (!this.inputWindow.hidden) {
			obj = this.inputPanel;
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

			// 加载订单信息
			// com.keensen.ump.produce.component.neworder.queryYxOrder

			_this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			_this.requestMask.show();
			Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.neworder.queryYxOrder.biz.ext",
				method : "post",
				jsonData : {
					'map/orderNo' : records[0].data.orderNo,
					'map/prodSpecId' : records[0].data.prodSpecId

				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					var datas = ret.data;
					if (!Ext.isEmpty(datas)) {
						var data = datas[0];
						var orderAmount = data.orderAmount;
						obj.orderAmount.setValue(orderAmount);
						var prodSpecName = data.materSpecName2;
						obj.prodSpecName.setValue(prodSpecName);
						var prodClassFlag = data.dryWet;
						obj.prodClassFlag.setValue(prodClassFlag);
						var lid = data.lidBase;
						obj.lid.setValue(lid);
						var markTypeFlag = data.markBase;
						obj.markTypeFlag.setValue(markTypeFlag);
						var markSpecCode = data.markBase;
						obj.markSpecCode.setValue(markSpecCode);
						var tape = data.tapeBase;
						obj.tape.setValue(tape);
						var box = data.boxBase;
						obj.box.setValue(box);
						var tray = data.trayBase;
						obj.tray.setValue(tray);
						var label = data.labelBase
						obj.label.setValue(label);
						var orderType = data.orderTypeBase;
						obj.orderType.setValue(orderType);
						var prodAmount = data.prodAmount;
						obj.prodAmount.setValue(prodAmount);
						var checkCount = data.checkCount;
						obj.checkCount.setValue(checkCount);
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})

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

com.keensen.ump.produce.component.applyMgr.prototype.onSave = function() {
	var _this = this;
	var A = this.listPanel2;
	var records = A.store.getRange();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择元件！");
		return false;
	}

	var orderNo = this.inputPanel.orderNo.getValue();
	var orderNo2 = records[0].data.orderNo;
	if (orderNo != orderNo2) {
		Ext.Msg.alert("系统提示", "请检元件订单号与请检单订单号不一致！");
		return false;
	}

	var prodAmount = this.inputPanel.prodAmount.getValue();
	var checkCount = this.inputPanel.checkCount.getValue();
	var applyAmount = this.inputPanel.applyAmount.getValue();

	if (parseInt(checkCount) + parseInt(applyAmount) > parseInt(prodAmount)) {
		Ext.Msg.alert("系统提示", "请检元件数量不能大于订单需生产数量！");
		return false;
	}

	var itemArr = [];
	var myCheckboxGroup = this.inputPanel.myabnormal;
	for (var i = 0; i < myCheckboxGroup.items.length; i++) {
		if (myCheckboxGroup.items.itemAt(i).checked) {
			itemArr.push(i);
		}
	}

	this.inputPanel.abnormal.setValue(itemArr.join(','));

	if (this.inputPanel.form.isValid()) {

		var datas = [];
		Ext.each(records, function(r) {
					datas.push(r.data);
				});

		var mk = new Ext.LoadMask(this.inputWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.component.apply.add.biz.ext',
					jsonData : {
						'entity' : this.inputPanel.form.getValues(),
						"list" : datas
					},
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							// _this.listPanel.store.load();
							_this.listPanel.refresh();
							_this.inputWindow.hide();
						} else {
							mk.hide();
						}
					},
					failure : function(resp, opts) {
						mk.hide();
					}
				});
	}

}

com.keensen.ump.produce.component.applyMgr.prototype.onSaveCheck = function() {
	var _this = this;

	if (this.editPanel.form.isValid()) {

		var mk = new Ext.LoadMask(this.editWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.component.apply.saveHead.biz.ext',
					jsonData : this.editPanel.form.getValues(),
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							// _this.listPanel.store.load();
							_this.listPanel.refresh();
							_this.editWindow.hide();
						} else {
							mk.hide();
						}
					},
					failure : function(resp, opts) {
						mk.hide();
					}
				});
	}

}

com.keensen.ump.produce.component.applyMgr.prototype.onSaveConfirm = function() {
	var _this = this;

	if (this.editPanel2.form.isValid()) {

		var mk = new Ext.LoadMask(this.editWindow2.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.component.apply.saveHead.biz.ext',
					jsonData : this.editPanel2.form.getValues(),
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							// _this.listPanel.store.load();
							_this.listPanel.refresh();
							_this.editWindow2.hide();
						} else {
							mk.hide();
						}
					},
					failure : function(resp, opts) {
						mk.hide();
					}
				});
	}

}

com.keensen.ump.produce.component.applyMgr.prototype.onSaveModify = function() {
	var _this = this;
	var A = this.listPanel7;
	var records = A.store.getRange();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "请选择元件！");
		return false;
	}

	var itemArr = [];
	var myCheckboxGroup = this.modifyPanel.myabnormal;
	for (var i = 0; i < myCheckboxGroup.items.length; i++) {
		if (myCheckboxGroup.items.itemAt(i).checked) {
			itemArr.push(i);
		}
	}

	this.modifyPanel.abnormal.setValue(itemArr.join(','));

	if (this.modifyPanel.form.isValid()) {

		var datas = [];
		Ext.each(records, function(r) {
					datas.push(r.data);
				});
		var mk = new Ext.LoadMask(this.modifyWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
					method : "post",
					scope : this,
					// url :
					// 'com.keensen.ump.produce.component.apply.saveHead.biz.ext',
					// jsonData : this.modifyPanel.form.getValues(),
					url : 'com.keensen.ump.produce.component.apply.add.biz.ext',
					jsonData : {
						'entity' : this.modifyPanel.form.getValues(),
						"list" : datas
					},
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							// _this.listPanel.store.load();
							_this.listPanel.refresh();
							_this.modifyWindow.hide();
						} else {
							mk.hide();
						}
					},
					failure : function(resp, opts) {
						mk.hide();
					}
				});
	}

}

com.keensen.ump.produce.component.applyMgr.prototype.onSaveExamine = function() {
	var _this = this;

	if (this.examinePanel.form.isValid()) {

		var mk = new Ext.LoadMask(this.examineWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.component.apply.saveHead.biz.ext',
					jsonData : this.examinePanel.form.getValues(),
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							// _this.listPanel.store.load();
							_this.listPanel.refresh();
							_this.examineWindow.hide();
						} else {
							mk.hide();
						}
					},
					failure : function(resp, opts) {
						mk.hide();
					}
				});
	}

}

com.keensen.ump.produce.component.applyMgr.prototype.onCheck = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.opt = 'check';
			this.listPanel.onEdit();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.applyMgr.prototype.onModify = function() {
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

com.keensen.ump.produce.component.applyMgr.prototype.onConfirm = function() {
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

com.keensen.ump.produce.component.applyMgr.prototype.onExamine = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.opt = 'examine';
			this.listPanel.onEdit();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.applyMgr.prototype.onView = function() {
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

com.keensen.ump.produce.component.applyMgr.prototype.destroy = function() {
	this.inputWindow.destroy();
	this.chooseWindow.destroy();
	this.editWindow.destroy();
	this.editWindow2.destroy();
	this.editWindow3.destroy();
	this.modifyWindow.destroy();
	this.cstockWindow.destroy();
}

com.keensen.ump.produce.component.applyMgr.prototype.onPrint = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		window.open('com.keensen.ump.produce.component.apply.flow?entity/id='
						+ id, "top");

	}

}

com.keensen.ump.produce.component.applyMgr.prototype.onDel = function() {

	var records = this.listPanel4.store.getRange();
	if (records.length == 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条元件记录！")
		return false;
	} else {
		this.listPanel4.onDel();
	}
}

com.keensen.ump.produce.component.applyMgr.prototype.onDel2 = function() {

	var records = this.listPanel7.store.getRange();
	if (records.length == 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条元件记录！")
		return false;
	} else {
		this.listPanel7.onDel();
	}
}

com.keensen.ump.produce.component.applyMgr.prototype.onDel3 = function() {
	var records = this.listPanel2.getSelectionModel().getSelected();
	if (records.length == 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条元件记录！")
		return false;
	} else {
		this.listPanel2.store.remove(records);
		var cnt = this.listPanel2.store.getCount();
		this.inputPanel.applyAmount.setValue(cnt);
	}
}

com.keensen.ump.produce.component.applyMgr.prototype.exportExcel = function() {
	var _this = this;
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			// url :
			// "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
			url : 'com.keensen.ump.qinsen.inst.exportExcelByNamingSql.biz.ext',
			method : "post",
			jsonData : {
				'map' : {
					'condition/relationId' : id
				},
				namingsql : 'com.keensen.ump.produce.component.apply.queryList2',
				templateFilename : 'ks_component_apply_export'
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					var fname = ret.fname;
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})

	}

}

com.keensen.ump.produce.component.applyMgr.prototype.exportExcelBatch = function() {
	var _this = this;
	var vals = this.queryPanel.form.getValues();
	var start = vals['condition/createTimeStart'];
	var end = vals['condition/createTimeEnd'];
	if (Ext.isEmpty(start) || Ext.isEmpty(end)) {
		Ext.Msg.alert("系统提示", "请选择请检日期时间段！");
		return false;
	}
	if (dayDiff(start, end) > 31) {
		Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
		return false;

	}

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.apply.queryList2.biz.ext",
		method : "post",
		responseType : 'blob',
		jsonData : this.queryPanel.form.getValues(),
		// jsonData : {
		// 'condition/createTimeStart' : start,
		// 'condition/createTimeEnd' : end
		// },
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (!Ext.isEmpty(ret.data)) {
					var str = '<style>td{border:1px black solid;}</style>'
							+ '<table class="table-data table-bordered table"><tr>';
					str += '<td align="center">请检时间</td><td align="center">订单号</td><td align="center">栈板号</td>'
							+ '<td align="center">订单元件型号</td>'
							+ '<td align="center">唛头显示型号</td>'
							+ '<td align="center">元件型号（卷制）</td>'
							+ '<td align="center">元件序列号</td>'
							+ '<td align="center">卷膜序号</td>'
							+ '<td align="center">卷膜生产日期</td>'
							+ '<td align="center">膜片批次</td>' + '</tr>';
					Ext.each(ret.data, function(r) {
								str += '<tr><td align="center">' + r.applyTime
										+ '</td>'
								str += '<td align="center">' + r.orderNo
										+ '</td><td align="center">'
										+ String(r.code)
										+ '</td><td align="center">'
										+ r.orderProdSpecName
										+ '</td><td align="center">'
										+ r.markSpecCode
										+ '</td><td align="center">'
										+ r.prodSpecName

										+ '</td><td align="center">'
										+ String(r.batchNo)
										+ '</td><td align="center">'
										+ String(r.jmBatchNo) + '</td>'
										+ '<td align="center">'
										+ String(r.jmProduceDt) + '</td>'

										+ '<td align="center">'
										+ r.tumoBatchStr + '</td></tr>';
							})
					str += '</table>';
					// application/vnd.ms-excel;charset=utf-8
					var blob = new Blob(["\ufeff", str], {
								type : 'application/vnd.ms-excel;charset=utf-8'
							});
					var link = document.createElement('a');
					var url = URL.createObjectURL(blob);
					link.href = url;
					link.download = 'exported-data.xls'; // 指定导出文件的名称
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				} else {
					Ext.Msg.alert("系统提示", "没有查询到数据!");
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})

}

com.keensen.ump.produce.component.applyMgr.prototype.onCStock = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var storage = B[0].data.storage;
			if (storage != 3) {
				Ext.Msg.alert("系统提示", "请选择入库为C仓库记录!");
				return
			}
			this.opt = 'cstock';
			this.listPanel.onEdit();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.applyMgr.prototype.onSaveCStcok = function() {
	var _this = this;
	var pkid = _this.editPanel8.pkid.getValue();

	Ext.Msg.confirm("操作确认", "您确实要入C仓吗?", function(A) {

		if (A == "yes") {

			var mk = new Ext.LoadMask(_this.cstockWindow.id, {
						msg : '正在保存，请稍候!',
						removeMask : true
					});
			mk.show();
			Ext.Ajax.request({
				method : "post",
				scope : _this,
				url : 'com.keensen.ump.produce.component.applys.insertCStock.biz.ext',
				jsonData : {
					'map/relationId' : pkid
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						// _this.listPanel.store.load();
						_this.listPanel.refresh();
						_this.editPanel8.form.reset();
						_this.cstockWindow.hide();
					} else {
						mk.hide();
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});
		}
	})
}

com.keensen.ump.produce.component.applyMgr.prototype.onChoose2 = function() {

	if (!this.inputWindow.hidden) {
		var orderNo = this.inputPanel.orderNo.getValue();
	} else {
		var orderNo = this.modifyPanel.orderNo.getValue();
	}

	this.listPanel3.store.removeAll();
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
	this.queryPanel3.prodcombo.reset();
	this.queryPanel3.prodcombo.getStore().baseParams = {
		'condition/orderNo' : orderNo

	};
	this.queryPanel3.prodcombo.getStore().load();

	// var store = this.listPanel3.store;
	// store.baseParams = {
	// 'condition/orderNo' : orderNo
	// ,
	// 'condition/prodSpecId' : prodSpecId
	// };
	// store.load();

	var prodSpecNameStore = this.prodSpecNameStore;
	prodSpecNameStore.baseParams = {
		'condition/orderNo' : orderNo,
		nameSqlId : 'com.keensen.ump.produce.component.apply.queryOrderSpecName'
	};
	prodSpecNameStore.load();

	this.chooseWindow.show();
}