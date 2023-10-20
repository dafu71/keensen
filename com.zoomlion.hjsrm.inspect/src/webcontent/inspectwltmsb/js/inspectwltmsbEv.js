com.zoomlion.hjsrm.inspect.Inspectwltmsbmgr.prototype.initEvent = function() {
	Ext.getCmp(this.wltm).focus(false, 100);
	var _this = this;
	// 增加查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		store.removeAll();
		store.baseParams = vals;
		store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listPanel.pagingToolbar.pageSize
						}
					});		
	}, this);
}