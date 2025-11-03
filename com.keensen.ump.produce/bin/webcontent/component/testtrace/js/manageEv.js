com.keensen.ump.produce.component.testtraceMgr.prototype.initEvent = function() {

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

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

}

com.keensen.ump.produce.component.testtraceMgr.prototype.saveProdSpecName = function(
		id, newValue, oldValue) {
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.testtrace.saveTestTrace.biz.ext',
		jsonData : {
			"entity/id" : id,
			"entity/reserve1" : newValue
		},
		success : function(response, action) {
			Ext.Msg.alert("系统提示", "修改成功！");
		}
	});
};

com.keensen.ump.produce.component.testtraceMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.testtraceMgr.prototype.onScan = function() {
	var batchNo = this.inputPanel.batchNo.getValue();
	if (Ext.isEmpty(batchNo) && batchNo.length < 11) {
		return;
	}

	var materCode = batchNo.substr(2, 2);
	// 型号改为3位，批次改为13位
	if (batchNo.length == 13) {
		materCode = batchNo.substr(2, 3);
	}

	var i = -1;
	if (batchNo.length == 13) {
		i = this.diaphragmTestStore.find('newBatchCode', materCode);
	} else {
		i = this.diaphragmTestStore.find('materCode', materCode);
	}
	// var i = this.diaphragmTestStore.find('materCode', materCode);

	var rec2 = this.diaphragmTestStore.getAt(i);
	var prodSpecName = rec2.get('prodSpecName');
	var prodSpecId = rec2.get('prodSpecId');
	var sampleLength = rec2.get('sampleLength');

	var sampleLengthLow = rec2.get('sampleLengthLow');
	var sampleLengthUp = rec2.get('sampleLengthUp');
	var info = '<p style="color:red;">型号' + prodSpecName + ',送样长度下限'
			+ sampleLengthLow + ',长度上限' + sampleLengthUp + '</p>';

	this.inputPanel.prodSpecName.setValue(prodSpecName);
	this.inputPanel.prodSpecId.setValue(prodSpecId);
	this.inputPanel.sampleLength.setValue(sampleLength);

	this.inputPanel.sampleLengthLow.setValue(sampleLengthLow);
	this.inputPanel.sampleLengthUp.setValue(sampleLengthUp);

	this.inputPanel.info.setValue(info);

	var materSpecName = rec2.get('materSpecName');
	this.inputPanel.materSpecName.setValue(materSpecName);

}

com.keensen.ump.produce.component.testtraceMgr.prototype.onCalc = function() {
	var batchNo = this.inputPanel.batchNo.getValue();
	if (Ext.isEmpty(batchNo) && batchNo.length < 11) {
		return;
	}
	var prodSpecName = this.inputPanel.prodSpecName.getValue();
	if (Ext.isEmpty(prodSpecName)) {
		Ext.Msg.alert("系统提示", "叠膜型号不能为空！");
		return;
	}
	var testLength = this.inputPanel.testLength.getValue();
	if (Ext.isEmpty(testLength)) {
		Ext.Msg.alert("系统提示", "试卷膜片长度不能为空！");
		return;
	} else {
		var length = prodSpecName.indexOf('-4') > -1 ? 10 : 40.25;
		var testAmount = Math.floor(testLength / length);
		this.inputPanel.testAmount.setValue(testAmount);
	}
}

com.keensen.ump.produce.component.testtraceMgr.prototype.onCalc2 = function() {
	var batchNo = this.inputPanel.batchNo.getValue();
	if (Ext.isEmpty(batchNo) && batchNo.length < 11) {
		return;
	}
	var prodSpecName = this.inputPanel.prodSpecName.getValue();
	if (Ext.isEmpty(prodSpecName)) {
		Ext.Msg.alert("系统提示", "叠膜型号不能为空！");
		return;
	}
	var testAmount = this.inputPanel.testAmount.getValue();
	if (Ext.isEmpty(testAmount)) {
		Ext.Msg.alert("系统提示", "试卷支数不能为空！");
		return;
	}
	var length = prodSpecName.indexOf('-4') > -1 ? 10 : 40.25;
	var testLength = Math.floor(testAmount * length);
	this.inputPanel.testLength.setValue(testLength);
}

