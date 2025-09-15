com.keensen.ump.produce.report.diaghragm.MaterPvaMgr.prototype.initEvent = function() {

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
				var c22Std = 0;
				var c22Weight = 0;
				var c51Std = 0;
				var c51Weight = 0;
				var c71Std = 0;

				var c71Weight = 0;
				var c72Std = 0;
				var c72Weight = 0;
				var pva165Std = 0;

				var pva165Weight = 0;

				var pva205Std = 0;
				var pva205Weight = 0;
				var pva540Std = 0;
				var pva540Weight = 0;

				for (var i = 0; i < records.length; i++) {
					outLength += records[i].data.outLength;
					c22Std += records[i].data.c22Std;
					c22Weight += records[i].data.c22Weight;
					c51Std += records[i].data.c51Std;
					c51Weight += records[i].data.c51Weight;
					c71Std += records[i].data.c71Std;
					c71Weight += records[i].data.c71Weight;
					c72Std += records[i].data.c72Std;
					c72Weight += records[i].data.c72Weight;
					pva165Std += records[i].data.pva165Std;
					pva165Weight += records[i].data.pva165Weight;

					pva205Std += records[i].data.pva205Std;
					pva205Weight += records[i].data.pva205Weight;
					pva540Std += records[i].data.pva540Std;
					pva540Weight += records[i].data.pva540Weight;
				}
				var r = new Ext.data.Record({
							batchNo : '合计',
							outLength : outLength,
							c22Std : c22Std,
							c22Weight : c22Weight,
							c51Std : c51Std,
							c51Weight : c51Weight,
							c71Std : c71Std,
							c71Weight : c71Weight,
							c72Std : c72Std,
							c72Weight : c72Weight,
							pva165Std : pva165Std,
							pva165Weight : pva165Weight,
							pva205Std : pva205Std,
							pva205Weight : pva205Weight,
							pva540Std : pva540Std,
							pva540Weight : pva540Weight
						})
				_this.listPanel.store.add(r);

			})

}

com.keensen.ump.produce.report.diaghragm.MaterPvaMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, 'PVA及漂洗槽',
			'com.keensen.ump.produce.report.diaghragm.queryPvaAndTrough');
}
