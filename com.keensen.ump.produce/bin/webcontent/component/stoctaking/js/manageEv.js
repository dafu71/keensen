com.keensen.ump.produce.component.PdastocktakingMgr.prototype.initEvent = function() {

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

}

com.keensen.ump.produce.component.PdastocktakingMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.PdastocktakingMgr.prototype.onSave = function() {
	var _this = this;
	if (this.inputPanel.form.isValid()) {
		this.inputPanel.form.submit({
					method : "POST",
					url : this.inputPanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {
							var code = D.code;
							if (code == 0)
								Ext.MessageBox.alert("操作提示", "保存成功!",
										function() {
											_this.listPanel.refresh();
											_this.inputPanel.form.reset();
											_this.inputPanel.form
													.findField('entity/batchNo')
													.focus(false, 100);
										})
							else {
								Ext.MessageBox.alert("操作提示", "数据重复，不能保存!",
										function() {
										})
							}
						}
					},
					failure : function(C, B) {
						if (B.result.exception) {
							var A, E;
							if (B.result.exception.extype == "biz") {
								E = "【" + B.result.exception.message + "】";
								A = Ext.Msg.WARNING;
							} else {
								A = Ext.Msg.ERROR;
								E = "【系统发生异常！请与管理员联系】";
							}
							Ext.Msg.show({
										width : 350,
										title : "操作提示",
										msg : E,
										icon : A,
										buttons : Ext.Msg.OK
									})
						}
					}
				})
	}
}

// 模板文件下载
com.keensen.ump.produce.component.PdastocktakingMgr.prototype.onDown = function() {

	Ext.Msg.show({
		width : 350,
		title : "操作提示",
		msg : "下载模板后，请按照示例填写真实订单数据，并注意日期和数字格式,示例数据请删除后再提交。",
		icon : Ext.Msg.WARNING,
		buttons : Ext.Msg.OK,
		fn : function(btn) {
			if (btn == "ok") {
				var fname = "ks_component_stocktaking_import.xls";
				window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
						+ fname;
			}
		}

	})

}

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.PdastocktakingMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.component.PdastocktakingMgr.prototype.doUpload = function() {
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

com.keensen.ump.produce.component.PdastocktakingMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.component.PdastocktakingMgr.prototype.exportExcel = function() {
	var _this = this;
	var vals = this.queryPanel.form.getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.stocktaking.queryStocktaking.biz.ext",
		method : "post",
		responseType : 'blob',
		jsonData : vals,
		// jsonData : {
		// 'condition/orderDateStart' : start,
		// 'condition/orderDateEnd' : end
		// },
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);

			if (ret.success) {
				if (!Ext.isEmpty(ret.data)) {
					var date = new Date();
					var year = date.getFullYear();
					var month = date.getMonth() + 1;
					var day = date.getDate();
					date = year + '-' + month + '-' + day;

					var str = '<style>td{border:1px black solid;}</style>'
							+ '<table class="table-data table-bordered table"><tr>';

					str += '<td align="center" colspan=9>' + date + '盘库</td></tr><tr>'

					str += '<td align="center">元件序号</td>'

					+ '<td align="center">卷膜批号</td>'
							+ '<td align="center">生产规格型号</td>'
							+ '<td align="center">订单下达型号</td>'
							+ '<td align="center">唛头标签型号</td>'
							+ '<td align="center">卷膜日期</td>'
							+ '<td align="center">区域</td>'
							+ '<td align="center">盘库时间</td>'
							+ '<td align="center">盘库人</td>'

							+ '</tr>';

					Ext.each(ret.data, function(r) {
								var cnt2 = r.cnt2;
								str += '<tr><td align="center">' + formatStr(r.batchNo)

								+ '</td><td align="center">' + formatStr(r.juanmoBatchNo)
										+ '</td><td align="center">' + formatStr(r.materSpecName)
										+ '</td><td align="center">'
										+ formatStr(r.orderMaterSpecName)
										+ '</td><td align="center">'
										+ formatStr(r.markSpecCode)
										+ '</td><td align="center">'
										+ formatStr(r.produceDt) + '</td>'
										+ '<td align="center">'

										+ formatStr(r.step)

										+ '</td>'

										+ '<td align="center">'
										+ r.createTime + '</td>'

										+ '<td align="center">'
										+ formatStr(r.createName) + '</td>' + '</tr>';
							})
					str += '</table>';

					// application/vnd.ms-excel;charset=utf-8
					var blob = new Blob(["\ufeff", str], {
								type : 'application/vnd.ms-excel;charset=utf-8'
							});
					var link = document.createElement('a');
					var url = URL.createObjectURL(blob);
					link.href = url;
					link.download = 'exported-data.xls'; // 指定导出文件的名称
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				} else {
					Ext.Msg.alert("系统提示", "没有查询到数据!");
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

function formatStr(str){
	return ((Ext.isEmpty(str)) || ('null' == str)) ? '':str;
}