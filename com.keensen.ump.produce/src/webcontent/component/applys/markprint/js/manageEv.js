com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.initEvent = function() {

	var _this = this;

	this.colorTapeNames = [];
	this.colorTapeValues = [];
	this.typeProdNames = [];
	this.typeProdValues = [];
	this.sizeProdNames = [];
	this.sizeProdValues = [];
	this.codeProdNames = [];
	this.codeProdValues = [];

	this.markPrintPanel.mon(this.markPrintPanel, 'afterload', function(win,
					data) {

				this.onCreateMarkBatchNo();

			}, this);

	this.baseDictStore.on('load', function() {
				var records = _this.baseDictStore.getRange();
				if (records.length > 0) {
					for (var i = 0; i < records.length; i++) {
						if (records[i].data.business == 'color_tape') {
							_this.colorTapeNames.push(records[i].data.dictName);
							_this.colorTapeValues
									.push(records[i].data.dictValue);
						}
						if (records[i].data.business == 'type_prod') {
							_this.typeProdNames.push(records[i].data.dictName);
							_this.typeProdValues
									.push(records[i].data.dictValue);
						}
						if (records[i].data.business == 'size_prod') {
							_this.sizeProdNames.push(records[i].data.dictName);
							_this.sizeProdValues
									.push(records[i].data.dictValue);
						}
						if (records[i].data.business == 'code_prod') {
							_this.codeProdNames.push(records[i].data.dictName);
							_this.codeProdValues
									.push(records[i].data.dictValue);
						}

					}
				}
			})

	// 查询事件
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

	// 查询事件
	this.queryChooseOrderPanel.mon(this.queryChooseOrderPanel, 'query',
			function(form, vals) {
				var store = this.chooseOrderListPanel.store;
				store.baseParams = this.queryChooseOrderPanel.form.getValues();
				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseOrderListPanel.pagingToolbar.pageSize
					}
				});
			}, this);

}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '家用元件箱唛打印',
			'com.keensen.ump.produce.component.household.queryMarkPrint', '0,1');
}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.onAdd = function() {

	this.markPrintPanel.form.reset();
	this.markPrintWindow.show();

}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.chooseOrder = function() {
	this.chooseOrderWindow.show();
}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.chooseOrderOk = function() {

	var obj = (!this.markPrintWindow.hidden)
			? this.markPrintPanel
			: this.markLabelPanel;

	var records = this.chooseOrderListPanel.getSelectionModel().getSelections();
	if (records.length == 0)
		return;
	var record = records[0];

	var orderId = record.data.id;
	var materSpecName2 = record.data.materSpecName2;
	var orderNo = record.data.orderNo;
	var dryWet = record.data.dryWet;
	var orderAmount = record.data.orderAmount;
	var tapColor = record.data.tapeBase;

	obj.orderId.setValue(orderId);
	obj.prodSpecName.setValue(materSpecName2);
	obj.orderNo.setValue(orderNo);
	obj.dryWet.setValue(dryWet);
	obj.orderAmount.setValue(orderAmount);
	obj.tapColor.setValue(tapColor);

	this.chooseOrderWindow.hide();
}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.calculateBox = function() {

	var obj = this.markPrintPanel;
	var applyAmount = obj.applyAmount.getValue();
	var quantityPerBox = obj.quantityPerBox.getValue();
	if (Ext.isEmpty(applyAmount) || Ext.isEmpty(quantityPerBox)) {
		Ext.Msg.alert("系统提示", "请检数量和单箱数量不能为空");
		return
	}

	var quantityBox = Math.ceil(applyAmount / quantityPerBox);
	var quantityLastBox = applyAmount % quantityPerBox;
	obj.quantityBox.setValue(quantityBox);
	obj.quantityLastBox.setValue(quantityLastBox);

}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.onCreateMarkBatchNo = function() {

	var _this = this;
	var colorTapeNames = this.colorTapeNames;
	var colorTapeValues = this.colorTapeValues;
	var typeProdNames = this.typeProdNames;
	var typeProdValues = this.typeProdValues;
	var sizeProdNames = this.sizeProdNames;
	var sizeProdValues = this.sizeProdValues;
	var codeProdNames = this.codeProdNames;
	var codeProdValues = this.codeProdValues;

	var colorTape = '';
	var typeProd = '';
	var sizeProd = '';
	var codeProd = '';
	var prefix = '';

	// 🔢数组查找
	var findElement = function(arr, target) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === target) {
				return i; // 返回索引
			}
		}
		return -1; // 未找到返回-1
	}

	var tapColor = this.markPrintPanel.tapColor.getValue();
	var idx = findElement(colorTapeNames, tapColor);
	if (idx == -1) {
		Ext.Msg.alert("系统提示", "没有对应胶带颜色代码!");
		return false;
	} else {
		colorTape = colorTapeValues[idx];
	}

	var prodSpecName = this.markPrintPanel.prodSpecName.getValue();
	var specArr = prodSpecName.split('-');
	var idx = findElement(typeProdNames, specArr[0]);
	if (idx == -1) {
		Ext.Msg.alert("系统提示", "没有对应产品种类代码!");
		return false;
	} else {
		typeProd = typeProdValues[idx];
	}

	var idx = findElement(sizeProdNames, specArr[1]);
	if (idx == -1) {
		Ext.Msg.alert("系统提示", "没有对应元件尺寸代码!");
		return false;
	} else {
		sizeProd = sizeProdValues[idx];
	}

	// NF特例
	var nfArr = {
		'NF-1812' : 'A2150',
		'NF-1812R' : 'A2120',
		'NF-60' : 'B2140',
		'NF-2012' : 'B2225',
		'NF-2012R' : 'B2175',
		'NF-2812' : 'C2450',
		'NF-2812R' : 'C2350',
		'NF-3012' : 'D2525',
		'NF-3012R' : 'D252R',
		'NF-3013' : 'D3575',
		'NF-3013R' : 'D3525'
	};

	if (Ext.isEmpty(nfArr[prodSpecName])) {

		if (specArr.length == 2) {
			codeProd = '000'
		} else {

			var idx = findElement(codeProdNames, specArr.length == 3
							? specArr[2]
							: specArr[2] + '-' + specArr[3]);
			if (idx == -1) {
				Ext.Msg.alert("系统提示", "没有对应元件型号代码!");
				return false;
			} else {
				codeProd = codeProdValues[idx];
			}
		}
		prefix = colorTape + typeProd + sizeProd + codeProd;
	} else {
		prefix = colorTape + typeProd + nfArr[prodSpecName];
	}
	// var prefix = colorTape + typeProd + sizeProd + codeProd;

	Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.sn.queryYmd.biz.ext",
				method : "post",
				success : function(resp) {
					// 返回值处理
					var ret = Ext.decode(resp.responseText);
					var ymd = ret.ymd;
					_this.markPrintPanel.markBatchNo.setValue(prefix + ymd
							+ 'xxx');

				},
				callback : function() {

				}
			})
}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.onSaveMarkPrint = function() {

	if (this.markPrintPanel.form.isValid()) {

		var orderId = this.markPrintPanel.orderId.getValue();

		var f = document.getElementById('applysmarkprintmgrForm');
		var markBatchNo = this.markPrintPanel.markBatchNo
				.getValue();
		f.prodSpecName.value = this.markPrintPanel.prodSpecName.getValue();
		f.quantityBox.value = this.markPrintPanel.quantityBox.getValue();
		f.quantityLastBox.value = this.markPrintPanel.quantityLastBox
				.getValue();
		f.quantityPerBox.value = this.markPrintPanel.quantityPerBox.getValue();
		f.dryWet.value = this.markPrintPanel.dryWet.getValue();
		f.nsf.value = this.markPrintPanel.nsf.getValue() ? 'Y' : 'N';
		f.log.value = this.markPrintPanel.log.getValue() ? 'Y' : 'N';

		f.orderNo.value = this.markPrintPanel.orderNo.getValue();

		f.orderId.value = orderId;
		f.tapColor.value = this.markPrintPanel.tapColor.getValue();
		f.orderAmount.value = this.markPrintPanel.orderAmount.getValue();
		f.applyAmount.value = this.markPrintPanel.applyAmount.getValue();
		f.markBatchNo.value = markBatchNo;

		var actionUrl = 'com.keensen.ump.produce.component.printAndSaveHHProdMarks.flow?time='
				+ Math.random() + '&token=' + Date.now();

		f.action = actionUrl;
		f.submit();
	}

}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.onAdd2 = function() {

	this.markLabelPanel.form.reset();
	this.markLabelWindow.show();

}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.calculateBox2 = function() {

	var obj = this.markLabelPanel;
	var applyAmount = obj.applyAmount.getValue();
	var quantityPerBox = obj.quantityPerBox.getValue();
	if (Ext.isEmpty(applyAmount) || Ext.isEmpty(quantityPerBox)) {
		Ext.Msg.alert("系统提示", "请检数量和单箱数量不能为空");
		return
	}

	var quantityBox = Math.ceil(applyAmount / quantityPerBox);
	var quantityLastBox = applyAmount % quantityPerBox;
	obj.quantityBox.setValue(quantityBox);
	obj.quantityLastBox.setValue(quantityLastBox);

}

