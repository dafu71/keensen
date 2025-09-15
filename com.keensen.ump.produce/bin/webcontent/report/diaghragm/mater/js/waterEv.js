com.keensen.ump.produce.report.diaghragm.MaterWaterMgr.prototype.initEvent = function() {

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
				var c21Std = 0;
				var c21Weight = 0;
				var c22Std = 0;
				var c22Weight = 0;
				var c24Std = 0;

				var c24Weight = 0;
				var c29Std = 0;
				var c29Weight = 0;

				for (var i = 0; i < records.length; i++) {
					outLength += records[i].data.outLength;
					c21Std += records[i].data.c21Std;
					c21Weight += records[i].data.c21Weight;
					c22Std += records[i].data.c22Std;
					c22Weight += records[i].data.c22Weight;
					c24Std += records[i].data.c24Std;
					c24Weight += records[i].data.c24Weight;
					c29Std += records[i].data.c29Std;
					c29Weight += records[i].data.c29Weight;
				}
				var r = new Ext.data.Record({
							batchNo : '合计',
							outLength : outLength,
							c21Std : c21Std,
							c21Weight : c21Weight,
							c22Std : c22Std,
							c22Weight : c22Weight,
							c24Std : c24Std,
							c24Weight : c24Weight,
							c29Std : c29Std,
							c29Weight : c29Weight
						})
				_this.listPanel.store.add(r);

			})

}

com.keensen.ump.produce.report.diaghragm.MaterWaterMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '水相液',
			'com.keensen.ump.produce.report.diaghragm.queryWater');
}
