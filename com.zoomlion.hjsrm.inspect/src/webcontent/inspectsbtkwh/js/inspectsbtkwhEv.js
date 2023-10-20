/*
 * 
 * 刘鑫--三包不合格品退库记录表维护
 */
com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.queryWindow.destroy();

}
com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.initEvent = function() {
	// this.storeqjlx.load();
	this.storewtsxa.load();
	this.wggzxtstore.load();
	this.wggzjgstore.load();
	// 增加查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		var _this = this;
		var matnr2 = _this.queryPanel.matnr2.getValue();
		var regEx = new RegExp("\\n", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp(",,", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		_this.queryPanel.matnr.setValue(matnr2);
		vals["condition/matnr"] = matnr2;
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
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	// 双击选定
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onQuery();
			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.jyrq) {
					data.jyrq = data.jyrq.split('.')[0];
					var date1 = data.jyrq.replace(regEx, "/");
					this.editWindow.items.items[0].form.findField('jyrq')
							.setValue(new Date(date1));
				}
				var C = this.listPanel.getSelectionModel().getSelections();
				this.editWindow.items.items[0].form.findField('maktx')
						.setValue(C[0].data.maktx);
				this.editWindow.items.items[0].form.findField('lifnr')
						.setValue(C[0].data.name1);
				this.editWindow.items.items[0].form.findField('lifnrx')
						.setValue(C[0].data.lifnr);
			}, this);
	this.queryWindow.activeItem.mon(this.queryWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.jyrq) {
					data.jyrq = data.jyrq.split('.')[0];
					var date1 = data.jyrq.replace(regEx, "/");
					this.queryWindow.items.items[0].form.findField('jyrq')
							.setValue(new Date(date1));
				}
				var C = this.listPanel.getSelectionModel().getSelections();
				this.queryWindow.items.items[0].form.findField('maktx')
						.setValue(C[0].data.maktx);
				this.queryWindow.items.items[0].form.findField('lifnr')
						.setValue(C[0].data.name1);
				this.queryWindow.items.items[0].form.findField('jyy')
						.setValue(C[0].data.jyyname);
				this.queryWindow.items.items[0].form.findField('gzxt')
						.setValue(C[0].data.gzxtname);
				this.queryWindow.items.items[0].form.findField('gzjg')
						.setValue(C[0].data.gzjgname);
				this.queryWindow.items.items[0].form.findField('gzxs')
						.setValue(C[0].data.gzxsname);
			}, this);
	this.storematnr.on({
				scope : this,
				'load' : function(store, records, opt) {
					if (records.length == 0) {
						this.inputWindow.items.items[0].maktx.setValue();
						this.inputWindow.items.items[0].gzxt.setValue();
						this.inputWindow.items.items[0].gzjg.setValue();
						this.inputWindow.items.items[0].gzxs.setValue();
					} else {
						this.wggzjgstore.load();
						this.inputWindow.items.items[0].maktx
								.setValue(records[0].get('maktx'));
						this.inputWindow.items.items[0].gzxt
								.setValue(records[0].get('gzxt'));
						this.inputWindow.items.items[0].gzjg
								.setValue(records[0].get('gzjg'));
					}
				}

			});
	this.selectlifnrWin.mon(this.selectlifnrWin, 'callback', function(val1,
					val2) {
				this.inputWindow.items.items[0].lifnr.setValue(val2);
				this.inputWindow.items.items[0].lifnrx.setValue(val1);
			}, this);
	this.selectlifnreditWin.mon(this.selectlifnreditWin, 'callback', function(
					val1, val2) {
				this.editWindow.items.items[0].lifnr.setValue(val2);
				this.editWindow.items.items[0].lifnrx.setValue(val1);
			}, this);
	com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.onaddOk = function() {
		var _this = this;
		this.inputWindow.items.items[0].maktx.focus(false, 100);
		var store = this.listPanel.store;
		var vals = this.inputWindow.items.items[0].form.getValues();
		var gzxt = this.inputWindow.items.items[0].gzxt.getValue();
		var gzjg = this.inputWindow.items.items[0].gzjg.getValue();
		var gzxs = this.inputWindow.items.items[0].gzxs.getValue();
		var gzxtname = this.inputWindow.items.items[0].gzxt.getRawValue();
		var gzjgname = this.inputWindow.items.items[0].gzjg.getRawValue();
		var gzxsname = this.inputWindow.items.items[0].gzxs.getRawValue();
		var zatwrt = this.inputWindow.items.items[0].zatwrt.getValue();
		vals["gzxt"] = gzxt;
		vals["gzjg"] = gzjg;
		vals["gzxs"] = gzxs;
		vals["gzxtname"] = gzxtname;
		vals["gzjgname"] = gzjgname;
		vals["gzxsname"] = gzxsname;
/*		if (!this.inputWindow.items.items[0].form.isValid()) {
			return;
		}*///因为写了校验监听事件，不能前台校验了只能后台校验了
		if (!this.inputWindow.items.items[0].werks.isValid()) {
			return;
		}
		if (!this.inputWindow.items.items[0].tkdh.isValid()) {
			return;
		}
		if (!this.inputWindow.items.items[0].lifnr.isValid()) {
			return;
		}
		if (!this.inputWindow.items.items[0].tksl.isValid()) {
			return;
		}
		if (!this.inputWindow.items.items[0].clyj.isValid()) {
			return;
		}
		if (!this.inputWindow.items.items[0].jyy.isValid()) {
			return;
		}
		if (!this.inputWindow.items.items[0].jyrq.isValid()) {
			return;
		}
		if (!this.inputWindow.items.items[0].gzxt.isValid()) {
			return;
		}
		if (!this.inputWindow.items.items[0].gzjg.isValid()) {
			return;
		}
		if (!this.inputWindow.items.items[0].gzxs.isValid()) {
			return;
		}
		var mk = new Ext.LoadMask(this.inputWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		if (Ext.isEmpty(zatwrt)) {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.addinspectsbtknote.biz.ext',
				jsonData : {
					note : vals
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						_this.inputWindow.hide();
						store.reload();
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});
		} else {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.queryjysbtkzatwrt.biz.ext',
				jsonData : {
					"condition/zatwrt" : zatwrt
				},
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						if (result.res == "1") {
							Ext.Ajax.request({
								method : "post",
								scope : this,
								url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.addinspectsbtknote.biz.ext',
								jsonData : {
									note : vals
								},
								success : function(response, action) {
									mk.hide();
									// 返回值处理
									var result = Ext
											.decode(response.responseText);
									if (result.success) {
										_this.inputWindow.hide();
										store.reload();
									}
								},
								failure : function(resp, opts) {
									mk.hide();
								}
							});
						} else if (result.res == "0") {
							mk.hide();
							Ext.Msg.confirm("系统提示", "您输入的出厂编号有误,是否继续保存！",
									function(btnText) {
										if (btnText == "yes") {
											Ext.Ajax.request({
												method : "post",
												scope : this,
												url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.addinspectsbtknote.biz.ext',
												jsonData : {
													note : vals
												},
												success : function(response,
														action) {
													
													// 返回值处理
													var result = Ext
															.decode(response.responseText);
													if (result.success) {
														_this.inputWindow
																.hide();
														store.reload();
													}
												},
												failure : function(resp, opts) {
													
												}
											});
										}
									})
						}
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});
		}
	};
	com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.onsaveOk = function() {
		var _this = this;
		this.editWindow.items.items[0].maktx.focus(false, 100);
		var store = this.listPanel.store;
		var vals = this.editWindow.items.items[0].form.getValues();
		var gzxt = this.editWindow.items.items[0].gzxt.getValue();
		var gzjg = this.editWindow.items.items[0].gzjg.getValue();
		var gzxs = this.editWindow.items.items[0].gzxs.getValue();
		var gzxtname = this.editWindow.items.items[0].gzxt.getRawValue();
		var gzjgname = this.editWindow.items.items[0].gzjg.getRawValue();
		var gzxsname = this.editWindow.items.items[0].gzxs.getRawValue();
		var zatwrt = this.editWindow.items.items[0].zatwrt.getValue();
		vals["gzxt"] = gzxt;
		vals["gzjg"] = gzjg;
		vals["gzxs"] = gzxs;
		vals["gzxtname"] = gzxtname;
		vals["gzjgname"] = gzjgname;
		vals["gzxsname"] = gzxsname;
		/*if (!this.editWindow.items.items[0].form.isValid()) {
			return;
		}*/
		if (!this.editWindow.items.items[0].werks.isValid()) {
			return;
		}
		if (!this.editWindow.items.items[0].tkdh.isValid()) {
			return;
		}
		if (!this.editWindow.items.items[0].lifnr.isValid()) {
			return;
		}
		if (!this.editWindow.items.items[0].tksl.isValid()) {
			return;
		}
		if (!this.editWindow.items.items[0].clyj.isValid()) {
			return;
		}
		if (!this.editWindow.items.items[0].jyy.isValid()) {
			return;
		}
		if (!this.editWindow.items.items[0].jyrq.isValid()) {
			return;
		}
		if (!this.editWindow.items.items[0].gzxt.isValid()) {
			return;
		}
		if (!this.editWindow.items.items[0].gzjg.isValid()) {
			return;
		}
		if (!this.editWindow.items.items[0].gzxs.isValid()) {
			return;
		}
		var mk = new Ext.LoadMask(this.editWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		if (Ext.isEmpty(zatwrt)) {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.saveinspectsbtknote.biz.ext',
				jsonData : {
					note : vals
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						_this.editWindow.hide();
						store.reload();
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});
		} else {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.queryjysbtkzatwrt.biz.ext',
				jsonData :{
					"condition/zatwrt" : zatwrt
				},
				success : function(response, action) {
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						if (result.res == "1") {
							Ext.Ajax.request({
								method : "post",
								scope : this,
								url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.saveinspectsbtknote.biz.ext',
								jsonData : {
									note : vals
								},
								success : function(response, action) {
									mk.hide();
									// 返回值处理
									var result = Ext
											.decode(response.responseText);
									if (result.success) {
										_this.editWindow.hide();
										store.reload();
									}
								},
								failure : function(resp, opts) {
									mk.hide();
								}
							});
						} else if (result.res == "0") {
							mk.hide();
							Ext.Msg.confirm("系统提示", "您输入的出厂编号有误,是否继续保存！",
									function(btnText) {
										if (btnText == "yes") {
											Ext.Ajax.request({
												method : "post",
												scope : this,
												url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.saveinspectsbtknote.biz.ext',
												jsonData : {
													note : vals
												},
												success : function(response,
														action) {
													mk.hide();
													// 返回值处理
													var result = Ext
															.decode(response.responseText);
													if (result.success) {
														_this.editWindow.hide();
														store.reload();
													}
												},
												failure : function(resp, opts) {
													mk.hide();
												}
											});
										}
									})
						}
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});
		}

	};
};
/*
 * 新增方法
 */
