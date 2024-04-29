com.keensen.ump.produce.diaphragm.ship.OrderTraceMgr.prototype.initEvent = function() {

	var _this = this;
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

}

function queryDelivery(v) {
	var requestMask = new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : {
				'condition/orderNo' : v
			},
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.order.queryDeliveryBatchNo',
			templateFilename : 'ks_component_order_batchNo'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					var fname = ret.fname;
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				}
			}

		},
		callback : function() {
			requestMask.hide()
		}
	})
}