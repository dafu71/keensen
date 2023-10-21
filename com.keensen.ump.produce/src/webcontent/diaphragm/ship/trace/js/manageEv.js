com.keensen.ump.produce.diaphragm.ship.TraceMgr.prototype.initEvent = function() {

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

}

com.keensen.ump.produce.diaphragm.ship.TraceMgr.prototype.onTumo = function() {
	var A = this.listPanel;
	var tumoList = this.tumolistPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var orderNo = r.data.orderNo;
		var planNo = r.data.planNo;
		tumoList.store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : tumoList.pagingToolbar.pageSize,
						"condition/orderNo2" : orderNo,
						"condition/planNo2" : planNo
					}
				});
		this.tumoWindow.show();
	}
}


