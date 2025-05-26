com.keensen.ump.produce.component.SampleStandardMgr.prototype.initEvent = function() {
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
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function() {
				
				
			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {
				
				

			}, this);
}



com.keensen.ump.produce.component.SampleStandardMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.component.SampleStandardMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.component.SampleStandardMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.SampleStandardMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.SampleStandardMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '试卷元件送样卷制标准',
			'com.keensen.ump.produce.component.testtrace.querySampleStandard');
}
