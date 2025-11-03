com.keensen.ump.produce.report.diaghragm.ZmMaterialByLineMgr.prototype.initEvent = function() {
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				var store = this.listPanel.store;
				store.baseParams = vals;
				store.load({});
			}, this);
}

com.keensen.ump.produce.report.diaghragm.ZmMaterialByLineMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '铸膜物料统计',
			'com.keensen.ump.produce.report.diaghragm.queryZmMaterialByLine','0,1');
}
