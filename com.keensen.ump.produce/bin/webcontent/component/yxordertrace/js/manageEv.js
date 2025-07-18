com.keensen.ump.produce.component.yxordertraceMgr.prototype.initEvent = function() {
	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;

		var orderNoStr = this.queryPanel.orderNoStr.getValue();
		if (!Ext.isEmpty(orderNoStr)) {
			var regEx = new RegExp("\\n", "gi");
			orderNoStr = orderNoStr.replace(regEx, ",");
			orderNoStr = orderNoStr.replaceAll('，', ',');
			orderNoStr = orderNoStr.replaceAll(' ', '');
			var arr = [];
			arr = orderNoStr.split(',');

			var arr2 = [];
			for (var i = 0; i < arr.length; i++) {
				arr2.push("'" + arr[i] + "'");
			}
			this.queryPanel.orderNos.setValue(arr2.join(","));
		}

		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

}

com.keensen.ump.produce.component.yxordertraceMgr.prototype.destroy = function() {

}

com.keensen.ump.produce.component.yxordertraceMgr.prototype.exportExcel = function() {
	/*
	 * var _this = this; var daochu = _this.queryPanel.getForm().getValues();
	 * 
	 * this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	 * msg : "后台正在操作,请稍候!" }); this.requestMask.show(); Ext.Ajax.request({ url :
	 * "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
	 * method : "post", jsonData : { 'map' : daochu, 'map/limited' : '2000',
	 * namingsql : 'com.keensen.ump.produce.component.order.queryYxOrderTrace',
	 * templateFilename : 'ks_component_yxordertrace_export' }, success :
	 * function(resp) { var ret = Ext.decode(resp.responseText); if
	 * (ret.success) {
	 * 
	 * var fname = ret.fname; if (Ext.isIE) {
	 * window.open('/default/deliverynote/seek/down4IE.jsp?fname=' + fname); }
	 * else { window.location.href =
	 * "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" + fname; } } },
	 * callback : function() { _this.requestMask.hide() } })
	 */

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '在产订单跟进',
			'com.keensen.ump.produce.component.order.queryYxOrderTrace', '0,1');
}

com.keensen.ump.produce.component.yxordertraceMgr.prototype.modifySn = function() {
	var _this = this;

	_this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();

	Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.order.modifySn.biz.ext",
				method : "post",
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);

					if (ret.success) {
						Ext.Msg.alert("系统提示", '更新成功')

					} else {
						Ext.Msg.alert("系统提示", '更新失败')
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}

com.keensen.ump.produce.component.yxordertraceMgr.prototype.onCloseOrder = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {

		var arr = []
		for (var i = 0; i < B.length; i++) {
			var A = B[i];
			var id = A.data.id;
			arr.push(id)
		}
		
		this.editWindow4CloseState.ids.setValue(arr.join(','));
		this.editWindow4CloseState.show();

	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}