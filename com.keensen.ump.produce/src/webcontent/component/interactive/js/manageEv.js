com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.initEvent = function() {

	var _this = this;

	this.toggle(true);

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

	this.queryPanel.second.mon(this.queryPanel.second, 'check', function(o,
					flag) {
				this.toggle(!flag);

			}, this);

	this.storagecombo.mon(this.storagecombo, 'select', function(record, index) {
				var ids = this.storagecombo.myvalue;
				this.queryPanel.form.findField('condition/storageIdFilter')
						.setValue(ids);
			}, this);

	this.listPanel.store.on('load', function() {
				// Ext.getCmp(countId).setValue('膜片共 ' +
				// _this.listPanel.store.getCount() + ' 批次');
			});

	this.queryPanel.prodSpecId.store.on('load', function() {
				/*
				 * var prodSpecId =
				 * _this.queryPanel.prodSpecIdChoose.getValue(); var records =
				 * _this.queryPanel.prodSpecId.store.getRange();
				 * if(records.length==0) return; if(!Ext.isEmpty(prodSpecId)){
				 * _this.queryPanel.prodSpecId.setValue(prodSpecId); }
				 */

			});

	this.listPanel4Arrange.store.on('load', function() {
				_this.calculateUseLength();
			});

	this.listPanel4Arrange.store.on('remove', function(o, r, i) {
				_this.calculateUseLength();
			});

	this.listPanel4Arrange.store.on('update', function(o, r, i) {
				_this.calculateUseLength();
			});

	this.planWeekDateStore.on('load', function() {
				var r = _this.planWeekDateStore.getRange();
				var startDate = r[0].get('startDate');
				var endDate = r[0].get('endDate');
				_this.arrangePanel.planDate.setMaxValue(endDate);
				_this.arrangePanel.planDate.setMinValue(startDate);
			});
}

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.calculateUseLength = function() {
	var records = this.listPanel4Arrange.store.getRange();
	var useLengthSum = 0
	Ext.each(records, function(r) {
				var useLength = r.data['useLength'];
				useLengthSum += parseFloat(useLength);
			});
	Ext.getCmp(useLengthSumId).setValue('当前膜片共 '
			+ roundToDecimalPlace(useLengthSum, 2) + '米');
}

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.onChooseOrder = function() {
	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.onChooseSingleOrder = function() {
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

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.toggle = function(
		disabled) {

	this.queryPanel.saltLowLimitStd.setDisabled(disabled);
	this.saltLowLimitChoose.setDisabled(disabled);
	this.queryPanel.gpdLowLimitStd.setDisabled(disabled);
	this.gpdLowLimitChoose.setDisabled(disabled);
	this.queryPanel.gpdUpLimitStd.setDisabled(disabled);
	this.gpdUpLimitChoose.setDisabled(disabled);
	this.queryPanel.mpSaltLowLimitStd.setDisabled(disabled);
	this.mpSaltLowLimitChoose.setDisabled(disabled);

}

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.createPlanDay = function() {
	var records = this.listPanel.store.getRange();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "至少需要有一条膜片记录！")
		return false;
	}

	var batchNos = [];

	Ext.each(records, function(r) {
				var batchNo = r.data['mpBatchNo'];
				batchNos.push("'" + batchNo + "'");
			});
	var tumoBatchNo = batchNos.join(",");

	var store = this.listPanel4Arrange.store;
	store.baseParams = {
		'map/tumoBatchNo' : tumoBatchNo
	};
	store.load({});
	var orderAmount = this.queryPanel.orderAmount.getValue();
	var mpSize = this.queryPanel.mpSize.getValue();

	var arrangeLength = roundToDecimalPlace(orderAmount * mpSize, 2)
	Ext.getCmp(arrangeLengthId).setValue('需膜片 ' + arrangeLength + '米');

	this.arrangePanel.arrangeAmount.setValue(orderAmount);

	Ext.getCmp(orderAmountId).setValue('订单数量 ' + orderAmount + '只');
	this.arrangeWindow.show();

}

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.doCreatePlanDay = function() {

	var _this = this;

	if (!this.arrangePanel.form.isValid())
		return;

	var records = this.listPanel4Arrange.store.getRange();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "至少需要有一条膜片记录！")
		return false;
	}

	// 数据校验

	for (var i = 0; i < records.length; i++) {
		var r = records[i];
		var useLength = r.get('useLength');
		var usefulLength = r.get('usefulLength');
		var batchNo = r.get('batchNo');
		
		
		if(parseFloat(useLength)>parseFloat(usefulLength)){
			Ext.Msg.alert("系统提示", "膜片" + batchNo + "使用长度不能大于可用长度！")
			return false;
		}
	}

	var details = [];
	Ext.each(records, function(r) {

				var d = {
					'batchNo' : r.data['batchNo'],
					'useLength' : r.data['useLength'],
					'storageName' : r.data['storageName'],
					'storagePosition' : r.data['storagePosition']
				}

				details.push(d);

			});

	var planDate = this.arrangePanel.planDate.getValue();

	var orderNo = this.queryPanel.orderNo.getValue();
	var prodSpecId = this.queryPanel.prodSpecId.getValue();
	var prodSpecName = this.queryPanel.prodSpecId.getRawValue();
	var orderSpecName = this.queryPanel.orderSpecName.getValue();

	var arrangeAmount = this.arrangePanel.arrangeAmount.getValue();

	var mk = new Ext.LoadMask(Ext.getBody(), {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.interactive.createPlanDay.biz.ext',
		jsonData : {
			'param/orderNo' : orderNo,
			'param/prodSpecId' : prodSpecId,
			'param/prodSpecName' : prodSpecName,
			'param/orderSpecName' : orderSpecName,
			'param/planDate' : planDate,
			'param/arrangeAmount' : arrangeAmount,
			'details' : details
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				var err = result.err;
				var msg = result.msg;
				if (err == 0) {
					Ext.Msg.alert("系统提示", "操作成功", function() {
								_this.arrangeWindow.hide();
								_this.listPanel.store.reload();
							});
				} else {
					Ext.Msg.alert("系统提示", msg, function() {

							});
				}

			}
		},
		failure : function(resp, opts) {
			mk.hide();
		}
	});
}

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.removeBatchNo = function() {
	var records = this.listPanel4Arrange.getSelectionModel().getSelections();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		for (var i = 0; i < records.length; i++) {
			this.listPanel4Arrange.store.remove(records[i]);
		}

	}
}

com.keensen.ump.produce.component.InteractiveSelectMgr.prototype.resetBatchNo = function() {
	this.listPanel4Arrange.store.reload();
}

function roundToDecimalPlace(number, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.round(number * factor) / factor;
}