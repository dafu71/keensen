com.keensen.ump.qinsen.produce.raosiMgr.prototype.initEvent = function() {
	var _this = this;

	// 查询事件
	this.queryChooseSingleOrderPanel.mon(this.queryChooseSingleOrderPanel,
			'query', function(form, vals) {
				var store = this.chooseSingleOrderListPanel.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseSingleOrderListPanel.pagingToolbar.pageSize
					}
				});
			}, this);

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
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

	this.raosiAddWindow.teamId.store.on('load', function() {
				if (teamId && teamId != 'null') {
					_this.raosiAddWindow.teamId.setValue(teamId);
				}
			})

	this.raosiAddWindow.lineId.store.on('load', function() {
				var cookieLineId = Ext.util.Cookies
						.get('raosiInput.lineSel.defaultValue');
				if (cookieLineId && cookieLineId != 'null') {
					_this.raosiAddWindow.lineId.setValue(cookieLineId);
				}
			})

	this.raosiAddWindow.lineId.mon(this.raosiAddWindow.lineId, "change",
			function(thisFiled, newValue, oldValue) {
				var now = new Date();
				var expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);// 保存一年
				Ext.util.Cookies.set('raosiInput.lineSel.defaultValue',
						newValue, expiry);// 写入cookie
			});

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				if (C.length > 1) {
					Ext.Msg.alert('系统提示', '不能批量删除');
					return false;
				}
				var r = C[0];
				var recordId = r.data.recordId;
				recordId = recordId + '';

				if (recordId.substr(0, 1) != '2') {
					// Ext.Msg.alert('系统提示', '一期数据不能删除');
					// return false;
				}
			})

	this.raosiEditWindow.activeItem.mon(this.raosiEditWindow.activeItem,
			'afterload', function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.produceDt) {
					data.produceDt = data.produceDt.split('.')[0];
					var date1 = data.produceDt.replace(regEx, "/");
					this.raosiEditWindow.items.items[0].form
							.findField('entity/produceDt')
							.setValue(new Date(date1));
				}

			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var recordId = cell.data.recordId;
				recordId = recordId + '';
				if (recordId.substr(0, 1) != '2') {
					// Ext.Msg.alert('系统提示', '一期数据不能修改');
					// return false;
				}
				this.raosiEditWindow.show();
				this.raosiEditWindow.loadData(cell);
			}, this);
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.qinsen.produce.raosiMgr.prototype.onAdd = function() {
	this.raosiAddWindow.show();
	this.raosiAddWindow.batchNo.focus();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.saveRecInfo = function() {
	this.raosiAddWindow.saveData();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.onScan = function() {
	// 先加载订单信息
	var _this = this;
	var batchNo = _this.raosiAddWindow.batchNo.getValue();
	if (!Ext.isEmpty(batchNo)) {
		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
					url : "com.keensen.ump.qinsen.raosi.query4Workorder.biz.ext",
					method : "post",
					jsonData : {
						'condition/batchNo' : batchNo
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							if (!Ext.isEmpty(ret.data)) {
								var dd = ret.data[0];
								_this.raosiAddWindow.orderNo
										.setValue(dd.orderNo);
								_this.raosiAddWindow.orderType
										.setValue(dd.orderType);
								_this.raosiAddWindow.materSpecName2
										.setValue(dd.materSpecName2);
								_this.raosiAddWindow.materSpecName
										.setValue(dd.materSpecName);
								_this.raosiAddWindow.orderAmount
										.setValue(dd.orderAmount);
								_this.raosiAddWindow.qjAmount
										.setValue(dd.qjAmount);
								_this.raosiAddWindow.tape.setValue(dd.tape);
								_this.raosiAddWindow.lid.setValue(dd.lid);
								_this.raosiAddWindow.snRegular
										.setValue(dd.snRegular);
								_this.raosiAddWindow.makeLabel
										.setValue(dd.makeLabel);
								_this.raosiAddWindow.labelDouble
										.setValue(dd.labelDouble);
								_this.raosiAddWindow.labelDrawingCode
										.setValue(dd.labelDrawingCode);
										
								_this.raosiAddWindow.prodRemark
										.setValue(dd.prodRemark);
								_this.raosiAddWindow.saveData();
							} else {
								Ext.Msg.alert("系统提示", "该元件序号不存在，请检查！",
										function() {
											_this.raosiAddWindow.batchNo
													.setValue('');
											_this.raosiAddWindow.batchNo
													.focus().defer(100);
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
	// this.raosiAddWindow.saveData();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.destroy = function() {
	this.raosiAddWindow.destroy();
	this.raosiEditWindow.destroy();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.exportExcel = function() {
	var _this = this;

	var start = this.queryPanel.getForm()
			.findField(['condition/produceBeginDate']).getValue();
	var end = this.queryPanel.getForm().findField(['condition/produceEndDate'])
			.getValue();
	if (dayDiff(start, end) > 93) {
		Ext.Msg.alert("系统提示", "导出间隔日期不能大于3个月！");
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
			namingsql : 'com.keensen.ump.qinsen.raosi.queryRecords',
			templateFilename : 'ks_inst_raosi'
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

com.keensen.ump.qinsen.produce.raosiMgr.prototype.onModiOrder = function() {

	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}
	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.onChooseSingleOrder = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}
	var arr = new Array();
	for (var i = 0; i < records.length; i++) {

		// var recordId = records[i].get('recordId');
		var recordId = records[i].get('qjBatchId');

		recordId = recordId + '';

		if (recordId.substr(0, 1) != '2') {
			// Ext.Msg.alert('系统提示', '一期数据不能修改');
			// return false;
		}
		arr.push(recordId);
	}

	var orderNo = '';
	var prodSpecId = '';
	var orderNo = '';
	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		orderNo = B[0].get('orderNo');
		prodSpecId = B[0].get('materSpecId');

	}
	
	if (Ext.isEmpty(orderNo)) {
		Ext.Msg.alert('系统提示', '请选择订单号');
		return false;
	}
	
	Ext.Msg.confirm('提示', '共' + records.length + '个批次，您确定要修改这些产品的订单号？',
			function(btn) {
				if (btn === 'yes') {

					_this.requestMask = this.requestMask
							|| new Ext.LoadMask(Ext.getBody(), {
										msg : "后台正在操作,请稍候!"
									});
					_this.requestMask.show();
					Ext.Ajax.request({
								url : "com.keensen.ump.qinsen.raosi.modiOrderAndProdSpecId.biz.ext",
								method : "post",
								jsonData : {
									orderNo : orderNo,
									prodSpecId : prodSpecId,
									recordIds : arr.join(',')
								},
								success : function(resp) {
									var ret = Ext.decode(resp.responseText);
									if (ret.success) {
										Ext.Msg.alert("系统提示", "操作成功！",
												function() {
													_this.listPanel.store
															.load();
													_this.chooseSingleOrderWindow.hide();

												})
									} else {
										Ext.Msg.alert("系统提示", "修改订单号失败！")

									}

								},
								callback : function() {
									_this.requestMask.hide()
								}
							})
				}
			});

}