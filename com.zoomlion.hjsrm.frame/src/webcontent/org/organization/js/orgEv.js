com.zoomlion.hjsrm.org.OrgMgr.prototype.destroy = function() {
	this.empMgr.empEditWin.destroy();
	this.empMgr.empInputWin.destroy();
	this.deptMgr.deptInputWin.destroy();
	this.deptMgr.deptEditWin.destroy();
}

/*
 * 事件与方法处理
 */
com.zoomlion.hjsrm.org.OrgMgr.prototype.initEvent = function() {
	var _this = this;
	this.orgTree.getRootNode().expand(false, false, function() {
				_this.orgTree.getRootNode().childNodes[0].expand();
			});
	var o = this.deptMgr.deptGridPanel.tbar.dom;
	o.hidden = true;
	// var o2 = this.empMgr.empGridPanel.tbar.dom;
	// o2.hidden = true;
	// 点击树节点查询事件
	this.orgTree.mon(this.orgTree, 'click', function(node) {

				// TODO查询当前激活tab页的查询事件
				var activeTab = this.orgMgrPanel.getActiveTab();
				var ac = {
					'机构管理' : function(_this) {
						// 控制面板上的增删改
						var o = _this.deptMgr.deptGridPanel.tbar.dom;
						if (node.attributes['dataorgid'] == 81) {// 非供应商，不能增删改
							o.hidden = true;

						} else {
							o.hidden = false;

						}
						var _qp = _this.deptMgr.deptQueryPanel;
						// 查询某机构下的子机构
						with (_qp.form) {
							reset();
							var org = findField('org');
							if (node.text) {
								org.setValue(node.attributes[org.valueField],
										node.text);
								findField('orgid')
										.setValue(node.attributes['orgid']);
							}
						}
						_qp.queryButton.handler.call(_qp);

					},
					'员工管理' : function(_this) {
						// 控制面板上的增删改
						var o = _this.empMgr.empGridPanel.tbar.dom;
						if (node.attributes['dataorgid'] == 81) {// 非供应商，不能增删改
							o.hidden = true;

						} else {
							o.hidden = false;

						}
						// 查询某机构下的人员
						var _qp = _this.empMgr.empQueryPanel;
						with (_qp.form) {
							reset();
							if (node.text) {
								var org = findField('org');
								org.setValue(node.attributes[org.valueField],
										node.text);
								findField('query/orgid')
										.setValue(node.attributes['orgid']);
							}
						}
						_qp.queryButton.handler.call(_qp);
					}
				}
				ac[activeTab.title](this);
			}, this);

	// 增加修改事件
	this.orgTreeMenu.mon(this.orgTreeMenu, 'dbclick', function(gird, record) {
				this.onModifyOrg();
			}, this);

	this.orgMgrPanel.mon(this.orgMgrPanel, 'tabchange', function(ac, tabPanel) {
				var activeTab = this.orgMgrPanel.getActiveTab();
				var node = this.orgTree.getSelectNode();

				var ac = {
					'机构管理' : function(_this) {
						// 控制面板上的增删改
						var o = _this.deptMgr.deptGridPanel.tbar.dom;
						if (!!(node.attributes)) {
							if (node.attributes['dataorgid'] == 81) {// 非供应商，不能增删改
								o.hidden = true;

							} else {
								o.hidden = false;

							}
						}else{
							o.hidden = true;
						}
						var _qp = _this.deptMgr.deptQueryPanel;
						// 查询某机构下的子机构
						with (_qp.form) {
							reset();
							var org = findField('org');
							if (node.text) {
								org.setValue(node.attributes[org.valueField],
										node.text);
								findField('orgid')
										.setValue(node.attributes['orgid']);
							}
						}
						_qp.queryButton.handler.call(_qp);
					},
					'员工管理' : function(_this) {
						// 控制面板上的增删改
						var o = _this.empMgr.empGridPanel.tbar.dom;
						if (!!(node.attributes)){

							if (node.attributes['dataorgid'] == 81) {// 非供应商，不能增删改
								o.hidden = true;

							} else {
								o.hidden = false;

							}
						}else{
							o.hidden = true;
						}
						// 查询某机构下的人员
						var _qp = _this.empMgr.empQueryPanel;
						with (_qp.form) {
							reset();
							if (node.text) {
								var org = findField('org');
								org.setValue(node.attributes[org.valueField],
										node.text);
								findField('query/orgid')
										.setValue(node.attributes['orgid']);
							}
						}
						_qp.queryButton.handler.call(_qp);
					}
				}
				ac[activeTab.title](this);
			}, this);

	/*
	 * 修改成功后刷新操作
	 */
	this.deptMgr.deptEditWin.mon(this.deptMgr.deptEditWin.activeItem,
			'aftersave', function(panel) {
				var vals = panel.form.getValues();
				if ((!vals['org/parentorgid'])
						|| (vals['org/parentorgid'] == '0')) {
					this.orgTree.getRootNode().reload();
					this.orgTree.getRootNode().expand(true);
				} else {
					var node = this.orgTree.getNodeById(vals['org/orgid']);
					this.orgTree.refreshNodeById(vals['org/parentorgid']);
					if (node && node.parentNode) {
						this.orgTree.refreshNodeById(node.parentNode.id);
					}

				}
				return true;
			}, this);

	/*
	 * 机构新增成功后刷新操作
	 */
	this.deptMgr.deptInputWin.mon(this.deptMgr.deptInputWin.activeItem,
			'aftersave', function(panel) {
				var vals = panel.form.getValues();
				if ((!vals['org/parentorgid'])
						|| (vals['org/parentorgid'] == '0')) {
					this.orgTree.getRootNode().reload();
					this.orgTree.getRootNode().expand(true);
				} else {
					this.orgTree.refreshNodeById(vals['org/parentorgid']);
				}
				this.deptMgr.deptInputWin.form.findField('parentorgid')
						.setDisabled(false);
				return true;
			}, this);

	/*
	 * 机构删除后操作
	 */
	this.deptMgr.deptInputWin.mon(this.deptMgr.deptInputWin.activeItem,
			'afterdel', function(panel) {
				var vals = panel.form.getValues();
				this.orgTree.refreshNodeById(vals['org/parentorgid']);
				return true;
			}, this);

	var setParam = function(win, param) {
		var node = this.orgTree.getSelectNode();
		Ext.apply(param, node.attributes)
	};

	this.empMgr.empInputWin.mon(this.empMgr.empInputWin, 'beforeadd', setParam,
			this);

	this.deptMgr.deptInputWin.mon(this.deptMgr.deptInputWin, 'beforeadd',
			setParam, this);

	// 监听树右键菜单
	this.orgTree.mon(this.orgTree, 'contextmenu', function(node) {
				var o = this.orgTreeMenu.items.items;
				if (node.attributes['dataorgid'] == 81) {// 非供应商，不能增删改
					o[0].setDisabled(true);
					o[1].setDisabled(true);
					o[2].setDisabled(true);
					o[3].setDisabled(true);

				} else {
					o[0].setDisabled(false);
					o[1].setDisabled(false);
					o[2].setDisabled(false);
					o[3].setDisabled(false);
				}

			}, this);

};

