com.keensen.ump.produce.component.planweekMgr.prototype.initEvent = function() {
	var _this = this;

	this.chooseTumoPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
				var A = this.chooseTumoPanel;
	(function	() {
					var amountChecked = 0;
					var records = A.getSelectionModel().getSelections();
					for (var i = 0; i < records.length; i++) {
						amountChecked += records[i].data.amount;
					}
					Ext.getCmp(amountCheckedId).setValue('选中合计(m):<font color="red">'
							+ getOneDecimal(amountChecked) + '</font>');
				}).defer(100);
			}, this);
			
	this.chooseTumoPanel.selModel.on('rowdeselect', function(o, i, r) {
				var _this = this;
				var A = this.chooseTumoPanel;
	(function	() {
					var amountChecked = 0;
					var records = A.getSelectionModel().getSelections();
					for (var i = 0; i < records.length; i++) {
						amountChecked += records[i].data.amount;
					}
					Ext.getCmp(amountCheckedId).setValue('选中合计(m):<font color="red">'
							+ getOneDecimal(amountChecked) + '</font>');
				}).defer(100);
			}, this);

	// this.queryPanel.planWeek.setValue(getCurrentWeekNumber());

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
				if (C.length > 1) {
					Ext.Msg.alert('系统提示', '不能批量删除');
					return false;
				}

				var r = C[0];
				var cnt = r.data.cnt;
				if (cnt > 0) {
					Ext.Msg.alert('系统提示', ' 已经制定日计划，不能删除');
					return false;
				}
			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				if (this.opt == 'editplanweek') {
					this.editPlanWeekWindow.show();
					this.editPlanWeekWindow.loadData(cell);
				}
				if (this.opt == 'editplanday') {
					this.editPlanDayWindow.show();
					this.editPlanDayPanel.loadData(cell);
				}
				if (this.opt == 'editplanroll') {
					this.editPlanRollWindow.show();
					this.editPlanRollPanel.loadData(cell);
				}
				if (this.opt == 'editplanweekdays') {
					var relationId = cell.get('id');
					var store = this.listPanel3.store;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.planWeekDaysWindow.show();

				}
				if (this.opt == 'addplanweekdays') {
					this.addPlanWeekDaysWindow.show();
					this.addPlanWeekDaysWindow.loadData(cell);
				}

			}, this);

	this.editPlanDayListPanel.mon(this.editPlanDayListPanel, 'update',
			function(gird, cell) {
				this.planDayWindow2.show();
				this.planDayWindow2.loadData(cell);

			}, this);

	this.editPlanRollListPanel.mon(this.editPlanRollListPanel, 'update',
			function(gird, cell) {
				this.planRollWindow2.show();
				this.planRollWindow2.loadData(cell);

			}, this);

	this.editPlanDayPanel.mon(this.editPlanDayPanel, 'afterload', function() {
				var relationId = this.editPlanDayPanel.relationId.getValue();
				var store = this.editPlanDayListPanel.store;
				store.load({
							params : {
								'condition/relationId' : relationId
							}
						});
			}, this)

	this.editPlanRollPanel.mon(this.editPlanRollPanel, 'afterload', function() {
				var relationId = this.editPlanRollPanel.relationId.getValue();
				var store = this.editPlanRollListPanel.store;
				store.load({
							params : {
								'condition/relationId' : relationId
							}
						});
			}, this)

	this.planRollWindow.activeItem.mon(this.planRollWindow.activeItem,
			'beforeSave', function() {
				var itemArr = [];
				var myCheckboxGroup = this.planRollWindow.myCheckboxGroup;
				for (var i = 0; i < myCheckboxGroup.items.length; i++) {
					if (myCheckboxGroup.items.itemAt(i).checked) {
						itemArr.push(i);
					}
				}
				this.planRollWindow.risk.setValue(itemArr.join(','));
			}, this);

	this.planRollWindow2.activeItem.mon(this.planRollWindow2.activeItem,
			'beforeSave', function() {
				var itemArr = [];
				var myCheckboxGroup = this.planRollWindow2.myCheckboxGroup;
				for (var i = 0; i < myCheckboxGroup.items.length; i++) {
					if (myCheckboxGroup.items.itemAt(i).checked) {
						itemArr.push(i);
					}
				}
				this.planRollWindow2.risk.setValue(itemArr.join(','));
			}, this);

	this.planDayWindow2.activeItem.mon(this.planDayWindow2.activeItem,
			'afterload', function() {
				var numPerWad = this.planDayWindow2.numPerWad.getValue();
				var blankingSize = this.planDayWindow2.blankingSize.getValue();
				var jmAmount = this.planDayWindow2.jmAmount.getValue();
				var useAmount = numPerWad * blankingSize * jmAmount;
				this.planDayWindow2.useAmount.setValue(useAmount.toFixed(1));
			}, this);

	this.addPlanWeekDaysWindow.activeItem.mon(
			this.addPlanWeekDaysWindow.activeItem, 'beforeSave', function() {
				var oldEndDate = this.addPlanWeekDaysWindow.oldEndDate
						.getValue();
				var newEndDate = this.addPlanWeekDaysWindow.newEndDate
						.getValue();
				if (newEndDate <= oldEndDate) {
					Ext.Msg.alert('提示', '新作业结束日期必须大于原作业结束日期！')
					return false;
				}

			}, this);

}

