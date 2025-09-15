com.keensen.ump.produce.report.diaghragm.MaterOilMgr.prototype.initEvent = function() {

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

					var store = this.listPanel.store;
					store.baseParams = vals;
					store.load();
				}
			}, this);

	this.listPanel.store.on('load', function() {

				var records = _this.listPanel.store.getRange();

				var outLength = 0;
				var c41Std = 0;
				var c41Weight = 0;
				var c42Std = 0;
				var c42Weight = 0;

				for (var i = 0; i < records.length; i++) {
					outLength += records[i].data.outLength;
					c41Std += records[i].data.c41Std;
					c41Weight += records[i].data.c41Weight;
					c42Std += records[i].data.c42Std;
					c42Weight += records[i].data.c42Weight;
				}
				var r = new Ext.data.Record({
							batchNo : '合计',
							outLength : outLength,
							c41Std : c41Std,
							c41Weight : c41Weight,
							c42Std : c42Std,
							c42Weight : c42Weight
						})
				_this.listPanel.store.add(r);

			})

}

com.keensen.ump.produce.report.diaghragm.MaterOilMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '油相液',
			'com.keensen.ump.produce.report.diaghragm.queryOil');
}
