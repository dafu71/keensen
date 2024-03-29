com.keensen.ump.produce.component.yxorderMgr.prototype.initEvent = function() {
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

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var cnt = r.data.cnt;

				if (cnt > 0) {
					Ext.Msg.alert('系统提示', ' 已经制定计划，不能删除');
					return false;
				}
			})

	this.listPanel2.mon(this.listPanel2, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				if (C.length > 1) {
					Ext.Msg.alert('系统提示', '不能批量删除');
					return false;
				}
			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				if (this.opt == 'addplanweek') {
					this.planWeekWindow.show();
					this.planWeekWindow.loadData(cell);
				}
			}, this);

	// 增加修改事件
	this.listPanel2.mon(this.listPanel2, 'update', function(gird, cell) {
				this.editPlanWeekWindow.show();
				this.editPlanWeekWindow.loadData(cell);

			}, this);

}

com.keensen.ump.produce.component.yxorderMgr.prototype.destroy = function() {
	this.excelUploadWin.destroy();
	this.uploadWindow.destroy();
	this.planWeekWindow.destroy();
	this.viewPlanWeekWindow.destroy();
	this.editPlanWeekWindow.destroy();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onEditPlanWeek = function() {
	this.listPanel2.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onDelPlanWeek = function() {
	this.listPanel2.onDel();
}

// 周生产计划
com.keensen.ump.produce.component.yxorderMgr.prototype.onAddPlanWeek = function() {
	this.opt = 'addplanweek';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onViewPlanWeek = function() {

	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewPlanWeekWindow.show();
			var store = this.listPanel2.store;
			if (Ext.isEmpty(A.data.id))
				return;
			store.load({
						params : {
							'condition/relationId' : A.data.id
						}
					});
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onAddPlanWeek2 = function() {
	this.opt = 'addplanweek';
	this.listPanel.onEdit();
}

// 模板文件下载
com.keensen.ump.produce.component.yxorderMgr.prototype.onDown = function() {

	var fname = "ks_component_yxorder_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
}

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.yxorderMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.component.yxorderMgr.prototype.doUpload = function() {
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
		// var url = this.uploadInputPanel.saveUrl;
		var url = 'com.keensen.ump.produce.component.importYxOrder.flow';
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