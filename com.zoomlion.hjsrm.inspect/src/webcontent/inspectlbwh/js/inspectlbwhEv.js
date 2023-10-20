/*
 * 示例event @author rye
 */

com.zoomlion.hjsrm.inspect.Inspectlbwhmgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.excelUploadWin.destroy();

}
com.zoomlion.hjsrm.inspect.Inspectlbwhmgr.prototype.initEvent = function() {

	// 增加查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var _this = this;
		var matnr2 = _this.queryPanel.matnr2.getValue();
		var regEx = new RegExp("\\n", "gi");

		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		matnr2 = matnr2.replace(regEx, ",");

		var regEx = new RegExp(",,", "gi");
		matnr2 = matnr2.replace(regEx, ",");

		_this.queryPanel.matnr.setValue(matnr2);
		vals["condition/matnr"] = matnr2;
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
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
};
/*
 * 新增方法
 */
com.zoomlion.hjsrm.inspect.Inspectlbwhmgr.prototype.onAdd = function() {
	var _this = this;
	this.inputWindow.show();

};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.inspect.Inspectlbwhmgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.inspect.Inspectlbwhmgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

// 弹出文件上传选择窗口
com.zoomlion.hjsrm.inspect.Inspectlbwhmgr.prototype.onImportExcel = function() {

		this.uploadForm = this.excelUploadWin.getComponent('uploadForm')
				.getForm();
		this.excelUploadWin.show();
	
}
// 文件上传
com.zoomlion.hjsrm.inspect.Inspectlbwhmgr.prototype.doUpload = function() {
	var _this = this;
	var store = this.listPanel.store;
		this.uploadInputPanel = this.excelUploadWin.getComponent('uploadForm');
		// 校验
		this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
		// 文件名
		this.filePath = this.fileUploadObj.getValue();
		// 文件后缀
		this.sfileName = this.filePath.split(".");

		if (this.sfileName[1] == null
				|| this.sfileName[1].toLowerCase() != "xls") {
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
								Ext.Msg.alert("操作提示", result.msg,function() {
								store.reload();
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

// 模板文件下载
com.zoomlion.hjsrm.inspect.Inspectlbwhmgr.prototype.downFile = function() {
	var fname="Inspectlbmb.xls";
		window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
				+ fname;
}
