/*
 * 时隔半年SRM 刘鑫--外协来料检验记录表维护
 */

com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.queryWindow.destroy();

}
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.initEvent = function() {
	// this.storematnr.load();
	this.storeqjlx.load();
	this.storewtsxa.load();
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
					this.editWindow.items.items[0].form
							.findField('jyrq')
							.setValue(new Date(date1));
				}
				var C = this.listPanel.getSelectionModel().getSelections();
				this.editWindow.items.items[0].form
							.findField('maktx')
							.setValue(C[0].data.maktx);
				this.editWindow.items.items[0].form
							.findField('lifnr')
							.setValue(C[0].data.name1);
				this.editWindow.items.items[0].form
							.findField('lifnrx')
							.setValue(C[0].data.lifnr);
			   this.editeditPanel.store.load({
							params : {
								"condition/wxllno" : C[0].data.wxllno
							}
						});
			}, this);
	this.queryWindow.activeItem.mon(this.queryWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.jyrq) {
					data.jyrq = data.jyrq.split('.')[0];
					var date1 = data.jyrq.replace(regEx, "/");
					this.queryWindow.items.items[0].form
							.findField('jyrq')
							.setValue(new Date(date1));
				}
				var C = this.listPanel.getSelectionModel().getSelections();
				this.queryWindow.items.items[0].form
							.findField('maktx')
							.setValue(C[0].data.maktx);
				this.queryWindow.items.items[0].form
							.findField('lifnr')
							.setValue(C[0].data.name1);
				this.queryWindow.items.items[0].form
							.findField('jyy')
							.setValue(C[0].data.empname);
			}, this);
	this.storematnr.on({
				scope : this,
				'load' : function(store, records, opt) {
					if (records.length == 0) {
						this.inputWindow.items.items[0].maktx.setValue();
						//this.inputWindow.items.items[0].lifnr.setValue();
					} else {
						this.inputWindow.items.items[0].maktx
								.setValue(records[0].get('maktx'));
						this.inputWindow.items.items[0].dxjlb
								.setValue(records[0].get('dxjlb'));
						//this.inputWindow.items.items[0].lifnr.setValue();
					}
				}

			});

	this.storezjlb.on({
				scope : this,
				'load' : function(store, records, opt) {
					if (records.length != 0) {
						this.inputWindow.items.items[0].zjlb
								.setValue(records[0].get('zjlb'));
					}
				}

			});
     this.storezjlbedit.on({
				scope : this,
				'load' : function(store, records, opt) {
					if (records.length != 0) {
						this.editWindow.items.items[0].zjlb
								.setValue(records[0].get('zjlb'));
					}
				}

			});
	this.selectlifnrWin.mon(this.selectlifnrWin, 'callback', function(val1,
			val2) {
		this.inputWindow.items.items[0].lifnr.setValue(val2);
		this.inputWindow.items.items[0].lifnrx.setValue(val1);
		this.storezjlb.load({
					params : {
						"condition/matnr" : this.inputWindow.items.items[0].matnr
								.getValue(),
						"condition/lifnr" : val1
					}
				});
	}, this);
	this.selectlifnreditWin.mon(this.selectlifnreditWin, 'callback', function(val1,
			val2) {
		this.editWindow.items.items[0].lifnr.setValue(val2);
		this.editWindow.items.items[0].lifnrx.setValue(val1);
		this.storezjlbedit.load({
					params : {
						"condition/matnr" : this.editWindow.items.items[0].matnr
								.getValue(),
						"condition/lifnr" : val1
					}
				});
	}, this);
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onaddOk = function() {
		var _this = this;
		this.inputWindow.items.items[0].text.focus(false,100);
		var store = this.listPanel.store;
		var records = this.listeditPanel.store.getRange();
		var vals = this.inputWindow.items.items[0].form.getValues();
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		for (var i = 0; i < detail.length; i++) {
			if (Ext.isEmpty(detail[i].qxlx)
						|| Ext.isEmpty(detail[i].wtsx)
						|| Ext.isEmpty(detail[i].gzdj)) {
				Ext.Msg.alert('提示', '请录入完整数据后再进行保存！')
				return false;
			}
		}
		if (!this.inputWindow.items.items[0].form.isValid()) {
			return;
		}
		var mk = new Ext.LoadMask(this.inputWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.addinspectwxlljynotedetail.biz.ext',
			jsonData : {
				note : vals,
				detail : detail
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
	};
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onsaveOk = function() {
		var _this = this;
		this.editWindow.items.items[0].text.focus(false,100);
		var store = this.listPanel.store;
		var records = this.editeditPanel.store.getRange();
		var vals = this.editWindow.items.items[0].form.getValues();
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		for (var i = 0; i < detail.length; i++) {
			if (Ext.isEmpty(detail[i].qxlx)
						|| Ext.isEmpty(detail[i].wtsx)
						|| Ext.isEmpty(detail[i].gzdj)) {
				Ext.Msg.alert('提示', '请录入完整数据后再进行保存！')
				return false;
			}
		}
		if (!this.editWindow.items.items[0].form.isValid()) {
			return;
		}
		var mk = new Ext.LoadMask(this.editWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.saveinspectwxlljynotedetail.biz.ext',
			jsonData : {
				note : vals,
				detail : detail
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
	};
};
/*
 * 新增方法
 */
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onAdd = function() {
	this.inputWindow.show();
	/*this.inputWindow.items.items[0].jyjl.setValue('合格');*/
	/*this.inputWindow.items.items[0].clyj.setValue('合格');*/
	this.listeditPanel.store.removeAll();
};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onQuery = function() {
var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		}else{
			var record = new Ext.data.Record();
			record.set('wxllno', B[0].get('wxllno'));
			this.queryWindow.items.items[0].loadData(record);
			this.queryWindow.show();
			this.queryeditPanel.store.load({
						params : {
							"condition/wxllno" : B[0].get('wxllno')
						}
					});
		} 
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.chooselifnr = function() {
	var B = this.inputWindow.items.items[0].matnr.getValue()
	if (Ext.isEmpty(B)) {
		Ext.Msg.alert("系统提示", "请先输入物料编码");
	} else {
		this.selectlifnrWin.show();
	}
}
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.chooselifnredit = function() {
	var B = this.editWindow.items.items[0].matnr.getValue()
	if (Ext.isEmpty(B)) {
		Ext.Msg.alert("系统提示", "请先输入物料编码");
	} else {
		this.selectlifnreditWin.show();
	}
}

/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onAddmx = function() {
	this.listeditPanel.addRow({
				wtms : '',
				wtbw : '',
				qxlx : '',
				wtsx : '',
				gzdj : ''
			});
	// 设置焦点
	this.listeditPanel.startEditing(0, 3);
};
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onAddeditmx = function() {
	this.editeditPanel.addRow({
				wtms : '',
				wtbw : '',
				qxlx : '',
				wtsx : '',
				gzdj : ''
			});
	// 设置焦点
	this.editeditPanel.startEditing(0, 3);
};

com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onDelmx = function() {
	var A = this.listeditPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var C = A.getSelectionModel().getSelections();
		A.store.remove(C)

	}
}
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onDeleditmx = function() {
	var A = this.editeditPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var C = A.getSelectionModel().getSelections();
		A.store.remove(C)
	}
}
com.zoomlion.hjsrm.inspect.InspectwxlljywhMgr.prototype.onExcel = function() {
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
	var templatename = "WxlljyMgr.xls";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,		
		url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.queryinspectwxlljynotedaochu.biz.ext',
		jsonData : daochu,
		success : function(response, action) {
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				var mydatas = result.data;
				if(mydatas.length>2000){
					alert("超过两千条数据，不能导出!");
					return;
				}
				
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