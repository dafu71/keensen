/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 修改密码策略 创建日期： 2014-9-18 补丁编号： G3_P_20140915_01_249 作 者：
 * 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 区域 备注
// G3_P_20140915_01_249 吕俊涛 2014-9-18 集团
//
// =================================================================
/*******************************************************************************
 * 版权所有： 描 述： 员工管理事件与方法处理 创建日期：2013/01/17 作 者： 陈今伟
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 归属 备注
// 
// =================================================================
com.zoomlion.hjsrm.org.employeeMgr.prototype.destroy = function() {
	this.empInputWin.destroy();
	this.empEditWin.destroy();
}
com.zoomlion.hjsrm.org.employeeMgr.prototype.initEvent = function() {
	this.buildEmpEditWin();
	this.buildEmpInputWin();
	var o = this.empGridPanel.tbar.dom;
	// o.hidden = true;
	/**
	 * @description 查询按钮触发事件处理
	 */
	this.empQueryPanel.mon(this.empQueryPanel, 'query', function() {
		var vals = this.empQueryPanel.form.getValues();
		var store = this.empGridPanel.store;
		delete vals[vals.param];
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.empGridPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	/**
	 * @description onEdit触发修改事件处理
	 */
	this.empGridPanel.mon(this.empGridPanel, 'update', function(gird, record) {
				this.empEditWin.show();
				this.empEditForm.loadData(record);
			}, this);

	// this.empEditForm.mon(this.empEditForm, 'afterload', function(gird, data)
	// {
	// var cm = this.empEditForm.form.findField('emp/bizorgids');
	// cm.loader.baseParams = {
	// 'query/dataorgid' : data.mainorgid,
	// 'query/status' : 'running',
	// 'query/delflag' : 'n'
	// };
	// cm.setReadOnly(false);
	// }, this);
	this.empInpuPanel.mon(this.empInpuPanel, 'beforesave', function() {
				var userId = this.empInpuPanel.form.findField('emp/userid');
				var password = this.empInpuPanel.form.findField('emp/password');
				var invaldate = this.empInpuPanel.form
						.findField('emp/invaldate');

				if (userId.getValue() != null && userId.getValue() != "") {
					if (Ext.isEmpty(password.getValue())) {
						Ext.Msg.alert("系统提示", "当【登录帐号】不为空时，【密码】不能为空，请检查...!");
						return false;
					}
					if (Ext.isEmpty(invaldate.getValue())) {
						Ext.Msg.alert("系统提示",
								"当【登录帐号】不为空时，【帐号有效日期】不能为空，请检查...!");
						return false;
					}
					return true;
				} else {
					return true;
				}
			}, this);
};

/**
 * 新增按钮处理
 */
com.zoomlion.hjsrm.org.employeeMgr.prototype.onInput = function(btn, e) {
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
				if (param.orgid == param.dataorgid) {
					form.loadRecord(new Ext.data.Record({
								orgid : param['dataorgid'],
								empcode : code
							}));
				} else {
					form.loadRecord(new Ext.data.Record({
								orgid : param['dataorgid'],
								bizorgids : param['orgid'],
								empcode : code
							}));
				}
			} else {
				form.loadRecord(new Ext.data.Record({
							empcode : code
						}))
			}
		}
	});
};

/**
 * 禁用按钮处理
 */
com.zoomlion.hjsrm.org.employeeMgr.prototype.onDelete = function(btn, e) {
	// 保存this
	var me = this;
	var record = this.empGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	if (record.length > 1) {
		Ext.Msg.alert("系统提示", "请选择一行数据，暂不支持批量禁用!");
		return;
	}
	for (var i = 0; i < record.length; i++) {
		if (record[i].data.empstatus == 'leave') {
			Ext.Msg.alert("系统提示", "员工--" + record[i].data.empname
							+ "--已经离职,请重新选择!");
			return;
		}
		if (record[i].data.empcode == 'sysadmin') {
			Ext.Msg.alert("系统提示", "员工--" + record[i].data.empname + "--不允许禁用!");
			return;
		}
		data.push(record[i].data);
	}

	Ext.Msg.confirm("系统提示", "您确定该员工已经离职吗?", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			me.requestMask.show();
			Ext.Ajax.request({
						// url :
						// 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.discardedEmpBatch.biz.ext',
						url : 'com.keensen.ump.base.organduser.modiStaffState.biz.ext',
						// jsonData : {
						// entitys : data
						// },
						jsonData : {
							newState : 'X',
							staffId : record[0].data.empid
						},
						success : function(resp) {
							var ret = Ext.decode(resp.responseText);
							if (ret.success) {
								me.requestMask.hide();
								Ext.Msg.alert('系统提示', '禁用员工成功!', function() {
											this.empGridPanel.refresh();
										}, me);
							} else {
								me.requestMask.hide();
								Ext.Msg.alert('系统提示', '禁用员工失败!');
							}
						}
					});
		}
	}, this);
};

