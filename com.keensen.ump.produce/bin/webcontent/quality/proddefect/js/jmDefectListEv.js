com.keensen.ump.produce.quality.JmDefectListMgr.prototype.initEvent = function() {

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

	if (!Ext.isEmpty(relationId4Search) && 'null' != relationId4Search) {
		// alert(tumoBatchNo4Search);
		this.queryPanel.relationId.setValue(relationId4Search);
		this.queryPanel.jmBatchNo.setValue(jmBatchNo4Search);
		
		var store = this.listPanel.store;
		store.baseParams = {
			'condition/relationId' : relationId4Search
		};
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});

	}
	
	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

}

com.keensen.ump.produce.quality.JmDefectListMgr.prototype.onEdit = function() {

	this.listPanel.onEdit();
}

com.keensen.ump.produce.quality.JmDefectListMgr.prototype.onDel = function() {

	this.listPanel.onDel();
}

com.keensen.ump.produce.quality.JmDefectListMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.quality.JmDefectListMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '卷膜工序不良记录',
			'com.keensen.ump.produce.quality.defect.queryJmDefectList');
}

com.keensen.ump.produce.quality.JmDefectListMgr.prototype.onSingleSelect = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}