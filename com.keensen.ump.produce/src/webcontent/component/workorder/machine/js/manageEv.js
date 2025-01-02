com.keensen.ump.produce.component.workorder.machineMgr.prototype.initEvent = function() {
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

com.keensen.ump.produce.component.workorder.machineMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.produce.component.workorder.machineMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.produce.component.workorder.machineMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.workorder.machineMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.produce.component.workorder.machineMgr.prototype.onArrange = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var type = records[0].data.type;
		if(type != '裁叠膜'){
			Ext.Msg.alert("系统提示", "请选定裁叠膜机台！");
			return;
		}
		this.chooseWindow.show();
		this.listPanel2.getSelectionModel().clearSelections();
	}

}

com.keensen.ump.produce.component.workorder.machineMgr.prototype.onSaveArrange = function() {
	var _this = this;
	var A = this.listPanel;
	var B = this.listPanel2;
	var _this = this;
	if (!B.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定机台数据！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var code = records[0].data.code;
		var records2 = B.getSelectionModel().getSelections();
		var relationCode = [];
		Ext.each(records2, function(r) {
					relationCode.push(r.data.code);
				});

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.component.workorder2.saveBatchMachineRelation.biz.ext",
			method : "post",
			jsonData : {
				code : code,
				relationCode : relationCode.join(",")

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						var vals = {};
						_this.listPanel.store.reload();
						_this.chooseWindow.hide();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}