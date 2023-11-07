com.keensen.ump.produce.component.TraceMgr.prototype.initEvent = function() {

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

com.keensen.ump.produce.component.TraceMgr.prototype.onView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var relationId = r.data.id;;
		var store = this.listPanel5.store;
		this.viewWindow.show();
		this.viewPanel.loadData(r);
		store.load({
					params : {
						'map/relationId' : relationId
						// 修改时加载
					}
				});
	}
};

com.keensen.ump.produce.component.TraceMgr.prototype.onSavePlan = function() {
	var _this = this;
	Ext.Msg.confirm("操作确认", "该计划您确实已经完成了吗?", function(B) {
		if (B == "yes") {

			var A = _this.listPanel;
			if (!A.getSelectionModel().getSelected()) {
				Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
			} else {
				var C = A.getSelectionModel().getSelections();
				var r = C[0];
				var id = r.data.id;
				
				_this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				_this.requestMask.show();
				Ext.Ajax.request({
					url : "com.keensen.ump.produce.component.order.finishPlan.biz.ext",
					method : "post",
					jsonData : {
						id : id
					},
					success : function(response, action) {
						A.store.load({
									params : {
										"pageCond/begin" : 0,
										"pageCond/length" : A.pagingToolbar.pageSize
									}
								});
					},
					callback : function() {
						_this.requestMask.hide()
					}
				})
			}
		}
	})
};

com.keensen.ump.produce.component.TraceMgr.prototype.onSavePlan2 = function() {
	var _thispanel = this.inputPanel2;
	var _thislist = this.listPanel2;
	var orderNo = this.inputPanel2.form.findField("entity/orderNo").getValue();
	if (_thispanel.form.isValid()) {
		_thispanel.form.submit({
					method : "POST",
					url : _thispanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {
							Ext.MessageBox.alert("操作提示", "保存成功!", function() {
										_thislist.store.load({
													params : {
														"condition/orderNo" : orderNo
													}
												});
									})
						}
					},
					failure : function(C, B) {
						if (B.result.exception) {
							var A, E;
							if (B.result.exception.extype == "biz") {
								E = "【" + B.result.exception.message + "】";
								A = Ext.Msg.WARNING;
							} else {
								A = Ext.Msg.ERROR;
								E = "【系统发生异常！请与管理员联系】";
							}
							Ext.Msg.show({
										width : 350,
										title : "操作提示",
										msg : E,
										icon : A,
										buttons : Ext.Msg.OK
									})
						}
					}
				})
	}
};
