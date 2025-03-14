com.keensen.ump.produce.component.mpselectMgr.prototype.initEvent = function() {

	var _this = this;
	this.modifyStockTime();
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		this.queryPanel.getForm().findField('condition/tumoBatchNo')
				.setValue('');
		var store = this.listPanel.store;
		var batchNoStr = this.queryPanel.form
				.findField("condition/tumoBatchNo2").getValue();

		var produceDtStart = this.queryPanel.form
				.findField("condition/produceDtStart").getValue();
		var produceDtEnd = this.queryPanel.form
				.findField("condition/produceDtEnd").getValue();

		var produceYear = this.queryPanel.form
				.findField("condition/produceYear").getValue();
		var produceMonth = this.queryPanel.form
				.findField("condition/produceMonth").getValue();

		// if (Ext.isEmpty(batchNoStr)
		// && (Ext.isEmpty(produceDtStart) || Ext.isEmpty(produceDtEnd))
		// && (Ext.isEmpty(produceYear) || Ext.isEmpty(produceMonth))) {
		// Ext.Msg.alert("系统提示", "请输入批号或者选择查询时间段或者选择生产月份！");
		// return false;
		// }

		if (!Ext.isEmpty(batchNoStr)) {
			var regEx = new RegExp("\\n", "gi");
			batchNoStr = batchNoStr.replace(regEx, ",");
			batchNoStr = batchNoStr.replaceAll('，', ',');
			batchNoStr = batchNoStr.replaceAll(' ', '');
			var arr = [];
			arr = batchNoStr.split(',');
			if (arr.length > 999) {
				// Ext.Msg.alert("系统提示", "批号数量不能超过999条，否则无法挑选！");
				// return false;
			}

			var arr2 = [];
			for (var i = 0; i < arr.length; i++) {
				arr2.push("'" + arr[i] + "'");
			}
			this.queryPanel.getForm().findField('condition/tumoBatchNo')
					.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
		}

		if (dayDiff(produceDtStart, produceDtEnd) > 33) {
			// Ext.Msg.alert("系统提示", "查询间隔日期不能大于33天！");
			// return false;

		}

		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 查询事件
	this.queryPanel3.mon(this.queryPanel3, 'query', function(form, vals) {
		var batchNoStr = this.queryPanel3.form
				.findField("condition/tumoBatchNo2").getValue();
		if (!Ext.isEmpty(batchNoStr)) {
			var regEx = new RegExp("\\n", "gi");
			batchNoStr = batchNoStr.replace(regEx, ",");
			batchNoStr = batchNoStr.replaceAll('，', ',');
			batchNoStr = batchNoStr.replaceAll(' ', '');
			var arr = [];
			arr = batchNoStr.split(',');
			if (arr.length > 999) {
				// Ext.Msg.alert("系统提示", "批号数量不能超过999条，否则无法挑选！");
				// return false;
			}

			var arr2 = [];
			for (var i = 0; i < arr.length; i++) {
				arr2.push("'" + arr[i] + "'");
			}
			this.queryPanel3.getForm().findField('condition/tumoBatchNo')
					.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
		}
		var store = this.listPanel3.store;
		store.baseParams = this.queryPanel3.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel3.pagingToolbar.pageSize
					}
				});
	}, this);

	// 查询事件
	this.queryPanel5.mon(this.queryPanel5, 'query', function(form, vals) {

		var store = this.listPanel5.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel5.pagingToolbar.pageSize
					}
				});
	}, this);

	// 查询事件
	this.queryPanel6.mon(this.queryPanel6, 'query', function(form, vals) {
		var store = this.listPanel6.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel6.pagingToolbar.pageSize
					}
				});
	}, this);

	this.listPanel.store.on('load', function() {
				if (_this.filterWindow.isVisible()) {
					var title = '筛选' + '&nbsp;&nbsp;膜片共'
							+ _this.listPanel.store.getTotalCount() + '只';
					_this.filterWindow.setTitle(title);
				}
			})

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
}

// 模板文件下载