com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.onAdd = function() {
	this.inputWindow.show();
};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.onEdit = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B.length == 1) {
		this.wggzjgstore.load({
					params : {
						"condition/psid" : B[0].get('gzxt')
					}
				});
		this.storewtsx.load({
					params : {
						"condition/sid" : B[0].get('gzjg'),
						"condition/matnr" : B[0].get('matnr')
					}
				});
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "请选择一条数据行!");
		return
	}
};
com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.onQuery = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var record = new Ext.data.Record();
			record.set('sbtkno', B[0].get('sbtkno'));
			this.queryWindow.items.items[0].loadData(record);
			this.queryWindow.show();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};
com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.chooselifnr = function() {
	var B = this.inputWindow.items.items[0].matnr.getValue()
	if (Ext.isEmpty(B)) {
		Ext.Msg.alert("系统提示", "请先输入物料编码");
	} else {
		this.selectlifnrWin.show();
	}
}
com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.chooselifnredit = function() {
	var B = this.editWindow.items.items[0].matnr.getValue()
	if (Ext.isEmpty(B)) {
		Ext.Msg.alert("系统提示", "请先输入物料编码");
	} else {
		this.selectlifnreditWin.show();
	}
}

com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.zoomlion.hjsrm.inspect.InspectsbtkwhMgr.prototype.onExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	var matnr2 = _this.queryPanel.matnr2.getValue();
	var regEx = new RegExp("\\n", "gi");
	matnr2 = matnr2.replace(regEx, ",");
	var regEx = new RegExp("\\s", "gi");
	matnr2 = matnr2.replace(regEx, ",");
	var regEx = new RegExp(",,", "gi");
	matnr2 = matnr2.replace(regEx, ",");
	_this.queryPanel.matnr.setValue(matnr2);
	daochu["condition/matnr"] = matnr2;
	var templatename = "SbtkMgr.xls";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.queryinspectsbtknotedaochu.biz.ext',
		jsonData : daochu,
		success : function(response, action) {
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcel.biz.ext',
					jsonData : {
						excels : result.data,
						templatename : templatename
					},
					success : function(response, action) {
						this.requestMask.hide();
						// 返回值处理
						var res = Ext.decode(response.responseText);
						if (res.success) {
							var fname = res.fname;
							window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
									+ fname;
						}
					},
					failure : function(resp, opts) {
						this.requestMask.hide();
					}
				});
			}
		}
	});

}