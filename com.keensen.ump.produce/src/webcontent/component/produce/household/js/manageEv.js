com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.initEvent = function() {

	var _this = this;

	this.listPanel4BatchAdd.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
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

	// 查询事件
	this.queryChooseSingleBatchNoPanel.mon(this.queryChooseSingleBatchNoPanel,
			'query', function(form, vals) {
				var store = this.chooseSingleBatchNoListPanel.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseSingleBatchNoListPanel.pagingToolbar.pageSize
					}
				});
			}, this);

	// 修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

}

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.onAddBatch = function() {

	this.listPanel4BatchAdd.store.load();
	this.batchAddWindows.show()

}

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.onChooseBatchNo = function() {

	this.chooseSingleBatchNoWindow.show();
}

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.onChooseSingleBatchNo = function() {

	var B = this.chooseSingleBatchNoListPanel.getSelectionModel()
			.getSelections();
	if (B && B.length == 1) {
		var batchNo = B[0].get('batchNo');
		var usefulLength = B[0].get('usefulLength');

		if (!this.batchAddWindows.hidden) {
			this.rec.set('batchNo', batchNo);
			this.rec.set('length', usefulLength);
			this.rec.commit();
		}

		if (!this.editWindow.hidden) {
			this.editWindow.batchNo.setValue(batchNo);
		}
		this.chooseSingleBatchNoWindow.hide();
	}
}

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.onChooseOrder = function() {

	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.onChooseSingleOrder = function() {

	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var orderNo = B[0].get('orderNo');
		var prodSpecId = B[0].get('materSpecId');
		var materSpecName = B[0].get('materSpecName');
		var materSpecName2 = B[0].get('materSpecName2');
		var orderAmount = B[0].get('orderAmount');
		var blankingSize = B[0].get('blankingSize');

		if (!this.batchAddWindows.hidden) {
			this.rec.set('orderNo', orderNo);
			this.rec.set('prodSpecId', prodSpecId);
			this.rec.set('prodSpecName', materSpecName);
			this.rec.set('blankingSize', blankingSize);
			this.rec.commit();
			
		}

		if (!this.editWindow.hidden) {
			this.editWindow.orderNo.setValue(orderNo);
			this.editWindow.prodSpecId.setValue(prodSpecId);
			this.editWindow.blankingSize.setValue(blankingSize);
		}
		this.chooseSingleOrderWindow.hide();
	}
}

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.onView = function() {
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

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '裁网记录',
			'com.keensen.ump.produce.component.produce.queryCut');

}

com.keensen.ump.produce.component.produce.HouseholdMgr.prototype.onBatchAdd = function() {

	var _this = this;
	var records = this.listPanel4BatchAdd.store.getRange();
	var len = records.length;
	if (len == 0)
		return;
	var entities = [];
	for (var i = 0; i < records.length; i++) {
		var r = records[i];
		var batchNo = r.get('batchNo');
		var orderNo = r.get('orderNo');
		var prodSpecId = r.get('prodSpecId');
		var length = r.get('length');
		var blankingSize = r.get('blankingSize');
		var cutAmount = r.get('cutAmount');
		var pageType = r.get('pageType');
		var ifCutFull = r.get('ifCutFull');
		var planAmount = r.get('planAmount');
		if (!Ext.isEmpty(batchNo)
				&& (Ext.isEmpty(orderNo) || Ext.isEmpty(prodSpecId)
						|| Ext.isEmpty(length) || Ext.isEmpty(blankingSize)
						|| Ext.isEmpty(cutAmount) || Ext.isEmpty(pageType)
						|| Ext.isEmpty(ifCutFull) || Ext.isEmpty(planAmount))) {
			Ext.Msg.alert("系统提示", "第" + (i + 1) + "行数据有空值!");
			return
		} else if (!Ext.isEmpty(batchNo) && !Ext.isEmpty(orderNo)
				&& !Ext.isEmpty(prodSpecId) && !Ext.isEmpty(length)
				&& !Ext.isEmpty(blankingSize) && !Ext.isEmpty(cutAmount)
				&& !Ext.isEmpty(pageType) && !Ext.isEmpty(ifCutFull)
				&& !Ext.isEmpty(planAmount)) {
			entities.push(r.data);
		}
	}

	if (entities.length == 0)
		return;

	var mk = new Ext.LoadMask(this.batchAddWindows.id, {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.produce.saveHouseholdBatch.biz.ext',
		jsonData : {
			entities : entities
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Msg.alert("系统提示", "保存成功", function() {
							_this.listPanel.store.reload();
							_this.batchAddWindows.hide();
						});
			}
		},
		failure : function(resp, opts) {
			mk.hide();
		}
	});
}
