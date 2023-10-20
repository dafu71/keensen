com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.initEvent = function() {
	var _this = this;
    this.storevnbm.load();
	// 查询当前用户是否底盘供应商
	var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
			'com.zoomlion.hjsrm.deliverynote.delivery.isChassis.biz.ext');
	ret = Ext.decode(result);
	this.isChassis = ret.ret;

	// 维护查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		if (Ext.isEmpty(this.queryPanel.werks.getValue())) {
			this.queryPanel.werks.setValue('3000');
			vals['condition/werks'] = '3000';
			this.curwerks = '3000';
		}

		var werks = this.queryPanel.werks.getValue();
		this.curwerks = werks;
		var matnr2 = this.queryPanel.matnr2.getValue();
		var regEx = new RegExp("\\n", "gi");

		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		matnr2 = matnr2.replace(regEx, ",");

		var regEx = new RegExp(",,", "gi");
		matnr2 = matnr2.replace(regEx, ",");

		this.queryPanel.matnr.setValue(matnr2);
		vals["condition/matnr"] = matnr2;

		this.inputPanel.werks.setValue(werks);

		var store = this.listPanel.store;

		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	// 查询
	this.queryPanel3.mon(this.queryPanel3, 'query', function(form, vals) {
		var _this = this;
        var zasnh2 = _this.queryPanel3.zasnh2.getValue();
		var regEx = new RegExp("\\n", "gi");
		zasnh2 = zasnh2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		zasnh2 = zasnh2.replace(regEx, ",");
		var regEx = new RegExp(",,", "gi");
		zasnh2 = zasnh2.replace(regEx, ",");
		_this.queryPanel3.zasnh.setValue(zasnh2);
		vals["condition/zasnh"] = zasnh2;
		var store = this.listPanel3.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel3.pagingToolbar.pageSize
					}
				});
	}, this);

	// 双击选定
	this.listPanel3.mon(this.listPanel3, 'rowdblclick', function(o, i, e) {
				this.onShow();
			}, this);
	this.editvnpanel.mon(this.editvnpanel,'validateedit', function(e){
		var ss = true;
		if(e.field=='vnbm'){
			this.editvnpanel.store.each(function(rec){
				if(rec.get('vnbm')==e.value){
					ss = false;
				}
			});
		}		
		return ss;
	},this);
	// 删除查询事件
	this.queryPanel2.mon(this.queryPanel2, 'query', function(form, vals) {
		var store = this.listNotePanel.store;

		if (this.isChassis) {// 底盘供应商
			vals["condition/ifprint"] = "N";
		}

		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listNotePanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.selModel.on('beforerowselect', function(o, i, k, r) {
				if (this.sel.length > 100) {
					Ext.Msg.alert("系统提示", "送货单维护的条目数不能超过100条", function() {
								// this.selModel.deselectRow(i);
							}, this);
					return false;
				}
			}, this);

	this.selModel.on('rowselect', function(o, i, r) {

				var ebeln = r.get('ebeln');
				var ebelp = r.get('ebelp');
				var str = ebeln + "|" + ebelp;
				for (var i = 0; i < this.sel.length; i++) {
					if (str == this.sel[i]) {
						return false;
					}
				}

				this.sel.push(str);

			}, this);

	this.selModel.on('rowdeselect', function(o, i, r) {
				var ebeln = r.get('ebeln');
				var ebelp = r.get('ebelp');
				var str = ebeln + "|" + ebelp;
				this.sel.remove(str);
			}, this);

	this.selModel2.on('beforerowselect', function(o, i, b, r) {
				var delflag = r.get('delflag');
				var ruku = r.get('ruku');
				if (delflag == "1" || ruku > '0') {
					return false;
				}

			}, this);

	// 双击选定
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onCreate();
			}, this);
    // 增加删除后事件
	this.listNotePanel.mon(this.listNotePanel, 'afterdel', function(gird, cell) {
				  _this.listPanel.store.reload();
				  _this.listPanel3.store.reload();
 				  _this.popWindow.hide();
				  _this.listPanel2.store.removeAll();
				  _this.sel = ["0|0"];
				  _this.inputPanel.form.reset();
			}, this);
	// 采购订单列表加载
	this.listPanel2.store.on('load', function() {
				// _this.setAmount();
			});

	this.listPanel2.store.on('update', function() {
				// _this.setAmount();
			});

	this.listPanel2.store.on('remove', function() {
				// _this.setAmount();
			});

	this.listPanel2.store.on('beforeload', function() {

			});

	this.selModel3.on('rowselect', function(o, i, r) {
				var maxamount = r.get("maxamount");
				var _this = this;
	(function	() {
					_this.maxamount = maxamount;
				}).defer(100);

			}, this);
};

