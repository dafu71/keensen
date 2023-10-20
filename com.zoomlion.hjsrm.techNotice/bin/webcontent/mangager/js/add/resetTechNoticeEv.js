com.zoomlion.hjsrm.techNotice.ResetTechNoicetMgr.prototype.destroy = function() {	
	this.popWindow.destroy();
	this.inputWindow.destroy();
	this.listEmpPanel.destroy();	
	this.resetTechNoticePanel.destroy();
	this.operatorListPanel.destroy();	
}

com.zoomlion.hjsrm.techNotice.ResetTechNoicetMgr.prototype.initEvent = function() {	
	
    this.resetTechNoticePanel.getForm().reset();
    this.resetTechNoticePanel.getForm().findField('attachRemk').setValue("除简单示意图，不能附电子图纸，如涉及图纸下发，由编制人自行申请打印，并将附图清单作为附件上传。");
	this.resetTechNoticePanel.getForm().findField('techRemk').setValue("1、重要度级别按照Q/ZLHJ 2110055-2014确定；\n 2、执行部门指具体操作部门，可以为多个。");
	
	this.operatorListPanel.store.removeAll();	
	this.storePerson.load();
	
	var attachmentParams = {
		relationId : processinstid,
		groupId : 'technotice'
	};
	Ext.getCmp('noticeattachfile').setPostParams(attachmentParams);
	Ext.getCmp('noticeattachfile').loadParams = attachmentParams;
	Ext.getCmp('noticeattachfile').loadAttachmentRemote();
	var record = new Ext.data.Record({
				processinstid : processinstid,
				"dateTime" : new Date()
			});
	this.resetTechNoticePanel.loadData(record);
	this.storeAction.load();
	// 新增角色操作员事件
	this.listEmpPanel.mon(this.listEmpPanel, 'select', function() {
				this.operatorListPanel.store.removeAll();
				this.popWindow.show();

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

	//选择操作员，添加到参与者列表
	this.popWindow.mon(this.popWindow, 'addOperator', function(selections) {
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
			}, this);

}

/**
 * 选择人员信息
 */
com.zoomlion.hjsrm.techNotice.ResetTechNoicetMgr.prototype.onSelect = function() {
	this.listEmpPanel.fireEvent("select");
};

/*
 * 移除角色操作员方法
 */
com.zoomlion.hjsrm.techNotice.ResetTechNoicetMgr.prototype.onDelOperator = function() {
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

com.zoomlion.hjsrm.techNotice.ResetTechNoicetMgr.prototype.onClose = function() {
	closeMyTab();
}

/**
 * 提交保存流程
 */
com.zoomlion.hjsrm.techNotice.ResetTechNoicetMgr.prototype.onSaveOk = function() {
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
    
    var forms = _this.resetTechNoticePanel.getForm().getValues();
	var mk = new Ext.LoadMask(this.resetTechNoticePanel.id, {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.techNotice.noticeMgr.updateTechNotice.biz.ext',
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
};

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
