com.keensen.ump.produce.component.StocktakingMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		if (Ext.isEmpty(vals)) {
			vals = {

			};
		}
		vals['nameSqlId'] = 'com.keensen.ump.produce.component.semifinished.queryStocktaking';
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
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

com.keensen.ump.produce.component.StocktakingMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.component.StocktakingMgr.prototype.onScan = function() {
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
				

			}
		}
	});
}

com.keensen.ump.produce.component.StocktakingMgr.prototype.onSave = function() {
	var _this = this;
	if (this.inputPanel.form.isValid()) {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			method : "POST",
			url : 'com.keensen.ump.base.common.saveEntity.biz.ext',
			jsonData : this.inputPanel.form.getValues(),

			success : function(F) {
				var B = Ext.decode(F.responseText);
				if (B.success) {
					Ext.MessageBox.alert("操作提示", "保存成功!", function() {
								_this.listPanel.store.reload({});
								_this.inputPanel.form.reset();
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

com.keensen.ump.produce.component.StocktakingMgr.prototype.exportExcel = function() {

	if (this.queryPanel.form.isValid()) {
		doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '白膜盘点',
				'com.keensen.ump.produce.component.semifinished.queryStocktaking');
	}

}

com.keensen.ump.produce.component.StocktakingMgr.prototype.onReport = function() {
	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.base.common.query.biz.ext",
				method : "post",
				jsonData : {
					nameSqlId : 'com.keensen.ump.produce.component.semifinished.queryStockTakingReport'
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var data = ret.data;
						var columns = [{
									header : '元件型号',
									key : 'prodSpecName'
								}, {
									header : '上月在库数(支)',
									key : 'lastAmount'
								}, {
									header : '本月入库数(支)',
									key : 'inAmount'
								}, {
									header : '本月出库数(支)',
									key : 'outAmount'
								}, {
									header : '本月盘点数(支)',
									key : 'takingAmount'
								}, {
									header : '盘点盈亏(支)',
									key : 'amount'
								}];

						doExprot('盘存报表', data, columns);

					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}