com.keensen.ump.produce.quality.timojudgeMgr.prototype.initEvent = function() {

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

	/*
	 * this.editpanel.form.mon(this.editpanel.form, 'aftersave', function() {
	 * this.listPanel.store.reload();
	 * 
	 * var judgerName = this.editWindow.items.items[0].judgerName .getValue();
	 * 
	 * if (Ext.isEmpty(judgerName) || judgerName == '系统自动') {
	 * this.editWindow.items.items[0].judgercombobox.setValue(optId); }
	 * 
	 *  }, this);
	 */

}

com.keensen.ump.produce.quality.timojudgeMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.quality.quality.queryTumoJudge',
			templateFilename : 'ks_quality_tumojudge'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isIE) {
					window.open('/default/deliverynote/seek/down4IE.jsp?fname='
							+ fname);
				} else {
					window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
							+ fname;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.quality.timojudgeMgr.prototype.onSave = function() {
	var _thispanel = this.editPanel;
	var _thislist = this.listPanel;
	var _this = this;
	if (_thispanel.form.isValid()) {
		_thispanel.form.submit({
					method : "POST",
					url : _thispanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {
							Ext.MessageBox.alert("操作提示", "保存成功!", function() {
										_thislist.store.reload();
										_this.editWindow.hide();
									})
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

com.keensen.ump.produce.quality.timojudgeMgr.prototype.onJudge = function() {
	// this.listPanel.onEdit();
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length == 1) {
			var r = B[0];
			var recordId = r.data.recordId;
			this.editWindow.items.items[0].loadData(r);
			this.listPanel2.store.load({
						params : {
							"condition/batchId" : recordId
						}
					});
			this.editWindow.show();
		}
	} else {
		Ext.Msg.alert("系统提示", "请选择数据!");
		return
	}
}