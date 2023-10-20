com.zoomlion.hjsrm.supply.ManageMgr.prototype.initEvent = function() {

}


com.zoomlion.hjsrm.supply.ManageMgr.prototype.destroy = function() {
	this.excelUploadWin.destroy();
}
// 弹出文件上传选择窗口
com.zoomlion.hjsrm.supply.ManageMgr.prototype.onImportExcel = function() {
	
	var bukrs = this.inputPanel.bukrs.getValue();
	var werks = this.inputPanel.werks.getValue();

	var ytype = this.combo.getValue();
	if (Ext.isEmpty(ytype)) {
		Ext.Msg.alert("系统提示", "请选择类型!");
		return;
	} else {
		this.uploadForm = this.excelUploadWin.getComponent('uploadForm')
				.getForm();
		this.excelUploadWin.show();
	}
}

// 文件上传
com.zoomlion.hjsrm.supply.ManageMgr.prototype.doUpload = function() {

	var ytype = this.combo.getValue();
	var bukrs = this.inputPanel.bukrs.getValue();
	var werks = this.inputPanel.werks.getValue();

	if (Ext.isEmpty(ytype)) {
		Ext.Msg.alert("系统提示", "请选择类型!");
		return;
	} else {
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
			var url = this.uploadInputPanel.saveUrl + "?ytype=" + ytype
					+ "&bukrs=" + bukrs + "&werks=" + werks;
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
								Ext.Msg.alert("操作提示", result.msg);
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

}

// 模板文件下载
com.zoomlion.hjsrm.supply.ManageMgr.prototype.downFile = function() {

	var ytype = this.combo.getValue();
	var bukrs = this.inputPanel.bukrs.getValue();
	var werks = this.inputPanel.werks.getValue();
	if (Ext.isEmpty(ytype)) {
		Ext.Msg.alert("系统提示", "请选择类型!");
		return;
	} else {
		var fname="";
		if(parseInt(ytype)==1){
			fname = "performanceMonth.xls";
		}else if(parseInt(ytype)==2){
			fname = "performanceHalf.xls";
		}else{
			fname = "performanceYear.xls";
		}
		
		window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
				+ fname;

;
	}

}