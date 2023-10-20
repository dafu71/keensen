/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 质检记录表生成 创建日期： 2015-06-23 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.destroy = function() {
	this.rceditPanel.destroy();
	this.createWindow.destroy();
	this.popWindow.destroy();
	this.inspectrceditPanel.destroy();
	this.operatorListPanel.destroy();
	this.qjcreateWindow.destroy();
	this.qjpopWindow.destroy();
	this.qjinspectrceditPanel.destroy();
	this.qjoperatorListPanel.destroy();
}
com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.initEvent = function() {
	Ext.getCmp(this.zasnh).focus(false, 100);
	var _this = this;
	// 增加查询事件
	this.rcqueryPanel.mon(this.rcqueryPanel, 'query', function(form, vals) {
		var store = this.rclistPanel.store;
		store.removeAll();
		var t = Ext.getCmp(this.zasnh).getValue();
		this.rceditPanel.getForm().reset();
		var mk = new Ext.LoadMask(_this.rclistPanel.id, {
					msg : '正在进行查询操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkshdhyz.biz.ext',
			jsonData : {
				query : t
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.result == "1") {
					Ext.Msg.alert("系统提示", "该送货单未进行确认或者不存在！", function() {
								// store.reload();
								// _this.listPanel.getForm().reset();
							});
				} else {
					var record = new Ext.data.Record();
					record.set('zasnh', t);
					this.rceditPanel.loadData(record);

					store.baseParams = vals;
					store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.rclistPanel.pagingToolbar.pageSize
						}
					});
				}
			}
		});

	}, this);
	// this.rclistPanel.store.on('load', function() {
	// _this.selModel.selectAll();
	// });
	this.rceditPanel.mon(this.rceditPanel, 'afterload', function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.createtime) {
					data.createtime = data.createtime.split('.')[0];
					var date1 = data.createtime.replace(regEx, "/");
					this.rceditPanel.form.findField('createtime')
							.setValue(new Date(date1));
				}
				if (data.arrivedate) {
					data.arrivedate = data.arrivedate.split('.')[0];
					var date2 = data.arrivedate.replace(regEx, "/");
					this.rceditPanel.form.findField('arrivedate')
							.setValue(new Date(date2));
				}
			}, this);

	this.inspectrceditPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);
	this.qjinspectrceditPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.recb = r;
				}).defer(100);
			}, this);

	// 新增检查项目事件
	this.inspectrceditPanel.mon(this.inspectrceditPanel, 'select', function() {
				this.operatorListPanel.store.removeAll();
				this.popWindow.show();

			}, this);

	// 删除检查项目事件
	this.inspectrceditPanel.mon(this.inspectrceditPanel, 'delOperator',
			function(grid, vals) {
				var mk = new Ext.LoadMask(document.body, {
							msg : '后台正在操作，请稍候！',
							removeMask : true
						});
				mk.show();
				var rs1 = grid.inspectrceditPanel.getSelectionModel()
						.getSelections();
				grid.inspectrceditPanel.store.remove(rs1);
				mk.hide();
			}, this);

	// 选择检查项目，添加到检查列表
	this.popWindow.mon(this.popWindow, 'addOperator', function(selections) {
		if (selections.length > 0) {
			grid = this.inspectrceditPanel;
			win = this.popWindow;
			var store = this.inspectrceditPanel.store;
			var vals = [];
			for (var i = 0; i < selections.length; i++) {
				var flag = true;
				store.each(function(r) {
					if (flag && (r.data.zjwtid == selections[i].get('zjwtid'))) {
						flag = false;
					}

				}, this);
				if (flag) {
					store.add(selections[i]);
				}
			}
			this.popWindow.hide();
		} else {
			Ext.Msg.alert('提示', '未选择记录,不能保存,请选择至少一条记录')
		}
	}, this);
	// 新增检查项目事件
	this.qjinspectrceditPanel.mon(this.qjinspectrceditPanel, 'select',
			function() {
				this.qjoperatorListPanel.store.removeAll();
				this.qjpopWindow.show();

			}, this);
	// 删除检查项目事件
	this.qjinspectrceditPanel.mon(this.qjinspectrceditPanel, 'delOperator',
			function(grid, vals) {
				var mk = new Ext.LoadMask(document.body, {
							msg : '后台正在操作，请稍候！',
							removeMask : true
						});
				mk.show();
				var rs1 = grid.qjinspectrceditPanel.getSelectionModel()
						.getSelections();
				grid.qjinspectrceditPanel.store.remove(rs1);
				mk.hide();
			}, this);

	// 选择检查项目，添加到检查列表
	this.qjpopWindow.mon(this.qjpopWindow, 'addOperator', function(selections) {
				if (selections.length > 0) {
					grid = this.qjinspectrceditPanel;
					win = this.qjpopWindow;
					var store = this.qjinspectrceditPanel.store;
					var vals = [];
					for (var i = 0; i < selections.length; i++) {
						var flag = true;
						store.each(function(r) {
									if (flag
											&& (r.data.jyxm == selections[i]
													.get('jyxm'))) {
										flag = false;
									}
								}, this);

						if (flag) {
							store.add(selections[i]);
						}
					}
					this.qjpopWindow.hide();
				} else {
					Ext.Msg.alert('提示', '未选择记录,不能保存,请选择至少一条记录')
				}
			}, this);
	com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onsaveOk = function() {
		var _this = this;
		var store = this.rclistPanel.store;
		var records = this.inspectrceditPanel.store.getRange();
		if (!this.createWindow.items.items[0].form.isValid()) {
			return;
		}
		if (records.length == 0
				&& this.createWindow.items.items[0].form.findField('bhgsl')
						.getValue() != "0") {
			Ext.Msg.alert('提示', '请添加故障类别！')
			return
		} else {
			for (var i = 0; i < records.length; i++) {
				var j = i + 1;
				if (Ext.isEmpty(records[i].data.zjwtdj)) {
					Ext.Msg.alert('提示', '检查项目中第' + j + '行的故障等级为空！')
					return
				}
				if (Ext.isEmpty(records[i].data.zjwtjs)) {
					Ext.Msg.alert('提示', '检查项目中第' + j + '行的故障计数为空！')
					return
				}
			}
		}
		if (this.createWindow.items.items[0].form.findField('zjlb').getValue() == "免检") {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.savemjInspectzt2.biz.ext',
				jsonData : {
					"Bnote/pkid" : this.createWindow.items.items[0].form
							.findField('pkid').getValue()
				},
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						this.onSavezcbz2();
					}
				}
			})

		} else {
			this.onSavezcbz2();
		}
	};
	com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onqjsaveOk = function() {
		var _this = this;
		var store = this.rclistPanel.store;
		var records = this.qjinspectrceditPanel.store.getRange();
		if (!this.qjcreateWindow.items.items[0].form.isValid()) {
			return;
		}
		if (records.length == 0) {
			Ext.Msg.alert('提示', '请选择质检项目！')
			return
		} else {
			for (var i = 0; i < records.length; i++) {
				var j = i + 1;
				if (Ext.isEmpty(records[i].data.qjsjz)) {
					Ext.Msg.alert('提示', '检查项目中第' + j + '行的实际值为空！')
					return
				} else if (Ext.isEmpty(records[i].data.zjwtjs)) {
					Ext.Msg.alert('提示', '检查项目中第' + j + '行的判定为空！')
					return
				}
			}
		}
		var vals = this.qjcreateWindow.items.items[0].form.getValues();
		vals["zcbz"] = "2";
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		var mk = new Ext.LoadMask(this.qjcreateWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.addinspectqjnotedetail.biz.ext',
			jsonData : {
				note : vals,
				detail : detail
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					_this.qjcreateWindow.hide();
					Ext.Msg.alert("系统提示", "保存成功", function() {
						store.reload();
							// _this.listPanel.getForm().reset();
						});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	};
	com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onzssaveOk = function() {
		var _this = this;
		var store = this.rclistPanel.store;
		var records = this.inspectrceditPanel.store.getRange();
		var vals = this.createWindow.items.items[0].form.getValues();
		vals["zcbz"] = "1";
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		var mk = new Ext.LoadMask(this.createWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.addinspectcjnotedetail.biz.ext',
			jsonData : {
				note : vals,
				detail : detail
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					_this.createWindow.hide();
					Ext.Msg.alert("系统提示", "保存成功", function() {
						store.reload();
							// _this.listPanel.getForm().reset();
						});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}
	com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onqjzssaveOk = function() {
		var _this = this;
		var store = this.rclistPanel.store;
		var records = this.qjinspectrceditPanel.store.getRange();
		var vals = this.qjcreateWindow.items.items[0].form.getValues();
		if (!this.qjcreateWindow.items.items[0].form.isValid()) {
			return;
		}
		vals["zcbz"] = "1";
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		var mk = new Ext.LoadMask(this.qjcreateWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.addinspectqjnotedetail.biz.ext',
			jsonData : {
				note : vals,
				detail : detail
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					_this.qjcreateWindow.hide();
					Ext.Msg.alert("系统提示", "保存成功", function() {
						store.reload();
							// _this.listPanel.getForm().reset();
						});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	}
	com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.ongbOk = function() {
		if (this.createWindow.items.items[0].form.findField('zjlb').getValue() == "免检") {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.savemjInspectzt3.biz.ext',
				jsonData : {
					"Bnote/pkid" : this.createWindow.items.items[0].form
							.findField('pkid').getValue()
				}
			});
			this.createWindow.hide();
		} else {
			this.createWindow.hide();
		}
	}
}

com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onCreate = function() {
	var _this = this;
	var B = this.rclistPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
	if (B.length > 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return
	}else if (B[0].get('zjlb') == "抽检" || B[0].get('zjlb') == "免检") {
		if (B[0].get('zjlb') == "免检") {
			var purchases = [];
			Ext.each(B, function(r) {
						purchases.push(r.data);
					});
				Ext.Msg.confirm("系统提示", "此物料为免检，确定生成质检记录表？",
						function(btnText) {
							if (btnText == "yes") {
								Ext.Ajax.request({
									method : "post",
									scope : this,
									url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.inspectshrkshujuyz.biz.ext',
									jsonData : {
										list : purchases
									},
									success : function(response, action) {
										// 返回值处理
										var result = Ext
												.decode(response.responseText);
										if (result.result == "0") {
											Ext.Ajax.request({
												method : "post",
												scope : this,
												url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.savemjInspectzt1.biz.ext',
												jsonData : {
													"Bnote/pkid" : B[0]
															.get('pkid')
												},
												success : function(resp1) {
													var ret1 = Ext
															.decode(resp1.responseText);
													if (ret1.success) {
														Ext.Ajax.request({
															method : "post",
															scope : this,
															url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.newcjInspect.biz.ext',
															success : function(
																	resp) {
																var ret = Ext
																		.decode(resp.responseText);
																if (ret.success) {
																	var cjrecordid = ret.cjrecordid;
																	_this.createWindow.items.items[0].form
																			.findField('cjrecordid')
																			.setValue(cjrecordid);
																	var attachmentParams = {
																		relationId : cjrecordid,
																		groupId : 'cjinspectfile'
																	}
																	Ext
																			.getCmp(_this.cjattachId)
																			.setPostParams(attachmentParams);
																	Ext
																			.getCmp(_this.cjattachId).loadParams = attachmentParams;
																	Ext
																			.getCmp(_this.cjattachId)
																			.loadAttachmentRemote();
																} else {
																	Ext.Msg
																			.alert(
																					'系统提示',
																					'获取公共主键失败');
																}
															}
														}, this);
														_this.createWindow.items.items[0].form
																.findField('lifnr')
																.setValue(B[0]
																		.get('lifnr'));
														_this.createWindow.items.items[0].form
																.findField('zjlb')
																.setValue(B[0]
																		.get('zjlb'));
														_this.createWindow.items.items[0].form
																.findField('name1')
																.setValue(B[0]
																		.get('name1'));
														_this.createWindow.items.items[0].form
																.findField('zasnh')
																.setValue(B[0]
																		.get('zasnh'));
														_this.createWindow.items.items[0].form
																.findField('zasnp')
																.setValue(B[0]
																		.get('zasnp'));
														_this.createWindow.items.items[0].form
																.findField('ebeln')
																.setValue(B[0]
																		.get('ebeln'));
														_this.createWindow.items.items[0].form
																.findField('ebelp')
																.setValue(B[0]
																		.get('ebelp'));
														_this.createWindow.items.items[0].form
																.findField('matnr')
																.setValue(B[0]
																		.get('matnr'));
														_this.createWindow.items.items[0].form
																.findField('txz01')
																.setValue(B[0]
																		.get('txz01'));
														_this.createWindow.items.items[0].form
																.findField('shsl')
																.setValue(B[0]
																		.get('amount'));
														_this.createWindow.items.items[0].form
																.findField('werks')
																.setValue(B[0]
																		.get('werks'));
														_this.createWindow.items.items[0].form
																.findField('pkid')
																.setValue(B[0]
																		.get('pkid'));
														if (Ext.isEmpty(B[0]
																.get('matnr'))) {
															_this.createWindow.items.items[0].wltm.allowBlank = true;
														}
														_this.inspectrceditPanel.store
																.removeAll();
														_this.createWindow
																.show();
														_this.createWindow.items.items[0].wltm.focus(false, 100);
													} else {
														Ext.Msg.alert('系统提示',
																'状态保存异常！');
													}
												}
											});
										} else {
											Ext.Msg.alert("系统提示",
													"该送货单行项目已过账或者已经被删除！");
										}
									}
								});
							}
						})
		} else {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.newcjInspect.biz.ext',
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var cjrecordid = ret.cjrecordid;
						this.createWindow.items.items[0].form
								.findField('cjrecordid').setValue(cjrecordid);
						var attachmentParams = {
							relationId : cjrecordid,
							groupId : 'cjinspectfile'
						}
						Ext.getCmp(_this.cjattachId)
								.setPostParams(attachmentParams);
						Ext.getCmp(_this.cjattachId).loadParams = attachmentParams;
						Ext.getCmp(_this.cjattachId).loadAttachmentRemote();
					} else {
						Ext.Msg.alert('系统提示', '获取公共主键失败');
					}
				}
			}, this);
			this.createWindow.items.items[0].form.findField('lifnr')
					.setValue(B[0].get('lifnr'));
			this.createWindow.items.items[0].form.findField('zjlb')
					.setValue(B[0].get('zjlb'));
			this.createWindow.items.items[0].form.findField('name1')
					.setValue(B[0].get('name1'));
			this.createWindow.items.items[0].form.findField('zasnh')
					.setValue(B[0].get('zasnh'));
			this.createWindow.items.items[0].form.findField('zasnp')
					.setValue(B[0].get('zasnp'));
			this.createWindow.items.items[0].form.findField('ebeln')
					.setValue(B[0].get('ebeln'));
			this.createWindow.items.items[0].form.findField('ebelp')
					.setValue(B[0].get('ebelp'));
			this.createWindow.items.items[0].form.findField('matnr')
					.setValue(B[0].get('matnr'));
			this.createWindow.items.items[0].form.findField('txz01')
					.setValue(B[0].get('txz01'));
			this.createWindow.items.items[0].form.findField('shsl')
					.setValue(B[0].get('amount'));
			this.createWindow.items.items[0].form.findField('werks')
					.setValue(B[0].get('werks'));
			this.createWindow.items.items[0].form.findField('pkid')
					.setValue(B[0].get('pkid'));
			this.inspectrceditPanel.store.removeAll();
			this.createWindow.show();
			Ext.getCmp(this.wltm).focus(false, 100);
		}
	} else if (B[0].get('zjlb') == "全检") {
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.newqjInspect.biz.ext',
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					var qjrecordid = ret.qjrecordid;
					this.qjcreateWindow.items.items[0].form
							.findField('qjrecordid').setValue(qjrecordid);
					var attachmentParams = {
						relationId : qjrecordid,
						groupId : 'qjinspectfile'
					}
					Ext.getCmp(_this.qjattachId)
							.setPostParams(attachmentParams);
					Ext.getCmp(_this.qjattachId).loadParams = attachmentParams;
					Ext.getCmp(_this.qjattachId).loadAttachmentRemote();
				} else {
					Ext.Msg.alert('系统提示', '获取公共主键失败');
				}
			}
		}, this);
		this.qjcreateWindow.items.items[0].form.findField('lifnr')
				.setValue(B[0].get('lifnr'));
		this.qjcreateWindow.items.items[0].form.findField('zjlb').setValue(B[0]
				.get('zjlb'));
		this.qjcreateWindow.items.items[0].form.findField('name1')
				.setValue(B[0].get('name1'));
		this.qjcreateWindow.items.items[0].form.findField('zasnh')
				.setValue(B[0].get('zasnh'));
		this.qjcreateWindow.items.items[0].form.findField('zasnp')
				.setValue(B[0].get('zasnp'));
		this.qjcreateWindow.items.items[0].form.findField('ebeln')
				.setValue(B[0].get('ebeln'));
		this.qjcreateWindow.items.items[0].form.findField('ebelp')
				.setValue(B[0].get('ebelp'));
		this.qjcreateWindow.items.items[0].form.findField('matnr')
				.setValue(B[0].get('matnr'));
		this.qjcreateWindow.items.items[0].form.findField('txz01')
				.setValue(B[0].get('txz01'));
		this.qjcreateWindow.items.items[0].form.findField('werks')
				.setValue(B[0].get('werks'));
		this.qjcreateWindow.items.items[0].form.findField('pkid').setValue(B[0]
				.get('pkid'));
		if (Ext.isEmpty(B[0].get('matnr'))) {
			this.qjcreateWindow.items.items[0].wltm.allowBlank = true;
		}
		this.qjinspectrceditPanel.store.removeAll();
		this.qjcreateWindow.show();
		this.qjcreateWindow.items.items[0].wltm.focus(false, 100);
	}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}
