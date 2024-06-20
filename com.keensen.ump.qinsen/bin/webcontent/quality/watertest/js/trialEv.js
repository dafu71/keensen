com.keensen.ump.qinsen.quality.trialMgr.prototype.initEvent = function() {
	var _this = this;
	this.reTestWindow.rCheckerId.store.on('load', function(o) {
				if (o.find('staffId', nowStaffId) > -1) {
					_this.reTestWindow.rCheckerId.setValue(nowStaffId);
				}
			})

	this.reTestWindow.activeItem.mon(this.reTestWindow.activeItem, 'afterload',
			function(win, data) {
				_this.loadBatchStd();
				_this.loadProdStd();
			}, this);
			
	this.modifyWindow.activeItem.mon(this.modifyWindow.activeItem, 'afterload',
			function(win, data) {
				var batchGpd = data.batchGpdStdStr.split('-');
				this.modifyWindow.batchGpdLowLimit.setValue(batchGpd[0]);
				this.modifyWindow.batchGpdUpLimit.setValue(batchGpd[1]);
				
				var gpd = data.prodGpdStdStr.split('-');
				this.modifyWindow.prodGpdLowLimit.setValue(gpd[0]);
				this.modifyWindow.prodGpdUpLimit.setValue(gpd[1]);
				
				var regEx = new RegExp("\\-", "gi");
				if (!Ext.isEmpty(data.fCheckTime)) {
					data.fCheckTime = data.fCheckTime.split('.')[0];
					var date1 = data.fCheckTime.replace(regEx, "/");
					this.modifyWindow.items.items[0].form
							.findField('entity/fCheckTm')
							.setValue(new Date(date1));
				}
				
				if (!Ext.isEmpty(data.rCheckTime)) {
					data.rCheckTime = data.rCheckTime.split('.')[0];
					var date1 = data.rCheckTime.replace(regEx, "/");
					this.modifyWindow.items.items[0].form
							.findField('entity/rCheckTm')
							.setValue(new Date(date1));
				}
			}, this);
			
	this.modifyWindow.activeItem.mon(this.modifyWindow.activeItem,
			'beforeSave', function() {
				var batchGpdLowLimit = Ext
						.isEmpty(this.modifyWindow.batchGpdLowLimit
								.getValue())
						? ''
						: this.modifyWindow.batchGpdLowLimit.getValue();
				var batchGpdUpLimit = Ext
						.isEmpty(this.modifyWindow.batchGpdUpLimit
								.getValue())
						? ''
						: this.modifyWindow.batchGpdUpLimit.getValue();
				var batchGpdStdStr = batchGpdLowLimit + '-' + batchGpdUpLimit;
				this.modifyWindow.batchGpdStdStr.setValue(batchGpdStdStr);

				var prodGpdLowLimit = Ext
						.isEmpty(this.modifyWindow.prodGpdLowLimit
								.getValue())
						? ''
						: this.modifyWindow.prodGpdLowLimit.getValue();
				var prodGpdUpLimit = Ext
						.isEmpty(this.modifyWindow.prodGpdUpLimit.getValue())
						? ''
						: this.modifyWindow.prodGpdUpLimit.getValue();
				var prodGpdStdStr = prodGpdLowLimit + '-' + prodGpdUpLimit;
				this.modifyWindow.prodGpdStdStr.setValue(prodGpdStdStr);

			}, this);
}

com.keensen.ump.qinsen.quality.trialMgr.prototype.calcFactorB = function() {
	var _this = this;
	var rGpd = _this.reTestWindow.rGpd.getValue();
	var rSalt = _this.reTestWindow.rSalt.getValue();
	var area = _this.reTestWindow.area.getValue() * 1;
	if (!Ext.isEmpty(rGpd) && !Ext.isEmpty(rSalt) && !Ext.isEmpty(area)) {
		var b = 1.7 * (rGpd / area) * (1 / rSalt * 100 - 1);
		_this.reTestWindow.rFactorB.setValue(b);
		_this.judgeBatch();
		_this.judgeProd();
	}
}