com.keensen.ump.produce.component.testtraceMgr.prototype.onSubmit = function() {
	var _this = this;
	var batchNo = this.inputPanel.batchNo.getValue();
	// var testType = this.inputPanel.testType.getValue();

	var obj = this.inputPanel.testType.getValue();

	var arr = ['换产试卷', '正常试卷', '发货试卷', '生管试卷', '返厂试卷', '实验试卷'];
	var testType = arr[obj.getRawValue()];

	var prodSpecName = this.inputPanel.prodSpecName.getValue();
	var prodSpecId = this.inputPanel.prodSpecId.getValue();
	var testAmount = this.inputPanel.testAmount.getValue();
	var testLength = this.inputPanel.testLength.getValue();

	// 元件试卷类型不匹配
	var materSpec = this.inputPanel.materSpecName.getValue();
	materSpec = materSpec.substring(0, 3);
	materSpec = materSpec.replace(/[\d-]/g, ''); // 将所有数字和破折号替换为''

	var prodSpec = prodSpecName.substring(0, 4);
	prodSpec = prodSpec.replace(/[\d-]/g, ''); // 将所有数字和破折号替换为''

	if (materSpec == 'SW' && prodSpec != 'SW') {
		Ext.Msg.alert("系统提示", "元件试卷类型不匹配");
		return;
	}

	if (materSpec == 'NF' && prodSpec != 'NF') {
		Ext.Msg.alert("系统提示", "元件试卷类型不匹配");
		return;
	}

	if (materSpec == 'BW' && prodSpec != 'BW') {
		Ext.Msg.alert("系统提示", "元件试卷类型不匹配");
		return;
	}

	//规则要新增到HW 2025-10-27
	if (materSpec == 'HW' && prodSpec != 'BW' && prodSpec != 'RO' && prodSpec != 'HW') {
		Ext.Msg.alert("系统提示", "元件试卷类型不匹配");
		return;
	}

	if (materSpec == 'ULP' && prodSpec != 'ULP' && prodSpec != 'XLP'
			&& prodSpec != 'RO') {
		Ext.Msg.alert("系统提示", "元件试卷类型不匹配");
		return;
	}

	if (!this.inputPanel.form.isValid()) {
		return;
	}
	if (Ext.isEmpty(batchNo) || Ext.isEmpty(prodSpecName)) {
		Ext.Msg.alert("系统提示", "请输入完整信息");
		return;
	}

	var sampleLength = this.inputPanel.sampleLength.getValue();

	var sampleLengthLow = this.inputPanel.sampleLengthLow.getValue();
	var sampleLengthUp = this.inputPanel.sampleLengthUp.getValue();

	if (parseFloat(testLength) != 0
			&& parseFloat(testLength) >= parseFloat(sampleLengthLow)
			&& parseFloat(testLength) <= parseFloat(sampleLengthUp)) {
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.component.testtrace.query4Scan.biz.ext',
			jsonData : {
				"condition/batchNo" : batchNo,
				"condition/testType" : testType,
				"condition/prodSpecName" : prodSpecName,
				"condition/prodSpecId" : prodSpecId,
				"condition/testAmount" : testAmount,
				"condition/testLength" : testLength
			},
			success : function(response, action) {
				var result = Ext.decode(response.responseText);
				if (result.code != 1) {
					Ext.Msg.alert("系统提示", result.msg, function() {
								_this.inputPanel.batchNo.setValue('');
							});
				} else {
					Ext.Msg.alert("系统提示", result.msg, function() {
								_this.listPanel.store.reload();
								_this.inputPanel.batchNo.setValue('');
								_this.inputPanel.testAmount.setValue('');
								_this.inputPanel.testLength.setValue('');
								_this.inputPanel.prodSpecName.setValue('');
								_this.inputPanel.prodSpecId.setValue('');
							});

				}
			}
		});

	} else {
		Ext.Msg.confirm("操作确认", "送样长度不能大于" + sampleLengthUp + "米,且不能小于"
						+ sampleLengthLow + "米！<br>您确实要提交吗?", function(A) {
					if (A == "yes") {
						Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.keensen.ump.produce.component.testtrace.query4Scan.biz.ext',
							jsonData : {
								"condition/batchNo" : batchNo,
								"condition/testType" : testType,
								"condition/prodSpecName" : prodSpecName,
								"condition/prodSpecId" : prodSpecId,
								"condition/testAmount" : testAmount,
								"condition/testLength" : testLength
							},
							success : function(response, action) {
								var result = Ext.decode(response.responseText);
								if (result.code != 1) {
									Ext.Msg.alert("系统提示", result.msg,
											function() {
												_this.inputPanel.batchNo
														.setValue('');
											});
								} else {
									Ext.Msg.alert("系统提示", result.msg,
											function() {
												_this.listPanel.store.reload();
												_this.inputPanel.batchNo
														.setValue('');
												_this.inputPanel.testAmount
														.setValue('');
												_this.inputPanel.testLength
														.setValue('');
												_this.inputPanel.prodSpecName
														.setValue('');
												_this.inputPanel.prodSpecId
														.setValue('');
											});

								}
							}
						});
					}
				})
	}

}

