com.keensen.ump.produce.quality.poorMgr.prototype.initEvent = function() {

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

	this.queryPanel4AbilitionQuery.mon(this.queryPanel4AbilitionQuery, 'query', function(form, vals) {
		var store = this.listPanel4AbilitionQueryList.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4AbilitionQueryList.pagingToolbar.pageSize
					}
				});
	}, this);
	
	this.queryPanel4Abilition.mon(this.queryPanel4Abilition, 'query', function(
			form, vals) {
		var store = this.listPanel4Abilition.store;
		store.baseParams = vals;
		store.load({
			params : {
				"pageCond/begin" : 0,
				"pageCond/length" : this.listPanel4Abilition.pagingToolbar.pageSize
			}
		});
	}, this);
	
	

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
				var workshop = cell.get('workshop');
				if (workshop == '工业组件') {
					this.editWindow.form.findField("entity/invalidType")
							.setDisabled(false);
					this.editWindow.form.findField("entity/invalidType")
							.setVisible(true);
					this.editWindow.form.findField("entity/invalidType2")
							.setDisabled(true);
					this.editWindow.form.findField("entity/invalidType2")
							.setVisible(false);
				} else {
					this.editWindow.form.findField("entity/invalidType")
							.setDisabled(true);
					this.editWindow.form.findField("entity/invalidType")
							.setVisible(false);
					this.editWindow.form.findField("entity/invalidType2")
							.setDisabled(false);
					this.editWindow.form.findField("entity/invalidType2")
							.setVisible(true);

				}
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
				this.listPanel.store.reload();
			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'afterSave',
			function(gird, cell) {
				this.listPanel.store.reload();
				this.inputWindow.form.findField("entity/batchNo").setValue('');
			}, this);

	this.listPanel.store.on('load', function() {
		var vals = _this.queryPanel.getForm().getValues();

		Ext.Ajax.request({
			url : "com.keensen.ump.produce.quality.poorrecord.queryPoorRecordSum.biz.ext",
			method : "post",
			jsonData : vals,
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					var data = ret.data;
					if (Ext.isEmpty(data) || Ext.isEmpty(data[0])
							|| data[0].length == null) {
						Ext.Msg.alert("系统提示", "没有查询到气检记录,请直接录入！")
					} else {

						var length = data[0].length;
						_this.listPanel.length.setValue(length);
					}

				}

			},
			callback : function() {

			}
		})
	})
}

