com.keensen.ump.produce.component.storage.WareHousingListMgr.prototype.initEvent = function() {
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

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'beforeSave',
			function() {
				var batchNoStr = this.inputWindow.batchNoStr.getValue();
				if (!Ext.isEmpty(batchNoStr)) {
					var regEx = new RegExp("\\n", "gi");
					batchNoStr = batchNoStr.replace(regEx, ",");
					batchNoStr = batchNoStr.replaceAll('，', ',');
					batchNoStr = batchNoStr.replaceAll(' ', ',');
					var arr = [];
					arr = batchNoStr.split(',');
					var arr2 = [];
					for (var i = 0; i < arr.length; i++) {
						if (!Ext.isEmpty(arr[i].trim()))
							arr2.push("'" + arr[i].trim() + "'");
					}
					arr2 = unique(arr2);
					
					this.inputWindow.batchNos.setValue(arr2.join(",") == "''"
							? null
							: arr2.join(","));
				}

			}, this);
}

com.keensen.ump.produce.component.storage.WareHousingListMgr.prototype.onAdd = function() {

	this.inputWindow.form.reset();
	this.inputWindow.amount.setValue(1);
	this.inputWindow.specType.setValue('工业');
	this.inputWindow.show();
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