com.keensen.ump.produce.component.applys.MarkPrintMgr.prototype.onSaveMarkLabel = function() {

	if (this.markLabelPanel.form.isValid()) {

		var _this = this;
		var orderId = this.markLabelPanel.orderId.getValue();

		var markBatchNo = this.markLabelPanel.markBatchNoPrefix.getValue()
				+ 'xxx';
		var prodSpecName = this.markLabelPanel.prodSpecName.getValue();
		var quantityBox = this.markLabelPanel.quantityBox.getValue();
		var quantityLastBox = this.markLabelPanel.quantityLastBox.getValue();
		var quantityPerBox = this.markLabelPanel.quantityPerBox.getValue();
		var dryWet = this.markLabelPanel.dryWet.getValue();
		var nsf = this.markLabelPanel.nsf.getValue() ? 'Y' : 'N';
		var log = this.markLabelPanel.log.getValue() ? 'Y' : 'N';

		var orderNo = this.markLabelPanel.orderNo.getValue();

		var tapColor = this.markLabelPanel.tapColor.getValue();
		var orderAmount = this.markLabelPanel.orderAmount.getValue();
		var applyAmount = this.markLabelPanel.applyAmount.getValue();

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.component.applys.saveMarkLabel.biz.ext",
			method : "post",
			jsonData : {
				'orderId' : orderId,
				'markBatchNo' : markBatchNo,
				'prodSpecName' : prodSpecName,
				'quantityBox' : quantityBox,
				'quantityLastBox' : quantityLastBox,
				'quantityPerBox' : quantityPerBox,
				'dryWet' : dryWet,
				'nsf' : nsf,
				'log2' : log,
				'orderNo' : orderNo,
				'tapColor' : tapColor,
				'orderAmount' : orderAmount,
				'applyAmount' : applyAmount
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					Ext.Msg.alert("系统提示", "操作成功！", function() {
								_this.listPanel.store.reload({});
								_this.markLabelWindow.hide();

							})
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}

}