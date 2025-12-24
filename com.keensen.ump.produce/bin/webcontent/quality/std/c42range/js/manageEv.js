com.keensen.ump.produce.quality.C42RangeMgr.prototype.initEvent = function() {
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
				if (this.opt == 'edit') {
					this.editWindow.show();
					this.editWindow.loadData(cell);
				}
				if (this.opt == 'copy') {
					this.copyWindow.show();
					this.copyWindow.loadData(cell);
				}

			}, this);
}

com.keensen.ump.produce.quality.C42RangeMgr.prototype.onEdit = function() {

	this.opt = 'edit';
	this.listPanel.onEdit();

}

com.keensen.ump.produce.quality.C42RangeMgr.prototype.onCopy = function() {

	this.opt = 'copy';
	this.listPanel.onEdit();

}

com.keensen.ump.produce.quality.C42RangeMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.C42RangeMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.C42RangeMgr.prototype.destroy = function() {
	this.editWindow.destroy();
}
