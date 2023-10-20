com.zoomlion.hjsrm.tuyangbg.Guidang1Mgr.prototype.destroy = function() {
	this.editPanel.destroy();
	this.initListActionPanel.destroy();	
}

com.zoomlion.hjsrm.tuyangbg.Guidang1Mgr.prototype.initEvent = function() {

	var attachmentParams = {
		relationId : processinstid,
		groupId : 'tybgfile'
	};
	Ext.getCmp(this.fattachId).setPostParams(attachmentParams);
	Ext.getCmp(this.fattachId).loadParams = attachmentParams;
	Ext.getCmp(this.fattachId).loadAttachmentRemote();
	Ext.getCmp(actionsPersonId).setValue(operatorname);
	var record = new Ext.data.Record({
				processinstid : processinstid,
				"dateTime" : new Date()
			});
	this.editPanel.loadData(record);
    this.storeAction.load();
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
									'roleid' : record.get('roleid'),
									'userid' : record.get('userid'),
									'operatorname' : record.get('operatorname')
								}
							});
				}else{
					Ext.Msg.alert("系统提示", "请选择下一环节参与人员!");
					return false;
				}
				
			}, this);

	

}


com.zoomlion.hjsrm.tuyangbg.Guidang1Mgr.prototype.onSave = function() {
	
	var _this = this;			
	var forms = _this.editPanel.getForm().getValues();
	
	var mk = new Ext.LoadMask(this.editPanel.id, {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();
	
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.guidangTybgNotice.biz.ext',
				jsonData : {					
					tybgNotices:forms					
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
com.zoomlion.hjsrm.tuyangbg.Guidang1Mgr.prototype.onBackClose= function() {		
	Ext.getCmp("backItemShow").hide();
}

/**
 * 回退窗口，选择需要回退的环节
 */
com.zoomlion.hjsrm.tuyangbg.Guidang1Mgr.prototype.onBackItem = function() {	
	this.backitemPanel.getStore().removeAll();	
	this.backItemStore.load();
	this.backItemWindow.show();
	
};

/**
 * 回退窗口提交
 */
com.zoomlion.hjsrm.tuyangbg.Guidang1Mgr.prototype.onBack= function() {
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
						url : 'com.zoomlion.hjsrm.tuyangbg.tuyangbg.guidangTybgNotice.biz.ext',
						jsonData : {
							backItem : vals,
							tybgNotices:forms,
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

com.zoomlion.hjsrm.tuyangbg.Guidang1Mgr.prototype.onClose = function() {
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
