com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.initEvent = function() {
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
				if (this.opt == 'edit') {
					this.editWindow.show();
					this.editWindow.loadData(cell);
				}
				
				if (this.opt == 'review') {
					this.reviewWindow.show();
					this.reviewWindow.loadData(cell);
				}
				
				if (this.opt == 'viewreport') {
					var pkid = cell.get('id');
					window.open('com.keensen.ump.produce.quality.mpreport.flow?opt=1&id='
						+ pkid, "top");
				}
				if (this.opt == 'viewreport2') {
					var pkid = cell.get('id');
					window.open('com.keensen.ump.produce.quality.mpreport.flow?opt=2&id='
						+ pkid, "top");
				}
				if (this.opt == 'viewreport3') {
					var pkid = cell.get('id');
					window.open('com.keensen.ump.produce.quality.mpreport.flow?opt=3&id='
						+ pkid, "top");
				}
			}, this);

	
}

com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.onDel = function() {
	
	this.listPanel.onDel();
};



com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.onAdd = function() {
	
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.destroy = function() {
	
	this.editWindow.destroy();
	this.inputWindow.destroy();
	
}

com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.onEdit = function() {
	this.opt = 'edit'
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.onReview = function() {
	this.opt = 'review'
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.onViewReport = function() {
	this.opt = 'viewreport'
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.onViewReport2 = function() {
	this.opt = 'viewreport2'
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.onViewReport3 = function() {
	this.opt = 'viewreport3'
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.onRelation = function() {
	
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		this.uploadForm = this.excelUploadWin.getComponent('uploadForm')
				.getForm();
		this.uploadForm.reset();
		this.excelUploadWin.show();

	}

};

// 文件上传
com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.doUpload = function() {
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
		var C = this.listPanel.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		var url = 'com.keensen.ump.produce.quality.importMpDeliveryDetail.flow?relationId='
				+ id;
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
											? "上传成功"
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

com.keensen.ump.produce.quality.MpDeliveryReportMgr.prototype.onDown = function() {

	var fname = "ks_quality_mp_delivery_detail_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};