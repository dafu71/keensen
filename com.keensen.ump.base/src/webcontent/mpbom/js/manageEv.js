com.keensen.ump.base.MpBomMgr.prototype.initEvent = function() {
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

com.keensen.ump.base.MpBomMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.base.MpBomMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];			
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();

		}
	}
}

com.keensen.ump.base.MpBomMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '订单物料',
			'com.keensen.ump.base.mater.queryMpBOM','0,1');
}

com.keensen.ump.base.MpBomMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.base.MpBomMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();
}

com.keensen.ump.base.MpBomMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

