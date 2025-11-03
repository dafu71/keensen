com.keensen.ump.produce.component.YxorderInputMgr.prototype.initEvent = function() {

	// 查询事件
	this.queryPanel4ChooseLable.mon(this.queryPanel4ChooseLable, 'query',
			function(form, vals) {
				var store = this.listPanel4ChooseLable.store;
				this.queryPanel4ChooseLable.status.setValue('1');
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
				this.queryPanel4ChooseMark.status.setValue('1');
				store.baseParams = this.queryPanel4ChooseMark.form.getValues();
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

	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var state = cell.data.state;

				if (state == '已确认') {
					Ext.Msg.alert('系统提示', '已确认订单不能修改');
					return false;
				}

				var _this = this;
				if (this.opt == 'addorder' && state == '待计划确认') {
					this.addOrderWindow.show();
					this.addOrderWindow.loadData(cell);

				}

				if (this.opt == 'stockconfirm' && state == '待仓库确认') {

					var pkid = cell.data.id;
					this.stockConfirmWindow.show();

					this.stockConfirmWindow.orderAmount
							.setValue(cell.data.amount);
					this.stockConfirmWindow.wetAmount
							.setValue(cell.data.wetAmount);
					this.stockConfirmWindow.orderNo.setValue(cell.data.orderNo);
					this.stockConfirmWindow.jmSpecName
							.setValue(cell.data.jmSpecName);

					this.stockConfirmWindow.pkid.setValue(pkid);

				}

			}, this);
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onAddSave = function() {
	var _this = this;

	var period = this.addOrderWindow.period.getValue();
	if (Ext.isEmpty(period)) {
		Ext.Msg.alert('系统提示', '生产周期不能为空');
		return false;
	}

	//alert('ok');
	//return;
	
	var materSpecName2 = this.addOrderWindow.materSpecName2.getValue();
	var pattern = /^[a-zA-Z0-9-]+$/; // 正则表达式

	if (!pattern.test(materSpecName2)) {
		Ext.Msg.alert('系统提示', '请检查订单下达型号');
		return false;
	}

	// 1、如果端盖选定制，则必须要填端盖图纸编号
	// 2、标签序号不固定，则必填标签序号
	// 3、唛头序号固定，则必填唛头序号
	// 4、需生产数量大于0，且标签图纸不是KG开头，则标签图纸编号长度必须大于等于10
	// 5、需生产数量大于0，且唛头图纸不是KG开头，则唛头图纸编号长度必须大于等于10
	// 6、双标签选择是，则请完整输入第二标签信息
	// 7、双唛头选择是，则请完整输入第二唛头信息
	// 8、生产周期要求必须>=6天（不强制，只做提醒）

	// 如果端盖选定制，则必须要填端盖图纸编号
	var lid = this.addOrderWindow.lid.getValue();

	var type = this.addOrderWindow.type.getValue();
	if (Ext.isEmpty(lid) && type != '家用膜') {
		Ext.Msg.alert('系统提示', '请选择端盖');
		return false;
	}

	var reserve5 = this.addOrderWindow.reserve5.getValue();
	if (!Ext.isEmpty(lid) && lid == '定制' && Ext.isEmpty(reserve5)) {
		Ext.Msg.alert('系统提示', '请输入端盖图纸编号');
		return false;
	}

	var prodAmount = _this.addOrderWindow.prodAmount.getValue();

	// 1、生产周期由系统自动计算得出，只要修改了“下单日期”或“入库日期”则生产周期必须强制重新计算。
	// 2、生产周期必须>6天，才能下单。
	
	var snRegular = this.addOrderWindow.snRegular.getValue();
	var snStart = this.addOrderWindow.snStart.getValue();
	var snEnd = this.addOrderWindow.snEnd.getValue();
	// if (!Ext.isEmpty(snRegular) && snRegular == '否'
	// && (Ext.isEmpty(snStart) || Ext.isEmpty(snEnd))) {
	// Ext.Msg.alert('系统提示', '请输入标签序号');
	// return false;
	// }

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
	// if (!Ext.isEmpty(markRegular) && markRegular == '是'
	// && (Ext.isEmpty(markStart) || Ext.isEmpty(markEnd))) {
	// Ext.Msg.alert('系统提示', '请输入唛头序号');
	// return false;
	// }

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
						 * var mark = this.addOrderWindow.label.getValue(); var
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

com.keensen.ump.produce.component.YxorderInputMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '营销下单',
			'com.keensen.ump.produce.component.orderrecord.queryOrderInputList');
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onAdd = function() {

	this.inputWindow4Add.items.items[0].form.reset();
	this.listPanel4Add.store.removeAll();
	this.inputWindow4Add.show();
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onAddList = function() {

	this.addJmSpecNameWindow.show();
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onInsertJmSpecName4Standard = function() {

	if (this.addJmSpecNameWindow.items.items[0].form.isValid()) {
		var store = this.listPanel4Add.store;
		var r = new Ext.data.Record({
					jmSpecName : this.addJmSpecNameWindow.jmSpecName.getValue(),
					ifReview : '否',
					ifStandard : '是',
					reviewNo : null,
					reviewId : null,
					amount : this.addJmSpecNameWindow.amount.getValue(),
					wetAmount : this.addJmSpecNameWindow.wetAmount.getValue(),
					labelSn : null,
					markSn : null,
					state : '待仓库确认'
				})
		store.add(r);
		this.addJmSpecNameWindow.items.items[0].form.reset();
		this.addJmSpecNameWindow.hide();
	}
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onAddList2 = function() {

	this.addJmSpecNameWindow2.show();
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onInsertJmSpecName4NotStandard = function() {

	if (this.addJmSpecNameWindow2.items.items[0].form.isValid()) {
		var store = this.listPanel4Add.store;
		var r = new Ext.data.Record({
					jmSpecName : this.addJmSpecNameWindow2.jmSpecName
							.getValue(),
					ifReview : '否',
					ifStandard : '否',
					reviewNo : null,
					reviewId : null,
					amount : this.addJmSpecNameWindow2.amount.getValue(),
					wetAmount : this.addJmSpecNameWindow2.wetAmount.getValue(),
					labelSn : null,
					markSn : null,
					state : '待仓库确认'
				})
		store.add(r);
		this.addJmSpecNameWindow2.items.items[0].form.reset();
		this.addJmSpecNameWindow2.hide();
	}
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onDel4Add = function() {

	var records = this.listPanel4Add.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		this.listPanel4Add.store.remove(records[0]);
	}
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onAddList3 = function() {

	Ext.Msg.alert("系统提示", "无开发需要数据，待开发！")
	return false;
	this.uploadForm = this.excelUploadWin.getComponent('uploadForm').getForm();
	this.uploadForm.reset();
	this.excelUploadWin.show();
	// Ext.getCmp('uploadMarkTemplate').onClick();

	$(reviewupload).click();

}

// 文件上传
com.keensen.ump.produce.component.YxorderInputMgr.prototype.doUpload = function() {
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

							var ids = result.ids;
							_this.addJmSpecNameWindow3.show();
							_this.listPanel4AddJmSpecName.store.load({
										params : {
											"condition/ids" : ids
										}
									});

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

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onInsertJmSpecName4Review = function() {

	var store = this.listPanel4Add.store;

	var fromStore = this.listPanel4AddJmSpecName.store;

	var records = fromStore.getRange();

	for (var i = 0; i < records.length; i++) {
		var amount = records[i].data['amount'];
		if (Ext.isEmpty(amount)) {
			Ext.Msg.alert("系统提示", "数量必填！")
			return false;
		}
	}
	Ext.each(records, function(rd) {
				var r = new Ext.data.Record({
							jmSpecName : rd.data['jmSpecName'],
							ifReview : '是',
							ifStandard : null,
							reviewNo : rd.data['reviewNo'],
							reviewId : rd.data['reviewId'],
							amount : rd.data['amount'],
							wetAmount : null,
							labelSn : rd.data['labelSn'],
							markSn : rd.data['markSn'],
							state : '待仓库确认'
						})
				store.add(r);
			});

	this.addJmSpecNameWindow3.hide();

}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onSave = function() {

	var _this = this;

	var records = this.listPanel4Add.store.getRange();

	if (records.length == 0) {
		Ext.MessageBox.alert("操作提示", "订单详情不能为空!", function() {

				})
		return false;
	}

	if (this.inputPanel4Add.form.isValid()) {

		var orderNo = this.inputPanel4Add.orderNo.getValue();
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
		// MF-年年月月日日-XXXXXX
		var regex = /^\MF-\d{6}-\d{6}$/;
		var exhibit4 = regex.test(orderNo);
		// 售后-CRMXXXXXX
		var regex = /^\售后-CRM\d{6}$/;
		var aftersale = regex.test(orderNo);

		if (!convention && !convention2 && !sample && !exhibit && !exhibit2
				&& !exhibit3 && !exhibit4 && !special && !special2
				&& !aftersale) {
			Ext.Msg.alert('系统提示', '订单编号不符合要求，请重新输入');
			return false;
		}

		var list = [];

		Ext.each(records, function(r) {

					var d = {
						'jmSpecName' : r.data['jmSpecName'],
						'ifReview' : r.data['ifReview'],
						'ifStandard' : r.data['ifStandard'],
						'reviewNo' : r.data['reviewNo'],
						'reviewId' : r.data['reviewId'],
						'amount' : r.data['amount'],
						'wetAmount' : r.data['wetAmount'],
						'labelSn' : r.data['labelSn'],
						'markSn' : r.data['markSn'],
						'state' : '待仓库确认'
					}

					list.push(d);

				});

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			method : "POST",
			url : 'com.keensen.ump.produce.component.orderrecord.saveOrderInput.biz.ext',
			jsonData : {
				'head' : this.inputPanel4Add.form.getValues(),
				'list' : list
			},
			success : function(F) {
				var B = Ext.decode(F.responseText);
				if (B.success) {
					Ext.MessageBox.alert("操作提示", "保存成功!", function() {
								_this.listPanel.store.reload({});
								_this.inputWindow4Add.hide();
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

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onConfirm = function() {
	this.opt = 'addorder';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onStockConfirm = function() {
	this.opt = 'stockconfirm';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onCalc = function() {
	var dryAmount = this.addOrderWindow.dryAmount.getValue();
	var wetAmount = this.addOrderWindow.wetAmount.getValue();
	var stockAmount = parseInt(dryAmount) + parseInt(wetAmount);
	var orderAmount = this.addOrderWindow.orderAmount.getValue();
	var prodAmount = orderAmount - stockAmount;
	this.addOrderWindow.stockAmount.setValue(stockAmount);
	this.addOrderWindow.prodAmount.setValue(prodAmount);
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onCalcPeriod = function() {
	// 入库日期-下单日期
	var demandStockDate = this.addOrderWindow.demandStockDate.getValue();
	var orderDate = this.addOrderWindow.orderDate.getValue();
	this.addOrderWindow.period.setValue(getDayDiff(orderDate, demandStockDate));
}

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onChoose4Label = function(
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

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onSelect4ChooseLable = function() {
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

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onChoose4Mark = function(
		opt) {
	this.chooseMarkWindow.opt = opt;
	this.queryPanel4ChooseMark.form.reset();

	var materSpecName2 = this.addOrderWindow.materSpecName2.getValue();
	var store = this.listPanel4ChooseMark.store;
	store.baseParams = {
		'condition/specName2' : materSpecName2,
		'condition/status' : 1
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

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onSelect4ChooseMark = function() {
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

com.keensen.ump.produce.component.YxorderInputMgr.prototype.onSingleSelect = function() {
	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 1) {
		return false;
	} else {
		return true;
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