com.zoomlion.hjsrm.deliverynote.MatnrbarcodeMgr.prototype.initEvent = function() {

	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var _this = this;
		var matnr = this.queryPanel.matnr.getValue();
		var maktx = this.queryPanel.maktx.getValue();
		if (Ext.isEmpty(matnr) && Ext.isEmpty(maktx)) {
			Ext.Msg.alert("系统提示", "物料编码和物料描述不能同时为空!");
			return false
		}
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	com.zoomlion.hjsrm.deliverynote.MatnrbarcodeMgr.prototype.onBarcode = function() {
		var _this = this;
		if (!this.inputWindow.items.items[0].form.isValid()) {
			return;
		}
		var vals = this.inputWindow.items.items[0].form.getValues();
		var matnr = this.inputWindow.items.items[0].form.findField('matnr')
				.getValue();
		var maktx = this.inputWindow.items.items[0].form.findField('maktx')
				.getValue();
		var dysl = this.inputWindow.items.items[0].form.findField('dysl')
				.getValue();
		var a = this.inputWindow.items.items[0].form.findField('flag')
				.getValue();
		var createtime = Ext.util.Format.date(
				this.inputWindow.items.items[0].form.findField('createtime')
						.getValue(), 'Y-m-d');
		vals["lifnr"] = lifnrx;
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.deliverynote.delivery.queryPrintNum.biz.ext',
			jsonData : {
				entitys : vals
			},
			success : function(response, action) {
				var result = Ext.decode(response.responseText);
				if (result.success) {
					var dycs = result.rs;
					vals["printNum"] = dycs;
					_this.inputWindow.hide();
		(function	() {
						_this.onPrint(vals, matnr, maktx, dysl, a, createtime,
								dycs);
					}).defer(200);

				}
			}
		});
	}
}

// 销毁
com.zoomlion.hjsrm.deliverynote.MatnrbarcodeMgr.prototype.destroy = function() {
	this.inputWindow.destroy();

}

// 弹出创建送货单窗口
com.zoomlion.hjsrm.deliverynote.MatnrbarcodeMgr.prototype.onCreate = function() {
	if (Ext.isEmpty(lifnrx)) {
		Ext.Msg.alert("系统提示", "不是供应商将无法打印!");
		return
	}
	var _this = this;
	var A = this.listPanel;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var sfcgdd = B[0].get('sfcgdd');
			if (sfcgdd == '否') {
				Ext.Msg.confirm("系统提示", "历史上未有对应采购订单，是否打印?", function(btnText) {
					if (btnText == "yes") {
						Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.zoomlion.hjsrm.deliverynote.delivery.query300lifnr.biz.ext',
							jsonData : {
								"condition/lifnr" : lifnr
							},
							success : function(response, action) {
								var result = Ext.decode(response.responseText);
								if (result.success) {
									var dycs = result.rs;
									_this.inputWindow.show();
									_this.inputWindow.items.items[0].form
											.findField('matnr').setValue(B[0]
													.get('matnr'))
									_this.inputWindow.items.items[0].form
											.findField('maktx').setValue(B[0]
													.get('maktx'))
									_this.inputWindow.items.items[0].form
											.findField('flag').setValue(B[0]
													.get('flag'))
									if (dycs == "1") {
										_this.inputWindow.items.items[0].form
												.findField('tmlx')
												.setValue("2");
									} else {
										_this.inputWindow.items.items[0].form
												.findField('tmlx')
												.setValue("1");
									}
								}
							}
						});

					}
				})
			} else {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.zoomlion.hjsrm.deliverynote.delivery.query300lifnr.biz.ext',
					jsonData : {
						"condition/lifnr" : lifnr
					},
					success : function(response, action) {
						var result = Ext.decode(response.responseText);
						if (result.success) {
							var dycs = result.rs;
							_this.inputWindow.show();
							_this.inputWindow.items.items[0].form
									.findField('matnr').setValue(B[0]
											.get('matnr'))
							_this.inputWindow.items.items[0].form
									.findField('maktx').setValue(B[0]
											.get('maktx'))
							_this.inputWindow.items.items[0].form
									.findField('flag').setValue(B[0]
											.get('flag'))
							if (dycs == "1") {
								_this.inputWindow.items.items[0].form
										.findField('tmlx').setValue("2");
							} else {
								_this.inputWindow.items.items[0].form
										.findField('tmlx').setValue("1");
							}
						}
					}
				});
			}
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	}

};
com.zoomlion.hjsrm.deliverynote.MatnrbarcodeMgr.prototype.onPrint = function(
		vals, matnr, maktx, dysl, a, createtime, dycs) {
	var tmlx = this.inputWindow.items.items[0].form.findField('tmlx')
					.getValue();
			var tmgz = "128Auto";
			if (tmlx) {
				tmgz = "128A"
			}
	//var wp = new webPrint();// 创建打印控件对象
	//wp.init();// 打印对象初始化
	
	if(Ext.isChrome){
		var wp ={};
		wp.LODOP = getLodop(); 				
				
	}else{
		var wp = new webPrint();// 创建打印控件对象
		wp.init();// 打印对象初始化				
	}
	wp.LODOP.PRINT_INIT("分页打印条形码");
	wp.LODOP.SET_PRINT_PAGESIZE(1, 700, 240, "");
	var code;
	var codeamount = parseInt(dysl);
	matnr = matnr.trim().replace(" ", "");
	var lifnr = lifnrx.trim().replace(" ", "");
	maktx = maktx.trim().replace(" ", "");
	if (a == "是") {
		maktx = "★" + " " + maktx;
	}
	var printNum = parseInt(dycs) + 1;
	printNum = (printNum < 10) ? "0" + printNum : printNum;
	createtime = createtime.trim().replace("-", "");
	createtime = createtime.replace("-", "");

	createtime = Ext.util.Format.substr(createtime, 2, createtime.length - 2);
	lifnr = Ext.util.Format.substr(lifnr, 2, lifnr.length - 2);

	// code = createtime + lifnr + printNum + matnr;

	for (var i = 1; i <= codeamount; i++) {
		var xh = String.leftPad(i, 4, "0");

		var code2 = createtime + lifnr + printNum + xh + matnr;
		var code3 = "▲ "+createtime +"-"+ lifnr +"-"+ printNum + xh +"-"+ matnr;
					wp.LODOP.NewPage();
					//wp.LODOP.ADD_PRINT_TEXT(8, 32, 238, 20, code3);
		wp.LODOP.ADD_PRINT_TEXT(8, 22, 238, 20, code3);
		wp.LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
		wp.LODOP.SET_PRINT_STYLEA(0, "FontName", "Times New Roman");
		wp.LODOP.ADD_PRINT_TEXT(8, 238, 20, 20, "▲");
		wp.LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
		wp.LODOP.SET_PRINT_STYLEA(0, "FontName", "Times New Roman");
		wp.LODOP.ADD_PRINT_BARCODE(21, 23, 230, 40, tmgz, code2);
		wp.LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
		wp.LODOP.SET_PRINT_STYLEA(0, "ShowBarText", 0);
		// wp.LODOP.SET_PRINT_STYLEA(0,
		// "FontSize", 7);
		wp.LODOP.ADD_PRINT_TEXT(64, 26, 232, 30, maktx);
		// wp.LODOP.SET_PRINT_STYLEA(0, "Fontname", "黑体");
		wp.LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
		// wp.LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
	}
	wp.LODOP.PREVIEW();

	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.deliverynote.delivery.modifyPrintNum.biz.ext",
		jsonData : {
			entitys : vals
		}
	})
}
