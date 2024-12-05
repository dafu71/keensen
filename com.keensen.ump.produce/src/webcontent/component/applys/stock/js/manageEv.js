com.keensen.ump.produce.component.applys.stockMgr.prototype.initEvent = function() {
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
	this.queryPanel6.mon(this.queryPanel6, 'query', function(form, vals) {
		var store = this.listPanel6.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel6.pagingToolbar.pageSize
					}
				});
	}, this);

}

com.keensen.ump.produce.component.applys.stockMgr.prototype.exportExcel = function() {
	var _this = this;

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : this.queryPanel.form.getValues(),
			namingsql : 'com.keensen.ump.produce.component.applys.queryStock',
			templateFilename : 'ks_component_stock_export'
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

com.keensen.ump.produce.component.applys.stockMgr.prototype.onHHOut = function() {
	var _this = this;
	var records = this.listPanel.getSelectionModel().getSelections();
	// var records = this.listPanel.store.getRange();
	if (records.length == 0) {
		Ext.Msg.alert("系统提示", "至少需要有一条记录！")
		return false;
	} else {
		var arr = [];
		for (var i = 0; i < records.length; i++) {
			var batchNo = records[i].data.batchNo;
			var type = records[i].data.type;
			if (type != '家用膜') {
				Ext.Msg.alert("系统提示", "请选择家用膜批量出库！")
				return false;
			}
			arr.push("'" + batchNo + "'");
		}
		var batchNos = arr.join(',');

		Ext.Msg.confirm("操作确认", "您确实要出库吗?", function(A) {
			if (A == "yes") {
				var mk = new Ext.LoadMask(Ext.getBody(), {
							msg : '正在保存，请稍候!',
							removeMask : true
						});
				mk.show();
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.component.applys.outofstock.biz.ext',
					jsonData : {
						'map/batchNos' : batchNos,
						"map/type" : '家用膜'
					},
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							_this.listPanel.store.reload();

						} else {
							mk.hide();
						}
					},
					failure : function(resp, opts) {
						mk.hide();
					}
				});
			}
		})
	}
}

// 扫码
com.keensen.ump.produce.component.applys.stockMgr.prototype.onScan = function() {

	var obj = this.inputWindow.batchNo;
	var batchNo = obj.getValue();
	if (Ext.isEmpty(batchNo)) {
		Ext.Msg.alert("系统提示", "请输入批号！");
		return;
	}

	this.inputWindow.saveData();

}

com.keensen.ump.produce.component.applys.stockMgr.prototype.onOut = function() {
	// this.inputWindow.form.reset();
	this.inputWindow.show();
}

com.keensen.ump.produce.component.applys.stockMgr.prototype.destroy = function() {
	this.inputWindow.destroy();
	this.stockOutWindow.destroy();
}

com.keensen.ump.produce.component.applys.stockMgr.prototype.onStockOut = function() {
	// this.inputWindow.form.reset();
	this.stockOutWindow.show();
}