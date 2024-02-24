com.keensen.ump.qinsen.produce.juanmo.multiMgr.prototype.initEvent = function() {
	var _this = this;
	this.cdmInfo = '';

	this.mainPanel.lineId.store.on('load', function() {
				var cookieLineId = Ext.util.Cookies
						.get('juanMoInput.lineSel.defaultValue');
				if (cookieLineId && cookieLineId != 'null') {
					_this.mainPanel.lineId.setValue(cookieLineId);
				}
			})

	this.mainPanel.teamId.store.on('load', function() {
				if (teamId && teamId != 'null') {
					_this.mainPanel.teamId.setValue(teamId);
				}
			})

	this.cdmPanel.inQuantity.on("change", function(thisFiled, newValue,
					oldValue) {
				this.cdmPanel.outQuantity.setValue(newValue);
			});

	this.mainPanel.produceDt.mon(this.mainPanel.produceDt, "change", function(
					thisFiled, newValue, oldValue) {
				_this.dealCdmBatchNo();
			});

	this.mainPanel.lineId.mon(this.mainPanel.lineId, "change", function(
					thisFiled, newValue, oldValue) {
				var now = new Date();
				var expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);// 保存一年
				Ext.util.Cookies.set('juanMoInput.lineSel.defaultValue',
						newValue, expiry);// 写入cookie
				_this.dealCdmBatchNo();
			});

	this.mainPanel.prodSpecId.mon(this.mainPanel.prodSpecId, 'select',
			function(fcombo, record, eOpts) {
				this.mainPanel.pageCnt.setValue(record.data.numPerWad);
				this.mainPanel.blankingSize.setValue(record.data.blankingSize);
				this.mainPanel.denseNet.setValue(record.data.denseNet);
				this.mainPanel.pageWidth.setValue(record.data.pageWidth);
			}, this);

	this.mainPanel.prodSpecId.mon(this.mainPanel.prodSpecId, 'change',
			function(combo, newValue, oldValue, eOpts) {

				if (!Ext.isEmpty(newValue)) {
					var idx = _this.mainPanel.prodSpecId.store.find('id',
							newValue);
					var record = _this.mainPanel.prodSpecId.store.getAt(idx);
					_this.mainPanel.pageCnt.setValue(record.data.numPerWad);
					_this.mainPanel.blankingSize
							.setValue(record.data.blankingSize);
					_this.mainPanel.denseNet.setValue(record.data.denseNet);
					_this.mainPanel.pageWidth.setValue(record.data.pageWidth);
				} else {
					_this.mainPanel.pageCnt.setValue('');
					_this.mainPanel.blankingSize.setValue('');
					_this.mainPanel.denseNet.setValue('');
					_this.mainPanel.pageWidth.setValue('');
				}
			}, this);
}

