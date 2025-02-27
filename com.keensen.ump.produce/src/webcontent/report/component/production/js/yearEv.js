com.keensen.ump.produce.report.component.YearMgr.prototype.initEvent = function() {

	this.queryPanel.productDtStart.setValue(getCurrentDate('y'));
	this.queryPanel.productDtEnd.setValue(getCurrentDate('y'));

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

com.keensen.ump.produce.report.component.YearMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '年度累计',
			'com.keensen.ump.produce.report.component.queryProduction');
}
