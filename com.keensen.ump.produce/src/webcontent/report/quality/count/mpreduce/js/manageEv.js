com.keensen.ump.produce.report.quality.mpreduceMgr.prototype.initEvent = function() {

	// 获取当前日期
	var currentDate = new Date();
	// 获取当前月份
	var currentMonth = currentDate.getMonth();
	var firstDay = new Date(currentDate.getFullYear(), currentMonth, 1);

	this.queryPanel.form.findField(['condition/reduceDtStart']).setValue(firstDay);
	this.queryPanel.form.findField(['condition/reduceDtEnd']).setValue(currentDate);
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var start = vals['condition/reduceDtStart'];
		var end = vals['condition/reduceDtEnd'];
		if (dayDiff(start, end) > 61) {
			Ext.Msg.alert("系统提示", "查询间隔日期不能大于2个月！");
			return false;

		}
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

com.keensen.ump.produce.report.quality.mpreduceMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.report.quality.queryMpReduce',
			templateFilename : 'ks_mp_quality_mpreduce'
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
