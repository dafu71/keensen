com.zoomlion.hjsrm.techNotice.FeedBackMgr.prototype.destroy = function() {
	this.editPanel.destroy();
	this.listEmpPanel.destroy();
	this.backItemWindow.destory();
	this.backitemPanel.destory();
}

com.zoomlion.hjsrm.techNotice.FeedBackMgr.prototype.initEvent = function() {

	var attachmentParams = {
		relationId : processinstid,
		groupId : 'technotice'
	};
	Ext.getCmp('noticeattachfile').setPostParams(attachmentParams);
	Ext.getCmp('noticeattachfile').loadParams = attachmentParams;
	Ext.getCmp('noticeattachfile').loadAttachmentRemote();
	Ext.getCmp(actionsPersonId).setValue(operatorname);
	var record = new Ext.data.Record({
				processinstid : processinstid,
				"dateTime" : new Date()
			});
	this.editPanel.loadData(record);
    this.storeAction.load();
	this.storePerson.load();
	/*
	 * 提交流程处理数据之后，业务处理
	 */
	this.editPanel.mon(this.editPanel, 'aftersave', function() {
				var list = Ext.getCmp(listId);
				if (list) {// 重新加载待办任务列表
					list.store.reload();
				}
				(function	() {
					closeMyTab();
				}).defer(200);

			}, this);

	/*
	 * 提交流程处理数据之前，业务处理
	 */
	this.editPanel.mon(this.editPanel, 'beforesave', function() {
		        var selOperaotorids = this.listEmpPanel.store.getRange();
				if (selOperaotorids.length > 0) {
					var vals = [];
					Ext.each(selOperaotorids, function(record) {
								vals[vals.length] = {									
									'userid' : record.get('userid'),
									'operatorname' : record.get('operatorname')
								}
							});
				}else{
					Ext.Msg.alert("系统提示", "请选择下一环节参与人员!");
					return false;
				}
				
			}, this);

	// 删除角色操作员事件
	this.listEmpPanel.mon(this.listEmpPanel, 'delOperator',
			function(grid, vals) {
				var mk = new Ext.LoadMask(document.body, {
							msg : '后台正在操作，请稍候！',
							removeMask : true
						});
				mk.show();
				var rs1 = grid.listEmpPanel.getSelectionModel().getSelections();
				grid.listEmpPanel.store.remove(rs1);
				mk.hide();
			}, this);

	// 新增角色操作员事件
	/*this.listEmpPanel.mon(this.listEmpPanel, 'select', function() {
				this.operatorListPanel.store.removeAll();
				this.popWindow.show();

			}, this);*/

	//选择操作员，添加到参与者列表
	/*this.popWindow.mon(this.popWindow, 'addOperator', function(selections) {
				if (selections.length > 0) {
					grid = this.listEmpPanel;
					win = this.popWindow;
					roleid = this.popWindow.currentRole.roleid;
					var store = this.listEmpPanel.store;
					var vals = [];
					Ext.each(selections, function(record) {
								store.add(record);
							}, this);
					this.popWindow.hide();
				} else {
					Ext.Msg.alert('提示', '未选择记录,不能保存,请选择至少一条记录')
				}
			}, this);*/

}

/*
 * 选择人员信息
 */
/*com.zoomlion.hjsrm.techNotice.FeedBackMgr.prototype.onSelect = function() {
	this.listEmpPanel.fireEvent("select");
};*/

/*
 * 移除角色操作员方法
 */
com.zoomlion.hjsrm.techNotice.FeedBackMgr.prototype.onDelOperator = function() {
	if (!this.listEmpPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		Ext.Msg.confirm("系统提示", "您确定要移除操作员吗?", function(btnText) {
					if (btnText == "yes") {
						var selOperaotorids = this.listEmpPanel.selModel
								.getSelections();
						if (selOperaotorids.length > 0) {
							var vals = [];
							Ext.each(selOperaotorids, function(record) {
										vals[vals.length] = {
											'roleid' : record.get('roleid'),
											'operatorid' : record
													.get('operatorid')
										}
									});
							this.listEmpPanel.fireEvent("delOperator", this,
									vals);
						}
					}
				}, this);
	}
};

