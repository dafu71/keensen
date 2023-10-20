com.zoomlion.hjsrm.kcgl.AnswerMgr.prototype.initEvent = function() {
	var self = this;
	
	this.queryPanel.mon(this.queryPanel, 'query', function() {
			if(Ext.isEmpty(lifnr)){
				//Ext.Msg.alert("系统提示", "无供应商编码！");
				//return;
			}
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
			
	this.viewWindow.loadData = function(){
		var B = self.listPanel.getSelectionModel().getSelections();
		var record = new Ext.data.Record();
		record.set('pkid', B[0].get('pkid'));
		self.viewWindow.items.items[0].loadData(record);
		
	};

}

com.zoomlion.hjsrm.kcgl.AnswerMgr.prototype.onEdit = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B.length == 1) {
		var archive = B[0].get('archive');

		if(archive == 'Y'){
			Ext.Msg.alert("系统提示", "该计划已经归档，无法答交！");
			return;
		}
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "请选择一条数据行!");
		return
	}
}

com.zoomlion.hjsrm.kcgl.AnswerMgr.prototype.onView = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var record = new Ext.data.Record();
			record.set('pkid', B[0].get('pkid'));
			this.viewWindow.items.items[0].loadData(record);
			this.viewWindow.show();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};