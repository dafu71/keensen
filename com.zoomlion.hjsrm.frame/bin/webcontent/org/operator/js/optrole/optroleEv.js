/******************************************************************
*版权所有： 中联重科环境产业公司
*描    述：  
*创建日期： 2014-9-17
*补丁编号： G3_P_20140915_01_241
*作    者： 吕俊涛
*******************************************************************/
//==============================修改历史===========================
// 补丁编号                    修改人     日期           区域       备注
// G3_P_20140915_01_241    吕俊涛     2014-9-17    集团      
//
//=================================================================
com.zoomlion.hjsrm.opt.optroleMgr.prototype.initEvent = function() {
	/**
	 * 查询当前人员对应的角色
	 */
	this.optroleGridPanel.mon(this.optroleGridPanel, 'query', function(grid,
					vals) {
				var store = this.optroleGridPanel.store;
				store.baseParams = {
					operatorid : vals['operatorid']
				}
				store.load();
			}, this);
}
/**
 * 查询当前人员(emp)所能添加的角色
 */
com.zoomlion.hjsrm.opt.optroleMgr.prototype.onQueryRole = function() {
	var currentOperator = {};
	with (this.roleSelWin) {
		var _rolename = rolename.getValue();
		var _orgid = orgid.getValue();
		Ext.apply(currentOperator, {
					'role/rolename' : _rolename,
					'role/orgid' : _orgid
				})
	}
	this.roleSelWin.fireEvent('getcurrentoperator', this.role, currentOperator);
	var store = this.roleSelListPanel.store;
	store.baseParams = currentOperator;
	store.load({
				params : {
					"pageCond/begin" : 0,
					"pageCond/length" : this.roleSelListPanel.pagingToolbar.pageSize
				}
			});
}

/**
 * 查询当前人员(emp)所能添加的角色
 */
com.zoomlion.hjsrm.opt.optroleMgr.prototype.onQueryOpt = function() {
	var currentOperator = {
					'emp/empname' : this.optSelWin.empname.getValue(),
					'emp/orgseq' : this.optSelWin.orgseq.getValue()
				};
	
	this.optSelWin.fireEvent('getcurrentoperator', this.role, currentOperator);
	var store = this.optSelListPanel.store;
	store.baseParams = currentOperator;
	store.load({
				params : {
					"pageCond/begin" : 0,
					"pageCond/length" : this.optSelListPanel.pagingToolbar.pageSize
				}
			});
}
/**
 * 新增人员对应的角色
 */
com.zoomlion.hjsrm.opt.optroleMgr.prototype.onRoleSelAdd = function() {
	this.onQueryRole();
	this.roleSelWin.show();
}

/**
 * 新增人员对应的角色
 */
com.zoomlion.hjsrm.opt.optroleMgr.prototype.onOptSelAdd = function() {
	this.onQueryOpt();
	this.optSelWin.show();
}
/**
 * 保存当前人员的角色 save click event handler
 */
com.zoomlion.hjsrm.opt.optroleMgr.prototype.onRoleSel = function() {
	var me = this;
	var selections = this.roleSelListPanel.selModel.getSelections();
	if (selections.length > 0) {
		var currentOperator = {};
		this.roleSelWin.fireEvent('getcurrentoperator', this, currentOperator);
		me.optroleGridPanel.store.add(selections);
		me.roleSelWin.hide();
		with (me.roleSelWin) {
			rolename.reset();
			orgid.reset();
			orgtree.reset();
		}
	} else {
		Ext.Msg.alert('提示', '您未选择记录,请选择至少一条数据行!')
	}
}

com.zoomlion.hjsrm.opt.optroleMgr.prototype.onOptSel = function() {
	var me = this;
	var selections = this.optSelListPanel.selModel.getSelections();
	if (selections.length == 0) {
		Ext.Msg.alert("系统提示", "您未选择记录,请选择至少一条数据行");
		return;
	}
	var store = me.optroleGridPanel.store;
	var userids = [];
	Ext.each(selections, function(record) {
				userids.push(record.get('userid'));
			}, this);
	Ext.Ajax.request({
		url : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.queryRolesByUserIds.biz.ext',
		jsonData : {
			userids : userids
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var records = new Array();
				Ext.each(ret.data, function(record) {
							var temp = new Ext.data.Record(record);
							if (store.find("roleid", temp.get('roleid')) == -1) {
								records.push(temp);
							}
						}, this);
				store.add(records);
				me.optSelWin.hide();
				with (me.optSelWin) {
					empname.reset();
					orgid.reset();
					orgtree.reset();
				}
			}
		}
	});

}

/*
 * 分配资源按钮点击处理 @param {Button} btn @param {Event} e
 */
com.zoomlion.hjsrm.opt.optroleMgr.prototype.onSet = function(btn, e) {
	var tree = this.authTreePanel;
	var sels = this.optroleGridPanel.getSelectionModel().getSelections();
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
com.zoomlion.hjsrm.opt.optroleMgr.prototype.doCollapseAll = function() {
	this.authTreePanel.collapseAll();
}

/**
 * 展开事件
 */
com.zoomlion.hjsrm.opt.optroleMgr.prototype.doExpandAll = function() {
	this.authTreePanel.expandAll();
}

com.zoomlion.hjsrm.opt.optroleMgr.prototype.onReset = function() {
	this.authWindow.hide();
}
com.zoomlion.hjsrm.opt.optroleMgr.prototype.onAuthSave = function() {
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
/**
 * 删除人员对应的角色
 */
com.zoomlion.hjsrm.opt.optroleMgr.prototype.onEmpRoleDel = function() {
	var _this = this.optroleGridPanel;
	var rows = _this.getSelectionModel().getSelections();
	if (rows && rows.length != 0) {
		if (rows.length >= 1) {
			_this.store.remove(rows);
		}
	}
}
