com.keensen.ump.produce.quality.mpstandMgr.prototype.initEvent = function() {
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
	this.queryPanel4ThickStand.mon(this.queryPanel4ThickStand, 'query',
			function(form, vals) {
				var store = this.listPanel4ThickStand.store;
				if (Ext.isEmpty(vals)) {
					vals = {};
				}
				vals['nameSqlId'] = 'com.keensen.ump.produce.quality.quality2.queryThickStand';
				store.baseParams = vals;

				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ThickStand.pagingToolbar.pageSize
					}
				});
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);

	// 增加修改事件
	this.listPanel4ThickStand.mon(this.listPanel4ThickStand, 'update',
			function(gird, cell) {

				this.editThickStandWindow.show();
				cell
						.set('nameSqlId',
								'com.keensen.ump.produce.quality.quality2.queryThickStand');
				this.editThickStandWindow.loadData(cell);

			}, this);

	this.linecombo.mon(this.linecombo, 'select', function(record, index) {

				this.inputWindow.lineIds.setValue(this.linecombo.myvalue);
			}, this);

	this.macnamecombo.mon(this.macnamecombo, 'select', function(record, index) {

			}, this);
}

com.keensen.ump.produce.quality.mpstandMgr.prototype.onAdd = function() {
	this.inputWindow.form.reset();
	this.inputWindow.testSolid.setValue('NaCL溶液');
	this.inputWindow.state.setValue('Y');

	this.lineStore.each(function(rc) {
				var lineItem = "lineItem" + rc.get("id");
				var obj = document.getElementById(lineItem)
				if (!Ext.isEmpty(obj)) {
					obj.checked = false;
				}
			})

	this.macNameStore.each(function(rc) {
				var macItem = "macItem" + rc.get("id");
				var obj = document.getElementById(macItem)
				if (!Ext.isEmpty(obj)) {
					obj.checked = false;
				}
			})

	this.inputWindow.show();

}

com.keensen.ump.produce.quality.mpstandMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.quality.mpstandMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.excelUploadWin.destroy();
	this.thickStandWindow.destroy();
	this.addThickStandWindow.destroy();
	this.editThickStandWindow.destroy();
}

com.keensen.ump.produce.quality.mpstandMgr.prototype.onEdit = function() {
	if (this.onSingleSelect()) {
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}

}

com.keensen.ump.produce.quality.mpstandMgr.prototype.onThickStand = function() {
	this.thickStandWindow.show();
}

com.keensen.ump.produce.quality.mpstandMgr.prototype.onAddStand = function() {
	this.addThickStandWindow.show();
}

com.keensen.ump.produce.quality.mpstandMgr.prototype.onDelStand = function() {
	this.listPanel4ThickStand.onDel();
}

com.keensen.ump.produce.quality.mpstandMgr.prototype.onEditStand = function() {
	this.listPanel4ThickStand.onEdit();
}

com.keensen.ump.produce.quality.mpstandMgr.prototype.onSingleSelect = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}