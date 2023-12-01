com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr.prototype.initEvent = function() {

	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;

		var batchNoStr = this.queryPanel.form
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

		this.queryPanel.getForm().findField('condition/batchNoStr')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
		this.queryPanel.getForm().findField('condition/isCutOver')
				.setValue('N');
		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.listPanel.store.on('load', function() {
		var _me = _this;
		var vals = _this.queryPanel.getForm().getValues();

		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.diaphragm.ship.choose.queryTumoSum.biz.ext",
			method : "post",
			jsonData : {
				'map' : vals
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var data = ret.data[0];
						Ext.getCmp('shipchooseoutlength').setValue('合计长度(m):'
								+ data.outLength);
						Ext.getCmp('shipchooseusefullength')
								.setValue('合计可用长度(m):' + data.usefulLength);
						Ext.getCmp('shipchoosequalifidLength')
								.setValue('合计合格长度(m):' + data.qualifidLength);
						Ext.getCmp('shipchooseloss').setValue('合计不良长度(m):'
								+ data.loss);
						Ext
								.getCmp('shipchooseaqualifidlength')
								.setValue('<span style="color:red;font-weight: bold;">合计A等长度(m):'
										+ data.aqualifidLength + '</span>');
						Ext
								.getCmp('shipchoosebqualifidlength')
								.setValue('<span style="color:blue;font-weight: bold;">合计B等长度(m):'
										+ data.bqualifidLength + '</span>');
						Ext
								.getCmp('shipchoosecqualifidlength')
								.setValue('<span style="color:#000000;font-weight: bold;">合计C等长度(m):'
										+ data.cqualifidLength + '</span>');
					} else {
						Ext.getCmp('shipchooseoutlength').setValue('合计长度(m):');
						Ext.getCmp('shipchooseusefullength')
								.setValue('合计可用长度(m):');
						Ext.getCmp('shipchoosequalifidLength')
								.setValue('合计合格长度(m):');
						Ext.getCmp('shipchooseloss').setValue('合计不良长度(m):');
						Ext.getCmp('shipchooseaqualifidlength')
								.setValue('合计A等长度(m):');
						Ext.getCmp('shipchoosebqualifidlength')
								.setValue('合计B等长度(m):');
						Ext.getCmp('shipchoosecqualifidlength')
								.setValue('合计C等长度(m):');
					}
				}
			},
			callback : function() {
				_me.requestMask.hide()
			}
		})

	});

}

function dealchoose2(shipflag, batchNo, index) {
	var A = Ext.getCmp('ship-choose-list');
	var title = shipflag == 'n' ? '是否生成发货单?' : '是否取消发货单?';
	Ext.Msg.confirm("系统提示", title, function(btnText) {
		if (btnText == "yes") {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.diaphragm.ship.choose.createShip.biz.ext',
				jsonData : {
					"flag" : shipflag,
					"recordId" : index,
					"batchNo" : batchNo
				},
				success : function(response, action) {
					A.store.reload({});
				}
			});
		}
	})

}

function isNonNegativeFloat(str) {
	const regex = /^\d+(\.\d+)?$/;
	return regex.test(str);
}

com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr.prototype.onCreate2 = function() {
	var A = this.listPanel;

	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		for (var i = 0; i < records.length; i++) {

			var delivery = records[i].get('delivery');
			if (delivery <= 0) {
				Ext.Msg.alert("系统提示", "所选数据中有发货已完成的数据，请重新选择！");
				return;
			}
		}
		var orderNo = records[0].get('orderNo');
		var planNo = records[0].get('planNo');
		this.inputPanel.form.findField("entity/orderNo").setValue(orderNo);
		this.inputPanel.form.findField("entity/planNo").setValue(planNo);
		this.inputWindow.show();
	}
}

