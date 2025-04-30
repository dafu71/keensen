com.keensen.ump.qinsen.quality.tumocheckinputMgr.prototype.initEvent = function() {

	var _this = this;

	this.stdGrid.store.on('load', function(o) {
				var records = o.getRange();
				if (null == records || records.length == 0) {
					Ext.Msg.alert("系统提示", "缺少该型号对应的质检标准，请人工判定！")
					_this.masterPanel.judgeInfo
							.setValue('<span style="color:red;">型号无对应标准，请人工判定</span>');
				} else {
					_this.masterPanel.judgeInfo.setValue('');
					_this.judgeLevel()
				}

			})

	this.masterPanel.checkerId.store.on('load', function(o) {
				if (o.find('staffId', nowStaffId) > -1) {
					_this.masterPanel.checkerId.setValue(nowStaffId);
				}
			})

	this.recGrid.store.on('load', function(o) {
		var records = o.getRange();
		if (null == records || records.length == 0) {
			_this.recGrid.isQualifiedTxt.setValue('');
			_this.recGrid.perfFlagTxt.setValue('');
		} else {
			var r = records[0];
			var isBatchQualified = r.data.isBatchQualified;
			var isBatchQualifiedName = r.data.isBatchQualifiedName;
			var batchPerfFlagName = r.data.batchPerfFlagName;
			if (!!isBatchQualified) {
				if (isBatchQualified == 'N') {
					_this.recGrid.isQualifiedTxt
							.setValue('<span style="color:red;">'
									+ isBatchQualifiedName + '</span>');
				} else {
					_this.recGrid.isQualifiedTxt.setValue(isBatchQualifiedName);
				}
			} else {
				_this.recGrid.isQualifiedTxt.setValue('未判');
			}
			_this.recGrid.perfFlagTxt.setValue(batchPerfFlagName);
		}

	})

	this.masterPanel.gfd1.on("change", function(thisFiled, newValue, oldValue) {
				_this.calcGfdAvg();
			});
	this.masterPanel.gfd2.on("change", function(thisFiled, newValue, oldValue) {
				_this.calcGfdAvg();
			});
	this.masterPanel.gfd3.on("change", function(thisFiled, newValue, oldValue) {
				_this.calcGfdAvg();
			});
	this.masterPanel.conductivityIn.on("change", function(thisFiled, newValue,
					oldValue) {
				_this.calcSaltRejection();
			});
	this.masterPanel.cdtOut1.on("change", function(thisFiled, newValue,
					oldValue) {
				_this.calcSaltRejection();
			});
	this.masterPanel.cdtOut2.on("change", function(thisFiled, newValue,
					oldValue) {
				_this.calcSaltRejection();
			});
	this.masterPanel.cdtOut3.on("change", function(thisFiled, newValue,
					oldValue) {
				_this.calcSaltRejection();
			});

}

// 解析扫码信息
com.keensen.ump.qinsen.quality.tumocheckinputMgr.prototype.dealCodeInfo = function() {
	var info = this.masterPanel.checkCodeInfo.getValue();
	if (!Ext.isEmpty(info)) {
		var arr = info.split('|');
		this.masterPanel.checkNo.setValue(arr[0]);
		this.masterPanel.batchNo.setValue(arr[1]);
		this.masterPanel.positionLength.setValue(arr[2]);
		this.masterPanel.batchNo.fireEvent('change');
	}
}

