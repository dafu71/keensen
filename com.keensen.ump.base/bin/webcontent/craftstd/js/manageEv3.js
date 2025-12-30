com.keensen.ump.base.CraftStdMgr.prototype.initEvent = function() {

	this.initList();

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				var store = this.listPanel.store;
				store.baseParams = vals;
				store.load({});
			}, this);

	this.queryPanel4ChoosePackage.mon(this.queryPanel4ChoosePackage, 'query',
			function(form, vals) {
				var store = this.listPanel4ChoosePackage.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChoosePackage.pagingToolbar.pageSize
					}
				});
			}, this);

	this.queryPanel4ChoosePackageCoiling.mon(
			this.queryPanel4ChoosePackageCoiling, 'query',
			function(form, vals) {
				var store = this.listPanel4ChoosePackageCoiling.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChoosePackageCoiling.pagingToolbar.pageSize
					}
				});
			}, this);

	this.queryPanel4ChoosePackageTrim.mon(this.queryPanel4ChoosePackageTrim,
			'query', function(form, vals) {
				var store = this.listPanel4ChoosePackageTrim.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChoosePackageTrim.pagingToolbar.pageSize
					}
				});
			}, this);

	this.queryPanel4ChoosePackageQj.mon(this.queryPanel4ChoosePackageQj,
			'query', function(form, vals) {
				var store = this.listPanel4ChoosePackageQj.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChoosePackageQj.pagingToolbar.pageSize
					}
				});
			}, this);

	this.queryPanel4ChoosePackageRs.mon(this.queryPanel4ChoosePackageRs,
			'query', function(form, vals) {
				var store = this.listPanel4ChoosePackageRs.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChoosePackageRs.pagingToolbar.pageSize
					}
				});
			}, this);

	this.queryPanel4ChoosePackageWater.mon(this.queryPanel4ChoosePackageWater,
			'query', function(form, vals) {
				var store = this.listPanel4ChoosePackageWater.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChoosePackageWater.pagingToolbar.pageSize
					}
				});
			}, this);

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
					_this.listPanel.materSpecId.setValue(r.data['materSpecId']);
					_this.listPanel.materSpecName
							.setValue(r.data['materSpecName']);
				}).defer(100);
			}, this);

	this.listPanel.selModel.on('rowdeselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = {};
					_this.listPanel.materSpecId.setValue('');
					_this.listPanel.materSpecName.setValue('');
				}).defer(100);
			}, this);
}

com.keensen.ump.base.CraftStdMgr.prototype.modifyMater = function(materSpecId,
		field, fieldDescribe, newValue, oldValue) {

	var _this = this;

	var craftNo = _this.rec.data['craftNo'];

	var craftArr = ['numPerWad', 'blankingSize', 'mpWidth', 'denseNet',
			'denseNetWidth', 'denseNetSpan', 'lightNetLongType',
			'lightNetLongPage', 'lightNetLongSpan', 'lightNetShortType',
			'lightNetShortPage', 'drawNetShortWidth', 'pipe'];

	if (!Ext.isEmpty(craftNo) && craftArr.indexOf(field) > -1) {
		Ext.Msg.alert("系统提示", fieldDescribe + "是工艺包项目，不能修改！");
		return false;
	}

	if (field == 'pressureArange' && !isValidRealNumberPattern(newValue)) {
		Ext.Msg.alert("系统提示", "泄压值范围格式错误！");
		return false;
	}

	// 此处加权限判定
	if (modifyLimit != 1)
		return false;
	var obj = {};
	obj['entity/materSpecId'] = materSpecId;
	obj['entity/' + field] = newValue;
	obj['entity/newValue'] = newValue;
	obj['entity/oldValue'] = oldValue;
	obj['entity/fieldDescribe'] = fieldDescribe;
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.qinsen.std.modifyMater.biz.ext',
				jsonData : obj,
				success : function(response, action) {
					var ret = Ext.decode(response.responseText);
					if (ret.success) {
						Ext.Msg.alert("系统提示", fieldDescribe + "修改成功！",
								function() {
									_this.listPanel.store.reload();
								});

					} else {
						Ext.Msg.alert("系统提示", fieldDescribe + "修改失败！");
					}
				}
			});
}

com.keensen.ump.base.CraftStdMgr.prototype.onAdd = function() {

	this.inputWindow.show();
	this.inputWindow.preparationTime.setValue(formatDate(new Date()));
	this.inputWindow.prodType.setValue('公司标准');
}

com.keensen.ump.base.CraftStdMgr.prototype.onModify = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var cell = C[0];
		this.editWindow.show();
		this.editWindow.loadData(cell);
	}
}

com.keensen.ump.base.CraftStdMgr.prototype.onAdd2 = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var cell = C[0];
		this.copyWindow.show();
		this.copyWindow.loadData(cell);
	}
}

com.keensen.ump.base.CraftStdMgr.prototype.onChoosePackage = function() {

	this.choosePackageWindow.show();
}

com.keensen.ump.base.CraftStdMgr.prototype.onChoosePackageCoiling = function() {

	this.choosePackageCoilingWindow.show();
}

com.keensen.ump.base.CraftStdMgr.prototype.onChoosePackageTrim = function() {

	this.choosePackageTrimWindow.show();
}

