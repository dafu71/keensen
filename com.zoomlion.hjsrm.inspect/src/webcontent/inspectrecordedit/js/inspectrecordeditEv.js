com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.destroy = function() {
	this.inspectcjzceditPanel.destroy();
	this.inspectcjbceditPanel.destroy();
	this.inspectqjzceditPanel.destroy();
	this.inspectqjbceditPanel.destroy();
	this.cjeditWindow.destroy();
	this.qjeditWindow.destroy();
	this.cjbceditWindow.destroy();
	this.qjbceditWindow.destroy();
	this.operatorListPanel.destroy();
	this.qjoperatorListPanel.destroy();
	this.popWindow.destroy();
	this.qjpopWindow.destroy();
}
com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.initEvent = function() {
	this.inspectcjzceditPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);
	this.inspectqjzceditPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.recb = r;
				}).defer(100);
			}, this);
	// 增加查询事件
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

	this.cjeditWindow.items.items[0].mon(this.cjeditWindow.items.items[0],
			'afterload', function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.createtime) {
					data.createtime = data.createtime.split('.')[0];
					var date1 = data.createtime.replace(regEx, "/");
					this.cjeditWindow.items.items[0].form
							.findField('createtime').setValue(new Date(date1));
				}
			}, this);
	this.qjeditWindow.items.items[0].mon(this.qjeditWindow.items.items[0],
			'afterload', function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.createtime) {
					data.createtime = data.createtime.split('.')[0];
					var date1 = data.createtime.replace(regEx, "/");
					this.qjeditWindow.items.items[0].form
							.findField('createtime').setValue(new Date(date1));
				}
			}, this);

	this.cjbceditWindow.items.items[0].mon(this.cjbceditWindow.items.items[0],
			'afterload', function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.createtime) {
					data.createtime = data.createtime.split('.')[0];
					var date1 = data.createtime.replace(regEx, "/");
					this.cjbceditWindow.items.items[0].form
							.findField('createtime').setValue(new Date(date1));
				}
			}, this);
	this.qjbceditWindow.items.items[0].mon(this.qjbceditWindow.items.items[0],
			'afterload', function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.createtime) {
					data.createtime = data.createtime.split('.')[0];
					var date1 = data.createtime.replace(regEx, "/");
					this.qjbceditWindow.items.items[0].form
							.findField('createtime').setValue(new Date(date1));
				}
			}, this);
	com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onsaveOk = function() {
		var _this = this;
		var store = this.listPanel.store;
		var records = this.inspectcjzceditPanel.store.getRange();
		if (!this.cjeditWindow.items.items[0].form.isValid()) {
			return;
		}
		if (records.length == 0
				&& this.cjeditWindow.items.items[0].form.findField('bhgsl')
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
		if (this.cjeditWindow.items.items[0].form.findField('zjlb').getValue() == "免检") {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.savemjInspectztxx2.biz.ext',
				jsonData : {
					"Bnote/zasnh" : this.cjeditWindow.items.items[0].form
							.findField('zasnh').getValue(),
					"Bnote/zasnp" : this.cjeditWindow.items.items[0].form
							.findField('zasnp').getValue()
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

	com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onqjsaveOk = function() {
		var _this = this;
		var store = this.listPanel.store;
		var records = this.inspectqjzceditPanel.store.getRange();
		if (!this.qjeditWindow.items.items[0].form.isValid()) {
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
		var vals = this.qjeditWindow.items.items[0].form.getValues();
		vals["zcbz"] = "2";
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		var mk = new Ext.LoadMask(this.qjeditWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.saveinspectqjnotedetail.biz.ext',
			jsonData : {
				note : vals,
				detail : detail
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					_this.qjeditWindow.hide();
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
	com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onzssaveOk = function() {
		var _this = this;
		var store = this.listPanel.store;
		var records = this.inspectcjzceditPanel.store.getRange();
		var vals = this.cjeditWindow.items.items[0].form.getValues();
		vals["zcbz"] = "1";
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		var mk = new Ext.LoadMask(this.cjeditWindow.id, {
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
					_this.cjeditWindow.hide();
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
	com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onqjzssaveOk = function() {
		var _this = this;
		var store = this.listPanel.store;
		var records = this.inspectqjzceditPanel.store.getRange();
		var vals = this.qjeditWindow.items.items[0].form.getValues();
		vals["zcbz"] = "1";
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		var mk = new Ext.LoadMask(this.qjeditWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.saveinspectqjnotedetail.biz.ext',
			jsonData : {
				note : vals,
				detail : detail
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					_this.qjeditWindow.hide();
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
	com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.jcsd = function() {
		var _this = this;
		Ext.Msg.confirm("系统提示", "撤销确认将影响过账，是否撤销?", function(btnText) {
			if (btnText == "yes") {
				var store = this.listPanel.store;
				var vals = this.cjbceditWindow.items.items[0].form.getValues();
				vals["zcbz"] = "1";
				var mk = new Ext.LoadMask(this.cjbceditWindow.id, {
							msg : '正在撤销，请稍候!',
							removeMask : true
						});
				mk.show();
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkshujuyichangyz.biz.ext',
					jsonData : {
						list : vals
					},
					success : function(response, action) {
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.result == "0") {
							Ext.Ajax.request({
								method : "post",
								scope : this,
								url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.jiesuocjbzrecord.biz.ext',
								jsonData : {
									note : vals
								},
								success : function(response, action) {
									mk.hide();
									// 返回值处理
									var result = Ext
											.decode(response.responseText);
									if (result.success) {
										Ext.Msg.alert("系统提示", "撤销成功",
												function() {
													var t = _this.cjbceditWindow.items.items[0].form
															.findField('cjrecordid')
															.getValue()

													store.reload();
													_this.cjbceditWindow.hide();
													_this.inspectcjbceditPanel.store
															.removeAll();
													_this.inspectcjzceditPanel.store
															.removeAll();
													var record = new Ext.data.Record();
													record.set('cjrecordid', t);
													_this.cjeditWindow.items.items[0]
															.loadData(record);
													var attachmentParams = {
														relationId : t,
														groupId : 'cjinspectfile'
													};
													Ext
															.getCmp(_this.cjzcattachId)
															.setPostParams(attachmentParams);
													Ext
															.getCmp(_this.cjzcattachId).loadParams = attachmentParams;
													Ext
															.getCmp(_this.cjzcattachId)
															.loadAttachmentRemote();

													_this.inspectcjzceditPanel.store
															.load({
																params : {
																	"condition/cjrecordid" : t
																}
															});
													_this.cjeditWindow.show();
												});
									}
								},
								failure : function(resp, opts) {
									mk.hide();
								}
							})
						} else {
							Ext.Msg.alert("系统提示", "该送货单行项目已经过账，不允许撤销！");
							mk.hide();
						}
					},
					failure : function(response, opts) {
						mk.hide();
					}
				})
			}
		}, this);
	};
	com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.qjjcsd = function() {
		var _this = this;
		Ext.Msg.confirm("系统提示", "撤销确认将影响过账，是否撤销?", function(btnText) {
			if (btnText == "yes") {
				var store = this.listPanel.store;
				var vals = this.qjbceditWindow.items.items[0].form.getValues();
				vals["zcbz"] = "1";
				var mk = new Ext.LoadMask(this.qjbceditWindow.id, {
							msg : '正在撤销，请稍候!',
							removeMask : true
						});
				mk.show();
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.shrkshujuyichangyz.biz.ext',
					jsonData : {
						list : vals
					},
					success : function(response, action) {
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.result == "0") {
							Ext.Ajax.request({
								method : "post",
								scope : this,
								url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.jiesuoqjbzrecord.biz.ext',
								jsonData : {
									note : vals
								},
								success : function(response, action) {
									mk.hide();
									// 返回值处理
									var result = Ext
											.decode(response.responseText);
									if (result.success) {
										Ext.Msg.alert("系统提示", "撤销成功",
												function() {
													var t = _this.qjbceditWindow.items.items[0].form
															.findField('qjrecordid')
															.getValue()

													store.reload();
													_this.qjbceditWindow.hide();
													_this.inspectqjbceditPanel.store
															.removeAll();
													_this.inspectqjzceditPanel.store
															.removeAll();
													var record = new Ext.data.Record();
													record.set('qjrecordid', t);
													_this.qjeditWindow.items.items[0]
															.loadData(record);
													var attachmentParams = {
														relationId : t,
														groupId : 'qjinspectfile'
													};
													Ext
															.getCmp(_this.qjzcattachId)
															.setPostParams(attachmentParams);
													Ext
															.getCmp(_this.qjzcattachId).loadParams = attachmentParams;
													Ext
															.getCmp(_this.qjzcattachId)
															.loadAttachmentRemote();

													_this.inspectqjzceditPanel.store
															.load({
																params : {
																	"condition/qjrecordid" : t
																}
															});
													_this.qjeditWindow.show();
												});
									}
								},
								failure : function(resp, opts) {
									mk.hide();
								}
							});
						} else {
							Ext.Msg.alert("系统提示", "该送货单行项目已经过账，不允许撤销！");
							mk.hide();
						}
					},
					failure : function(response, opts) {
						mk.hide();
					}
				})
			}
		}, this);
	};
	this.inspectcjzceditPanel.mon(this.inspectcjzceditPanel, 'select',
			function() {
				this.operatorListPanel.store.removeAll();
				this.popWindow.show();

			}, this);
	this.inspectqjzceditPanel.mon(this.inspectqjzceditPanel, 'select',
			function() {
				this.qjoperatorListPanel.store.removeAll();
				this.qjpopWindow.show();

			}, this);
	// 删除检查项目事件
	this.inspectcjzceditPanel.mon(this.inspectcjzceditPanel, 'delOperator',
			function(grid, vals) {
				var mk = new Ext.LoadMask(document.body, {
							msg : '后台正在操作，请稍候！',
							removeMask : true
						});
				mk.show();
				var rs1 = grid.inspectcjzceditPanel.getSelectionModel()
						.getSelections();
				for (var i = 0; i < rs1.length; i++) {
					if (!Ext.isEmpty(rs1[i].get('pkid'))) {
						Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.delinspectcjdetail.biz.ext',
							jsonData : {
								"condition/pkid" : rs1[i].get('pkid')
							},
							success : function(response, action) {
								mk.hide();
								// 返回值处理
								var result = Ext.decode(response.responseText);
								if (result.success) {
									_this.cjeditWindow.hide();
									Ext.Msg.alert("系统提示", "删除成功", function() {
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
				}
				grid.inspectcjzceditPanel.store.remove(rs1);
				mk.hide();
			}, this);
	this.inspectqjzceditPanel.mon(this.inspectqjzceditPanel, 'delOperator',
			function(grid, vals) {
				var mk = new Ext.LoadMask(document.body, {
							msg : '后台正在操作，请稍候！',
							removeMask : true
						});
				mk.show();
				var rs1 = grid.inspectqjzceditPanel.getSelectionModel()
						.getSelections();
				for (var i = 0; i < rs1.length; i++) {
					if (!Ext.isEmpty(rs1[i].get('pkid'))) {
						Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.delinspectqjdetail.biz.ext',
							jsonData : {
								"condition/pkid" : rs1[i].get('pkid')
							},
							success : function(response, action) {
								mk.hide();
								// 返回值处理
								var result = Ext.decode(response.responseText);
								if (result.success) {
									_this.qjeditWindow.hide();
									Ext.Msg.alert("系统提示", "删除成功", function() {
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
				}
				grid.inspectqjzceditPanel.store.remove(rs1);
				mk.hide();
			}, this);

	// 选择检查项目，添加到检查列表
	this.popWindow.mon(this.popWindow, 'addOperator', function(selections) {
		if (selections.length > 0) {
			grid = this.inspectcjzceditPanel;
			win = this.popWindow;
			var store = this.inspectcjzceditPanel.store;
			var vals = [];
			for (var i = 0; i < selections.length; i++) {
				var flag = true;
				store.each(function(r) {
					if (flag && (r.data.zjwtid == selections[i].get('zjwtid'))) {
						flag = false;
					}
				}, this);

				if (flag) {
					Ext.each(selections[i], function(record) {
								store.add(record);
							}, this)
				}
			}
			this.popWindow.hide();
		} else {
			Ext.Msg.alert('提示', '未选择记录,不能保存,请选择至少一条记录')
		}
	}, this);
	this.qjpopWindow.mon(this.qjpopWindow, 'addOperator', function(selections) {
				if (selections.length > 0) {
					grid = this.inspectqjzceditPanel;
					win = this.qjpopWindow;
					var store = this.inspectqjzceditPanel.store;
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
							Ext.each(selections[i], function(record) {
										store.add(record);
									}, this)
						}
					}
					this.qjpopWindow.hide();
				} else {
					Ext.Msg.alert('提示', '未选择记录,不能保存,请选择至少一条记录')
				}
			}, this);
}
com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onedit = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else if (B[0].get('tranu') != useid) {
			Ext.Msg.alert("系统提示", "您只能对您生成的数据进行维护!");
			return
		} else if (B[0].get('zjlb') == "抽检" || B[0].get('zjlb') == "免检") {
			if (B[0].get('zcbz') == "1") {
				var record = new Ext.data.Record();
				record.set('cjrecordid', B[0].get('recordid'));
				this.cjeditWindow.items.items[0].loadData(record);
				var attachmentParams = {
					relationId : B[0].get('recordid'),
					groupId : 'cjinspectfile'
				};
				Ext.getCmp(this.cjzcattachId).setPostParams(attachmentParams);
				Ext.getCmp(this.cjzcattachId).loadParams = attachmentParams;
				Ext.getCmp(this.cjzcattachId).loadAttachmentRemote();
				this.cjeditWindow.show();
				this.inspectcjzceditPanel.store.load({
							params : {
								"condition/cjrecordid" : B[0].get('recordid')
							}
						});
			} else if (B[0].get('zcbz') == "2") {
				var record = new Ext.data.Record();
				record.set('cjrecordid', B[0].get('recordid'));
				this.cjbceditWindow.items.items[0].loadData(record);
				var attachmentParams = {
					relationId : B[0].get('recordid'),
					groupId : 'cjinspectfile'
				};
				Ext.getCmp(this.cjbcattachId).setPostParams(attachmentParams);
				Ext.getCmp(this.cjbcattachId).loadParams = attachmentParams;
				Ext.getCmp(this.cjbcattachId).loadAttachmentRemote();
				this.cjbceditWindow.show();
				this.cjbceditWindow.jcsd.show();
				this.inspectcjbceditPanel.store.load({
							params : {
								"condition/cjrecordid" : B[0].get('recordid')
							}
						});
			}
		} else if (B[0].get('zjlb') == "全检") {
			if (B[0].get('zcbz') == "1") {
				var record = new Ext.data.Record();
				record.set('qjrecordid', B[0].get('recordid'));
				this.qjeditWindow.items.items[0].loadData(record);
				var attachmentParams = {
					relationId : B[0].get('recordid'),
					groupId : 'qjinspectfile'
				};
				Ext.getCmp(this.qjzcattachId).setPostParams(attachmentParams);
				Ext.getCmp(this.qjzcattachId).loadParams = attachmentParams;
				Ext.getCmp(this.qjzcattachId).loadAttachmentRemote();
				this.qjeditWindow.show();
				this.inspectqjzceditPanel.store.load({
							params : {
								"condition/qjrecordid" : B[0].get('recordid')
							}
						});
			} else if (B[0].get('zcbz') == "2") {
				var record = new Ext.data.Record();
				record.set('qjrecordid', B[0].get('recordid'));
				this.qjbceditWindow.items.items[0].loadData(record);
				var attachmentParams = {
					relationId : B[0].get('recordid'),
					groupId : 'qjinspectfile'
				};
				Ext.getCmp(this.qjbcattachId).setPostParams(attachmentParams);
				Ext.getCmp(this.qjbcattachId).loadParams = attachmentParams;
				Ext.getCmp(this.qjbcattachId).loadAttachmentRemote();
				this.qjbceditWindow.show();
				this.qjbceditWindow.qjjcsd.show();
				this.inspectqjbceditPanel.store.load({
							params : {
								"condition/qjrecordid" : B[0].get('recordid')
							}
						});
			}
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}
com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onquery = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else if (B[0].get('zjlb') == "抽检" || B[0].get('zjlb') == "免检") {
			var record = new Ext.data.Record();
			record.set('cjrecordid', B[0].get('recordid'));
			this.cjbceditWindow.items.items[0].loadData(record);
			var attachmentParams = {
				relationId : B[0].get('recordid'),
				groupId : 'cjinspectfile'
			};
			Ext.getCmp(this.cjbcattachId).setPostParams(attachmentParams);
			Ext.getCmp(this.cjbcattachId).loadParams = attachmentParams;
			Ext.getCmp(this.cjbcattachId).loadAttachmentRemote();
			this.cjbceditWindow.jcsd.hide();
			this.cjbceditWindow.show();
			this.inspectcjbceditPanel.store.load({
						params : {
							"condition/cjrecordid" : B[0].get('recordid')
						}
					});
		} else if (B[0].get('zjlb') == "全检") {
			var record = new Ext.data.Record();
			record.set('qjrecordid', B[0].get('recordid'));
			this.qjbceditWindow.items.items[0].loadData(record);
			var attachmentParams = {
				relationId : B[0].get('recordid'),
				groupId : 'qjinspectfile'
			};
			Ext.getCmp(this.qjbcattachId).setPostParams(attachmentParams);
			Ext.getCmp(this.qjbcattachId).loadParams = attachmentParams;
			Ext.getCmp(this.qjbcattachId).loadAttachmentRemote();
			this.qjbceditWindow.qjjcsd.hide();
			this.qjbceditWindow.show();
			this.inspectqjbceditPanel.store.load({
						params : {
							"condition/qjrecordid" : B[0].get('recordid')
						}
					});
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.ondel = function() {
	var _this = this;
	var store = this.listPanel.store;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else if (B[0].get('tranu') != useid) {
			Ext.Msg.alert("系统提示", "您只能对您生成的数据进行删除!");
			return
		} else if (B[0].get('zcbz') == '2') {
			Ext.Msg.alert("系统提示", "已确认不允许删除,请撤销确认后删除！");
			return
		} else if (B[0].get('zjlb') == "抽检" || B[0].get('zjlb') == "免检") {
			Ext.Msg.confirm("系统提示", "是否确定删除?", function(btnText) {
				if (btnText == "yes") {
					var mk = new Ext.LoadMask(_this.listPanel.id, {
								msg : '正在进行删除操作，请稍候！',
								removeMask : true
							});
					mk.show();
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.delinspectcjnotedetail.biz.ext',
						jsonData : {
							"condition/cjrecordid" : B[0].get('recordid'),
							"condition/zjlb" : B[0].get('zjlb'),
							"condition/zasnh" : B[0].get('zasnh'),
							"condition/zasnp" : B[0].get('zasnp')
						},
						success : function(response, action) {
							mk.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
								Ext.Msg.alert("系统提示", "删除成功", function() {
											store.reload();
										});
							}
						},
						failure : function(resp, opts) {
							mk.hide();
						}
					});
				}
			})
		} else if (B[0].get('zjlb') == "全检") {
			Ext.Msg.confirm("系统提示", "是否确定删除?", function(btnText) {
				if (btnText == "yes") {
					var mk = new Ext.LoadMask(_this.listPanel.id, {
								msg : '正在进行删除操作，请稍候！',
								removeMask : true
							});
					mk.show();
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.delinspectqjnotedetail.biz.ext',
						jsonData : {
							"condition/qjrecordid" : B[0].get('recordid')
						},
						success : function(response, action) {
							mk.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
								Ext.Msg.alert("系统提示", "删除成功", function() {
											store.reload();
										});
							}
						},
						failure : function(resp, opts) {
							mk.hide();
						}
					});
				}
			})
		} else {
			Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
		}
	}
}
com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onSelect = function() {
	this.inspectcjzceditPanel.fireEvent("select");
};
com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onqjSelect = function() {
	this.inspectqjzceditPanel.fireEvent("select");
};
com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onDelOperator = function() {
	if (!this.inspectcjzceditPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		Ext.Msg.confirm("系统提示", "您确定要移除检验项目吗?", function(btnText) {
					if (btnText == "yes") {
						var selOperaotorids = this.inspectcjzceditPanel.selModel
								.getSelections();
						if (selOperaotorids.length > 0) {
							var vals = [];
							this.inspectcjzceditPanel.fireEvent("delOperator",
									this, vals);
						}
					}
				}, this);
	}
};
com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onqjDelOperator = function() {
	if (!this.inspectqjzceditPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		Ext.Msg.confirm("系统提示", "您确定要移除检验项目吗?", function(btnText) {
					if (btnText == "yes") {
						var selqjOperaotorids = this.inspectqjzceditPanel.selModel
								.getSelections();
						if (selqjOperaotorids.length > 0) {
							var vals = [];
							this.inspectqjzceditPanel.fireEvent("delOperator",
									this, vals);
						}
					}
				}, this);
	}
};
com.zoomlion.hjsrm.inspect.Inspectrecordeditmgr.prototype.onSavezcbz2 = function() {
	var _this = this;
	var store = this.listPanel.store;
	var records = this.inspectcjzceditPanel.store.getRange();
	var vals = this.cjeditWindow.items.items[0].form.getValues();
	vals["zcbz"] = "2";
	var detail = [];
	Ext.each(records, function(r) {
				detail.push(r.data);
			});
	var mk = new Ext.LoadMask(this.cjeditWindow.id, {
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
				_this.cjeditWindow.hide();
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