com.keensen.ump.produce.component.planweekMgr.prototype.onEdit = function() {
	this.opt = 'editplanweek';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onEditPlanDay = function() {
	this.opt = 'editplanday';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onEditPlanRoll = function() {
	this.opt = 'editplanroll';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onAddPlan = function() {
	var relationId = this.editPlanDayPanel.relationId.getValue();
	var orderId = this.editPlanDayPanel.orderId.getValue();
	var startDate = this.editPlanDayPanel.startDate.getValue();
	var endDate = this.editPlanDayPanel.endDate.getValue();
	var materSpecId = this.editPlanDayPanel.materSpecId.getValue();
	var materSpecName = this.editPlanDayPanel.materSpecName.getValue();
	var orderNo = this.editPlanDayPanel.orderNo.getValue();

	var numPerWad = this.editPlanDayPanel.numPerWad.getValue();
	var blankingSize = this.editPlanDayPanel.blankingSize.getValue();
	var denseNet = this.editPlanDayPanel.denseNet.getValue();
	var area = this.editPlanDayPanel.area.getValue();
	// var pageWidth = this.editPlanDayPanel.pageWidth.getValue();

	var pageWidth = this.editPlanDayPanel.mpWidth.getValue();
	var saltLow = this.editPlanDayPanel.saltLow.getValue();
	var gpdLow = this.editPlanDayPanel.gpdLow.getValue();
	var mp = this.editPlanDayPanel.mp.getValue();

	// var records = this.listPanel.getSelectionModel().getSelections();
	// var r = records[0];

	this.planDayWindow.planDate.store.load({
				params : {
					// 'condition/startDate' : startDate,
					// 'condition/endDate' : endDate
					'condition/relationId' : relationId
				}
			});
	// 取消加载2026-03-19
	// this.planDayWindow.batchNoFrom.store.load({
	// params : {
	// 'condition/prodSpecId' : materSpecId
	// }
	// });
	// this.planDayWindow.batchNoFrom2.store.load({
	// params : {
	// 'condition/prodSpecId' : materSpecId,
	// 'condition/choose' : 1
	// }
	// });
	this.planDayWindow.relationId.setValue(relationId);
	this.planDayWindow.orderId.setValue(orderId);
	this.planDayWindow.materSpecName.setValue(materSpecName);
	this.planDayWindow.orderNo.setValue(orderNo);
	this.planDayWindow.numPerWad.setValue(numPerWad);
	this.planDayWindow.blankingSize.setValue(blankingSize);
	this.planDayWindow.denseNet.setValue(denseNet);
	this.planDayWindow.area.setValue(area);
	this.planDayWindow.pageWidth.setValue(pageWidth);

	this.planDayWindow.saltLow.setValue(saltLow);
	this.planDayWindow.gpdLow.setValue(gpdLow);
	this.planDayWindow.mp.setValue(mp);

	this.planDayWindow.show();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onAddPlanRoll = function() {
	var relationId = this.editPlanRollPanel.relationId.getValue();
	var orderId = this.editPlanRollPanel.orderId.getValue();
	var startDate = this.editPlanRollPanel.startDate.getValue();
	var endDate = this.editPlanRollPanel.endDate.getValue();

	this.planRollWindow.relationId.setValue(relationId);
	this.planRollWindow.orderId.setValue(orderId);
	this.planRollWindow.show();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onEditPlan = function() {

	var editRecords = this.editPlanDayListPanel.getSelectionModel()
			.getSelections();
	if (null == editRecords || editRecords.length == 0) {
		Ext.Msg.alert('提示', '请选择修改数据行！')
		return false
	}

	var relationId = this.editPlanDayPanel.relationId.getValue();
	var startDate = this.editPlanDayPanel.startDate.getValue();
	var endDate = this.editPlanDayPanel.endDate.getValue();
	var materSpecId = this.editPlanDayPanel.materSpecId.getValue();
	var materSpecName = this.editPlanDayPanel.materSpecName.getValue();
	var orderNo = this.editPlanDayPanel.orderNo.getValue();

	var numPerWad = this.editPlanDayPanel.numPerWad.getValue();
	var blankingSize = this.editPlanDayPanel.blankingSize.getValue();
	var denseNet = this.editPlanDayPanel.denseNet.getValue();
	var area = this.editPlanDayPanel.area.getValue();
	var pageWidth = this.editPlanDayPanel.pageWidth.getValue();

	// var records = this.listPanel.getSelectionModel().getSelections();
	// var r = records[0];

	this.planDayWindow2.batchNoFrom.store.load({
				params : {
					'condition/prodSpecId' : materSpecId
				}
			});

	this.planDayWindow2.batchNoFrom2.store.load({
				params : {
					'condition/prodSpecId' : materSpecId,
					'condition/choose' : 1
				}
			});

	this.planDayWindow2.planDate.store.load({
				params : {
					// 'condition/startDate' : startDate,
					// 'condition/endDate' : endDate
					'condition/relationId' : relationId
				}
			});
	this.planDayWindow2.pageWidth.setValue(pageWidth);
	this.planDayWindow2.numPerWad.setValue(numPerWad);
	this.planDayWindow2.blankingSize.setValue(blankingSize);
	this.planDayWindow2.denseNet.setValue(denseNet);
	this.planDayWindow2.area.setValue(area);
	this.editPlanDayListPanel.onEdit();
	this.planDayWindow2.materSpecName.setValue(materSpecName);
	this.planDayWindow2.orderNo.setValue(orderNo);

}

com.keensen.ump.produce.component.planweekMgr.prototype.onModifyPlanRoll = function() {
	this.editPlanRollListPanel.onEdit();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onDelPlan = function() {
	this.editPlanDayListPanel.onDel();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onDelPlanRoll = function() {
	this.editPlanRollListPanel.onDel();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onPlanWeekDetail = function() {
	this.opt = 'editplanweekdays';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onSaveWeekDays = function() {

	var _this = this;

	var records = this.listPanel3.store.getRange();
	for (var i = 0; i < records.length; i++) {
		var j = i + 1;
		if (Ext.isEmpty(records[i].data.amount)) {
			Ext.Msg.alert('提示', '检查项目中第' + j + '行的数量为空！')
			return false
		}
	}
	var details = [];

	Ext.each(records, function(r) {
				var d = {
					'id' : r.data['id'],
					'amount' : r.data['amount'],
					'productOrder' : r.data['productOrder'],
					'orderRemark' : r.data['orderRemark']
				}
				details.push(d);

			});
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.neworder.saveWeekDays.biz.ext',
		jsonData : {
			weekdays : details
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Msg.alert("系统提示", "保存成功", function() {
							_this.planWeekDaysWindow.hide();
						});
			}
		}
	});

}

com.keensen.ump.produce.component.planweekMgr.prototype.onAddPlanWeekDays = function() {
	this.opt = 'addplanweekdays';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.planweekMgr.prototype.destroy = function() {
	this.editPlanWeekWindow.destroy();
	this.editPlanDayWindow.destroy();
	this.planDayWindow.destroy();
	this.planDayWindow2.destroy();
	this.editPlanRollWindow.destroy();
	this.planRollWindow.destroy();
	this.planRollWindow2.destroy();
	this.planWeekDaysWindow.destroy();
	this.addPlanWeekDaysWindow.destroy();
}

com.keensen.ump.produce.component.planweekMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '生产主计划',
			'com.keensen.ump.produce.component.order.queryPlanWeek', '0,1');

}

com.keensen.ump.produce.component.planweekMgr.prototype.setDefaultValue = function() {
	var store = this.listPanel3.store;
	var amount = Ext.getCmp(defaultValueId).getValue();
	if (Ext.isEmpty(amount))
		return;
	var records = store.getRange();
	for (var i = 0; i < records.length; i++) {
		var rec = records[i];
		rec.set('amount', amount);
	}

}

// 以下为新膜片挑选方法
com.keensen.ump.produce.component.planweekMgr.prototype.onChooseMpSpec = function() {

	this.chooseMpSpecWindow.show();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onSelect4ChooseMpSpec = function() {
	var A = this.chooseMpSpecPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();

		var specIds = [];
		var specNames = []
		Ext.each(records, function(r) {
					specIds.push(r.data.id);
					specNames.push(r.data.name);
				})

		this.addPlanDayListPanel.mpSpecName.setValue(specNames.join(','));
		this.addPlanDayListPanel.mpSpecId.setValue(specIds.join(','));
		this.chooseMpSpecWindow.hide();
	}
}

com.keensen.ump.produce.component.planweekMgr.prototype.onChooseStorage = function() {

	this.chooseStorageWindow.show();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onSelect4ChooseStorage = function() {

	var A = this.chooseStoragePanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();

		var storageIds = [];
		var storageNames = []
		Ext.each(records, function(r) {
					storageIds.push(r.data.id);
					storageNames.push(r.data.name);
				})

		this.addPlanDayListPanel.storage.setValue(storageNames.join(','));
		this.addPlanDayListPanel.storageId.setValue(storageIds.join(','));
		this.chooseStorageWindow.hide();
	}
}

com.keensen.ump.produce.component.planweekMgr.prototype.onCalc = function() {

	var _this = this;
	var specIds = this.addPlanDayListPanel.mpSpecId.getValue();
	var storageIds = this.addPlanDayListPanel.storageId.getValue();
	var factor = this.addPlanDayListPanel.factor.getValue();
	var area = this.planDayWindow.area.getValue();
	var orderId = this.planDayWindow.orderId.getValue();

	var planDate = this.planDayWindow.planDate.getValue();
	var useAmount = this.planDayWindow.useAmount.getValue();

	if (Ext.isEmpty(planDate)) {
		Ext.Msg.alert("系统提示", "请选择计划日期！");
		return;
	}

	if (Ext.isEmpty(specIds) || Ext.isEmpty(storageIds) || Ext.isEmpty(factor)) {
		Ext.Msg.alert("系统提示", "膜片型号、仓库、换算系数均为必填项！");
		return;
	}
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在计算中，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.mpselect.saveSelect.biz.ext',
				jsonData : {
					storageIds : storageIds,
					specIds : specIds,
					orderId : orderId
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						_this.chooseTumoPanel.store.load({
									params : {
										'condition/factor' : factor,
										'condition/area' : area
									}
								});
						var saltLow = _this.planDayWindow.saltLow.getValue();
						var gpdLow = _this.planDayWindow.gpdLow.getValue();

						Ext.getCmp(saltLowId).setValue('脱盐率(%):' + saltLow);
						Ext.getCmp(gpdLowId).setValue('产水量范围(GPD):' + gpdLow);
						Ext.getCmp(useAmountId).setValue('膜片用量:' + useAmount);
						_this.chooseTumoWindow.show();
					}
				}
			});
}

com.keensen.ump.produce.component.planweekMgr.prototype.onSelect4ChooseTumo = function() {
	var A = this.chooseTumoPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var store = this.addPlanDayListPanel.store;

		Ext.each(records, function(r) {
					var rd = new Ext.data.Record({
								meterAmount : r.data.amount,
								batchNo : r.data.mpBatchNo,
								storageName : r.data.storageName,
								storagePosition : r.data.storagePosition,
								ifMix : '否',
								mpRemark : '',
								mpMinSaltRejection : r.data.mpMinSaltRejection,
								yjGpdLowLimit2 : r.data.yjGpdLowLimit2
							})
					store.add(rd);
				})

		this.chooseTumoWindow.hide();
	}
}

com.keensen.ump.produce.component.planweekMgr.prototype.onSaveAdd = function() {

	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	var A = this.addPlanDayListPanel;
	var records = A.store.getRange();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "没有数据可以保存！");
		return;
	} else {

		var relationId = this.planDayWindow.relationId.getValue();
		var orderId = this.planDayWindow.orderId.getValue();
		var planDate = this.planDayWindow.planDate.getValue();
		var jmAmount = this.planDayWindow.jmAmount.getValue();

		if (Ext.isEmpty(planDate)) {
			Ext.Msg.alert("系统提示", "请选择计划日期！");
			return;
		}

		var entitys = [];
		Ext.each(records, function(r) {
					var rd = {
						meterAmount : r.data.meterAmount,
						batchNo : r.data.batchNo,
						storageName : r.data.storageName,
						storagePosition : r.data.storagePosition,
						ifMix : r.data.ifMix,
						mpRemark : r.data.mpRemark,
						relationId : relationId,
						orderId : orderId,
						planDate : planDate,
						jmAmount : jmAmount,
						mpMinSaltRejection : r.data.mpMinSaltRejection,
						yjGpdLowLimit2 : r.data.yjGpdLowLimit2
					}
					entitys.push(rd);
				})
		var mk = new Ext.LoadMask(document.body, {
					msg : '正在计算中，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.component.neworder.saveBatchPlanDay.biz.ext',
			jsonData : {
				entitys : entitys
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {

					A.store.removeAll();
					_this.addPlanDayPanel.form.reset();
					_this.editPlanDayListPanel.store.load({
								params : {
									'condition/relationId' : B[0].data.id
								}
							});
					_this.planDayWindow.hide();
				}
			}
		});

	}
}

