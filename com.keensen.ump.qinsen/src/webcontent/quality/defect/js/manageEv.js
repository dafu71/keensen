com.keensen.ump.qinsen.quality.DefectMgr.prototype.initEvent = function() {

	var _this = this;
	this.opt = '';

	this.listPanel.store.on('load', function() {

		if (_this.queryFlag) {
			_this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			_this.requestMask.show();
			var vals = _this.queryPanel.getForm().getValues();
			Ext.Ajax.request({
				url : "com.keensen.ump.qinsen.quality.queryDefectLossSum.biz.ext",
				method : "post",
				jsonData : vals,
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						if (!Ext.isEmpty(ret.data)) {
							var data = ret.data[0];
							Ext.getCmp('defectlossinfo').setValue('不良长度:'
									+ roundToDecimalPlace(data.loss, 2)
									+ '米');

						} else {
							Ext.getCmp('defectlossinfo').setValue('');
						}
					}
				},
				callback : function() {
					_this.requestMask.hide()
				}
			})

		}
		this.queryFlag = false;
	})

	if (!Ext.isEmpty(tumoBatchNo4Search) && 'null' != tumoBatchNo4Search) {
		// alert(tumoBatchNo4Search);
		this.queryPanel.tumoBatchNoStr.setValue(tumoBatchNo4Search);
		this.queryPanel.form.findField('condition/produceDtStart').setValue('');
		this.queryPanel.form.findField('condition/produceDtEnd').setValue('');
		var store = this.listPanel.store;
		store.baseParams = {
			'condition/tumoBatchNoStr' : tumoBatchNo4Search
		};
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});

	}

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {

				// var C = gird.getSelectionModel().getSelections();
				// var r = C[0];
				// var recordId = r.data.recordId;
				// var flag = r.data.flag;
				// if (flag == 'DM') {
				// return false;
				// }

			})
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		this.queryFlag = true;
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

				var flag = cell.get('flag');
				var ifModifyDefect = cell.get('ifModifyDefect');
				var tumoBatchNo = cell.get('tumoBatchNo');
				var tumoBatchId = cell.get('tumoBatchId');

				if (this.opt == 'defectTm') {
					if (ifModifyDefect != '1' && modifyFlag != 1) {
						Ext.Msg.alert("系统提示", "该涂膜批次不能编辑涂膜不良！");
						return;
					}
					this.defectTmWin.inputPanel.tumoBatchNo
							.setValue(tumoBatchNo);
					this.defectTmWin.inputPanel.tumoRecordId
							.setValue(tumoBatchId);
					this.defectTmWin.inputPanel.produceDt.setValue(new Date());
					this.defectTmWin.inputPanel.produceDt.setReadOnly(true);
					this.defectTmWin.show();
					return;
				}

				if (flag == 'TM') {
					// 膜片不良记录修改
					if (ifModifyDefect == '1' || modifyFlag == 1) {
						this.editWindow.show();
						this.editWindow.loadData(cell);
					} else {
						Ext.Msg.alert("系统提示", "该涂膜批次不能编辑涂膜不良！");
						return;
					}
				} else {
					this.editWindow2.show();
					this.editWindow2.loadData(cell);
				}

			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.produceDt) {
					data.produceDt = data.produceDt.split('.')[0];
					var date1 = data.produceDt.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('entity/produceDt')
							.setValue(new Date(date1));
				}

			}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.produceDt) {
					data.produceDt = data.produceDt.split('.')[0];
					var date1 = data.produceDt.replace(regEx, "/");
					this.editWindow2.items.items[0].form
							.findField('entity/produceDt')
							.setValue(new Date(date1));
				}

			}, this);

}

com.keensen.ump.qinsen.quality.DefectMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.qinsen.quality.DefectMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '膜片不良记录',
			'com.keensen.ump.qinsen.quality.queryDefect');
	/*
	 * var _this = this; var daochu = _this.queryPanel.getForm().getValues();
	 * this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	 * msg : "后台正在操作,请稍候!" }); this.requestMask.show(); Ext.Ajax.request({ url :
	 * "com.keensen.ump.qinsen.quality.exportDefect.biz.ext", method : "post",
	 * jsonData : daochu, success : function(resp) { var ret =
	 * Ext.decode(resp.responseText); if (ret.success) { if (ret.success) { var
	 * fname = ret.fname; if (Ext.isIE) { window
	 * .open('/default/deliverynote/seek/down4IE.jsp?fname=' + fname); } else {
	 * window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" +
	 * fname; } } } }, callback : function() { _this.requestMask.hide() } })
	 */
}

com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAdd = function() {
	// this.inputWindow.show();

}

com.keensen.ump.qinsen.quality.DefectMgr.prototype.destroy = function() {
	this.defectTmWin.destroy();
	this.defectTmWin2.destroy();
	this.defectZmWin.destroy();
	this.defectZmWin2.destroy();
}

com.keensen.ump.qinsen.quality.DefectMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

// 涂膜录入涂膜不良
com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAddTm = function() {
	this.opt = 'defectTm';
	this.listPanel.onEdit();
	// this.defectTmWin.show();
};

// 涂膜录入铸膜不良
com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAddZm = function() {
	this.defectZmWin.show();
};

// 裁膜录入涂膜不良
com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAddTm2 = function() {
	this.defectTmWin2.show();
};

// 裁膜录入铸膜不良
com.keensen.ump.qinsen.quality.DefectMgr.prototype.onAddZm2 = function() {
	this.defectZmWin2.show();
};

// 膜片取样
com.keensen.ump.qinsen.quality.DefectMgr.prototype.onTakeSample = function() {

};

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}