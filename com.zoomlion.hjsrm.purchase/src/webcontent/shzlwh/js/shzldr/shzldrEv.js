/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 送货指令查导入
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchase.shzldrMgr.prototype.initEvent = function() {

}


com.zoomlion.hjsrm.purchase.shzldrMgr.prototype.destroy = function() {
	this.excelUploadWin.destroy();
}
// 弹出文件上传选择窗口
com.zoomlion.hjsrm.purchase.shzldrMgr.prototype.onImportExcel = function() {

		this.uploadForm = this.excelUploadWin.getComponent('uploadForm')
				.getForm();
		this.excelUploadWin.show();
	
}

// 文件上传
com.zoomlion.hjsrm.purchase.shzldrMgr.prototype.doUpload = function() {

	var bukrs = this.inputPanel.bukrs.getValue();
	var werks = this.inputPanel.werks.getValue();
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
			var url = this.uploadInputPanel.saveUrl + "?bukrs=" + bukrs + "&werks=" + werks;
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

// 模板文件下载
com.zoomlion.hjsrm.purchase.shzldrMgr.prototype.downFile = function() {


	var bukrs = this.inputPanel.bukrs.getValue();
	var werks = this.inputPanel.werks.getValue();
	var fname="ShdzlDrmb.xls";
		window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
				+ fname;
}