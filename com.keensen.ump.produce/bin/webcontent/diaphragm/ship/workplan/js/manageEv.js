com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.initEvent = function() {

	var _this = this;

	this.modifyPlanNoListPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.orderRec = r;
				}).defer(100);

			}, this);
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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

	this.planListPanel.store.on('load', function() {
				var cnt = _this.planListPanel.store.getCount();
				if (cnt == 0) {
					return;
				} else {
					Ext.getCmp(arrangeAmountId)
							.setValue(_this.workPlanPanel.arrangeAmount
									.getValue());
				}
			})

	// 查询事件
	this.queryModifyPlanNoPanel.mon(this.queryModifyPlanNoPanel, 'query',
			function(form, vals) {

				var batchNoStr = this.queryModifyPlanNoPanel.form
						.findField("condition/batchNoStr2").getValue();
				var planNo = this.queryModifyPlanNoPanel.form
						.findField("condition/planNo").getValue();

				if (Ext.isEmpty(batchNoStr) && Ext.isEmpty(planNo)) {
					Ext.Msg.alert("系统提示", "请输入计划单号或者批号查询！");
					return false;
				}

				var store = this.modifyPlanNoListPanel.store;

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

				this.queryModifyPlanNoPanel.getForm()
						.findField('condition/batchNoStr').setValue(arr2
								.join(",") == "''" ? null : arr2.join(","));
				store.baseParams = this.queryModifyPlanNoPanel.getForm()
						.getValues();
				store.load({});
			}, this);

}

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.exportExcel = function() {
	var _this = this;

	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '10000',
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.order.queryWorkPlan',
			templateFilename : 'ks_diaphragm_workplan_export'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isIE) {
					window.open('/default/deliverynote/seek/down4IE.jsp?fname='
							+ fname);
				} else {
					window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
							+ fname;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.onWorkPlan = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (!!!B || B.length == 0) {
		Ext.Msg.alert("系统提示", "请选择一条数据行!");
		return
	}
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			var relationId = A.data.relationId;
			var code = A.data.code;
			var arrangeAmount = A.data.arrangeAmount;
			var pkid = A.data.id;
			this.workPlanPanel.pkid.setValue(pkid);
			this.workPlanPanel.relationId.setValue(relationId);
			this.workPlanPanel.code.setValue(code);
			this.workPlanPanel.arrangeAmount.setValue(arrangeAmount);
			Ext.getCmp(arrangeAmountId).setValue(0);
			this.workPlanWindow.show();
		}
	}

}

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.onCreateDetails = function() {
	if (this.workPlanPanel.form.isValid()) {
		var store = this.planListPanel.store;
		store.baseParams = this.workPlanPanel.form.getValues();
		store.load({});
	}
}

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.onSaveDetails = function() {
	var _this = this;
	var store = this.planListPanel.store;
	var records = this.planListPanel.store.getRange();
	if (records.length == 0) {
		Ext.Msg.alert('提示', '作业明细不能为空！')
		return
	} else {
		for (var i = 0; i < records.length; i++) {
			var j = i + 1;
			if (Ext.isEmpty(records[i].data.workDt)) {
				Ext.Msg.alert('提示', '检查作业明细中第' + j + '行的作业日期为空！')
				return
			} else if (Ext.isEmpty(records[i].data.arrangeAmount)) {
				Ext.Msg.alert('提示', '检查作业明细中第' + j + '行的排产数量为空！')
				return
			}
		}
		var details = [];
		Ext.each(records, function(r) {
					details.push(r.data);
				});
		var mk = new Ext.LoadMask(this.workPlanWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.diaphragm.ship.order.saveWorkPlans4Cf.biz.ext',
			jsonData : {
				details : details
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "保存成功", function() {
								_this.listPanel.store.reload();
								_this.workPlanPanel.form.reset();
								_this.planListPanel.store.removeAll();
								_this.workPlanWindow.hide();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}
}

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.onCalculate = function() {
	var cnt = this.planListPanel.store.getCount();
	if (cnt == 0)
		return;
	var records = this.planListPanel.store.getRange();
	var amount = 0;
	for (var i = 0; i < cnt - 1; i++) {
		amount += parseFloat(records[i].data.arrangeAmount);
	}
	var arrangeAmount = this.workPlanPanel.arrangeAmount.getValue();
	arrangeAmount = parseFloat(arrangeAmount) - amount;
	var r = this.planListPanel.store.getAt(cnt - 1);
	r.data.arrangeAmount = arrangeAmount.toFixed(1);
	this.planListPanel.store.remove(this.planListPanel.store.getAt(cnt - 1));
	this.planListPanel.store.add(r);
	var amount = 0;
	for (var i = 0; i < cnt; i++) {
		amount += parseFloat(records[i].data.arrangeAmount);
	}
	Ext.getCmp(arrangeAmountId).setValue(amount.toFixed(1));
}

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.onModifyPlanNo = function() {
	this.queryModifyPlanNoPanel.form.reset();
	this.modifyPlanNoListPanel.store.removeAll();
	this.modifyPlanNoWindow.show();
}

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.updateTumoPlanNO = function(
		recordId, newValue, oldValue) {
	var _this = this;

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.ship.order.updateTumoPlanNO.biz.ext',
		jsonData : {
			"map/recordId" : recordId,
			"map/planNo" : newValue,
			"map/planNoBak" : oldValue
		},
		success : function(response, action) {
			_this.modifyPlanNoListPanel.store.reload();
			// Ext.Msg.alert("系统提示", "客户修改成功！");
		},
		callback : function() {
			// _this.requestMask.hide()
		}
	});
};

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.onModifyBatch = function() {
	var _this = this;

	var A = this.modifyPlanNoListPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var records = this.modifyPlanNoListPanel.getSelectionModel()
				.getSelections();
		var recordIds = [];
		Ext.each(records, function(r) {
					recordIds.push(r.data['recordId']);
				});
		Ext.Msg.prompt('修改计划单号', '请输入计划单号', function(btn, text) {
			if (btn == 'ok') {
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.diaphragm.ship.order.updateTumoPlanNOBatch.biz.ext",
					method : "post",
					jsonData : {
						"map/recordIds" : recordIds.join(","),
						"map/planNo" : text
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "操作成功！", function() {
										_this.modifyPlanNoListPanel.store
												.reload();

									})
						} else {
							Ext.Msg.alert("系统提示", "修改计划单号失败！")

						}

					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
			}
		}, this, true);
	}
};

com.keensen.ump.produce.diaphragm.ship.WorkPlanMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
	
}