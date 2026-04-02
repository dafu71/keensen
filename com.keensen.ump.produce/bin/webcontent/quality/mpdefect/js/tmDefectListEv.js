com.keensen.ump.produce.quality.TmDefectListMgr.prototype.initEvent = function() {

	var _this = this;
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
		this.queryPanel.tmBatchNo.setValue(tmBatchNo4Search);
		if (iftear4Search != 'null')
			this.queryPanel.iftear.setValue(iftear4Search);
		
		var store = this.listPanel.store;
		store.baseParams = {
			'condition/relationId' : relationId4Search,
			'condition/iftear' : iftear4Search == 'null' ? '' : iftear4Search
		};
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});

	}
	
	this.listPanel.store.on('load', function() {

				var records = _this.listPanel.store.getRange();
				if (records.length == 0) {
					Ext.getCmp(lengthTotalId).setValue('');
					return
				}

				var lengthTotal = records[0].data.lengthTotal;
							
				
				Ext.getCmp(lengthTotalId).setValue('不良长度合计(米):' + lengthTotal);
			})
			

}

com.keensen.ump.produce.quality.TmDefectListMgr.prototype.onDel = function() {

	this.listPanel.onDel();
}

com.keensen.ump.produce.quality.TmDefectListMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.quality.TmDefectListMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '涂膜工序不良记录',
			'com.keensen.ump.produce.quality.defect.queryTmDefectList');
}

com.keensen.ump.produce.quality.TmDefectListMgr.prototype.onSingleSelect = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}