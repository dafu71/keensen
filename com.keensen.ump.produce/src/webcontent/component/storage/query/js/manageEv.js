com.keensen.ump.produce.component.storage.QueryMgr.prototype.initEvent = function() {
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
}

com.keensen.ump.produce.component.storage.QueryMgr.prototype.onAllocate = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();

		var arrBatchNos = [];
		var arrIds = [];
		Ext.each(C, function(r) {
					var batchNo = r.data.batchNo;
					var pkid = r.data.id;
					arrBatchNos.push(batchNo);
					arrIds.push(pkid);
				})
		this.allocateWindow.show();
		this.allocateWindow.batchNo.setValue(arrBatchNos.join(','));
		this.allocateWindow.ids.setValue(arrIds.join(','));
	}
}

com.keensen.ump.produce.component.storage.QueryMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel,
			this.listPanel,
			'库存查询',
			'com.keensen.ump.produce.component.storage.queryStorage',
			'0,1');

}