/*
 * 
 *  刘鑫--外购来料检验记录表维护 
 */
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.queryWindow.destroy();

}
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.initEvent = function() {
	this.storeqjlx.load();
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
	this.listeditPanel.mon(this.listeditPanel,'validateedit', function(e){
		var ss = true;
		if(e.field=='gzxs'){
			this.listeditPanel.store.each(function(rec){
				if(rec.get('gzxs')==e.value){
					ss = false;
				}
			});
		}		
		return ss;
	},this);
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
				this.editeditPanel.store.load({
							params : {
								"condition/wgllno" : C[0].data.wgllno
							}
						});
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
				this.queryeditPanel.store.load({
							params : {
								"condition/wgllno" : C[0].data.wgllno
							}
						});
				//this.queryWindow.items.items[0].form.findField('gzxs').setValue(C[0].data.gzxsname);
			}, this);
	this.storematnr.on({
				scope : this,
				'load' : function(store, records, opt) {
					if (records.length == 0) {
						this.inputWindow.items.items[0].maktx.setValue();
						this.inputWindow.items.items[0].gzxt
								.setValue();
					    this.inputWindow.items.items[0].gzjg
								.setValue();
						//this.inputWindow.items.items[0].gzxs
								//.setValue();
						//this.inputWindow.items.items[0].lifnr.setValue();
					} else {
						this.inputWindow.items.items[0].maktx
								.setValue(records[0].get('maktx'));
					    this.inputWindow.items.items[0].gzxt
								.setValue(records[0].get('gzxt'));
					    this.inputWindow.items.items[0].gzjg
								.setValue(records[0].get('gzjg'));
						//this.inputWindow.items.items[0].lifnr.setValue();
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
	com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onaddOk = function() {
		var _this = this;
		this.inputWindow.items.items[0].maktx.focus(false, 100);
		var store = this.listPanel.store;
		var records = this.listeditPanel.store.getRange();
		var clyj = this.inputWindow.items.items[0].clyj.getValue();
		var bhgs = this.inputWindow.items.items[0].bhgs.getValue();
		var vals = this.inputWindow.items.items[0].form.getValues();
		var gzxt = this.inputWindow.items.items[0].gzxt.getValue();
		var gzjg = this.inputWindow.items.items[0].gzjg.getValue();
		//var gzxs = this.inputWindow.items.items[0].gzxs.getValue();
		var gzxtname = this.inputWindow.items.items[0].gzxt.getRawValue();
		var gzjgname = this.inputWindow.items.items[0].gzjg.getRawValue();
		//var gzxsname = this.inputWindow.items.items[0].gzxs.getRawValue();
		vals["gzxt"] = gzxt;
		vals["gzjg"] = gzjg;
		//vals["gzxs"] = gzxs;
		vals["gzxtname"] = gzxtname;
		vals["gzjgname"] = gzjgname;
		//vals["gzxsname"] = gzxsname;
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		for (var i = 0; i < detail.length; i++) {
			if (Ext.isEmpty(detail[i].gzxs)) {
				Ext.Msg.alert('提示', '请录入完整数据后再进行保存！')
				return false;
			}
		}		
		if(clyj == "合格"&& bhgs != 0){
			Ext.Msg.alert("系统提示", "不合格数与处理意见不一致!");
			return
		}
		if(records.length == 0&&clyj!="合格"){
			Ext.Msg.alert("系统提示", "在不合格的情况下，必须录入故障形式!");
			return
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
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.addinspectwglljynote.biz.ext',
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
	com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onsaveOk = function() {
		var _this = this;
		this.editWindow.items.items[0].maktx.focus(false, 100);
		var store = this.listPanel.store;
		var records = this.editeditPanel.store.getRange();
		var clyj = this.editWindow.items.items[0].clyj.getValue();
		var bhgs = this.editWindow.items.items[0].bhgs.getValue();
		var vals = this.editWindow.items.items[0].form.getValues();
	    var gzxt = this.editWindow.items.items[0].gzxt.getValue();
		var gzjg = this.editWindow.items.items[0].gzjg.getValue();
		//var gzxs = this.editWindow.items.items[0].gzxs.getValue();
		var gzxtname = this.editWindow.items.items[0].gzxt.getRawValue();
		var gzjgname = this.editWindow.items.items[0].gzjg.getRawValue();
		//var gzxsname = this.editWindow.items.items[0].gzxs.getRawValue();
		vals["gzxt"] = gzxt;
		vals["gzjg"] = gzjg;
		//vals["gzxs"] = gzxs;
		vals["gzxtname"] = gzxtname;
		vals["gzjgname"] = gzjgname;
		//vals["gzxsname"] = gzxsname;
		var detail = [];
		Ext.each(records, function(r) {
					detail.push(r.data);
				});
		for (var i = 0; i < detail.length; i++) {
			if (Ext.isEmpty(detail[i].gzxs)) {
				Ext.Msg.alert('提示', '请录入完整数据后再进行保存！')
				return false;
			}
		}	
		if(clyj == "合格"&& bhgs != 0){
			Ext.Msg.alert("系统提示", "不合格数与处理意见不一致!");
			return false;
		}
		if(records.length == 0&&clyj!="合格"){
			Ext.Msg.alert("系统提示", "在不合格的情况下，必须录入故障形式!");
			return false;
		}
		if (!this.editWindow.items.items[0].form.isValid()) {
			return false;
		}
		var mk = new Ext.LoadMask(this.editWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.saveinspectwglljynote.biz.ext',
			jsonData : {
				note : vals,
				detail:detail
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
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onAdd = function() {
	this.inputWindow.show();
	this.listeditPanel.store.removeAll();
};
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onEdit = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
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
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onQuery = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var record = new Ext.data.Record();
			record.set('wgllno', B[0].get('wgllno'));
			this.queryWindow.items.items[0].loadData(record);
			this.queryWindow.show();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.chooselifnr = function() {
	var B = this.inputWindow.items.items[0].matnr.getValue()
	if (Ext.isEmpty(B)) {
		Ext.Msg.alert("系统提示", "请先输入物料编码");
	} else {
		this.selectlifnrWin.show();
	}
}
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onAddmx = function() {
	this.listeditPanel.addRow({
				wtms : '',				
				wtsx : ''
			});
	// 设置焦点
	this.listeditPanel.startEditing(0, 3);
};
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onAddeditmx = function() {
	this.editeditPanel.addRow({
				wtms : '',				
				wtsx : ''
			});
	// 设置焦点
	this.editeditPanel.startEditing(0, 3);
};

com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onDelmx = function() {
	var A = this.listeditPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var C = A.getSelectionModel().getSelections();
		A.store.remove(C)

	}
}
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onDeleditmx = function() {
	var A = this.editeditPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var C = A.getSelectionModel().getSelections();
		A.store.remove(C)
	}
}
com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.chooselifnredit = function() {
	var B = this.editWindow.items.items[0].matnr.getValue()
	if (Ext.isEmpty(B)) {
		Ext.Msg.alert("系统提示", "请先输入物料编码");
	} else {
		this.selectlifnreditWin.show();
	}
}

com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.zoomlion.hjsrm.inspect.InspectwglljywhMgr.prototype.onExcel = function() {
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
	var templatename = "WglljyMgr.xls";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.inspect.inspectlljywh.queryinspectwglljynotedaochu.biz.ext',
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