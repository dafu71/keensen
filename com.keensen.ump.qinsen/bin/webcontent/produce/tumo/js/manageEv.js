com.keensen.ump.qinsen.produce.tumoMgr.prototype.initEvent = function() {

	var _this = this;

	this.defectZmWin.listPanel.store.on('load', function() {
				var defectZmArr = ['A1-底膜折痕', 'A9-铸膜设备不良', 'A10-铸膜液断流',
						'A11-铸膜深刮痕', 'A12-无纺布来料不良', 'A13-铸膜浅刮痕', 'A14-工艺异常报废'];
				_this.defectZmWin.listPanel.store.filterBy(function(record) {
							var text = '' + record.get('defectName');
							return (defectZmArr.includes(text));

						});
			})

	// 导出白名单

	var white = ['KS00420']
	if (white.indexOf(uid) > -1) {
		this.queryPanel.buttons[2].setDisabled(false);
	}

	// 查询事件
	this.queryPanel3.mon(this.queryPanel3, 'query', function(form, vals) {
				var store = this.listPanel3.store;
				store.baseParams = vals;
				store.load({
							params : {
								'condition/state' : 1,
								'condition/watertype' : '水相液'
							}
						});
			}, this);

	// 更换漂洗槽提醒
	if (replaceTroughFlag == 1) {
		this.replaceTroughInfo();
	}

	this.listPanel5.store.on('load', function() {
				var ret = _this.listPanel5.store.getRange();
				if (Ext.isEmpty(ret) || ret.length == 0) {

				} else {
					_this.replaceTroughWindow.show();
				}

			})

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var recordId = r.data.recordId;
				recordId = recordId + '';

				if (recordId.substr(0, 1) != '2') {
					// Ext.Msg.alert('系统提示', '一期数据不能删除');
					// return false;
				}
			})

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var start = vals['condition/produceDtStart'];
		var end = vals['condition/produceDtEnd'];

		var start2 = vals['condition/lastCaimoDateStart'];
		var end2 = vals['condition/lastCaimoDateEnd'];

		if (Ext.isEmpty(vals['condition/orderNoStr'])
				&& Ext.isEmpty(vals['condition/planNo'])
				&& Ext.isEmpty(vals['condition/dimoBatchNo'])
				&& Ext.isEmpty(vals['condition/batchNoStr'])
				&& Ext.isEmpty(vals['condition/outBatchNo'])
				&& (Ext.isEmpty(vals['condition/lastCaimoDateStart']) || Ext
						.isEmpty(vals['condition/lastCaimoDateEnd']))) {

			if (Ext.isEmpty(vals['condition/produceDtStart'])
					|| Ext.isEmpty(vals['condition/produceDtEnd'])) {
				Ext.Msg.alert("系统提示", "请选择查询日期！");
				return false;

			}

			if (dayDiff(start, end) > 93) {
				Ext.Msg.alert("系统提示", "查询间隔日期不能大于3个月！");
				return false;

			}

		}

		if (!Ext.isEmpty(start2) && !Ext.isEmpty(end2)) {
			if (dayDiff(start2, end2) > 93) {
				Ext.Msg.alert("系统提示", "查询裁膜时间间隔日期不能大于3个月！");
				return false;

			}
		}

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

	this.inputWindow.produceDt.mon(this.inputWindow.produceDt, "change",
			function(thisFiled, newValue, oldValue) {
				_this.dealBatchNo();
			});

	this.inputWindow.lineId.mon(this.inputWindow.lineId, "change", function(
					thisFiled, newValue, oldValue) {
				_this.dealBatchNo();
			});

	this.inputWindow.specId.mon(this.inputWindow.specId, "change", function(
					thisFiled, newValue, oldValue) {
				_this.dealBatchNo();
			});

	this.inputWindow.wfSupId.mon(this.inputWindow.wfSupId, "change", function(
					thisFiled, newValue, oldValue) {
				_this.dealBatchNo();
			});

	this.inputWindow.prodFlagId.mon(this.inputWindow.prodFlagId, "change",
			function(thisFiled, newValue, oldValue) {
				_this.dealBatchNo();
			});

	this.inputWindow.prodFlagId.store.on('load', function() {
				var ret = _this.inputWindow.prodFlagId.store.getRange();
				// 设置默认值
				for (var i = 0; i < ret.length; i++) {
					if (ret[i].data.isDefault == 'Y') {
						_this.inputWindow.prodFlagId.setValue(ret[i].data.id);
					}
				}
			})

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {

			}, this);

	this.listPanel.store.on('load', function() {
		var _me = _this;
		var vals = _this.queryPanel.getForm().getValues();

		_this.requestMask = _this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.qinsen.tumo.countRecords.biz.ext",
			method : "post",
			jsonData : {
				'map' : vals
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var data = ret.data[0];
						Ext.getCmp('totalLengthTxt').setValue('合计长度(m):'
								+ data.totalLength);
						Ext
								.getCmp('totalUsefulLengthTxt')
								.setValue('合计可用长度(m):' + data.totalUsefulLength);
						Ext.getCmp('totalCdmLengthTxt').setValue('合计裁膜产出(m):'
								+ data.totalCdmLength);
						Ext.getCmp('totalLossTxt').setValue('合计不良(m):'
								+ data.totalLoss);
						Ext.getCmp('totalTagNumTxt').setValue('合计标签数:'
								+ data.totalTagNum);

					} else {
						Ext.getCmp('totalLengthTxt').setValue('合计长度(m):');
						Ext.getCmp('totalUsefulLengthTxt')
								.setValue('合计可用长度(m):');
						Ext.getCmp('totalCdmLengthTxt').setValue('合计裁膜产出(m):');
						Ext.getCmp('totalLossTxt').setValue('合计不良(m):');
						Ext.getCmp('totalTagNumTxt').setValue('合计标签数:');
					}
				}
			},
			callback : function() {
				_me.requestMask.hide()
			}
		})

	});

	this.editWindow.produceDt.mon(this.editWindow.produceDt, "change",
			function(thisFiled, newValue, oldValue) {
				_this.dealBatchNo2();
			});

	this.editWindow.lineId.mon(this.editWindow.lineId, "change", function(
					thisFiled, newValue, oldValue) {
				_this.dealBatchNo2();
			});

	this.editWindow.specId.mon(this.editWindow.specId, "change", function(
					thisFiled, newValue, oldValue) {
				_this.dealBatchNo2();
			});

	this.editWindow.wfSupId.mon(this.editWindow.wfSupId, "change", function(
					thisFiled, newValue, oldValue) {
				_this.dealBatchNo2();
			});

	this.editWindow.prodFlagId.mon(this.editWindow.prodFlagId, "change",
			function(thisFiled, newValue, oldValue) {
				_this.dealBatchNo2();
			});

	this.inputWindow.dimoBatchNo.mon(this.inputWindow.dimoBatchNo, "change",
			function(thisFiled, newValue, oldValue) {
				if (newValue.length == 12) {
					this.requestMask = this.requestMask
							|| new Ext.LoadMask(Ext.getBody(), {
										msg : "后台正在操作,请稍候!"
									});
					this.requestMask.show();
					Ext.Ajax.request({
						url : "com.keensen.ump.produce.diaphragm.make.make.queryZmx.biz.ext",
						method : "post",
						jsonData : {
							'condition/dimoBatchNo' : newValue
						},
						success : function(response, action) {
							var result = Ext.decode(response.responseText);
							var datas = result.data;
							if (Ext.isEmpty(datas)) {
								Ext.Msg.alert("系统提示", "没有查询到无纺布数据！");
								return;
							} else {
								var data = datas[0];
								var supId = data.supId;
								var wfBatchNo = data.wfBatchNo;
								_this.inputWindow.wfSupId.setValue(supId);
								_this.inputWindow.wfBatchNo.setValue(wfBatchNo);
								_this.inputWindow.wfSupId.fireEvent('change');
							}

						},
						callback : function() {
							_this.requestMask.hide()
						}
					})
				}
			});

	this.editWindow.dimoBatchNo.mon(this.editWindow.dimoBatchNo, "change",
			function(thisFiled, newValue, oldValue) {
				if (newValue.length == 12) {
					this.requestMask = this.requestMask
							|| new Ext.LoadMask(Ext.getBody(), {
										msg : "后台正在操作,请稍候!"
									});
					this.requestMask.show();
					Ext.Ajax.request({
						url : "com.keensen.ump.produce.diaphragm.make.make.queryZmx.biz.ext",
						method : "post",
						jsonData : {
							'condition/dimoBatchNo' : newValue
						},
						success : function(response, action) {
							var result = Ext.decode(response.responseText);
							var datas = result.data;
							if (Ext.isEmpty(datas)) {
								Ext.Msg.alert("系统提示", "没有查询到无纺布数据！");
								return;
							} else {
								var data = datas[0];
								var supId = data.supId;
								var wfBatchNo = data.wfBatchNo;
								_this.editWindow.wfSupId.setValue(supId);
								_this.editWindow.wfBatchNo.setValue(wfBatchNo);
								_this.editWindow.wfSupId.fireEvent('change');
							}

						},
						callback : function() {
							_this.requestMask.hide()
						}
					})
				}
			});

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {
				var dimoBatchNo = this.inputWindow.items.items[0].form
						.findField('entity/dimoBatchNo').getValue();
				var outBatchNo = this.inputWindow.items.items[0].form
						.findField('entity/outBatchNo').getValue();
				var batchNo = this.inputWindow.items.items[0].form
						.findField('entity/batchNo').getValue();
				if (dimoBatchNo.length != 12) {
					Ext.Msg.alert("系统提示", "底膜批次长度应为12位，请检查！");
					return false;
				}
				// 型号改为3位，批次改为13位
				if (batchNo.length != 13) {
					Ext.Msg.alert("系统提示", "膜片批次长度应为13位，请检查！");
					return false;
				}
				var batchNoPrefix = this.spellBatchNoPrefix();
				if (batchNo.indexOf(batchNoPrefix) != 0) {
					Ext.Msg.alert('膜片批次与选择的信息不符，确认批次填写无误？');
					return false;
					// var c = confirm('膜片批次与选择的信息不符，确认批次填写无误？');
					// if (!c) {
					// return false;
					// }
				}
			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function() {
				var dimoBatchNo = this.editWindow.items.items[0].form
						.findField('entity/dimoBatchNo').getValue();
				var outBatchNo = this.editWindow.items.items[0].form
						.findField('entity/outBatchNo').getValue();
				var batchNo = this.editWindow.items.items[0].form
						.findField('entity/batchNo').getValue();
				if (dimoBatchNo.length != 12) {
					Ext.Msg.alert("系统提示", "底膜批次长度应为12位，请检查！");
					return false;
				}
				// 型号改为3位，批次改为13位
				if (batchNo.length != 13 && batchNo.length != 12) {
					Ext.Msg.alert("系统提示", "膜片批次长度应为12或13位，请检查！");
					return false;
				}

				if (batchNo.length == 13) {
					var batchNoPrefix = this.spellBatchNoPrefix2();
					if (batchNo.indexOf(batchNoPrefix) != 0) {
						Ext.Msg.alert("系统提示", "膜片批次与选择的信息不符，确认批次填写无误？");
						return false;
						// var c = confirm('膜片批次与选择的信息不符，确认批次填写无误？');
						// if (!c) {
						// return false;
						// }
					}
				}
			}, this);

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

	this.addDefectSampleWindow.activeItem.mon(
			this.addDefectSampleWindow.activeItem, 'afterSave', function(gird,
					cell) {
				var _vals = _this.queryPanel.getForm().getValues();
				_this.queryPanel.fireEvent("query", _this.queryPanel, _vals);
			}, this);

	this.modifyRecordWindow.activeItem.mon(this.modifyRecordWindow.activeItem,
			'afterSave', function(gird, cell) {
				var _vals = _this.queryPanel.getForm().getValues();
				_this.queryPanel.fireEvent("query", _this.queryPanel, _vals);
			}, this);

	this.editMpdWindow.activeItem.mon(this.editMpdWindow.activeItem,
			'afterload', function(win, data) {

				this.judgeC21();

			}, this);

}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onaddTmDefect = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var tumoBatchNo = r.data.batchNo;
		var tumoRecordId = r.data.recordId;
		var ifModifyDefect = r.data.ifModifyDefect;
		if (ifModifyDefect != '1' && modifyFlag != 1) {
			Ext.Msg.alert("系统提示", "该涂膜批次不能编辑涂膜不良！");
			return;
		}
		this.defectTmWin.inputPanel.tumoBatchNo.setValue(tumoBatchNo);
		this.defectTmWin.inputPanel.tumoRecordId.setValue(tumoRecordId);
		this.defectTmWin.inputPanel.produceDt.setValue(new Date());
		this.defectTmWin.inputPanel.produceDt.setReadOnly(true);
		this.defectTmWin.show();
	}
};

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onaddZmDefect = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var tumoBatchNo = r.data.batchNo;
		var tumoRecordId = r.data.recordId;

		var dmBatchId = r.data.dmBatchId;
		var dimoBatchNo = r.data.dimoBatchNo;

		this.defectZmWin.inputPanel.tumoBatchNo.setValue(dimoBatchNo);
		this.defectZmWin.inputPanel.tumoRecordId.setValue(dmBatchId);
		this.defectZmWin.show();
	}
};

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onPrintTumoTag = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		if (Ext.isEmpty(r.data.outLength)) {
			Ext.Msg.alert("系统提示", '该批次没有产出长度信息，请补全后再打印标签!');
			return;
		} else {
			var recordId = r.data.recordId;
			var batchNo = r.data.batchNo;
			var outLength = r.data.outLength;
			var materSpecName = r.data.materSpecName;
			var usefulLength = r.data.usefulLength;
			window.open('com.keensen.ump.qinsen.printTumoTag.flow?batchNo='
					+ batchNo + '&outLength=' + outLength + '&materSpecName='
					+ materSpecName + '&usefulLength=' + usefulLength);
		}
	}

};

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onAdd = function() {
	// this.inputWindow.form.findField("entity/fixUserid").setValue(uid);
	// this.inputWindow.form.findField("entity/fixUsername").setValue(uname);
	var index = this.inputWindow.workerId.getStore().find('code', uid);
	if (index && index != -1) {
		var staffId = this.inputWindow.workerId.getStore().getAt(index).data.id;
		this.inputWindow.workerId.setValue(staffId);
	}
	if (!Ext.isEmpty(teamId)) {
		this.inputWindow.items.items[0].form.findField('entity/teamId')
				.setValue(teamId);
	}
	this.inputWindow.produceDt.setValue(new Date());
	this.inputWindow.show();

}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.spellBatchNoPrefix = function() {

	var tacheCode = ' ';
	var lineCode = ' ';
	var specCode = '  ';
	var wfSupCode = ' ';
	var yearCode = ' ';
	var monthCode = ' ';
	var dayCode = '  ';

	if (this.inputWindow.prodFlagId.isValid()) {
		var myid = this.inputWindow.prodFlagId.getValue();
		var index = this.inputWindow.prodFlagId.getStore().find('id', myid);
		tacheCode = this.inputWindow.prodFlagId.getStore().getAt(index).data.code;
	}

	if (this.inputWindow.lineId.isValid()) {
		var myid = this.inputWindow.lineId.getValue();
		var index = this.inputWindow.lineId.getStore().find('id', myid);
		lineCode = this.inputWindow.lineId.getStore().getAt(index).data.code;
	}

	if (this.inputWindow.specId.isValid()) {
		var myid = this.inputWindow.specId.getValue();
		var index = this.inputWindow.specId.getStore().find('id', myid);
		// 型号改为3位，批次改为13位
		// specCode =
		// this.inputWindow.specId.getStore().getAt(index).data.mpBatchCode;
		specCode = this.inputWindow.specId.getStore().getAt(index).data.newBatchCode;
	}

	if (this.inputWindow.wfSupId.isValid()) {
		var myid = this.inputWindow.wfSupId.getValue();
		var index = this.inputWindow.wfSupId.getStore().find('id', myid);
		wfSupCode = this.inputWindow.wfSupId.getStore().getAt(index).data.code;
	}

	if (this.inputWindow.produceDt.isValid()) {
		var ymd = this.inputWindow.produceDt.getRawValue().substr(0, 10);
		var dateArr = ymd.split('-');
		yearCode = dateArr[0].substr(3);
		mon = dateArr[1];
		switch (mon) {
			case '10' :
				monthCode = 'A';
				break;
			case '11' :
				monthCode = 'B';
				break;
			case '12' :
				monthCode = 'C';
				break;
			default :
				monthCode = mon.substr(1);
		}
		dayCode = dateArr[2];
	}
	var prefix = tacheCode + lineCode + specCode + wfSupCode + yearCode
			+ monthCode + dayCode;
	return prefix;
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.spellBatchNoPrefix2 = function() {

	var tacheCode = ' ';
	var lineCode = ' ';
	var specCode = '  ';
	var wfSupCode = ' ';
	var yearCode = ' ';
	var monthCode = ' ';
	var dayCode = '  ';

	if (this.editWindow.prodFlagId.isValid()) {
		var myid = this.editWindow.prodFlagId.getValue();
		var index = this.editWindow.prodFlagId.getStore().find('id', myid);
		tacheCode = this.editWindow.prodFlagId.getStore().getAt(index).data.code;
	}

	if (this.editWindow.lineId.isValid()) {
		var myid = this.editWindow.lineId.getValue();
		var index = this.editWindow.lineId.getStore().find('id', myid);
		lineCode = this.editWindow.lineId.getStore().getAt(index).data.code;
	}

	if (this.editWindow.specId.isValid()) {
		var myid = this.editWindow.specId.getValue();
		var index = this.editWindow.specId.getStore().find('id', myid);
		// 型号改为3位，批次改为13位
		// specCode =
		// this.editWindow.specId.getStore().getAt(index).data.mpBatchCode;
		specCode = this.editWindow.specId.getStore().getAt(index).data.newBatchCode;
	}

	if (this.editWindow.wfSupId.isValid()) {
		var myid = this.editWindow.wfSupId.getValue();
		var index = this.editWindow.wfSupId.getStore().find('id', myid);
		wfSupCode = this.editWindow.wfSupId.getStore().getAt(index).data.code;
	}

	if (this.editWindow.produceDt.isValid()) {
		var ymd = this.editWindow.produceDt.getRawValue().substr(0, 10);
		var dateArr = ymd.split('-');
		yearCode = dateArr[0].substr(3);
		mon = dateArr[1];
		switch (mon) {
			case '10' :
				monthCode = 'A';
				break;
			case '11' :
				monthCode = 'B';
				break;
			case '12' :
				monthCode = 'C';
				break;
			default :
				monthCode = mon.substr(1);
		}
		dayCode = dateArr[2];
	}
	var prefix = tacheCode + lineCode + specCode + wfSupCode + yearCode
			+ monthCode + dayCode;
	return prefix;
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.dealBatchNo2 = function() {
	return;
	/*
	 * var me = this; var prefix = me.spellBatchNoPrefix2(); var oldStr =
	 * this.editWindow.batchNo.getValue(); if (oldStr && oldStr.length > 9) {
	 * this.editWindow.batchNo.setValue(prefix + oldStr.substr(9)); } else {
	 * this.editWindow.batchNo.setValue(prefix); }
	 */
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.dealBatchNo = function() {
	var me = this;
	var prefix = me.spellBatchNoPrefix();
	var oldStr = this.inputWindow.batchNo.getValue();
	if (oldStr && oldStr.length > 10) {
		this.inputWindow.batchNo.setValue(prefix + oldStr.substr(10));
	} else {
		this.inputWindow.batchNo.setValue(prefix);
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.editMpdWindow.destroy();
	this.defectTmWin.destroy();
	this.defectZmWin.destroy();
	Ext.getCmp('tm-defectviewwindow').destroy();
	Ext.getCmp('produce-tumo-list').destroy();

	this.modifyRecordWindow.destroy();
	this.modifyRecordListWindow.destroy();
	this.addDefectSampleWindow.destroy();
	this.defectSampleWindow.destroy();
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onModiTech = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var cell = C[0];
		var recordId = cell.data.recordId;
		recordId = recordId + '';
		if (recordId.substr(0, 1) != '2') {
			// Ext.Msg.alert('系统提示', '一期数据不能修改');
			// return false;
		}
		this.editMpdWindow.show();
		this.editMpdWindow.loadData(cell);
		var sumOutLength = cell.data.sumOutLength;
		this.editMpdWindow.sumOutLength.setValue(sumOutLength);
	}

}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.exportExcel = function() {
	var vals = this.queryPanel.form.getValues();
	var start = vals['condition/produceDtStart'];
	var end = vals['condition/produceDtEnd'];

	var start2 = vals['condition/lastCaimoDateStart'];
	var end2 = vals['condition/lastCaimoDateEnd'];

	if (Ext.isEmpty(vals['condition/orderNoStr'])
			&& Ext.isEmpty(vals['condition/planNo'])
			&& Ext.isEmpty(vals['condition/dimoBatchNo'])
			&& Ext.isEmpty(vals['condition/batchNoStr'])
			&& Ext.isEmpty(vals['condition/outBatchNo'])
			&& (Ext.isEmpty(vals['condition/lastCaimoDateStart']) || Ext
					.isEmpty(vals['condition/lastCaimoDateEnd']))) {

		if (Ext.isEmpty(vals['condition/produceDtStart'])
				|| Ext.isEmpty(vals['condition/produceDtEnd'])) {
			Ext.Msg.alert("系统提示", "请选择查询日期！");
			return false;

		}

		if (dayDiff(start, end) > 93) {
			Ext.Msg.alert("系统提示", "查询间隔日期不能大于3个月！");
			return false;

		}

	}

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '涂膜记录',
			'com.keensen.ump.qinsen.tumo.queryRecords', '0,1');
	/*
	 * var _this = this; var daochu = _this.queryPanel.getForm().getValues();
	 * 
	 * this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	 * msg : "后台正在操作,请稍候!" }); this.requestMask.show(); Ext.Ajax.request({ url :
	 * "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
	 * method : "post", jsonData : { 'map' : daochu, 'map/limited' : '5000',
	 * namingsql : 'com.keensen.ump.qinsen.tumo.queryRecords', templateFilename :
	 * 'ks_inst_tumo' }, success : function(resp) { var ret =
	 * Ext.decode(resp.responseText); if (ret.success) {
	 * 
	 * var fname = ret.fname; if (Ext.isIE) {
	 * window.open('/default/deliverynote/seek/down4IE.jsp?fname=' + fname); }
	 * else { window.location.href =
	 * "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" + fname; } } },
	 * callback : function() { _this.requestMask.hide() } })
	 */
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onSendCheck = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var cell = C[0];
		var recordId = cell.data.recordId;
		recordId = recordId + '';
		if (recordId.substr(0, 1) != '2') {
			// Ext.Msg.alert('系统提示', '一期数据不能修改');
			// return false;
		}
		this.sendChecWindow.show();
		this.sendChecWindow.loadData(cell);
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onPrintSendCheck = function() {
	if (this.sendChecWindow.form.isValid) {
		var specName = this.sendChecWindow.specId.getRawValue();
		var batchNo = this.sendChecWindow.batchNo.getValue();
		var positionLength = this.sendChecWindow.positionLength.getValue();
		var checkNo = this.sendChecWindow.checkNo.getValue();
		window.open('com.keensen.ump.qinsen.sendCheckPrint.flow?batchNo='
				+ batchNo + '&checkNo=' + checkNo + '&positionLength='
				+ positionLength + '&specName=' + specName);
	}
}

function isNonNegativeFloat(str) {
	const regex = /^\d+(\.\d+)?$/;
	return regex.test(str);
}

function defectView(tumoBatchNo) {
	// Ext.getCmp('tm-defectviewwindow').tumoBatchNo = tumoBatchNo;
	// var store = Ext.getCmp('tm-defectviewwindow').listPanel.store;
	// store.baseParams = {
	// 'condition/tumoBatchNo' : Ext.isEmpty(tumoBatchNo) ? "0" : tumoBatchNo
	// };
	// store.load();
	// Ext.getCmp('tm-defectviewwindow').show();
	var spacepanel = Ext.getCmp('spacepanel');

	if (tumoBatchNo == '') {
		return;
	}

	var itemId = 'menu10002001';
	var url = '/qinsen/quality/defect/index.jsp?tumoBatchNo=' + tumoBatchNo;
	var title = '膜片不良记录';
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
				id : '10002001',
				text : title,
				attributes : {
					respath : url
				}
			});

}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onRemark = function() {
	var _this = this;

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var trend = C[0].data.trend;
		var recordId = C[0].data.recordId;
		if (Ext.isEmpty(trend)) {
			// Ext.Msg.alert("系统提示", "请选择品管已经判定过的数据！");
			// return false;
		}
		Ext.Msg.prompt('工艺员备注', '请输入', function(btn, text) {
			if (btn == 'ok') {
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.quality.quality.saveDiaphragmTumo.biz.ext",
					method : "post",
					jsonData : {
						'entity/reserve4' : text,
						'entity/reserve5' : uid + '----' + (new Date()),
						'entity/recordId' : recordId
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
		}, this, true);
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.replaceTroughInfo = function() {
	this.listPanel5.store.load();
	// this.replaceTroughWindow.show();
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onWaterBatchNo = function() {
	var line = '';
	var mptype = '';
	if (!this.inputWindow.hidden) {
		line = this.inputWindow.lineId.getRawValue();
		mptype = this.inputWindow.specId.getRawValue();
	} else {
		line = this.editWindow.lineId.getRawValue();
		mptype = this.editWindow.specId.getRawValue();
	}
	if (Ext.isEmpty(line)) {
		Ext.Msg.alert("系统提示", "请选择线别!");
		return;
	}
	line = line.substr(-2, 1);
	if (Ext.isEmpty(mptype)) {
		Ext.Msg.alert("系统提示", "请选择膜片型号!");
		return;
	}
	this.queryPanel3.mptype.setValue(mptype);
	this.queryPanel3.line.setValue(line);
	var store = this.listPanel3.store;

	store.baseParams = {
		'condition/state' : 1,
		'condition/watertype' : '水相液',
		'condition/mptype' : mptype,
		'condition/line' : line
	};
	store.load();
	this.chooseWindow.show();
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onSelectWaterBatchNo = function() {
	var A = this.listPanel3;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var waterBatchNo = records[0].data.batchNo;
		// this.listPanel2.store.removeAll();
		if (!this.inputWindow.hidden) {
			this.inputWindow.waterBatchNo.setValue(waterBatchNo);
		} else {
			this.editWindow.waterBatchNo.setValue(waterBatchNo);
		}
		this.chooseWindow.hide();
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.calculateC21 = function() {
	var ro = this.editMpdWindow.ro.getValue();
	var absorbance = this.editMpdWindow.absorbance.getValue();
	var a = this.editMpdWindow.a.getValue();
	var b = this.editMpdWindow.b.getValue();
	if (!Ext.isEmpty(ro) && !Ext.isEmpty(absorbance) && !Ext.isEmpty(a)
			& !Ext.isEmpty(b)) {
		// （a * 吸光度值 - b ）* RO水质量(g)/10
		var mpd = (parseFloat(a) * parseFloat(absorbance) - parseFloat(b))
				* parseFloat(ro) / 10;
		mpd = Math.round(mpd * 100) / 100
		this.editMpdWindow.mpd.setValue(mpd);
		this.judgeC21();
	}

}

// 判定结果
com.keensen.ump.qinsen.produce.tumoMgr.prototype.judgeC21 = function() {
	var mpd = this.editMpdWindow.mpd.getValue();
	var qualified = this.editMpdWindow.qualified.getValue();
	var feedback = this.editMpdWindow.feedback.getValue();
	var c21Result = '';
	if (!Ext.isEmpty(mpd) && !Ext.isEmpty(qualified) && !Ext.isEmpty(feedback)) {

		if (parseFloat(mpd) <= parseFloat(feedback)) {
			c21Result = '合格,生产使用';
		}
		if (parseFloat(mpd) > parseFloat(feedback)
				&& parseFloat(mpd) <= parseFloat(qualified)) {
			c21Result = '合格,反馈班长';
		}
		if (parseFloat(mpd) > parseFloat(qualified)) {
			c21Result = '不合格,反馈班长';
		}

		this.editMpdWindow.c21Result.setValue(c21Result);
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onaddFhDefect = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var tumoBatchNo = r.data.batchNo;
		var tumoRecordId = r.data.recordId;
		this.defectFhWin.inputPanel.tumoBatchNo.setValue(tumoBatchNo);
		this.defectFhWin.inputPanel.tumoRecordId.setValue(tumoRecordId);
		this.defectFhWin.show();
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onQueryByBatchNos = function() {
	Ext.Msg.prompt('多批次查询', '多个批次请用逗号分隔，或一行一个批次', function(btn, text) {
		if (btn == 'ok') {
			if (Ext.isEmpty(text)) {
				Ext.Msg.alert("系统提示", "请输入批次号！");
				return;
			}

			var store = this.listPanel.store;
			var batchNoStr = text;
			var regEx = new RegExp("\\n", "gi");
			batchNoStr = batchNoStr.replace(regEx, ",");
			batchNoStr = batchNoStr.replaceAll('，', ',');
			batchNoStr = batchNoStr.replaceAll(' ', '');
			var arr = [];
			arr = batchNoStr.split(',');
			var arr2 = [];
			for (var i = 0; i < arr.length; i++) {
				arr2.push("'" + arr[i] + "'");
			}

			store.baseParams = {
				'condition/batchNoStr2' : arr2.join(",") == "''" ? null : arr2
						.join(",")
			};
			store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listPanel.pagingToolbar.pageSize
						}
					});
		}
	}, this, true);
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onTakeSample = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var tumoBatchNo = r.data.batchNo;
		var tumoBatchId = r.data.recordId;
		var store = this.listPanel4defectSample.store;
		store.baseParams = {
			'condition/tumoBatchNo' : tumoBatchNo,
			'condition/defectItemId' : '-100000020,100000031'
		};
		store.load({
			params : {
				"pageCond/begin" : 0,
				"pageCond/length" : this.listPanel4defectSample.pagingToolbar.pageSize
			}
		});
		this.defectSampleWindow.show();
		this.addDefectSampleWindow.show();
		this.addDefectSampleWindow.tumoBatchNo.setValue(tumoBatchNo);
		this.addDefectSampleWindow.tumoBatchId.setValue(tumoBatchId);
		this.addDefectSampleWindow.recorder.setValue(uname);
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onAddSample = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var tumoBatchNo = r.data.batchNo;
		var tumoBatchId = r.data.recordId;

		this.addDefectSampleWindow.show();
		this.addDefectSampleWindow.tumoBatchNo.setValue(tumoBatchNo);
		this.addDefectSampleWindow.tumoBatchId.setValue(tumoBatchId);
		this.addDefectSampleWindow.recorder.setValue(uname);
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onModify = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var tumoBatchNo = r.data.batchNo;
		var tumoBatchId = r.data.recordId;
		var specId = r.data.specId;

		this.modifyRecordWindow.show();
		this.modifyRecordWindow.recordId.setValue(tumoBatchId);
		this.modifyRecordWindow.batchNo.setValue(tumoBatchNo);
		this.modifyRecordWindow.specId.setValue(specId);
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onViewModify = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var tumoBatchNo = r.data.batchNo;
		var tumoBatchId = r.data.recordId;
		var specId = r.data.specId;
		var store = this.listPanel4ModifyRecord.store;
		store.baseParams = {
			'condition/recordId' : tumoBatchId
		};
		store.load({
			params : {
				"pageCond/begin" : 0,
				"pageCond/length" : this.listPanel4ModifyRecord.pagingToolbar.pageSize
			}
		});
		this.modifyRecordListWindow.show();

	}

}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.onTestC92 = function() {
	var A = this.listPanel;
	var arr = ['ULP2-2', 'ULP1-2', 'HW4-1', 'HW1-2', 'ULP3-2'];
	var arr2 = ['E', 'D'];
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var cell = C[0];
		var recordId = cell.data.recordId;
		recordId = recordId + '';
		var materSpecName = cell.data.materSpecName;
		var lineCode = cell.data.lineCode;
		if (arr.indexOf(materSpecName) == -1) {
			Ext.Msg.alert("系统提示", "该膜片型号没有对应C92浓度标准！");
			return false;
		}
		if (arr2.indexOf(lineCode) == -1) {
			Ext.Msg.alert("系统提示", "该生产线没有对应C92浓度标准！");
			return false;
		}

		this.editC92Window.show();
		this.editC92Window.loadData(cell);

	}

}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.calcC92 = function(flag) {
	var a = this.editC92Window.a.getValue();
	var b = this.editC92Window.b.getValue();
	var densityLow7 = this.editC92Window.densityLow7.getValue();
	var densityUp7 = this.editC92Window.densityUp7.getValue();
	var densityLow8 = this.editC92Window.densityLow8.getValue();
	var densityUp8 = this.editC92Window.densityUp8.getValue();

	if (flag == 7) {
		var light7 = this.editC92Window.light7.getValue();
		var weightBefore7 = this.editC92Window.weightBefore7.getValue();
		var weightAfter7 = this.editC92Window.weightAfter7.getValue();
		if (Ext.isEmpty(light7) && Ext.isEmpty(weightBefore7)
				&& Ext.isEmpty(weightAfter7)) {
			return false;
		}

		var density7 = (parseFloat(light7) * parseFloat(a) + parseFloat(b))
				* parseFloat(weightAfter7) / parseFloat(weightBefore7);
		this.editC92Window.density7.setValue(roundToDecimalPlace(density7, 2));
		if (parseFloat(density7) >= parseFloat(densityLow7)
				&& parseFloat(density7) <= parseFloat(densityUp7)) {
			this.editC92Window.result7.setValue('合格,生产使用');
		}else{
			this.editC92Window.result7.setValue('不合格,通知班长');
		}
	}
	
	if (flag == 8) {
		var light8 = this.editC92Window.light8.getValue();
		var weightBefore8 = this.editC92Window.weightBefore8.getValue();
		var weightAfter8 = this.editC92Window.weightAfter8.getValue();
		if (Ext.isEmpty(light8) && Ext.isEmpty(weightBefore8)
				&& Ext.isEmpty(weightAfter8)) {
			return false;
		}

		var density8 = (parseFloat(light8) * parseFloat(a) + parseFloat(b))
				* parseFloat(weightAfter8) / parseFloat(weightBefore8);
		this.editC92Window.density8.setValue(roundToDecimalPlace(density8, 2));
		if (parseFloat(density8) >= parseFloat(densityLow8)
				&& parseFloat(density8) <= parseFloat(densityUp8)) {
			this.editC92Window.result8.setValue('合格,生产使用');
		}else{
			this.editC92Window.result8.setValue('不合格,通知班长');
		}
	}
}

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}