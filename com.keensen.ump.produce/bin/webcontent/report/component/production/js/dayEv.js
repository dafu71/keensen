com.keensen.ump.produce.report.component.DayMgr.prototype.initEvent = function() {
	
	var _this = this;
	
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

	this.listPanel.store.on('load', function() {

				var records = _this.listPanel.store.getRange();
				if (records.length == 0)
					return;
				var cmAmountJySum = 0;
				var cmAmountGySum = 0;
				var jmAmount8Sum = 0;
				var jmAmount4Sum = 0;
				var qjAmount8Sum = 0;
				var qjAmount4Sum = 0;
				var rsAmount8Sum = 0;
				var rsAmount4Sum = 0;
				var bzAmount8Sum = 0;
				var bzAmount4Sum = 0;
				Ext.each(records, function(r) {
							var cmAmountJy = r.data.cmAmountJy;
							var cmAmountGy = r.data.cmAmountGy;
							var jmAmount8 = r.data.jmAmount8;
							var jmAmount4 = r.data.jmAmount4;
							var qjAmount8 = r.data.qjAmount8;
							var qjAmount4 = r.data.qjAmount4;
							var rsAmount8 = r.data.rsAmount8;
							var rsAmount4 = r.data.rsAmount4;
							var bzAmount8 = r.data.bzAmount8;
							var bzAmount4 = r.data.bzAmount4;
							cmAmountJySum += parseFloat(cmAmountJy);
							cmAmountGySum += parseFloat(cmAmountGy);
							jmAmount8Sum += parseFloat(jmAmount8);
							jmAmount4Sum += parseFloat(jmAmount4);
							qjAmount8Sum += parseFloat(qjAmount8);
							qjAmount4Sum += parseFloat(qjAmount4);
							rsAmount8Sum += parseFloat(rsAmount8);
							rsAmount4Sum += parseFloat(rsAmount4);
							bzAmount8Sum += parseFloat(bzAmount8);
							bzAmount4Sum += parseFloat(bzAmount4);
						})
		
				var r = new Ext.data.Record({
							produceDt : '合计',
							cmAmountJy : roundToDecimalPlace(cmAmountJySum, 2),
							cmAmountGy : roundToDecimalPlace(cmAmountGySum, 2),
							jmAmount8 : roundToDecimalPlace(jmAmount8Sum, 2),
							jmAmount4 : roundToDecimalPlace(jmAmount4Sum, 2),
							qjAmount8 : roundToDecimalPlace(qjAmount8Sum, 2),
							qjAmount4 : roundToDecimalPlace(qjAmount4Sum, 2),
							rsAmount8 : roundToDecimalPlace(rsAmount8Sum, 2),
							rsAmount4 : roundToDecimalPlace(rsAmount4Sum, 2),
							bzAmount8 : roundToDecimalPlace(bzAmount8Sum, 2),
							bzAmount4 : roundToDecimalPlace(bzAmount4Sum, 2)
						})
				_this.listPanel.store.add(r);
			})

}

com.keensen.ump.produce.report.component.DayMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '日产量',
			'com.keensen.ump.produce.report.component.queryProduction');
}

