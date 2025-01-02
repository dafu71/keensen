com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.initEvent = function() {

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

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var state = r.get('state');
				if (state == '完结') {
					Ext.Msg.alert('系统提示', '已完结记录不能删除');
					return false;
				}

			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
		var state = cell.get('state');
		var relationId = cell.get('id');
		var batchNo = cell.get('batchNo');
		var type = cell.get('type');
		
		if (opt == 'viewlist') {
			var store = this.listPanel4Dilute.store;
			store.load({
						params : {
							"condition/relationId" : relationId
						}
					});
			this.queryPanel4Dilute.relationId.setValue(relationId);
			this.queryPanel4Dilute.batchNo.setValue(batchNo);
			this.queryPanel4Dilute.type.setValue(type);
			
			this.listWindow4Dilute.show();

		}

		if (opt == 'modify') {
			if (state == '完结') {
				Ext.Msg.alert('系统提示', '已完结记录不能修改');
				return false;
			} else {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}
		}

		if (opt == 'dilute') {
			if (state == '完结') {
				Ext.Msg.alert('系统提示', '已完结记录不能做稀释配料');
				return false;
			} else {
				this.editWindow2.show();
				this.editWindow2.loadData(cell);
			}

		}
	}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'afterload',
			function(win, data) {
				var remain = this.editWindow2.remain.getValue();
				this.editWindow2.used.setMaxValue(remain);
			}, this);

}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onAdd = function() {
	this.inputWindow.items.items[0].form.reset();
	this.inputWindow.show();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onEdit = function() {
	opt = 'modify';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onEdit2 = function() {
	opt = 'dilute';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onViewList = function() {
	opt = 'viewlist';
	this.listPanel.onEdit();
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.exportExcel = function() {			
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, 'PVA母液配料',
			'com.keensen.ump.produce.diaphragm.make.pva.queryPva','0,1');
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.onBoard2 = function() {
	window.open('com.keensen.ump.produce.quality.queryBoard.flow?flag=2');
}

com.keensen.ump.produce.diaphragm.make.PvaMgr.prototype.exportExcel2 = function() {			
	doQuerySqlAndExport(this, this.queryPanel4Dilute, this.listPanel4Dilute, 'PVA稀释配料',
			'com.keensen.ump.produce.diaphragm.make.pva.queryPvaList','0,1');
}