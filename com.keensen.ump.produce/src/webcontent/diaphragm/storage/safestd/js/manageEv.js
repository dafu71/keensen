com.keensen.ump.produce.diaphragm.storage.SafestdMgr.prototype.initEvent = function() {
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

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);

	this.listPanel.store.on('load', function() {
		var cnt = _this.listPanel.store.getCount();
		if (cnt == 0)
			return;
		var vals = _this.queryPanel.getForm().getValues();

		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.diaphragm.storage.safestorage.querySafestdCount.biz.ext",
			method : "post",
			jsonData : vals,
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (!Ext.isEmpty(ret.data)) {
						var data = ret.data[0];
						Ext.getCmp('safestdcountamount').setValue('自用膜片安全库存:'
								+ data.amount);
						Ext.getCmp('safestdcountamount2').setValue('发货膜片安全库存:'
								+ data.amount2);
						Ext.getCmp('safestdcounttotal').setValue('安全库存合计:'
								+ data.total);

					} else {
						Ext.getCmp('safestdcountamount').setValue('');
						Ext.getCmp('safestdcountamount2').setValue('');
						Ext.getCmp('safestdcounttotal').setValue('');

					}
				}
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	})
}

com.keensen.ump.produce.diaphragm.storage.SafestdMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel,
			this.listPanel,
			'安全库存标准',
			'com.keensen.ump.produce.diaphragm.storage.safestorage.querySafestd',
			'0,1');

}

com.keensen.ump.produce.diaphragm.storage.SafestdMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};