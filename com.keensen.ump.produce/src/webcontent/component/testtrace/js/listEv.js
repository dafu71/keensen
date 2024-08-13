com.keensen.ump.produce.component.testtracelistMgr.prototype.initEvent = function() {

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

	// 查询事件
	this.queryPanel3.mon(this.queryPanel3, 'query', function(form, vals) {
		var store = this.listPanel3.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel3.pagingToolbar.pageSize
					}
				});
	}, this);

	// 查询事件
	this.queryPanel6.mon(this.queryPanel6, 'query', function(form, vals) {
				var store = this.listPanel6.store;
				store.baseParams = vals;
				store.load();
			}, this);

	this.listPanel6.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);

			}, this);
}

com.keensen.ump.produce.component.testtracelistMgr.prototype.onQuery = function() {

	var C = this.listPanel.getSelectionModel().getSelections();
	if (C.length > 0) {
		this.queryPanel3.getForm().findField('condition/batchNo')
				.setValue(C[0].data.batchNo);
		var store = this.listPanel3.store;
		store.baseParams = {
			'condition/batchNo' : C[0].data.batchNo
		};
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel3.pagingToolbar.pageSize
					}
				});

	} else {
		this.queryPanel3.getForm().findField('condition/batchNo').setValue();
	}
	this.chooseWindow.show();
}

com.keensen.ump.produce.component.testtracelistMgr.prototype.onQueryCalendar = function() {
	this.calendarWindow.show();
}

com.keensen.ump.produce.component.testtracelistMgr.prototype.saveIfRest = function(
		calendarDate, newValue, oldValue) {
	var _this = this;

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.testtrace.saveBaseCalendar.biz.ext',
		jsonData : {
			"entity/calendarDate" : calendarDate,
			"entity/ifRest" : newValue
		},
		success : function(response, action) {
			_this.listPanel6.store.reload();
			// Ext.Msg.alert("系统提示", "客户修改成功！");
		},
		callback : function() {
			// _this.requestMask.hide()
		}
	});
}