com.keensen.ump.produce.quality.poorMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.poorMgr.prototype.onCalculate = function() {
	var amount = this.inputWindow.form.findField("entity/amount").getValue();
	if (Ext.isEmpty(amount)) {
		Ext.Msg.alert("系统提示", "请输入不合格数量！");
		return;
	}

	var materSpecId = this.inputWindow.form.findField("entity/materSpecId")
			.getValue();
	if (Ext.isEmpty(materSpecId)) {
		Ext.Msg.alert("系统提示", "请选择元件型号！");
		return;
	}

	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.quality.poorrecord.queryPoorSum.biz.ext",
		method : "post",
		jsonData : {
			'condition/amount' : amount,
			'condition/materSpecId' : materSpecId
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var data = ret.data;
				if (Ext.isEmpty(data) || Ext.isEmpty(data[0])
						|| data[0].length == null) {
					Ext.Msg.alert("系统提示", "没有查询到气检记录,请直接录入！")
				} else {

					var length = data[0].length;
					_this.inputWindow.form.findField("entity/length")
							.setValue(length);
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
};

com.keensen.ump.produce.quality.poorMgr.prototype.onCalculate2 = function() {
	var amount = this.editWindow.form.findField("entity/amount").getValue();
	if (Ext.isEmpty(amount)) {
		Ext.Msg.alert("系统提示", "请输入不合格数量！");
		return;
	}

	var materSpecId = this.editWindow.form.findField("entity/materSpecId")
			.getValue();
	if (Ext.isEmpty(materSpecId)) {
		Ext.Msg.alert("系统提示", "请选择元件型号！");
		return;
	}

	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.quality.poorrecord.queryPoorSum.biz.ext",
		method : "post",
		jsonData : {
			'condition/amount' : amount,
			'condition/materSpecId' : materSpecId
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (Ext.isEmpty(ret.data)) {
					Ext.Msg.alert("系统提示", "没有查询到气检记录！")
				} else {
					var data = ret.data;
					var length = data[0].length;
					_this.editWindow.form.findField("entity/length")
							.setValue(length);
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
};

com.keensen.ump.produce.quality.poorMgr.prototype.onAdd = function() {
	this.inputWindow.form.findField("entity/workshop").focus(false, 100);
	this.inputWindow.show();
	this.inputWindow.form.findField("entity/workshop").focus(false, 100);
}

com.keensen.ump.produce.quality.poorMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.quality.poorMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.poorMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.quality.quality.queryPoorRecord',
			templateFilename : 'ks_quality_poor'
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

com.keensen.ump.produce.quality.poorMgr.prototype.onGetBatchNo = function() {
	var _this = this;
	var juanmoBatchNo = _this.inputWindow.juanmoBatchNo.getValue();
	if (Ext.isEmpty(juanmoBatchNo)) {
		Ext.Msg.alert("系统提示", "请输入卷膜序号！");
		return;
	} else {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.quality.poorrecord.queryJuanmo.biz.ext",
			method : "post",
			jsonData : {
				'condition/juanmoBatchNo' : juanmoBatchNo
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					var data = ret.data;
					if (Ext.isEmpty(data) || Ext.isEmpty(data[0])) {
						Ext.Msg.alert("系统提示", "没有查询到卷膜记录！")
					} else {

						var responsible = data[0].responsible;
						var tumoBatchNo = data[0].tumoBatchNo;
						var department = data[0].department;
						_this.inputWindow.form.findField("entity/responsible")
								.setValue(responsible);
						_this.inputWindow.form.findField("entity/department")
								.setValue(department);
						_this.inputWindow.form.findField("entity/batchNo")
								.setValue(tumoBatchNo);
					}

				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

com.keensen.ump.produce.quality.poorMgr.prototype.onGetBatchNo2 = function() {
	var _this = this;
	var juanmoBatchNo = _this.editWindow.juanmoBatchNo.getValue();
	if (Ext.isEmpty(juanmoBatchNo)) {
		Ext.Msg.alert("系统提示", "请输入卷膜序号！");
		return;
	} else {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.quality.poorrecord.queryJuanmo.biz.ext",
			method : "post",
			jsonData : {
				'condition/juanmoBatchNo' : juanmoBatchNo
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					var data = ret.data;
					if (Ext.isEmpty(data) || Ext.isEmpty(data[0])) {
						Ext.Msg.alert("系统提示", "没有查询到卷膜记录！")
					} else {

						var responsible = data[0].responsible;
						var tumoBatchNo = data[0].tumoBatchNo;
						var department = data[0].department;
						_this.editWindow.form.findField("entity/responsible")
								.setValue(responsible);
						_this.editWindow.form.findField("entity/department")
								.setValue(department);
						_this.editWindow.form.findField("entity/batchNo")
								.setValue(tumoBatchNo);
					}

				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

com.keensen.ump.produce.quality.poorMgr.prototype.onAbilition = function() {

	this.abilitionWindow.show();
}

com.keensen.ump.produce.quality.poorMgr.prototype.onAbilitionJudge = function() {

	var A = this.listPanel4Abilition;
	var store = A.store;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		var C = A.getSelectionModel().getSelections();
		var pkid = C[0].data.id;
		var result = C[0].data.result;

		if (result == '报废') {
			Ext.Msg.alert("系统提示", "已判定，无须再次判定！");
			return false;

		} else {

			this.listPanel4AbilitionJudge.store.load({
						params : {
							"condition/relationId" : pkid
						}
					});
			this.abilitionJudgeWindow.show();
		}
	}
}

com.keensen.ump.produce.quality.poorMgr.prototype.onSaveAbilitionJudge = function() {

	var _this = this;
	var store = this.listPanel4AbilitionJudge.store;

	var records = store.getRange();

	var list = [];

	var relationId = records[0].data['relationId'];

	Ext.each(records, function(r) {

				var d = {
					'id' : r.data['id'],
					'invalidType' : r.data['invalidType'],
					'describe' : r.data['describe'],
					'responsible' : r.data['responsible'],
					'department' : r.data['department'],
					'dealMethod' : r.data['dealMethod']
				}

				list.push(d);

			});

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "POST",
		url : 'com.keensen.ump.produce.quality.abilition.saveAbilitionListBatch.biz.ext',
		jsonData : {
			'list' : list,
			'relationId' : relationId
		},
		success : function(F) {
			var B = Ext.decode(F.responseText);
			if (B.success) {
				var msg = B.msg;
				if (Ext.isEmpty(msg)) {
					Ext.MessageBox.alert("操作提示", "保存成功!", function() {
								_this.listPanel.store.reload({});
								_this.listPanel4Abilition.store.reload({});
								_this.abilitionJudgeWindow.hide();
							})
				} else {
					var datas = B.datas;
					var arr = [];
					for (var i = 0; i < datas.length; i++) {
						arr.push(datas[i].jmBatchNo);
					}
					var msg = arr.join(',') + msg;
					Ext.MessageBox.alert("操作提示", msg, function() {
							})
				}
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

com.keensen.ump.produce.quality.poorMgr.prototype.exportAbilitionExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel4Abilition,
			this.listPanel4Abilition, '报废单',
			'com.keensen.ump.produce.quality.abilition.queryAbilition');
}

com.keensen.ump.produce.quality.poorMgr.prototype.onAbolitionQuery = function() {
	
	this.abilitionQueryWindow.show();
}

com.keensen.ump.produce.quality.poorMgr.prototype.exportAbilitionQuery = function() {

	doQuerySqlAndExport(this, this.queryPanel4AbilitionQuery,
			this.listPanel4AbilitionQueryList, '报废单明细',
			'com.keensen.ump.produce.quality.abilition.queryAbilitionList','0,1,2,3,4,5');
}

com.keensen.ump.produce.quality.poorMgr.prototype.onPrint = function() {
	var A = this.listPanel4AbilitionQueryList;
	var store = A.store;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		var C = A.getSelectionModel().getSelections();
		var code = C[0].data.code;
		window.open('com.keensen.ump.produce.quality.abilitionReport.flow?code='
						+ code, "top");
	}
}