com.keensen.ump.base.CraftStdMgr.prototype.onChoosePackageQj = function() {

	this.choosePackageQjWindow.show();
}

com.keensen.ump.base.CraftStdMgr.prototype.onChoosePackageRs = function() {

	this.choosePackageRsWindow.show();
}

com.keensen.ump.base.CraftStdMgr.prototype.onChoosePackageWater = function() {

	this.choosePackageWaterWindow.show();
}

com.keensen.ump.base.CraftStdMgr.prototype.onSelect4ChoosePackageWater = function() {

	var A = this.listPanel4ChoosePackageWater;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var craftNo = records[0].data.craftNo;

		var obj = this.inputWindow.isVisible()
				? this.inputWindow
				: this.editWindow.isVisible()
						? this.editWindow
						: this.copyWindow;

		obj.craftNoWater.setValue(craftNo);

		this.choosePackageWaterWindow.hide();
	}

}

com.keensen.ump.base.CraftStdMgr.prototype.onSelect4ChoosePackageRs = function() {

	var A = this.listPanel4ChoosePackageRs;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var craftNo = records[0].data.craftNo;

		var obj = this.inputWindow.isVisible()
				? this.inputWindow
				: this.editWindow.isVisible()
						? this.editWindow
						: this.copyWindow;

		obj.craftNoRs.setValue(craftNo);

		this.choosePackageRsWindow.hide();
	}

}

com.keensen.ump.base.CraftStdMgr.prototype.onSelect4ChoosePackageQj = function() {

	var A = this.listPanel4ChoosePackageQj;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var craftNo = records[0].data.craftNo;

		var obj = this.inputWindow.isVisible()
				? this.inputWindow
				: this.editWindow.isVisible()
						? this.editWindow
						: this.copyWindow;

		obj.craftNoQj.setValue(craftNo);

		this.choosePackageQjWindow.hide();
	}

}

com.keensen.ump.base.CraftStdMgr.prototype.onSelect4ChoosePackageTrim = function() {

	var A = this.listPanel4ChoosePackageTrim;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var craftNo = records[0].data.craftNo;

		var obj = this.inputWindow.isVisible()
				? this.inputWindow
				: this.editWindow.isVisible()
						? this.editWindow
						: this.copyWindow;

		obj.craftNoTrim.setValue(craftNo);

		this.choosePackageTrimWindow.hide();
	}

}

com.keensen.ump.base.CraftStdMgr.prototype.onSelect4ChoosePackageCoiling = function() {

	var A = this.listPanel4ChoosePackageCoiling;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var craftNo = records[0].data.craftNo;

		var obj = this.inputWindow.isVisible()
				? this.inputWindow
				: this.editWindow.isVisible()
						? this.editWindow
						: this.copyWindow;

		obj.craftNoCoiling.setValue(craftNo);

		this.choosePackageCoilingWindow.hide();
	}

}

com.keensen.ump.base.CraftStdMgr.prototype.onSelect4ChoosePackage = function() {

	var A = this.listPanel4ChoosePackage;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var craftNo = records[0].data.craftNo;

		var obj = this.inputWindow.isVisible()
				? this.inputWindow
				: this.editWindow.isVisible()
						? this.editWindow
						: this.copyWindow;

		obj.craftNo.setValue(craftNo);

		this.choosePackageWindow.hide();
	}

}

com.keensen.ump.base.CraftStdMgr.prototype.initList = function() {
	var findElement2 = function(arr, target) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === target) {
				return i; // 返回索引
			}
		}
		return -1; // 未找到返回-1
	}
	var arr = ['膜页数', '膜片长度(m)', '膜片宽度（m）', '浓网型号(mil)', '浓网长度(mm)',
			'浓网宽度(mm)', '长页淡网型号', '长页淡网长度(mm)', '长页淡网宽度(mm)', '短页淡网型号',
			'短页淡网长度(mm)', '短页淡网宽度(mm)', '膜面积（ft²）', '叠膜工艺', '卷膜工艺', '中心管型号',
			'卷膜胶带材质', '白膜直径下限(mm)', '白膜直径上限(mm)', '白膜进水端中心管长下限(mm)',
			'白膜进水端中心管长上限(mm)', '白膜出水端中心管长下限(mm)', '白膜出水端中心管长上限(mm)', '气检形式',
			'气检压力下限(kPa)', '气检压力上限(kPa)', '保压时间(s)', '泄压值范围下限(kPa)',
			'泄压值范围上限(kPa)', '直径下限(mm)', '直径上限(mm)', '绕丝工艺', '测试液种类',
			'测试液溶液(mg/L)', '压力psi(MPa)', '温度(℃)', 'pH', '回收率(%)'];
	var cm = this.listPanel.getColumnModel(); // 获取列模型
	var length = cm.getColumnCount();
	for (var i = 0; i < length; i++) {
		var title2 = cm.getColumnHeader(i);
		if (findElement2(arr, title2) > -1)
			cm.setHidden(i, true);
	}
}

function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}

function isValidRealNumberPattern(str) {
	const regex = /^(\d+(\.\d+)?)-(\d+(\.\d+)?)$/;
	return regex.test(str);
}