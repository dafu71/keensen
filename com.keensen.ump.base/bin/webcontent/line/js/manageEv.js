com.keensen.ump.base.LineMgr.prototype.initEvent = function() {
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
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);
}

com.keensen.ump.base.LineMgr.prototype.onDel = function() {
	// this.listPanel.onDel();
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var lineId = r.data.lineId;
		var state = r.data.state;
		
		if(state == 'X'){
			Ext.Msg.alert("系统提示", "请选择在用生产线！");
			return false;
		}
		
		Ext.Msg.confirm("系统提示", "您确定当前生产线状态变更为失效吗？", function(D) {
			if (D == "yes") {
				Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.keensen.ump.base.work.updateLineState.biz.ext',
							jsonData : {
								"entitys/lineId" : lineId,
								"entitys/state" : state
							},
							success : function(response, action) {
								var result = Ext.decode(response.responseText);
								if (result.success) {
									Ext.Msg.alert("系统提示", "操作成功！", function() {
												A.store.reload({});

											})

								}

							}
						});
			}
		}, this)
	}
};

com.keensen.ump.base.LineMgr.prototype.onUnDel = function() {
	// this.listPanel.onDel();
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var lineId = r.data.lineId;
		var state = r.data.state;
		
		if(state == 'A'){
			Ext.Msg.alert("系统提示", "请选择已失效生产线！");
			return false;
		}
		
		Ext.Msg.confirm("系统提示", "您确定要恢复当前生产线吗？", function(D) {
			if (D == "yes") {
				Ext.Ajax.request({
							method : "post",
							scope : this,
							url : 'com.keensen.ump.base.work.updateLineState.biz.ext',
							jsonData : {
								"entitys/lineId" : lineId,
								"entitys/state" : state
							},
							success : function(response, action) {
								var result = Ext.decode(response.responseText);
								if (result.success) {
									Ext.Msg.alert("系统提示", "操作成功！", function() {
												A.store.reload({});

											})

								}

							}
						});
			}
		}, this)
	}
};

com.keensen.ump.base.LineMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.base.storage.exportStorage.biz.ext",
		method : "post",
		jsonData : daochu,
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					var fname = ret.fname;
					if (Ext.isIE) {
						window
								.open('/default/deliverynote/seek/down4IE.jsp?fname='
										+ fname);
					} else {
						window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
								+ fname;
					}
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.base.LineMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.base.LineMgr.prototype.destroy = function() {
	// this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.base.LineMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};