com.keensen.ump.qinsen.produce.juanmo.quickMgr.prototype.initEvent = function() {
	var _this = this;

	this.inputPanel.lineId.store.on('load', function() {
				var cookieLineId = Ext.util.Cookies
						.get('juanMoInput.lineSel.defaultValue');
				if (cookieLineId && cookieLineId != 'null') {
					_this.inputPanel.lineId.setValue(cookieLineId);
				}
			})

	this.inputPanel.teamId.store.on('load', function() {
				if (teamId && teamId != 'null') {
					_this.inputPanel.teamId.setValue(teamId);
				}
			})

	this.inputPanel.produceDt.mon(this.inputPanel.produceDt, "change",
			function(thisFiled, newValue, oldValue) {
				_this.dealCdmBatchNo();
			});


	this.inputPanel.lineId.mon(this.inputPanel.lineId, "change", function(
					thisFiled, newValue, oldValue) {
				var now = new Date();
				var expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);// 保存一年
				Ext.util.Cookies.set('juanMoInput.lineSel.defaultValue',
						newValue, expiry);// 写入cookie
				_this.dealCdmBatchNo();
			});

	this.inputPanel.prodSpecId.mon(this.inputPanel.prodSpecId, 'select',
			function(fcombo, record, eOpts) {
				this.inputPanel.inQuantity.setValue(record.data.numPerWad);
				this.inputPanel.outQuantity.setValue(record.data.numPerWad);
				this.inputPanel.blankingSize.setValue(record.data.blankingSize);
				this.inputPanel.denseNet.setValue(record.data.denseNet);
				this.inputPanel.pageWidth.setValue(record.data.pageWidth);
			}, this);
}

