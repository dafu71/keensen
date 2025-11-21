com.keensen.ump.produce.marketing.BoxMgr.prototype.initEvent = function() {
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
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
}

com.keensen.ump.produce.marketing.BoxMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.marketing.BoxMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.marketing.BoxMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.marketing.BoxMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.marketing.BoxMgr.prototype.onUploadWindowShow = function(
		o) {

	this.uploadWin.myflag = o;
	this.uploadForm = this.uploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.uploadWin.show();
	// Ext.getCmp('uploadMarkTemplate').onClick();
	$(marktemplateupload).click();
}

// 文件上传
com.keensen.ump.produce.marketing.BoxMgr.prototype.doUpload = function() {

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
		var url = 'com.keensen.ump.produce.marketing.uploadBoxAndBag.flow';
		this.uploadInputPanel.form.submit({
			method : "POST",
			timeout : 1200,
			url : url,
			waitTitle : "操作提示",
			waitMsg : "上传数据中...",
			success : function(form, action) {
				var result = action.result;
				var fname = result.msg;
				fname = '/myupload/boxbag/' + fname;
				if (result.success) {
					_this.uploadWin.hide();
					var myflag = _this.uploadWin.myflag;
					if (myflag == '1') {
						_this.inputWindow.url2.setValue(_this.filePath);
						_this.inputWindow.url.setValue(fname);
					} else {
						var A = _this.listPanel;
						if (!A.getSelectionModel().getSelected()) {
							Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
							return;
						}
						var records = A.getSelectionModel().getSelections();
						var pkid = records[0].data.id;

						var mk = new Ext.LoadMask(Ext.getBody(), {
									msg : '正在保存，请稍候!',
									removeMask : true
								});
						mk.show();

						Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.keensen.ump.produce.marketing.appearance.saveBox.biz.ext',
							jsonData : {
								'entity/id' : pkid,
								'entity/url' : fname
							},
							success : function(response, action) {
								mk.hide();
								// 返回值处理
								_this.listPanel.store.reload();
							},
							failure : function(resp, opts) {
								mk.hide();
							}
						});
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

com.keensen.ump.produce.marketing.BoxMgr.prototype.onModifyUrl = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	this.uploadWin.myflag = 2;
	this.uploadForm = this.uploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.uploadWin.show();
	// Ext.getCmp('uploadMarkTemplate').onClick();
	$(marktemplateupload).click();

}

com.keensen.ump.produce.marketing.BoxMgr.prototype.onChangeState = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();

		var ids = []
		Ext.each(records, function(r) {
					var id = r.data.id;
					ids.push(id);
				})

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.marketing.appearance.saveBatchBoxState.biz.ext",
			method : "post",
			jsonData : {
				ids : ids.join(',')

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

com.keensen.ump.produce.marketing.BoxMgr.prototype.exportExcel = function() {
	
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '包装箱订制',
			'com.keensen.ump.produce.marketing.appearance.queryBox');
}