com.keensen.ump.produce.component.mpselectMgr.prototype.onDown2 = function() {
	var fname = "ks_component_stock_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.mpselectMgr.prototype.importExcel2 = function() {
	importOpt = 'stock';
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.component.mpselectMgr.prototype.doUpload = function() {
	var _this = this;
	// var store = this.listPanel.store;
	this.uploadInputPanel = this.excelUploadWin.getComponent('uploadForm');
	// 校验
	this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
	// 文件名
	this.filePath = this.fileUploadObj.getValue();
	// 文件后缀
	this.sfileName = this.filePath.split(".");

	if (this.sfileName[1] == null || this.sfileName[1].toLowerCase() != "xls") {
		Ext.MessageBox.show({
					title : '操作提示',
					buttons : Ext.MessageBox.OK,
					msg : '文件必须为Excel xls文件',
					icon : Ext.MessageBox.ERROR
				});
		return false;
	}
	if (this.uploadInputPanel.form.isValid()) {
		// var url = this.uploadInputPanel.saveUrl;
		var url = 'com.keensen.ump.produce.component.importStock4Select.flow';
		this.uploadInputPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "上传数据中...",
					success : function(form, action) {
						var result = action.result;
						if (result.success) {
							_this.excelUploadWin.hide();
							Ext.Msg.alert("操作提示", result.msg == "1"
											? "批量上传成功"
											: result.msg, function() {
										_this.listPanel.store.load();
										_this.modifyStockTime();
									}, this);
						}
					},
					failure : function(form, action) {
						Ext.MessageBox.show({
									title : '操作提示',
									buttons : Ext.MessageBox.OK,
									msg : "导入失败，请检查文件格式或网络是否正常",
									icon : Ext.MessageBox.ERROR
								});
					}
				});
	}

}

com.keensen.ump.produce.component.mpselectMgr.prototype.onQuery = function() {

	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 0) {
		var arr = [];
		var arr2 = [];
		for (var i = 0; i < C.length; i++) {
			arr.push(C[i].data.mpBatchNo);
			arr2.push("'" + C[i].data.mpBatchNo + "'");
		}
		this.queryPanel3.getForm().findField('condition/tumoBatchNo2')
				.setValue(arr.join(","));
		var store = this.listPanel3.store;
		store.baseParams = {
			'condition/tumoBatchNo' : arr2.join(",")
		};
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel3.pagingToolbar.pageSize
					}
				});

	} else {
		this.queryPanel3.getForm().findField('condition/tumoBatchNo2')
				.setValue();
	}
	this.chooseWindow.show();
}

com.keensen.ump.produce.component.mpselectMgr.prototype.onQuery2 = function() {
	this.viewWindow.show();

}

