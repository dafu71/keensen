com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;

		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.listPanel.store.on('load', function() {
		var _me = _this;
		var vals = _this.queryPanel.getForm().getValues();

		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
					url : "com.keensen.ump.qinsen.cdm.countRecords.biz.ext",
					method : "post",
					jsonData : {
						'map' : vals
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							if (!Ext.isEmpty(ret.data) && ret.data[0].cnt != 0) {
								var data = ret.data[0];
								Ext
										.getCmp('totalCdmLengthTxt')
										.setValue('合计长度(m):' + data.totalLength);
								Ext.getCmp('totalQuantityTxt').setValue('合计页数:'
										+ data.totalQuantity);
								Ext.getCmp('totalUnusedQuantityTxt')
										.setValue('合计未卷页数:'
												+ data.totalUnusedQuantity);

							} else {
								Ext.getCmp('totalCdmLengthTxt')
										.setValue('合计长度(m):');
								Ext.getCmp('totalQuantityTxt')
										.setValue('合计页数:');
								Ext.getCmp('totalUnusedQuantityTxt')
										.setValue('合计未卷页数:');
							}
						}
					},
					callback : function() {
						_me.requestMask.hide()
					}
				})

	});

}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
	// this.editMpdWindow.destroy();
	this.defectTmWin.destroy();
	this.defectZmWin.destroy();
}

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onPrintCaidieMoTag = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var rec = C[0];
		var f = document.getElementById('printForm');
		f.batchId.value = rec.data.batchId;
		f.batchNo.value = rec.data.batchNo;
		f.orderNo.value = rec.data.orderNo;
		f.tumoBatchNo.value = rec.data.tumoBatchNo;
		f.prodSpecName.value = rec.data.cdmSpecName;
		f.isToMixStr.value = rec.data.isToMixStr;
		f.quantity.value = rec.data.quantity;
		f.numPerWad.value = rec.data.numPerWad ? rec.data.numPerWad : '';
		f.blankingSize.value = rec.data.blankingSize
				? rec.data.blankingSize
				: '';
		f.denseNet.value = rec.data.denseNet ? rec.data.denseNet : '';
		var actionUrl = 'com.keensen.ump.qinsen.printCaidiemoTag.flow?token='
				+ Date.now();
		f.action = actionUrl;
		f.submit();

	}

};

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.qinsen.cdm.queryRecords',
			templateFilename : 'ks_inst_caidiemo'
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

com.keensen.ump.qinsen.produce.CaidiemoMgr.prototype.onAdd = function() {
	this.inputWindow.show();
}
