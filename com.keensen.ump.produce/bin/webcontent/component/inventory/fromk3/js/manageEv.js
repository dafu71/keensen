com.keensen.ump.produce.component.inventory.K3StockMgr.prototype.initEvent = function() {
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
}

com.keensen.ump.produce.component.inventory.K3StockMgr.prototype.onDelete = function() {

	this.listPanel.onDel();

}

com.keensen.ump.produce.component.inventory.K3StockMgr.prototype.exportExcel = function() {

}

com.keensen.ump.produce.component.inventory.K3StockMgr.prototype.onDown = function() {

	var fname = "k3-template.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.inventory.K3StockMgr.prototype.importExcel = function() {
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
com.keensen.ump.produce.component.inventory.K3StockMgr.prototype.doUpload = function() {
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