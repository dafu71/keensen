/**
 * 销毁组件
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.destroy = function() {
	this.editPanel.destroy();
	this.listEmpPanel.destroy();
	this.backItemWindow.destory();
	this.backitemPanel.destory();
}

/**
 * 初始化组件事件
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.initEvent = function() {

	// 下一环节选中
	var nextItems1 = this.editPanel.nextItems.items.items[0];
	var nextItems2 = this.editPanel.nextItems.items.items[1];

	nextItems1.setValue(true);
	nextItems2.setValue(true);

	var attachmentParams = {
		relationId : processinstid,
		groupId : 'tybgfile'
	};
	Ext.getCmp(this.cattachId).setPostParams(attachmentParams);
	Ext.getCmp(this.cattachId).loadParams = attachmentParams;
	Ext.getCmp(this.cattachId).loadAttachmentRemote();
	Ext.getCmp(actionsPersonId).setValue(operatorname);
	var record = new Ext.data.Record({
				processinstid : processinstid,
				"dateTime" : new Date()
			});
	this.editPanel.loadData(record);
	this.storeAction.load();
	this.storePerson.load();
	this.listPartPanel.store.load(); 

	/*
	 * 提交流程处理数据之后，业务处理
	 */
	this.editPanel.mon(this.editPanel, 'aftersave', function() {
				var list = Ext.getCmp(listId);
				if (list) {// 重新加载待办任务列表
					list.store.reload();
				}
	(function	() {
					closeMyTab();
				}).defer(200);

			}, this);

	/*
	 * 提交流程处理数据之前，业务处理
	 */
	this.editPanel.mon(this.editPanel, 'beforesave', function() {
//				var selOperaotorids = this.listEmpPanel.store.getRange();
//				if (selOperaotorids.length > 0) {
//					var vals = [];
//					Ext.each(selOperaotorids, function(record) {
//								vals[vals.length] = {
//									'roleid' : record.get('roleid'),
//									'userid' : record.get('userid'),
//									'operatorname' : record.get('operatorname')
//								}
//							});
//				} else {
//					Ext.Msg.alert("系统提示", "请选择下一环节参与人员!");
//					return false;
//				}

			}, this);

	// 删除角色操作员事件
	this.listEmpPanel.mon(this.listEmpPanel, 'delOperator',
			function(grid, vals) {
				var mk = new Ext.LoadMask(document.body, {
							msg : '后台正在操作，请稍候！',
							removeMask : true
						});
				mk.show();
				var rs1 = grid.listEmpPanel.getSelectionModel().getSelections();
				grid.listEmpPanel.store.remove(rs1);
				mk.hide();
			}, this);

	// 新增角色操作员事件
	this.listEmpPanel.mon(this.listEmpPanel, 'select', function() {
				this.operatorListPanel.store.removeAll();
				this.popWindow.show();

			}, this);

	// 选择操作员，添加到参与者列表
	this.popWindow.mon(this.popWindow, 'addOperator', function(selections) {
				if (selections.length > 0) {
					grid = this.listEmpPanel;
					win = this.popWindow;
					roleid = this.popWindow.currentRole.roleid;
					var store = this.listEmpPanel.store;
					var vals = [];
					Ext.each(selections, function(record) {
								store.add(record);
							}, this);
					this.popWindow.hide();
				} else {
					Ext.Msg.alert('提示', '未选择记录,不能保存,请选择至少一条记录')
				}
			}, this);

}

