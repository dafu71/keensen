/*
 * 角色操作事件
 */
com.zoomlion.hjsrm.role.OperatorInRoleMgr.prototype.initEvent = function() {
	// 新增角色操作员事件
	this.listPanel.mon(this.listPanel, 'add', function() {

				if (Ext.isEmpty(this.popWindow.currentRole.roleid)) {
					Ext.Msg.alert("系统提示", "没有选定角色，请选择角色！");
				} else {
					this.operatorListPanel.store.removeAll();

					this.popWindow.show();
					var orgid = this.popWindow.currentRole.orgid;

					this.popWindow.orgnames.loader.baseParams = {
						'query/dataorgid' : orgid,
						'query/status' : 'running',
						'query/delflag' : 'n'
					};
					this.popWindow.orgnames.setReadOnly(false);
					if (this.popWindow.orgnames.getValue()) {
						this.popWindow.orgnames.reset();

					}
				}
			}, this);
	// 删除角色操作员事件
	this.listPanel.mon(this.listPanel, 'delOperator', function(grid, vals) {
		var mk = new Ext.LoadMask(document.body, {
					msg : '后台正在操作，请稍候！',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			url : "com.zoomlion.hjsrm.frame.rights.role.RoleManage.deleteOperatorRole.biz.ext",
			jsonData : {
				entitys : vals
			},
			success : function(response, action) {
				var result = Ext.decode(response.responseText);
				if (result.success) {
					mk.hide();
					Ext.Msg.alert("系统提示", "移除成功", function() {
								var rs1 = grid.listPanel.getSelectionModel()
										.getSelections();
								grid.listPanel.store.remove(rs1);
							});
				} else {
					Ext.Msg.alert("系统提示", "移除失败");
				}
			}
		})

	}, this);
	/*
	 * 添加角色操作员操作
	 */
	this.popWindow.mon(this.popWindow, 'addOperator', function(selections) {
		if (selections.length > 0) {
			var grid = this.listPanel;
			var win = this.popWindow;
			var roleid = this.popWindow.currentRole.roleid;
			var vals = [];
			Ext.each(selections, function(record) {
						vals[vals.length] = {
							roleid : roleid,
							operatorid : record.get('operatorid')
						}

					}, this);
			var mk = new Ext.LoadMask(document.body, {
						msg : '后台正在操作，请稍候！',
						removeMask : true
					});
			mk.show();
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.addOperatorRole.biz.ext',
				jsonData : {
					operatorrole : vals
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					if (result.success) {
						mk.hide();
						Ext.Msg.alert("系统提示", "添加成功", function() {
									grid.doQuery(roleid);
									win.hide();
								})
					} else {
						mk.hide();
						Ext.Msg.alert("系统提示", "添加失败");
					}
				}
			});
		} else {
			Ext.Msg.alert('提示', '未选择记录,不能保存,请选择至少一条记录')
		}
	}, this)
};

/*
 * 新增角色操作员方法
 */
com.zoomlion.hjsrm.role.OperatorInRoleMgr.prototype.onAdd = function() {
	this.listPanel.fireEvent("add");
};

/*
 * 移除角色操作员方法
 */
com.zoomlion.hjsrm.role.OperatorInRoleMgr.prototype.onDelOperator = function() {
	if (!this.listPanel.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
	} else {
		Ext.Msg.confirm("系统提示", "您确定要移除操作员吗?", function(btnText) {
					if (btnText == "yes") {
						var selOperaotorids = this.listPanel.selModel
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
							this.listPanel.fireEvent("delOperator", this, vals);
						}
					}
				}, this);
	}
};

/*
 * 角色关联到机构
 */
com.zoomlion.hjsrm.role.OperatorInRoleMgr.prototype.onAdd2org = function() {
	var _orgid = this.popWindow.orgnames.getValue();
	var _roleid = this.popWindow.currentRole.roleid;
	var _dataorgid = this.popWindow.currentRole.dataorgid;
	var grid = this.listPanel;
	var win = this.popWindow;
	if (!_orgid) {
		Ext.Msg.alert("系统提示", "请选择机构！");

	} else {

		Ext.Msg.confirm("系统提示", "您确定要将角色关联到所选机构吗?", function(btnText) {
			if (btnText == "no") {
				return;
			} else {

				var mk = new Ext.LoadMask(document.body, {
							msg : '后台正在操作，请稍候！',
							removeMask : true
						});
				mk.show();
				Ext.Ajax.request({
					url : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.saveOperatorRoles.biz.ext',
					jsonData : {
						dataorgid : _dataorgid,
						orgid : _orgid,
						roleid : _roleid
					},
					success : function(response, action) {
						var result = Ext.decode(response.responseText);
						if (result.success) {
							mk.hide();
							Ext.Msg.alert("系统提示", "关联成功", function() {
										grid.doQuery(_roleid);
										win.hide();
									})
						} else {
							mk.hide();
							Ext.Msg.alert("系统提示", "关联失败");
						}
					}
				});

			}
		}, this);

	}

};
