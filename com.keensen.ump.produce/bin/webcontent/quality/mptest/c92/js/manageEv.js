com.keensen.ump.produce.quality.mptest.C92Mgr.prototype.initEvent = function() {
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

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {

			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);

			}, this);

	this.stdStore.on('load', function() {

				var records = _this.stdStore.getRange();
				var r = records[0];
				var a = r.get('a');
				var b = r.get('b');
				var densityLow = r.get('densityLow');
				var densityUp = r.get('densityUp');
				_this.inputWindow.a.setValue(a);
				_this.inputWindow.b.setValue(b);
				_this.inputWindow.densityLow.setValue(densityLow);
				_this.inputWindow.densityUp.setValue(densityUp);
			})
}

com.keensen.ump.produce.quality.mptest.C92Mgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.mptest.C92Mgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.quality.mptest.C92Mgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.C92Mgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.mptest.C92Mgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(
				this,
				this.queryPanel,
				this.listPanel,
				'C92原液测试',
				'com.keensen.ump.produce.quality.quality2.queryC92Solution',
				'0,1');
}

com.keensen.ump.produce.quality.mptest.C92Mgr.prototype.calcC92 = function() {

	var obj = !this.inputWindow.hidden ? this.inputWindow : this.editWindow;
	var a = obj.a.getValue();
	var b = obj.b.getValue();
	var densityLow = obj.densityLow.getValue();
	var densityUp = obj.densityUp.getValue();
	var light = obj.light.getValue();
	var weightBefore = obj.weightBefore.getValue();
	var weightAfter = obj.weightAfter.getValue();
	if (Ext.isEmpty(light) && Ext.isEmpty(weightBefore)
			&& Ext.isEmpty(weightAfter)) {
		return false;
	}

	var density = (parseFloat(light) * parseFloat(a) + parseFloat(b))
			* parseFloat(weightAfter) / parseFloat(weightBefore);
	obj.density.setValue(roundToDecimalPlace(density, 2));
	if (parseFloat(density) >= parseFloat(densityLow)
			&& parseFloat(density) <= parseFloat(densityUp)) {
		obj.result.setValue('合格,生产使用');
	} else {
		obj.result.setValue('不合格,通知班长');
	}
}

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}