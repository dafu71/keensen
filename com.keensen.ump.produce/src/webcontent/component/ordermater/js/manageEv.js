com.keensen.ump.produce.component.OrdermaterMgr.prototype.initEvent = function() {

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
	
	this.listPanel.store.on('load', function() {
		var cnt = _this.listPanel.store.getCount();
		if(cnt==0){
			Ext.Msg.alert("系统提示", "没有查询到订单信息！");
			return;
		}else{
			var records = _this.listPanel.store.getRange();
			var record = records[0];
			_this.listPanel.orderNO.setValue(record.data['orderNo']);
			_this.listPanel.orderAmount.setValue(record.data['orderAmount']);
			_this.listPanel.materSpecName.setValue(record.data['materSpecName']);
		}
	})
}

com.keensen.ump.produce.component.OrdermaterMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.component.mater.queryOrderMater',
			templateFilename : 'ks_component_ordermater'
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