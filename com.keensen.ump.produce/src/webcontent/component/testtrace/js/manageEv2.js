com.keensen.ump.produce.component.testtrace2Mgr.prototype.initEvent = function() {

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
	
	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

}

com.keensen.ump.produce.component.testtrace2Mgr.prototype.saveTestCondition = function(
		id, newValue, oldValue) {
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.testtrace.saveTestTrace.biz.ext',
		jsonData : {
			"entity/id" : id,
			"entity/testCondition" : newValue
		},
		success : function(response, action) {
			Ext.Msg.alert("系统提示", "修改成功！");
		}
	});
};

com.keensen.ump.produce.component.testtrace2Mgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.testtrace2Mgr.prototype.onScan = function() {
	var _this = this;
	var batchNo = this.inputPanel.batchNo.getValue();
	//var testCondition = this.inputPanel.testCondition.getValue();
	
	var obj = this.inputPanel.testCondition.getValue();
	var arr = ['不配液加不清管道','不配液加清管道','配液加不清管道','配液加清管道'];
	var testCondition = arr[obj.getRawValue()];
	if (Ext.isEmpty(batchNo)) {
		return;
	}
		
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.testtrace.query4Scan.biz.ext',
				jsonData : {
					"condition/batchNo" : batchNo,
					"condition/testCondition" : testCondition
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

com.keensen.ump.produce.component.testtrace2Mgr.prototype.onDelete = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		Ext.Msg.confirm("系统提示", "您确定要删除当前数据吗？", function(D) {
			if (D == "yes") {
				
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.produce.component.testtrace.delete.biz.ext',
					jsonData : {
						"entitys/id" : id
					},
					success : function(response, action) {
						var result = Ext.decode(response.responseText);
						if (result.success) {
							Ext.Msg.alert("系统提示", "删除成功！", function() {
								A.store.load({
									params : {
										"pageCond/begin" : 0,
										"pageCond/length" : A.pagingToolbar.pageSize
									}
								});

							})

						}

					}
				});
			}
		}, this)

	}
}