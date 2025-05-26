com.keensen.ump.produce.component.OutofstockMgr.prototype.initEvent = function() {

	var _this = this;
	
	this.getRight();

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		if (Ext.isEmpty(vals)) {
			vals = {

			};
		}
		vals['nameSqlId'] = 'com.keensen.ump.produce.component.semifinished.queryOutofstock';
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 查询事件
	this.queryChooseSingleUserPanel.mon(this.queryChooseSingleUserPanel,
			'query', function(form, vals) {
				var store = this.chooseSingleUserListPanel.store;
				if (Ext.isEmpty(vals)) {
					vals = {

					};
				}
				vals['nameSqlId'] = 'com.keensen.ump.base.organduser.queryUser';
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseSingleUserListPanel.pagingToolbar.pageSize
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

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

}

com.keensen.ump.produce.component.OutofstockMgr.prototype.destroy = function() {
	this.chooseSingleUserWindow.destroy();
	this.chooseSingleOrderWindow.destroy();
}

com.keensen.ump.produce.component.OutofstockMgr.prototype.onScan = function() {
	var _this = this;
	var batchNo = this.inputPanel.batchNo.getValue();

	if (Ext.isEmpty(batchNo)) {
		return;
	}

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.base.common.query.biz.ext',
		jsonData : {
			"condition/batchNo" : batchNo,
			"condition/deleted" : 'N',
			"nameSqlId" : "com.keensen.ump.produce.component.semifinished.queryStock"
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var data = result.data;

			if (Ext.isEmpty(data)) {
				Ext.Msg.alert("系统提示", "卷膜序号不存在或已出库，请检查", function() {
							_this.inputPanel.batchNo.setValue('');
						});
			} else {
				_this.inputPanel.prodSpecName.setValue(data[0].prodSpecName);
				_this.inputPanel.position.setValue(data[0].position);
				_this.inputPanel.orderNo.setValue(data[0].orderNo);
				_this.inputPanel.prodSpecId.setValue(data[0].prodSpecId);
				_this.inputPanel.qjBatchId.setValue(data[0].qjBatchId);
				_this.inputPanel.prodSpecId.setValue(data[0].prodSpecId);
				

			}
		}
	});
}

com.keensen.ump.produce.component.OutofstockMgr.prototype.onSave = function() {
	var _this = this;
	var newOrderNo = this.inputPanel.newOrderNo.getValue();
	newOrderNo = newOrderNo.trim();
	var prodSpecId = this.inputPanel.prodSpecId.getValue();
	prodSpecId = prodSpecId.trim();
	var takeUserName = this.inputPanel.takeUserName.getValue();
	var takeUserId = this.inputPanel.takeUserId.getValue();

	if (this.inputPanel.form.isValid()) {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			method : "POST",
			url : 'com.keensen.ump.produce.component.semifinished.saveOutofstock.biz.ext',
			jsonData : this.inputPanel.form.getValues(),

			success : function(F) {
				var B = Ext.decode(F.responseText);
				if (B.success) {
					Ext.MessageBox.alert("操作提示", "保存成功!", function() {
								_this.listPanel.store.reload({});
								_this.inputPanel.form.reset();
								_this.inputPanel.newOrderNo
										.setValue(newOrderNo);
								_this.inputPanel.prodSpecId
										.setValue(prodSpecId);
								_this.inputPanel.takeUserName
										.setValue(takeUserName);
								_this.inputPanel.takeUserId
										.setValue(takeUserId);
								_this.inputPanel.batchNo.focus().defer(100);
							})
				}
			},
			failure : function(C, B) {
				if (B.result.exception) {
					var A, E;
					if (B.result.exception.extype == "biz") {
						E = "【" + B.result.exception.message + "】";
						A = Ext.Msg.WARNING;
					} else {
						A = Ext.Msg.ERROR;
						E = "【系统发生异常！请与管理员联系】";
					}
					Ext.Msg.show({
								width : 350,
								title : "操作提示",
								msg : E,
								icon : A,
								buttons : Ext.Msg.OK
							})
				}
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

com.keensen.ump.produce.component.OutofstockMgr.prototype.onChooseUser = function() {
	this.queryChooseSingleUserPanel.form.reset();
	this.chooseSingleUserWindow.show();
}

com.keensen.ump.produce.component.OutofstockMgr.prototype.onChooseOrder = function() {
	this.queryChooseSingleOrderPanel.form.reset();
	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.OutofstockMgr.prototype.onChooseSingleUser = function() {
	var _this = this;

	var B = this.chooseSingleUserListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var userId = B[0].get('userId');
		var userName = B[0].get('userName');

		this.inputPanel.takeUserId.setValue(userId);
		this.inputPanel.takeUserName.setValue(userName);

		this.chooseSingleUserWindow.hide();
	}
}

com.keensen.ump.produce.component.OutofstockMgr.prototype.onChooseSingleOrder = function() {
	var _this = this;

	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var orderNo = B[0].get('orderNo');
		var prodSpecId = B[0].get('materSpecId');

		this.inputPanel.newOrderNo.setValue(orderNo);
		this.inputPanel.prodSpecId.setValue(prodSpecId);

		this.chooseSingleOrderWindow.hide();
	}
}

com.keensen.ump.produce.component.OutofstockMgr.prototype.exportExcel = function() {

		doQuerySqlAndExport(this, this.queryPanel, this.listPanel, 'PDA白膜出库',
				'com.keensen.ump.produce.component.semifinished.queryOutofstock', '0,1');
	

}

// 获取权限
com.keensen.ump.produce.component.OutofstockMgr.prototype.getRight = function() {
	var _this = this;
	Ext.Ajax.request({
		url : "produce/component/semifinished/outofstock/right.json",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			var data = ret.data;
			var exportExcel = data[0].exportExcel;
			
			
			Ext.getCmp(exportExcelBtn).setVisible(exportExcel.indexOf(uid) != -1);
			

		},
		callback : function() {
		}
	})
}