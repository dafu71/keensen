com.keensen.ump.produce.component.storage.Report4NotOrderMgr.prototype.initEvent = function() {
	
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
	
	this.listPanel.store.on('load', function() {

				var records = _this.listPanel.store.getRange();
				if (records.length == 0) {
					Ext.getCmp(stockAmountTotalId).setValue('');
					return
				}

				var stockAmountTotal = records[0].data.stockAmountTotal;
				
				Ext.getCmp(stockAmountTotalId).setValue('在库数量合计:' + stockAmountTotal);
			})

}

com.keensen.ump.produce.component.storage.Report4NotOrderMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel,
			this.listPanel,
			'非订单仓元件库存报表',
			'com.keensen.ump.produce.component.storage.queryReport4NotOrder',
			'0,1');

}

