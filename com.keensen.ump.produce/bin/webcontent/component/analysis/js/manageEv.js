com.keensen.ump.produce.component.analysisMgr.prototype.initEvent = function() {

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

	this.storagecombo.mon(this.storagecombo, 'select', function(record, index) {
				// this.queryPanel.form.findField('condition/storageIds')
				// .setValue(this.storagecombo.myvalue);
			}, this);

}

// 模板文件下载
com.keensen.ump.produce.component.analysisMgr.prototype.onDown = function() {

	Ext.Msg.show({
		width : 350,
		title : "操作提示",
		msg : "下载模板后，请按照示例填写真实数据，并注意日期和数字格式,示例数据请删除后再提交。",
		icon : Ext.Msg.WARNING,
		buttons : Ext.Msg.OK,
		fn : function(btn) {
			if (btn == "ok") {
				var fname = "ks_component_mp_analyisis_template.xls";
				window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
						+ fname;
			}
		}

	})

}

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.analysisMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.component.analysisMgr.prototype.doUpload = function() {
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

com.keensen.ump.produce.component.analysisMgr.prototype.exportExcel = function() {
	var _this = this;

	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.component.analysis.query',
			templateFilename : 'ks_component_mp_analyisis_export'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);

			if (ret.success) {
				var fname = ret.fname;
				if (!Ext.isEmpty(fname)) {
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				} else {
					Ext.Msg.alert("系统提示", ret.msg);
					return false;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.analysisMgr.prototype.exportExcel2 = function() {
	var _this = this;

	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.component.analysis.querySelected',
			templateFilename : 'ks_component_mp_analyisis_mp_export'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);

			if (ret.success) {
				var fname = ret.fname;
				if (!Ext.isEmpty(fname)) {
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				} else {
					Ext.Msg.alert("系统提示", ret.msg);
					return false;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.analysisMgr.prototype.onCalculate = function() {
	var _this = this;
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.analysis.saveMpAnalysis.biz.ext',
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				// _this.listPanel.store.load();
				_this.listPanel.refresh();
			} else {
				mk.hide();
			}
		},
		failure : function(resp, opts) {
			mk.hide();
		}
	});
}

com.keensen.ump.produce.component.analysisMgr.prototype.onCalculate2 = function() {
	var _this = this;
	var storageName = this.storagecombo.myvalue;
	if (Ext.isEmpty(storageName)) {
		Ext.Msg.alert("系统提示", "请选择仓库！");
		return;
	}
	storageName = storageName.replace(",","','");
	storageName = "'" + storageName + "'";
	//alert(storageName);
	//return;
	
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.analysis.saveMpAnalysisByStorage.biz.ext',
		jsonData : {
			'storageName' : storageName
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				// _this.listPanel.store.load();
				_this.listPanel.refresh();
			} else {
				mk.hide();
			}
		},
		failure : function(resp, opts) {
			mk.hide();
		}
	});
}