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