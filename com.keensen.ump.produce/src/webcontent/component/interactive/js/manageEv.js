com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.initEvent = function() {
	
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
	
	// 查询事件
	this.queryChooseSingleOrderPanel.mon(this.queryChooseSingleOrderPanel,
			'query', function(form, vals) {
				var store = this.chooseSingleOrderListPanel.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseSingleOrderListPanel.pagingToolbar.pageSize
					}
				});
			}, this);
}

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.onChooseOrder = function() {
	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.onChooseSingleOrder = function() {
	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var orderNo = B[0].get('orderNo');
		var prodSpecId = B[0].get('materSpecId');
		this.queryPanel.orderNo.setValue(orderNo);
		this.queryPanel.prodSpecId.setValue(prodSpecId);
		this.chooseSingleOrderWindow.hide();

	}
}