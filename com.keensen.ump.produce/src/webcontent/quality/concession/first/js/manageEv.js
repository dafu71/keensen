com.keensen.ump.produce.quality.concessionFirstMgr.prototype.initEvent = function() {
	var _this = this;
	var prodSpecId = '';
	var r = new Ext.data.Record({
				processinstid : processinstid
			});
	this.editPanel.loadData(r);

	this.editPanel.mon(this.editPanel, 'afterload', function() {
		var recordIds = this.editPanel.form.findField('reserve1').getValue();

		prodSpecId = this.editPanel.form.findField('prodSpecId').getValue();
		var store = this.listPanel.store;
		store.load({
					params : {
						'condition/recordIds' : recordIds
					}
				});
		deletePicture(0);
			/*
			 * this.editPanel.picturePanel.update(''); var pictureUrl =
			 * this.editPanel.pictureUrl.getValue(); var pictureUrl2 =
			 * this.editPanel.pictureUrl2.getValue(); var pictureUrl3 =
			 * this.editPanel.pictureUrl3.getValue(); var url = ''; if
			 * (!Ext.isEmpty(pictureUrl)) { url += '<a href="/default/' +
			 * pictureUrl + '" target=_blank>查看图片1</a>'; url += '&nbsp;&nbsp;<a
			 * href="javascript:deletePicture(1);" >' + '删除图片1' + "</a>" url +=
			 * '&nbsp;&nbsp;&nbsp;&nbsp;' } if (!Ext.isEmpty(pictureUrl2)) { url += '<a
			 * href="/default/' + pictureUrl2 + '" target=_blank>查看图片2</a>';
			 * url += '&nbsp;&nbsp;<a href="javascript:deletePicture(2);" >' +
			 * '删除图片2' + "</a>" url += '&nbsp;&nbsp;&nbsp;&nbsp;' } if
			 * (!Ext.isEmpty(pictureUrl3)) { url += '<a href="/default/' +
			 * pictureUrl3 + '" target=_blank>查看图片3</a>'; url += '&nbsp;&nbsp;<a
			 * href="javascript:deletePicture(3);" >' + '删除图片3' + "</a>" url +=
			 * '&nbsp;&nbsp;&nbsp;&nbsp;' }
			 * this.editPanel.picturePanel.update(url);
			 */
		}, this);
	this.listPanel.store.on('load', function() {
				_this.editPanel.form.findField('prodSpecId')
						.setValue(prodSpecId);
			})
}

com.keensen.ump.produce.quality.concessionFirstMgr.prototype.onSave = function() {
	// 校验
	if (!this.editPanel.form.isValid()) {// 基础数据校验
		return;
	}

	var itemArr = [];
	var myCheckboxGroup = this.editPanel.form.findField('myCheckboxGroup');
	for (var i = 0; i < myCheckboxGroup.items.length; i++) {
		if (myCheckboxGroup.items.itemAt(i).checked) {
			itemArr.push(i);
		}
	}

	this.editPanel.form.findField('myitems').setValue(itemArr.join(','));

	this.editPanel.saveBtn.disable();

	// 提交
	var _this = this;
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在提交，请稍候!'
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.quality.concession.saveFirst.biz.ext',
				jsonData : {
					entity : this.editPanel.form.getValues(),
					'entity/myitems' : itemArr.join(','),
					workitemid : workitemid,
					processinstid : processinstid
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var list = Ext.getCmp(listId);
						if (list) {// 重新加载待办任务列表
							list.store.reload();
						}
	(function			() {
							closeMyTab();
						}).defer(200);

					} else {
						mk.hide();
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});
}

com.keensen.ump.produce.quality.concessionFirstMgr.prototype.onInvalid = function() {
	// 提交
	var _this = this;
	var pkid = this.editPanel.form.findField('id').getValue();
	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在提交，请稍候!'
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.quality.concession.saveInvalid.biz.ext',
				jsonData : {
					'map/id' : pkid,
					'map/advise' : '作废放行单',
					workitemid : workitemid,
					processinstid : processinstid
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						var list = Ext.getCmp(listId);
						if (list) {// 重新加载待办任务列表
							list.store.reload();
						}
	(function			() {
							closeMyTab();
						}).defer(200);

					} else {
						mk.hide();
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});

}

