com.zoomlion.hjsrm.cgzqreport.CgzqreportMgr.prototype.initEvent = function() {


	// 查询当前用户是否底盘供应商
	var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST", 'com.zoomlion.hjsrm.deliverynote.delivery.isChassis.biz.ext');
	ret = Ext.decode(result);
	this.isChassis = ret.ret;
	
	
	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var _this = this;

		var matnr2 = _this.queryPanel.matnr2.getValue();
		var regEx = new RegExp("\\n", "gi");

		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		matnr2 = matnr2.replace(regEx, ",");

		var regEx = new RegExp(",,", "gi");
		matnr2 = matnr2.replace(regEx, ",");

		_this.queryPanel.matnr.setValue(matnr2);
		vals["condition/matnr"] = matnr2;

		var store = _this.listNotePanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : _this.listNotePanel.pagingToolbar.pageSize
					}
				});

	}, this);

	this.listNotePanel.store.on('beforeload', function() {

			});

}
com.zoomlion.hjsrm.cgzqreport.CgzqreportMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	var templatename = "CgzqqueryMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,		
		url : 'com.zoomlion.hjsrm.report.cgzqreport.cgzqreportquerydaochu.biz.ext',
		jsonData : daochu,
		success : function(response, action) {
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcel.biz.ext',
					jsonData : {
						excels : result.data,
						templatename : templatename
					},
					success : function(response, action) {
						this.requestMask.hide();
						// 返回值处理
						var res = Ext.decode(response.responseText);
						if (res.success) {
							var fname = res.fname;
							window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
									+ fname;
						}
					},
					failure : function(resp, opts) {
						this.requestMask.hide();
					}
				});
			}
		}
	});

}
