com.keensen.ump.produce.quality.tumocheckMgr.prototype.initEvent = function() {

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

	this.editWindow.items.items[0].mon(this.editWindow.items.items[0],
			'afterload', function() {
				var judgerName = this.editWindow.items.items[0].judgerName
						.getValue();
				
				if (Ext.isEmpty(judgerName) || judgerName == '系统自动') {
					this.editWindow.items.items[0].judgercombobox.setValue(optId);
				}
				
			}, this);

}

com.keensen.ump.produce.quality.tumocheckMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.quality.quality.queryTumoCheck',
			templateFilename : 'ks_quality_tumocheck'
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

com.keensen.ump.produce.quality.tumocheckMgr.prototype.onJudgeBatch = function() {
	// this.listPanel.onEdit();
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			// var materSpecCode = A.get('materSpecCode');
			this.editWindow.items.items[0].loadData(A);
			this.editWindow.show();

			// this.editWindow.items.items[0].specId.setValue(materSpecCode);
		}
	} else {
		Ext.Msg.alert("系统提示", "请选择一条数据行!");
		return
	}
}