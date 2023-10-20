com.keensen.ump.produce.diaphragm.storage.StorageRkdrkMgr.prototype.initEvent = function() {

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

com.keensen.ump.produce.diaphragm.storage.StorageRkdrkMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.diaphragm.storage.stock.queryRkd',
			templateFilename : 'ks_mp_rkd'
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
			_this.requestMask.hide()
		}
	})
}

function dealrkdrk(position, batchNo, index) {
	if (Ext.isEmpty(position)) {
		Ext.Msg.alert("系统提示", "请输入库位！");
		return;
	} else {
		var A = Ext.getCmp('rkdrk-list');
		var title = '是否确认入库?';
		Ext.Msg.confirm("系统提示", title, function(btnText) {
			if (btnText == "yes") {
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.diaphragm.storage.rkdrk.rudrk.biz.ext',
					jsonData : {
						"recordId" : index,
						"batchNo" : batchNo,
						"position" : position
					},
					success : function(response, action) {
						var result = Ext.decode(response.responseText);
						if (result.ret != 1) {
							Ext.Msg.show({
								width : 350,
								title : "操作提示",
								msg : result.ret,
								icon : Ext.Msg.WARNING,
								buttons : Ext.Msg.OK,
								fn : function() {
									A.store.load({
										params : {
											"pageCond/begin" : 0,
											"pageCond/length" : A.pagingToolbar.pageSize
										}
									});
								}
							})
						} else {
							A.store.load({
								params : {
									"pageCond/begin" : 0,
									"pageCond/length" : A.pagingToolbar.pageSize
								}
							});
						}

					}
				});
			}
		})
	}
}