// 获取量产质检标准
com.keensen.ump.qinsen.quality.trialMgr.prototype.loadBatchStd = function() {
	var _this = this;
	// 先清空
	_this.reTestWindow.batchGpdLowLimit.reset();
	_this.reTestWindow.batchGpdUpLimit.reset();
	_this.reTestWindow.batchSaltLowLimit.reset();
	_this.reTestWindow.batchFactorBUpLimit.reset();
	_this.reTestWindow.isBatchQualified.reset();
	var testSpecId = _this.reTestWindow.testSpecId.getValue();
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

						_this.reTestWindow.batchGpdLowLimit
								.setValue(ret[0].gpdLowLimit);
						_this.reTestWindow.batchGpdUpLimit
								.setValue(ret[0].gpdUpLimit);
						_this.reTestWindow.batchSaltLowLimit
								.setValue(ret[0].saltLowLimit);
						_this.reTestWindow.batchFactorBUpLimit
								.setValue(ret[0].factorBUpLimit);
						_this.reTestWindow.prodJudgeInfo.setValue('');
						_this.judgeBatch();// 尝试判定

					} else {
						_this.reTestWindow.batchJudgeInfo
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
com.keensen.ump.qinsen.quality.trialMgr.prototype.loadProdStd = function() {
	var _this = this;
	// 先清空
	_this.reTestWindow.prodGpdLowLimit.reset();
	_this.reTestWindow.prodGpdUpLimit.reset();
	_this.reTestWindow.prodSaltLowLimit.reset();
	_this.reTestWindow.prodFactorBUpLimit.reset();
	_this.reTestWindow.isProdQualified.reset();
	var ifProdSpecId = _this.reTestWindow.ifProdSpecId.getValue();
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
							_this.reTestWindow.prodGpdLowLimit
									.setValue(ret[0].bGpdLowLimit);
							_this.reTestWindow.prodSaltLowLimit
									.setValue(ret[0].bSaltLowLimit);
						} else {
							_this.reTestWindow.prodGpdLowLimit
									.setValue(ret[0].aGpdLowLimit);
							_this.reTestWindow.prodGpdUpLimit
									.setValue(ret[0].aGpdUpLimit);
							_this.reTestWindow.prodSaltLowLimit
									.setValue(ret[0].aSaltLowLimit);
							_this.reTestWindow.prodFactorBUpLimit
									.setValue(ret[0].aFactorBUpLimit);
						}
						_this.reTestWindow.prodJudgeInfo.setValue('');
						_this.judgeProd();// 尝试判定

					} else {
						_this.reTestWindow.prodJudgeInfo
								.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
					}
				}
			},
			callback : function() {

			}
		})

	}
}

// 量产判定
com.keensen.ump.qinsen.quality.trialMgr.prototype.judgeBatch = function() {
	var _this = this;
	var rGpd = _this.reTestWindow.rGpd.getValue();
	var rSalt = _this.reTestWindow.rSalt.getValue();
	var fFactorB = _this.reTestWindow.fFactorB.getValue();
	if (Ext.isEmpty(rGpd) || Ext.isEmpty(rSalt) || Ext.isEmpty(fFactorB)) {
		return;
	}

	// 标准
	var batchGpdLowLimit = _this.reTestWindow.batchGpdLowLimit.getValue() * 1;
	var batchGpdUpLimit = (Ext.isEmpty(_this.reTestWindow.batchGpdUpLimit
			.getValue())) ? '' : _this.reTestWindow.batchGpdUpLimit.getValue()
			* 1;
	var batchSaltLowLimit = _this.reTestWindow.batchSaltLowLimit.getValue() * 1;
	var batchFactorBUpLimit = (Ext
			.isEmpty(_this.reTestWindow.batchFactorBUpLimit.getValue()))
			? ''
			: _this.reTestWindow.batchFactorBUpLimit.getValue() * 1;

	// 标准的产水量下限、脱盐率是必须有的，其它的可能为空
	if (!Ext.isEmpty(batchGpdLowLimit) && !Ext.isEmpty(batchSaltLowLimit)) {
		_this.reTestWindow.isBatchQualified.setValue('Y');// 预设合格
		var judgeInfo = new Array();
		if (rGpd < batchGpdLowLimit) {
			_this.reTestWindow.isBatchQualified.setValue('N');
			judgeInfo.push('产水量超下限');
		}
		if (!Ext.isEmpty(batchGpdUpLimit) && rGpd > batchGpdUpLimit) {
			_this.reTestWindow.isBatchQualified.setValue('N');
			judgeInfo.push('产水量超上限');
		}
		if (rSalt < batchSaltLowLimit) {
			_this.reTestWindow.isBatchQualified.setValue('N');
			judgeInfo.push('脱盐率超下限');
		}
		if (!Ext.isEmpty(batchFactorBUpLimit) && fFactorB > batchFactorBUpLimit) {
			_this.reTestWindow.isBatchQualified.setValue('N');
			judgeInfo.push('系数B超上限');
		}
		if (_this.reTestWindow.isBatchQualified.getValue() == 'N') {
			_this.reTestWindow.batchJudgeInfo
					.setValue('<span style="color:red;">' + judgeInfo.join(',')
							+ '</span>');
		} else {
			_this.reTestWindow.batchJudgeInfo.setValue('');
		}
	} else {
		_this.reTestWindow.isBatchQualified.reset();
		_this.reTestWindow.batchJudgeInfo
				.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
	}
}

