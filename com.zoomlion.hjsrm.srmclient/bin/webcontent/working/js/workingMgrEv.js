com.zoomlion.hjsrm.srmclient.WorkingMgr.prototype.initEvent = function() {
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

com.zoomlion.hjsrm.srmclient.WorkingMgr.prototype.onBatchDeal = function() {
	var A = this.listPanel;
	
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		var recs = A.getSelectionModel().getSelections();
		var workitemidArr = [];
		var processinstidArr = [];
		
		if (recs.length > 1) {
			var processtype = recs[0].data.processtype;
			var workitemname = recs[0].data.workitemname;
			//actionurl = record.get('actionurl');
			for (var i = 0; i < recs.length; i++) {
				var r = recs[i];
				workitemidArr.push(r.data.workitemid);
				processinstidArr.push(r.data.processinstid);
				if ((processtype != r.data.processtype)
						|| (workitemname != r.data.workitemname)) {
					Ext.Msg.alert("系统提示", "请选择相同业务类型及相同环节的工单！");
					return;
				}
			}
			var listId = "workinglistid";
			var tabId = listId;
			var spac = Ext.getCmp('spacepanel');
			
			var actionurl = "/srmclient/demo/batchDeal.jsp";
			
			spac.items.each(function(item) {// 关闭标签页
						if (item.id == ('menu' + tabId)) {
							spac.remove(item);
						}
					});

			var paramObj = {
				workitemids : workitemidArr.join(","),// 工作项id
				processinstids : processinstidArr.join(","),// 流程id
				//tabId : tabId,// 标签页ID "workitem-" + workItemId;
				listId : listId,// 待刷新的工作项列表id
				actionurl : actionurl
			}

			spac.open({
						id : tabId,
						text : '流程处理',
						attributes : {
							respath : actionurl
						},
						params : paramObj

					});
		}
	}
}

// 流程处理
function doExec() {
	var listId = "workinglistid";
	var A = Ext.getCmp(listId);

	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		var record = C[0];
	}
	// var record = Ext.getCmp(listId).store.getById(id);
	var workitemid = record.get('workitemid');
	var currentstate = record.get('currentstate');
	var actionurl = record.get('actionurl');
	var processinstid = record.get('processinstid');

	if (currentstate == '10') {

		// var tabId = "workitem-" + workitemid;
		var tabId = listId;
		var spac = Ext.getCmp('spacepanel');

		spac.items.each(function(item) {// 关闭标签页
					if (item.id == ('menu' + tabId)) {
						spac.remove(item);
					}
				});

		var paramObj = {
			workitemid : workitemid,// 工作项id
			processinstid : processinstid,// 流程id
			tabId : tabId,// 标签页ID "workitem-" + workItemId;
			listId : listId,// 待刷新的工作项列表id
			actionurl : actionurl
		}

		spac.open({
					id : tabId,
					text : '流程处理',
					attributes : {
						respath : actionurl
					},
					params : paramObj

				});

	} else {
		Ext.Msg.alert('提示', '请选择一条可处理的工作项！');
	}
}

// 转办
function reassign(lId, index) {
	var store = Ext.getCmp(lId).store;
	var rec = store.getAt(index);
	var workitemid = rec.get('workitemid');

	var reassignWindow = new com.zoomlion.hjsrm.selectParticipantsWindow({
		title : '选择转办人员',
		partTitle : '转办人员',
		divisionFront : "|",
		divisionBack : ',',
		defaultValue : '',
		singleSelect : true,
		listeners : {
			'callback' : function(v) {
				if (v) {

					var readers = Ext.util.Format.substr(v, 0, v.length - 1);
					var uids = '';
					var unames = '';
					if (readers.indexOf(",") > 0) {
						var arr = readers.split(",");
						for (var i = 0; i < arr.length; i++) {
							var temp = arr[i].split("|");
							uids += temp[1] + ",";
							unames += temp[0] + ",";
						}
						uids = Ext.util.Format.substr(uids, 0, uids.length - 1);
						unames = Ext.util.Format.substr(unames, 0,
								unames.length - 1);
					} else {
						var temp = readers.split("|");
						uids += temp[1]
						unames += temp[0];
					}

					var _this = this;
					this.requestMask = this.requestMask
							|| new Ext.LoadMask(Ext.getBody(), {
										msg : "正在执行操作..."
									});
					this.requestMask.show();

					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.reassignWorkItem.biz.ext',
						jsonData : {
							"userid" : uids,
							"username" : unames,
							"workitemid" : workitemid
						},
						success : function(response, action) {
							_this.requestMask.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {

								Ext.Msg.alert("系统提示", "转办操作成功", function() {
											store.reload();
										});
							}
						},
						failure : function(resp, opts) {
							_this.requestMask.hide();
						}
					});

				}

			}
		}
	});

	if (Ext.isEmpty(rec)) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		reassignWindow.participantsEditPanel.form.reset();
		reassignWindow.show();
		// alert("转阅" + esheetno);
	}
}
