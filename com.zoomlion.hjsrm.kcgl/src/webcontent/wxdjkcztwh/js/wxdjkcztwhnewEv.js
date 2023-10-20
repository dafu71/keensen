/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 外协大件库存状态维护 创建日期： 2015-05-21 作 者： 刘鑫
 ******************************************************************************/

com.zoomlion.hjsrm.kcgl.WxdjkcztwhnewMgr.prototype.initEvent = function() {

	var _this = this;
	this.listPanel.store.on({
		scope : this,
		'load' : function() {

			var store = _this.listPanel.store;
			var current = '';
			var flag = 0;
			store.each(function(r) {
						if (r.data.cxmc == current) {
							r.data.flag = flag

						} else {
							flag += 1;
							r.data.flag = flag
						}
						current = r.data.cxmc;

					});
			var index = 0;
			store.each(function(r) {
				if (r.data.flag && (parseInt(r.data.flag) % 2) == 1) {
					_this.listPanel.getView().getRow(index).style.backgroundColor = "#E0E0E0";
				} else {
					_this.listPanel.getView().getRow(index).style.backgroundColor = "#BEBEBE"; 
				}
				index += 1;
			});

			// _this.listPanel.view.refresh();

		}

	});
}

com.zoomlion.hjsrm.kcgl.WxdjkcztwhnewMgr.prototype.destroy = function() {
	this.cxlbqdshowWindow.destroy();
}
com.zoomlion.hjsrm.kcgl.WxdjkcztwhnewMgr.prototype.onSaveok = function() {
	var D = this.listPanel;
	var B = [];
	if (!this.subAll) {
		B = D.store.getModifiedRecords()
	} else {
		B = D.store.getRange()
	}
	if (B.length == 0) {
		Ext.Msg.alert("系统提示", "没有提交待保存的数据");
		return
	}
	var C = [];
	for (var A = 0; A < B.length; A++) {
		r = B[A];
		C = C.concat(r.data)
	}
	var _this = this;
	var store = _this.listPanel.store;
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.kcgl.kcglDaji.savewxdjkcztwhnew.biz.ext',
				jsonData : {
					list : C
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						Ext.Msg.alert("系统提示", "保存成功", function() {
									store.reload();
									//_this.listPanel.getForm().reset();
								});
					}
				}
			});

}
com.zoomlion.hjsrm.kcgl.WxdjkcztwhnewMgr.prototype.exportExcel = function() {
	var _this = this;
	var store = _this.listPanel.store;
	var cool = _this.listPanel.store.getRange();
	var vals = [];
	Ext.each(cool, function(r) {
				vals.push(r.data);
			});
	var templatename = "WxdjkcztwhnewMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcel.biz.ext',
		jsonData : {
			excels : vals,
			templatename : templatename
		},
		success : function(response, action) {
			this.requestMask.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				var fname = result.fname;
				window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
						+ fname;
			}
		},
		failure : function(resp, opts) {
			this.requestMask.hide();
		}
	});

}
com.zoomlion.hjsrm.kcgl.WxdjkcztwhnewMgr.prototype.importExcel = function() {

		this.uploadForm = this.excelUploadWin.getComponent('uploadForm')
				.getForm();
		this.excelUploadWin.show();
	
}

// 文件上传
com.zoomlion.hjsrm.kcgl.WxdjkcztwhnewMgr.prototype.doUpload = function() {

	var _this = this;
		this.uploadInputPanel = this.excelUploadWin.getComponent('uploadForm');
		// 校验
		this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
		// 文件名
		this.filePath = this.fileUploadObj.getValue();
		// 文件后缀
		this.sfileName = this.filePath.split(".");

		if (this.sfileName[1] == null
				|| this.sfileName[1].toLowerCase() != "xls") {
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
								Ext.Msg.alert("操作提示", result.msg,function(){
									_this.listPanel.store.reload();
								}
								);
								
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

