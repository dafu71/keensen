com.keensen.ump.produce.component.OrderMgr.prototype.destroy = function() {
	this.uploadWindow.destroy();
	this.editWindow.destroy();
	this.excelUploadWin.destroy();
	this.viewWindow.destroy();

}

function formatBatchNo(str) {
	str = str.replaceAll('，', ',');
	str = str.replaceAll(' ', '');
	var arr = [];
	arr = str.split(',');

	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		arr2.push("'" + arr[i] + "'");
	}
	
	return arr2.join(",") == "''" ? null : arr2.join(",");
}

com.keensen.ump.produce.component.OrderMgr.prototype.onBatchNo = function(
		batchNoStr) {
	if (Ext.isEmpty(batchNoStr))
		return;
	var store = this.listPanel3.store;
	var str = formatBatchNo(batchNoStr);
	store.load({
					params : {
						"map/batchNoStr" : str
					}
				});
}

com.keensen.ump.produce.component.OrderMgr.prototype.initEvent = function() {

	var _this = this;
	var orderId = '';
	var importOpt = '';

	Ext.getCmp('componentlabel').mon(Ext.getCmp('componentlabel'), 'upload',
			function(form, vals) {

				_this.uploadForm.getForm().findField('uploadFile').setValue('');
				_this.uploadForm.getForm().findField('relationId')
						.setValue(orderId);
				_this.uploadForm.getForm().findField('groupId')
						.setValue('componentlabel');
				this.uploadWindow.show();
			}, _this);

	Ext.getCmp('componentmark').mon(Ext.getCmp('componentmark'), 'upload',
			function(form, vals) {

				_this.uploadForm.getForm().findField('uploadFile').setValue('');
				_this.uploadForm.getForm().findField('relationId')
						.setValue(orderId);
				_this.uploadForm.getForm().findField('groupId')
						.setValue('componentmark');
				_this.uploadWindow.show();
			}, _this);

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				orderId = cell.get('id');
				this.editWindow.show();
				this.editWindow.loadData(cell);
				var attachmentParams = {
					relationId : orderId,
					groupId : 'componentlabel'
				}
				Ext.getCmp('componentlabel').setPostParams(attachmentParams);
				Ext.getCmp('componentlabel').loadParams = attachmentParams;
				Ext.getCmp('componentlabel').loadAttachmentRemote();
				var attachmentParams2 = {
					relationId : orderId,
					groupId : 'componentmark'
				}
				Ext.getCmp('componentmark').setPostParams(attachmentParams2);
				Ext.getCmp('componentmark').loadParams = attachmentParams2;
				Ext.getCmp('componentmark').loadAttachmentRemote();
			}, this);

	this.viewWindow.activeItem.mon(this.viewWindow.activeItem, 'afterload',
			function(win, data) {
				var componentlabelname = this.viewWindow.items.items[0].form
						.findField('componentlabelname').getValue();
				var componentlabelid = this.viewWindow.items.items[0].form
						.findField('componentlabelid').getValue();
				if (!Ext.isEmpty(componentlabelid)) {
					var nameArr = componentlabelname.split(',');
					var idArr = componentlabelid.split(',');
					var str = '';
					for (var i = 0; i <= idArr.length - 1; i++) {
						str += '<a href="com.zoomlion.hjsrm.frame.bclib.file.FileDownload.flow?fileid='
								+ idArr[i];
						str += '" target="_blank" >' + nameArr[i] + '</a>'
						str += '&nbsp;&nbsp;&nbsp;&nbsp;'
					}

					this.viewWindow.items.items[0].form
							.findField('componentlabel').setValue(str);
				}

				var componentmarkname = this.viewWindow.items.items[0].form
						.findField('componentmarkname').getValue();
				var componentmarkid = this.viewWindow.items.items[0].form
						.findField('componentmarkid').getValue();
				if (!Ext.isEmpty(componentmarkid)) {
					var nameArr = componentmarkname.split(',');
					var idArr = componentmarkid.split(',');
					var str = '';
					for (var i = 0; i <= idArr.length - 1; i++) {
						str += '<a href="com.zoomlion.hjsrm.frame.bclib.file.FileDownload.flow?fileid='
								+ idArr[i];
						str += '" target="_blank" >' + nameArr[i] + '</a>'
						str += '&nbsp;&nbsp;&nbsp;&nbsp;'
					}

					this.viewWindow.items.items[0].form
							.findField('componentmark').setValue(str);
				}
			}, this);

}

function delfile(fileid) {
	Ext.Msg.confirm("操作确认", "您确实要删除这个文件吗?", function(A) {
		if (A == "yes") {
			Ext.Ajax.request({
				url : "com.zoomlion.hjsrm.frame.bclib.file.FileBclib.deleteFile2.biz.ext",
				jsonData : {
					"fileId" : fileid
				},
				success : function(F) {
					var B = Ext.decode(F.responseText);
					if (B.success) {
						var groupId = B.groupId;
						var relationId = B.relationId;
						var store = Ext.getCmp(groupId).getStore();
						Ext.Ajax.request({
							url : "com.zoomlion.hjsrm.frame.bclib.file.FileBclib.queryFileList.biz.ext",
							jsonData : {
								'groupId' : groupId,
								'relationId' : relationId
							},
							success : function(B) {
								var A = Ext.decode(B.responseText);
								var J = A.files;
								if (J) {
									var I = [];
									for (var H = 0; H < J.length; H++) {
										var fileName = J[H].fileName;
										var fileType = fileName.substr(fileName
												.lastIndexOf('.'));
										I.push([J[H].fileId, J[H].fileId,
												J[H].fileName, fileType,
												J[H].fileSize, -4, 100,
												J[H].filePath])
									}
									store.removeAll();
									store.loadData(I);
									//Ext.getCmp('componentuploadwindow').hide();
								}
							}
						})
					}
				}
			})
		}
	})

}

