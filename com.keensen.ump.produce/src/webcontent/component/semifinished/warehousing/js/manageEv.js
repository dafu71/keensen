com.keensen.ump.produce.component.WarehousingMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		if (Ext.isEmpty(vals)) {
			vals = {

			};
		}
		vals['nameSqlId'] = 'com.keensen.ump.produce.component.semifinished.queryWarehousing';
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

com.keensen.ump.produce.component.WarehousingMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.WarehousingMgr.prototype.onScan = function() {
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
			"nameSqlId" : "com.keensen.ump.produce.component.semifinished.queryJuanmo"
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			var data = result.data;

			if (Ext.isEmpty(data)) {
				_this.inputPanel.msg.setValue('<p style="color:red;font-size:16px;">卷膜序号不存在或已在白膜仓</p>');
				_this.inputPanel.batchNo.setValue('');
				/*
				 * Ext.Msg.alert("系统提示", "卷膜序号不存在或已在白膜仓，请检查", function() {
				 * _this.inputPanel.batchNo.setValue(''); });
				 */
			} else {
				var dryWet = data[0].dryWet;
				if (dryWet == '湿') {
					_this.inputPanel.msg.setValue('<p style="color:red;font-size:16px;">湿膜不能入库</p>');
					_this.inputPanel.batchNo.setValue('');
					/*
					 * Ext.Msg.alert("系统提示", "湿膜不能入库，请检查", function() {
					 * _this.inputPanel.batchNo.setValue(''); });
					 */
				} else {
					_this.inputPanel.msg.setValue('');
					_this.inputPanel.prodSpecName
							.setValue(data[0].prodSpecName);
					_this.inputPanel.prodSpecId.setValue(data[0].prodSpecId);
					_this.inputPanel.orderNo.setValue(data[0].orderNo);
					_this.inputPanel.qjBatchId.setValue(data[0].qjBatchId);
					
					_this.onSave();
				}

			}
		}
	});
}

com.keensen.ump.produce.component.WarehousingMgr.prototype.onSave = function() {
	var _this = this;
	if (this.inputPanel.form.isValid()) {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		var position = _this.inputPanel.position.getValue();
		Ext.Ajax.request({
			method : "POST",
			url : 'com.keensen.ump.produce.component.semifinished.saveWarehousing.biz.ext',
			jsonData : this.inputPanel.form.getValues(),

			success : function(F) {
				var B = Ext.decode(F.responseText);
				if (B.success) {
					_this.listPanel.store.reload({});
					_this.inputPanel.form.reset();
					_this.inputPanel.position.setValue(position);
					_this.inputPanel.msg.setValue('<p style="color:red;font-size:16px;">保存成功!</p>');
					_this.inputPanel.batchNo.focus().defer(100);
					/*Ext.MessageBox.alert("操作提示", "保存成功!", function() {
								_this.listPanel.store.reload({});
								_this.inputPanel.form.reset();
								_this.inputPanel.position.setValue(position);
							})*/
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