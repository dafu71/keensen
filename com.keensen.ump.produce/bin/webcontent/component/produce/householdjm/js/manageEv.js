com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.initEvent = function() {

	var _this = this;

	this.getRight();
	
	if(ip == '172.16.10.86'){
		this.currentMachineCode = 'J86';
	}
	if(ip == '172.16.10.54'){
		this.currentMachineCode = 'J87';
	}
	if(ip == '172.16.10.55'){
		this.currentMachineCode = 'J88';
	}
	if(ip == '172.16.10.56'){
		this.currentMachineCode = 'J89';
	}
	
	this.queryPanel4EditDefect.mon(this.queryPanel4EditDefect, 'query',
			function(form, vals) {
				var store = this.listPanel4EditDefect.store;
				store.baseParams = vals;
				store.load();
			}, this);
			
	this.listPanel4EditDefect.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;

				}).defer(100);
			}, this);
	
	this.listPanel4ProduceCount.store.on('load', function() {
				var records = _this.listPanel4ProduceCount.store.getRange();
				if (records.length == 0) {
					Ext.getCmp(quantityTotalId).setValue('');
					return
				}
				var quantityTotal = records[0].data.quantityTotal;
				Ext.getCmp(quantityTotalId).setValue('合计数量:' + quantityTotal);
			})
	
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
		
				if (this.opt == 'adddefect') {
					
					this.listPanel4EditDefect.store.reload();
					this.editDefectWindow.relationId = cell.get('id');
					this.editDefectWindow.show();
					return;
				}
				
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

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onStart = function() {
	var _this = this;
	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.productioncount.saveHHJmStart.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var msg = ret.msg;
				_this.queryPanel.setTitle("<span style='color:red'>" + msg
						+ "</span>");
			}
		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onEnd = function() {
	var _this = this;
	Ext.Msg.confirm("操作确认", "您确实要下机结算工作量吗?", function(A) {
		if (A == "yes") {
			Ext.Msg.prompt('您的确认码', '请输入', function(btn, text) {
				if (btn == 'ok') {
					var confirmCode = text.trim();
					if (Ext.isEmpty(confirmCode)) {
						Ext.Msg.alert('系统提示', '确认码不能为空');
						return false;
					} else {
						_this.requestMask = this.requestMask
								|| new Ext.LoadMask(Ext.getBody(), {
											msg : "后台正在操作,请稍候!"
										});
						_this.requestMask.show();
						Ext.Ajax.request({
							url : "com.keensen.ump.produce.component.produce.queryConfirmCode.biz.ext",
							jsonData : {
								'confirmCode' : confirmCode
							},
							method : "post",
							success : function(resp) {
								var ret = Ext.decode(resp.responseText);
								if (ret.success) {
									var err = ret.err;
									var msg = ret.msg;
									if (err != '0') {
										Ext.Msg.alert('系统提示', msg);
										return false;
									} else {
										Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.productioncount.saveHHJmEnd.biz.ext",
				method : "post",
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var msg = ret.msg;
						_this.queryPanel.setTitle("<span style='color:red'>"
								+ msg + "</span>");
					}
				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
									}
								}
							},
							callback : function() {
								_this.requestMask.hide()
							}
						})
					}
				}
			}, this, false);

		}
	})
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onQueryQuantity = function() {
	this.produceCountWindow.show();
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.exportProduceCountExcel = function() {
	
	
	doQuerySqlAndExport(this, this.queryPanel4ProduceCount, this.listPanel4ProduceCount, '产量统计',
			'com.keensen.ump.produce.component.productioncount.queryProductHHJmList', '0,1');
			
	
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.onAddDefect = function() {

	this.opt = 'adddefect';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.produce.HouseholdJmMgr.prototype.saveJmDefect = function(
		defectId, field, newValue, oldValue) {

	var _this = this;
	if (Ext.isEmpty(newValue))
		return;

	var obj = {};
	var relationId = this.editDefectWindow.relationId;
	obj['entity/defectId'] = defectId;
	obj['entity/' + field] = newValue;
	obj['entity/relationId'] = relationId;
	obj['entity/tacheCause'] = '';
	obj['entity/recorder'] = nowStaffName;
	obj['entity/team'] = _this.currentMachineCode;

	var postUrl = 'com.keensen.ump.produce.quality.defect.saveHHJmDefectList.biz.ext';
	

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在保存,请稍候!"
			});
	this.requestMask.show();

	Ext.Ajax.request({

		url : postUrl,
		method : "post",
		jsonData : obj,
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				
				_this.listPanel.store.reload();
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

function defectView2(relationId, batchNo) {

	var spacepanel = Ext.getCmp('spacepanel');

	if (relationId == '') {
		return;
	}

	var itemId = 'menu10004961';
	var url = '/produce/quality/proddefect/hhjmdefectlist.jsp?batchNo='
			+ batchNo + '&relationId=' + relationId;
	var title = '家用卷膜不良记录';
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
				id : '10004961',
				text : title,
				attributes : {
					respath : url
				}
			});

}