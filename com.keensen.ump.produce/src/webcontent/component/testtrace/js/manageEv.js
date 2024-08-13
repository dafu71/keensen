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

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

}

com.keensen.ump.produce.component.testtraceMgr.prototype.saveProdSpecName = function(
		id, newValue, oldValue) {
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.testtrace.saveTestTrace.biz.ext',
		jsonData : {
			"entity/id" : id,
			"entity/reserve1" : newValue
		},
		success : function(response, action) {
			Ext.Msg.alert("系统提示", "修改成功！");
		}
	});
};

com.keensen.ump.produce.component.testtraceMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.component.testtraceMgr.prototype.onScan = function() {
	var _this = this;
	var batchNo = this.inputPanel.batchNo.getValue();
	// var testType = this.inputPanel.testType.getValue();

	var obj = this.inputPanel.testType.getValue();
	var arr = ['换产试卷', '正常试卷', '发货试卷', '生管试卷', '返厂试卷', '实验试卷'];
	var testType = arr[obj.getRawValue()];

	var prodSpecName = this.inputPanel.prodSpecName.getValue();

	if (Ext.isEmpty(batchNo) || Ext.isEmpty(prodSpecName)) {
		Ext.Msg.alert("系统提示", "请输入完整信息");
		return;
	}
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.component.testtrace.query4Scan.biz.ext',
				jsonData : {
					"condition/batchNo" : batchNo,
					"condition/testType" : testType,
					"condition/prodSpecName" : prodSpecName
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

function confirm(v) {
	var A = Ext.getCmp('testtracemgr-list');
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.testtrace.confirm.biz.ext',
		jsonData : {
			"id" : v
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.ret != 1) {
				Ext.Msg.show({
					width : 350,
					title : "操作提示",
					msg : result.ret,
					icon : Ext.Msg.WARNING,
					buttons : Ext.Msg.OK,
					fn : function() {
						A.store.load({
									params : {
										"pageCond/begin" : 0,
										"pageCond/length" : A.pagingToolbar.pageSize
									}
								});
					}
				})
			} else {
				A.store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : A.pagingToolbar.pageSize
							}
						});
			}

		}
	});
}

com.keensen.ump.produce.component.testtraceMgr.prototype.onDelete = function() {
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