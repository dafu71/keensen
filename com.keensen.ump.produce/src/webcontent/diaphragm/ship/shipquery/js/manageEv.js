com.keensen.ump.produce.diaphragm.ship.ShipqueryMgr.prototype.initEvent = function() {

	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		var batchNoStr = this.queryPanel.form
				.findField("condition/batchNoStr2").getValue();
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

		this.queryPanel.getForm().findField('condition/batchNoStr')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.listPanel.store.on('load', function() {

				var records = _this.listPanel.store.getRange();
				if (records.length == 0) {
					Ext.getCmp(sendAmountTotalId).setValue('');
					return
				}

				var sendAmountTotal = records[0].data.sendAmountTotal;

				Ext.getCmp(sendAmountTotalId).setValue('发货合计(m):'
						+ sendAmountTotal);
			})

}

/*
 * com.keensen.ump.produce.diaphragm.ship.ShipqueryMgr.prototype.exportExcel =
 * function() { var _this = this; var daochu =
 * _this.queryPanel.getForm().getValues();
 * 
 * this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), { msg :
 * "后台正在操作,请稍候!" }); this.requestMask.show(); Ext.Ajax.request({ url :
 * "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
 * method : "post", jsonData : { 'map' : daochu, namingsql :
 * 'com.keensen.ump.produce.diaphragm.ship.ship.queryFhd', templateFilename :
 * 'ks_mp_fhd' }, success : function(resp) { var ret =
 * Ext.decode(resp.responseText); if (ret.success) {
 * 
 * var fname = ret.fname; if (Ext.isIE) {
 * window.open('/default/deliverynote/seek/down4IE.jsp?fname=' + fname); } else {
 * window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" +
 * fname; } } }, callback : function() { _this.requestMask.hide() } }) }
 */

com.keensen.ump.produce.diaphragm.ship.ShipqueryMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '发货单',
			'com.keensen.ump.produce.diaphragm.ship.ship.queryFhd', '0,1,2');
}

com.keensen.ump.produce.diaphragm.ship.ShipqueryMgr.prototype.onCreateReport = function() {

	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var recordIds = [];
		var orderNo = records[0].get('deliveryOrderNo');
		var materSpecId = records[0].get('specId');
		var deliveryDt = records[0].get('deliveryDt');
		deliveryDt = deliveryDt.substr(0, 10);
		var clientName = records[0].get('clientName');
		for (var i = 0; i < records.length; i++) {

			var orderNo2 = records[i].get('deliveryOrderNo');
			if (orderNo2 != orderNo) {
				Ext.Msg.alert("系统提示", "请选择同一订单数据，请重新选择！");
				return;
			}
			recordIds.push(records[i].get('recordId'));
		}
		var store = this.addReportListPanel.store;
		store.removeAll();
		this.addReportPanel.form.reset();
		this.addReportWindow.materSpecId.setValue(materSpecId);
		this.addReportWindow.orderNo.setValue(orderNo);
		this.addReportWindow.checkDt.setValue(deliveryDt);
		this.addReportWindow.client.setValue(clientName);
		this.addReportWindow.recordIds.setValue(recordIds.join(','));
		this.addReportWindow.show();

	}
}

com.keensen.ump.produce.diaphragm.ship.ShipqueryMgr.prototype.onDetailLoad = function() {

	var labelSpecName = this.addReportWindow.labelSpecName.getValue();
	var client = this.addReportWindow.client.getValue();
	var recordIds = this.addReportWindow.recordIds.getValue();
	if (Ext.isEmpty(labelSpecName)) {
		Ext.Msg.alert("系统提示", "规格型号不能为空！");
		return;
	}
	if (Ext.isEmpty(client)) {
		Ext.Msg.alert("系统提示", "客户名称不能为空！");
		return;
	}

	var store = this.addReportListPanel.store;
	store.removeAll();
	store.load({
				params : {
					"condition/specName" : labelSpecName,
					"condition/recordIds" : recordIds
				}
			});
}

com.keensen.ump.produce.diaphragm.ship.ShipqueryMgr.prototype.onSaveAdd = function() {

	var _this = this;

	if (!this.addReportPanel.form.isValid()) {
		return false;
	}
	var records = this.addReportListPanel.store.getRange();
	var details = [];

	Ext.each(records, function(r) {
				var d = {
					'batchNo' : r.data['batchNo'],
					'dm' : r.data['dm'],
					'amountIndeed' : r.data['amountIndeed'],
					'amountUse' : r.data['amountUse'],
					'thickAvg' : r.data['thickAvg'],
					'widthMp' : r.data['widthMp'],
					'widthValid' : r.data['widthValid'],
					'gfd' : r.data['gfd'],
					'salt' : r.data['salt'],
					'defect1' : r.data['defect1'],
					'defect2' : r.data['defect2'],
					'package' : r.data['package'],
					'result' : r.data['result']
				}
				details.push(d);

			});
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
	mk.show();

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.quality.mpreport.saveMpDeliveryReportAndDetails.biz.ext',
		jsonData : {
			details : details,
			entity : this.addReportPanel.form.getValues()
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Msg.alert("系统提示", "保存成功", function() {
							_this.addReportWindow.hide();
							ReportView(_this.addReportWindow.orderNo.getValue());
						});
			}
		}
	});

}

function dealship(index) {

	var A = Ext.getCmp('ship-shipquery-list');
	var title = '是否取消发货单?';
	Ext.Msg.confirm("系统提示", title, function(btnText) {
		if (btnText == "yes") {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.diaphragm.ship.shipquery.cancelShip.biz.ext',
				jsonData : {
					"id" : index
				},
				success : function(response, action) {
					A.store.load({
								params : {
									"pageCond/begin" : 0,
									"pageCond/length" : A.pagingToolbar.pageSize
								}
							});

				}
			});
		}
	})

}

function ReportView(orderNo) {

	var spacepanel = Ext.getCmp('spacepanel');

	var itemId = 'menu10004822';
	var url = '/produce/quality/mpreport/index.jsp?orderNo=' + orderNo;
	var title = '膜片检测报告';
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
				id : '10004822',
				text : title,
				attributes : {
					respath : url
				}
			});

}