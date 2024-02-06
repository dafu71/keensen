com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.initEvent = function() {

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

	this.viewPanel.mon(this.viewPanel, 'afterload', function() {
				var templateValue = Ext.getCmp('fivewhyPoorUrl').getValue();
	(function	() {
					if (Ext.isEmpty(templateValue)) {
						Ext.getCmp('fivewhyPicture').hide();
					} else {
						Ext.getCmp('fivewhyPicture').show();
					}
				}).defer(200);

			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

	Ext.getCmp('fivewhyInput').mon(Ext.getCmp('fivewhyInput'), 'beforesave',
			function() {
				var itemArr = [];
				var happenPlace = Ext.getCmp('fivewhyInput').form
						.findField('happenPlace');
				for (var i = 0; i < happenPlace.items.length; i++) {
					if (happenPlace.items.itemAt(i).checked) {
						itemArr.push(i + 1);
					}
				}
				Ext.getCmp('fivewhyInput').form.findField('entity/happenPlace')
						.setValue(itemArr.join(','));

				var itemArr2 = [];
				var productClassify = Ext.getCmp('fivewhyInput').form
						.findField('productClassify');
				for (var i = 0; i < productClassify.items.length; i++) {
					if (productClassify.items.itemAt(i).checked) {
						itemArr2.push(i + 1);
					}
				}
				Ext.getCmp('fivewhyInput').form
						.findField('entity/productClassify').setValue(itemArr2
								.join(','));

				var itemArr3 = [];
				var poorClassify = Ext.getCmp('fivewhyInput').form
						.findField('poorClassify');
				for (var i = 0; i < poorClassify.items.length; i++) {
					if (poorClassify.items.itemAt(i).checked) {
						itemArr3.push(i + 1);
					}
				}
				Ext.getCmp('fivewhyInput').form
						.findField('entity/poorClassify').setValue(itemArr3
								.join(','));
			}, this);

	Ext.getCmp('fivewhyEdit').mon(Ext.getCmp('fivewhyEdit'), 'beforesave',
			function() {
				var itemArr = [];
				var happenPlace = Ext.getCmp('fivewhyEdit').form
						.findField('happenPlace');
				for (var i = 0; i < happenPlace.items.length; i++) {
					if (happenPlace.items.itemAt(i).checked) {
						itemArr.push(i + 1);
					}
				}
				Ext.getCmp('fivewhyEdit').form.findField('entity/happenPlace')
						.setValue(itemArr.join(','));

				var itemArr2 = [];
				var productClassify = Ext.getCmp('fivewhyEdit').form
						.findField('productClassify');
				for (var i = 0; i < productClassify.items.length; i++) {
					if (productClassify.items.itemAt(i).checked) {
						itemArr2.push(i + 1);
					}
				}
				Ext.getCmp('fivewhyEdit').form
						.findField('entity/productClassify').setValue(itemArr2
								.join(','));

				var itemArr3 = [];
				var poorClassify = Ext.getCmp('fivewhyEdit').form
						.findField('poorClassify');
				for (var i = 0; i < poorClassify.items.length; i++) {
					if (poorClassify.items.itemAt(i).checked) {
						itemArr3.push(i + 1);
					}
				}
				Ext.getCmp('fivewhyEdit').form.findField('entity/poorClassify')
						.setValue(itemArr3.join(','));
			}, this);

}

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onAdd = function() {
	var _this = this;
	Ext.Ajax.request({
				url : "com.keensen.ump.produce.report.quality.query5whyPkid.biz.ext",
				method : "post",
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						if (ret.success) {
							var pkid = ret.id;
							_this.inputWindow.form.findField("entity/id")
									.setValue(pkid);
							_this.inputWindow.show();
						}
					}

				},
				callback : function() {

				}
			})

}

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
	this.editWindow.destroy();
	this.followWindow.destroy();
	Ext.getCmp('fivewhyInput').destroy();
	Ext.getCmp('fivewhyEdit').destroy();
	Ext.getCmp('fivewhyPicture').destroy();
}

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onUploadWindowShow = function(
		o) {
	this.uploadForm = this.uploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.uploadWin.show();
};

