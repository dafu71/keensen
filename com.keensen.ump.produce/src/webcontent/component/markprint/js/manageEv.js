com.keensen.ump.produce.component.markprinttemplateMgr.prototype.initEvent = function() {
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

	// 查询事件
	this.queryPanel4ChooseLable.mon(this.queryPanel4ChooseLable, 'query',
			function(form, vals) {
				var store = this.listPanel4ChooseLable.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChooseLable.pagingToolbar.pageSize
					}
				});
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editPanel.loadData(cell);
			}, this);

	this.listPanel4ChooseLable.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec4ChooseLabel = r;
				}).defer(100);
			}, this);

	this.inputWindow4ChooseLable.activeItem.mon(
			this.inputWindow4ChooseLable.activeItem, 'afterSave', function(
					gird, cell) {
				this.listPanel4ChooseLable.store.reload();
			}, this);
}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onAdd = function() {
	this.inputWindow.show();
}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onDelete = function() {

	this.listPanel.onDel();

}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onUploadTestPicture = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	this.uploadWin.myflag = 5;
	this.uploadForm = this.uploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.uploadWin.show();
	// Ext.getCmp('uploadMarkTemplate').onClick();
	$(marktemplateupload).click();

}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onUploadWindowShow = function(
		o) {
	this.uploadWin.myflag = o;
	this.uploadForm = this.uploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.uploadWin.show();
	// Ext.getCmp('uploadMarkTemplate').onClick();
	$(marktemplateupload).click();

};

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.pretreatment = function(
		e, fileId) {
	var _this = this;

	var myflag = _this.uploadWin.myflag;

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

	if (myflag == '1' || myflag == '3') {// 背景图片

		const file = e.target.files[0];
		const img = new Image();
		const tempUrl = window.URL.createObjectURL(file);

		// 成功加载图片
		img.onload = function() {
			// 获取原始尺寸
			const width = this.naturalWidth;
			const height = this.naturalHeight;

			// 立即释放临时 URL
			window.URL.revokeObjectURL(tempUrl);
			if (width > 386 || width < 380) {
				Ext.Msg.alert("系统提示", "图片宽度太大或太小，请选择像素（宽*高）接近386*266的图片！",
						function() {
							document.getElementById(fileId).value = '';
							return;
						})

			}
			if (height > 266 || height < 260) {
				Ext.Msg.alert("系统提示", "图片高度太大或太小，请选择像素（宽*高）接近386*266的图片！",
						function() {
							document.getElementById(fileId).value = '';
							return;
						})
			}

		};

		// 错误处理
		img.onerror = function() {
			alert('图片加载失败，请检查文件格式');
			window.URL.revokeObjectURL(tempUrl);
		};

		img.src = tempUrl;
	}
}