com.keensen.ump.produce.component.mpselectMgr.prototype.exportExcel2 = function() {
	var _this = this;
	var tumoBatchNo2 = this.queryPanel.getForm()
			.findField('condition/tumoBatchNo2').getValue();

	if (!Ext.isEmpty(tumoBatchNo2)) {

		var regEx = new RegExp("\\n", "gi");
		tumoBatchNo2 = tumoBatchNo2.replace(regEx, ",");
		tumoBatchNo2 = tumoBatchNo2.replaceAll('，', ',');
		tumoBatchNo2 = tumoBatchNo2.replaceAll(' ', '');

		var arr = [];
		arr = tumoBatchNo2.split(',');
		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push("'" + arr[i] + "'");
		}
		this.queryPanel.getForm().findField('condition/tumoBatchNo')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));

	}
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
			'map/limited' : '10000',
			namingsql : 'com.keensen.ump.produce.component.mpselect.query',
			templateFilename : 'ks_component_mpquery_export'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var fname = ret.fname;
				if (!Ext.isEmpty(fname)) {
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				} else {
					Ext.Msg.alert("系统提示", ret.msg);
					return false;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.mpselectMgr.prototype.exportExcel = function() {
	var _this = this;

	/*
	 * var tumoBatchNo2 = this.queryPanel3.getForm()
	 * .findField('condition/tumoBatchNo2').getValue(); if
	 * (!Ext.isEmpty(tumoBatchNo2)) { var arr = []; arr =
	 * tumoBatchNo2.split(','); var arr2 = []; for (var i = 0; i < arr.length;
	 * i++) { arr2.push("'" + arr[i] + "'"); }
	 * this.queryPanel3.getForm().findField('condition/tumoBatchNo')
	 * .setValue(arr2.join(",") == "''" ? null : arr2.join(",")); }
	 */

	var batchNoStr = this.queryPanel3.form.findField("condition/tumoBatchNo2")
			.getValue();
	if (!Ext.isEmpty(batchNoStr)) {
		var regEx = new RegExp("\\n", "gi");
		batchNoStr = batchNoStr.replace(regEx, ",");
		batchNoStr = batchNoStr.replaceAll('，', ',');
		batchNoStr = batchNoStr.replaceAll(' ', '');
		var arr = [];
		arr = batchNoStr.split(',');
		if (arr.length > 999) {
			// Ext.Msg.alert("系统提示", "批号数量不能超过999条，否则无法挑选！");
			// return false;
		}

		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push("'" + arr[i] + "'");
		}
		this.queryPanel3.getForm().findField('condition/tumoBatchNo')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
	}

	var daochu = _this.queryPanel3.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '10000',
			namingsql : 'com.keensen.ump.produce.component.mpselect.querySelect',
			templateFilename : 'ks_component_mpselect_export'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);

			if (ret.success) {
				var fname = ret.fname;
				if (!Ext.isEmpty(fname)) {
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				} else {
					Ext.Msg.alert("系统提示", ret.msg);
					return false;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.mpselectMgr.prototype.exportExcel3 = function() {
	var _this = this;

	var daochu = _this.queryPanel5.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '10000',
			namingsql : 'com.keensen.ump.produce.component.select.selectMp',
			templateFilename : 'ks_component_mp_yj_export'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var fname = ret.fname;
				if (!Ext.isEmpty(fname)) {
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				} else {
					Ext.Msg.alert("系统提示", ret.msg);
					return false;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.mpselectMgr.prototype.destroy = function() {
	this.excelUploadWin.destroy();
	this.chooseWindow.destroy();
	this.viewWindow.destroy();
	this.standWindow.destroy();
	this.addstandWindow.destroy();
}

com.keensen.ump.produce.component.mpselectMgr.prototype.onStand = function() {
	this.standWindow.show();
}

com.keensen.ump.produce.component.mpselectMgr.prototype.onAddStand = function() {
	this.addstandWindow.show();
}

com.keensen.ump.produce.component.mpselectMgr.prototype.onDelStand = function() {
	this.listPanel6.onDel();
}

// 库存更新时间
com.keensen.ump.produce.component.mpselectMgr.prototype.modifyStockTime = function() {
	var _this = this;
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.mpselect.queryStockTime.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var stockTime = ret.stockTime;
				if (!Ext.isEmpty(stockTime)) {
					_this.listPanel.stockTime
							.setValue('库存更新时间:<font color=red>' + stockTime
									+ '</font>');
				}

			}

		},
		callback : function() {

		}
	})
}

com.keensen.ump.produce.component.mpselectMgr.prototype.onReCalc = function() {
	var _this = this;
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records != null && records.length == 1) {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		var r = records[0];
		var tumoBatchNo = r.data.mpBatchNo;
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.component.mpselect.insertSelect2.biz.ext",
			jsonData : {
				'param/tumoBatchNo' : tumoBatchNo
			},
			method : "post",
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					Ext.Msg.alert("系统提示", "已重新计算", function() {
								_this.listPanel.refresh();
							});

				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})

	} else {
		Ext.Msg.alert("系统提示", '请选择一条记录');
		return false;
	}

}

com.keensen.ump.produce.component.mpselectMgr.prototype.calculate = function() {
	var _this = this;
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records != null) {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.component.mpselect.insertSelect.biz.ext",
			method : "post",
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					Ext.Msg.alert("系统提示", "已重新计算", function() {
								_this.listPanel.refresh();
							});

				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})

	}
}

com.keensen.ump.produce.component.mpselectMgr.prototype.onChooseOrder = function() {
	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.mpselectMgr.prototype.onChooseSingleOrder = function() {
	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var orderNo = B[0].get('orderNo');
		var prodSpecId = B[0].get('materSpecId');
		this.filterPanel.orderNo.setValue(orderNo);
		this.filterPanel.prodSpecId.setValue(prodSpecId);
		this.chooseSingleOrderWindow.hide();

	}
}

// 筛选条件
com.keensen.ump.produce.component.mpselectMgr.prototype.onFilter = function() {
	this.filterWindow.show();
}

com.keensen.ump.produce.component.mpselectMgr.prototype.onDoFilter = function() {
	var store = this.listPanel3.store;
	store.baseParams = this.filterPanel.getForm().getValues();
	store.load({
				params : {
					"pageCond/begin" : 0,
					"pageCond/length" : this.listPanel3.pagingToolbar.pageSize
				}
			});
}

function dayDiff(start, end) {
	var datediff = (new Date(end)) - (new Date(start));
	datediff = datediff / 24 / 60 / 60 / 1000;
	return datediff;

}