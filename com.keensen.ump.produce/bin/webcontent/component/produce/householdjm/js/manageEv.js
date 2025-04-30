com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

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

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onAdd = function() {
	this.addWindow.show();
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();

		}
	}
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '卷膜记录',
			'com.keensen.ump.produce.component.produce.queryHouseholdJm');

}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onScan = function() {

	var _this = this;
	var cmBatchNo = this.addWindow.cmBatchNo.getValue();

	if (Ext.isEmpty(cmBatchNo)) {
		return;
	}

	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.base.common.query.biz.ext',
				jsonData : {
					"condition/cmBatchNo" : cmBatchNo,
					"nameSqlId" : "com.keensen.ump.produce.component.produce.queryCm"
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					var data = result.data;

					if (Ext.isEmpty(data)) {
						Ext.Msg.alert("系统提示", "裁叠膜栈板号不存在!", function() {
									_this.addWindow.cmBatchNo.setValue('');
								});
						return

					} else {
						_this.addWindow.orderNo.setValue(data[0].orderNo);
						_this.addWindow.prodSpecId.setValue(data[0].prodSpecId);
						// _this.onSave();

					}
				}
			});
}
