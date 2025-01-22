com.keensen.ump.produce.report.board.HanoverMgr.prototype.initEvent = function() {
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
}

com.keensen.ump.produce.report.board.HanoverMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.report.board.HanoverMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			var materSpecCode = A.get('materSpecCode');
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();

		}
	}
}

com.keensen.ump.produce.report.board.HanoverMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '分析室交接班看板',
			'com.keensen.ump.produce.quality.handover.queryHandover');
}

com.keensen.ump.produce.report.board.HanoverMgr.prototype.onAdd = function() {
	this.inputWindow.show();
	this.inputWindow.boardDate.setValue(new Date());

}

com.keensen.ump.produce.report.board.HanoverMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();

}

com.keensen.ump.produce.report.board.HanoverMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.report.board.HanoverMgr.prototype.onBoard = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	var boardDate = '';
	if (B.length == 0) {
		//Ext.Msg.alert("系统提示", "请选择数据行!");
		//return
		window
				.open('com.keensen.ump.produce.report.queryHandoverBoard.flow?boardDate='
						+ boardDate);
	} else {
		var A = B[0];
		var boardDate = A.get('boardDate');
		window
				.open('com.keensen.ump.produce.report.queryHandoverBoard.flow?boardDate='
						+ boardDate);

	}

}