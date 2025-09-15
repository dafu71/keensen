com.keensen.ump.produce.report.diaghragm.MaterMainMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				if (this.queryPanel.form.isValid) {

					var start = this.queryPanel.productDtStart.getValue();
					var end = this.queryPanel.productDtEnd.getValue();
					if (dayDiff(start, end) > 31) {
						Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
						return false;

					}

					this.insert = true;
					var store = this.listPanel.store;
					store.baseParams = vals;
					store.load();
				}
			}, this);

	this.listPanel.store.on('load', function() {

				var records = _this.listPanel.store.getRange();

				var outLength = 0;
				var dmTheoryAmount = 0;
				var waterLiquidWeight = 0;
				var troughLiquidWeight = 0;
				var pvaUsed = 0;
				var oilWeight = 0;

				for (var i = 0; i < records.length; i++) {
					outLength += records[i].data.outLength;
					dmTheoryAmount += records[i].data.dmTheoryAmount;
					waterLiquidWeight += records[i].data.waterLiquidWeight;
					troughLiquidWeight += records[i].data.troughLiquidWeight;
					pvaUsed += records[i].data.pvaUsed;
					oilWeight += records[i].data.oilWeight;
				}
				var r = new Ext.data.Record({
							batchNo : '合计',
							outLength : outLength,
							dmTheoryAmount : dmTheoryAmount,
							waterLiquidWeight : waterLiquidWeight,
							troughLiquidWeight : troughLiquidWeight,
							pvaUsed : pvaUsed,
							oilWeight : oilWeight
						})
				_this.listPanel.store.add(r);

			})
}

com.keensen.ump.produce.report.diaghragm.MaterMainMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '涂膜物料',
			'com.keensen.ump.produce.report.diaghragm.queryMainMater');
}
