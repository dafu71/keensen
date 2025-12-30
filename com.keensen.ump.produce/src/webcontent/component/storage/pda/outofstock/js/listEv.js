com.keensen.ump.produce.component.storage.OutOfStockListMgr.prototype.initEvent = function() {
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

com.keensen.ump.produce.component.storage.OutOfStockListMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel,
			this.listPanel,
			'出库查询',
			'com.keensen.ump.produce.component.storage.queryOutOfStock',
			'0,1');

}

function unique(arr) {
	
	if (!Array.isArray(arr)) {
		console.log('type error!')
		return
	}
	var array = [];
	for (var i = 0; i < arr.length; i++) {
		if (array.indexOf(arr[i]) === -1) {
			array.push(arr[i])
		}
	}
	return array;
}