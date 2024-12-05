com.keensen.ump.produce.component.planweekMgr.prototype.initEvent = function() {
	var _this = this;

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
	var pageWidth = this.editPlanDayPanel.pageWidth.getValue();

	//var records = this.listPanel.getSelectionModel().getSelections();
	//var r = records[0];

	this.planDayWindow.planDate.store.load({
				params : {
					// 'condition/startDate' : startDate,
					// 'condition/endDate' : endDate
					'condition/relationId' : relationId
				}
			});

	this.planDayWindow.batchNoFrom.store.load({
				params : {
					'condition/prodSpecId' : materSpecId
				}
			});
	this.planDayWindow.batchNoFrom2.store.load({
				params : {
					'condition/prodSpecId' : materSpecId,
					'condition/choose' : 1
				}
			});
	this.planDayWindow.relationId.setValue(relationId);
	this.planDayWindow.orderId.setValue(orderId);
	this.planDayWindow.materSpecName.setValue(materSpecName);
	this.planDayWindow.orderNo.setValue(orderNo);
	this.planDayWindow.numPerWad.setValue(numPerWad);
	this.planDayWindow.blankingSize.setValue(blankingSize);
	this.planDayWindow.denseNet.setValue(denseNet);
	this.planDayWindow.area.setValue(area);
	this.planDayWindow.pageWidth.setValue(pageWidth);

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

	//var records = this.listPanel.getSelectionModel().getSelections();
	//var r = records[0];

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