com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.initEvent = function() {

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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onPlan = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var orderNo = r.data.orderNo;
		var specId = r.data.specId;
		var orderamount = r.data.amount;
		this.inputPanel2.form.findField("entity/orderNo").setValue(orderNo);
		this.inputPanel2.form.findField("entity/specId").setValue(specId);
		this.inputPanel2.form.findField("entity/orderamount")
				.setValue(orderamount);
		this.listPanel2.store.load({
					params : {
						"condition/orderNo" : orderNo
					}
				});
		this.inputWindow2.show();
	}

};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onSavePlan = function() {

	var planDate = this.inputPanel2.form.findField("entity/planDate")
			.getValue();
	var planStockDate = this.inputPanel2.form.findField("entity/planStockDate")
			.getValue();
	// 计划入库日期必须小于计划发货日期
	if (planStockDate > planDate) {
		Ext.Msg.alert("系统提示", "计划入库日期必须小于计划发货日期！");
		return false;
	} else {

		var _thispanel = this.inputPanel2;
		var _thislist = this.listPanel2;
		var orderNo = this.inputPanel2.form.findField("entity/orderNo")
				.getValue();
		if (_thispanel.form.isValid()) {
			_thispanel.form.submit({
				method : "POST",
				url : _thispanel.saveUrl,
				waitTitle : "操作提示",
				waitMsg : "保存数据中",
				success : function(C, B) {
					var D = B.result;
					if (D.success) {
						Ext.MessageBox.alert("操作提示", "保存成功!", function() {
									_thislist.store.load({
												params : {
													"condition/orderNo" : orderNo
												}
											});
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
	}
};

// 模板文件下载
com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onDown = function() {

	var fname = "ks_order_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onDelPlan = function() {
	this.listPanel2.onDel();
};

// 弹出文件上传选择窗口
com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.doUpload = function() {
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

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onView = function() {
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
			this.viewWindow.items.items[0].specId.setValue(materSpecCode);
		}
	}
}