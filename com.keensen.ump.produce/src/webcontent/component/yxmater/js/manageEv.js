com.keensen.ump.produce.component.YxmaterMgr.prototype.initEvent = function() {
	var me = this;
	me.inputWindow.materCode.setDisabled(true);
	me.editWindow2.materCode.setDisabled(true);
	me.editWindow.materCode.setDisabled(true);
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
				var obj = Ext.isEmpty(cell.get('baseId'))
						? this.editWindow2
						: this.editWindow;
				obj.show();
				obj.loadData(cell);
			}, this);

	this.yxorderStockAmountStore.on('load', function() {
				me.inputWindow.materCode.setDisabled(false);
				me.editWindow2.materCode.setDisabled(false);
				me.editWindow.materCode.setDisabled(false);
			})

}

com.keensen.ump.produce.component.YxmaterMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.component.YxmaterMgr.prototype.onDel = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	}
	var C = A.getSelectionModel().getSelections();
	if (C.length > 1) {
		Ext.Msg.alert("系统提示", "不能批量删除！")
	} else {
		this.listPanel.onDel();
	}
};

com.keensen.ump.produce.component.YxmaterMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.editWindow2.destroy();
}

com.keensen.ump.produce.component.YxmaterMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel,
			this.listPanel,
			'订单物料',
			'com.keensen.ump.produce.component.yxorderbase.queryYxOrderMCConfirm',
			'0,1');

}

com.keensen.ump.produce.component.YxmaterMgr.prototype.onFill = function() {
	var labelDrawingCode = this.editWindow.labelDrawingCode.getValue();
	if (Ext.isEmpty(labelDrawingCode)) {
		Ext.Msg.alert("系统提示", "标签图号为空，无法填充!");
		return false;
	}

	var i = this.baseMaterStore.find('drawingCode', labelDrawingCode);
	if (i == -1) {
		Ext.Msg.alert("系统提示", "没有匹配到数据!");
		return false;
	}
	var rec2 = this.baseMaterStore.getAt(i);
	var materCode = rec2.get('materCode');
	var specName = rec2.get('specName');
	var unit = rec2.get('unit');
	var materName = rec2.get('materName');
	this.editWindow.materName.setValue(materName);
	this.editWindow.materCode.setValue(materCode);
	this.editWindow.materType.setValue('标签');
	this.editWindow.unit.setValue(unit);
	this.editWindow.specName.setValue(specName);
}

com.keensen.ump.produce.component.YxmaterMgr.prototype.onFill2 = function() {
	var markDrawingCode = this.editWindow.markDrawingCode.getValue();
	if (Ext.isEmpty(markDrawingCode)) {
		Ext.Msg.alert("系统提示", "唛头图号为空，无法填充!");
		return false;
	}
	var i = this.baseMaterStore.find('drawingCode', markDrawingCode);
	if (i == -1) {
		Ext.Msg.alert("系统提示", "没有匹配到数据!");
		return false;
	}
	var rec2 = this.baseMaterStore.getAt(i);
	var materCode = rec2.get('materCode');
	var specName = rec2.get('specName');
	var unit = rec2.get('unit');
	var materName = rec2.get('materName');
	this.editWindow.materName.setValue(materName);
	this.editWindow.materCode.setValue(materCode);
	this.editWindow.materType.setValue('唛头');
	this.editWindow.unit.setValue(unit);
	this.editWindow.specName.setValue(specName);
}

com.keensen.ump.produce.component.YxmaterMgr.prototype.onFill3 = function() {

	var obj = this.inputWindow.hidden ? (this.editWindow.hidden
			? this.editWindow2
			: this.editWindow) : this.inputWindow;

	var materCode = obj.materCode.getValue();
	if (Ext.isEmpty(materCode)) {
		Ext.Msg.alert("系统提示", "物料长代码为空，无法填充!");
		return false;
	}
	var i = this.baseMaterStore.find('materCode', materCode);
	if (i == -1) {
		Ext.Msg.alert("系统提示", "没有匹配到数据!");
		return false;
	}
	var rec2 = this.baseMaterStore.getAt(i);

	var specName = rec2.get('specName');
	var unit = rec2.get('unit');
	var materName = rec2.get('materName');
	obj.materName.setValue(materName);
	obj.unit.setValue(unit);
	obj.specName.setValue(specName);

	var i = this.yxorderStockAmountStore.find('materCode', materCode);
	if (i == -1) {
		Ext.Msg.alert("系统提示", "没有匹配到K3库存!");
		return false;
	}
	var rec2 = this.yxorderStockAmountStore.getAt(i);
	var amount = rec2.get('amount');
	obj.k3.setValue(amount);

}

com.keensen.ump.produce.component.YxmaterMgr.prototype.onAdd = function() {
	this.inputWindow.show()
}

// 模板文件下载
com.keensen.ump.produce.component.YxmaterMgr.prototype.onDown = function() {
	var fname = "ks_component_yxorder_stock_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
}

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.YxmaterMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.component.YxmaterMgr.prototype.doUpload = function() {
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
										_this.listPanel.store.reload();
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

com.keensen.ump.produce.component.YxmaterMgr.prototype.onGoodsStateChange = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		var arr2 = []
		Ext.each(C, function(r) {
					arr.push(r.data.id);
					arr2.push(r.data.materCode);
				})
		this.goodsStateChangeWindow.form.findField('param/ids').setValue(arr
				.join(','));
		this.goodsStateChangeWindow.form.findField('param/materCodes')
				.setValue(arr2.join(','));
		this.goodsStateChangeWindow.show();
	}
}