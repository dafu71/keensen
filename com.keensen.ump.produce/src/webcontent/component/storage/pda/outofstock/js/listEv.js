com.keensen.ump.produce.component.storage.OutOfStockListMgr.prototype.initEvent = function() {
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

com.keensen.ump.produce.component.storage.OutOfStockListMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(
			this,
			this.queryPanel,
			this.listPanel,
			'出库查询',
			'com.keensen.ump.produce.component.storage.queryOutOfStock',
			'0,1');

}

com.keensen.ump.produce.component.storage.OutOfStockListMgr.prototype.onQueryByBatchNos = function() {

	Ext.Msg.prompt('多元件序号查询', '多个序号请用逗号分隔，或一行一个批次', function(btn, text) {
		if (btn == 'ok') {
			if (Ext.isEmpty(text)) {
				Ext.Msg.alert("系统提示", "请输入批次号！");
				return;
			}

			var store = this.listPanel.store;
			var batchNoStr = text;
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

			store.baseParams = {
				'condition/batchNoStr' : arr2.join(",") == "''"
						? null
						: arr2.join(",")
			};
			store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listPanel.pagingToolbar.pageSize
						}
					});
		}
	}, this, true);
}

function unique(arr) {
	
	if (!Array.isArray(arr)) {
		console.log('type error!')
		return
	}
	var array = [];
	for (var i = 0; i < arr.length; i++) {
		if (array.indexOf(arr[i]) === -1) {
			array.push(arr[i])
		}
	}
	return array;
}