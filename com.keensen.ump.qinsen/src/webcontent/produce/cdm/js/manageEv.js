com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var start = vals['condition/produceBeginDate'];
		var end = vals['condition/produceEndDate'];
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

	// 增加修改前事件
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function() {
				if (this.editWindow.batchNo.getValue()
						.indexOf(this.editWindow.tumoBatchNo.getValue()) != 0) {
					Ext.Msg.alert('系统提示','栈板号应以膜片批次开头！');
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

}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onDel = function() {
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
	} else {
		var C = A.getSelectionModel().getSelections();
		var rec = C[0];
		var f = document.getElementById('printForm');
		f.batchId.value = rec.data.batchId;
		f.batchNo.value = rec.data.batchNo;
		f.orderNo.value = rec.data.orderNo;
		f.tumoBatchNo.value = rec.data.tumoBatchNo;
		f.prodSpecName.value = rec.data.cdmSpecName;
		f.isToMixStr.value = rec.data.isToMixStr;
		f.quantity.value = rec.data.quantity;
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
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var tumoBatchNo = r.data.tumoBatchNo;
		var tumoRecordId = r.data.tumoBatchId;
		this.defectZmWin.inputPanel.tumoBatchNo.setValue(tumoBatchNo);
		this.defectZmWin.inputPanel.tumoRecordId.setValue(tumoRecordId);
		this.defectZmWin.show();
	}
};

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.exportExcel = function() {
	var _this = this;

	var start = this.queryPanel.getForm()
			.findField(['condition/produceBeginDate']).getValue();
	var end = this.queryPanel.getForm().findField(['condition/produceEndDate'])
			.getValue();
	if (dayDiff(start, end) > 31) {
		Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
		return false;

	}
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.qinsen.cdm.queryRecords',
			templateFilename : 'ks_inst_caidiemo'
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

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onAdd = function() {
	this.inputWindow.produceDt.setValue(new Date());
	this.inputWindow.show();
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.dealTumoBatchNo = function() {
	var _this = this;
	var batchNo = this.inputWindow.tumoBatchNo.getValue();
	if (batchNo.length != 11 && batchNo.length != 12) {
		Ext.Msg.alert("系统提示", "膜片批次长度应为11或12位，请检查！");
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
								_this.inputWindow.orderNo
										.setValue(last.orderNo);
								_this.inputWindow.prodSpecId
										.setValue(last.prodSpecId);
								_this.inputWindow.isToMix
										.setValue(last.isToMix);
								_this.inputWindow.quantity
										.setValue(last.quantity);
								_this.inputWindow.numPerWad
										.setValue(last.numPerWad);
								_this.inputWindow.blankingSize
										.setValue(last.blankingSize);
								_this.inputWindow.denseNet
										.setValue(last.denseNet);
								_this.inputWindow.pageWidth
										.setValue(last.pageWidth);
								_this.inputWindow.tumoBatchId
										.setValue(last.tumoBatchId);
								//alert(last.tumoBatchId);
								//alert(_this.inputWindow.tumoBatchId.getValue());
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

function defectView(tumoBatchNo) {
	Ext.getCmp('cdm-defectviewwindow').tumoBatchNo = tumoBatchNo;
	var store = Ext.getCmp('cdm-defectviewwindow').listPanel.store;
	store.baseParams = {
		'condition/tumoBatchNo' : Ext.isEmpty(tumoBatchNo) ? "0" : tumoBatchNo
	};
	store.load();
	Ext.getCmp('cdm-defectviewwindow').show();

}