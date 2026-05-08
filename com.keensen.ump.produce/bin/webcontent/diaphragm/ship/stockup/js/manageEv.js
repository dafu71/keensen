com.keensen.ump.produce.diaphragm.ship.StockupMgr.prototype.initEvent = function() {
	
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
					Ext.getCmp(checkCountId).setValue('');
					return
				}

				var amountTotal = records[0].data.amountTotal;

				Ext.getCmp(checkCountId).setValue('请检数量合计(m):'
						+ amountTotal);
			})

}

com.keensen.ump.produce.diaphragm.ship.StockupMgr.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '发货请检单',
			'com.keensen.ump.produce.diaphragm.ship.ship.queryStockup');
}

com.keensen.ump.produce.diaphragm.ship.StockupMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.diaphragm.ship.StockupMgr.prototype.onReport = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var relationId = r.data.id;
		var deliveryOrderNo = r.data.deliveryOrderNo;
		var clientName = r.data.clientName;
		var markSpecName = Ext.isEmpty(r.data.markSpecName)
				? ""
				: r.data.markSpecName;
		window
				.open('com.keensen.ump.produce.diaphragm.ship.stockupPrint.flow?clientName='
						+ clientName
						+ '&relationId='
						+ relationId
						+ '&deliveryOrderNo='
						+ deliveryOrderNo
						+ '&markSpecName=' + markSpecName)

	}

}