com.keensen.ump.produce.component.planweekMgr.prototype.onDelChoose = function() {

	var A = this.addPlanDayListPanel;
	A.store.remove(A.getSelectionModel().getSelected());
	A.store.fireEvent('datachanged'); // 通知 Store 数据已更改

}

com.keensen.ump.produce.component.planweekMgr.prototype.onInputAdd = function() {
	this.inputAddPanel.form.reset();
	this.inputAddWindow.show();
}

com.keensen.ump.produce.component.planweekMgr.prototype.onConfirm4InputAdd = function() {

	var store = this.addPlanDayListPanel.store;
	var rd = new Ext.data.Record({
				meterAmount : this.inputAddWindow.meterAmount.getValue(),
				batchNo : this.inputAddWindow.batchNo.getValue(),
				storageName : this.inputAddWindow.storageName.getValue(),
				storagePosition : this.inputAddWindow.storagePosition
						.getValue(),
				ifMix : '否',
				mpRemark : '',
				mpMinSaltRejection : this.inputAddWindow.mpMinSaltRejection
						.getValue(),
				yjGpdLowLimit2 : this.inputAddWindow.yjGpdLowLimit2.getValue()
			})
	store.add(rd);
	store.fireEvent('datachanged');
	this.inputAddWindow.hide();
}

function getOneDecimal(num) {
	return Math.floor(num * 10) / 10;
}