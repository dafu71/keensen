com.keensen.ump.produce.quality.mptest.c21Mgr.prototype.initEvent = function() {
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

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {

			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);

			}, this);
}

com.keensen.ump.produce.quality.mptest.c21Mgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.mptest.c21Mgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.quality.mptest.c21Mgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.c21Mgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.mptest.c21Mgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.quality.mptest3.queryC21Records',
			templateFilename : 'ks_mp_mptest_c21'
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