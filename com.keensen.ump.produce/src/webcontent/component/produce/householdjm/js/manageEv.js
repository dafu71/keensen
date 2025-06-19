com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.initEvent = function() {

	var _this = this;

	this.getRight();
	
	// 查询事件
	this.queryPanel4ProduceCount.mon(this.queryPanel4ProduceCount,
			'query', function(form, vals) {
				var store = this.listPanel4ProduceCount.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ProduceCount.pagingToolbar.pageSize
					}
				});
			}, this);

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

	this.listPanel.store.on('load', function() {
				var records = _this.listPanel.store.getRange();
				if (records.length == 0) {
					Ext.getCmp('householdjmamount').setValue('');
					return
				}
				var totalAmount = records[0].data.totalAmount;
				Ext.getCmp('householdjmamount').setValue('合计数量:' + totalAmount);
			})

	// 修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.orderDate) {
					data.orderDate = data.orderDate.split('.')[0];
					var date1 = data.orderDate.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('entity/orderDate')
							.setValue(new Date(date1));
				}

			}, this);

}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onAdd = function() {

	this.addWindow.show();
	if (Ext.isEmpty(this.addWindow.workerId.getValue())) {
		this.addWindow.workerId.setValue(operatorid);
	}
	this.addWindow.machineCode.setValue(this.currentMachineCode);

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
	var obj = this.addWindow.isVisible() ? this.addWindow : this.editWindow;

	var cmBatchNo = obj.cmBatchNo.getValue();

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
									obj.cmBatchNo.setValue('');
								});
						return

					} else {
						obj.orderNo.setValue(data[0].orderNo);
						obj.prodSpecId.setValue(data[0].prodSpecId);
						// _this.onSave();

					}
				}
			});
}

// 获取权限
com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.getRight = function() {
	var _this = this;
	Ext.Ajax.request({
				url : "produce/component/produce/householdjm/right.json",
				method : "post",
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					var data = ret.data;
					var exportExcel = data[0].exportExcel;

					Ext.getCmp(exportExcelBtn).setVisible(exportExcel
							.indexOf(uid) != -1);

				},
				callback : function() {
				}
			})
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onQueryProduceCount = function() {
	this.produceCountWindow.show();
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.exportProduceCountExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel4ProduceCount,
			this.listPanel4ProduceCount, '家用膜产量',
			'com.keensen.ump.produce.component.producecount.queryHHJmCount', '0,1');
}