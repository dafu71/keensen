com.keensen.ump.produce.component.QueryStockMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		var batchNoStr = this.queryPanel.form
				.findField("condition/batchNoStr2").getValue();
		var regEx = new RegExp("\\n", "gi");
		batchNoStr = batchNoStr.replace(regEx, ",");
		batchNoStr = batchNoStr.replaceAll('，', ',');
		batchNoStr = batchNoStr.replaceAll(' ', '');
		var arr = [];
		arr = batchNoStr.split(',');
		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push("'" + arr[i] + "'");
		}

		this.queryPanel.getForm().findField('condition/batchNoStr')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
		this.queryPanel
				.getForm()
				.findField('nameSqlId')
				.setValue('com.keensen.ump.produce.component.semifinished.queryStock');

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
	this.queryChooseSingleUserPanel.mon(this.queryChooseSingleUserPanel,
			'query', function(form, vals) {
				var store = this.chooseSingleUserListPanel.store;
				if (Ext.isEmpty(vals)) {
					vals = {};
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

	this.listPanel.store.on('load', function() {

		var cnt = _this.listPanel.store.getCount();
		if (cnt == 0)
			return;
		var batchNoStr = _this.queryPanel.form
				.findField("condition/batchNoStr2").getValue();
		var regEx = new RegExp("\\n", "gi");
		batchNoStr = batchNoStr.replace(regEx, ",");
		batchNoStr = batchNoStr.replaceAll('，', ',');
		batchNoStr = batchNoStr.replaceAll(' ', '');
		var arr = [];
		arr = batchNoStr.split(',');
		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push("'" + arr[i] + "'");
		}

		_this.queryPanel.getForm().findField('condition/batchNoStr')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
		var vals = _this.queryPanel.getForm().getValues();

		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.component.semifinished.queryStockCount.biz.ext",
			method : "post",
			jsonData : vals,
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var data = ret.data[0];
						Ext.getCmp('semifinisheddullamount').setValue('呆滞数量:'
								+ data.dullAmount);
						Ext.getCmp('semifinishedwarnamount')
								.setValue('报警数量(大于两个月):' + data.warnAmount);
						Ext.getCmp('semifinishedwarnamount2')
								.setValue('报警数量(大于一个半月):' + data.warnAmount2);

					} else {
						Ext.getCmp('semifinisheddullamount').setValue('');
						Ext.getCmp('semifinishedwarnamount').setValue('');
						Ext.getCmp('semifinishedwarnamount2').setValue('');

					}
				}
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	})

}

com.keensen.ump.produce.component.QueryStockMgr.prototype.exportExcel = function() {

	if (this.queryPanel.form.isValid()) {
		doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '白膜库存',
				this.nameSqlId, '1,9');
	}

}

com.keensen.ump.produce.component.QueryStockMgr.prototype.onOutofstock = function() {
	var A = this.listPanel;

	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var batchNos = [];
		for (var i = 0; i < records.length; i++) {
			var r = records[i];
			var deleted = r.get('deleted');
			var batchNo = r.get('batchNo');
			if (deleted == 'Y') {
				Ext.Msg.alert("系统提示", "请选择未出库的记录！");
				return;
			}
			batchNos.push(batchNo);
		}
		this.inputWindow.show();
		this.inputWindow.batchNos.setValue(batchNos.join(','));
	}

}

com.keensen.ump.produce.component.QueryStockMgr.prototype.onChooseUser = function() {
	this.queryChooseSingleUserPanel.form.reset();
	this.chooseSingleUserWindow.show();
}

com.keensen.ump.produce.component.QueryStockMgr.prototype.onChooseOrder = function() {
	this.queryChooseSingleOrderPanel.form.reset();
	this.chooseSingleOrderWindow.show();
}

com.keensen.ump.produce.component.QueryStockMgr.prototype.onChooseSingleUser = function() {
	var _this = this;

	var B = this.chooseSingleUserListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var userId = B[0].get('userId');
		var userName = B[0].get('userName');

		this.inputWindow.takeUserId.setValue(userId);
		this.inputWindow.takeUserName.setValue(userName);

		this.chooseSingleUserWindow.hide();
	}
}

com.keensen.ump.produce.component.QueryStockMgr.prototype.onChooseSingleOrder = function() {
	var _this = this;

	var B = this.chooseSingleOrderListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var orderNo = B[0].get('orderNo');

		this.inputWindow.newOrderNo.setValue(orderNo);

		this.chooseSingleOrderWindow.hide();
	}
}

com.keensen.ump.produce.component.QueryStockMgr.prototype.onModifyPosition = function() {
	var A = this.listPanel;

	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var batchNos = [];
		for (var i = 0; i < records.length; i++) {
			var r = records[i];
			var deleted = r.get('deleted');
			var batchNo = r.get('batchNo');
			if (deleted == 'Y') {
				Ext.Msg.alert("系统提示", "请选择未出库的记录！");
				return;
			}
			batchNos.push(batchNo);
		}
		Ext.Msg.prompt('修改库位', '请输入库位', function(btn, text) {
			if (btn == 'ok') {
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.component.semifinished.saveBatchPosition.biz.ext",
					method : "post",
					jsonData : {
						'position' : text,
						'batchNos' : batchNos.join(',')
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "修改成功！", function() {
										_this.listPanel.store.load();

									})
						} else {
							Ext.Msg.alert("系统提示", "修改失败！")

						}

					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
			}
		}, this, false);
	}

}