// 本次送货数量
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.setAmount = function() {
	var store = this.listPanel2.store;
	var records = store.getRange();
	var amount = 0;
	Ext.each(records, function(r) {
				amount += parseFloat(r.data['sendamount']);
			});
	amount = "<font color=red>本次送货数量&nbsp;&nbsp;" + amount
			+ "</font>&nbsp;&nbsp;&nbsp;&nbsp;";
	this.listPanel2.amountinfo.setValue(amount);

}

// 销毁
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.destroy = function() {
	this.popWindow.destroy();

}

// 弹出创建送货单窗口
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.onCreate = function() {
	if (this.sel == "0|0") {
		Ext.Msg.alert("系统提示", "没有选择数据!");
		return;
	} else {
		this.inputPanel.lindrinfo.setValue(lifnr + " " + lifnrname);

		var store = this.listPanel2.store;

		store.load({
					params : {
						"condition/conds" : this.sel
					}
				});

		this.popWindow.show();
		this.popWindow.toFront();
	}

};

// 删除选定的订货单
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.onDelSelected = function() {
	var A = this.listPanel2;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var C = A.getSelectionModel().getSelections();
		A.store.remove(C)

	}
}

// 保存为送货单
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.onSave = function() {
	var A = this.listPanel2;
	var _this = this;
	if (A.store.getCount() == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		if (!this.inputPanel.form.isValid()) {// 预计到货日期校验
			return;
		}

		var arrivedate = this.inputPanel.arrivedate.getValue();
		//var werks = this.inputPanel.werks.getValue();
		A.store.sort("lgort", "asc");
		A.store.sort("knttp", "asc");
		A.store.sort("aufnr", "asc");
		A.store.sort("kostl", "asc");
	    //A.store.sort("zjlb", "asc");
		var records = A.store.getRange();
		var datas = [];
		// lgorts.push(records[0].get("lgort"));
		Ext.each(records, function(r) {
					datas.push(r.data);
				});
		var mk = new Ext.LoadMask(this.popWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.deliverynote.delivery.saveDpdeliverys.biz.ext',
			jsonData : {
				datas : datas,
				"note/arrivedate" : arrivedate,
				"note/werks" : datas[0].werks
			},
			success : function(response, action) {
				 mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					var rets = result.ret;
					var ret1 = rets[0];
					var ret2 = rets[1];
					//var str = "您创建了" + ret1 +"请先进行vn码维护后至送货单打印菜单进行打印！" + "<br>工厂3450无需维护vn码!";  
					var str = "您创建了" + ret1 +"请先进行vn码维护后至送货单打印菜单进行打印！";  
						Ext.Msg.alert("系统提示",str,function(){
						     _this.listPanel.store.reload();
						     _this.listPanel3.store.reload();
						     _this.listNotePanel.store.reload();
 					         _this.popWindow.hide();
						     _this.listPanel2.store.removeAll();
						     _this.sel = ["0|0"];
						     _this.inputPanel.form.reset();
						     _this.mainPanel.setActiveTab(_this.vnPanel)
						     })
				} else {
					mk.hide();
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});

	}
}
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.onEdit = function() {
	
	var A = this.listPanel3;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var C = A.getSelectionModel().getSelections();
		if (C.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var D = C[0];
			var zasnh = D.get("zasnh");
			var status = D.get("status");
			if(status == "Y"){
				Ext.Msg.alert("系统提示", "该送货单已经被确认，如需修改请联系送货单确认员!");
			    return
			}
			var store = this.editvnpanel.store;

			store.load({
						params : {
							"condition/zasnh" : zasnh,
							"condition/delflag" : "0"
						}
					});
			this.vnWindow.zasnh = zasnh;
			this.vnWindow.show();
		}

	}
}
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.onShow = function() {
	var A = this.listPanel3;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var C = A.getSelectionModel().getSelections();
		if (C.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var D = C[0];
			var zasnh = D.get("zasnh");
			var status = D.get("status");
			var store = this.listvnpanel.store;

			store.load({
						params : {
							"condition/zasnh" : zasnh,
							"condition/delflag" : "0"
						}
					});
			this.vnDetailWindow.show();
		}

	}
}
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.onSavevndetail = function() {
	Ext.getCmp(this.focus).focus();
    var A = this.editvnpanel;
  
 			var _this = this;
	if (A.store.getCount() == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
         var records = A.store.getRange();
		 var datas = [];
		Ext.each(records, function(r) {
					datas.push(r.data);
				});
		var mk = new Ext.LoadMask(this.vnWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.deliverynote.delivery.savevndetail.biz.ext',
			jsonData : {
				datas : datas
			},
			success : function(response, action) {
				 mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					var str = result.ret;
					if(str=="保存成功！"){
						Ext.Msg.alert("系统提示",str,function(){
						     _this.listPanel3.store.reload();
 					         _this.vnWindow.hide();
						     _this.editvnpanel.store.removeAll();
						     })
					}else{
						Ext.Msg.alert("系统提示",str,function(){})
					}
				} else {
					mk.hide();
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});

	}
	}
