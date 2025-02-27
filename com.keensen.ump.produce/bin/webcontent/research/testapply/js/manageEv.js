com.keensen.ump.research.TestapplyMgr.prototype.initEvent = function() {
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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				// this.editWindow.show();
				// this.editWindow.loadData(cell);

				if (this.opt == 'approvelist') {
					var relationId = cell.get('id');
					var store = this.approveListPanel.store;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.approveListWindow.show();
					return;
				}

				if (this.opt == '查看') {
					this.viewPanel.form.reset();
					this.viewPanel.loadData(cell);
					var relationId = cell.get('id');
					var store = this.listPanel4View.store;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.viewWindow.show();
					return;
				}

				var state = cell.get('state');
				if (state.indexOf(this.opt) == -1) {
					Ext.Msg.alert("系统提示", "请选择状态为" + this.opt + "的记录！")
					return false;
				}
				if (this.opt == '研发中心审核') {
					this.checkPanel.form.reset();
					this.checkPanel.loadData(cell);
					var relationId = cell.get('id');
					var store = this.applyListStore;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.checkWindow.show();
				}

				if (this.opt == '重新制定') {
					this.editPanel.form.reset();
					this.editPanel.loadData(cell);
					var relationId = cell.get('id');
					var store = this.listPanel4EditList.store;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.editWindow.show();
				}

				if (this.opt == '膜片制造部审核' || this.opt == '元件制造部审核') {
					this.approvePanel.form.reset();
					this.approvePanel.loadData(cell);
					var relationId = cell.get('id');
					var store = this.applyListStore;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.approveWindow.setTitle(this.opt);
					this.approveWindow.show();
				}

				if (this.opt == '设备能源部审核' || this.opt == '质量管理部审核'
						|| this.opt == '预研部审核') {
					this.otherApprovePanel.form.reset();
					this.otherApprovePanel.loadData(cell);
					var relationId = cell.get('id');
					var store = this.applyListStore;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.otherApproveWindow.setTitle(this.opt);
					this.otherApproveWindow.show();
				}

				if (this.opt == '生产管理部审核') {
					this.scApprovePanel.form.reset();
					this.scApprovePanel.loadData(cell);
					var relationId = cell.get('id');
					var store = this.applyListStore;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.scApproveWindow.setTitle(this.opt);
					this.scApproveWindow.show();
				}

				if (this.opt == '研发助理处理') {
					this.yfApprovePanel.form.reset();
					this.yfApprovePanel.loadData(cell);
					var relationId = cell.get('id');
					var store = this.applyListStore;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.yfApproveWindow.setTitle(this.opt);
					this.yfApproveWindow.show();
				}

				if (this.opt == '计划员确认') {
					this.jhApprovePanel.form.reset();
					this.jhApprovePanel.loadData(cell);
					var relationId = cell.get('id');
					var store = this.applyListStore;
					store.load({
								params : {
									'condition/relationId' : relationId
								}
							});
					this.jhApproveWindow.setTitle(this.opt);
					this.jhApproveWindow.show();
				}

			}, this);

	this.otherStatecombo.mon(this.otherStatecombo, 'select', function(record,
					index) {
				// this.approvePanel.state
				// .setValue(this.otherStatecombo.myvalue);
			}, this);

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var state = r.data.state;

				if (state == '完成' || state == '完成|') {
					Ext.Msg.alert('系统提示', '完成状态的不能删除');
					return false;
				}
			})
}

com.keensen.ump.research.TestapplyMgr.prototype.onAddList = function() {

	this.addListWindow.show();
	this.addListWindow.items.items[0].form.reset();
}

com.keensen.ump.research.TestapplyMgr.prototype.onInsertList = function() {
	this.insertMater();

}

com.keensen.ump.research.TestapplyMgr.prototype.onInsertList2 = function() {
	this.insertMater();
	this.addListWindow.hide();
}

com.keensen.ump.research.TestapplyMgr.prototype.insertMater = function() {
	var store;
	if (!this.inputWindow.hidden)
		store = this.listPanel4AddList.store;
	else
		store = this.listPanel4EditList.store;
	var r = new Ext.data.Record({
				batchNo : this.addListWindow.batchNo.getValue(),
				specName : this.addListWindow.specName.getValue(),
				amount : this.addListWindow.amount.getRawValue(),
				specId : this.addListWindow.specId.getValue()
			})
	store.add(r);
	this.addListWindow.batchNo.setValue('');
	this.addListWindow.specName.setValue('');
	this.addListWindow.amount.setValue('');
	this.addListWindow.specId.setValue('');
}

