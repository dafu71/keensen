com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.initEvent = function() {

	var _this = this;
	this.formulas = {
		'PVA-165' : {
			pva : 1,
			c51 : 1,
			c23 : 0.12,
			ro : 97.88
		},
		'PVA-205' : {
			pva : 1,
			c51 : 2.0,
			c23 : 0.5,
			ro : 96.5
		},
		'PVA540' : {
			pva : 2,
			c51 : 1.5,
			c23 : 0.5,
			ro : 96
		}
		/*
		 * 'PVA540-S' : { pva : 2, c51 : 1.5, c23 : 0.5, ro : 96 }, 'PVA540-U' : {
		 * pva : 0.5, c51 : 0.625, c23 : 0.125, ro : 98.75 }
		 */
	}

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
				var state = r.get('state');
				if (state == '完结') {
					Ext.Msg.alert('系统提示', '已完结记录不能删除');
					return false;
				}

			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var state = cell.get('state');
				var relationId = cell.get('id');
				var batchNo = cell.get('batchNo');
				var type = cell.get('type');

				if (opt == 'viewlist') {
					var store = this.listPanel4Dilute.store;
					store.load({
								params : {
									"condition/relationId" : relationId
								}
							});
					this.queryPanel4Dilute.relationId.setValue(relationId);
					this.queryPanel4Dilute.batchNo.setValue(batchNo);
					this.queryPanel4Dilute.type.setValue(type);

					this.listWindow4Dilute.show();

				}

				if (opt == 'modify') {
					if (state == '完结') {
						Ext.Msg.alert('系统提示', '已完结记录不能修改');
						return false;
					} else {
						this.editWindow.show();
						this.editWindow.loadData(cell);
					}
				}

				if (opt == 'mix') {
					if (state == '完结') {
						Ext.Msg.alert('系统提示', '已完结记录不能修改');
						return false;
					} else {
						this.mixWindow.show();
						this.mixWindow.loadData(cell);
					}
				}
				if (opt == 'dilute') {
					if (state == '完结') {
						Ext.Msg.alert('系统提示', '已完结记录不能做稀释配料');
						return false;
					} else {
						this.editWindow2.show();
						this.editWindow2.loadData(cell);
					}

				}
			}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'afterload',
			function(win, data) {
				var remain = this.editWindow2.remain.getValue();
				this.editWindow2.used.setMaxValue(remain);
			}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'beforeSave',
			function(win, data) {
				var operatorName = this.editWindow2.operatorId.getRawValue();
				this.editWindow2.operatorName.setValue(operatorName);
			}, this);

	this.listPanel4Dilute.mon(this.listPanel4Dilute, 'afterdel', function(gird,
					cell) {
				_this.listPanel.store.reload();

			})

}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onAdd = function() {
	this.inputWindow.items.items[0].form.reset();
	this.inputWindow.weight.setValue(300);
	this.inputWindow.show();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onEdit = function() {
	opt = 'modify';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onMix = function() {
	opt = 'mix';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onEdit2 = function() {
	opt = 'dilute';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onViewList = function() {
	opt = 'viewlist';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, 'PVA母液配料',
			'com.keensen.ump.produce.diaphragm.make.pva.queryPva', '0,1');
}

/*
 * com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onBoard2 = function() {
 * window.open('com.keensen.ump.produce.quality.queryBoard.flow?flag=2'); }
 */

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.exportExcel2 = function() {
	doQuerySqlAndExport(this, this.queryPanel4Dilute, this.listPanel4Dilute,
			'PVA稀释配料',
			'com.keensen.ump.produce.diaphragm.make.pva.queryPvaList', '0,1');
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onCalc = function() {
	var type = this.inputWindow.pva.getValue();
	if (Ext.isEmpty(type)) {
		Ext.Msg.alert('系统提示', '请选择PVA种类');
		return false;
	}
	var weight = this.inputWindow.weight.getValue();
	if (Ext.isEmpty(weight)) {
		Ext.Msg.alert('系统提示', '请输入总重量');
		return false;
	}

	var formula = this.formulas[type];
	var pva = formula.pva;
	pvaWeight = parseFloat(pva) * parseFloat(weight) * 10;
	this.inputWindow.pvaWeight.setValue(roundToDecimalPlace(pvaWeight, 3));
	var c51 = formula.c51;
	c51 = parseFloat(c51) * parseFloat(weight) * 10;
	this.inputWindow.c51.setValue(roundToDecimalPlace(c51, 3));
	var c23 = formula.c23;
	c23 = parseFloat(c23) * parseFloat(weight) * 10;
	this.inputWindow.c23a.setValue(roundToDecimalPlace(c23, 3));
	var ro = formula.ro;
	ro = parseFloat(ro) * parseFloat(weight) / 100;
	this.inputWindow.ro.setValue(roundToDecimalPlace(ro, 3));
	var density = (parseFloat(pva) * parseFloat(weight) * 10)
			/ (parseFloat(weight)) / 10;
	this.inputWindow.density.setValue(roundToDecimalPlace(density, 3));
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onMixCalc = function() {
	var c51Real = this.mixWindow.c51Real.getValue();
	var c23aReal = this.mixWindow.c23aReal.getValue();
	var c14Real = this.mixWindow.c14Real.getValue();
	var roReal = this.mixWindow.roReal.getValue();
	var pvaWeightReal = this.mixWindow.pvaWeightReal.getValue();
	if (Ext.isEmpty(c51Real) || Ext.isEmpty(c23aReal) || Ext.isEmpty(c14Real)
			|| Ext.isEmpty(roReal) || Ext.isEmpty(pvaWeightReal)) {
		Ext.Msg.alert('系统提示', '请输入完整数据');
		return false;
	} else {
		var weightReal = (parseFloat(c51Real) + parseFloat(c23aReal) + parseFloat(c14Real) + parseFloat(pvaWeightReal))/1000 + parseFloat(roReal);
		this.mixWindow.weightReal.setValue(roundToDecimalPlace(weightReal, 3));
		var densityReal = pvaWeightReal / weightReal / 10;
		this.mixWindow.densityReal.setValue(roundToDecimalPlace(densityReal, 3));
	}
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onDelList = function() {
	this.listPanel4Dilute.onDel();
}

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}