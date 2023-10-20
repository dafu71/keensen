com.zoomlion.hjsrm.kcgl.BuyerMgr.prototype.initEvent = function() {
	this.queryPanel.mon(this.queryPanel, 'query', function() {
		var _val = this.queryPanel.getForm().getValues() || {};
		this.listPanel.store.baseParams = _val;
		this.listPanel.store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onEdit();
			}, this);
			
	 //修改
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
}

com.zoomlion.hjsrm.kcgl.BuyerMgr.prototype.onAdd = function() {
	this.inputWindow.show();
};

com.zoomlion.hjsrm.kcgl.BuyerMgr.prototype.onInsert = function() {
	var _this = this;
	if (!this.inputPanel.form.isValid()) {
			return;
	}
	this.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
	this.requestMask.show();
	Ext.Ajax.request({
			url : "com.zoomlion.hjsrm.kcgl.stockmanage.insertBuyer.biz.ext",
			jsonData : this.inputPanel.form.getValues(),
			success : function(resp) {
					_this.inputPanel.form.reset();
					_this.inputWindow.hide();
					_this.listPanel.store.reload();					
						
			},
			callback : function() {
				_this.requestMask.hide()
			}
	})		
};

com.zoomlion.hjsrm.kcgl.BuyerMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.zoomlion.hjsrm.kcgl.BuyerMgr.prototype.onEdit = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B.length == 1) {
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "请选择一条数据行!");
		return
	}
}