/**
 * 启用人员按钮点击处理
 */
com.zoomlion.hjsrm.org.employeeMgr.prototype.onRegainEmp = function() {
	// 保存this
	var me = this;
	var record = this.empGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	if (record.length > 1) {
		Ext.Msg.alert("系统提示", "请选择一行数据，暂不支持批量启用!");
		return;
	}
	for (var i = 0; i < record.length; i++) {
		if (record[i].data.empstatus == 'on') {
			Ext.Msg.alert("系统提示", "员工--" + record[i].data.empname
							+ "--没有离职,请重新选择!");
			return;
		}
		data.push(record[i].data);
	}
	Ext.Msg.confirm("系统提示", "您确定要启用该员工吗?", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			me.requestMask.show();
			Ext.Ajax.request({
						// url :
						// 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.regainEmpBatch.biz.ext',
						url : 'com.keensen.ump.base.organduser.modiStaffState.biz.ext',
						// jsonData : {
						// entitys : data
						// },
						jsonData : {
							newState : 'A',
							staffId : record[0].data.empid
						},
						success : function(resp) {
							var ret = Ext.decode(resp.responseText);
							if (ret.success) {
								me.requestMask.hide();
								Ext.Msg.alert('系统提示', '启用员工成功!', function() {
											this.empGridPanel.refresh();
										}, me);
							} else {
								me.requestMask.hide();
								Ext.Msg.alert('系统提示', '启用员工失败!');
							}
						}
					});
		}
	}, this);
}

/**
 * 修改按钮处理
 */
com.zoomlion.hjsrm.org.employeeMgr.prototype.onEdit = function() {
	this.empGridPanel.onEdit();
};

com.zoomlion.hjsrm.org.employeeMgr.prototype.onResetPassword = function() {
	var me = this;
	var record = this.empGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	if (record.length > 1) {
		Ext.Msg.alert("系统提示", "请选择一行数据，暂不支持批量启用!");
		return;
	}

	Ext.Msg.confirm("系统提示", "您确定要重置该员工密码吗?", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			me.requestMask.show();
			Ext.Ajax.request({
						
						url : 'com.keensen.ump.base.organduser.resetStaffPassword.biz.ext',
						jsonData : {
							newPassword : '888888',
							staffId : record[0].data.empid
						},
						success : function(resp) {
							var ret = Ext.decode(resp.responseText);
							if (ret.success) {
								me.requestMask.hide();
								Ext.Msg.alert('系统提示', '重置密码成功!', function() {
											this.empGridPanel.refresh();
										}, me);
							} else {
								me.requestMask.hide();
								Ext.Msg.alert('系统提示', '重置密码失败!');
							}
						}
					});
		}
	}, this);
}

com.zoomlion.hjsrm.org.employeeMgr.prototype.onLogout = function() {
	var me = this;
	var record = this.empGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	if (record.length > 1) {
		Ext.Msg.alert("系统提示", "请选择一行数据，暂不支持批量登出!");
		return;
	}

	Ext.Msg.confirm("系统提示", "您确定要登出该员工吗?", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			me.requestMask.show();
			Ext.Ajax.request({
						
						url : 'com.keensen.ump.base.organduser.logoutByUserId.biz.ext',
						jsonData : {
							userId : record[0].data.empcode
						},
						success : function(resp) {
							var ret = Ext.decode(resp.responseText);
							if (ret.success) {
								me.requestMask.hide();
								Ext.Msg.alert('系统提示', '登出成功!', function() {
											this.empGridPanel.refresh();
										}, me);
							} else {
								me.requestMask.hide();
								Ext.Msg.alert('系统提示', '登出失败!');
							}
						}
					});
		}
	}, this);
};