// 删除选定的订货单
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.onDelNote = function() {
	this.listNotePanel.onDel();
}

com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	var templatename = "ShdWeiHuMgr";
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,		
		url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryOrdersdaochu.biz.ext',
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
// 模板文件下载
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.vnexport = function() {
	var fname="Vnbmdrmb.xls";
		window.location.href = "com.zoomlion.hjsrm.pub.file.excelutil.modelDownload.flow?fileName="
				+ fname;
}

// 弹出文件上传选择窗口
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.vnimport = function() {

		this.uploadForm = this.excelUploadWin.getComponent('uploadForm')
				.getForm();
		this.excelUploadWin.show();
	
}
// 文件上传
com.zoomlion.hjsrm.deliverynote.DpmanageMgr.prototype.doUpload = function() {
	var _this = this;
	//var store = this.listPanel.store;
		this.uploadInputPanel = this.excelUploadWin.getComponent('uploadForm');
		// 校验
		this.fileUploadObj = this.uploadInputPanel.form.findField("uploadFile");
		// 文件名
		this.filePath = this.fileUploadObj.getValue();
		// 文件后缀
		this.sfileName = this.filePath.split(".");

		if (this.sfileName[1] == null
				|| this.sfileName[1].toLowerCase() != "xls") {
			Ext.MessageBox.show({
						title : '操作提示',
						buttons : Ext.MessageBox.OK,
						msg : '文件必须为Excel xls文件',
						icon : Ext.MessageBox.ERROR
					});
			return false;
		}
		if (this.uploadInputPanel.form.isValid()) {
			var url = this.uploadInputPanel.saveUrl;
			this.uploadInputPanel.form.submit({
						method : "POST",
						timeout : 1200,
						url : url,
						waitTitle : "操作提示",
						waitMsg : "上传数据中...",
						success : function(form, action) {
							var result = action.result;
							if (result.success) {
								_this.excelUploadWin.hide();
								Ext.Msg.alert("操作提示", result.msg,function() {
								_this.storevnbm.load();
							}, this);
							}
						},
						failure : function(form, action) {
							Ext.MessageBox.show({
										title : '操作提示',
										buttons : Ext.MessageBox.OK,
										msg : "导入失败，请检查文件格式或网络是否正常",
										icon : Ext.MessageBox.ERROR
									});
						}
					});
		}



}
