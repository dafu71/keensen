com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.initEvent = function() {

	var _this = this;
	
	this.getRight();
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

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var state = r.data.orderStatus;

				if (state == '正式发布') {
					Ext.Msg.alert('系统提示', '正式发布状态的不能删除');
					return false;
				}
			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var orderStatus = cell.data.orderStatus;
				var _this = this;
				if (this.opt == 'addorder') {

					if (orderStatus == '制定中' || orderStatus == '不能接单') {
						this.editWindow.show();
						this.editWindow.loadData(cell);
					} else {
						Ext.Msg.alert('系统提示', '请选择制定中记录');
						return false;
					}

				}

				if (this.opt == 'planconfirm') {

					if (orderStatus == '计划员确认') {
						this.planConfirmWindow.show();
						this.planConfirmWindow.loadData(cell);
					} else {
						Ext.Msg.alert('系统提示', '请选择计划员确认记录');
						return false;
					}

				}
				
				if (this.opt == 'storageconfirm') {

					if (orderStatus == '库存确认') {
						this.storageConfirmWindow.show();
						this.storageConfirmWindow.loadData(cell);
					} else {
						Ext.Msg.alert('系统提示', '请选择计划员确认记录');
						return false;
					}

				}
				
				if (this.opt == 'updateamount') {
					this.updateAmountWindow.show();
					this.updateAmountWindow.loadData(cell);
				}

			}, this);

	this.planConfirmWindow.activeItem.mon(this.planConfirmWindow.activeItem,
			'beforeSave', function() {
				var orderStatus = this.planConfirmWindow.orderStatus.getValue();
				if (!Ext.isEmpty(orderStatus) && orderStatus == '正式发布') {
					var specId = this.planConfirmWindow.specId.getValue();
					if (Ext.isEmpty(specId)) {
						Ext.Msg.alert('系统提示', '请选择膜片生产型号');
						return false;
					}
				}

			}, this);
			
	this.updateAmountWindow.activeItem.mon(this.updateAmountWindow.activeItem, 'afterload',
			function(win, data) {

				var amount = data.amount;
				this.updateAmountWindow.ext12.setMaxValue(amount);

			}, this);

}


com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

	
com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onSingleSelect = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}
// 模板文件下载
com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onDown = function() {

	var fname = "ks_yxorder_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
}

// 弹出文件上传选择窗口
com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.doUpload = function() {
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

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onAddOrder = function() {
	if (this.onSingleSelect()) {
		this.opt = 'addorder';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onUpdateAmount = function() {
	if (this.onSingleSelect()) {
		this.opt = 'updateamount';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}


com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();
		}
	}
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onPlanConfirm = function() {
	if (this.onSingleSelect()) {
		this.opt = 'planconfirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onStorageConfirm = function() {
	if (this.onSingleSelect()) {
		this.opt = 'storageconfirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

// 获取权限
com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.getRight = function() {
	var _this = this;
	Ext.Ajax.request({
		url : "produce/diaphragm/ship/yxorderbase/js/right.json",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			var data = ret.data;
			var yx = data[0].yx;			
			var jhy = data[0].jhy;
			var kc = data[0].kc;
			
			_this.listPanel.addOrderBtn.setVisible(yx.indexOf(uid) != -1);
			_this.listPanel.updateAmountBtn.setVisible(yx.indexOf(uid) != -1);
			_this.listPanel.confirmBtn.setVisible(jhy.indexOf(uid) != -1);
			_this.listPanel.storageConfirmBtn.setVisible(jhy.indexOf(uid) != -1 || kc.indexOf(uid) != -1);
			_this.listPanel.delBtn.setVisible(jhy.indexOf(uid) != -1);
			
			Ext.getCmp(importExcelBtnId).setVisible(jhy.indexOf(uid) != -1 || yx.indexOf(uid) != -1);
		},
		callback : function() {
		}
	})
}