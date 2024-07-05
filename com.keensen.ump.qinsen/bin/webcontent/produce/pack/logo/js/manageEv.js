com.keensen.ump.qinsen.produce.marklogoMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

				var store = this.listPanel.store;

				store.baseParams = this.queryPanel.getForm().getValues();
				store.load({});
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var recordId = cell.data.recordId;
				recordId = recordId + '';
				if (recordId.substr(0, 1) != '2') {
					//Ext.Msg.alert('系统提示', '一期数据不能修改');
					//return false;
				}
				this.logoEditWindow.show();
				this.logoEditWindow.loadData(cell);
			}, this);

	this.logoEditWindow.activeItem.mon(this.logoEditWindow.activeItem,
			'afterload', function(win, data) {
				var imgUri = data.imgUri;
				this.logoEditWindow.img
						.update('<img src="'
								+ rootUrl
								+ imgUri
								+ '?ver='
								+ data.changeDt
								+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />');

			}, this);

}

com.keensen.ump.qinsen.produce.marklogoMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

// 弹出文件上传选择窗口
com.keensen.ump.qinsen.produce.marklogoMgr.prototype.onAdd = function() {
	this.uploadForm = this.uploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.uploadWin.show();

}

// 文件上传
com.keensen.ump.qinsen.produce.marklogoMgr.prototype.doUpload = function() {
	var _this = this;
	this.uploadInputPanel = this.uploadWin.getComponent('uploadForm');
	// 校验
	this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
	// 文件名
	this.filePath = this.fileUploadObj.getValue();
	// 文件后缀
	this.sfileName = this.filePath.split(".");

	var array = ['bmp', 'jpg', 'png', 'tif', 'gif', 'pcx', 'tga', 'exif',
			'fpx', 'svg', 'psd', 'cdr', 'pcd', 'dxf', 'ufo', 'eps', 'ai',
			'raw', 'wmf', 'webp', 'avif', 'apng'];
	var extname = this.sfileName[1].toLowerCase();
	if (extname == null || array.indexOf(extname) == -1) {
		Ext.MessageBox.show({
					title : '操作提示',
					buttons : Ext.MessageBox.OK,
					msg : '文件必须为图片文件',
					icon : Ext.MessageBox.ERROR
				});
		return false;
	}
	if (this.uploadInputPanel.form.isValid()) {
		var url = 'com.keensen.ump.qinsen.uploadMarkLogo.flow';
		this.uploadInputPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "上传数据中...",
					success : function(form, action) {
						var result = action.result;
						var fname = result.msg;
						fname = '/myupload/marklogo/' + fname;
						if (result.success) {
							_this.uploadWin.hide();
							_this.listPanel.store.baseParams = _this.queryPanel
									.getForm().getValues();
							_this.listPanel.store.load();
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