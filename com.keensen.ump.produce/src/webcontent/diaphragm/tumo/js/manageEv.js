com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.initEvent = function() {

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

}

function isNonNegativeFloat(str) {
	const regex = /^\d+(\.\d+)?$/;
	return regex.test(str);
}

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.onConcession = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var arr = [];
		var recordIdArr =[];
		var C = A.getSelectionModel().getSelections();

		var num = 0;
		var orderNo = C[0].data.orderNo;
		var specId = C[0].data.specId;
		if (Ext.isEmpty(orderNo)) {
			Ext.Msg.alert("系统提示", "请选择有订单号的数据！");
			return false;
		}
		var ok = true;
		Ext.each(C, function(r) {
					var odn = r.data.orderNo;
					var usefulLength = r.data.usefulLength;
					if (odn != orderNo) {
						ok = false;
					}
					var bn = r.data.batchNo;
					arr.push("'" + bn + "'");
					var recordId = r.data.recordId;
					recordIdArr.push(recordId);
					num += usefulLength;
				})

		if (ok) {
			var store = this.listPanel2.store;
			store.load({
						params : {
							'condition/recordIds' : recordIdArr.join(',')
						}
					});
			//this.inputPanel.form.findField('entity/orderNo').setValue(orderNo);
			this.inputPanel.form.findField('entity/prodSpecId').setValue(specId);
			this.inputPanel.form.findField('entity/num').setValue(num);
			this.inputPanel.form.findField('entity/reserve1').setValue(recordIdArr.join(','));
			this.inputPanel.form.findField('entity/reserve5').setValue(arr.join(','));
			this.inputWindow.show();
		} else {
			//Ext.Msg.alert("系统提示", "请选择相同订单号数据！");
			//return false;
		}
	}

}

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.onSaveConcession = function() {
	var _thispanel = this.inputPanel;
	var _thislist = this.listPanel2;
	var _this = this;

	if (_thispanel.form.isValid()) {
		var mk = new Ext.LoadMask(_thispanel.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();

		var itemArr = [];
		var myCheckboxGroup = this.inputPanel.form.findField('myCheckboxGroup');
		for (var i = 0; i < myCheckboxGroup.items.length; i++) {
			if (myCheckboxGroup.items.itemAt(i).checked) {
				itemArr.push(i);
			}
		}
		this.inputPanel.form.findField('entity/myitems').setValue(itemArr.join(','));
		var forms = _thispanel.getForm().getValues();

		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.quality.concession.createWorkFlow.biz.ext',
			jsonData : forms,
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "提交成功", function() {
								_this.inputPanel.form.reset();
								_this.inputWindow.hide();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}

}

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.exportExcel2 = function() {
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
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.ship.queryTumoOrigin',
			templateFilename : 'ks_mp_fhqjd'
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

com.keensen.ump.produce.diaphragm.tumo.tumoMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.ship.queryTumoOrigin',
			templateFilename : 'ks_mp_zjqjd'
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