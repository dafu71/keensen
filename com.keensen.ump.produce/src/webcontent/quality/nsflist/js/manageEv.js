com.keensen.ump.produce.quality.NsfListMgr.prototype.initEvent = function() {
	
	var _this = this;
	
	this.getRight();
	
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



com.keensen.ump.produce.quality.NsfListMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.NsfListMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.NsfListMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.quality.NsfListMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.quality.NsfListMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, 'NSF列名清单',
			'com.keensen.ump.produce.quality.quality3.queryNsfList');
}

// 获取权限
com.keensen.ump.produce.quality.NsfListMgr.prototype.getRight = function() {
	var _this = this;
	Ext.Ajax.request({
				url : "produce/quality/nsflist/right.json",
				method : "post",
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					var data = ret.data;
					var exportExcel = data[0].exportExcel;
					var editData  = data[0].editData

					Ext.getCmp(exportExcelBtn).setVisible(exportExcel
							.indexOf(uid) != -1);
					Ext.getCmp(addBtn).setVisible(editData
							.indexOf(uid) != -1);
					Ext.getCmp(editBtn).setVisible(editData
							.indexOf(uid) != -1);
					Ext.getCmp(delBtn).setVisible(editData
							.indexOf(uid) != -1);

				},
				callback : function() {
				}
			})
}
