com.keensen.ump.produce.diaphragm.print.PrintMarkMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		var batchNoStr = this.queryPanel.form.findField("condition/batchNoStr")
				.getValue();
		batchNoStr = batchNoStr.replaceAll('，', ',');
		batchNoStr = batchNoStr.replaceAll(' ', '');
		var arr = [];
		arr = batchNoStr.split(',');

		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push("'" + arr[i] + "'");
		}

		store.baseParams = {
			"condition/batchNoStr" : arr2.join(",") == "''" ? null : arr2
					.join(",")
		};
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

}

com.keensen.ump.produce.diaphragm.print.PrintMarkMgr.prototype.onPrint = function() {
	var templateValue = this.listPanel.templateValue.getValue();
	var templateName = this.listPanel.templateValue.getRawValue();
	if (Ext.isEmpty(templateValue)) {
		Ext.Msg.alert("系统提示", "请选择模板！");
		return;
	}

	var paperwidth = this.listPanel.paperwidth.getValue();
	var paperheight = this.listPanel.paperheight.getValue();

	paperwidth = Ext.isEmpty(paperwidth) ? "80mm" : paperwidth + "mm";
	paperheight = Ext.isEmpty(paperheight) ? "60mm" : paperheight + "mm";

	if (templateName == 'Reverse Osmosis sheet模板') {
		paperwidth = Ext.isEmpty(paperwidth) ? "100mm" : paperwidth + "mm";
		paperheight = Ext.isEmpty(paperheight) ? "80mm" : paperheight + "mm";
	}

	var materSpecCode2 = '';
	if (this.bar.getComponent('param0').getValue()) {
		materSpecCode2 = this.bar.getComponent('param0').getRawValue();
	}

	if (templateName == 'ULP-2 Membrane模板') {
		var param1 = this.bar.getComponent('param1').getValue();
		var param2 = this.bar.getComponent('param2').getValue();
		var param3 = this.bar.getComponent('param3').getValue();
		if (Ext.isEmpty(param1)) {
			Ext.Msg.alert("系统提示", "请输入曼胡料号！");
			return;
		}
		if (Ext.isEmpty(param2)) {
			Ext.Msg.alert("系统提示", "请输入截留率！");
			return;
		}
		if (Ext.isEmpty(param3)) {
			Ext.Msg.alert("系统提示", "请输入生产日期！");
			return;
		}
		param3 = Ext.util.Format.date(this.bar.getComponent('param3')
						.getValue(), 'Y.m.d');
	}

	if (templateName == 'Reverse Osmosis sheet模板') {
		var param4 = this.bar.getComponent('param4').getValue();
		var param5 = this.bar.getComponent('param5').getValue();
		var param6 = this.bar.getComponent('param6').getValue();
		if (Ext.isEmpty(param4)) {
			Ext.Msg.alert("系统提示", "请输入客户料号！");
			return;
		}
		if (Ext.isEmpty(param5)) {
			Ext.Msg.alert("系统提示", "请输入尺寸！");
			return;
		}
		if (Ext.isEmpty(param6)) {
			Ext.Msg.alert("系统提示", "请输入脱盐率！");
			return;
		}

	}
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var cnt = A.getSelectionModel().getCount();
		if (cnt > 20) {
			Ext.Msg.alert("系统提示", "数量过多！")
			return;
		}
		var C = A.getSelectionModel().getSelections();
		var LODOP = getLodop();// 创建打印控件对象
		LODOP.PRINT_INIT("膜片唛头打印模板");
		LODOP.ADD_PRINT_SETUP_BKIMG(rootUrl + templateValue);

		Ext.each(C, function(r) {

			var materSpecCode = Ext.isEmpty(materSpecCode2)
					? r.data.materSpecCode
					: materSpecCode2;
			var outBatchNo = r.data.outBatchNo;
			var usefulLength = r.data.usefulLength + 'm';
			var qualifidLength = r.data.qualifidLength + 'm';
			var outLength = r.data.outLength + 'm';

			LODOP.SET_PRINT_PAGESIZE(1, paperwidth, paperheight, "");
			LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", true);
			LODOP.SET_SHOW_MODE("BKIMG_PRINT", true);
			if (templateName == '常用模板') {
				LODOP.ADD_PRINT_TEXT(77, 9, 96, 36, "型号：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(77, 96, 115, 35, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(113, 9, 100, 35, "批号：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(113, 96, 129, 35, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(149, 9, 155, 35, "实发数量：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(147, 136, 100, 35, usefulLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(184, 9, 156, 35, "可用数量：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(183, 136, 100, 35, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);

			} else if (templateName == 'SW模板') {
				LODOP.ADD_PRINT_TEXT(19, 167, 250, 45, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(87, 115, 230, 42, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(159, 112, 160, 45, "1047mm");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(217, 113, 124, 45, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
			} else if (templateName == 'ULP-2模板') {
				LODOP.ADD_PRINT_TEXT(55, 106, 189, 42, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(100, 108, 214, 42, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(144, 155, 141, 40, usefulLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(185, 154, 143, 42, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(222, 153, 141, 39, outLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);

			} else if (templateName == 'BW-FR SHEET模板') {
				LODOP.ADD_PRINT_TEXT(33, 10, 141, 36, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(85, 90, 273, 40, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(152, 116, 155, 40, "1047mm");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(214, 102, 166, 41, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
			} else if (templateName == 'BW SHEET模板') {
				LODOP.ADD_PRINT_TEXT(66, 19, 139, 38, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(115, 105, 275, 41, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(167, 118, 177, 45, "1047mm");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(218, 101, 166, 40, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
			} else if (templateName == 'MEMBRANE FLAT SHEET模板') {
				LODOP.ADD_PRINT_TEXT(154, 84, 292, 41, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(212, 118, 164, 45, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
			} else if (templateName == 'Mang loc R.O.模板') {
				LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", true);
				LODOP.ADD_PRINT_TEXT(55, 106, 151, 26, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(95, 105, 105, 30, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
			} else if (templateName == 'ULP-2 Membrane模板') {
				LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", true);
				LODOP.ADD_PRINT_TEXT(60, 138, 213, 30, param1);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(94, 139, 207, 30, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(127, 138, 206, 35, param2);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(166, 138, 205, 35, usefulLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(201, 138, 202, 30, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(234, 140, 199, 30, param3);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 20);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(11, 15, 160, 45, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);

			} else if (templateName == 'Reverse Osmosis sheet模板') {
				LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", true);
				LODOP.ADD_PRINT_TEXT(156, 243, 120, 20, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(178, 243, 120, 20, param4);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(201, 206, 159, 20, param5);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(229, 237, 100, 20, param6);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(254, 238, 100, 20, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				var fontsize = materSpecCode.length <= 4 ? 60 : 40;
				var size = materSpecCode.length <= 4 ? 139 : 180;
				var left = materSpecCode.length <= 4 ? 64 : 30;
				LODOP.ADD_PRINT_TEXT(44, left, size, 95, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", fontsize);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_BARCODE(46, 229, 141, 97, "QRCode", outBatchNo);
				// LODOP.SET_PRINT_STYLEA(0, "GroundColor", "#0080FF");
			}
			LODOP.NewPage();
		});

		LODOP.PREVIEW();
	}
}

com.keensen.ump.produce.diaphragm.print.PrintMarkMgr.prototype.onTemplate = function() {

	var templateValue = this.listPanel.templateValue.getValue();
	if (Ext.isEmpty(templateValue))
		return;
	window.open(templateValue);
}