com.zoomlion.hjsrm.techNotice.FeedBackMgr.prototype.onSave = function() {
	//this.editPanel.saveData();
	var _this = this;
	 var records =  this.listEmpPanel.getStore().getRange();	
    if(records.length==1){
    	var vals = [];
			Ext.each(records, function(record) {
						vals[vals.length] = {						
							'userid' : record.get('userid'),
							'operatorname' : record.get('operatorname')
						}
					});		
    }else{
    	var selOperaotorids =this.listEmpPanel.selModel.getSelections();
		if (selOperaotorids.length > 0) {		
				var vals = [];
				Ext.each(selOperaotorids, function(record) {
							vals[vals.length] = {						
								'userid' : record.get('userid'),
								'operatorname' : record.get('operatorname')
							}
						});		
		}else{
			Ext.Msg.alert("系统提示", "请选择下一环节参与人员!");
			return false;
		}
    }
	var mk = new Ext.LoadMask(this.editPanel.id, {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();
	var forms = _this.editPanel.getForm().getValues();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.techNotice.noticeMgr.nextsTechNotice.biz.ext',
				jsonData : {
					persons : vals,
					techNotices:forms					
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						Ext.Msg.alert("系统提示", "提交成功", function() {
									var list = Ext.getCmp(listId);
									if (list) {// 重新加载待办任务列表
										list.store.reload();
									}
									(function	() {
										closeMyTab();
									}).defer(200);
								});
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});

}


/**
 * 回退窗口关闭
 */
com.zoomlion.hjsrm.techNotice.FeedBackMgr.prototype.onBackClose= function() {	
	Ext.getCmp("backItemShow").hide();
}

/**
 * 回退窗口，选择需要回退的环节
 */
com.zoomlion.hjsrm.techNotice.FeedBackMgr.prototype.onBackItem = function() {	
	this.backitemPanel.getStore().removeAll();
	this.backItemStore.load();
	this.backItemWindow.show();	
};

/**
 * 回退窗口提交
 */
com.zoomlion.hjsrm.techNotice.FeedBackMgr.prototype.onBack= function() {
	var _this=this;
	if (!_this.backitemPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定环节，请选择数据行！");
	} else {
		Ext.Msg.confirm("系统提示", "您确定要回退吗?", function(btnText) {
				if (btnText == "yes") {
						var selOperaotorids = _this.backitemPanel.getSelectionModel()
								.getSelections();
						if (selOperaotorids.length > 0) {
							var vals;
							Ext.each(selOperaotorids, function(record) {
										vals= {
											'id' : record.get('id'),
											'name' : record.get('name')
										}
									});
							
					    }
					    var mk = new Ext.LoadMask(this.backitemPanel.id, {
									msg : '正在保存，请稍候!',
									removeMask : true
								});
						mk.show();					    
					    
					    var forms = _this.editPanel.getForm().getValues();
						Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.techNotice.noticeMgr.nextsTechNotice.biz.ext',
						jsonData : {
							backItem : vals,
							techNotices:forms,
							resultType:{"actionType":"back"}
						},
						success : function(response, action) {
							mk.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
								Ext.Msg.alert("系统提示", "提交成功", function() {
											var list = Ext.getCmp(listId);
											if (list) {// 重新加载待办任务列表
												_this.backitemPanel.getStore().removeAll();
												Ext.getCmp("backItemShow").hide();
												list.store.reload();
											}
											(function	() {
												closeMyTab();
											}).defer(200);
										});
							}
						},
						failure : function(resp, opts) {
							mk.hide();
						}
					});			
				}else{
					
				}
			})
	}
}

com.zoomlion.hjsrm.techNotice.FeedBackMgr.prototype.onClose = function() {
	closeMyTab();
}

function closeMyTab() {
	//var tabId = "workitem-" + workitemid;
	var tabId = "workinglistid";
	var spac = Ext.getCmp('spacepanel');
	spac.items.each(function(item) {// 关闭标签页
				if (item.id == ('menu' + tabId)) {
					spac.remove(item);
					return;
				}
			});

}
