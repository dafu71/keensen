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
	var i = this.diaphragmTestStore.find('materCode', materCode);
	var rec2 = this.diaphragmTestStore.getAt(i);
	var prodSpecName = rec2.get('prodSpecName');
	var prodSpecId = rec2.get('prodSpecId');
	var sampleLength = rec2.get('sampleLength');
	this.inputPanel.prodSpecName.setValue(prodSpecName);
	this.inputPanel.prodSpecId.setValue(prodSpecId);
	this.inputPanel.sampleLength.setValue(sampleLength);
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
	}
	var length = prodSpecName.indexOf('-4') > -1 ? 10 : 40.25;
	var testAmount = Math.floor(testLength / length);
	this.inputPanel.testAmount.setValue(testAmount);
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
	if (!this.inputPanel.form.isValid()) {
		return;
	}
	if (Ext.isEmpty(batchNo) || Ext.isEmpty(prodSpecName)) {
		Ext.Msg.alert("系统提示", "请输入完整信息");
		return;
	}

	var sampleLength = this.inputPanel.sampleLength.getValue();
	if (parseFloat(sampleLength) != 0
			&& parseFloat(testLength) > parseFloat(sampleLength)) {
		Ext.Msg.alert("系统提示", "送样长度不能大于" + sampleLength + "米!");
		return;
	}
	

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