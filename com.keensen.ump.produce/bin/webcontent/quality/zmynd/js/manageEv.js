com.keensen.ump.produce.quality.zmyndstandMgr.prototype.initEvent = function() {
	//查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
	
	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
}

com.keensen.ump.produce.quality.zmyndstandMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.zmyndstandMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.zmyndstandMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.quality.zmyndstandMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

