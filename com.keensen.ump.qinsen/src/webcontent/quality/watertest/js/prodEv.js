com.keensen.ump.qinsen.quality.prodMgr.prototype.initEvent = function() {
	var _this = this;
	this.reTestWindow.rCheckerId.store.on('load', function(o) {
				if (o.find('staffId', nowStaffId) > -1) {
					_this.reTestWindow.rCheckerId.setValue(nowStaffId);
				}
			})

	this.reTestWindow.activeItem.mon(this.reTestWindow.activeItem, 'afterload',
			function(win, data) {
				_this.loadStd();
			}, this);
			
	this.modifyWindow.activeItem.mon(this.modifyWindow.activeItem, 'afterload',
			function(win, data) {
							
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

// 获取质检标准
com.keensen.ump.qinsen.quality.prodMgr.prototype.loadStd = function() {
	var _this = this;
	// 先清空
	_this.reTestWindow.aGpdLowLimit.reset();
	_this.reTestWindow.aGpdUpLimit.reset();
	_this.reTestWindow.aSaltLowLimit.reset();
	_this.reTestWindow.aFactorBUpLimit.reset();
	_this.reTestWindow.bGpdLowLimit.reset();
	_this.reTestWindow.bSaltLowLimit.reset();
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
						_this.reTestWindow.aGpdLowLimit
								.setValue(ret[0].aGpdLowLimit);
						_this.reTestWindow.aGpdUpLimit
								.setValue(ret[0].aGpdUpLimit);
						_this.reTestWindow.aSaltLowLimit
								.setValue(ret[0].aSaltLowLimit);
						_this.reTestWindow.aFactorBUpLimit
								.setValue(ret[0].aFactorBUpLimit);
						_this.reTestWindow.bGpdLowLimit
								.setValue(ret[0].bGpdLowLimit);
						_this.reTestWindow.bSaltLowLimit
								.setValue(ret[0].bSaltLowLimit);

						_this.reTestWindow.judgeInfo.setValue('');
						_this.judge();// 尝试判定

					} else {
						_this.reTestWindow.judgeInfo
								.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
					}
				}
			},
			callback : function() {

			}
		})

	}
}

com.keensen.ump.qinsen.quality.prodMgr.prototype.calcFactorB = function() {
	var _this = this;
	if(Ext.isEmpty(_this.reTestWindow.area.getValue())){
		return false;
	}
	var rGpd = _this.reTestWindow.rGpd.getValue();
	var rSalt = _this.reTestWindow.rSalt.getValue();
	var area = _this.reTestWindow.area.getValue() * 1;
	if (!Ext.isEmpty(rGpd) && !Ext.isEmpty(rSalt) && !Ext.isEmpty(area)) {
		var b = 1.7 * (rGpd / area) * (1 / rSalt * 100 - 1);
		_this.reTestWindow.rFactorB.setValue(b);
		_this.judge();
	}
}

// 判定结果
com.keensen.ump.qinsen.quality.prodMgr.prototype.judge = function() {
	var _this = this;
	var rGpd = _this.reTestWindow.rGpd.getValue();
	var rSalt = _this.reTestWindow.rSalt.getValue();
	var rFactorB = _this.reTestWindow.rFactorB.getValue();
	if (Ext.isEmpty(rGpd) || Ext.isEmpty(rSalt) || Ext.isEmpty(rFactorB)) {
		return;
	}
	// 标准1
	var aGpdLowLimit = _this.reTestWindow.aGpdLowLimit.getValue() * 1;
	var aGpdUpLimit = _this.reTestWindow.aGpdUpLimit.getValue() * 1;
	var aSaltLowLimit = _this.reTestWindow.aSaltLowLimit.getValue() * 1;
	var aFactorBUpLimit = _this.reTestWindow.aFactorBUpLimit.getValue() * 1;
	// 标准2
	var bGpdLowLimit = _this.reTestWindow.bGpdLowLimit.getValue() * 1;
	var bSaltLowLimit = _this.reTestWindow.bSaltLowLimit.getValue() * 1;

	// 优先标准2
	var prodGpdLowLimit, prodGpdUpLimit, prodSaltLowLimit, prodFactorBUpLimit;
	if (!Ext.isEmpty(bGpdLowLimit) && bGpdLowLimit !=0) {
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
		_this.reTestWindow.isProdQualified.setValue('Y');// 预设合格
		var judgeInfo = new Array();
		if (rGpd < prodGpdLowLimit) {
			_this.reTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('产水量超下限');
		}
		if (!Ext.isEmpty(prodGpdUpLimit) && rGpd > prodGpdUpLimit) {
			_this.reTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('产水量超上限');
		}
		if (rSalt < prodSaltLowLimit) {
			_this.reTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('脱盐率超下限');
		}
		/*if (!Ext.isEmpty(prodFactorBUpLimit) && rFactorB > prodFactorBUpLimit) {
			_this.reTestWindow.isProdQualified.setValue('N');
			judgeInfo.push('系数B超上限');
		}*/
		if (_this.reTestWindow.isProdQualified.getValue() == 'N') {
			_this.reTestWindow.judgeInfo
					.setValue('<span style="color:red;">' + judgeInfo.join(',')
							+ '</span>');
		} else {
			_this.reTestWindow.judgeInfo.setValue('');
		}
	} else {
		_this.reTestWindow.isProdQualified.reset();
		_this.reTestWindow.judgeInfo
				.setValue('<span style="color:red;">缺少标准，请联系质管补录标准</span>');
	}
}

// 计算初检系数B
com.keensen.ump.qinsen.quality.prodMgr.prototype.calcFFactorB = function() {
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
com.keensen.ump.qinsen.quality.prodMgr.prototype.calcRFactorB = function() {
	var _this = this;
	var rGpd = _this.modifyWindow.rGpd.getValue();
	var rSalt = _this.modifyWindow.rSalt.getValue();
	var area = _this.modifyWindow.area.getValue() * 1;
	if (!Ext.isEmpty(rGpd) && !Ext.isEmpty(rSalt) && !Ext.isEmpty(area)) {
		var b = 1.7 * (rGpd / area) * (1 / rSalt * 100 - 1);
		_this.modifyWindow.rFactorB.setValue(b);
	}
}