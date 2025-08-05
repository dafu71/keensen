com.keensen.ump.produce.component.yxorderbaseMgr.prototype.initEvent = function() {
	var me = this;

	this.exportFields = '';
	this.getRight();

	this.addMaterWindow.materCode.setDisabled(true);

	this.yxorderStockAmountStore.on('load', function() {
				me.addMaterWindow.materCode.setDisabled(false);
			})

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

	this.optColumnWin.listPanel.store.on('load', function() {
				var columnStore = me.optColumnWin.listPanel.store;
				var columnModel = me.listPanel.getColumnModel();
				var records = columnStore.getRange();
				var showColumns = [];
				Ext.each(records, function(r) {
							var checked = r.data['checked'];
							var field = r.data['field'];
							if (checked == 'Y')
								showColumns.push(field);

						});
				Ext.each(records, function(r) {
							var field = r.data['field'];
							var idx = columnModel.findColumnIndex(field);
							if (idx != -1) {
								if (!showColumns.includes(field)) {
									columnModel.setHidden(idx, true);
								} else {
									columnModel.setHidden(idx, false);
								}
							}
						});
			})

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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
		var state = cell.data.state;
		var hpmc = cell.data.hpmc;
		var _this = this;
		if (this.opt == 'addorder') {
			if (state == '正式发布') {
				Ext.Msg.alert('系统提示', '已正式发布不能修改');
				return false;
			}
//只要是营销提交了的订单要修改必须计划员驳回才能修改，这也符合记录留痕的基本原则。 任栋  2025-08-05
			if (hpmc != '其它' && hpmc != '其他') {
				if (state == '制定中' || state == '不能接单') {
					this.addOrderWindow.show();
					this.addOrderWindow.loadData(cell);
				} else {
					Ext.Msg.alert('系统提示', '请选择状态为制定中或待制造确认或不能接单的记录');
					return false;
				}
			}
			if (hpmc == '其它' || hpmc == '其他') {
				this.updateRemarkWindow.show();
				this.updateRemarkWindow.loadData(cell);
			}

		}

		if (this.opt == 'confirm') {
			if (hpmc == '其它' || hpmc == '其他') {
				return;
			}

			if (state == '订单计划员确认') {
				this.confirmWindow.show();
				this.confirmWindow.loadData(cell);
			} else {
				Ext.Msg.alert('系统提示', '请选择状态为订单计划员确认的记录');
				return false;
			}

		}

		if (this.opt == 'mcconfirm') {
			if (hpmc == '其它' || hpmc == '其他') {
				return;
			}

			if (state == '物控计划员确认' || state == '不能接单') {
				this.mcconfirmListPanel.store.removeAll();
				this.mcconfirmInputPanel.form.reset();
				this.mcconfirmWindow.show();
				this.mcconfirmInputPanel.loadData(cell);
				this.mcconfirmInputPanel.orderNo.setValue(cell.get('orderNo'));
				this.mcconfirmInputPanel.prodAmount.setValue(cell
						.get('prodAmount'));
				this.mcconfirmInputPanel.newMakeLabel.setValue(cell
						.get('newMakeLabel'));
				this.mcconfirmInputPanel.newMakeMark.setValue(cell
						.get('newMakeMark'));

				this.mcconfirmInputPanel.demandStockDate.setValue(cell
						.get('demandStockDate'));
				this.mcconfirmInputPanel.relationId.setValue(cell.get('id'));

				// this.mcconfirmInputPanel.mReason.setValue(cell.get('mReason'));

				this.mcconfirmListPanel.store.baseParams = {
					'map/baseId' : cell.get('id')
				};
				this.mcconfirmListPanel.store.load();

			} else {
				Ext.Msg.alert('系统提示', '请选择状态为物控计划员确认或不能接单的记录');
				return false;
			}

		}

		if (this.opt == 'mcconfirm2') {
			if (hpmc == '其它' || hpmc == '其他') {
				return;
			}

			if (state == '订单计划员确认' || state == '不能接单') {
				this.mcconfirmInputPanel2.pkid.setValue('');
				this.mcconfirmInputPanel2.loadData(cell);

			} else {
				Ext.Msg.alert('系统提示', '请选择状态为订单计划员确认的记录');
				return false;
			}

		}

		if (this.opt == 'orderview') {
			this.orderViewWindow.show();
			this.orderViewWindow.loadData(cell);
		}

		if (this.opt == 'confirmlist') {
			if (hpmc == '其它' || hpmc == '其他') {
				return;
			}
			var relationId = cell.get('id');
			var store = this.confirmListPanel.store;
			store.load({
						params : {
							'map/relationId' : relationId
						}
					});
			this.confirmListWindow.show();

		}

		if (this.opt == 'adjust') {
			if (hpmc == '其它' || hpmc == '其他') {
				return;
			}

			if (state == '正式发布' || state == '调整申请') {
				var baseId = cell.get('id');
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.component.yxorderbase.queryPlanWeekByBaseId.biz.ext",
					method : "post",
					jsonData : {
						'condition/baseId' : baseId
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						var data = ret.data;
						if (!Ext.isEmpty(data)) {
							Ext.Msg.alert("系统提示", "已制定生产计划，不能变更！", function() {

									})
						} else {
							_this.adjustWindow.show();
							_this.adjustWindow.loadData(cell);
						}

					},
					callback : function() {
						_this.requestMask.hide()
					}
				})

			} else {
				Ext.Msg.alert('系统提示', '请选择状态为正式发布的记录');
				return false;
			}
		}

		if (this.opt == 'pconfirm') {

			if (hpmc == '其它' || hpmc == '其他') {
				return;
			}

			if (state == '计划员确认') {
				this.pconfirmWindow.show();
				this.pconfirmWindow.loadData(cell);
			} else {
				Ext.Msg.alert('系统提示', '请选择状态为计划员确认的记录');
				return false;
			}

		}

		if (this.opt == 'mconfirm') {

			if (hpmc == '其它' || hpmc == '其他') {
				return;
			}

			if (state == '制造中心确认') {
				this.mconfirmWindow.show();
				this.mconfirmWindow.loadData(cell);
			} else {
				Ext.Msg.alert('系统提示', '请选择状态为制造中心确认的记录');
				return false;
			}

		}

		if (this.opt == 'tconfirm') {
			if (hpmc == '其它' || hpmc == '其他') {
				return;
			}

			if (state == '工艺员确认') {
				this.tconfirmWindow.show();
				this.tconfirmWindow.loadData(cell);
			} else {
				Ext.Msg.alert('系统提示', '请选择状态为待工艺员确认的记录');
				return false;
			}

		}

		if (this.opt == 'pgconfirm') {
			if (hpmc == '其它' || hpmc == '其他') {
				return;
			}

			if (state == '品管确认') {
				this.pgconfirmWindow.show();
				this.pgconfirmWindow.loadData(cell);
			} else {
				Ext.Msg.alert('系统提示', '请选择状态为待品管确认的记录');
				return false;
			}

		}
	}, this);

	this.addOrderWindow.activeItem.mon(this.addOrderWindow.activeItem,
			'beforeSave', function() {

				var orderNo = this.addOrderWindow.orderNo.getValue();

				if (Ext.isEmpty(orderNo)) {
					return false;
				}
				// 建议订单编号规则如下!
				// 常规:20241225-14???,共计14位
				// 常规:20241225-14???-?,共计14位
				// 样品:样品-CRM??????，共计14位;
				// 展品:展品-CRM??????，共计14位;
				// 特规:CRM??????，共计9位。
				// B202？？？？？-？？？
				
				var regex = /^\d{8}-\d{5}$/;
				var convention = regex.test(orderNo);
				var regex = /^\d{8}-\d{5}-\d{1}$/;
				var convention2 = regex.test(orderNo);
				var regex = /^\样品-CRM\d{6}$/;
				var sample = regex.test(orderNo);
				var regex = /^\展品-CRM\d{6}$/;
				var exhibit = regex.test(orderNo);
				var regex = /^\CRM\d{6}$/;
				var special = regex.test(orderNo);
				var regex = /^B\d{8}-\d{3}$/;
				var special2 = regex.test(orderNo);

				var regex = /^\展品-CRM\d{6}-\d{1}$/;
				var exhibit2 = regex.test(orderNo);
				var regex = /^\展品-CRM\d{6}-\d{2}$/;
				var exhibit3 = regex.test(orderNo);
				//MF-年年月月日日-XXXXXX
				var regex = /^\MF-\d{6}-\d{6}$/;
				var exhibit4 = regex.test(orderNo);
				//售后-CRMXXXXXX
				var regex = /^\售后-CRM\d{6}$/;
				var aftersale = regex.test(orderNo);

				if (!convention && !convention2 && !sample && !exhibit
						&& !exhibit2 && !exhibit3 && !exhibit4 && !special && !special2 && !aftersale) {
					Ext.Msg.alert('系统提示', '订单编号不符合要求，请重新输入');
					return false;
				}

				/*var itemArr = [];
				var myCheckboxGroup = this.addOrderWindow.photoSingle;
				for (var i = 0; i < myCheckboxGroup.items.length; i++) {
					if (myCheckboxGroup.items.itemAt(i).checked) {
						itemArr.push(i);
					}
				}
				this.addOrderWindow.photoSingle2.setValue(itemArr.join(','));
				var itemArr = [];
				var myCheckboxGroup = this.addOrderWindow.photoAll;
				for (var i = 0; i < myCheckboxGroup.items.length; i++) {
					if (myCheckboxGroup.items.itemAt(i).checked) {
						itemArr.push(i);
					}
				}
				this.addOrderWindow.photoAll2.setValue(itemArr.join(','));*/
			}, this);

	this.adjustWindow.activeItem.mon(this.adjustWindow.activeItem, 'afterload',
			function(win, data) {

				var ifget = data.ifget;
				this.adjustWindow.pconfirm.setVisible(!Ext.isEmpty(ifget));
				this.adjustWindow.pconfirm2.setVisible(!Ext.isEmpty(ifget));
				this.adjustWindow.pconfirm3.setVisible(!Ext.isEmpty(ifget));
				this.adjustWindow.pconfirm4.setVisible(!Ext.isEmpty(ifget));
				this.adjustWindow.pconfirm5.setVisible(!Ext.isEmpty(ifget));
				this.adjustWindow.ifall.setVisible(!Ext.isEmpty(ifget));
				this.adjustWindow.ifsatisfy.setVisible(!Ext.isEmpty(ifget));
				this.adjustWindow.ifdelivery.setVisible(!Ext.isEmpty(ifget));
				this.adjustWindow.ifget.setVisible(!Ext.isEmpty(ifget));
				this.adjustWindow.reserve1.setVisible(!Ext.isEmpty(ifget));

			}, this);
			
	this.addOrderWindow.activeItem.mon(this.addOrderWindow.activeItem, 'afterload',
			function(win, data) {

				var tray = data.tray;
				if(tray == '公司标准') {
					this.addOrderWindow.tray.setValue('');
				}
				var lid = data.lid;
				if(lid != '格栅' && lid != '梳齿五星蜂窝' && lid != '定制' && lid != '蜂窝') {
					this.addOrderWindow.lid.setValue('');
				}

			}, this);

	// 查询事件
	this.queryPanel4ChooseLable.mon(this.queryPanel4ChooseLable, 'query',
			function(form, vals) {
				var store = this.listPanel4ChooseLable.store;
				store.baseParams = vals;
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChooseLable.pagingToolbar.pageSize
					}
				});
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

	this.mcconfirmInputPanel2.mon(this.mcconfirmInputPanel2, 'afterload',
			function(win, data) {

				var confirmId = this.mcconfirmInputPanel2.pkid.getValue();
				if (Ext.isEmpty(confirmId)) {
					Ext.Msg.alert('系统提示', '没有找到物料计划员接单的记录');
					return false;
				} else {
					this.mcconfirmWindow2.show();
					var store = this.mcconfirmListPanel2.store;
					store.load({
								params : {
									'map/relationId' : confirmId
									// 修改时加载
								}
							});
				}

			}, this);

}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.destroy = function() {

	this.excelUploadWin.destroy();
	this.confirmWindow.destroy();
	this.addOrderWindow.destroy();
	this.confirmListWindow.destroy();
	this.orderViewWindow.destroy();
	this.adjustWindow.destroy();
	this.pconfirmWindow.destroy();
	this.mconfirmWindow.destroy();
	this.orderMaterSpecWindow.destroy();
	this.addOrderMaterSpecWindow.destroy();
	this.updateRemarkWindow.destroy();
	this.chooseLableWindow.destroy();
	this.chooseMarkWindow.destroy();
	this.mcconfirmWindow.destroy();
	this.addMaterWindow.destroy();
}

