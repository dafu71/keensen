com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.initEvent = function() {
	
	var _this = this;
	
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
    
	this.listPanel.store.on('load', function(o) {
		if (currentWindow == 'inputWindow2') {
			var obj = _this.inputWindow2.form.findField("warehousing/batchNo");
			obj.setValue('');
			_this.inputWindow2.form.findField("warehousing/position")
					.setValue('');
			_this.inputWindow2.form.findField("warehousing/amount")
					.setValue('');
			_this.inputWindow2.form.findField("warehousing/remark")
					.setValue('');
			_this.inputWindow2.form.findField("warehousing/model").setValue('');
			obj.focus(false, 100);
		}
		if (currentWindow == 'inputWindow') {
			var obj = _this.inputWindow.form.findField("warehousing/batchNo");
			obj.setValue('');
			_this.inputWindow.form.findField("warehousing/storageId")
					.setValue('');
			_this.inputWindow.form.findField("warehousing/position")
					.setValue('');
			_this.inputWindow.form.findField("warehousing/amount").setValue('');
			_this.inputWindow.form.findField("warehousing/remark").setValue('');
			_this.inputWindow.form.findField("warehousing/model").setValue('');
			obj.focus(false, 100);
		}
	});
    
	this.inputWindow2.activeItem.mon(this.inputWindow2.activeItem,
			'beforeSave', function() {
				/*
				 * var obj = this.inputWindow2.form
				 * .findField("warehousing/customerName");
				 * this.inputWindow2.form.findField("warehousing/customerCode")
				 * .setValue(obj.actualValue);
				 */
			}, this);

	this.inputWindow2.activeItem.mon(this.inputWindow2.activeItem, 'afterSave',
			function() {
				// currentWindow = 'inputWindow2';
				// this.listPanel.store.reload();

			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'afterSave',
			function() {
				// currentWindow = 'inputWindow';
				// this.listPanel.store.reload();

			}, this);

	// 增加修改事件
	/*
	 * this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
	 * this.editWindow.show(); this.editWindow.loadData(cell); }, this);
	 * this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
	 * function(gird, cell) { }, this);
	 */
}

// 扫码
com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.onScan = function() {
	var obj = this.inputWindow.form.findField("warehousing/batchNo");
	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.storage.rkdrk.queryRkdByBatchNo.biz.ext',
		jsonData : {
			"batchNo" : batchNo
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.msg != 1) {
				Ext.Msg.alert("系统提示", result.msg);
			} else {
				var data = result.data;
				this.inputWindow.form.findField("warehousing/storageId")
						.setValue(data.storageId);
				this.inputWindow.form.findField("warehousing/amount")
						.setValue(data.usefulLength);
				this.inputWindow.form.findField("warehousing/model")
						.setValue(data.materSpecCode);
				this.inputWindow.form.findField("warehousing/class")
						.setValue(data.perfFlagName);
				this.inputWindow.form.findField("warehousing/position").focus(
						false, 100);
			}
		}
	});
}

/*
 * com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.exportExcel =
 * function() { var _this = this; var daochu =
 * _this.queryPanel.getForm().getValues(); this.requestMask = this.requestMask ||
 * new Ext.LoadMask(Ext.getBody(), { msg : "后台正在操作,请稍候!" });
 * this.requestMask.show(); Ext.Ajax.request({ url :
 * "com.keensen.ump.base.storage.exportStorage.biz.ext", method : "post",
 * jsonData : daochu, success : function(resp) { var ret =
 * Ext.decode(resp.responseText); if (ret.success) { if (ret.success) { var
 * fname = ret.fname; if(Ext.isIE){
 * window.open('/default/deliverynote/seek/down4IE.jsp?fname='+fname); }else{
 * window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" +
 * fname; } } } }, callback : function() { _this.requestMask.hide() } }) }
 */

com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.onAdd = function() {
	this.inputWindow.items.items[0].batchNo.focus(false, 100);
	this.inputWindow.show();

}

com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.onAdd2 = function() {
	this.inputWindow2.form.findField("warehousing/batchNo").focus(false, 100);
	this.inputWindow2.show();

}

com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.onConfirm = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var id = C[0].data.id;
		Ext.Msg.confirm("系统提示", "是否确认入库?", function(btnText) {
			if (btnText == "yes") {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.diaphragm.storage.warehousing.confirm.biz.ext',
					jsonData : {
						"id" : id,
						"ifrecieve" : "是"
					},
					success : function(response, action) {
						A.store.load();
					}
				});
			}
		})
	}

}

// 模板文件下载
com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.down = function() {
	var fname = "warehousing.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
}

// 弹出文件上传选择窗口
com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.importwarehousing = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.doUpload = function() {
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
		var url = this.uploadInputPanel.saveUrl;
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
/*
 * com.keensen.ump.produce.diaphragm.storage.WarehousingMgr.prototype.onEdit =
 * function() { this.listPanel.onEdit(); };
 */