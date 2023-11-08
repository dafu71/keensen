com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr.prototype.initEvent = function() {

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

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);

	this.storagecombo.mon(this.storagecombo, 'select', function(record, index) {
				this.queryPanel.form.findField('condition/storageIds')
						.setValue(this.storagecombo.myvalue);
			}, this);
}

com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
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