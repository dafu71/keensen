com.keensen.ump.produce.component.ProdRecordMgr.prototype.initEvent = function() {

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

	// 气检记录-换标
	this.changeTagWindow.activeItem.mon(this.changeTagWindow.activeItem,
			'beforeSave', function() {
				if (this.changeTagWindow.oldBatchNo.getValue() == this.changeTagWindow.newBatchNo
						.getValue()) {
					Ext.Msg.alert("系统提示", '新旧元件序号相同，请修改');
					return false;
				}
			}, this);

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		var batchNoStr = this.queryPanel.batchNoStr.getValue();
		var qjBatchNoStr = this.queryPanel.qjBatchNoStr.getValue();

		if (!Ext.isEmpty(batchNoStr)) {
			var batchNoStr = batchNoStr;
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
			this.queryPanel.batchNos.setValue(arr2.join(",") == "''"
					? null
					: arr2.join(","));
		} else {
			this.queryPanel.batchNos.setValue('');
		}

		if (!Ext.isEmpty(qjBatchNoStr)) {
			var batchNoStr = qjBatchNoStr;
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
			this.queryPanel.qjBatchNos.setValue(arr2.join(",") == "''"
					? null
					: arr2.join(","));
		} else {
			this.queryPanel.qjBatchNos.setValue('');
		}

		var store = this.listPanel.store;
		store.baseParams = this.queryPanel.getForm().getValues();;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {

				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {

				var source = this.inputWindow.source.getValue();
				var code = this.inputWindow.code.getValue();

				if (source == '库存元件' && Ext.isEmpty(code)) {
					Ext.Msg.alert("系统提示", "库存返工，指令单编号需必填!");
					return false;
				}

				var batchNoStr = this.inputWindow.batchNo.getValue();
				if (!Ext.isEmpty(batchNoStr)) {
					var regEx = new RegExp("\\n", "gi");
					batchNoStr = batchNoStr.replace(regEx, ",");
					batchNoStr = batchNoStr.replaceAll('，', ',');
					batchNoStr = batchNoStr.replaceAll(' ', ',');
					var arr = [];
					arr = batchNoStr.split(',');
					var arr2 = [];
					for (var i = 0; i < arr.length; i++) {
						if (!Ext.isEmpty(arr[i].trim()))
							arr2.push(arr[i].trim());
					}
					this.inputWindow.batchNos.setValue(arr2.join(",") == "''"
							? null
							: arr2.join(","));
				}

			}, this);
}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onDelete = function() {

	this.listPanel.onDel();

}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onEdit = function() {

	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onChangeLabel = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			var id = A.get('id');
			var isqj = A.get('isqj');
			if (isqj == '1') {
				// Ext.Msg.alert("系统提示", "有气检记录的请走气检换标!");
				var qjBatchNo = A.get('qjBatchNo');
				this.changeTagWindow.form.reset();
				this.changeTagWindow.produceDt.setValue(new Date());
				this.changeTagWindow.workerId.setValue(nowStaffId);
				this.changeTagWindow.oldBatchNo.setValue(qjBatchNo);
				this.changeTagWindow.show();
				return
			} else {
				this.changeLabelWindow.show();
				this.changeLabelWindow.loadData(A);
			}
		}
	}
}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onAddCopy = function() {

	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.inputWindow.show();
			this.inputWindow.client.setValue(A.get('client'));
			this.inputWindow.prodType.setValue(A.get('prodType'));
			this.inputWindow.prodName.setValue(A.get('prodName'));
			this.inputWindow.dryWet.setValue(A.get('dryWet'));
			this.inputWindow.quantity.setValue(A.get('quantity'));
			this.inputWindow.white.setValue(A.get('white'));
			this.inputWindow.label.setValue(A.get('label'));
			this.inputWindow.lid.setValue(A.get('lid'));
			this.inputWindow.bag.setValue(A.get('bag'));
			this.inputWindow.box.setValue(A.get('box'));
			this.inputWindow.locate.setValue(A.get('locate'));
			// this.inputWindow.batchNo.setValue(A.get('batchNo'));
			this.inputWindow.qijian.setValue(A.get('qijian'));
			this.inputWindow.gpd.setValue(A.get('gpd'));

			this.inputWindow.salt.setValue(A.get('salt'));
			this.inputWindow.orderNo.setValue(A.get('orderNo'));
			this.inputWindow.describe.setValue(A.get('describe'));
			this.inputWindow.deal.setValue(A.get('deal'));

		}
	}

}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onAdd = function() {

	this.inputWindow.show();

}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.exportExcel = function() {

}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onDown = function() {

	var fname = "k3-template.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.ProdRecordMgr.prototype.importExcel = function() {
	var _this = this;
	Ext.MessageBox.show({
				title : '操作提示',
				buttons : Ext.MessageBox.OK,
				msg : '文件必须为Excel xls文件，且文件名不能包含字符.和斜杠等特殊字符',
				icon : Ext.MessageBox.INFO,
				fn : function() {
					var uploadForm = _this.excelUploadWin
							.getComponent('uploadForm').getForm();
					uploadForm.reset();
					_this.excelUploadWin.show();
				}
			});

}

