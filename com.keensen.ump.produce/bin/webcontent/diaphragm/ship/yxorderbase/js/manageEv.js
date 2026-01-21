com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.initEvent = function() {

	var _this = this;

	this.getRight();
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

	this.storagecombo.mon(this.storagecombo, 'select', function(record, index) {
				this.queryChooseMpPanel.form.findField('condition/storageIds')
						.setValue(this.storagecombo.myvalue);
			}, this);

	// 增加删除后事件
	this.mpListPanel.mon(this.mpListPanel, 'afterdel', function(gird, cell) {
				this.listPanel.store.reload();
				
			}, this);		
			
	this.queryChooseMpPanel.mon(this.queryChooseMpPanel, 'query', function(
			form, vals) {
		var batchNoStr = this.queryChooseMpPanel.form
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

		this.queryChooseMpPanel.getForm().findField('condition/batchNoStr')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
		var store = this.chooseMpListPanel.store;
		store.baseParams = this.queryChooseMpPanel.getForm().getValues();
		store.load({
			params : {
				"pageCond/begin" : 0,
				"pageCond/length" : this.chooseMpListPanel.pagingToolbar.pageSize
			}
		});
	}, this);

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var state = r.data.orderStatus;

				if (state == '正式发布') {
					Ext.Msg.alert('系统提示', '正式发布状态的不能删除');
					return false;
				}
			})
	
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'beforeSave',
			function() {
		var deliveryDateLatest = this.editWindow.deliveryDateLatest
			.getValue();
		var demandDate = getDiffDay(deliveryDateLatest, -2);	
		this.editWindow.demandDate.setValue(demandDate);		
				
			}, this);
			
	

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var orderStatus = cell.data.orderStatus;
				var baseId = cell.data.id;
				var _this = this;
				if (this.opt == 'addorder') {

					if (orderStatus == '制定中' || orderStatus == '不能接单') {
						this.editWindow.show();
						this.editWindow.loadData(cell);
					} else {
						Ext.Msg.alert('系统提示', '请选择制定中记录');
						return false;
					}

				}

				if (this.opt == 'planconfirm') {

					if (orderStatus == '计划员确认') {
						this.planConfirmWindow.show();
						this.planConfirmWindow.loadData(cell);
					} else {
						Ext.Msg.alert('系统提示', '请选择计划员确认记录');
						return false;
					}

				}

				if (this.opt == 'storageconfirm') {

					if (orderStatus == '库存确认') {
						this.storageConfirmWindow.show();
						this.storageConfirmWindow.loadData(cell);
					} else {
						Ext.Msg.alert('系统提示', '请选择库存确认记录');
						return false;
					}

				}

				if (this.opt == 'updateamount') {
					this.updateAmountWindow.show();
					this.updateAmountWindow.loadData(cell);
				}

			}, this);

	this.planConfirmWindow.activeItem.mon(this.planConfirmWindow.activeItem,
			'beforeSave', function() {
				var orderStatus = this.planConfirmWindow.orderStatus.getValue();
				if (!Ext.isEmpty(orderStatus) && orderStatus == '正式发布') {
					/*
					 * var specId = this.planConfirmWindow.specId.getValue(); if
					 * (Ext.isEmpty(specId)) { Ext.Msg.alert('系统提示',
					 * '请选择膜片生产型号'); return false; }
					 */
				}

			}, this);

	this.updateAmountWindow.activeItem.mon(this.updateAmountWindow.activeItem,
			'afterload', function(win, data) {

				var amount = data.amount;
				this.updateAmountWindow.ext12.setMaxValue(amount);

			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {

			}, this);

}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onSingleSelect = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}
// 模板文件下载
com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onDown = function() {

	var fname = "ks_dIaphragm_yxorderbase_import.xls";
	window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
			+ fname;
}

