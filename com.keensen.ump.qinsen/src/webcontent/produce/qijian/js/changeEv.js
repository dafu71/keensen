com.keensen.ump.qinsen.produce.qijianchangeMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var start = vals['condition/produceBeginDate'];
		var end = vals['condition/produceEndDate'];
		if (dayDiff(start, end) > 93) {
			// Ext.Msg.alert("系统提示", "查询间隔日期不能大于3个月！");
			// return false;

		}
		var store = this.listPanel.store;

		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
}

com.keensen.ump.qinsen.produce.qijianchangeMgr.prototype.exportExcel = function() {
	var _this = this;
	
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '10000',
			namingsql : 'com.keensen.ump.qinsen.qijian.queryChangeRecords',
			templateFilename : 'ks_qijianchange_export'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var fname = ret.fname;
				if (!Ext.isEmpty(fname)) {
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				} else {
					Ext.Msg.alert("系统提示", ret.msg);
					return false;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

