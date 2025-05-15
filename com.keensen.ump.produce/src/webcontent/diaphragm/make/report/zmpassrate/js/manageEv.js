com.keensen.ump.produce.diaphragm.make.report.PassrateZmMgr.prototype.initEvent = function() {

	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var start = vals['condition/productDtStart'];
		var end = vals['condition/productDtEnd'];
		if (dayDiff(start, end) > 366) {
			Ext.Msg.alert("系统提示", "查询间隔日期不能大于12个月！");
			return false;

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

	this.listPanel.store.on('load', function() {

				var records = _this.listPanel.store.getRange();
				if(records.length==0) return;
				var theoryAmountSum = 0;
				var amountQualitySum = 0;
				var lossTotalSum = 0;
				var lossTearSum = 0;
				var lossNotTearSum = 0;
				var lossNotZmSum = 0;
				
				Ext.each(records, function(r) {							
							var theoryAmount = r.data.theoryAmount;
							var amountQuality = r.data.amountQuality;
							var lossTotal = r.data.lossTotal;
							var lossTear = r.data.lossTear;
							var lossNotTear = r.data.lossNotTear;
							var lossNotZm = r.data.lossNotZm;
							
							theoryAmountSum += parseFloat(theoryAmount);
							amountQualitySum += parseFloat(amountQuality);
							lossTotalSum += parseFloat(lossTotal);
							lossTearSum += parseFloat(lossTear);
							lossNotTearSum += parseFloat(lossNotTear);
							
							lossNotZmSum += parseFloat(lossNotZm);
						})
						
				var passful = amountQualitySum / theoryAmountSum * 100; 
				passful = roundToDecimalPlace(passful,2);
				var r = new Ext.data.Record({
							teamName : '膜片整体',
							theoryAmount : roundToDecimalPlace(theoryAmountSum,2),
							amountQuality : roundToDecimalPlace(amountQualitySum,2),
							lossTotal : roundToDecimalPlace(lossTotalSum,2),
							lossTear : roundToDecimalPlace(lossTearSum,2),
							lossNotTear : roundToDecimalPlace(lossNotTearSum,2),
							passful : roundToDecimalPlace(passful,2) + '%',
							
							lossNotZm : roundToDecimalPlace(lossNotZmSum,2)
						})
				_this.listPanel.store.add(r);
			})

}

com.keensen.ump.produce.diaphragm.make.report.PassrateZmMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '铸膜一次合格率',
			'com.keensen.ump.produce.diaphragm.make.report.queryPassrate4Zm');
}

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}
