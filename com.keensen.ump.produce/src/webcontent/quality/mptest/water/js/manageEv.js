com.keensen.ump.produce.quality.mptest.waterMgr.prototype.initEvent = function() {
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

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var step = data.step;
				if (step != this.opt) {
					Ext.Msg.alert("系统提示", "请选择待分析数据！", function() {
						_this.editWindow.hide();
						var store = _this.listPanel.store;
						store.baseParams = _this.queryPanel.form.getValues();
						store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
							}
						});

					});

				}
				var watertype = this.editWindow.watertype.getValue();
				if (watertype == '水相循环液') {
					this.editWindow.position.setVisible(true);
					this.editWindow.position.setDisabled(false);
				} else {
					this.editWindow.position.setVisible(false);
					this.editWindow.position.setDisabled(true);
				}
			}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'afterload',
			function(win, data) {
				var step = data.step;
				var firstId = data.firstId;
				if (step != this.opt) {
					Ext.Msg.alert("系统提示", "请选择待调整数据！", function() {
						_this.editWindow2.hide();
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
					if (Ext.isEmpty(firstId)) {// 计划员排生产计划→工艺员根据生产的膜片型号出具水相液配料工单
						// this.editWindow2.ifok.setValue('N');
						// this.editWindow2.ifok.hide();
						this.editWindow2.displayfield1.hide();
						this.editWindow2.displayfield2.hide();
						this.editWindow2.displayfield3.hide();
						this.editWindow2.displayfield4.hide();
						this.editWindow2.displayfield5.hide();
						this.editWindow2.displayfield6.hide();
						this.editWindow2.displayfield7.hide();
						this.editWindow2.displayfield8.hide();
						// this.editWindow2.displayfield9.hide();
						// this.editWindow2.displayfield10.hide();
						this.editWindow2.displayfield11.hide();
						this.editWindow2.displayfield12.hide();
						// this.editWindow2.displayfield13.hide();
						this.editWindow2.displayfield14.hide();
						// this.editWindow2.displayfield15.hide();
						// this.editWindow2.displayfield16.hide();
						// this.editWindow2.displayfield17.hide();
						this.editWindow2.displayfield18.hide();
						this.editWindow2.displayfield19.hide();
						this.editWindow2.displayfield20.hide();
						this.editWindow2.displayfield21.hide();
						this.editWindow2.displayfield22.hide();
						this.editWindow2.displayfield23.hide();
						this.editWindow2.displayfield24.hide();
						// this.editWindow2.displayfield25.hide();
						// this.editWindow2.displayfield26.hide();
						this.editWindow2.displayfield27.hide();

					} else {
						// this.editWindow2.ifok.show();
						// this.editWindow2.ifok.reset();
						this.editWindow2.displayfield1.show();
						this.editWindow2.displayfield2.show();
						this.editWindow2.displayfield3.show();
						this.editWindow2.displayfield4.show();
						this.editWindow2.displayfield5.show();
						this.editWindow2.displayfield6.show();
						this.editWindow2.displayfield7.show();
						this.editWindow2.displayfield8.show();
						// this.editWindow2.displayfield9.show();
						// this.editWindow2.displayfield10.show();
						this.editWindow2.displayfield11.show();
						this.editWindow2.displayfield12.show();
						// this.editWindow2.displayfield13.show();
						this.editWindow2.displayfield14.show();
						// this.editWindow2.displayfield15.show();
						// this.editWindow2.displayfield16.show();
						// this.editWindow2.displayfield17.show();
						this.editWindow2.displayfield18.show();
						this.editWindow2.displayfield19.show();
						this.editWindow2.displayfield20.show();
						this.editWindow2.displayfield21.show();
						this.editWindow2.displayfield22.show();
						this.editWindow2.displayfield23.show();
						this.editWindow2.displayfield24.show();
						// this.editWindow2.displayfield25.show();
						// this.editWindow2.displayfield26.show();
						this.editWindow2.displayfield27.show();

					}
					var watertype = this.editWindow2.watertype.getValue();
					if (watertype == '水相循环液') {
						this.editWindow2.position.setVisible(true);
						// this.editWindow2.position.setDisabled(false);
					} else {
						this.editWindow2.position.setVisible(false);
						// this.editWindow2.position.setDisabled(true);
					}
				}
			}, this);

	this.editWindow3.activeItem.mon(this.editWindow3.activeItem, 'afterload',
			function(win, data) {
				var step = data.step;
				if (step != this.opt) {
					Ext.Msg.alert("系统提示", "请选择待配料数据！", function() {
						_this.editWindow3.hide();
						var store = _this.listPanel.store;
						store.baseParams = _this.queryPanel.form.getValues();
						store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
							}
						});

					});

				}
			}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'beforeSave',
			function() {
				var secondAdvise = this.editWindow2.secondAdvise.getValue();
				if (secondAdvise == '调整') {
					var c21Plan = this.editWindow2.c21Plan.getValue();
					var c22Plan = this.editWindow2.c22Plan.getValue();
					var c23Plan = this.editWindow2.c23Plan.getValue();
					var c27Plan = this.editWindow2.c27Plan.getValue();
					var c28Plan = this.editWindow2.c28Plan.getValue();
					var c30Plan = this.editWindow2.c30Plan.getValue();
					var roPlan = this.editWindow2.roPlan.getValue();
					if (Ext.isEmpty(c21Plan) || Ext.isEmpty(c22Plan)
							|| Ext.isEmpty(c23Plan) || Ext.isEmpty(c27Plan)
							|| Ext.isEmpty(c28Plan) || Ext.isEmpty(c30Plan)
							|| Ext.isEmpty(roPlan)) {
						Ext.Msg.alert("系统提示", "请完整输入计划添加量！");
						return false;
					}
				}

			}, this);

	this.inputWindow2.activeItem.mon(this.inputWindow2.activeItem,
			'beforeSave', function() {
				
				var relationBatchNo = this.inputWindow2.relationBatchNo
						.getValue();
				if (Ext.isEmpty(relationBatchNo)) {
					Ext.Msg.alert("系统提示", "没有水相液批号，不允许发起循环液！");
					return false;
				}

			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var step = cell.data.step;
				if (this.opt == 'first' && step != 'first') {
					Ext.Msg.alert("系统提示", "请选择待分析数据！");
					return false;
				} else if (this.opt == 'first' && step == 'first') {
					this.editWindow.show();
					this.editWindow.loadData(cell);
				}
				if (this.opt == 'second' && step != 'second') {
					Ext.Msg.alert("系统提示", "请选择待调整数据！");
					return false;
				} else if (this.opt == 'second' && step == 'second') {
					this.editWindow2.show();
					this.editWindow2.loadData(cell);
				}
				if (this.opt == 'third' && step != 'third') {
					Ext.Msg.alert("系统提示", "请选择待配料数据！");
					return false;
				} else if (this.opt == 'third' && step == 'third') {
					this.editWindow3.show();
					this.editWindow3.loadData(cell);
				}
			}, this);

}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onView = function() {

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

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onAdd2 = function() {

	this.inputWindow2.show();
	/*
	 * var B = this.listPanel.getSelectionModel().getSelections(); if (B &&
	 * B.length != 0) { if (B.length > 1) { Ext.Msg.alert("系统提示",
	 * "仅允许选择一条数据行!"); return } else { var A = B[0]; if (A.data.state == '1' &&
	 * (A.data.watertype == '水相液' || A.data.watertype == '水相补充液')) { var id =
	 * A.data.id; var batchNo = A.data.batchNo;
	 * this.inputWindow2.relationBatchNo.setValue(batchNo);
	 * this.inputWindow2.relationId.setValue(id); this.inputWindow2.show(); }
	 * else { Ext.Msg.alert("系统提示", "请选择已完结的水相液或水相补充液!") }
	 *  } } else { Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!") }
	 */

}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.editWindow2.destroy();
	this.editWindow3.destroy();
	this.inputWindow.destroy();
	this.inputWindow2.destroy();
	this.viewWindow.destroy();
}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onEdit = function() {
	this.opt = 'first';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onEdit2 = function() {
	this.opt = 'second';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onEdit3 = function() {
	this.opt = 'third';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.quality.mptest5.queryWaterListRecords',
			templateFilename : 'ks_mp_mptest_water'
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

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onCalc = function() {
	var _this = this;
	var mptype = this.inputWindow.mptype.getValue();
	if (Ext.isEmpty(mptype)) {
		Ext.Msg.alert("系统提示", "请选择膜片类型!");
		return;
	}
	var weightPlan = this.inputWindow.weightPlan.getValue();
	if (Ext.isEmpty(weightPlan)) {
		Ext.Msg.alert("系统提示", "请输入配料总重量!");
		return;
	}
	var line = this.inputWindow.line.getValue();
	if (Ext.isEmpty(line)) {
		Ext.Msg.alert("系统提示", "请选择线别!");
		return;
	}

	var watertype = this.inputWindow.watertype.getValue();
	if (Ext.isEmpty(watertype)) {
		Ext.Msg.alert("系统提示", "请选择水相类型!");
		return;
	}

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.quality.mpwatertest.queryWeight.biz.ext",
		method : "post",
		jsonData : {
			'condition/weight' : weightPlan,
			'condition/mptype' : mptype,
			'condition/line' : line,
			'condition/watertype' : watertype
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var datas = ret.data;

				if (!Ext.isEmpty(datas)) {
					var data = datas[0];
					_this.inputWindow.c21Plan.setValue(data.c21);
					_this.inputWindow.c22Plan.setValue(data.c22);
					_this.inputWindow.c23Plan.setValue(data.c23);
					_this.inputWindow.c27Plan.setValue(data.c27);
					_this.inputWindow.c28Plan.setValue(data.c28);
					_this.inputWindow.c30Plan.setValue(data.c30);
					_this.inputWindow.roPlan.setValue(data.ro);
					_this.inputWindow.c21Plan.setReadOnly(true);
					_this.inputWindow.c22Plan.setReadOnly(true);
					_this.inputWindow.c23Plan.setReadOnly(true);
					_this.inputWindow.c27Plan.setReadOnly(true);
					_this.inputWindow.c28Plan.setReadOnly(true);
					_this.inputWindow.c30Plan.setReadOnly(true);
					_this.inputWindow.roPlan.setReadOnly(true);
				} else {
					Ext.Msg.alert("系统提示", "系统没有计算标准，请手动输入!");
					_this.inputWindow.c21Plan.setValue('');
					_this.inputWindow.c22Plan.setValue('');
					_this.inputWindow.c23Plan.setValue('');
					_this.inputWindow.c27Plan.setValue('');
					_this.inputWindow.c28Plan.setValue('');
					_this.inputWindow.c30Plan.setValue('');
					_this.inputWindow.roPlan.setValue('');
					_this.inputWindow.c21Plan.setReadOnly(false);
					_this.inputWindow.c22Plan.setReadOnly(false);
					_this.inputWindow.c23Plan.setReadOnly(false);
					_this.inputWindow.c27Plan.setReadOnly(false);
					_this.inputWindow.c28Plan.setReadOnly(false);
					_this.inputWindow.c30Plan.setReadOnly(false);
					_this.inputWindow.roPlan.setReadOnly(false);
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

// 配料计算
com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onCalc4pl = function() {
	var c21Reality = this.editWindow3.c21Reality.getValue();
	var c22Reality = this.editWindow3.c22Reality.getValue();
	var c23Reality = this.editWindow3.c23Reality.getValue();
	var c27Reality = this.editWindow3.c27Reality.getValue();
	var c28Reality = this.editWindow3.c28Reality.getValue();
	var c30Reality = this.editWindow3.c30Reality.getValue();
	var roReality = this.editWindow3.roReality.getValue();
	if (Ext.isEmpty(c21Reality) || Ext.isEmpty(c22Reality)
			|| Ext.isEmpty(c23Reality) || Ext.isEmpty(c27Reality)
			|| Ext.isEmpty(c28Reality) || Ext.isEmpty(c30Reality)
			|| Ext.isEmpty(roReality)) {
		return;
	} else {
		var weightReality = parseFloat(c21Reality) + parseFloat(c22Reality)
				+ parseFloat(c23Reality) + parseFloat(c27Reality)
				+ parseFloat(c28Reality) + parseFloat(c30Reality);
		weightReality = returnFloat(parseFloat(roReality) + weightReality
				/ 1000);
		this.editWindow3.weightReality.setValue(weightReality);

	}

}

// 调整计算
com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onCalc4tz = function() {
	var c21Plan = this.editWindow2.c21Plan.getValue();
	var c22Plan = this.editWindow2.c22Plan.getValue();
	var c23Plan = this.editWindow2.c23Plan.getValue();
	var c27Plan = this.editWindow2.c27Plan.getValue();
	var c28Plan = this.editWindow2.c28Plan.getValue();
	var c30Plan = this.editWindow2.c30Plan.getValue();
	var roPlan = this.editWindow2.roPlan.getValue();
	if (Ext.isEmpty(c21Plan) || Ext.isEmpty(c22Plan) || Ext.isEmpty(c23Plan)
			|| Ext.isEmpty(c27Plan) || Ext.isEmpty(c28Plan)
			|| Ext.isEmpty(c30Plan) || Ext.isEmpty(roPlan)) {
		return;
	} else {
		var weightPlan = parseFloat(c21Plan) + parseFloat(c22Plan)
				+ parseFloat(c23Plan) + parseFloat(c27Plan)
				+ parseFloat(c28Plan) + parseFloat(c30Plan);
		weightPlan = returnFloat(parseFloat(roPlan) + weightPlan / 1000);
		this.editWindow2.weightPlan.setValue(weightPlan);

	}

}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onPrint = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			if (A.data.state == '1'
					&& (A.data.watertype == '水相液' || A.data.watertype == '水相补充液')) {
				var id = A.data.id;
				window
						.open('com.keensen.ump.produce.quality.printWaterTestTag.flow?condition/relationId='
								+ id);
			} else {
				Ext.Msg.alert("系统提示", "请选择已完结的水相液或水相补充液!")
			}

		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}

}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onQueryTumo = function() {
	var _this = this;
	var batchNo = this.inputWindow2.batchNo.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入膜片批号!");
		return;
	}

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.produce.quality.mpwatertest.queryTumo.biz.ext",
				method : "post",
				jsonData : {
					'condition/batchNo' : batchNo
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var datas = ret.data;

						if (!Ext.isEmpty(datas)) {
							var data = datas[0];
							_this.inputWindow2.relationBatchNo
									.setValue(data.waterBatchNo);
							_this.inputWindow2.line.setValue(data.lineCode);
							_this.inputWindow2.mptype
									.setValue(data.materSpecName);
						}
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onBoard = function() {
	window.open('com.keensen.ump.produce.quality.queryBoard.flow?flag=1');
}

com.keensen.ump.produce.quality.mptest.waterMgr.prototype.onBoard2 = function() {
	window.open('com.keensen.ump.produce.quality.queryBoard.flow?flag=2');
}

function returnFloat(value) {
	var value = Math.round(parseFloat(value) * 100) / 100;
	return value;
}