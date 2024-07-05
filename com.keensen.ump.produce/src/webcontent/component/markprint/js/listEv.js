com.keensen.ump.produce.component.markprintlistMgr.prototype.initEvent = function() {

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

com.keensen.ump.produce.component.markprintlistMgr.prototype.onPrint = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	}
	var records = A.getSelectionModel().getSelections();

	for (var i = 0; i < records.length; i++) {
		var ifPrint = records[i].data.ifPrint;
		if (ifPrint == '否') {
			Ext.Msg.alert("系统提示", "请选择可以打印的元件！");
			return;
		}
	}
	var templateName = records[0].data.templateName;
	for (var i = 0; i < records.length; i++) {
		var _templateName = records[i].data.templateName;
		if (templateName != _templateName) {
			Ext.Msg.alert("系统提示", "请选择相同唛头图纸编号的元件！");
			return;
		}
	}
	var list = [];
	Ext.each(records, function(r) {
				var prodBatchNo = r.data['prodBatchNo'];
				list.push("'" + prodBatchNo + "'");
			});
	var prodBatchNos = list.join(',');
	var f = document.getElementById('componentmarkprintlistForm');
	f.prodBatchNos.value = prodBatchNos;
	f.code.value = records[0].data.code;
	var actionUrl = 'com.keensen.ump.produce.component.printMarks.flow?time='
			+ Math.random() + '&token=' + Date.now();

	f.action = actionUrl;
	f.submit();

}