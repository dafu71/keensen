com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.initEvent = function() {

	var _this = this;

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
		var _this = this;
		var A = this.listPanel;
	(function() {
			var records = A.getSelectionModel().getSelections();

			var totalQuantity = 0;
			var totalUnusedQuantity = 0;
			var totalCdmLength = 0;
			for (var i = 0; i < records.length; i++) {
				var quantity = records[i].data.quantity;
				var unusedQuantity = records[i].data.unusedQuantity;
				var outLength = records[i].data.outLength;
				totalQuantity += quantity;
				totalUnusedQuantity += unusedQuantity;
				totalCdmLength += outLength;
			}
			Ext.getCmp('totalCdmLengthTxt2').setValue('选中长度合计(m):'
					+ totalCdmLength);
			Ext.getCmp('totalQuantityTxt2').setValue('选中页数合计:' + totalQuantity);
			Ext.getCmp('totalUnusedQuantityTxt2').setValue('选中未卷页数合计:'
					+ totalUnusedQuantity);

		}).defer(100);
	}, this);

	this.listPanel.selModel.on('rowdeselect', function(o, i, r) {
		var _this = this;
		var A = this.listPanel;
	(function() {
			var records = A.getSelectionModel().getSelections();

			var totalQuantity = 0;
			var totalUnusedQuantity = 0;
			var totalCdmLength = 0;
			for (var i = 0; i < records.length; i++) {
				var quantity = records[i].data.quantity;
				var unusedQuantity = records[i].data.unusedQuantity;
				var outLength = records[i].data.outLength;
				totalQuantity += quantity;
				totalUnusedQuantity += unusedQuantity;
				totalCdmLength += outLength;
			}
			Ext.getCmp('totalCdmLengthTxt2').setValue('选中长度合计(m):'
					+ totalCdmLength);
			Ext.getCmp('totalQuantityTxt2').setValue('选中页数合计:' + totalQuantity);
			Ext.getCmp('totalUnusedQuantityTxt2').setValue('选中未卷页数合计:'
					+ totalUnusedQuantity);

		}).defer(100);
	}, this);

	// 查询事件
	this.queryChooseOrderPanel.mon(this.queryChooseOrderPanel, 'query',
			function(form, vals) {
				var store = this.chooseOrderListPanel.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseOrderListPanel.pagingToolbar.pageSize
					}
				});
			}, this);

	this.defectZmWin.listPanel.store.on('load', function() {
				var defectZmArr = ['B3-底膜针孔', 'B4-底膜刮痕'];
				_this.defectZmWin.listPanel.store.filterBy(function(record) {
							var text = '' + record.get('defectName');
							return (defectZmArr.includes(text));

						});
			})

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		if (Ext.isEmpty(vals['condition/orderNo'])
				&& Ext.isEmpty(vals['condition/batchNo'])
				&& Ext.isEmpty(vals['condition/tumoBatchNoStr'])) {
			if (Ext.isEmpty(vals['condition/produceBeginDate'])
					|| Ext.isEmpty(vals['condition/produceEndDate'])) {
				Ext.Msg.alert("系统提示", "请选择查询日期！");
				return false;

			}

			var start = vals['condition/produceBeginDate'];
			var end = vals['condition/produceEndDate'];
			if (dayDiff(start, end) > 93) {
				Ext.Msg.alert("系统提示", "查询间隔日期不能大于3个月！");
				return false;

			}

		}

		// var start = vals['condition/produceBeginDate'];
		// var end = vals['condition/produceEndDate'];
		// if (dayDiff(start, end) > 31) {
		// Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
		// return false;

		// }
		var store = this.listPanel.store;

		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var recordId = cell.data.recordId;
				recordId = recordId + '';
				if (recordId.substr(0, 1) != '2') {
					// Ext.Msg.alert('系统提示', '一期数据不能修改');
					// return false;
				}
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

	// 增加修改前事件
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function() {
				if (this.editWindow.batchNo.getValue()
						.indexOf(this.editWindow.tumoBatchNo.getValue()) != 0) {
					Ext.Msg.alert('系统提示', '栈板号应以膜片批次开头！');
					return false;
				}
			}, this);

	// 修改加载事件
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.produceDt) {
					data.produceDt = data.produceDt.split('.')[0];
					var date1 = data.produceDt.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('entity/produceDt')
							.setValue(new Date(date1));
				}

			}, this);

	this.listPanel.store.on('load', function() {
		var _me = _this;
		var vals = _this.queryPanel.getForm().getValues();

		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
					url : "com.keensen.ump.qinsen.cdm.countRecords.biz.ext",
					method : "post",
					jsonData : {
						'map' : vals
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							if (!Ext.isEmpty(ret.data) && ret.data[0].cnt != 0) {
								var data = ret.data[0];
								Ext
										.getCmp('totalCdmLengthTxt')
										.setValue('合计长度(m):' + data.totalLength);
								Ext.getCmp('totalQuantityTxt').setValue('合计页数:'
										+ data.totalQuantity);
								Ext.getCmp('totalUnusedQuantityTxt')
										.setValue('合计未卷页数:'
												+ data.totalUnusedQuantity);

							} else {
								Ext.getCmp('totalCdmLengthTxt')
										.setValue('合计长度(m):');
								Ext.getCmp('totalQuantityTxt')
										.setValue('合计页数:');
								Ext.getCmp('totalUnusedQuantityTxt')
										.setValue('合计未卷页数:');
							}
						}
					},
					callback : function() {
						_me.requestMask.hide()
					}
				})

	});

	// 查询事件
	this.queryPanel4RemainLength.mon(this.queryPanel4RemainLength, 'query',
			function(form, vals) {

				if (!this.queryPanel4RemainLength.form.isValid()) {
					return;
				}
				var store = this.listPanel4RemainLength.store;
				store.baseParams = this.queryPanel4RemainLength.getForm()
						.getValues();
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4RemainLength.pagingToolbar.pageSize
					}
				});
			}, this);

	this.defectTmWin.mon(this.defectTmWin, 'beforehide', function() {

				var A = this.listPanel;
				if (!A.getSelectionModel().getSelected()) {
					return;
				} else {
					var C = A.getSelectionModel().getSelections();
					var rec = C[0];
					var tumoBatchId = rec.data.tumoBatchId;
					var tumoBatchNo = rec.data.tumoBatchNo;
					var isCutOver = rec.data.isCutOver;
					this.updateIsCutOverWindow.show();
					this.updateIsCutOverWindow.recordId.setValue(tumoBatchId);
					this.updateIsCutOverWindow.batchNo.setValue(tumoBatchNo);
					this.updateIsCutOverWindow.isCutOver.setValue(isCutOver);
				}
			}, this);

}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onEdit = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	}
	var B = A.getSelectionModel().getSelections();
	if (B.length > 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return
	}

	this.listPanel.onEdit();
};

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onDel = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	}
	var B = A.getSelectionModel().getSelections();
	if (B.length > 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return
	}
	this.listPanel.onDel();
};

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	Ext.getCmp('cdm-defectviewwindow').destroy();
	this.defectTmWin.destroy();
	this.defectZmWin.destroy();
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onPrintCaidieMoTag = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	}
	var B = A.getSelectionModel().getSelections();
	if (B.length > 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return
	}
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var rec = C[0];

		var produceDate = rec.data.produceDate;
		produceDate = produceDate.slice(0, 10);

		var f = document.getElementById('cdmprintForm');
		f.batchId.value = rec.data.batchId;
		f.batchNo.value = rec.data.batchNo;
		f.orderNo.value = rec.data.orderNo;
		f.tumoBatchNo.value = rec.data.tumoBatchNo;
		f.prodSpecName.value = rec.data.cdmSpecName;
		f.isToMixStr.value = rec.data.isToMixStr;
		f.quantity.value = rec.data.quantity;
		f.produceDate.value = produceDate;
		f.numPerWad.value = rec.data.numPerWad ? rec.data.numPerWad : '';
		f.blankingSize.value = rec.data.blankingSize
				? rec.data.blankingSize
				: '';
		f.denseNet.value = rec.data.denseNet ? rec.data.denseNet : '';
		var actionUrl = 'com.keensen.ump.qinsen.printCaidiemoTag.flow?token='
				+ Date.now();
		f.action = actionUrl;
		f.submit();

	}

};

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onaddTmDefect = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	}
	var B = A.getSelectionModel().getSelections();
	if (B.length > 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return
	}
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var tumoBatchNo = r.data.tumoBatchNo;
		var tumoRecordId = r.data.tumoBatchId;
		this.defectTmWin.inputPanel.tumoBatchNo.setValue(tumoBatchNo);
		this.defectTmWin.inputPanel.tumoRecordId.setValue(tumoRecordId);
		this.defectTmWin.show();
	}
};

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onaddZmDefect = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	}
	var B = A.getSelectionModel().getSelections();
	if (B.length > 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return
	}
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var dmBatchId = r.data.dmBatchId;
		var dimoBatchNo = r.data.dimoBatchNo;
		this.defectZmWin.inputPanel.tumoBatchNo.setValue(dimoBatchNo);
		this.defectZmWin.inputPanel.tumoRecordId.setValue(dmBatchId);
		this.defectZmWin.show();
	}
};

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.exportExcel = function() {
	var _this = this;

	var start = this.queryPanel.getForm()
			.findField(['condition/produceBeginDate']).getValue();
	var end = this.queryPanel.getForm().findField(['condition/produceEndDate'])
			.getValue();
	if (dayDiff(start, end) > 60) {
		Ext.Msg.alert("系统提示", "查询间隔日期不能大于2个月！");
		return false;

	}

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '裁叠膜记录',
			'com.keensen.ump.qinsen.cdm.queryRecords', '0,1');
	/*
	 * var daochu = _this.queryPanel.getForm().getValues();
	 * 
	 * this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	 * msg : "后台正在操作,请稍候!" }); this.requestMask.show(); Ext.Ajax.request({ url :
	 * "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
	 * method : "post", jsonData : { 'map' : daochu, namingsql :
	 * 'com.keensen.ump.qinsen.cdm.queryRecords', templateFilename :
	 * 'ks_inst_caidiemo' }, success : function(resp) { var ret =
	 * Ext.decode(resp.responseText); if (ret.success) { if (ret.success) { var
	 * fname = ret.fname; if (!Ext.isEmpty(fname)) { if (Ext.isIE) { window
	 * .open('/default/deliverynote/seek/down4IE.jsp?fname=' + fname); } else {
	 * window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" +
	 * fname; } } else { Ext.Msg.alert("系统提示", ret.msg); return false; } } } },
	 * callback : function() { _this.requestMask.hide() } })
	 */
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onAdd = function() {

	Ext.getCmp(chooseOrderBtn).setDisabled(true);
	Ext.getCmp(chooseOrderBtn).setVisible(false);

	this.inputWindow.prodSpecId.setReadOnly(true);

	this.inputWindow.produceDt.setValue(new Date());
	// this.inputWindow.buttons[0].setDisabled(true);
	this.inputWindow.buttons[0].setDisabled(false);

	this.inputWindow.displayfield1.setVisible(true);
	this.inputWindow.orderType.setVisible(true);
	this.inputWindow.materSpecName2.setVisible(true);
	this.inputWindow.displayfield2.setVisible(true);
	this.inputWindow.orderAmount.setVisible(true);
	this.inputWindow.planDate.setVisible(true);
	this.inputWindow.displayfield3.setVisible(true);
	this.inputWindow.jmAmount.setVisible(true);
	this.inputWindow.realityAmount.setVisible(true);
	this.inputWindow.prodRemark.setVisible(true);

	this.inputWindow.tumoBatchNo.setVisible(true);
	this.inputWindow.tumoBatchNo.setDisabled(false);

	this.inputWindow.pageType.setVisible(false);
	this.inputWindow.pageType.setDisabled(true);

	this.onPlan();

	this.inputWindow.orderNo.setReadOnly(true);
	this.inputWindow.show();
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.dealTumoBatchNo = function() {
	var _this = this;
	var batchNo = '';
	if (this.inputWindow.tumoBatchNo.hidden) {
		batchNo = this.inputWindow.tumoBatchNo2.getValue();
	} else {
		batchNo = this.inputWindow.tumoBatchNo.getValue();
	}

	if (batchNo.length != 11 && batchNo.length != 12 && batchNo.length != 13) {
		Ext.Msg.alert("系统提示", "膜片批次长度应为11或12位或13位，请检查！");
		return false;
	} else {
		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
					url : "com.keensen.ump.qinsen.cdm.queryLastRecords.biz.ext",
					method : "post",
					jsonData : {
						'tumoBatchNo' : batchNo
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							if (!Ext.isEmpty(ret.data)) {
								var last = ret.data;
								// 生成栈板号(膜片批次+序号)
								var lastSeq = last.batchNo.split('-')[1] * 1;
								var nextSeq = ((lastSeq + 1) + '').padStart(2,
										'0');
								var startSeq = Number(nextSeq);
								_this.inputWindow.startSeq.setValue(startSeq);
								_this.inputWindow.batchNo.setValue(batchNo
										+ '-' + nextSeq);
								// _this.inputWindow.orderNo
								// .setValue(last.orderNo);
								// _this.inputWindow.prodSpecId
								// .setValue(last.prodSpecId);
								_this.inputWindow.isToMix
										.setValue(last.isToMix);
								_this.inputWindow.quantity
										.setValue(last.quantity);
								_this.inputWindow.numPerWad
										.setValue(last.numPerWad);

								// _this.inputWindow.blankingSize
								// .setValue(last.blankingSize);
								// _this.inputWindow.denseNet
								// .setValue(last.denseNet);
								// _this.inputWindow.pageWidth
								// .setValue(last.pageWidth);

								_this.inputWindow.tumoBatchId
										.setValue(last.tumoBatchId);
								// alert(last.tumoBatchId);
								// alert(_this.inputWindow.tumoBatchId.getValue());
							} else {
								Ext.Msg.alert("系统提示", "膜片批次不存在，请检查！",
										function() {
											_this.inputWindow.batchNo
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

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onPlan = function() {
	var _this = this;
	// this.cdmdutyStore.reload();
	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.workorder2.getCdmDuty.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (!Ext.isEmpty(ret.data)) {
					var orderNo = ret.data[0].orderNo;
					var tumoBatchNo = ret.data[0].batchNo;
					var orderId = ret.data[0].orderId;

					var orderType = ret.data[0].orderType;
					var materSpecName2 = ret.data[0].materSpecName2;
					var orderAmount = ret.data[0].orderAmount;
					var planDate = ret.data[0].planDate;
					var jmAmount = ret.data[0].jmAmount;
					var materSpecId = ret.data[0].materSpecId;
					var realityAmount = ret.data[0].realityAmount;
					var prodRemark = ret.data[0].weekRemark;

					_this.inputWindow.orderNo.setValue(orderNo);
					_this.inputWindow.tumoBatchNo.setValue(tumoBatchNo);
					_this.inputWindow.orderType.setValue(orderType);
					_this.inputWindow.materSpecName2.setValue(materSpecName2);
					_this.inputWindow.orderAmount.setValue(orderAmount);
					_this.inputWindow.planDate.setValue(planDate);
					_this.inputWindow.jmAmount.setValue(jmAmount);
					_this.inputWindow.prodSpecId.setValue(materSpecId);
					_this.inputWindow.orderId.setValue(orderId);
					_this.inputWindow.realityAmount.setValue(realityAmount);

					_this.inputWindow.prodRemark.setValue(prodRemark);

					var i = _this.inputWindow.prodSpecId.store.find('id',
							materSpecId);
					if (i == -1)
						return;
					var rec = _this.inputWindow.prodSpecId.store.getAt(i);
					_this.inputWindow.blankingSize
							.setValue(rec.data.blankingSize);
					_this.inputWindow.pageWidth.setValue(rec.data.pageWidth);
					// _this.inputWindow.denseNet.setValue(rec.data.denseNet);

					_this.inputWindow.denseNetType
							.setValue(rec.data.denseNetType);
					_this.inputWindow.denseNetWidth
							.setValue(rec.data.denseNetWidth);
					_this.inputWindow.lightNetType
							.setValue(rec.data.lightNetType);
					_this.inputWindow.lightNetShortPage
							.setValue(rec.data.lightNetShortPage);
					_this.inputWindow.denseNetCdm
							.setValue(rec.data.denseNetCdm);
					_this.inputWindow.numPerWad.setValue(rec.data.numPerWad);

					var store = _this.cdmdutyStore;
					store.load({
								params : {
									'condition/planDate' : planDate,
									'condition/orderId' : orderId
								}
							});
					// _this.dealTumoBatchNo();
				} else {
					Ext.Msg.alert("系统提示", "该机台没有分配任务，请检查！", function() {
								_this.inputWindow.batchNo.setValue('');
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

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onReport = function() {
	var planId = this.inputWindow.planId.getValue();
	if (Ext.isEmpty(planId))
		return;
	var _this = this;

	Ext.Msg.confirm('提示', '是否立即提交完工报告？', function(btn) {
		if (btn === 'yes') {
			_this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			_this.requestMask.show();
			Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.workorder.finishCdm.biz.ext",
				method : "post",
				jsonData : {
					'planId' : planId
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					Ext.Msg.alert("系统提示", "报告已提交！", function() {
								_this.inputWindow.tumoBatchNo.setValue('');
								_this.inputWindow.planId.setValue('');
								return false;
							})
				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
		}
	});
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.checkTumoBatchNo = function() {
	if (!this.inputWindow.tumoBatchNo.hidden) {
		var tumoBatchNo = this.inputWindow.tumoBatchNo.getValue();
		var tumoBatchNo2 = this.inputWindow.tumoBatchNo2.getValue();
		if (tumoBatchNo != tumoBatchNo2) {
			Ext.Msg.alert("系统提示", "流转单上的二维码，与领取任务中的膜批次不一致！", function() {
						// this.inputWindow.buttons[0].setDisabled(tumoBatchNo
						// != tumoBatchNo2);
						return;
					})

		}

	} else {
		this.dealTumoBatchNo();
	}
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onUpdateLocation = function() {

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
		return
	}
	var B = A.getSelectionModel().getSelections();

	if (B.length > 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return
	}
	if (!A.getSelectionModel().getSelected()) {
		this.updateLocationWindow.batchNo.setValue('');
		this.updateLocationWindow.recordId.setValue('');
		this.updateLocationWindow.location.setValue('');
	} else {
		var C = A.getSelectionModel().getSelections();
		var rec = C[0];
		var batchNo = rec.data.batchNo;
		var recordId = rec.data.recordId;
		var location = rec.data.location;
		this.updateLocationWindow.batchNo.setValue(batchNo);
		this.updateLocationWindow.recordId.setValue(recordId);
		this.updateLocationWindow.location.setValue(location);

	}
	this.updateLocationWindow.show();
}

// 家用膜
com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onAdd2 = function() {
	Ext.getCmp(chooseOrderBtn).setDisabled(false);
	Ext.getCmp(chooseOrderBtn).setVisible(true);

	this.inputWindow.prodSpecId.setReadOnly(false);

	this.inputWindow.produceDt.setValue(new Date());
	this.inputWindow.buttons[0].setDisabled(false);
	// this.onPlan();
	this.inputWindow.displayfield1.setVisible(false);
	this.inputWindow.orderType.setVisible(false);
	this.inputWindow.materSpecName2.setVisible(false);
	this.inputWindow.displayfield2.setVisible(false);
	this.inputWindow.orderAmount.setVisible(false);
	this.inputWindow.planDate.setVisible(false);
	this.inputWindow.displayfield3.setVisible(false);
	this.inputWindow.jmAmount.setVisible(false);
	this.inputWindow.realityAmount.setVisible(false);
	this.inputWindow.prodRemark.setVisible(false);

	this.inputWindow.tumoBatchNo.setVisible(false);
	this.inputWindow.tumoBatchNo.setDisabled(true);

	this.inputWindow.orderNo.setReadOnly(false);

	this.inputWindow.pageType.setVisible(true);
	this.inputWindow.pageType.setDisabled(false);

	this.inputWindow.show();
}

function defectView(tumoBatchNo) {
	Ext.getCmp('cdm-defectviewwindow').tumoBatchNo = tumoBatchNo;
	var store = Ext.getCmp('cdm-defectviewwindow').listPanel.store;
	store.baseParams = {
		'condition/tumoBatchNo' : Ext.isEmpty(tumoBatchNo) ? "0" : tumoBatchNo
	};
	store.load();
	Ext.getCmp('cdm-defectviewwindow').show();

}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onWarn = function() {
	this.remainLengthWindow.show();
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.exportRemainLength = function() {
	doQuerySqlAndExport(this, this.queryPanel4RemainLength,
			this.listPanel4RemainLength, '剩余可用长度',
			'com.keensen.ump.qinsen.compquery.queryRemainLength', '0,1');
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.chooseOrder = function() {
	this.chooseOrderWindow.show();
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.chooseOrderOk = function() {
	var records = this.chooseOrderListPanel.getSelectionModel().getSelections();
	if (records.length == 0)
		return;
	var record = records[0];
	var orderNo = record.data.orderNo;
	this.inputWindow.orderNo.setValue(orderNo);
	this.chooseOrderWindow.hide();
}