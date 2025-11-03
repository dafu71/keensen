com.keensen.ump.produce.report.diaghragm.MaterialByLineMgr.prototype.initEvent = function() {
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				var store = this.listPanel.store;
				store.baseParams = vals;
				store.load({});
			}, this);
}

com.keensen.ump.produce.report.diaghragm.MaterialByLineMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '涂膜物料统计',
			'com.keensen.ump.produce.report.diaghragm.queryMaterialByLine','0,1');
}
