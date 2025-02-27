com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.initEvent = function() {
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

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '虚拟仓记录',
			'com.keensen.ump.produce.component.vstorage.queryVstorage', '0,1');
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onGyyRemark = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}
	var arr = new Array();
	for (var i = 0; i < records.length; i++) {
		var exceptionType = records[i].get('exceptionType');
		if (exceptionType != '需要工艺给意见') {
			Ext.Msg.alert('系统提示', '请选择需要工艺给意见的数据');
			return false;
		}

		var recordId = records[i].get('qjBatchId');
		arr.push(recordId);
	}
	this.editWindow4Gyy.recordIds.setValue(arr.join(','));
	this.editWindow4Gyy.show();
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onPgRemark = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}
	var arr = new Array();
	for (var i = 0; i < records.length; i++) {
		var exceptionType = records[i].get('exceptionType');
		if (exceptionType != '需要品管给意见') {
			Ext.Msg.alert('系统提示', '请选择需要品管给意见的数据');
			return false;
		}

		var recordId = records[i].get('qjBatchId');
		arr.push(recordId);
	}
	this.editWindow4Pg.recordIds.setValue(arr.join(','));
	this.editWindow4Pg.show();
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onWarehousing = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert('系统提示', '请先选择单条数据');
		return false;
	}

	var exceptionType = records[0].get('exceptionType');
	if (exceptionType != '超计划生产') {
		Ext.Msg.alert('系统提示', '请选择超计划生产的数据');
		return false;
	}

	var jmBatchNo = records[0].get('jmBatchNo');

	var spacepanel = Ext.getCmp('spacepanel');

	if (jmBatchNo == '') {
		return;
	}

	var itemId = 'menu10003222';
	var url = '/produce/component/semifinished/warehousing/index.jsp?jmBatchNo='
			+ jmBatchNo;
	var title = 'PDA入库';
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
				id : '10003222',
				text : title,
				attributes : {
					respath : url
				}
			});

}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onModiOrder = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}

	for (var i = 0; i < records.length; i++) {

		var recordId = records[i].get('qjBatchId');
		var dryWet = records[i].get('dryWet');

		if (dryWet == '干' && modifyOrderNoFlag4Dry == 0) {
			Ext.Msg.alert('系统提示', '您无权修改干膜订单号');
			return false;
		}

		if (dryWet == '湿' && modifyOrderNoFlag4Wet == 0) {
			Ext.Msg.alert('系统提示', '您无权修改湿膜订单号');
			return false;
		}

	}
	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.vstorage.VstorageListMgr.prototype.onChooseSingleOrder = function() {
	var _this = this;
	var grid = this.listPanel;

	var records = grid.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert('系统提示', '请先选择数据');
		return false;
	}
	var arr = new Array();
	for (var i = 0; i < records.length; i++) {

		var recordId = records[i].get('qjBatchId');
		var dryWet = records[i].get('dryWet');

		if (dryWet == '干' && modifyOrderNoFlag4Dry == 0) {
			Ext.Msg.alert('系统提示', '您无权修改干膜订单号');
			return false;
		}

		if (dryWet == '湿' && modifyOrderNoFlag4Wet == 0) {
			Ext.Msg.alert('系统提示', '您无权修改湿膜订单号');
			return false;
		}

		recordId = recordId + '';
		if (recordId.substr(0, 1) != '2') {
			// Ext.Msg.alert('系统提示', '一期数据不能修改');
			// return false;
		}
		arr.push(recordId);
	}

	var orderNo = '';
	var prodSpecId = '';
	var orderNo = '';
	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		orderNo = B[0].get('orderNo');
		prodSpecId = B[0].get('materSpecId');

	}
	
	if (Ext.isEmpty(orderNo)) {
		Ext.Msg.alert('系统提示', '请选择订单号');
		return false;
	}

	Ext.Msg.confirm('提示', '共' + records.length + '个批次，您确定要修改这些产品的订单号？',
			function(btn) {
				if (btn === 'yes') {
					_this.requestMask = this.requestMask
							|| new Ext.LoadMask(Ext.getBody(), {
										msg : "后台正在操作,请稍候!"
									});
					_this.requestMask.show();
					Ext.Ajax.request({
						url : "com.keensen.ump.qinsen.qijian.modiOrderAndProdSpecId.biz.ext",
						method : "post",
						jsonData : {
							orderNo : orderNo,
							prodSpecId : prodSpecId,
							recordIds : arr.join(',')
						},
						success : function(resp) {
							var ret = Ext.decode(resp.responseText);
							if (ret.success) {
								Ext.Msg.alert("系统提示", "操作成功！", function() {
											_this.listPanel.store.load();
											_this.chooseSingleOrderWindow.hide();

										})
							} else {
								Ext.Msg.alert("系统提示", "修改订单号失败！")

							}

						},
						callback : function() {
							_this.requestMask.hide()
						}
					})
				}
			});

}