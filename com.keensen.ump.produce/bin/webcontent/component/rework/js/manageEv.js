com.keensen.ump.produce.component.reworkMgr.prototype.initEvent = function() {
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
	this.queryPanel2.mon(this.queryPanel2, 'query', function(form, vals) {
				var orderNo = vals['condition/orderNo'];
				if (Ext.isEmpty(orderNo)) {
					Ext.Msg.alert("系统提示", "请输入订单编号！");
					return false;
				}
				var store = this.listPanel2.store;
				store.baseParams = vals;
				store.load();
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var step = cell.data.step;
				if (this.opt == 'editfirst' && step == 'second') {
					this.editWindow.show();
					this.editWindow.loadData(cell);
				} else if (this.opt == 'editfirst' && step != 'second') {
					Ext.Msg.alert("系统提示", "不能修改已经审批的数据！");
					return false;
				}

				if (this.opt == 'editsecond' && step == 'second') {
					this.secondWindow.show();
					this.secondWindow.loadData(cell);
				} else if (this.opt == 'editsecond' && step != 'second') {
					Ext.Msg.alert("系统提示", "请选择当前环节为下达指令的数据！");
					return false;
				}

				if (this.opt == 'editthird' && step == 'third') {
					this.thirdWindow.show();
					this.thirdWindow.loadData(cell);
				} else if (this.opt == 'editthird' && step != 'third') {
					Ext.Msg.alert("系统提示", "请选择当前环节为返工安排的数据！");
					return false;
				}

				if (this.opt == 'editfourth' && step == 'fourth') {
					this.fourthWindow.show();
					this.fourthWindow.loadData(cell);
				} else if (this.opt == 'editfourth' && step != 'fourth') {
					Ext.Msg.alert("系统提示", "请选择当前环节为结果确认的数据！");
					return false;
				}
			}, this);

	this.fourthWindow.activeItem.mon(this.fourthWindow.activeItem,
			'beforeSave', function() {
				var ifOntime = this.fourthWindow.ifOntime.getValue();
				var notOntime = this.fourthWindow.notOntime.getValue();

				if (ifOntime.toUpperCase() == 'N' && Ext.isEmpty(notOntime)) {
					Ext.Msg.alert("系统提示", "请填写延时完成说明！");
					return false;
				}
			}, this);

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var step = r.data.step;
				var createUserId = r.data.createUserId;

				if (createUserId != uid) {
					Ext.Msg.alert('系统提示', '非本人工单不能删除');
					return false;
				}

				if (step == 'finish') {
					Ext.Msg.alert('系统提示', '完成状态的不能删除');
					return false;
				}
			})

}

com.keensen.ump.produce.component.reworkMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.reworkMgr.prototype.onAdd = function() {
	this.inputWindow.show();
}

com.keensen.ump.produce.component.reworkMgr.prototype.onEdit = function() {
	this.opt = 'editfirst';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.reworkMgr.prototype.onSecond = function() {
	this.opt = 'editsecond';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.reworkMgr.prototype.onThird = function() {
	this.opt = 'editthird';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.reworkMgr.prototype.onFourth = function() {
	this.opt = 'editfourth';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.reworkMgr.prototype.onChooseWindowShow = function() {
	var orderNo = this.editWindow.hidden
			? this.inputWindow.orderNo.getValue()
			: this.editWindow.orderNo.getValue();
	if (!Ext.isEmpty(orderNo)) {
		this.queryPanel2.orderNo.setValue(orderNo);
		var store = this.listPanel2.store;
		store.baseParams = {
			'condition/orderNo' : orderNo
		};
		store.load();
	}

	this.chooseWindow.show();
}

com.keensen.ump.produce.component.reworkMgr.prototype.onChoose = function() {
	var A = this.listPanel2;

	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var arr = [];
		var prodSpecId = records[0].get('materSpecId');
		for (var i = 0; i < records.length; i++) {
			var batchNo = records[i].get('batchNo');
			arr.push(batchNo);
		}
		if (this.inputWindow.hidden) {
			this.editWindow.items.items[0].form.findField('entity/batchNoStr')
			 .setValue(arr.join(','));
			this.editWindow.items.items[0].form.findField('entity/prodSpecId')
					.setValue(prodSpecId);
		} else {
			this.inputWindow.items.items[0].form.findField('entity/batchNoStr')
					.setValue(arr.join(','));
			this.inputWindow.items.items[0].form.findField('entity/prodSpecId')
					.setValue(prodSpecId);
		}
		this.chooseWindow.hide();
	}
}

com.keensen.ump.produce.component.reworkMgr.prototype.onView = function() {
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

com.keensen.ump.produce.component.reworkMgr.prototype.onPrint = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		window.open('com.keensen.ump.produce.component.rework.flow?entity/id='
						+ id, "top");

	}

};
com.keensen.ump.produce.component.reworkMgr.prototype.destroy = function() {
	this.inputWindow.destroy();
	this.editWindow.destroy();
	this.chooseWindow.destroy();
	this.secondWindow.destroy();
	this.thirdWindow.destroy();
	this.fourthWindow.destroy();
	this.viewWindow.destroy();
}
