com.keensen.ump.produce.component.produce.ConfirmCodeMgr.prototype.initEvent = function() {

	var _this = this;

}

com.keensen.ump.produce.component.produce.ConfirmCodeMgr.prototype.onSave = function() {

	var _this = this;

	if (this.inputPanel.form.isValid()) {
		var oldcode = this.inputPanel.oldcode.getValue();
		var newcode = this.inputPanel.newcode.getValue();
		var newcode2 = this.inputPanel.newcode2.getValue();

		if (newcode != newcode2) {
			Ext.Msg.alert("系统提示", "确认的密码不一致，请重新输入！");
			return;
		}

		this.inputPanel.form.submit({
					method : "POST",
					url : this.inputPanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {
							var err = D.err;
							if (err == 0) {
								Ext.MessageBox.alert("操作提示", "保存成功!",
										function() {
											_this.inputPanel.form.reset();
										})
							} else {
								var msg = D.msg;
								Ext.MessageBox.alert("操作提示", msg);
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

com.keensen.ump.produce.component.produce.ConfirmCodeMgr.prototype.onExport = function() {

	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在导出，请稍候!',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.produce.queryConfirmCodeWorker.biz.ext',
		jsonData : {
			'condition/userId' : 1
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Msg.alert("系统提示", "导出成功", function() {
							var datas = result.data;
							var mytitle = '名单';
							var columnArr = ['登录名', '姓名'];
							var columns = [];
							// 创建一个workbook
							var workbook = new ExcelJS.Workbook();
							// workbook 添加一个标签的sheet
							var worksheet = workbook.addWorksheet(mytitle);
							// 设置sheet数据中的列名
							for (var i = 0; i < columnArr.length; i++) {
								var column = {};
								column.header = columnArr[i];
								column.key = i;
								columns.push(column);
							}
							var data = [];
							for (var i = 0; i < datas.length; i++) {
								var arr = [];
								arr.push(datas[i].userId);
								arr.push(datas[i].userName);
								data.push(arr)
							}
							
							worksheet.addRows(data);
							const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
							// 下载excel
							workbook.xlsx.writeBuffer().then((data) => {
								const blob = new Blob([data], {
										type: EXCEL_TYPE
									});
								saveAs(blob, 'download.xlsx');
							});
		
						});
			}
		},
		failure : function(resp, opts) {
			mk.hide();
		}
	});
}