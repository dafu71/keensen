com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.initEvent = function() {
	this.queryPanel.mon(this.queryPanel, 'query', function() {
		var _val = this.queryPanel.getForm().getValues() || {};
		this.listPanel.store.baseParams = _val;
		this.listPanel.store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
}

com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.onImportExcel = function() {

	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.doUpload = function() {

	var _this = this;
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
							Ext.Msg.alert("操作提示", result.msg, function() {
										_this.listPanel.store.reload();
									});

						}
					},
					failure : function(form, action) {
						Ext.MessageBox.show({
									title : '操作提示',
									buttons : Ext.MessageBox.OK,
									msg : "导入失败，您没有导入权限或者请检查文件格式或网络是否正常",
									icon : Ext.MessageBox.ERROR
								});
					}
				});
	}

}

com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.onEdit = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择数据！");
	} else {
		var title = records[0].get('title');
		var pkid = records[0].get('pkid');
		this.editPanel.form.findField('head/pkid').setValue(pkid);
		this.editPanel.form.findField('head/title').setValue(title);
		this.editWindow.show();
	}

};

com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.onUpdate = function() {
	var _this = this;
	if (!this.editPanel.form.isValid()) {
		return;
	}
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.zoomlion.hjsrm.kcgl.stockmanage.updateHeadTitle.biz.ext",
				jsonData : this.editPanel.form.getValues(),
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						_this.editWindow.hide();
						_this.listPanel.store.reload();
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
};

com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.onConfirm = function() {
	var _this = this;
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择数据！");
	} else {
		var pkid = records[0].get('pkid');
		var confirm = records[0].get('confirm');
		var archive = records[0].get('archive');
		if (archive == 'Y') {
			Ext.Msg.alert("系统提示", "该计划已经归档，无法修改！");
			return;
		}
		if (confirm == 'Y') {
			Ext.Msg.alert("系统提示", "已确认数据无需再次确认！");
			return;
		}

		Ext.Msg.confirm("系统提示", "您确定选择的计划记录已经修改完成，提交供应商答交吗?", function(btnText) {
			if (btnText == "yes") {
				this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				this.requestMask.show();
				Ext.Ajax.request({
					url : "com.zoomlion.hjsrm.kcgl.stockmanage.updateHeadConfirm.biz.ext",
					jsonData : {
						'entity/pkid' : pkid
					},
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
		}, this);

	}

};

com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.onUnConfirm = function() {
	var _this = this;
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择数据！");
	} else {
		var pkid = records[0].get('pkid');
		var confirm = records[0].get('confirm');
		var archive = records[0].get('archive');
		if (archive == 'Y') {
			Ext.Msg.alert("系统提示", "该计划已经归档，无法修改！");
			return;
		}
		if (confirm == 'N') {
			Ext.Msg.alert("系统提示", "请选择确认状态的数据！");
			return;
		}

		Ext.Msg.confirm("系统提示", "您确定选择的计划记录取消确认吗？取消确认后，供应商将不能答交！！！", function(
				btnText) {
			if (btnText == "yes") {
				this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				this.requestMask.show();
				Ext.Ajax.request({
					url : "com.zoomlion.hjsrm.kcgl.stockmanage.updateHeadUnconfirm.biz.ext",
					jsonData : {
						'entity/pkid' : pkid
					},
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
		}, this);

	}

};

com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.onArchive = function() {
	var _this = this;
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择数据！");
	} else {
		var pkid = records[0].get('pkid');
		var confirm = records[0].get('confirm');
		var archive = records[0].get('archive');
		if (confirm == 'N') {
			Ext.Msg.alert("系统提示", "该计划尚未确认，不能归档！");
			return;
		}
		if (archive == 'Y') {
			Ext.Msg.alert("系统提示", "该计划已经归档，无需重复归档！");
			return;
		}
		Ext.Msg.confirm("系统提示", "您确定选择的计划记录已经完成，可以归档了吗?归档后不能修改和答交！！！", function(btnText) {
			if (btnText == "yes") {
				this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				this.requestMask.show();
				Ext.Ajax.request({
					url : "com.zoomlion.hjsrm.kcgl.stockmanage.updateHeadArchive.biz.ext",
					jsonData : {
						'entity/pkid' : pkid
					},
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
		}, this);

	}

};

// 模板文件下载
com.zoomlion.hjsrm.kcgl.PlanheadMgr.prototype.onExportExcel = function() {
	var fname="plan.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
				+ fname;
}

