com.zoomlion.hjsrm.techNotice.AddTechNoicetMgr.prototype.destroy = function() {	
	this.popWindow.destroy();
	this.inputWindow.destroy();
	this.listEmpPanel.destroy();	
	this.addTechNoticePanel.destroy();
	this.operatorListPanel.destroy();	
}

com.zoomlion.hjsrm.techNotice.AddTechNoicetMgr.prototype.initEvent = function() {

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
com.zoomlion.hjsrm.techNotice.AddTechNoicetMgr.prototype.onSelect = function() {
	this.listEmpPanel.fireEvent("select");
};

/*
 * 移除角色操作员方法
 */
com.zoomlion.hjsrm.techNotice.AddTechNoicetMgr.prototype.onDelOperator = function() {
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

/**
 * 提交保存流程
 */
com.zoomlion.hjsrm.techNotice.AddTechNoicetMgr.prototype.onSaveOk = function() {
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
	
	
//	var selOperaotorids = this.listEmpPanel.selModel.getSelections();
//	if (selOperaotorids.length > 0) {
//		var vals = [];
//		Ext.each(selOperaotorids, function(record) {
//					vals[vals.length] = {
//						'roleid' : record.get('roleid'),
//						'userid' : record.get('userid'),
//						'operatorname' : record.get('operatorname')
//					}
//				});
//	}

	//var form = _this.inputWindow.items.items[0].form;
    var forms = _this.addTechNoticePanel.getForm().getValues();
	var mk = new Ext.LoadMask(this.inputWindow.id, {
				msg : '正在保存，请稍候!',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.zoomlion.hjsrm.techNotice.noticeMgr.addTechNotice.biz.ext',
				jsonData : {
					persons : vals,
					techNotices:forms					
				},
				success : function(response, action) {
					mk.hide();
					// 返回值处理
					var result = Ext.decode(response.responseText);
					if (result.success) {
						_this.inputWindow.hide();
						Ext.Msg.alert("系统提示", "保存成功", function() {
									Ext.getCmp(listId).store.reload();									
									_this.addTechNoticePanel.getForm().reset();
									_this.operatorListPanel.store.removeAll();
									
								});
					}
				},
				failure : function(resp, opts) {
					mk.hide();
				}
			});
};