com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr.prototype.onSaveCreate = function() {
	var A = this.listPanel;
	var _this = this;
	var orderNo = this.inputPanel.form.findField("entity/orderNo").getValue();
	var planNo = this.inputPanel.form.findField("entity/planNo").getValue();

	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		for (var i = 0; i < records.length; i++) {

			var delivery = records[i].get('delivery');
			if (delivery <= 0) {
				Ext.Msg.alert("系统提示", "所选数据中有发货已完成的数据，请重新选择！");
				return;
			}
		}

		var list = [];
		Ext.each(records, function(r) {
					r.set('sendAmount', r.get('delivery'));
					r.set('shipflag', 'n');
					list.push(r.data);
				});
		Ext.Msg.confirm("系统提示", '是否生成发货单?', function(btnText) {
			if (btnText == "yes") {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.diaphragm.ship.choose.createShips2.biz.ext',
					jsonData : {
						list : list,
						orderNo : orderNo,
						planNo : planNo
					},
					success : function(response, action) {
						A.store.reload({});
						_this.inputWindow.hide();
					}
				});
			}
		})
		// }
	}
}

// 批量生成
com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr.prototype.onCreate = function() {
	var A = this.listPanel;

	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		for (var i = 0; i < records.length; i++) {
			// var shipflag = records[i].get('shipflag');
			// if (shipflag == 'y') {
			// Ext.Msg.alert("系统提示", "所选数据中有已生成发货单数据，请重新选择！");
			// return;
			// }
			var delivery = records[i].get('delivery');
			if (delivery <= 0) {
				Ext.Msg.alert("系统提示", "所选数据中有发货已完成的数据，请重新选择！");
				return;
			}
		}

		// 选择了一条
		/*
		 * if (records.length == 1) { var delivery = records[0].get('delivery');
		 * Ext.MessageBox.prompt("发货数量确认", "请输入发货数量：", function(bu, txt) { var
		 * sendAmout = txt; if (!isNonNegativeFloat(sendAmout)) {
		 * Ext.Msg.alert("系统提示", "请输入数字！"); return; } if (sendAmout > delivery) {
		 * Ext.Msg.alert("系统提示", "发货数量不能大于" + delivery); return; } if (bu ==
		 * 'ok') { records[0].set('sendAmount', sendAmout);
		 * records[0].set('shipflag', 'n'); var list = []; Ext.each(records,
		 * function(r) { list.push(r.data); }); Ext.Ajax.request({ method :
		 * "post", scope : this, url :
		 * 'com.keensen.ump.produce.diaphragm.ship.choose.createShips.biz.ext',
		 * jsonData : { list : list }, success : function(response, action) {
		 * A.store.reload({}); } }); } }, window, false, delivery); } else {
		 */

		var list = [];
		Ext.each(records, function(r) {
					r.set('sendAmount', r.get('delivery'));
					r.set('shipflag', 'n');
					list.push(r.data);
				});
		Ext.Msg.confirm("系统提示", '是否生成发货单?', function(btnText) {
			if (btnText == "yes") {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.diaphragm.ship.choose.createShips.biz.ext',
					jsonData : {
						list : list
					},
					success : function(response, action) {
						A.store.reload({});
					}
				});
			}
		})
		// }
	}

}

// 批量取消
com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr.prototype.onCancel = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		for (var i = 0; i < records.length; i++) {
			var shipflag = records[i].get('shipflag');
			if (shipflag == 'n') {
				Ext.Msg.alert("系统提示", "所选数据中有尚未生成发货单数据，请重新选择！");
				return;
			}
		}

		var list = [];
		Ext.each(records, function(r) {
					list.push(r.data);
				});
		Ext.Msg.confirm("系统提示", '是否批量取消发货单?', function(btnText) {
			if (btnText == "yes") {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.diaphragm.ship.choose.createShips.biz.ext',
					jsonData : {
						list : list
					},
					success : function(response, action) {
						A.store.reload({});
					}
				});
			}
		})
	}

}

com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.ship.queryTumo',
			templateFilename : 'ks_mp_fhd'
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