com.keensen.ump.qinsen.quality.watertestMgr.prototype.initEvent = function() {
	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		var store = this.listPanel.store;

		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.queryPanel.testSpecId.store.on('load', function(o) {

			})

	this.firstTestWindow.fCheckerId.store.on('load', function(o) {
				if (o.find('staffId', nowStaffId) > -1) {
					_this.firstTestWindow.fCheckerId.setValue(nowStaffId);
				}
			})

	this.firstTestWindow2.fCheckerId.store.on('load', function(o) {
				if (o.find('staffId', nowStaffId) > -1) {
					_this.firstTestWindow2.fCheckerId.setValue(nowStaffId);
				}
			})

	this.firstTestWindow2.testTypeId.store.on('load', function(o) {
				/*
				 * var records = _this.firstTestWindow2.testTypeId.store
				 * .getRange(); Ext.each(records, function(r) { if
				 * (r.data['propValueId'] == 300040) {
				 * _this.firstTestWindow2.testTypeId.store .remove(r); } })
				 */

			})

	this.firstTestWindow.activeItem.mon(this.firstTestWindow.activeItem,
			'beforeSave', function() {
				var batchGpdLowLimit = Ext
						.isEmpty(this.firstTestWindow.batchGpdLowLimit
								.getValue())
						? ''
						: this.firstTestWindow.batchGpdLowLimit.getValue();
				var batchGpdUpLimit = Ext
						.isEmpty(this.firstTestWindow.batchGpdUpLimit
								.getValue())
						? ''
						: this.firstTestWindow.batchGpdUpLimit.getValue();
				var batchGpdStdStr = batchGpdLowLimit + '-' + batchGpdUpLimit;
				this.firstTestWindow.batchGpdStdStr.setValue(batchGpdStdStr);

				var prodGpdLowLimit = Ext
						.isEmpty(this.firstTestWindow.prodGpdLowLimit
								.getValue())
						? ''
						: this.firstTestWindow.prodGpdLowLimit.getValue();
				var prodGpdUpLimit = Ext
						.isEmpty(this.firstTestWindow.prodGpdUpLimit.getValue())
						? ''
						: this.firstTestWindow.prodGpdUpLimit.getValue();
				var prodGpdStdStr = prodGpdLowLimit + '-' + prodGpdUpLimit;
				this.firstTestWindow.prodGpdStdStr.setValue(prodGpdStdStr);

			}, this);

	this.firstTestWindow2.activeItem.mon(this.firstTestWindow2.activeItem,
			'beforeSave', function() {
				// 标准1
				var aGpdLowLimit = this.firstTestWindow2.aGpdLowLimit
						.getValue();
				var aGpdUpLimit = !Ext
						.isEmpty(this.firstTestWindow2.aGpdUpLimit.getValue())
						? this.firstTestWindow2.aGpdUpLimit.getValue()
						: '';
				var aSaltLowLimit = this.firstTestWindow2.aSaltLowLimit
						.getValue();
				var aFactorBUpLimit = this.firstTestWindow2.aFactorBUpLimit
						.getValue();
				// 标准2
				var bGpdLowLimit = this.firstTestWindow2.bGpdLowLimit
						.getValue();
				var bSaltLowLimit = this.firstTestWindow2.bSaltLowLimit
						.getValue();
				// 优先标准2
				if (!Ext.isEmpty(bGpdLowLimit)) {
					var prodGpdStdStr = bGpdLowLimit + '-';
					var prodSaltStd = bSaltLowLimit;
					var prodFactorBStd = '';
				} else {
					var prodGpdStdStr = aGpdLowLimit + '-' + aGpdUpLimit;
					var prodSaltStd = this.firstTestWindow2.aSaltLowLimit
							.getValue();
					var prodFactorBStd = this.firstTestWindow2.aFactorBUpLimit
							.getValue();
				}
				this.firstTestWindow2.prodGpdStdStr.setValue(prodGpdStdStr);
				this.firstTestWindow2.prodSaltStd.setValue(prodSaltStd);
				this.firstTestWindow2.prodFactorBStd.setValue(prodFactorBStd);
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var testTypeId = cell.get('testTypeId');

				if (this.opt == 'reTest') {
					/*
					 * if (testTypeId == '300040') { this.reTestWindow.show();
					 * this.reTestWindow.loadData(cell); } else {
					 */
					this.reTestWindow2.show();
					this.reTestWindow2.loadData(cell);
					// }
				}

				if (this.opt == 'modify') {
					/*
					 * if (testTypeId == '300040') { this.modifyWindow.show();
					 * this.modifyWindow.loadData(cell); } else {
					 */
					this.modifyWindow2.show();
					this.modifyWindow2.loadData(cell);
					// }
				}

				if (this.opt == 'viewremark') {
					var remark = cell.get('remark');
					Ext.Msg.alert("判定说明", remark);

				}
			}, this);

}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.exportExcel = function() {
	var _this = this;
	var vals = this.queryPanel.form.getValues();
	// var start = vals['condition/orderDateStart'];
	// var end = vals['condition/orderDateEnd'];
	/*
	 * if (Ext.isEmpty(start) || Ext.isEmpty(end)) { Ext.Msg.alert("系统提示",
	 * "请选择订单日期时间段！"); return false; } if (dayDiff(start, end) > 31) {
	 * Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！"); return false; }
	 */

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.qinsen.watertest.queryRecords.biz.ext",
		method : "post",
		responseType : 'blob',
		jsonData : vals,
		// jsonData : {
		// 'condition/orderDateStart' : start,
		// 'condition/orderDateEnd' : end
		// },
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (!Ext.isEmpty(ret.data)) {
					var str = '<style>td{border:1px black solid;}</style>'
							+ '<table class="table-data table-bordered table"><tr>';

					str += '<td align="center">量产判定</td>'
							+ '<td align="center">单品判定</td>'
							+ '<td align="center">卷膜序号</td>'
							+ '<td align="center">卷膜型号</td>'
							+ '<td align="center">元件序号</td>'
							+ '<td align="center">工艺员备注</td>'
							+ '<td align="center">测试型号</td>'
							+ '<td align="center">拟入库型号</td>'
							+ '<td align="center">拟贴标型号</td>'

							+ '<td align="center">膜片批次</td>'
							+ '<td align="center">底膜批次</td>'
							+ '<td align="center">检测类型</td>'
							+ '<td align="center">气检值</td>'
							+ '<td align="center">气检时间</td>'
							+ '<td align="center">检测温度</td>'

							+ '<td align="center">初检产水量</td>'
							+ '<td align="center">初检脱盐率%</td>'
							+ '<td align="center">初检系数B</td>'
							+ '<td align="center">初检检测时间</td>'
							+ '<td align="center">初检质检员</td>'
							+ '<td align="center">初检测试膜壳</td>'

							+ '<td align="center">复检产水量</td>'
							+ '<td align="center">复检脱盐率%</td>'
							+ '<td align="center">复检系数B</td>'
							+ '<td align="center">复检检测时间</td>'
							+ '<td align="center">复检质检员</td>'
							+ '<td align="center">复检测试膜壳</td>'

							+ '<td align="center">量产标准GPD</td>'
							+ '<td align="center">量产标准脱盐率%</td>'
							+ '<td align="center">量产标准系数B%</td>'

							+ '<td align="center">单品标准GPD</td>'
							+ '<td align="center">单品标准脱盐率%</td>'
							+ '<td align="center">单品标准系数B%</td>'

							+ '<td align="center">判定说明</td>'

							+ '</tr>';
					Ext.each(ret.data, function(r) {
								str += '<tr><td align="center">'
										+ formatStr(r.isBatchQualifiedName)
										+ '</td><td align="center">'
										+ formatStr(r.isProdQualifiedName)
										+ '</td><td align="center">'
										+ formatStr(r.juanmoBatchNo)
										+ '</td><td align="center">'
										+ formatStr(r.juanmoSpecName)
										+ '</td>'
										+'<td align="center">'
										+ formatStr(r.prodBatchNo)
										+ '</td>' 
										+'<td align="center">'
										+ formatStr(r.gyyRemark)
										+ '</td>' 
										+ '<td align="center">'
										+ formatStr(r.testSpecName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.ifProdPpecName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.markSpecName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.tumoBatchStr) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.dimoBatchStr) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.testTypeName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.airResult) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.airDate) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.temp) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.fGpd) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.fSalt) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.fFactorB) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.fCheckTime) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.fCheckerName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.fMacName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.rGpd) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.rSalt) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.rFactorB) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.rCheckTime) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.rCheckerName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.rMacName) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.batchGpdStdStr) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.batchSaltStd) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.batchFactorBStd)
										+ '</td>' + '<td align="center">'
										+ formatStr(r.prodGpdStdStr) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.prodSaltStd) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.prodFactorBStd) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.remark) + '</td>'

										+ '</tr>';
							})
					str += '</table>';
					// application/vnd.ms-excel;charset=utf-8
					var blob = new Blob(["\ufeff", str], {
								type : 'application/vnd.ms-excel;charset=utf-8'
							});
					var link = document.createElement('a');
					var url = URL.createObjectURL(blob);
					link.href = url;
					link.download = 'exported-data.xls'; // 指定导出文件的名称
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				} else {
					Ext.Msg.alert("系统提示", "没有查询到数据!");
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.firstTest = function() {
	this.firstTestWindow.show();
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.destroy = function() {
	this.firstTestWindow.destroy();
	this.firstTestWindow2.destroy();
	this.reTestWindow.destroy();
	this.reTestWindow2.destroy();
	this.modifyWindow.destroy();
}

// 处理产品编码，获取产品信息和质检标准
com.keensen.ump.qinsen.quality.watertestMgr.prototype.dealCodeInfo = function() {
	var _this = this;
	var checkCode = _this.firstTestWindow.checkCode.getValue();

	if (!Ext.isEmpty(checkCode)) {
		_this.clearFirstTestWindow();// 先清空再回填
		_this.firstTestWindow.checkCode.setValue(checkCode);
		_this.requestMask = _this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
					url : "com.keensen.ump.qinsen.watertest.dealCodeInfo.biz.ext",
					method : "post",
					jsonData : {
						'checkCode' : checkCode
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							if (!Ext.isEmpty(ret.data)) {
								var ret = ret.data;

								_this.firstTestWindow.juanmoBatchNo
										.setValue(ret[0].juanmoBatchNo);
								_this.firstTestWindow.juanmoBatchId
										.setValue(ret[0].juanmoBatchId);
								_this.firstTestWindow.testSpecId
										.setValue(ret[0].prodSpecId);
								_this.firstTestWindow.area
										.setValue(ret[0].prodSpecArea);
								_this.firstTestWindow.ifProdSpecId
										.setValue(ret[0].prodSpecId);
								_this.firstTestWindow.markSpecName
										.setValue(ret[0].prodSpecName);
								_this.firstTestWindow.qjResult
										.setValue(ret[0].checkResult);
								_this.loadBatchStd();
								_this.loadProdStd();

							} else {
								Ext.Msg.alert("系统提示", "没有找到该产品编码的信息！",
										function() {
											return false;
										})

							}
						}
					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
	}
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.clearFirstTestWindow = function() {
	var _this = this;
	_this.firstTestWindow.form.reset();
	_this.firstTestWindow.fCheckTm.setValue(new Date());
	_this.firstTestWindow.juanmoBatchNo.setValue('');
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.calcFactorB = function() {
	var _this = this;
	var fGpd = _this.firstTestWindow.fGpd.getValue();
	var fSalt = _this.firstTestWindow.fSalt.getValue();
	var area = _this.firstTestWindow.area.getValue() * 1;
	if (!Ext.isEmpty(fGpd) && !Ext.isEmpty(fSalt) && !Ext.isEmpty(area)) {
		var b = 1.7 * (fGpd / area) * (1 / fSalt * 100 - 1);
		_this.firstTestWindow.fFactorB.setValue(b);
		_this.judgeBatch();
		_this.judgeProd();
	}
}

// 量产判定
com.keensen.ump.qinsen.quality.watertestMgr.prototype.judgeBatch = function() {
	var _this = this;
	var fGpd = _this.firstTestWindow.fGpd.getValue();
	var fSalt = _this.firstTestWindow.fSalt.getValue();
	var fFactorB = _this.firstTestWindow.fFactorB.getValue();
	if (Ext.isEmpty(fGpd) || Ext.isEmpty(fSalt) || Ext.isEmpty(fFactorB)) {
		return;
	}

	// 标准
	var batchGpdLowLimit = _this.firstTestWindow.batchGpdLowLimit.getValue()
			* 1;
	var batchGpdUpLimit = (Ext.isEmpty(_this.firstTestWindow.batchGpdUpLimit
			.getValue())) ? '' : _this.firstTestWindow.batchGpdUpLimit
			.getValue()
			* 1;
	var batchSaltLowLimit = _this.firstTestWindow.batchSaltLowLimit.getValue()
			* 1;
	var batchFactorBUpLimit = (Ext
			.isEmpty(_this.firstTestWindow.batchFactorBUpLimit.getValue()))
			? ''
			: _this.firstTestWindow.batchFactorBUpLimit.getValue() * 1;

	// 标准的产水量下限、脱盐率是必须有的，其它的可能为空
	if (!Ext.isEmpty(batchGpdLowLimit) && !Ext.isEmpty(batchSaltLowLimit)) {
		_this.firstTestWindow.isBatchQualified.setValue('Y');// 预设合格
		var judgeInfo = new Array();
		if (fGpd < batchGpdLowLimit) {
			_this.firstTestWindow.isBatchQualified.setValue('N');
			judgeInfo.push('产水量超下限');
		}
		if (!Ext.isEmpty(batchGpdUpLimit) && fGpd > batchGpdUpLimit) {
			_this.firstTestWindow.isBatchQualified.setValue('N');
			judgeInfo.push('产水量超上限');
		}
		if (fSalt < batchSaltLowLimit) {
			_this.firstTestWindow.isBatchQualified.setValue('N');
			judgeInfo.push('脱盐率超下限');
		}
		/*
		 * if (!Ext.isEmpty(batchFactorBUpLimit) && fFactorB >
		 * batchFactorBUpLimit) {
		 * _this.firstTestWindow.isBatchQualified.setValue('N');
		 * judgeInfo.push('系数B超上限'); }
		 */
		if (_this.firstTestWindow.isBatchQualified.getValue() == 'N') {
			_this.firstTestWindow.batchJudgeInfo
					.setValue('<span style="color:red;">' + judgeInfo.join(',')
							+ '</span>');
		} else {
			_this.firstTestWindow.batchJudgeInfo.setValue('');
		}
	} else {
		_this.firstTestWindow.isBatchQualified.reset();
		_this.firstTestWindow.batchJudgeInfo
				.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
	}
}

// 单品判定
com.keensen.ump.qinsen.quality.watertestMgr.prototype.judgeProd = function() {
	var _this = this;
	var fGpd = _this.firstTestWindow.fGpd.getValue();
	var fSalt = _this.firstTestWindow.fSalt.getValue();
	var fFactorB = _this.firstTestWindow.fFactorB.getValue();
	if (Ext.isEmpty(fGpd) || Ext.isEmpty(fSalt) || Ext.isEmpty(fFactorB)) {
		return;
	}

	// 标准
	var prodGpdLowLimit = _this.firstTestWindow.prodGpdLowLimit.getValue() * 1;

	var prodGpdUpLimit = (Ext.isEmpty(_this.firstTestWindow.prodGpdUpLimit
			.getValue())) ? '' : _this.firstTestWindow.prodGpdUpLimit
			.getValue()
			* 1;

	var prodSaltLowLimit = _this.firstTestWindow.prodSaltLowLimit.getValue()
			* 1;

	var prodFactorBUpLimit = (Ext
			.isEmpty(_this.firstTestWindow.prodFactorBUpLimit.getValue()))
			? ''
			: _this.firstTestWindow.prodFactorBUpLimit.getValue() * 1;

	// 标准的产水量下限、脱盐率是必须有的，其它的可能为空
	if (!Ext.isEmpty(prodGpdLowLimit) && !Ext.isEmpty(prodSaltLowLimit)) {
		_this.firstTestWindow.isProdQualified.setValue('Y');// 预设合格
		var judgeInfo = new Array();
		if (fGpd < prodGpdLowLimit) {
			_this.firstTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('产水量超下限');
		}

		if (!Ext.isEmpty(prodGpdUpLimit) && (fGpd > prodGpdUpLimit)) {

			_this.firstTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('产水量超上限');
		}

		if (fSalt < prodSaltLowLimit) {
			_this.firstTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('脱盐率超下限');
		}

		/*
		 * if (!Ext.isEmpty(prodFactorBUpLimit) && (fFactorB >
		 * prodFactorBUpLimit)) {
		 * _this.firstTestWindow.isProdQualified.setValue('N');
		 * judgeInfo.push('系数B超上限'); }
		 */
		if (_this.firstTestWindow.isProdQualified.getValue() == 'N') {
			_this.firstTestWindow.prodJudgeInfo
					.setValue('<span style="color:red;">' + judgeInfo.join(',')
							+ '</span>');
		} else {
			_this.firstTestWindow.prodJudgeInfo.setValue('');
		}
	} else {
		_this.firstTestWindow.isProdQualified.reset();
		_this.firstTestWindow.prodJudgeInfo
				.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
	}
}

// 获取量产质检标准
com.keensen.ump.qinsen.quality.watertestMgr.prototype.loadBatchStd = function() {
	var _this = this;
	// 先清空
	_this.firstTestWindow.batchGpdLowLimit.reset();
	_this.firstTestWindow.batchGpdUpLimit.reset();
	_this.firstTestWindow.batchSaltLowLimit.reset();
	_this.firstTestWindow.batchFactorBUpLimit.reset();
	_this.firstTestWindow.isBatchQualified.reset();
	var testSpecId = _this.firstTestWindow.testSpecId.getValue();
	if (!Ext.isEmpty(testSpecId)) {

		Ext.Ajax.request({
			url : "com.keensen.ump.qinsen.std.queryTrialWaterStd.biz.ext",
			method : "post",
			jsonData : {
				'condition/trialSpecId' : testSpecId
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var ret = ret.data;

						_this.firstTestWindow.batchGpdLowLimit
								.setValue(ret[0].gpdLowLimit);
						_this.firstTestWindow.batchGpdUpLimit
								.setValue(ret[0].gpdUpLimit);
						_this.firstTestWindow.batchSaltLowLimit
								.setValue(ret[0].saltLowLimit);
						_this.firstTestWindow.batchFactorBUpLimit
								.setValue(ret[0].factorBUpLimit);
						_this.firstTestWindow.prodJudgeInfo.setValue('');
						_this.judgeBatch();// 尝试判定

					} else {
						_this.firstTestWindow.batchJudgeInfo
								.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');

					}
				}
			},
			callback : function() {

			}
		})
	}
}

// 获取单品判定标准
com.keensen.ump.qinsen.quality.watertestMgr.prototype.loadProdStd = function() {
	var _this = this;
	// 先清空
	_this.firstTestWindow.prodGpdLowLimit.reset();
	_this.firstTestWindow.prodGpdUpLimit.reset();
	_this.firstTestWindow.prodSaltLowLimit.reset();
	_this.firstTestWindow.prodFactorBUpLimit.reset();
	_this.firstTestWindow.isProdQualified.reset();
	var ifProdSpecId = _this.firstTestWindow.ifProdSpecId.getValue();
	if (!Ext.isEmpty(ifProdSpecId)) {

		// 获取产品标准用于单品判定
		Ext.Ajax.request({
			url : "com.keensen.ump.qinsen.std.queryProdWaterStd.biz.ext",
			method : "post",
			jsonData : {
				'condition/prodSpecId' : ifProdSpecId
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var ret = ret.data;
						// 优先标准2
						if (!Ext.isEmpty(ret[0].bGpdLowLimit)) {
							_this.firstTestWindow.prodGpdLowLimit
									.setValue(ret[0].bGpdLowLimit);
							_this.firstTestWindow.prodSaltLowLimit
									.setValue(ret[0].bSaltLowLimit);
						} else {
							_this.firstTestWindow.prodGpdLowLimit
									.setValue(ret[0].aGpdLowLimit);
							_this.firstTestWindow.prodGpdUpLimit
									.setValue(ret[0].aGpdUpLimit);
							_this.firstTestWindow.prodSaltLowLimit
									.setValue(ret[0].aSaltLowLimit);
							_this.firstTestWindow.prodFactorBUpLimit
									.setValue(ret[0].aFactorBUpLimit);
						}
						_this.firstTestWindow.prodJudgeInfo.setValue('');
						_this.judgeProd();// 尝试判定

					} else {
						_this.firstTestWindow.prodJudgeInfo
								.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
					}
				}
			},
			callback : function() {

			}
		})

	}
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.otherFirstTest = function() {
	this.firstTestWindow2.show();
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.clearFirstTestWindow2 = function() {
	var _this = this;
	_this.firstTestWindow2.form.reset();
	_this.firstTestWindow2.fCheckTm.setValue(new Date());
	_this.firstTestWindow2.juanmoBatchNo.setValue('');
}

// 处理产品编码，获取产品信息和质检标准
com.keensen.ump.qinsen.quality.watertestMgr.prototype.dealCodeInfo2 = function() {
	var _this = this;
	var checkCode = _this.firstTestWindow2.checkCode.getValue();

	if (!Ext.isEmpty(checkCode)) {
		_this.clearFirstTestWindow2();// 先清空再回填
		_this.firstTestWindow2.checkCode.setValue(checkCode);
		_this.requestMask = _this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
					url : "com.keensen.ump.qinsen.watertest.dealCodeInfo.biz.ext",
					method : "post",
					jsonData : {
						'checkCode' : checkCode
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							if (!Ext.isEmpty(ret.data)) {
								var ret = ret.data;

								_this.firstTestWindow2.juanmoBatchNo
										.setValue(ret[0].juanmoBatchNo);
								_this.firstTestWindow2.juanmoBatchId
										.setValue(ret[0].juanmoBatchId);
								_this.firstTestWindow2.testSpecId
										.setValue(ret[0].prodSpecId);
								_this.firstTestWindow2.area
										.setValue(ret[0].prodSpecArea);
								_this.firstTestWindow2.ifProdSpecId
										.setValue(ret[0].prodSpecId);
								_this.firstTestWindow2.markSpecName
										.setValue(ret[0].prodSpecName);
								_this.firstTestWindow2.qjResult
										.setValue(ret[0].checkResult);
								_this.loadStd();

							} else {
								Ext.Msg.alert("系统提示", "没有找到该产品编码的信息！",
										function() {
											return false;
										})

							}
						}
					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
	}
}

// 获取质检标准
com.keensen.ump.qinsen.quality.watertestMgr.prototype.loadStd = function() {
	var _this = this;
	// 先清空
	_this.firstTestWindow2.aGpdLowLimit.reset();
	_this.firstTestWindow2.aGpdUpLimit.reset();
	_this.firstTestWindow2.aSaltLowLimit.reset();
	_this.firstTestWindow2.aFactorBUpLimit.reset();
	_this.firstTestWindow2.bGpdLowLimit.reset();
	_this.firstTestWindow2.bSaltLowLimit.reset();
	_this.firstTestWindow2.isProdQualified.reset();
	var ifProdSpecId = _this.firstTestWindow2.ifProdSpecId.getValue();
	if (!Ext.isEmpty(ifProdSpecId)) {

		// 获取产品标准用于单品判定
		Ext.Ajax.request({
			url : "com.keensen.ump.qinsen.std.queryProdWaterStd.biz.ext",
			method : "post",
			jsonData : {
				'condition/prodSpecId' : ifProdSpecId
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var ret = ret.data;
						_this.firstTestWindow2.aGpdLowLimit
								.setValue(ret[0].aGpdLowLimit);
						_this.firstTestWindow2.aGpdUpLimit
								.setValue(ret[0].aGpdUpLimit);
						_this.firstTestWindow2.aSaltLowLimit
								.setValue(ret[0].aSaltLowLimit);
						_this.firstTestWindow2.aFactorBUpLimit
								.setValue(ret[0].aFactorBUpLimit);
						_this.firstTestWindow2.bGpdLowLimit
								.setValue(ret[0].bGpdLowLimit);
						_this.firstTestWindow2.bSaltLowLimit
								.setValue(ret[0].bSaltLowLimit);

						_this.firstTestWindow2.judgeInfo.setValue('');
						_this.judge();// 尝试判定

					} else {
						_this.firstTestWindow2.judgeInfo
								.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
					}
				}
			},
			callback : function() {

			}
		})

	}
}

