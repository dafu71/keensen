com.keensen.ump.produce.report.quality.diaghragm.UnqualifiedMgr.prototype.initEvent = function() {
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		if (this.queryPanel.form.isValid) {
			
			var store = this.listPanel.store;
			store.baseParams = vals;
			store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listPanel.pagingToolbar.pageSize
						}
					});
		}
	}, this);

}

com.keensen.ump.produce.report.quality.diaghragm.UnqualifiedMgr.prototype.exportExcel = function() {
	
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '膜片不合格率',
			'com.keensen.ump.produce.report.component.queryMpPercentInvalid');
}
