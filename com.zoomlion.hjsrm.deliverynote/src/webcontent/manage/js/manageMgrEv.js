com.zoomlion.hjsrm.deliverynote.ManageMgr.prototype.initEvent = function() {
	var _this = this;
	var werks0 = '';

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
		}

		var werks = this.queryPanel.werks.getValue();
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
				
        werks0 = vals['condition/werks'];;
	}, this);

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
            				
				//2017-07-03 hw_zj 创建送货单之前检查是否是一致的工厂数据
				var werks = r.get('werks');
				if(werks!=werks0){
					Ext.Msg.alert("系统提示", "请选择筛选条件一致的工厂数据", function() {
							}, this);
				    werks0 = '';				    
					return false;
				}
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
com.zoomlion.hjsrm.deliverynote.ManageMgr.prototype.setAmount = function() {
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
com.zoomlion.hjsrm.deliverynote.ManageMgr.prototype.destroy = function() {
	this.popWindow.destroy();

}

// 弹出创建送货单窗口
com.zoomlion.hjsrm.deliverynote.ManageMgr.prototype.onCreate = function() {
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
com.zoomlion.hjsrm.deliverynote.ManageMgr.prototype.onDelSelected = function() {
	var A = this.listPanel2;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		var C = A.getSelectionModel().getSelections();
		A.store.remove(C)

	}
}

// 保存为送货单
com.zoomlion.hjsrm.deliverynote.ManageMgr.prototype.onSave = function() {
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
			url : 'com.zoomlion.hjsrm.deliverynote.delivery.saveDeliverys.biz.ext',
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
					var str = "您创建了" + ret1 +"请至送货单打印菜单进行打印！";                      
						Ext.Msg.alert("系统提示",str,function(){
						     _this.listPanel.store.reload();
 					         _this.popWindow.hide();
						     _this.listPanel2.store.removeAll();
						     _this.sel = ["0|0"];
						     _this.inputPanel.form.reset()
						     })
						
//					if (_this.isChassis == false) {// 非底盘供应商
//						str += "<br/>立即打印送货单吗?";
//					}

//					Ext.MessageBox.show({
//						title : '系统提示',
//						msg : str,
//						buttons : (_this.isChassis == false)
//								? Ext.MessageBox.YESNO
//								: Ext.MessageBox.OK,
//						fn : function(btn) {
//							_this.listPanel.store.reload();
//							_this.popWindow.hide();
//							_this.listPanel2.store.removeAll();
//							_this.sel = ["0|0"];
//							_this.inputPanel.form.reset();
//							mk.hide();
//
//							if (btn == 'yes') {
//								// print
//								var wp = new webPrint();// 创建打印控件对象
//								wp.init();// 打印对象初始化
//								var params = [];
//								var zasnhs = [];
//								var p = ret2.split(",");
//								for (var i = 0; i < p.length; i++) {
//									if (p[i] != 0 || p[i] != "0") {
//										params.push('zasnhs=' + p[i]);
//										zasnhs.push(p[i]);
//									}
//
//								}
//								var url, dostr;
//								var printinfos;
//								var resul, ret;
//								var ok = 0;
//								url = 'com.zoomlion.hjsrm.deliverynote.delivery.printBatch.biz.ext?'
//										+ encodeURI(params.join('&'));
//								dostr = "create_print_init_deliverynote(wp.LODOP, ret.data);";
//								dostr += "printinfos = ret.data;";
//								dostr += "Ext.each(printinfos, function(printinfo) {";
//								dostr += " var codeStr = printinfo.codeStr;";
//								dostr += " var zasnh = printinfo.zasnh;";
//								dostr += " codeStr = codeStr.replace('LODOP.ADD_PRINT_TEXT','wp.LODOP.ADD_PRINT_BARCODE');";
//								dostr += " codeStr = codeStr.replace('code', '128A' + '\",\"' + zasnh);";
//								dostr += "add_print_object_deliverynote(wp.LODOP, printinfo);";
//								dostr += "eval(codeStr);";
//								dostr += "}); ok=1;";
//								resul = Ext.ex.XMLHttpRequestEx.synchRequest(
//										"POST", url);
//								ret = Ext.decode(resul);
//
//								if (Ext.isEmpty(ret.data)) {
//									Ext.Msg.alert("系统提示",
//											"查询打印信息失败,或此送货单打印需采购员确认！",
//											function() {
//											}, _this);
//									return;
//								} else {
//
//									var mk2 = new Ext.LoadMask(Ext.getBody(), {
//												msg : '正在生成打印数据，请稍候!',
//												removeMask : true
//											});
//									mk2.show();
//									var first = function() {
//
//										eval(dostr);
//
//									};
//
//									first.createSequence(function() {
//
//									(function() {
//											mk2.hide();
//											if (ok == 1) {
//												wp.preview();// 打印预览
//												Ext.Ajax.request({
//													method : "post",
//													scope : _this,
//													url : 'com.zoomlion.hjsrm.deliverynote.delivery.savePrintNoBatch.biz.ext',
//													jsonData : {
//														zasnhs : zasnhs
//													}
//												})
//											} else {
//												Ext.Msg.alert("系统提示", "查询超时！",
//														function() {
//															return;
//														}, _this);
//											}
//										}).defer(1000);
//
//									})();
//
//									// Ext.Msg.alert("系统提示", wp);
//									// return;
//
//								}
//
//							}
//
//						},
//						icon : Ext.MessageBox.QUESTION
//					});

					/*
					 * Ext.Msg.alert("系统提示", str, function() {
					 * _this.listPanel.store.reload(); _this.popWindow.hide();
					 * _this.listPanel2.store.removeAll(); _this.sel = ["0|0"];
					 * _this.inputPanel.form.reset(); mk.hide(); });
					 */
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
com.zoomlion.hjsrm.deliverynote.ManageMgr.prototype.onDelNote = function() {
	this.listNotePanel.onDel();
}

com.zoomlion.hjsrm.deliverynote.ManageMgr.prototype.exportExcel = function() {
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