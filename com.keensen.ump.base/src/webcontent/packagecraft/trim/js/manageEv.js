com.keensen.ump.base.TrimCraftspackageMgr.prototype.initEvent = function() {

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

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

}

com.keensen.ump.base.TrimCraftspackageMgr.prototype.onAdd = function() {
	this.inputWindow.items.get(0).getForm().reset();
	this.inputWindow.state.setValue('Y');
	this.inputWindow.show();
}

com.keensen.ump.base.TrimCraftspackageMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '工艺包信息',
			'com.keensen.ump.base.packagecraft.queryCraftspackageTrim');

}

com.keensen.ump.base.TrimCraftspackageMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.base.TrimCraftspackageMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.base.TrimCraftspackageMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}