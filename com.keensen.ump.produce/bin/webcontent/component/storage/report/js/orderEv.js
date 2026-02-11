com.keensen.ump.produce.component.storage.Report4OrderMgr.prototype.initEvent = function() {
	
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
					Ext.getCmp(orderAmountTotalId).setValue('');
					Ext.getCmp(stockAmountTotalId).setValue('');
					return
				}

				var orderAmountTotal = records[0].data.orderAmountTotal;
				var stockAmountTotal = records[0].data.stockAmountTotal;
											
				Ext.getCmp(orderAmountTotalId).setValue('订单数量合计:' + orderAmountTotal);
				Ext.getCmp(stockAmountTotalId).setValue('在库数量合计:' + stockAmountTotal);
			})

}

com.keensen.ump.produce.component.storage.Report4OrderMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel,
			this.listPanel,
			'订单仓元件库存报表',
			'com.keensen.ump.produce.component.storage.queryReport4Order',
			'0,1');

}