// 弹出文件上传选择窗口
com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.doUpload = function() {
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
					msg : '文件必须为Excel xls文件,请去掉文件名中的句点',
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

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onAddOrder = function() {
	if (this.onSingleSelect()) {
		this.opt = 'addorder';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onUpdateAmount = function() {
	if (this.onSingleSelect()) {
		this.opt = 'updateamount';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onView = function() {
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

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onPlanConfirm = function() {
	if (this.onSingleSelect()) {
		this.opt = 'planconfirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onStorageConfirm = function() {
	if (this.onSingleSelect()) {
		this.opt = 'storageconfirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

// 获取权限
com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.getRight = function() {
	var _this = this;
	Ext.Ajax.request({
				url : "produce/diaphragm/ship/yxorderbase/js/right.json",
				method : "post",
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					var data = ret.data;
					var yx = data[0].yx;
					var jhy = data[0].jhy;
					var kc = data[0].kc;

					_this.listPanel.addOrderBtn
							.setVisible(yx.indexOf(uid) != -1);
					_this.listPanel.updateAmountBtn
							.setVisible(yx.indexOf(uid) != -1);
					_this.listPanel.confirmBtn
							.setVisible(jhy.indexOf(uid) != -1);
					_this.listPanel.storageConfirmBtn.setVisible(jhy
							.indexOf(uid) != -1
							|| kc.indexOf(uid) != -1);
					_this.listPanel.delBtn.setVisible(jhy.indexOf(uid) != -1);

					Ext.getCmp(importExcelBtnId)
							.setVisible(jhy.indexOf(uid) != -1
									|| yx.indexOf(uid) != -1);
				},
				callback : function() {
				}
			})
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onChange = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();

		var ids = []
		Ext.each(records, function(r) {
					var id = r.data.id;
					ids.push(id);
				})
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			// url :
			// "com.keensen.ump.produce.component.yxorderbase.saveDeliveryState.biz.ext",
			url : "com.keensen.ump.produce.diaphragm.ship.orderbase.saveDeliveryStateBatch.biz.ext",
			method : "post",
			jsonData : {
				ids : ids.join(',')
				// 'entity/id' : id,
				// 'entity/deliveryState' : deliveryState
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
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.chooseMp = function() {
	this.chooseMpWindow.show();
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onChooseMp = function() {

	var _this = this;
	var baseId = this.storageConfirmWindow.baseId.getValue();
	var A = this.chooseMpListPanel;

	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	var records = A.getSelectionModel().getSelections();

	var entitys = [];
	Ext.each(records, function(r) {
				var batchNo = r.data.batchNo;
				var amount = r.data.amount;
				var entity = {
					batchNo : batchNo,
					amount : amount
				};
				entitys.push(entity);
			})
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		// url :
		// "com.keensen.ump.produce.component.yxorderbase.saveDeliveryState.biz.ext",
		url : "com.keensen.ump.produce.diaphragm.ship.orderbase.saveBatchOrderMp.biz.ext",
		method : "post",
		jsonData : {
			entitys : entitys,
			baseId : baseId
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					A.store.reload();
					_this.listPanel.store.reload();
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onMpView = function() {
	var A = this.listPanel;
	
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}

	var records = A.getSelectionModel().getSelections();

	var baseIds = [];
	Ext.each(records, function(r) {
				var baseId = r.data.id;
				baseIds.push(baseId);
			})
	var store = this.mpListPanel.store;
	
	store.load({
				params : {
					'condition/baseIds' : baseIds.join(',')
				}
			});
	Ext.getCmp(deleteMpBtnId).setVisible(false);
	Ext.getCmp(deleteMpBtnId).setDisabled(true);
	this.mpListWindow.show();
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.onMpView2 = function() {
	var baseId = this.storageConfirmWindow.baseId.getValue(); 
	var store = this.mpListPanel.store;
	
	store.load({
				params : {
					'condition/baseId' : baseId
				}
			});
	Ext.getCmp(deleteMpBtnId).setVisible(true);
	Ext.getCmp(deleteMpBtnId).setDisabled(false);
	this.mpListWindow.show();
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.deleteMp = function() {
	this.mpListPanel.onDel();
}

com.keensen.ump.produce.diaphragm.ship.YxOrderBaseMgr.prototype.exportMp = function() {
	
	var mytitle = '锁定膜片';
		var columnArr = ['订单号','膜片批次','数量'];
		var columns = [];
		// 创建一个workbook
		var workbook = new ExcelJS.Workbook();
		// workbook 添加一个标签的sheet
		var worksheet = workbook.addWorksheet(mytitle);
		// 设置sheet数据中的列名
		for(var i=0;i<columnArr.length;i++){
			var column = {};
			column.header = columnArr[i];
			column.key = i;							
			columns.push(column);
		}
		
				
		worksheet.columns = columns;
		// 设置数据（可以通过后台获取、获取已经存在的数据）

		// 开始添加数据
		var data = [];
		
		var records = this.mpListPanel.store.getRange();
	
		for (var i = 0; i < records.length; i++) {
			var r = records[i];
			var orderNo = r.get('orderNo');
			var batchNo = r.get('batchNo');
			var amount = r.get('amount');
			var d = [orderNo,batchNo,amount];
			data.push(d)
		}	
		
		
		worksheet.addRows(data);
		const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
		// 下载excel
		workbook.xlsx.writeBuffer().then((data) => {
			const blob = new Blob([data], {
					type: EXCEL_TYPE
				});
			saveAs(blob, 'download.xlsx');
		});
	
}

function getDiffDay(date, num) {
	var date2 = new Date(date);
	var date1 = new Date(date2.setDate(date2.getDate() + num));
	return formatDate(new Date(date1));
}

function formatDate(date) {
	var year = date.getFullYear()
	var month = (date.getMonth() + 1 + '').padStart(2, '0')
	var day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}