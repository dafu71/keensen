com.keensen.ump.produce.component.TempareaMgr.prototype.initEvent = function() {

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

}

com.keensen.ump.produce.component.TempareaMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '膜片待用区管理',
			'com.keensen.ump.produce.component.component.queryTemporaryArea');
}

com.keensen.ump.produce.component.TempareaMgr.prototype.onRuku = function() {
	this.inputWindow.batchNo.focus(false, 100);
	this.inputWindow.show();

}

com.keensen.ump.produce.component.TempareaMgr.prototype.onChuku = function() {

	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();

		var entitys = []
		Ext.each(records, function(r) {
					var d = {
						'batchNo' : r.data['batchNo'],
						'amount' : r.data['remainLength']
					}
					entitys.push(d);
				})

		
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			// url :
			// "com.keensen.ump.produce.component.yxorderbase.saveDeliveryState.biz.ext",
			url : "com.keensen.ump.produce.component.temporaryarea.saveChukuBatch.biz.ext",
			method : "post",
			jsonData : {
				entitys : entitys
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}

	// this.inputWindow2.items.items[0].batchNo.focus(false, 100);
	// this.inputWindow2.show();

}

com.keensen.ump.produce.component.TempareaMgr.prototype.onHuanku = function() {
	this.inputWindow3.items.items[0].batchNo.focus(false, 100);
	this.inputWindow3.show();

}

// 扫码
com.keensen.ump.produce.component.TempareaMgr.prototype.onScan = function() {
	var obj = this.inputWindow.batchNo;
	var _this = this;
	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	this.inputWindow.batchNo.setValue(batchNo.trim());
	Ext.Ajax.request({
		method : "post",
		scope : this,
		// url :
		// 'com.keensen.ump.produce.component.order.queryPlanStock.biz.ext',
		url : 'com.keensen.ump.produce.component.temporaryarea.queryTumo4Temparea.biz.ext',
		jsonData : {
			"condition/batchNo" : batchNo.trim()
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var data = result.data;

			if (Ext.isEmpty(data)) {
				Ext.Msg.alert("系统提示", "没有搜索到该膜片批号信息或者已录入待用区或者该膜片已裁完！",
						function() {
							_this.inputWindow.batchNo.setValue('');
							_this.inputWindow.batchNo.focus(false, 100);
						});

				return;
			}
			_this.inputWindow.amount.setValue(data.remainLength);

		}
	});
}

com.keensen.ump.produce.component.TempareaMgr.prototype.onUpdate = function() {

	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "POST",
		url : 'com.keensen.ump.produce.component.temporaryarea.deleteTemparea.biz.ext',
		success : function(F) {
			var B = Ext.decode(F.responseText);
			if (B.success) {
				Ext.MessageBox.alert("操作提示", "更新成功!", function() {
							_this.listPanel.store.reload({});

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

// 扫码
com.keensen.ump.produce.component.TempareaMgr.prototype.onScan2 = function() {
	var obj = this.inputWindow2.form.findField("entity/batchNo");
	var _this = this;
	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.temporaryarea.queryArea.biz.ext',
		jsonData : {
			"map/batchNo" : batchNo
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var data = result.data;

			if (Ext.isEmpty(data)) {
				Ext.Msg.alert("系统提示", "没有搜索到该膜片批号待用区库存信息！");
				return;
			}
			_this.inputWindow2.form.findField("entity/amount")
					.setValue(data[0].amount);
			_this.inputWindow2.form.findField("entity/storageName")
					.setValue(data[0].storageName);
			_this.inputWindow2.form.findField("entity/position")
					.setValue(data[0].position);
		}
	});
}

// 扫码
com.keensen.ump.produce.component.TempareaMgr.prototype.onScan3 = function() {
	var obj = this.inputWindow3.form.findField("entity/batchNo");
	var _this = this;
	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.order.queryHuanku.biz.ext',
				jsonData : {
					"map/batchNo" : batchNo
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					var data = result.data;

					if (Ext.isEmpty(data)) {
						Ext.Msg.alert("系统提示", "没有搜索到该膜片批号可还库数量信息！");
						return;
					}
					_this.inputWindow3.form.findField("entity/amount")
							.setValue(data[0].amount2);
					_this.inputWindow3.form.findField("entity/storageName")
							.focus(false, 100);
				}
			});
}