com.keensen.ump.produce.quality.concessionFirstMgr.prototype.onClose = function() {
	closeMyTab();
}

com.keensen.ump.produce.quality.concessionFirstMgr.prototype.destroy = function() {
	this.editPanel.destroy();
	this.uploadWin.destroy();
	Ext.getCmp('concessionEditPanel').destroy();
}

com.keensen.ump.produce.quality.concessionFirstMgr.prototype.onUploadWindowShow = function(
		o) {
	this.uploadWin.myflag = o;
	this.uploadForm = this.uploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.uploadWin.show();

};

// 文件上传
com.keensen.ump.produce.quality.concessionFirstMgr.prototype.doUpload = function() {
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
		var url = 'com.keensen.ump.produce.quality.uploadConcession.flow';
		this.uploadInputPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "上传数据中...",
					success : function(form, action) {
						var result = action.result;
						var fname = result.msg;
						fname = '/myupload/concession/' + fname;
						if (result.success) {
							_this.uploadWin.hide();
							var myflag = _this.uploadWin.myflag;
							if (myflag == '1') {
								Ext.getCmp('concessionEditPanel').newPictureUrl
										.setValue(_this.filePath);
								Ext.getCmp('concessionEditPanel').form
										.findField('pictureUrl')
										.setValue(fname);
							} else if (myflag == '2') {
								Ext.getCmp('concessionEditPanel').newPictureUrl2
										.setValue(_this.filePath);
								Ext.getCmp('concessionEditPanel').form
										.findField('pictureUrl2')
										.setValue(fname);
							} else if (myflag == '3') {
								Ext.getCmp('concessionEditPanel').newPictureUrl3
										.setValue(_this.filePath);
								Ext.getCmp('concessionEditPanel').form
										.findField('pictureUrl3')
										.setValue(fname);
							}
							deletePicture(0);
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

function closeMyTab() {
	var tabId = "workinglistid";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}

function deletePicture(v) {
	if (v == '1') {
		Ext.getCmp('concessionEditPanel').pictureUrl.setValue('');
		Ext.getCmp('concessionEditPanel').newPictureUrl.setValue('');
	} else if (v == '2') {
		Ext.getCmp('concessionEditPanel').pictureUrl2.setValue('');
		Ext.getCmp('concessionEditPanel').newPictureUrl2.setValue('');
	} else if (v == '3') {
		Ext.getCmp('concessionEditPanel').pictureUrl3.setValue('');
		Ext.getCmp('concessionEditPanel').newPictureUrl3.setValue('');
	}
	var pictureUrl = Ext.getCmp('concessionEditPanel').pictureUrl.getValue();
	var pictureUrl2 = Ext.getCmp('concessionEditPanel').pictureUrl2.getValue();
	var pictureUrl3 = Ext.getCmp('concessionEditPanel').pictureUrl3.getValue();
	var url = '';
	if (!Ext.isEmpty(pictureUrl)) {
		url += '<a href="/default/' + pictureUrl + '" target=_blank>查看图片1</a>';
		url += '&nbsp;&nbsp;<a href="javascript:deletePicture(1);" >' + '删除图片1'
				+ "</a>"
		url += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
	}
	if (!Ext.isEmpty(pictureUrl2)) {
		url += '<a href="/default/' + pictureUrl2 + '" target=_blank>查看图片2</a>';
		url += '&nbsp;&nbsp;<a href="javascript:deletePicture(2);" >' + '删除图片2'
				+ "</a>"
		url += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
	}
	if (!Ext.isEmpty(pictureUrl3)) {
		url += '<a href="/default/' + pictureUrl3 + '" target=_blank>查看图片3</a>';
		url += '&nbsp;&nbsp;<a href="javascript:deletePicture(3);" >' + '删除图片3'
				+ "</a>"
		url += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
	}
	Ext.getCmp('concessionEditPanel').picturePanel.update(url);

}
function copyToClipboard(text) {
	var textarea = document.createElement('textarea');
	textarea.style.position = 'fixed';
	textarea.style.opacity = 0;
	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
}

com.keensen.ump.produce.quality.concessionFirstMgr.prototype.onCopy = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		var arr = [];
		for (var i = 0; i < B.length; i++) {
			var batchNo = B[i].get('batchNo');
			arr.push(batchNo);
		}
		var str = arr.join('\n');
		copyToClipboard(str);
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}

}