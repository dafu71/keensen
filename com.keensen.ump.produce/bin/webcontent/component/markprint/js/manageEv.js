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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editPanel.loadData(cell);
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

com.keensen.ump.produce.component.markprinttemplateMgr.prototype.onUploadWindowShow = function(
		o) {
	this.uploadWin.myflag = o;
	this.uploadForm = this.uploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.uploadWin.show();
	// Ext.getCmp('uploadMarkTemplate').onClick();
	$('#marktemplateupload').click();

};

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
			url : 'com.keensen.ump.produce.component.makprint.saveMarkPrint.biz.ext',
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
					}else{
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
			url : 'com.keensen.ump.produce.component.makprint.saveMarkPrint.biz.ext',
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