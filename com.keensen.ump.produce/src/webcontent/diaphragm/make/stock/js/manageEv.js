com.keensen.ump.produce.diaphragm.make.stockMgr.prototype.initEvent = function() {

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

com.keensen.ump.produce.diaphragm.make.stockMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.diaphragm.make.make.queryStock',
			templateFilename : 'ks_zm_stock'
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

com.keensen.ump.produce.diaphragm.make.stockMgr.prototype.onChange = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var id = records[0].get('id');
		var base = records[0].get('base') == '新基地' ? '老基地' : '新基地';
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.diaphragm.make.make.saveEntity4Zmx.biz.ext",
			method : "post",
			jsonData : {
				'entity/id' : id,
				'entity/base' : base
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.load();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

com.keensen.ump.produce.diaphragm.make.stockMgr.prototype.onShow = function() {
	window
			.open('com.keensen.ump.produce.diaphragm.make.queryStock4View.flow?flag=1');
}

com.keensen.ump.produce.diaphragm.make.stockMgr.prototype.onShow4Old = function() {
	window
			.open('com.keensen.ump.produce.diaphragm.make.queryStock4View.flow?flag=2');
}

com.keensen.ump.produce.diaphragm.make.stockMgr.prototype.onShow4New = function() {
	window
			.open('com.keensen.ump.produce.diaphragm.make.queryStock4View.flow?flag=3');
}