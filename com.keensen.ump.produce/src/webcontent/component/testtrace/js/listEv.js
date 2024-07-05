com.keensen.ump.produce.component.testtracelistMgr.prototype.initEvent = function() {

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

	// 查询事件
	this.queryPanel3.mon(this.queryPanel3, 'query', function(form, vals) {
		var store = this.listPanel3.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel3.pagingToolbar.pageSize
					}
				});
	}, this);
}

com.keensen.ump.produce.component.testtracelistMgr.prototype.onQuery = function() {

	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 0) {
		this.queryPanel3.getForm().findField('condition/batchNo')
				.setValue(C[0].data.batchNo);
		var store = this.listPanel3.store;
		store.baseParams = {
			'condition/batchNo' : C[0].data.batchNo
		};
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel3.pagingToolbar.pageSize
					}
				});

	} else {
		this.queryPanel3.getForm().findField('condition/batchNo').setValue();
	}
	this.chooseWindow.show();
}