// 文件上传
com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.doUpload = function() {
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
	//var extname = this.sfileName[1].toLowerCase();
	//alert(extname)
	var extname = this.filePath.substr(this.filePath.lastIndexOf('.') + 1);
	//alert(extname)
	if (extname == null
			|| array.indexOf(extname) == -1) {
		Ext.MessageBox.show({
					title : '操作提示',
					buttons : Ext.MessageBox.OK,
					msg : '文件必须为图片文件',
					icon : Ext.MessageBox.ERROR
				});
		return false;
	}
	if (this.uploadInputPanel.form.isValid()) {
		var url = 'com.keensen.ump.produce.report.upload5why.flow';
		this.uploadInputPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "上传数据中...",
					success : function(form, action) {
						var result = action.result;
						var fname = result.msg;
						fname = '/myupload/fivewhy/' + fname;
						if (result.success) {
							_this.uploadWin.hide();
							if (_this.editWindow.hidden) {
								_this.inputWindow.form
										.findField("entity/reserve5")
										.setValue(_this.filePath);
								_this.inputWindow.form
										.findField("entity/poorUrl")
										.setValue(fname);
							} else {
								_this.editWindow.form
										.findField("entity/reserve5")
										.setValue(_this.filePath);
								_this.editWindow.form
										.findField("entity/poorUrl")
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

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onFollow = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var pkid = r.data.id;
		this.viewPanel.form.reset();
		this.followWindow.show();
		this.viewPanel.loadData(r);
		this.measureListPanel.store.baseParams = ({
			'condition/relationId' : pkid
		});
		this.measureListPanel.store.load({});
		this.reasonListPanel.store.baseParams = ({
			'condition/relationId' : pkid
		});
		this.reasonListPanel.store.load({});
		this.answerListPanel.store.baseParams = ({
			'condition/relationId' : pkid
		});
		this.answerListPanel.store.load({});
		this.productPanel.loadData(r);
	}
};

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onAddMeasure = function() {
	var relationId = this.viewPanel.form.findField('relationId').getValue();
	this.measureWindow.form.reset();
	this.measureWindow.form.findField('entity/relationId').setValue(relationId);
	this.measureWindow.show();
}

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onDelMeasure = function() {
	this.measureListPanel.onDel();
};

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onAddReason = function() {
	var relationId = this.viewPanel.form.findField('relationId').getValue();
	this.reasonWindow.form.reset();
	this.reasonWindow.form.findField('entity/relationId').setValue(relationId);
	this.reasonWindow.show();
}

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onDelReason = function() {
	this.reasonListPanel.onDel();
};

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onAddAnswer = function() {
	var relationId = this.viewPanel.form.findField('relationId').getValue();
	this.answerWindow.form.reset();
	this.answerWindow.form.findField('entity/relationId').setValue(relationId);
	this.answerWindow.show();
}

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onDelAnswer = function() {
	this.answerListPanel.onDel();
};

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onSaveProduct = function() {
	if (this.productPanel.form.isValid()) {
		var url = 'com.keensen.ump.produce.report.quality.modify5whyHead.biz.ext';
		this.productPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "保存数据中...",
					success : function(form, action) {
						Ext.Msg.alert("系统提示", "保存生产信息调查成功！")
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
};

com.keensen.ump.produce.report.quality.FivewhyMgr.prototype.onReport = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		window
				.open('com.keensen.ump.produce.report.fivewhyreport.flow?entity/id='
						+ id)

	}

};

function showPicture() {
	var templateValue = Ext.getCmp('fivewhyPoorUrl').getValue();
	if (Ext.isEmpty(templateValue))
		return;
	window.open('/default/' + templateValue);
}

function deletePicture() {
	Ext.getCmp('fivewhyEdit').form.findField('entity/reserve5').setValue('');
	Ext.getCmp('fivewhyEdit').form.findField('entity/poorUrl').setValue('');

}

function deletePicture2() {
	Ext.getCmp('fivewhyInput').form.findField('entity/reserve5').setValue('');
	Ext.getCmp('fivewhyInput').form.findField('entity/poorUrl').setValue('');

}