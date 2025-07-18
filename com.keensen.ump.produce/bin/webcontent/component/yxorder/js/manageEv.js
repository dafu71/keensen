com.keensen.ump.produce.component.yxorderMgr.prototype.initEvent = function() {
	var _this = this;

	this.updatematerialWindow.activeItem.mon(
			this.updatematerialWindow.activeItem, 'beforeload', function(win,
					data) {

			}, this);

	// 查询事件
	this.queryPanel4ChooseMark.mon(this.queryPanel4ChooseMark, 'query',
			function(form, vals) {
				var store = this.listPanel4ChooseMark.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChooseMark.pagingToolbar.pageSize
					}
				});
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

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					var C = _this.listPanel.getSelectionModel().getSelections();
					if (C.length == 0) {
						_this.rec = {};
					} else {
						_this.rec = r;
					}
				}).defer(100);
			}, this);

	this.listPanel.selModel.on('rowdeselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = {};
				}).defer(100);
			}, this);

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var cnt = r.data.cnt;

				if (cnt > 0) {
					Ext.Msg.alert('系统提示', ' 已经制定计划，不能删除');
					return false;
				}
			})

	this.listPanel2.mon(this.listPanel2, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				if (C.length > 1) {
					Ext.Msg.alert('系统提示', '不能批量删除');
					return false;
				}
			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {

		if (this.opt == 'updatesgorder') {
			var orderNo = cell.get('orderNo');
			if (orderNo.substr(0, 2) == 'SG') {
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.component.testtrace.updateSGOrder.biz.ext",
					method : "post",
					jsonData : {
						'orderNo' : orderNo
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "操作成功！", function() {
										_this.listPanel.refresh();

									})
						} else {
							Ext.Msg.alert("系统提示", "修改失败！")

						}

					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
			} else {
				Ext.Msg.alert('系统提示', '请选择生管订单');
				return false;
			}
		}

		if (this.opt == 'updateMaterial') {
			this.updatematerialWindow.show();
			this.updatematerialWindow.loadData(cell);
		}

		if (this.opt == 'updateMaterial2') {
			this.updatematerialWindow2.show();
			this.updatematerialWindow2.loadData(cell);
		}

		if (this.opt == 'updateAmount') {
			this.updateAmountWindow.show();
			this.updateAmountWindow.loadData(cell);
		}

		if (this.opt == 'addOrder') {
			this.addOrderWindow.show();
			this.addOrderWindow.loadData(cell);
		}

		if (this.opt == 'updateTemplateName') {
			this.updateTemplateNameWindow.show();
			this.updateTemplateNameWindow.loadData(cell);
		}

		if (this.opt == 'addplanweek') {
			var cnt = cell.get('cnt');
			if (cnt > 0) {
				Ext.Msg.alert('系统提示', ' 已经制定计划，不能新增');
				return false;
			} else {
				this.planWeekWindow.show();
				this.planWeekWindow.loadData(cell);
			}
		}

		if (this.opt == 'orderview') {
			var baseId = cell.get('baseId');
			if (Ext.isEmpty(baseId)) {
				Ext.Msg.alert('系统提示', '不是营销导入数据，没有详情查看');
				return false;
			}
			this.orderViewWindow.show();
			this.orderViewWindow.loadData(cell);
		}

		if (this.opt == 'updateprodremark') {
			this.updateProdRemarkWindow.show();
			this.updateProdRemarkWindow.loadData(cell);
		}
		
		if (this.opt == 'updatespecnamemark') {
			this.updateSpecNameMarkWindow.show();
			this.updateSpecNameMarkWindow.loadData(cell);
		}
		
	}, this);

	// 增加修改事件
	this.listPanel2.mon(this.listPanel2, 'update', function(gird, cell) {
				this.editPlanWeekWindow.show();
				this.editPlanWeekWindow.loadData(cell);

			}, this);

	// 查询事件
	this.queryPanel3.mon(this.queryPanel3, 'query', function(form, vals) {
		var store = this.listPanel3.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel3.pagingToolbar.pageSize
					}
				});
	}, this);

	
	// 新增生产主计划数据后事件
	this.planWeekWindow.activeItem.mon(this.planWeekWindow.activeItem, 'afterload',
			function(win, data) {
				var demandStockDate2 = data.demandStockDate;
				this.planWeekWindow.enterDate.setValue(demandStockDate2);
				var prodAmount = data.prodAmount;
				this.planWeekWindow.jmAmount.setValue(prodAmount);
				this.planWeekWindow.waitAmount.setValue(prodAmount);

			}, this);
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onUpdateMaterial = function() {
	var combo = this.updatematerialWindow.materSpecId;
	combo.store.clearFilter();// 使每次输入都能进行检索，不用担心输入过慢
	var materSpecName2 = this.rec.data['materSpecName2'];
	combo.store.filterBy(function(record) {
				var text = '' + record.get('materSpecName2');
				// return (text.indexOf(materSpecName2) != -1);
				return (text == materSpecName2);

			});
	combo.expand();

	if (combo.store.getCount() == 0) {
		combo.store.clearFilter();
		combo.expand();
	}
	this.opt = 'updateMaterial';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.destroy = function() {
	this.excelUploadWin.destroy();
	this.uploadWindow.destroy();
	this.planWeekWindow.destroy();
	this.viewPlanWeekWindow.destroy();
	this.editPlanWeekWindow.destroy();
	this.updatematerialWindow.destroy();
	this.updateAmountWindow.destroy();
	this.addOrderWindow.destroy();
	this.addOrderMaterSpecWindow.destroy();
	this.orderMaterSpecWindow.destroy();
	this.updatematerialWindow2.destroy();
	this.addOrderWindow2.destroy();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onEditPlanWeek = function() {
	this.listPanel2.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onDelPlanWeek = function() {
	this.listPanel2.onDel();
}

// 周生产计划
com.keensen.ump.produce.component.yxorderMgr.prototype.onAddPlanWeek = function() {
	this.opt = 'addplanweek';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onViewPlanWeek = function() {

	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewPlanWeekWindow.show();
			var store = this.listPanel2.store;
			if (Ext.isEmpty(A.data.id))
				return;
			store.load({
						params : {
							'condition/relationId' : A.data.id
						}
					});
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onAddPlanWeek2 = function() {
	this.opt = 'addplanweek';
	this.listPanel.onEdit();
}

// 模板文件下载
com.keensen.ump.produce.component.yxorderMgr.prototype.onDown = function() {

	Ext.Msg.show({
		width : 350,
		title : "操作提示",
		msg : "下载模板后，请按照示例填写真实订单数据，并注意日期和数字格式,示例数据请删除后再提交。",
		icon : Ext.Msg.WARNING,
		buttons : Ext.Msg.OK,
		fn : function(btn) {
			if (btn == "ok") {
				var fname = "ks_component_yxorder_import.xls";
				window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
						+ fname;
			}
		}

	})

}

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.yxorderMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.component.yxorderMgr.prototype.doUpload = function() {
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
		// var url = this.uploadInputPanel.saveUrl;
		var url = 'com.keensen.ump.produce.component.importYxOrder.flow';
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

com.keensen.ump.produce.component.yxorderMgr.prototype.onRemark = function() {
	var _this = this;

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var pkid = C[0].data.id;
		Ext.Msg.prompt('订单备注', '请输入', function(btn, text) {
			if (btn == 'ok') {
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.component.neworder.saveEntity.biz.ext",
					method : "post",
					jsonData : {
						'entity/reserve1' : text,
						'entity/id' : pkid
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "操作成功！", function() {
										_this.listPanel.refresh();

									})
						} else {
							Ext.Msg.alert("系统提示", "备注失败！")

						}

					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
			}
		}, this, true);
	}
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onUpdateAmount = function() {
	this.opt = 'updateAmount';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onAddOrder = function() {
	this.opt = 'addOrder';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onOrderMaterSpec = function() {
	this.orderMaterSpecWindow.show();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onAddSpec = function() {
	this.addOrderMaterSpecWindow.show();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onDelSpec = function() {
	this.listPanel3.onDel();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onUpdateTemplateName = function() {
	this.opt = 'updateTemplateName';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onUpdateMaterial2 = function() {
	this.opt = 'updateMaterial2';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onAddOrder2 = function() {
	this.addOrderWindow2.show();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onOrderView = function() {
	this.opt = 'orderview';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onUpdateProdRemark = function() {
	this.opt = 'updateprodremark';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onChoose4Mark = function(
		opt) {
	this.chooseMarkWindow.opt = opt;
	this.queryPanel4ChooseMark.form.reset();

	var materSpecName2 = this.addOrderWindow2.materSpecId.getRawValue();
	var store = this.listPanel4ChooseMark.store;
	store.baseParams = {
		'condition/specName2' : materSpecName2
	};
	store.load({
		params : {
			"pageCond/begin" : 0,
			"pageCond/length" : this.listPanel4ChooseMark.pagingToolbar.pageSize
		}
	});
	this.chooseMarkWindow.show();
	this.queryPanel4ChooseMark.specNameLabel.setValue(materSpecName2);

}

com.keensen.ump.produce.component.yxorderMgr.prototype.onSelect4ChooseMark = function() {
	var A = this.listPanel4ChooseMark;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var logo = records[0].data.logo;
		var specName = records[0].data.specName;
		var drawingCode = records[0].data.drawingCode;
		var opt = this.chooseMarkWindow.opt
		if (opt == '1') {

			this.addOrderWindow2.markDrawingCode.setValue(drawingCode);
		} else {
			this.updateTemplateNameWindow.markDrawingCode.setValue(drawingCode);
		}

		this.chooseMarkWindow.hide();
	}
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onUpdateSGOrder = function() {
	this.opt = 'updatesgorder';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.yxorderMgr.prototype.onUpdateSpecNameMark = function() {
	this.opt = 'updatespecnamemark';
	this.listPanel.onEdit();
}