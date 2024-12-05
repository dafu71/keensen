com.keensen.ump.produce.component.applys.reworkMgr.prototype.initEvent = function() {
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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var step = cell.data.step;
				if (this.opt == 'editfirst'
						&& (step == 'second' || step == 'third')) {
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

				if (this.opt == 'editthirdhalf' && step == 'thirdhalf') {
					this.thirdHalfWindow.show();
					this.thirdHalfWindow.loadData(cell);
				} else if (this.opt == 'editthirdhalf' && step != 'thirdhalf') {
					Ext.Msg.alert("系统提示", "请选择当前环节为返工实施的数据！");
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

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {
				var batchNoStr = this.inputWindow.batchNoStr.getValue();
				if (!Ext.isEmpty(batchNoStr)) {
					var regEx = new RegExp("\\n", "gi");
					batchNoStr = batchNoStr.replace(regEx, ",");
					batchNoStr = batchNoStr.replaceAll('，', ',');
					batchNoStr = batchNoStr.replaceAll(' ', '');
					var arr = [];
					arr = batchNoStr.split(',');
					var arr2 = [];
					for (var i = 0; i < arr.length; i++) {
						arr2.push("'" + arr[i] + "'");
					}
					this.inputWindow.batchNoStr2
							.setValue(arr2.join(",") == "''" ? null : arr2
									.join(","));
				}

				var itemArr = [];
				var myCheckboxGroup = this.inputWindow.myabnormal;
				for (var i = 0; i < myCheckboxGroup.items.length; i++) {
					if (myCheckboxGroup.items.itemAt(i).checked) {
						itemArr.push(i);
					}
				}
				this.inputWindow.abnormal.setValue(itemArr.join(','));
			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function() {
				var batchNoStr = this.editWindow.batchNoStr.getValue();
				if (!Ext.isEmpty(batchNoStr)) {
					var regEx = new RegExp("\\n", "gi");
					batchNoStr = batchNoStr.replace(regEx, ",");
					batchNoStr = batchNoStr.replaceAll('，', ',');
					batchNoStr = batchNoStr.replaceAll(' ', '');
					var arr = [];
					arr = batchNoStr.split(',');
					var arr2 = [];
					for (var i = 0; i < arr.length; i++) {
						arr2.push("'" + arr[i] + "'");
					}
					this.editWindow.batchNoStr2.setValue(arr2.join(",") == "''"
							? null
							: arr2.join(","));
				}

				var itemArr = [];
				var myCheckboxGroup = this.editWindow.myabnormal;
				for (var i = 0; i < myCheckboxGroup.items.length; i++) {
					if (myCheckboxGroup.items.itemAt(i).checked) {
						itemArr.push(i);
					}
				}
				this.editWindow.abnormal.setValue(itemArr.join(','));
			}, this);

	this.viewWindow.loadData = function() {
		var B = _this.listPanel.getSelectionModel().getSelections();
		var A = B[0];
		_this.viewWindow.items.items[0].loadData(A);

	};
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.destroy = function() {
	this.inputWindow.destroy();
	this.secondWindow.destroy();
	this.editWindow.destroy();
	this.thirdWindow.destroy();
	this.thirdHalfWindow.destroy();
	this.fourthWindow.destroy();
	this.viewWindow.destroy();
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.onAdd = function() {
	this.inputWindow.show();
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.onAddSave = function() {
	this.inputWindow.step.setValue('second');
	this.inputWindow.saveData();
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.onAddSave2 = function() {
	this.inputWindow.step.setValue('third');
	this.inputWindow.saveData();
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.onEdit = function() {
	this.opt = 'editfirst';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.onSecond = function() {
	this.opt = 'editsecond';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.onThird = function() {
	this.opt = 'editthird';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.onThirdHalf = function() {
	this.opt = 'editthirdhalf';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.onFourth = function() {
	this.opt = 'editfourth';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.applys.reworkMgr.prototype.onView = function() {
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