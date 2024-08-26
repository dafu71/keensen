com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.initEvent = function() {
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

	this.editPanel.mon(this.editPanel, 'afterload', function() {
		var step = this.editPanel.step.getValue();
		var relationId = this.editPanel.pkid.getValue();
		if (step != this.opt) {
			Ext.Msg.alert("系统提示", "请选择待分析数据！", function() {
				var store = _this.listPanel.store;
				store.baseParams = _this.queryPanel.form.getValues();
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
					}
				});
			});

		} else {
			var store = _this.listPanel3.store;
			store.baseParams = {
				'condition/relationId' : relationId,
				'condition/flag' : 'first'
			};
			store.load({});
			_this.editWindow.show();
		}
	}, this);

	this.editPanel2.mon(this.editPanel2, 'afterload', function() {
		var step = this.editPanel2.step.getValue();
		var relationId = this.editPanel2.pkid.getValue();
		if (step != this.opt) {
			Ext.Msg.alert("系统提示", "请选择待调整数据！", function() {
				var store = _this.listPanel.store;
				store.baseParams = _this.queryPanel.form.getValues();
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
					}
				});

			});

		} else {
			var store = _this.listPanel4.store;
			store.baseParams = {
				'condition/relationId' : relationId,
				'condition/flag' : 'second'
			};
			store.load({});
			_this.editWindow2.show();
		}
	}, this);

	this.editPanel3.mon(this.editPanel3, 'afterload', function(win, data) {
		var step = this.editPanel3.step.getValue();
		var relationId = this.editPanel3.pkid.getValue();
		if (step != this.opt) {
			Ext.Msg.alert("系统提示", "请选择待配料数据！", function() {
				var store = _this.listPanel.store;
				store.baseParams = _this.queryPanel.form.getValues();
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
					}
				});

			});

		} else {
			var store = _this.listPanel5.store;
			store.baseParams = {
				'condition/relationId' : relationId,
				'condition/flag' : 'third'
			};
			store.load({});
			_this.editWindow3.show();
		}
	}, this);

	this.editPanel2.mon(this.editPanel2, 'beforeSave', function() {
		
				var labelArr = ['计划排放量', 'IPA计划添加量', 'RO水计划添加量'];
				var objArr = ['outPlan', 'ipaPlan', 'roPlan'];
				var ifok = this.editPanel2.ifok.getValue();
				if (ifok == 'N') {
					for (var j = 0; j < objArr.length; j++) {
						var obj = objArr[j];
						for (var i = 0; i < 3; i++) {
							var k = 'list[' + (i + 1) + ']/' + obj;
							var o = this.editPanel2.form.findField(k);
							if (Ext.isEmpty(o.getValue())) {
								Ext.Msg.alert("系统提示",
										"请输入" + labelArr[j] + "！", function() {
											o.focus();
										});
								return false;
							}
						}
					}
				}

			}, this);

	this.editPanel3.mon(this.editPanel3, 'beforeSave', function() {

			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var step = cell.data.step;
				if (this.opt == 'first' && step != 'first') {
					Ext.Msg.alert("系统提示", "请选择待分析数据！");
					return false;
				} else if (this.opt == 'first' && step == 'first') {
					var objArr = ['position', 'concentration'];
					for (var j = 0; j < objArr.length; j++) {
						var obj = objArr[j];
						for (var i = 0; i < 3; i++) {
							var k = 'list[' + (i + 1) + ']/' + obj;
							var o = this.editPanel.form.findField(k)
									.setValue('');
						}
					}
					this.editPanel.loadData(cell);
				}
				if (this.opt == 'second' && step != 'second') {
					Ext.Msg.alert("系统提示", "请选择待调整数据！");
					return false;
				} else if (this.opt == 'second' && step == 'second') {
					// this.editPanel2.form.reset();
					var objArr = ['outPlan', 'ipaPlan', 'roPlan'];
					for (var j = 0; j < objArr.length; j++) {
						var obj = objArr[j];
						for (var i = 0; i < 3; i++) {
							var k = 'list[' + (i + 1) + ']/' + obj;
							var o = this.editPanel2.form.findField(k)
									.setValue('');
						}
					}
					this.editPanel2.ifok.setValue('');
					this.editPanel2.loadData(cell);
				}
				if (this.opt == 'third' && step != 'third') {
					Ext.Msg.alert("系统提示", "请选择待配料数据！");
					return false;
				} else if (this.opt == 'third' && step == 'third') {
					var objArr = ['outReality', 'ipaReality', 'roReality'];
					for (var j = 0; j < objArr.length; j++) {
						var obj = objArr[j];
						for (var i = 0; i < 3; i++) {
							var k = 'list[' + (i + 1) + ']/' + obj;
							var o = this.editPanel3.form.findField(k)
									.setValue('');
						}
					}
					this.editPanel3.show();
					this.editPanel3.loadData(cell);
				}
			}, this);
}

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.onView = function() {

	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewWindow.show();
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

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.editWindow2.destroy();
	this.editWindow3.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();
}

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.onEdit = function() {
	this.opt = 'first';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.onEdit2 = function() {
	this.opt = 'second';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.onEdit3 = function() {
	this.opt = 'third';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.onSave = function() {
	this.editPanel.saveData();
}

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.onSave2 = function() {
	this.editPanel2.saveData();
}

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.onSave3 = function() {
	this.editPanel3.saveData();
}

com.keensen.ump.produce.quality.mptest.ipaMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.quality.mptest2.queryIpaListRecords',
			templateFilename : 'ks_mp_mptest_ipa'
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