
/*
 * 角色权限事件
 */
com.zoomlion.hjsrm.role.RolesMgr.prototype.initEvent = function() {
	/*
	 * 查询按钮触发事件处理
	 */
	var _this = this;
	this.queryPanel.mon(this.queryPanel, 'query', function() {
		var _val = this.queryPanel.getForm().getValues() || {};
		this.listPanel.store.baseParams = {
			'role/rolename' : _val.rolename,
			'role/roletype' : _val.roletype,
			'role/rolecode' : _val.rolecode,
			'role/orgid' : _val.orgid == '' ? null : parseInt(_val.orgid),
			'role/sysrole' : _val.sysrole
		};
		this.listPanel.store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	Ext.getCmp('checkroletype').mon(Ext.getCmp('checkroletype'), 'check',
			function(f, c) {
				_this.queryPanel.form.findField("orgid").setReadOnly(c);
			});

	/*
	 * 角色修改事件处理
	 */
	this.listPanel.mon(this.listPanel, 'update', function(gird, record) {
				this.editWindow.show();
				this.editWindow.loadData(record);
			}, this);
	/*
	 * beforeload(数据加载前)事件处理
	 */
	this.editWindow.mon(this.editWindow.activeItem, 'beforeload', function(
					form, data) {
				var baseForm = form.getForm();
				baseForm.findField('rolecode').originalValue = data['rolecode'];
			}, this);

	this.editWindow.mon(this.editWindow.activeItem, 'afterload', function(form,
					data) {
				this.editWindow.form.findField('role/rolecode')
						.setDisabled(true);
			}, this);
	// this.authTreePanel.on('checkchange', function(node, checked) {
	// if(node.isExpanded()){
	// node.collapse();
	// }
	//		
	// }, this.authTreePanel);
};

/*
 * 修改按钮点击处理 @param {Button} btn @param {Event} e
 */
com.zoomlion.hjsrm.role.RolesMgr.prototype.onEdit = function(btn, e) {
	var sels = this.listPanel.getSelectionModel().getSelections();
	if (sels[0].data.dataorgid == '0') {
		Ext.Msg.alert('系统提示', '系统级的角色不允许修改!');
	} else {
		this.listPanel.onEdit();
	}
};

/*
 * 新增按钮点击处理 @param {Button} btn @param {Event} e
 */
com.zoomlion.hjsrm.role.RolesMgr.prototype.onAdd = function(btn, e) {
	this.inputWindow.show();
	var form = this.inputWindow.form;
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.getRoleCode.biz.ext',
		success : function(resp) {
			var res = Ext.decode(resp.responseText);
			code = res.data;
			form.loadRecord(new Ext.data.Record({
						rolecode : code
					}))

		}
	});
}

/*
 * 删除按钮点击处理 @param {Button} btn @param {Event} e
 */
com.zoomlion.hjsrm.role.RolesMgr.prototype.onDel = function(btn, e) {
	var sels = this.listPanel.getSelectionModel().getSelections();
	if (sels[0].data.dataorgid == '0') {
		Ext.Msg.alert('系统提示', '系统级的角色不允许删除!');
	} else {
		this.listPanel.onDel();
	}
}
/*
 * 分配资源按钮点击处理 @param {Button} btn @param {Event} e
 */
com.zoomlion.hjsrm.role.RolesMgr.prototype.onSet = function(btn, e) {
	var tree = this.authTreePanel;
	var sels = this.listPanel.getSelectionModel().getSelections();
	if (sels && sels.length != 0) {
		if (sels.length == 1) {
			var row = sels[0];
			this.authWindow.show();
			var mk = new Ext.LoadMask(tree.id, {
						msg : '正在加载数据，请稍候...',
						removeMask : true
					});
			mk.show();
			var loader = tree.getLoader();
			loader.baseParams['roleid'] = row.get("roleid");
			tree.getRootNode().reload();
			tree.getRootNode().deepExpand(false, function() {
				tree.collapseAll();
				mk.hide();
				}, this);
		} else {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!", function() {
						return false;
					});
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!", function() {
					return false;
				});
	}

}

/**
 * 收起事件
 */
com.zoomlion.hjsrm.role.RolesMgr.prototype.doCollapseAll = function() {
	this.authTreePanel.collapseAll();
}

/**
 * 展开事件
 */
com.zoomlion.hjsrm.role.RolesMgr.prototype.doExpandAll = function() {
	this.authTreePanel.expandAll();
}

com.zoomlion.hjsrm.role.RolesMgr.prototype.onReset = function() {
	this.authWindow.hide();
}
com.zoomlion.hjsrm.role.RolesMgr.prototype.onAuthSave = function() {
	var _this = this.authTreePanel;
	var win = this.authWindow;
	var roleid = _this.loader.baseParams.roleid;
	var checkeds = [];
	var checks = _this.getChecked();
	for (var i = 0; i < checks.length; i++) {
		var resid = checks[i].attributes['resid'];
		if (resid != null && resid != '0') {
			checkeds.push(resid);
		}
	}
	var mk = new Ext.LoadMask(this.authWindow.id, {
				msg : '正在保存设置，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.saveRoleAuthorizedRs.biz.ext',
		params : {
			'roleid' : roleid,
			'checkeds' : checkeds
		},
		success : function(response, action) {
			var result = Ext.decode(response.responseText);
			if (result.success) {

				Ext.MessageBox.alert("提示", "设置成功!", function() {
							win.hide();
						});
			}
		},
		callback : function() {
			mk.hide();
		}
	});
}