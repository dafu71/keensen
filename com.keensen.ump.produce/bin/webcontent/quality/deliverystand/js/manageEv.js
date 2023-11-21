com.keensen.ump.produce.quality.deliverystandMgr.prototype.initEvent = function() {
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

com.keensen.ump.produce.quality.deliverystandMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};





com.keensen.ump.produce.quality.deliverystandMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.deliverystandMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.excelUploadWin.destroy();
}

com.keensen.ump.produce.quality.deliverystandMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

