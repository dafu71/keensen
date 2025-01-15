com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr.prototype.initEvent = function() {

	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
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
		var store = this.listPanel.store;
		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				// this.editWindow.show();
				// this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
				this.listPanel.store.reload();
				this.editWindow.hide();
			}, this);

	this.storagecombo.mon(this.storagecombo, 'select', function(record, index) {
				this.queryPanel.form.findField('condition/storageIds')
						.setValue(this.storagecombo.myvalue);
			}, this);

	this.listPanel.store.on('load', function() {
		var cnt = _this.listPanel.store.getCount();
		if (cnt == 0)
			return;

		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.diaphragm.storage.safestorage.queryStockCount.biz.ext",
			method : "post",
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var data = ret.data[0];
						Ext.getCmp('selfYellowCount').setValue('自用仓超预警卷数:'
								+ data.selfYellowCount);
						Ext.getCmp('selfRedCount').setValue('超标卷数:'
								+ data.selfRedCount);
						Ext.getCmp('selfYellowAmount').setValue('自用仓超预警米数:'
								+ data.selfYellowAmount);
						Ext.getCmp('selfRedAmount').setValue('超标米数:'
								+ data.selfRedAmount);
						Ext.getCmp('deliveryYellowCount').setValue('发货仓超预警卷数:'
								+ data.deliveryYellowCount);
						Ext.getCmp('deliveryRedCount').setValue('超标卷数:'
								+ data.deliveryRedCount);
						Ext.getCmp('deliveryYellowAmount').setValue('发货仓超预警米数:'
								+ data.deliveryYellowAmount);
						Ext.getCmp('deliveryRedAmount').setValue('超标米数:'
								+ data.deliveryRedAmount);

					} else {
						Ext.getCmp('selfYellowCount').setValue('');
						Ext.getCmp('selfRedCount').setValue('');
						Ext.getCmp('selfYellowAmount').setValue('');
						Ext.getCmp('selfRedAmount').setValue('');
						Ext.getCmp('deliveryYellowCount').setValue('');
						Ext.getCmp('deliveryRedCount').setValue('');
						Ext.getCmp('deliveryYellowAmount').setValue('');
						Ext.getCmp('deliveryRedAmount').setValue('');

					}
				}
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	})
}

com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr.prototype.onEdit = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var arr = [];
		var arr2 = []
		Ext.each(C, function(r) {
					arr.push(r.data.id);
					arr2.push(r.data.batchNo);
				})
		this.editWindow.form.findField('ids').setValue(arr.join(','));
		this.editWindow.form.findField('batchNOs').setValue(arr2.join(','));
		this.editWindow.show();
	}

	// this.listPanel.onEdit();
};

com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr.prototype.savePosition = function(
		id, newValue, oldValue) {
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.diaphragm.storage.query.savePosition.biz.ext',
		jsonData : {
			"id" : id,
			"position" : newValue,
			"oldValue" : oldValue
		},
		success : function(response, action) {
			Ext.Msg.alert("系统提示", "库位修改成功！");
		}
	});
};

com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '库存',
			'com.keensen.ump.produce.diaphragm.storage.stock.queryStock', '0,1');

	/*
	 * var _this = this; var daochu = _this.queryPanel.getForm().getValues();
	 * 
	 * this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
	 * msg : "后台正在操作,请稍候!" }); this.requestMask.show(); Ext.Ajax.request({ url :
	 * "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
	 * method : "post", jsonData : { 'map' : daochu, 'map/limited' : '10000',
	 * namingsql : 'com.keensen.ump.produce.diaphragm.storage.stock.queryStock',
	 * templateFilename : 'ks_prod_diaphragm_stock' }, success : function(resp) {
	 * var ret = Ext.decode(resp.responseText); if (ret.success) {
	 * 
	 * var fname = ret.fname; if (Ext.isEmpty(fname)) { Ext.Msg.alert("系统提示",
	 * ret.msg); return } else { if (Ext.isIE) { window
	 * .open('/default/deliverynote/seek/down4IE.jsp?fname=' + fname); } else {
	 * window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName=" +
	 * fname; } } } }, failure : function(resp, options) { var ret =
	 * Ext.decode(resp.responseText); // Ext.MessageBox.alert('失败',
	 * '请求超时或网络故障,错误编号：' + response.status); }, callback : function() {
	 * _this.requestMask.hide() } })
	 */
}

com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr.prototype.onChoice = function() {
	this.choiceWindow.items.items[0].form.reset();
	this.choiceWindow.show();
}

com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr.prototype.onCreateChoice = function() {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {

		if (!this.choiceWindow.items.items[0].form.isValid())
			return;
		var C = A.getSelectionModel().getSelections();
		var arr = [];

		Ext.each(C, function(r) {
					arr.push(r.data.id);
				})

		this.choiceWindow.ids.setValue(arr.join(','));

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.diaphragm.storage.query.updateBatchStockChoice.biz.ext",
			method : "post",
			jsonData : this.choiceWindow.items.items[0].form.getValues(),
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					_this.listPanel.store.reload();
					_this.choiceWindow.hide();
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}

}