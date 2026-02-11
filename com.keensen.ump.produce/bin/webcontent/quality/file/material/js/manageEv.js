com.keensen.ump.produce.quality.file.MaterialMgr.prototype.initEvent = function() {

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

				if (this.opt == 'edit') {
					this.editWindow.show();
					this.editWindow.loadData(cell);
				}
				if (this.opt == 'edit2') {
					this.pictureUploadWin.show();
					this.pictureUploadWin.relationId.setValue(cell.get('id'));
				}
			}, this);

}

com.keensen.ump.produce.quality.file.MaterialMgr.prototype.onEdit = function() {

	this.opt = 'edit';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.quality.file.MaterialMgr.prototype.onEdit2 = function() {

	this.opt = 'edit2';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.quality.file.MaterialMgr.prototype.onAdd = function() {

	this.photoUploadWin.show();

}

com.keensen.ump.produce.quality.file.MaterialMgr.prototype.destroy = function() {
	this.photoUploadWin.destroy();
}

com.keensen.ump.produce.quality.file.MaterialMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

// 上传照片
com.keensen.ump.produce.quality.file.MaterialMgr.prototype.doUploadPhoto = function() {

	var _this = this;
	var uploadInputPanel = this.photoUploadWin.getComponent('uploadForm');
	// 校验
	var fileUploadObj = uploadInputPanel.form.findField("uploadFile");
	// 文件名
	var filePath = fileUploadObj.getValue();
	// 文件后缀
	var sfileName = filePath.split(".");

	var array = ['cdr'];
	var extname = sfileName[1].toLowerCase();
	if (extname == null || array.indexOf(extname) == -1) {
		Ext.MessageBox.show({
					title : '操作提示',
					buttons : Ext.MessageBox.OK,
					msg : '文件必须为cdr文件',
					icon : Ext.MessageBox.ERROR
				});
		return false;
	}
	if (uploadInputPanel.form.isValid()) {

		var url = 'com.keensen.ump.produce.quality.uploadFileMaterial.flow';
		uploadInputPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "上传数据中...",
					success : function(form, action) {
						var result = action.result;
						var msg = result.msg;

						if (result.success) {
							if (msg == '0') {
								Ext.Msg.alert('系统提示', '保存失败，请检查文件名');
								return false;
							} else {
								// _this.photoUploadWin.hide();
								_this.photoUploadWin.getComponent('uploadForm').form
										.reset();
								_this.listPanel.store.reload();
							}

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

// 上传截图
com.keensen.ump.produce.quality.file.MaterialMgr.prototype.doUploadPicture = function() {

	var _this = this;
	var uploadInputPanel = this.pictureUploadWin.getComponent('uploadForm');
	// 校验
	var fileUploadObj = uploadInputPanel.form.findField("uploadFile");
	// 文件名
	var filePath = fileUploadObj.getValue();
	// 文件后缀
	var sfileName = filePath.split(".");

	var array = ['bmp', 'jpg', 'png', 'tif', 'gif', 'pcx', 'tga', 'exif',
			'fpx', 'svg', 'psd', 'cdr', 'pcd', 'dxf', 'ufo', 'eps', 'ai',
			'raw', 'wmf', 'webp', 'avif', 'apng'];
	var extname = sfileName[1].toLowerCase();
	if (extname == null || array.indexOf(extname) == -1) {
		Ext.MessageBox.show({
					title : '操作提示',
					buttons : Ext.MessageBox.OK,
					msg : '文件必须为图片文件',
					icon : Ext.MessageBox.ERROR
				});
		return false;
	}
	if (uploadInputPanel.form.isValid()) {

		var url = 'com.keensen.ump.produce.quality.uploadPictureFileMaterial.flow';
		uploadInputPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "上传数据中...",
					success : function(form, action) {
						var result = action.result;
						var msg = result.msg;
						if (result.success) {
							if (msg == '0') {
								Ext.Msg.alert('系统提示', '保存失败');
								return false;
							} else {
								_this.pictureUploadWin.hide();
								_this.pictureUploadWin
										.getComponent('uploadForm').form
										.reset();
								_this.listPanel.store.reload();
							}

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