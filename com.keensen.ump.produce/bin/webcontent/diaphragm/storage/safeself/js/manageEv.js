com.keensen.ump.produce.diaphragm.storage.SafeselfMgr.prototype.initEvent = function() {
	var _this = this;

	_this.safeselfWindow.show();
	var chartDom = document.getElementById(safeselfId);
	var myChart = echarts.init(chartDom);
	//_this.safeselfWindow.hide();

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

	this.listPanel.store.on('load', function() {

				var cnt = _this.listPanel.store.getCount();
				var xdata = [];
				var amountStdData = [];
				var amountSafeData = [];
				var records = _this.listPanel.store.getRange();
				for (var i = 0; i < cnt; i++) {
					var materSpecName = records[i].data.materSpecName;
					xdata.push(materSpecName);
					var amountStd = records[i].data.amountStd;
					amountStdData.push(amountStd);
					var amountSafe = records[i].data.amountSafe;
					amountSafeData.push(amountSafe);
				}
				// 指定图表的配置项和数据
				var option = {
					title : {
						text : ''
					},
					xAxis : {
						type : 'category',
						data : xdata
					},
					yAxis : {
						type : 'value'
					},
					legend : {
						data : ['安全库存标准', '安全库存数量']
					},
					series : [{
								name : '安全库存标准',
								data : amountStdData,
								type : 'bar',
								label : {
									show : true,
									position : 'top'
								}
							}, {
								name : '安全库存数量',
								data : amountSafeData,
								type : 'bar',
								label : {
									show : true,
									position : 'top'
								}
							}]
				};

				option && myChart.setOption(option);
			})

}

com.keensen.ump.produce.diaphragm.storage.SafeselfMgr.prototype.onExportExcel = function() {

	doQuerySqlAndExport(
			this,
			null,
			this.listPanel,
			'自用膜片安全库存',
			'com.keensen.ump.produce.diaphragm.storage.safestorage.queryStockSelfCount',
			'0,1');

}

com.keensen.ump.produce.diaphragm.storage.SafeselfMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.diaphragm.storage.SafeselfMgr.prototype.onEcharts = function() {
	this.safeselfWindow.show();

}

com.keensen.ump.produce.diaphragm.storage.SafeselfMgr.prototype.destroy = function() {
	this.safeselfWindow.destroy();
}