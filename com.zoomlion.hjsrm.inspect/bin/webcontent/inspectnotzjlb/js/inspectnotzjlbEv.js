/*
 * 示例event @author rye
 */
com.zoomlion.hjsrm.inspect.Inspectnotzjlbmgr.prototype.initEvent = function() {

	// 增加查询事件
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
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
};
com.zoomlion.hjsrm.inspect.Inspectnotzjlbmgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	var templatename = "Inspectnotzjlb";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,		
		url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectnotzjlbdaochu.biz.ext',
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