function confirm(v) {
	var A = Ext.getCmp('testtracemgr-list');
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.testtrace.confirm.biz.ext',
		jsonData : {
			"id" : v
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.ret != 1) {
				Ext.Msg.show({
					width : 350,
					title : "操作提示",
					msg : result.ret,
					icon : Ext.Msg.WARNING,
					buttons : Ext.Msg.OK,
					fn : function() {
						A.store.load({
									params : {
										"pageCond/begin" : 0,
										"pageCond/length" : A.pagingToolbar.pageSize
									}
								});
					}
				})
			} else {
				A.store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : A.pagingToolbar.pageSize
							}
						});
			}

		}
	});
}

com.keensen.ump.produce.component.testtraceMgr.prototype.onDelete = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		Ext.Msg.confirm("系统提示", "您确定要删除当前数据吗？", function(D) {
			if (D == "yes") {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.component.testtrace.delete.biz.ext',
					jsonData : {
						"entitys/id" : id
					},
					success : function(response, action) {
						var result = Ext.decode(response.responseText);
						if (result.success) {
							Ext.Msg.alert("系统提示", "删除成功！", function() {
								A.store.load({
									params : {
										"pageCond/begin" : 0,
										"pageCond/length" : A.pagingToolbar.pageSize
									}
								});

							})

						}

					}
				});
			}
		}, this)

	}
}

com.keensen.ump.produce.component.testtraceMgr.prototype.onProdSpecChange = function(
		prodSpecId, prodSpecName) {
	var batchNo = this.inputPanel.batchNo.getValue();
	if (Ext.isEmpty(batchNo) && batchNo.length < 11) {
		return;
	}

	var materCode = batchNo.substr(2, 2);
	// 型号改为3位，批次改为13位
	if (batchNo.length == 13) {
		materCode = batchNo.substr(2, 3);
	}

	var i = -1;
	if (batchNo.length == 13) {
		i = this.diaphragmTestStore.findBy(function(record, id) {
					return record.get('prodSpecId') == prodSpecId
							&& record.get('newBatchCode') == materCode;
				});
		// i = this.diaphragmTestStore.find('newBatchCode', materCode);
	} else {
		i = this.diaphragmTestStore.findBy(function(record, id) {
					return record.get('prodSpecId') == prodSpecId
							&& record.get('materCode') == materCode;
				});
		// i = this.diaphragmTestStore.find('materCode', materCode);
	}

	if (i == -1) {
		var info = '<p style="color:red;">型号' + prodSpecName + ',没有对应标准</p>';
		this.inputPanel.info.setValue(info);
		this.inputPanel.buttons[0].setDisabled(true);
		return false;
	}

	// var i = this.diaphragmTestStore.find('materCode', materCode);

	var rec2 = this.diaphragmTestStore.getAt(i);
	var prodSpecName = rec2.get('prodSpecName');
	var prodSpecId = rec2.get('prodSpecId');
	var sampleLength = rec2.get('sampleLength');

	var sampleLengthLow = rec2.get('sampleLengthLow');
	var sampleLengthUp = rec2.get('sampleLengthUp');
	var info = '<p style="color:red;">型号' + prodSpecName + ',送样长度下限'
			+ sampleLengthLow + ',长度上限' + sampleLengthUp + '</p>';

	this.inputPanel.prodSpecName.setValue(prodSpecName);
	this.inputPanel.prodSpecId.setValue(prodSpecId);
	this.inputPanel.sampleLength.setValue(sampleLength);

	this.inputPanel.sampleLengthLow.setValue(sampleLengthLow);
	this.inputPanel.sampleLengthUp.setValue(sampleLengthUp);

	this.inputPanel.info.setValue(info);

	var materSpecName = rec2.get('materSpecName');
	this.inputPanel.materSpecName.setValue(materSpecName);
	this.inputPanel.buttons[0].setDisabled(false);
	// this.inputPanel.prodSpecId.setValue(record.data.prodSpecId);

}