// 校验叠膜栈板号，加载相关信息
com.keensen.ump.qinsen.produce.juanmo.quickMgr.prototype.dealCdmBatchNo = function() {
	var _this = this;
	var cdmBatchNo = _this.inputPanel.cdmBatchNo.getValue();
	if (cdmBatchNo) {
		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.qinsen.cdm.queryRecords.biz.ext",
			method : "post",
			jsonData : {
				'condition/batchNo' : cdmBatchNo
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var dd = ret.data[0];
						_this.inputPanel.orderNo.setValue(dd.orderNo);
						_this.inputPanel.prodSpecId.setValue(dd.prodSpecId);
						_this.inputPanel.inQuantity.setValue(dd.numPerWad);
						_this.inputPanel.outQuantity.setValue(dd.numPerWad);
						_this.inputPanel.blankingSize.setValue(dd.blankingSize);
						_this.inputPanel.denseNet.setValue(dd.denseNet);
						_this.inputPanel.pageWidth.setValue(dd.pageWidth);
						_this.inputPanel.cdmBatchId.setValue(dd.recordId);// 裁叠膜批号ID
						_this.genBatchNo();
					} else {
						Ext.Msg.alert("系统提示", "该栈板号不存在，请检查！", function() {
									_this.inputPanel.cdmBatchNo.setValue('');
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

// 根据日期生成卷膜编号
com.keensen.ump.qinsen.produce.juanmo.quickMgr.prototype.genBatchNo = function() {
	var _this = this;
	var lineId = _this.inputPanel.lineId.getValue();
	var lineCode = _this.inputPanel.lineId.getRawValue();
	var produceDay = _this.inputPanel.produceDt.getValue();
	var produceDate = _this.inputPanel.produceDt.getRawValue();
	var date = new Date(produceDate);
	produceDate = date.format('Ymd');
	produceDate = produceDate.substr(2, 6);
	var arr = lineCode.split('(');
	lineCode = arr[1].replace(')', '');
	var prefix = lineCode + produceDate;
	Ext.Ajax.request({
				url : "com.keensen.ump.qinsen.juanmo.getBatchSeq.biz.ext",
				method : "post",
				jsonData : {
					'prefix' : prefix
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						if (!Ext.isEmpty(ret.nextSeq)) {
							var nextSeq = ret.nextSeq;
							if (nextSeq) {
								nextSeq = (nextSeq + '').padStart(3, '0');
							} else {
								nextSeq = '001';
							}
							// 卷膜序号规则：生产线编号 + YYMMDD + 3位流水号
							var batchNo = lineCode + produceDate + nextSeq;
							_this.inputPanel.juanMoBatchNo.setValue(batchNo);
						} else {
							Ext.Msg.alert("系统提示", "查询卷膜编号失败，请检查！", function() {
										_this.inputPanel.cdmBatchNo
												.setValue('');
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

com.keensen.ump.qinsen.produce.juanmo.quickMgr.prototype.onSave = function() {
	var _this = this;
	if (this.inputPanel.form.isValid()) {
		var produceDate = this.inputPanel.produceDt.getRawValue();
		var date = new Date(produceDate);
		produceDate = date.format('Ymd');
		produceDate = produceDate.substr(2, 6);
		var lineCode = this.inputPanel.lineId.getRawValue();
		var arr = lineCode.split('(');
		lineCode = arr[1].replace(')', '');
		var prefix = lineCode + produceDate;
		var juanMoBatchNo = this.inputPanel.juanMoBatchNo.getValue();

		if (juanMoBatchNo.indexOf(prefix) != 0) {
			Ext.Msg.alert("系统提示", '卷膜序号与选择的信息不符，应以生产线编号 + YYMMDD开头',
					function() {
						return false;
					})
		}
		if (juanMoBatchNo.length != prefix.length + 3) {
			Ext.Msg.alert("系统提示", '卷膜序号长度不符，应为生产线编号 + YYMMDD + 3位数字',
					function() {
						return false;
					})
		}

		var startSeq = juanMoBatchNo.substr(-3);
		_this.inputPanel.startSeq.setValue(Number(startSeq));
		_this.inputPanel.prefix.setValue(prefix);
		// 校验叠膜栈板号
		var cdmBatchNo = _this.inputPanel.cdmBatchNo.getValue();

		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.qinsen.cdm.queryRecords.biz.ext",
			method : "post",
			jsonData : {
				'condition/batchNo' : cdmBatchNo
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var dd = ret.data[0];
						_this.inputPanel.cdmBatchId.setValue(dd.recordId);// 裁叠膜批号ID
						var unUsedQuantity = Number(dd.unusedQuantity);
						var inQuantity = _this.inputPanel.inQuantity.getValue();
						inQuantity = Number(inQuantity);
						var cnt = _this.inputPanel.cnt.getValue();
						cnt = Number(cnt);
						if (inQuantity * cnt > unUsedQuantity) {
							Ext.Msg.alert("系统提示", "操作失败，叠膜栈板号" + cdmBatchNo
											+ "本次合计投入页数(" + inQuantity * cnt
											+ ")超出其剩余页数(" + unUsedQuantity
											+ ")，请检查", function() {
										return false;
									})
						} else {
							Ext.Ajax.request({
								url : "com.keensen.ump.qinsen.juanmo.quickCreateRecords.biz.ext",
								method : "post",
								jsonData : _this.inputPanel.form.getValues(),
								success : function(resp) {
									var ret = Ext.decode(resp.responseText);
									if (ret.success) {
										if (ret.err == '0') {
											var recordIdStr = ret.recordIdStr;
											_this.inputPanel.produceDt
													.setValue(new Date());

											Ext.Msg.confirm('提示',
													'是否立即打印产品标签？',
													function(btn) {
														_this.genBatchNo();
														if (btn === 'yes') {
															var f = document
																	.getElementById('printForm');
															f.batchIdStr.value = recordIdStr;
															var actionUrl = 'com.keensen.ump.qinsen.printJuanmoTags.flow?token='
																	+ Date
																			.now();
															f.action = actionUrl;
															f.submit();
														}
													});
										} else {
											Ext.Msg.show({
														width : 400,
														title : "操作提示",
														msg : ret.msg,
														icon : Ext.Msg.WARNING,
														buttons : Ext.Msg.OK,
														fn : function() {

														}
													})
										}
									}
								}
							})
						}
					} else {
						Ext.Msg.alert("系统提示", "该栈板号不存在，请检查！", function() {
									_this.inputPanel.cdmBatchNo.setValue('');
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