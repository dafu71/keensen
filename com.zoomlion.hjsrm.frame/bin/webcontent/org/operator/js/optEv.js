/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 修改密码策略
 * 创建日期： 2014-9-20
 * 补丁编号： G3_P_20140915_01_249 
 * 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20140915_01_249 吕俊涛   2014-9-20  集团
//
// =================================================================
/******************************************************************
*版权所有： 中联重科环境产业公司
*描    述：  1，在查询条件中，点击'重置'按钮时，所属机构不会清空，也不会带出默认值；2，当某个部门的上级部门不是区域而是分公司时，如果在查询条件的'所属机构'选中了该部门，那么该部门下的操作员查询出来；
*创建日期： 2014-9-20
*补丁编号： G3_P_20140915_01_235
*作    者： 吕俊涛
*******************************************************************/
//==============================修改历史===========================
// 补丁编号                    修改人     日期           区域       备注
// G3_P_20140915_01_235    吕俊涛     2014-9-20    集团      
//
//=================================================================

com.zoomlion.hjsrm.opt.operatorMgr.prototype.destroy = function() {
	this.operAuthWindow.destroy();
	this.operInputWin.destroy();
	this.roleAuthWindow.destroy();
	this.operEditWin.destroy();
	this.optroleMgr.optSelWin.destroy();
	this.optroleMgr.roleSelWin.destroy();
}
com.zoomlion.hjsrm.opt.operatorMgr.prototype.initEvent = function() {
		
		this.buildOperEditWin();
		this.buildOperInputWin();
		this.createRoleAuthWindow();
//		this.createOperAuthTreePanel();
		this.createAuthTreePanel();
		this.createOperAuthWindow();
		
		var o = this.operGridPanel.tbar.dom;
		o.hidden = true;
		
		
		
		
	/**
	 * 操作员查询按钮触发事件处理
	 */
	this.operQueryPanel.mon(this.operQueryPanel, 'query', function(formpanel,
			vals) {
		var store = this.operGridPanel.store;
		delete vals[vals.param];
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.operGridPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	
	/**
	 * 用于操作员管理获取当前操作员参数(empid,operatorid)
	 */
	this.getOperParam = function(win, param) {
		var sel = this.operGridPanel.selModel.getSelected();
		Ext.apply(param, {
					empid : sel.get('empid'),
					operatorid : sel.get('operatorid')
				});
	}
	
	/**
     * 选择角色时获取操作员信息
     */
    this.optroleMgr.roleSelWin.mon(this.optroleMgr.roleSelWin,'getcurrentoperator',this.getOperParam,this);
    
    /**
     * 复制人员角色时获取操作员信息
     */
    this.optroleMgr.optSelWin.mon(this.optroleMgr.optSelWin,'getcurrentoperator',this.getOperParam,this);

	/**
	 * 修改操作员信息
	 */
	this.operGridPanel.mon(this.operGridPanel, 'update',
			function(grid, record) {
				this.operEditWin.show();
				this.operEditWin.loadData(record);
			}, this)
	var _this=this;
	
	this.operQueryPanel.mon(this.operQueryPanel, 'reset', function() {
		_this.operQueryPanel.form.findField("query/orgid").setValue(DATAORGID);
    });
    
	this.operEditForm.mon(this.operEditForm, 'afterload', function(form,data) {
		if(data.invaldate){
			var value=Ext.util.Format.substr(data.invaldate,0,10);
		    this.operEditForm.form.findField("operator/invaldate").setValue(value);
		}
    }, this);

}


/**
 * 新增操作员按钮点击处理
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onAddOper = function() {
	this.operInputWin.show();
}

/**
 * 修改人员按钮点击处理
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onEditEmp = function() {
	this.empGridPanel.onEdit();
}

/**
 * 修改操作员按钮点击处理
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onEditOper = function() {
	this.operGridPanel.onEdit();
}

/**
 * 查看权限按钮点击处理
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onQueryAuth = function() {
	// 保存this
	var me = this;
	var record = this.operGridPanel.selModel.getSelections();
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据,请选择数据行!");
		return;
	}
	if (record.length > 1) {
		Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
		return;
	}
	var tree = me.operAuthTreePanel;
	var loader = tree.getLoader();
	var ret = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
			'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.queryRoleInOperator.biz.ext?'
					+ 'operatorid='+record[0].data.operatorid);
	var content = Ext.decode(ret).data;
	var roleids = [];
	Ext.each(content,function(c){
		roleids.push(c.roleid);
	},this)
	this.operAuthTreePanel.getRootNode().removeAll();
	loader.baseParams={"roleids":roleids};
    this.operAuthTreePanel.getRootNode().reload();
    var mk = new Ext.LoadMask(Ext.getBody(),{
        msg: '正在更新数据，请稍候！', 
        removeMask: true 
    }); 
    mk.show();
    tree.getRootNode().reload(function(){
            });
	mk.hide();
	me.operAuthWindow.show();
}

/**
 * 保存操作员角色信息
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onSaveRoleAuth = function() {
		var grid = this.optroleMgr.optroleGridPanel;
		var store = grid.store;
		var _this = this;
		var record = this.operGridPanel.selModel.getSelections();
		var res = store.getRange();
		var operatorid = record[0].data.operatorid;
		var dataorgid = record[0].data.dataorgid;
		var data = [];
		for (var i = 0; i < res.length; i++) {
			data.push({roleid:res[i].data.roleid,operatorid:operatorid,dataorgid:dataorgid});
		}
		var mk = new Ext.LoadMask(grid.id, {
									msg : '正在保存，请稍候!',
									removeMask : true
								});
		mk.show();
	    Ext.Ajax.request({
             url:'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.saveRoleAuth.biz.ext',
             jsonData:{
             	roleopt:data,
             	operatorid:operatorid
             },
             success:function(resp){
                var ret = Ext.decode(resp.responseText);
                if(ret.success){
                	mk.hide();
                	Ext.Msg.alert("系统提示", "授权成功！",function(){
                		_this.roleAuthWindow.hide();
                	});	
                }else{
                	mk.hide();
                }
             },
             failure: function() { mk.hide(); } 
          });
}


/**
 * 注销操作员按钮点击处理
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onDelOper = function() {
	// 保存this
	var me = this;
	var record = this.operGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	for (var i = 0; i < record.length; i++) {
		if (record[i].data.status == '2') {
			Ext.Msg.alert("系统提示", "操作员--" + record[i].data.userid + "--已经被注销,请重新选择!");
			return;
		}
		if (record[i].data.empcode == 'sysadmin') {
			Ext.Msg.alert("系统提示", "操作员--" + record[i].data.empname + "--不允许注销!");
			return;
		}
		data.push(record[i].data);
	}
	Ext.Msg.confirm("系统提示", "您确定要注销该操作员吗？", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask|| new Ext.LoadMask(Ext.getBody(), {msg : "后台正在操作,请稍候!"	});
			me.requestMask.show();
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.deleteOperBatch.biz.ext',
				jsonData : {
					entitys : data
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '注销操作员成功!', function() {
									this.operGridPanel.refresh();
								}, me);
					} else {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '注销操作员失败!');
					}
				}
			});
		}
	}, this);
}

/**
 * 恢复操作员按钮点击处理(只针对已经注销的操作员)
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onRegain = function(btn, e) {
	// 保存this
	var me = this;
	var record = this.operGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	for (var i = 0; i < record.length; i++) {
		if (record[i].data.status != '2') {
			Ext.Msg.alert("系统提示", "操作员--" + record[i].data.operatorname + "--没有被注销,请重新选择!");
			return;
		}
		if (record[i].data.empstatus == 'leave') {
			Ext.Msg.alert("系统提示", "操作员--" + record[i].data.operatorname + "--对应的员工"+record[i].data.userid+"已离职,请在员工管理中恢复!");
			return;
		}
		data.push(record[i].data);
	}
	Ext.Msg.confirm("系统提示", "您确定要恢复已注销的操作员吗？", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask|| new Ext.LoadMask(Ext.getBody(), {msg : "后台正在操作,请稍候!"	});
			me.requestMask.show();
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.regainOperatorBatch.biz.ext',
				jsonData : {
					entitys : data
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '恢复已注销的操作员成功!', function() {
									this.operGridPanel.refresh();
								}, me);
					} else {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '恢复已注销的操作员失败!');
					}
				}
			});
		}
	}, this);
}

/**
 * 锁定操作员按钮点击处理(已经注销的操作员不可以锁定)
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onLock = function(btn, e) {
	// 保存this
	var me = this;
	var record = this.operGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	for (var i = 0; i < record.length; i++) {
		if (record[i].data.status == '3') {
			Ext.Msg.alert("系统提示", "操作员--" + record[i].data.userid + "--已经锁定,请重新选择!");
			return;
		}
		if (record[i].data.status == '2') {
			Ext.Msg.alert("系统提示", "操作员--" + record[i].data.userid + "--已经注销,请重新选择!");
			return;
		}
		data.push(record[i].data);
	}
	Ext.Msg.confirm("系统提示", "您确定要锁定该操作员吗？", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask|| new Ext.LoadMask(Ext.getBody(), {msg : "后台正在操作,请稍候!"	});
			me.requestMask.show();
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.lockOperBatch.biz.ext',
				jsonData : {
					entitys : data
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '锁定操作员成功!', function() {
									this.operGridPanel.refresh();
								}, me);
					} else {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '锁定操作员失败!');
					}
				}
			});
		}
	}, this);
}

/**
 * 解锁操作员按钮点击处理(只解锁已经锁定的操作员)
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onUnlock = function(btn, e) {
	// 保存this
	var me = this;
	var record = this.operGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	for (var i = 0; i < record.length; i++) {
		if (record[i].data.status != '3') {
			Ext.Msg.alert("系统提示", "操作员--" + record[i].data.userid + "--并没有锁定,请重新选择!");
			return;
		}
		data.push(record[i].data);
	}
	Ext.Msg.confirm("系统提示", "您确定要解锁该操作员吗？", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask|| new Ext.LoadMask(Ext.getBody(), {msg : "后台正在操作,请稍候!"	});
			me.requestMask.show();
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.unlockOperBatch.biz.ext',
				jsonData : {
					entitys : data
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '解锁操作员成功!', function() {
									this.operGridPanel.refresh();
								}, me);
					} else {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '解锁操作员失败!');
					}
				}
			});
		}
	}, this);
}


/**
 * 资源授权处理方法
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onSetResource = function(btn, e) {
	var record = this.operGridPanel.selModel.getSelections();
	if (record.length != 0) {
		if (record.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return;
		} else if(record[0].data.status == '3' || record[0].data.status == '2'){
				Ext.Msg.alert("系统提示", "该操作员已经被锁定或者注销,请重新选择!");
				return;
			} else {
			this.optauthMgr = new com.zoomlion.hjsrm.opt.optAuthMgr();
			this.optauthMgr.initPanel();
			this.optauthMgr.initEvent();
			// 将需要的参数绑定到optauthMgr对象
			this.optauthMgr.operatorid = record[0].get('operatorid');
			this.optauthMgr.dataorgid = record[0].get('dataorgid');
			this.optauthMgr.optAuthWin.show();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
	}
}

/**
 * 角色授权处理方法
 */
com.zoomlion.hjsrm.opt.operatorMgr.prototype.onSetRole = function() {
	var record = this.operGridPanel.selModel.getSelections();
	if (record.length != 0) {
		if (record.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return;
		} else if(record[0].data.status == '3' || record[0].data.status == '2'){
				Ext.Msg.alert("系统提示", "该操作员已经被锁定或者注销,请重新选择!");
				return;
			}else{
			this.roleAuthWindow.show();
			this.optroleMgr.optroleGridPanel.fireEvent('query', this.optroleMgr.optroleGridPanel, {operatorid:record[0].data.operatorid});
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
	}
}


