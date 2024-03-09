com.keensen.ump.qinsen.produce.printrecordsMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

				var store = this.listPanel.store;

				store.baseParams = this.queryPanel.getForm().getValues();
				store.load({});
			}, this);

}

com.keensen.ump.qinsen.produce.printrecordsMgr.prototype.copyBatches = function() {
	var recs = this.listPanel.getSelectionModel().getSelections();
	if (recs) {
		var arr = new Array();
		for (var i = 0; i < recs.length; i++) {
			arr.push(recs[i].data.batchNoStr)
		}
		//去重
		const uniqueArray = Array.from(new Set(arr));
		var batchNoStr = uniqueArray.join(',');
		//todo
	}
}

