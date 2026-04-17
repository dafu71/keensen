com.keensen.ump.produce.component.linecheck.IndustryMgr.prototype.initEvent = function() {

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

				if (this.queryPanel.form.isValid()) {
					this.editPanel.form.reset();
					var code = this.queryPanel.code.getValue();
					var B = {};
					B.data = {
						'code' : code
					};
					this.editPanel.loadData(B);
				}
			}, this);

	this.editPanel.mon(this.editPanel, 'aftersave', function() {
				this.queryPanel.form.reset();
				this.editPanel.form.reset();
			}, this);

	this.editPanel.mon(this.editPanel, 'afterload', function() {

		var labelDrawingUrl = this.editPanel.labelDrawingUrl.getValue();
		if (!Ext.isEmpty(labelDrawingUrl)) {
			var labelUrl = markRootUrl + labelDrawingUrl;
			labelUrl = '<img title="单击查看完整图片" src="'
					+ labelUrl
					+ '?ver='
					+ getRandomNumber()
					+ '" onclick= "javascript:window.open('
					+ "'"
					+ labelUrl
					+ "'"
					+ ');" style="cursor: pointer;width:auto; height:auto; max-width:98%; max-height:50px;" />';
			this.editPanel.labelDrawing.setValue(labelUrl);
		}
		var markDrawingUrl = this.editPanel.markDrawingUrl.getValue();
		if (!Ext.isEmpty(markDrawingUrl)) {
			var labelUrl = markRootUrl + markDrawingUrl;
			labelUrl = '<img title="单击查看完整图片" src="'
					+ labelUrl
					+ '?ver='
					+ getRandomNumber()
					+ '" onclick= "javascript:window.open('
					+ "'"
					+ labelUrl
					+ "'"
					+ ');" style="cursor: pointer;width:auto; height:auto; max-width:98%; max-height:50px;" />';
			this.editPanel.markDrawing.setValue(labelUrl);
		}
	}, this);
}

// 拍照查看
com.keensen.ump.produce.component.linecheck.IndustryMgr.prototype.viewPhotos = function() {

	var urlPhotoApply = this.editPanel.urlPhotoApply.getValue();
	var urlPhotoApply2 = this.editPanel.urlPhotoApply2.getValue();
	var urlPhotoApply3 = this.editPanel.urlPhotoApply3.getValue();
	var urlPhotoApply4 = this.editPanel.urlPhotoApply4.getValue();
	var urlPhotoApply5 = this.editPanel.urlPhotoApply5.getValue();
	var urlPhotoApply6 = this.editPanel.urlPhotoApply6.getValue();

	var url = '&nbsp;';

	var html = '<table border=1 align=center style="width :100%;height : 100%; border-collapse: collapse;">'
	html += '<tr>'
	html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle; width:33%; height:300px;">'
	if (!Ext.isEmpty(urlPhotoApply)) {
		url = markRootUrl + 'myupload/apply/' + urlPhotoApply;
		html += '<img src="' + url
				+ '" style="width: 100%; height: 100%; object-fit: cover;"/>';
	} else {
		html += url;
	}
	html += '</td>';
	var url = '&nbsp;';
	html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
	if (!Ext.isEmpty(urlPhotoApply2)) {
		url = markRootUrl + 'myupload/apply/' + urlPhotoApply2;
		html += '<img src="' + url
				+ '" style="width: 100%; height: 100%; object-fit: cover;"/>'
	} else {
		html += url;
	}
	html += '</td>';
	var url = '&nbsp;';
	html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
	if (!Ext.isEmpty(urlPhotoApply3)) {
		url = markRootUrl + 'myupload/apply/' + urlPhotoApply2;
		html += '<img src="' + url
				+ '" style="width: 100%; height: 100%; object-fit: cover;"/>'
	} else {
		html += url;
	}
	html += '</td>';
	html += '</tr>';
	html += '<tr>'
	html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
	if (!Ext.isEmpty(urlPhotoApply4)) {
		url = markRootUrl + 'myupload/apply/' + urlPhotoApply4;
		html += '<img src="' + url
				+ '" style="width: 100%; height: 100%; object-fit: cover;"/>';
	} else {
		html += url;
	}
	html += '</td>';
	var url = '&nbsp;';
	html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
	if (!Ext.isEmpty(urlPhotoApply5)) {
		url = markRootUrl + 'myupload/apply/' + urlPhotoApply5;
		html += '<img src="' + url
				+ '" style="width: 100%; height: 100%; object-fit: cover;"/>'
	} else {
		html += url;
	}
	html += '</td>';
	var url = '&nbsp;';
	html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
	if (!Ext.isEmpty(urlPhotoApply6)) {
		url = markRootUrl + 'myupload/apply/' + urlPhotoApply6;
		html += '<img src="' + url
				+ '" style="width: 100%; height: 100%; object-fit: cover;"/>'
	} else {
		html += url;
	}
	html += '</td>';
	html += '</tr>';
	html += '</table>';

	var win = new Ext.Window({
		title : '拍照图',
		width : 1024,
		height : 680,
		layout : 'fit',
		resizable : false,
		closable : true,
		modal : true,
		bodyStyle : 'background-color: #fff; padding: 10px; text-align: center;',
		html : html,
		buttons : [{
					text : '关闭',
					handler : function() {
						win.close();
					}
				}]
	});
	// 显示窗口
	win.show();

}

com.keensen.ump.produce.component.linecheck.IndustryMgr.prototype.onSave = function() {
	if (this.editPanel.form.isValid()) {
		this.editPanel.saveData();
	}
}
// 随机生成一个介于1000到100000（即10万）之间的数字
function getRandomNumber() {
	return Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
}