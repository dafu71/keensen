com.zoomlion.hjsrm.deliverynote.BarcodeMgr.prototype.initEvent = function() {

	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
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
		var zasnh2 = _this.queryPanel.zasnh2.getValue();
		var regEx = new RegExp("\\n", "gi");
		zasnh2 = zasnh2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		zasnh2 = zasnh2.replace(regEx, ",");
		var regEx = new RegExp(",,", "gi");
		zasnh2 = zasnh2.replace(regEx, ",");
		_this.queryPanel.zasnh.setValue(zasnh2);
		vals["condition/zasnh"] = zasnh2;
		var store = this.listPanel.store;
		vals["condition/ifprint"] = "Y";
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
}

// 销毁
com.zoomlion.hjsrm.deliverynote.BarcodeMgr.prototype.destroy = function() {
	this.popWindow.destroy();

}

// 弹出创建送货单窗口
com.zoomlion.hjsrm.deliverynote.BarcodeMgr.prototype.onCreate = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var store = this.listPanel2.store;
		store.removeAll();

		var conds = "";

		var C = A.getSelectionModel().getSelections();

		Ext.each(C, function(r) {
					var zh = r.data.zasnh;
					zh = zh.trim();
					var zp = r.data.zasnp;
					zp = zp.trim();
					conds = conds + "(zasnh = '" + zh + "' and zasnp ='" + zp
							+ "') or "

				});

		conds = conds + "(1=2)";

		store.load({
					params : {
						"condition/conds" : conds
					}
				});
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
					this.popWindow.show();
					if(dycs == "1"){
						this.popWindow.items.items[1].form.findField('tmlx')
					   .setValue("2");
					}else{
						this.popWindow.items.items[1].form.findField('tmlx')
					   .setValue("1");
					}
				}
			}
		});
	}
};

com.zoomlion.hjsrm.deliverynote.BarcodeMgr.prototype.onBarcode = function() {
	var _this = this;

	var A = this.listPanel2;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {

		var C = A.getSelectionModel().getSelections();
		var flag = true;
		Ext.each(C, function(r) {
					var codeamount = r.data.codeamount;
					var amount = r.data.amount;
					var printNum = r.data.printNum;
					if (codeamount > amount) {
						Ext.Msg.alert("系统提示", "条码数量不能大于送货数量！");
						flag = false;
					}

					if (printNum > 98) {
						Ext.Msg.alert("系统提示", "条码打印次数不能大于99次！");
						flag = false;
					}
				});

		if (flag) {
			var tmlx = this.popWindow.items.items[1].form.findField('tmlx')
					.getValue();
			var tmgz = "128Auto";
			if (tmlx) {
				tmgz = "128A"
			}
			// 更新打印次数
			var F = [];
			for (var D = 0; D < C.length; D++) {
				var r = C[D];
				F = F.concat(r.data)
			}

			_this.popWindow.hide();
			
			if(Ext.isChrome){
				var wp ={};
				wp.LODOP = getLodop(); 				
				
			}else{
				var wp = new webPrint();// 创建打印控件对象
				wp.init();// 打印对象初始化				
			}

			//var wp = new webPrint();// 创建打印控件对象
			//wp.init();// 打印对象初始化
			wp.LODOP.PRINT_INIT("分页打印条形码");
			wp.LODOP.SET_PRINT_PAGESIZE(1, 700, 240, "");
			var code;
			Ext.each(C, function(r) {
				var codeamount = parseInt(r.data.codeamount);
				var matnr = r.data.matnr;
				matnr = matnr.trim().replace(" ", "");
				var lifnr = r.data.lifnr;
				lifnr = lifnr.trim().replace(" ", "");
				var maktx = r.data.maktx;
				maktx = maktx.trim().replace(" ", "");
				if (r.data.flag == "1") {
					maktx = "★" + " " + maktx;
				}
				var createtime = r.data.createtime;
				var printNum = parseInt(r.data.printNum) + 1;
				printNum = (printNum < 10) ? "0" + printNum : printNum;

				createtime = createtime.trim().replace("-", "");
				createtime = createtime.replace("-", "");

				createtime = Ext.util.Format.substr(createtime, 2,
						createtime.length - 2);
				lifnr = Ext.util.Format.substr(lifnr, 2, lifnr.length - 2);

				//code = createtime + lifnr + printNum + matnr;
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
					wp.LODOP.ADD_PRINT_BARCODE(21, 23, 234, 40, tmgz, code2);
					wp.LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
					wp.LODOP.SET_PRINT_STYLEA(0, "ShowBarText", 0);
					// wp.LODOP.SET_PRINT_STYLEA(0,
					// "FontSize", 7);
					wp.LODOP.ADD_PRINT_TEXT(64, 26, 232, 30, maktx);
					//wp.LODOP.SET_PRINT_STYLEA(0, "Fontname", "黑体");
					wp.LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
					//wp.LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				}

			});
			wp.LODOP.PREVIEW();

			Ext.Ajax.request({
				url : "com.zoomlion.hjsrm.deliverynote.delivery.modifyPrintNum.biz.ext",
				jsonData : {
					entitys : F
				}
			})

		}

	}
}