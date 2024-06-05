com.keensen.ump.qinsen.produce.tumoMgr.prototype.initEvent = function() {

	var _this = this;

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var recordId = r.data.recordId;
				recordId = recordId + '';

				if (recordId.substr(0, 1) != '2') {
					Ext.Msg.alert('系统提示', '一期数据不能删除');
					return false;
				}
			})

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var start = vals['condition/produceDtStart'];
		var end = vals['condition/produceDtEnd'];
		if (dayDiff(start, end) > 31) {
			Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
			return false;

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
					Ext.Msg.alert('系统提示', '一期数据不能修改');
					return false;
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

					} else {
						Ext.getCmp('totalLengthTxt').setValue('合计长度(m):');
						Ext.getCmp('totalUsefulLengthTxt')
								.setValue('合计可用长度(m):');
						Ext.getCmp('totalCdmLengthTxt').setValue('合计裁膜产出(m):');
						Ext.getCmp('totalLossTxt').setValue('合计不良(m):');
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

				if (batchNo.length != 12) {
					Ext.Msg.alert("系统提示", "膜片批次长度应为12位，请检查！");
					return false;
				}
				var batchNoPrefix = this.spellBatchNoPrefix();
				if (batchNo.indexOf(batchNoPrefix) != 0) {
					var c = confirm('膜片批次与选择的信息不符，确认批次填写无误？');
					if (!c) {
						return false;
					}
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

				if (batchNo.length != 12) {
					Ext.Msg.alert("系统提示", "膜片批次长度应为12位，请检查！");
					return false;
				}
				var batchNoPrefix = this.spellBatchNoPrefix2();
				if (batchNo.indexOf(batchNoPrefix) != 0) {
					var c = confirm('膜片批次与选择的信息不符，确认批次填写无误？');
					if (!c) {
						return false;
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
		this.defectTmWin.inputPanel.tumoBatchNo.setValue(tumoBatchNo);
		this.defectTmWin.inputPanel.tumoRecordId.setValue(tumoRecordId);
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
		this.defectZmWin.inputPanel.tumoBatchNo.setValue(tumoBatchNo);
		this.defectZmWin.inputPanel.tumoRecordId.setValue(tumoRecordId);
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
			window.open('com.keensen.ump.qinsen.printTumoTag.flow?batchNo='
					+ batchNo + '&outLength=' + outLength + '&materSpecName='
					+ materSpecName);
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
		specCode = this.inputWindow.specId.getStore().getAt(index).data.mpBatchCode;
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
		specCode = this.editWindow.specId.getStore().getAt(index).data.mpBatchCode;
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
	var me = this;
	var prefix = me.spellBatchNoPrefix2();
	var oldStr = this.editWindow.batchNo.getValue();
	if (oldStr && oldStr.length > 9) {
		this.editWindow.batchNo.setValue(prefix + oldStr.substr(9));
	} else {
		this.editWindow.batchNo.setValue(prefix);
	}
}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.dealBatchNo = function() {
	var me = this;
	var prefix = me.spellBatchNoPrefix();
	var oldStr = this.inputWindow.batchNo.getValue();
	if (oldStr && oldStr.length > 9) {
		this.inputWindow.batchNo.setValue(prefix + oldStr.substr(9));
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
			Ext.Msg.alert('系统提示', '一期数据不能修改');
			return false;
		}
		this.editMpdWindow.show();
		this.editMpdWindow.loadData(cell);
	}

}

com.keensen.ump.qinsen.produce.tumoMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '5000',
			namingsql : 'com.keensen.ump.qinsen.tumo.queryRecords',
			templateFilename : 'ks_inst_tumo'
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
