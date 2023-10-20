com.zoomlion.hjsrm.kcgl.DrawingmanageMgr.prototype.initEvent = function() {
	var _this = this;
	this.queryPanel.mon(this.queryPanel, 'query', function() {
		var _val = this.queryPanel.getForm().getValues() || {};
		var matnr2 = this.queryPanel.matnr2.getValue();
		if (!Ext.isEmpty(matnr2)) {
			var regEx = new RegExp("\\n", "gi");
			matnr2 = matnr2.replace(regEx, ",");
			var regEx = new RegExp("\\s", "gi");
			matnr2 = matnr2.replace(regEx, ",");

			var regEx = new RegExp(",,", "gi");
			matnr2 = matnr2.replace(regEx, ",");

			if (matnr2.indexOf(',') > -1) {
				var arr = [];
				arr = matnr2.split(',');
				var newarr = [];
				for (var i = 0; i < arr.length; i++) {
					newarr.push("'" + arr[i] + "'");
				}
				matnr2 = newarr.join(',');
			} else {
				matnr2 = "'" + matnr2 + "'";
			}

			this.queryPanel.matnr2.setValue(matnr2);
			_val["condition/matnr2"] = matnr2;
		}
		this.listPanel.store.baseParams = _val;
		this.listPanel.store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.queryPanel.fireEvent('query', this.queryPanel);
	
	/*var _val = this.queryPanel.getForm().getValues() || {};
	this.listPanel.store.baseParams = _val;
	this.listPanel.store.load({
				params : {
					"pageCond/begin" : 0,
					"pageCond/length" : this.listPanel.pagingToolbar.pageSize
				}
			});*/
}

com.zoomlion.hjsrm.kcgl.DrawingmanageMgr.prototype.onExportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.kcgl.drawingprovide.exportProvide.biz.ext",
		method : "post",
		jsonData : daochu,
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					var fname = ret.fname;
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
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

com.zoomlion.hjsrm.kcgl.DrawingmanageMgr.prototype.onUpdate = function() {
	var _this = this;
	if (!this.editPanel.form.isValid()) {
		return;
	}
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.zoomlion.hjsrm.kcgl.drawingprovide.updateProvide.biz.ext",
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

com.zoomlion.hjsrm.kcgl.DrawingmanageMgr.prototype.onEdit = function() {
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择一条数据！");
	} else {
		var matnr = records[0].get('matnr');
		var maktx = records[0].get('maktx');
		var zcpcx = records[0].get('zcpcx');
		var drawingtype = records[0].get('drawingtype');
		var drawingcode = records[0].get('drawingcode');
		var attribute = records[0].get('attribute');
		var warehousing = records[0].get('warehousing');
		var lifnr = records[0].get('lifnr');
		var name1 = records[0].get('name1');
		var downtime = records[0].get('downtime');
		var singman = records[0].get('singman');
		var signtime = records[0].get('signtime');
		var remark = records[0].get('remark');
		var pkid = records[0].get('pkid');
		var delflag = records[0].get('delflag');
		if(delflag != 'N'){
			Ext.Msg.alert("系统提示", "已删除数据不能修改！");
			return;
		}

		this.editPanel.form.findField('provide/pkid').setValue(pkid);
		this.editPanel.form.findField('provide/matnr').setValue(matnr);
		this.editPanel.form.findField('provide/maktx').setValue(maktx);
		this.editPanel.form.findField('provide/zcpcx').setValue(zcpcx);
		this.editPanel.form.findField('provide/drawingtype')
				.setValue(drawingtype);
		this.editPanel.form.findField('provide/drawingcode')
				.setValue(drawingcode);
		this.editPanel.form.findField('provide/attribute').setValue(attribute);
		this.editPanel.form.findField('provide/warehousing')
				.setValue(warehousing);
		this.editPanel.form.findField('provide/lifnr').setValue(lifnr);
		this.editPanel.form.findField('provide/name1').setValue(name1);
		this.editPanel.form.findField('provide/downtime').setValue(downtime);
		this.editPanel.form.findField('provide/singman').setValue(singman);
		this.editPanel.form.findField('provide/signtime').setValue(signtime);
		this.editPanel.form.findField('provide/remark').setValue(remark);

		this.editWindow.show();
	}

};

// 删除选定的订货单
com.zoomlion.hjsrm.kcgl.DrawingmanageMgr.prototype.onDelete = function() {
	this.listPanel.onDel();
}

com.zoomlion.hjsrm.kcgl.DrawingmanageMgr.prototype.onImportExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.zoomlion.hjsrm.kcgl.DrawingmanageMgr.prototype.doUpload = function() {

	var _this = this;
	this.uploadInputPanel = this.excelUploadWin.getComponent('uploadForm');
	// 校验
	this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
	// 文件名
	this.filePath = this.fileUploadObj.getValue();
	// 文件后缀
	this.sfileName = this.filePath.split(".");
	
	var arrLen = this.sfileName.length;

	if (arrLen ==0 || this.sfileName[arrLen-1] == null || this.sfileName[arrLen-1].toLowerCase() != "xls") {
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