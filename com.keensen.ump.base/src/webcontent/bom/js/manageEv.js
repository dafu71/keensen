com.keensen.ump.base.BomMgr.prototype.initEvent = function() {
	//查询事件
	this.queryPanel.mon(this.queryPanel,'query', function(form,vals){
		var store =this.listPanel.store;
        store.baseParams =vals;
        store.load({ params : {"pageCond/begin" : 0,
                          "pageCond/length" :this.listPanel.pagingToolbar.pageSize
                    }});
	},this);
	
	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
}

com.keensen.ump.base.BomMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.base.BomMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			var materSpecCode = A.get('materSpecCode');
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();

		}
	}
}

com.keensen.ump.base.BomMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.base.storage.exportStorage.biz.ext",
				method : "post",
				jsonData : daochu,
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						if (ret.success) {
							var fname = ret.fname;
							if(Ext.isIE){
								window.open('/default/deliverynote/seek/down4IE.jsp?fname='+fname);
							}else{
								window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
										+ fname;
							}
						}
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}

com.keensen.ump.base.BomMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.base.BomMgr.prototype.destroy = function() {
	//this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.base.BomMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

// 模板文件下载
com.keensen.ump.base.BomMgr.prototype.onDown = function() {

	var fname = "ks_component_bom_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};

// 弹出文件上传选择窗口
com.keensen.ump.base.BomMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.base.BomMgr.prototype.doUpload = function() {
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
										_this.listPanel.store.load();
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