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

com.keensen.ump.produce.component.linecheck.IndustryMgr.prototype.onViewCheckPhotos = function() {

	var _this = this;
	var checkId = this.editPanel.checkId.getValue();
	if (Ext.isEmpty(checkId)) {
		Ext.Msg.alert("系统提示", "请扫码请检单!");
		return;
	}
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.apply.expandHead4.biz.ext",
		method : "post",
		jsonData : {
			'entity/id' : checkId
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var data = ret.data;

				var urlPhotoApply = data.urlPhotoApply;
				var urlPhotoApply2 = data.urlPhotoApply2;
				var urlPhotoApply3 = data.urlPhotoApply3;
				var urlPhotoApply4 = data.urlPhotoApply4;
				var urlPhotoApply5 = data.urlPhotoApply5;
				var urlPhotoApply6 = data.urlPhotoApply6;

				var url = '&nbsp;';

				var html = '<table border=1 align=center style="width :100%;height : 100%; border-collapse: collapse;">'
				html += '<tr>'
				html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle; width:33%; height:300px;">'
				if (!Ext.isEmpty(urlPhotoApply)) {
					url = markRootUrl + 'myupload/apply2/' + urlPhotoApply;
					html += '<img src="'
							+ url
							+ '" style="width: 100%; height: 100%; object-fit: cover;"/>';
				} else {
					html += url;
				}
				html += '</td>';
				var url = '&nbsp;';
				html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
				if (!Ext.isEmpty(urlPhotoApply2)) {
					url = markRootUrl + 'myupload/apply2/' + urlPhotoApply2;
					html += '<img src="'
							+ url
							+ '" style="width: 100%; height: 100%; object-fit: cover;"/>'
				} else {
					html += url;
				}
				html += '</td>';
				var url = '&nbsp;';
				html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
				if (!Ext.isEmpty(urlPhotoApply3)) {
					url = markRootUrl + 'myupload/apply2/' + urlPhotoApply2;
					html += '<img src="'
							+ url
							+ '" style="width: 100%; height: 100%; object-fit: cover;"/>'
				} else {
					html += url;
				}
				html += '</td>';
				html += '</tr>';
				html += '<tr>'
				html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
				if (!Ext.isEmpty(urlPhotoApply4)) {
					url = markRootUrl + 'myupload/apply2/' + urlPhotoApply4;
					html += '<img src="'
							+ url
							+ '" style="width: 100%; height: 100%; object-fit: cover;"/>';
				} else {
					html += url;
				}
				html += '</td>';
				var url = '&nbsp;';
				html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
				if (!Ext.isEmpty(urlPhotoApply5)) {
					url = markRootUrl + 'myupload/apply2/' + urlPhotoApply5;
					html += '<img src="'
							+ url
							+ '" style="width: 100%; height: 100%; object-fit: cover;"/>'
				} else {
					html += url;
				}
				html += '</td>';
				var url = '&nbsp;';
				html += '<td style="border: 1px solid #ccc; text-align: center;vertical-align: middle;width:33%; height:300px;">'
				if (!Ext.isEmpty(urlPhotoApply6)) {
					url = markRootUrl + 'myupload/apply2/' + urlPhotoApply6;
					html += '<img src="'
							+ url
							+ '" style="width: 100%; height: 100%; object-fit: cover;"/>'
				} else {
					html += url;
				}
				html += '</td>';
				html += '</tr>';
				html += '</table>';

				var win = new Ext.Window({
					title : '品管拍照',
					width : 1024,
					height : 680,
					layout : 'fit',
					resizable : false,
					closable : true,
					modal : true,
					bodyStyle : 'background-color: #fff; padding: 10px; text-align: center;',
					html : html,
					buttons : [{
								text : '多文件上传',
								// hidden : uid != 'dafu',
								handler : function() {
									_this.uploadCheckPhotos(checkId);
									win.close();

								}
							}, {
								text : '关闭',
								handler : function() {
									win.close();
								}
							}]
				});
				// 显示窗口
				win.show();
			}

		},
		callback : function() {

		}
	})
}

com.keensen.ump.produce.component.linecheck.IndustryMgr.prototype.uploadCheckPhotos = function(
		checkId) {
	var _this = this;

	if (Ext.isEmpty(checkId)) {
		Ext.Msg.alert("系统提示", "请扫码请检单!");
		return;
	}

	var src = markRootUrl + 'produce/component/linecheck/industry/uploadCheckPhotos.jsp?uploadwin=linecheckindustrymgrphotowin&' + 
	'checkId='+checkId;

	var win = new Ext.Window({
		title : '多文件上传',
		id:'linecheckindustrymgrphotowin',
		width : 600,
		height : 480,
		layout : 'fit',
		resizable : false,
		closable : true,
		modal : true,
		bodyStyle : 'background-color: #fff; padding: 10px; text-align: center;',
		html : '<iframe style="border-top-width: 0px; border-left-width: 0px; border-bottom-width: 0px; ' +
				'width: 578px; height: 475px; border-right-width: 0px" ' +
				'src=' + src +
				' frameborder="0" width="100%" scrolling="no" height="100%"></iframe>',
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

// 随机生成一个介于1000到100000（即10万）之间的数字
function getRandomNumber() {
	return Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
}