com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onSelect = function() {
	this.inspectrceditPanel.fireEvent("select");
};
com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onqjSelect = function() {
	this.qjinspectrceditPanel.fireEvent("select");
};
com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onDelOperator = function() {
	if (!this.inspectrceditPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		Ext.Msg.confirm("系统提示", "您确定要移除检验项目吗?", function(btnText) {
					if (btnText == "yes") {
						var selOperaotorids = this.inspectrceditPanel.selModel
								.getSelections();
						if (selOperaotorids.length > 0) {
							var vals = [];
							this.inspectrceditPanel.fireEvent("delOperator",
									this, vals);
						}
					}
				}, this);
	}
};
com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onqjDelOperator = function() {
	if (!this.qjinspectrceditPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		Ext.Msg.confirm("系统提示", "您确定要移除检验项目吗?", function(btnText) {
					if (btnText == "yes") {
						var selqjOperaotorids = this.qjinspectrceditPanel.selModel
								.getSelections();
						if (selqjOperaotorids.length > 0) {
							var vals = [];
							this.qjinspectrceditPanel.fireEvent("delOperator",
									this, vals);
						}
					}
				}, this);
	}
};
com.zoomlion.hjsrm.inspect.Inspectrecordcreatemgr.prototype.onSavezcbz2 = function() {
	var _this = this;
	var store = this.rclistPanel.store;
	var records = this.inspectrceditPanel.store.getRange();
	var vals = this.createWindow.items.items[0].form.getValues();
	vals["zcbz"] = "2";
	var detail = [];
	Ext.each(records, function(r) {
				detail.push(r.data);
			});
	var mk = new Ext.LoadMask(this.createWindow.id, {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.addinspectcjnotedetail.biz.ext',
		jsonData : {
			note : vals,
			detail : detail
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				_this.createWindow.hide();
				Ext.Msg.alert("系统提示", "保存成功", function() {
					store.reload();
						// _this.listPanel.getForm().reset();
					});
			}
		},
		failure : function(resp, opts) {
			mk.hide();
		}
	});
}
