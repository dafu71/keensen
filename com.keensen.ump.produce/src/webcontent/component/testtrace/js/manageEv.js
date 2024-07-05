com.keensen.ump.produce.component.testtraceMgr.prototype.initEvent = function() {

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

com.keensen.ump.produce.component.testtraceMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.testtraceMgr.prototype.onScan = function() {
	var _this = this;
	var batchNo = this.inputPanel.batchNo.getValue();
	var testType = this.inputPanel.testType.getValue();
	if (Ext.isEmpty(batchNo)) {
		return;
	}
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.testtrace.query4Scan.biz.ext',
				jsonData : {
					"condition/batchNo" : batchNo,
					"condition/testType" : testType
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					if (result.code != 1) {
						Ext.Msg.alert("系统提示", result.msg, function() {
									_this.inputPanel.batchNo.setValue('');
								});
					} else {
						Ext.Msg.alert("系统提示", result.msg, function() {
									_this.listPanel.store.reload();
									_this.inputPanel.batchNo.setValue('');
								});

					}
				}
			});
}