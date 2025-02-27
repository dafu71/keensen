com.keensen.ump.produce.report.quality.imr.imrMgr.prototype.initEvent = function() {
	var _this = this;
	var chartDom = document.getElementById('main3');
	var myChart = echarts.init(chartDom, 'light');
	var chartDom2 = document.getElementById('main4');
	var myChart2 = echarts.init(chartDom2, 'light');

	window.addEventListener('resize', function() {
				myChart.resize();
				myChart2.resize();
			});

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

				if (Ext.isEmpty(vals['condition/orderNo'])) {

					if (Ext.isEmpty(vals['condition/produceDtStart'])
							|| Ext.isEmpty(vals['condition/produceDtEnd'])) {
						Ext.Msg.alert("系统提示", "请选择查询日期！");
						return false;

					}
					var start = vals['condition/produceDtStart'];
					var end = vals['condition/produceDtEnd'];
					if (dayDiff(start, end) > 31) {
						Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
						return false;

					}

				}

				var store = this.listPanel.store;
				store.baseParams = vals;
				store.load({});

			}, this);

	this.listPanel.store.on('load', function() {
				var cnt = _this.listPanel.store.getCount();
				if (cnt == 0)
					return;
				if (cnt > 300) {
					Ext.Msg.alert("系统提示", "数据太多,不进行图例展示！");
					return;
				} else {
					var records = _this.listPanel.store.getRange();

					var mr = 0
					var checkResult0 = 0
					// 计算mr
					for (var i = 0; i < cnt; i++) {
						var checkResult = records[i].data.checkResult;
						var diff = Math.abs(checkResult - checkResult0);
						mr = mr + diff;
						checkResult0 = checkResult;
					}
					mr = mr - records[0].data.checkResult;
					mr = returnFloat(mr / cnt);
					// 中心线
					var x = records[0].data.x;
					var uclx = returnFloat(x + 2.66 * mr);
					var lclx = returnFloat(x - 2.66 * mr);

					var uclr = returnFloat(3.268 * mr);
					var lclr = 0;

					var xArray = [];
					var yArray = [];
					var yArray2 = [];
					var minValue = lclx;
					var maxValue = uclx;

					var minValue2 = lclr;
					var maxValue2 = uclr;

					var first = 0;
					var second = 0;
					var r = 0;

					for (var i = 0; i < cnt; i++) {
						var rn = records[i].data.rn;
						var batchNo = records[i].data.batchNo;
						var createDt = records[i].data.produceDt;
						var checkResult = records[i].data.checkResult;
						xArray.push(batchNo + ' ' + createDt);
						yArray.push(checkResult);
						second = checkResult;
						r = Math.abs(second - first);
						first = second;
						yArray2.push(r);
						minValue = returnFloat(minValue) > returnFloat(checkResult)
								? returnFloat(checkResult)
								: returnFloat(minValue);
						maxValue = returnFloat(maxValue) < returnFloat(checkResult)
								? returnFloat(checkResult)
								: returnFloat(maxValue);

						minValue2 = returnFloat(minValue2) > returnFloat(r)
								? returnFloat(r)
								: returnFloat(minValue2);
						maxValue2 = returnFloat(maxValue2) < returnFloat(r)
								? returnFloat(r)
								: returnFloat(maxValue2);
					}
					maxValue = returnFloat(Number(maxValue) + 1);
					minValue = 0;

					maxValue2 = returnFloat(Number(maxValue2) + 1);

					var option;

					option = {
						title : {
							text : '单值控制图,气检平均值=' + x,
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
						}/*
							 * , visualMap : { top : 50, right : 10, pieces : [{
							 * gt : 0, lte : 0.2, color : '#93CE07' }, { gt :
							 * 0.2, lte : 0.4, color : '#FBDB0F' }, { gt : 0.4,
							 * lte : 0.6, color : '#FC7D02' }, { gt : 0.6, lte :
							 * 0.8, color : '#FD0100' }, { gt : 0.8, lte : 1,
							 * color : '#AA069F' }], outOfRange : { color :
							 * '#999' } }
							 */,
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
													yAxis : lclx < 0 ? 0 : lclx
												}, {
													yAxis : x
												}, {
													yAxis : uclx
												}]
									}
								}]
					};

					option && myChart.setOption(option);

					var option2;

					option2 = {
						title : {
							text : '极差控制图,气检MR值=' + mr,
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
							min : minValue2,
							max : maxValue2
						}/*
							 * , visualMap : { top : 50, right : 10, pieces : [{
							 * gt : 0, lte : 2, color : '#93CE07' }, { gt : 2,
							 * lte : 4, color : '#FBDB0F' }, { gt : 4, lte : 6,
							 * color : '#FC7D02' }, { gt : 6, lte : 8, color :
							 * '#FD0100' }, { gt : 8, lte : 10, color :
							 * '#AA069F' }], outOfRange : { color : '#999' } }
							 */,
						series : [{
									data : yArray2,
									type : 'line',
									smooth : true,
									markLine : {
										silent : true,
										lineStyle : {
											color : '#333'
										},
										data : [{
													yAxis : lclr
												}, {
													yAxis : mr
												}, {
													yAxis : uclr
												}]
									}
								}]
					};

					option2 && myChart2.setOption(option2);

				}

			});
}

com.keensen.ump.produce.report.quality.imr.imrMgr.prototype.exportExcel = function() {
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

com.keensen.ump.produce.report.quality.imr.imrMgr.destroy = function() {
	myChart.dispose();
	myChart2.dispose();
}

function returnFloat(value) {
	var value = Math.round(parseFloat(value) * 100) / 100;
	return value;
}
