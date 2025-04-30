com.keensen.ump.produce.quality.C21RangeMgr.prototype.initEvent = function() {
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

	
}



com.keensen.ump.produce.quality.C21RangeMgr.prototype.onModify = function() {
	this.listPanel.onEdit();

}

com.keensen.ump.produce.quality.C21RangeMgr.prototype.destroy = function() {
	this.editWindow.destroy();
}