// 单品判定
com.keensen.ump.qinsen.quality.trialMgr.prototype.judgeProd = function() {
	var _this = this;
	var rGpd = _this.reTestWindow.rGpd.getValue();
	var rSalt = _this.reTestWindow.rSalt.getValue();
	var fFactorB = _this.reTestWindow.fFactorB.getValue();
	if (Ext.isEmpty(rGpd) || Ext.isEmpty(rSalt) || Ext.isEmpty(fFactorB)) {
		return;
	}

	// 标准
	var prodGpdLowLimit = _this.reTestWindow.prodGpdLowLimit.getValue() * 1;

	var prodGpdUpLimit = (Ext.isEmpty(_this.reTestWindow.prodGpdUpLimit
			.getValue())) ? '' : _this.reTestWindow.prodGpdUpLimit.getValue()
			* 1;

	var prodSaltLowLimit = _this.reTestWindow.prodSaltLowLimit.getValue() * 1;

	var prodFactorBUpLimit = (Ext.isEmpty(_this.reTestWindow.prodFactorBUpLimit
			.getValue())) ? '' : _this.reTestWindow.prodFactorBUpLimit
			.getValue()
			* 1;

	// 标准的产水量下限、脱盐率是必须有的，其它的可能为空
	if (!Ext.isEmpty(prodGpdLowLimit) && !Ext.isEmpty(prodSaltLowLimit)) {
		_this.reTestWindow.isProdQualified.setValue('Y');// 预设合格
		var judgeInfo = new Array();
		if (rGpd < prodGpdLowLimit) {
			_this.reTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('产水量超下限');
		}

		if (!Ext.isEmpty(prodGpdUpLimit) && (rGpd > prodGpdUpLimit)) {

			_this.reTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('产水量超上限');
		}

		if (rSalt < prodSaltLowLimit) {
			_this.reTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('脱盐率超下限');
		}

		if (!Ext.isEmpty(prodFactorBUpLimit) && (fFactorB > prodFactorBUpLimit)) {
			_this.reTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('系数B超上限');
		}
		if (_this.reTestWindow.isProdQualified.getValue() == 'N') {
			_this.reTestWindow.prodJudgeInfo
					.setValue('<span style="color:red;">' + judgeInfo.join(',')
							+ '</span>');
		} else {
			_this.reTestWindow.prodJudgeInfo.setValue('');
		}
	} else {
		_this.reTestWindow.isProdQualified.reset();
		_this.reTestWindow.prodJudgeInfo
				.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
	}
}

// 计算初检系数B
com.keensen.ump.qinsen.quality.trialMgr.prototype.calcFFactorB = function() {
	var _this = this;
	var fGpd = _this.modifyWindow.fGpd.getValue();
	var fSalt = _this.modifyWindow.fSalt.getValue();
	var area = _this.modifyWindow.area.getValue() * 1;
	if (!Ext.isEmpty(fGpd) && !Ext.isEmpty(fSalt) && !Ext.isEmpty(area)) {
		var b = 1.7 * (fGpd / area) * (1 / fSalt * 100 - 1);
		_this.modifyWindow.fFactorB.setValue(b);
	}
}

// 计算复检系数B
com.keensen.ump.qinsen.quality.trialMgr.prototype.calcRFactorB = function() {
	var _this = this;
	var rGpd = _this.modifyWindow.rGpd.getValue();
	var rSalt = _this.modifyWindow.rSalt.getValue();
	var area = _this.modifyWindow.area.getValue() * 1;
	if (!Ext.isEmpty(rGpd) && !Ext.isEmpty(rSalt) && !Ext.isEmpty(area)) {
		var b = 1.7 * (rGpd / area) * (1 / rSalt * 100 - 1);
		_this.modifyWindow.rFactorB.setValue(b);
	}
}