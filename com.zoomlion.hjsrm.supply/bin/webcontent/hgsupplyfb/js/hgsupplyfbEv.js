/*
 * 
 *  刘鑫--合格供应商名录发布
 */
com.zoomlion.hjsrm.supply.HgsupplyfbMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();

}
com.zoomlion.hjsrm.supply.HgsupplyfbMgr.prototype.initEvent = function() {
	// 增加查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		var _this = this;
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
};
/*
 * 新增方法
 */
com.zoomlion.hjsrm.supply.HgsupplyfbMgr.prototype.onAdd = function() {
	this.inputWindow.show();
};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.supply.HgsupplyfbMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.zoomlion.hjsrm.supply.HgsupplyfbMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.zoomlion.hjsrm.supply.HgsupplyfbMgr.prototype.xzMb = function() {
	var fname="HgsupplyMb.xls";
		window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
				+ fname;
}
com.zoomlion.hjsrm.supply.HgsupplyfbMgr.prototype.onImportExcel = function() {
		this.uploadForm = this.excelUploadWin.getComponent('uploadForm')
				.getForm();
		this.excelUploadWin.show();
	
}
com.zoomlion.hjsrm.supply.HgsupplyfbMgr.prototype.doUpload = function() {
	var _this = this;
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
								Ext.Msg.alert("操作提示", result.msg);
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