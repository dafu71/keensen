com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.initEvent = function() {

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
		this.queryPanel.cdmBatchNo.setValue(cdmBatchNo4Search);
		
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

}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.onDel = function() {

	this.listPanel.onDel();
}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '裁叠膜工序不良记录',
			'com.keensen.ump.produce.quality.defect.queryCdmDefectList');
}

com.keensen.ump.produce.quality.CdmDefectListMgr.prototype.onSingleSelect = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}