com.keensen.ump.produce.component.OrderMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.component.OrderMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.component.OrderMgr.prototype.onPlan = function() {

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var orderId = r.data.id;
		var orderNo = r.data.orderNo;
		var materSpecName = r.data.materSpecName;
		var orderAmount = r.data.orderAmount;
		var orderDate = r.data.orderDate;
		this.inputPanel2.form.findField("orderId").setValue(orderId);
		this.inputPanel2.form.findField("orderNo").setValue(orderNo);
		this.inputPanel2.form.findField("materSpecName")
				.setValue(materSpecName);
		this.inputPanel2.form.findField("orderAmount").setValue(orderAmount);
		this.inputPanel2.form.findField("orderDate").setValue(orderDate);
		this.listPanel2.store.load({
					params : {
						"map/orderId" : orderId
					}
				});
		this.inputWindow2.show();
	}

};

com.keensen.ump.produce.component.OrderMgr.prototype.onSavePlan = function() {

	var _thispanel = this.inputPanel2;
	var _thislist = this.listPanel2;
	var _thatlist = this.listPanel3;
	var _this = this;
	var orderNo = this.inputPanel2.form.findField("orderNo").getValue();
	var batchNo = this.inputPanel2.form.findField("batchNo").getValue();
	this.inputPanel2.form.findField("batchNoStr")
			.setValue(formatBatchNo(batchNo));
	var records = this.listPanel3.store.getRange();
	var details = [];

	Ext.each(records, function(r) {

				var d = {
					'batchNo' : r.data['batchNo'],
					'amount' : r.data['amount'],
					'storageId' : r.data['storageId'],
					'reserve1' : r.data['reserve1'],
					'position' : r.data['position']
				}

				details.push(d);

			});
	
	if (_thispanel.form.isValid()) {
		Ext.Ajax.request({
			method : "post",
			url : _thispanel.saveUrl,
			jsonData : {
				'entity' : _this.inputPanel2.form.getValues(),
				'details' : details
			},
			success : function(F) {
					var B = Ext.decode(F.responseText);
					if (B.success) {
					Ext.MessageBox.alert("操作提示", "保存成功!", function() {
						_this.inputPanel2.form.findField("teamid").setValue('');
						_this.inputPanel2.form.findField("productDt")
								.setValue('');
						_this.inputPanel2.form.findField("batchNo")
								.setValue('');
						_this.inputPanel2.form.findField("batchNoStr")
								.setValue('');

						_this.inputPanel2.form.findField("productDemand")
								.setValue('');
						_this.inputPanel2.form.findField("remark").setValue('');
						_this.inputPanel2.form.findField("productOrder")
								.setValue('');
						_thislist.store.load({
									params : {
										"map/orderNo" : orderNo
									}
								});
						_thatlist.store.removeAll();
					})
				}
			},
			failure : function(C, B) {
				if (B.result.exception) {
					var A, E;
					if (B.result.exception.extype == "biz") {
						E = "【" + B.result.exception.message + "】";
						A = Ext.Msg.WARNING;
					} else {
						A = Ext.Msg.ERROR;
						E = "【系统发生异常！请与管理员联系】";
					}
					Ext.Msg.show({
								width : 350,
								title : "操作提示",
								msg : E,
								icon : A,
								buttons : Ext.Msg.OK
							})
				}
			}
		})
	}

};

// 模板文件下载
com.keensen.ump.produce.component.OrderMgr.prototype.onDown = function() {

	var fname = "ks_component_order_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};

com.keensen.ump.produce.component.OrderMgr.prototype.onDown2 = function() {

	var fname = "ks_component_stock_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};

com.keensen.ump.produce.component.OrderMgr.prototype.onDelPlan = function() {
	this.listPanel2.onDel();
};

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.OrderMgr.prototype.importExcel = function() {
	importOpt = 'order';
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.OrderMgr.prototype.importExcel2 = function() {
	importOpt = 'stock';
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.component.OrderMgr.prototype.doUpload = function() {
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
		var url = importOpt == 'order'
				? 'com.keensen.ump.produce.component.importOrder.flow'
				: 'com.keensen.ump.produce.component.importStock.flow';
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

com.keensen.ump.produce.component.OrderMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			var materSpecCode = A.get('materSpecCode');
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();

		}
	}
}

com.keensen.ump.produce.component.OrderMgr.prototype.onConfirm = function() {

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var orderId = r.data.id;
		var confirm = r.data.confirm;
		this.editWindow2.form.findField("entity/id").setValue(orderId);
		this.editWindow2.form.findField("entity/confirm").setValue(confirm);

		this.editWindow2.show();
	}

};