com.keensen.ump.research.TestapplyMgr.prototype.onDelList = function() {
	var records = this.listPanel4AddList.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		this.listPanel4AddList.store.remove(records[0]);
	}
}

com.keensen.ump.research.TestapplyMgr.prototype.onDelList2 = function() {
	var records = this.listPanel4EditList.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		this.listPanel4EditList.store.remove(records[0]);
	}
}

com.keensen.ump.research.TestapplyMgr.prototype.onSaveAdd = function() {
	var _this = this;

	if (this.addPanel.form.isValid()) {
		var store = this.listPanel4AddList.store;
		var records = store.getRange();

		if (records.length == 0) {
			Ext.Msg.alert("系统提示", "至少需要有一条涂膜批次！")
			return false;
		}

		var list = [];
		Ext.each(records, function(r) {
					var dt = {
						'batchNo' : r.data['batchNo'],
						'specName' : r.data['specName'],
						'amount' : r.data['amount']

					};
					list.push(dt);

				});

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.testapply.saveApply.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.addPanel.form.getValues(),
				'list' : list

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
						_this.inputWindow.hide();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

com.keensen.ump.research.TestapplyMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.research.TestapplyMgr.prototype.exportExcel = function() {

}

com.keensen.ump.research.TestapplyMgr.prototype.onAdd = function() {
	this.inputWindow.show();
	this.listPanel4AddList.store.removeAll();
	this.addPanel.form.reset();

}

com.keensen.ump.research.TestapplyMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.research.TestapplyMgr.prototype.onEdit = function() {
	this.opt = '重新制定';
	this.listPanel.onEdit();
};

// 研发中心审核
com.keensen.ump.research.TestapplyMgr.prototype.onCheck = function() {
	this.opt = '研发中心审核';
	this.listPanel.onEdit();
};

com.keensen.ump.research.TestapplyMgr.prototype.onSaveCheck = function() {

	var _this = this;

	if (this.checkPanel.form.isValid()) {

		var obj = this.checkPanel.nextstep.getValue();
		var arr = ['重新制定', '膜片制造部审核', '元件制造部审核'];

		var state = arr[obj.getRawValue()];

		this.checkPanel.state.setValue(state + '|');

		this.checkPanel.step.setValue('研发中心审核');

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.testapply.saveCheck.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.checkPanel.form.getValues()

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
						_this.checkWindow.hide();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}

}

com.keensen.ump.research.TestapplyMgr.prototype.onSaveEdit = function() {
	var _this = this;

	if (this.editPanel.form.isValid()) {
		var store = this.listPanel4EditList.store;
		var records = store.getRange();

		if (records.length == 0) {
			Ext.Msg.alert("系统提示", "至少需要有一条涂膜批次！")
			return false;
		}

		var list = [];
		Ext.each(records, function(r) {
					var dt = {
						'batchNo' : r.data['batchNo'],
						'specName' : r.data['specName'],
						'amount' : r.data['amount']

					};
					list.push(dt);

				});

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();

		this.editPanel.state.setValue('研发中心审核|');
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.testapply.saveApply.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.editPanel.form.getValues(),
				'list' : list

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
						_this.editWindow.hide();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

// 膜片制造部审核
com.keensen.ump.research.TestapplyMgr.prototype.onApprove2Mp = function() {
	this.opt = '膜片制造部审核';
	this.listPanel.onEdit();
};

// 膜片制造部审核
com.keensen.ump.research.TestapplyMgr.prototype.onApprove2Prod = function() {
	this.opt = '元件制造部审核';
	this.listPanel.onEdit();
};

com.keensen.ump.research.TestapplyMgr.prototype.onSaveApprove4MpAndProd = function() {

	var _this = this;
	if (this.approvePanel.form.isValid()) {
		var step = this.approvePanel.nextstep.getValue();
		var otherState = this.approvePanel.otherState.getValue();
		if (step == '其它部门审核' && Ext.isEmpty(otherState)) {
			Ext.Msg.alert("系统提示", "请选择其它审核部门！")
			return false;
		}
		if (step == '其它部门审核') {
			var state = '';
			var arr = otherState.split(',');
			state = arr.join('|') + '|';
			this.approvePanel.state.setValue(state);
		} else {
			this.approvePanel.state.setValue(step + '|');
		}
		this.approvePanel.step.setValue(this.opt);

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();

		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.testapply.saveApprove4MpAndProd.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.approvePanel.form.getValues()

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
						_this.approveWindow.hide();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}

}

// 设备能源部审核
com.keensen.ump.research.TestapplyMgr.prototype.onApprove2Sb = function() {
	this.opt = '设备能源部审核';
	this.listPanel.onEdit();
}

// 质量管理部审核
com.keensen.ump.research.TestapplyMgr.prototype.onApprove2Zl = function() {
	this.opt = '质量管理部审核';
	this.listPanel.onEdit();
}

// 预研部审核
com.keensen.ump.research.TestapplyMgr.prototype.onApprove2Yy = function() {
	this.opt = '预研部审核';
	this.listPanel.onEdit();
}

com.keensen.ump.research.TestapplyMgr.prototype.onSaveOtherApprove = function() {
	var _this = this;

	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	}
	var state = records[0].data.state;

	if (this.otherApprovePanel.form.isValid()) {
		var obj = this.otherApprovePanel.nextstep.getValue();
		var arr = ['是', '否'];
		var yn = arr[obj.getRawValue()];
		if (yn == '是') {
			state = '研发中心审核|';
		} else {
			var title = this.otherApproveWindow.title + '|';
			state = state.replace(title, '');
		}
		if (state.trim() == '') {
			state = '生产管理部审核|';
		}

		this.otherApprovePanel.state.setValue(state);
		this.otherApprovePanel.step.setValue(this.opt);

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();

		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.testapply.saveApprove4Other.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.otherApprovePanel.form.getValues()

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
						_this.otherApproveWindow.hide();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}

}

// 生产管理部审核
com.keensen.ump.research.TestapplyMgr.prototype.onApprove2Sc = function() {
	this.opt = '生产管理部审核';
	this.listPanel.onEdit();
}

com.keensen.ump.research.TestapplyMgr.prototype.onSaveScApprove = function() {
	var _this = this;

	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	}
	var state = '';

	if (this.scApprovePanel.form.isValid()) {
		var obj = this.scApprovePanel.nextstep.getValue();
		var arr = ['是', '否'];
		var yn = arr[obj.getRawValue()];
		if (yn == '是') {
			state = '研发中心审核|';
		} else {
			state = '研发助理处理|';;
		}

		this.scApprovePanel.state.setValue(state);
		this.scApprovePanel.step.setValue(this.opt);

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();

		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.testapply.saveApprove4Sc.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.scApprovePanel.form.getValues()

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
						_this.scApproveWindow.hide();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}

}

com.keensen.ump.research.TestapplyMgr.prototype.onApproveList = function() {
	this.opt = 'approvelist';
	this.listPanel.onEdit();

}

// 研发助理处理
com.keensen.ump.research.TestapplyMgr.prototype.onApprove2Yf = function() {
	this.opt = '研发助理处理';
	this.listPanel.onEdit();
}

com.keensen.ump.research.TestapplyMgr.prototype.onSaveYfApprove = function() {
	var _this = this;

	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	}

	if (this.yfApprovePanel.form.isValid()) {
		var state = '计划员确认|';

		this.yfApprovePanel.state.setValue(state);
		this.yfApprovePanel.step.setValue(this.opt);

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();

		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.testapply.saveApprove4Yf.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.yfApprovePanel.form.getValues()

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
						_this.yfApproveWindow.hide();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

// 计划员确认
com.keensen.ump.research.TestapplyMgr.prototype.onApprove2Jh = function() {
	this.opt = '计划员确认';
	this.listPanel.onEdit();
}

com.keensen.ump.research.TestapplyMgr.prototype.onSaveJhApprove = function() {
	var _this = this;

	var records = this.listPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	}
	if (this.jhApprovePanel.form.isValid()) {
		var state = '';

		var obj = this.jhApprovePanel.nextstep.getValue();
		var arr = ['条件满足', '条件不满足'];
		var yn = arr[obj.getRawValue()];
		if (yn == '条件满足') {
			state = '完成|';
		} else {
			state = '研发助理处理|';;
		}

		this.jhApprovePanel.state.setValue(state);
		this.jhApprovePanel.step.setValue(this.opt);

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();

		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.testapply.saveApprove4Jh.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.jhApprovePanel.form.getValues()

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						_this.listPanel.store.reload();
						_this.jhApproveWindow.hide();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

com.keensen.ump.research.TestapplyMgr.prototype.onView = function() {
	this.opt = '查看';
	this.listPanel.onEdit();
}