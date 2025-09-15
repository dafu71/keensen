com.keensen.ump.produce.report.diaghragm.MaterZmyMgr.prototype.initEvent = function() {

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
				var c11Std = 0;
				var c11Weight = 0;
				var c12Std = 0;
				var c12Weight = 0;
				var c13Std = 0;

				var c13Weight = 0;
				var c14Std = 0;
				var c14Weight = 0;

				for (var i = 0; i < records.length; i++) {
					outLength += records[i].data.outLength;
					c11Std += records[i].data.c11Std;
					c11Weight += records[i].data.c11Weight;
					c12Std += records[i].data.c12Std;
					c12Weight += records[i].data.c12Weight;
					c13Std += records[i].data.c13Std;
					c13Weight += records[i].data.c13Weight;
					c14Std += records[i].data.c14Std;
					c14Weight += records[i].data.c14Weight;
				}
				var r = new Ext.data.Record({
							batchNo : '合计',
							outLength : outLength,
							c11Std : c11Std,
							c11Weight : c11Weight,
							c12Std : c12Std,
							c12Weight : c12Weight,
							c13Std : c13Std,
							c13Weight : c13Weight,
							c14Std : c14Std,
							c14Weight : c14Weight
						})
				_this.listPanel.store.add(r);

			})
}

com.keensen.ump.produce.report.diaghragm.MaterZmyMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '铸膜液',
			'com.keensen.ump.produce.report.diaghragm.queryZmy');
}
