com.zoomlion.hjsrm.srmclient.WorkedMgr.prototype.initEvent = function() {
	// 增加查询事件
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

// 批量催办
com.zoomlion.hjsrm.srmclient.WorkedMgr.prototype.insertHastens = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		var processinstids = "";
		for (var i = 0; i < C.length; i++) {
			processinstids += C[i].data.processinstid + ",";
		}
		processinstids = Ext.util.Format.substr(processinstids, 0,
				processinstids.length - 1);
		var _this = this;
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "正在执行操作..."
						});
		this.requestMask.show();

		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.insertHastens.biz.ext',
			jsonData : {
				"processinstids" : processinstids
			},
			success : function(response, action) {
				_this.requestMask.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Msg.alert("系统提示", "批量催办成功");
				} 
			},
			failure : function(resp, opts) {
				_this.requestMask.hide();
			}
		});
	}
}

// 催办
function insertHasten(v) {
	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
	this.requestMask.show();

	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.insertHasten.biz.ext',
		jsonData : {
			"processinstid" : v
		},
		success : function(response, action) {
			_this.requestMask.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Msg.alert("系统提示", "催办成功");
			}
		},
		failure : function(resp, opts) {
			_this.requestMask.hide();
		}
	});
}