com.keensen.ump.qinsen.produce.juanmo.multiMgr.prototype.dealCdmBatchNo = function() {
	var _this = this;
	var cdmBatchNo = _this.cdmPanel.cdmBatchNo.getValue();
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
								_this.cdmInfo = dd;
								_this.cdmPanel.orderNo.setValue(dd.orderNo);
								_this.cdmPanel.prodSpecId
										.setValue(dd.prodSpecId);
								_this.cdmPanel.inQuantity
										.setValue(dd.numPerWad);
								_this.cdmPanel.outQuantity
										.setValue(dd.numPerWad);
								_this.cdmPanel.blankingSize
										.setValue(dd.blankingSize);
								_this.cdmPanel.denseNet.setValue(dd.denseNet);
								_this.cdmPanel.pageWidth.setValue(dd.pageWidth);
								_this.cdmPanel.cdmBatchId.setValue(dd.recordId);// 裁叠膜批号ID
								_this.genBatchNo();
							} else {
								_this.cdmInfo = '';
								Ext.Msg.alert("系统提示", "该栈板号不存在，请检查！",
										function() {
											_this.cdmPanel.cdmBatchNo
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
}

com.keensen.ump.qinsen.produce.juanmo.multiMgr.prototype.genBatchNo = function() {
	var _this = this;
	var lineId = _this.mainPanel.lineId.getValue();
	if (Ext.isEmpty(lineId)) {
		return false;
	}
	var lineCode = _this.mainPanel.lineId.getRawValue();
	if (Ext.isEmpty(lineId))
		var produceDay = _this.mainPanel.produceDt.getValue();
	var produceDate = _this.mainPanel.produceDt.getRawValue();
	if (Ext.isEmpty(produceDate)) {
		return false;
	}
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
							_this.mainPanel.juanMoBatchNo.setValue(batchNo);
						} else {
							Ext.Msg.alert("系统提示", "查询卷膜编号失败，请检查！", function() {
										_this.mainPanel.cdmBatchNo.setValue('');
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

com.keensen.ump.qinsen.produce.juanmo.multiMgr.prototype.addDetail = function() {
	var _this = this;
	if (!this.cdmPanel.form.isValid()) {
		Ext.Msg.alert("系统提示", "请填写完整叠膜信息");
		return;
	}
	var inQuantity = this.cdmPanel.inQuantity.getValue();
	var outQuantity = this.cdmPanel.outQuantity.getValue();
	if (outQuantity > inQuantity) {
		Ext.Msg.alert("系统提示", "使用页数不能大于投入页数");
		return;
	}
	if (!Ext.isEmpty(_this.cdmInfo)) {
		var cdm = _this.cdmInfo;
		if (outQuantity > cdm.numPerWad) {
			Ext.Msg.alert("系统提示", '使用页数不能大于该元件型号所需要的页数(' + cdm.numPerWad + ')');
			return;
		}
		// 如果是第1个，就填写主信息，否则检查是否与当前主信息一致
		var cnt = _this.detailGrid.getStore().getCount();
		if (cnt == 0) {
			_this.mainPanel.orderNo.setValue(cdm.orderNo);
			_this.mainPanel.prodSpecId.setValue(cdm.prodSpecId);
			_this.mainPanel.prodSpecId.fireEvent("change",
					_this.mainPanel.prodSpecId, cdm.prodSpecId);
		} else {
			// 计算膜页数量不得超过
			var limit = _this.mainPanel.pageCnt.getValue() * 1;
			var addedCnt = 0;
			var arrStore = _this.detailGrid.store;
			var records = arrStore.getRange();
			Ext.each(records, function(r) {
						addedCnt += r.data.outQuantity;
					})

			if (_this.cdmPanel.outQuantity.getValue() + addedCnt > limit) {
				Ext.Msg.alert('请注意', '合计使用膜页数量将大于该元件型号需要的膜页数');
				return;
			}
			// 核对元件型号
			var nowProdSpecId = _this.mainPanel.prodSpecId.getValue();
			if (cdm.prodSpecId != nowProdSpecId) {
				Ext.Msg.alert('请注意', '要添加的膜页，其元件型号与当前元件型号不一致，请注意核实');
			}
			// 检查是否重复添加
			var list = _this.detailGrid.getStore().getRange();
			for (var i = 0; i < list.length; i++) {
				if (list[i].data.cdmBatchNo == cdm.batchNo) {
					Ext.Msg.alert('请注意', '该栈板号已添加，不可重复');
					return;
				}
			}

		}
		// 插入组成
		var detail = new Ext.data.Record({
					cdmBatchId : cdm.recordId,
					cdmBatchNo : cdm.batchNo,
					orderNo : cdm.orderNo,
					inQuantity : inQuantity,
					outQuantity : outQuantity,
					remark : cdm.remark,
					cdmSpecCode : cdm.cdmSpecCode,
					cdmSpecName : cdm.cdmSpecName,
					blankingSize : cdm.blankingSize,
					denseNet : cdm.denseNet,
					pageWidth : cdm.pageWidth,
					produceDate : cdm.produceDate
				});
		_this.detailGrid.store.insert(cnt, [detail]);
		_this.cdmPanel.form.reset();
	}
}

// 清空已有信息
com.keensen.ump.qinsen.produce.juanmo.multiMgr.prototype.clearInfo = function() {
	var _this = this;
	var teamId = _this.mainPanel.teamId.getValue();
	_this.cdmInfo = '';
	_this.cdmPanel.form.reset();
	_this.mainPanel.form.reset();
	_this.detailGrid.getStore().loadData('');
	_this.cdmPanel.cdmBatchNo.focus();
	_this.mainPanel.teamId.setValue(teamId);// 班组维持不变
	_this.mainPanel.produceDt.setValue(new Date());
}

// 获取新数据
com.keensen.ump.qinsen.produce.juanmo.multiMgr.prototype.getNewInfo = function() {
	var _this = this;
	var newRec = new Object();
	newRec.operatorId = nowStaffId;
	newRec.produceDate = _this.mainPanel.produceDt.getRawValue();
	newRec.lineId = _this.mainPanel.lineId.getValue();
	newRec.isTrial = _this.mainPanel.isTrial.getValue();
	newRec.cnt = _this.mainPanel.cnt.getValue();
	newRec.batchNoStart = _this.mainPanel.juanMoBatchNo.getValue();
	newRec.orderNo = _this.mainPanel.orderNo.getValue();
	newRec.prodSpecId = _this.mainPanel.prodSpecId.getValue();
	newRec.pageCnt = _this.mainPanel.pageCnt.getValue();
	newRec.blankingSize = _this.mainPanel.blankingSize.getValue();
	newRec.denseNet = _this.mainPanel.denseNet.getValue();
	newRec.pageWidth = _this.mainPanel.pageWidth.getValue();
	newRec.teamId = _this.mainPanel.teamId.getValue();
	newRec.workerId = nowStaffId;
	newRec.remark = _this.mainPanel.remark.getValue();

	newRec.startSeq = _this.mainPanel.startSeq.getValue();
	newRec.prefix = _this.mainPanel.prefix.getValue();

	return newRec;
}

// 校验数据
com.keensen.ump.qinsen.produce.juanmo.multiMgr.prototype.validRecInfo = function() {
	var _this = this;
	if (!_this.mainPanel.form.isValid()) {
		Ext.Msg.alert("系统提示", '请按要求完整填写数据！');
		return false;
	}

	var produceDate = this.mainPanel.produceDt.getRawValue();
	var date = new Date(produceDate);
	produceDate = date.format('Ymd');
	produceDate = produceDate.substr(2, 6);
	var lineCode = this.mainPanel.lineId.getRawValue();
	var arr = lineCode.split('(');
	lineCode = arr[1].replace(')', '');
	var prefix = lineCode + produceDate;
	var juanMoBatchNo = this.mainPanel.juanMoBatchNo.getValue();

	if (juanMoBatchNo.indexOf(prefix) != 0) {
		Ext.Msg.alert("系统提示", '卷膜序号与选择的信息不符，应以生产线编号 + YYMMDD开头', function() {
					return false;
				})
	}
	if (juanMoBatchNo.length != prefix.length + 3) {
		Ext.Msg.alert("系统提示", '卷膜序号长度不符，应为生产线编号 + YYMMDD + 3位数字', function() {
					return false;
				})
	}

	var cnt = _this.detailGrid.getStore().getCount();
	if (cnt == 0) {
		Ext.Msg.alert("系统提示", '请添加混卷组成');
		return false;
	}

	var addedCnt = 0;
	var arrStore = _this.detailGrid.store;
	var records = arrStore.getRange();
	Ext.each(records, function(r) {
				addedCnt += r.data.outQuantity;
			})

	if (addedCnt != _this.mainPanel.pageCnt.getValue() * 1) {
		Ext.Msg.alert("系统提示", '合计使用膜页数不等于该元件型号所需要的膜页数，请检查');
		return false;
	}
	var startSeq = juanMoBatchNo.substr(-3);
	_this.mainPanel.startSeq.setValue(Number(startSeq));
	_this.mainPanel.prefix.setValue(prefix);
	return true;
}

// 保存数据
com.keensen.ump.qinsen.produce.juanmo.multiMgr.prototype.onSave = function() {
	var _this = this;
	if (_this.validRecInfo()) {
		var detail = new Array();
		var list = _this.detailGrid.getStore().getRange();
		for (var i = 0; i < list.length; i++) {
			detail.push({
						cdmBatchId : list[i].data.cdmBatchId,
						inQuantity : list[i].data.inQuantity,
						outQuantity : list[i].data.outQuantity,
						operatorId : nowStaffId
					});
		}

		var newRec = _this.getNewInfo();
		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.qinsen.juanmo.quickCreateMixRecords.biz.ext",
			method : "post",
			jsonData : {
				info : newRec,
				detailList : detail
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.err == '0') {
						var recordIdStr = ret.recordIdStr;
						_this.mainPanel.produceDt.setValue(new Date());
						Ext.Msg.alert("系统提示", '操作成功！', function() {
							_this.clearInfo();
							Ext.Msg.confirm('提示', '是否立即打印产品标签？', function(btn) {
								_this.genBatchNo();
								if (btn === 'yes') {
									var f = document
											.getElementById('printForm');
									f.batchIdStr.value = recordIdStr;
									var actionUrl = 'com.keensen.ump.qinsen.printJuanmoTags.flow?token='
											+ Date.now();
									f.action = actionUrl;
									f.submit();
								}
							});

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
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}