// 文件上传
com.keensen.ump.produce.component.markprinttemplateMgr.prototype.doUpload = function() {
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
		var url = 'com.keensen.ump.produce.component.uploadMarkTemplate.flow';
		this.uploadInputPanel.form.submit({
			method : "POST",
			timeout : 1200,
			url : url,
			waitTitle : "操作提示",
			waitMsg : "上传数据中...",
			success : function(form, action) {
				var result = action.result;
				var fname = result.msg;
				fname = '/myupload/markprint/' + fname;
				if (result.success) {
					_this.uploadWin.hide();
					var myflag = _this.uploadWin.myflag;
					if (myflag == '1') {
						_this.inputPanel.form.findField('url')
								.setValue(_this.filePath);
						_this.inputPanel.form.findField('entity/url')
								.setValue(fname);
					} else if (myflag == '2') {
						_this.inputPanel.form.findField('url2')
								.setValue(_this.filePath);
						_this.inputPanel.form.findField('entity/url2')
								.setValue(fname);
					} else if (myflag == '3') {
						_this.editPanel.form.findField('localurl')
								.setValue(_this.filePath);
						_this.editPanel.form.findField('entity/url')
								.setValue(fname);
					} else if (myflag == '4') {
						_this.editPanel.form.findField('localurl2')
								.setValue(_this.filePath);
						_this.editPanel.form.findField('entity/url2')
								.setValue(fname);
					} else if (myflag == '5') {
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
							url : 'com.keensen.ump.produce.component.makprint.saveMarkPrint2.biz.ext',
							jsonData : {
								'entity/id' : pkid,
								'entity/reserve5' : fname
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

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onSave = function() {
	var _thispanel = this.inputPanel;
	var _thislist = this.listPanel;
	var _this = this;

	if (_thispanel.form.isValid()) {
		var mk = new Ext.LoadMask(_thispanel.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();

		var forms = _thispanel.getForm().getValues();

		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.component.makprint.saveMarkPrint2.biz.ext',
			jsonData : forms,
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					if (!Ext.isEmpty(result.id)) {
						Ext.Msg.alert("系统提示", "提交成功", function() {
									_thislist.store.reload();
									_this.inputPanel.form.reset();
									_this.inputWindow.hide();
								});
					} else {
						Ext.Msg.alert("系统提示", "图纸编号不能重复");
					}
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}

}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onSave2 = function() {
	var _thispanel = this.editPanel;
	var _thislist = this.listPanel;
	var _this = this;

	if (_thispanel.form.isValid()) {
		var mk = new Ext.LoadMask(_thispanel.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();

		var forms = _thispanel.getForm().getValues();

		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.component.makprint.saveMarkPrint2.biz.ext',
			jsonData : forms,
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "提交成功", function() {
								_thislist.store.reload();
								_this.editPanel.form.reset();
								_this.editWindow.hide();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}

}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	var records = A.getSelectionModel().getSelections();
	var templateName = records[0].data.templateName;
	
	
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.makprint.queryMarkPrint4View.biz.ext',
		jsonData : {
			'condition/templateName' : templateName,
			'condition/testView' : '1'
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			var data = result.data;
			if (!Ext.isEmpty(data)) {
				var f = document.getElementById('componentmarktemplateForm');
				f.prodBatchNos.value = "'" + data.prodBatchNo + "'";
				f.code.value = data.code;
				var actionUrl = 'com.keensen.ump.produce.component.printMarks.flow?time='
						+ Math.random() + '&token=' + Date.now();

				f.action = actionUrl;
				f.submit();
			} else {
				Ext.Msg.alert("系统提示", "没有可预览数据！");
				return;
			}
		},
		failure : function(resp, opts) {
			mk.hide();
		}
	});

}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onChoose4Label = function() {

	this.queryPanel4ChooseLable.form.reset();
	var store = this.listPanel4ChooseLable.store;
	store.baseParams = {};
	store.load({
		params : {
			"pageCond/begin" : 0,
			"pageCond/length" : this.listPanel4ChooseLable.pagingToolbar.pageSize
		}
	});

	this.labelDrawingLogoStore.reload();

	this.labelDrawingSpecNameStore.reload();

	this.chooseLableWindow.show();
}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onAddLable = function() {
	this.inputWindow4ChooseLable.form.reset();
	this.inputWindow4ChooseLable.show();
};

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.saveLabel = function(
		pkid, field, newValue, oldValue) {
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
				url : "com.keensen.ump.base.paramaterspec.saveLabelDrawing.biz.ext",
				method : "post",
				jsonData : obj,
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						// _this.listPanel4ChooseLable.store.reload();
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})

}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onDelLable = function() {
	var A = this.listPanel4ChooseLable;
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
					url : 'com.keensen.ump.base.paramaterspec.deleteLabelDrawing.biz.ext',
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

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onUploadWindowShow4ChooseLable = function() {
	this.uploadWin4ChooseLable.myflag = 0;
	this.uploadForm4ChooseLable = this.uploadWin4ChooseLable
			.getComponent('uploadForm').getForm();
	this.uploadForm4ChooseLable.reset();
	this.uploadWin4ChooseLable.show();
	// Ext.getCmp('uploadMarkTemplate').onClick();
	// $('#marktemplateupload4ChooseLable').click();

}

// 文件上传
com.keensen.ump.produce.component.markprinttemplateMgr.prototype.doUpload4ChooseLable = function() {
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
						_this.inputWindow4ChooseLable.form
								.findField('entity/url').setValue(fname);
						_this.inputWindow4ChooseLable.form
								.findField('entity/urlname').setValue(filePath);
					}
					if (myflag == 1) {

						var A = _this.listPanel4ChooseLable;
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
							url : "com.keensen.ump.base.paramaterspec.saveLabelDrawing.biz.ext",
							method : "post",
							jsonData : obj,
							success : function(resp) {
								var ret = Ext.decode(resp.responseText);
								if (ret.success) {
									_this.listPanel4ChooseLable.store.reload();
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

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onPreView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	var records = A.getSelectionModel().getSelections();
	var templateName = records[0].data.templateName;
	
	var code = records[0].data.code;

	
	if (code !='1' && code!='999') {
		Ext.Msg.alert("系统提示", "请选择司标或自定义模板预览！");
		return;
	}
	
	var f = document.getElementById('componentmarktemplatepreviewForm');
	f.drawingCode.value = templateName;
	var actionUrl = 'com.keensen.ump.produce.component.printMarks4PreView.flow?time='
			+ Math.random() + '&token=' + Date.now();

	f.action = actionUrl;
	f.submit();

}

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onModifyLableUrl = function() {
	this.uploadWin4ChooseLable.myflag = 1;
	this.uploadForm4ChooseLable = this.uploadWin4ChooseLable
			.getComponent('uploadForm').getForm();
	this.uploadForm4ChooseLable.reset();
	this.uploadWin4ChooseLable.show();

}
