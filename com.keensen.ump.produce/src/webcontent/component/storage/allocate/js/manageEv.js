com.keensen.ump.produce.component.storage.AllocateListMgr.prototype.initEvent = function() {
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

com.keensen.ump.produce.component.storage.AllocateListMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel,
			this.listPanel,
			'调拨查询',
			'com.keensen.ump.produce.component.storage.queryAllocate',
			'0,1');

}

com.keensen.ump.produce.component.storage.AllocateListMgr.prototype.onChooseSingleOrder = function() {
	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		this.queryPanel.form.reset();

		var orderNo = B[0].get('orderNo');
		var prodSpecId = B[0].get('materSpecId');
		var materSpecName2 = B[0].get('materSpecName2');

		var orderAmount = B[0].get('orderAmount');
		this.queryPanel.orderAmount.setValue(orderAmount);
		this.queryPanel.prodSpecIdChoose.setValue(prodSpecId);

		this.queryPanel.orderSpecName.setValue(materSpecName2);

		var store = this.queryPanel.prodSpecId.store;
		store.load({
					params : {
						'map/materSpecName22' : materSpecName2

					}
				});

		// var saltLowLimitStd = B[0].get('saltLowLimitStd');
		// var gpdLowLimitStd = B[0].get('gpdLowLimitStd');
		// var gpdUpLimitStd = B[0].get('gpdUpLimitStd');
		this.queryPanel.orderNo.setValue(orderNo);

		// this.queryPanel.saltLowLimitStd.setValue(saltLowLimitStd);
		//		
		// this.queryPanel.form.findField('condition/saltLowLimitChooseFilter').setValue(saltLowLimitStd);
		// this.queryPanel.gpdLowLimitStd.setValue(gpdLowLimitStd);
		// this.queryPanel.form.findField('condition/gpdLowLimitChooseFilter').setValue(gpdLowLimitStd);
		// this.queryPanel.gpdUpLimitStd.setValue(gpdUpLimitStd);
		// this.queryPanel.form.findField('condition/gpdUpLimitChooseFilter').setValue(gpdUpLimitStd);
		this.listPanel.store.removeAll();
		this.chooseSingleOrderWindow.hide();

	}
}

function unique(arr) {
	
	if (!Array.isArray(arr)) {
		console.log('type error!')
		return
	}
	var array = [];
	for (var i = 0; i < arr.length; i++) {
		if (array.indexOf(arr[i]) === -1) {
			array.push(arr[i])
		}
	}
	return array;
}