// 模板文件下载
com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onDown = function() {

	Ext.Msg.show({
		width : 350,
		title : "操作提示",
		msg : "下载模板后，请按照示例填写真实订单数据，并注意日期和数字格式,示例数据请删除后再提交。",
		icon : Ext.Msg.WARNING,
		buttons : Ext.Msg.OK,
		fn : function(btn) {
			if (btn == "ok") {
				var fname = "ks_component_yxorderbase_import2.xls";
				window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
						+ fname;
			}
		}

	})
};

// 弹出文件上传选择窗口
com.keensen.ump.produce.component.yxorderbaseMgr.prototype.importExcel = function() {
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();

}

// 文件上传
com.keensen.ump.produce.component.yxorderbaseMgr.prototype.doUpload = function() {
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
										_this.listPanel.store.reload();
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

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onAddOrder = function() {
	if (this.onSingleSelect()) {
		this.opt = 'addorder';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onCalc = function() {
	var dryAmount = this.addOrderWindow.dryAmount.getValue();
	var wetAmount = this.addOrderWindow.wetAmount.getValue();
	var stockAmount = parseInt(dryAmount) + parseInt(wetAmount);
	var orderAmount = this.addOrderWindow.orderAmount.getValue();
	var prodAmount = orderAmount - stockAmount;
	this.addOrderWindow.stockAmount.setValue(stockAmount);
	this.addOrderWindow.prodAmount.setValue(prodAmount);
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onCalcPeriod = function() {
	// 入库日期-下单日期
	var demandStockDate = this.addOrderWindow.demandStockDate.getValue();
	var orderDate = this.addOrderWindow.orderDate.getValue();
	this.addOrderWindow.period.setValue(getDayDiff(orderDate, demandStockDate));
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onAddSave = function() {
	var _this = this;
	
	var materSpecName2 = this.addOrderWindow.materSpecName2.getValue();
	var pattern = /^[a-zA-Z0-9-]+$/;  // 正则表达式
	
	if (!pattern.test(materSpecName2)) {
    	Ext.Msg.alert('系统提示', '请检查订单下达型号');
		return false;
	}
	
//	1、如果端盖选定制，则必须要填端盖图纸编号
//2、标签序号不固定，则必填标签序号
//3、唛头序号固定，则必填唛头序号
//4、需生产数量大于0，且标签图纸不是KG开头，则标签图纸编号长度必须大于等于10
//5、需生产数量大于0，且唛头图纸不是KG开头，则唛头图纸编号长度必须大于等于10
//6、双标签选择是，则请完整输入第二标签信息
//7、双唛头选择是，则请完整输入第二唛头信息
//8、生产周期要求必须>=6天（不强制，只做提醒）

	//如果端盖选定制，则必须要填端盖图纸编号
	var lid = this.addOrderWindow.lid.getValue();
	
	var type = this.addOrderWindow.type.getValue();
	if(Ext.isEmpty(lid) && type == '工业膜'){
		Ext.Msg.alert('系统提示', '请选择端盖');
		return false;
	}
	
	var reserve5 = this.addOrderWindow.reserve5.getValue();
	if (!Ext.isEmpty(lid) && lid == '定制'
			&& Ext.isEmpty(reserve5)) {
		Ext.Msg.alert('系统提示', '请输入端盖图纸编号');
		return false;
	}

	
	var prodAmount = _this.addOrderWindow.prodAmount.getValue();

	// 1、生产周期由系统自动计算得出，只要修改了“下单日期”或“入库日期”则生产周期必须强制重新计算。
	// 2、生产周期必须>6天，才能下单。
	var period = this.addOrderWindow.period.getValue();

	var snRegular = this.addOrderWindow.snRegular.getValue();
	var snStart = this.addOrderWindow.snStart.getValue();
	var snEnd = this.addOrderWindow.snEnd.getValue();
//	if (!Ext.isEmpty(snRegular) && snRegular == '否'
//			&& (Ext.isEmpty(snStart) || Ext.isEmpty(snEnd))) {
//		Ext.Msg.alert('系统提示', '请输入标签序号');
//		return false;
//	}

	// 标签图纸
	var labelDrawingCode = this.addOrderWindow.labelDrawingCode.getValue();
	// 唛头图纸
	var markDrawingCode = this.addOrderWindow.markDrawingCode.getValue();

	if (parseFloat(prodAmount) > 0) {

		if (labelDrawingCode != 'KG') {
			if (Ext.isEmpty(labelDrawingCode) || labelDrawingCode.trim() == '无'
					|| labelDrawingCode.length < 10) {
				Ext.Msg.alert('系统提示', '请选择标签图纸');
				return false;
			}
		}
		if (markDrawingCode != 'KG') {
			if (Ext.isEmpty(markDrawingCode) || markDrawingCode.trim() == '无'
					|| markDrawingCode.length < 10) {
				Ext.Msg.alert('系统提示', '请选择唛头图纸');
				return false;
			}
		}
	}
	var markRegular = this.addOrderWindow.markRegular.getValue();
	var markStart = this.addOrderWindow.markStart.getValue();
	var markEnd = this.addOrderWindow.markEnd.getValue();
//	if (!Ext.isEmpty(markRegular) && markRegular == '是'
//			&& (Ext.isEmpty(markStart) || Ext.isEmpty(markEnd))) {
//		Ext.Msg.alert('系统提示', '请输入唛头序号');
//		return false;
//	}

	var labelDouble = this.addOrderWindow.labelDouble.getValue();
	if (labelDouble == '是') {
		var labelDrawingCode2 = this.addOrderWindow.labelDrawingCode2
				.getValue();
		var logoLabel2 = this.addOrderWindow.logoLabel2.getValue();
		var specNameLabel2 = this.addOrderWindow.specNameLabel2.getValue();
		if (Ext.isEmpty(labelDrawingCode2)
				&& (Ext.isEmpty(logoLabel2) || Ext.isEmpty(specNameLabel2))) {
			Ext.Msg.alert('系统提示', '请完整输入第二标签信息');
			return false;
		}
	}

	var markDouble = this.addOrderWindow.markDouble.getValue();
	if (markDouble == '是') {
		var markDrawingCode2 = this.addOrderWindow.markDrawingCode2.getValue();
		var logoMark2 = this.addOrderWindow.logoMark2.getValue();
		var specNameMark2 = this.addOrderWindow.specNameMark2.getValue();
		if (Ext.isEmpty(markDrawingCode2)
				&& (Ext.isEmpty(logoMark2) || Ext.isEmpty(specNameMark2))) {
			Ext.Msg.alert('系统提示', '请完整输入第二唛头信息');
			return false;
		}
	}

	if (parseFloat(period) < 6 && parseFloat(prodAmount) > 0) {
		// Ext.Msg.alert('系统提示', '生产周期必须>=6天，才能下单。');
		// return false;

		Ext.Msg.confirm("操作确认", "生产周期要求必须>=6天，才能下单,您确实要下单吗?", function(A) {
					if (A == "yes") {

						/*
						 * var label = this.addOrderWindow.label.getValue(); var
						 * logoLabel = this.addOrderWindow.logoLabel.getValue();
						 * var specNameLabel =
						 * this.addOrderWindow.specNameLabel.getValue(); if
						 * (!Ext.isEmpty(label) && label.trim() == '公司标准' &&
						 * (Ext.isEmpty(logoLabel) ||
						 * Ext.isEmpty(specNameLabel))) { Ext.Msg.alert('系统提示',
						 * '请完整输入标签信息'); return false; }
						 * 
						 * var mark = this.addOrderWindow.mark.getValue(); var
						 * logoMark = this.addOrderWindow.logoMark.getValue();
						 * var specNameMark =
						 * this.addOrderWindow.specNameMark.getValue(); if
						 * (!Ext.isEmpty(mark) && mark.trim() == '公司标准' &&
						 * (Ext.isEmpty(logoMark) || Ext.isEmpty(specNameMark))) {
						 * Ext.Msg.alert('系统提示', '请完整输入唛头信息'); return false; }
						 */

						_this.addOrderWindow.saveData();
					}
				})
	} else {
		_this.addOrderWindow.saveData();
	}

}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onConfirm = function() {

	if (this.onSingleSelect()) {
		this.opt = 'confirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onOrderView = function() {

	if (this.onSingleSelect()) {
		this.opt = 'orderview';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}

}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onConfirmSave = function() {
	var reason = this.confirmWindow.reason.getValue();
	var ifget = this.confirmWindow.ifget.getValue();
	if (!Ext.isEmpty(ifget) && ifget == '否' && Ext.isEmpty(reason)) {
		Ext.Msg.alert('系统提示', '不能接单时请填写反馈内容');
		return false;
	}

	if (!Ext.isEmpty(ifget) && ifget == '需工艺确认' && Ext.isEmpty(reason)) {
		Ext.Msg.alert('系统提示', '需工艺确认时请填写反馈内容');
		return false;
	}
	this.confirmWindow.saveData();
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onConfirmList = function() {

	if (this.onSingleSelect()) {
		this.opt = 'confirmlist';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onConfirmList2 = function() {
	if (this.onSingleSelect()) {
		this.opt = 'confirmlist';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onAdjust = function() {

	if (this.onSingleSelect()) {
		this.opt = 'adjust';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onPConfirm = function() {

	if (this.onSingleSelect()) {
		this.opt = 'pconfirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onMConfirm = function() {

	if (this.onSingleSelect()) {
		this.opt = 'mconfirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

// 物控
com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onMCConfirm = function() {

	if (this.onSingleSelect()) {
		this.opt = 'mcconfirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}
com.keensen.ump.produce.component.yxorderbaseMgr.prototype.exportExcel = function() {
	// KS00307 KS01147
	if (uid == 'KS00307' || uid == 'KS01147') {
		doQuerySqlAndExport(
				this,
				this.queryPanel,
				this.listPanel,
				'营销订单',
				'com.keensen.ump.produce.component.yxorderbase.queryYxOrderBase',
				'0,1');
	} else {
		var arr = ['导入时间','订单状态', '是否已发货', '销售订单编号', '下单日期', '入库日期', '订单下达型号', '货品名称',
				'干/湿', '订单数量', '发库存干膜数量（支）', '发库存湿膜数量（支）', '发库存数量（支）', '标签',
				'标签制作方式', '标签内部图纸编号', '唛头', '唛头内部图纸编号', '包装箱', '包装箱内部图纸编号',
				'是否新制版', '序列开始号', '序列结束号', '负责人', '产品型号', '备注', '导入操作员', '订单类型']

		doQuerySqlAndExportExt(
				this,
				this.queryPanel,
				this.listPanel,
				'营销订单',
				'com.keensen.ump.produce.component.yxorderbase.queryYxOrderBase',
				arr);
	}

	/*
	 * var _this = this;
	 * 
	 * var daochu = _this.queryPanel.getForm().getValues();
	 * 
	 * this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	 * msg : "后台正在操作,请稍候!" }); this.requestMask.show(); Ext.Ajax.request({ url :
	 * "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
	 * method : "post", jsonData : { 'map' : daochu, 'map/limited' : '10000',
	 * namingsql :
	 * 'com.keensen.ump.produce.component.yxorderbase.queryYxOrderBase',
	 * templateFilename : 'ks_component_yxorderbase_export' }, success :
	 * function(resp) { var ret = Ext.decode(resp.responseText); if
	 * (ret.success) {
	 * 
	 * var fname = ret.fname; if (Ext.isIE) {
	 * window.open('/default/deliverynote/seek/down4IE.jsp?fname=' + fname); }
	 * else { window.location.href =
	 * "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" + fname; } } },
	 * callback : function() { _this.requestMask.hide() } })
	 */
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onOrderMaterSpec = function() {
	this.orderMaterSpecWindow.show();
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onAddSpec = function() {
	this.addOrderMaterSpecWindow.show();
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onDelSpec = function() {
	this.listPanel3.onDel();
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onTConfirm = function() {

	if (this.onSingleSelect()) {
		this.opt = 'tconfirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onChange = function() {
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

		// var id = records[0].get('id');
		// var deliveryState = records[0].get('deliveryState') == '是' ? '否' :
		// '是';
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			// url :
			// "com.keensen.ump.produce.component.yxorderbase.saveDeliveryState.biz.ext",
			url : "com.keensen.ump.produce.component.yxorderbase.saveDeliveryStateBatch.biz.ext",
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

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onDel = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		if (!this.onSingleSelect()) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return false;
		}
		var records = A.getSelectionModel().getSelections();
		var state = records[0].get('state');
		var id = records[0].get('id');
		var prodAmount = records[0].get('prodAmount');
		var delUrl = "com.keensen.ump.produce.component.yxorderbase.deleteYxOrderBase.biz.ext";
		if (state != '制定中') {
			if (parseFloat(prodAmount) > 0) {
				Ext.Msg.alert('系统提示', '请选择状态为制定中的记录');
				return false;
			} else if (state == '正式发布') {
				delUrl = "com.keensen.ump.produce.component.yxorderbase.deleteYxOrderBase2.biz.ext";
			}
		}
		Ext.Msg.confirm("操作确认", "您确实要删除这条记录吗?", function(A) {
					if (A == "yes") {
						this.requestMask = this.requestMask
								|| new Ext.LoadMask(Ext.getBody(), {
											msg : "后台正在操作,请稍候!"
										});
						this.requestMask.show();
						Ext.Ajax.request({
									url : delUrl,
									method : "post",
									jsonData : {
										'id' : id
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
				})
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onChoose4Label = function(
		opt) {
	this.chooseLableWindow.opt = opt;
	this.queryPanel4ChooseLable.form.reset();
	var store = this.listPanel4ChooseLable.store;
	store.baseParams = {};
	store.load({
		params : {
			"pageCond/begin" : 0,
			"pageCond/length" : this.listPanel4ChooseLable.pagingToolbar.pageSize
		}
	});
	this.chooseLableWindow.show();

}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onSelect4ChooseLable = function() {
	var A = this.listPanel4ChooseLable;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var logo = records[0].data.logo;
		var specName = records[0].data.specName;
		var drawingCode = records[0].data.drawingCode;
		var opt = this.chooseLableWindow.opt
		if (opt == '1') {
			this.addOrderWindow.logoLabel.setValue(logo);
			this.addOrderWindow.specNameLabel.setValue(specName);
			this.addOrderWindow.labelDrawingCode.setValue(drawingCode);
			if (drawingCode == 'KG') {
				this.addOrderWindow.label.setValue('客供标签');
				this.addOrderWindow.makeLabel.setValue('客供');
				this.addOrderWindow.material.setValue('客户订制');
				this.addOrderWindow.back.setValue('客户订制');
			}
			
			if (drawingCode == 'TP-17-0000-A') {
				this.addOrderWindow.label.setValue('无');
				this.addOrderWindow.makeLabel.setValue('无需制作');
				this.addOrderWindow.material.setValue('无');
				this.addOrderWindow.back.setValue('无');
			}
		}
		if (opt == '2') {
			this.addOrderWindow.logoLabel2.setValue(logo);
			this.addOrderWindow.specNameLabel2.setValue(specName);
			this.addOrderWindow.labelDrawingCode2.setValue(drawingCode);
		}
		this.chooseLableWindow.hide();
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onChoose4Mark = function(
		opt) {
	this.chooseMarkWindow.opt = opt;
	this.queryPanel4ChooseMark.form.reset();

	var materSpecName2 = this.addOrderWindow.materSpecName2.getValue();
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

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onSelect4ChooseMark = function() {
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
			this.addOrderWindow.logoMark.setValue(logo);
			this.addOrderWindow.specNameMark.setValue(specName);
			this.addOrderWindow.markDrawingCode.setValue(drawingCode);

			if (drawingCode == 'KG') {
				this.addOrderWindow.mark.setValue('客供唛头');
				this.addOrderWindow.makeMark.setValue('客供');

			}

		}
		if (opt == '2') {
			this.addOrderWindow.logoMark2.setValue(logo);
			this.addOrderWindow.specNameMark2.setValue(specName);
			this.addOrderWindow.markDrawingCode2.setValue(drawingCode);
		}
		this.chooseMarkWindow.hide();
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onSingleSelect = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onAddMC = function() {

	var C = this.listPanel.getSelectionModel().getSelections();
	var r = C[0];

	this.addMaterWindow.items.items[0].form.reset();
	this.addMaterWindow.applyDate.setValue(new Date());
	this.addMaterWindow.goodsState.setValue('未到货');
	this.addMaterWindow.labelDrawingCode.setValue(r.data.labelDrawingCode);
	this.addMaterWindow.markDrawingCode.setValue(r.data.markDrawingCode);
	this.addMaterWindow.snStart.setValue(r.data.snStart);
	this.addMaterWindow.snEnd.setValue(r.data.snEnd);

	//备注底色和材质这两项取消不带出来
	var arr = [r.data.label, r.data.makeLabel, r.data.material, r.data.back]
	//var arr = [r.data.label, r.data.makeLabel];
	var remark = arr.join('|');
	this.addMaterWindow.remark.setValue(remark)

	this.addMaterWindow.show();
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onInsertMater = function() {
	var _this = this;
	if (this.addMaterWindow.items.items[0].form.isValid()) {

		// 当需求日期 大于申请日期4天时要警示
		var applyDate = this.addMaterWindow.applyDate.getValue();
		var demandDate = this.addMaterWindow.demandDate.getValue();
		if (getDayDiff(applyDate, demandDate) > 4) {
			Ext.Msg.confirm("操作确认", "需求日期大于申请日期4天,您确认新增吗?", function(A) {
						if (A == "yes") {
							_this.insertMater();
						}
					})
		} else {
			this.insertMater();
		}

	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.insertMater = function() {
	var store;
	if (this.mcconfirmWindow2.hidden)
		store = this.mcconfirmListPanel.store;
	else
		store = this.mcconfirmListPanel2.store;
	var r = new Ext.data.Record({
				planState : this.addMaterWindow.planState.getValue(),
				goodsState : this.addMaterWindow.goodsState.getValue(),
				applyDate : this.addMaterWindow.applyDate.getRawValue(),
				specName : this.addMaterWindow.specName.getValue(),
				materCode : this.addMaterWindow.materCode.getValue(),
				materName : this.addMaterWindow.materName.getValue(),
				materType : this.addMaterWindow.materType.getValue(),
				unit : this.addMaterWindow.unit.getValue(),
				amount : this.addMaterWindow.amount.getValue(),
				k3 : this.addMaterWindow.k3.getValue(),
				demandDate : this.addMaterWindow.demandDate.getRawValue(),
				remark : this.addMaterWindow.remark.getValue()
			})
	store.add(r);
	this.addMaterWindow.planState.setValue('');
	this.addMaterWindow.goodsState.setValue('未到货');
	this.addMaterWindow.applyDate.setValue(new Date());
	this.addMaterWindow.specName.setValue('');
	this.addMaterWindow.materCode.setValue('');
	this.addMaterWindow.materName.setValue('');
	this.addMaterWindow.materType.setValue('');
	this.addMaterWindow.unit.setValue('');
	this.addMaterWindow.amount.setValue('');
	this.addMaterWindow.k3.setValue('');
	this.addMaterWindow.demandDate.setValue('');
	this.addMaterWindow.remark.setValue('');
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onInsertMater2 = function() {
	var _this = this;
	if (this.addMaterWindow.items.items[0].form.isValid()) {

		// 当需求日期 大于申请日期4天时要警示
		var applyDate = this.addMaterWindow.applyDate.getValue();
		var demandDate = this.addMaterWindow.demandDate.getValue();
		if (getDayDiff(applyDate, demandDate) > 4) {
			Ext.Msg.confirm("操作确认", "需求日期大于申请日期4天,您确认新增吗?", function(A) {
						if (A == "yes") {
							_this.insertMater();
							_this.addMaterWindow.hide();
						}
					})
		} else {
			this.insertMater();
			_this.addMaterWindow.hide();
		}

	}

}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onDelMC = function() {
	var records = this.mcconfirmListPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		this.mcconfirmListPanel.store.remove(records[0]);
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onDelMC2 = function() {
	var records = this.mcconfirmListPanel2.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		this.mcconfirmListPanel2.store.remove(records[0]);
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onSaveMCConfirm = function() {
	var _this = this;
	if (this.mcconfirmInputPanel.form.isValid()) {
		var store = this.mcconfirmListPanel.store;
		var records = store.getRange();
		var ifall = this.mcconfirmInputPanel.ifall.getValue();

		var ifget = this.mcconfirmInputPanel.ifget.getValue();

		if (ifget == '是' && ifall == '否' && records.length == 0) {
			Ext.Msg.alert("系统提示", "至少需要有一条物料计划！")
			return false;
		} else {

			var mconfirm = [];
			Ext.each(records, function(r) {
						var dt = {
							'planState' : r.data['planState'],
							'goodsState' : r.data['goodsState'],
							'applyDate' : r.data['applyDate'],
							'specName' : r.data['specName'],
							'materCode' : r.data['materCode'],
							'materName' : r.data['materName'],
							'materType' : r.data['materType'],
							'unit' : r.data['unit'],
							'amount' : r.data['amount'],
							'k3' : r.data['k3'],
							'demandDate' : r.data['demandDate'],
							'remark' : r.data['remark']
						};
						mconfirm.push(dt);

					});

			this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			this.requestMask.show();
			Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.yxorderbase.saveMCConfirm5.biz.ext",
				method : "post",
				jsonData : {
					'entity' : this.mcconfirmInputPanel.form.getValues(),
					'mconfirm' : mconfirm

				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						if (ret.success) {
							_this.listPanel.store.reload();
							_this.mcconfirmWindow.hide();
						}
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
		}
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onSaveMCConfirm2 = function() {
	var _this = this;
	if (this.mcconfirmInputPanel2.form.isValid()) {
		var store = this.mcconfirmListPanel2.store;
		var records = store.getRange();

		var ifall = this.mcconfirmInputPanel2.ifall.getValue();

		var ifget = this.mcconfirmInputPanel2.ifget.getValue();

		if (ifget == '是' && ifall == '否' && records.length == 0) {
			Ext.Msg.alert("系统提示", "至少需要有一条物料计划！")
			return false;
		} else {

			var mconfirm = [];
			Ext.each(records, function(r) {
						var dt = {
							'planState' : r.data['planState'],
							'goodsState' : r.data['goodsState'],
							'applyDate' : r.data['applyDate'],
							'specName' : r.data['specName'],
							'materCode' : r.data['materCode'],
							'materName' : r.data['materName'],
							'materType' : r.data['materType'],
							'unit' : r.data['unit'],
							'amount' : r.data['amount'],
							'k3' : r.data['k3'],
							'demandDate' : r.data['demandDate'],
							'remark' : r.data['remark']
						};
						mconfirm.push(dt);

					});

			this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			this.requestMask.show();
			Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.yxorderbase.modifyMCConfirm.biz.ext",
				method : "post",
				jsonData : {
					'entity' : this.mcconfirmInputPanel2.form.getValues(),
					'mconfirm' : mconfirm

				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						if (ret.success) {
							_this.listPanel.store.reload();
							_this.mcconfirmWindow2.hide();
						}
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
		}
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onViewMC = function() {
	var confirmId = this.confirmWindow.confirmId.getValue();
	if (Ext.isEmpty(confirmId)) {
		Ext.Msg.alert("系统提示", "没有物控计划员接单记录！")
		return false;
	}
	var r = new Ext.data.Record({
				id : confirmId
			});
	this.viewMCInputPanel.loadData(r);
	this.viewMCWindow.show();
	var store = this.viewMCListPanel.store;
	store.load({
				params : {
					'map/relationId' : confirmId
					// 修改时加载
				}
			});
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onMCConfirm2 = function() {
	if (this.onSingleSelect()) {
		this.opt = 'mcconfirm2';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onFill = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	var r = C[0];
	var label = r.data.label;
	var mark = r.data.mark;

	var labelDrawingCode = this.addMaterWindow.labelDrawingCode.getValue();
	if (Ext.isEmpty(labelDrawingCode)) {
		Ext.Msg.alert("系统提示", "标签图号为空，无法填充!");
		return false;
	}

	var i = this.baseMaterStore.find('drawingCode', labelDrawingCode);
	if (i == -1) {
		Ext.Msg.alert("系统提示", "没有匹配到数据!");
		return false;
	}
	var rec2 = this.baseMaterStore.getAt(i);
	var materCode = rec2.get('materCode');
	var specName = rec2.get('specName');
	var unit = rec2.get('unit');
	var materName = rec2.get('materName');
	this.addMaterWindow.materName.setValue(materName);
	this.addMaterWindow.materCode.setValue(materCode);
	this.addMaterWindow.materType.setValue('标签');
	// this.addMaterWindow.remark.setValue(label);
	this.addMaterWindow.unit.setValue(unit);
	this.addMaterWindow.specName.setValue(specName);
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onFill2 = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	var r = C[0];
	var label = r.data.label;
	var mark = r.data.mark;

	var markDrawingCode = this.addMaterWindow.markDrawingCode.getValue();
	if (Ext.isEmpty(markDrawingCode)) {
		Ext.Msg.alert("系统提示", "唛头图号为空，无法填充!");
		return false;
	}
	var i = this.baseMaterStore.find('drawingCode', markDrawingCode);
	if (i == -1) {
		Ext.Msg.alert("系统提示", "没有匹配到数据!");
		return false;
	}
	var rec2 = this.baseMaterStore.getAt(i);
	var materCode = rec2.get('materCode');
	var specName = rec2.get('specName');
	var unit = rec2.get('unit');
	var materName = rec2.get('materName');
	this.addMaterWindow.materName.setValue(materName);
	this.addMaterWindow.materCode.setValue(materCode);
	this.addMaterWindow.materType.setValue('唛头');
	this.addMaterWindow.remark.setValue(mark);
	this.addMaterWindow.unit.setValue(unit);
	this.addMaterWindow.specName.setValue(specName);
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onFill3 = function() {
	var materCode = this.addMaterWindow.materCode.getValue();
	if (Ext.isEmpty(materCode)) {
		Ext.Msg.alert("系统提示", "物料号为空，无法填充采购数量!");
		return false;
	}
	var i = this.yxorderStockAmountStore.find('materCode', materCode);
	if (i == -1) {
		Ext.Msg.alert("系统提示", "没有匹配到K3库存!");
		return false;
	}
	var rec2 = this.yxorderStockAmountStore.getAt(i);
	var amount = rec2.get('amount');
	this.addMaterWindow.k3.setValue(amount);
	
	var materName = rec2.get('materName');
	this.addMaterWindow.materName.setValue(materName);
	
	var unit = rec2.get('unit');
	this.addMaterWindow.unit.setValue(unit);
	
	var specName = rec2.get('specName');
	this.addMaterWindow.specName.setValue(specName);
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onPGConfirm = function() {

	if (this.onSingleSelect()) {
		this.opt = 'pgconfirm';
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return false;
	}
}

// 日期相差天数
function getDayDiff(start, end) {
	var datediff = (new Date(end)) - (new Date(start));
	datediff = datediff / 24 / 60 / 60 / 1000;
	return Math.round(datediff);;
}

function describeOrderNo() {
	var s = '订单编号规则如下:<br>'
	s += '常规: 20241225-14???,共14位<br>';
	s += '常规2: 20241225-14???-?,共16位<br>';
	s += '样品: 样品-CRM??????，共12位<br>';
	s += '展品: 展品-CRM??????，共12位<br>';
	s += '展品: 展品-CRM??????-?，共14位<br>';
	s += '展品: 展品-CRM??????-??，共15位<br>';
	s += '特规: CRM??????，共9位<br>';
	s += '特规2: B202?????-???，共13位<br>'
	s += '免费样品: MF-年年月月日日-XXXXXX<br>'
	s += '售后: 售后-CRM??????，共12位<br>';
	Ext.Msg.alert("订单编号规则", s);
}

// 获取权限
com.keensen.ump.produce.component.yxorderbaseMgr.prototype.getRight = function() {
	var _this = this;
	Ext.Ajax.request({
				url : "qinsen/produce/right.json",
				method : "post",
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					var data = ret.data;
					var item = data[0].yxorderbase;
					var exportLimitUsers = item.exportLimitUsers;
					var exportUsers = item.exportUsers;
					Ext.getCmp(exportButton).setVisible(exportLimitUsers
							.indexOf(uid) != -1
							|| exportUsers.indexOf(uid) != -1);
					if (exportLimitUsers.indexOf(uid) != -1) {
						_this.exportFields = item.exportLimitFields;
					}

				},
				callback : function() {
				}
			})
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onCancel = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {

		Ext.Msg.confirm("操作确认", "您确实要取消订单吗?", function(btn) {
			if (btn == "yes") {

				var records = A.getSelectionModel().getSelections();

				for (var i = 0; i < records.length; i++) {
					var r = records[i];
					var state = r.data.state;
					if (state != '不能接单') {
						Ext.Msg.alert('系统提示', '请选择状态为不能接单的记录');
						return;
					}
				}

				var ids = []
				Ext.each(records, function(r) {
							var id = r.data.id;
							ids.push(id);
						})

				// var id = records[0].get('id');
				// var deliveryState = records[0].get('deliveryState') == '是' ?
				// '否' :
				// '是';
				this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				this.requestMask.show();
				Ext.Ajax.request({
					// url :
					// "com.keensen.ump.produce.component.yxorderbase.saveDeliveryState.biz.ext",
					url : "com.keensen.ump.produce.component.yxorderbase.saveCancelStateBatch.biz.ext",
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
		})
	}
}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onPreView = function() {
	var A = this.listPanel4ChooseMark;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	var records = A.getSelectionModel().getSelections();
	var templateName = records[0].data.drawingCode;
	
	var code = records[0].data.code;

	if (code !='1' && code!='999') {
		Ext.Msg.alert("系统提示", "请选择司标或自定义模板预览！");
		return;
	}
	
	var f = document.getElementById('componentmarktemplatepreviewForm2');
	f.drawingCode.value = templateName;
	var actionUrl = 'com.keensen.ump.produce.component.printMarks4PreView.flow?time='
			+ Math.random() + '&token=' + Date.now();

	f.action = actionUrl;
	f.submit();

}

com.keensen.ump.produce.component.yxorderbaseMgr.prototype.onChangeTaskState = function() {
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

		// var id = records[0].get('id');
		// var deliveryState = records[0].get('deliveryState') == '是' ? '否' :
		// '是';
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			// url :
			// "com.keensen.ump.produce.component.yxorderbase.saveDeliveryState.biz.ext",
			url : "com.keensen.ump.produce.component.yxorderbase.saveTaskStateBatch.biz.ext",
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