/*
 * 新增方法
 */

/**
 * {iconCls : 'add-org', text : '新增机构',handler:this.onAddOrg}, {iconCls :
 * 'delete-org',text : '删除机构',handler:this.onDelOrg}, {iconCls :
 * 'modify-org',text : '修改机构',handler:this.onModifyOrg}, {iconCls : 'add-emp',
 * text : '新增人员',handler:this.onAddEmp}, {iconCls : 'append-emp',text :
 * '添加人员',handler:this.onAppendEmp}, {iconCls : 'reflesh', text :
 * '刷新',handler:this.onReflesh}
 */
com.zoomlion.hjsrm.org.OrgMgr.prototype.onAddOrg = function() {
	this.deptMgr.onAdd();
};
/*
 * 删除方法
 */
com.zoomlion.hjsrm.org.OrgMgr.prototype.onDelOrg = function() {
	var me = this;
	Ext.Msg.confirm('提示', '您确定要注销该机构吗?', function(text) {
		if (text == 'yes') {
			var selNode = this.orgTree.getSelectNode();
			if (selNode) {
				if (selNode.hasChildNodes()) {
					Ext.Msg.alert("系统提示", "该机构存在子机构,请先注销子机构!");
					return;
				}
				var orgs = [];
				orgs.push({
							orgid : selNode.attributes['orgid'],
							parentorgid : selNode.attributes['parentorgid']
						});
				me.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "后台正在操作,请稍候!"
								});
				me.requestMask.show();
				Ext.Ajax.request({
					url : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.removeOrganizations.biz.ext',
					jsonData : {
						entitys : orgs
					},
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							me.requestMask.hide();
							Ext.Msg.alert('系统提示', '注销机构成功!', function() {
								var pid = selNode.attributes.parentorgid;
								if (!pid || pid == '0') {
									this.orgTree.getRootNode().reload();
									this.orgTree.getRootNode().expand(true);
								} else {
									this.orgTree
											.selectPath(selNode.attributes.orgseq);
									this.orgTree.refreshNodeById(pid);
								}
								me.requestMask.hide();
							}, me);
						} else {
							me.requestMask.hide();
						}
					}
				});
			}
		}
	}, this);
};

/*
 * 修改方法
 */
com.zoomlion.hjsrm.org.OrgMgr.prototype.onModifyOrg = function() {
	var deptGridPanel = this.deptMgr.deptGridPanel;
	var selNode = this.orgTree.getSelectNode();
	this._treeSelectNode = selNode;
	var record = new deptGridPanel.store.recordType(selNode.attributes);
	deptGridPanel.fireEvent('update', deptGridPanel, record);

};
com.zoomlion.hjsrm.org.OrgMgr.prototype.onAddEmp = function() {
	this.empInputWin = this.empMgr.empInputWin;
	this.empInputWin.show();
	var form = this.empInputWin.items.get(0).getForm();
	form.reset();
	var param = {};
	this.empInputWin.fireEvent('beforeadd', this.empInputWin, param);
	var form = this.empInputWin.form;
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.getEmpCode.biz.ext',
		success : function(resp) {
			var res = Ext.decode(resp.responseText);
			code = res.data;
			if (param.orgid) {
				form.loadRecord(new Ext.data.Record({
							orgid : param['orgid'],
							empcode : code
						}))
			} else {
				form.loadRecord(new Ext.data.Record({
							empcode : code
						}))
			}
		}
	});
};
com.zoomlion.hjsrm.org.OrgMgr.prototype.onReflesh = function() {
	var selNode = this.orgTree.getSelectNode();
	this.orgTree.refreshNodeById(selNode.id);
};
com.zoomlion.hjsrm.org.OrgMgr.prototype.onAddRootOrg = function() {
	var win = this.deptMgr.deptInputWin;
	win.show();
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.getOrgCode.biz.ext',
		success : function(resp) {
			var res = Ext.decode(resp.responseText);
			code = res.data;
			win.form.loadRecord(new Ext.data.Record({
						orgcode : code,
						parentorgid : '0'
					}))
			win.form.findField('parentorgid').setDisabled(true);
		}
	});

};
