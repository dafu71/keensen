com.keensen.ump.produce.diaphragm.make.report.PassrateMgr.prototype.initEvent = function() {

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
				var outLengthSum = 0;
				var cOutLengthSum = 0;
				var aOutLengthSum = 0;
				var aUsefulLengthSum = 0;
				var c21OutLengthSum = 0;
				var caimoLossSum = 0;
				var qualifiedNotLengthSum = 0;
				
				var actualLengthSum = 0;
				var noTearLengthSum = 0;
				var scratchLengthSum = 0;
				
				Ext.each(records, function(r) {							
							var outLength = r.data.outLength;
							var cOutLength = r.data.cOutLength;
							var aOutLength = r.data.aOutLength;
							var aUsefulLength = r.data.aUsefulLength;
							var c21OutLength = r.data.c21OutLength;
							var caimoLoss = r.data.caimoLoss;
							var qualifiedNotLength = r.data.qualifiedNotLength;
							
							var actualLength = r.data.actualLength;
							var noTearLength = r.data.noTearLength;
							var scratchLength = r.data.scratchLength;
				
							outLengthSum += parseFloat(outLength);
							cOutLengthSum += parseFloat(cOutLength);
							aOutLengthSum += parseFloat(aOutLength);
							aUsefulLengthSum += parseFloat(aUsefulLength);
							c21OutLengthSum += parseFloat(c21OutLength);
							caimoLossSum += parseFloat(caimoLoss);
							qualifiedNotLengthSum += parseFloat(qualifiedNotLength);
							
							actualLengthSum += parseFloat(actualLength);
							noTearLengthSum += parseFloat(noTearLength);
							scratchLengthSum += parseFloat(scratchLength);
						})
						
				//var passful = aUsefulLengthSum / outLengthSum * 100;
				var passful = aUsefulLengthSum / actualLengthSum * 100;
				
				passful = roundToDecimalPlace(passful,2);
				var r = new Ext.data.Record({
							teamName : '膜片整体',
							
							actualLength : roundToDecimalPlace(actualLengthSum,2),
							noTearLength : roundToDecimalPlace(noTearLengthSum,2),
							scratchLength : roundToDecimalPlace(scratchLengthSum,2),
							
							outLength : roundToDecimalPlace(outLengthSum,2),
							cOutLength : roundToDecimalPlace(cOutLengthSum,2),
							aOutLength : roundToDecimalPlace(aOutLengthSum,2),
							aUsefulLength : roundToDecimalPlace(aUsefulLengthSum,2),
							c21OutLength : roundToDecimalPlace(c21OutLengthSum,2),
							caimoLoss : roundToDecimalPlace(caimoLossSum,2),
							qualifiedNotLength : roundToDecimalPlace(qualifiedNotLengthSum,2),
							passful : roundToDecimalPlace(passful,2) + '%'
						})
				_this.listPanel.store.add(r);
			})

}

com.keensen.ump.produce.diaphragm.make.report.PassrateMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '膜片一次合格率',
			'com.keensen.ump.produce.diaphragm.make.report.queryPassrate');
}

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}