// 判定结果
com.keensen.ump.qinsen.quality.watertestMgr.prototype.judge = function() {
	var _this = this;
	var fGpd = _this.firstTestWindow2.fGpd.getValue();
	var fSalt = _this.firstTestWindow2.fSalt.getValue();
	var fFactorB = _this.firstTestWindow2.fFactorB.getValue();
	if (Ext.isEmpty(fGpd) || Ext.isEmpty(fSalt) || Ext.isEmpty(fFactorB)) {
		return;
	}
	// 标准1
	var aGpdLowLimit = _this.firstTestWindow2.aGpdLowLimit.getValue() * 1;
	var aGpdUpLimit = _this.firstTestWindow2.aGpdUpLimit.getValue() * 1;
	var aSaltLowLimit = _this.firstTestWindow2.aSaltLowLimit.getValue() * 1;
	var aFactorBUpLimit = _this.firstTestWindow2.aFactorBUpLimit.getValue() * 1;
	// 标准2
	var bGpdLowLimit = _this.firstTestWindow2.bGpdLowLimit.getValue() * 1;
	var bSaltLowLimit = _this.firstTestWindow2.bSaltLowLimit.getValue() * 1;

	// 优先标准2
	var prodGpdLowLimit, prodGpdUpLimit, prodSaltLowLimit, prodFactorBUpLimit;
	if (!Ext.isEmpty(bGpdLowLimit) && bGpdLowLimit != 0) {
		prodGpdLowLimit = bGpdLowLimit;
		prodSaltLowLimit = bSaltLowLimit;
	} else {
		prodGpdLowLimit = aGpdLowLimit;
		prodGpdUpLimit = aGpdUpLimit;
		prodSaltLowLimit = aSaltLowLimit;
		prodFactorBUpLimit = aFactorBUpLimit;
	}

	// 标准的产水量下限、脱盐率是必须有的，其它的可能为空
	if (!Ext.isEmpty(prodGpdLowLimit) && !Ext.isEmpty(prodSaltLowLimit)) {
		_this.firstTestWindow2.isProdQualified.setValue('Y');// 预设合格
		var judgeInfo = new Array();
		if (fGpd < prodGpdLowLimit) {
			_this.firstTestWindow2.isProdQualified.setValue('N');
			judgeInfo.push('产水量超下限');
		}
		if (!Ext.isEmpty(prodGpdUpLimit) && fGpd > prodGpdUpLimit) {
			_this.firstTestWindow2.isProdQualified.setValue('N');
			judgeInfo.push('产水量超上限');
		}
		if (fSalt < prodSaltLowLimit) {
			_this.firstTestWindow2.isProdQualified.setValue('N');
			judgeInfo.push('脱盐率超下限');
		}
		/*
		 * if (!Ext.isEmpty(prodFactorBUpLimit) && fFactorB >
		 * prodFactorBUpLimit) {
		 * _this.firstTestWindow2.isProdQualified.setValue('N');
		 * judgeInfo.push('系数B超上限'); }
		 */
		if (_this.firstTestWindow2.isProdQualified.getValue() == 'N') {
			_this.firstTestWindow2.judgeInfo
					.setValue('<span style="color:red;">' + judgeInfo.join(',')
							+ '</span>');
		} else {
			_this.firstTestWindow2.judgeInfo.setValue('');
		}
	} else {
		_this.firstTestWindow2.isProdQualified.reset();
		_this.firstTestWindow2.judgeInfo
				.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
	}
}

