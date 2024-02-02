com.keensen.ump.produce.report.quality.xbar.XbarMgr.prototype.initEvent = function() {
	var _this = this;
	var chartDom = document.getElementById('main');
	var myChart = echarts.init(chartDom,'light');
	var chartDom2 = document.getElementById('main2');
	var myChart2 = echarts.init(chartDom2,'light');

	window.addEventListener('resize', function() {
				myChart.resize();
				myChart2.resize();
			});

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				var specId = this.queryPanel.form.findField('condition/specId')
						.getValue();
				var lineId = this.queryPanel.form.findField('condition/lineId')
						.getValue();
				if (Ext.isEmpty(specId)) {
					Ext.Msg.alert("系统提示", "请选择膜片型号");
					return;
				} else {
					var mpStandStore = this.mpStandStore;
					mpStandStore.baseParams = ({
						'condition/specId' : specId,
						'condition/isWx' : 'n',
						'condition/lineId' : lineId,
						'condition/levelId' : 300029
					});
					mpStandStore.load({});
					var store = this.listPanel.store;
					store.baseParams = vals;
					store.load({});
				}
			}, this);

	this.listPanel.store.on('load', function() {
				var cnt = _this.listPanel.store.getCount();
				if (cnt > 300) {
					Ext.Msg.alert("系统提示", "数据太多,不进行图例展示！");
					return;
				} else {
					var records2 = _this.mpStandStore.getRange();
					var gfdLow = records2[0].data.gfdLow;
					var gfdUp = records2[0].data.gfdUp;
					var gfdAverage = records2[0].data.gfdAvg;

					var records = _this.listPanel.store.getRange();
					var xArray = [];
					var yArray = [];
					var yArray2 = [];
					var minValue = 1000;
					var maxValue = gfdUp;
					for (var i = 0; i < cnt; i++) {
						var rn = records[i].data.rn;
						var batchNo = records[i].data.batchNo;
						var gfdAvg = records[i].data.gfdAvg;
						var createDt = records[i].data.createDt;
						var gfdDiff = records[i].data.gfdDiff;
						xArray.push(batchNo + ' ' + createDt);
						yArray.push(gfdAvg);
						yArray2.push(gfdDiff);
						minValue = minValue > gfdAvg ? gfdAvg : minValue;
						maxValue = maxValue < gfdAvg ? gfdAvg : maxValue;
					}
					maxValue = Number(maxValue) + 1;

					var option;

					option = {
						title : {
							text : 'X控制图',
							left : '1%'
						},
						tooltip : {
							trigger : 'axis'
						},
						xAxis : {
							type : 'category',
							show : false,
							data : xArray
						},
						yAxis : {
							type : 'value',
							min : minValue,
							max : maxValue
						},
						visualMap : {
							top : 50,
							right : 10,
							pieces : [{
										gt : 0,
										lte : 10,
										color : '#93CE07'
									}, {
										gt : 10,
										lte : 30,
										color : '#FBDB0F'
									}, {
										gt : 30,
										lte : 50,
										color : '#FC7D02'
									}, {
										gt : 50,
										lte : 70,
										color : '#FD0100'
									}, {
										gt : 70,
										lte : 100,
										color : '#AA069F'
									}],
							outOfRange : {
								color : '#999'
							}
						},
						series : [{
									data : yArray,
									type : 'line',
									smooth : true,
									markLine : {
										silent : true,
										lineStyle : {
											color : '#333'
										},
										data : [{
													yAxis : gfdLow
												}, {
													yAxis : gfdAverage
												}, {
													yAxis : gfdUp
												}]
									}
								}]
					};

					option && myChart.setOption(option);

					var option2;

					option2 = {
						title : {
							text : 'R控制图',
							left : '1%'
						},
						tooltip : {
							trigger : 'axis'
						},
						xAxis : {
							type : 'category',
							show : false,
							data : xArray
						},
						yAxis : {
							type : 'value'
						},
						visualMap : {
							top : 50,
							right : 10,
							pieces : [{
										gt : 0,
										lte : 2,
										color : '#93CE07'
									}, {
										gt : 2,
										lte : 4,
										color : '#FBDB0F'
									}, {
										gt : 4,
										lte : 6,
										color : '#FC7D02'
									}, {
										gt : 6,
										lte : 8,
										color : '#FD0100'
									}, {
										gt : 8,
										lte : 10,
										color : '#AA069F'
									}],
							outOfRange : {
								color : '#999'
							}
						},
						series : [{
									data : yArray2,
									type : 'line',
									smooth : true
								}]
					};

					option2 && myChart2.setOption(option2);

				}

			});
}

com.keensen.ump.produce.report.quality.xbar.XbarMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	if (!this.queryPanel.form.isValid()) {
		return;
	}

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.report.quality.queryXbar',
			templateFilename : 'ks_quality_report_xbar'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isIE) {
					window.open('/default/deliverynote/seek/down4IE.jsp?fname='
							+ fname);
				} else {
					window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
							+ fname;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.report.quality.xbar.XbarMgr.destroy = function() {
	myChart.dispose();
	myChart2.dispose();
}