com.keensen.ump.produce.marketing.LabelMgr.prototype.initEvent = function() {

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

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'afterSave',
			function(gird, cell) {
				this.listPanel.store.reload();
			}, this);

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec4ChooseLabel = r;
				}).defer(100);
			}, this);
}

com.keensen.ump.produce.marketing.LabelMgr.prototype.onAddLable = function() {

	this.inputWindow.form.reset();
	this.inputWindow.show();
}

com.keensen.ump.produce.marketing.LabelMgr.prototype.onDelLable = function() {

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		Ext.Msg.confirm("系统提示", "您确定要删除当前数据吗？", function(D) {
			if (D == "yes") {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.marketing.appearance.deleteLabelDrawing.biz.ext',
					jsonData : {
						"entitys/id" : id
					},
					success : function(response, action) {
						var result = Ext.decode(response.responseText);
						if (result.success) {
							Ext.Msg.alert("系统提示", "删除成功！", function() {
										A.store.reload({});

									})

						}

					}
				});
			}
		}, this)
	}
}

com.keensen.ump.produce.marketing.LabelMgr.prototype.onModifyLableUrl = function() {

	this.uploadWin4ChooseLable.myflag = 1;
	this.uploadForm4ChooseLable = this.uploadWin4ChooseLable
			.getComponent('uploadForm').getForm();
	this.uploadForm4ChooseLable.reset();
	this.uploadWin4ChooseLable.show();

}

com.keensen.ump.produce.marketing.LabelMgr.prototype.onChangeLabelStatus = function() {
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
			url : "com.keensen.ump.produce.marketing.appearance.saveBatchLabelStatus.biz.ext",
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

com.keensen.ump.produce.marketing.LabelMgr.prototype.saveLabel = function(pkid,
		field, newValue, oldValue) {

	var _this = this;
	if (Ext.isEmpty(newValue))
		return;

	var obj = {};
	obj['entity/id'] = pkid;
	obj['entity/' + field] = newValue

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在保存,请稍候!"
			});
	this.requestMask.show();

	Ext.Ajax.request({
		url : "com.keensen.ump.produce.marketing.appearance.saveLabelDrawing.biz.ext",
		method : "post",
		jsonData : obj,
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				// _this.listPanel.store.reload();
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})

}

com.keensen.ump.produce.marketing.LabelMgr.prototype.onUploadWindowShow4ChooseLable = function() {
	this.uploadWin4ChooseLable.myflag = 0;
	this.uploadForm4ChooseLable = this.uploadWin4ChooseLable
			.getComponent('uploadForm').getForm();
	this.uploadForm4ChooseLable.reset();
	this.uploadWin4ChooseLable.show();
	// Ext.getCmp('uploadMarkTemplate').onClick();
	// $('#marktemplateupload4ChooseLable').click();

}

// 文件上传
com.keensen.ump.produce.marketing.LabelMgr.prototype.doUpload4ChooseLable = function() {

	var _this = this;
	var uploadInputPanel4ChooseLable = this.uploadWin4ChooseLable
			.getComponent('uploadForm');
	// 校验
	var fileUploadObj = uploadInputPanel4ChooseLable.form
			.findField("uploadFile");
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
	if (uploadInputPanel4ChooseLable.form.isValid()) {
		var url = 'com.keensen.ump.produce.component.uploadLabelTemplate.flow';
		uploadInputPanel4ChooseLable.form.submit({
			method : "POST",
			timeout : 1200,
			url : url,
			waitTitle : "操作提示",
			waitMsg : "上传数据中...",
			success : function(form, action) {
				var result = action.result;
				var fname = result.msg;
				fname = '/myupload/labelprint/' + fname;
				if (result.success) {
					var myflag = _this.uploadWin4ChooseLable.myflag;
					_this.uploadWin4ChooseLable.hide();
					if (myflag == 0) {
						_this.inputWindow.form.findField('entity/url')
								.setValue(fname);
						_this.inputWindow.form.findField('entity/urlname')
								.setValue(filePath);
					}
					if (myflag == 1) {

						var A = _this.listPanel;
						if (!A.getSelectionModel().getSelected()) {
							Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
							return;
						}
						var records = A.getSelectionModel().getSelections();
						var pkid = records[0].data.id;
						var obj = {};
						obj['entity/id'] = pkid;
						obj['entity/url'] = fname

						_this.requestMask = _this.requestMask
								|| new Ext.LoadMask(Ext.getBody(), {
											msg : "正在保存,请稍候!"
										});
						_this.requestMask.show();

						Ext.Ajax.request({
							url : "com.keensen.ump.produce.marketing.appearance.saveLabelDrawing.biz.ext",
							method : "post",
							jsonData : obj,
							success : function(resp) {
								var ret = Ext.decode(resp.responseText);
								if (ret.success) {
									_this.listPanel.store.reload();
								}

							},
							callback : function() {
								_this.requestMask.hide()
							}
						})

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

com.keensen.ump.produce.marketing.LabelMgr.prototype.exportExcel = function() {
	
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '标签定制',
			'com.keensen.ump.produce.marketing.appearance.queryLabelDrawing');
}