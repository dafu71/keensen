com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.initEvent = function() {

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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);

	this.editWindow.items.items[0].mon(this.editWindow.items.items[0],
			'aftersave', function() {
				this.listPanel.store.reload();
				this.editWindow.hide();
				return false;
			}, this);

	this.editWindow.mon(this.editWindow, 'hide', function() {
				// this.listPanel.store.reload();
			}, this);

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);

			}, this);
			
	this.modifyOrderNoListPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.orderRec = r;
				}).defer(100);

			}, this);

	this.planListPanel.store.on('load', function() {
				var cnt = _this.planListPanel.store.getCount();
				if (cnt == 0) {
					return;
				} else {
					/*
					 * var records = _this.planListPanel.store.getRange(); var
					 * arrangeAmount = 0; for (var i = 0; i < cnt; i++) {
					 * arrangeAmount += records[i].data.arrangeAmount; }
					 */
					Ext.getCmp(arrangeAmountId)
							.setValue(_this.workPlanPanel.arrangeAmount
									.getValue());
				}
			})

	this.viewPlanListPanel.store.on('load', function() {
				var cnt = _this.viewPlanListPanel.store.getCount();
				if (cnt == 0) {
					return;
				} else {
					var records = _this.viewPlanListPanel.store.getRange();
					var line = records[0].data.line;
					var supId = records[0].data.supId;
					_this.viewWorkPlanPanel.line.setValue(line);
					_this.viewWorkPlanPanel.supId.setValue(supId);
					_this.viewWorkPlanWindow.show();
				}
			})

	// 查询事件
	this.queryModifyOrderNoPanel.mon(this.queryModifyOrderNoPanel, 'query',
			function(form, vals) {

				var batchNoStr = this.queryModifyOrderNoPanel.form
						.findField("condition/batchNoStr2").getValue();
				var orderNo = this.queryModifyOrderNoPanel.form
						.findField("condition/orderNo").getValue();

				if (Ext.isEmpty(batchNoStr) && Ext.isEmpty(orderNo)) {
					Ext.Msg.alert("系统提示", "请输入订单号或者批号查询！");
					return false;
				}

				var store = this.modifyOrderNoListPanel.store;

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

				this.queryModifyOrderNoPanel.getForm()
						.findField('condition/batchNoStr').setValue(arr2
								.join(",") == "''" ? null : arr2.join(","));
				store.baseParams = this.queryModifyOrderNoPanel.getForm()
						.getValues();
				store.load({});
			}, this);

}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onDel = function() {
	// this.listPanel.onDel();
	var records = this.listPanel.getSelectionModel().getSelections();
	var _this = this;

	Ext.Msg.confirm('提示', '是否确定删除订单？', function(btn) {
		if (btn === 'yes') {
			var store = _this.listPanel.store;
			var entitys = [];
			Ext.each(records, function(r) {
						entitys.push(r.data);
					});
			var mk = new Ext.LoadMask(document.body, {
						msg : '正在删除数据，请稍候！',
						removeMask : true
					});
			mk.show();
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.diaphragm.ship.order.deleteEntity.biz.ext',
				jsonData : {
					entitys : entitys
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						mk.hide();
						store.reload();
					} else {
						Ext.Msg.alert('系统提示', '删除失败');
					}
				}
			}, this);
		}
	});

};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onEdit = function() {
	// this.listPanel.onEdit();
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			// var materSpecCode = A.get('materSpecCode');
			this.editWindow.items.items[0].loadData(A);
			this.editWindow.show();
			// this.editWindow.items.items[0].specId.setValue(materSpecCode);
		}
	}

};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onPlan = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var orderNo = r.data.orderNo;
		var specId = r.data.specId;
		var orderamount = r.data.amount;
		this.inputPanel2.form.findField("entity/orderNo").setValue(orderNo);
		this.inputPanel2.form.findField("entity/specId").setValue(specId);
		this.inputPanel2.form.findField("entity/orderamount")
				.setValue(orderamount);
		this.listPanel2.store.load({
					params : {
						"condition/orderNo" : orderNo
					}
				});
		this.inputWindow2.show();
	}

};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onSavePlan = function() {

	var planDate = this.inputPanel2.form.findField("entity/planDate")
			.getValue();
	var planStockDate = this.inputPanel2.form.findField("entity/planStockDate")
			.getValue();
	// 计划入库日期必须小于计划发货日期
	if (planStockDate > planDate) {
		Ext.Msg.alert("系统提示", "计划入库日期必须小于计划发货日期！");
		return false;
	} else {

		var _thispanel = this.inputPanel2;
		var _thislist = this.listPanel2;
		var orderNo = this.inputPanel2.form.findField("entity/orderNo")
				.getValue();
		if (_thispanel.form.isValid()) {
			_thispanel.form.submit({
				method : "POST",
				url : _thispanel.saveUrl,
				waitTitle : "操作提示",
				waitMsg : "保存数据中",
				success : function(C, B) {
					var D = B.result;
					if (D.success) {
						Ext.MessageBox.alert("操作提示", "保存成功!", function() {
									_thislist.store.load({
												params : {
													"condition/orderNo" : orderNo
												}
											});
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
				}
			})
		}
	}
};

// 模板文件下载
com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onDown = function() {

	var fname = "ks_order_import2.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onDelPlan = function() {
	this.listPanel2.onDel();
};

// 弹出文件上传选择窗口
com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.doUpload = function() {
	var _this = this;
	// var store = this.listPanel.store;
	this.uploadInputPanel = this.excelUploadWin.getComponent('uploadForm');
	// 校验
	this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
	// 文件名
	this.filePath = this.fileUploadObj.getValue();
	// 文件后缀
	this.sfileName = this.filePath.split(".");

	if (this.sfileName[1] == null || this.sfileName[1].toLowerCase() != "xls") {
		Ext.MessageBox.show({
					title : '操作提示',
					buttons : Ext.MessageBox.OK,
					msg : '文件必须为Excel xls文件',
					icon : Ext.MessageBox.ERROR
				});
		return false;
	}
	if (this.uploadInputPanel.form.isValid()) {
		var url = this.uploadInputPanel.saveUrl;
		this.uploadInputPanel.form.submit({
					method : "POST",
					timeout : 1200,
					url : url,
					waitTitle : "操作提示",
					waitMsg : "上传数据中...",
					success : function(form, action) {
						var result = action.result;
						if (result.success) {
							_this.excelUploadWin.hide();
							Ext.Msg.alert("操作提示", result.msg == "1"
											? "批量上传成功"
											: result.msg, function() {
										_this.listPanel.store.load();
									}, this);
						}
					},
					failure : function(form, action) {
						Ext.MessageBox.show({
									title : '操作提示',
									buttons : Ext.MessageBox.OK,
									msg : "导入失败，请检查文件格式或网络是否正常",
									icon : Ext.MessageBox.ERROR
								});
					}
				});
	}

}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			var materSpecCode = A.get('materSpecCode');
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();
			this.viewWindow.items.items[0].specId.setValue(materSpecCode);
		}
	}
}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.saveCustormerCode = function(
		id, newValue, oldValue) {
	var _this = this;
	// this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	// msg : "正在进行订单客户修改操作,请稍候!"
	// });
	// this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.ship.order.saveEntity.biz.ext',
		jsonData : {
			"entity/id" : id,
			"entity/customerCode" : newValue
		},
		success : function(response, action) {
			_this.listPanel.store.reload();
			// Ext.Msg.alert("系统提示", "客户修改成功！");
		},
		callback : function() {
			// _this.requestMask.hide()
		}
	});
};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.saveNeedAmount = function(
		id, newValue, oldValue) {
	var _this = this;
	// this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	// msg : "正在进行订单客户修改操作,请稍候!"
	// });
	// this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.ship.order.saveEntity.biz.ext',
		jsonData : {
			"entity/id" : id,
			"entity/needAmount" : newValue
		},
		success : function(response, action) {
			_this.listPanel.store.reload();
			// Ext.Msg.alert("系统提示", "客户修改成功！");
		},
		callback : function() {
			// _this.requestMask.hide()
		}
	});
};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.saveArrangePercent = function(
		id, newValue, oldValue) {
	var _this = this;
	// this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	// msg : "正在进行订单客户修改操作,请稍候!"
	// });
	// this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.ship.order.saveEntity.biz.ext',
		jsonData : {
			"entity/id" : id,
			"entity/arrangePercent" : newValue
		},
		success : function(response, action) {
			_this.listPanel.store.reload();
			// Ext.Msg.alert("系统提示", "客户修改成功！");
		},
		callback : function() {
			// _this.requestMask.hide()
		}
	});
};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.saveOrderStatus = function(
		id, newValue, oldValue) {
	var _this = this;
	// this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	// msg : "正在进行订单客户修改操作,请稍候!"
	// });
	// this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.ship.order.saveEntity.biz.ext',
		jsonData : {
			"entity/id" : id,
			"entity/orderStatus" : newValue
		},
		success : function(response, action) {
			_this.listPanel.store.reload();
			// Ext.Msg.alert("系统提示", "客户修改成功！");
		},
		callback : function() {
			// _this.requestMask.hide()
		}
	});
};

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onWorkPlan = function() {
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
			var relationId = A.data.id;
			var orderNo = A.data.orderNo;
			var needAmount = A.data.needAmount;
			var planCount = A.data.planCount;
			var arrangeAmount = A.data.arrangeAmount;
			if (planCount > 0) {
				Ext.Msg.alert("系统提示", "已有作业计划明细，不能重复制定!");
				return
			}
			this.workPlanPanel.relationId.setValue(relationId);
			this.workPlanPanel.orderNo.setValue(orderNo);
			this.workPlanPanel.needAmount.setValue(needAmount);
			this.workPlanPanel.arrangeAmount.setValue(arrangeAmount);
			Ext.getCmp(arrangeAmountId).setValue(0);
			this.workPlanWindow.show();
		}
	}

}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onViewPlan = function() {
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
			var relationId = A.data.id;
			var orderNo = A.data.orderNo;
			var needAmount = A.data.needAmount;
			var planCount = A.data.planCount;
			var arrangeAmount = A.data.arrangeAmount;
			if (planCount == 0) {
				Ext.Msg.alert("系统提示", "该订单尚没有作业计划!");
				return
			}
			this.viewWorkPlanPanel.relationId.setValue(relationId);
			this.viewWorkPlanPanel.orderNo.setValue(orderNo);
			this.viewWorkPlanPanel.needAmount.setValue(needAmount);
			this.viewWorkPlanPanel.arrangeAmount.setValue(arrangeAmount);
			var store = this.viewPlanListPanel.store;
			store.baseParams = {
				'condition/relationId' : relationId
			};
			store.load({});

		}
	}

}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onDelPlan = function() {
	var _this = this;
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
			var relationId = A.data.id;
			Ext.Msg.confirm('提示', '是否确定删除作业计划？', function(btn) {

				if (btn === 'yes') {
					this.requestMask = this.requestMask
							|| new Ext.LoadMask(Ext.getBody(), {
										msg : "后台正在操作,请稍候!"
									});
					this.requestMask.show();
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.keensen.ump.produce.diaphragm.ship.order.deleteWorkPlan.biz.ext',
						jsonData : {
							'condition/relationId' : relationId
						},
						success : function(response, action) {
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
								Ext.Msg.alert("系统提示", "保存成功", function() {
											_this.listPanel.store.reload();

										});
							}
						},
						callback : function() {
							_this.requestMask.hide()
						}
					});
				}
			});

		}
	}

}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onCreateDetails = function() {
	if (this.workPlanPanel.form.isValid()) {
		var store = this.planListPanel.store;
		store.baseParams = this.workPlanPanel.form.getValues();
		store.load({});
	}
}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onSaveDetails = function() {
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
			url : 'com.keensen.ump.produce.diaphragm.ship.order.saveWorkPlans.biz.ext',
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

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onCalculate = function() {
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

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.onModifyOrderNo = function() {
	this.modifyOrderNoWindow.show();
}

com.keensen.ump.produce.diaphragm.ship.OrderMgr.prototype.updateTumoOrderNO = function(
		recordId, newValue, oldValue) {
	var _this = this;
	
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.ship.order.updateTumoOrderNO.biz.ext',
		jsonData : {
			"map/recordId" : recordId,
			"map/orderNo" : newValue,
			"map/orderNoBak" : oldValue
		},
		success : function(response, action) {
			_this.modifyOrderNoListPanel.store.reload();
			// Ext.Msg.alert("系统提示", "客户修改成功！");
		},
		callback : function() {
			// _this.requestMask.hide()
		}
	});
};