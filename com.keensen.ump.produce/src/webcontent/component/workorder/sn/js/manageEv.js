com.keensen.ump.produce.component.workorder.SnMgr.prototype.initEvent = function() {

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
	this.queryChooseSingleOrderPanel.mon(this.queryChooseSingleOrderPanel, 'query', function(form, vals) {
		var store = this.chooseSingleOrderListPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseSingleOrderListPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	
	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

}

com.keensen.ump.produce.component.workorder.SnMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.component.workorder.SnMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.workorder.SnMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.workorder.SnMgr.prototype.onChooseOrder = function() {
	this.queryChooseSingleOrderPanel.form.reset();
	this.chooseSingleOrderListPanel.store.removeAll();
	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.workorder.SnMgr.prototype.onChooseSingleOrder = function() {
	var _this = this;

	var obj = this.inputWindow.isVisible()?this.inputWindow:this.editWindow;
	
	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var orderNo = B[0].get('orderNo');
		var materSpecName = B[0].get('materSpecName');
		var orderId = B[0].get('id');

		obj.orderNo.setValue(orderNo);
		obj.materSpecName.setValue(materSpecName);
		obj.orderId.setValue(orderId);
		
		this.chooseSingleOrderWindow.hide();
	}
}

function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}