/*
 * 选择人员信息
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.onSelect = function() {
	this.listEmpPanel.fireEvent("select");
};

/*
 * 移除操作员方法
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.onDelOperator = function() {
	if (!this.listEmpPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		Ext.Msg.confirm("系统提示", "您确定要移除操作员吗?", function(btnText) {
					if (btnText == "yes") {
						var selOperaotorids = this.listEmpPanel.selModel
								.getSelections();
						if (selOperaotorids.length > 0) {
							var vals = [];
							Ext.each(selOperaotorids, function(record) {
										vals[vals.length] = {
											'roleid' : record.get('roleid'),
											'operatorid' : record
													.get('operatorid')
										}
									});
							this.listEmpPanel.fireEvent("delOperator", this,
									vals);
						}
					}
				}, this);
	}
};

/**
 * 提交归档下发数据，完成流程及业务逻辑
 * 
 * @return {Boolean}
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.onSave = function() {

	var _this = this;

	var nextItems1 = this.editPanel.nextItems.items.items[0];
	var nextItems2 = this.editPanel.nextItems.items.items[1];

	var records = this.listEmpPanel.getStore().getRange();
	var vals = [];

	// 如果执行部门反馈选中
	if (nextItems1.getValue()) {
		if (records.length == 1) {

			Ext.each(records, function(record) {
						vals[vals.length] = {
							'userid' : record.get('userid'),
							'operatorname' : record.get('operatorname')
						}
					});
		} else {
			var selOperaotorids = this.listEmpPanel.selModel.getSelections();
			if (selOperaotorids.length > 0) {
				Ext.each(selOperaotorids, function(record) {
							vals[vals.length] = {
								'userid' : record.get('userid'),
								'operatorname' : record.get('operatorname')
							}
						});
			} else {
				Ext.Msg.alert("系统提示", "请选择执行部门反馈参与人员!");
				return false;
			}
		}

	}

	var records = this.listPartPanel.getStore().getRange();
	var vals2 = [];

	// 如果采购反馈选中
	if (nextItems2.getValue()) {
		if (records.length == 1) {

			Ext.each(records, function(record) {
						vals2[vals2.length] = {
							'userid' : record.get('userid'),
							'operatorname' : record.get('operatorname')
						}
					});
		} else {
			var selPartids = this.listPartPanel.selModel.getSelections();
			if (selPartids.length > 0) {
				Ext.each(selPartids, function(record) {
							vals2[vals2.length] = {
								'userid' : record.get('userid'),
								'operatorname' : record.get('operatorname')
							}
						});
			} else {
				Ext.Msg.alert("系统提示", "请选择采购反馈参与人员!");
				return false;
			}
		}

	}



	var mk = new Ext.LoadMask(this.editPanel.id, {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();
	var forms = _this.editPanel.getForm().getValues();
	
	var nextItems = forms.nextItems;
	nextItems= nextItems.toString();
	forms.nextItems = nextItems;
	
	
	
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.nextsTybgNotice.biz.ext',
		jsonData : {
			parts : vals2,
			persons : vals,
			tybgNotices : forms
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Msg.alert("系统提示", "提交成功", function() {
							var list = Ext.getCmp(listId);
							if (list) {// 重新加载待办任务列表
								list.store.reload();
							}
				(function	() {
								closeMyTab();
							}).defer(200);
						});
			}
		},
		failure : function(resp, opts) {
			mk.hide();
		}
	});

}

/**
 * 回退窗口关闭
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.onBackClose = function() {
	Ext.getCmp("backItemShow").hide();
}

/**
 * 回退窗口，选择需要回退的环节
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.onBackItem = function() {
	this.backitemPanel.getStore().removeAll();
	this.backItemStore.load();
	this.backItemWindow.show();

};

/**
 * 回退窗口提交
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.onBack = function() {
	var _this = this;
	if (!_this.backitemPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定环节，请选择数据行！");
	} else {
		Ext.Msg.confirm("系统提示", "您确定要回退吗?", function(btnText) {
			if (btnText == "yes") {
				var selOperaotorids = _this.backitemPanel.getSelectionModel()
						.getSelections();
				if (selOperaotorids.length > 0) {
					var vals;
					Ext.each(selOperaotorids, function(record) {
								vals = {
									'id' : record.get('id'),
									'name' : record.get('name')
								}
							});

				}
				var mk = new Ext.LoadMask(this.backitemPanel.id, {
							msg : '正在保存，请稍候!',
							removeMask : true
						});
				mk.show();

				var forms = _this.editPanel.getForm().getValues();
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.nextsTybgNotice.biz.ext',
					jsonData : {
						backItem : vals,
						tybgNotices : forms,
						resultType : {
							"actionType" : "back"
						}
					},
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							Ext.Msg.alert("系统提示", "提交成功", function() {
										var list = Ext.getCmp(listId);
										if (list) {// 重新加载待办任务列表
											Ext.getCmp("backItemShow").hide();
											list.store.reload();
										}
							(function	() {
											closeMyTab();
										}).defer(200);
									});
						}
					},
					failure : function(resp, opts) {
						mk.hide();
					}
				});
			} else {

			}
		})
	}
}

/**
 * 流程处理TAB页关闭
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.onClose = function() {
	closeMyTab();
}

/**
 * 采购反馈参与人员选择
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.onSelectPart = function() {
	var _this = this;
	var store = _this.listPartPanel.store;
	var readerWindow = readerWindow || new com.zoomlion.hjsrm.selectParticipantsWindow3({
				title : '选择采购反馈参与人员',
				partTitle : '采购反馈参与人员',
				divisionFront : "(",
				divisionBack : '),',
				defaultValue : '',
				currentRolecode : CURRENTROLECODE,
				listeners : {
					'callback' : function(v) {
						if (v) {
							var readers = Ext.util.Format.substr(v, 0, v.length
											- 2);
							var uids = [];
							var unames = [];
							if (readers.indexOf("),") > 0) {
								var arr = readers.split("),");
								for (var i = 0; i < arr.length; i++) {
									var temp = arr[i].split("(");
									uids.push(temp[1]);
									unames.push(temp[0]);
								}

							} else {
								var temp = readers.split("(");
								uids.push(temp[1]);
								unames.push(temp[0]);
							}

							for (var i = 0; i < uids.length; i++) {
								var flag = true;
								store.each(function(r) {
											if (flag && (r.data.userid == uids[i])) {
												flag = false;
												
											}
										}, _this);
								

								if (flag) {
									var r = new Ext.data.Record({
												'userid' : uids[i],
												'operatorname' : unames[i]
											});

									store.add(r);
								}
							}

							store.sort("userid", "asc");
						}

					}
				}
			});
	readerWindow.participantsEditPanel.form.reset();
	readerWindow.show();
}

/**
 * 移除操作员
 */
com.zoomlion.hjsrm.tuyangbg.NextxMgr.prototype.onDelPart = function() {
	var rs = this.listPartPanel.getSelectionModel().getSelections();
	this.listPartPanel.store.remove(rs);
}

function closeMyTab() {
	// var tabId = "workitem-" + workitemid;
	var tabId = "workinglistid";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}
