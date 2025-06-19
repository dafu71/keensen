com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		// var start = vals['condition/produceDtStart'];
		// var end = vals['condition/produceDtEnd'];
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

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					var mainBatchId = r.data.recordId;
					_this.mainSelected(mainBatchId)
				}).defer(100);
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

	this.detailGrid.mon(this.detailGrid, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var recordId = r.data.recordId;
				recordId = recordId + '';

				if (recordId.substr(0, 1) != '2') {
					// Ext.Msg.alert('系统提示', '一期数据不能删除');
					// return false;
				}
			})

	// 增加删除后事件
	this.listPanel.mon(this.listPanel, 'afterdel', function(gird, cell) {
				_this.detailGrid.getStore().removeAll();
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

	this.editWindow.prodSpecId.mon(this.editWindow.prodSpecId, 'select',
			function(fcombo, record, eOpts) {
				this.editWindow.blankingSize.setValue(record.data.blankingSize);
				this.editWindow.denseNet.setValue(record.data.denseNet);
				this.editWindow.pageWidth.setValue(record.data.pageWidth);
			}, this);

	// 增加修改事件
	this.detailGrid.mon(this.detailGrid, 'update', function(gird, cell) {
				var recordId = cell.data.recordId;
				recordId = recordId + '';
				if (recordId.substr(0, 1) != '2') {
					// Ext.Msg.alert('系统提示', '一期数据不能修改');
					// return false;
				}
				this.detailEditWindow.show();
				this.detailEditWindow.loadData(cell);
			}, this);
}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.mainSelected = function(
		mainBatchId) {
	this.detailGrid.store.load({
				params : {
					'condition/mainBatchId' : mainBatchId
				}
			})
}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.modiDetailRecord = function() {
	this.detailGrid.onEdit();
}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.delDetailRecord = function() {
	this.detailGrid.onDel();
}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.addDetailRecord = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "请选择一条主记录！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		this.detailAddWindow.juanMoBatchNo.setValue(r.data.batchNo);
		var regEx = new RegExp("\\-", "gi");
		if (r.data.produceDate) {
			var produceDt = r.data.produceDate.split('.')[0];
			var date1 = produceDt.replace(regEx, "/");
			this.detailAddWindow.produceDt.setValue(new Date(date1));
		}
		this.detailAddWindow.orderNo.setValue(r.data.orderNo);
		this.detailAddWindow.prodSpecId.setValue(r.data.prodSpecId);

		this.detailAddWindow.pageCnt.setValue(r.data.pageCnt);
		this.detailAddWindow.blankingSize.setValue(r.data.blankingSize);
		this.detailAddWindow.denseNet.setValue(r.data.denseNet);
		this.detailAddWindow.pageWidth.setValue(r.data.pageWidth);
		this.detailAddWindow.mainBatchId.setValue(r.data.recordId);

		this.detailAddWindow.show();
	}
}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.dealCdmBatchNo = function() {
	var _this = this;
	var cdmBatchNo = _this.detailAddWindow.cdmBatchNo.getValue();
	if (!Ext.isEmpty(cdmBatchNo)) {
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
						_this.detailAddWindow.orderNo2.setValue(dd.orderNo);
						_this.detailAddWindow.prodSpecId2
								.setValue(dd.prodSpecId);
						_this.detailAddWindow.blankingSize2
								.setValue(dd.blankingSize);
						_this.detailAddWindow.denseNet2.setValue(dd.denseNet);
						_this.detailAddWindow.pageWidth2.setValue(dd.pageWidth);
						_this.detailAddWindow.cdmBatchId.setValue(dd.recordId);// 裁叠膜批号ID
						_this.genBatchNo();
					} else {
						Ext.Msg.alert("系统提示", "该栈板号不存在，请检查！", function() {
									_this.detailAddWindow.cdmBatchNo
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

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.onPrintTag = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var rec = C[0];
		var f = document.getElementById('jmprintForm');
		f.batchIdStr.value = rec.data.recordId;
		var actionUrl = 'com.keensen.ump.qinsen.printJuanmoTags.flow?token='
				+ Date.now();
		f.action = actionUrl;
		f.submit();

		

	}
}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.onSave = function() {
	var _this = this;
	if (this.detailAddWindow.form.isValid()) {
		if (Ext.isEmpty(this.detailAddWindow.cdmBatchId.getValue())) {
			Ext.Msg.alert("系统提示", "请选择或者输入叠膜栈板号！");
			return false;
		}
		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
					url : "com.keensen.ump.qinsen.juanmo.createDetailRecord.biz.ext",
					method : "post",
					jsonData : this.detailAddWindow.form.getValues(),
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							this.detailAddWindow.close();
						}
					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
	}

}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.exportExcel = function() {
	var _this = this;

	var start = this.queryPanel.getForm()
			.findField(['condition/produceDtStart']).getValue();
	var end = this.queryPanel.getForm().findField(['condition/produceDtEnd'])
			.getValue();
			
	var lineId = this.queryPanel.lineId.getValue();
	if (dayDiff(start, end) > 31 && Ext.isEmpty(lineId) ) {
		Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
		return false;

	}
	
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '卷膜记录',
			'com.keensen.ump.qinsen.juanmo.queryRecords', '0,1');
			
	/*var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.qinsen.juanmo.queryRecords',
			templateFilename : 'ks_inst_juanmo'
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
	})*/
}

com.keensen.ump.qinsen.produce.jmrecordMgr.prototype.destroy = function() {
	this.detailAddWindow.destroy();
	this.detailEditWindow.destroy();
	this.editWindow.destroy();

}