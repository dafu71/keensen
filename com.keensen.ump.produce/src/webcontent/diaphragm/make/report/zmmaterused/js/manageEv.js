com.keensen.ump.produce.diaphragm.make.report.ZmMaterUsedMgr.prototype.initEvent = function() {

	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var start = vals['condition/productDtStart'];
		var end = vals['condition/productDtEnd'];
		if (dayDiff(start, end) > 366) {
			//Ext.Msg.alert("系统提示", "查询间隔日期不能大于12个月！");
			//return false;

		}
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

com.keensen.ump.produce.diaphragm.make.report.ZmMaterUsedMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '铸膜物料使用',
			'com.keensen.ump.produce.diaphragm.make.report.queryZmMaterUsed');
}

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}