// 批次变化 加载批次信息，加载检测标准，然后尝试判定
com.keensen.ump.qinsen.quality.tumocheckinputMgr.prototype.batchNoChange = function() {
	var _this = this;
	var batchNo = this.masterPanel.batchNo.getValue()
	if (batchNo.length != 12) {
		return;
	}
	// 刷新时间
	this.masterPanel.checkTm.setValue(new Date());
	_this.requestMask = _this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.qinsen.tumocheck.queryTumo.biz.ext",
				method : "post",
				jsonData : {
					'condition/batchNo' : batchNo
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						if (!Ext.isEmpty(ret.data)) {
							var tm = ret.data[0];
							var specName = tm.specName;
							var specId = tm.specId;
							var batchId = tm.recordId;
							_this.masterPanel.specName.setValue(specName);
							_this.masterPanel.batchId.setValue(batchId);
							_this.stdGrid.store.load({
										params : {
											'condition/specId' : specId
										}
									});
							// 获取已检信息
							_this.loadBatchCheckRecords();

						} else {
							Ext.Msg.alert("系统提示", "批次不存在，请检查！", function() {
										_this.masterPanel.specName.setValue('');
										_this.masterPanel.batchId.setValue('');
										_this.masterPanel.batchNo.setValue('');
										_this.stdGrid.store.removeAll();
										_this.recGrid.store.removeAll();
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

// 判定等级
com.keensen.ump.qinsen.quality.tumocheckinputMgr.prototype.judgeLevel = function() {
	var gfd = this.masterPanel.gfdAvg.getValue();
	var sr = this.masterPanel.saltRejection.getValue();
	var stdCnt = this.stdGrid.getStore().getCount();

	if (stdCnt > 0 && gfd && sr) {
		// 标准按优先级排序，逐条判断，匹配即完成，未匹配判不合格
		var gl, gu, sl, su, judged;
		var stdList = this.stdGrid.getStore().getRange();
		for (var i = 0; i < stdList.length; i++) {
			var std = stdList[i].data;
			// 已经符合高级标准的，不再判断是否符合下级标准
			if (!gl) {
				gl = compareStd(std.gfdLowSymbol, std.gfdLowLimit, gfd);// 是否符合gfd下限
			}
			if (!gu) {
				gu = compareStd(std.gfdUpSymbol, std.gfdUpLimit, gfd);;// 是否符合gfd上限
			}
			if (!sl) {
				sl = compareStd(std.saltLowSymbol, std.saltLowLimit, sr);;// 是否符合salt下限
			}
			if (!su) {
				su = compareStd(std.saltUpSymbol, std.saltUpLimit, sr);;// 是否符合salt上限
			}
			if (gl && gu && sl && su) {
				this.masterPanel.perfFlagId.setValue(std.levelId);
				judged = true;
				this.masterPanel.judgeInfo.setValue('');
				break;
				return;
			}
		}
		if (!judged) {
			//this.masterPanel.perfFlagId.setValue('');
			//300032
			this.masterPanel.perfFlagId.setValue('300032');
			this.masterPanel.judgeInfo
					.setValue('<span style="color:red;">数据未匹配到任何标准，自动匹配C等品</span>');
			//this.masterPanel.judgeInfo
			//		.setValue('<span style="color:red;">数据未匹配到任何标准，请人工判定</span>');
		}
	}
}

// 计算膜通量，取平均数
com.keensen.ump.qinsen.quality.tumocheckinputMgr.prototype.calcGfdAvg = function() {
	var a = this.masterPanel.gfd1.getValue();
	var b = this.masterPanel.gfd2.getValue();
	var c = this.masterPanel.gfd3.getValue();
	if (a && b && c) {
		var avg = (a + b + c) / 3;
		this.masterPanel.gfdAvg.setValue(avg.toFixed(1));
		this.judgeLevel();
	}
}

// 计算脱盐率
// 1 - 产水电导平均数/进水电导
com.keensen.ump.qinsen.quality.tumocheckinputMgr.prototype.calcSaltRejection = function() {
	var a = this.masterPanel.cdtOut1.getValue();
	var b = this.masterPanel.cdtOut2.getValue();
	var c = this.masterPanel.cdtOut3.getValue();
	var d = this.masterPanel.conductivityIn.getValue();
	if (a && b && c && d) {
		var avg = (a + b + c) * 100 / 3;
		var ret = 100 - avg / d;
		this.masterPanel.saltRejection.setValue(ret.toFixed(2));
		this.judgeLevel();
	}
}

// 比较标准，判断是否合格
function compareStd(symbol, std, value) {
	// 没有边界符时，判合格
	if (!symbol) {
		return true;
	}
	// 没有标准，判合格
	if (Ext.isEmpty(std)) {
		return true;
	}
	var expression = value + symbol + std;
	return eval(expression);
}

com.keensen.ump.qinsen.quality.tumocheckinputMgr.prototype.loadBatchCheckRecords = function() {
	var batchId = this.masterPanel.batchId.getValue();
	if (!Ext.isEmpty(batchId)) {
		this.recGrid.store.load({
					params : {
						'condition/batchId' : batchId
					}
				});
	}
}

com.keensen.ump.qinsen.quality.tumocheckinputMgr.prototype.refreshPage = function() {
	this.masterPanel.form.reset();
	this.masterPanel.checkTm.setValue(new Date());
	this.stdGrid.store.removeAll();
	this.recGrid.store.removeAll();
	this.recGrid.isQualifiedTxt.setValue('');
	this.recGrid.perfFlagTxt.setValue('');
	this.masterPanel.checkCodeInfo.focus();
	if (this.masterPanel.checkerId.store.find('staffId', nowStaffId) > -1) {
		this.masterPanel.checkerId.setValue(nowStaffId);
	}
}

com.keensen.ump.qinsen.quality.tumocheckinputMgr.prototype.onSave = function() {
	var _this = this;
	if (this.masterPanel.form.isValid()) {
		var url = this.masterPanel.saveUrl;
		var gfdStr = this.masterPanel.gfd1.getValue() + ','
				+ this.masterPanel.gfd2.getValue() + ','
				+ this.masterPanel.gfd3.getValue();
		var conductivityStr = this.masterPanel.cdtOut1.getValue() + ','
				+ this.masterPanel.cdtOut2.getValue() + ','
				+ this.masterPanel.cdtOut3.getValue();
		this.masterPanel.gfdStr.setValue(gfdStr);
		this.masterPanel.conductivityStr.setValue(conductivityStr);
		this.masterPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "保存数据中...",
					success : function(form, action) {
						var result = action.result;
						if (result.success) {
							Ext.Msg.alert("操作提示", "保存成功", function() {
										_this.refreshPage();
									}, this);
						}
					},
					failure : function(form, action) {
						Ext.MessageBox.show({
									title : '操作提示',
									buttons : Ext.MessageBox.OK,
									msg : "保存失败，请联系系统管理员",
									icon : Ext.MessageBox.ERROR
								});
					}
				});
	}
}