// 文件上传
com.keensen.ump.produce.component.ProdRecordMgr.prototype.doUpload = function() {
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
		var url = 'com.keensen.ump.produce.component.importK3Stock.flow';
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

com.keensen.ump.produce.component.ProdRecordMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '返厂元件登记',
			'com.keensen.ump.produce.component.prodrecord.queryProdRecord',
			'0,1');
}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onPrintMarks = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < C.length; i++) {
			arr.push(C[i].data.id);
		}

		var f = document.getElementById('prodrecordprintForm');
		f.ids.value = arr.join(',');

		var actionUrl = 'com.keensen.ump.produce.component.printProdRecordMarks.flow?token='
				+ Date.now();
		f.action = actionUrl;
		f.submit();

	}

}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onPrintMarks2 = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < C.length; i++) {
			arr.push(C[i].data.id);
		}

		var f = document.getElementById('prodrecordprintForm');
		f.ids.value = arr.join(',');

		var actionUrl = 'com.keensen.ump.produce.component.printProdRecordMarks.flow?isStar=Y&token='
				+ Date.now();
		f.action = actionUrl;
		f.submit();

	}

}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onModiOrder = function() {

	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onChooseSingleOrder = function() {

	var _this = this;
	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var orderNo = B[0].get('orderNo');
		var orderId = B[0].get('id');
		var prodSpecId = B[0].get('materSpecId');
		var prodSpecName = B[0].get('materSpecName');

		var A = this.listPanel;
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		var qjarr = [];
		for (var i = 0; i < C.length; i++) {
			arr.push(C[i].data.id);
			if (!Ext.isEmpty(C[i].data.qjRecordId)) {
				qjarr.push(C[i].data.qjRecordId);
			}
		}
		this.chooseSingleOrderWindow.hide();
		Ext.Msg.confirm('提示', '共' + C.length + '个批次，您确定要修改这些产品的订单号？', function(
				btn) {
			if (btn === 'yes') {
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.component.prodrecord.modifyOrderNo.biz.ext",
					method : "post",
					jsonData : {
						orderNo : orderNo,
						orderId : orderId,
						prodSpecId : prodSpecId,
						prodSpecName : prodSpecName,
						recordIds : qjarr.join(','),
						ids : arr.join(',')
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "操作成功！", function() {
										_this.listPanel.store.load();

									})
						} else {
							Ext.Msg.alert("系统提示", "修改订单号失败！")

						}

					},
					callback : function() {
						_this.requestMask.hide();

					}
				})
			}
		});

	}
}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onPrintTag = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < C.length; i++) {

			arr.push(C[i].data.id)
		}

		var f = document.getElementById('prodrecordprinttagsForm');

		f.ids.value = arr.join(',');
		var actionUrl = 'com.keensen.ump.produce.component.printProdrecordTags.flow?token='
				+ Date.now();
		f.action = actionUrl;
		f.submit();

	}

}

com.keensen.ump.produce.component.ProdRecordMgr.prototype.onModifyCode = function() {

	var _this = this;
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < C.length; i++) {
			arr.push(C[i].data.id);
		}

		Ext.Msg.prompt("修改指令单编号", "请输入指令单编号", function(btn, text) {
			if (btn == 'ok' && !Ext.isEmpty(text)) {
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.component.prodrecord.modifyCode.biz.ext",
					method : "post",
					jsonData : {
						'param/code' : text.trim(),
						'param/ids' : arr.join(',')
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "操作成功！", function() {
										_this.listPanel.store.load();

									})
						} else {
							Ext.Msg.alert("系统提示", "修改订单号失败！")

						}

					},
					callback : function() {
						_this.requestMask.hide();

					}
				})
			} else {
			}
		}, this, false, "");

	}

}