com.keensen.ump.produce.quality.mptest.oilMgr.prototype.initEvent = function() {
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

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {

				var reserve1 = this.inputWindow.reserve1.getValue();

				if (reserve1 == '回流油相液') {
					var reflux = this.inputWindow.reflux.getValue();
					if (Ext.isEmpty(reflux)) {
						Ext.Msg.alert("系统提示", "请添加回流液重量");
						return false;
					}
					// this.inputWindow.weight.setValue(parseFloat(weight) +
					// parseFloat(reflux));
					this.inputWindow.weight.setValue(reflux);
				} else {
					var c41Reality = this.inputWindow.c41Reality.getValue();
					if (Ext.isEmpty(c41Reality)) {
						Ext.Msg.alert("系统提示", "请添加C41重量");
						return false;
					}
					var c42Reality = this.inputWindow.c42Reality.getValue();
					if (Ext.isEmpty(c42Reality))
						this.inputWindow.weight.setValue(c41Reality);
					else
						this.inputWindow.weight.setValue(parseFloat(c41Reality)
								+ parseFloat(c42Reality) / 1000)
					// this.inputWindow.weight.setValue(parseFloat(weight) +
					// parseFloat(c41Reality)/1000);
				}

				/*
				 * var c41Reality = this.inputWindow.c41Reality.getValue(); var
				 * reflux = this.inputWindow.reflux.getValue(); if
				 * (!Ext.isEmpty(c41Reality) && !Ext.isEmpty(reflux)) { if
				 * (parseFloat(c41Reality) != 0 && parseFloat(reflux) != 0) {
				 * Ext.Msg.alert("系统提示", "不能同时添加C41和回流液重量"); return false; } }
				 * if (Ext.isEmpty(c41Reality) && Ext.isEmpty(reflux)) {
				 * Ext.Msg.alert("系统提示", "请添加C41或者回流液重量"); return false; } if
				 * (parseFloat(c41Reality) == 0 && parseFloat(reflux) == 0) {
				 * Ext.Msg.alert("系统提示", "请添加C41或者回流液重量"); return false; }
				 */
		}, this);

	this.inputWindow2.activeItem.mon(this.inputWindow2.activeItem,
			'beforeSave', function() {

				var reserve1 = this.inputWindow2.reserve1.getValue();

				if (reserve1 == '回流油相液') {
					var reflux = this.inputWindow2.reflux.getValue();
					if (Ext.isEmpty(reflux)) {
						Ext.Msg.alert("系统提示", "请添加回流液重量");
						return false;
					}
					// this.inputWindow.weight.setValue(parseFloat(weight) +
					// parseFloat(reflux));
					this.inputWindow2.weight.setValue(reflux);
				} else {
					var c41Reality = this.inputWindow2.c41Reality.getValue();
					if (Ext.isEmpty(c41Reality)) {
						Ext.Msg.alert("系统提示", "请添加C41重量");
						return false;
					}
					var c42Reality = this.inputWindow2.c42Reality.getValue();
					if (Ext.isEmpty(c42Reality))
						this.inputWindow2.weight.setValue(c41Reality);
					else
						this.inputWindow2.weight
								.setValue(parseFloat(c41Reality)
										+ parseFloat(c42Reality) / 1000)
					// this.inputWindow.weight.setValue(parseFloat(weight) +
					// parseFloat(c41Reality)/1000);
				}

				/*
				 * var c41Reality = this.inputWindow.c41Reality.getValue(); var
				 * reflux = this.inputWindow.reflux.getValue(); if
				 * (!Ext.isEmpty(c41Reality) && !Ext.isEmpty(reflux)) { if
				 * (parseFloat(c41Reality) != 0 && parseFloat(reflux) != 0) {
				 * Ext.Msg.alert("系统提示", "不能同时添加C41和回流液重量"); return false; } }
				 * if (Ext.isEmpty(c41Reality) && Ext.isEmpty(reflux)) {
				 * Ext.Msg.alert("系统提示", "请添加C41或者回流液重量"); return false; } if
				 * (parseFloat(c41Reality) == 0 && parseFloat(reflux) == 0) {
				 * Ext.Msg.alert("系统提示", "请添加C41或者回流液重量"); return false; }
				 */
		}, this);

	this.editWindow3.activeItem.mon(this.editWindow3.activeItem, 'beforeSave',
			function() {

				var c41Reality = this.editWindow3.c41Reality.getValue();
				var reflux = this.editWindow3.reflux.getValue();
				var weight = this.editWindow3.weight.getValue();
				if (parseFloat(c41Reality) != 0 && parseFloat(reflux) != 0) {
					//Ext.Msg.alert("系统提示", "不能同时添加C41和回流液重量");
					//return false;
				}

				if (parseFloat(c41Reality) == 0 && parseFloat(reflux) == 0) {
					// Ext.Msg.alert("系统提示", "请添加C41或者回流液重量");
					// return false;
				}

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

				} else {
					/*
					 * var mptype = this.editWindow.mptype.getValue(); var std =
					 * this.mptypeMap.get(mptype)[0]; var std2 =
					 * this.mptypeMap.get(mptype)[1]; var std3 =
					 * this.mptypeMap.get(mptype)[2]; var str = '上限' + std3 +
					 * ',' + '下限' + std; this.editWindow.standard.setValue(str);
					 */
					var reserve1 = this.editWindow.reserve1.getValue();

					if (reserve1 == '回流油相液') {
						this.editWindow.batchNo.setVisible(false);
						this.editWindow.refluxNo.setVisible(true);
						this.editWindow.reflux.setVisible(true);
						
					} else {
						this.editWindow.batchNo.setVisible(true);
						this.editWindow.refluxNo.setVisible(false);
						this.editWindow.reflux.setVisible(false);
					}

				}
			}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'afterload',
			function(win, data) {
				var step = data.step;
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

				} else {
					var reserve1 = this.editWindow3.reserve1.getValue();

					if (reserve1 == '回流油相液') {
						this.editWindow3.batchNo.setVisible(false);
						this.editWindow3.refluxNo.setVisible(true);
						this.editWindow3.reflux.setVisible(true);
						this.onCalc4pl();
					} else {
						this.editWindow3.batchNo.setVisible(true);
						this.editWindow3.refluxNo.setVisible(false);
						this.editWindow3.reflux.setVisible(false);
					}
				}
			}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'beforeSave',
			function() {
				var ifok = this.editWindow2.ifok.getValue();
				var c41Plan = this.editWindow2.c41Plan.getValue();
				var c42Plan = this.editWindow2.c42Plan.getValue();
				if (ifok == 'N'
						&& (Ext.isEmpty(c41Plan) || Ext.isEmpty(c42Plan))) {
					Ext.Msg.alert("系统提示", "请完整输入计划添加量！");
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

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onView = function() {

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

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onAdd = function() {
	this.inputWindow.show();
	this.inputWindow.refluxNo.setVisible(false);
	this.inputWindow.batchNo.setVisible(true);
	this.inputWindow.reflux.setVisible(false);
	this.inputWindow.c41Reality.setVisible(true);
	this.inputWindow.c42Reality.setVisible(true);
	this.inputWindow.reserve1.setValue('新配油相液');

	this.inputWindow.weightPlan.setVisible(true);
	this.inputWindow.concentration.setVisible(true);
	this.inputWindow.c41Plan.setVisible(true);
	this.inputWindow.c42Plan.setVisible(true);
	this.inputWindow.displayfield100.setVisible(true);
	this.inputWindow.displayfield200.setVisible(true);
	this.inputWindow.displayfield300.setVisible(true);

}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onAdd2 = function() {
	this.inputWindow2.show();

	this.inputWindow2.reserve1.setValue('回流油相液');
}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.editWindow2.destroy();
	this.editWindow3.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();
	this.inputWindow2.destroy();
}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onEdit = function() {
	this.opt = 'first';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onEdit2 = function() {
	this.opt = 'second';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onEdit3 = function() {
	this.opt = 'third';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.exportExcel = function() {
	
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '油相液浓度',
			'com.keensen.ump.produce.quality.mptest.queryOilRecords','7,8');
	/*var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '10000',
			namingsql : 'com.keensen.ump.produce.quality.mptest.queryOilListRecords',
			templateFilename : 'ks_mp_mptest_oil'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isEmpty(fname)) {
					Ext.Msg.alert("系统提示", ret.msg);
					return
				} else {
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				}
			}

		},
		failure : function(resp, options) {
			var ret = Ext.decode(resp.responseText);
			// Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
		},
		callback : function() {
			_this.requestMask.hide()
		}
	})*/
}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onCalc = function() {
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

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.produce.quality.mpoiltest.queryWeight.biz.ext",
				method : "post",
				jsonData : {
					'condition/weight' : weightPlan,
					'condition/mptype' : mptype,
					'condition/line' : line
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var datas = ret.data;

						if (!Ext.isEmpty(datas)) {
							var data = datas[0];
							_this.inputWindow.concentration
									.setValue(data.c42std);
							_this.inputWindow.c41Plan.setValue(data.c41);
							_this.inputWindow.c42Plan.setValue(data.c42);
						} else {
							Ext.Msg.alert("系统提示", "系统没有计算标准，请手动输入!");

						}
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onCalc4fx = function() {

	var rec = this.c42Store.getAt(0);
	var a = rec.data.a;
	var b = rec.data.b;
	
	var concentration2 = this.editWindow.concentration2.getValue();
	
	var light = this.editWindow.light.getValue();
	var light2 = this.editWindow.light2.getValue();
	
	if (Ext.isEmpty(light)) {
		Ext.Msg.alert("系统提示", "请输入标样吸光度!");
		return;
	}
	
	if (Ext.isEmpty(light2)) {
		Ext.Msg.alert("系统提示", "请输入样品吸光度!");
		return;
	}
	
	var test = (parseFloat(light)-parseFloat(a))/parseFloat(b);
	var factor = parseFloat(concentration2)/test;
	factor = Math.round(factor * 1000) / 1000;
	this.editWindow.factor.setValue(factor);
	
	var test2 = (parseFloat(light2)-parseFloat(a))/parseFloat(b);
	test2 = test2 * factor;
	test2 = Math.round(test2 * 100) / 100;
	this.editWindow.concentration.setValue(test2);
	
	var oiltype = this.editWindow.reserve1.getValue();
	var weight = this.editWindow.weight2.getValue();
	weight = parseFloat(weight);
	var concentration = this.editWindow.concentration.getValue();
	if (Ext.isEmpty(concentration)) {
		Ext.Msg.alert("系统提示", "请输入C42浓度!");
		return;
	}
	
	// 测试的
	concentration = parseFloat(concentration) / 100;
	// 理论的
	concentration2 = parseFloat(concentration2) / 100;

	if (oiltype == '新配油相液') {
		// =(99.7/(1-0.0025)- 99.7/(1-0.0024))*1000
		// 测试的小于理论的
		if (concentration < concentration2) {
			var c41Reality = this.editWindow.c41Reality.getValue();
			c41Reality = parseFloat(c41Reality);
			var c41Plan = 0;
			var c42Plan = (c41Reality / (1 - concentration2) - c41Reality
					/ (1 - concentration))
					* 1000;
			c42Plan = Math.round(c42Plan * 100) / 100;
			this.editWindow.c41Plan.setValue(0);
			this.editWindow.c42Plan.setValue(c42Plan);
			weight = weight + c42Plan / 1000;
			weight = Math.round(weight * 100) / 100;
			this.editWindow.weight.setValue(weight);
			return;
		}
		// =(300/0.0025-300/0.0026)/1000
		// 测试的大于理论的
		if (concentration > concentration2) {
			var c42Reality = this.editWindow.c42Reality.getValue();
			c42Reality = parseFloat(c42Reality);
			var c42Plan = 0;
			var c41Plan = (c42Reality / concentration2 - c42Reality
					/ concentration)
					/ 1000;
			c41Plan = Math.round(c41Plan * 100) / 100;
			this.editWindow.c41Plan.setValue(c41Plan);
			this.editWindow.c42Plan.setValue(0);
			weight = weight + c41Plan;
			weight = Math.round(weight * 100) / 100;
			this.editWindow.weight.setValue(weight);
			return;
		}
	}else{//回流油相液
		if (concentration < concentration2) {
			var c41Plan = 0;
			var c42Plan = weight * 1000 * (concentration2-concentration);
			c42Plan = Math.round(c42Plan * 100) / 100;
			this.editWindow.c41Plan.setValue(0);
			this.editWindow.c42Plan.setValue(c42Plan);
			weight = weight + c42Plan / 1000;
			weight = Math.round(weight * 100) / 100;
			this.editWindow.weight.setValue(weight);
			return;			
		}else{
			var c42Plan = 0;
			var c41Plan = 100 * (concentration/concentration2 -1);
			c41Plan = Math.round(c41Plan * 100) / 100;
			this.editWindow.c41Plan.setValue(c41Plan);
			this.editWindow.c42Plan.setValue(0);
			weight = weight + c41Plan;
			weight = Math.round(weight * 100) / 100;
			this.editWindow.weight.setValue(weight);
			return;
		}
	}
	this.editWindow.c41Plan.setValue(0);
	this.editWindow.c42Plan.setValue(0);

}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onCalc2 = function() {
	var _this = this;
	var mptype = this.inputWindow2.mptype.getValue();
	if (Ext.isEmpty(mptype)) {
		Ext.Msg.alert("系统提示", "请选择膜片类型!");
		return;
	}

	var line = this.inputWindow2.line.getValue();
	if (Ext.isEmpty(line)) {
		Ext.Msg.alert("系统提示", "请选择线别!");
		return;
	}

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.produce.quality.mpoiltest.queryWeight.biz.ext",
				method : "post",
				jsonData : {
					'condition/weight' : 100,
					'condition/mptype' : mptype,
					'condition/line' : line
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var datas = ret.data;

						if (!Ext.isEmpty(datas)) {
							var data = datas[0];
							_this.inputWindow2.concentration
									.setValue(data.c42std);

						} else {
							Ext.Msg.alert("系统提示", "系统没有对应标准，请手动输入!");
							_this.inputWindow2.concentration.setValue('');
						}
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onCalc4pl = function() {
	var c41Plan = this.editWindow3.c41Plan.getValue();
	c41Plan = parseFloat(c41Plan);
	var c42Plan = this.editWindow3.c42Plan.getValue();
	c42Plan = parseFloat(c42Plan);
	var weight2 = this.editWindow3.weight2.getValue();
	weight2 = parseFloat(weight2);
	var c41Reality = this.editWindow3.c41Reality.getValue();
	c41Reality = parseFloat(c41Reality);
	var c42Reality = this.editWindow3.c42Reality.getValue();
	c42Reality = parseFloat(c42Reality);
	//var reflux = weight2 - c41Plan - c42Plan/1000 +  c41Reality + c42Reality/1000;
	var reflux = weight2 +  c41Reality + c42Reality/1000;
	reflux = Math.round(reflux * 1000) / 1000;
	this.editWindow3.reflux.setValue(reflux);	
}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onBoard = function() {
	window.open('com.keensen.ump.produce.quality.queryBoard.flow?flag=1');
}

com.keensen.ump.produce.quality.mptest.oilMgr.prototype.onBoard2 = function() {
	window.open('com.keensen.ump.produce.quality.queryBoard.flow?flag=2');
}