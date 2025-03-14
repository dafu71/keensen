com.keensen.ump.produce.diaphragm.print.PrintMarkMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		var batchNoStr = this.queryPanel.form.findField("condition/batchNoStr")
				.getValue();
		var regEx = new RegExp("\\n", "gi");
		batchNoStr = batchNoStr.replace(regEx, ",");
		batchNoStr = batchNoStr.replaceAll('，', ',');
		batchNoStr = batchNoStr.replaceAll(' ', '');
		var arr = [];
		arr = batchNoStr.split(',');

		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push("'" + arr[i] + "'");
		}

		store.baseParams = {
			"condition/batchNoStr2" : batchNoStr == null ? '' : "'" + batchNoStr + "'",
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

	// 查询事件
	this.queryPanel2.mon(this.queryPanel2, 'query', function(form, vals) {
		var store = this.listPanel2.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel2.pagingToolbar.pageSize
					}
				});
	}, this);
	
	// 查询列表选择
	this.listPanel.selModel.on('rowselect', function(o, i, r) {

				var printName = r.get('printName');
				_this.bar.getComponent('param0').setValue(printName);

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

	paperwidth = Ext.isEmpty(paperwidth) ? "82mm" : paperwidth + "mm";
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

	if (templateName == '新MH发货模板') {
		var param7 = this.bar.getComponent('param7').getValue();
		var param8 = this.bar.getComponent('param8').getValue();
		var param0 = this.bar.getComponent('param0').getValue();
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
		LODOP.SET_PRINT_STYLEA(0, "HtmWaitMilSecs", 1000);		
		
		LODOP.ADD_PRINT_SETUP_BKIMG(rootUrl + templateValue);

		Ext.each(C, function(r) {
			var caimoLength = r.data.caimoLength;
			var materSpecCode = Ext.isEmpty(materSpecCode2)
					? r.data.materSpecCode
					: materSpecCode2;
			var outBatchNo = r.data.outBatchNo;
			var usefulLength = Ext.isEmpty(r.data.usefulLength2)
					? ''
					: 'null' == r.data.usefulLength2 ? '' : r.data.usefulLength2
							+ 'm';
			var qualifidLength = Ext.isEmpty(r.data.qualifidLength2)
					? ''
					: 'null' == r.data.qualifidLength2
							? ''
							: r.data.qualifidLength2 + 'm';
			var outLength = r.data.outLength + 'm';

			LODOP.SET_PRINT_PAGESIZE(1, paperwidth, paperheight, "");
			LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", true);
			LODOP.SET_SHOW_MODE("BKIMG_PRINT", true);
			LODOP.SET_PRINT_STYLEA(0,"Stretch",1);

			if (templateName == '常用模板') {
				LODOP.ADD_PRINT_IMAGE(10, 21, 265, 33, rootUrl
								+ "produce/diaphragm/print/img/log.jpg");
				LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);
				LODOP.ADD_PRINT_TEXT(77, 20, 96, 36, "型号：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(77, 96, 115, 35, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(113, 20, 100, 35, "批号：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(113, 96, 129, 35, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(149, 20, 155, 35, "实发数量：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(147, 136, 120, 35, usefulLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(184, 20, 156, 35, "可用数量：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(183, 136, 120, 35, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
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
				/*
				 * LODOP.ADD_PRINT_TEXT(66, 19, 139, 38, materSpecCode);
				 * LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				 * LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				 * LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				 * LODOP.ADD_PRINT_TEXT(115, 105, 275, 41, outBatchNo);
				 * LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				 * LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				 * LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				 * LODOP.ADD_PRINT_TEXT(167, 118, 177, 45, "1047mm");
				 * LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				 * LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				 * LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				 * LODOP.ADD_PRINT_TEXT(218, 101, 166, 40, qualifidLength);
				 * LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				 * LODOP.SET_PRINT_STYLEA(0, "FontSize", 30);
				 * LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				 */
				LODOP.ADD_PRINT_IMAGE(10, 21, 265, 33, rootUrl
								+ "produce/diaphragm/print/img/log.jpg");
				LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);
				LODOP.ADD_PRINT_TEXT(77, 20, 96, 36, materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(77, 130, 115, 35, "SHEET");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(113, 20, 100, 35, "Lot：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(113, 96, 129, 35, outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(149, 20, 155, 35, "Spec：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(147, 136, 120, 35, usefulLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(184, 20, 156, 35, "Qty：");
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(183, 136, 120, 35, qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "Arial Black");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
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
			} else if (templateName == '新MH发货模板') {
				var orderNo = Ext.isEmpty(param7) ? r.data.orderNo : param7;
				var materCode = Ext.isEmpty(param8) ? r.data.materCode : param8;
				var materSpecCode = Ext.isEmpty(param0)
						? r.data.materSpecCode
						: param0;
				var outBatchNo = r.data.outBatchNo;
				var fSaltRejection2 = r.data.fSaltRejection2;
				var produceDt = r.data.produceDt;
				usefulLength = Ext.isEmpty(usefulLength) ? '' : usefulLength;
				qualifidLength = Ext.isEmpty(qualifidLength)
						? ''
						: qualifidLength;

				orderNo = Ext.isEmpty(orderNo) ? '' : orderNo;
				materCode = Ext.isEmpty(materCode) ? '' : materCode;
				outBatchNo = Ext.isEmpty(outBatchNo) ? '' : outBatchNo;
				fSaltRejection2 = Ext.isEmpty(fSaltRejection2)
						? ''
						: fSaltRejection2;
				produceDt = Ext.isEmpty(produceDt) ? '' : produceDt.replace(
						/-/g, ".");
				produceDt = produceDt.replace(/\.0/g, ".");
				LODOP.ADD_PRINT_IMAGE(10, 21, 265, 33, rootUrl
								+ "produce/diaphragm/print/img/mpmark0.jpg");
				LODOP.SET_PRINT_STYLEA(0, "Stretch", 1);
				LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
				LODOP.ADD_PRINT_TEXT(5, 12, 100, 25, "MANN +");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(28, 12, 100, 30, "HUMMEL");
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(68, 12, 200, 30, "订单号:" + orderNo);
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(68, 165, 200, 30, "物料号:" + materCode);
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(110, 12, 200, 30, "型号:" + materSpecCode);
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(110, 165, 200, 25, "卷号:" + outBatchNo);
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(152, 12, 200, 25, "截留率:" + fSaltRejection2 + '%');
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(152, 165, 200, 25, "实发数量:" + usefulLength);
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(190, 12, 200, 25, "生产日期:" + produceDt);
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
				LODOP.ADD_PRINT_TEXT(190, 165, 200, 26, "可用数量:"
								+ qualifidLength);
				LODOP.SET_PRINT_STYLEA(0, "FontSize", 9);
				LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
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

com.keensen.ump.produce.diaphragm.print.PrintMarkMgr.prototype.exportExcel2 = function() {
	var _this = this;
	// var daochu = _this.queryPanel.getForm().getValues();

	var batchNoStr = this.queryPanel.form.findField("condition/batchNoStr")
			.getValue();
	var regEx = new RegExp("\\n", "gi");
	batchNoStr = batchNoStr.replace(regEx, ",");
	batchNoStr = batchNoStr.replaceAll('，', ',');
	batchNoStr = batchNoStr.replaceAll(' ', '');
	var arr = [];
	arr = batchNoStr.split(',');

	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		arr2.push("'" + arr[i] + "'");
	}

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlAndOpt.biz.ext",
		method : "post",
		jsonData : {
			'map/condition/batchNoStr' : arr2.join(",") == "''" ? null : arr2
					.join(","),
			'map/business' : '导出发货请检单',
			'map/opt' : arr2.join(",") == "''" ? null : arr2.join(","),
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.ship.queryTumoOrigin',
			templateFilename : 'ks_mp_fhqjd'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isIE) {
					window.open('/default/deliverynote/seek/down4IE.jsp?fname='
							+ fname);
				} else {
					window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
							+ fname;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.diaphragm.print.PrintMarkMgr.prototype.onCopyBatchNo = function() {
	var A = this.listPanel2;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var opt = records[0].get('opt');
		opt = opt.replace(/'/g, "");;
		// navigator.clipboard.writeText(opt);
		copyToClipboard(opt);
		Ext.Msg.alert("系统提示", "已复制到系统粘贴板！");
	}
}

function copyToClipboard(text) {
	var textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.setAttribute("readonly", "");
	textarea.style.position = "absolute";
	textarea.style.left = "-9999px";
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}