// 计算系数B
com.keensen.ump.qinsen.quality.watertestMgr.prototype.calcFactorB2 = function() {
	var _this = this;
	var fGpd = _this.firstTestWindow2.fGpd.getValue();
	var fSalt = _this.firstTestWindow2.fSalt.getValue();
	var area = _this.firstTestWindow2.area.getValue() * 1;
	if (!Ext.isEmpty(fGpd) && !Ext.isEmpty(fSalt) && !Ext.isEmpty(area)) {
		var b = 1.7 * (fGpd / area) * (1 / fSalt * 100 - 1);
		_this.firstTestWindow2.fFactorB.setValue(b);
		_this.judge();
	}
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.reTest = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.opt = 'reTest';
			this.listPanel.onEdit();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.delRecord = function() {
	this.listPanel.onDel();
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.modiRecord = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.opt = 'modify';
			this.listPanel.onEdit();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.onViewRemark = function() {
	this.opt = 'viewremark';
	this.listPanel.onEdit();
}

com.keensen.ump.qinsen.quality.watertestMgr.prototype.onRemark = function() {
	var _this = this;

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var recordIds = [];
		Ext.each(C, function(r) {
					recordIds.push(r.data['recordId']);
				});
		var gyyRemark = C[0].data.gyyRemark;
		Ext.Msg.prompt('工艺员备注', '请输入', function(btn, text) {
			if (btn == 'ok') {
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
							url : "com.keensen.ump.qinsen.watertest.saveGyyRemark.biz.ext",
							method : "post",
							jsonData : {
								'gyyRemark' : text,
								'recordIds' : recordIds.join(",")
							},
							success : function(resp) {
								var ret = Ext.decode(resp.responseText);
								if (ret.success) {
									Ext.Msg.alert("系统提示", "操作成功！", function() {
												_this.listPanel.store.load();

											})
								} else {
									Ext.Msg.alert("系统提示", "备注失败！")

								}

							},
							callback : function() {
								_this.requestMask.hide()
							}
						})
			}
		}, this, true, gyyRemark);
	}
}

function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}