com.keensen.ump.produce.quality.ProddefectListMgr.prototype.initEvent = function() {

	this.opt = '';
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

				
			}, this);

}

com.keensen.ump.produce.quality.ProddefectListMgr.prototype.onEdit = function() {

	this.opt = 'edit';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.quality.ProddefectListMgr.prototype.onDel = function() {

	this.listPanel.onDel();
}

com.keensen.ump.produce.quality.ProddefectListMgr.prototype.destroy = function() {


}

com.keensen.ump.produce.quality.ProddefectListMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '元件不良记录',
			'com.keensen.ump.produce.quality.defect.queryProdDefectList');
}

com.keensen.ump.produce.quality.ProddefectListMgr.prototype.onSingleSelect = function() {

	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}

