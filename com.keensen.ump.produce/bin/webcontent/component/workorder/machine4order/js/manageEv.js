com.keensen.ump.produce.component.workorder.Machine4orderMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		if (Ext.isEmpty(vals)) {
			vals = {

			};
		}
		vals['nameSqlId'] = 'com.keensen.ump.produce.component.workorder.queryMachine4Order';

		store.baseParams = vals;

		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

}

com.keensen.ump.produce.component.workorder.Machine4orderMgr.prototype.onArrange = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else{
		
		this.chooseWindow.show();
		this.listPanel2.getSelectionModel().clearSelections();
	}
		
}

com.keensen.ump.produce.component.workorder.Machine4orderMgr.prototype.onSaveArrange = function() {
	var _this = this;
	var A = this.listPanel;
	var B = this.listPanel2;
	var _this = this;
	if (!B.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定机台数据！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var orderIds = [];
		Ext.each(records, function(r) {
					orderIds.push(r.data['orderId']);
				});
		var records2 = B.getSelectionModel().getSelections();
		var machineCodes = [];
		Ext.each(records2, function(r) {
					var code = "'" + r.data['code'] + "'";
					machineCodes.push(code);
				});

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.component.workorder2.saveBatchMachine4Order.biz.ext",
			method : "post",
			jsonData : {
				orderIds : orderIds.join(","),
				machineCodes : machineCodes.join(",")

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						var vals = {};
						vals['nameSqlId'] = _this.nameSqlId;
						_this.listPanel.store.baseParams = vals;
						_this.listPanel.store.reload();
						_this.chooseWindow.show();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}