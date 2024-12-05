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
}



com.keensen.ump.produce.quality.mpstandMgr.prototype.onAdd = function() {
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
	this.listPanel.onEdit();
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